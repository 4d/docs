---
id: scheduler
title: Backups periódicos
---

# Backups periódicos

The `Scheduler` class is the public entry point for the **automated embedding recalculation** service. It maintains a background task that runs the embedding pipeline (see [Process](Process.md)) at a configured interval or a fixed daily time, guarantees that **at most one** recalculation batch runs at a time, and exposes runtime status for administration and monitoring interfaces.

It is a **singleton**, accessed through `cs.EmbeddingStudio.Scheduler.me`.

The scheduler runs two named workers:

| Worker                     | Rol                                                                                                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `EmbeddingStudioScheduler` | Background loop that re-reads the config each cycle, computes the next run and fires when due.                                                  |
| `EmbeddingStudio`          | Execution worker that runs one recalculation batch (shared with the Studio UI, so scheduled and manual runs are serialized). |

## Configuración

The configuration lives under the `scheduler` key of `Settings/embeddings.json`:

```json
{
  "scheduler": {
    "mode": "interval",
    "intervalHours": 3,
    "startFrom": "reference",
    "startReference": "2026-09-02T14:00:00",
    "dailyTime": "00:00"
  }
}
```

| Llave            | Tipo    | Values / range                            | Descripción                                                                                                                                                                                                                                                          |
| ---------------- | ------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`           | Text    | `"never"` \| `"interval"` \| `"daily"`    | Scheduling mode. Absent/unknown ⇒ `never` (no automatic run).                                                                                                                                                     |
| `intervalHours`  | Integer | `1`..`24` | Interval mode only. Out-of-range ⇒ default `3`.                                                                                                                                                                                      |
| `startFrom`      | Text    | `"reference"` \| `"lastExecution"`        | Interval mode only. Anchor of the interval (see below). Anything other than `"lastExecution"` — including the legacy `"now"` — is normalized to `reference`. Default `reference`. |
| `startReference` | Text    | `"YYYY-MM-DDThh:mm:ss"`                   | Interval mode with `startFrom = "reference"`. Fixed instant the interval counts from. Absent ⇒ the moment the scheduler was armed, then the current instant.                                                         |
| `dailyTime`      | Text    | `"HH:MM"`                                 | Daily mode only. Time of day for the recalculation. Default `"00:00"`.                                                                                                                                               |

**Interval anchoring (`startFrom`)**

- `reference` — **fixed rate**: the interval is anchored on the fixed `startReference` instant, so the slots do not drift whatever a run's duration is. Slots are advanced by `intervalHours` until the first one strictly after now. When `startReference` is absent (a fresh or legacy config), the anchor falls back to the moment the scheduler was armed (`start()`), then to the current instant.
- `lastExecution` — **fixed delay**: the interval is anchored on the last completed recalculation. If the elapsed time since the last run already exceeds the interval (e.g. after a restart), the run is triggered immediately. If there is no prior run, it runs immediately.

The effective configuration is read from the file on **every loop cycle**, so changes take effect without restarting the scheduler.

## Starting the scheduler

Configuring a `mode` is **not enough**: nothing runs until the scheduler is started. There are two ways to get there, and which one applies depends on a single option of your host database.

### 1. Automatic — let the host database start it

In the host database, open **Settings > Security** and check **"Execute 'On Host Database Event' method of the components"** (it is *unchecked* by default, for security reasons).

With this option on, 4D Embedding Studio starts the scheduler by itself when the host database opens, and stops it when the host database closes. There is nothing else to write.

Use [`autoStart()`](#autostart) to check whether the option is on:

```4d
If (Not(cs.EmbeddingStudio.Scheduler.me.autoStart()))
	// the option is off — I must start the scheduler myself
	cs.EmbeddingStudio.Scheduler.me.start()
End if
```

### 2. Manual — start it from your own code

If you prefer to leave the option off, the scheduler never starts on its own. Call [`start()`](#start) from wherever it suits you — typically the host `On Startup` or `On Server Startup` database method — and [`stop()`](#stop) when the database closes (`On Exit` / `On Server Shutdown`):

```4d
// Host "On Server Startup"
cs.EmbeddingStudio.Scheduler.me.start()

// Host "On Server Shutdown"
cs.EmbeddingStudio.Scheduler.me.stop()
```

> In client/server, arm the scheduler from `On Server Startup`, not from `On Startup`:
> `On Startup` runs on every remote client, and the scheduler state is per machine — each
> client would arm its own loop and run its own batches. If you do call [`start()`](#start)
> from `On Startup` (single-user setups), guard it with
> `If (Application type#4D Remote mode)`.

`start()` is idempotent, so calling it from several places is harmless.

### Checking that it really runs

[`isStarted()`](#isstarted) tells you whether the background loop is alive right now — the answer to "is my schedule actually being watched?":

```4d
var $s:=cs.EmbeddingStudio.Scheduler.me.status()
If ($s.enabled && Not($s.started))
	ALERT("A schedule is configured but the scheduler is not started.")
End if
```

## Funciones

### start()

**start**() : Boolean

Arms the scheduler and starts the background loop worker if it is not already running. Idempotent — calling it again while already armed simply refreshes the "start from now" anchor.

| Resultado | Tipo    | Descripción                    |
| --------- | ------- | ------------------------------ |
| resultado | Boolean | Always `True`. |

```4d
cs.EmbeddingStudio.Scheduler.me.start()
```

### stop()

**stop**()

Disarms the scheduler and stops the background loop worker. A recalculation batch already in progress is **not** interrupted — it finishes normally (use [`cancel()`](#cancel) to request an early stop).

```4d
cs.EmbeddingStudio.Scheduler.me.stop()
```

### cancelado()

**cancel**()

Requests a **cooperative** cancel of the batch currently running. The running batch is never force-killed; it stops gracefully between two chunks. Has no effect if no batch is running.

```4d
cs.EmbeddingStudio.Scheduler.me.cancel()
```

### force()

**force**() : Object

Forces a recalculation **now**, regardless of the schedule. It honors the single-batch rule: if a batch is already running, the forced trigger is skipped (and logged). Non-blocking — the run happens on the execution worker.

| Resultado | Tipo   | Descripción                                           |
| --------- | ------ | ----------------------------------------------------- |
| resultado | Object | The current [status](#status) object. |

```4d
var $status:=cs.EmbeddingStudio.Scheduler.me.force()
```

### status()

**status**() : Object

Returns the current scheduler status, without any input parameter — suitable for administration and monitoring displays.

| Resultado | Tipo   | Descripción                                          |
| --------- | ------ | ---------------------------------------------------- |
| resultado | Object | See [Status object](#status-object). |

```4d
var $s:=cs.EmbeddingStudio.Scheduler.me.status()
If ($s.running)
	ALERT("A recalculation is running since "+$s.batchStart)
End if
```

#### Objeto estado

| Llave                  | Tipo         | Descripción                                                                                                                                                                                                       |
| ---------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`              | Boolean      | `False` when `mode = "never"`.                                                                                                                                                                    |
| `mode`                 | Text         | Effective mode (`never` \| `interval` \| `daily`).                                                                                                                             |
| `armed`                | Boolean      | `True` when the background loop is armed (after `start()`, until `stop()`).                                                                                                    |
| `running`              | Boolean      | `True` while a recalculation batch is in progress.                                                                                                                                                |
| `batchStart`           | Text \| Null | ISO timestamp of the running batch start (`Null` when idle).                                                                                                                   |
| `lastExecution`        | Text \| Null | ISO timestamp of the last completed run (`Null` if none yet). Restored from the persisted history after a restart, so it survives the loss of in-memory state. |
| `lastRunBeforeRestart` | Boolean      | `True` when `lastExecution` was recovered from the history after a restart rather than produced by a run in the current session.                                                                  |
| `nextRun`              | Text \| Null | ISO timestamp of the next scheduled run (`Null` in `never` mode).                                                                                                              |
| `lastResult`           | Text \| Null | Result of the last trigger: `started` \| `skipped` \| `completed` \| `failed`.                                                                                                    |
| `error`                | Text \| Null | Error summary when the last run failed (safe for admin display), else `Null`.                                                                                                  |
| `started`              | Boolean      | `True` when the background loop is really alive (see [`isStarted()`](#isstarted)).                                                                                             |
| `autoStart`            | Boolean      | `True` when the host database starts the scheduler by itself (see [`autoStart()`](#autostart)).                                                                                |

### isStarted()

**isStarted**() : Boolean

Tells whether the scheduler is **effectively running**, i.e. whether its background loop is alive at this very moment. Unlike the `armed` flag of the [status](#status-object), it reflects reality: if the loop was never started, or was killed, the result is `False`.

| Resultado | Tipo    | Descripción                                               |
| --------- | ------- | --------------------------------------------------------- |
| resultado | Boolean | `True` when the background loop is alive. |

```4d
If (Not(cs.EmbeddingStudio.Scheduler.me.isStarted()))
	cs.EmbeddingStudio.Scheduler.me.start()
End if
```

### autoStart()

**autoStart**() : Boolean

Tells whether the host database authorizes 4D Embedding Studio to start itself, i.e. whether the **"Execute 'On Host Database Event' method of the components"** option is checked in the host **Settings > Security** (see [Starting the scheduler](#starting-the-scheduler)).

- `True` — the scheduler starts with the host database and stops with it. You have nothing to call.
- `False` — nothing starts automatically: your code must call [`start()`](#start) and [`stop()`](#stop).

The answer is read from the host structure settings. When they cannot be read, the result is `False` — the safe answer, since starting an already-started scheduler is harmless.

| Resultado | Tipo    | Descripción                                                          |
| --------- | ------- | -------------------------------------------------------------------- |
| resultado | Boolean | `True` when the host starts the scheduler by itself. |

```4d
var $auto:=cs.EmbeddingStudio.Scheduler.me.autoStart()
```

### config()

**config**() : Object

Returns the effective scheduler configuration with defaults applied (as resolved from `embeddings.json`).

| Resultado | Tipo   | Descripción                                                                                                                             |
| --------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| resultado | Object | `{mode; intervalHours; startFrom; startReference; dailyTime}` (see [Configuration](#configuration)). |

```4d
var $cfg:=cs.EmbeddingStudio.Scheduler.me.config()
```

### saveConfig()

**saveConfig**( *cfg* : Object ) : Object

Validates, normalizes and **persists** a scheduler configuration to the `scheduler` key of `embeddings.json`, then returns the normalized value. This is the programmatic equivalent of the scheduler settings window: it lets you change the schedule entirely by code, without the GUI. Only the `scheduler` key is written — other keys of the settings file are preserved.

The configuration is written **on the server**: in a 4D Server / 4D remote setup the file is always edited on the server machine, so a remote client can safely call this method. Because the loop re-reads the configuration on every cycle, the new schedule takes effect without restarting the scheduler.

| Parámetros | Tipo   | Descripción                                                                                                                                                                                                          |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cfg        | Object | Raw configuration `{mode; intervalHours; startFrom; startReference; dailyTime}` (see [Configuration](#configuration)). Missing/out-of-range values are defaulted. |

| Resultado | Tipo   | Descripción                                                      |
| --------- | ------ | ---------------------------------------------------------------- |
| resultado | Object | The normalized configuration that was persisted. |

```4d
// Switch to a 6-hour interval counting from the last execution
cs.EmbeddingStudio.Scheduler.me.saveConfig({mode: "interval"; intervalHours: 6; startFrom: "lastExecution"})

// Switch to a daily run at 02:30
cs.EmbeddingStudio.Scheduler.me.saveConfig({mode: "daily"; dailyTime: "02:30"})

// Disable the automatic schedule
cs.EmbeddingStudio.Scheduler.me.saveConfig({mode: "never"})
```

### nextRun()

**nextRun**() : Object

Computes the next scheduled run from the current configuration and state.

| Resultado | Tipo           | Descripción                                                                                                     |
| --------- | -------------- | --------------------------------------------------------------------------------------------------------------- |
| resultado | Object \| Null | `{date : Date; time : Time; timestamp : Text; immediate : Boolean}`, or `Null` in `never` mode. |

```4d
var $next:=cs.EmbeddingStudio.Scheduler.me.nextRun()
```

### reload()

**reload**() : Object

No-op convenience: the configuration is re-read automatically on each loop cycle, so this simply returns the current [status](#status). Provided for callers that want an explicit "config changed, give me the up-to-date status" call.

| Resultado | Tipo   | Descripción                                           |
| --------- | ------ | ----------------------------------------------------- |
| resultado | Object | The current [status](#status) object. |

## Concurrency & logging

- **Single batch** — at any time, at most one recalculation batch runs. A trigger (scheduled or forced) fired while a batch is running is **skipped**, not queued.
- **Skip traceability** — skipped triggers are logged with their timestamp in the execution history (`Logs/embeddingHistory.json`).
- **Cooperative cancel** — `cancel()` stops a running batch gracefully between chunks; it is never force-killed.
- **History** — each run records start/end timestamps, status, token usage and the computed next run date in `Logs/embeddingHistory.json` (see [ProcessResult](ProcessResult.md) for per-run details).

### Execution history file

`Logs/embeddingHistory.json` is written by the pipeline itself (every full `process()` run, scheduled or manual), guarded by a semaphore so concurrent processes never interleave writes. It holds the **current** run at the top level, the one before it under `previous`, and the same pair per definition under `definitions`.

```json
{
  "startTime": "2026-09-01T14:03:00",
  "endTime": "2026-09-01T14:03:00",
  "status": "completed",
  "trigger": "completed",
  "error": null,
  "nextComputeDate": "2026-09-02T14:03:00",
  "promptTokens": 0,
  "totalTokens": 0,
  "cumulativePromptTokens": 37802,
  "cumulativeTotalTokens": 37802,
  "previous": { "startTime": "…", "endTime": "…", "status": "completed", "error": null,
                "nextComputeDate": "…", "promptTokens": 12764, "totalTokens": 12764,
                "cumulativePromptTokens": 37802, "cumulativeTotalTokens": 37802 },
  "skipped": ["2026-09-01T12:00:00"],
  "definitions": {
    "Students.student_vector_1": {
      "startTime": "…", "endTime": "…", "status": "completed", "error": null,
      "promptTokens": 1054, "totalTokens": 1054,
      "cumulativePromptTokens": 4210, "cumulativeTotalTokens": 4210,
      "previous": { "…": "…" }
    }
  }
}
```

| Llave                                              | Tipo         | Descripción                                                                                                                                                                                                                             |
| -------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `startTime` / `endTime`                            | Text \| Null | ISO timestamps of the run, in the scheduler's local base. `endTime` is `null` while a run is in progress.                                                                                               |
| `status`                                           | Text         | `running` \| `completed` \| `failed`.                                                                                                                                                                                   |
| `trigger`                                          | Text         | Last event that touched the file: `started` \| `skipped` \| `completed` \| `failed`.                                                                                                                    |
| `error`                                            | Text \| Null | Summary of the run's errors, or `null`. Never contains an API key.                                                                                                                                      |
| `nextComputeDate`                                  | Text \| Null | Next scheduled run computed at the end of the run (the `nextComputeDate` option of [Process](Process.md)).                                                                                           |
| `promptTokens` / `totalTokens`                     | Integer      | Usage for this run alone.                                                                                                                                                                                               |
| `cumulativePromptTokens` / `cumulativeTotalTokens` | Integer      | Running totals across all recorded runs.                                                                                                                                                                                |
| `previous`                                         | Object       | Snapshot of the preceding run — the same keys, without `trigger`, `skipped` and `definitions`. Only one generation is kept.                                                                             |
| `skipped`                                          | Collection   | ISO timestamps of triggers skipped because a batch was already running. Capped at the **last 50**.                                                                                                      |
| `definitions`                                      | Object       | One entry per definition, keyed `"<dataclassName>.<vectorName>"`, each with its own `startTime`, `endTime`, `status` (`completed` \| `failed` \| `skipped`), `error`, token counters and `previous`. |

[`status()`](#status) reads `startTime`, `endTime`, `status`, `trigger`, `error` and `nextComputeDate` back from this file, which is how `lastExecution` survives a server restart.

## Lifecycle

| Host setting                                                            | What happens                                                                                | What you must do                                                                       |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **"Execute 'On Host Database Event' method of the components"** checked | The scheduler starts when the host database opens and stops when it closes. | Nothing.                                                               |
| Option unchecked (default)                           | The scheduler never starts by itself.                                       | Call [`start()`](#start) at startup and [`stop()`](#stop) at shutdown. |

Ask [`autoStart()`](#autostart) which case you are in, and [`isStarted()`](#isstarted) whether the loop is currently alive. Stopping the scheduler never interrupts a batch in progress — it finishes normally.

## Ejemplo

```4d
// --- Start at server startup, unless the host does it for us ---
If (Not(cs.EmbeddingStudio.Scheduler.me.autoStart()))
	cs.EmbeddingStudio.Scheduler.me.start()
End if

// --- Admin panel: force a recalculation and read status ---
var $status:=cs.EmbeddingStudio.Scheduler.me.force()

// --- Monitoring: display last / next run and current state ---
$status:=cs.EmbeddingStudio.Scheduler.me.status()
var $info:="Mode: "+$status.mode\
	+" — Last: "+String($status.lastExecution)\
	+" — Next: "+String($status.nextRun)\
	+" — "+($status.running ? "running" : String($status.lastResult))

// --- Cancel a long-running batch ---
cs.EmbeddingStudio.Scheduler.me.cancel()

// --- Disable automatic runs ---
cs.EmbeddingStudio.Scheduler.me.stop()
```

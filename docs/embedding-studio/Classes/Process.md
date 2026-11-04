---
id: process
title: Process
---

# Process

The `Process` class orchestrates the full embedding pipeline: it browses 4D entities, renders text from their fields using a [Definition](Definition.md), calls the embeddings API through an [Embedder](Embedder.md), and stores the resulting `4D.Vector` on each entity.

To render or embed on demand without persistence (search query vectors, phrase previews), see [StudioEmbedder](StudioEmbedder.md).

## Properties

| Property Name | Type                                                    | Description                                              |
|---------------|---------------------------------------------------------|----------------------------------------------------------|
| `settings`    | [Settings](Settings.md)               | The settings (definitions, batch size, phrase validation options). |
| `embedder`    | [Embedder](Embedder.md)               | The API-calling engine. Stateless and swappable.         |
| `options`     | Object                                                  | Runtime options object (see [Options object](#options-object) below). |

### Options object

| Key          | Type      | Description                                                                 |
|--------------|-----------|-----------------------------------------------------------------------------|
| `onProgress` | 4D.Function | Called after each processed chunk with `{definition, report}`.             |
| `onSuccess`  | 4D.Function | Called once at the end when `report.success = True`, with `{report, success, errors}`. |
| `onError`    | 4D.Function | Called once at the end when `report.success = False`, with `{report, success, errors}`. |
| `onTerminate`| 4D.Function | Called once at the end in all cases (after `onSuccess`/`onError`), with `{report, success, errors}`. |
| `dryRun`     | Boolean   | If `True`, runs selection/filter logic but skips API calls and entity saves. |
| `force`      | Boolean   | If `True`, recomputes every entity ignoring null-vector / dirty-flag filter. |
| `debug`      | Boolean   | If `True`, emits additional diagnostic log entries.                        |
| `pauseIndexes` | Boolean | If `True`, index maintenance on the target table is paused for the duration of a `processEntitySelection` batch run, then resumed right after (or on early exit/critical error). Default `False` — indexes are left alone. See [Pausing indexes](#pausing-indexes) before enabling it. |
| `waitForIndexes` | Boolean | Only used with `pauseIndexes`. If `True`, resuming indexes blocks until they are rebuilt. Default `False` — resume is asynchronous (indexes rebuilt in the background). |
| `shouldCancel` | 4D.Function | Predicate called between chunks during selection processing. Returning `True` stops the run gracefully (cooperative cancel) — what [`Scheduler.cancel()`](Scheduler.md#cancel) uses. |
| `embedder`   | [Embedder](Embedder.md) | Inject a custom embedder (otherwise a default one is created). |

## Class constructor

Create an instance of the orchestrator.

| Argument Name | Type                                      | Description                                                         |
|---------------|-------------------------------------------|---------------------------------------------------------------------|
| *settings*    | [Settings](Settings.md) | Optional. If omitted, settings are loaded from the default `Settings/embeddings.json`. |
| *options*     | Object                                    | Optional runtime options (see table above).                         |

```4d
// Simplest — uses defaults
var $p:=cs.EmbeddingStudio.Process.new()

// With explicit settings
var $p:=cs.EmbeddingStudio.Process.new($settings)

// With options
var $p:=cs.EmbeddingStudio.Process.new($settings; {\
	force: True; \
	onProgress: Formula(ALERT("chunk done: "+String($1.report.entitiesUpdated)))})
```

## Batch processing functions

### process()

**process**(*definition* : Variant) : [ProcessResult](ProcessResult.md)

Process one, many, or all [Definition](Definition.md) entries against the full content of their target dataclass.

| Argument        | Type                                                                        | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| *definition*    | `Null`, [Definition](Definition.md), `4D.DataClass`, plain object, or Collection | See [process() resolution](#process-resolution). `Null` → every definition in settings. |
| Function result | [ProcessResult](ProcessResult.md)                         | Statistics and per-error breakdown.                                         |

```4d
// Every definition in settings
var $r:=$p.process()

// One specific definition
var $r:=$p.process($def)

// Multiple definitions
var $r:=$p.process([$def1; $def2])

// Every definition configured for a whole dataclass
var $r:=$p.process(ds.Students)

// A plain descriptor — looked up in settings, or built on the fly
var $r:=$p.process({dataclassName: "Students"; vectorName: "student_vector_1"})

// Any mix — each item is resolved independently and flattened
var $r:=$p.process([ds.Students; $def; {dataclassName: "School"; vectorName: "school_vector_1"}])
```

#### process() resolution

`process()` has no entity context, so it resolves each input into concrete [Definition](Definition.md) objects directly from settings:

| Input                                              | Behavior                                                                                   |
|----------------------------------------------------|---------------------------------------------------------------------------------------------|
| `Null`                                             | Every definition in settings.                                                               |
| [Definition](Definition.md)                        | Used as-is.                                                                                  |
| `4D.DataClass` (e.g. `ds.Students`)                | Every definition in settings whose `dataclassName` matches that dataclass.                  |
| `{dataclassName: "..."; vectorName: "..."}`        | The matching saved definition, or — if none is found — a new `Definition` built from the object's fields (`modelAlias`, `phrase.template`). |
| Collection                                         | Each item is resolved with the rules above and the results are **flattened** into one collection (a `4D.DataClass` item can expand to several definitions). Unsupported items are dropped. |
| Anything else                                      | Empty result.                                                                               |

### processEntity()

**processEntity**(*entity* : 4D.Entity ; *definition* : Variant) : [ProcessResult](ProcessResult.md)

Process a single entity. Cheap path — no chunking, no server-side filter.

| Argument        | Type                                                                                      | Description                                                                 |
|-----------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| *entity*        | 4D.Entity                                                                                 | The entity to (re)compute vectors for.                                      |
| *definition*    | `Null`, [Definition](Definition.md), Collection, or `{vectorName: ...}` | See [resolution rules](#definition-resolution). `Null` infers from entity's dataclass. |
| Function result | [ProcessResult](ProcessResult.md)                                       | Statistics and per-error breakdown.                                         |

```4d
// Auto-resolve every definition matching this entity's dataclass
var $r:=$p.processEntity($entity)

// Specific definition
var $r:=$p.processEntity($entity; $def)

// By vector name only (looked up in settings against the entity's dataclass)
var $r:=$p.processEntity($entity; {vectorName: "student_vector_1"})
```

### processEntitySelection()

**processEntitySelection**(*selection* : 4D.EntitySelection ; *definition* : Variant) : [ProcessResult](ProcessResult.md)

Workhorse path for large jobs. Chunks the selection by `settings.batchSize`, sends one API call per chunk, saves each entity individually.

| Argument        | Type                                                                                      | Description                                                                 |
|-----------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| *selection*     | 4D.EntitySelection                                                                        | Entities to process. Pre-filtering by the caller is allowed; the pipeline still applies its null/dirty filter. |
| *definition*    | `Null`, [Definition](Definition.md), Collection, or `{vectorName: ...}` | See [resolution rules](#definition-resolution).                             |
| Function result | [ProcessResult](ProcessResult.md)                                       | Statistics and per-error breakdown.                                         |

```4d
var $todo:=ds.Students.query("country = :1"; "FR")
var $r:=$p.processEntitySelection($todo; $def)
```

### Definition resolution (entity context)

The polymorphic *definition* argument accepted by `processEntity` and `processEntitySelection`. Unlike [`process()`](#process-resolution), these have an entity/selection to infer the dataclass from, so a bare `{vectorName: "..."}` stub is enough:

| Input                                                      | Behavior                                                                 |
|------------------------------------------------------------|--------------------------------------------------------------------------|
| `Null`                                                     | All definitions in settings whose `dataclassName` matches the entity/selection. |
| [Definition](Definition.md)              | Used as-is; the `dataclassName` must match the entity/selection.         |
| `{vectorName: "..."}`                                      | Looked up in settings by `vectorName` against the entity/selection dataclass. |
| Collection                                                 | Each item resolved using the rules above; mismatches are silently dropped. |

### Recompute rules

An entity is (re)computed when **any** of these are true:

- The target vector field is `Null`.
- A sibling field named `{vectorName}_dirty` exists and is `True`.
- The `force` option is `True`.

The dirty field is optional per dataclass. If it doesn't exist, only the null-vector case triggers recomputation. Upon successful save, the pipeline clears the dirty flag (when present).

For `processEntitySelection`, the filter is executed as a server-side ORDA query before any API call, so only the rows that actually need work are loaded into memory. For `processEntity`, the check is done in memory on the already-fetched entity.

### Pausing indexes

By default the indexes of the target table are maintained normally while vectors are saved. With the `pauseIndexes` option, a batch run calls [`PAUSE INDEXES`](https://developer.4d.com/docs/commands/pause-indexes) on the table before writing and [`RESUME INDEXES`](https://developer.4d.com/docs/commands/resume-indexes) once done (also on early exit or critical error).

Be aware of what these commands do:

- `PAUSE INDEXES` disables **all** the indexes of the table (except the primary key index), not only the vector ones: every index on every other field of the table is paused too. While paused, queries and sorts on that table, including those of other processes, run without any index.
- `RESUME INDEXES` then **rebuilds all these indexes**, for the whole table, not only for the records that were recomputed. On a table with several indexes, this rebuild can cost more than the time saved during the writes.
- With `waitForIndexes` set to `True`, the run blocks until the rebuild completes; otherwise the rebuild runs in the background.
- These commands cannot run on a 4D remote client: there the option is ignored (a warning is logged once) and the recalculation runs with indexes maintained normally. Run it on the server, for example through the [Scheduler](Scheduler.md), to use it.

Enable it only for large recalculations, such as computing the vectors of a whole table for the first time.

## See also

- [StudioEmbedder](StudioEmbedder.md)
- [Settings](Settings.md)
- [Definition](Definition.md)
- [Embedder](Embedder.md)
- [ProcessResult](ProcessResult.md)
- [Phrase](Phrase.md)
- [Rate Limiting](../RateLimit.md)

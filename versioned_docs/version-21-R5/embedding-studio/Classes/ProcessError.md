---
id: processerror
title: ProcessError
---

# ProcessError

A `ProcessError` is one structured, typed entry in the `errors` collection of a [ProcessResult](ProcessResult.md). Its typed fields let callers react to a specific failure mode programmatically — retry transient failures, abort on a fatal model outage, count save failures — without parsing message strings.

You read these instances from [ProcessResult](ProcessResult.md)`.errors`, directly or through its query helpers (`errorsByCode`, `errorsByScope`, `retryableErrors`).

## Properties

| Property Name | Type    | Description                                                                                          |
|---------------|---------|----------------------------------------------------------------------------------------------------|
| `scope`       | Text    | Where the error originated: `"pipeline"`, `"definition"`, `"chunk"`, or `"entity"`.                 |
| `severity`    | Text    | `"warning"`, `"error"`, or `"fatal"`. Determined by `code` (see [ProcessErrorCode](ProcessErrorCode.md)). |
| `code`        | Integer | Machine-readable error code — compare against the constants on [ProcessErrorCode](ProcessErrorCode.md). |
| `ref`         | Variant | Scope-dependent reference: `"Dataclass.vector"`, an entity primary key, a model alias, or `Null`.   |
| `message`     | Text    | Human-readable, localized message.                                                                  |
| `retryable`   | Boolean | `True` when re-running the operation could plausibly succeed. Determined by `code`.                 |

### scope values

| Scope          | Meaning                                                                                  |
|----------------|------------------------------------------------------------------------------------------|
| `"pipeline"`   | Top-level failure affecting the whole run (null selection, a model became unavailable).   |
| `"definition"` | A [Definition](Definition.md) failed validation or was skipped.                           |
| `"chunk"`      | A whole batch (chunk) of entities failed in a single API call.                            |
| `"entity"`     | A single entity failed to embed or save.                                                  |

### severity values

| Severity    | Meaning                                                                                       |
|-------------|-----------------------------------------------------------------------------------------------|
| `"warning"` | Non-blocking — does **not** make [ProcessResult](ProcessResult.md)`.success` false.            |
| `"error"`   | A recoverable failure scoped to one entity, chunk, or definition. Makes `success` false.       |
| `"fatal"`   | Blocks the rest of the run (e.g. the model is unavailable). Also surfaces via `hasFatal`.      |

## Computed properties

| Property  | Type    | Description                              |
|-----------|---------|------------------------------------------|
| `isFatal` | Boolean | `True` when `severity = "fatal"`.        |

## Functions

### toObject()

**toObject**() : Object

Returns a plain object (`{scope, severity, code, ref, message, retryable}`) suitable for logging or JSON serialization.

| Argument        | Type   | Description                            |
|-----------------|--------|----------------------------------------|
| Function result | Object | A JSON-friendly snapshot of the error. |

## Example

React to failures by type rather than by message text:

```4d
var $r:=$p.process()

If (Not($r.success))

	If ($r.hasFatal)
		ALERT("A model became unavailable — aborting until it recovers.")
	End if

	var $codes:=cs.EmbeddingStudio.ProcessErrorCode.me
	var $saveFailures:=$r.errorsByCode($codes.SAVE_FAILED)
	If ($saveFailures.length>0)
		ALERT(String($saveFailures.length)+" entities failed to save.")
	End if

	// Collect entity keys worth retrying later
	var $retry:=$r.retryableErrors().query("scope = :1"; "entity").extract("ref")

End if
```

## See also

- [ProcessErrorCode](ProcessErrorCode.md) — the catalogue of `code` values and their severity/retryability.
- [ProcessResult](ProcessResult.md) — owns the `errors` collection and the query helpers (`errorsByCode`, `errorsByScope`, `retryableErrors`).
- [Process](Process.md) — produces these errors.

---
id: processresult
title: ProcessResult
---

# ProcessResult

The `ProcessResult` class is the return value of every batch entry point of [Process](Process.md) (`process`, `processEntity`, `processEntitySelection`). It accumulates statistics, per-error breakdowns, and wall-clock duration.

The orchestrator never throws out of its public batch API — failures are recorded here and the job continues. The caller decides what to do with them.

## Properties

| Property Name           | Type       | Description                                                              |
|-------------------------|------------|--------------------------------------------------------------------------|
| `definitionsProcessed`  | Integer    | Number of [Definition](Definition.md) entries processed. |
| `entitiesConsidered`    | Integer    | Number of entities that passed the "needs recompute" filter.             |
| `entitiesUpdated`       | Integer    | Number of entities whose vector was successfully written and saved.      |
| `entitiesSkipped`       | Integer    | Number of entities that could not be processed: individual embed or save errors, or whole-chunk API failures (those entities are left unchanged for the next run). |
| `apiCalls`              | Integer    | Number of embeddings API calls made.                                     |
| `promptTokens`          | Integer    | Total prompt tokens consumed across all API calls in this run.           |
| `totalTokens`           | Integer    | Total tokens consumed across all API calls in this run.                  |
| `duration`            | Integer    | Total duration of the job in milliseconds.                               |
| `errors`                | Collection | List of [ProcessError](ProcessError.md) entries recorded during the run. |

### Computed properties

| Property   | Type    | Description                                                                            |
|------------|---------|---------------------------------------------------------------------------------------|
| `success`  | Boolean | `True` when no `"error"` or `"fatal"` entry was recorded. `"warning"` entries do not fail the run. |
| `hasFatal` | Boolean | `True` when at least one `"fatal"` entry was recorded (e.g. a model became unavailable). |

### Error entries

Each item in `errors` is a [ProcessError](ProcessError.md) with `scope`, `severity`, `code`, `ref`, `message`, and `retryable`. See [ProcessError](ProcessError.md) for the field meanings and [ProcessErrorCode](ProcessErrorCode.md) for the `code` catalogue.

## Functions

### errorsByScope()

**errorsByScope**( $scope : Text ) : Collection

Errors filtered by `scope` (`"pipeline"`, `"definition"`, `"chunk"`, `"entity"`).

### errorsByCode()

**errorsByCode**( $code : Integer ) : Collection

Errors filtered by machine-readable code — see [ProcessErrorCode](ProcessErrorCode.md).

### retryableErrors()

**retryableErrors**() : Collection

Errors flagged `retryable` — re-running the operation could plausibly succeed.

### toObject()

**toObject**() : Object

Returns a plain object suitable for logging or JSON serialization.

| Argument        | Type   | Description                                 |
|-----------------|--------|---------------------------------------------|
| Function result | Object | A JSON-friendly snapshot of the report.     |

```4d
var $r:=$p.process()
LOG EVENT(Into 4D log file; JSON Stringify($r.toObject()))
```

## Example

```4d
var $r:=$p.processEntitySelection(ds.Students.all(); $def)

If ($r.success)
	ALERT("Updated "+String($r.entitiesUpdated)+" students in "+String($r.duration)+" ms")
Else
	var $err : Object
	For each ($err; $r.errors)
		ALERT("[" + $err.scope + "] " + String($err.ref) + " — " + $err.message)
	End for each
End if
```

## See also

- [Process](Process.md)
- [ProcessError](ProcessError.md) — the typed shape of each `errors` entry.
- [ProcessErrorCode](ProcessErrorCode.md) — the `code` catalogue.

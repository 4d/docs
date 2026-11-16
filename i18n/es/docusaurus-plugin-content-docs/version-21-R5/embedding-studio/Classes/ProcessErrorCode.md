---
id: processerrorcode
title: ProcessErrorCode
---

# ProcessErrorCode

A `singleton` exposing the stable, machine-readable error codes carried by [ProcessError](ProcessError.md) `.code`, plus a `meta()` lookup mapping each code to its default `severity` and `retryable` flag. Compare against these constants instead of parsing message strings.

Access the shared instance via `.me`:

```4d
var $codes:=cs.EmbeddingStudio.ProcessErrorCode.me
If ($error.code=$codes.SAVE_FAILED)
	// …
End if
```

## Codes

| Constante               | Valor | Default severity | Retryable | Raised when…                                                                                      |
| ----------------------- | ----- | ---------------- | --------- | ------------------------------------------------------------------------------------------------- |
| `NULL_INPUT`            | 100   | error            | No        | A required entity, selection, or definition was `Null`.                           |
| `INVALID_DEFINITION`    | 101   | error            | No        | A value is not a usable [Definition](Definition.md) instance.                     |
| `VALIDATION_FAILED`     | 102   | error            | No        | `Definition.validate()` reported a problem.                                       |
| `MODEL_UNAVAILABLE`     | 200   | fatal            | Sí        | A critical API error made the model unusable for the rest of the run.             |
| `MODEL_SKIPPED`         | 201   | error            | Sí        | A definition was skipped because its model already failed critically.             |
| `EMBED_FAILED`          | 202   | error            | Sí        | A non-critical embedding call failed (single entity or chunk). |
| `VECTOR_COUNT_MISMATCH` | 300   | error            | No        | The provider returned a different vector count than requested.                    |
| `SAVE_FAILED`           | 400   | error            | Sí        | `entity.save()` failed (validation, lock, …).                  |

Codes are grouped by hundreds: `1xx` input/configuration, `2xx` model/API, `3xx` data integrity, `4xx` persistence. Unknown codes resolve to `{severity: "error"; retryable: False; label: "UNKNOWN"}`.

## Funciones

### meta()

**meta**( $code : Integer ) : Object

Returns the `severity` and `retryable` flag associated with a code — the same values carried by a [ProcessError](ProcessError.md) with that `code`.

| Argumento | Tipo    | Descripción                                                             |
| --------- | ------- | ----------------------------------------------------------------------- |
| `$code`   | Integer | One of the code constants above.                        |
| Resultado | Object  | `{severity : Text; retryable : Boolean; label : Text}`. |

```4d
var $m:=cs.EmbeddingStudio.ProcessErrorCode.me.meta(cs.EmbeddingStudio.ProcessErrorCode.me.MODEL_UNAVAILABLE)
// $m = {severity: "fatal"; retryable: True; label: "MODEL_UNAVAILABLE"}
```

## Ver también

- [ProcessError](ProcessError.md) — carries a `.code` from this list.
- [ProcessResult](ProcessResult.md) — `errorsByCode()` filters errors by code.

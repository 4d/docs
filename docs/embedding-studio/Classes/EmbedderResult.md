---
id: embedderresult
title: EmbedderResult
---

# EmbedderResult

Typed wrapper for `Embedder.embed()` and `Embedder.embedBatch()` responses. Normalizes OpenAI's snake_case API keys (`prompt_tokens`, `total_tokens`) to camelCase properties, and flattens the nested rate-limit structure into direct properties.

A single class handles both single and batch results — `embed()` populates `.vector`, `embedBatch()` populates `.vectors`.

## Properties

### Embedding results

| Property  | Type       | Default | Description                                    |
|-----------|------------|---------|------------------------------------------------|
| `vector`  | 4D.Vector  | Null    | Single embedding result. Null for batch calls. |
| `vectors` | Collection | `[]`    | Batch embedding results. |

### Token usage

| Property       | Type    | Default | Description                       |
|----------------|---------|---------|-----------------------------------|
| `promptTokens` | Integer | `0`     | Input tokens consumed.            |
| `totalTokens`  | Integer | `0`     | Total tokens consumed (in + out). |

### Rate-limit state

| Property            | Type    | Default | Description                                           |
|---------------------|---------|---------|-------------------------------------------------------|
| `remainingTokens`   | Integer | `-1`    | Tokens left in the current window. `-1` = unknown.    |
| `remainingRequests` | Integer | `-1`    | Requests left in the current window. `-1` = unknown.  |
| `limitTokens`       | Integer | `0`     | TPM ceiling for the account.                          |
| `limitRequests`     | Integer | `0`     | RPM ceiling for the account.                          |
| `resetTokens`       | Text    | `""`    | Time until token bucket refills (e.g. `"6m0s"`).      |
| `resetRequests`     | Text    | `""`    | Time until request bucket refills (e.g. `"1s"`).      |

## Class constructor

```4d
// From a real API result (used by Embedder internally)
var $result:=cs.EmbedderResult.new($aikitResult; True)   // batch
var $result:=cs.EmbedderResult.new($aikitResult; False)   // single

// Empty result (no API call — e.g. empty batch)
var $result:=cs.EmbedderResult.new()
```

| Argument   | Type    | Description                                                                 |
|------------|---------|-----------------------------------------------------------------------------|
| *result*   | Object  | An object with `.vector`/`.vectors`, `.usage`, `.rateLimit` (duck-typed).   |
| *isBatch*  | Boolean | `True` to read `.vectors`, `False` to read `.vector`.                       |

The constructor accepts any object that exposes the expected shape — it does not require a specific class. This makes it easy to construct in tests.

## Usage

```4d
// Single embedding
var $r:=$embedder.embed("hello world"; "text-embedding-3-small")
$r.vector         // → 4D.Vector
$r.promptTokens   // → 6
$r.totalTokens    // → 6

// Batch embedding
var $r:=$embedder.embedBatch(["hello"; "world"]; "text-embedding-3-small")
$r.vectors.length // → 2
$r.totalTokens    // → 10

// Rate-limit awareness
$r.remainingTokens   // → 148230 (or -1 if not yet known)
$r.resetTokens       // → "6m0s"
```

## See also

- [Embedder](Embedder.md) — creates EmbedderResult instances
- [ProcessResult](ProcessResult.md) — run-level report that accumulates EmbedderResult usage
- [Rate Limiting](../RateLimit.md) — how the pipeline uses rate-limit fields for throttling and batch sizing

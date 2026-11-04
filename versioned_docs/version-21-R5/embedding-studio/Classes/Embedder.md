---
id: embedder
title: Embedder
---

# Embedder

The `Embedder` class is a thin wrapper around [4D AIKit](https://developer.4d.com/docs/aikit/Classes/openai) focused on embeddings. It exposes two functions — one for a single text, one for a batch — and handles retries with exponential backoff (respecting the `Retry-After` header when present).

It is stateless beyond configuration and safe to share between processes.

## Properties

| Property Name | Type                    | Description                                                  |
|---------------|-------------------------|--------------------------------------------------------------|
| `client`      | cs.AIKit.OpenAI         | The underlying AIKit client used for HTTP requests.          |
| `maxRetries`  | Integer                 | Maximum number of retries on transient errors. Default: `3`. |
| `backoffMs`   | Integer                 | Base delay (ms) between retries. Doubled each attempt.       |

## Class constructor

Create a embedder. All options are optional.

| Argument Name | Type   | Description                                                                 |
|---------------|--------|-----------------------------------------------------------------------------|
| *options*     | Object | `{client, maxRetries, backoffMs}` — any field may be omitted.               |

```4d
// Default — uses cs.AIKit.OpenAI.new() internally
var $proc:=cs.EmbeddingStudio.Embedder.new()

// Provide a pre-configured AIKit client (custom API key, base URL, etc.)
var $client:=cs.AIKit.OpenAI.new({apiKey: "…"; baseURL: "https://server.ai"})
var $proc:=cs.EmbeddingStudio.Embedder.new({client: $client; maxRetries: 5; backoffMs: 1000})
```

> If the 4D AIKit component is not loaded (or is too old to provide `OpenAIProviders`), the constructor still succeeds with a `Null` client, and the first `embed()` / `embedBatch()` call throws an error whose `message` explains what is missing and whose `isAIKitMissing` property is `True`.

## Functions

### embed()

**embed**(*text* : Text ; *model* : Text) : [cs.EmbeddingStudio.EmbedderResult](EmbedderResult.md)

Embed a single text. Returns a typed result with the embedding vector, token usage, and rate-limit state.

| Argument        | Type   | Description                                                                 |
|-----------------|--------|-----------------------------------------------------------------------------|
| *text*          | Text   | The text to vectorize.                                                      |
| *model*         | Text   | The embedding model to use (e.g. `"text-embedding-3-small"`).              |
| Function result | [cs.EmbeddingStudio.EmbedderResult](EmbedderResult.md) | Typed wrapper — `.vector` holds the embedding, `.promptTokens` / `.totalTokens` hold usage, rate-limit fields are flat camelCase. |

Throws if retries are exhausted or the API returns a non-retryable error.

```4d
var $result:=$proc.embed("it rains cats and dogs"; "text-embedding-3-small")
// $result.vector          → 4D.Vector
// $result.promptTokens    → Integer
// $result.totalTokens     → Integer
// $result.remainingTokens → Integer (-1 if unknown)
```

### embedBatch()

**embedBatch**(*texts* : Collection ; *model* : Text) : [cs.EmbedderResult](EmbedderResult.md)

Embed a collection of texts in a single API call. Returns a typed result with vectors in the same order as inputs, token usage, and rate-limit state.

| Argument        | Type       | Description                                                                 |
|-----------------|------------|-----------------------------------------------------------------------------|
| *texts*         | Collection | Collection of Text to vectorize. Empty or `Null` returns an empty result. |
| *model*         | Text       | The embedding model to use.                                                 |
| Function result | [cs.EmbedderResult](EmbedderResult.md) | Typed wrapper — `.vectors` holds the embeddings collection, token and rate-limit fields are flat camelCase. |

```4d
var $result:=$proc.embedBatch(["hello"; "world"]; "text-embedding-3-small")
// $result.vectors[0]      → 4D.Vector for "hello"
// $result.vectors[1]      → 4D.Vector for "world"
// $result.totalTokens     → Integer (sum for the batch)
// $result.remainingTokens → Integer (after this call)
```

## Retry policy

Transient errors (HTTP 408, 409, 429, 5xx) are retried up to `maxRetries` times.

- If the response carries a `Retry-After` or `retry-after-ms` header, the embedder waits that long.
- Otherwise, it waits `backoffMs * 2^attempt`.

Non-retryable errors are thrown immediately — see [OpenAIError](https://developer.4d.com/docs/aikit/Classes/openaierror) for the thrown shape.

## See also

- [EmbedderResult](EmbedderResult.md)
- [Process](Process.md)
- [OpenAIEmbeddingsAPI](https://developer.4d.com/docs/aikit/Classes/openaiembeddingsapi) (AIKit)

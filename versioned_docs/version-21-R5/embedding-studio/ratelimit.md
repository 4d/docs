---
id: ratelimit
title: Rate Limiting
---

# Rate Limiting

The embedding pipeline includes built-in rate-limit awareness. When the API provider returns rate-limit headers (as OpenAI does), the system automatically throttles requests and adapts batch sizes to stay within budget. Providers that don't return rate-limit headers (e.g. Ollama) are unaffected — the pipeline runs at full speed.

## How it works

Each call to [`Embedder.embed()`](Classes/Embedder.md) or [`Embedder.embedBatch()`](Classes/Embedder.md) returns an [`EmbedderResult`](Classes/EmbedderResult.md) that carries rate-limit state alongside the embedding vectors. The pipeline uses this data in a three-step loop:

1. **Pre-flight throttle** — before sending a batch, the pipeline checks whether the remaining token budget is sufficient. If not, it waits for the reset window to elapse before proceeding.
2. **Adaptive batch sizing** — the pipeline computes the largest batch that fits within 80% of the remaining token budget. This avoids hitting the ceiling while still making efficient use of the quota.
3. **State update** — after each API response, the pipeline records the new remaining budget, computes an average tokens-per-entity estimate, and feeds both into the next iteration.

## Rate-limit fields on EmbedderResult

These fields are populated from the API response headers. When a provider doesn't return them, they keep their defaults and the pipeline skips throttling.

| Field               | Default | Meaning                                            |
|---------------------|---------|----------------------------------------------------|
| `remainingTokens`   | `-1`    | Tokens left in the current window. `-1` = unknown. |
| `remainingRequests` | `-1`    | Requests left in the current window.               |
| `limitTokens`       | `0`     | TPM (tokens per minute) ceiling.                   |
| `limitRequests`     | `0`     | RPM (requests per minute) ceiling.                 |
| `resetTokens`       | `""`    | Time until the token bucket refills (e.g. `"6m0s"`, `"200ms"`). |
| `resetRequests`     | `""`    | Time until the request bucket refills.             |

## Batch size adaptation

The pipeline starts with the configured `batchSize` (from [Settings](Classes/Settings.md), default 50). After the first API response provides rate-limit data, the batch size may shrink:

```
nextBatchSize = min( floor(remainingTokens × 0.8 / tokensPerEntity), configBatchSize )
```

- `tokensPerEntity` is estimated from the last chunk (`totalTokens / chunkSize`).
- The result is clamped to a floor of 1 and a ceiling of `configBatchSize`.
- When `remainingTokens` is unknown (`-1`), the configured batch size is used as-is.

## Pre-flight wait

Before each batch, the pipeline checks:

- **Token budget**: if `remainingTokens < estimatedTokens × 1.1`, it waits for the token reset window.
- **Request budget**: if `remainingRequests = 0`, it waits for the request reset window.

The reset durations are parsed from the API's string format (`"6m0s"` → 360 seconds, `"200ms"` → 1 second).

## Providers without rate limits

Some providers (Ollama, local models) don't return rate-limit headers. In this case:

- `remainingTokens` stays at `-1` (unknown)
- No throttling occurs — batches run at `configBatchSize` without waits
- The pipeline works identically to how it did before rate-limit support was added

## See also

- [EmbedderResult](Classes/EmbedderResult.md) — carries rate-limit fields
- [Embedder](Classes/Embedder.md) — wraps the API calls
- [Process](Classes/Process.md) — orchestrates the batch loop
- [Settings](Classes/Settings.md) — `batchSize` configuration

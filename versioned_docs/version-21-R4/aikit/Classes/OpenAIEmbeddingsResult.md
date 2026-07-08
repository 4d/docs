---
id: openaiembeddingsresult
title: OpenAIEmbeddingsResult
---

# OpenAIEmbeddingsResult

## Inherits

- [OpenAIResult](OpenAIResult.md)

## Computed properties

| Property  | Type          | Description                                                                 |
|-----------|---------------|-----------------------------------------------------------------------------|
| `model`   | Text  | Returns the model used to compute the embedding    |
| `vector`  | `4D.Vector`  | Returns the first `4D.Vector` from the `vectors` collection.    |
| `vectors` | Collection | Returns a collection of `4D.Vector`. |
| `embedding`  | [OpenAIEmbedding](OpenAIEmbedding.md) | Returns the first [OpenAIEmbedding](OpenAIEmbedding.md) from the `embeddings` collection.    |
| `embeddings` | Collection | Returns a collection of [OpenAIEmbedding](OpenAIEmbedding.md). |
| `usage`      | Object     | Returns token usage information (inherited from [OpenAIResult](OpenAIResult.md)). |

### usage

The `usage` property returns an object containing token usage information for embeddings.

| Field | Type | Description |
|-------|------|-------------|
| `prompt_tokens` | Integer | Number of tokens in the input text(s). |
| `total_tokens` | Integer | Total tokens used (same as prompt_tokens for embeddings). |

**Example response:**

```json
{
  "prompt_tokens": 8,
  "total_tokens": 8
}
```

> **Note:** Embeddings only consume prompt tokens (there is no completion), so `total_tokens` equals `prompt_tokens`.

## See also

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)

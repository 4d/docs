---
id: openaiembeddingsresult
title: OpenAIEmbeddingsResult
---

# OpenAIEmbeddingsResult

## Inherits

- [OpenAIResult](OpenAIResult.md)

## Propriedades calculadas

| Propriedade  | Tipo                                  | Descrição                                                                                                            |
| ------------ | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `model`      | Text                                  | Returns the model used to compute the embedding                                                                      |
| `vector`     | `4D.Vector`                           | Returns the first `4D.Vector` from the `vectors` collection.                                         |
| `vectors`    | Collection                            | Returns a collection of `4D.Vector`.                                                                 |
| `embedding`  | [OpenAIEmbedding](OpenAIEmbedding.md) | Returns the first [OpenAIEmbedding](OpenAIEmbedding.md) from the `embeddings` collection.            |
| `embeddings` | Collection                            | Returns a collection of [OpenAIEmbedding](OpenAIEmbedding.md).                                       |
| `utilização` | Object                                | Returns token usage information (inherited from [OpenAIResult](OpenAIResult.md)). |

### utilização

The `usage` property returns an object containing token usage information for embeddings.

| Campo           | Tipo    | Descrição                                                                                                         |
| --------------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| `prompt_tokens` | Integer | Number of tokens in the input text(s).                                         |
| `total_tokens`  | Integer | Total tokens used (same as prompt_tokens for embeddings). |

**Example response:**

```json
{
  "prompt_tokens": 8,
  "total_tokens": 8
}
```

> **Note:** Embeddings only consume prompt tokens (there is no completion), so `total_tokens` equals `prompt_tokens`.

## Veja também

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)

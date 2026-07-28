---
id: openaiembeddingsresult
title: OpenAIEmbeddingsResult
---

# OpenAIEmbeddingsResult

## Hérite de

- [OpenAIResult](OpenAIResult.md)

## Propriétés calculées

| Propriété    | Type                                  | Description                                                                                                          |
| ------------ | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `model`      | Text                                  | Retourne le modèle utilisé pour calculer la représentation vectorielle                                               |
| `vector`     | `4D.Vector`                           | Retourne le premier `4D.Vector` de la collection `vectors`.                                          |
| `vectors`    | Collection                            | Retourne une collection de `4D.Vector`.                                                              |
| `embedding`  | [OpenAIEmbedding](OpenAIEmbedding.md) | Retourne le premier [OpenAIEmbedding](OpenAIEmbedding.md) de la collection `embeddings`.             |
| `embeddings` | Collection                            | Retourne une collection de [OpenAIEmbedding](OpenAIEmbedding.md).                                    |
| `usage`      | Object                                | Returns token usage information (inherited from [OpenAIResult](OpenAIResult.md)). |

### usage

The `usage` property returns an object containing token usage information for embeddings.

| Champ           | Type    | Description                                                                                                       |
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

## Voir également

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)

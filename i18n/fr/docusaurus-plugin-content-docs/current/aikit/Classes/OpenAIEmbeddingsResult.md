---
id: openaiembeddingsresult
title: OpenAIEmbeddingsResult
---

# OpenAIEmbeddingsResult

## Hérite de

- [OpenAIResult](OpenAIResult.md)

## Propriétés calculées

| Propriété    | Type                                  | Description                                                                                               |
| ------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `model`      | Text                                  | Returns the model used to compute the embedding                                                           |
| `vector`     | `4D.Vector`                           | Returns the first `4D.Vector` from the `vectors` collection.                              |
| `vectors`    | Collection                            | Returns a collection of `4D.Vector`.                                                      |
| `embedding`  | [OpenAIEmbedding](OpenAIEmbedding.md) | Returns the first [OpenAIEmbedding](OpenAIEmbedding.md) from the `embeddings` collection. |
| `embeddings` | Collection                            | Returns a collection of [OpenAIEmbedding](OpenAIEmbedding.md).                            |

## Voir également

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)

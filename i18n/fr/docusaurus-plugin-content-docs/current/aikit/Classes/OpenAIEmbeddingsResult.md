---
id: openaiembeddingsresult
title: OpenAIEmbeddingsResult
---

# OpenAIEmbeddingsResult

## Hérite de

- [OpenAIResult](OpenAIResult.md)

## Propriétés calculées

| Propriété    | Type                                  | Description                                                                                              |
| ------------ | ------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `model`      | Text                                  | Retourne le modèle utilisé pour calculer la représentation vectorielle                                   |
| `vector`     | `4D.Vector`                           | Retourne le premier `4D.Vector` de la collection `vectors`.                              |
| `vectors`    | Collection                            | Retourne une collection de `4D.Vector`.                                                  |
| `embedding`  | [OpenAIEmbedding](OpenAIEmbedding.md) | Retourne le premier [OpenAIEmbedding](OpenAIEmbedding.md) de la collection `embeddings`. |
| `embeddings` | Collection                            | Retourne une collection de [OpenAIEmbedding](OpenAIEmbedding.md).                        |

## Voir également

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)

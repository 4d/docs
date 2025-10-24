---
id: openaiembeddingsresult
title: OpenAIEmbeddingsResult
---

# OpenAIEmbeddingsResult

## Hereda

- [OpenAIResult](OpenAIResult.md)

## Propiedades calculadas

| Propiedad    | Tipo                                  | Descripción                                                                                            |
| ------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `model`      | Text                                  | Returns the model used to compute the embedding                                                        |
| `vector`     | `4D.Vector`                           | Devuelve el primer `4D.Vector` de la colección `vectors`.                              |
| `vectors`    | Collection                            | Devuelve una colección de `4D.Vector`.                                                 |
| `embedding`  | [OpenAIEmbedding](OpenAIEmbedding.md) | Devuelve el primer [OpenAIEmbedding](OpenAIEmbedding.md) de la colección `embeddings`. |
| `embeddings` | Collection                            | Returns a collection of [OpenAIEmbedding](OpenAIEmbedding.md).                         |

## Ver también

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)

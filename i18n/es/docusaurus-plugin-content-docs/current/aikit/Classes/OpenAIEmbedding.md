---
id: openaiembedding
title: OpenAIEmbedding
---

# OpenAIEmbedding

The `OpenAIEmbedding` class represents an embedding generated by the OpenAI API, containing information about the embedding vector and its index in the list of embeddings.

## Propiedades

| Propiedad   | Tipo        | Descripción                                                                                                                           |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `index`     | Integer     | The index of the embedding in the list of embeddings.                                                                 |
| `embedding` | `4D.Vector` | The embedding vector. The length of the vector depends on the model as listed in the embedding guide. |
| `object`    | Text        | Text value "embedding".                                                                                               |

## Ver también

- [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md)

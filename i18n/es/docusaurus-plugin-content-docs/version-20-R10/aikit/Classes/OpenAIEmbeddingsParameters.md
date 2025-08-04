---
id: openaiembeddingsparameters
title: OpenAIEmbeddingsParameters
---

# OpenAIEmbeddingsParameters

The `OpenAIEmbeddingsParameters` class is designed to configure and manage the parameters used for creating embeddings through the OpenAI API.

## Hereda

- [OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Nombre de la propiedad | Tipo    | Descripción                                                                                                                                                     |
| ---------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `encoding_format`      | Text    | The format to return the embeddings in. Puede ser `float` o `base64`. (por defecto: `float`) |
| `dimensions`           | Integer | The number of dimensions the resulting output embeddings should have. Only supported in text-embedding-3 and later models.      |

## Ver también

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)

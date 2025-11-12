---
id: openaiembeddingsparameters
title: OpenAIEmbeddingsParameters
---

# OpenAIEmbeddingsParameters

The `OpenAIEmbeddingsParameters` class is designed to configure and manage the parameters used for creating embeddings through the OpenAI API.

## Hereda

- [OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Nombre de la propiedad | Tipo    | Descripción                                                                                                                                                                          |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `encoding_format`      | Text    | El formato para devolver las integraciones. Puede ser `float` o `base64`. (por defecto: `float`)                  |
| `dimensions`           | Integer | El número de dimensiones que deben tener las representaciones vectoriales resultantes. Sólo se admite en los modelos text-embedding-3 y posteriores. |

## Ver también

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)

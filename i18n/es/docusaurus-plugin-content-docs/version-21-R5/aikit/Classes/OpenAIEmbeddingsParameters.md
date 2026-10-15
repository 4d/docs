---
id: openaiembeddingsparameters
title: OpenAIEmbeddingsParameters
---

# OpenAIEmbeddingsParameters

La clase `OpenAIEmbeddingsParameters` está diseñada para configurar y gestionar los parámetros utilizados para crear las representaciones vectoriales a través de la API OpenAI.

## Hereda

- [OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Nombre de la propiedad | Tipo    | Descripción                                                                                                                                                                          |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `encoding_format`      | Text    | El formato para devolver las integraciones. Puede ser `float` o `base64`. (por defecto: `float`)                  |
| `dimensions`           | Integer | El número de dimensiones que deben tener las representaciones vectoriales resultantes. Sólo se admite en los modelos text-embedding-3 y posteriores. |

## Ver también

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)

---
id: openaichatcompletionslistparameters
title: OpenAIChatCompletionsListParameters
---

# OpenAIChatCompletionsListParameters

This class is used to define parameters for retrieving a list of chat completions from the OpenAI API. Permite personalizar la paginación, ordenar y filtrar los mensajes de chat.

## Hereda

- [OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Propiedad  | Tipo    | Valor por defecto | Descripción                                                                                                                                                      |
| ---------- | ------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`    | Text    | ""                | Identificador para el último mensaje de la solicitud de paginación anterior.                                                                     |
| `limit`    | Integer | 0                 | Número de mensajes a recuperar.                                                                                                                  |
| `order`    | Text    | "asc"             | Ordenar los mensajes por fecha y hora. Utilice `asc` para el orden ascendente o `desc` para el descendente.                      |
| `metadata` | Text    | -                 | Una lista de campos de metadatos para filtrar las terminaciones del chat. Ejemplo: `metadata[key1]=value1&metadata[key2]=value2` |
| `model`    | Text    | ""                | El modelo utilizado para generar las finalizaciones del chat.                                                                                    |

## Ver también

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)

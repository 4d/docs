---
id: openaichatcompletionslistparameters
title: OpenAIChatCompletionsListParameters
---

# OpenAIChatCompletionsListParameters

This class is used to define parameters for retrieving a list of chat completions from the OpenAI API. It allows customization of pagination, sorting, and filtering of chat messages.

## Hereda

- [OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Propiedad  | Tipo    | Valor por defecto | Descripción                                                                                                                                       |
| ---------- | ------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`    | Text    | ""                | Identifier for the last message from the previous pagination request.                                                             |
| `limit`    | Integer | 0                 | Número de mensajes a recuperar.                                                                                                   |
| `order`    | Text    | "asc"             | Ordenar los mensajes por fecha y hora. Utilice `asc` para el orden ascendente o `desc` para el descendente.       |
| `metadata` | Text    | -                 | A list of metadata keys to filter the chat completions by. Ejemplo: `metadata[key1]=value1&metadata[key2]=value2` |
| `model`    | Text    | ""                | El modelo utilizado para generar las finalizaciones del chat.                                                                     |

## Ver también

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)

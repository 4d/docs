---
id: openaichatcompletionsmessagesparameters
title: OpenAIChatCompletionsMessagesParameters
---

# OpenAIChatCompletionsMessagesParameters

## Hereda

- [OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Propiedad | Tipo    | Valor por defecto | Descripción                                                                                                                                                               |
| --------- | ------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`   | Text    | ""                | Identifier for the last message from the previous pagination request.                                                                                     |
| `limit`   | Integer | 0                 | Número de mensajes a recuperar.                                                                                                                           |
| `order`   | Text    | "asc"             | Sort order for messages by timestamp. Use `asc` for ascending order or `desc` for descending order. Por defecto es `asc`. |

## Ver también

- [OpenAIChatCompletionsMessagesAPI](OpenAIChatCompletionsMessagesAPI.md)

---
id: openaichatcompletionsmessagesparameters
title: OpenAIChatCompletionsMessagesParameters
---

# OpenAIChatCompletionsMessagesParameters

## Hereda

- [OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Propiedad | Tipo    | Valor por defecto | Descripción                                                                                                                                                                       |
| --------- | ------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`   | Text    | ""                | Identifier for the last message from the previous pagination request.                                                                                             |
| `limit`   | Integer | 0                 | Número de mensajes a recuperar.                                                                                                                                   |
| `order`   | Text    | "asc"             | Ordenar los mensajes por fecha y hora. Utilice `asc` para el orden ascendente o `desc` para el descendente. Por defecto es `asc`. |

## Ver también

- [OpenAIChatCompletionsMessagesAPI](OpenAIChatCompletionsMessagesAPI.md)

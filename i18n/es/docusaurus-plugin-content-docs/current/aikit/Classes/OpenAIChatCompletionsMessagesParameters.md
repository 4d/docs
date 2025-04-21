---
id: openaichatcompletionsmessagesparameters
title: OpenAIChatCompletionsMessagesParameters
---

# OpenAIChatCompletionsMessagesParameters

## Inherits

- [OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Propiedad | Tipo    | Default Value | Descripción                                                                                                                                                            |
| --------- | ------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`   | Text    | ""            | Identifier for the last message from the previous pagination request.                                                                                  |
| `limit`   | Integer | 0             | Number of messages to retrieve.                                                                                                                        |
| `order`   | Text    | "asc"         | Sort order for messages by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`. |

## Ver también

- [OpenAIChatCompletionsMessagesAPI](OpenAIChatCompletionsMessagesAPI.md)

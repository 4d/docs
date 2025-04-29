---
id: openaichatcompletionsmessagesparameters
title: OpenAIChatCompletionsMessagesParameters
---

# OpenAIChatCompletionsMessagesParameters

## Inherits

- [OpenAIParameters](OpenAIParameters.md)

## Propriedades

| Propriedade | Tipo    | Default Value | Descrição                                                                                                                                                              |
| ----------- | ------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`     | Text    | ""            | Identifier for the last message from the previous pagination request.                                                                                  |
| `limit`     | Integer | 0             | Number of messages to retrieve.                                                                                                                        |
| `order`     | Text    | "asc"         | Sort order for messages by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`. |

## Veja também

- [OpenAIChatCompletionsMessagesAPI](OpenAIChatCompletionsMessagesAPI.md)

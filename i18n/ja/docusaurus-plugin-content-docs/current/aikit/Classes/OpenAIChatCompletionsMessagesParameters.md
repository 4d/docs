---
id: openaichatcompletionsmessagesparameters
title: OpenAIChatCompletionsMessagesParameters
---

# OpenAIChatCompletionsMessagesParameters

## Inherits

- [OpenAIParameters](OpenAIParameters.md)

## プロパティ

| プロパティ   | 型       | Default Value | 説明                                                                                                                                                                     |
| ------- | ------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after` | Text    | ""            | Identifier for the last message from the previous pagination request.                                                                                  |
| `limit` | Integer | 0             | Number of messages to retrieve.                                                                                                                        |
| `order` | Text    | "asc"         | Sort order for messages by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`. |

## 参照

- [OpenAIChatCompletionsMessagesAPI](OpenAIChatCompletionsMessagesAPI.md)

---
id: openaichatcompletionslistparameters
title: OpenAIChatCompletionsListParameters
---

# OpenAIChatCompletionsListParameters

This class is used to define parameters for retrieving a list of chat completions from the OpenAI API. It allows customization of pagination, sorting, and filtering of chat messages.

## Inherits

- [OpenAIParameters](OpenAIParameters.md)

## Propriétés

| Propriété  | Type    | Default Value | Description                                                                                                                                       |
| ---------- | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`    | Text    | ""            | Identifier for the last message from the previous pagination request.                                                             |
| `limit`    | Integer | 0             | Number of messages to retrieve.                                                                                                   |
| `order`    | Text    | "asc"         | Sort order for messages by timestamp. Use `asc` for ascending order or `desc` for descending order.               |
| `metadata` | Text    | -             | A list of metadata keys to filter the chat completions by. Example: `metadata[key1]=value1&metadata[key2]=value2` |
| `model`    | Text    | ""            | The model used to generate the chat completions.                                                                                  |

## Voir également

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)

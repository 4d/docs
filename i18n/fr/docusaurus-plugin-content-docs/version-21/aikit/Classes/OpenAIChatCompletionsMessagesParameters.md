---
id: openaichatcompletionsmessagesparameters
title: OpenAIChatCompletionsMessagesParameters
---

# OpenAIChatCompletionsMessagesParameters

## Hérite de

- [OpenAIParameters](OpenAIParameters.md)

## Propriétés

| Propriété | Type    | Valeur par défaut | Description                                                                                                                                                           |
| --------- | ------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`   | Text    | ""                | Identifier for the last message from the previous pagination request.                                                                                 |
| `limit`   | Integer | 0                 | Number of messages to retrieve.                                                                                                                       |
| `order`   | Text    | "asc"             | Sort order for messages by timestamp. Use `asc` for ascending order or `desc` for descending order. `asc` par défaut. |

## Voir également

- [OpenAIChatCompletionsMessagesAPI](OpenAIChatCompletionsMessagesAPI.md)

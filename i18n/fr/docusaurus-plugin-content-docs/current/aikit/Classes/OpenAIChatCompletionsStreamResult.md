---
id: openaichatcompletionsstreamresult
title: OpenAIChatCompletionsStreamResult
---

# OpenAIChatCompletionsStreamResult

## Hérite de

- [OpenAIResult](OpenAIResult.md)

## Propriétés

| Propriété | Type   | Description                                                          |
| --------- | ------ | -------------------------------------------------------------------- |
| `data`    | Object | Contient le flux de données envoyées par le serveur. |

## Propriétés calculées

| Propriété | Type                            | Description                                                                                                   |
| --------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `choice`  | [OpenAIChoice](OpenAIChoice.md) | Renvoie une donnée `choice`, avec un message `delta`.                                         |
| `choices` | Collection                      | Renvoie une collection de données [OpenAIChoice](OpenAIChoice.md), avec des messages `delta`. |

### Overridden properties

| Propriété    | Type    | Description                                                                                                                                                                       |
| ------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `success`    | Boolean | Retourne `True` si le flux de données a été décodé avec succès en tant qu'objet.                                                                                  |
| `terminated` | Boolean | Un booléen indiquant si la requête HTTP a été close, c'est-à-dire si `onTerminate` a été appelé.                                                                  |
| `usage`      | Object  | Returns token usage information from the stream data (only available in the final chunk when `stream_options.include_usage` is set to `True`). |

### usage

The `usage` property returns an object containing token usage information, available only in the final streaming chunk when enabled via `stream_options.include_usage: True` in the request parameters.

The structure is the same as [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md#usage):

| Champ                       | Type    | Description                                                                   |
| --------------------------- | ------- | ----------------------------------------------------------------------------- |
| `prompt_tokens`             | Integer | Number of tokens in the prompt.                               |
| `completion_tokens`         | Integer | Number of tokens in the completion.                           |
| `total_tokens`              | Integer | Total tokens used (prompt + completion).   |
| `prompt_tokens_details`     | Object  | Breakdown of prompt tokens (optional).     |
| `completion_tokens_details` | Object  | Breakdown of completion tokens (optional). |

> **Note:** To receive usage information in streaming responses, you must set `stream_options: {include_usage: True}` in your request parameters. See [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) for details.

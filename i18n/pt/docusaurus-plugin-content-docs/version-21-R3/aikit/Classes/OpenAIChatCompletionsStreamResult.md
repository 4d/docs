---
id: openaichatcompletionsstreamresult
title: OpenAIChatCompletionsStreamResult
---

# OpenAIChatCompletionsStreamResult

## Inherits

- [OpenAIResult](OpenAIResult.md)

## Propriedades

| Propriedade | Tipo   | Descrição                                                    |
| ----------- | ------ | ------------------------------------------------------------ |
| `data`      | Object | Contains the stream data sent by the server. |

## Propriedades calculadas

| Propriedade | Tipo                            | Descrição                                                                                            |
| ----------- | ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `choice`    | [OpenAIChoice](OpenAIChoice.md) | Returns a choice data, with a `delta` message.                                       |
| `choices`   | Collection                      | Retorna uma coleção de dados [OpenAIChoice](OpenAIChoice.md), com mensagens `delta`. |

### Overridden properties

| Propriedade  | Tipo       | Descrição                                                                                                                                                                         |
| ------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `success`    | Parâmetros | Retorna `True` se os dados de streaming foram decodificados como um objeto com sucesso.                                                                           |
| `terminated` | Parâmetros | A Boolean indicating whether the HTTP request was terminated. ie `onTerminate` called.                                                            |
| `utilização` | Object     | Returns token usage information from the stream data (only available in the final chunk when `stream_options.include_usage` is set to `True`). |

### utilização

The `usage` property returns an object containing token usage information, available only in the final streaming chunk when enabled via `stream_options.include_usage: True` in the request parameters.

The structure is the same as [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md#usage):

| Campo                       | Tipo    | Descrição                                                                     |
| --------------------------- | ------- | ----------------------------------------------------------------------------- |
| `prompt_tokens`             | Integer | Number of tokens in the prompt.                               |
| `completion_tokens`         | Integer | Number of tokens in the completion.                           |
| `total_tokens`              | Integer | Total tokens used (prompt + completion).   |
| `prompt_tokens_details`     | Object  | Breakdown of prompt tokens (optional).     |
| `completion_tokens_details` | Object  | Breakdown of completion tokens (optional). |

> **Note:** To receive usage information in streaming responses, you must set `stream_options: {include_usage: True}` in your request parameters. See [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) for details.

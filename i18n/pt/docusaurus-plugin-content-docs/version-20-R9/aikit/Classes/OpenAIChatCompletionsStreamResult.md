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

## Computed Properties

| Propriedade | Tipo                            | Descrição                                                                                            |
| ----------- | ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `choice`    | [OpenAIChoice](OpenAIChoice.md) | Returns a choice data, with a `delta` message.                                       |
| `choices`   | Collection                      | Returns a collection of [OpenAIChoice](OpenAIChoice.md) data, with `delta` messages. |

### Overrided properties

| Propriedade  | Tipo                            | Descrição                                                                                                              |
| ------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `success`    | [OpenAIChoice](OpenAIChoice.md) | Returns `True` if the streaming data was successfully decoded as an object.                            |
| `terminated` | Parâmetros                      | A Boolean indicating whether the HTTP request was terminated. ie `onTerminate` called. |

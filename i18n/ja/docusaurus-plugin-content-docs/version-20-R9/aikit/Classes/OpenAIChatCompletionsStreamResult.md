---
id: openaichatcompletionsstreamresult
title: OpenAIChatCompletionsStreamResult
---

# OpenAIChatCompletionsStreamResult

## Inherits

- [OpenAIResult](OpenAIResult.md)

## プロパティ

| プロパティ  | 型      | 説明                                                           |
| ------ | ------ | ------------------------------------------------------------ |
| `data` | Object | Contains the stream data sent by the server. |

## Computed Properties

| プロパティ     | 型                               | 説明                                                                                                   |
| --------- | ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `choice`  | [OpenAIChoice](OpenAIChoice.md) | Returns a choice data, with a `delta` message.                                       |
| `choices` | Collection                      | Returns a collection of [OpenAIChoice](OpenAIChoice.md) data, with `delta` messages. |

### Overrided properties

| プロパティ        | 型                               | 説明                                                                                                                     |
| ------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `success`    | [OpenAIChoice](OpenAIChoice.md) | Returns `True` if the streaming data was successfully decoded as an object.                            |
| `terminated` | Boolean                         | A Boolean indicating whether the HTTP request was terminated. ie `onTerminate` called. |

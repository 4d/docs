---
id: openaichatcompletionsstreamresult
title: OpenAIChatCompletionsStreamResult
---

# OpenAIChatCompletionsStreamResult

## Inherits

- [OpenAIResult](OpenAIResult.md)

## Propriétés

| Propriété | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| `data`    | Object | Contains the stream data sent by the server. |

## Computed Properties

| Propriété | Type                            | Description                                                                                          |
| --------- | ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `choice`  | [OpenAIChoice](OpenAIChoice.md) | Returns a choice data, with a `delta` message.                                       |
| `choices` | Collection                      | Returns a collection of [OpenAIChoice](OpenAIChoice.md) data, with `delta` messages. |

### Overrided properties

| Propriété    | Type                            | Description                                                                                                            |
| ------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `success`    | [OpenAIChoice](OpenAIChoice.md) | Returns `True` if the streaming data was successfully decoded as an object.                            |
| `terminated` | Boolean                         | A Boolean indicating whether the HTTP request was terminated. ie `onTerminate` called. |

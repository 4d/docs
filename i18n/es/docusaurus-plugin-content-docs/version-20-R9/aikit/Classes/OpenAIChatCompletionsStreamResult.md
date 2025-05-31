---
id: openaichatcompletionsstreamresult
title: OpenAIChatCompletionsStreamResult
---

# OpenAIChatCompletionsStreamResult

## Hereda

- [OpenAIResult](OpenAIResult.md)

## Propiedades

| Propiedad | Tipo   | Descripción                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| `data`    | Object | Contains the stream data sent by the server. |

## Propiedades calculadas

| Propiedad | Tipo                            | Descripción                                                                                           |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `choice`  | [OpenAIChoice](OpenAIChoice.md) | Returns a choice data, with a `delta` message.                                        |
| `choices` | Collection                      | Devuelve una colección de datos [OpenAIChoice](OpenAIChoice.md) con mensajes `delta`. |

### Overrided properties

| Propiedad    | Tipo                            | Descripción                                                                                                            |
| ------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `success`    | [OpenAIChoice](OpenAIChoice.md) | Returns `True` if the streaming data was successfully decoded as an object.                            |
| `terminated` | Boolean                         | A Boolean indicating whether the HTTP request was terminated. ie `onTerminate` called. |

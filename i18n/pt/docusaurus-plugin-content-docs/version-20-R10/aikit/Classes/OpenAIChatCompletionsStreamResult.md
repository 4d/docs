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

### Overrided properties

| Propriedade  | Tipo                            | Descrição                                                                                                              |
| ------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `success`    | [OpenAIChoice](OpenAIChoice.md) | Retorna `True` se os dados de streaming foram decodificados como um objeto com sucesso.                |
| `terminated` | Parâmetros                      | A Boolean indicating whether the HTTP request was terminated. ie `onTerminate` called. |

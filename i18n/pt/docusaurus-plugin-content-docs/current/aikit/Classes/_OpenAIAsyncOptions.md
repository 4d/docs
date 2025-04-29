---
id: _openaiasyncoptions
title: _OpenAIAsyncOptions
---

# _OpenAIAsyncOptions

The `_OpenAIAsyncOptions` internal class provides function to handle asynchronously HTTP response and pass it to user configured formula.

## Propriedades

### HTTP Properties

| Propriedade | Tipo         |
| ----------- | ------------ |
| `method`    | Text         |
| `headers`   | Object       |
| `dataType`  | Text         |
| `body`      | Diferente de |
| \`timeout   | Integer      |

### Class instances Properties

| Propriedade  | Tipo                                                                  |
| ------------ | --------------------------------------------------------------------- |
| `client`     | [OpenAI](OpenAI.md)                                                   |
| `parâmetros` | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) |
| `resultado`  | [OpenAIResult](OpenAIResult.md)                                       |

## Funções

### onTerminate()

On terminate send [OpenAIResult](OpenAIResult.md) to the callback "formula".

### onData()

On data receive send [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md) to the callback "formula".

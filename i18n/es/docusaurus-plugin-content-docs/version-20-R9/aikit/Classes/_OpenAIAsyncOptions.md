---
id: _openaiasyncoptions
title: _OpenAIAsyncOptions
---

# _OpenAIAsyncOptions

The `_OpenAIAsyncOptions` internal class provides function to handle asynchronously HTTP response and pass it to user configured formula.

## Propiedades

### HTTP Properties

| Propiedad  | Tipo    |
| ---------- | ------- |
| `method`   | Text    |
| `headers`  | Object  |
| `dataType` | Text    |
| `body`     | Variant |
| \`timeout  | Integer |

### Class instances Properties

| Propiedad    | Tipo                                                                  |
| ------------ | --------------------------------------------------------------------- |
| `client`     | [OpenAI](OpenAI.md)                                                   |
| `parámetros` | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) |
| `resultado`  | [OpenAIResult](OpenAIResult.md)                                       |

## Funciones

### onTerminate()

On terminate send [OpenAIResult](OpenAIResult.md) to the callback "formula".

### onData()

On data receive send [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md) to the callback "formula".

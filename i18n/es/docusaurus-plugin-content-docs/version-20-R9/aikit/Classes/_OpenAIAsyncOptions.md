---
id: _openaiasyncoptions
title: _OpenAIAsyncOptions
---

# _OpenAIAsyncOptions

The `_OpenAIAsyncOptions` internal class provides function to handle asynchronously HTTP response and pass it to user configured formula.

## Propiedades

### Propiedades HTTP

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

On terminate envía [OpenAIResult](OpenAIResult.md) a la retrollamada "formula".

### onData()

On data receive send [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md) to the callback "formula".

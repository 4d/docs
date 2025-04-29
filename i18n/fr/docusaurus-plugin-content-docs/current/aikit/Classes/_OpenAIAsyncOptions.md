---
id: _openaiasyncoptions
title: _OpenAIAsyncOptions
---

# _OpenAIAsyncOptions

The `_OpenAIAsyncOptions` internal class provides function to handle asynchronously HTTP response and pass it to user configured formula.

## Propriétés

### HTTP Properties

| Propriété  | Type    |
| ---------- | ------- |
| `method`   | Text    |
| `headers`  | Object  |
| `dataType` | Text    |
| `body`     | Variant |
| \`timeout  | Integer |

### Class instances Properties

| Propriété    | Type                                                                  |
| ------------ | --------------------------------------------------------------------- |
| `client`     | [OpenAI](OpenAI.md)                                                   |
| `paramètres` | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) |
| `result`     | [OpenAIResult](OpenAIResult.md)                                       |

## Fonctions

### onTerminate()

On terminate send [OpenAIResult](OpenAIResult.md) to the callback "formula".

### onData()

On data receive send [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md) to the callback "formula".

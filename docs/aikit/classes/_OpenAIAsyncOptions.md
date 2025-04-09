---
id: _openaiasyncoptions
title: _OpenAIAsyncOptions
---

# _OpenAIAsyncOptions

The `_OpenAIAsyncOptions` internal class provides function to handle asynchronously HTTP response and pass it to user configured formula.

## Properties

### HTTP Properties

| Property    | Type    |
|-------------|---------|
| method      | Text    |
| headers     | Object  |
| dataType    | Text    |
| body        | Variant |
| timeout     | Integer  |

### Class instances Properties

| Property    | Type    |
|-------------|---------|
| client      | [OpenAI](OpenAI.md) |
| parameters  | [OpenAIChatCompletionsParameters](OpenAIChatCompletionParameters.md) |
| result      | [OpenAIResult](OpenAIResult.md) |

## Functions

### onTerminate

On terminate send [OpenAIResult](OpenAIResult.md) to the callback "formula".

### onData

On data receive send [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md) to the callback "formula".

---
id: _openaiasyncoptions
title: _OpenAIAsyncOptions
---

# _OpenAIAsyncOptions

The `_OpenAIAsyncOptions` internal class provides function to handle asynchronously HTTP response and pass it to user configured formula.

## プロパティ

### HTTP Properties

| プロパティ      | 型       |
| ---------- | ------- |
| `method`   | Text    |
| `headers`  | Object  |
| `dataType` | Text    |
| `body`     | Variant |
| \`timeout  | Integer |

### Class instances Properties

| プロパティ    | 型                                                                     |
| -------- | --------------------------------------------------------------------- |
| `client` | [OpenAI](OpenAI.md)                                                   |
| `引数`     | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) |
| `戻り値`    | [OpenAIResult](OpenAIResult.md)                                       |

## 関数

### onTerminate()

On terminate send [OpenAIResult](OpenAIResult.md) to the callback "formula".

### onData()

On data receive send [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md) to the callback "formula".

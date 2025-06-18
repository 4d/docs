---
id: _openaiasyncoptions
title: _OpenAIAsyncOptions
---

# _OpenAIAsyncOptions

`_OpenAIAsyncOptions` 内部クラスは、非同期の HTTP レスポンスを管理する関数を提供し、またそれをユーザーが設定したフォーミュラに渡します。

## プロパティ

### HTTPプロパティ

| プロパティ      | 型       |
| ---------- | ------- |
| `method`   | Text    |
| `headers`  | Object  |
| `dataType` | Text    |
| `body`     | Variant |
| \`timeout  | Integer |

### クラスインスタンスプロパティ

| プロパティ    | 型                                                                     |
| -------- | --------------------------------------------------------------------- |
| `client` | [OpenAI](OpenAI.md)                                                   |
| `引数`     | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) |
| `戻り値`    | [OpenAIResult](OpenAIResult.md)                                       |

## 関数

### onTerminate()

On terminate 関数は[OpenAIResult](OpenAIResult.md) をコールバックとして指定された"formula" へと送ります。

### onData()

On data は [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md) をコールバックとして指定された"formula" へと送ります。

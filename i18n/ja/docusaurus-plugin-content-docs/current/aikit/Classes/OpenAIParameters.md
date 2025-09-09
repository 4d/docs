---
id: openaiparameters
title: OpenAIParameters
---

# OpenAIParameters

`OpenAIParameters` クラスはOpenAI API とやり取りをするための実行パラメーターとリクエストパラメーターを管理するために設計されています。

## プロパティ

### Asynchronous Callback Properties

Use this callback property to receive the result regardless of success or error:

| プロパティ                                              | 型                           | 説明                                         |
| -------------------------------------------------- | --------------------------- | ------------------------------------------ |
| `onTerminate`<br>(or `formula`) | 4D.Function | 終了時に非同期で呼び出す関数。 カレントプロセスが終了しないように注意してください。 |

Use these callback properties for more granular control over success and error handling:

| プロパティ        | 型                           | 説明                                                                                                                           |
| ------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `onResponse` | 4D.Function | A function to be called synchronously when the request finishes **successfully**. カレントプロセスが終了しないように注意してください。 |
| `onError`    | 4D.Function | A function to be called asynchronously when the request finishes **with errors**. カレントプロセスが終了しないように注意してください。 |

> The callback function will receive the same result object type (one of [OpenAIResult](Classes/OpenAIResult.md) child classes) that would be returned by the function in synchronous code.

See [documentation about asynchronous code for examples](../asynchronous-call.md)

### Network Properties

| プロパティ          | 型         | 説明                                                                          |
| -------------- | --------- | --------------------------------------------------------------------------- |
| `timeout`      | Real      | クライアントレベルのリクエストのデフォルトのタイムアウトをオーバーライドします(秒単位)。 デフォルトは0です。 |
| `httpAgent`    | HTTPAgent | クライアントレベルのリクエストのデフォルトのHTTP エージェントをオーバーライドします。                               |
| `maxRetries`   | Integer   | リクエストのリトライの最大回数。 (コードが非同期でない場合、つまり関数が提供されていない場合のみ)       |
| `extraHeaders` | Object    | リクエストに付随して送信する追加のヘッダー。                                                      |

### OpenAPI Properties

| プロパティ  | 型    | 説明                                                 |
| ------ | ---- | -------------------------------------------------- |
| `user` | Text | エンドユーザーを表す固有の識別子。これはOpenAI が不正利用をモニターし検知するのに役立ちます。 |

### Others

| プロパティ   | 型       | 説明                                                         |
| ------- | ------- | ---------------------------------------------------------- |
| `throw` | Boolean | true の場合、エラーが発生した場合にエラーをスローします。 コールバックフォーミュラが定義されていない場合のみ。 |

## 継承クラス

特定の用途のためにこのクラスの機能を拡張するために、いくつかのクラスが`OpenAIParameters` クラスを継承します。 `OpenAIParameters` 以下はクラスを拡張するクラスの一部です:

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)
- [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)
- [OpenAIImageParameters](OpenAIImageParameters.md)
- [OpenAIEmbeddingsParameters](OpenAIEmbeddingsParameters.md)

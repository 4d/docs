---
id: openaiparameters
title: OpenAIParameters
---

# OpenAIParameters

`OpenAIParameters` クラスはOpenAI API とやり取りをするための実行パラメーターとリクエストパラメーターを管理するために設計されています。

## プロパティ

### 非同期プログラミングのプロパティ

| プロパティ                        | 型        | 説明                                                         |
| ---------------------------- | -------- | ---------------------------------------------------------- |
| `formula` あるいは `onTerminate` | Function | 終了時に非同期で呼び出す関数。 カレントプロセスが終了しないように注意してください。                 |
| `onResponse`                 | Function | リクエストが正常に終了したときに非同期で呼び出す関数。 カレントプロセスが終了しないように注意してください。     |
| `onError`                    | Function | リクエストがエラーで終了したときに非同期で呼び出す関数。 カレントプロセスが終了しないように注意してください。    |
| `throw`                      | Boolean  | true の場合、エラーが発生した場合にエラーをスローします。 コールバックフォーミュラが定義されていない場合のみ。 |

詳細については[非同期コードについてのドキュメンテーション](../asynchronous-call.md) を参照してください。

### ネットワークプロパティ

| プロパティ          | 型         | 説明                                                                          |
| -------------- | --------- | --------------------------------------------------------------------------- |
| `timeout`      | Real      | クライアントレベルのリクエストのデフォルトのタイムアウトをオーバーライドします(秒単位)。 デフォルトは0です。 |
| `httpAgent`    | HTTPAgent | クライアントレベルのリクエストのデフォルトのHTTP エージェントをオーバーライドします。                               |
| `maxRetries`   | Integer   | リクエストのリトライの最大回数。 (コードが非同期でない場合、つまり関数が提供されていない場合のみ)       |
| `extraHeaders` | Object    | リクエストに付随して送信する追加のヘッダー。                                                      |

### OpenAPIプロパティ

| プロパティ  | 型    | 説明                                                 |
| ------ | ---- | -------------------------------------------------- |
| `user` | Text | エンドユーザーを表す固有の識別子。これはOpenAI が不正利用をモニターし検知するのに役立ちます。 |

## 継承クラス

特定の用途のためにこのクラスの機能を拡張するために、いくつかのクラスが`OpenAIParameters` クラスを継承します。 `OpenAIParameters` 以下はクラスを拡張するクラスの一部です:

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)
- [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)
- [OpenAIImageParameters](OpenAIImageParameters.md)

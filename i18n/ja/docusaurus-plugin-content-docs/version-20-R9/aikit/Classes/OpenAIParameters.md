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

| プロパティ          | 型         | 説明                                                                                                                                                       |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timeout`      | Real      | Overrides the client-level default timeout for the request, in seconds. Default is 0.                                    |
| `httpAgent`    | HTTPAgent | Overrides the client-level default HTTP agent for the request.                                                                           |
| `maxRetries`   | Integer   | The maximum number of retries for the request. (Only if code not asynchrone ie. no function provided) |
| `extraHeaders` | Object    | Extra headers to send with the request.                                                                                                  |

### OpenAPI properties

| プロパティ  | 型    | 説明                                                                                                          |
| ------ | ---- | ----------------------------------------------------------------------------------------------------------- |
| `user` | Text | A unique identifier representing the end-user, which helps OpenAI monitor and detect abuse. |

## 継承クラス

Several classes inherit from `OpenAIParameters` to extend its functionality for specific use cases. Below are some of the classes that extend `OpenAIParameters`:

- [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)
- [OpenAIChatCompletionsMessagesParameters](OpenAIChatCompletionsMessagesParameters.md)
- [OpenAIImageParameters](OpenAIImageParameters.md)

---
id: openai
title: OpenAI
---

# OpenAI

`OpenAI` クラスは、様々なOpenAI API リソースにアクセスするためのクライアントを提供します。 これにはAPI 設定を管理するプロパティやOpenAI エンドポイントへの HTTPリクエストを実行するためのメソッドなどが含まれます。

## 設定プロパティ

| プロパティ名    | 型    | 説明                                                         | 任意          |
| --------- | ---- | ---------------------------------------------------------- | ----------- |
| `apiKey`  | Text | あなたの [OpenAI API キー](https://platform.openai.com/api-keys) | OpenAI では必須 |
| `baseURL` | Text | OpenAI API リクエストのためのベースURL。                                | ◯           |
| `組織`      | Text | あなたの OpenAI 組織 ID。                                         | ◯           |
| `project` | Text | あなたの OpenAI プロジェクト ID。                                     | ◯           |

### 追加のHTTPプロパティ

| プロパティ名          | 型                                                                                | 説明                                      |
| --------------- | -------------------------------------------------------------------------------- | --------------------------------------- |
| `timeout`       | Real                                                                             | タイムアウトが発生するまでの時間(秒)。 |
| `maxRetries`    | Real                                                                             | 失敗した場合の最大再試行回数。                         |
| `httpAgent`     | [4D.HTTPAgent](https://developer.4d.com/docs/API/HTTPAgentClass) | リクエストに使用された HTTPエージェント。                 |
| `customHeaders` | Real                                                                             | HTTP リクエストに含めるカスタムのヘッダー。                |

### Class constructor

OpenAI クライアントクラスのインスタンスを作成します。

| 引数名      | 型             | 説明                                    |
| -------- | ------------- | ------------------------------------- |
| *apiKey* | テキストまたはオブジェクト | apiKey。型としてテキストまたはオブジェクトを指定することができます。 |

#### API キー

```4d
// テキストとして渡す
var $client:=cs.AIKit.OpenAI.new("your api key")
// オブジェクトとして渡す
var $client:=cs.AIKit.OpenAI.new({apiKey: "your api key"})
```

#### サーバーURL

[互換性のあるプロバイダー](../compatible-openai.md) API に対しては、サーバーURL を設定することができます。

```4d
var $client:=cs.AIKit.OpenAI.new({apiKey: "your api key"; baseURL: "https://server.ai"})
```

あるいはインスタンスを作成した後に変更する場合

```4d
$client.baseURL:="https://server.ai"
```

## APIリソース

API はOpenAI のサービスとシームレスにやりとりすることを可能にする複数のリソースへのアクセスを提供します。 それぞれのリソースは専用のAPI クラスにカプセル化されており、様々な機能と対話するための構造化された、直感的な方法を提供しています。

| プロパティ名        | 型                                               | 説明                 |
| ------------- | ----------------------------------------------- | ------------------ |
| `models`      | [OpenAIModelsAPI](OpenAIModelsAPI.md)           | Models API へのアクセス。 |
| `chat`        | [OpenAIChatAPI](OpenAIChatAPI.md)               | Chat API へのアクセス。   |
| `images`      | [OpenAIImagesAPI](OpenAIImagesAPI.md)           | 画像 API へのアクセス。     |
| `moderations` | [OpenAIModerationsAPI](OpenAIModerationsAPI.md) | モデレーションAPI へのアクセス。 |

### 使用例

```4d
$client.chat.completions.create(...)
$client.images.generate(...)
$client.model.lists(...)
```

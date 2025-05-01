---
id: overview
title: 4D-AIKit
---

# 4D-AIKit

## 概要

4D AIKit は、サードパーティのAI API との相互通信を可能にするビルトインの4D コンポーネントです。

## OpenAI

[`OpenAI`](Classes/OpenAI.md) クラスを使用すると、[OpenAI API](https://platform.openai.com/docs/api-reference/) へのリクエストを行うことが可能になります。

### 設定

最初に、API キーを使用してOpenAI クライアントを初期化します。

```4d
var $client:=cs.AIKit.OpenAI.new("あなたの API キー")
```

[互換性のあるプロバイダー](compatible-openai.md) API に対しては、 `baseURL` 引数を設定することでサーバーURL を設定することができます。

```4d
var $client:=cs.AIKit.OpenAI.new({apiKey: "あなたの API キー"; baseURL: "https://your.server.ai"})
```

または

```4d
$client.baseURL:="https://your.server.ai"
```

### リクエストをする

`OpenAI` はリソースと呼ばれる様々なエンドポイントを提供していて、それぞれが色々な機能を提供しています。

```4d
var $result:=$client.<resource>.<function>(<parameters...>)
```

`$result` には`HTTPRequest` と、`success` ステータス、そして`errors` コレクションなどが含まれます。 詳細については [OpenAIResult](Classes/OpenAIResult.md) を参照して下さい。

また以下の例題も参照して下さい。

#### チャット

https://platform.openai.com/docs/api-reference/chat

##### チャット補完

https://platform.openai.com/docs/api-reference/chat/create

```4d
var $messages:=[{role: "system"; content: "You are a helpful assistant."}]
$messages.push({role: "user"; content: "Could you explain me why 42 is a special number"})
var $result:=$client.chat.completions.create($messages; {model: "gpt-4o-mini"})
// $result.choice に結果が戻される
```

##### チャットヘルパー

このヘルパーを使用すると、ユーザーメッセージの一覧とアシスタントの返答のリストを管理することができます。

```4d
var $helper:=$client.chat.create("You are a helpful assistant.")
var $result:=$helper.prompt("Could you explain me why 42 is a special number")
$result:=$helper.prompt("and could you decompose this number")
// $helper.messages 内に会話ログあり
```

##### ビジョンヘルパー

このヘルパーはチャットを通して画像解析を可能にします。

```4d
var $result:=$client.chat.vision.create($imageUrl).prompt("give me a description of the image")
```

#### 画像

https://platform.openai.com/docs/api-reference/images

```4d
var $images:=$client.images.generate("A futuristic city skyline at sunset"; {size: "1024x1024"}).images
```

#### モデル

https://platform.openai.com/docs/api-reference/models

モデルの完全なリストを取得する例

```4d
var $models:=$client.models.list().models // その後 `id` を抽出します
```

IDを使用して一つのモデルの情報を取得する例

```4d
var $model:=$client.models.retrieve("a model id").model
```

#### モデレーション

https://platform.openai.com/docs/api-reference/moderations

```4d
var $moderation:=$client.moderations.create("This text contains inappropriate language and offensive behavior.").moderation
```

#### 非同期コード

リクエストをAPI に送信する際にOpenAPI のレスポンスを待ちたくない場合には、非同期コードを使用する必要があります。 戻り値のオブジェクトはコールバック関数内に受け取られます。

詳細については[例題の詳細なドキュメント](asynchronous-call.md) を参照して下さい。

## Copyright

- This library is not affiliated with, endorsed by, or officially connected to OpenAI in any way.
- "OpenAI" and any related marks are trademarks or registered trademarks of OpenAI, LLC. All rights related to OpenAI's services, APIs, and technologies remain the property of OpenAI.
- This project simply provides an interface to OpenAI’s services and does not claim any ownership over their technology, branding, or intellectual property.


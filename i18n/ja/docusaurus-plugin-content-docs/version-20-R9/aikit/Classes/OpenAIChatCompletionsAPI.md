---
id: openaichatcompletionsapi
title: OpenAIChatCompletionsAPI
---

# OpenAIChatCompletionsAPI

`OpenAIChatCompletionsAPI` クラスはOpenAI のAPI でチャット補完を管理するためにデザインされています。 これはチャット補完を作成、取得、更新、削除、そしてリストを表示するメソッドを提供します。

https://platform.openai.com/docs/api-reference/chat

## 関数

### create()

**create**(*messages* : Collection of [OpenAIMessage](OpenAIMessage.md) ; *parameters* : [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md)) : Object

| 引数           | 型                                                                     | 説明                   |
| ------------ | --------------------------------------------------------------------- | -------------------- |
| *messages*   | [OpenAIMessage](OpenAIMessage.md) のコレクション                             | リクエストに含めたいチャットメッセージ。 |
| *parameters* | [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) | チャット補完リクエスト用のパラメーター。 |
| 戻り値          | Object                                                                | チャット補完リクエストの結果。      |

指定されたチャット対話のモデルレスポンスを作成します。

https://platform.openai.com/docs/api-reference/chat/create

#### 使用例

完全なメッセージリストの一覧を提供する場合

```4d
var $messages:=[]
$messages.push({role: "system"; content: "You are a helpful assistant."})
$messages.push({"role":"user"; "content": "Hello, how are you?"})
// ...

var $result:=$client.chat.completions.create($messages; {model: "gpt-4o-mini" })
```

レスポンスをテキストとして取得する場合

```4d
var $text:=$result.choice.text
```

次の補完リクエストのために、アシスタントのレスポンスを追加する

```
$messages.push($result.choice.message) // {"role":"assistant"; "content": "xxx" }
```

### retrieve()

**retrieve**(*completionID* : Text; *parameters* : OpenAIParameters) : Object

| 引数             | 型                                       | 説明                |
| -------------- | --------------------------------------- | ----------------- |
| *completionID* | Text                                    | 取得したいチャット補完のID。   |
| *parameters*   | [OpenAIParameters](OpenAIParameters.md) | リクエスト用の追加のパラメーター。 |
| 戻り値            | Object                                  | 取得したチャット補完オブジェクト。 |

保存されたチャット補完を取得する。

https://platform.openai.com/docs/api-reference/chat/get

### update()

**update**(*completionID* : Text; *metadata* : Object, *parameters* : OpenAIParameters) : Object

| 引数             | 型                                       | 説明                   |
| -------------- | --------------------------------------- | -------------------- |
| *completionID* | Text                                    | 更新したいチャット補完のID。      |
| *metadata*     | Object                                  | チャット補完を更新するためのメタデータ。 |
| *parameters*   | [OpenAIParameters](OpenAIParameters.md) | リクエスト用の追加のパラメーター。    |
| 戻り値            | Object                                  | 更新されたチャット補完オブジェクト。   |

保存されたチャット補完を変更する。

https://platform.openai.com/docs/api-reference/chat/update

### delete()

**delete**(*completionID* : Text; *parameters* : OpenAIParameters) : Object

| 引数             | 型                                       | 説明                |
| -------------- | --------------------------------------- | ----------------- |
| *completionID* | Text                                    | 削除したいチャット補完のID。   |
| *parameters*   | [OpenAIParameters](OpenAIParameters.md) | リクエスト用の追加のパラメーター。 |
| 戻り値            | Boolean                                 | 削除が成功したかどうかの結果。   |

保存されたチャット補完を削除する。

https://platform.openai.com/docs/api-reference/chat/delete

### list()

**list**(*parameters* : OpenAIChatCompletionsListParameters) : Collection

| 引数           | 型                                                                             | 説明                       |
| ------------ | ----------------------------------------------------------------------------- | ------------------------ |
| *parameters* | [OpenAIChatCompletionsListParameters](OpenAIChatCompletionsListParameters.md) | チャット補完の一覧を表示するためのパラメーター。 |
| 戻り値          | Collection                                                                    | 保存されたチャット補完のコレクション。      |

保存されたチャット補完を一覧表示する。

https://platform.openai.com/docs/api-reference/chat/list

---
id: openaimessage
title: OpenAIMessage
---

# OpenAIMessage

`OpenAIMessage` クラスはロール、コンテンツ、そしてオプションとしてユーザーを格納した構造化されたメッセージを表します。 このクラスはメッセージのテキストや他のコンテンツを操作・取得するメソッドを提供します。

## プロパティ

| プロパティ          | 型          | 説明                                                                                  |
| -------------- | ---------- | ----------------------------------------------------------------------------------- |
| `role`         | Text       | メッセージの役割(例: "user"、"assistant"、"system"、"tool")。 |
| `内容`           | Variant    | メッセージのコンテンツ。テキスト、またはオブジェクトのコレクションのいずれかです。                                           |
| `user`         | Text       | メッセージに割り当てられたユーザーを表すオプションのプロパティ。                                                    |
| `tool_calls`   | Collection | アシスタントからリクエストされたツール呼び出しのコレクション。 各ツール呼び出しには `id`、`type`、`function` オブジェクトが含まれます。     |
| `tool_call_id` | Text       | このメッセージが返答しているツール呼び出しのID (`role` が "tool"の場合に使用されます)。            |

## 計算プロパティ

| プロパティ  | 型    | 説明                 |
| ------ | ---- | ------------------ |
| `テキスト` | Text | テキストメッセージを表すプロパティ。 |

## 関数

### addImageURL()

**addImageURL**(*imageURL* : Text; *detail* : Text)

| 引数         | 型    | 説明                |
| ---------- | ---- | ----------------- |
| *imageURL* | Text | メッセージに追加する画像のURL。 |
| *detail*   | Text | 画像に関する追加の詳細情報。    |

メッセージのコンテンツに画像URL を追加します。

### addFileId()

**addFileId**(*fileId* : Text)

| 引数       | 型    | 説明                                                 |
| -------- | ---- | -------------------------------------------------- |
| *fileId* | Text | The file ID to add to the message. |

Adds a file reference to the content of the message. If the content is currently text, it will be converted to a collection format.

## 使用例

### Basic Text Message

```4d
// Create an instance of OpenAIMessage
var $message:=cs.AIKit.OpenAIMessage.new({role: "user"; content: "Hello!"})
```

### Adding Images

```4d
var $message:=cs.AIKit.OpenAIMessage.new({role: "user"; content: "Please analyze this image:"})

// Add an image URL with details
$message.addImageURL("http://example.com/image.jpg"; "high")
```

### Adding File

```4d
// Upload a file with user_data purpose
var $file:=File("/RESOURCES/document.pdf")
var $uploadResult:=$client.files.create($file; "user_data")

If ($uploadResult.success)
    var $uploadedFile:=$uploadResult.file
    
    // Create message and attach the file using its ID
    var $message:=cs.AIKit.OpenAIMessage.new({role: "user"; content: "Please analyze this document:"})
    $message.addFileId($uploadedFile.id)
    
    // $message.content -> [{type: "text"; text: "Please analyze this document:"}; {type: "file"; file_id: "file-abc123"}]
End if
```

### ツール呼び出しメッセージに応答する

アシスタントが外部関数を使用する必要がある場合、関数の実行をリクエストするための、`tool_calls` を持ったメッセージを生成します。

**ツール呼び出しをリクエストするアシスタントメッセージ:**

```json
{
  "role": "assistant",
  "tool_calls": [
    {
      "id": "call_12345",
      "type": "function",
      "function": {
        "name": "get_database_tables",
        "arguments": "{}"
      }
    }
  ]
}
```

**ツール呼び出しを管理する:**

ツール呼び出しメッセージを受信した場合、以下のことを行う必要があります:

1. **関数の情報を抽出する:**
   - `function.name`: 呼び出す関数の名前([OpenAITool](OpenAITool.md) 内で定義されている関数と合致する必要があります- この名前に応じて実行するコードを選択することができます)
   - `function.arguments`: `JSON Parse` でパースされる必要のある、関数の引数を格納したJSON 文字列
   - `id`: この特定のツール呼び出しのための固有の識別子

2. **関数を実行する:**
   (JSON 文字列になっている)引数をパースし、OpenAITool 設定内で定義された対応する関数を呼び出します。

3. **ツールの結果で応答する:**
   オリジナルのリクエストの`tool_call_id` を使用してレスポンスメッセージを作成します。

**ツールのレスポンスの一例:**

```4d
// 関数の引数をパースする(あれば)
var $arguments : Object := JSON Parse($toolCall.function.arguments)

// "get_database_tables" に対応するコードを実行する
var $tableNames: Text := OB Keys(ds).join(", ")

// 必要な tool_call_id を持ったツールレスポンスメッセージを作成する
var $toolResponse:=cs.AIKit.OpenAIMessage.new({ \
  role: "tool"; \
  tool_call_id: "call_12345"; \
  content: $tableNames \
})
// 会話にそれを追加して続行する
```

**重要:** レスポンス内の`tool_call_id` は、元のツール呼び出しの`id` と完全に一致している必要があります。 これによってAI モデルはあなたのレスポンスと、呼び出しを行った特定の関数を正確に結びつけることができます。

## 参照

- [OpenAITool](OpenAITool.md) - ツール定義に必要
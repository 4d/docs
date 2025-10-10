---
id: openaimessage
title: OpenAIMessage
---

# OpenAIMessage

`OpenAIMessage` クラスはロール、コンテンツ、そしてオプションとしてユーザーを格納した構造化されたメッセージを表します。 このクラスはメッセージのテキストや他のコンテンツを操作・取得するメソッドを提供します。

## プロパティ

| プロパティ          | 型          | 説明                                                                                                                                                       |
| -------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`         | Text       | The role of the message (e.g., "user", "assistant", "system", "tool").                |
| `内容`           | Variant    | メッセージのコンテンツ。テキスト、またはオブジェクトのコレクションのいずれかです。                                                                                                                |
| `user`         | Text       | メッセージに割り当てられたユーザーを表すオプションのプロパティ。                                                                                                                         |
| `tool_calls`   | Collection | A collection of tool calls requested by the assistant. Each tool call contains an `id`, `type`, and a `function` object. |
| `tool_call_id` | Text       | The ID of the tool call that this message is responding to (used when `role` is "tool").                              |

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

## 使用例

### Create a simple message and attach an image

```4d
// OpenAIMessage のインスタンスを作成
var $message:=cs.AIKit.OpenAIMessage({role: "user"; content: "Hello!"})

// 画像 URL と詳細を追加
$message.addImageURL("http://example.com/image.jpg"; "high")
```

### Respond to a tool call message

When an assistant needs to use external functions, it generates a message with `tool_calls` to request function execution.

**Assistant message requesting tool calls:**

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

**Handling the tool call:**

When you receive a tool call message, you need to:

1. **Extract the function information:**
   - `function.name`: The name of the function to call (must match a function defined in your [OpenAITool](OpenAITool.md) - you can select code to execute according to this name)
   - `function.arguments`: A JSON string containing the function parameters that must be parsed with `JSON Parse`
   - `id`: The unique identifier for this specific tool call

2. **Execute the function:**
   Parse the arguments (which is a JSON string) and call the corresponding function that you defined in your OpenAITool configuration.

3. **Respond with the tool result:**
   Create a response message using the exact `tool_call_id` from the original request.

**Example tool response:**

```4d
// Parse the function arguments (if any)
var $arguments : Object := JSON Parse($toolCall.function.arguments)

// Execute your code corresponding to "get_database_tables" 
var $tableNames: Text := OB Keys(ds).join(", ")

// Create the tool response message with the required tool_call_id
var $toolResponse:=cs.AIKit.OpenAIMessage.new({ \
  role: "tool"; \
  tool_call_id: "call_12345"; \
  content: $tableNames \
})
// Add it to the conversation and continue
```

**Important:** The `tool_call_id` in your response must exactly match the `id` from the original tool call. This allows the AI model to correctly associate your response with the specific function call that was made.

## 参照

- [OpenAITool](OpenAITool.md) - For tool definition
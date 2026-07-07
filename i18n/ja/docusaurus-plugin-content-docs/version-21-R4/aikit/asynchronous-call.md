---
id: asynchronous-call
title: 非同期コード
---

# 非同期コード

リクエストをAPI に送信する際にOpenAPI のレスポンスを待ちたくない場合には、非同期コードを使用する必要があります。

非同期での呼び出しを行うためには、[OpenAIParameters](Classes/OpenAIParameters.md) オブジェクト引数に結果を受け取るためのコールバック `4D.Function`(`Formula`) を提供する必要があります。 For streaming chat completion see [OpenAIChatCompletionsParameters](Classes/OpenAIChatCompletionsParameters.md). For streaming chat completion see [OpenAIChatCompletionsParameters](Classes/OpenAIChatCompletionsParameters.md).

コールバック関数は、同期コード内での関数によって返される結果のオブジェクト型([OpenAIResult](Classes/OpenAIResult.md) 子クラスのうちのいずれか)と同じものを受け取ります。 以下の例を参照. 以下の例を参照.

## プロセスに関する注意

非同期メソッドは [4D.HTTPRequest](https://developer.4d.com/docs/API/HTTPRequestClass) に基づいているもので、レスポンスはカレントプロセス内で受信されます。

> ⚠️ もしカレントのメソッドの終わりでプロセスも終了する(例: New process を使用している、あるいはメソッドエディターでコードをテストしている)場合、コールバックフォーミュラは非同期に呼び出されない可能性があります。 そのような場合には、`CALL WORKER` あるいは `CALL FORM` の使用を検討して下さい。 そのような場合には、`CALL WORKER` あるいは `CALL FORM` の使用を検討して下さい。

## 使用例

### モデルリスト

```4d
$client.models.list({formula: Formula(MyReceiveMethod($1))})
```

`$1` は[OpenAIModelListResult](Classes/OpenAIModelListResult.md) のインスタンスのため、`MyReceiveMethod` メソッドの内容は例えば以下のようになります:

```4d
#DECLARE($result: cs.AIKit.OpenAIModelListResult)

If($result.success)

   Form.models:=$result.models

Else

  Alert($result.errors.formula(Formula(JSON Stringify($1))).join("\n"))

End if
```

### チャット補完

```4d
var $messages:=[{role: "system"; content: "You are a helpful assistant."}]
$messages.push({role: "user"; content: "Could you explain me why 42 is a special number"})

$client.chat.completions.create($messages; { onResponse: Formula(MyChatCompletionsReceiveMethod($1))})
```

`$1` は[OpenAIChatCompletionsResult](Classes/OpenAIChatCompletionsResult.md) のインスタンスのため、`MyChatCompletionsReceiveMethod` メソッドの内容は例えば以下のようになります:

```4d
#DECLARE($result: cs.AIKit.OpenAIChatCompletionsResult)

ASSERT($result.success) // ここでは onResponse を使用するため、成功した場合のみコールバックを受け取る
Form.assistantMessage:=$result.choices[0].text
```

### chat completions with streaming

When you want to receive the response progressively as it's being generated (streaming), you can use the `stream` parameter along with an `onData` callback:

```4d
var $messages:=[{role: "system"; content: "You are a helpful assistant."}]
$messages.push({role: "user"; content: "Could you explain me why 42 is a special number"})

// Enable streaming and provide onData callback
$client.chat.completions.create($messages; { \
    stream: True; \
    onData: Formula(MyStreamDataReceiveMethod($1)); \
    onTerminate: Formula(MyStreamTerminateMethod($1)) \
})
```

The `onData` callback will be called multiple times as data chunks arrive. `$1` will be an instance of [OpenAIChatCompletionsStreamResult](Classes/OpenAIChatCompletionsStreamResult.md):

```4d
// MyStreamDataReceiveMethod
#DECLARE($streamResult: cs.AIKit.OpenAIChatCompletionsStreamResult)

If ($streamResult.success)
    // Check if we have content in the delta
    If ($streamResult.choices.length>0)
        var $choice: Object
        $choice:=$streamResult.choices[0]
        
        If ($choice.delta#Null) && ($choice.delta.content#Null)
            // Append the new content chunk to the existing message
            Form.assistantMessage:=Form.assistantMessage+$choice.delta.content
        End if
    End if
Else
    // Handle streaming error
    ALERT("Streaming error: "+$streamResult.error.message)
End if
```

The `onTerminate` callback will be called once when the stream is complete:

```4d
// MyStreamTerminateMethod
#DECLARE($result: cs.AIKit.OpenAIChatCompletionsResult)

If ($result.success)
    // Stream completed successfully
Else
    // Handle final error
    ALERT("Stream terminated with error: "+$result.errors.formula(Formula(JSON Stringify($1))).join("\n"))
End if
```

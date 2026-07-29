---
id: asynchronous-call
title: 非同期コード
---

# 非同期コード

リクエストをAPI に送信する際にOpenAPI のレスポンスを待ちたくない場合には、非同期コードを使用する必要があります。

非同期での呼び出しを行うためには、[OpenAIParameters](Classes/OpenAIParameters.md) オブジェクト引数に結果を受け取るためのコールバック `4D.Function`(`Formula`) を提供する必要があります。 ストリーミングチャット補完については、[OpenAIChatCompletionsParameters](Classes/OpenAIChatCompletionsParameters.md) を参照してください。

コールバック関数は、同期コード内での関数によって返される結果のオブジェクト型([OpenAIResult](Classes/OpenAIResult.md) 子クラスのうちのいずれか)と同じものを受け取ります。 以下の例を参照してください。

## プロセスに関する注意

非同期メソッドは [4D.HTTPRequest](https://developer.4d.com/docs/API/HTTPRequestClass) に基づいているもので、レスポンスはカレントプロセス内で受信されます。

> ⚠️ もしカレントのメソッドの終わりでプロセスも終了する(例: New process を使用している、あるいはメソッドエディターでコードをテストしている)場合、コールバックフォーミュラは非同期に呼び出されない可能性があります。 そのような場合には、`CALL WORKER` あるいは `CALL FORM` の使用を検討して下さい。

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

### ストリームによるチャット補完

レスポンスを、生成されるにつれて順次受け取りたい場合には(ストリーミング)、`stream` 引数を`onData` コールバックと組み合わせて使用することができます:

```4d
var $messages:=[{role: "system"; content: "You are a helpful assistant."}]
$messages.push({role: "user"; content: "Could you explain me why 42 is a special number"})

// ストリーミングを有効化し onData コールバックを提供する
$client.chat.completions.create($messages; { \
    stream: True; \
    onData: Formula(MyStreamDataReceiveMethod($1)); \
    onTerminate: Formula(MyStreamTerminateMethod($1)) \
})
```

`onData` コールバックは、データチャンクが到着するたびに何度も呼び出されます。 `$1` は[OpenAIChatCompletionsStreamResult](Classes/OpenAIChatCompletionsStreamResult.md) のインスタンスです:

```4d
// MyStreamDataReceiveMethod
#DECLARE($streamResult: cs.AIKit.OpenAIChatCompletionsStreamResult)

If ($streamResult.success)
    // データ内にコンテンツが含まれているかどうかをチェック
    If ($streamResult.choices.length>0)
        var $choice: Object
        $choice:=$streamResult.choices[0]
        
        If ($choice.delta#Null) && ($choice.delta.content#Null)
            // 新しいコンテンツのチャンクを既存のメッセージに追加します。
            Form.assistantMessage:=Form.assistantMessage+$choice.delta.content
        End if
    End if
Else
    // ストリーミング時のエラーを管理
    ALERT("Streaming error: "+$streamResult.error.message)
End if
```

`onTerminate` コールバックは、ストリームが完了した際に一度だけ呼び出されます:

```4d
// MyStreamTerminateMethod
#DECLARE($result: cs.AIKit.OpenAIChatCompletionsResult)

If ($result.success)
    // ストリームが正常に完了した
Else
    // 最後のエラーを管理する
    ALERT("Stream terminated with error: "+$result.errors.formula(Formula(JSON Stringify($1))).join("\n"))
End if
```

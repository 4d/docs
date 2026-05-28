---
id: asynchronous-call
title: Asynchronous Call
---

# Asynchronous Call

If you do not want to wait for the OpenAPI response when making a request to its API, you need to use asynchronous code.

To make asynchronous calls, you must provide a callback `4D.Function`(`Formula`) in the [OpenAIParameters](Classes/OpenAIParameters.md) object parameter to receive the result. For streaming chat completion see [OpenAIChatCompletionsParameters](Classes/OpenAIChatCompletionsParameters.md).

The callback function will receive the same result object type (one of [OpenAIResult](Classes/OpenAIResult.md) child classes) that would be returned by the function in synchronous code. See examples below.

## Process Considerations

The asynchronous method is based on [4D.HTTPRequest](https://developer.4d.com/docs/API/HTTPRequestClass), so the response will be received within the current process.

> ⚠️ If your process ends at the conclusion of the current method (e.g., using New process, or playing in the method editor), the callback formula might not be called asynchronously. In such cases, consider using `CALL WORKER` or `CALL FORM`.

## Examples of Usage

### model list

```4d
$client.models.list({formula: Formula(MyReceiveMethod($1))})
```

`$1` will be an instance of [OpenAIModelListResult](Classes/OpenAIModelListResult.md), so `MyReceiveMethod` method could be:

```4d
#DECLARE($result: cs.AIKit.OpenAIModelListResult)

If($result.success)

   Form.models:=$result.models

Else

  Alert($result.errors.formula(Formula(JSON Stringify($1))).join("\n"))

End if
```

### chat completions

```4d
var $messages:=[{role: "system"; content: "You are a helpful assistant."}]
$messages.push({role: "user"; content: "Could you explain me why 42 is a special number"})

$client.chat.completions.create($messages; { onResponse: Formula(MyChatCompletionsReceiveMethod($1))})
```

`$1` will be an instance of [OpenAIChatCompletionsResult](Classes/OpenAIChatCompletionsResult.md), so `MyChatCompletionsReceiveMethod` method could be:

```4d
#DECLARE($result: cs.AIKit.OpenAIChatCompletionsResult)

ASSERT($result.success) // We use onResponse here, callback receive only if success
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

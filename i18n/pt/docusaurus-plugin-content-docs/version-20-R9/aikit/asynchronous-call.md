---
id: asynchronous-call
title: Chamada assíncrona
---

# Chamada assíncrona

If you do not want to wait for the OpenAPI response when making a request to its API, you need to use asynchronous code.

You must provide a `4D.Formula` to receive the result. Ver [OpenAIParameters](Classes/OpenAIParameters.md) para uma lista deles.

The asynchronous method is based on [4D.HTTPRequest](https://developer.4d.com/docs/API/HTTPRequestClass), so the response will be received within the current process.

> ⚠️ If your process ends at the conclusion of the current method (e.g., using New process, or playing in the method editor), the callback formula might not be called asynchronously. In such cases, consider using `CALL WORKER` or `CALL FORM`.

## Exemplos de uso

### model list

```4d
$client.models.list({formula: Formula(MyReceiveMethod($1))})
```

`$1` será uma instância de [OpenAIModelListResult](Classes/OpenAIModelListResult.md), portanto, o método `MyReceiveMethod` poderia ser:

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

`$1` será uma instância de [OpenAIChatCompletionsResult](Classes/OpenAIChatCompletionsResult.md), então o método `MyChatCompletionsReceiveMethod` poderia ser:

```4d
#DECLARE($result: cs.AIKit.OpenAIChatCompletionsResult)

ASSERT($result.success) // We use onResponse here, callback receive only if success
Form.assistantMessage:=$result.choices[0].text
```

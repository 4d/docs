---
id: asynchronous-call
title: Appel asynchrone
---

# Appel asynchrone

If you do not want to wait for the OpenAPI response when making a request to its API, you need to use asynchronous code.

You must provide a `4D.Formula` to receive the result. See [OpenAIParameters](Classes/OpenAIParameters.md) for a list of them.

The asynchronous method is based on [4D.HTTPRequest](https://developer.4d.com/docs/API/HTTPRequestClass), so the response will be received within the current process.

> ⚠️ If your process ends at the conclusion of the current method (e.g., using New process, or playing in the method editor), the callback formula might not be called asynchronously. In such cases, consider using `CALL WORKER` or `CALL FORM`.

## Exemples d’utilisation

### liste de modèles

```4d
$client.models.list({formula: Formula(MyReceiveMethod($1))})
```

`$1` sera une instance de [OpenAIModelListResult] (Classes/OpenAIModelListResult.md), donc la méthode `MyReceiveMethod` pourrait être :

```4d
#DECLARE($result: cs.AIKit.OpenAIModelListResult)

If($result.success)

   Form.models:=$result.models

Else

  Alert($result.errors.formula(Formula(JSON Stringify($1))).join("\n"))

End if
```

### complétions de chat

```4d
var $messages:=[{role: "system"; content: "You are a helpful assistant."}]
$messages.push({role: "user"; content: "Could you explain me why 42 is a special number"})

$client.chat.completions.create($messages; { onResponse: Formula(MyChatCompletionsReceiveMethod($1))})
```

`$1` sera une instance de [OpenAIChatCompletionsResult](Classes/OpenAIChatCompletionsResult.md), donc la méthode `MyChatCompletionsReceiveMethod` pourrait être :

```4d
#DECLARE($result: cs.AIKit.OpenAIChatCompletionsResult)

ASSERT($result.success) // Nous utilisons ici onResponse, le callback n'est reçu qu'en cas de succès.
Form.assistantMessage:=$result.choices[0].text
```

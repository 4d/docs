---
id: asynchronous-call
title: Appel asynchrone
---

# Appel asynchrone

Si vous ne souhaitez pas attendre la réponse de l'OpenAPI lorsque vous envoyez une requête à son API, vous devez utiliser un code asynchrone.

Pour effectuer des appels asynchrones, vous devez fournir une `4D.Function`(`Formula`) de rappel (*callback*) dans le paramètre objet [OpenAIParameters](Classes/OpenAIParameters.md) pour recevoir le résultat. For streaming chat completion see [OpenAIChatCompletionsParameters](Classes/OpenAIChatCompletionsParameters.md).

La fonction de callback recevra le même type d'objet de résultat (l'une des classes enfant de [OpenAIResult](Classes/OpenAIResult.md)) que celui qui serait renvoyé par la fonction dans un code synchrone. Voir les exemples ci-dessous.

## A propos des process

La méthode asynchrone est basée sur [4D.HTTPRequest](https://developer.4d.com/docs/API/HTTPRequestClass), ainsi la réponse sera reçue dans le process courant.

> ⚠️ Si votre process se termine à la fin de la méthode courante (par exemple, si vous utilisez New process ou l'éditeur de méthode), la formule de callback peut ne pas être appelée de manière asynchrone. Dans ce cas, il est nécessaire d'utiliser `CALL WORKER` ou `CALL FORM`.

## Exemples d’utilisation

### Liste de modèles

```4d
$client.models.list({formula: Formula(MyReceiveMethod($1))})
```

`$1` sera une instance de [OpenAIModelListResult](Classes/OpenAIModelListResult.md), donc la méthode `MyReceiveMethod` pourrait être :

```4d
#DECLARE($result: cs.AIKit.OpenAIModelListResult)

If($result.success)

   Form.models:=$result.models

Else

  Alert($result.errors.formula(Formula(JSON Stringify($1))).join("\n"))

End if
```

### Complétions de chat

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

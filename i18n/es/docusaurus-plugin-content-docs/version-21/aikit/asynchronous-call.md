---
id: asynchronous-call
title: Asynchronous Call
---

# Asynchronous Call

Si no desea esperar la respuesta del OpenAPI al hacer una petición a su API, debe utilizar un código asíncrono.

Para efectuar llamadas asíncronas, debe proporcionar una `4D.Function`(`Formula`) de retrollamda en el parámetro objeto [OpenAIParameters](Classes/OpenAIParameters.md) para recibir el resultado. Para la finalización de chat en tiempo real, consulte [OpenAIChatCompletionsParameters](Classes/OpenAIChatCompletionsParameters.md).

La función de retrollamada recibirá el mismo tipo de objeto de resultado (una de las clases hijas de [OpenAIResult](Classes/OpenAIResult.md)) que devolvería la función en un código síncrono. Ver ejemplos más abajo.

## Consideraciones sobre el proceso

El método asíncrono se basa en [4D.HTTPRequest](https://developer.4d.com/docs/API/HTTPRequestClass), por lo que la respuesta se recibirá dentro del proceso actual.

> ⚠️ Si su proceso termina al final del método actual (p. ej. usando New process o el editor de métodos), la fórmula de callback podría no llamarse de forma asíncrona. En estos casos, considere la posibilidad de utilizar `CALL WORKER` o `CALL FORM`.

## Ejemplos de uso

### lista de modelos

```4d
$client.models.list({formula: Formula(MyReceiveMethod($1))})
```

`$1` será una instancia de [OpenAIModelListResult](Classes/OpenAIModelListResult.md), por lo que el método `MyReceiveMethod` podría ser:

```4d
#DECLARE($result: cs.AIKit.OpenAIModelListResult)

If($result.success)

   Form.models:=$result.models

Else

  Alert($result.errors.formula(Formula(JSON Stringify($1))).join("\n"))

End if
```

### finalización del chat

```4d
var $messages:=[{role: "system"; content: "You are a helpful assistant."}]
$messages.push({role: "user"; content: "Could you explain me why 42 is a special number"})

$client.chat.completions.create($messages; { onResponse: Formula(MyChatCompletionsReceiveMethod($1))})
```

`$1` será una instancia de [OpenAIChatCompletionsResult](Classes/OpenAIChatCompletionsResult.md), así que el método `MyChatCompletionsReceiveMethod` podría ser:

```4d
#DECLARE($result: cs.AIKit.OpenAIChatCompletionsResult)

ASSERT($result.success) // Usamos onResponse aquí, la retrollamada recibe sólo en caso de éxito
Form.assistantMessage:=$result.choices[0].text
```

### finalizaciones de chat con streaming

Cuando quiera recibir la respuesta progresivamente a medida que se genera (streaming), puede utilizar el parámetro `stream` junto con una llamada de retorno `onData`:

```4d
var $messages:=[{role: "system"; content: "You are a helpful assistant."}]
$messages.push({role: "user"; content: "Could you explain me why 42 is a special number"})

// Habilitar streaming y proporcionar callback onData
$client.chat.completions.create($messages; { \
    stream: True; \
    onData: Formula(MyStreamDataReceiveMethod($1)); \
    onTerminate: Formula(MyStreamTerminateMethod($1)) \
})
```

La retrollamada `onData` se llamará varias veces a medida que lleguen trozos de datos. `$1` será una instancia de [OpenAIChatCompletionsStreamResult](Classes/OpenAIChatCompletionsStreamResult.md):

```4d
// MyStreamDataReceiveMethod
#DECLARE($streamResult: cs.AIKit.OpenAIChatCompletionsStreamResult)

If ($streamResult.success)
    // Comprueba si tenemos contenido en el delta
    If ($streamResult.choices.length>0)
        var $choice: Object
        $choice:=$streamResult.choices[0]
        
        If ($choice.delta#Null) && ($choice.delta.content#Null)
            // Añade el nuevo fragmento de contenido al mensaje existente
            Form.assistantMessage:=Form.assistantMessage+$choice.delta.content
        End if
    End if
Else
    // Gestiona el error de transmisión
    ALERT("Error de transmisión: "+$streamResult.error.message)
End if
```

La retrollamada `onTerminate` será llamada una vez que el flujo haya finalizado:

```4d
// MyStreamTerminateMethod
#DECLARE($result: cs.AIKit.OpenAIChatCompletionsResult)

If ($result.success)
    // Stream completado con éxito
Else
    // Manejar error final
    ALERT("Stream terminado con error: "+$result.errors.formula(Formula(JSON Stringify($1))).join("\n"))
End if
```

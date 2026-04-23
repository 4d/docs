---
id: asynchronous-call
title: Asynchronous Call
---

# Asynchronous Call

Si no desea esperar la respuesta del OpenAPI al hacer una petición a su API, debe utilizar un código asíncrono.

Para efectuar llamadas asíncronas, debe proporcionar una `4D.Function`(`Formula`) de retrollamda en el parámetro objeto [OpenAIParameters](Classes/OpenAIParameters.md) para recibir el resultado.

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

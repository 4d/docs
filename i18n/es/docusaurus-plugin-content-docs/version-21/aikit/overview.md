---
id: overview
title: 4D-AIKit
---

# 4D-AIKit

## Generalidades

4D AIKit es un componente 4D integrado que permite la interacción con APIs de IA de terceros.

## OpenAI

La clase [`OpenAI`](Classes/OpenAI.md) permite realizar peticiones a la [API OpenAI](https://platform.openai.com/docs/api-reference/).

### Configuración

En primer lugar, inicialice el cliente OpenAI utilizando su llave API

```4d
var $client:=cs.AIKit.OpenAI.new("your api key")
```

Para una API de [proveedor compatible](compatible-openai.md), puede configurar la URL del servidor definiendo el parámetro `baseURL`.

```4d
var $client:=cs.AIKit.OpenAI.new({apiKey: "your api key"; baseURL: "https://your.server.ai"})
```

o

```4d
$client.baseURL:="https://your.server.ai"
```

### Realizar peticiones

`OpenAI` ofrece diferentes puntos finales denominados recursos, cada uno de los cuales ofrece diversas funciones.

```4d
var $result:=$client.<resource>.<function>(<parameters...>)
```

El `$result` contiene el `HTTPRequest`, un estado `success`, una colección de `errors` y más. Ver [OpenAIResult](Classes/OpenAIResult.md)

Vea algunos ejemplos a continuación.

#### Chat

https://platform.openai.com/docs/api-reference/chat

##### Completions

https://platform.openai.com/docs/api-reference/chat/create

```4d
var $messages:=[{role: "system"; content: "You are a helpful assistant."}]
$messages.push({role: "user"; content: "Could you explain me why 42 is a special number"})
var $result:=$client.chat.completions.create($messages; {model: "gpt-4o-mini"})
// resultado en $result.choice
```

##### Ayudante del chat

Este ayudante le permite mantener una lista de mensajes de usuarios y de respuestas del asistente.

```4d
var $helper:=$client.chat.create("Eres un asistente útil.")
var $result:=$helper.prompt("¿Podría explicarme por qué 42 es un número especial")
$result:=$helper.prompt("y podría descomponer este número")
// conversación en $helper.messages
```

##### Asistente de visión

Este ayudante permite el análisis de imágenes a través del chat.

```4d
var $result:=$client.chat.vision.create($imageUrl).prompt("give me a description of the image")
```

#### Imágenes

https://platform.openai.com/docs/api-reference/images

```4d
var $images:=$client.images.generate("A futuristic city skyline at sunset"; {size: "1024x1024"}).images
```

#### Modelos

https://platform.openai.com/docs/api-reference/models

Obtener lista completa de modelos

```4d
var $models:=$client.models.list().models // a continuación, puede extraer el `id`
```

Obtener información de un modelo por id

```4d
var $model:=$client.models.retrieve("a model id").model
```

#### Moderations

https://platform.openai.com/docs/api-reference/moderations

```4d
var $moderation:=$client.moderations.create("This text contains inappropriate language and offensive behavior.").moderation
```

#### Código asíncrono

Si no desea esperar la respuesta del OpenAPI al enviar una solicitud a su API, debe utilizar un código asíncrono. El objeto resultante será recibido en una función de retrollamada.

Ver la [documentación detallada para ejemplos](asynchronous-call.md)

## Derechos de autor

- Esta biblioteca no está afiliada a OpenAI, ni aprobada por ella, ni oficialmente conectada a OpenAI de ninguna manera.
- "OpenAI" y toda marca relacionada son marcas comerciales o marcas registradas de OpenAI, LLC. Todos los derechos relacionados con los servicios, API y tecnologías de OpenAI siguen siendo propiedad de OpenAI.
- Este proyecto simplemente proporciona una interfaz a los servicios de OpenAI y no se responsabiliza de su tecnología, marca o propiedad intelectual.


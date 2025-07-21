---
id: openai
title: OpenAI
---

# OpenAI

The `OpenAI` class provides a client for accessing various OpenAI API resources. It includes properties for managing API configurations and methods for performing HTTP requests to the OpenAI endpoints.

## Propiedades de configuración

| Nombre de la propiedad | Tipo | Descripción                                                                  | Opcional       |
| ---------------------- | ---- | ---------------------------------------------------------------------------- | -------------- |
| `apiKey`               | Text | Su [llave OpenAI API](https://platform.openai.com/api-keys). | No para OpenAI |
| `baseURL`              | Text | URL base para las peticiones de la API OpenAI.               | Sí             |
| `organization`         | Text | Su ID de organización OpenAI.                                | Sí             |
| `project`              | Text | Su ID de proyecto OpenAI.                                    | Sí             |

### Propiedades HTTP adicionales

| Nombre de la propiedad | Tipo                                                                             | Descripción                                                                   |
| ---------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `timeout`              | Real                                                                             | Tiempo en segundos antes de que se agote el tiempo de espera. |
| `maxRetries`           | Real                                                                             | Maximum number of retry attempts in case of failure.          |
| `httpAgent`            | [4D.HTTPAgent](https://developer.4d.com/docs/API/HTTPAgentClass) | HTTP agent used for making requests.                          |
| `customHeaders`        | Real                                                                             | Custom headers to be included in the HTTP requests.           |

### Class constructor

Crear una instancia de la clase cliente OpenAI.

| Nombre del argumento | Tipo           | Descripción                                                                                     |
| -------------------- | -------------- | ----------------------------------------------------------------------------------------------- |
| *apiKey*             | Texto u objeto | apiKey if Text as first argument and the second can be an Object of parameters. |

#### Llave API

```4d
// as text
var $client:=cs.AIKit.OpenAI.new("your api key")
// as object
var $client:=cs.AIKit.OpenAI.new({apiKey: "your api key"})
```

#### URL del servidor

For a [compatible provider](../compatible-openai.md) API, you can configure the server URL.

```4d
var $client:=cs.AIKit.OpenAI.new({apiKey: "your api key"; baseURL: "https://server.ai"})
```

o después de crear una instancia

```4d
$client.baseURL:="https://server.ai"
```

## Recursos API

The API provides access to multiple resources that allow seamless interaction with OpenAI's services. Each resource is encapsulated within a dedicated API class, offering a structured and intuitive way to interact with different functionalities.

| Nombre de la propiedad | Tipo                                            | Descripción                                      |
| ---------------------- | ----------------------------------------------- | ------------------------------------------------ |
| `models`               | [OpenAIModelsAPI](OpenAIModelsAPI.md)           | Acceso a la API Models.          |
| `chat`                 | [OpenAIChatAPI](OpenAIChatAPI.md)               | Acceso a la API Chat.            |
| `images`               | [OpenAIImagesAPI](OpenAIImagesAPI.md)           | Acceso a la API Images.          |
| `moderations`          | [OpenAIModerationsAPI](OpenAIModerationsAPI.md) | Acceso a la API de moderaciones. |

### Ejemplo de Uso

```4d
$client.chat.completions.create(...)
$client.images.generate(...)
$client.model.lists(...)
```

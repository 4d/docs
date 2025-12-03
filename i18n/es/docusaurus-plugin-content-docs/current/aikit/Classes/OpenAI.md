---
id: openai
title: OpenAI
---

# OpenAI

La clase `OpenAI` proporciona un cliente para acceder a varios recursos de la API OpenAI. Incluye propiedades de gestión de las configuraciones API y de los métodos para efectuar las peticiones HTTP a los puntos de terminación de OpenAI.

## Propiedades de configuración

| Nombre de la propiedad | Tipo | Descripción                                                                  | Opcional                                                            |
| ---------------------- | ---- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `apiKey`               | Text | Su [llave OpenAI API](https://platform.openai.com/api-keys). | Puede ser requerido por el proveedor                                |
| `baseURL`              | Text | URL base para las peticiones de la API OpenAI.               | Sí (si se omite = utilizar la plataforma OpenAI) |
| `organization`         | Text | Su ID de organización OpenAI.                                | Sí                                                                  |
| `project`              | Text | Su ID de proyecto OpenAI.                                    | Sí                                                                  |

### Propiedades HTTP adicionales

| Nombre de la propiedad | Tipo                                                                             | Descripción                                                                         |
| ---------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `timeout`              | Real                                                                             | Tiempo en segundos antes de que se agote el tiempo de espera.       |
| `maxRetries`           | Real                                                                             | Número máximo de reintentos en caso de fallo.                       |
| `httpAgent`            | [4D.HTTPAgent](https://developer.4d.com/docs/API/HTTPAgentClass) | Agente HTTP utilizado para realizar peticiones.                     |
| `customHeaders`        | Real                                                                             | Encabezados personalizados que se incluirán en las peticiones HTTP. |

### Class constructor

Crear una instancia de la clase cliente OpenAI.

| Nombre del argumento      | Tipo           | Descripción                                               |
| ------------------------- | -------------- | --------------------------------------------------------- |
| `apiKey or configuration` | Texto u objeto | apiKey si Text u objeto de configuración. |

#### Llave API

```4d
// como texto
var $client:=cs.AIKit.OpenAI.new("your api key")
// como objeto
var $client:=cs.AIKit.OpenAI.new({apiKey: "your api key"})
```

#### URL del servidor

Para una API [proveedor compatible](../compatible-openai.md), puede configurar la URL del servidor.

```4d
var $client:=cs.AIKit.OpenAI.new({apiKey: "your api key"; baseURL: "https://server.ai"})
```

o después de crear una instancia

```4d
$client.baseURL:="https://server.ai"
```

## Recursos API

La API ofrece acceso a múltiples recursos que permiten una interacción perfecta con los servicios de OpenAI. Cada recurso está encapsulado en una clase API específica, que ofrece una forma estructurada e intuitiva de interactuar con las distintas funcionalidades.

| Nombre de la propiedad | Tipo                                            | Descripción                                      |
| ---------------------- | ----------------------------------------------- | ------------------------------------------------ |
| `models`               | [OpenAIModelsAPI](OpenAIModelsAPI.md)           | Acceso a la API Models.          |
| `chat`                 | [OpenAIChatAPI](OpenAIChatAPI.md)               | Acceso a la API Chat.            |
| `images`               | [OpenAIImagesAPI](OpenAIImagesAPI.md)           | Acceso a la API Images.          |
| `moderations`          | [OpenAIModerationsAPI](OpenAIModerationsAPI.md) | Acceso a la API de moderaciones. |
| `embeddings`           | [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)   | Acceso a la API Embeddings.      |
| `files`                | [OpenAIFilesAPI](OpenAIFilesAPI.md)             | Acceso a la API Files.           |

### Ejemplo de Uso

```4d
$client.chat.completions.create(...)
$client.images.generate(...)
$client.files.create(...)
$client.model.lists(...)
```

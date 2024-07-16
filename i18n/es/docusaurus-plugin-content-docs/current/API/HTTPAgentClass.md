---
id: HTTPAgentClass
title: HTTPAgent
---

The `HTTPAgent` class allows you to handle [`HTTPAgent objects`](#httpagent-object) that can be used to manage the persistence and reuse of connections to servers using the [HTTPRequest class](HTTPRequestClass.md).

La clase `HTTPAgent` está disponible en el class store `4D`. You can create a new [`HTTPAgent object`](#httpagent-object) using the [4D.HTTPAgent.new()](#4dhttpagentnew) function.

When no agent is associated to an HTTP request, a global agent with default values is used. The default agent is the simplest form of HTTP agent, suitable for basic use cases. Custom agents are recommended for more control, at the agent level rather than for each HTTP request, over specific aspects of the connection such keep-alive settings, timeouts or TLS/SSL configurations.

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R6       | Clase añadida  |

</details>

### Objeto HTTPAgent

Un objeto HTTPAgent es un objeto compartible.

Los objetos HTTPAgent ofrecen las siguientes propiedades y funciones:

|                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #HTTPAgentClass.options.Syntax -->](#options)<br/><!-- INCLUDE #HTTPAgentClass.options.Summary -->                            |
| [<!-- INCLUDE #HTTPAgentClass.requestsCount.Syntax -->](#requestsCount)<br/><!-- INCLUDE #HTTPAgentClass.requestsCount.Summary -->          |
| [<!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Syntax -->](#freeSocketsCount)<br/><!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Summary --> |

:::tip

Since HTTPAgent is a shareable object, you can add one to a singleton class so you can use the same agent for all your requests to the same server.

:::

<!-- REF #4D.HTTPAgent.new().Desc -->

## 4D.HTTPAgent.new()

<!-- REF #4D.HTTPAgent.new().Syntax -->**4D.HTTPAgent.new**( { *options* : Object } ) : 4D.HTTPAgent<!-- END REF -->

<!-- REF #4D.HTTPAgent.new().Params -->

| Parámetros | Tipo                                              |     | Descripción                       |
| ---------- | ------------------------------------------------- | :-: | --------------------------------- |
| options    | Object                                            |  -> | default options for the HTTPAgent |
| Result     | [4D.HTTPAgent](#httpagent-object) |  <- | New HTTPAgent object              |

<!-- END REF -->

#### Descripción

The `4D.HTTPAgent.new()` function <!-- REF #4D.HTTPAgent.new().Summary -->creates a shareable HTTPAgent object with the defined *options*, and returns a `4D.HTTPAgent` object<!-- END REF -->.

The returned [`HTTPAgent object`](#httpagent-object) is used to customize connections to HTTP servers.

#### Parámetro *options*

In the *options* parameter, pass an object that can contain the following properties (all the properties are optional):

:::note

HTTPAgent options will be merged with [HTTPRequest options](HTTPRequestClass.md#4dhttprequestnew) (HTTPRequest options take precedence); if no specific agent is defined, a global agent is used.

:::

| Propiedad              | Tipo    | Por defecto                                                                                                                                       | Descripción                                                                                     |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| keepAlive              | Boolean | true                                                                                                                                              | Activates keep alive for the agent                                                              |
| maxSockets             | Integer | 65535                                                                                                                                             | Número máximo de sockets por servidor                                                           |
| maxTotalSockets        | Integer | 65535                                                                                                                                             | Maximum number of sockets for the agent                                                         |
| timeout                | Real    | indefinido                                                                                                                                        | Si se define, tiempo después del cual se cierra un socket no utilizado                          |
| certificatesFolder     | Folder  | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Define la carpeta activa de certificados de cliente para las solicitudes que utilizan el agente |
| minTLSVersion          | Text    | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Define la versión mínima de TLS para las solicitudes que utilizan este agente                   |
| protocol               | Text    | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Protocolo usado para las peticiones utilizando el agente                                        |
| validateTLSCertificate | Boolean | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Validar el certificado Tls para las solicitudes que utilizan el agente                          |

:::note

Puede solicitar múltiples servidores utilizando el mismo agente. In that case, each server will have its own pool of connections using the same agent options.

:::

#### Ejemplo

Creación del HTTPAgent:

```4d
var $options:={}
$options.maxSockets:=5 //5 is the maximum number of sockets per server
$options.maxTotalSockets:=10 //10 is the maximum number of sockets for the agent
$options.validateTLSCertificate:=True //To validate the sever's certificate

var $myAgent:=4D.HTTPAgent.new($options)

```

Enviando una solicitud para comprobar la hora local de cualquier ciudad:

```4d
var $options:={}
$options.method:="GET"
$options.agent:=$myAgent
var $myRequest:=4D.HTTPRequest.new("http://worldtimeapi.org/api/timezone/Europe/Paris"; $options) 

```

:::note

When no agent is associated to an HTTPRequest, a global agent with default values is used.

:::

<!-- REF #HTTPAgentClass.options.Desc -->

## .options

<!-- REF #HTTPAgentClass.options.Syntax -->**options** : Object<!-- END REF -->

#### Descripción

The `.options` property object contains <!-- REF #HTTPAgentClass.options.Summary -->the current used options of the HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.requestsCount.Desc -->

## .requestsCount

<!-- REF #HTTPAgentClass.requestsCount.Syntax -->**requestsCount** : Integer<!-- END REF -->

#### Descripción

The `.requestsCount` property contains <!-- REF #HTTPAgentClass.requestsCount.Summary -->the number of requests currently handled by the HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.freeSocketsCount.Desc -->

## .freeSocketsCount

<!-- REF #HTTPAgentClass.freeSocketsCount.Syntax -->**freeSocketsCount** : Integer<!-- END REF -->

#### Descripción

The `.freeSocketsCount` property contains <!-- REF #HTTPAgentClass.freeSocketsCount.Summary -->the number of free sockets from `maxSockets` associated with the HTTPAgent<!-- END REF -->.

<!-- END REF -->

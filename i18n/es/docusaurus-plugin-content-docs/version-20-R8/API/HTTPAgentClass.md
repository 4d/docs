---
id: HTTPAgentClass
title: HTTPAgent
---

La clase `HTTPAgent` permite manejar [objetos`HTTPAgent`](#httpagent-object) que pueden ser utilizados para gestionar la persistencia y reutilización de conexiones a servidores utilizando la [clase HTTPRequest](HTTPRequestClass.md).

La clase `HTTPAgent` está disponible en el class store `4D`. Puede crear un nuevo [`objeto HTTPAgent`](#httpagent-object) utilizando la función [4D.HTTPAgent.new()](#4dhttpagentnew).

Cuando no hay ningún agente asociado a una petición HTTP, se utiliza un agente global con valores por defecto. El agente por defecto es la forma más simple de agente HTTP, adecuado para casos de uso básicos. Los agentes personalizados se recomiendan para tener un mayor control, a nivel de agente en lugar de para cada petición HTTP, sobre aspectos específicos de la conexión como la configuración de keep-alive, los tiempos de espera o las configuraciones TLS/SSL.

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
| [<!-- INCLUDE #HTTPAgentClass.requestsCount.Syntax -->](#requestscount)<br/><!-- INCLUDE #HTTPAgentClass.requestsCount.Summary -->          |
| [<!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Syntax -->](#freesocketscount)<br/><!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Summary --> |

:::tip

Dado que HTTPAgent es un objeto compartible, puede añadir uno a una clase singleton para poder utilizar el mismo agente para todas sus peticiones al mismo servidor.

:::

## 4D.HTTPAgent.new()

<!-- REF #4D.HTTPAgent.new().Syntax -->**4D.HTTPAgent.new**( { *options* : Object } ) : 4D.HTTPAgent<!-- END REF -->

<!-- REF #4D.HTTPAgent.new().Params -->

| Parámetros | Tipo                                              |                             | Descripción                       |
| ---------- | ------------------------------------------------- | :-------------------------: | --------------------------------- |
| options    | Object                                            |              ->             | default options for the HTTPAgent |
| Resultado  | [4D.HTTPAgent](#httpagent-object) | <- | New HTTPAgent object              |

<!-- END REF -->

#### Descripción

The `4D.HTTPAgent.new()` function <!-- REF #4D.HTTPAgent.new().Summary -->creates a shareable HTTPAgent object with the defined *options*, and returns a `4D.HTTPAgent` object<!-- END REF -->.

The returned [`HTTPAgent object`](#httpagent-object) is used to customize connections to HTTP servers.

#### Parámetro *options*

In the *options* parameter, pass an object that can contain the following properties (all the properties are optional):

:::note

HTTPAgent options will be merged with [HTTPRequest options](HTTPRequestClass.md#4dhttprequestnew) (HTTPRequest options take precedence); if no specific agent is defined, a global agent is used.

:::

| Propiedad              | Tipo    | Por defecto                                                                                                                                       | Descripción                                                                 |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| keepAlive              | Boolean | true                                                                                                                                              | Activates keep alive for the agent                                          |
| maxSockets             | Integer | 65535                                                                                                                                             | Maximum number of sockets per server                                        |
| maxTotalSockets        | Integer | 65535                                                                                                                                             | Maximum number of sockets for the agent                                     |
| timeout                | Real    | indefinido                                                                                                                                        | If defined, timeout after which an unused socket is closed                  |
| certificatesFolder     | Folder  | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Sets the active client certificates folder for the requests using the agent |
| minTLSVersion          | Text    | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Sets the minimum version of TLS for the requests using this agent           |
| protocol               | Text    | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Protocol used for the requests using the agent                              |
| validateTLSCertificate | Boolean | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | validateTLSCertificate for the requests using the agent                     |

:::note

You can request multiple servers using the same agent. In that case, each server will have its own pool of connections using the same agent options.

:::

#### Ejemplo

Creating the HTTPAgent:

```4d
var $options:={}
$options.maxSockets:=5 //5 is the maximum number of sockets per server
$options.maxTotalSockets:=10 //10 is the maximum number of sockets for the agent
$options.validateTLSCertificate:=True //To validate the sever's certificate

var $myAgent:=4D.HTTPAgent.new($options)

```

Sending a request to check the local time of any city:

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



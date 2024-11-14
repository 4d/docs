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
| [<!-- INCLUDE #HTTPAgentClass.requestsCount.Syntax -->](#requestsCount)<br/><!-- INCLUDE #HTTPAgentClass.requestsCount.Summary -->          |
| [<!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Syntax -->](#freeSocketsCount)<br/><!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Summary --> |

:::tip

Dado que HTTPAgent es un objeto compartible, puede añadir uno a una clase singleton para poder utilizar el mismo agente para todas sus peticiones al mismo servidor.

:::

<!-- REF #4D.HTTPAgent.new().Desc -->

## 4D.HTTPAgent.new()

<!-- REF #4D.HTTPAgent.new().Syntax -->**4D.HTTPAgent.new**( { *options* : Object } ) : 4D.HTTPAgent<!-- END REF -->

<!-- REF #4D.HTTPAgent.new().Params -->

| Parámetros | Tipo                                              |                             | Descripción                            |
| ---------- | ------------------------------------------------- | :-------------------------: | -------------------------------------- |
| options    | Object                                            |              ->             | opciones por defecto para el HTTPAgent |
| Result     | [4D.HTTPAgent](#httpagent-object) | <- | Nuevo objeto HTTPAgent                 |

<!-- END REF -->

#### Descripción

La función `4D.HTTPAgent.new()` <!-- REF #4D.HTTPAgent.new().Summary -->crea un objeto HTTPAgent compartible con las *opciones* definidas, y devuelve un objeto `4D.HTTPAgent`<!-- END REF -->.

El [`objeto HTTPAgent`] devuelto (#httpagent-object) se utiliza para personalizar las conexiones a servidores HTTP.

#### Parámetro *options*

En el parámetro *options*, pase un objeto que pueda contener las siguientes propiedades (todas las propiedades son opcionales):

:::note

Las opciones de HTTPAgent se fusionarán con [opciones HTTPRequest](HTTPRequestClass.md#4dhttprequestnew) (las opciones de HTTPRequest tienen preferencia); si no se define un agente específico, se utilizará un agente global.

:::

| Propiedad              | Tipo    | Por defecto                                                                                                                                           | Descripción                                                                                     |
| ---------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| keepAlive              | Boolean | true                                                                                                                                                  | Activa keep alive para el agente                                                                |
| maxSockets             | Integer | 65535                                                                                                                                                 | Número máximo de sockets por servidor                                                           |
| maxTotalSockets        | Integer | 65535                                                                                                                                                 | Número máximo de sockets para el agente                                                         |
| timeout                | Real    | indefinido                                                                                                                                            | Si se define, tiempo después del cual se cierra un socket no utilizado                          |
| certificatesFolder     | Folder  | undefined (ver valor por defecto en [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Define la carpeta activa de certificados de cliente para las solicitudes que utilizan el agente |
| minTLSVersion          | Text    | undefined (ver valor por defecto en [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Define la versión mínima de TLS para las solicitudes que utilizan este agente                   |
| protocol               | Text    | undefined (ver valor por defecto en [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Protocolo usado para las peticiones utilizando el agente                                        |
| validateTLSCertificate | Boolean | undefined (ver valor por defecto en [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Validar el certificado Tls para las solicitudes que utilizan el agente                          |

:::note

Puede solicitar múltiples servidores utilizando el mismo agente. En ese caso, cada servidor tendrá su propio grupo de conexiones utilizando las mismas opciones de agente.

:::

#### Ejemplo

Creación del HTTPAgent:

```4d
var $options:={}
$options.maxSockets:=5 //5 es el número máximo de sockets por servidor
$options.maxTotalSockets:=10 //10 es el número máximo de sockets para el agente
$options.validateTLSCertificate:=True //Validar el certificado del servidor

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

Cuando no hay ningún agente asociado a una HTTPRequest, se utiliza un agente global con valores por defecto.

:::

<!-- REF #HTTPAgentClass.options.Desc -->

## .options

<!-- REF #HTTPAgentClass.options.Syntax -->**options** : Object<!-- END REF -->

#### Descripción

El objeto de propiedad `.options` contiene <!-- REF #HTTPAgentClass.options.Summary -->las opciones utilizadas actualmente del HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.requestsCount.Desc -->

## .requestsCount

<!-- REF #HTTPAgentClass.requestsCount.Syntax -->**requestsCount** : Integer<!-- END REF -->

#### Descripción

La propiedad `.requestsCount` contiene <!-- REF #HTTPAgentClass.requestsCount.Summary -->el número de peticiones gestionadas actualmente por el HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.freeSocketsCount.Desc -->

## .freeSocketsCount

<!-- REF #HTTPAgentClass.freeSocketsCount.Syntax -->**freeSocketsCount** : Integer<!-- END REF -->

#### Descripción

La propiedad `.freeSocketsCount` contiene <!-- REF #HTTPAgentClass.freeSocketsCount.Summary -->el número de sockets libres de `maxSockets` asociados al HTTPAgent<!-- END REF -->.

<!-- END REF -->

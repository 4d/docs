---
id: HTTPAgentClass
title: HTTPAgent
---

A classe `HTTPAgent` permite que você manipule [objetos `HTTPAgent`] (#httpagent-object) que podem ser usados para gerenciar a persistência e a reutilização de conexões com servidores usando a classe [HTTPRequest] (HTTPRequestClass.md).

A classe `HTTPAgent` está disponível no repositório de classes `4D`. Você pode criar um novo objeto [`HTTPAgent`] (#httpagent-object) usando a função [4D.HTTPAgent.new()] (#4dhttpagentnew).

Quando nenhum agente está associado a uma solicitação HTTP, é usado um agente global com valores padrão. O agente padrão é a forma mais simples de agente HTTP, adequado para casos de uso básicos. Recomenda-se o uso de agentes personalizados para obter mais controle, no nível do agente e não para cada solicitação HTTP, sobre aspectos específicos da conexão, como configurações de keep-alive, tempos limite ou configurações de TLS/SSL.

<details><summary>História</summary>

| Release | Mudanças          |
| ------- | ----------------- |
| 20 R6   | Classe adicionada |

</details>

### Objeto HTTPAgent

Um objeto HTTPAgent é um objeto compartilhável.

Os objetos HTTPAgent fornecem as seguintes propriedades e funções:

|                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #HTTPAgentClass.options.Syntax -->](#options)<br/><!-- INCLUDE #HTTPAgentClass.options.Summary -->                            |
| [<!-- INCLUDE #HTTPAgentClass.requestsCount.Syntax -->](#requestscount)<br/><!-- INCLUDE #HTTPAgentClass.requestsCount.Summary -->          |
| [<!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Syntax -->](#freesocketscount)<br/><!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Summary --> |

:::tip

Como o HTTPAgent é um objeto compartilhável, você pode adicioná-lo a uma classe singleton para poder usar o mesmo agente em todas as solicitações ao mesmo servidor.

:::

## 4D.HTTPAgent.new()

<!-- REF #4D.HTTPAgent.new().Syntax -->**4D.HTTPAgent.new**( { *options* : Object } ) : 4D.HTTPAgent<!-- END REF -->

<!-- REF #4D.HTTPAgent.new().Params -->

| Parâmetro  | Tipo                                              |                             | Descrição                         |
| ---------- | ------------------------------------------------- | :-------------------------: | --------------------------------- |
| options    | Object                                            |              ->             | default options for the HTTPAgent |
| Resultados | [4D.HTTPAgent](#httpagent-object) | <- | New HTTPAgent object              |

<!-- END REF -->

#### Descrição

The `4D.HTTPAgent.new()` function <!-- REF #4D.HTTPAgent.new().Summary -->creates a shareable HTTPAgent object with the defined *options*, and returns a `4D.HTTPAgent` object<!-- END REF -->.

The returned [`HTTPAgent object`](#httpagent-object) is used to customize connections to HTTP servers.

#### `options` parameter

In the *options* parameter, pass an object that can contain the following properties (all the properties are optional):

:::note

HTTPAgent options will be merged with [HTTPRequest options](HTTPRequestClass.md#4dhttprequestnew) (HTTPRequest options take precedence); if no specific agent is defined, a global agent is used.

:::

| Propriedade            | Tipo       | Por padrão                                                                                                                                        | Descrição                                                                   |
| ---------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| keepAlive              | Parâmetros | true                                                                                                                                              | Activates keep alive for the agent                                          |
| maxSockets             | Integer    | 65535                                                                                                                                             | Maximum number of sockets per server                                        |
| maxTotalSockets        | Integer    | 65535                                                                                                                                             | Maximum number of sockets for the agent                                     |
| timeout                | Real       | indefinido                                                                                                                                        | If defined, timeout after which an unused socket is closed                  |
| certificatesFolder     | Folder     | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Sets the active client certificates folder for the requests using the agent |
| minTLSVersion          | Text       | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Sets the minimum version of TLS for the requests using this agent           |
| protocol               | Text       | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Protocol used for the requests using the agent                              |
| validateTLSCertificate | Parâmetros | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | validateTLSCertificate for the requests using the agent                     |

:::note

You can request multiple servers using the same agent. In that case, each server will have its own pool of connections using the same agent options.

:::

#### Exemplo

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

#### Descrição

The `.options` property object contains <!-- REF #HTTPAgentClass.options.Summary -->the current used options of the HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.requestsCount.Desc -->

## .requestsCount

<!-- REF #HTTPAgentClass.requestsCount.Syntax -->**requestsCount** : Integer<!-- END REF -->

#### Descrição

The `.requestsCount` property contains <!-- REF #HTTPAgentClass.requestsCount.Summary -->the number of requests currently handled by the HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.freeSocketsCount.Desc -->

## .freeSocketsCount

<!-- REF #HTTPAgentClass.freeSocketsCount.Syntax -->**freeSocketsCount** : Integer<!-- END REF -->

#### Descrição

The `.freeSocketsCount` property contains <!-- REF #HTTPAgentClass.freeSocketsCount.Summary -->the number of free sockets from `maxSockets` associated with the HTTPAgent<!-- END REF -->.

<!-- END REF -->



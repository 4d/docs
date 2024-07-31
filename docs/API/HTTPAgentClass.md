---
id: HTTPAgentClass
title: HTTPAgent
---

The `HTTPAgent` class allows you to handle [`HTTPAgent objects`](#httpagent-object) that can be used to manage the persistence and reuse of connections to servers using the [HTTPRequest class](HTTPRequestClass.md).

The `HTTPAgent` class is available from the `4D` class store. You can create a new [`HTTPAgent object`](#httpagent-object) using the [4D.HTTPAgent.new()](#4dhttpagentnew) function.

When no agent is associated to an HTTP request, a global agent with default values is used. The default agent is the simplest form of HTTP agent, suitable for basic use cases. Custom agents are recommended for more control, at the agent level rather than for each HTTP request, over specific aspects of the connection such keep-alive settings, timeouts or TLS/SSL configurations.

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R6|Class added|

</details>


### HTTPAgent Object

An HTTPAgent object is a shareable object.

HTTPAgent objects provide the following properties and functions:

||
|---|
|[<!-- INCLUDE #HTTPAgentClass.options.Syntax -->](#options)<br/><!-- INCLUDE #HTTPAgentClass.options.Summary -->|
|[<!-- INCLUDE #HTTPAgentClass.requestsCount.Syntax -->](#requestsCount)<br/><!-- INCLUDE #HTTPAgentClass.requestsCount.Summary -->|
|[<!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Syntax -->](#freeSocketsCount)<br/><!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Summary -->|

:::tip 

Since HTTPAgent is a shareable object, you can add one to a singleton class so you can use the same agent for all your requests to the same server.

:::

<!-- REF #4D.HTTPAgent.new().Desc -->

## 4D.HTTPAgent.new()

<!-- REF #4D.HTTPAgent.new().Syntax -->**4D.HTTPAgent.new**( { *options* : Object } ) : 4D.HTTPAgent<!-- END REF -->


<!-- REF #4D.HTTPAgent.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|options|Object|->|default options for the HTTPAgent|
|Result|[4D.HTTPAgent](#httpagent-object)|<-|New HTTPAgent object|
<!-- END REF -->

#### Description

The `4D.HTTPAgent.new()` function <!-- REF #4D.HTTPAgent.new().Summary -->creates a shareable HTTPAgent object with the defined *options*, and returns a `4D.HTTPAgent` object<!-- END REF -->.

The returned [`HTTPAgent object`](#httpagent-object) is used to customize connections to HTTP servers.


#### `options` parameter

In the *options* parameter, pass an object that can contain the following properties (all the properties are optional):

:::note 

HTTPAgent options will be merged with [HTTPRequest options](HTTPRequestClass.md#4dhttprequestnew) (HTTPRequest options take precedence); if no specific agent is defined, a global agent is used.

:::

|Property|Type|Default|Description|
|---|---|---|---|
| keepAlive              |Boolean | true      |Activates keep alive for the agent                                            |
| maxSockets             |Integer| 65535     |Maximum number of sockets per server                                                 |
| maxTotalSockets        |Integer| 65535     |Maximum number of sockets for the agent                                     |
| timeout                |Real| undefined |If defined, timeout after which an unused socket is closed                   |
| certificatesFolder     |Folder| undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) |Sets the active client certificates folder for the requests using the agent |
| minTLSVersion          |Text| undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) |Sets the minimum version of TLS for the requests using this agent            |
| protocol               |Text| undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) |Protocol used for the requests using the agent                              |
| validateTLSCertificate |Boolean| undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | validateTLSCertificate for the requests using the agent|

:::note
 
You can request multiple servers using the same agent. In that case, each server will have its own pool of connections using the same agent options.

:::

#### Example

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

#### Description

The `.options` property object contains <!-- REF #HTTPAgentClass.options.Summary -->the current used options of the HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.requestsCount.Desc -->
## .requestsCount

<!-- REF #HTTPAgentClass.requestsCount.Syntax -->**requestsCount** : Integer<!-- END REF -->

#### Description

The `.requestsCount` property contains <!-- REF #HTTPAgentClass.requestsCount.Summary -->the number of requests currently handled by the HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.freeSocketsCount.Desc -->

## .freeSocketsCount

<!-- REF #HTTPAgentClass.freeSocketsCount.Syntax -->**freeSocketsCount** : Integer<!-- END REF -->

#### Description

The `.freeSocketsCount` property contains <!-- REF #HTTPAgentClass.freeSocketsCount.Summary -->the number of free sockets from `maxSockets` associated with the HTTPAgent<!-- END REF -->.

<!-- END REF -->



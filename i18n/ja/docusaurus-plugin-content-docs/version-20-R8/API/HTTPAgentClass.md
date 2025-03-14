---
id: HTTPAgentClass
title: HTTPAgent
---

`HTTPAgent` クラスは、[HTTPRequest クラス](HTTPRequestClass.md) を使ったサーバー接続の永続性と再利用を管理するための[`HTTPAgent オブジェクト`](#httpagent-オブジェクト) を操作するためのものです。

`HTTPAgent` クラスは、`4D` クラスストアにて提供されています。 [`HTTPAgent オブジェクト`](#httpagent-オブジェクト) は、[4D.HTTPAgent.new()](#4dhttpagentnew) 関数で新規作成できます。

HTTPリクエストに関連付けられたエージェントがない場合、デフォルト値を持つグローバルエージェントが使用されます。 デフォルトエージェントは、基本的なユースケースに適した最もシンプルな HTTPエージェントです。 接続の設定 (keep-alive設定、タイムアウト、TLS/SSL設定など) について、HTTPリクエスト毎ではなくエージェントレベルで、より細かい制御をおこなうために、カスタムエージェントの使用が推奨されます。

<details><summary>履歴</summary>

| リリース  | 内容     |
| ----- | ------ |
| 20 R6 | クラスを追加 |

</details>

### HTTPAgent オブジェクト

HTTPAgent オブジェクトは共有可能なオブジェクトです。

HTTPAgent オブジェクトは次のプロパティや関数を提供します:

|                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #HTTPAgentClass.options.Syntax -->](#options)<br/><!-- INCLUDE #HTTPAgentClass.options.Summary -->                            |
| [<!-- INCLUDE #HTTPAgentClass.requestsCount.Syntax -->](#requestscount)<br/><!-- INCLUDE #HTTPAgentClass.requestsCount.Summary -->          |
| [<!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Syntax -->](#freesocketscount)<br/><!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Summary --> |

:::tip

HTTPAgent オブジェクトは共有可能なため、 シングルトンクラスに追加すれば、同じサーバーへのすべてのリクエストについて同じエージェントを使用できます。

:::

## 4D.HTTPAgent.new()

<!-- REF #4D.HTTPAgent.new().Syntax -->**4D.HTTPAgent.new**( { *options* : Object } ) : 4D.HTTPAgent<!-- END REF -->

<!-- REF #4D.HTTPAgent.new().Params -->

| 引数      | 型                                                 |                             | 説明                                |
| ------- | ------------------------------------------------- | :-------------------------: | --------------------------------- |
| options | Object                                            |              ->             | default options for the HTTPAgent |
| 戻り値     | [4D.HTTPAgent](#httpagent-object) | <- | New HTTPAgent object              |

<!-- END REF -->

#### 説明

The `4D.HTTPAgent.new()` function <!-- REF #4D.HTTPAgent.new().Summary -->creates a shareable HTTPAgent object with the defined *options*, and returns a `4D.HTTPAgent` object<!-- END REF -->.

The returned [`HTTPAgent object`](#httpagent-object) is used to customize connections to HTTP servers.

#### `options` 引数

In the *options* parameter, pass an object that can contain the following properties (all the properties are optional):

:::note

HTTPAgent options will be merged with [HTTPRequest options](HTTPRequestClass.md#4dhttprequestnew) (HTTPRequest options take precedence); if no specific agent is defined, a global agent is used.

:::

| プロパティ                  | 型       | デフォルト                                                                                                                                             | 説明                                                                          |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| keepAlive              | Boolean | true                                                                                                                                              | Activates keep alive for the agent                                          |
| maxSockets             | Integer | 65535                                                                                                                                             | Maximum number of sockets per server                                        |
| maxTotalSockets        | Integer | 65535                                                                                                                                             | Maximum number of sockets for the agent                                     |
| timeout                | Real    | undefined                                                                                                                                         | If defined, timeout after which an unused socket is closed                  |
| certificatesFolder     | Folder  | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Sets the active client certificates folder for the requests using the agent |
| minTLSVersion          | Text    | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Sets the minimum version of TLS for the requests using this agent           |
| protocol               | Text    | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | Protocol used for the requests using the agent                              |
| validateTLSCertificate | Boolean | undefined (see default value in [HTTPRequest.new()](HTTPRequestClass.md#options-parameter)) | validateTLSCertificate for the requests using the agent                     |

:::note

You can request multiple servers using the same agent. In that case, each server will have its own pool of connections using the same agent options.

:::

#### 例題

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

#### 説明

The `.options` property object contains <!-- REF #HTTPAgentClass.options.Summary -->the current used options of the HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.requestsCount.Desc -->

## .requestsCount

<!-- REF #HTTPAgentClass.requestsCount.Syntax -->**requestsCount** : Integer<!-- END REF -->

#### 説明

The `.requestsCount` property contains <!-- REF #HTTPAgentClass.requestsCount.Summary -->the number of requests currently handled by the HTTPAgent<!-- END REF -->.

<!-- END REF -->

<!-- REF #HTTPAgentClass.freeSocketsCount.Desc -->

## .freeSocketsCount

<!-- REF #HTTPAgentClass.freeSocketsCount.Syntax -->**freeSocketsCount** : Integer<!-- END REF -->

#### 説明

The `.freeSocketsCount` property contains <!-- REF #HTTPAgentClass.freeSocketsCount.Summary -->the number of free sockets from `maxSockets` associated with the HTTPAgent<!-- END REF -->.

<!-- END REF -->



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
| [<!-- INCLUDE #HTTPAgentClass.requestsCount.Syntax -->](#requestsCount)<br/><!-- INCLUDE #HTTPAgentClass.requestsCount.Summary -->          |
| [<!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Syntax -->](#freeSocketsCount)<br/><!-- INCLUDE #HTTPAgentClass.freeSocketsCount.Summary --> |

:::tip

HTTPAgent オブジェクトは共有可能なため、 シングルトンクラスに追加すれば、同じサーバーへのすべてのリクエストについて同じエージェントを使用できます。

:::

<!-- REF #4D.HTTPAgent.new().Desc -->

## 4D.HTTPAgent.new()

<!-- REF #4D.HTTPAgent.new().Syntax -->**4D.HTTPAgent.new**( { *options* : Object } ) : 4D.HTTPAgent<!-- END REF -->

<!-- REF #4D.HTTPAgent.new().Params -->

| 引数      | 型                                                 |                             | 説明                     |
| ------- | ------------------------------------------------- | :-------------------------: | ---------------------- |
| options | Object                                            |              ->             | HTTPAgent のデフォルトのオプション |
| 戻り値     | [4D.HTTPAgent](#httpagent-オブジェクト) | <- | 新規 HTTPAgent オブジェクト    |

<!-- END REF -->

#### 説明

`4D.HTTPAgent.new()` 関数は、<!-- REF #4D.HTTPAgent.new().Summary -->*options* 引数で定義される設定で共有可能な HTTPAgent オブジェクトを作成し、`4D.HTTPAgent` オブジェクトを返します<!-- END REF -->。

返された [`HTTPAgentオブジェクト`](#httpagent-オブジェクト) は、HTTPサーバーへの接続をカスタマイズするのに使用します。

#### `options` 引数

*options* に渡すオブジェクトは、次のプロパティを持つことができます (すべてのプロパティが任意です):

:::note

HTTPAgent のオプションは [HTTPRequest のオプション](HTTPRequestClass.md#4dhttprequestnew) と統合されます (HTTPRequest オプションが優先されます)。特定のエージェントが定義されていない場合、グローバルエージェントが使用されます。

:::

| プロパティ                  | 型       | デフォルト                                                                                                                            | 説明                                      |
| ---------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| keepAlive              | Boolean | true                                                                                                                             | 当該エージェントについて keep-alive を有効にします         |
| maxSockets             | Integer | 65535                                                                                                                            | サーバーあたりの最大ソケット数                         |
| maxTotalSockets        | Integer | 65535                                                                                                                            | エージェントの最大ソケット数                          |
| timeout                | Real    | undefined                                                                                                                        | 定義されている場合、未使用のソケットが閉じられるまでのタイムアウト       |
| certificatesFolder     | Folder  | undefined (デフォルト値は [HTTPRequest.new()](HTTPRequestClass.md#options-引数) 参照) | 当該エージェントを使ったリクエストに使用するクライアント証明書フォルダー    |
| minTLSVersion          | Text    | undefined (デフォルト値は [HTTPRequest.new()](HTTPRequestClass.md#options-引数) 参照) | 当該エージェントを使ったリクエストに設定する TLS の最小バージョン     |
| protocol               | Text    | undefined (デフォルト値は [HTTPRequest.new()](HTTPRequestClass.md#options-引数) 参照) | 当該エージェントを使ったリクエストに使用されるプロトコル            |
| validateTLSCertificate | Boolean | undefined (デフォルト値は [HTTPRequest.new()](HTTPRequestClass.md#options-引数) 参照) | 当該エージェントを使用したリクエストについて、TLS 証明書の検証をおこなうか |

:::note

同じエージェントを使って複数のサーバーにリクエストすることができます。 その場合各サーバーは、同じエージェントオプションを使用した独自の接続プールを持ちます。

:::

#### 例題

HTTPAgent の作成:

```4d
var $options:={}
$options.maxSockets:=5 // サーバー毎の最大ソケット数
$options.maxTotalSockets:=10 // エージェントの最大ソケット数
$options.validateTLSCertificate:=True // サーバーの証明書を検証します

var $myAgent:=4D.HTTPAgent.new($options)

```

任意の都市の現地時間を確認するリクエストを送信します:

```4d
var $options:={}
$options.method:="GET"
$options.agent:=$myAgent
var $myRequest:=4D.HTTPRequest.new("http://worldtimeapi.org/api/timezone/Europe/Paris"; $options) 

```

:::note

HTTPRequest に関連付けられたエージェントがない場合、デフォルト値を持つグローバルエージェントが使用されます。

:::

<!-- REF #HTTPAgentClass.options.Desc -->

## .options

<!-- REF #HTTPAgentClass.options.Syntax -->**options** : Object<!-- END REF -->

#### 説明

`.options` プロパティオブジェクトは、<!-- REF #HTTPAgentClass.options.Summary -->HTTPAgent が現在使用しているオプション<!-- END REF -->を格納します。

<!-- END REF -->

<!-- REF #HTTPAgentClass.requestsCount.Desc -->

## .requestsCount

<!-- REF #HTTPAgentClass.requestsCount.Syntax -->**requestsCount** : Integer<!-- END REF -->

#### 説明

`.requestsCount` プロパティは、<!-- REF #HTTPAgentClass.requestsCount.Summary -->HTTPAgent によって現在管理されているリクエストの数<!-- END REF -->を格納します。

<!-- END REF -->

<!-- REF #HTTPAgentClass.freeSocketsCount.Desc -->

## .freeSocketsCount

<!-- REF #HTTPAgentClass.freeSocketsCount.Syntax -->**freeSocketsCount** : Integer<!-- END REF -->

#### 説明

`.freeSocketsCount` プロパティは、<!-- REF #HTTPAgentClass.freeSocketsCount.Summary -->HTTPAgent に関連付けられた `maxSockets` に対する空きソケット数<!-- END REF -->を格納します。

<!-- END REF -->

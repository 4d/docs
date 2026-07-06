---
id: application-info
title: Application info
slug: /commands/application-info
displayed_sidebar: docs
---

<!--REF #_command_.Application info.Syntax-->**Application info** : Object<!-- END REF-->

<!--REF #_command_.Application info.Params-->

<div class="no-index">

| 引数  | 型      |                             | 説明                   |
| --- | ------ | --------------------------- | -------------------- |
| 戻り値 | Object | &#8592; | アクティブなアプリケーションに関する情報 |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

| リリース  | 内容                                            |
| ----- | --------------------------------------------- |
| 21 R2 | "useFluentUI" および "canUseFluentUI" プロパティのサポート |

</details>
</div>

## 説明

<!--REF #_command_.Application info.Summary-->**Application info** コマンドは、アクティブなアプリケーションとネットワーク設定に関する詳細な情報を提供するオブジェクトを返します。<!-- END REF-->

このコマンドは、スタンドアロンとクライアント/サーバー、どちらの環境で実行中のアプリケーション内でも実行可能です。 返される情報は、**Application info** が実行される場所によって異なります。 例えば、リモートの4D から実行された場合、その情報はリモートワークステーションの情報のみです。 このコマンドがサーバー上で実行されているメソッドから呼び出された場合、返される情報はサーバーの情報です。

戻り値のオブジェクトには、以下のプロパティが格納されています:

| **プロパティ**                                                                        | **型**      | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | **Example**                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| canUseFluentUI                                                                   | boolean    | 実行されている環境(アプリケーションまたはシステム)が [アプリケーションがWindows 上でFluent UI の使用することを許可している](../FormEditor/forms.md#requirements) 場合にはTrue を返します(macOS 上では意味をもちません)。 取り得る値: true/false。 取り得る値: true/false。                                                                                                                                                                                                                                                                                             | true                                                                                                                                                                                                                  |
| cpuUsage(\*)                                                  | number     | 4D が使用するプロセッサーの割合。 macOS の場合、表示される数値は1コアあたりの情報であり、プロセッサーの平均を表すという点に注意してください。 macOS の場合、表示される数値は1コアあたりの情報であり、プロセッサーの平均を表すという点に注意してください。                                                                                                                                                                                                                                                                                                                                                                                                                    | 10.03                                                                                                                                                                                                 |
| headless                                                                         | boolean    | アプリケーションがヘッドレスモードで実行されている場合は true. 取り得る値: true/false。 取り得る値: true/false。 詳細な情報については、 [コマンドライン・インターフェース](../Admin/cli.md) を参照してください。                                                                                                                                                                                                                                                                                                                                                                       | false                                                                                                                                                                                                                 |
| IPAddressesAllowDeny                                                             | collection | 4D Server のみ。 データベース設定において許可あるいは拒否されているIP アドレスのコレクションを返します。 より詳細な設定については [IP 設定ページ](../settings/client-server.md#ip設定ページ) を参照して下さい。                                                                                                                                                                                                                                                                                                                                                                                                                       | \[{"mode": "allow", "ip": "192.168.\*"},{...}\] |
| \[ \].mode | string     | IP アドレスが許可されているかどうかを表すプロパティ。 取りうる値: "allow" または "deny" 取りうる値: "allow" または "deny"                                                                                                                                                                                                                                                                                                                                                                                                                                          | "allow"                                                                                                                                                                                                               |
| \[ \].ip   | string     | IP アドレス                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | "192.167.1.2"                                                                                                                                                         |
| IPAddressesToListen                                                              | collection | 4D Server のみ。 4D Server がリッスンするIP アドレスを返します。 より詳細な設定については [IP 設定ページ](../settings/client-server.md#ip設定ページ) を参照して下さい。                                                                                                                                                                                                                                                                                                                                                                                                                                      | \["192.168.18.12","192.168.18.10"\]                             |
| launchedAsService                                                                | boolean    | アプリケーションがサービスとして起動している場合にはTrue。 取り得る値: true/false。 より詳細な情報については、*データベースをサービスとして登録する* を参照してください。 取り得る値: true/false。 より詳細な情報については、*データベースをサービスとして登録する* を参照してください。                                                                                                                                                                                                                                                                                                                                                           | false                                                                                                                                                                                                                 |
| networkInputThroughput(\*)                                    | number     | アプリケーションを実行中のマシンのネットワーク入力のデータレート(バイト/秒)。 リモートモードでは、リモートマシンにおけるレートが返されます。 より詳細な情報については、 [モニターページ](../ServerWindow/monitor.md) を参照してください。 リモートモードでは、リモートマシンにおけるレートが返されます。 より詳細な情報については、 [モニターページ](../ServerWindow/monitor.md) を参照してください。                                                                                                                                                                                                                                                                                                 | 37311495                                                                                                                                                                                                              |
| networkOutputThroughput(\*)                                   | number     | アプリケーションを実行中のマシンのネットワーク出力のデータレート(バイト/秒)。 リモートモードでは、リモートマシンにおけるレートが返されます。 より詳細な情報については、 [モニターページ](../ServerWindow/monitor.md) を参照してください。 リモートモードでは、リモートマシンにおけるレートが返されます。 より詳細な情報については、 [モニターページ](../ServerWindow/monitor.md) を参照してください。                                                                                                                                                                                                                                                                                                 | 88058023                                                                                                                                                                                                              |
| newConnectionsAllowed                                                            | boolean    | 4D Server のみ。 接続が許可されている場合には True。 取り得る値: true/false。 より詳細な情報については、 [新規接続を許可/拒否ボタン](../ServerWindow/application-server.md#新規接続を許可拒否) を参照してください。                                                                                                                                                                                                                                                                                                                                                                                           | true                                                                                                                                                                                                                  |
| pid                                                                              | number     | (OS から提供される)4D アプリケーションインスタンスプロセスのID - これを使用することで、例えば外部スクリプトなどから、実行中の各4D インスタンスを識別することができます。                                                                                                                                                                                                                                                                                                                                                                                                                                           | 16600                                                                                                                                                                                                                 |
| portID                                                                           | number     | 4D Server: アクティブにリッスンしているポート、4D リモート: リモート接続用のポート。 スタンドアロン環境では返されません。 最小値: 1\. スタンドアロン環境では返されません。 最小値: 1\. 詳細な情報については、 [ポート番号](../settings/client-server.md#ポート番号) を参照してください。                                                                                                                                                                                                                                                                           | 19814                                                                                                                                                                                                                 |
| remoteDebuggerSessionID                                                          | text       | サーバーデバッガーが有効化されているリモートアプリケーションのセッションID。 このIDは [Process activity](../commands/process-activity.md) コマンドからも返されます。 このIDは [Process activity](../commands/process-activity.md) コマンドからも返されます。                                                                                                                                                                                                                                                                                                                                                                   | "A838A40BJN3NJKH..."                                                                                                                                                  |
| SDIMode                                                                          | boolean    | アプリケーションがWindows 上で SDI モードで実行中の場合にはTrue (macOS 上では意味はありません)。 取り得る値: true/false。 より詳細な情報については、 [SDI モード](../Menus/sdi.md) を参照してください。 取り得る値: true/false。 より詳細な情報については、 [SDI モード](../Menus/sdi.md) を参照してください。                                                                                                                                                                                                                                                                                            | true                                                                                                                                                                                                                  |
| TLSEnabled                                                                       | boolean    | クライアント/サーバー通信でTLS が有効化されている場合には True 。 スタンドアロン環境では返されません。 取り得る値: true/false。 詳細な情報については、 [クライアント-サーバー通信の暗号化](../settings/client-server.md#クライアント-サーバー通信の暗号化) を参照してください。 スタンドアロン環境では返されません。 取り得る値: true/false。 詳細な情報については、 [クライアント-サーバー通信の暗号化](../settings/client-server.md#クライアント-サーバー通信の暗号化) を参照してください。                                                                                                                                                                                                                  |                                                                                                                                                                                                                       |
| uptime                                                                           | number     | ローカルな4D データベースが開かれてからの経過時間(秒単位)。 リモート接続に対しては、接続が確立されてからの経過時間を返します。 リモート接続に対しては、接続が確立されてからの経過時間を返します。                                                                                                                                                                                                                                                                                                                                                                                                                                   | 143                                                                                                                                                                                                                   |
| useFluentUI                                                                      | boolean    | アプリケーションがWindows 上で [Fluent UI で実行中](../FormEditor/forms.md#fluent-ui-rendering) の場合には True (macOS 上では意味がありません)。 取り得る値: true/false。 取り得る値: true/false。                                                                                                                                                                                                                                                                                                                                                 | true                                                                                                                                                                                                                  |
| useLegacyNetworkLayer                                                            | boolean    | アプリケーションサーバーに旧式ネットワークレイヤーが使用されている場合は true. スタンドアロン環境では返されません。 取り得る値: true/false。 より詳細な情報については、 [ネットワークレイヤー](../settings/client-server.md#ネットワークレイヤー) を参照してください。                                                                                                                                                                                                                                                                                                                                                           | false                                                                                                                                                                                                                 |
| useQUICNetworkLayer                                                              | boolean    | アプリケーションサーバーとDB4D サーバーがQUIC ネットワークレイヤーを使用している場合にはTrue 。 スタンドアロン環境では返されません。 取り得る値: true/false。 より詳細な情報に関しては、 [こちらの blog 記事](https://blog.4d.com/quic-network/) を参照してください。 スタンドアロン環境では返されません。 取り得る値: true/false。 より詳細な情報に関しては、 [こちらの blog 記事](https://blog.4d.com/quic-network/) を参照してください。                                                                                                                                                                                                                                 | false                                                                                                                                                                                                                 |
| volumeShadowCopyStatus                                                           | string     | ボリュームシャドウコピーサービスのステータスを返します。 Windows のみ。 より詳細な情報については、 *Windows でボリュームシャドウコピーサービスを使用する* を参照してください。  取りうる値: <table> <thead> <tr> <td>定数</td> <td>値</td> <td>補足</td> </tr> </thead> <tbody> <tr> <td>vss available</td> <td>available</td> <td>サービスは利用可能です。</td> </tr><tr> <td>vss error</td> <td>error</td> <td>サービスにエラーが発生しました。</td> </tr><tr> <td>vss not available</td> <td>notAvailable</td> <td>サービスは利用できません。</td> </tr><tr> <td>vss update required</td> <td>updateRequired</td> <td>サービスは更新される必要があります。</td> </tr> </tbody> </table> | "available"                                                                                                                                                                                                           |

(\*) Windows 上では、**Application info** コマンドを [On Startup データベースメソッド](../commands-legacy/on-startup-database-method.md) で呼び出すなどしてこのカウンターを事前に初期化しておく必要があります。

## 例題

以下のコードは、実行中のアプリケーションについての情報を格納したオブジェクトを返します:

```4d
 var $appInfo : Object
 $appInfo:=Application info
```

このコードがスタンドアロン環境から実行された場合、オブジェクトは以下のような内容を格納しています(例):

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.035875,
  "uptime": 469,
  "headless": false,
  "pid": 16500,
  "networkInputThroughput": 377263157,
  "networkOutputThroughput": 12345242236
}
```

コードが4D リモートクライアントから実行された場合、オブジェクトは以下のような内容を格納しています(例):

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.035875,
  "portID": 19814,
  "TLSEnabled": false,
  "uptime": 143,
  "headless": false,
  "pid": 1550,
  "useLegacyNetworkLayer": true,
  "networkInputThroughput": 268047058,
  "networkOutputThroughput": 12207686274
}
```

コードが4D Server 上で実行された場合、オブジェクトは以下のような内容を格納しています(例):

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.016125,
  "portID": 19814,
  "TLSEnabled": false,
  "uptime": 192,
  "headless": false,
  "pid": 9560,
  "useLegacyNetworkLayer": true,
  "useQUICNetworkLayer": false,
  "newConnectionsAllowed": true,
  "IPAddressesToListen": [
    "192.168.18.8",
    "192.168.18.7"
  ],
  "IPAddressesAllowDeny": [
    {
      "mode": "allow",
      "ip": "192.168.*"
    },
    {
      "mode": "deny",
      "ip": "192.167.15.3"
    },
    {
      "mode": "allow",
      "ip": "192.167.1.2"
    }
  ],
  "networkInputThroughput": 149014925,
  "networkOutputThroughput": 80238805
}
```

## 参照

[Execute on server](../commands-legacy/execute-on-server.md)  
[Get database parameter](../commands-legacy/get-database-parameter.md)  
[System info](../commands-legacy/system-info.md)  
[REJECT NEW REMOTE CONNECTIONS](../commands-legacy/reject-new-remote-connections.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1599                        |
| スレッドセーフ | &check; |



---
id: application-info
title: Application info
slug: /commands/application-info
displayed_sidebar: docs
---

<!--REF #_command_.Application info.Syntax-->**Application info** : Object<!-- END REF-->
<!--REF #_command_.Application info.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Object | &#8592; | アクティブなアプリケーションのアクティビティについての情報 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Application info.Summary-->**Application info** コマンドはアクティブなアプリケーションのアクティビティと、ネットワーク設定に関する詳細な情報を格納したオブジェクト型を返します。<!-- END REF-->

コマンドはスタンドアロンとクライアント/サーバー環境、どちらで実行しているアプリケーション上でも実行することが可能です。返される情報は、**Application info** が実行される場所に応じて変わります。例えば、リモートの4D 上で実行された場合、返される情報はリモートワークステーションに関する情報のみになります。コマンドがサーバーで実行されるメソッドで呼び出された場合には、返される情報はサーバーの情報が返されます。

返されるオブジェクト型には、以下のプロパティが格納されます:

| **プロパティ**                   | **型**  | **詳細**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | **例**                                           |
| --------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| cpuUsage(\*)                | 数値     | 4Dによって使用されているプロセッサーの割合。Mac においては、1コアあたりの数値が表示されていて、プロセッサー全体の平均値を表します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 10.03                                           |
| headless                    | ブール    | アプリケーションがヘッドレスモードで実行中の場合にはTrueを返します。取りうる値: true、false。詳細な情報については、*コマンドラインインターフェース* を参照してください                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | false                                           |
| IPAddressesAllowDeny        | コレクション | 4D Server のみ。データベース設定で受け取る、あるいは拒否されているIPアドレスのコレクションを返します。詳細な情報については、*IP 設定*を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | \[{"mode": "allow", "ip": "192.168.\*"},{...}\] |
| \[ \].mode                  | 文字列    | IPアドレスが許可されているかどうかを説明するプロパティです。取り得る値: "allow" あるいは "deny"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | "allow"                                         |
| \[ \].ip                    | 文字列    | IP アドレス                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | "192.167.1.2"                                   |
| IPAddressesToListen         | コレクション | 4D Server のみ。その4D Server が聞いているIPアドレスを返します。詳細な情報については、*IP 設定*を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | \["192.168.18.12","192.168.18.10"\]             |
| launchedAsService           | ブール    | アプリケーションがサービスとして起動していた場合にはTrueを返します。取り得る値: True、false。詳細な情報については、*データベースをサービスとして登録* を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | false                                           |
| networkInputThroughput(\*)  | 数値     | アプリケーションを実行しているマシンのネットワーク入力のデータ速度(バイト/秒)。リモートモードにおいては、リモートマシンの速度が返されます。詳細な情報については*モニタページ*を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 37311495                                        |
| networkOutputThroughput(\*) | 数値     | アプリケーションを実行しているマシンのネットワーク出力のデータ速度(バイト/秒)。リモートモードにおいては、リモートマシンの速度が返されます。詳細な情報については*モニタページ*を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 88058023                                        |
| newConnectionsAllowed       | ブール    | 4D Server のみ。新規接続が許可されている場合にはTrue。取り得る値: True、False。詳細な情報については、を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | true                                            |
| pid                         | 数値     | (OS によって提供される)4D アプリケーションのインスタンスプロセスのID -- 例えば外部スクリプトから実行中の4D インスタンスを識別することができます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 16600                                           |
| portID                      | 数値     | 4D Server: アクティブに聞いていているポート、4D remote: リモート接続のポート。スタンドアロン環境では返されません。最小値: 1。詳細な情報については、*ポート番号*を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 19814                                           |
| remoteDebuggerSessionID     | テキスト   | サーバーデバッガーが起動しているリモートアプリケーションのセッションID。このID は[Process activity](../commands/process-activity.md) によっても返されます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | "A838A40BJN3NJKH..."                            |
| SDIMode                     | ブール    | アプリケーションがWindows 上でSDI モードで実行中の場合にはTrue(macOS上では意味を持ちません)。取り得る値: true、false。より詳細な情報については、*developer.4d.com* の[SDI モード](../Menus/sdi.md) を参照してください                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | true                                            |
| TLSEnabled                  | ブール    | TLS がクライアント/サーバー通信において有効化されている場合にはTrue を返します。スタンドアロン環境では返されません。取り得る: True、False。詳細な情報については、*TLSプロトコルとクライアント/サーバ接続*を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | true                                            |
| uptime                      | 数値     | ローカルの4D データベースが開かれてからの経過時間(秒単位)。リモート接続に対しては、接続が開かれてからの経過時間を返します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 143                                             |
| useLegacyNetworkLayer       | ブール    | アプリケーションサーバーにおいて旧式ネットワークレイヤーが使用されている場合にはTrue。スタンドアロン環境では返されません。取り得る値: True、False。詳細な情報については、*旧式ネットワークレイヤーの有効化または無効化*を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | false                                           |
| useQUICNetworkLayer         | ブール    | アプリケーションサーバーおよびDB4Dサーバーに対してQUIC ネットワークレイヤーが使用されている場合にはTrue(4D v20 ではベータ版、詳細は*互換性ページ* 参照)。スタンドアロン環境では返されません。取り得る値: true、false。詳細な情報については、[このBlog 記事](https://blog.4d.com/quic-network/) を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | false                                           |
| volumeShadowCopyStatus      | 文字列    | ボリューム・シャドウ・コピー・サービスのステータスを返します。Windowsのみ。詳細な情報については、*Windows のボリュームシャドウコピーサービスを使用する*を参照してください。 取り得る値: <table> <thead> <tr> <td>定数</td> <td>値</td> <td>コメント</td> </tr> </thead> <tbody> <tr> <td>vss available</td> <td>available</td> <td>サービスは利用可能です。</td> </tr><tr> <td>vss error</td> <td>error</td> <td>サービスにエラーが発生しました。</td> </tr><tr> <td>vss not available</td> <td>notAvailable</td> <td>サービスは利用できません。</td> </tr><tr> <td>vss update required</td> <td>updateRequired</td> <td>サービスは更新が必要です。</td> </tr> </tbody> </table> | "available"                                     |

(\*) Windows 上では、例えば[On Startupデータベースメソッド](on-startup-database-method.md) 内で**Application info** コマンドを呼び出すなどして、カウンターを事前に初期化しておく必要があります。

#### 例題

以下のコードを実行すると、実行中のアプリケーションについての情報を格納したオブジェクトが返されます:

```4d
 var $appInfo : Object
 $appInfo:=Application info
```

 コードがスタンドアロン環境で実行された場合、返されたオブジェクトには(一例として)以下のような情報が格納されています: 

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

 コードが4D リモートクライアントで実行された場合には、返されたオブジェクトには(一例として)以下のような情報が格納されています: 

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

 コードが4D Server で実行された場合には、返されたオブジェクトには(一例として)以下のような情報が格納されています: 

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

#### 参照 

[Execute on server](execute-on-server.md)  
[Get database parameter](get-database-parameter.md)  
[System info](system-info.md)  
[REJECT NEW REMOTE CONNECTIONS](reject-new-remote-connections.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1599 |
| スレッドセーフである | &check; |



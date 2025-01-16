---
id: monitored-activity
title: Monitored activity
slug: /commands/monitored-activity
displayed_sidebar: docs
---

<!--REF #_command_.Monitored activity.Syntax-->**Monitored activity**  : Collection<!-- END REF-->
<!--REF #_command_.Monitored activity.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Collection | &#8592; | モニターしているアクティビティのコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Monitored activity.Summary-->**Monitored activity** コマンドは、[START MONITORING ACTIVITY](start-monitoring-activity.md) コマンドによって設定された詳細に応じて記録されたオペレーションを表すオブジェクトのコレクションを返します。<!-- END REF-->このコマンドは4D リモート、4D Server、スタンドアロン版の4D において実行または呼び出し可能です(ただしスタンドアロン版は*source* 引数で指定されたソースがネットワークアクティビティでない場合のみ可能)。

返されたコレクション内のオブジェクトは、以下のようなプロパティを格納しています:

| **プロパティ<br/>** | **型<br/>** | **詳細<br/>**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| activityKind           | 倍長整数               | 記録されたアクティビティのタイプ:<br/><br/> <table> <thead> <tr> <td>定数</td> <td>値</td> <td>コメント</td> </tr> </thead> <tbody> <tr> <td>Activity language</td> <td>1</td> <td>ランゲージ実行オペレーション</td> </tr><tr> <td>Activity network</td> <td>2</td> <td>ネットワークリクエストオペレーション</td> </tr><tr> <td>Activity operations</td> <td>4</td> <td>4D データオペレーション</td> </tr> </tbody> </table> |
| activityDuration       | 実数                 | アクティビティの時間、秒単位                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| activityData           | オブジェクト             | 記録されたアクティビティのタイプ(*activityKind*)に応じて特定のプロパティを格納したオブジェクト。状況によっては、同じオペレーションに対して複数のオブジェクトが返されることもあります。この場合、これらのオブジェクトには同じUUIDが振られます。これらのオブジェクト内に格納される追加のプロパティについては、以下のセクションにおいて詳細な説明があります。                                                                                                                                                                                                                                                                                                                                                                                                                         |

##### activityKind = Activity language (1) 

**注:** *activityData* オブジェクトは*4DDebugLog.txt (標準)* においては[SET DATABASE PARAMETER](set-database-parameter.md) コマンドで定義された情報を(あれば)使用しますが、それ以外の場合にはデフォルトモードを使用します。そのため、コマンドの実行中にログ記録を開始した場合には、返される戻り値に影響します。

*activityData* オブジェクト:

| **プロパティ<br/>** | **型<br/>** | **詳細<br/>**                                                                                                                                     |
| ---------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequenceNumber         | 倍長整数               | ログセッション中の固有かつシーケンシャルなオペレーション番号                                                                                                                          |
| elapsedTime            | 倍長整数               | デバッグログが開始されてからの経過時間(ミリ秒単位)                                                                                                                              |
| processID              | 倍長整数               | プロセスID                                                                                                                                                  |
| uniqueProcessID        | 倍長整数               | 固有のプロセスID                                                                                                                                               |
| stackLevel             | 倍長整数               | スタックレベル                                                                                                                                                 |
| duration               | 倍長整数               | オペレーション時間の長さ(ミリ秒単位)                                                                                                                                     |
| kind                   | テキスト               | 記録されたオペレーションの種類。取り得る値は以下の通りです:<br/> "command" "method" "Message" "pluginMessage" "pluginCommand" "pluginCallback" "pluginEvent" "task" "member" |

###### 追加のプロパティ 

*kind* で表されるオペレーションの種類によっては、*activityData* オブジェクト内に以下の追加のプロパティが返されます:

| **プロパティ <br/>** | **型** | **Kind プロパティ<br/>**                                                                                                          | **詳細**                                                                                                                                                                                                                                          |
| ----------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| commandName             | テキスト  | command                                                                                                                              | コマンド名                                                                                                                                                                                                                                           |
| commandNumber           | 倍長整数  | command                                                                                                                              | コマンド番号                                                                                                                                                                                                                                          |
| connectionUUID          | テキスト  | task                                                                                                                                 | クライアントマシンUUID                                                                                                                                                                                                                                   |
| formEvent               | テキスト  | command                                                                                                                              | フォームイベント名                                                                                                                                                                                                                                       |
| formMethod              | テキスト  | command                                                                                                                              | フォームメソッド                                                                                                                                                                                                                                        |
| functionName            | テキスト  | member                                                                                                                               | ORDA メンバーメソッド名                                                                                                                                                                                                                                  |
| memberMethod            | テキスト  | command                                                                                                                              | 4D のオブジェクト呼び出しのメンバーメソッドのローカライズされた文字列                                                                                                                                                                                                            |
| method                  | テキスト  | command                                                                                                                              | 4D コマンドとファンクションのローカライズされた名前                                                                                                                                                                                                                     |
| parameters              | テキスト  | command<br/>member<br/>message<br/>method<br/>pluginCommand<br/>pluginEvent<br/>task | オペレーションに渡された引数                                                                                                                                                                                                                                  |
| pluginCommandName       | テキスト  | pluginCommand<br/>pluginEvent                                                                                                | プラグインコマンド名前                                                                                                                                                                                                                                     |
| pluginCommandNumber     | 倍長整数  | pluginCommand<br/>pluginEvent<br/>pluginMessage                                                                      | プラグインコマンドの番号                                                                                                                                                                                                                                    |
| pluginExternalCall      | 倍長整数  | pluginCallback                                                                                                                       | プラグインSDK エントリーポイント呼び出し                                                                                                                                                                                                                          |
| pluginMessageName       | テキスト  | pluginMessage                                                                                                                        | 取り得る値: PackMsgServerDeInit PackMsgServerDisposeData PackMsgServerWriteData PackMsgServerReadData PackMsgServerKillClient PackMsgServerNewClient PackMsgServerInit PackMsgProcessDeInit PackMsgProcessInit PackMsgClientDeInit PackMsgClientInit |
| pluginName              | テキスト  | pluginCallback<br/>pluginCommand<br/>pluginEvent<br/>pluginMessage                                           | プラグインの名前                                                                                                                                                                                                                                        |

##### activityKind = Activity network (2) 

****注:** 

* デバッグログが4D Server の[GRAPH SETTINGS](graph-settings.md)にて停止されている場合、**Monitored activity** は何も返しません。ログがサーバー上で、あるいは[START MONITORING ACTIVITY](start-monitoring-activity.md) コマンドとActivity network を使用して再開されていた場合、**Monitored activity** コマンドはネットワークアクティビティ情報を返すのを再開します。
* *activityData* オブジェクトは*4DRequestsLog.txt* においては[SET DATABASE PARAMETER](set-database-parameter.md) コマンドで定義された情報を(あれは)使用しますが、それ以外の場合にはデフォルトモードを使用します。そのため、**Monitored activity** コマンドの実行中にログ記録を開始した場合には、返される戻り値に影響します。

*activityData* オブジェクト:

| **プロパティ<br/>** | **型<br/>** | **詳細 <br/>**                                                                                                                                            |
| ---------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sequenceNumber         | 倍長整数               | ログセッション中の固有かつシーケンシャルなオペレーション番号                                                                                                                                  |
| time                   | テキスト               | ISO 8601 フォーマットの日付と時間("YYYY-MM-DDTHH:MM:SS.sss")                                                                                                                |
| systemID               | テキスト               | システムID                                                                                                                                                          |
| component              | テキスト               | コンポーネント署名(*例:* 4SQLS または dbmg)                                                                                                                                  |
| processInfoIndex       | 倍長整数               | *4DRequestsLog\_ProcessInfo.txt* ログの"index"フィールドに対応し、リクエストとプロセスがリンクするのを許可します。                                                                                   |
| request                | 倍長整数               | C/Sメッセージ、SQL リクエスト、[LOG EVENT](log-event.md) メッセージのリクエストID                                                                                                      |
| bytesIn                | 倍長整数               | 受信したバイト数                                                                                                                                                        |
| bytesOut               | 倍長整数               | 送信したバイト数                                                                                                                                                        |
| execDuration           | 倍長整数               | 生成された場所に応じて変化します:server\_duration . <br/>またはサーバーで生成された場合にはexec\_duration --サーバーがリクエストを処理するのにかかった時間(マイクロ秒単位)                                             |
| writeDuration          | 倍長整数               | 以下のものを送信するのにかかった時間(マイクロ秒単位):リクエスト(クライアント上で実行された場合)レスポンス(サーバー上で実行された場合)                                                                                          |
| serverDuration         | 倍長整数               | クライアント/サーバー通信にかかった時間(マイクロ秒)                                                                                                                                     |
| taskKind               | テキスト               | プリエンプティブまたはコオペラティブ(それぞれ 'p' または 'c')                                                                                                                            |
| rtt                    | 倍長整数               | クライアントがリクエストを送信し、サーバーがそれを受信するまでの概算時間ネットワークレイヤーを使用している場合のみ計測されます。旧式ネットワークレイヤーを使用している場合には0を返しますWindows 10以前、Windows Server 2016 以前のWindows のバージョンでは、この呼び出しは0を返します |

##### activityKind = Activity operations (4) 

**注:** *activityData* オブジェクトは[ACTIVITY SNAPSHOT](activity-snapshot.md) コマンドから返されるものに近いですが、閾値と完了したオペレーションのみが返されるという点が異なります。

*activityData* オブジェクト:

| **プロパティ <br/>** |        | **型 <br/>**                                                                                                                        | **詳細 <br/>**                                                                                                           |
| ----------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| message                 |        | テキスト                                                                                                                                       | オペレーションの詳細                                                                                                                     |
| maxValue                |        | 倍長整数                                                                                                                                       | オペレーションの最大繰り返し回数(繰り返さないオペレーションに対しては値= -1)                                                                                      |
| remote                  |        | ブール                                                                                                                                        | クライアント / サーバーオペレーション。取り得る値: true, false                                                                                        |
| uuid                    |        | テキスト                                                                                                                                       | オペレーションのUUID                                                                                                                   |
| taskId                  |        | 倍長整数                                                                                                                                       | 元となるプロセスの、4D内部の識別ID                                                                                                            |
| startTime               |        | テキスト                                                                                                                                       | オペレーションの開始時刻(ISO 8601 フォーマット / "YYYY-MM-DDTHH:MM:SS.sss")                                                                      |
| duration                |        | 倍長整数                                                                                                                                       | オペレーション実行の総時間(ミリ秒単位)                                                                                                           |
| title                   |        | テキスト                                                                                                                                       | オペレーションについての追加の情報                                                                                                              |
| extraInfo               |        | オブジェクト                                                                                                                                     | 追加のSQL情報(あれば):<br/><br/> extraInfo.SQL\_Query (テキスト): SQL クエリ extraInfo.SQL\_User (テキスト): SQL サーバーで認証されているユーザー |
| dbContextInfo           |        | オブジェクト                                                                                                                                     | オペレーションのコンテキスト情報                                                                                                               |
| |  host\_name           | テキスト   | オペレーションをローンチしたホスト名                                                                                                                         |                                                                                                                                |
| |  user\_name           | テキスト   | オペレーションをローンチしたセッションの4Dユーザー                                                                                                                 |                                                                                                                                |
| |  task\_name           | テキスト   | オペレーションをローンチしたプロセス名                                                                                                                        |                                                                                                                                |
| |  task\_id             | 倍長整数   | オペレーションをローンチしたプロセスのID                                                                                                                      |                                                                                                                                |
| |  client\_uid          | テキスト   | (C/S オペレーションのみ)データベースオペレーションをローンチしたクライアントマシンのUUID                                                                                          |                                                                                                                                |
| |  is\_remote\_context  | 倍長整数   | (C/S オペレーションのみ)オペレーションが、ストアドプロシージャ経由でサーバーでローンチされた(値=0)か、クライアントでローンチされた(値=1)を表す                                                             |                                                                                                                                |
| |  user4d\_id           | 倍長整数   | クライアントマシン上の4D ユーザーのID                                                                                                                      |                                                                                                                                |
| |  user4d\_alias        | テキスト   | 4D ユーザーのエイリアスセット。[SET USER ALIAS](set-user-alias.md) を参照してください。                                                                            |                                                                                                                                |
| |  client\_version      | テキスト   | [Application version](application-version.md) コマンドによって返される、4D環境のバージョン番号を表すエンコードされた文字列値                                                     |                                                                                                                                |
| dbOperationDetails      |        | オブジェクト                                                                                                                                     | データベースエンジン絵のオペレーション呼び出しについての情報                                                                                                 |
| |  table                | テキスト   | オペレーション内のテーブル名                                                                                                                             |                                                                                                                                |
| |  field                | テキスト   | オペレーションのフィールド名                                                                                                                             |                                                                                                                                |
| |  queryPlan            | テキスト   | オペレーションのクエリプラン                                                                                                                             |                                                                                                                                |
| |  operationType        | テキスト   | オペレーションのタイプ                                                                                                                                |                                                                                                                                |
| |  sortParameters       | コレクション | 並び替え条件                                                                                                                                     |                                                                                                                                |
| subOperations           |        | コレクション                                                                                                                                     | カレントオペレーション内の下位オペレーションについての情報を格納したactivytData オブジェクトのコレクション                                                                    |
| |  \[ \].message        | テキスト   | オペレーションのラベル                                                                                                                                |                                                                                                                                |
| |  \[ \].maxValue       | 倍長整数   | オペレーションの最大繰り返し回数(繰り返さないオペレーションに対しては値= -1)                                                                                                  |                                                                                                                                |
| |  \[ \].remote         | ブール    | クライアント / サーバーオペレーション(0=true, 1=false)                                                                                                      |                                                                                                                                |
| |  \[ \].uuid           | テキスト   | オペレーションのUUID                                                                                                                               |                                                                                                                                |
| |  \[ \].taskId         | 倍長整数   | 元となるプロセスの、4D内部の識別ID                                                                                                                        |                                                                                                                                |
| |  \[ \].startTime      | テキスト   | オペレーションの開始時刻(ISO 8601 フォーマット / "YYYY-MM-DDTHH:MM:SS.sss")                                                                                  |                                                                                                                                |
| |  \[ \].duration       | 倍長整数   | オペレーション実行の総時間(ミリ秒単位)                                                                                                                       |                                                                                                                                |
| |  \[ \].title          | テキスト   | オペレーションについての追加の情報                                                                                                                          |                                                                                                                                |
| |  \[ \].extraInfo      | オブジェクト | 追加のSQL情報(あれば):<br/><br/> \[ \].extraInfo.SQL\_Query (text): SQL クエリ \[ \].extraInfo.SQL\_User (text): SQL サーバーで認証されているユーザー |                                                                                                                                |

#### 例題 

**[START MONITORING ACTIVITY](start-monitoring-activity.md)**の例題を参照してください

#### 参照 

[START MONITORING ACTIVITY](start-monitoring-activity.md)  
[STOP MONITORING ACTIVITY](stop-monitoring-activity.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1713 |
| スレッドセーフである | &check; |



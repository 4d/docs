---
id: log-event
title: LOG EVENT
slug: /commands/log-event
displayed_sidebar: docs
---

<!--REF #_command_.LOG EVENT.Syntax-->**LOG EVENT** ( {*outputType* ;} *message* {; *importance*} )<!-- END REF-->
<!--REF #_command_.LOG EVENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| outputType | Integer | &#8594;  | メッセージの出力タイプ |
| message | Text | &#8594;  | メッセージの内容 |
| importance | Integer | &#8594;  | メッセージの重要度レベル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LOG EVENT.Summary-->**LOG EVENT**コマンドを使用して、アプリケーションの使用中に発生した内部イベントを記録するためのカスタマイズされたシステムを設定します。<!-- END REF-->

イベントに応じて記録されるカスタム情報を *message*に渡します。

オプションの引数*outputType*を使用して、*message*によって取得された出力チャネルを指定します。*Log Events*テーマにある以下の定数の一つをこの引数に渡します。

| 定数                           | 型    | 値 | コメント                                                                                                                                                                                                                                                                         |
| ---------------------------- | ---- | - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Into 4D commands log         | 倍長整数 | 3 | この値は4Dのコマンドログファイルがアクティブである場合、このファイルに*message*の内容を記録するよう4Dに指示します。4Dコマンドログファイルは[SET DATABASE PARAMETER](set-database-parameter.md)コマンド (セレクター34) を使用して有効にできます。 **注:** 4Dのログファイルは、**Logs**フォルダに配置されます([Get 4D folder](get-4d-folder.md)コマンドを参照) 。                               |
| Into 4D debug message        | 倍長整数 | 1 | この値は4Dに*message*をシステムデバッギング環境へ送るよう指示します。結果はプラットホームにより異なります。Mac OSでは、コマンドはメッセージをコンソールへ送ります。Windowsでは、コマンドはメッセージをデバッグメッセージとして送ります。このメッセージを読むには、Microsoft Visual StudioまたはDebugViewユーティリティが必要です。<br/> (<http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx>) |
| Into 4D diagnostic log       | 倍長整数 | 5 | ログファイルが有効である場合に、メッセージを4Dのログファイルに記録するよう指示します。<br/>ログファイルは[SET DATABASE PARAMETER](set-database-parameter.md)コマンド (セレクター79) を使用して有効にできます。                                                                                                                              |
| Into 4D request log          | 倍長整数 | 2 | この値は4Dリクエストログがアクティブである場合、このファイルに*message*を記録するよう4Dに指示します。                                                                                                                                                                                                                    |
| Into system standard outputs | 倍長整数 | 6 | この値は 4D に *message* を標準出力ストリームへ送るよう指示します。メッセージの送り先は*importance*の値により決まります: **stdout** : *importance* \= Information message または Warning message の場合 **stderr** : *importance* \= Error message の場合                                                                           |
| Into Windows log events      | 倍長整数 | 0 | この値は、4Dに*message* をWindowsの"Log events" へ送るよう指示します。このログは起動しているアプリケーションから送られるメッセージを受け取り保存します。この場合オプションの*importance*引数を使用して*message*の重要度を設定できます (後述)。**<br/>Notes:** <br/>この特性を利用するには、Windows Log Eventsサービスが起動していなければなりません。Mac OSでは、コマンドはこの出力タイプでは何もしません。     |

*outputType*引数を渡さない場合、デフォルトでInto Windows Log Events (0) が使用されます。

オプションの*importance* 引数を使用して*message* の重要度を設定することで、ログイベントを読みやすくして理解しやすくすることができます。重要度には情報、警告とエラーの3つのレベルがあります。4D は、以下の定義済み定数を提供しています:

| 定数                  | 型    | 値 |
| ------------------- | ---- | - |
| Error message       | 倍長整数 | 2 |
| Information message | 倍長整数 | 0 |
| Warning message     | 倍長整数 | 1 |
  
*importance* に何も渡さなかったり、正しくない値を渡すと、デフォルト値(0) が使用されます。

:::注意
*importance* 引数は*outputType* 引数に `Into Windows log events`、 `Into 4D diagnostic log`、 および `Into system standard outputs` を渡した時のみ使用されます。
:::

#### 例題 

Windowsでデータベースが開かれた時の情報をログしたい場合は、以下のコードを[On Startupデータベースメソッド](on-startup-database-method.md)内に記述します。

```4d
 LOG EVENT(Into Windows log events;"The Invoice database was opened.")
```

データベースが開かれるたびに、重要度レベルが0として、この情報がWindowsログイベントに書き込まれます。

#### 参照 

[SET DATABASE PARAMETER](set-database-parameter.md)  


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 667 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



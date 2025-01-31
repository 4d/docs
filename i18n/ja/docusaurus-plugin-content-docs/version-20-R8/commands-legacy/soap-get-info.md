---
id: soap-get-info
title: SOAP Get info
slug: /commands/soap-get-info
displayed_sidebar: docs
---

<!--REF #_command_.SOAP Get info.Syntax-->**SOAP Get info** ( *infoNum* ) : Text<!-- END REF-->
<!--REF #_command_.SOAP Get info.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| infoNum | Integer | &#8594;  | 取得するSOAP情報のタイプ番号 |
| 戻り値 | Text | &#8592; | SOAP情報 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SOAP Get info.Summary-->**SOAP Get info**コマンドを使用して、SOAPリクエストに関するさまざま情報を文字列で受け取ることができます。<!-- END REF-->

SOAPリクエストを処理する際、RPC引数のほかに、リクエストに関する追加の情報を得られると便利です。例えばセキュリティのため、*On Web Authenticationデータベースメソッド*内でこのコマンドを使用して、リクエストされたWebサービスのメソッド名を知ることができます。 

知りたいSOAP情報のタイプ番号を*infoNum* 引数に渡します。*Web Services (Server)*テーマで定義済みの以下の定数を使用できます:

| 定数                | 型    | 値 | コメント                    |
| ----------------- | ---- | - | ----------------------- |
| SOAP method name  | 倍長整数 | 1 | 実行されようとしているWebサービスメソッド名 |
| SOAP service name | 倍長整数 | 2 | メソッドが属しているWebサービスの名前    |

**Note:** またセキュリティのため、4Dに送信されるWebサービスリクエストの最大サイズを設定できます。この設定は[SET DATABASE PARAMETER](set-database-parameter.md)コマンドで行います。

#### 参照 

[SET DATABASE PARAMETER](set-database-parameter.md)  
[SOAP SEND FAULT](soap-send-fault.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 784 |
| スレッドセーフである | &check; |



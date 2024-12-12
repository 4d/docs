---
id: soap-reject-new-requests
title: SOAP REJECT NEW REQUESTS
slug: /commands/soap-reject-new-requests
displayed_sidebar: docs
---

<!--REF #_command_.SOAP REJECT NEW REQUESTS.Syntax-->**SOAP REJECT NEW REQUESTS** ( *rejectStatus* )<!-- END REF-->
<!--REF #_command_.SOAP REJECT NEW REQUESTS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| rejectStatus | Boolean | &#8594;  | 新規リクエストを拒否するにはTrue、それ以外の場合にはFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SOAP REJECT NEW REQUESTS.Summary-->**SOAP REJECT NEW REQUESTS** コマンドはWeb サービスが新規SOAP リクエストを受け入れるかどうかを指定します。<!-- END REF-->

*rejectStatus* 引数には、**True** を渡すと新規SOAP リクエストを拒否します。**False** を渡すと、新規SOAP リクエストを受け入れることを指定します。  

**注**: このコマンドは4D Server 上でのみ実行可能です。このコマンドを呼び出しているメソッドがリモートのクライアント上でローカルに実行された場合、あるいはシングルユーザー版4D で実行された場合、**SOAP REJECT NEW REQUESTS** は何もしません。

#### 例題 

Web サービスのサーバーにおいて新規リクエストを全て拒否したい場合を考えます:

```4d
  //サーバーで実行すべきメソッド
 If(WEB Get server info.SOAPServerStarted)
    SOAP REJECT NEW REQUESTS(True)
 End if
```

#### 参照 

[REJECT NEW REMOTE CONNECTIONS](reject-new-remote-connections.md)  
[WEB Get server info](web-get-server-info.md)  
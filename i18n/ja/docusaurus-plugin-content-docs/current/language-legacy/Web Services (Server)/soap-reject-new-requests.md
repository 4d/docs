---
id: soap-reject-new-requests
title: SOAP REJECT NEW REQUESTS
slug: /commands/soap-reject-new-requests
displayed_sidebar: docs
---

<!--REF #_command_.SOAP REJECT NEW REQUESTS.Syntax-->**SOAP REJECT NEW REQUESTS** ( *rejectStatus* : Boolean )<!-- END REF-->
<!--REF #_command_.SOAP REJECT NEW REQUESTS.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| rejectStatus | Boolean | &#8594; | 新規リクエストを拒否するにはTrue、それ以外の場合にはFalse |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|17 R4|初出|

</details>
</div>

## 説明 

<!--REF #_command_.SOAP REJECT NEW REQUESTS.Summary-->**SOAP REJECT NEW REQUESTS** コマンドはWeb サービスが新規SOAP リクエストを受け入れるかどうかを指定します。<!-- END REF-->引数には、**True** を渡すと新規SOAP リクエストを拒否します。**False** を渡すと、新規SOAP リクエストを受け入れることを指定します。  

**注**: このコマンドは4D Server 上でのみ実行可能です。このコマンドを呼び出しているメソッドがリモートのクライアント上でローカルに実行された場合、あるいはシングルユーザー版4D で実行された場合、**SOAP REJECT NEW REQUESTS** は何もしません。

## 例題 

Web サービスのサーバーにおいて新規リクエストを全て拒否したい場合を考えます:

```4d
  //サーバーで実行すべきメソッド
 If(WEB Get server info.SOAPServerStarted)
    SOAP REJECT NEW REQUESTS(True)
 End if
```

## 参照 

[REJECT NEW REMOTE CONNECTIONS](../commands/reject-new-remote-connections)  
[WEB Get server info](../commands/web-get-server-info)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1636 |
| スレッドセーフである | yes |



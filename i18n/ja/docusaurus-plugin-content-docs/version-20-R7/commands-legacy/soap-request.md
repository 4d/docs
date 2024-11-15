---
id: soap-request
title: SOAP Request
slug: /commands/soap-request
displayed_sidebar: docs
---

<!--REF #_command_.SOAP Request.Syntax-->**SOAP request**  : Boolean<!-- END REF-->
<!--REF #_command_.SOAP Request.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | True: リクエストはSOAP; そうでなければFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SOAP Request.Summary-->**SOAP request**コマンドは実行されているコードがSOAPリクエストの一部であれば[True](true.md "True")を返します。<!-- END REF--> 

このコマンドは、セキュリティの目的で*On Web Authenticationデータベースメソッド*で使用し、受信したリクエストがSOAPであるか知ることができます。

#### 参照 

[SOAP DECLARATION](soap-declaration.md)  
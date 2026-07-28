---
id: soap-request
title: SOAP Request
slug: /commands/soap-request
displayed_sidebar: docs
---

<!--REF #_command_.SOAP Request.Syntax-->**SOAP request**  : Boolean<!-- END REF-->
<!--REF #_command_.SOAP Request.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | True: リクエストはSOAP; そうでなければFalse |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|13|名称変更|
|2003|初出|

</details>
</div>

## 説明 

<!--REF #_command_.SOAP Request.Summary-->**SOAP request**コマンドは実行されているコードがSOAPリクエストの一部であれば[True](../commands/true)を返します。<!-- END REF--> 

このコマンドは、セキュリティの目的で*On Web Authenticationデータベースメソッド*で使用し、受信したリクエストがSOAPであるか知ることができます。

## 参照 

[SOAP DECLARATION](../commands/soap-declaration)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 783 |
| スレッドセーフである | yes |



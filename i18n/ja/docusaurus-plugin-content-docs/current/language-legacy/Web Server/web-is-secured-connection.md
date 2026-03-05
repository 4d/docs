---
id: web-is-secured-connection
title: WEB Is secured connection
slug: /commands/web-is-secured-connection
displayed_sidebar: docs
---

<!--REF #_command_.WEB Is secured connection.Syntax-->**WEB Is secured connection**  : Boolean<!-- END REF-->
<!--REF #_command_.WEB Is secured connection.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | True = Web接続が保護されている場合 False = Web接続が保護されていない場合 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|13|名称変更|
|6.7|初出|

</details>
</div>

## 説明 

<!--REF #_command_.WEB Is secured connection.Summary-->**WEB Is secured connection**コマンドは、4DのWebサーバ接続が (リクエストが"http:"の代わりに"https:"で始まる) TLS/SSLを通して保護モードで実行されたかを示すブール値を返します 。<!-- END REF-->

* TLS/SSLを経由して接続された場合、関数はTrueを返します。
* 非保護モードで接続された場合、関数はFalseを返します。

**注:** TLSプロトコルに関する詳細は[WEB SERVICE SET PARAMETER](../commands/web-service-set-parameter)を参照してください。 

このコマンドを使用して、非保護モードで実行された接続を拒否することも可能です。

## 参照 

[GENERATE CERTIFICATE REQUEST](../commands/generate-certificate-request)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 698 |
| スレッドセーフである | yes |



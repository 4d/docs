---
id: wa-open-forward-url
title: WA OPEN FORWARD URL
slug: /commands/wa-open-forward-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN FORWARD URL.Syntax-->**WA OPEN FORWARD URL** ( * ; *object* : Text )<br/>**WA OPEN FORWARD URL** ( *object* : Variable, Field )<!-- END REF-->
<!--REF #_command_.WA OPEN FORWARD URL.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594; | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL Release 2|初出|

</details>
</div>

## 説明 

<!--REF #_command_.WA OPEN FORWARD URL.Summary-->WA OPEN FORWARD URL コマンドは、*\** と *object* 引数で指定したWebエリアに開かれた一連のURL中、現在のURLのひとつ次のURLをロードします。<!-- END REF--> 

次のURLがない場合、コマンドは何も行いません。前のURLが有効かどうかは、[WA Forward URL available](wa-forward-url-available.md "WA Forward URL available") コマンドで知ることができます。 

## 参照 

[WA OPEN BACK URL](../commands/wa-open-back-url)  
[WA OPEN URL](../commands/wa-open-url)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1022 |
| スレッドセーフである | no |



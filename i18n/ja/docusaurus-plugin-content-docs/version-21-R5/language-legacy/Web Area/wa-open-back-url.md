---
id: wa-open-back-url
title: WA OPEN BACK URL
slug: /commands/wa-open-back-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN BACK URL.Syntax-->**WA OPEN BACK URL** ( * ; *object* : Text )<br/>**WA OPEN BACK URL** ( *object* : Variable, Field )<!-- END REF-->
<!--REF #_command_.WA OPEN BACK URL.Params-->
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

<!--REF #_command_.WA OPEN BACK URL.Summary-->WA OPEN BACK URL コマンドは、*\** と *object* 引数で指定したWebエリアに開かれた一連のURL中、現在のURLのひとつ前のURLをロードします。<!-- END REF--> 

前のURLがない場合、コマンドは何も行いません。前のURLが有効かどうかは、[WA Back URL available](wa-back-url-available.md "WA Back URL available") コマンドで知ることができます。 

## 参照 

[WA OPEN FORWARD URL](../commands/wa-open-forward-url)  
[WA OPEN URL](../commands/wa-open-url)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1021 |
| スレッドセーフである | no |



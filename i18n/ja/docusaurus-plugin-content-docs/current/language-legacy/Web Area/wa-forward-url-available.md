---
id: wa-forward-url-available
title: WA Forward URL available
slug: /commands/wa-forward-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Forward URL available.Syntax-->**WA Forward URL available** ( * ; *object* : Text ) : Boolean<br/>**WA Forward URL available** ( *object* : Variable, Field ) : Boolean<!-- END REF-->
<!--REF #_command_.WA Forward URL available.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594; | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| 戻り値 | Boolean | &#8592; | 開かれた一連のURLで、次のURLが有効ならTrue、 そうでなければFalse |
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

<!--REF #_command_.WA Forward URL available.Summary-->WA Forward URL available コマンドは、*\** と *object* 引数で指定したWebエリアに開かれた一連のURLで、次のURLが利用できるかどうかを知るために使用します。<!-- END REF--> 

コマンドはURLがあれば[True](../commands/true)を、なければ[False](../commands/false)を返します。このコマンドは特に、ナビゲーションボタンを有効/無効にするために使用します。

## 参照 

[WA Back URL available](../commands/wa-back-url-available)  
[WA OPEN FORWARD URL](../commands/wa-open-forward-url)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1027 |
| スレッドセーフである | no |



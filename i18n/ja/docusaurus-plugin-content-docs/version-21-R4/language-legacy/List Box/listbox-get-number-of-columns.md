---
id: listbox-get-number-of-columns
title: LISTBOX Get number of columns
slug: /commands/listbox-get-number-of-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get number of columns.Syntax-->**LISTBOX Get number of columns** ( * ; *object* : Text ) : Integer<br/>**LISTBOX Get number of columns** ( *object* : Variable ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get number of columns.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594; | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| 戻り値 | Integer | &#8592; | 列数 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|12|名称変更|
|2004|初出|

</details>
</div>

## 説明 

<!--REF #_command_.LISTBOX Get number of columns.Summary-->LISTBOX Get number of columns コマンドは、*object*引数および *\** で指定されたリストボックスに存在する列（表示または非表示）の合計数を返します。<!-- END REF-->

オプションの引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細はの節を参照してください。

## 参照 

[LISTBOX DELETE COLUMN](../commands/listbox-delete-column)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 831 |
| スレッドセーフである | no |



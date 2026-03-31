---
id: listbox-set-grid-color
title: LISTBOX SET GRID COLOR
slug: /commands/listbox-set-grid-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET GRID COLOR.Syntax-->**LISTBOX SET GRID COLOR** ( * ; *object* : Text ; *color* : Text, Integer ; *horizontal* : Boolean ; *vertical* : Boolean )<br/>**LISTBOX SET GRID COLOR** ( *object* : Variable ; *color* : Text, Integer ; *horizontal* : Boolean ; *vertical* : Boolean )<!-- END REF-->
<!--REF #_command_.LISTBOX SET GRID COLOR.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594; | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| color | Text, Integer | &#8594; | RGBカラー値 |
| horizontal | Boolean | &#8594; | 水平グリッドラインにカラーを適用 |
| vertical | Boolean | &#8594; | 垂直グリッドラインにカラーを適用 |
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

<!--REF #_command_.LISTBOX SET GRID COLOR.Summary-->**LISTBOX SET GRID COLOR** コマンドを使用し、 *object* 引数および *\** で指定されたリストボックスオブジェクト上のグリッドの色を変更することができます。<!-- END REF-->

オプションの引数 *\** を渡すことにより、*object* 引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object* 引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は*オブジェクトプロパティ* の節を参照してください。

*color* には、RGBカラーの値を渡します。RGBカラーに関する詳細は、[OBJECT SET RGB COLORS](../commands/object-set-rgb-colors) コマンドの説明を参照してください。

*horizontal* と*vertical* を使用し、カラーを適用するグリッドラインを指定することができます:

* *horizontal* に[True](../commands/true) を渡した場合、水平グリッドラインにカラーが適用されます。False を渡すと、カラーは変更されません。
* *vertical* に[True](../commands/true) を渡した場合、垂直グリッドラインにカラーが適用されます。[False](../commands/false) を渡すと、カラーは変更されません。

## 参照 

[LISTBOX GET GRID COLORS](../commands/listbox-get-grid-colors)  
[LISTBOX SET GRID](../commands/listbox-set-grid)  
[OBJECT SET RGB COLORS](../commands/object-set-rgb-colors)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 842 |
| スレッドセーフである | no |



---
id: listbox-moved-column-number
title: LISTBOX MOVED COLUMN NUMBER
slug: /commands/listbox-moved-column-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Syntax-->**LISTBOX MOVED COLUMN NUMBER** ( * ; *object* : Text ; *oldPosition* : Integer ; *newPosition* : Integer )<br/>**LISTBOX MOVED COLUMN NUMBER** ( *object* : Variable ; *oldPosition* : Integer ; *newPosition* : Integer )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594; | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| oldPosition | Integer | &#8592; | 移動された列の前の位置 |
| newPosition | Integer | &#8592; | 移動された列の新しい位置 |
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

<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Summary-->LISTBOX MOVED COLUMN NUMBER コマンドは、引数*object*および *\** で指定されたリストボックス内で移動された列の以前の位置*oldPosition*と新しい位置*newPosition*を返します。<!-- END REF-->

オプションの引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細はの節を参照してください。

このコマンドはOn column movedフォームイベントで使用します ([Form event](../commands/form-event.md "Form event") コマンド参照)。 

**Note:** このコマンドは、非表示の列を考慮します。

## 参照 

[Form event code](../commands/form-event-code)  
[LISTBOX MOVED ROW NUMBER](../commands/listbox-moved-row-number)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 844 |
| スレッドセーフである | no |




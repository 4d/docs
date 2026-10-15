---
id: listbox-set-rows-height
title: LISTBOX SET ROWS HEIGHT
slug: /commands/listbox-set-rows-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ROWS HEIGHT.Syntax-->**LISTBOX SET ROWS HEIGHT** ( * ; *object* : Text ; *height* : Integer {; *unit* : Integer} )<br/>**LISTBOX SET ROWS HEIGHT** ( *object* : Variable ; *height* : Integer {; *unit* : Integer} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ROWS HEIGHT.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594; | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| height | Integer | &#8594; | 行の高さ |
| unit | Integer | &#8594; | 高さを表す単位: 0または省略時はピクセル、1の場合行単位 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|13|変更|
|12|名称変更|
|2004|初出|

</details>
</div>

## 説明 

<!--REF #_command_.LISTBOX SET ROWS HEIGHT.Summary-->**LISTBOX SET ROWS HEIGHT**コマンドを使用すると、*object*引数および *\** で指定されたリストボックス内の行の高さをプログラムで変更することができます。<!-- END REF--> 

オプションの引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は*オブジェクトプロパティ*を参照してください。

*unit* 引数を省略するとデフォルトで高さはピクセル単位で返されます。単位を変更するには *unit* 引数に*List Box*テーマの以下の定数を渡します:

| 定数        | 型    | 値 | コメント                            |
| --------- | ---- | - | ------------------------------- |
| lk lines  | 倍長整数 | 1 | 高さを行数で指定。4Dはフォント設定に応じて高さを計算します。 |
| lk pixels | 倍長整数 | 0 | 高さをピクセルで指定 (デフォルト)。             |

**注:** 行の高さの計算に関する詳細はデザインリファレンスを参照してください。

## 参照 

[LISTBOX Get rows height](../commands/listbox-get-rows-height)  
[LISTBOX SET AUTO ROW HEIGHT](../commands/listbox-set-auto-row-height)  
[LISTBOX SET ROW HEIGHT](../commands/listbox-set-row-height)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 835 |
| スレッドセーフである | no |



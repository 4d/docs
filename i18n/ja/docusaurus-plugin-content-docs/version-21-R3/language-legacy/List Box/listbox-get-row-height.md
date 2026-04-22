---
id: listbox-get-row-height
title: LISTBOX Get row height
slug: /commands/listbox-get-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row height.Syntax-->**LISTBOX Get row height** ( * ; *object* : Text ; *row* : Integer ) : Integer<br/>**LISTBOX Get row height** ( *object* : Variable ; *row* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get row height.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594; | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| row | Integer | &#8594; | 高さの値を取得するリストボックスの行 |
| 戻り値 | Integer | &#8592; | 行の高さ |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|16|初出|

</details>
</div>

## 説明 

<!--REF #_command_.LISTBOX Get row height.Summary-->**LISTBOX Get row height** コマンドは、*object* および *\** パラメーターで指定されたリストボックスの、*row* で指定された行の高さを返します。<!-- END REF-->行の高さは、[LISTBOX SET ROWS HEIGHT](../commands/listbox-set-rows-height)コマンド、あるいはプロパティリストを使うなどしてグローバルに指定するほかに、[LISTBOX SET ROW HEIGHT](../commands/listbox-set-row-height) コマンドを使って個別に指定することもできます。

任意の *\** 引数を指定することにより、*object* パラメーターがオブジェクト名 (文字列) であることを示します。この引数を渡さない場合、*object* が変数であることを示します。この場合、文字列ではなく変数参照を受け渡します。オブジェクト名についての詳細は *オブジェクトプロパティ* を参照してください。

*row* に指定した行がリストボックスに存在しなかった場合、このコマンドは 0 を返します。

返される高さの値の単位は、以下のようになります:

* 行の高さが固定の場合には、プロパティリストまたは事前に呼び出された[LISTBOX SET ROWS HEIGHT](../commands/listbox-set-rows-height) コマンドによってリストボックス行に対してグローバルに定義されたカレントの単位が使われます。
* 行の高さが可変の場合、つまり自動に設定されていた場合(*自動行高* 参照)、または配列によって管理されていた場合には、ピクセル単位の値が返されます。

## 参照 

[LISTBOX Get auto row height](../commands/listbox-get-auto-row-height)  
[LISTBOX Get rows height](../commands/listbox-get-rows-height)  
[LISTBOX SET ROW HEIGHT](../commands/listbox-set-row-height)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1408 |
| スレッドセーフである | no |



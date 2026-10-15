---
id: form-set-vertical-resizing
title: FORM SET VERTICAL RESIZING
slug: /commands/form-set-vertical-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET VERTICAL RESIZING.Syntax-->**FORM SET VERTICAL RESIZING** ( *resize* : Boolean {; *minHeight* : Integer {; *maxHeight* : Integer}} )<!-- END REF-->
<!--REF #_command_.FORM SET VERTICAL RESIZING.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resize | Boolean | &#8594; | True: フォームを縦方向にリサイズ可 False: フォームを縦方向にリサイズ不可 |
| minHeight | Integer | &#8594; | 最小高さ (ピクセル) |
| maxHeight | Integer | &#8594; | 最大高さ (ピクセル) |
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

<!--REF #_command_.FORM SET VERTICAL RESIZING.Summary-->FORM SET VERTICAL RESIZINGコマンドを使用すると、プログラムからカレントフォームの垂直リサイズプロパティを変更することができます。<!-- END REF-->デフォルトで、これらのプロパティはデザインモードのフォームエディタにおいて設定することができます。新しいプロパティはカレントプロセスに対して設定され、フォームと一緒に保存されません。

*resize* 引数を用いて、フォームを水平方向にリサイズできるかどうか、つまり、高さの変更が可能かどうかを定義します (ユーザが手動で、またはプログラムから変更)。  
[True](../commands/true)を渡すと、ユーザはフォームの高さを変更することができます。4Dはマーカとして*minHeight*と*maxHeight*に代入された値を使用します。  
[False](../commands/false)を渡すと、ユーザはカレントフォームの高さを変更できません。この場合、*minHeight*と*maxHeight*に値を渡す必要はありません。

1番目の引数に[True](../commands/true)を渡した場合は、任意の引数*minHeight*と*maxHeight*に最小高さと最大高さの新しい値（ピクセル単位）を渡すことができます。これらの引数を省略した場合、デザインモードで設定した値（設定されている場合）が使用されます。

## 例題 

[FORM SET SIZE](form-set-size.md "FORM SET SIZE") コマンドの例題参照 

## 参照 

[FORM GET VERTICAL RESIZING](../commands/form-get-vertical-resizing)  
[FORM SET HORIZONTAL RESIZING](../commands/form-set-horizontal-resizing)  
[FORM SET SIZE](../commands/form-set-size)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 893 |
| スレッドセーフである | no |



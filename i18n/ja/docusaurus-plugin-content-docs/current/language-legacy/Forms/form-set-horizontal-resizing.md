---
id: form-set-horizontal-resizing
title: FORM SET HORIZONTAL RESIZING
slug: /commands/form-set-horizontal-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Syntax-->**FORM SET HORIZONTAL RESIZING** ( *resize* : Boolean {; *minWidth* : Integer {; *maxWidth* : Integer}} )<!-- END REF-->
<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resize | Boolean | &#8594; | True: フォームを横方向にリサイズ可能 False: フォームを横方向にリサイズ不可 |
| minWidth | Integer | &#8594; | 最小幅 (ピクセル) |
| maxWidth | Integer | &#8594; | 最大幅 (ピクセル) |
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

<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Summary-->FORM SET HORIZONTAL RESIZING コマンドを使用すると、プログラムからカレントフォームの水平リサイズプロパティを変更することができます。<!-- END REF-->デフォルトとして、これらのプロパティはデザインモードのフォームエディタにおいて設定することができます。新しいプロパティはカレントプロセスに対して設定され、フォームと一緒に保存されません。

*resize* 引数を用いて、フォームを水平方向にリサイズできるかどうか、つまり、幅の変更が可能かどうかを定義します (ユーザが手動で、またはプログラムから変更)。  
[True](../commands/true)を渡すと、ユーザはフォームの幅を変更することができます。4Dはマーカとして*minWidth*と*maxWidth*に代入された値を使用します。  
[False](../commands/false)を渡すと、ユーザはカレントフォームの幅を変更できません。この場合、*minWidth*と*maxWidth*に値を渡す必要はありません。

1番目の引数に[True](../commands/true)を渡した場合は、任意の引数*minWidth*と*maxWidth*に最小幅と最大幅の新しい値（ピクセル単位）を渡すことができます。これらの引数を省略した場合、デザインモードで設定した値（設定されている場合）が使用されます。

## 例題 

[FORM SET SIZE](form-set-size.md "FORM SET SIZE") コマンドを参照してください。 

## 参照 

[FORM GET HORIZONTAL RESIZING](../commands/form-get-horizontal-resizing)  
[FORM SET SIZE](../commands/form-set-size)  
[FORM SET VERTICAL RESIZING](../commands/form-set-vertical-resizing)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 892 |
| スレッドセーフである | no |



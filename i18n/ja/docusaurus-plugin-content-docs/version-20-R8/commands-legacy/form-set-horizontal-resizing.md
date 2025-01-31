---
id: form-set-horizontal-resizing
title: FORM SET HORIZONTAL RESIZING
slug: /commands/form-set-horizontal-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Syntax-->**FORM SET HORIZONTAL RESIZING** ( *resize* {; *minWidth* {; *maxWidth*}} )<!-- END REF-->
<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resize | Boolean | &#8594;  | True: フォームを横方向にリサイズ可能 False: フォームを横方向にリサイズ不可 |
| minWidth | Integer | &#8594;  | 最小幅 (ピクセル) |
| maxWidth | Integer | &#8594;  | 最大幅 (ピクセル) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Summary-->FORM SET HORIZONTAL RESIZING コマンドを使用すると、プログラムからカレントフォームの水平リサイズプロパティを変更することができます。<!-- END REF-->デフォルトとして、これらのプロパティはデザインモードのフォームエディタにおいて設定することができます。新しいプロパティはカレントプロセスに対して設定され、フォームと一緒に保存されません。

*resize* 引数を用いて、フォームを水平方向にリサイズできるかどうか、つまり、幅の変更が可能かどうかを定義します (ユーザが手動で、またはプログラムから変更)。  
[True](true.md "True")を渡すと、ユーザはフォームの幅を変更することができます。4Dはマーカとして*minWidth*と*maxWidth*に代入された値を使用します。  
[False](false.md "False")を渡すと、ユーザはカレントフォームの幅を変更できません。この場合、*minWidth*と*maxWidth*に値を渡す必要はありません。

1番目の引数に[True](true.md "True")を渡した場合は、任意の引数*minWidth*と*maxWidth*に最小幅と最大幅の新しい値（ピクセル単位）を渡すことができます。これらの引数を省略した場合、デザインモードで設定した値（設定されている場合）が使用されます。

#### 例題 

[FORM SET SIZE](form-set-size.md "FORM SET SIZE") コマンドを参照してください。 

#### 参照 

[FORM GET HORIZONTAL RESIZING](form-get-horizontal-resizing.md)  
[FORM SET SIZE](form-set-size.md)  
[FORM SET VERTICAL RESIZING](form-set-vertical-resizing.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 892 |
| スレッドセーフである | &cross; |



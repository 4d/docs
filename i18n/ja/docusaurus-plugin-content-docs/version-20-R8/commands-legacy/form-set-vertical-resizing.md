---
id: form-set-vertical-resizing
title: FORM SET VERTICAL RESIZING
slug: /commands/form-set-vertical-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET VERTICAL RESIZING.Syntax-->**FORM SET VERTICAL RESIZING** ( *resize* {; *minHeight* {; *maxHeight*}} )<!-- END REF-->
<!--REF #_command_.FORM SET VERTICAL RESIZING.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resize | Boolean | &#8594;  | True: フォームを縦方向にリサイズ可 False: フォームを縦方向にリサイズ不可 |
| minHeight | Integer | &#8594;  | 最小高さ (ピクセル) |
| maxHeight | Integer | &#8594;  | 最大高さ (ピクセル) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FORM SET VERTICAL RESIZING.Summary-->FORM SET VERTICAL RESIZINGコマンドを使用すると、プログラムからカレントフォームの垂直リサイズプロパティを変更することができます。<!-- END REF-->デフォルトで、これらのプロパティはデザインモードのフォームエディタにおいて設定することができます。新しいプロパティはカレントプロセスに対して設定され、フォームと一緒に保存されません。

*resize* 引数を用いて、フォームを水平方向にリサイズできるかどうか、つまり、高さの変更が可能かどうかを定義します (ユーザが手動で、またはプログラムから変更)。  
[True](true.md "True")を渡すと、ユーザはフォームの高さを変更することができます。4Dはマーカとして*minHeight*と*maxHeight*に代入された値を使用します。  
[False](false.md "False")を渡すと、ユーザはカレントフォームの高さを変更できません。この場合、*minHeight*と*maxHeight*に値を渡す必要はありません。

1番目の引数に[True](true.md "True")を渡した場合は、任意の引数*minHeight*と*maxHeight*に最小高さと最大高さの新しい値（ピクセル単位）を渡すことができます。これらの引数を省略した場合、デザインモードで設定した値（設定されている場合）が使用されます。

#### 例題 

[FORM SET SIZE](form-set-size.md "FORM SET SIZE") コマンドの例題参照 

#### 参照 

[FORM GET VERTICAL RESIZING](form-get-vertical-resizing.md)  
[FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md)  
[FORM SET SIZE](form-set-size.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 893 |
| スレッドセーフである | &cross; |



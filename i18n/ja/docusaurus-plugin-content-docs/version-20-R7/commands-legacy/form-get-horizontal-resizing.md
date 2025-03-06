---
id: form-get-horizontal-resizing
title: FORM GET HORIZONTAL RESIZING
slug: /commands/form-get-horizontal-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Syntax-->**FORM GET HORIZONTAL RESIZING** ( *resize* {; *minWidth* {; *maxWidth*}} )<!-- END REF-->
<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resize | Boolean | &#8592; | True: フォームを水平方向にリサイズ可<br/>False: フォームを水平方向にリサイズ不可 |
| minWidth | Integer | &#8592; | 最小フォーム幅 (ピクセル) |
| maxWidth | Integer | &#8592; | 最大フォーム幅 (ピクセル) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Summary-->FORM GET HORIZONTAL RESIZING コマンドはカレントフォームの水平サイズ変更プロパティを*resize*、*minWidth*、そして*maxWidth*変数に返します。<!-- END REF-->これらのプロパティはデザインモードのフォームエディタ、またはカレントプロセス用に[FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md "FORM SET HORIZONTAL RESIZING") コマンドで設定されます。

#### 参照 

[FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1077 |
| スレッドセーフである | &cross; |



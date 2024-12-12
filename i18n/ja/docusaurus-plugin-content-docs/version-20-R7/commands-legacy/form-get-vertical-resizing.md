---
id: form-get-vertical-resizing
title: FORM GET VERTICAL RESIZING
slug: /commands/form-get-vertical-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET VERTICAL RESIZING.Syntax-->**FORM GET VERTICAL RESIZING** ( *resize* {; *minHeight* {; *maxHeight*}} )<!-- END REF-->
<!--REF #_command_.FORM GET VERTICAL RESIZING.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resize | Boolean | &#8592; | True: フォームを縦方向にリサイズ可<br/>False: フォームを縦方向にリサイズ不可 |
| minHeight | Integer | &#8592; | 最小フォーム高さ (ピクセル) |
| maxHeight | Integer | &#8592; | 最大フォーム高さ (ピクセル) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.FORM GET VERTICAL RESIZING.Summary-->FORM GET VERTICAL RESIZING コマンドは カレントフォームの垂直サイズ変更プロパティを*resize*、*minHeight*、そして*maxHeight*変数に返します。<!-- END REF-->これらのプロパティはデザインモードのフォームエディタ、またはカレントプロセス用に[FORM SET VERTICAL RESIZING](form-set-vertical-resizing.md "FORM SET VERTICAL RESIZING") コマンドで設定されます。 

#### 参照 

[FORM SET VERTICAL RESIZING](form-set-vertical-resizing.md)  
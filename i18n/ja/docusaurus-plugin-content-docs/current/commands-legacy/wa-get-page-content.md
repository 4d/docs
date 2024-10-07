---
id: wa-get-page-content
title: WA Get page content
slug: /commands/wa-get-page-content
displayed_sidebar: docs
---

<!--REF #_command_.WA Get page content.Syntax-->**WA Get page content** ( {* ;} *object* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WA Get page content.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#x1F852; | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#x1F852; | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| 戻り値 | Text | &#x1F850; | HTMソースコード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA Get page content.Summary-->WA Get page content コマンドは、*\** と *object* 引数で指定したWebエリアの現在のページまたは表示されているページのHTMLコードを返します。<!-- END REF-->

現在のページの内容を利用できない場合、このコマンドは空の文字列を返します。

#### 参照 

[WA SET PAGE CONTENT](wa-set-page-content.md)  
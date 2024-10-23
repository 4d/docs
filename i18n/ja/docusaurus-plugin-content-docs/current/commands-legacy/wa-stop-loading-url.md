---
id: wa-stop-loading-url
title: WA STOP LOADING URL
slug: /commands/wa-stop-loading-url
displayed_sidebar: docs
---

<!--REF #_command_.WA STOP LOADING URL.Syntax-->**WA STOP LOADING URL** ( {* ;} *object* )<!-- END REF-->
<!--REF #_command_.WA STOP LOADING URL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WA STOP LOADING URL.Summary-->WA STOP LOADING URL コマンドは、*\** と *object* 引数で指定したWebエリアの現在のURL のリソース読み込みを停止します。<!-- END REF-->

#### 参照 

[WA REFRESH CURRENT URL](wa-refresh-current-url.md)  
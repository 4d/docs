---
id: wa-open-back-url
title: WA OPEN BACK URL
slug: /commands/wa-open-back-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN BACK URL.Syntax-->**WA OPEN BACK URL** ( {* ;} *object* )<!-- END REF-->
<!--REF #_command_.WA OPEN BACK URL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WA OPEN BACK URL.Summary-->WA OPEN BACK URL コマンドは、*\** と *object* 引数で指定したWebエリアに開かれた一連のURL中、現在のURLのひとつ前のURLをロードします。<!-- END REF--> 

前のURLがない場合、コマンドは何も行いません。前のURLが有効かどうかは、[WA Back URL available](wa-back-url-available.md "WA Back URL available") コマンドで知ることができます。 

#### 参照 

[WA OPEN FORWARD URL](wa-open-forward-url.md)  
[WA OPEN URL](wa-open-url.md)  
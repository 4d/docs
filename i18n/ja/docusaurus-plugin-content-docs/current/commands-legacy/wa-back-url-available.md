---
id: wa-back-url-available
title: WA Back URL available
slug: /commands/wa-back-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Back URL available.Syntax-->**WA Back URL available** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.WA Back URL available.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| 戻り値 | Boolean | &#8592; | 開かれた一連のURLで、前のURLが有効ならTrue、 そうでなければFalse |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WA Back URL available.Summary-->WA Back URL available コマンドは、*\** と *object* 引数で指定したWebエリアに開かれた一連のURLで、前のURLが利用できるかどうかを知るために使用します。<!-- END REF--> 

コマンドはURLがあれば[True](true.md "True")を、なければ[False](false.md "False")を返します。このコマンドは特に、ナビゲーションボタンを有効/無効にするために使用します。

#### 参照 

[WA Forward URL available](wa-forward-url-available.md)  
[WA OPEN BACK URL](wa-open-back-url.md)  
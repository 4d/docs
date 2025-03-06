---
id: wa-open-forward-url
title: WA OPEN FORWARD URL
slug: /commands/wa-open-forward-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN FORWARD URL.Syntax-->**WA OPEN FORWARD URL** ( {* ;} *object* )<!-- END REF-->
<!--REF #_command_.WA OPEN FORWARD URL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA OPEN FORWARD URL.Summary-->WA OPEN FORWARD URL コマンドは、*\** と *object* 引数で指定したWebエリアに開かれた一連のURL中、現在のURLのひとつ次のURLをロードします。<!-- END REF--> 

次のURLがない場合、コマンドは何も行いません。前のURLが有効かどうかは、[WA Forward URL available](wa-forward-url-available.md "WA Forward URL available") コマンドで知ることができます。 

#### 参照 

[WA OPEN BACK URL](wa-open-back-url.md)  
[WA OPEN URL](wa-open-url.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1022 |
| スレッドセーフである | &cross; |



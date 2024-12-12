---
id: find-window
title: Find window
slug: /commands/find-window
displayed_sidebar: docs
---

<!--REF #_command_.Find window.Syntax-->**Find window** ( *left* ; *top* {; *windowPart*} ) : Integer<!-- END REF-->
<!--REF #_command_.Find window.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| left | Integer | &#8594;  | グローバル左座標 |
| top | Integer | &#8594;  | グローバル上座標 |
| windowPart | Integer | &#8592; | ウィンドウパーツID番号 |
| 戻り値 | Integer | &#8592; | ウィンドウ参照番号 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Find window.Summary-->Find window コマンドは、*left* と *top*に渡した座標のポイントにある最初のウィンドウの参照を返します。<!-- END REF-->

座標は、アプリケーションウィンドウの内容エリア (Windows) 、あるいはメインスクリーン (Macintosh) の左上角からの相対位置で表します。

*windowPart* 引数には、ウィンドウが存在した場合には3が、そうでない場合には0が返されます。  
(**互換性に関する注意:** 4D v14以降、*Find Window* テーマの定数は廃止予定となります)

#### 参照 

[Frontmost window](frontmost-window.md)  
[Next window](next-window.md)  
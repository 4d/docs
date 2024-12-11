---
id: get-window-rect
title: GET WINDOW RECT
slug: /commands/get-window-rect
displayed_sidebar: docs
---

<!--REF #_command_.GET WINDOW RECT.Syntax-->**GET WINDOW RECT** ( *left* ; *top* ; *right* ; *bottom* {; *window*} )<!-- END REF-->
<!--REF #_command_.GET WINDOW RECT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| left | Integer | &#8592; | ウィンドウの内容領域の左座標 |
| top | Integer | &#8592; | ウィンドウの内容領域の上座標 |
| right | Integer | &#8592; | ウィンドウの内容領域の右座標 |
| bottom | Integer | &#8592; | ウィンドウの内容領域の下座標 |
| window | Integer | &#8594;  | ウィンドウ参照番号, または 省略時はカレントプロセスの最前面ウィンドウ, または -1のときはMDIウィンドウ (Windows) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET WINDOW RECT.Summary-->**GET WINDOW RECT** コマンドは*window*に渡された参照番号を持つウィンドウの座標を返します。<!-- END REF-->ウィンドウが存在しない場合、変数引数は変更されません。

*window* 引数を省略すると、**GET WINDOW RECT**はカレントプロセスの最前面ウィンドウを適用します。

座標はアプリケーションウィンドウ (MDI モードのWindows ) またはメインスクリーン(macOS およびSDI モードのWindows )の左上隅からの相対座標で表されます。ウィンドウの内容領域(タイトルバーや枠線は含まれない) の四角座標が返されます。

**Note:** Windowsでは*window*に-1を渡すと、**GET WINDOW RECT**はアプリケーションウィンドウ (MDI ウィンドウ) の座標を返します。これらの座標はウィンドウの内容領域 (タイトルバーや枠線は含まれない) に対応します。SDI モードの場合には、**GET WINDOW RECT**は座標として (0;0;0;0) を返します。

#### 例題 

[WINDOW LIST](window-list.md "WINDOW LIST")コマンドの例題参照

#### 参照 

[CONVERT COORDINATES](convert-coordinates.md)  
[SET WINDOW RECT](set-window-rect.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 443 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



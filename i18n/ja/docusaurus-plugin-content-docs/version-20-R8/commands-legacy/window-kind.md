---
id: window-kind
title: Window kind
slug: /commands/window-kind
displayed_sidebar: docs
---

<!--REF #_command_.Window kind.Syntax-->**Window kind** {( *window* )} : Integer<!-- END REF-->
<!--REF #_command_.Window kind.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | ウィンドウ参照番号, または 省略時カレントプロセスの最前面ウィンドウ |
| 戻り値 | Integer | &#8592; | ウィンドウのタイプ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Window kind.Summary-->Window kind コマンドは*window*に渡した参照番号のウィンドウのタイプを返します。<!-- END REF-->ウィンドウが存在しない場合、 Window kind には *0* が返されます。

そうでなければWindow kind は以下の値を返します:

| 定数              | 型    | 値  |
| --------------- | ---- | -- |
| External window | 倍長整数 | 5  |
| Floating window | 倍長整数 | 14 |
| Modal dialog    | 倍長整数 | 9  |
| Regular window  | 倍長整数 | 8  |

  
*window* 引数を省略すると、Window kind はカレントプロセスの最前面ウィンドウのタイプを返します。

#### 例題 

[WINDOW LIST](window-list.md "WINDOW LIST")コマンドの例題参照

#### 参照 

[GET WINDOW RECT](get-window-rect.md)  
[Get window title](get-window-title.md)  
[Window process](window-process.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 445 |
| スレッドセーフである | &cross; |



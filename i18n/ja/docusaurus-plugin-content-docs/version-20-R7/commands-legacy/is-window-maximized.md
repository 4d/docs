---
id: is-window-maximized
title: Is window maximized
slug: /commands/is-window-maximized
displayed_sidebar: docs
---

<!--REF #_command_.Is window maximized.Syntax-->**Is window maximized** ( *window* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.Is window maximized.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | ウィンドウ参照番号 |
| 戻り値 | Boolean | &#8592; | ウィンドウが最大化されていればTrue、それ以外の場合にはFalse |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Is window maximized.Summary-->**Is window maximized** コマンドは*window* 引数に参照を渡したウィンドウが現在最大化されていれば **True** を、それ以外の場合には**False** を返します。<!-- END REF-->

#### 例題 

ウィンドウの、最大化とその前の状態とを切り替えたい場合を考えます:

```4d
 If(Is window maximized($winRef))
    MINIMIZE WINDOW($winRef)
 Else
    MAXIMIZE WINDOW($winRef)
 End if
```

#### 参照 

[Is window reduced](is-window-reduced.md)  
[MAXIMIZE WINDOW](maximize-window.md)  
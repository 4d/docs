---
id: is-windows
title: Is Windows
slug: /commands/is-windows
displayed_sidebar: docs
---

<!--REF #_command_.Is Windows.Syntax-->**Is Windows** -> 戻り値<!-- END REF-->
<!--REF #_command_.Is Windows.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#x1F850; | OS = Windows ならTrue、そうでなければFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Is Windows.Summary-->**Is Windows** コマンドは、カレントのOSがWindows の場合にはTrue を返します。<!-- END REF-->

#### 例題 

カレントのOS がWindows であるかどうかを調べたい場合を考えます:

```4d
 If(Is Windows)
    ALERT("It's Windows")
 Else
    ALERT("It's not Windows")
 End if
```

#### 参照 

[Get system info](get-system-info.md)  
[Is macOS](is-macos.md)  
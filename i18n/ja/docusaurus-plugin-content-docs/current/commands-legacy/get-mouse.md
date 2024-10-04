---
id: get-mouse
title: GET MOUSE
slug: /commands/get-mouse
displayed_sidebar: docs
---

<!--REF #_command_.GET MOUSE.Syntax-->**GET MOUSE** ( *mouseX* ; *mouseY* ; *mouseButton* {; *} )<!-- END REF-->
<!--REF #_command_.GET MOUSE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| mouseX | 実数 | &#x1F858; | マウスの水平座標 |
| mouseY | 実数 | &#x1F858; | マウスの垂直座標 |
| mouseButton | 倍長整数 | &#x1F858; | マウスボタンンのステータス 0 = 何もしていない 1 = ボタンの押下 2 = 右マウスボタンの押下 3 = 両方のボタンの押下 |
| * | 演算子 | &#x1F852; | 指定した場合、グローバルの座標システムが使用される。 省略した場合、ローカルの座標システムが使用される |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET MOUSE.Summary-->GET MOUSE コマンドは、マウスの現在の状態を返します。<!-- END REF--> 

水平座標と垂直座標が引数 *mouseX* と *mouseY* に返されます。オプション引数 *\** を渡した場合には、macOS および Windows SDI モードにおいてはメインスクリーンに対して、Windows MDI モードにおいてはアプリケーションウィンドウに対して、これらの座標が相対的に表されます。引数 *\** を省略すると、座標はカレントプロセスのカレントフォームウィンドウ(あれば)に対して相対的に表されます。

引数 *mouseButton* は、上記のようにボタンの状態を返します。

**Note:**バージョン10.2.5 以降の Mac OS X のみ、値2と3が返されます。

#### 例題 

[Pop up menu](pop-up-menu.md "Pop up menu") コマンドの例題を参照してください。

#### 参照 

[Caps lock down](caps-lock-down.md)  
[Macintosh command down](macintosh-command-down.md)  
[Macintosh control down](macintosh-control-down.md)  
[Macintosh option down](macintosh-option-down.md)  
[ON EVENT CALL](on-event-call.md)  
[Shift down](shift-down.md)  
[Windows Alt down](windows-alt-down.md)  
[Windows Ctrl down](windows-ctrl-down.md)  
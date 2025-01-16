---
id: mouse-position
title: MOUSE POSITION
slug: /commands/mouse-position
displayed_sidebar: docs
---

<!--REF #_command_.MOUSE POSITION.Syntax-->**MOUSE POSITION** ( *mouseX* ; *mouseY* ; *mouseButton* {; *} )<!-- END REF-->
<!--REF #_command_.MOUSE POSITION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| mouseX | Real | &#8592; | マウスの水平座標 |
| mouseY | Real | &#8592; | マウスの垂直座標 |
| mouseButton | Integer | &#8592; | マウスボタンンのステータス 0 = 何もしていない 1 = ボタンの押下 2 = 右マウスボタンの押下 3 = 両方のボタンの押下 |
| * | 演算子 | &#8594;  | 指定した場合、グローバルの座標システムが使用される。 省略した場合、ローカルの座標システムが使用される |

<!-- END REF-->

#### 説明 

<!--REF #_command_.MOUSE POSITION.Summary-->MOUSE POSITION コマンドは、マウスの現在の状態を返します。<!-- END REF--> 

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

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 468 |
| スレッドセーフである | &cross; |



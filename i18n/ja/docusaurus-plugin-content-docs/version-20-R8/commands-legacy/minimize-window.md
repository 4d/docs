---
id: minimize-window
title: MINIMIZE WINDOW
slug: /commands/minimize-window
displayed_sidebar: docs
---

<!--REF #_command_.MINIMIZE WINDOW.Syntax-->**MINIMIZE WINDOW** {( *window* )}<!-- END REF-->
<!--REF #_command_.MINIMIZE WINDOW.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | ウィンドウ参照番号、または省略時は すべてのカレントプロセス最前面ウィンドウ (Windows) またはカレントプロセスの最前面ウィンドウ (Mac OS) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.MINIMIZE WINDOW.Summary-->MINIMIZE WINDOW コマンドは、*window*に渡された参照番号のウィンドウサイズを、最大化される前に戻します。<!-- END REF-->この引数が省略されると、アプリケーションのそれぞれのウィンドウ (Windows) またはカレントプロセスの最前面ウィンドウ (Mac OS) に適用されます。

このコマンドは4Dアプリケーションウィンドウの縮小ボックスをクリックするのと同じ効果があります。

##### Windows 

ウィンドウサイズが、例えば最大化される前の、元のサイズに設定されます。*window* 引数を渡さないと、コマンドはすべてのアプリケーションウィンドウに適用されます。

![](../assets/en/commands/pict39369.ja.png)

  
Windowsの縮小ボックス

##### Mac OS 

ウィンドウサイズが、例えば最大化される前の、元のサイズに設定されます。*window* 引数を渡さないと、コマンドはカレントプロセスの最前面ウィンドウに適用されます。

![](../assets/en/commands/pict39370.ja.png)

  
Mac OS縮小/ズームボックス

コマンドが適用されるウィンドウが事前に (手動または[MAXIMIZE WINDOW](maximize-window.md) を使用して) 最大化されていない場合、またはウィンドウがズームボックスを持たない場合、コマンドは効果がありません。詳細は*ウィンドウタイプ(互換性)* の節を参照してください。

**Note:** この機能を、最小化と混同しないようにしてください。最小化は以下のボタンをクリックすると、ボタン (Windows) やDock (Mac OS) にウィンドウが最小化されます:

![](../assets/en/commands/pict39371.ja.png)  
Windows

![](../assets/en/commands/pict39372.ja.png)  
Mac OS

#### 参照 

[MAXIMIZE WINDOW](maximize-window.md)  
[REDUCE RESTORE WINDOW](reduce-restore-window.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 454 |
| スレッドセーフである | &cross; |



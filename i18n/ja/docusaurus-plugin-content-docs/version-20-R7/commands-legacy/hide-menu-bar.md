---
id: hide-menu-bar
title: HIDE MENU BAR
slug: /commands/hide-menu-bar
displayed_sidebar: docs
---

<!--REF #_command_.HIDE MENU BAR.Syntax-->**HIDE MENU BAR**<!-- END REF-->
<!--REF #_command_.HIDE MENU BAR.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.HIDE MENU BAR.Summary-->HIDE MENU BARコマンドは、メニューバーを隠します。<!-- END REF-->

既にメニューバーが隠れている場合は、このコマンドは何も行いません。

#### 例題 

以下のメソッドは、マウスボタンをクリックするまでフルスクリーン表示（Macintosh）でレコードを表示します。

```4d
 HIDE TOOL BAR
 HIDE MENU BAR
 Open window(-1;-1;1+Screen width;1+Screen height;Alternate dialog box)
 FORM SET INPUT([Paintings];"Full Screen 800")
 DISPLAY RECORD([Paintings])
 Repeat
    MOUSE POSITION($vlX;$vlY;$vlButton)
 Until($vlButton#0)
 CLOSE WINDOW
 SHOW MENU BAR
 SHOW TOOL BAR
```

**Note**: Windows上では、ウィンドウはアプリケーションウィンドウの範囲内に制限されます。

#### 参照 

[HIDE TOOL BAR](hide-tool-bar.md)  
[SHOW MENU BAR](show-menu-bar.md)  
[SHOW TOOL BAR](show-tool-bar.md)  
---
id: hide-tool-bar
title: HIDE TOOL BAR
slug: /commands/hide-tool-bar
displayed_sidebar: docs
---

<!--REF #_command_.HIDE TOOL BAR.Syntax-->**HIDE TOOL BAR**<!-- END REF-->
<!--REF #_command_.HIDE TOOL BAR.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.HIDE TOOL BAR.Summary-->**HIDE TOOL BAR** コマンドは、カレントプロセスにおいて[Open form window](open-form-window.md) コマンドで作成されたカスタムのツールバーの表示を管理します。<!-- END REF-->

[Open form window](open-form-window.md) コマンドにToolbar form window オプションを使用してツールバーウィンドウが作成されている場合、このコマンドはそのウィンドウを非表示にします。ツールバーウィンドウが既に非表示状態であるとき、またはこのタイプのウィンドウが作成されていない場合には、コマンドは何もしません。

#### 例題 

OS X において、カスタムのツールバーとHas full screen mode Mac オプションを持つ標準のウィンドウを定義したとします。ツールバーが表示されている状態で標準のウィンドウがユーザーによって最大化された場合、最大化されたウィンドウとツールバーが被ってしまうのは避けたいところです。

これを避けるためには、標準のウィンドウのOn Resize フォームイベント内にて、このウィンドウがフルスクリーンモード切り替わった瞬間を検知し、**HIDE TOOL BAR** を呼び出す必要があります:

```4d
 Case of
    :(FORM Event=On Resize)
       GET WINDOW RECT($left;$top;$right;$bottom)
       If(Screen height=($bottom-$top))
          HIDE TOOL BAR
       Else
          SHOW TOOL BAR
       End if
 End case
```

#### 参照 

[SHOW TOOL BAR](show-tool-bar.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 434 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



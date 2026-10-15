---
id: hide-tool-bar
title: HIDE TOOL BAR
slug: /commands/hide-tool-bar
displayed_sidebar: docs
---

<!--REF #_command_.HIDE TOOL BAR.Syntax-->**HIDE TOOL BAR**<!-- END REF-->
<!--REF #_command_.HIDE TOOL BAR.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|14 R5|変更|
|14|変更|
|6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.HIDE TOOL BAR.Summary-->**HIDE TOOL BAR** コマンドは、カレントプロセスにおいて[Open form window](../commands/open-form-window) コマンドで作成されたカスタムのツールバーの表示を管理します。<!-- END REF-->

[Open form window](../commands/open-form-window) コマンドにToolbar form window オプションを使用してツールバーウィンドウが作成されている場合、このコマンドはそのウィンドウを非表示にします。ツールバーウィンドウが既に非表示状態であるとき、またはこのタイプのウィンドウが作成されていない場合には、コマンドは何もしません。

## 例題 

macOS において、カスタムのツールバーとHas full screen mode Mac オプションを持つ標準のウィンドウを定義したとします。ツールバーが表示されている状態で標準のウィンドウがユーザーによって最大化された場合、最大化されたウィンドウとツールバーが被ってしまうのは避けたいところです。

これを避けるためには、標準のウィンドウのOn Resize フォームイベント内にて、このウィンドウがフルスクリーンモード切り替わった瞬間を検知し、**HIDE TOOL BAR** を呼び出す必要があります:

```4d
 Case of
    :(FORM Event.code=On Resize)
       GET WINDOW RECT($left;$top;$right;$bottom)
       If(Screen height=($bottom-$top))
          HIDE TOOL BAR
       Else
          SHOW TOOL BAR
       End if
 End case
```

## 参照 

[SHOW TOOL BAR](../commands/show-tool-bar)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 434 |
| スレッドセーフである | no |




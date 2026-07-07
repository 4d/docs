---
id: tool-bar-height
title: Tool bar height
slug: /commands/tool-bar-height
displayed_sidebar: docs
---

<!--REF #_command_.Tool bar height.Syntax-->**Tool bar height**  : Integer<!-- END REF-->
<!--REF #_command_.Tool bar height.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | ツールバーの高さ(ピクセル単位で表示) または、ツールバーが非表示の場合、 0 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|14 R5|変更|
|11 SQL|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Tool bar height.Summary-->Tool bar height コマンドはカレントの表示されているツールバーの高さを、ピクセル単位で返します。<!-- END REF-->コンテキストに応じて、4Dデザイ ンモードツールバーの場合と、[Open form window](../commands/open-form-window) コマンドを使用して作成されたカスタムのツールバーの場合があります(デザインモードのツールバーはカスタムのツールバーが表示されている場合には自動的 に非表示になります)。

どのツールバーも表示されていない場合には、コマンドは0を返します。

## 参照 

[HIDE TOOL BAR](../commands/hide-tool-bar)  
[Menu bar height](../commands/menu-bar-height)  
[SHOW TOOL BAR](../commands/show-tool-bar)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1016 |
| スレッドセーフである | no |




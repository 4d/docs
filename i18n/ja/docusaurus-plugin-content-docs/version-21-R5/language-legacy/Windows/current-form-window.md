---
id: current-form-window
title: Current form window
slug: /commands/current-form-window
displayed_sidebar: docs
---

<!--REF #_command_.Current form window.Syntax-->**Current form window**  : Integer<!-- END REF-->
<!--REF #_command_.Current form window.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | カレントフォームウィンドウ参照番号 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|2004|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Current form window.Summary-->Current form window コマンドはカレントフォームウィンドウの参照を返します。<!-- END REF-->カレントフォームにウィンドウが設定されていない場合、コマンドは0を返します。

カレントフォームウィンドウは[ADD RECORD](add-record.md "ADD RECORD")のようなコマンドを使用すると自動で生成されることがあります。また[Open window](../commands/open-window.md "Open window") や [Open form window](../commands/open-form-window.md "Open form window") コマンドでも生成されます。 

## 参照 

[Open form window](../commands/open-form-window)  
[Open window](../commands/open-window)  
[RESIZE FORM WINDOW](../commands/resize-form-window)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 827 |
| スレッドセーフである | no |




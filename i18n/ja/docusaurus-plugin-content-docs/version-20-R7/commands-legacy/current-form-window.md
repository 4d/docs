---
id: current-form-window
title: Current form window
slug: /commands/current-form-window
displayed_sidebar: docs
---

<!--REF #_command_.Current form window.Syntax-->**Current form window**  : Integer<!-- END REF-->
<!--REF #_command_.Current form window.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | カレントフォームウィンドウ参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Current form window.Summary-->Current form window コマンドはカレントフォームウィンドウの参照を返します。<!-- END REF-->カレントフォームにウィンドウが設定されていない場合、コマンドは0を返します。

カレントフォームウィンドウは[ADD RECORD](add-record.md "ADD RECORD")のようなコマンドを使用すると自動で生成されることがあります。また[Open window](open-window.md "Open window") や [Open form window](open-form-window.md "Open form window") コマンドでも生成されます。 

#### 参照 

[Open form window](open-form-window.md)  
[Open window](open-window.md)  
[RESIZE FORM WINDOW](resize-form-window.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 827 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



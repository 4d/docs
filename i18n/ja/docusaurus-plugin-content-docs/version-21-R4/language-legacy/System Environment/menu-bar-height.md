---
id: menu-bar-height
title: Menu bar height
slug: /commands/menu-bar-height
displayed_sidebar: docs
---

<!--REF #_command_.Menu bar height.Syntax-->**Menu bar height**  : Integer<!-- END REF-->
<!--REF #_command_.Menu bar height.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | メニューバーの高さ(ピクセル単位) (メニューバーが表示されていない場合には0) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Menu bar height.Summary-->Menu bar height はメニューバーの高さをピクセル数で返します。<!-- END REF-->

このコマンドは次の場合に 0 を返します:

* メニューバーが隠されている場合
* Windows の SDI モードにおいて、フォームウィンドウを持たないプロセスから呼び出された場合 (このモードについての詳細は *SDI mode on Windows* を参照ください)

**注:** Windows の SDI モードでアプリケーションが実行されている場合、ウィンドウが狭められた影響でメニューバーが複数行に折り返されていても、**Menu bar height** はメニューバー1行分の高さを返します。

## 参照 

[HIDE MENU BAR](../commands/hide-menu-bar)  
[Menu bar screen](../commands/menu-bar-screen)  
[SHOW MENU BAR](../commands/show-menu-bar)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 440 |
| スレッドセーフである | no |



---
id: menu-bar-height
title: Menu bar height
slug: /commands/menu-bar-height
displayed_sidebar: docs
---

<!--REF #_command_.Menu bar height.Syntax-->**Menu bar height**  : Integer<!-- END REF-->
<!--REF #_command_.Menu bar height.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | メニューバーの高さ(ピクセル単位) (メニューバーが表示されていない場合には0) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Menu bar height.Summary-->Menu bar height はメニューバーの高さをピクセル数で返します。<!-- END REF-->

このコマンドは次の場合に 0 を返します:

* メニューバーが隠されている場合
* Windows の SDI モードにおいて、フォームウィンドウを持たないプロセスから呼び出された場合 (このモードについての詳細は *SDI mode on Windows* を参照ください)

**注:** Windows の SDI モードでアプリケーションが実行されている場合、ウィンドウが狭められた影響でメニューバーが複数行に折り返されていても、**Menu bar height** はメニューバー1行分の高さを返します。

#### 参照 

[HIDE MENU BAR](hide-menu-bar.md)  
[Menu bar screen](menu-bar-screen.md)  
[SHOW MENU BAR](show-menu-bar.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 440 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



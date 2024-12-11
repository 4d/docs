---
id: object-get-drag-and-drop-options
title: OBJECT GET DRAG AND DROP OPTIONS
slug: /commands/object-get-drag-and-drop-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Syntax-->**OBJECT GET DRAG AND DROP OPTIONS** ( {* ;} *object* ; *draggable* ; *automaticDrag* ; *droppable* ; *automaticDrop* )<!-- END REF-->
<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| draggable | Boolean | &#8592; | ドラッグ可能ならTrue、そうでなければFalse |
| automaticDrag | Boolean | &#8592; | 自動ドラッグならTrue、そうでなければFalse |
| droppable | Boolean | &#8592; | ドロップ可能ならTrue、そうでなければFalse |
| automaticDrop | Boolean | &#8592; | 自動ドロップ可能ならTrue、そうでなければFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Summary-->**OBJECT GET DRAG AND DROP OPTIONS**コマンドは*object*と*\** 引数で指定したオブジェクトのカレントプロセスのドラッグ＆ドロップオプションを返します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。

このコマンドはデザインモードや[OBJECT SET DRAG AND DROP OPTIONS](object-set-drag-and-drop-options.md)コマンドを使用してカレントプロセスに設定された、現在のドラッグ＆ドロップオプションを返します。

コマンドはデザインモードや[OBJECT SET DRAG AND DROP OPTIONS](object-set-drag-and-drop-options.md)コマンドを使用してカレントプロセスに設定された現在のドラッグ＆ドロップオプションを返します。

各パラメーターは対応するオプションが有効か無効かによってTrueまたはFalseを返します:

* *draggable* \= True: プログラムモードでオブジェクトのドラッグが可能
* *automaticDrag* \= True (テキストフィールドや変数、コンボボックス、リストボックスでのみ使用): 自動モードでオブジェクトのドラッグが可能
* *droppable* \= True: プログラムモードでオブジェクトのドロップが可能
* *automaticDrop* \= True (テキストフィールドや変数、コンボボックス、リストボックスでのみ使用): 自動モードでオブジェクトのドロップが可能

#### 参照 

[OBJECT SET DRAG AND DROP OPTIONS](object-set-drag-and-drop-options.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1184 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



---
id: object-set-drag-and-drop-options
title: OBJECT SET DRAG AND DROP OPTIONS
slug: /commands/object-set-drag-and-drop-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Syntax-->**OBJECT SET DRAG AND DROP OPTIONS** ( {* ;} *object* ; *draggable* ; *automaticDrag* ; *droppable* ; *automaticDrop* )<!-- END REF-->
<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| draggable | Boolean | &#8594;  | ドラッグ可能ならTrue、そうでなければFalse |
| automaticDrag | Boolean | &#8594;  | 自動ドラッグならTrue、そうでなければFalse |
| droppable | Boolean | &#8594;  | ドロップ可能ならTrue、そうでなければFalse |
| automaticDrop | Boolean | &#8594;  | 自動ドロップ可能ならTrue、そうでなければFalse |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Summary-->**OBJECT SET DRAG AND DROP OPTIONS**コマンドは*object* と *\** 引数で指定したオブジェクトのドラッグ＆ドロップオプションをカレントプロセス内で動的に設定します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。

各引数にはそれぞれのオプションを有効にするか無効にするかを示すブール値を渡します: 

* *draggable* \= True: プログラムモードでオブジェクトのドラッグが可能
* *automaticDrag* \= True (テキストフィールドや変数、コンボボックス、リストボックスでのみ使用): 自動モードでオブジェクトのドラッグが可能
* *droppable* \= True: プログラムモードでオブジェクトのドロップが可能
* *automaticDrop* \= True (テキストフィールドや変数、コンボボックス、リストボックスでのみ使用): 自動モードでオブジェクトのドロップが可能

#### 例題 

テキストエリアの自動ドラッグ＆ドロップを設定します: 

```4d
 OBJECT SET DRAG AND DROP OPTIONS(*;"Comments";False;True;False;True)
```

#### 参照 

[OBJECT GET DRAG AND DROP OPTIONS](object-get-drag-and-drop-options.md)  
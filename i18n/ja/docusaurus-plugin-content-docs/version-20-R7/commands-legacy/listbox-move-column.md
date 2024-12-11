---
id: listbox-move-column
title: LISTBOX MOVE COLUMN
slug: /commands/listbox-move-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVE COLUMN.Syntax-->**LISTBOX MOVE COLUMN** ( {* ;} *object* ; *colPosition* )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVE COLUMN.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字) 省略時: objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| colPosition | Integer | &#8594;  | 列の新しい位置 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX MOVE COLUMN.Summary-->**LISTBOX MOVE COLUMN**コマンドは、 *object* と *\** によって指定された列を、プログラムによって実行中のフォームにおいて移動させます。<!-- END REF-->(アプリケーションモード)デザインモードで生成されたオリジナルのフォームは変更されません。

*object* と *\** 演算子を使用して移動する列を指定します。任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数で列変数を指定します。

指定した列は、 *colPosition* 引数で指定した位置の一つ前に移動されます。 *colPosition* が列全体の総数より大きい場合、指定した列は最後の列の後ろに移動されます。

**Note:** このコマンドは階層リストボックスの最初の列を指定した場合には何もしません。

このコマンドには列が「ドラッグしない列数」や「スクロールしない列数」で指定されているかどうかが関わってきます。つまり、例えば「ドラッグしない列数」に含まれる場合は列を移動させることはできません。

この機能は以前の4Dからアプリケーションモードには存在するものでした。ユーザーは「ドラッグしない列数」に含まれない列であればマウスで動かすことができました。しかしながら、ユーザーによって列が移動された場合と異なり、このコマンドは On Column Moved イベントを生成しません。

#### 例題 

リストボックスの2列目と3列目を入れ替えたい場合:

```4d
 LISTBOX MOVE COLUMN(*;"column2";3)
```

#### 参照 

[LISTBOX DUPLICATE COLUMN](listbox-duplicate-column.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1274 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



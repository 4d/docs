---
id: object-get-context-menu
title: OBJECT Get context menu
slug: /commands/object-get-context-menu
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get context menu.Syntax-->**OBJECT Get context menu** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get context menu.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| 戻り値 | Boolean | &#8592; | True = コンテキストメニュー有効、False = コンテキストメニュー無効 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get context menu.Summary-->**OBJECT Get context menu**コマンドは、引数 *object* と *\** で指定したオブジェクトの、"コンテキストメニュー"オプションのカレントの状態を返します。<!-- END REF-->

コンテキストメニューのオプションは、デザインモードのプロパティリストを使用するか、 [OBJECT SET CONTEXT MENU](object-set-context-menu.md) という新しいコマンドを使用して設定することができます。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

*object* で指定したオブジェクトにおいてコンテキストメニューが使用可能になっている場合は **True** を、そうでない場合には **False** を返します。 

#### 参照 

[OBJECT SET CONTEXT MENU](object-set-context-menu.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1252 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



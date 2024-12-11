---
id: object-set-context-menu
title: OBJECT SET CONTEXT MENU
slug: /commands/object-set-context-menu
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET CONTEXT MENU.Syntax-->**OBJECT SET CONTEXT MENU** ( {* ;} *object* ; *contextMenu* )<!-- END REF-->
<!--REF #_command_.OBJECT SET CONTEXT MENU.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| contextMenu | Boolean | &#8594;  | True = コンテキストメニュー有効、False = コンテキストメニュー無効 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET CONTEXT MENU.Summary-->**OBJECT SET CONTEXT MENU**コマンドは、引数 *object* と *\** で指定したオブジェクトのデフォルトでのコンテキストメニューの関連付けを、カレントプロセスにおいて有効化または無効化します。<!-- END REF-->

コンテキストメニューは、テキスト型の入力エリア、Web エリアとピクチャーに存在するオプションです。標準的なアクションメニューをこれらのオブジェクトに対して型に応じて関連付けすることができます。たとえばテキストオブジェクトに対してコピー・ペーストが使用できるかどうかなどです。詳細に関しては、 *Design Reference* マニュアルを参照して下さい。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。 

*contextMenu* 引数には、コンテキストメニューを有効にしたい場合には **True** を、無効にしたい場合には **False** を渡します。 

#### 参照 

[OBJECT Get context menu](object-get-context-menu.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1251 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



---
id: get-menu-item-icon
title: GET MENU ITEM ICON
slug: /commands/get-menu-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEM ICON.Syntax-->**GET MENU ITEM ICON** ( *menu* ; *menuItem* ; *iconRef* {; *process*} )<!-- END REF-->
<!--REF #_command_.GET MENU ITEM ICON.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー参照またはメニュー番号 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| iconRef | Text, Integer | &#8592; | メニュー項目に関連付けられたアイコンの ピクチャー名または番号 |
| process | Integer | &#8594;  | プロセス番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET MENU ITEM ICON.Summary-->GET MENU ITEM ICON コマンドは*iconRef*変数に、*menu* と *menuItem*引数で指定されたメニュー項目に関連付けられたアイコンの参照を返します。<!-- END REF-->この参照はピクチャーのパス名または番号です。

メニュー項目に関連付けられたアイコンは、アプリケーションのツールバーに追加されます。

*menuItem*に-1を渡して*menu*に最後に追加された項目を指定することができます。

*menu*にはメニュー参照 ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) またはメニュー番号を渡します。メニュー参照を渡す場合、*process* 引数は必要なく、渡されても無視されます。メニュー番号を渡す場合、コマンドはカレントプロセスのメインメニューバー中の対応するメニューを考慮します。他のプロセスを指定したい場合、オプションの*process* 引数にその番号を渡します。

* ピクチャーファイルを使用してアイコンが指定されていた場合、コマンドは*iconRef*にピクチャーのパス名 ( **path:<filesystem path>** ) を返します。
* アイコンがライブラリピクチャー (バイナリデータベースのみ) を使用して指定されていた場合、コマンドはこの引数に渡された変数の型に応じ、ピクチャー名 ( **pictlib:<name>**) あるいは番号のいずれかを返します。なお、*iconRef* 変数の型を指定しなかった場合は、デフォルトでピクチャー名が返されます (テキスト)

メニュー項目にアイコンが割り当てられていない場合、コマンドは空値を返します。

#### 参照 

[SET MENU ITEM ICON](set-menu-item-icon.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 983 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



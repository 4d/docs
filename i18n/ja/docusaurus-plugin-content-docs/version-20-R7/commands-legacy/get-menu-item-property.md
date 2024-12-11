---
id: get-menu-item-property
title: GET MENU ITEM PROPERTY
slug: /commands/get-menu-item-property
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEM PROPERTY.Syntax-->**GET MENU ITEM PROPERTY** ( *menu* ; *menuItem* ; *property* ; *value* {; *process*} )<!-- END REF-->
<!--REF #_command_.GET MENU ITEM PROPERTY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer | &#8594;  | メニュー参照またはメニュー番号 |
| menuItem | Integer | &#8594;  | メニュー項目番号 または -1: 最後に追加された項目 |
| property | Text | &#8594;  | プロパティタイプ |
| value | any | &#8592; | プロパティ値 |
| process | Integer | &#8594;  | プロセス番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET MENU ITEM PROPERTY.Summary-->**GET MENU ITEM PROPERTY** コマンドは、*menu*と*menuItem*引数で指定したメニュー項目の、現在のプロパティ値を返します。<!-- END REF-->  
*menuItem*に-1を渡して*menu*に最後に追加された項目を指定することもできます。

*menu*にはメニュー参照 ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) またはメニュー番号を渡します。メニュー参照を渡す場合、*process* 引数は必要なく、渡されても無視されます。メニュー番号を渡す場合、コマンドはカレントプロセスのメインメニューバー中の対応するメニューを考慮します。他のプロセスを指定したい場合、オプションの*process* 引数にその番号を渡します。

*property* 引数には、値を取得したいプロパティを渡します。“*Menu Item Properties*”テーマの定数またはカスタムプロパティに対応する文字列を使用できます。メニュープロパティとその値に関する詳細は[SET MENU ITEM PROPERTY](set-menu-item-property.md) コマンドの説明を参照してください。

**互換性に関する注意:** デフォルトでは、*value*引数の変数が明示的にテキスト型として型指定あるいは宣言がされていなければ、コマンドは*標準アクション*の名前を返します。(廃止予定の)*割り当てられた標準アクションの値*定数テーマに定義されている数値を取得したい場合には、*value*引数の変数を倍長整数型で宣言する必要があります。

#### 参照 

[SET MENU ITEM PROPERTY](set-menu-item-property.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 972 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



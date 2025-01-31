---
id: insert-menu-item
title: INSERT MENU ITEM
slug: /commands/insert-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.INSERT MENU ITEM.Syntax-->**INSERT MENU ITEM** ( *menu* ; *afterItem* ; *itemText* {; *subMenu* {; *process*}}{; *} )<!-- END REF-->
<!--REF #_command_.INSERT MENU ITEM.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer | &#8594;  | メニュー番号またはメニュー参照 |
| afterItem | Integer | &#8594;  | メニュー項目番号 |
| itemText | Text | &#8594;  | 挿入するメニュー項目のテキスト |
| subMenu | Text | &#8594;  | 項目に割り当てるサブメニュの参照 |
| process | Integer | &#8594;  | プロセス参照番号 |
| * | 演算子 | &#8594;  | 指定時: メタ文字を標準文字として扱う |

<!-- END REF-->

#### 説明 

<!--REF #_command_.INSERT MENU ITEM.Summary-->**INSERT MENU ITEM** コマンドは、*menu*に渡されたメニュー番号または参照を持つメニューにおいて、*afterItem*に渡された番号の既存のメニュー項目の後ろに新しいメニュー項目を挿入します。<!-- END REF-->

*process*引数を省略すると、**INSERT MENU ITEM** コマンドはカレントプロセスのメニューバーに適用されます。そうでなければ、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。

**Note:** *menu*に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")を渡した場合、*process*引数は意味を持たず、無視されます。

*\** 引数を渡さない場合、**INSERT MENU ITEM** は一度の呼び出しで1つまたは複数のメニュー項目の挿入ができます。

**INSERT MENU ITEM** は、メニュー中の任意の場所に項目を挿入できるという点を除いて、[APPEND MENU ITEM](append-menu-item.md) のように動作します。[APPEND MENU ITEM](append-menu-item.md) は常にメニューの最後に項目を追加します。

*itemText*に渡す項目や*\** 引数の動作の定義については、[APPEND MENU ITEM](append-menu-item.md) コマンドの説明を参照してください。

**注:** *itemText* 引数では、ak standard action title 定数がサポートされています(4D v16 R3以降)。

オプションの*subMenu* 引数を使用して、階層サブメニューとして追加するメニューを指定できます。[Create menu](create-menu.md) コマンド等を使用して作成されたメニュー参照 (MenuRef 型文字列) を渡さなければなりません。コマンドが2つ以上のメニュー項目を追加する場合、サブメニューは最初の項目に追加されます。

**重要**: 新しいメニュー項目には、メソッドやアクションが割り当てられていません。これらを[SET MENU ITEM PROPERTY](set-menu-item-property.md) や [SET MENU ITEM METHOD](set-menu-item-method.md) コマンドを使用して項目に割り当てるか、[Menu selected](menu-selected.md) コマンドを使ってフォームメソッドからこれを管理しなくてはなりません。

#### 例題 

 以下の例題は2つのコマンドからなるメニューを作成し、メソッドを割り当てます:

```4d
 menuRef:=Create menu
 APPEND MENU ITEM(menuRef;"Characters")
 SET MENU ITEM METHOD(menuRef;1;"CharMgmtDial")
 INSERT MENU ITEM(menuRef;1;"Paragraphs")
 SET MENU ITEM METHOD(menuRef;2;"ParaMgmtDial")
```

#### 参照 

[APPEND MENU ITEM](append-menu-item.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 412 |
| スレッドセーフである | &cross; |
| サーバー上での使用は不可 ||



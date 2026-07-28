---
id: insert-menu-item
title: INSERT MENU ITEM
slug: /commands/insert-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.INSERT MENU ITEM.Syntax-->**INSERT MENU ITEM** ( *menu* : Integer, Text ; *afterItem* : Integer ; *itemText* : Text {; *subMenu* : Text {; *process* : Integer}}{; *} )<!-- END REF-->
<!--REF #_command_.INSERT MENU ITEM.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer | &#8594; | メニュー番号またはメニュー参照 |
| afterItem | Integer | &#8594; | メニュー項目番号 |
| itemText | Text | &#8594; | 挿入するメニュー項目のテキスト |
| subMenu | Text | &#8594; | 項目に割り当てるサブメニュの参照 |
| process | Integer | &#8594; | プロセス参照番号 |
| * | 演算子 | &#8594; | 指定時: メタ文字を標準文字として扱う |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|16 R3|変更|
|11 SQL Release 4|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.INSERT MENU ITEM.Summary-->**INSERT MENU ITEM** コマンドは、*menu*に渡されたメニュー番号または参照を持つメニューにおいて、*afterItem*に渡された番号の既存のメニュー項目の後ろに新しいメニュー項目を挿入します。<!-- END REF-->

*process*引数を省略すると、**INSERT MENU ITEM** コマンドはカレントプロセスのメニューバーに適用されます。そうでなければ、*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。

**Note:** *menu*に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")を渡した場合、*process*引数は意味を持たず、無視されます。

*\** 引数を渡さない場合、**INSERT MENU ITEM** は一度の呼び出しで1つまたは複数のメニュー項目の挿入ができます。

**INSERT MENU ITEM** は、メニュー中の任意の場所に項目を挿入できるという点を除いて、[APPEND MENU ITEM](../commands/append-menu-item) のように動作します。[APPEND MENU ITEM](../commands/append-menu-item) は常にメニューの最後に項目を追加します。

*itemText*に渡す項目や*\** 引数の動作の定義については、[APPEND MENU ITEM](../commands/append-menu-item) コマンドの説明を参照してください。

**注:** *itemText* 引数では、ak standard action title 定数がサポートされています(4D v16 R3以降)。

オプションの*subMenu* 引数を使用して、階層サブメニューとして追加するメニューを指定できます。[Create menu](../commands/create-menu) コマンド等を使用して作成されたメニュー参照 (MenuRef 型文字列) を渡さなければなりません。コマンドが2つ以上のメニュー項目を追加する場合、サブメニューは最初の項目に追加されます。

**重要**: 新しいメニュー項目には、メソッドやアクションが割り当てられていません。これらを[SET MENU ITEM PROPERTY](../commands/set-menu-item-property) や [SET MENU ITEM METHOD](../commands/set-menu-item-method) コマンドを使用して項目に割り当てるか、[Menu selected](../commands/menu-selected) コマンドを使ってフォームメソッドからこれを管理しなくてはなりません。

## 例題 

 以下の例題は2つのコマンドからなるメニューを作成し、メソッドを割り当てます:

```4d
 menuRef:=Create menu
 APPEND MENU ITEM(menuRef;"Characters")
 SET MENU ITEM METHOD(menuRef;1;"CharMgmtDial")
 INSERT MENU ITEM(menuRef;1;"Paragraphs")
 SET MENU ITEM METHOD(menuRef;2;"ParaMgmtDial")
```

## 参照 

[APPEND MENU ITEM](../commands/append-menu-item)  
[SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 412 |
| スレッドセーフである | no |
| サーバー上での使用は不可 ||



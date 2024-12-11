---
id: append-menu-item
title: APPEND MENU ITEM
slug: /commands/append-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.APPEND MENU ITEM.Syntax-->**APPEND MENU ITEM** ( *menu* ; *itemText* {; *subMenu* {; *process* {; *}}} )<!-- END REF-->
<!--REF #_command_.APPEND MENU ITEM.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer | &#8594;  | メニュー番号またはメニュー参照 |
| itemText | Text | &#8594;  | 新しいメニュー項目のテキスト |
| subMenu | Text | &#8594;  | 項目に関連付けるサブメニューの参照 |
| process | Integer | &#8594;  | プロセス参照番号 |
| * | 演算子 | &#8594;  | 指定時: メタ文字を標準文字として扱う |

<!-- END REF-->

#### 説明 

<!--REF #_command_.APPEND MENU ITEM.Summary-->**APPEND MENU ITEM** コマンドは、*menu*引数に渡されたメニュー番号または参照を持つメニューに新規メニュー項目を追加します。<!-- END REF-->

*process*引数を省略すると、**APPEND MENU ITEM** コマンドはカレントプロセスのメニューバーに適用されます。そうでない場合、**APPEND MENU ITEM** は*process*に渡されたプロセス参照番号のプロセスのメニューに適用されます。

**Note:** *menu*に[MenuRef](# "Unique ID (16-character alphanumeric) of a menu")を渡すと、*process*引数は意味を持たず、無視されます。

*\** 引数を渡さない場合、**APPEND MENU ITEM** コマンドは、1回の呼び出しで1つまたは複数のメニュー項目を追加することができます。

追加されるメニュー項目を以下のようにして*itemText*引数で定義します:

* セミコロン (*;*) で各メニューを区切る。例えば、  
*"ItemText1;ItemText2;ItemText3"*
* メニュー項目を使用不可にする場合は、項目テキストに開き丸カッコ (() を配置する。
* メニュー項目の区切り線を指定する場合は、項目テキストに"-" または "(-" を渡す。
* 行にフォントスタイルを指定する場合は、項目テキストに小なり記号 (<) の後に下記の文字の1つを配置する:  

| <B | 太字    |  
| -- | ----- |  
| <I | イタリック |  
| <U | 下線    |
* メニュー項目にチェックマークを追加するには、項目テキストにエクスクラメーションマーク (*!*) を指定し、その後にチェックマークとして使用する文字を配置する。Macintosh上ではその配置された文字が表示されます。Windows上ではどの文字が渡されようともチェックマークが表示される。
* メニュー項目にアイコンを追加するには、項目テキストにアクセント記号 (^) を指定し、ASCIIコードから208を引いた値がMacintoshベースのリソースIDである文字をその後に配置する。
* 任意のメニュー項目にキーボードショートカットを追加するには、項目テキストにスラッシュ (*/*) を指定し、その後にショートカット用の文字を配置する。
* (**4D v16 R3以降**)項目に標準アクションが割り当てられている場合、*itemText* 引数に定数を渡すことで、ローカライズされたアクション名とコンテキスト情報(あれば)を自動的に使用することができます。例:"Undo <previous action>"

**注:** メニュー項目の数が程よいメニューを使用してください。例えばもし50以上のメニュー項目を表示したい場合は、メニューの代わりにフォーム中にスクロールエリアを使用することを検討してみてください。

*\** 引数を渡すと、項目テキストに含められた特別文字 (; ( !...) は標準の文字として扱われ、メタ文字ではなくなります。つまり"コピー (特別)..."や"検索/置換..."のようなメニュー項目を作成できるようになります。*\** 引数が渡されたときは、一回のコマンドの呼び出しで複数の項目を作成できないことに注意してください。この場合 ";" 文字は標準の文字として扱われます。

**Note:** [GET MENU ITEMS](get-menu-items.md) および [Get menu item](get-menu-item.md) コマンドはメニュー項目が作られた方法により、メタ文字を返したり返さなかったりします。*\** オプション付きで作成された場合、メタ文字は標準文字として返されます。

オプションの*subMenu*引数を使用して、階層サブメニューとして追加するメニューを指定できます。[Create menu](create-menu.md) コマンド等を使用して作成されたメニュー参照 (MenuRef 型文字列) を渡さなければなりません。コマンドが2つ以上のメニュー項目を追加する場合、サブメニューは最初の項目に追加されます。

**重要**: 新しいメニュー項目にはメソッドやアクションが割り当てられていません。これらは[SET MENU ITEM PROPERTY](set-menu-item-property.md) あるいは [SET MENU ITEM METHOD](set-menu-item-method.md) コマンドを使用して項目に割り当てるか、[Menu selected](menu-selected.md) コマンドを使ってフォームメソッドからこれを管理しなくてはなりません。

#### 例題 

この例題ではカレントメニューバー6番目の項目のFontメニューに、利用可能なフォント名を追加します:

```4d
  // On Startup データベースメソッドで
  // フォントリストがロードされ、メニュー項目テキストが構築される
 FONT LIST(<>asAvailableFont)
 <>atFontMenuItems:=""
 For($vlFont;1;Size of array(<>asAvailableFont))
    <>atFontMenuItems:=<>atFontMenuItems+";"+<>asAvailableFont{$vlFont}
 End for
```

フォームメソッドやプロジェクトメソッドで、以下のように記述できます:

```4d
 APPEND MENU ITEM(6;<>atFontMenuItems)
```

#### 参照 

[DELETE MENU ITEM](delete-menu-item.md)  
[INSERT MENU ITEM](insert-menu-item.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 411 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



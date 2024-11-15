---
id: dynamic-pop-up-menu
title: Dynamic pop up menu
slug: /commands/dynamic-pop-up-menu
displayed_sidebar: docs
---

<!--REF #_command_.Dynamic pop up menu.Syntax-->**Dynamic pop up menu** ( *menu* {; *default* {; *xCoord* ; *yCoord*}} )  : Text<!-- END REF-->
<!--REF #_command_.Dynamic pop up menu.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Text | &#8594;  | メニュー参照 |
| default | Text | &#8594;  | デフォルトで選択される項目のパラメーター |
| xCoord | Integer | &#8594;  | 左上隅のx座標 |
| yCoord | Integer | &#8594;  | 左上隅のy座標 |
| 戻り値 | Text | &#8592; | 選択されたメニュー項目のパラメーター |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Dynamic pop up menu.Summary-->**Dynamic pop up menu**はマウスの現在位置またはオプションの*xCoord* と *yCoord*引数で指定した位置に階層ポップアップメニューを表示します。<!-- END REF-->

使用される階層メニューは[Create menu](create-menu.md)コマンドで作成されていなければなりません。[Create menu](create-menu.md)から返される参照を*menu* 引数に渡します。

**注:** 既存の[Pop up menu](pop-up-menu.md)コマンド (“ユーザインタフェース” テーマ) はテキストからポップアップメニューを作成するために使用できます。

インターフェースルールの標準に準拠して、通常はこのコマンドを右クリック、または一定時間以上ボタンが押され続けた時に呼び出します (例えばコンテキストメニューとして)。

オプションの*default* 引数を使用して、メニューが表示されるときにデフォルトで選択するポップアップメニューの項目を指定できます。この引数にはメニューに割り当てたカスタム文字列を渡します。この文字列は事前に[SET MENU ITEM PARAMETER](set-menu-item-parameter.md) コマンドを使用して設定されていなければなりません。この引数を渡さないと、デフォルトで先頭の項目が選択されます。

**注:** デフォルトではトップレベルのメニュー項目のみが選択できます。

オプションの *xCoord* と *yCoord* 引数を使用して、ポップアップメニューが表示される場所を指定できます。*xCoord* と *yCoord* 引数にはそれぞれ、メニューの左上隅の水平および垂直座標を渡します。この座標はカレントフォームのローカル座標システムをピクセル単位で渡します。両引数はペアで指定しなければなりません。片方のみを渡した場合、無視されます。

3Dボタンに関連付けられたポップアップメニューを表示したい場合、オプションの *xCoord* と *yCoord* 引数は渡しません。この場合は、カレントプラットフォームのインタフェース標準に基づき、4Dが自動でメニューの場所を計算します (3Dボタンの "ポップアップメニューあり" プロパティが "リンク" あるいは "分離" のいずれかに設定されている必要があります)。

メニュー項目が選択されると、コマンドはその ([SET MENU ITEM PARAMETER](set-menu-item-parameter.md)コマンドを使用して定義された) カスタム文字列を返します。そうでなければコマンドは空の文字列を返します。

**4D v16 R3以降:** 標準アクションがメニュー項目に関連付けられている場合、これは複数のレベルにおいて**Dynamic pop up menu** コマンドに影響します:

* 関連付けられた標準アクションがポップアップメニューのコンテキストで有効化されていない(つまり呼び出すことができない)場合、項目は自動的に非表示にされます。アクションが有効化されているかいないかは、[Action info](action-info.md) コマンドを使用して調べることができます。
* 切り替えに関連付けられたアクションの項目は、選択範囲の状況に応じて自動的にチェックされたり、チェックが外されたり、あるいは"ミックス"の状況になります。
* ak standard action title 定数を使用してアクションのタイトルが設定されていた場合には、そのローカライズされた名前がメニューに表示されます。
* アイテムが選択された時、関連付けられた標準アクションが呼び出されます(実行は非同期で行われます)。

#### 例題 

このコードを使用すると、標準アクションに基づいたダイナミックな階層ポップアップメニューを作成することができます:

```4d
 var $refMainContextMenu;$refMenuEdit : Text
 $refMainContextMenu:=Create menu
 APPEND MENU ITEM($refMainContextMenu;"-")
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak select all)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak clear)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak copy)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak cut)
 APPEND MENU ITEM($refMainContextMenu;ak standard action title)
 SET MENU ITEM PROPERTY($refMainContextMenu;-1;Associated standard action;ak paste)
 APPEND MENU ITEM($refMainContextMenu;"-")
  //サブメニューテキスト編集
 $refMenuEdit:=Create menu
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font bold)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("B"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font italic)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("I"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font linethrough)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("L"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font underline)
 SET MENU ITEM SHORTCUT($refMenuEdit;-1;Character code("U"))
 APPEND MENU ITEM($refMenuEdit;ak standard action title)
 SET MENU ITEM PROPERTY($refMenuEdit;-1;Associated standard action;ak font show dialog)
 APPEND MENU ITEM($refMainContextMenu;"Edit";$refMenuEdit)
 
 paramRef:=Dynamic pop up menu($refMainContextMenu)
```

#### 参照 

[Get menu item parameter](get-menu-item-parameter.md)  
[Get selected menu item parameter](get-selected-menu-item-parameter.md)  
[Pop up menu](pop-up-menu.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  
[SET MENU ITEM PROPERTY](set-menu-item-property.md)  
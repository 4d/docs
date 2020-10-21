---
id: overview
title: 概要
---

You can create menu bars and menus for your 4D applications. Because pull-down menus are a standard feature of any desktop application, their addition will make your applications easier to use and will make them feel familiar to users.

![](assets/en/Menus/menubar.png)

**メニューバー** とは、スクリーン上にまとめて表示されるメニューのグループです。 メニューバー上の各 **メニュー** はメニューコマンドを持ちます。またメニューコマンドは階層メニューと呼ばれるサブメニューを持つこともできます。 メニューやサブメニューコマンドをユーザーが選択すると、プロジェクトメソッドまたは標準アクションが呼び出されます。

You can have many separate menu bars for each application. For example, you can use one menu bar that contains menus for standard operations on the database and another that becomes active only for reporting. また別のメニューバーには、レコード入力用のメニューコマンドを含むメニューを格納することも可能です。 The menu bar appearing with the input form may contain the same menu, but the menu commands are disabled because the user doesn’t need them during data entry.

You can use the same menu in several menu bars or other menus, or you can leave it unattached and manage it only by programming (in this case, it is known as an independent menu).

When you design menus, keep the following two rules in mind:
- Use menus for functions that are suited to menus: Menu commands should perform tasks such as adding a record, searching for records, or printing a report.
- Group menu commands by function: For example, all menu commands that print reports should be in the same menu. For another example, you might have all the operations for a certain table in one menu.

To create menus and menu bars, you can use either:

- the Menu editor from the Toolbox,
- language commands for the "Menus" theme,
- a combination of both.


## Menu editor
The Menu editor is accessed using the **Menus** button of the Toolbox.

![](assets/en/Menus/editor1.png)

Menus and menu bars are displayed as two items of the same hierarchical list, on the left side of the dialog box. Each menu can be attached to a menu bar or to another menu. In the second case, the menu becomes a sub-menu.

4D assigns menu bar numbers sequentially — Menu Bar #1 appears first. You can rename menu bars but you cannot change their numbers. These numbers are used by the language commands.

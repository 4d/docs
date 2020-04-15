---
id: propertiesMenu
title: Menu
---

---


## Associated Menu Bar 

Menus provide menu commands that the user chooses to perform database tasks: modifying records, searching for records, printing reports, and so on. 

A menu bar is a group of menus that can be displayed on a screen together. Each menu on a menu bar can have numerous menu commands in it, including some that call cascading submenus (known as hierarchical submenus). When the user chooses a menu or submenu command, it calls a project method or a standard action that performs an operation.

You can have many separate menu bars for each database. For example, you can use one menu bar that contains menus for standard database operations and another that becomes active only for reporting. One menu bar may contain a menu with menu commands for entering records. The menu bar appearing with the input form may contain the same menu, but the menu commands are disabled because the user doesn’t need them during data entry.

In the Application environment, a menu bar that is assigned to a form is added to the right of the current menu bar.

If the menu bar of the form is identical to the current menu bar, it is not added. The form menu bar will operate for both input and output forms.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|menuBar|string|Name of a menu bar|

#### Objects Supported
[Forms](forms.md) 
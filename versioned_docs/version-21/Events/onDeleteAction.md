---
id: onDeleteAction
title: On Delete Action
---

|Code|Can be called by|Definition|  
|---|---|---|
|58|[Hierarchical List](FormObjects/list_overview.md) - [List Box](FormObjects/listbox_overview.md)|The user attempts to delete an item|


## Description

This event is generated each time a user attempts to delete the selected item(s) by pressing a deletion key (**Delete** or **Backspace**) or selecting a menu item whose associated standard action is 'Clear' (such as the **Clear** command in the **Edit** menu). 

Note that generating the event is the only action carried out by 4D: the program does not delete any items. It is up to the developer to handle the deletion and any prior warning messages that are displayed.

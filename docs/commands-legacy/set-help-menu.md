---
id: set-help-menu
title: SET HELP MENU
slug: /commands/set-help-menu
displayed_sidebar: docs
---

<!--REF #_command_.SET HELP MENU.Syntax-->**SET HELP MENU** ( *menuCol* )<!-- END REF-->
<!--REF #_command_.SET HELP MENU.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menuCol | Collection | &#8594;  | Collection of menu objects |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET HELP MENU.Summary-->The **SET HELP MENU** command allows you to replace the default 4D **Help** menu with the *menuCol* collection of menu items in the application mode.<!-- END REF--> 

This command replaces the default **Help** menu of the application mode in all 4D environments: interpreted, compiled, merged, single-user and client/server. 

**Notes:** 

* The "Help" label itself is managed by the system and cannot be customized with this command.
* Customized Help menus do not support submenus, checkmarks, styles, or icons.

In *menuCol*, pass a collection of menu objects defining all items of the customized Help menu. Each menu object can contain the following properties:

| **Property**  | **Type**                                                                                        | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| title         | Text                                                                                            | Menu item name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| method        | Text \| [4D.Function](https://developer.4d.com/docs/API/FunctionClass#about-4dfunction-objects) | Project method name or 4D formula object to execute when the menu item is selected. When this property is used, the "action" property should not be passed (otherwise "method" is ignored).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| worker        | Text \| Number                                                                                  | Name of the worker or Number of the process to handle the "method" code execution. Several configurations are supported, depending on the the "worker" property value:<br/> if it is a worker name (Text), 4D uses or creates this worker to execute the "method" (equivalent to [CALL WORKER](call-worker.md)) if it is a process number, 4D uses this process if it exists, otherwise it does nothing (equivalent to [CALL WORKER](call-worker.md)) if it is undefined and the application displays a current dialog (frontmost dialog), 4D uses the process of this dialog (equivalent to [CALL FORM](../commands/call-form.md)) if it is undefined and the application does not display a current dialog, 4D calls and uses the worker 1 (4D remote/single-user) or the worker *4D\_server\_interface* (4D Server) |
| action        | Text                                                                                            | *Standard Action* to execute when the menu item is selected. When this property is used, the "method" property is ignored if passed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| shortcutKey   | Text                                                                                            | Shortcut key of the item (to call with Ctrl/Command key)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| shortcutShift | Boolean                                                                                         | True to add the **Shift** key to the item shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| shortcutAlt   | Boolean                                                                                         | True to add the **Alt/Option** key to the item shortcut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

The customized **Help** menu will display items in the same order as the collection. 

To insert a separator line, pass **null** or an empty object in the collection. 

#### Example 

You want to customize the **Help** menu for your application:

```4d
 var $col : Collection
 $col:=New collection
 $col.push(New object("title";"Knowledge base";"worker";"workerHlp";"method";"methodHlp";"shortcutAlt";True;"shortcutKey";"Y"))
 $col.push(Null) //to add a separation line
 $col.push(New object("title";"Tools";"action";ak msc;"shortcutShift";True;"shortcutKey";"Y"))
 SET HELP MENU($col)
 SET ABOUT("About this application";"m_about") //to replace 'About 4D' on Windows
```

![](../assets/en/commands/pict6260534.en.png)

#### See also 

[SET ABOUT](set-about.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1801 |
| Thread safe | &cross; |



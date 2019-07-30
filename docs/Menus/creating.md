---
id: creating
title: Creating menus and menu bars 
---

You can create menus and menu bars:

- using the Menus editor of the 4D Toolbox window. In this case, menus and menu bars are stored in the application's structure.
- dynamically, using the language commands from the "Menus" theme. In this case, menus and menu bars are not stored, they only exist in memory.

You can combine both features and use menus created in structure as templates to define menus in memory. 


## Default menu bar

A custom application must contain at least one menu bar with one menu. By default, when you create a new database, 4D automatically creates a default menu bar (Menu Bar #1) so that you can access the Application environment. The default menu bar includes standard menus and a command for returning to the Design mode. 

This allows the user to access the Application environment as soon as the database is created. Menu Bar #1 is called automatically when the **Test Application** command is chosen in the **Run** menu. 

The default menu bar includes three menus:

- **File**: only includes the **Quit** command. The *Quit* standard action is associated with the command, which causes the application to quit.
- **Edit**: standard and completely modifiable. Editing functions such as copy, paste, etc. are defined using standard actions.
- **Mode**: contains, by default, the **Return to Design mode** command, which is used to exit the Application mode.

>Menu items appear *in italics* because they consist of references and not hard-coded text. Refer to XXXX Using references for menu titles. 

You can modify this menu bar as desired or create additional ones.


## Creating menus

### Using the Menu editor

1. Select the item you want to create and click the add ![](assets/en/Menus/PlussNew.png) button below the menu bar area.
OR
Choose **Create a new menu bar** or **Create a new menu** from the context menu of the list or the options menu below the list. 
If you created a menu bar, a new bar appears in the list containing the default menus (File and Edit).
1. (optional) Double-click on the name of the menu bar/menu to switch it to editing mode and enter a custom name.
OR
Enter the custom name in the "Title" area. 
Menu bar names must be unique. The may contain up to 31 characters. You can enter the name as "hard coded" or enter a reference (see below).

### Using the 4D language
Use the `Create menu` command to create a new menu bar or menu reference (*MenuRef*) in memory.

When menus are handled by means of *MenuRef* references, there is no difference per se between a menu and a menu bar. In both cases, it consists of a list of items. Only their use differs. In the case of a menu bar, each item corresponds to a menu which is itself composed of items. 

`Create menu` can create empty menus (to fill using `APPEND MENU ITEM` or `INSERT MENU ITEM`) or by menus built upon menus designed in the Menu editor.

## Adding items
For each of the menus, you must add the commands that appear when the menu drops down. You can insert items that will be associated with methods or standard actions, or attach other menus (submenus).

### Using the Menu editor
To add a menu item:

1. In the list of source menus, select the menu to which you want to add a command.
If the menu already has commands, they will be displayed in the central list. If you want to insert the new command, select the command that you want it to appear above. It is still be possible to reorder the menu subsequently using drag and drop.

1. Choose **Add an item to menu “MenuName”** in the options menu of the editor or from the context menu (right click in the central list). 
OR
Click on the add ![](assets/en/Menus/PlussNew.png) button located below the central list. 
4D adds a new item with the default name “Item X” where X is the number of items already created.

1. Double-click on the name of the command in order to switch it to editing mode and enter a custom name. 
OR
Enter the custom name in the "Title" area. It may contain up to 31 characters. You can enter the name as "hard coded" or enter a reference (see below).

#### Using references in labels 

You can directly enter the menu bar or menu name as "hard coded". Or, you can enter a reference for a variable or an XLIFF element, which will facilitate the maintenance and translation of applications. You can use the following types of references:

- An XLIFF resource reference of the type :xliff:MyLabel. For more information about XLIFF references, refer to *XLIFF Architecture* section in *4D Design Reference*.
- An interprocess variable name followed by a number, for example: :<>vlang,3. Changing the contents of this variable will modify the menu label when it is displayed. In this case, the label will call an XLIFF resource. The value contained in the <>vlang variable corresponds to the *id* attribute of the *group* element. The second value (3 in this example) designates the *id* attribute of the *trans-unit* element.

### Using the 4D language

Use `INSERT MENU ITEM` or `APPEND MENU ITEM` to insert or to add menu items in existing menu references. 


## Deleting menus and items

### Using the Menu editor
You can delete a menu bar, a menu or a menu item in the Menu editor at any time. Note that each menu or menu bar has only one reference. When a menu is attached to different bars or different menus, any modification or deletion made to the menu is immediately carried out in all other occurrences of this menu. Deleting a menu will only delete a reference. When you delete the last reference of a menu, 4D displays an alert. 

To delete a menu bar, menu or menu item:

- Select the item to be deleted and click on the delete ![](assets/en/Menus/MinussNew.png) button located beneath the list.
- or, use the appropriate **Delete...**  command from the context menu or the options menu of the editor.

> It is not possible to delete Menu Bar #1.


## Menu language commands

Several language commands from the "Menus" theme allow you to add or delete menu bars, menus, and items:

- `Create menu`: to create a new menu bar or menu reference (*MenuRef*). When menus are handled by means of *MenuRef* references, there is no difference per se between a menu and a menu bar. In both cases, it consists of a list of items. Only their use differs. In the case of a menu bar, each item corresponds to a menu which is itself composed of items. You can create the new reference by programming, or by using a menu stored in the Menu editor.
- `INSERT MENU ITEM` or `APPEND MENU ITEM`: to insert or to add menu items in existing menu references. 
- `DELETE MENU ITEM`: to remove an item from a menu reference.
- `RELEASE MENU`: to unload the menu reference from the memory.


## Using control characters (-> properties) 

You can set the properties of the menu commands by using control characters (metacharacters) directly in the menu command labels. For instance, you can assign the keyboard shortcut Ctrl+G (Windows) or Command+G (macOS) for a menu command by placing the "/G" characters in the label of the menu item label. 

Control characters do not appear in the menu command labels. You should therefore avoid using them so as not to have any undesirable effects. The control characters are the following:

Character|Description|Usage|
---|---|---|
(|open parenthese|Disable item|
<B|less than B|Bold font|
<I|less than I|Italic font|
<U|less than U|Underline font|
!+character|exclamation point+character|Add character as check mark (macOS); add check mark (Windows)|
/+character|slash+character|Add character as shortcut|



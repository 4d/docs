---
id: properties
title: Menu item properties
---

You can set various properties for menu items such as action, font style, separator lines, keyboard shortcuts or icons.


## Title

The **Title** property contains the label of a menu or menu item as it will be displayed on the application interface. 

In the Menu editor, you can directly enter the label as "hard coded". Or, you can enter a reference for a variable or an XLIFF element, which will facilitate the maintenance and translation of applications. You can use the following types of references:

- An XLIFF resource reference of the type :xliff:MyLabel. For more information about XLIFF references, refer to *XLIFF Architecture* section in *4D Design Reference*.
- An interprocess variable name followed by a number, for example: `:<>vlang,3`. Changing the contents of this variable will modify the menu label when it is displayed. In this case, the label will call an XLIFF resource. The value contained in the `<>vlang` variable corresponds to the *id* attribute of the *group* element. The second value (3 in this example) designates the *id* attribute of the *trans-unit* element.

Using the 4D language, you set the title property through the *itemText* parameter of the `APPEND MENU ITEM`, `INSERT MENU ITEM`, and `SET MENU ITEM` commands.

### Using control characters 

You can set some properties of the menu commands by using control characters (metacharacters) directly in the menu command labels. For instance, you can assign the keyboard shortcut Ctrl+G (Windows) or Command+G (macOS) for a menu command by placing the "/G" characters in the label of the menu item label. 

Control characters do not appear in the menu command labels. You should therefore avoid using them so as not to have any undesirable effects. The control characters are the following:

Character|Description|Usage|
---|---|---|
(|open parenthese|Disable item|
<B|less than B|Bold font|
<I|less than I|Italic font|
<U|less than U|Underline font|
!+character|exclamation point+character|Add character as check mark (macOS); add check mark (Windows)|
/+character|slash+character|Add character as shortcut|



## Parameter

You can associate a custom parameter with each menu item. A menu item parameter is a character string whose contents can be freely chosen. It can be set in the Menu editor, or through the `SET MENU ITEM PARAMETER` command.

Menu item parameters are useful with programmed management of menus, in particular when using the `Dynamic pop up menu`, `Get menu item parameter` and `Get selected menu item parameter` commands.

## Action

Each menu command can have a project method or a standard action attached to it. When the menu command is chosen, 4D executes the associated standard action or project method. For example, a **Monthly Report** menu command can call a project method that prepares a monthly report from a table containing financial data. The **Cut** menu command usually calls the `cut` standard action in order to move the selection to the clipboard and erase it from the window in the foreground. 

If you do not assign a method or a standard action to a menu command, choosing that menu command causes 4D to exit the Application environment and go to the Design environment. If only the Application environment is available, this means quitting to the Desktop.

Standard actions can be used to carry out various current operations linked to system functions (copy, quit, etc.) or to those of the database (add record, select all, etc.).

You can assign both a standard action and a project method to a menu command. In this case, the standard action is never executed; however, 4D uses this action to enable/disable the menu command according to the current context and to associate a specific operation with it according to the platform. When a menu command is deactivated, the associated project method cannot be executed.

The choice between associating a standard action or a project method with a menu command depends on the type of result desired. In principle, it is preferable to choose a standard action whenever possible since they implement optimized mechanisms, more particularly activation/deactivation according to the context. 

### Associating a project method or a standard action

You can assign a project method and/or a standard action to a selected menu command in the Menu editor:
- **Method Name**: Select an existing project method name in the combo box. If the project method does not exist, enter its name in the "Method Name" combo box then click on the [...] button. 4D displays a project method creation dialog that is used to access the Code Editor.
- **Associated Standard Action**: Choose or write the action you want to assign in the "Associated Standard Action" combo box. You can enter any supported action and (optionally) parameter you want in the area. For a comprehensive list of standard actions, please refer to the **Standard actions** section in the *Design Reference*. 
**Note for macOS:** Under macOS, the custom menu commands associated with the *Quit* action are automatically placed in the application menu, in compliance with the platform interface standards.

Using the 4D language, you can associate a project method using the `SET MENU ITEM METHOD` command, and a standard action using the `SET MENU ITEM PROPERTY` command.

### Start a new process
The **Start a New Process** option is available for menu commands associated to methods. It can be set through a check box in the Menu editor, or through the *property* parameter of the `SET MENU ITEM PROPERTY` command.

When the **Start a New Process** option is enabled, a new process is created when the menu command is chosen. 
Normally, a method attached to a menu command executes within the current process unless you explicitly call a new process in your code. The **Start a New Process** option makes it easier to start a new process. When enabled, 4D will create a new process when the menu command is chosen. 

In the Process list, 4D assigns the new process a default name using the format "ML_ProcessNumber". 
The names of processes started from a menu are created by combining the prefix "ML_" with the process number. 

### Execute without validating
The **Execute without validating** option is available for menu commands associated to standard actions in the Menu editor only. 

When this option is checked, 4D does not trigger the "validation" of the field where the cursor is located before executing the associated action. 
This option is mainly intended for **Edit** menu commands. By default, 4D processes and "validates" the contents of a field before executing a standard action (via a menu command or a shortcut), which has the effect of generating an `On Data Change` form event. This can disrupt the functioning of copy or paste type commands because when they are called, the `On Data Change` form event is generated unexpectedly. In this case, it is useful to check the **Execute without validating** option.


## Remote access privileges

This Menu editor option allows defining a group to a menu command so that only users in that group can use the menu command from a 4D remote application (see Users and groups).

## Options

### Separator lines

Groups of menu commands in a menu can be divided by a separator line. This convention is useful for grouping associated menu commands by function.

![](../assets/en/Menus/separator.png)

You add a separator line by creating a specific menu command. 

In the Menu editor, instead of entering the menu command’s text in the title area, you simply select the **Separator Line** option. Instead of text, a line appears in the current menu bar area. When this option is checked, the other properties have no effect.
**Note:** Under macOS, if you use the dash “-” as the first character of a menu item, it will appear as a separator line.

In the 4D language, you insert a separator line by entering `-` or `(-` as itemText for `APPEND MENU ITEM`, `INSERT MENU ITEM`, or `SET MENU ITEM` commands. 


### Keyboard shortcuts

You can add keyboard shortcuts to any menu command. If a menu command has one of these keyboard shortcuts, users will see it next to the menu command. For example, "Ctrl+C" (Windows) or "Command+C" (macOS) appears next to the **Copy** menu command in the **Edit** menu.

You can also add the **Shift** key as well as the **Alt** key (Windows) or **Option** key (macOS) to the shortcut associated with a menu command. This multiplies the number of shortcuts that can be used. The following types of keyboard shortcuts can therefore be defined:

- Under Windows:
	- Ctrl+character
	- Ctrl+Shift+character
	- Ctrl+Alt+character
	- Ctrl+Shift+Alt+character

- Under macOS: 
	- Command+character
	- Command+Shift+character
	- Command+Option+character
	- Command+Shift+Option+character

> We recommend that you keep the default keyboard shortcuts that are associated with standard actions. 

You can use any alphanumeric keys as a keyboard shortcut, except for the keys reserved by standard menu commands that appear in the **Edit** and **File** menus, and the keys reserved for 4D menu commands. 

These reserved key combinations are listed in the following table:

|Key (Windows)|Key (macOS)|Operation|
|---|----|----|
|Ctrl+C|Command+C|Copy|
|Ctrl+Q|Command+Q|Quit
|Ctrl+V|Command+V|Paste
|Ctrl+X|Command+X|Cut
|Ctrl+Z|Command+Z|Undo
|Ctrl+. (period)|Command+. (period)|Stop action|

To assign a keyboard shortcut in the Menu editor:

Select the menu item to which you want to assign a keyboard shortcut.
Click on the [...] button to the right of the "Shortcut" entry area. The following window appears:

![](../assets/en/Menus/Shortcut.png)

Enter the character to use then (optional) click the **Shift** and/or **Alt** (**Option**) checkboxes according to the combination desired. 
You can also directly press the keys that make up the desired combination (do not press the **Ctrl/Command** key).

> You cannot deselect the Ctrl/Command key, which is mandatory for keyboard shortcuts for menus.
To start over, click on **Clear**. Click **OK** to validate the changes. The shortcut defined is shown in the "Shortcut" entry area. 

To assign a keyboard shortcut using the 4D language, use the `SET ITEM SHORTCUT` command.

> An active object can also have a keyboard shortcut. If the **Ctrl/Command** key assignments conflict, the active object takes precedence. 


### Enabled item

In the Menu editor, you can specify whether a menu item will appear enabled or disabled. An enabled menu command can be chosen by the user; a disabled menu command is dimmed and cannot be chosen. When the **Enabled Item** check box is unchecked, the menu command appears dimmed, indicating that it cannot be chosen.

Unless you specify otherwise, 4D automatically enables each menu item you add to a custom menu. You can disable an item in order, for example, to enable it only using programming with `ENABLE MENU ITEM` and `DISABLE MENU ITEM` commands. 


### Check mark

This Menu editor option can be used to associate a system check mark with a menu item. You can then manage the display of the check mark using language commands (`SET MENU ITEM MARK` and `Get menu item mark`).

Check marks are generally used for continuous action menu items and indicate that the action is currently underway.

### Font styles

4D lets you customize menus by applying different font styles to the menu commands. You can customize your menus with the Bold, Italic or Underline styles through options in the Menu editor, or using the `SET MENU ITEM STYLE` language command.

As a general rule, apply font styles sparingly to your menus — too many styles will be distracting to the user and give a cluttered look to your application.

>You can also apply styles by inserting special characters in the menu title (see [Using control characters](properties.md#using-control-characters) above).


### Item icon

You can associate an icon with a menu item. It will displayed directly in the menu, next to the item:

![](../assets/en/Menus/iconMenu.png)

To define the icon in the Menu editor, click on the "Item icon" area and select **Open** to open a picture from the disk. If you select a picture file that is not already stored in the project resources folder, it is automatically copied in that folder. Once set, the item icon appears in the preview area: 

![](../assets/en/Menus/iconpreview.png)

To remove the icon from the item, choose the **No Icon** option from the "Item Icon" area.

To define item icons using the 4D language, call the `SET MENU ITEM ICON` command. 
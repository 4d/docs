---
id: set-menu-item-property
title: SET MENU ITEM PROPERTY
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM PROPERTY.Syntax-->**SET MENU ITEM PROPERTY** ( *menu* ; *menuItem* ; *property* ; *value* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM PROPERTY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Longint, MenuRef | -> | Menu reference or menu number |
| menuItem | Longint | -> | Number of menu item or -1 for the last item added to the menu |
| property | String | -> | Property type |
| value | Text, Number, Boolean | -> | Property value |
| process | Longint | -> | Process number |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET MENU ITEM PROPERTY.Summary-->The **SET MENU ITEM PROPERTY** command sets the *value* of the *property* for the menu item designated by the *menu* and *menuItem* parameters.<!-- END REF-->

You can pass -1 in *menuItem* to specify the last item added to *menu*.

In *menu*, you can pass a menu reference ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) or a menu number. If you pass a menu reference, the command will apply to all the instances of the menu in all the processes. In this case, the *process* parameter is ignored if it is passed. If you pass a menu number, the command will take the corresponding menu in the main menu bar of the current process into account. If you want to designate another process, pass its number in the optional *process* parameter.

In the *property* parameter, pass the property whose value you want to modify and pass the new value in *value*. For the *property* parameter, you can use a **standard property** (one of the constants of the “[Menu Item Properties](/4Dv20R6/4D/20-R6/Menu-Item-Properties.302-6958499.en.html)” theme) or a **custom property**:

* **Standard property**: Most of standard properties are available through constants in the “[Menu Item Properties](/4Dv20R6/4D/20-R6/Menu-Item-Properties.302-6958499.en.html)” theme.  
| Constant                   | Type   | Value                            | Comment                                                                                                                                                                                                                          |  
| -------------------------- | ------ | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Access privileges          | String | 4D\_access\_group                | Assign an access group to the command<br/>0 = All Groups<br/>>0 = Group ID                                                                                                                                       |  
| Associated standard action | String | 4D\_standard\_action             | Associate a standard action with a menu item<br/>See the constants of the [Standard Action](/4Dv20R6/4D/20-R6/Standard-Action.302-6958501.en.html) theme.                                                                |  
| n/a                        | String | 4D\_execute\_without\_validating | Enable the **[Execute without validating](https://developer.4d.com/docs/Menus/properties#execute-without-validating)** option (for menu items associated to standard actions). <br/>True=enable, False (default)=disable |  
| Start a new process        | String | 4D\_start\_new\_process          | Activate the "Start New Process" option<br/>0 = No, 1 = Yes                                                                                                                                                              |  
    
In the case of the Associated standard action property, you can pass in the *value* parameter a standard action name. For a comprehensive list of available actions, please refer to the [Standard actions](/4Dv20R6/4D/20-R6/Standard-actions.300-7003350.en.html) section in the *Design Reference* manual. Most common actions are also available as constants in the [Standard Action](/4Dv20R6/4D/20-R6/Standard-Action.302-6958501.en.html) theme.  
    
**Compatibility Note:** In previous releases, constants of the [Value for Associated Standard Action](/4Dv20R6/4D/20-R6/Value-for-Associated-Standard-Action.302-6958515.en.html) theme were used in the *value* parameter (Longint). Starting with 4D v16 R3, they are deprecated but they are still supported for compatibility.  
    
**Note:** If the menu item corresponds to the title of a hierarchical sub-menu, the standard action will not be called when the menu item is selected.
* **Custom property**: In *property*, you can pass any custom text and associate a *value* of the text, number or Boolean type with it. This *value* will be stored with the item and can be retrieved using the [GET MENU ITEM PROPERTY](get-menu-item-property.md) command. You can use any custom string in the *property* parameter, simply make sure not to use a title used by 4D (by convention, properties set by 4D begin with “4D\_”).

#### See also 
[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[GET MENU ITEM PROPERTY](get-menu-item-property.md)  
---
id: creating
title: Créer des menus et des barres de menus
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

> Menu items appear *in italics* because they consist of references and not hard-coded text. Refer to [Title property](properties.md#title).

You can modify this menu bar as desired or create additional ones.

## Creating menus

### Using the Menu editor

1. Select the item you want to create and click the add ![](assets/en/Menus/PlussNew.png) button below the menu bar area. OR Choose **Create a new menu bar** or **Create a new menu** from the context menu of the list or the options menu below the list. If you created a menu bar, a new bar appears in the list containing the default menus (File and Edit).
2. (optional) Double-click on the name of the menu bar/menu to switch it to editing mode and enter a custom name. OR Enter the custom name in the "Title" area. Menu bar names must be unique. The may contain up to 31 characters. You can enter the name as "hard coded" or enter a reference (see [information about the Title property](properties.md#title)).

### Using the 4D language

Use the `Create menu` command to create a new menu bar or menu reference (*MenuRef*) in memory.

When menus are handled by means of *MenuRef* references, there is no difference per se between a menu and a menu bar. In both cases, it consists of a list of items. Only their use differs. In the case of a menu bar, each item corresponds to a menu which is itself composed of items.

`Create menu` can create empty menus (to fill using `APPEND MENU ITEM` or `INSERT MENU ITEM`) or by menus built upon menus designed in the Menu editor.

## Adding items

For each of the menus, you must add the commands that appear when the menu drops down. You can insert items that will be associated with methods or standard actions, or attach other menus (submenus).

### Using the Menu editor

To add a menu item:

1. In the list of source menus, select the menu to which you want to add a command. If the menu already has commands, they will be displayed in the central list. If you want to insert the new command, select the command that you want it to appear above. It is still be possible to reorder the menu subsequently using drag and drop.
2. Choose **Add an item to menu “MenuName”** in the options menu of the editor or from the context menu (right click in the central list). OR Click on the add ![](assets/en/Menus/PlussNew.png) button located below the central list. 4D adds a new item with the default name “Item X” where X is the number of items already created.
3. Double-click on the name of the command in order to switch it to editing mode and enter a custom name. OR Enter the custom name in the "Title" area. It may contain up to 31 characters. You can enter the name as "hard coded" or enter a reference (see below).

### Using the 4D language

Use `INSERT MENU ITEM` or `APPEND MENU ITEM` to insert or to add menu items in existing menu references.

## Supprimer des menus et des lignes de menus

### A l'aide de l'éditeur de menus

Vous pouvez supprimer une barre de menus, un menu ou une ligne de menu à tout moment. A noter qu’il n’existe qu’une seule référence d’un menu ou barre de menus. Lorsqu’un menu est rattaché à différentes barres ou différents menus, toute modification ou suppression effectuée dans ce menu est immédiatement reportée dans toutes les instances de ce menu. Deleting a menu will only delete a reference. When you delete the last reference of a menu, 4D displays an alert.

Pour supprimer une barre de menus, un menu ou une ligne de menu, vous disposez de deux possibilités :

- Sélectionner l’élément à supprimer et de cliquer sur le bouton de suppression ![](assets/en/Menus/MinussNew.png) situé sous la liste.
- or, use the appropriate **Delete...** command from the context menu or the options menu of the editor.

> It is not possible to delete Menu Bar #1.

### A l'aide du langage 4D

Utilisez la commandes `SUPPRIMER LIGNE DE MENU` pour supprimer une ligne de la barre de menus. Utilisez la commande `EFFACER MENU` pour ne pas charger le menu de la mémoire.

## Rattacher les menus

Une fois que vous avez créé un menu, vous pouvez le rattacher à une ou plusieurs barres de menus ou à un ou plusieurs autres menus (sous-menus).

Les sous-menus permettent de regrouper des fonctions thématiques à l’intérieur d’un même menu. Les sous-menus et leurs lignes peuvent disposer des mêmes attributs que les menus (actions, méthodes, raccourcis, icônes, etc.). The items of the sub-menu keep their original characteristics and properties and the functioning of the sub-menu is identical to that of a standard menu.

Vous pouvez créer des sous-menus de sous-menus sur une profondeur virtuellement illimitée. A noter toutefois que pour des raisons d’ergonomie d’interface, il n’est généralement pas conseillé de dépasser deux niveaux de sous-menus.

At runtime, if an attached menu is modified by programming, every other instance of the menu will reflect these changes.

### A l'aide de l'éditeur de menus

A menu can be attached to a menu bar or to another menu.

- To attach a menu to a menu bar: right-click on the menu bar and select **Attach a menu to the menu bar "bar name" >**, then choose the menu to be attached to the menu bar: ![](assets/en/Menus/attach.png) You can also select a menu bar then click on the options button found below the list.
- To attach a menu to another menu: select the menu in the left-hand area, then right-click on the menu item and select **Attach a sub-menu to the item "item name">**, then choose the menu you want to use as sub-menu:  
    ![](assets/en/Menus/attach2.png) You can also select a menu item then click on the options button found below the list. The menu being attached thus becomes a sub-menu. The title of the item is kept (the original sub-menu name is ignored), but this title can be modified.

#### Détacher des menus

Vous pouvez à tout moment détacher un menu d’une barre ou un sous-menu d’un menu. Le menu détaché n’est alors plus disponible dans la barre ou le sous-menu, mais reste présent dans la liste des menus.

Pour détacher un menu, cliquez avec le bouton droit dans la liste centrale sur le menu ou le sous-menu à détacher puis choisissez la commande **Détacher le menu “nom menu” de la barre “nom barre”** ou **Détacher le sous-menu de la ligne “nom ligne”**

### A l'aide du langage 4D

Since there is no difference between menus and menu bars in the 4D language, attaching menus or sub-menus is done in the same manner: use the *subMenu* parameter of the `APPEND MENU ITEM` command to attach a menu to a menu bar or an menu.
---
id: creating
title: Creación de menús y barras de menús
---

Puede crear menús y barras de menús:

- utilizando el editor de menús de la ventana de la caja de herramientas 4D. En este caso, los menús y las barras de menú se almacenan en la estructura de la aplicación.
- dinámicamente, utilizando los comandos del lenguaje del tema "Menús". En este caso, los menús y las barras de menús no se almacenan, sólo existen en la memoria.

Puede combinar ambas funcionalidades y utilizar los menús creados en la estructura como plantillas para definir los menús en la memoria.


## Barra de menús por defecto

Una aplicación personalizada debe contener al menos una barra de menús con un menú. Por defecto, cuando se crea una nueva base, 4D crea automáticamente una barra de menú por defecto (Barra de nº 1) para que pueda acceder al modo Aplicación. La barra de menús por defecto incluye menús estándar y un comando para volver al modo Diseño.

Esto permite al usuario acceder al modo Aplicación tan pronto como se crea la base. La barra de menús nº 1 se llama automáticamente cuando se elige el comando **Test Application** en el menú **Ejecución**.

La barra de menús por defecto incluye tres menús:

- **Archivo**: sólo incluye el comando **Salir**. La acción estándar *Salir* está asociada al comando, que hace que la aplicación salga.
- **Editar**: menú estándar y totalmente editable. Las funciones de edición, como copiar, pegar, etc., se definen mediante acciones estándar.
- **Modo**: contiene, por defecto, el comando **Volver al modo Diseño**, que se utiliza para salir del modo Aplicación.
> Los elementos del menú aparecen *en itálica * porque consisten de referencias y no de texto codificado. Consulte [Propiedad Título](properties.md#title).

Puede modificar esta barra de menú como desee o crear otras adicionales.


## Crear menús

### Utilizando el editor de menús

1. Seleccione el elemento que desea crear y haga clic en el botón añadir <img src="assets/en/Menus/PlussNew.png" alt=" /> debajo de la zona de la barra de menús. OR Choose **Create a new menu bar** or **Create a new menu** from the context menu of the list or the options menu below the list. If you created a menu bar, a new bar appears in the list containing the default menus (File and Edit).
2. (optional) Double-click on the name of the menu bar/menu to switch it to editing mode and enter a custom name. OR Enter the custom name in the "Title" area. Menu bar names must be unique. They may contain up to 31 characters. You can enter the name as "hard coded" or enter a reference (see [information about the Title property](properties.md#title)).

### Utilizando el lenguaje 4D
Use the `Create menu` command to create a new menu bar or menu reference (*MenuRef*) in memory.

When menus are handled by means of *MenuRef* references, there is no difference per se between a menu and a menu bar. In both cases, it consists of a list of items. Sólo difiere su uso. In the case of a menu bar, each item corresponds to a menu which is itself composed of items.

`Create menu` can create empty menus (to fill using `APPEND MENU ITEM` or `INSERT MENU ITEM`) or by menus built upon menus designed in the Menu editor.

## Añadir líneas
For each of the menus, you must add the commands that appear when the menu drops down. You can insert items that will be associated with methods or standard actions, or attach other menus (submenus).

### Utilizando el editor de menús
To add a menu item:

1. In the list of source menus, select the menu to which you want to add a command. If the menu already has commands, they will be displayed in the central list. If you want to insert the new command, select the command that you want it to appear above. It is still be possible to reorder the menu subsequently using drag and drop.
2. Choose **Add an item to menu “MenuName”** in the options menu of the editor or from the context menu (right click in the central list). OR Click on the add ![](assets/en/Menus/PlussNew.png) button located below the central list. 4D adds a new item with the default name “Item X” where X is the number of items already created.
3. Double-click on the name of the command in order to switch it to editing mode and enter a custom name. OR Enter the custom name in the "Title" area. It may contain up to 31 characters. You can enter the name as "hard coded" or enter a reference (see below).


### Utilizando el lenguaje 4D

Use `INSERT MENU ITEM` or `APPEND MENU ITEM` to insert or to add menu items in existing menu references.


## Deleting menus and items

### Utilizando el editor de menús
You can delete a menu bar, a menu or a menu item in the Menu editor at any time. Note that each menu or menu bar has only one reference. When a menu is attached to different bars or different menus, any modification or deletion made to the menu is immediately carried out in all other occurrences of this menu. Deleting a menu will only delete a reference. When you delete the last reference of a menu, 4D displays an alert.

To delete a menu bar, menu or menu item:

- Select the item to be deleted and click on the delete ![](assets/en/Menus/MinussNew.png) button located beneath the list.
- or, use the appropriate **Delete...**  command from the context menu or the options menu of the editor.

> It is not possible to delete Menu Bar #1.


### Utilizando el lenguaje 4D

Use `DELETE MENU ITEM` to remove an item from a menu reference. Use `RELEASE MENU` to unload the menu reference from the memory.


## Adjuntar los menús

Once you have created a menu, you can attach it to one or several other menus (sub-menu) or menu bar(s).

Sub-menus can be used to group together functions organized according to subject within the same menu. Sub-menus and their items can have the same attributes as the menus themselves (actions, methods, shortcuts, icons, and so on). The items of the sub-menu keep their original characteristics and properties and the functioning of the sub-menu is identical to that of a standard menu.

You can create sub-menus of sub-menus to a virtually unlimited depth. Note, however, that for reasons concerning interface ergonomics, it is generally not recommended to go beyond two levels of sub-menus.

At runtime, if an attached menu is modified by programming, every other instance of the menu will reflect these changes.


### Utilizando el editor de menús

A menu can be attached to a menu bar or to another menu.

- To attach a menu to a menu bar: right-click on the menu bar and select **Attach a menu to the menu bar "bar name" >**, then choose the menu to be attached to the menu bar: ![](assets/en/Menus/attach.png) You can also select a menu bar then click on the options button found below the list.
- To attach a menu to another menu: select the menu in the left-hand area, then right-click on the menu item and select **Attach a sub-menu to the item "item name">**, then choose the menu you want to use as sub-menu:  
  ![](assets/en/Menus/attach2.png) You can also select a menu item then click on the options button found below the list. The menu being attached thus becomes a sub-menu. The title of the item is kept (the original sub-menu name is ignored), but this title can be modified.

#### Quitar los menús

You can detach a menu from a menu bar or a sub-menu from a menu at any time. The detached menu is then no longer available in the menu bar or sub-menu as the case may be, but it is still present in the list of menus.

To detach a menu, right-click with the right button on the menu or sub-menu that you want to detach in the central list, then choose the **Detach the menu(...)** or **Detach the sub-menu(...)**

### Utilizando el lenguaje 4D

Since there is no difference between menus and menu bars in the 4D language, attaching menus or sub-menus is done in the same manner: use the *subMenu* parameter of the `APPEND MENU ITEM` command to attach a menu to a menu bar or an menu.  

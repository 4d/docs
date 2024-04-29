---
id: creating
title: Criação de menus e barras de menus
---

É possível criar menus e barras de menu:

- usando o editor de menus da janela da caixa de ferramentas 4D. Nesse caso, os menus e as barras de menu são armazenados na estrutura da aplicação.
- dinamicamente, utilizando os comandos de linguagem do tema "Menus". In this case, menus and menu bars are not stored, they only exist in memory.

You can combine both features and use menus created in structure as templates to define menus in memory.

## Barra de menu padrão

Uma aplicação personalizada deve conter pelo menos uma barra de menu com um menu. A custom application must contain at least one menu bar with one menu. The default menu bar includes standard menus and a command for returning to the Design mode.

This allows the user to access the Application environment as soon as the project is created. Menu Bar #1 is called automatically when the **Test Application** command is chosen in the **Run** menu.

A barra de menus predefinida inclui três menus:

- **File**: only includes the **Quit** command. The _Quit_ standard action is associated with the command, which causes the application to quit.
- **Edit**: standard and completely modifiable. Editing functions such as copy, paste, etc. are defined using standard actions.
- **Mode**: contains, by default, the **Return to Design mode** command, which is used to exit the Application mode.

> Menu items appear _in italics_ because they consist of references and not hard-coded text. Refer to [Title property](properties.md#title).

Pode modificar esta barra de menu como desejar ou criar outras.

## Criar menus

### Utilizar o editor de menus

1. Select the item you want to create and click the add ![](../assets/en/Menus/PlussNew.png) button below the menu bar area.
   OR
   Choose **Create a new menu bar** or **Create a new menu** from the context menu of the list or the options menu below the list.
   If you created a menu bar, a new bar appears in the list containing the default menus (File and Edit).
2. (optional) Double-click on the name of the menu bar/menu to switch it to editing mode and enter a custom name.
   OR Enter the custom name in the "Title" area.
   Os nomes das barras de menu devem ser únicos. Podem conter até 31 caracteres. You can enter the name as "hard coded" or enter a reference (see [information about the Title property](properties.md#title)).

### Utilizar a linguagem 4D

Use the `Create menu` command to create a new menu bar or menu reference (_MenuRef_) in memory.

When menus are handled by means of _MenuRef_ references, there is no difference per se between a menu and a menu bar. Em ambos os casos, consiste numa lista de itens. Apenas a sua utilização é diferente. In the case of a menu bar, each item corresponds to a menu which is itself composed of items.

`Create menu` can create empty menus (to fill using `APPEND MENU ITEM` or `INSERT MENU ITEM`) or by menus built upon menus designed in the Menu editor.

## Adicionar itens

For each of the menus, you must add the commands that appear when the menu drops down. You can insert items that will be associated with methods or standard actions, or attach other menus (submenus).

### Utilizar o editor de menus

Para adicionar um item de menu:

1. In the list of source menus, select the menu to which you want to add a command.
   Se o menu já contiver comandos, eles serão exibidos na lista central. If you want to insert the new command, select the command that you want it to appear above. Você sempre pode reorganizar o menu posteriormente, arrastando e soltando.
2. Choose **Add an item to menu “MenuName”** in the options menu of the editor or from the context menu (right click in the central list).
   OR
   Click on the add ![](../assets/en/Menus/PlussNew.png) button located below the central list.
   4D adds a new item with the default name “Item X” where X is the number of items already created.
3. Double-click on the name of the command in order to switch it to editing mode and enter a custom name.
   OR Enter the custom name in the "Title" area. Pode conter até 31 caracteres. You can enter the name as "hard coded" or enter a reference (see below).

### Utilizar a linguagem 4D

Use `INSERT MENU ITEM` or `APPEND MENU ITEM` to insert or to add menu items in existing menu references.

## Eliminar menus e itens

### Utilizar o editor de menus

Você pode excluir uma barra de menus, um menu ou um item de menu a qualquer momento. Note que cada menu ou barra de menu tem apenas uma referência. When a menu is attached to different bars or different menus, any modification or deletion made to the menu is immediately carried out in all other occurrences of this menu. A eliminação de um menu apenas elimina uma referência. Quando você exclui a última referência de um menu, o 4D exibe um alerta.

Para eliminar uma barra de menu, um menu ou um item de menu:

- Select the item to be deleted and click on the delete ![](../assets/en/Menus/MinussNew.png) button located beneath the list.
- or, use the appropriate **Delete...**  command from the context menu or the options menu of the editor.

> Não é possível eliminar a barra de menus #1.

### Utilizar a linguagem 4D

Use `DELETE MENU ITEM` to remove an item from a menu reference. Use `RELEASE MENU` to unload the menu reference from the memory.

## Anexar os menus

Once you have created a menu, you can attach it to one or several other menus (sub-menu) or menu bar(s).

Sub-menus can be used to group together functions organized according to subject within the same menu. Sub-menus and their items can have the same attributes as the menus themselves (actions, methods, shortcuts, icons, and so on). The items of the sub-menu keep their original characteristics and properties and the functioning of the sub-menu is identical to that of a standard menu.

Você pode criar submenus de submenus em uma profundidade praticamente ilimitada. Note, however, that for reasons concerning interface ergonomics, it is generally not recommended to go beyond two levels of sub-menus.

At runtime, if an attached menu is modified by programming, every other instance of the menu will reflect these changes.

### Utilizar o editor de menus

Um menu pode ser anexado a uma barra de menus ou a outro menu.

- To attach a menu to a menu bar: right-click on the menu bar and select **Attach a menu to the menu bar "bar name" >**, then choose the menu to be attached to the menu bar:
  ![](../assets/en/Menus/attach.png)
  You can also select a menu bar then click on the options button found below the list.
- To attach a menu to another menu: select the menu in the left-hand area, then right-click on the menu item and select **Attach a sub-menu to the item "item name">**, then choose the menu you want to use as sub-menu:\
  ![](../assets/en/Menus/attach2.png)
  You can also select a menu item then click on the options button found below the list.
  O menu que está a ser anexado torna-se assim um sub-menu. The title of the item is kept (the original sub-menu name is ignored), but this title can be modified.

#### Desvinculação de menus

You can detach a menu from a menu bar or a sub-menu from a menu at any time. The detached menu is then no longer available in the menu bar or sub-menu as the case may be, but it is still present in the list of menus.

To detach a menu, right-click with the right button on the menu or sub-menu that you want to detach in the central list, then choose the **Detach the menu(...)** or **Detach the sub-menu(...)**

### Utilizar a linguagem 4D

Since there is no difference between menus and menu bars in the 4D language, attaching menus or sub-menus is done in the same manner: use the _subMenu_ parameter of the `APPEND MENU ITEM` command to attach a menu to a menu bar or an menu.

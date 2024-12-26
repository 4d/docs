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

This allows the user to access the Application environment as soon as the project is created. La barra de menús nº 1 se llama automáticamente cuando se elige el comando **Test Application** en el menú **Ejecución**.

A barra de menus predefinida inclui três menus:

- **Archivo**: sólo incluye el comando **Salir**. La acción estándar _Salir_ está asociada al comando, que hace que la aplicación salga.
- **Editar**: menú estándar y totalmente editable. Editing functions such as copy, paste, etc. are defined using standard actions.
- **Modo**: contiene, por defecto, el comando **Volver al modo Diseño**, que se utiliza para salir del modo Aplicación.

> > Menu items appear _in italics_ because they consist of references and not hard-coded text. Consulte [Propiedad Título](properties.md#title).

Pode modificar esta barra de menu como desejar ou criar outras.

## Criar menus

### Utilizar o editor de menus

1. Select the item you want to create and click the add ![](../assets/en/Menus/PlussNew.png) button below the menu bar area.
   O
   Elija **Crear una nueva barra de menús** o **Crear un nuevo menú** en el menú contextual de la lista o en el menú de opciones situado debajo de la lista.
   If you created a menu bar, a new bar appears in the list containing the default menus (File and Edit).
2. (optional) Double-click on the name of the menu bar/menu to switch it to editing mode and enter a custom name.
   OR Enter the custom name in the "Title" area.
   Os nomes das barras de menu devem ser únicos. Podem conter até 31 caracteres. Puede introducir el nombre como "hard coded" o introducir una referencia (ver [información sobre la propiedad Title](properties.md#title)).

### Utilizar a linguagem 4D

Utilice el comando `Create menu` para crear una nueva barra de menú o referencia de menú (_MenuRef_) en la memoria.

Cuando los menús se manejan mediante referencias _MenuRef_, no hay diferencia per se entre un menú y una barra de menús. Em ambos os casos, consiste numa lista de itens. Apenas a sua utilização é diferente. In the case of a menu bar, each item corresponds to a menu which is itself composed of items.

`Create menu` puede crear menús vacíos (para llenar utilizando `APPEND MENU ITEM` o `INSERT MENU ITEM`) o por menús construidos sobre menús diseñados en el editor de menús.

## Adicionar itens

For each of the menus, you must add the commands that appear when the menu drops down. You can insert items that will be associated with methods or standard actions, or attach other menus (submenus).

### Utilizar o editor de menus

Para adicionar um item de menu:

1. In the list of source menus, select the menu to which you want to add a command.
   Se o menu já contiver comandos, eles serão exibidos na lista central. If you want to insert the new command, select the command that you want it to appear above. Você sempre pode reorganizar o menu posteriormente, arrastando e soltando.
2. Elija **Añadir un elemento al menú "NombreDelMenú"** en el menú de opciones del editor o desde el menú contextual (clic derecho en la lista central).
   OU
   Clique no botão adicionar ![](../assets/en/Menus/PlussNew.png) localizado abaixo da lista central.
   4D adds a new item with the default name “Item X” where X is the number of items already created.
3. Double-click on the name of the command in order to switch it to editing mode and enter a custom name.
   OR Enter the custom name in the "Title" area. Pode conter até 31 caracteres. Você pode digitar o nome como "código duro" ou insira uma referência (veja abaixo).

### Utilizar a linguagem 4D

Utilice `INSERT MENU ITEM` o `APPEND MENU ITEM` para insertar o añadir elementos de menú en referencias de menú existentes.

## Eliminar menus e itens

### Utilizar o editor de menus

Você pode excluir uma barra de menus, um menu ou um item de menu a qualquer momento. Note que cada menu ou barra de menu tem apenas uma referência. When a menu is attached to different bars or different menus, any modification or deletion made to the menu is immediately carried out in all other occurrences of this menu. A eliminação de um menu apenas elimina uma referência. Quando você exclui a última referência de um menu, o 4D exibe um alerta.

Para eliminar uma barra de menu, um menu ou um item de menu:

- Select the item to be deleted and click on the delete ![](../assets/en/Menus/MinussNew.png) button located beneath the list.
- o bien, utilice el comando apropiado **Eliminar...** del menú contextual o del menú de opciones del editor.

> Não é possível eliminar a barra de menus #1.

### Utilizar a linguagem 4D

Utilice `DELETE MENU ITEM` para eliminar un elemento de una referencia de menú. Utilice `RELEASE MENU` para descargar la referencia del menú de la memoria.

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

Para desvincular un menú, haga clic con el botón derecho en el menú o submenú que desee desvincular en la lista central y, a continuación, elija la opción **Desvincular el menú(...)** o **Desvincular el submenú(...)**

### Utilizar a linguagem 4D

Como no hay diferencia entre los menús y las barras de menús en el lenguaje de 4D, adjuntar menús o submenús se hace de la misma manera: utilice el parámetro _submenú_ del comando `APPEND MENU ITEM` para adjuntar un menú a una barra de menús o a un menú.

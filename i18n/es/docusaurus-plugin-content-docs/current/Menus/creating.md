---
id: creating
title: Creación de menús y barras de menús
---

Puede crear menús y barras de menús:

- utilizando el editor de menús de la ventana de la caja de herramientas 4D. En este caso, los menús y las barras de menú se almacenan en la estructura de la aplicación.
- dinámicamente, utilizando los comandos del lenguaje del tema "Menús". En este caso, los menús y las barras de menús no se almacenan, sólo existen en la memoria.

Puede combinar ambas funcionalidades y utilizar los menús creados en la estructura como plantillas para definir los menús en la memoria.

## Barra de menús por defecto

Una aplicación personalizada debe contener al menos una barra de menús con un menú. Una aplicación personalizada debe contener al menos una barra de menús con un menú. La barra de menús por defecto incluye menús estándar y un comando para volver al modo Diseño.

Esto permite al usuario acceder al modo Aplicación tan pronto como se crea el proyecto. Menu Bar #1 is called automatically when the **Test Application** command is chosen in the **Run** menu.

La barra de menús por defecto incluye tres menús:

- **File**: only includes the **Quit** command. The _Quit_ standard action is associated with the command, which causes the application to quit.
- **Edit**: standard and completely modifiable. Las funciones de edición, como copiar, pegar, etc., se definen mediante acciones estándar.
- **Mode**: contains, by default, the **Return to Design mode** command, which is used to exit the Application mode.

> Menu items appear _in italics_ because they consist of references and not hard-coded text. Refer to [Title property](properties.md#title).

Puede modificar esta barra de menú como desee o crear otras adicionales.

## Crear menús

### Utilizando el editor de menús

1. Select the item you want to create and click the add ![](../assets/en/Menus/PlussNew.png) button below the menu bar area.
   OR
   Choose **Create a new menu bar** or **Create a new menu** from the context menu of the list or the options menu below the list.
   Si ha creado una barra de menús, aparece una nueva barra en la lista que contiene los menús por defecto (Archivo y Edición).
2. (opcional) Haga doble clic en el nombre de la barra de menú/menú para pasar al modo de edición e introducir un nombre personalizado.
   OR Enter the custom name in the "Title" area.
   Los nombres de las barras de menú deben ser únicos. Pueden contener hasta 31 caracteres. You can enter the name as "hard coded" or enter a reference (see [information about the Title property](properties.md#title)).

### Utilizando el lenguaje 4D

Use the `Create menu` command to create a new menu bar or menu reference (_MenuRef_) in memory.

When menus are handled by means of _MenuRef_ references, there is no difference per se between a menu and a menu bar. En ambos casos, consiste en una lista de elementos. Sólo difiere su uso. En el caso de una barra de menús, cada elemento corresponde a un menú que a su vez está compuesto por elementos.

`Create menu` can create empty menus (to fill using `APPEND MENU ITEM` or `INSERT MENU ITEM`) or by menus built upon menus designed in the Menu editor.

## Añadir líneas

Para cada uno de los menús, debe añadir los comandos que aparecen cuando el menú se despliega. Puede insertar elementos que se asociarán a los métodos o a las acciones estándar, o adjuntar otros menús (submenús).

### Utilizando el editor de menús

Para añadir un elemento de menú:

1. En la lista de menús fuente, seleccione el menú al que desea añadir un comando.
   Si el menú ya tiene comandos, se mostrarán en la lista central. Si desea insertar el nuevo comando, seleccione el comando que desea que aparezca sobre él. Todavía es posible reorganizar el menú posteriormente utilizando la función de arrastrar y soltar.
2. Choose **Add an item to menu “MenuName”** in the options menu of the editor or from the context menu (right click in the central list).
   OR
   Click on the add ![](../assets/en/Menus/PlussNew.png) button located below the central list.
   4D añade un nuevo elemento con el nombre por defecto "Elemento X" donde X es el número de elementos ya creados.
3. Haga doble clic en el nombre del comando para pasar al modo edición e introducir un nombre personalizado.
   OR Enter the custom name in the "Title" area. Puede contener hasta 31 caracteres. Puede introducir el nombre como "codificado" o introducir una referencia (ver más abajo).

### Utilizando el lenguaje 4D

Use `INSERT MENU ITEM` or `APPEND MENU ITEM` to insert or to add menu items in existing menu references.

## Eliminar menús y elementos de menús

### Utilizando el editor de menús

Puede eliminar una barra de menús, un menú o un elemento de menú en el editor de menús en cualquier momento. Tenga en cuenta que cada menú o barra de menús sólo tiene una referencia. Cuando un menú está unido a diferentes barras o a diferentes menús, cualquier modificación o supresión realizada en el menú se lleva a cabo inmediatamente en todas las demás apariciones de este menú. La eliminación de un menú sólo borrará una referencia. Cuando se borra la última referencia de un menú, 4D muestra una alerta.

Para eliminar una barra de menús, un menú o un elemento de menú:

- Select the item to be deleted and click on the delete ![](../assets/en/Menus/MinussNew.png) button located beneath the list.
- or, use the appropriate **Delete...**  command from the context menu or the options menu of the editor.

> No es posible eliminar Menu Bar #1.

### Utilizando el lenguaje 4D

Use `DELETE MENU ITEM` to remove an item from a menu reference. Use `RELEASE MENU` to unload the menu reference from the memory.

## Adjuntar los menús

Una vez creado un menú, puede adjuntarlo a uno o a varios otros menús (submenús) o barras de menús.

Los submenús pueden utilizarse para agrupar funciones organizadas por temas dentro del mismo menú. Los submenús y sus elementos pueden tener los mismos atributos que los propios menús (acciones, métodos, accesos directos, iconos, etc.). Los elementos del submenú conservan sus características y propiedades originales y el funcionamiento del submenú es idéntico al de un menú estándar.

Puede crear submenús de submenús hasta una profundidad prácticamente ilimitada. Sin embargo, tenga en cuenta que, por razones de ergonomía de la interfaz, en general no se recomienda superar los dos niveles de submenús.

En tiempo de ejecución, si un menú adjunto se modifica por programación, todas las demás instancias del menú reflejarán estos cambios.

### Utilizando el editor de menús

Un menú puede estar unido a una barra de menús o a otro menú.

- To attach a menu to a menu bar: right-click on the menu bar and select **Attach a menu to the menu bar "bar name" >**, then choose the menu to be attached to the menu bar:
  ![](../assets/en/Menus/attach.png)
  You can also select a menu bar then click on the options button found below the list.
- To attach a menu to another menu: select the menu in the left-hand area, then right-click on the menu item and select **Attach a sub-menu to the item "item name">**, then choose the menu you want to use as sub-menu:\
  ![](../assets/en/Menus/attach2.png)
  You can also select a menu item then click on the options button found below the list.
  El menú que se adjunta se convierte así en un submenú. El título del elemento se mantiene (el nombre original del submenú se ignora), pero este título puede modificarse.

#### Quitar los menús

Puede separar un menú de una barra de menús o un submenú de un menú en cualquier momento. El menú separado ya no está disponible en la barra de menús o en el submenú, según el caso, pero sigue estando presente en la lista de menús.

To detach a menu, right-click with the right button on the menu or sub-menu that you want to detach in the central list, then choose the **Detach the menu(...)** or **Detach the sub-menu(...)**

### Utilizando el lenguaje 4D

Since there is no difference between menus and menu bars in the 4D language, attaching menus or sub-menus is done in the same manner: use the _subMenu_ parameter of the `APPEND MENU ITEM` command to attach a menu to a menu bar or an menu.

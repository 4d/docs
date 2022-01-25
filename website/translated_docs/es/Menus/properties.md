---
id: properties
title: Propiedades de los menús
---

Puede definir varias propiedades para los elementos del menú, como las acción, el estilo de la fuente, las líneas de separación, los atajos de teclado o los iconos.


## Título

La propiedad **Title** contiene la etiqueta de un menú o elemento de menú tal y como se mostrará en la interfaz de la aplicación.

En el editor de menús, puede introducir directamente la etiqueta como "fijo". También puede introducir una referencia para una variable o un elemento XLIFF, lo que facilitará el mantenimiento y la traducción de las aplicaciones. Puede utilizar los siguientes tipos de referencias:

- Una referencia a un recurso XLIFF del tipo :xliff:MyLabel. Para más información sobre las referencias XLIFF, consulte la sección *Arquitectura XLIFF* en *Referencia Diseño 4D*.
- Un nombre de variable interproceso seguido de un número, por ejemplo: :<>vlang,3. Si se cambia el contenido de esta variable, se modificará la etiqueta del menú cuando se muestre. En este caso, la etiqueta llamará a un recurso XLIFF. El valor contenido en la variable <>vlang corresponde al atributo *id* del elemento *group*. El segundo valor (3 en este ejemplo) designa el atributo *id* del elemento *trans-unit*.

Utilizando el lenguaje 4D, se define la propiedad del título a través del parámetro *itemText* de los comandos `APPEND MENU ITEM`, `INSERT MENU ITEM`, y `SET MENU ITEM`.

### Caracteres de control

Puede definir algunas propiedades de los comandos de menú utilizando caracteres de control (metacaracteres) directamente en las etiquetas de los comandos de menú. Por ejemplo, puede asignar el atajo de teclado Ctrl+G (Windows) o Comando+G (macOS) para un comando de menú colocando los caracteres "/G" en la etiqueta del elemento de menú.

Los caracteres de control no aparecen en las etiquetas de los comandos del menú. Por lo tanto, hay que evitar su uso para no tener efectos indeseables. Los caracteres de control son los siguientes:

| Caracter   | Descripción                   | Utilización                                                                                    |
| ---------- | ----------------------------- | ---------------------------------------------------------------------------------------------- |
| (          | paréntesis de apertura        | Desactivar la línea                                                                            |
| <B         | menor que B                   | Negrita                                                                                        |
| <I         | menor que I                   | Itálica                                                                                        |
| <U         | menor que U                   | Subrayado                                                                                      |
| !+caracter | signo de exclamación+caracter | Caracter de adición como marca de verificación (macOS); añadir marca de verificación (Windows) |
| /+caracter | barra+caracter                | Añadir un carácter como atajo                                                                  |



## Parámetros

Puede asociar un parámetro personalizado a cada elemento del menú. Un parámetro de elemento de menú es una cadena de caracteres cuyo contenido puede elegirse libremente. Puede definirse en el editor de menús, o a través del comando `SET MENU ITEM PARAMETER`.

Los parámetros de elementos de menú son útiles con la gestión programada de los menús, en particular cuando se utilizan los comandos `Dynamic pop up menu`, `Get menu item parameter` y `Get selected menu item parameter`.

## Acción

Cada comando de menú puede tener un método proyecto o una acción estándar adjunta. Cuando se elige el comando del menú, 4D ejecuta la acción estándar o el método proyecto asociado. Por ejemplo, un comando de menú **Informe mensual** puede llamar a un método proyecto que prepare un informe mensual a partir de una tabla que contenga datos financieros. El comando del menú **Cortar** suele llamar a la acción estándar `cut` para mover la selección al portapapeles y borrarla de la ventana en primer plano.

Si no asigna un método o una acción estándar a un comando de menú, la elección de ese comando de menú hace que 4D salga del entorno de Aplicación y pase al entorno de Diseño. Si sólo está disponible el entorno de la Aplicación, esto significa salir al Escritorio.

Standard actions can be used to carry out various current operations linked to system functions (copy, quit, etc.) or to those of the database (add record, select all, etc.).

Puede asignar al mismo tiempo una acción estándar y un método proyecto a un comando de menú. En este caso, la acción estándar no se ejecuta nunca; sin embargo, 4D utiliza esta acción para habilitar/deshabilitar el comando de menú según el contexto actual y para asociar una operación específica según la plataforma. Cuando se desactiva un comando de menú, no se puede ejecutar el método proyecto asociado.

La elección entre asociar una acción estándar o un método proyecto a un comando de menú depende del tipo de resultado deseado. En principio, es preferible elegir una acción estándar siempre que sea posible, ya que implementan mecanismos optimizados, más concretamente la activación/desactivación en función del contexto.

### Asociar un método proyecto o una acción estándar

You can assign a project method and/or a standard action to a selected menu command in the Menu editor:
- **Method Name**: Select an existing project method name in the combo box. If the project method does not exist, enter its name in the "Method Name" combo box then click on the [...] button. 4D displays a project method creation dialog that is used to access the Method editor.
- **Associated Standard Action**: Choose or write the action you want to assign in the "Associated Standard Action" combo box. You can enter any supported action and (optionally) parameter you want in the area. For a comprehensive list of standard actions, please refer to the **Standard actions** section in the *Design Reference*. **Note for macOS:** Under macOS, the custom menu commands associated with the *Quit* action are automatically placed in the application menu, in compliance with the platform interface standards.

Using the 4D language, you can associate a project method using the `SET MENU ITEM METHOD` command, and a standard action using the `SET MENU ITEM PROPERTY` command.

### Iniciar un nuevo proceso
The **Start a New Process** option is available for menu commands associated to methods. It can be set through a check box in the Menu editor, or through the *property* parameter of the `SET MENU ITEM PROPERTY` command.

When the **Start a New Process** option is enabled, a new process is created when the menu command is chosen. Normally, a method attached to a menu command executes within the current process unless you explicitly call a new process in your code. The **Start a New Process** option makes it easier to start a new process. When enabled, 4D will create a new process when the menu command is chosen.

In the Process list, 4D assigns the new process a default name using the format "ML_ProcessNumber". The names of processes started from a menu are created by combining the prefix "ML_" with the process number.

### Execute without validating
The **Execute without validating** option is available for menu commands associated to standard actions in the Menu editor only.

When this option is checked, 4D does not trigger the "validation" of the field where the cursor is located before executing the associated action. This option is mainly intended for **Edit** menu commands. By default, 4D processes and "validates" the contents of a field before executing a standard action (via a menu command or a shortcut), which has the effect of generating an `On Data Change` form event. This can disrupt the functioning of copy or paste type commands because when they are called, the `On Data Change` form event is generated unexpectedly. In this case, it is useful to check the **Execute without validating** option.


## Remote access privileges

This Menu editor option allows defining a group to a menu command so that only users in that group can use the menu command from a 4D remote application (see Users and groups).

## Opciones

### Líneas de separación

Groups of menu commands in a menu can be divided by a separator line. This convention is useful for grouping associated menu commands by function.

![](assets/en/Menus/separator.png)

You add a separator line by creating a specific menu command.

In the Menu editor, instead of entering the menu command’s text in the title area, you simply select the **Separator Line** option. Instead of text, a line appears in the current menu bar area. When this option is checked, the other properties have no effect. **Note:** Under macOS, if you use the dash “-” as the first character of a menu item, it will appear as a separator line.

In the 4D language, you insert a separator line by entering `-` or `(-` as itemText for `APPEND MENU ITEM`, `INSERT MENU ITEM`, or `SET MENU ITEM` commands.


### Atajos de teclado

You can add keyboard shortcuts to any menu command. If a menu command has one of these keyboard shortcuts, users will see it next to the menu command. For example, "Ctrl+C" (Windows) or "Command+C" (macOS) appears next to the **Copy** menu command in the **Edit** menu.

You can also add the **Shift** key as well as the **Alt** key (Windows) or **Option** key (macOS) to the shortcut associated with a menu command. This multiplies the number of shortcuts that can be used. The following types of keyboard shortcuts can therefore be defined:

- En Windows:
    - Ctrl+caracter
    - Ctrl+Shift+character
    - Ctrl+Alt+caracter
    - Ctrl+Shift+Alt+character

- En macOS:
    - Comando+caracter
    - Comando+Mayús+caracter
    - Command+Option+character
    - Command+Shift+Option+character

> We recommend that you keep the default keyboard shortcuts that are associated with standard actions.

You can use any alphanumeric keys as a keyboard shortcut, except for the keys reserved by standard menu commands that appear in the **Edit** and **File** menus, and the keys reserved for 4D menu commands.

These reserved key combinations are listed in the following table:

| Llave (Windows) | Llave (macOS)     | Operación         |
| --------------- | ----------------- | ----------------- |
| Ctrl+C          | Comando+C         | Copiar            |
| Ctrl+Q          | Comando+Q         | Salir             |
| Ctrl+V          | Comando+V         | Pegar             |
| Ctrl+X          | Comando+X         | Cortar            |
| Ctrl+Z          | Comando+Z         | Deshacer          |
| Ctrl+. (punto)  | Comando+. (punto) | Detener la acción |

To assign a keyboard shortcut in the Menu editor:

Select the menu item to which you want to assign a keyboard shortcut. Click on the [...] button to the right of the "Shortcut" entry area. The following window appears:

![](assets/en/Menus/Shortcut.png)

Enter the character to use then (optional) click the **Shift** and/or **Alt** (**Option**) checkboxes according to the combination desired. You can also directly press the keys that make up the desired combination (do not press the **Ctrl/Command** key).

> You cannot deselect the Ctrl/Command key, which is mandatory for keyboard shortcuts for menus. To start over, click on **Clear**. Click **OK** to validate the changes. The shortcut defined is shown in the "Shortcut" entry area.

To assign a keyboard shortcut using the 4D language, use the `SET ITEM SHORTCUT` command.

> An active object can also have a keyboard shortcut. If the **Ctrl/Command** key assignments conflict, the active object takes precedence.


### Línea activa

In the Menu editor, you can specify whether a menu item will appear enabled or disabled. An enabled menu command can be chosen by the user; a disabled menu command is dimmed and cannot be chosen. When the **Enabled Item** check box is unchecked, the menu command appears dimmed, indicating that it cannot be chosen.

Unless you specify otherwise, 4D automatically enables each menu item you add to a custom menu. You can disable an item in order, for example, to enable it only using programming with `ENABLE MENU ITEM` and `DISABLE MENU ITEM` commands.


### Marca de verificación

This Menu editor option can be used to associate a system check mark with a menu item. You can then manage the display of the check mark using language commands (`SET MENU ITEM MARK` and `Get menu item mark`).

Check marks are generally used for continuous action menu items and indicate that the action is currently underway.

### Estilos de fuentes

4D lets you customize menus by applying different font styles to the menu commands. You can customize your menus with the Bold, Italic or Underline styles through options in the Menu editor, or using the `SET MENU ITEM STYLE` language command.

As a general rule, apply font styles sparingly to your menus — too many styles will be distracting to the user and give a cluttered look to your application.
> You can also apply styles by inserting special characters in the menu title (see [Using control characters](properties.md#using-control-characters) above).


### Item icon

You can associate an icon with a menu item. It will displayed directly in the menu, next to the item:

![](assets/en/Menus/iconMenu.png)

To define the icon in the Menu editor, click on the "Item icon" area and select **Open** to open a picture from the disk. If you select a picture file that is not already stored in the project resources folder, it is automatically copied in that folder. Una vez definido, el icono del elemento aparece en el área de vista previa:

![](assets/en/Menus/iconpreview.png)

To remove the icon from the item, choose the **No Icon** option from the "Item Icon" area.

To define item icons using the 4D language, call the `SET MENU ITEM ICON` command. 
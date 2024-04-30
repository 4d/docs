---
id: properties
title: Propiedades de los menús
---

Puede definir varias propiedades para los elementos del menú, como las acción, el estilo de la fuente, las líneas de separación, los atajos de teclado o los iconos.

## Título

The **Title** property contains the label of a menu or menu item as it will be displayed on the application interface.

En el editor de menús, puede introducir directamente la etiqueta como "fijo". También puede introducir una referencia para una variable o un elemento XLIFF, lo que facilitará el mantenimiento y la traducción de las aplicaciones. Puede utilizar los siguientes tipos de referencias:

- Una referencia a un recurso XLIFF del tipo :xliff:MyLabel. For more information about XLIFF references, refer to _XLIFF Architecture_ section in _4D Design Reference_.
- An interprocess variable name followed by a number, for example: `:<>vlang,3`. Si se cambia el contenido de esta variable, se modificará la etiqueta del menú cuando se muestre. En este caso, la etiqueta llamará a un recurso XLIFF. The value contained in the `<>vlang` variable corresponds to the _id_ attribute of the _group_ element. The second value (3 in this example) designates the _id_ attribute of the _trans-unit_ element.

Using the 4D language, you set the title property through the _itemText_ parameter of the `APPEND MENU ITEM`, `INSERT MENU ITEM`, and `SET MENU ITEM` commands.

### Caracteres de control

Puede definir algunas propiedades de los comandos de menú utilizando caracteres de control (metacaracteres) directamente en las etiquetas de los comandos de menú. Por ejemplo, puede asignar el atajo de teclado Ctrl+G (Windows) o Comando+G (macOS) para un comando de menú colocando los caracteres "/G" en la etiqueta del elemento de menú.

Los caracteres de control no aparecen en las etiquetas de los comandos del menú. Por lo tanto, hay que evitar su uso para no tener efectos indeseables. Los caracteres de control son los siguientes:

| Caracter             | Descripción                   | Utilización                                                                                                                          |
| -------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ( | paréntesis de apertura        | Desactivar la línea                                                                                                                  |
| \<B                  | menor que B                   | Negrita                                                                                                                              |
| \<I                  | menor que I                   | Itálica                                                                                                                              |
| \<U                  | menor que U                   | Subrayado                                                                                                                            |
| !+caracter           | signo de exclamación+caracter | Caracter de adición como marca de verificación (macOS); añadir marca de verificación (Windows) |
| /+caracter           | barra+caracter                | Añadir un carácter como atajo                                                                                                        |

## Parámetros

Puede asociar un parámetro personalizado a cada elemento del menú. Un parámetro de elemento de menú es una cadena de caracteres cuyo contenido puede elegirse libremente. It can be set in the Menu editor, or through the `SET MENU ITEM PARAMETER` command.

Menu item parameters are useful with programmed management of menus, in particular when using the `Dynamic pop up menu`, `Get menu item parameter` and `Get selected menu item parameter` commands.

## Acción

Cada comando de menú puede tener un método proyecto o una acción estándar adjunta. Cuando se elige el comando del menú, 4D ejecuta la acción estándar o el método proyecto asociado. For example, a **Monthly Report** menu command can call a project method that prepares a monthly report from a table containing financial data. The **Cut** menu command usually calls the `cut` standard action in order to move the selection to the clipboard and erase it from the window in the foreground.

Si no asigna un método o una acción estándar a un comando de menú, la elección de ese comando de menú hace que 4D salga del entorno de Aplicación y pase al entorno de Diseño. Si sólo está disponible el entorno de la Aplicación, esto significa salir al Escritorio.

Standard actions can be used to carry out various current operations linked to system functions (copy, quit, etc.) or to those of the database (add record, select all, etc.).

Puede asignar al mismo tiempo una acción estándar y un método proyecto a un comando de menú. En este caso, la acción estándar no se ejecuta nunca; sin embargo, 4D utiliza esta acción para habilitar/deshabilitar el comando de menú según el contexto actual y para asociar una operación específica según la plataforma. Cuando se desactiva un comando de menú, no se puede ejecutar el método proyecto asociado.

La elección entre asociar una acción estándar o un método proyecto a un comando de menú depende del tipo de resultado deseado. En principio, es preferible elegir una acción estándar siempre que sea posible, ya que implementan mecanismos optimizados, más concretamente la activación/desactivación en función del contexto.

### Asociar un método proyecto o una acción estándar

Puede asignar un método proyecto y/o una acción estándar a un comando de menú seleccionado en el editor de menú:

- **Method Name**: Select an existing project method name in the combo box. If the project method does not exist, enter its name in the "Method Name" combo box then click on the [...] button. 4D muestra un diálogo de creación de método proyecto que se utiliza para acceder al editor de código.
- **Associated Standard Action**: Choose or write the action you want to assign in the "Associated Standard Action" combo box. Puede introducir toda acción soportada y (opcionalmente) el parámetro que desee en el área. For a comprehensive list of standard actions, please refer to the **Standard actions** section in the _Design Reference_.
  **Note for macOS:** Under macOS, the custom menu commands associated with the _Quit_ action are automatically placed in the application menu, in compliance with the platform interface standards.

Using the 4D language, you can associate a project method using the `SET MENU ITEM METHOD` command, and a standard action using the `SET MENU ITEM PROPERTY` command.

### Iniciar un proceso

The **Start a New Process** option is available for menu commands associated to methods. It can be set through a check box in the Menu editor, or through the _property_ parameter of the `SET MENU ITEM PROPERTY` command.

When the **Start a New Process** option is enabled, a new process is created when the menu command is chosen.
Normalmente, un método asociado a un comando de menú se ejecuta en el proceso actual a menos que llame explícitamente a un nuevo proceso en su código. The **Start a New Process** option makes it easier to start a new process. Si se activa, 4D creará un nuevo proceso cuando se elija el comando del menú.

En la lista de procesos, 4D asigna al nuevo proceso un nombre por defecto utilizando el formato "ML_NúmeroProceso".
Los nombres de los procesos iniciados desde un menú se crean combinando el prefijo "ML_" con el número del proceso.

### Ejecutar sin validar

The **Execute without validating** option is available for menu commands associated to standard actions in the Menu editor only.

Cuando esta opción está marcada, 4D no activa la "validación" del campo donde se encuentra el cursor antes de ejecutar la acción asociada.
This option is mainly intended for **Edit** menu commands. By default, 4D processes and "validates" the contents of a field before executing a standard action (via a menu command or a shortcut), which has the effect of generating an `On Data Change` form event. This can disrupt the functioning of copy or paste type commands because when they are called, the `On Data Change` form event is generated unexpectedly. In this case, it is useful to check the **Execute without validating** option.

## Privilegios de acceso remoto

Esta opción del editor de menús permite definir un grupo para un comando de menú para que sólo los usuarios de ese grupo puedan utilizar el comando de menú desde una aplicación remota 4D (ver Usuarios y grupos).

## Opciones

### Líneas de separación

Los grupos de comandos de menús pueden estar divididos por una línea de separación. Esta convención es útil para agrupar los comandos de menú asociados por función.

![](../assets/en/Menus/separator.png)

Se añade una línea de separación mediante la creación de un comando de menú específico.

In the Menu editor, instead of entering the menu command’s text in the title area, you simply select the **Separator Line** option. En lugar de texto, aparece una línea en el área de la barra de menú actual. Cuando esta opción está marcada, las otras propiedades no tienen efecto.
**Note:** Under macOS, if you use the dash “-” as the first character of a menu item, it will appear as a separator line.

In the 4D language, you insert a separator line by entering `-` or `(-` as itemText for `APPEND MENU ITEM`, `INSERT MENU ITEM`, or `SET MENU ITEM` commands.

### Atajos de teclado

Puede añadir atajos de teclado a todo comando de menú. Si un comando de menú tiene uno de estos atajos de teclado, los usuarios lo verán junto al comando de menú. For example, "Ctrl+C" (Windows) or "Command+C" (macOS) appears next to the **Copy** menu command in the **Edit** menu.

You can also add the **Shift** key as well as the **Alt** key (Windows) or **Option** key (macOS) to the shortcut associated with a menu command. Esto multiplica el número de accesos directos que se pueden utilizar. Por lo tanto, se pueden definir los siguientes tipos de atajos de teclado:

- En Windows:
  - Ctrl+caracter
  - Ctrl+Mayús+letra
  - Ctrl+Alt+caracter
  - Ctrl+Mayús+Alt+letra

- En macOS:
  - Comando+letra
  - Comando+Mayús+letra
  - Comando+Opción+letra
  - Comando+Mayús+Opción+letra

> Le recomendamos que mantenga los atajos de teclado por defecto que están asociados a las acciones estándar.

You can use any alphanumeric keys as a keyboard shortcut, except for the keys reserved by standard menu commands that appear in the **Edit** and **File** menus, and the keys reserved for 4D menu commands.

Estas combinaciones de teclas reservadas se indican en la siguiente tabla:

| Llave (Windows)                | Llave (macOS)                     | Operación         |
| ------------------------------------------------- | ---------------------------------------------------- | ----------------- |
| Ctrl+C                                            | Comando+C                                            | Copiar            |
| Ctrl+Q                                            | Comando+Q                                            | Salir             |
| Ctrl+V                                            | Comando+V                                            | Pegar             |
| Ctrl+X                                            | Comando+X                                            | Cortar            |
| Ctrl+Z                                            | Comando+Z                                            | Deshacer          |
| Ctrl+. (punto) | Comando+. (punto) | Detener la acción |

Para asignar un atajo de teclado en el editor de menús:

Seleccione la opción de menú a la que desea asignar un atajo de teclado.
Haga clic en el botón [...] button to the right of the "Shortcut" entry area. Aparece la siguiente ventana:

![](../assets/en/Menus/Shortcut.png)

Enter the character to use then (optional) click the **Shift** and/or **Alt** (**Option**) checkboxes according to the combination desired.
You can also directly press the keys that make up the desired combination (do not press the **Ctrl/Command** key).

> No se puede desmarcar la tecla Ctrl/Comando, que es obligatoria para los atajos de teclado de los menús.
> To start over, click on **Clear**. Click **OK** to validate the changes. El acceso directo definido se muestra en el área de entrada "Acceso directo".

To assign a keyboard shortcut using the 4D language, use the `SET ITEM SHORTCUT` command.

> Un objeto activo también puede tener un atajo de teclado. If the **Ctrl/Command** key assignments conflict, the active object takes precedence.

### Línea activa

En el editor de menús, puede especificar si un elemento del menú aparecerá activo o inactivo. Un comando de menú activo puede ser elegido por el usuario; un comando de menú inactivo está atenuado y no puede ser elegido. When the **Enabled Item** check box is unchecked, the menu command appears dimmed, indicating that it cannot be chosen.

A menos que especifique lo contrario, 4D habilita automáticamente cada elemento de menú que añada a un menú personalizado. You can disable an item in order, for example, to enable it only using programming with `ENABLE MENU ITEM` and `DISABLE MENU ITEM` commands.

### Marca de verificación

Esta opción del editor de menús puede utilizarse para asociar una marca de verificación del sistema a un elemento del menú. You can then manage the display of the check mark using language commands (`SET MENU ITEM MARK` and `Get menu item mark`).

Las marcas de verificación se utilizan generalmente para los elementos del menú de acción continua e indican que la acción está en curso.

### Estilos de fuentes

4D le permite personalizar los menús aplicando diferentes estilos de letra a los comandos del menú. You can customize your menus with the Bold, Italic or Underline styles through options in the Menu editor, or using the `SET MENU ITEM STYLE` language command.

Como regla general, aplique los estilos de fuente con moderación a sus menús; demasiados estilos distraerán al usuario y darán un aspecto desordenado a su aplicación.

> You can also apply styles by inserting special characters in the menu title (see [Using control characters](properties.md#using-control-characters) above).

### Icono línea

Puede asociar un icono a un elemento del menú. Aparecerá directamente en el menú, junto al elemento:

![](../assets/en/Menus/iconMenu.png)

To define the icon in the Menu editor, click on the "Item icon" area and select **Open** to open a picture from the disk. Si selecciona un archivo imagen que no está almacenado en la carpeta Recursos del proyecto, se copiará automáticamente en esa carpeta. Una vez definido, el icono del elemento aparece en el área de vista previa:

![](../assets/en/Menus/iconpreview.png)

To remove the icon from the item, choose the **No Icon** option from the "Item Icon" area.

To define item icons using the 4D language, call the `SET MENU ITEM ICON` command.

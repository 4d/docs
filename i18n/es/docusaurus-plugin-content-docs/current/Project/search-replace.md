---
id: search-replace
title: Buscar y reemplazar
---

4D provides several search and replace functions for elements in all of the Design environment.

- You can search for a string or a type of object (variable, comment, expression, etc.) en parte o en todo el proyecto en función de criterios personalizados ("empieza por", "contiene", etc.). Por ejemplo, puede buscar todas las variables que contengan la cadena "MiVar", solo en los métodos cuyo nombre empiece por "HR_".
- Los resultados se muestran en una ventana de resultados, donde es posible realizar sustituciones en los contenidos. You can also export these results in a text file that can be imported into a spreadsheet.
- Puede detectar variables y métodos que no se utilicen en su código y eliminarlos para liberar memoria.
- Puede renombrar un método proyecto o una variable en todo el entorno de diseño en una sola operación.

:::note

There are also functions for searching among the methods of your project in the context menu of the Methods Page in the Explorer: **Search Callers** (aussi available in the [Code editor](../code-editor/write-class-method.md#search-callers) and **Search Dependencies**. Both functions display the items found in a [Results window](#results-window).

:::

## Buscar ubicación

Cuando se busca en el entorno Diseño, se buscan los siguientes elementos:

- Names of project methods and classes
- Contenido de todos los métodos y clases
- Nombres de tablas, campos y formularios
- Contenido de los formularios:
  - object names and titles
  - names of help tips, pictures, variables, style sheets,
  - formatting strings
  - expresiones
- Menús (nombres y elementos) y comandos asociados a los elementos de menú
- Listas de selección (nombres y elementos)
- Consejos de ayuda (nombres y contenido)
- Formatos / filtros (nombres y contenido)
- Comentarios en el Explorador y en el código

## Buscar en Diseño

### Iniciar una búsqueda

Especifique sus criterios de búsqueda en la ventana "Buscar en el diseño":

1. Click on the Search button (![](../assets/en/Project/search-icon.png)) in the 4D toolbar.
   OR
   Select the **Find in Design...** command from the **Edit** menu.

The "Find in design" window appears:

![](../assets/en/Project/find-in-design.png)

The areas of the "Find in design" vary dynamically depending on the selections made in the menus. Puedes expandir esta ventana para que todas las opciones sean visibles:

![](../assets/en/Project/find-in-design-expanded.png)

2. Build your search using the different menus and entry areas of the dialog box and if necessary enter the character string to be searched for. Estos elementos se describen en las secciones siguientes.

3. Define las [opciones de búsqueda](#search-options) (si es necesario).

4. Haga clic en **OK** o presione la tecla **Entrada**.
   Cuando la búsqueda ha terminado, aparece la [ventana de resultados](#results-window) indicando los elementos encontrados.

:::note

You can cancel an extensive search that is underway using the **x** button; this does not close the window or remove any results that were found.

:::

Once you have executed a search, the value entered in the search area is saved in memory. Este valor, así como todos los demás valores introducidos durante la misma sesión, pueden seleccionarse en el combo box.

### Buscar

You specify the type of element to look for using the **Find** menu. Las siguientes opciones están disponibles:

- **Text**: In this case, 4D looks for a character string throughout the Design environment. The search is done in plain text mode, without taking the context into account. For example, you can look for the text "ALERT("Error number:"+" or "button27". En este modo, no puede utilizar el caracter comodín porque "@" se considera un caracter estándar.
- **Comment**: This search is basically the same as the previous one, but it is restricted to the contents of comments (lines beginning with //) in the code and in the Explorer window. For example, you can search for any comments containing the string "To be verified".

:::note

El resultado final de ambos tipos de búsqueda depende del [modo de búsqueda](#search-mode) seleccionado.

:::

- **Language expression**: Used to search for any valid 4D expression; the search is performed in the "contains" search mode. La validez es importante porque 4D debe ser capaz de evaluar una expresión para poder buscarla. For example, a search for "[clients" (invalid expression) will not return any result whereas "[clients]" is correct. This option is particularly suitable for searches for value assignments and comparisons. Por ejemplo:
  - Buscar "myvar:=" (asignación)
  - Buscar "myvar=" (comparación)
- **Language element**: Used to search for a specific language element by its name. 4D can distinguish between the following elements:
  - **Cualquier elemento del lenguaje**: todo elemento de la lista de abajo.
  - **Método proyecto o clase**: nombre de un método proyecto o clase, por ejemplo "M_Add" o "EmployeeEntity".
  - **Form:** Form name, for example "Input". El comando busca entre formularios proyecto y formularios tabla.
  - **Field or Table**: Name of a table or field, for example "Customers".
  - **Variable**: Any variable name, such as "$myvar".
    **4D constant**: Any constant, such as "Is Picture".
    **String in quotes**: Literal text constant; i.e. any value within quotes in the code editor or inserted into text areas of the Form editor (static text or group boxes). For example, a search for "Martin" will return results if your code contains the line: `ds.Customer.query("name = :1"; "Martin")`
  - **4D command**: Any 4D command, for example "Alert".
  - **Plug-in command**: Plug-in command installed in the application.
  - **Properties**: An object property name (includes ORDA attribute names). For example "lastname" will find "$o.lastname" and "ds.Employee.lastname".
- **Any object**: This option searches among all the elements in the Design environment. Only the modification date filter is available. Use this option, for example, to search for "anything modified today".

### Modo de búsqueda

The search mode menu (i.e. "which", "that is" or "whose name") specifies how to search for the value that is entered. The contents of this menu vary according to the type of element to search for as selected in the **Find** dropdown list.

- Opciones de búsqueda de Texto o Comentario:
  - **contains**: Searches all text in the Design environment for the specified string. Search results for "var" can include "myvar", "variable1" or "aVariable".
  - **contiene la palabra completa**: busca en todo el texto del entorno Diseño la cadena como palabra entera. Los resultados de la búsqueda de "var" sólo incluyen apariciones exactas. They will not include "myvar" but will include, for example, "var:=10" or "ID+var" because the symbols : or + are word separators.
  - **begins with / ends with**: Searches for the string at the beginning or end of the word (text search) or at the beginning or end of the comment line (comment search). En modo "El texto termina en", si busca "var" encontrará "myvar".
- Search options for Language element: The menu offers standard options (matches, contains, begins with, ends with). Note that you can use the search wildcard (@) with the matches option (returns all objects of the type specified).

### Search in components

When your current project references [editable components](../Extensions/develop-components.md#editing-components), you can designate one or all your components as a target for the search. By default, a search is executed in the host only. To modify the target for a search, deploy the **in the project** menu:

![](../assets/en/Project/find-components.png)

Puede seleccionar como objetivo:

- the **host project** (default option, top of the list): the search will only be executed within the host project code and forms, excluding components.
- the **host project and all its components**: the search will be executed in the host project and in all its loaded components.
- a **specific component**, among the list of all searchable components: the search will be restricted to this component only, excluding the host and other components.

:::note

Si no se encuentra ningún componente de búsqueda, no hay menú disponible.

:::

The **in the folder** menu (see below) is updated when you select a project since the availability of folders depends on the selected search target(s). The menu is hidden when you select the "host project and all its components" option.

### Folder

The **in the folder** menu restricts the search to a specific folder of the project. By default ("Top Level" option), the search takes place in all the folders.

:::note

Folders are defined on the Home Page of the Explorer.

:::

### Fecha de modificación del padre

This menu restricts the search with respect to the creation/modification date of its parent (for example, the method containing the string being searched for). In addition to standard date criteria (is, is before, is after, is not), this menu also contains several options to let you quickly specify a standard search period:

- **is today**: Period beginning at midnight (00:00 h) of the current day.
- **is since yesterday**: Period including the current day and the previous one.
- **is this week**: Period beginning on Monday of the current week.
- **is this month**: Period beginning on the 1st day of the current month.

### Opciones de búsqueda

Puede seleccionar opciones que le ayuden a agilizar sus búsquedas:

- **Búsqueda en formularios**: cuando se deselecciona esta opción, la búsqueda se realiza en todo el proyecto, excepto en formularios.
- **Search in methods**: When this option is deselected, the search is done throughout the project, except in methods.
- **Case Sensitive**: When this option is selected, the search uses the case of the characters as they have been entered in the Find area.

## Results window

La ventana Resultados lista todos los elementos encontrados que coinciden con los criterios de búsqueda establecidos mediante distintos tipos de búsqueda:

- [búsqueda estándar](#starting-a-search)
- [search for unused elements](#find-unused-methods-and-global-variables)
- [search for callers](../code-editor/write-class-method.md#search-callers)
- search for dependencies
- [renaming of project methods and variables](#renaming-project-methods-and-variables)

It shows the results as a hierarchical list organized by type of elements found. You can expand or collapse all the hierarchical items in the list using the options menu (found at the bottom left of the window) or in the context menu.

![](../assets/en/Project/result-window.png)

You can double-click on a line in this window to view the element in its editor, such as the [code editor](../code-editor/write-class-method.md). Si realiza varias búsquedas, cada búsqueda abre su propia ventana de resultados, dejando abiertas las ventanas de resultados anteriores.

When more than one occurrence has been found, the list indicates their **count** next to the element name.

Each line can display a tip that provides additional information, for example the element property that matches the criteria, or the number of the form page that contains the occurrence.

When an element found belongs to a component, the **component name** is displayed in parenthesis at the right side of the element name:

![](../assets/en/Project/find-components-results.png)

Once a search is completed, you can use the ![](../assets/en/Project/result-window-re.png) button to perform the search again with the same criteria and options.

### Options menu

Puede realizar varias acciones utilizando el menú opciones:

![](../assets/en/Project/result-window-menu.png)

- **Remove from list**: removes selected item(s) from the results window. More specifically, this lets you keep only items targeted by a replacement operation in the contents or used for drag and drop between applications.
- **Remove all items from list except selection**: clears everything from the results window except for the selected item(s).
- [**Reemplazar en contenido**](#replace-in-contents): reemplaza una cadena de caracteres dentro del elemento o elementos seleccionados.
- **Select >**: selects one type of item (project methods, object names, and so on) from among all the items found in the Results window. The hierarchical sub-menu also provides commands to select (All) or deselect (None) all the items at once.
- **Contraer todo/Expandir todo**: expande o contrae todos los elementos jerárquicos de la lista de resultados.
- **Exportar resultados**: exporta información sobre los criterios de búsqueda y los elementos que aparecen en la ventana Resultados. Este archivo de texto puede importarse a una hoja de cálculo como Excel, por ejemplo. For each item, the following information is exported as tab-separated values in a text file:
  - Proyecto anfitrión o nombre del componente
  - Type (method, Class, formObject, trigger...)
  - Path
  - Property (if accurate): provides the property of the object that matches the criteria. For example, a string could be found in a variable name (variable property) and an object name (name property) within in the same form. This field is empty when the matching element is the object itself.
  - Contents (if accurate): provides the contents that actually matches the criteria; for example, the code line that contains the requested string.
  - Número de línea (para código) o número de página (para objetos de formulario)

## Replace in content

The Replace in content function allows you to replace one character string with another within the listed objects in the Results window. It is available in the [options menu](#options-menu) of the window.

:::note

La opción de menú **Reemplazar en contenido** está desactivada si trabaja en una base de datos de sólo lectura (por ejemplo, en un archivo .4dz).

:::

When you select this command, a dialog box appears where you enter the character string that will replace all the occurrences found by the initial search:

![](../assets/en/Project/replace-content.png)

Las operaciones de sustitución funcionan del siguiente modo:

- Replacing is always carried out among all items found in the list and not just for a selection. However, it is possible to narrow the replacing operation by first reducing the contents of the list using the **Remove from list** or **Remove all items from list except selection** commands in the [options menu](#options-menu) or the contextual menu.
- Si la ventana Resultados incluye elementos de componentes, la sustitución se realizará también en el componente o componentes.
- Only the occurrences shown in the list will be replaced and only after checking the initial search criteria for cases where objects were modified between the initial search and the replacing operation.
- Replacing is done in the code, properties of form objects, contents of help messages, entry filters, menu items (item text and method calls), choice lists, comments.
- Para cada objeto modificado, 4D comprueba si ya está cargado por otra máquina o en otra ventana. In the case of conflict, a standard dialog box appears indicating that the object is locked. You can close the object and then try again or cancel its replacement. The replacing operation will then continue with the other objects in the list.
- If a method or form concerned by a "replace in content" operation is currently being edited by the same 4D application, it will be modified directly in the open editor (no warning appears). Forms and methods modified in this way are not saved automatically: you will need to use the **Save** or **Save All** command explicitly to validate the changes.
- After a replacement is made in a list item, it will appear in italics. A count of replacements made in real time appears at the bottom of the window.
- Los elementos nunca son renombrados por la función **Reemplazar en contenido**, excepto los objetos formulario. Por lo tanto, es posible que ciertos elementos de la lista no se vean afectados por la operación de reemplazo. Esto puede ocurrir cuando sólo el nombre del artículo corresponde a los criterios de búsqueda iniciales. In this case, the list items do not necessarily all appear in italics and the final replacement count may be less than the number of occurrences found by the initial search.

## Renombrar métodos y variables del proyecto

4D provides a dedicated renaming function with distribution throughout the entire project for project methods and variables.

The **Rename...** command is available from the [Code editor] (for project methods and variables) and the Explorer context menu (for project methods).

![](../assets/en/Project/rename.png)

When you select this command, a dialog box appears where you enter the new name for the object:

![](../assets/en/Project/rename-dial.png)

The new name must comply with [naming rules](../Concepts/identifiers.md); otherwise a warning appears when you validate the dialog box. For example, you cannot rename a method with a command name such as "Alert".

Depending on the type of object you are renaming (project method or variable), the renaming dialog box may also contain a distribution option:

- Project method: The **Update callers in whole database** option renames the method in all the project code that references it. También puede desmarcar esta opción para, por ejemplo, renombrar el método solo en el propio Explorador.
- Process variable: The **Rename variable in whole database** option renames the variable in all the project code that references it. If you uncheck this option, the variable is only renamed in the current method.
- Local variable: No distribution option for this object; the variable is only renamed in the current method or class.

## Búsqueda de elementos no utilizados

Two specific search commands allow you to detect variables and methods that are not used in the code of your host project. You can then remove them to free up memory. These commands are found in the **Edit** menu of the Design environment.

### Find Unused Methods and Global Variables

This command looks for project methods as well as "global" variables (process and interprocess variables) that are declared but not used. Los resultados de la búsqueda aparecen en una [ventana de resultados](#results-window).

A project method is considered to be unused when:

- it is not in the Trash,
- it is not called anywhere in the 4D code,
- no es llamado por un comando de menú,
- it is not called as a string constant in the 4D code (4D detects a method name in a string even when it is followed by parameters in parentheses).

A process or interprocess variable is considered to be unused when:

- it is [declared](../Concepts/variables.md#declaring-variables) in the 4D code,
- it is not used anywhere else in the 4D code,
- no se utiliza en ningún objeto de formulario.

Note that certain uses cannot be detected by the function - i.e. an element considered unused may in fact be used. Este es el caso del siguiente código:

```4d
var v : Text :="method"
EXECUTE FORMULA("my"+v+String(42))
```

Este código construye un nombre de método. The *mymethod42* project method is considered unused when in fact it is called. Therefore, it is advisable to check that the elements declared as unused are in fact unnecessary before you remove them.

### Buscar variables locales no utilizadas

This command looks for local variables that are declared but not used. Los resultados de la búsqueda aparecen en una [ventana de resultados](#results-window).

A local variable is considered to be unused when:

- it is [declared](../Concepts/variables.md#declaring-variables) in the 4D code,
- it is not used anywhere else within the same method.

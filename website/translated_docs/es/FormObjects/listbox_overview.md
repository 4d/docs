---
id: listboxOverview
title: List Box
---


List boxes are complex active objects that allow displaying and entering data as synchronized columns. They can be bound to database contents such as entity selections and record sections, or to any language contents such as collections and arrays. They include advanced features regarding data entry, column sorting, event management, customized appearance, moving of columns, etc.

![](assets/en/FormObjects/listbox.png)

A list box contains one or more columns whose contents are automatically synchronized. The number of columns is, in theory, unlimited (it depends on the machine resources).

## Generalidades

### Basic user features

During execution, list boxes allow displaying and entering data as lists. To make a cell editable ([if entry is allowed for the column](#managing-entry)), simply click twice on the value that it contains:

![](assets/en/FormObjects/listbox_edit.png)

Users can enter and display the text on several lines within a list box cell. To add a line break, press **Ctrl+Carriage return** on Windows or **Option+Carriage return** on macOS.

Booleans and pictures can be displayed in cells, as well as dates, times, or numbers. It is possible to sort column values by clicking on a header ([standard sort](#managing-sorts)). All columns are automatically synchronized.

It is also possible to resize each column, and the user can modify the order of [columns](properties_ListBox.md#locked-columns-and-static-columns) and [rows](properties_Action.md#movable-rows) by moving them using the mouse, if this action is authorized. Note that list boxes can be used in [hierarchical mode](#hierarchical-list-boxes).

The user can select one or more rows using the standard shortcuts: **Shift+click** for an adjacent selection and **Ctrl+click** (Windows) or **Command+click** (macOS) for a non-adjacent selection.


### List box parts

A list box is composed of four distinct parts:

*   the list box object in its entirety,
*   columns,
*   column headers, and
*   column footers.

![](assets/en/FormObjects/listbox_parts.png)

Each part has its own name as well as specific properties. For example, the number of columns or the alternating color of each row is set in the list box object properties, the width of each column is set in the column properties, and the font of the header is set in the header properties.

It is possible to add an object method to the list box object and/or to each column of the list box. Object methods are called in the following order:

1. Object method of each column
2. Object method of the list box

The column object method gets events that occur in its [header](#list-box-headers) and [footer](#list-box-footers).



### List box types

There are several types of list boxes, with their own specific behaviors and properties. The list box type depends on its [Data Source property](properties_Object.md#data-source):

- **Arrays**: each column is bound to a 4D array. Array-based list boxes can be displayed as [hierarchical list boxes](listbox_overview.md#hierarchical-list-boxes).
- **Selection** (**Current selection** or **Named selection**): each column is bound to an expression (e.g. a field) which is evaluated for every record of the selection.
- **Collection or Entity selection**: each column is bound to an expression which is evaluated for every element of the collection or every entity of the entity selection.
> It is not possible to combine different list box types in the same list box object. The data source is set when the list box is created. It is then no longer possible to modify it by programming.


### Managing list boxes

You can completely configure a list box object through its properties, and you can also manage it dynamically through programming.

The 4D Language includes a dedicated "List Box" theme for list box commands, but commands from various other themes, such as "Object properties" commands or `EDIT ITEM`, `Displayed line number` commands can also be used. Refer to the [List Box Commands Summary](https://doc.4d.com/4Dv17R6/4D/17-R6/List-Box-Commands-Summary.300-4311159.en.html) page of the *4D Language reference* for more information.



## Objetos tipo List box

### List box de tipo array

En un list box de tipo array, cada columna debe estar asociada a un array unidimensional 4D; se pueden utilizar todos los tipos de array, a excepción de los arrays de punteros. The number of rows is based on the number of array elements.

By default, 4D assigns the name "ColumnX" to each column. You can change it, as well as other column properties, in the [column properties](listbox_overview.md#column-specific-properties). The display format for each column can also be defined using the `OBJECT SET FORMAT` command.
> Array type list boxes can be displayed in [hierarchical mode](listbox_overview.md#hierarchical-list-boxes), with specific mechanisms.

Con los list box de tipo array, los valores introducidos o mostrados se gestionan utilizando el lenguaje 4D. You can also associate a [choice list](properties_DataSource.md#choice-list) with a column in order to control data entry. Los valores de las columnas se gestionan mediante comandos de alto nivel del tema List box (como `LISTBOX INSERT ROWS` o `LISTBOX DELETE ROWS`), así como comandos de manipulación de arrays. Por ejemplo, para inicializar el contenido de una columna, puede utilizar la siguiente instrucción:

```4d
ARRAY TEXT(varCol;size)
```

También puede utilizar una lista:

```4d
LIST TO ARRAY("ListName";varCol)
```
> **Atención**: cuando un objeto List box contiene varias columnas de diferentes tamaños, sólo se mostrará el número de elementos del array (columna) más pequeño. Debe asegurarse de que cada array tenga el mismo número de elementos que los demás. Además, si una columna del list box está vacía (esto ocurre cuando el array asociado no fue declarado o dimensionado correctamente con el lenguaje), el list box no muestra nada.




### List box de tipo selección

En este tipo de list box, cada columna puede estar asociada a un campo (por ejemplo `[Employees]LastName)` o a una expresión. The expression can be based on one or more fields (for example, `[Employees]FirstName+" "[Employees]LastName`) or it may simply be a formula (for example `String(Milliseconds)`). The expression can also be a project method, a variable or an array item. You can use the `LISTBOX SET COLUMN FORMULA` and `LISTBOX INSERT COLUMN FORMULA` commands to modify columns programmatically.

The contents of each row is then evaluated according to a selection of records: the **current selection** of a table or a **named selection**.

In the case of a list box based on the current selection of a table, any modification done from the database side is automatically reflected in the list box, and vice versa. The current selection is therefore always the same in both places.


### List box colección o entity selection

In this type of list box, each column must be associated to an expression. The contents of each row is then evaluated per collection element or per entity of the entity selection.

Each element of the collection or each entity is available as an object that can be accessed through the [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html) command. A column expression can be a project method, a variable, or any formula, accessing each entity or collection element object through `This`, for example `This.<propertyPath>` (or `This.value` in case of a collection of scalar values). You can use the `LISTBOX SET COLUMN FORMULA` and `LISTBOX INSERT COLUMN FORMULA` commands to modify columns programmatically.

When the data source is an entity selection, any modifications made on the list box side are automatically saved in the database. On the other hand, modifications made on the database side are visible in the list box after touched entities have been reloaded.

When the data source is a collection, any modifications made in the list box values are reflected in the collection. On the other hand, if modifications are done on the collection using for example the various methods of the *Collections* theme, you will need to explicitely notify 4D by reassigning the collection variable to itself, so that the list box contents is refreshed. Por ejemplo:

```4d
myCol:=myCol.push("new value") //display new value in list box
```



### Propiedades soportadas

Las propiedades soportadas dependen del tipo de list box.


| Propiedad                                                                                 | List box array | List box selección | List box colección o entity selection |
| ----------------------------------------------------------------------------------------- | -------------- | ------------------ | ------------------------------------- |
| [Color de fondo alternado](properties_BackgroundAndBorder.md#alternate-background-color)  | X              | X                  | X                                     |
| [Color de fondo](properties_BackgroundAndBorder.md#background-color)                      | X              | X                  | X                                     |
| [Negrita](properties_Text.md#bold)                                                        | X              | X                  | X                                     |
| [Expresión color de fondo](properties_BackgroundAndBorder.md#background-color-expression) |                | X                  | X                                     |
| [Estilo del borde](properties_BackgroundAndBorder.md#border-line-style)                   | X              | X                  | X                                     |
| [Abajo](properties_CoordinatesAndSizing.md#bottom)                                        | X              | X                  | X                                     |
| [Class](properties_Object.md#css-class)                                                   | X              | X                  | X                                     |
| [Collection o entity selection](properties_Object.md#collection-or-entity-selection)      |                | X                  | X                                     |
| [Redimensionamiento columnas auto](properties_ResizingOptions.md#column-auto-resizing)    | X              | X                  | X                                     |
| [Elemento actual](properties_DataSource.md#current-item)                                  |                |                    | X                                     |
| [Posición elemento actual](properties_DataSource.md#current-item-position)                |                |                    | X                                     |
| [Fuente de datos](properties_Object.md#data-source)                                       | X              | X                  | X                                     |
| [Nombre formulario detallado](properties_ListBox.md#detail-form-name)                     |                | X                  |                                       |
| [Mostrar encabezados](properties_Headers.md#display-headers)                              | X              | X                  | X                                     |
| [Mostrar pies](properties_Footers.md#display-footers)                                     | X              | X                  | X                                     |
| [Doble clic en línea](properties_ListBox.md#double-click-on-row)                          |                | X                  |                                       |
| [Arrastrable](properties_Action.md#droppable)                                             | X              | X                  | X                                     |
| [Soltable](properties_Action.md#droppable)                                                | X              | X                  | X                                     |
| [Focusable](properties_Entry.md#focusable)                                                | X              | X                  | X                                     |
| [Fuente](properties_Text.md#font)                                                         | X              | X                  | X                                     |
| [Color de fuente](properties_Text.md#font_color)                                          | X              | X                  | X                                     |
| [Expresión color fuente](properties_Text.md#font-color-expression)                        |                | X                  | X                                     |
| [Tamaño fuente](properties_Text.md#font-size)                                             | X              | X                  | X                                     |
| [Alto (list box)](properties_CoordinatesAndSizing.md#height)                              | X              | X                  | X                                     |
| [Alto (encabezados)](properties_Headers.md#height)                                        | X              | X                  | X                                     |
| [Alto (pies)](properties_Footers.md#height)                                               | X              | X                  | X                                     |
| [Ocultar líneas vacías finales](properties_BackgroundAndBorder.md#hide-extra-blank-rows)  | X              | X                  | X                                     |
| [Ocultar rectángulo de enfoque](properties_Appearance.md#hide-focus-rectangle)            | X              | X                  | X                                     |
| [Ocultar resaltado selección](properties_Appearance.md#hide-selection-highlight)          | X              | X                  | X                                     |
| [List box jerárquico](properties_Object.md#hierarchical-list-box)                         | X              |                    |                                       |
| [Conjunto resaltado](properties_ListBox.md#highlight-set)                                 |                | X                  |                                       |
| [Alineación horizontal](properties_Text.md#horizontal-alignment)                          | X              | X                  | X                                     |
| [Color líneas horizontales](properties_Gridlines.md#horizontal-line-color)                | X              | X                  | X                                     |
| [Barra de desplazamiento horizontal](properties_Appearance.md#horizontal-scroll-bar)      | X              | X                  | X                                     |
| [Dimensionamiento horizontal](properties_ResizingOptions.md#horizontal-sizing)            | X              | X                  | X                                     |
| [Itálica](properties_Text.md#italic)                                                      | X              | X                  | X                                     |
| [Izquierda](properties_CoordinatesAndSizing.md#left)                                      | X              | X                  | X                                     |
| [Tabla principal](properties_DataSource.md#table)                                         |                | X                  |                                       |
| [Meta info expression](properties_Text.md#meta-info-expression)                           |                |                    | X                                     |
| [Método](properties_Action.md#method)                                                     | X              | X                  | X                                     |
| [Líneas desplazables](properties_Action.md#movable-rows)                                  | X              |                    |                                       |
| [Selección temporal](properties_DataSource.md#selectionName)                              |                | X                  |                                       |
| [Número de columnas](properties_ListBox.md#number-of-columns)                             | X              | X                  | X                                     |
| [Número de columnas bloqueadas](properties_ListBox.md#number-of-locked-columns)           | X              | X                  | X                                     |
| [Número de columnas estáticas](properties_ListBox.md#number-of-static-columns)            | X              | X                  | X                                     |
| [Nombre del objeto](properties_Object.md#object-name)                                     | X              | X                  | X                                     |
| [Derecha](properties_CoordinatesAndSizing.md#right)                                       | X              | X                  | X                                     |
| [Array colores de fondo](properties_BackgroundAndBorder.md#row-background-color-array)    | X              |                    |                                       |
| [Array de control de líneas](properties_ListBox.md#row-control-array)                     | X              |                    |                                       |
| [Array colores de fuente](properties_Text.md#row-font-color-array)                        | X              |                    |                                       |
| [Altura de las líneas](properties_CoordinatesAndSizing.md#row-height)                     | X              |                    |                                       |
| [Array altura de las líneas](properties_CoordinatesAndSizing.md#row-height-array)         | X              |                    |                                       |
| [Array de estilos](properties_Text.md#row-style-array)                                    | X              |                    |                                       |
| [Elementos seleccionados](properties_DataSource.md#selected-items)                        |                |                    | X                                     |
| [Modo de selección](properties_ListBox.md#selection-mode)                                 | X              | X                  | X                                     |
| [Edición con un solo clic](properties_Entry.md#single-click-edit)                         | X              | X                  | X                                     |
| [Ordenable](properties_Action.md#sortable)                                                | X              | X                  | X                                     |
| [Acción estándar](properties_Action.md#standard-action)                                   | X              |                    |                                       |
| [Expresión estilo](properties_Text.md#style-expression)                                   |                | X                  | X                                     |
| [Arriba](properties_CoordinatesAndSizing.md#top)                                          | X              | X                  | X                                     |
| [Transparente](properties_BackgroundAndBorder.md#transparent)                             | X              | X                  | X                                     |
| [Tipo](properties_Object.md#type)                                                         | X              | X                  | X                                     |
| [Subrayado](properties_Text.md#underline)                                                 | X              | X                  | X                                     |
| [Variable o expresión](properties_Object.md#variable-or-expression)                       | X              | X                  |                                       |
| [Alineamiento vertical](properties_Text.md#vertical-alignment)                            | X              | X                  | X                                     |
| [Color líneas verticales](properties_Gridlines.md#vertical-line-color)                    | X              | X                  | X                                     |
| [Barra de desplazamiento vertical](properties_Appearance.md#vertical-scroll-bar)          | X              | X                  | X                                     |
| [Dimensionamiento vertical](properties_ResizingOptions.md#vertical-sizing)                | X              | X                  | X                                     |
| [Visibilidad](properties_Display.md#visibility)                                           | X              | X                  | X                                     |
| [Ancho](properties_CoordinatesAndSizing.md#width)                                         | X              | X                  | X                                     |


> Las columnas, los encabezados y los pies de list box soportan propiedades específicas.


### Eventos formulario soportados


| Evento formulario    | Propiedades adicionales devueltas (ver [Evento formulario](https://doc.4d.com/4Dv18/4D/18/FORM-Event.301-4522191.en.html) para las propiedades principales) | Comentarios                                                                            |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| On After Edit        | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                 |                                                                                        |
| On After Keystroke   | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                 |                                                                                        |
| On After Sort        | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[headerName](#additional-properties)</li>                                                                                 | *Compound formulas cannot be sorted. <br>(e.g., This.firstName + This.lastName)* |
| On Alternative Click | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                               | *Arrays list boxes only*                                                               |
| On Before Data Entry | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              |                                                                                        |
| On Before Keystroke  | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              |                                                                                        |
| On Begin Drag Over   | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              |                                                                                        |
| On Clicked           | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              |                                                                                        |
| On Close Detail      | <li>[row](#additional-properties)</li>                                                                                                                                  | *Current Selection & Named Selection list boxes only*                                  |
| On Collapse          | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              | *Hierarchical list box only*                                                           |
| On Column Moved      | <li>[columnName](#additional-properties)</li><li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                              |                                                                                        |
| On Column Resize     | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[newSize](#additional-properties)</li><li>[oldSize](#additional-properties)</li>                                                    |                                                                                        |
| On Data Change       | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              |                                                                                        |
| On Delete Action     | <li>[row](#additional-properties)</li>                                                                                                                                  |                                                                                        |
| On Display Detail    | <li>[isRowSelected](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                                        |                                                                                        |
| On Double Clicked    | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              |                                                                                        |
| On Drag Over         | <li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                          |                                                                                        |
| On Drop              | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              |                                                                                        |
| On Expand            | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              | *Hierarchical list box only*                                                           |
| On Footer Click      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[footerName](#additional-properties)</li>                                                                              | *Arrays, Current Selection & Named Selection list boxes only*                          |
| On Getting Focus     | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              | *Additional properties returned only when editing a cell*                              |
| On Header Click      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[headerName](#additional-properties)</li>                                                                              |                                                                                        |
| On Load              |                                                                                                                                                             |                                                                                        |
| On Losing Focus      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              | *Additional properties returned only when editing a cell has been completed*           |
| On Mouse Enter       | <li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                          |                                                                                        |
| On Mouse Leave       |                                                                                                                                                             |                                                                                        |
| On Mouse Move        | <li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                          |                                                                                        |
| On Open Detail       | <li>[row](#additional-properties)</li>                                                                                                                                  | *Current Selection & Named Selection list boxes only*                                  |
| On Row Moved         | <li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                                                        | *Arrays list boxes only*                                                               |
| On Selection Change  |                                                                                                                                                             |                                                                                        |
| On Scroll            | <li>[horizontalScroll](#additional-properties)</li><li>[verticalScroll](#additional-properties)</li>                                                                                                        |                                                                                        |
| On Unload            |                                                                                                                                                             |                                                                                        |


#### Propiedades adicionales

Los eventos formulario de los objetos list box o columnas de list box pueden devolver las siguientes propiedades adicionales:

| Propiedad        | Tipo         | Descripción                                                           |
| ---------------- | ------------ | --------------------------------------------------------------------- |
| area             | texto        | List box object area ("header", "footer", "cell")                     |
| areaName         | texto        | Name of the area                                                      |
| column           | entero largo | Column number                                                         |
| columnName       | texto        | Name of the column                                                    |
| footerName       | texto        | Name of the footer                                                    |
| headerName       | texto        | Name of the header                                                    |
| horizontalScroll | entero largo | Positive if scroll is towards the right, negative if towards the left |
| isRowSelected    | booleano     | True if row is selected, else False                                   |
| newPosition      | entero largo | New position of the column or row                                     |
| newSize          | entero largo | New size (in pixels) of the column or row                             |
| oldPosition      | entero largo | Previous position of the column or row                                |
| oldSize          | entero largo | Previous size (in pixels) of the column or row                        |
| row              | entero largo | Row number                                                            |
| verticalScroll   | entero largo | Positive if scroll is towards the bottom, negative if towards the top |
> If an event occurs on a "fake" column or row that doesn't exist, an empty string is typically returned.






## Columnas de list box

A list box is made of one or more column object(s) which have specific properties. You can select a list box column in the Form editor by clicking on it when the list box object is selected:

![](assets/en/FormObjects/listbox_column.png)

You can set standard properties (text, background color, etc.) for each column of the list box; these properties take priority over those of the list box object properties.
> You can define the [Expression type](properties_Object.md#expression-type) for array list box columns (String, Text, Number, Date, Time, Picture, Boolean, or Object).


### Propiedades específicas de la columna

[Alpha Format](properties_Display.md#alpha-format) - [Alternate Background Color](properties_BackgroundAndBorder.md#alternate-background-color) - [Automatic Row Height](properties_CoordinatesAndSizing.md#automatic-row-height) - [Background Color](properties_Text.md#background-color) - [Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression) - [Bold](properties_Text.md#bold) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Data Type (selection and collection list box column)](properties_DataSource.md#data-type) - [Date Format](properties_Display.md#date-format) - [Default Values](properties_DataSource.md#default-values) - [Display Type](properties_Display.md#display-type) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Excluded List](properties_RangeOfValues.md#excluded-list) - [Expression](properties_DataSource.md#expression) - [Expression Type (array list box column)](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Italic](properties_Text.md#italic) - [Invisible](properties_Display.md#visibility) - [Maximum Width](properties_CoordinatesAndSizing.md#maximum-width) - [Method](properties_Action.md#method) - [Minimum Width](properties_CoordinatesAndSizing.md#minimum-width) - [Multi-style](properties_Text.md#multi-style) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Picture Format](properties_Display.md#picture-format) - [Resizable](properties_ResizingOptions.md#resizable) - [Required List](properties_RangeOfValues.md#required-list) - [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) - [Row Font Color Array](properties_Text.md#row-font-color-array) - [Row Style Array](properties_Text.md#row-style-array) - [Save as](properties_DataSource.md#save-as) - [Style Expression](properties_Text.md#style-expression) - [Text when False/Text when True](properties_Display.md#text-when-false-text-when-true) - [Time Format](properties_Display.md#time-format) - [Truncate with ellipsis](properties_Display.md#truncate-with-ellipsis) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)

### Eventos formulario soportados

| Evento formulario    | Propiedades adicionales devueltas (ver [Evento formulario](https://doc.4d.com/4Dv18/4D/18/FORM-Event.301-4522191.en.html) para las propiedades principales) | Comentarios                                                                            |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| On After Edit        | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              |                                                                                        |
| On After Keystroke   | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              |                                                                                        |
| On After Sort        | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[headerName](#additional-properties)</li>                                                                              | *Compound formulas cannot be sorted. <br>(e.g., This.firstName + This.lastName)* |
| On Alternative Click | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              | *Arrays list boxes only*                                                               |
| On Before Data Entry | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              |                                                                                        |
| On Before Keystroke  | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                              |                                                                                        |
| On Begin Drag Over   | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                           |                                                                                        |
| On Clicked           | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                           |                                                                                        |
| On Column Moved      | <li>[columnName](#additional-properties)</li><li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                           |                                                                                        |
| On Column Resize     | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[newSize](#additional-properties)</li><li>[oldSize](#additional-properties)</li>                                                |                                                                                        |
| On Data Change       | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                           |                                                                                        |
| On Double Clicked    | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                           |                                                                                        |
| On Drag Over         | <li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                     |                                                                                        |
| On Drop              | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                           |                                                                                        |
| On Footer Click      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[footerName](#additional-properties)</li>                                                                           | *Arrays, Current Selection & Named Selection list boxes only*                          |
| On Getting Focus     | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                           | *Additional properties returned only when editing a cell*                              |
| On Header Click      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[headerName](#additional-properties)</li>                                                                           |                                                                                        |
| On Load              |                                                                                                                                                             |                                                                                        |
| On Losing Focus      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                           | *Additional properties returned only when editing a cell has been completed*           |
| On Row Moved         | <li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                                                      | *Arrays list boxes only*                                                               |
| On Scroll            | <li>[horizontalScroll](#additional-properties)</li><li>[verticalScroll](#additional-properties)</li>                                                                                                      |                                                                                        |
| On Unload            |                                                                                                                                                             |                                                                                        |


## Encabezados de list box

> Para poder acceder a las propiedades de los encabezados de un list box, debe activar la opción [Mostrar encabezados](properties_Headers.md#display-headers) del list box.

Cuando se muestran los encabezados, puede seleccionar un encabezado en el editor de formularios haciendo clic en él cuando el objeto List box esté seleccionado:

![](assets/en/FormObjects/listbox_header.png)

Puede definir propiedades de texto estándar para cada encabezado de columna de List box; en este caso, estas propiedades tienen prioridad sobre las de la columna o del propio List box.


Además, tiene acceso a las propiedades específicas de los encabezados. Specifically, an icon can be displayed in the header next to or in place of the column title, for example when performing [customized sorts](#managing-sorts).

![](assets/en/FormObjects/lbHeaderIcon.png)

At runtime, events that occur in a header are generated in the [list box column object method](#object-methods).

When the `OBJECT SET VISIBLE` command is used with a header, it is applied to all headers, regardless of the individual element set by the command. For example, `OBJECT SET VISIBLE(*;"header3";False)` will hide all headers in the list box object to which *header3* belongs and not simply this header.

### Propiedades específicas de los encabezados

[Negrita](properties_Text.md#bold) - [Clase Css](properties_Object.md#css-class) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Mensaje de ayuda](properties_Help.md#help-tip) - [Alineación horizontal](properties_Text.md#horizontal-alignment) - [Icon Location](properties_TextAndPicture.md#icon-location) - [Itálica](properties_Text.md#italic) - [Nombre de objeto](properties_Object.md#object-name) - [Ruta de acceso](properties_TextAndPicture.md#picture-pathname) - [Título](properties_Object.md#title) - [Subrayado](properties_Text.md#underline) - [Variable o Expresión](properties_Object.md#variable-or-expression) - [Alineación vertical](properties_Text.md#vertical-alignment) - [Ancho](properties_CoordinatesAndSizing.md#width)





## Pies de list box
> Para poder acceder a las propiedades de los pies de un list box, debe activar la opción [Mostrar pies](properties_Footers.md#display-footers).

Los List box pueden contener "pies de página" no editables, que muestren información adicional. En el caso de los datos mostrados en forma de tabla, los pies de página suelen utilizarse para mostrar cálculos como los totales o los promedios.

Cuando se muestran los pies, puede hacer clic para seleccionar un pie de list box en el editor de formularios haciendo clic en el objeto:

![](assets/en/FormObjects/listbox_footers.png)

Para cada pie de columna de list box, puede definir propiedades de texto estándar: en este caso, estas propiedades tienen prioridad sobre las de la columna o del list box. You can also access specific properties for footers. In particular, you can insert a [custom or automatic calculation](properties_Object.md#variable-calculation).

At runtime, events that occur in a footer are generated in the [list box column object method](#object-methods).

When the `OBJECT SET VISIBLE` command is used with a footer, it is applied to all footers, regardless of the individual element set by the command. For example, `OBJECT SET VISIBLE(*;"footer3";False)` will hide all footers in the list box object to which *footer3* belongs and not simply this footer.

### Propiedades específicas de los pies


[Alpha Format](properties_Display.md#alpha-format) - [Background Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Bold](properties_Text.md#bold) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Italic](properties_Text.md#italic) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Picture Format](properties_Display.md#picture-format) - [Time Format](properties_Display.md#time-format) - [Truncate with ellipsis](properties_Display.md#truncate-with-ellipsis) - [Underline](properties_Text.md#underline) - [Variable Calculation](properties_Object.md#variable-calculation) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)


## Managing entry

For a list box cell to be enterable, both of the following conditions must be met:

- The cell’s column must have been set as [Enterable](properties_Entry.md#enterable) (otherwise, the cells of the column can never be enterable).
- In the `On Before Data Entry` event, $0 does not return -1. When the cursor arrives in the cell, the `On Before Data Entry` event is generated in the column method. Si, en el contexto de este evento, $0 se define como -1, la celda se considera como no editable. Si el evento se generó después de presionar **Tab** o **Mayús+Tab**, el foco pasa a la siguiente celda o a la anterior, respectivamente. Si $0 no es -1 (por defecto $0 es 0), la celda se puede introducir y pasa al modo de edición.

Let’s consider the example of a list box containing two arrays, one date and one text. The date array is not enterable but the text array is enterable if the date has not already past.

![](assets/en/FormObjects/listbox_entry.png)

Here is the method of the *arrText* column:

```4d
 Case of
    :(FORM event.code=On Before Data Entry) // una celda obtiene el foco
     LISTBOX GET CELL POSITION(*;"lb";$col;$row)
  // identification of cell
       If(arrDate{$row}<Current date) // si la fecha es anterior a hoy
          $0:=-1 // la celda NO  es editable
       Else
  // de lo contrario, la celda es editable
       End if
 End case
```

The `On Before Data Entry` event is returned before `On Getting Focus`.

In order to preserve data consistency for selection type and entity selection type list boxes, any modified record/entity is automatically saved as soon as the cell is validated, i.e.:

- when the the cell is deactivated (user presses tab, clicks, etc.)
- when the listbox is no longer focused,
- when the form is no longer focused.

The typical sequence of events generated during data entry or modification is as follows:

| Acción                                                                          | Tipo(s) de Listbox          | Sequence of events                                                                                                                                                                                             |
| ------------------------------------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A cell switches to edit mode (user action or a call to the `EDIT ITEM` command) | All                         | On Before Data Entry                                                                                                                                                                                           |
|                                                                                 | All                         | On Getting Focus                                                                                                                                                                                               |
| Its value is modified                                                           | All                         | On Before Keystroke                                                                                                                                                                                            |
|                                                                                 | All                         | On After Keystroke                                                                                                                                                                                             |
|                                                                                 | All                         | On After Edit                                                                                                                                                                                                  |
| A user validates and leaves the cell                                            | List box de tipo selección  | Save                                                                                                                                                                                                           |
|                                                                                 | Record selection list boxes | On saving an existing record trigger (if set)                                                                                                                                                                  |
|                                                                                 | List box de tipo selección  | On Data Change(*)                                                                                                                                                                                              |
|                                                                                 | Entity selection list boxes | Entity is saved with automerge option, optimistic lock (see entity.save( )). In case of successful save, the entity is refreshed with the last update done. If the save operation fails, an error is displayed |
|                                                                                 | All                         | On Losing Focus                                                                                                                                                                                                |

(*) With entity selection list boxes, in the On Data Change event:
- the [Current item](properties_DataSource.md#current-item) object contains the value before modification.
- the `This` object contains the modified value.

> Data entry in collection/entity selection type list boxes has a limitation when the expression evaluates to null. In this case, it is not possible to edit or remove the null value in the cell.



## Managing selections

La gestión de selecciones es diferente dependiendo de si el list box se basa en un array, en una selección de registros o en una selección de colecciones/entidades:

- **Lista box de tipo selección**: las selecciones se gestionan mediante un conjunto llamado por defecto `$ListboxSetX` (donde X empieza en 0 y se incrementa en función del número de list box en el formulario), que puede modificar si es necesario. Este conjunto se [define en las propiedades](properties_ListBox.md#highlight-set) del list box. Es mantenido automáticamente por 4D: si el usuario selecciona una o más líneas en el list box, el conjunto se actualiza inmediatamente. Por otra parte, también es posible utilizar los comandos del tema "Conjuntos" para modificar por programación la selección en el list box.

- **List box de tipo colección/selección de entidades**: las selecciones se gestionan a través de las propiedades del list box dedicado:
    - [Elemento actual](properties_DataSource.md#current-item) es un objeto que recibirá el elemento/la entidad seleccionado(a)
    - [Elementos seleccionados](properties_DataSource.md#selected-items) es una colección de elementos seleccionados
    - [Posición del elemento actual](properties_DataSource.md#current-item-position) devuelve la posición del elemento o de la entidad seleccionada.

- **List box de tipo array**: el comando `LISTBOX SELECT ROW` puede utilizarse para seleccionar una o más líneas del list box por programación. La [variable asociada al objeto List box](propiedades_Objeto.md#variable-o-expresión) se utiliza para obtener, definir o almacenar las selecciones de líneas en el objeto. Esta variable corresponde a un array de booleanos que es creado y mantenido automáticamente por 4D. El tamaño de este array viene determinado por el tamaño del list box: contiene el mismo número de elementos que el array más pequeño asociado a las columnas. Cada elemento de este array contiene `True` si se selecciona la línea correspondiente y `False` en caso contrario. 4D actualiza el contenido de este array en función de las acciones del usuario. Por el contrario, puede cambiar el valor de los elementos del array para cambiar la selección en el list box. Por otra parte, no se pueden insertar ni borrar líneas en este array; tampoco se pueden reescribir las líneas. El comando `Count in array` puede utilizarse para averiguar el número de líneas seleccionadas. Por ejemplo, este método permite invertir la selección de la primera línea del list box (tipo array):
```4d
 ARRAY BOOLEAN(tBListBox;10)
  //tBListBox es el nombre de la variable asociada al list box en el formulario
 If(tBListBox{1}=True)
    tBListBox{1}:=False
 Else
    tBListBox{1}:=True
 End if
```

> The `OBJECT SET SCROLL POSITION` command scrolls the list box rows so that the first selected row or a specified row is displayed.


### Customizing appearance of selected rows

When the [Hide selection highlight](properties_Appearance.md#hide-selection-highlight) option is selected, you need to make list box selections visible using available interface options. Since selections are still fully managed by 4D, this means:

- For array type list boxes, you must parse the Boolean array variable associated with the list box to determine which rows are selected or not.
- For selection type list boxes, you have to check whether the current record (row) belongs to the set specified in the [Highlight Set](properties_ListBox.md#highlight-set) property of the list box.

You can then define specific background colors, font colors and/or font styles by programming to customize the appearance of selected rows. This can be done using arrays or expressions, depending on the type of list box being displayed (see the following sections).

> You can use the `lk inherited` constant to mimic the current appearance of the list box (e.g., font color, background color, font style, etc.).

#### List box de tipo selección

To determine which rows are selected, you have to check whether they are included in the set indicated in the [Highlight Set](properties_ListBox.md#highlight-set) property of the list box. You can then define the appearance of selected rows using one or more of the relevant [color or style expression property](#using-arrays-and-expressions).

Keep in mind that expressions are automatically re-evaluated each time the:
- list box selection changes.
- list box gets or loses the focus.
- form window containing the list box becomes, or ceases to be, the frontmost window.


#### List box de tipo array
You have to parse the Boolean array [Variable or Expression](properties_Object.md#variable-or-expression) associated with the list box to determine whether rows are selected or not selected.

You can then define the appearance of selected rows using one or more of the relevant [color or style array property](#using-arrays-and-expressions).

Note that list box arrays used for defining the appearance of selected rows must be recalculated during the `On Selection Change` form event; however, you can also modify these arrays based on the following additional form events:
- `On Getting Focus` (propiedad list box)
- `On Losing Focus` (propiedad list box)
- `On Activate` (propiedad list box)
- `On Deactivate` (form property) ...depending on whether and how you want to visually represent changes of focus in selections.

##### Ejemplo

You have chosen to hide the system highlight and want to display list box selections with a green background color, as shown here:

![](assets/en/FormObjects/listbox_styles7.png)

For an array type list box, you need to update the [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) by programming. In the JSON form, you have defined the following Row Background Color Array for the list box:

```
    "rowFillSource": "_ListboxBackground",
```

In the object method of the list box, you can write:

```4d
 Case of
    :(FORM event.code=On Selection Change)
       $n:=Size of array(LB_Arrays)
       ARRAY LONGINT(_ListboxBackground;$n) // colores de fondo de la línea
       For($i;1;$n)
          If(LB_Arrays{$i}=True) // selected
             _ListboxBackground{$i}:=0x0080C080 // fondo verde
          Else // not selected
             _ListboxBackground{$i}:=lk inherited
          End if
       End for
 End case
```

For a selection type list box, to produce the same effect you can use a method to update the [Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression) based on the set specified in the [Highlight Set](properties_ListBox.md#highlight-set) property.

For example, in the JSON form, you have defined the following Highlight Set and Background Color Expression for the list box:

```
    "highlightSet": "$SampleSet",
    "rowFillSource": "UI_SetColor",
```
You can write in the *UI_SetColor* method:

```4d
 If(Is in set("$SampleSet"))
    $color:=0x0080C080 // green background
 Else
    $color:=lk inherited
 End if

 $0:=$color
```

> In hierarchical list boxes, break rows cannot be highlighted when the [Hide selection highlight](properties_Appearance.md#hide-selection-highlight) option is checked. Since it is not possible to have distinct colors for headers of the same level, there is no way to highlight a specific break row by programming.


## Managing sorts

By default, a list box automatically handles standard column sorts when the header is clicked. A standard sort is an alphanumeric sort of column values, alternately ascending/descending with each successive click. All columns are always synchronized automatically.

You can prevent standard user sorts by deselecting the [Sortable](properties_Action.md#sortable) property of the list box.

The developer can set up custom sorts using the `LISTBOX SORT COLUMNS` command and/or combining the `On Header Click` and `On After Sort` form events (see the [`FORM Event`](https://doc.4d.com/4dv19/help/command/en/page1606.html) command) and relevant 4D commands.

> The [Sortable](properties_Action.md#sortable) property only affects the standard user sorts; the [`LISTBOX SORT COLUMNS`](https://doc.4d.com/4dv19/help/command/en/page916.html) command does not take this property into account.

The value of the [column header variable](properties_Object.md#variable-or-expression) allows you to manage additional information: the current sort of the column (read) and the display of the sort arrow.

- If the variable is set to 0, the column is not sorted and the sort arrow is not displayed.  
  ![](assets/en/FormObjects/sorticon0.png)

- Si la variable está definida como 1, la columna se organiza en orden ascendente y se muestra la flecha de ordenación. ![](assets/en/FormObjects/sorticon1.png)

- Si la variable está definida en 2, la columna se organiza en orden descendente y se muestra la flecha de clasificación. ![](assets/en/FormObjects/sorticon2.png)

> Only declared or dynamic [variables](Concepts/variables.md) can be used as header column variables. Other kinds of [expressions](Concepts/quick-tour.md#expressions) such as `Form.sortValue` are not supported.

You can set the value of the variable (for example, Header2:=2) in order to "force" the sort arrow display. The column sort itself is not modified in this case; it is up to the developer to handle it.

> The [`OBJECT SET FORMAT`](https://doc.4d.com/4dv19/help/command/en/page236.html) command offers specific support for icons in list box headers, which can be useful when you want to work with a customized sort icon.


## Managing row colors, styles, and display

There are several different ways to set background colors, font colors and font styles for list boxes:

- at the level of the [list box object properties](#list-box-objects),
- at the level of the [column properties](#list-box-columns),
- using [arrays or expressions properties](#using-arrays-and-expressions) for the list box and/or for each column,
- at the level of the text of each cell (if [multi-style text](properties_Text.md#multi-style)).


### Priority & inheritance

Priority and inheritance principles are observed when the same property is set at more than one level.

| Priority level | Setting location                                                     |
| -------------- | -------------------------------------------------------------------- |
| high priority  | Cell (if multi-style text)                                           |
|                | Column arrays/methods                                                |
|                | List box arrays/methods                                              |
|                | Column properties                                                    |
|                | List box properties                                                  |
| low priority   | Meta Info expression (for collection or entity selection list boxes) |

For example, if you set a font style in the list box properties and another using a style array for the column, the latter one will be taken into account.

For each attribute (style, color and background color), an **inheritance** is implemented when the default value is used:

- for cell attributes: attribute values of rows
- for row attributes: attribute values of columns
- for column attributes: attribute values of the list box

This way, if you want an object to inherit the attribute value from a higher level, you can use pass the `lk inherited` constant (default value) to the definition command or directly in the element of the corresponding style/color array. For example, given an array list box containing a standard font style with alternating colors: ![](assets/en/FormObjects/listbox_styles3.png)

You perform the following modifications:

- change the background of row 2 to red using the [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) property of the list box object,
- change the style of row 4 to italics using the [Row Style Array](properties_Text.md#row-style-array) property of the list box object,
- two elements in column 5 are changed to bold using the [Row Style Array](properties_Text.md#row-style-array) property of the column 5 object,
- the 2 elements for column 1 and 2 are changed to dark blue using the [Row Background Color Array](properties_BackgroundAndBorder.md#row-background-color-array) property for the column 1 and 2 objects:

![](assets/en/FormObjects/listbox_styles3.png)

To restore the original appearance of the list box, you can:

- pass the `lk inherited` constant in element 2 of the background color arrays for columns 1 and 2: then they inherit the red background color of the row.
- pass the `lk inherited` constant in elements 3 and 4 of the style array for column 5: then they inherit the standard style, except for element 4, which changes to italics as specified in the style array of the list box.
- pass the `lk inherited` constant in element 4 of the style array for the list box in order to remove the italics style.
- pass the `lk inherited` constant in element 2 of the background color array for the list box in order to restore the original alternating color of the list box.


### Using arrays and expressions

Depending of the list box type, you can use different properties to customize row colors, styles and display:

| Propiedad        | List box array                                                                         | List box selección                                                                        | List box colección o entity selection                                                                                                                           |
| ---------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Background color | [Array colores de fondo](properties_BackgroundAndBorder.md#row-background-color-array) | [Expresión color de fondo](properties_BackgroundAndBorder.md#background-color-expression) | [Background Color Expression](properties_BackgroundAndBorder.md#background-color-expression) or [Meta info expression](properties_Text.md#meta-info-expression) |
| Color de fuente  | [Array colores de fuente](properties_Text.md#row-font-color-array)                     | [Expresión color fuente](properties_Text.md#font-color-expression)                        | [Font Color Expression](properties_Text.md#font-color-expression) or [Meta info expression](properties_Text.md#meta-info-expression)                            |
 Font style|

[Row Style Array](properties_Text.md#row-style-array)|[Style Expression](properties_Text.md#style-expression)|[Style Expression](properties_Text.md#style-expression) or [Meta info expression](properties_Text.md#meta-info-expression)| Display|[Row Control Array](properties_ListBox.md#row-control-array)|-|-|




## Printing list boxes

Two printing modes are available: **preview mode** - which can be used to print a list box like a form object, and **advanced mode** - which lets you control the printing of the list box object itself within the form. Note that the "Printing" appearance is available for list box objects in the Form editor.

### Preview mode

Printing a list box in preview mode consists of directly printing the list box and the form that contains it using the standard print commands or the **Print** menu command. The list box is printed as it is in the form. This mode does not allow precise control of the printing of the object; in particular, it does not allow you to print all the rows of a list box that contains more rows than it can display.

### Modo avanzado

In this mode, the printing of list boxes is carried out by programming, via the `Print object` command (project forms and table forms are supported). The `LISTBOX GET PRINT INFORMATION` command is used to control the printing of the object.

In this mode:

- The height of the list box object is automatically reduced when the number of rows to be printed is less than the original height of the object (there are no "blank" rows printed). On the other hand, the height does not automatically increase according to the contents of the object. The size of the object actually printed can be obtained via the `LISTBOX GET PRINT INFORMATION` command.
- The list box object is printed "as is", in other words, taking its current display parameters into account: visibility of headers and gridlines, hidden and displayed rows, etc. These parameters also include the first row to be printed: if you call the `OBJECT SET SCROLL POSITION` command before launching the printing, the first row printed in the list box will be the one designated by the command.
- An automatic mechanism facilitates the printing of list boxes that contain more rows than it is possible to display: successive calls to `Print object` can be used to print a new set of rows each time. The `LISTBOX GET PRINT INFORMATION` command can be used to check the status of the printing while it is underway.





## List box jerárquicos

Un list box jerárquico es un list box en el que el contenido de la primera columna aparece en forma jerárquica. Este tipo de representación se adapta a la presentación de información que incluye valores repetidos y/o que dependen jerárquicamente (país/región/ciudad, etc.).

> Sólo los [list box de tipo array](#array-list-boxes) pueden ser jerárquicos.

Los list box jerárquicos son una forma particular de representar los datos, pero no modifican la estructura de datos (arrays). Los list box jerárquicos se gestionan exactamente igual que los list box clásicos.


### Definir una jerarquía

Para definir un list box jerárquico, existen varias posibilidades:

*   Configurar manualmente los elementos jerárquicos utilizando la lista de propiedades del editor de formularios (o editar el formulario JSON).
*   Generar visualmente la jerarquía utilizando el menú emergente de gestión de list box, en el editor de formularios.
*   Use the [LISTBOX SET HIERARCHY](https://doc.4d.com/4Dv17R5/4D/17-R5/LISTBOX-SET-HIERARCHY.301-4127969.en.html) and [LISTBOX GET HIERARCHY](https://doc.4d.com/4Dv17R5/4D/17-R5/LISTBOX-GET-HIERARCHY.301-4127970.en.html) commands, described in the *4D Language Reference* manual.


#### Propiedades del List Box jerárquico

This property specifies that the list box must be displayed in hierarchical form. In the JSON form, this feature is triggered [when the *dataSource* property value is an array](properties_Object.md#hierarchical-list-box), i.e. a collection.

Additional options (**Variable 1...10**) are available when the *Hierarchical List Box* option is selected, corresponding to each *dataSource* array to use as break column. Each time a value is entered in a field, a new row is added. Up to 10 variables can be specified. These variables set the hierarchical levels to be displayed in the first column.

The first variable always corresponds to the name of the variable for the first column of the list box (the two values are automatically bound). This first variable is always visible and enterable. Por ejemplo: country. The second variable is also always visible and enterable; it specifies the second hierarchical level. For example: regions. Beginning with the third field, each variable depends on the one preceding it. For example: counties, cities, and so on. A maximum of ten hierarchical levels can be specified. If you remove a value, the whole hierarchy moves up a level.

The last variable is never hierarchical even if several identical values exists at this level. For example, referring to the configuration illustrated above, imagine that arr1 contains the values A A A B B B, arr2 has the values 1 1 1 2 2 2 and arr3 the values X X Y Y Y Z. In this case, A, B, 1 and 2 could appear in collapsed form, but not X and Y:

![](assets/en/FormObjects/property_hierarchicalListBox.png)

This principle is not applied when only one variable is specified in the hierarchy: in this case, identical values may be grouped.
> If you specify a hierarchy based on the first columns of an existing list box, you must then remove or hide these columns (except for the first), otherwise they will appear in duplicate in the list box. If you specify the hierarchy via the pop-up menu of the editor (see below), the unnecessary columns are automatically removed from the list box.


#### Create hierarchy using the contextual menu

When you select at least one column in addition to the first one in a list box object (of the array type) in the form editor, the **Create hierarchy** command is available in the context menu:

![](assets/en/FormObjects/listbox_hierarchy1.png)

This command is a shortcut to define a hierarchy. Cuando se selecciona, se llevan a cabo las siguientes acciones:

*   The **Hierarchical list box** option is checked for the object in the Property List.
*   Las variables de las columnas se utilizan para definir la jerarquía. Reemplazan las variables ya definidas.
*   Las columnas seleccionadas ya no aparecen en el list box (excepto el título de la primera).

Ejemplo: dado un list box cuyas primeras columnas contienen País, Región, Ciudad y Población. When Country, Region and City are selected, if you choose **Create hierarchy** in the context menu, a three-level hierarchy is created in the first column, columns 2 and 3 are removed and the Population column becomes the second:

![](assets/en/FormObjects/listbox_hierarchy2.png)

##### Cancelar jerarquía
When the first column is selected and already specified as hierarchical, you can use the **Cancel hierarchy** command. Cuando elige este comando, se llevan a cabo las siguientes acciones:

*   The **Hierarchical list box** option is deselected for the object,
*   Los niveles jerárquicos 2 a X se eliminan y se transforman en columnas añadidas al list box.


### Principios de funcionamiento

Cuando se abre por primera vez un formulario que contiene un list box jerárquico, por defecto se despliegan todas las líneas.

Cuando los valores se repiten en los arrays, se añade automáticamente una línea de ruptura y un "nodo" jerárquico en el list box. Por ejemplo, imagine un list box que contenga cuatro arrays que indiquen las ciudades, cada una de ellas caracterizada por su país, su región, su nombre y su número de habitantes:

![](assets/en/FormObjects/hierarch1.png)

Si este list box se muestra en forma jerárquica (los tres primeros arrays están incluidos en la jerarquía), se obtiene:

![](assets/en/FormObjects/hierarch2.png)

Los arrays no se ordenan antes de construir la jerarquía. Si, por ejemplo, un array contiene los datos AAABBAACC, la jerarquía obtenida será:

    > A B A C

Para desplegar o contraer un "nodo" jerárquico, basta con hacer clic en él. If you **Alt+click** (Windows) or **Option+click** (macOS) on the node, all its sub-elements will be expanded or collapsed as well. These operations can also be carried out by programming using the `LISTBOX EXPAND` and `LISTBOX COLLAPSE` commands.

When values of the date or time type are included in a hierarchical list box, they are displayed in the short system format.

#### Sorts in hierarchical list boxes

In a list box in hierarchical mode, a standard sort (carried out by clicking on the header of a list box column) is always constructed as follows:

- In the first place, all the levels of the hierarchical column (first column) are automatically sorted by ascending order.
- The sort is then carried out by ascending or descending order (according to the user action) on the values of the column that was clicked.
- All the columns are synchronized.
- During subsequent sorts carried out on non-hierarchical columns of the list box, only the last level of the first column is sorted. It is possible to modify the sorting of this column by clicking on its header.

Given for example the following list box, in which no specific sort is specified:

![](assets/en/FormObjects/hierarch3.png)

If you click on the "Population" header to sort the populations by ascending (or alternately descending) order, the data appear as follows:

![](assets/en/FormObjects/hierarch4.png)

As for all list boxes, you can [disable the standard sort mechanism](properties_Action.md#sortable) and manage sorts using programming.


#### Selections and positions in hierarchical list boxes

A hierarchical list box displays a variable number of rows on screen according to the expanded/collapsed state of the hierarchical nodes. This does not however mean that the number of rows of the arrays vary. Only the display is modified, not the data. Es importante entender este principio porque la gestión programada de los list box jerárquicos se basa siempre en los datos de los arrays, no en los datos mostrados. En particular, las filas de ruptura añadidas automáticamente no se tienen en cuenta en los arrays de opciones de visualización (ver más adelante).

Veamos, por ejemplo, los siguientes arrays:

![](assets/en/FormObjects/hierarch5.png)

Si estos arrays se representan jerárquicamente, la línea "Quimper" no se mostrará en la segunda línea, sino en la cuarta, debido a las dos líneas de ruptura que se añaden:

![](assets/en/FormObjects/hierarch6.png)

Independientemente de cómo se muestren los datos en el list box (de forma jerárquica o no), si quiere cambiar la línea que contiene "Quimper" a negrita, debe utilizar la instrucción Style{2} = bold. Sólo se tiene en cuenta la posición de la línea en los arrays.

Este principio se aplica a los arrays internos que se pueden utilizar para gestionar:

- colores
- colores de fondo
- estilos
- líneas ocultas
- selecciones

For example, if you want to select the row containing Rennes, you must pass:

```4d
 ->MyListbox{3}:=True
```

Non-hierarchical representation: ![](assets/en/FormObjects/hierarch7.png) Hierarchical representation: ![](assets/en/FormObjects/hierarch8.png)

> If one or more rows are hidden because their parents are collapsed, they are no longer selected. Only the rows that are visible (either directly or by scrolling) can be selected. In other words, rows cannot be both hidden and selected.

As with selections, the `LISTBOX GET CELL POSITION` command will return the same values for a hierarchical list box and a non-hierarchical list box. This means that in both of the examples below, `LISTBOX GET CELL POSITION` will return the same position: (3;2).

*Non-hierarchical representation:* ![](assets/en/FormObjects/hierarch9.png)

*Hierarchical representation:* ![](assets/en/FormObjects/hierarch10.png)

When all the rows of a sub-hierarchy are hidden, the break line is automatically hidden. In the above example, if rows 1 to 3 are hidden, the "Brittany" break row will not appear.

#### Break rows

If the user selects a break row, `LISTBOX GET CELL POSITION` returns the first occurrence of the row in the corresponding array. In the following case:

![](assets/en/FormObjects/hierarch11.png)


... `LISTBOX GET CELL POSITION` returns (2;4). To select a break row by programming, you will need to use the `LISTBOX SELECT BREAK` command.

Break rows are not taken into account in the internal arrays used to manage the graphic appearance of list boxes (styles and colors). It is however possible to modify these characteristics for break rows via the graphic management commands for objects. You simply need to execute the appropriate commands on the arrays that constitute the hierarchy.

Given for example the following list box (the names of the associated arrays are specified in parentheses):

*Non-hierarchical representation:* ![](assets/en/FormObjects/hierarch12.png)

*Hierarchical representation:* ![](assets/en/FormObjects/hierarch13.png)

In hierarchical mode, break levels are not taken into account by the style modification arrays named `tStyle` and `tColors`. To modify the color or style of break levels, you must execute the following statements:

```4d
 OBJECT SET RGB COLORS(T1;0x0000FF;0xB0B0B0)
 OBJECT SET FONT STYLE(T2;Bold)
```
> In this context, only the syntax using the array variable can function with the object property commands because the arrays do not have any associated object.

Result:

![](assets/en/FormObjects/hierarch14.png)


#### Optimized management of expand/collapse

You can optimize hierarchical list boxes display and management using the `On Expand` and `On Collapse` form events.

A hierarchical list box is built from the contents of its arrays so it can only be displayed when all these arrays are loaded into memory. Esto dificulta la generación de list box jerárquicos de gran tamaño basados en arrays generados a partir de datos (a través del comando `SELECTION TO ARRAY`), no sólo por la velocidad de visualización sino también por la memoria utilizada.

El uso de los eventos de formulario `On Expand` y `On Collapse` puede superar estas limitaciones: por ejemplo, puede mostrar sólo una parte de la jerarquía y cargar/descargar los arrays sobre la marcha, basándose en las acciones del usuario. En el contexto de estos eventos, el comando `LISTBOX GET CELL POSITION` devuelve la celda en la que el usuario hizo clic para desplegar o contraer una línea.

En este caso, debe llenar y vaciar los arrays por código. Los principios que deben aplicarse son:
- Cuando se muestra el list box, sólo se debe llenar el primer array. Sin embargo, debe crear un segundo array con valores vacíos para que el list box muestre los botones desplegar/contraer: ![](assets/en/FormObjects/hierarch15.png)

- Cuando un usuario hace clic en un botón de expandir, puede procesar el evento `On Expand`. El comando `LISTBOX GET CELL POSITION` devuelve la celda en cuestión y permite construir la jerarquía adecuada: se llena el primer array con los valores repetidos y el segundo con los valores enviados desde el comando `SELECTION TO ARRAY` y se insertan tantas líneas como sean necesarias en el list box utilizando el comando `LISTBOX INSERT ROWS`. ![](assets/en/FormObjects/hierarch16.png)

- Cuando un usuario hace clic en un botón de contracción, puede procesar el evento `On Collapse`. El comando `LISTBOX GET CELL POSITION` devuelve la celda en cuestión: con el comando `LISTBOX DELETE ROWS` se eliminan tantas líneas como sean necesarias del list box.



## Object arrays in columns

Las columnas de list box pueden manejar arrays de objetos. Como los arrays de objetos pueden contener diferentes tipos de datos, esta nueva y poderosa funcionalidad permite mezclar diferentes tipos de entrada en las líneas de una misma columna, y mostrar también varios widgets. Por ejemplo, puede insertar una entrada de texto en la primera línea, una casilla de selección en la segunda y una lista desplegable en la tercera. Los arrays de objetos también dan acceso a nuevos tipos de widgets, como botones o selectores de color.

El siguiente list box fue diseñado utilizando un array de objetos:

![](assets/en/FormObjects/listbox_column_objectArray.png)


### Configuring an object array column

To assign an object array to a list box column, you just need to set the object array name in either the Property list ("Variable Name" field), or using the [LISTBOX INSERT COLUMN](https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-INSERT-COLUMN.301-4311153.en.html) command, like with any array-based column. In the Property list, you can now select Object as a "Expression Type" for the column:

![](assets/en/FormObjects/listbox_column_objectArray_config.png)

Standard properties related to coordinates, size, and style are available for object columns. You can define them using the Property list, or by programming the style, font color, background color and visibility for each row of an object-type list box column. These types of columns can also be hidden.

However, the Data Source theme is not available for object-type list box columns. In fact, the contents of each column cell are based on attributes found in the corresponding element of the object array. Each array element can define:

the value type (mandatory): text, color, event, etc. the value itself (optional): used for input/output. the cell content display (optional): button, list, etc. additional settings (optional): depend on the value type To define these properties, you need to set the appropriate attributes in the object (available attributes are listed below). For example, you can write "Hello World!" in an object column using this simple code:

```4d  
ARRAY OBJECT(obColumn;0) //column array
 C_OBJECT($ob) //first element
 OB SET($ob;"valueType";"text") //defines the value type (mandatory)
 OB SET($ob;"value";"Hello World!") //defines the value
 APPEND TO ARRAY(obColumn;$ob)  
```

![](assets/en/FormObjects/listbox_column_objectArray_helloWorld.png)
> Display format and entry filters cannot be set for an object column. They automatically depend on the value type.

#### valueType y visualización de datos

When a list box column is associated with an object array, the way a cell is displayed, entered, or edited, is based on the valueType attribute of the array element. Supported valueType values are:

*   "text": for a text value
*   "real": for a numeric value that can include separators like a \<space>, <.>, or <,>
*   "integer": for an integer value
*   "boolean": for a True/False value
*   "color": to define a background color
*   "event": to display a button with a label.

4D uses default widgets with regards to the "valueType" value (i.e., a "text" is displayed as a text input widget, a "boolean" as a check box), but alternate displays are also available through options (*e.g.*, a real can also be represented as a drop-down menu). The following table shows the default display as well as alternatives for each type of value:

| valueType | Default widget                                 | Alternative widget(s)                                                                          |
| --------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| texto     | text input                                     | drop-down menu (required list) or combo box (choice list)                                      |
| real      | controlled text input (numbers and separators) | drop-down menu (required list) or combo box (choice list)                                      |
| integer   | controlled text input (numbers only)           | drop-down menu (required list) or combo box (choice list) or three-states check box            |
| booleano  | check box                                      | drop-down menu (required list)                                                                 |
| color     | background color                               | texto                                                                                          |
| event     | button with label                              |                                                                                                |
|           |                                                | All widgets can have an additional unit toggle button or ellipsis button attached to the cell. |

You set the cell display and options using specific attributes in each object (see below).

#### Display formats and entry filters

You cannot set display formats or entry filters for columns of object-type list boxes. They are automatically defined according to the value type. These are listed in the following table:

| Value type | Default format                                             | Entry control           |
| ---------- | ---------------------------------------------------------- | ----------------------- |
| texto      | same as defined in object                                  | any (no control)        |
| real       | same as defined in object (using system decimal separator) | "0-9" and "." and "-"   |
|            |                                                            | "0-9" and "." if min>=0 |
| integer    | same as defined in object                                  | "0-9" and "-"           |
|            |                                                            | "0-9" if min>=0         |
| Booleano   | check box                                                  | N/A                     |
| color      | N/A                                                        | N/A                     |
| event      | N/A                                                        | N/A                     |

### Atributos

Cada elemento del array de objetos es un objeto que puede contener uno o más atributos que definirán el contenido de la celda y la visualización de los datos (ver el ejemplo anterior).

The only mandatory attribute is "valueType" and its supported values are "text", "real", "integer", "boolean", "color", and "event". The following table lists all the attributes supported in list box object arrays, depending on the "valueType" value (any other attributes are ignored). Display formats are detailed and examples are provided below.

|                       | valueType                               | texto | real | integer | booleano | color | event |
| --------------------- | --------------------------------------- | ----- | ---- | ------- | -------- | ----- | ----- |
| *Atributos*           | *Descripción*                           |       |      |         |          |       |       |
| value                 | cell value (input or output)            | x     | x    | x       |          |       |       |
| min                   | minimum value                           |       | x    | x       |          |       |       |
| max                   | maximum value                           |       | x    | x       |          |       |       |
| behavior              | "threeStates" value                     |       |      | x       |          |       |       |
| requiredList          | drop-down list defined in object        | x     | x    | x       |          |       |       |
| choiceList            | combo box defined in object             | x     | x    | x       |          |       |       |
| requiredListReference | 4D list ref, depends on "saveAs" value  | x     | x    | x       |          |       |       |
| requiredListName      | 4D list name, depends on "saveAs" value | x     | x    | x       |          |       |       |
| saveAs                | "reference" o "value"                   | x     | x    | x       |          |       |       |
| choiceListReference   | 4D list ref, display combo box          | x     | x    | x       |          |       |       |
| choiceListName        | 4D list name, display combo box         | x     | x    | x       |          |       |       |
| unitList              | array of X elements                     | x     | x    | x       |          |       |       |
| unitReference         | index of selected element               | x     | x    | x       |          |       |       |
| unitsListReference    | 4D list ref for units                   | x     | x    | x       |          |       |       |
| unitsListName         | 4D list name for units                  | x     | x    | x       |          |       |       |
| alternateButton       | add an alternate button                 | x     | x    | x       | x        | x     |       |

#### value

Cell values are stored in the "value" attribute. This attribute is used for input as well as output. It can also be used to define default values when using lists (see below).

````4d
 ARRAY OBJECT(obColumn;0) //array columna 
 C_OBJECT($ob1)
 $entry:="Hello world!"
 OB SET($ob1;"valueType";"text")
 OB SET($ob1;"value";$entry) // si el usuario introduce un nuevo valor, $entry contendrá el valor editado
 C_OBJECT($ob2)
 OB SET($ob2;"valueType";"real")
 OB SET($ob2;"value";2/3)
 C_OBJECT($ob3)
 OB SET($ob3;"valueType";"boolean")
 OB SET($ob3;"value";True)

 APPEND TO ARRAY(obColumn;$ob1)
 APPEND TO ARRAY(obColumn;$ob2)
 APPEND TO ARRAY(obColumn;$ob3)
````

![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_value.png)
> Null values are supported and result in an empty cell.

#### min and max

When the "valueType" is "real" or "integer", the object also accepts min and max attributes with appropriate values (values must be of the same type as the valueType).

These attributes can be used to control the range of input values. When a cell is validated (when it loses the focus), if the input value is lower than the min value or greater than the max value, then it is rejected. In this case, the previous value is maintained and a tip displays an explanation.

````4d
 C_OBJECT($ob3)
 $entry3:=2015
 OB SET($ob3;"valueType";"integer")
 OB SET($ob3;"value";$entry3)
 OB SET($ob3;"min";2000)
 OB SET($ob3;"max";3000)
````

![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_minMax.png)

#### behavior

The behavior attribute provides variations to the regular representation of values. In 4D v15, a single variation is proposed:

| Attribute | Available value(s) | valueType(s) | Descripción                                                                                                                                                                                  |
| --------- | ------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| behavior  | threeStates        | integer      | Represents a numeric value as a three-states check box.<br> 2=semi-checked, 1=checked, 0=unchecked, -1=invisible, -2=unchecked disabled, -3=checked disabled, -4=semi-checked disabled |

```4d
 C_OBJECT($ob3)
 OB SET($ob3;"valueType";"integer")
 OB SET($ob3;"value";-3)
 C_OBJECT($ob4)
 OB SET($ob4;"valueType";"integer")
 OB SET($ob4;"value";-3)
 OB SET($ob4;"behavior";"threeStates")
```

![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_behavior.png)

#### requiredList and choiceList

When a "choiceList" or a "requiredList" attribute is present inside the object, the text input is replaced by a drop-down list or a combo box, depending of the attribute:

*   If the attribute is "choiceList", the cell is displayed as a combo box. This means that the user can select or type a value.
*   If the attribute is "requiredList" then the cell is displayed as a drop-down list and the user can only select one of the values provided in the list.

In both cases, a "value" attribute can be used to preselect a value in the widget.
> The widget values are defined through an array. If you want to assign an existing 4D list to the widget, you need to use the "requiredListReference", "requiredListName", "choiceListReference", or "choiceListName" attributes.

Ejemplos:

*   You want to display a drop-down list with only two options: "Open" or "Closed". "Closed" must be preselected:

```4d
    ARRAY TEXT($RequiredList;0)
    APPEND TO ARRAY($RequiredList;"Open")
    APPEND TO ARRAY($RequiredList;"Closed")
    C_OBJECT($ob)
    OB SET($ob;"valueType";"text")
    OB SET($ob;"value";"Closed")
    OB SET ARRAY($ob;"requiredList";$RequiredList)
```
![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_openClosed.png)

*   You want to accept any integer value, but display a combo box to suggest the most common values:

```4d
    ARRAY LONGINT($ChoiceList;0)
    APPEND TO ARRAY($ChoiceList;5)
    APPEND TO ARRAY($ChoiceList;10)
    APPEND TO ARRAY($ChoiceList;20)
    APPEND TO ARRAY($ChoiceList;50)
    APPEND TO ARRAY($ChoiceList;100)
    C_OBJECT($ob)
    OB SET($ob;"valueType";"integer")
    OB SET($ob;"value";10) //10 as default value
    OB SET ARRAY($ob;"choiceList";$ChoiceList)
```
![](assets/en/FormObjects/listbox_column_objectArray_helloWorld_commonValues.png)

#### requiredListName and requiredListReference

The "requiredListName" and "requiredListReference" attributes allow you to use, in a list box cell, a list defined in 4D either in Design mode (in the Lists editor of the Tool box) or by programming (using the New list command). The cell will then be displayed as a drop-down list. This means that the user can only select one of the values provided in the list.

Use "requiredListName" or "requiredListReference" depending on the origin of the list: if the list comes from the Tool box, you pass a name; otherwise, if the list has been defined by programming, you pass a reference. In both cases, a "value" attribute can be used to preselect a value in the widget.
> * If you want to define these values through a simple array, you need to use the "requiredList" attribute.
> * If the list contains text items representing real values, the decimal separator must be a period ("."), regardless of the local settings, e.g.: "17.6" "1234.456".

Ejemplos:

*   You want to display a drop-down list based on a "colors" list defined in the Tool box (containing the values "blue", "yellow", and "green"), save it as a value and display "blue" by default:

![](assets/en/FormObjects/listbox_column_objectArray_colors.png)

```4d
    C_OBJECT($ob)
    OB SET($ob;"valueType";"text")
    OB SET($ob;"saveAs";"value")
    OB SET($ob;"value";"blue")
    OB SET($ob;"requiredListName";"colors") 
```
![](assets/en/FormObjects/listbox_column_objectArray_colorsResult.png)

*   You want to display a drop-down list based on a list defined by programming and save it as a reference:

```4d
    <>List:=New list
    APPEND TO LIST(<>List;"Paris";1)
    APPEND TO LIST(<>List;"London";2)
    APPEND TO LIST(<>List;"Berlin";3)
    APPEND TO LIST(<>List;"Madrid";4)
    C_OBJECT($ob)
    OB SET($ob;"valueType";"integer")
    OB SET($ob;"saveAs";"reference")
    OB SET($ob;"value";2) //displays London by default
    OB SET($ob;"requiredListReference";<>List)
```


    ![](assets/en/FormObjects/listbox_column_objectArray_cities.png)

#### choiceListName and choiceListReference

The "choiceListName" and "choiceListReference" attributes allow you to use, in a list box cell, a list defined in 4D either in Design mode (in the Tool box) or by programming (using the New list command). The cell is then displayed as a combo box, which means that the user can select or type a value.

Use "choiceListName" or "choiceListReference" depending on the origin of the list: if the list comes from the Tool box, you pass a name; otherwise, if the list has been defined by programming, you pass a reference. In both cases, a "value" attribute can be used to preselect a value in the widget.
> * If you want to define these values through a simple array, you need to use the "choiceList" attribute.
> * If the list contains text items representing real values, the decimal separator must be a period ("."), regardless of the local settings, e.g.: "17.6" "1234.456".

Ejemplo:

You want to display a combo box based on a "colors" list defined in the Tool box (containing the values "blue", "yellow", and "green") and display "green" by default:

![](assets/en/FormObjects/listbox_column_objectArray_colors.png)

````4d
 C_OBJECT($ob)
 OB SET($ob;"valueType";"text")
 OB SET($ob;"value";"blue")
 OB SET($ob;"choiceListName";"colors")
````

![](../assets/en/FormObjects/listbox_column_objectArray_colorsResult.png)


#### unitsList, unitsListName, unitsListReference and unitReference

You can use specific attributes to add units associated with cell values (*e.g.*: "10 cm", "20 pixels", etc.). To define the unit list, you can use one of the following attributes:

*   "unitsList": an array containing the x elements used to define the available units (e.g.: "cm", "inches", "km", "miles", etc.). Use this attribute to define units within the object.
*   "unitsListReference": a reference to a 4D list containing available units. Use this attribute to define units with a 4D list created with the [New list](https://doc.4d.com/4Dv15/4D/15.6/New-list.301-3818474.en.html) command.
*   "unitsListName": a name of a design-based 4D list that contains available units. Use this attribute to define units with a 4D list created in the Tool box.

Regardless of the way the unit list is defined, it can be associated with the following attribute:

*   "unitReference": a single value that contains the index (from 1 to x) of the selected item in the "unitList", "unitsListReference" or "unitsListName" values list.

The current unit is displayed as a button that cycles through the "unitList", "unitsListReference" or "unitsListName" values each time it is clicked (e.g., "pixels" -> "rows" -> "cm" -> "pixels" -> etc.)

Ejemplo:

We want to set up a numeric input followed by two possible units: "rows" or "pixels". The current value is "2" + "lines". We use values defined directly in the object ("unitsList" attribute):

````4d
ARRAY TEXT($_units;0)
APPEND TO ARRAY($_units;"lines")
APPEND TO ARRAY($_units;"pixels")
C_OBJECT($ob)
OB SET($ob;"valueType";"integer")
OB SET($ob;"value";2) // 2 "units"
OB SET($ob;"unitReference";1) //"lines"
OB SET ARRAY($ob;"unitsList";$_units)
````

![](assets/en/FormObjects/listbox_column_objectArray_unitList.png)

#### alternateButton

If you want to add an ellipsis button [...] to a cell, you just need to pass the "alternateButton" with the True value in the object. The button will be displayed in the cell automatically.

When this button is clicked by a user, an `On Alternate Click` event will be generated, and you will be able to handle it however you want (see the "Event management" paragraph for more information).

Ejemplo:

```4d
C_OBJECT($ob1)
$entry:="Hello world!"
OB SET($ob;"valueType";"text")
OB SET($ob;"alternateButton";True)
OB SET($ob;"value";$entry)
```

![](assets/en/FormObjects/listbox_column_objectArray_alternateButton.png)


#### color valueType

The "color" valueType allows you to display either a color or a text.

*   If the value is a number, a colored rectangle is drawn inside the cell. Ejemplo:

    ````4d
    C_OBJECT($ob4)
    OB SET($ob4;"valueType";"color")
    OB SET($ob4;"value";0x00FF0000)
    ````
![](assets/en/FormObjects/listbox_column_objectArray_colorValue.png)


*   If the value is a text, then the text is displayed (*e.g.*: "value";"Automatic").


#### event valueType

The "event" valueType displays a simple button that generates an `On Clicked` event when clicked. No data or value can be passed or returned.

Optionally, you can pass a "label" attribute.

Ejemplo:

````4d
C_OBJECT($ob)
OB SET($ob;"valueType";"event")
OB SET($ob;"label";"Edit...")
````

![](assets/en/FormObjects/listbox_column_objectArray_eventValueType.png)


### Event management
Several events can be handled while using an object list box array:

*   **On Data Change**: An `On Data Change` event is triggered when any value has been modified either:
    *   in a text input zone
    *   in a drop-down list
    *   in a combo box area
    *   in a unit button (switch from value x to value x+1)
    *   in a check box (switch between checked/unchecked)
*   **On Clicked**: When the user clicks on a button installed using the "event" *valueType* attribute, an `On Clicked` event will be generated. This event is managed by the programmer.
*   **On Alternative Click**: When the user clicks on an ellipsis button ("alternateButton" attribute), an `On Alternative Click` event will be generated. This event is managed by the programmer.




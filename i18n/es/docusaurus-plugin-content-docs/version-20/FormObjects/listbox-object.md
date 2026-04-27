---
id: listbox-object
title: Objeto List Box
---

## List box de tipo array

En un list box de tipo array, cada columna debe estar asociada a un array unidimensional 4D; se pueden utilizar todos los tipos de array, a excepción de los arrays de punteros. El número de líneas se basa en el número de elementos del array.

Por defecto, 4D asigna el nombre "ColumnX" a cada columna. Puede cambiarlo, así como las otras propiedades de la columna, en las [propiedades de las columnas](listbox-column.md#column-specific-properties). El formato de visualización de cada columna también puede definirse mediante el comando `OBJECT SET FORMAT`.

> Los list boxes de tipo array pueden mostrarse en [modo jerárquico](listbox_overview.md#hierarchical-list-boxes), con mecanismos específicos.

Con los list box de tipo array, los valores introducidos o mostrados se gestionan utilizando el lenguaje 4D. También puede asociar una [lista de opciones](properties_DataSource.md#choice-list) con una columna para controlar la entrada de datos.
Los valores de las columnas se gestionan mediante comandos de alto nivel del tema List box (como `LISTBOX INSERT ROWS` o `LISTBOX DELETE ROWS`), así como comandos de manipulación de arrays. Por ejemplo, para inicializar el contenido de una columna, puede utilizar la siguiente instrucción:

```4d
ARRAY TEXT(varCol;size)
```

También puede utilizar una lista:

```4d
LIST TO ARRAY("ListName";varCol)
```

> **Atención**: cuando un objeto List box contiene varias columnas de diferentes tamaños, sólo se mostrará el número de elementos del array (columna) más pequeño. Debe asegurarse de que cada array tenga el mismo número de elementos que los demás. Además, si una columna del list box está vacía (esto ocurre cuando el array asociado no fue declarado o dimensionado correctamente con el lenguaje), el list box no muestra nada.

## List box de tipo selección

En este tipo de list box, cada columna puede estar asociada a un campo (por ejemplo `[Employees]LastName)` o a una expresión. La expresión puede basarse en uno o más campos (por ejemplo, `[Employees]FirstName+" "[Employees]LastName`) o puede ser simplemente una fórmula (por ejemplo `String(Milliseconds)`). La expresión también puede ser un método proyecto, una variable o un elemento de array. La expresión también puede ser un método proyecto, una variable o un elemento de array.

The contents of each row is then evaluated according to a selection of records: the **current selection** of a table or a **named selection**.

En el caso de un list box basado en la selección actual de una tabla, cualquier modificación realizada desde la base de datos se refleja automáticamente en el list box, y viceversa. Por lo tanto, la selección actual es siempre la misma en ambos lugares.

## List box colección o entity selection

En este tipo de list box, cada columna debe estar asociada a una expresión. El contenido de cada línea se evalúa entonces por elemento de la colección o por entidad de la selección de entidades.

Cada elemento de la colección o cada entidad está disponible como un objeto al que se puede acceder a través de la palabra clave [This](../Concepts/classes.md#this). Una expresión de columna puede ser una ruta de propiedad, un método proyecto, una variable o cualquier fórmula, accediendo a cada entidad u objeto elemento de colección a través de `This`, por ejemplo `This.<propertyPath>` (o `This.value` en caso de una colección de valores escalares). La expresión también puede ser un método proyecto, una variable o un elemento de array.

Cuando la fuente de datos es una entity selection, cualquier modificación realizada del lado del list box se guarda automáticamente en la base de datos. Por otro lado, las modificaciones realizadas en la base de datos son visibles en el list box después de que se hayan recargado las entidades modificadas.

Cuando la fuente de datos es una colección, toda modificación realizada en los valores del list box se refleja en la colección. Cuando la fuente de datos es una colección, toda modificación realizada en los valores del list box se refleja en la colección. Por ejemplo:

```4d
myCol:=myCol.push("new value") //mostrar el nuevo valor en el list box
```

### Propiedades soportadas

Las propiedades soportadas dependen del tipo de list box.

| Propiedad                                                                                         | List box array | List box selección | List box colección o entity selection |
| ------------------------------------------------------------------------------------------------- | -------------- | ------------------ | ------------------------------------- |
| [Color de fondo alterno](properties_BackgroundAndBorder.md#alternate-background-color)            | X              | X                  | X                                     |
| [Color de fondo](properties_BackgroundAndBorder.md#background-color--fill-color)                  | X              | X                  | X                                     |
| [Negrita](properties_Text.md#bold)                                                                | X              | X                  | X                                     |
| [Expresión del color de fondo](properties_BackgroundAndBorder.md#background-color-expression)     |                | X                  | X                                     |
| [Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style)                   | X              | X                  | X                                     |
| [Inferior](properties_CoordinatesAndSizing.md#bottom)                                             | X              | X                  | X                                     |
| [Clase](properties_Object.md#css-class)                                                           | X              | X                  | X                                     |
| [Colección o entity selection](properties_Object.md#collection-or-entity-selection)               |                | X                  | X                                     |
| [Redimensionamiento automático de columnas](properties_ResizingOptions.md#column-auto-resizing)   | X              | X                  | X                                     |
| [Elemento actual](properties_DataSource.md#current-item)                                          |                |                    | X                                     |
| [Posición actual del elemento](properties_DataSource.md#current-item-position)                    |                |                    | X                                     |
| [Fuente de datos](properties_Object.md#data-source)                                               | X              | X                  | X                                     |
| [Nombre del formulario detallado](properties_ListBox.md#detail-form-name)                         |                | X                  |                                       |
| [Mostrar encabezados](properties_Headers.md#display-headers)                                      | X              | X                  | X                                     |
| [Mostrar pies de página](properties_Footers.md#display-footers)                                   | X              | X                  | X                                     |
| [Doble clic en la fila](properties_ListBox.md#double-click-on-row)                                |                | X                  |                                       |
| [Arrastrable](properties_Action.md#droppable)                                                     | X              | X                  | X                                     |
| [Soltable](properties_Action.md#droppable)                                                        | X              | X                  | X                                     |
| [Enfocable](properties_Entry.md#focusable)                                                        | X              | X                  | X                                     |
| [Fuente](properties_Text.md#fuente)                                                               | X              | X                  | X                                     |
| [Color de fuente](properties_Text.md#font-color)                                                  | X              | X                  | X                                     |
| [Expresión de color de fuente](properties_Text.md#font-color-expression)                          |                | X                  | X                                     |
| [Tamaño de fuente](properties_Text.md#font-size)                                                  | X              | X                  | X                                     |
| [Altura (list box)](properties_CoordinatesAndSizing.md#height)                 | X              | X                  | X                                     |
| [Altura (encabezados)](properties_Headers.md#height)                           | X              | X                  | X                                     |
| [Altura (pies de página)](properties_Footers.md#height)                        | X              | X                  | X                                     |
| [Ocultar líneas en blanco adicionales](properties_BackgroundAndBorder.md#hide-extra-blank-rows)   | X              | X                  | X                                     |
| [Ocultar rectángulo de enfoque](properties_Appearance.md#hide-focus-rectangle)                    | X              | X                  | X                                     |
| [Ocultar resaltado de selección](properties_Appearance.md#hide-selection-highlight)               | X              | X                  | X                                     |
| [List Box jerárquico](properties_Object.md#array-list-box)                                        | X              |                    |                                       |
| [Conjunto de resaltado](properties_ListBox.md#highlight-set)                                      |                | X                  |                                       |
| [Alineación horizontal](properties_Text.md#alineación-horizontal)                                 | X              | X                  | X                                     |
| [Color de línea horizontal](properties_Gridlines.md#horizontal-line-color)                        | X              | X                  | X                                     |
| [Barra de desplazamiento horizontal](properties_Appearance.md#horizontal-scroll-bar)              | X              | X                  | X                                     |
| [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing)                              | X              | X                  | X                                     |
| [Itálica](properties_Text.md#italic)                                                              | X              | X                  | X                                     |
| [Izquierda](properties_CoordinatesAndSizing.md#izquierda)                                         | X              | X                  | X                                     |
| [Tabla maestra](properties_DataSource.md#master-table)                                            |                | X                  |                                       |
| [Expresión info Meta](properties_Text.md#meta-info-expression)                                    |                |                    | X                                     |
| [Método](properties_Action.md#method)                                                             | X              | X                  | X                                     |
| [Líneas móviles](properties_Action.md#movable-rows)                                               | X              |                    |                                       |
| [Selección temporal](properties_DataSource.md#selection-name)                                     |                | X                  |                                       |
| [Número de columnas](properties_ListBox.md#number-of-columns)                                     | X              | X                  | X                                     |
| [Número de columnas bloqueadas](properties_ListBox.md#number-of-locked-columns)                   | X              | X                  | X                                     |
| [Número de columnas estáticas](properties_ListBox.md#number-of-static-columns)                    | X              | X                  | X                                     |
| [Nombre del objeto](properties_Object.md#object-name)                                             | X              | X                  | X                                     |
| [Derecha](properties_CoordinatesAndSizing.md#right)                                               | X              | X                  | X                                     |
| [Array de colores de fondo de fila](properties_BackgroundAndBorder.md#row-background-color-array) | X              |                    |                                       |
| [Array de control de filas](properties_ListBox.md#row-control-array)                              | X              |                    |                                       |
| [Array color de fuente de fila](properties_Text.md#row-font-color-array)                          | X              |                    |                                       |
| [Altura de línea](properties_CoordinatesAndSizing.md#row-height)                                  | X              |                    |                                       |
| [Array altura de línea](properties_CoordinatesAndSizing.md#row-height-array)                      | X              |                    |                                       |
| [Array de estilo de línea](properties_Text.md#row-style-array)                                    | X              |                    |                                       |
| [Elementos seleccionados](properties_DataSource.md#selected-items)                                |                |                    | X                                     |
| [Modo de selección](properties_ListBox.md#selection-mode)                                         | X              | X                  | X                                     |
| [Edición con un solo clic](properties_Entry.md#single-click-edit)                                 | X              | X                  | X                                     |
| [Ordenable](properties_Action.md#sortable)                                                        | X              | X                  | X                                     |
| [Acción estándar](properties_Action.md#standard-action)                                           | X              |                    |                                       |
| [Expresión de estilo](properties_Text.md#style-expression)                                        |                | X                  | X                                     |
| [Superior](properties_CoordinatesAndSizing.md#top)                                                | X              | X                  | X                                     |
| [Transparente](properties_BackgroundAndBorder.md#transparent)                                     | X              | X                  | X                                     |
| [Tipo](properties_Object.md#type)                                                                 | X              | X                  | X                                     |
| [Subrayado](properties_Text.md#underline)                                                         | X              | X                  | X                                     |
| [Variable o Expresión](properties_Object.md#variable-or-expression)                               | X              | X                  |                                       |
| [Alineación vertical](properties_Text.md#vertical-alignment)                                      | X              | X                  | X                                     |
| [Color de línea vertical](properties_Gridlines.md#vertical-line-color)                            | X              | X                  | X                                     |
| [Barra de desplazamiento vertical](properties_Appearance.md#vertical-scroll-bar)                  | X              | X                  | X                                     |
| [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing)                                  | X              | X                  | X                                     |
| [Visibilidad](properties_Display.md#visibility)                                                   | X              | X                  | X                                     |
| [Ancho](properties_CoordinatesAndSizing.md#width)                                                 | X              | X                  | X                                     |

> Las columnas, los encabezados y los pies de list box soportan propiedades específicas.

### Eventos formulario soportados

| Evento formulario    | Propiedades adicionales devueltas (ver [Evento formulario](https://doc.4d.com/4Dv18/4D/18/FORM-Event.301-4522191.en.html) para las propiedades principales)                                 | Comentarios                                                                                                                                                                                 |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On After Edit        | <li>[columna](#additional-properties)</li><li>[nombreColumna](#additional-properties)</li><li>[línea](#additional-properties)</li>                                                                             |                                                                                                                                                                                             |
| On After Keystroke   | <li>[columna](#additional-properties)</li><li>[nombreColumna](#additional-properties)</li><li>[línea](#additional-properties)</li>                                                                             |                                                                                                                                                                                             |
| On After Sort        | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[headerName](#additional-properties)</li>                                                                            | \*Las fórmulas compuestas no se pueden ordenar. <br/>(por ejemplo, This.firstName + This.lastName)_ |
| On Alternative Click | <li>[columna](#additional-properties)</li><li>[nombreColumna](#additional-properties)</li><li>[línea](#additional-properties)</li>                                                                             | *List box array únicamente*                                                                                                                                                                 |
| On Before Data Entry | <li>[columna](#additional-properties)</li><li>[nombreColumna](#additional-properties)</li><li>[línea](#additional-properties)</li>                                                                             |                                                                                                                                                                                             |
| On Before Keystroke  | <li>[columna](#additional-properties)</li><li>[nombreColumna](#additional-properties)</li><li>[línea](#additional-properties)</li>                                                                             |                                                                                                                                                                                             |
| On Begin Drag Over   | <li>[columna](#additional-properties)</li><li>[nombreColumna](#additional-properties)</li><li>[línea](#additional-properties)</li>                                                                             |                                                                                                                                                                                             |
| On Clicked           | <li>[columna](#additional-properties)</li><li>[nombreColumna](#additional-properties)</li><li>[línea](#additional-properties)</li>                                                                             |                                                                                                                                                                                             |
| On Close Detail      | <li>[row](#propiedades adicionales)</li>                                                                                                                                                                       | *List box Selección actual y Selección temporal únicamente*                                                                                                                                 |
| On Collapse          | <li>[columna](#additional-properties)</li><li>[nombreColumna](#additional-properties)</li><li>[línea](#additional-properties)</li>                                                                             | *List box jerárquicos únicamente*                                                                                                                                                           |
| On Column Moved      | <li>[columnName](#additional-properties)</li><li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                      |                                                                                                                                                                                             |
| On Column Resize     | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[newSize](#additional-properties)</li><li>[oldSize](#additional-properties)</li>                                     |                                                                                                                                                                                             |
| On Data Change       | <li>[columna](#additional-properties)</li><li>[nombreColumna](#additional-properties)</li><li>[línea](#additional-properties)</li>                                                                             |                                                                                                                                                                                             |
| On Delete Action     | <li>[row](#propiedades adicionales)</li>                                                                                                                                                                       |                                                                                                                                                                                             |
| On Display Detail    | <li>[isRowSelected](#additional-properties)</li><li>[row](#additional-properties)</li>                                                                                                                         |                                                                                                                                                                                             |
| On Double Clicked    | <li>[columna](#additional-properties)</li><li>[nombreColumna](#additional-properties)</li><li>[línea](#additional-properties)</li>                                                                             |                                                                                                                                                                                             |
| On Drag Over         | <li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li> |                                                                                                                                                                                             |
| On Drop              | <li>[columna](#additional-properties)</li><li>[nombreColumna](#additional-properties)</li><li>[línea](#additional-properties)</li>                                                                             |                                                                                                                                                                                             |
| On Expand            | <li>[columna](#additional-properties)</li><li>[nombreColumna](#additional-properties)</li><li>[línea](#additional-properties)</li>                                                                             | *List box jerárquicos únicamente*                                                                                                                                                           |
| On Footer Click      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[footerName](#additional-properties)</li>                                                                            | *List box arrays, selección actual y selección temporal únicamente*                                                                                                                         |
| On Getting Focus     | <li>[columna](#additional-properties)</li><li>[nombreColumna](#additional-properties)</li><li>[línea](#additional-properties)</li>                                                                             | *Propiedades adicionales devueltas sólo al editar una celda*                                                                                                                                |
| On Header Click      | <li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[headerName](#additional-properties)</li>                                                                            |                                                                                                                                                                                             |
| On Load              |                                                                                                                                                                                                                |                                                                                                                                                                                             |
| On Losing Focus      | <li>[columna](#additional-properties)</li><li>[nombreColumna](#additional-properties)</li><li>[línea](#additional-properties)</li>                                                                             | *Propiedades adicionales devueltas sólo cuando la modificación de una celda se completa*                                                                                                    |
| On Mouse Enter       | <li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li> |                                                                                                                                                                                             |
| On Mouse Leave       |                                                                                                                                                                                                                |                                                                                                                                                                                             |
| On Mouse Move        | <li>[area](#additional-properties)</li><li>[areaName](#additional-properties)</li><li>[column](#additional-properties)</li><li>[columnName](#additional-properties)</li><li>[row](#additional-properties)</li> |                                                                                                                                                                                             |
| On Open Detail       | <li>[row](#propiedades adicionales)</li>                                                                                                                                                                       | *List box Selección actual y Selección temporal únicamente*                                                                                                                                 |
| On Row Moved         | <li>[newPosition](#additional-properties)</li><li>[oldPosition](#additional-properties)</li>                                                                                                                   | *List box array únicamente*                                                                                                                                                                 |
| On Selection Change  |                                                                                                                                                                                                                |                                                                                                                                                                                             |
| On Scroll            | <li>[horizontalScroll](#additional-properties)</li><li>[verticalScroll](#additional-properties)</li>                                                                                                           |                                                                                                                                                                                             |
| On Unload            |                                                                                                                                                                                                                |                                                                                                                                                                                             |

#### Propiedades adicionales {#additional-properties}

Los eventos formulario de los objetos list box o columnas de list box pueden devolver las siguientes propiedades adicionales:

| Propiedad        | Tipo         | Descripción                                                                          |
| ---------------- | ------------ | ------------------------------------------------------------------------------------ |
| area             | text         | Área de objeto list box ("header", "footer", "cell")              |
| areaName         | text         | Nombre del área                                                                      |
| column           | entero largo | Número de columna                                                                    |
| columnName       | text         | Nombre de la columna                                                                 |
| footerName       | text         | Nombre del pie                                                                       |
| headerName       | text         | Nombre del encabezado                                                                |
| horizontalScroll | entero largo | Positivo si el desplazamiento es hacia la derecha, negativo si es hacia la izquierda |
| isRowSelected    | boolean      | True si la línea está seleccionada, de lo contrario False                            |
| newPosition      | entero largo | Nueva posición de la columna o línea                                                 |
| newSize          | entero largo | Nuevo tamaño (en píxeles) de la columna o línea                   |
| oldPosition      | entero largo | Posición anterior de la columna o línea                                              |
| oldSize          | entero largo | Tamaño anterior (en píxeles) de la columna o línea                |
| row              | entero largo | Número de línea                                                                      |
| verticalScroll   | entero largo | Positivo si el desplazamiento es hacia abajo, negativo si es hacia arriba            |

> Si un evento se produce en una columna o línea "fake" que no existe, se suele devolver una cadena vacía.

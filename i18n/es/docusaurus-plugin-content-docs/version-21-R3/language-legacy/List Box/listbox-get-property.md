---
id: listbox-get-property
title: LISTBOX Get property
slug: /commands/listbox-get-property
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get property.Syntax-->**LISTBOX Get property** ( * ; *object* : Text ; *property* : Integer ) : any<br/>**LISTBOX Get property** ( *object* : Variable ; *property* : Integer ) : any<!-- END REF-->

<!--REF #_command_.LISTBOX Get property.Params-->

<div class="no-index">

| Parámetros | Tipo           |                             | Descripción                                                                                                                      |
| ---------- | -------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| \*         | Operador       | &#8594; | Si se especifica, object es un nombre de objeto (cadena). Si se omite, object es una variable |
| object     | Text, Variable | &#8594; | Nombre del objeto del formulario (si se especifica \*) o Variable (si se omite \*)         |
| property   | Integer        | &#8594; | Propiedad cuyo valor desea obtener                                                                                               |
| Resultado  | any            | &#8592; | Current value (Integer, Text)                                                                                 |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento                 | Modificaciones                                       |
| --------------------------- | ---------------------------------------------------- |
| 19 R6                       | Modificado                                           |
| 16 R2                       | Renamed (Get Listbox information) |
| <6 | Created                                              |

</details>
</div>

## Descripción

<!--REF #_command_.LISTBOX Get property.Summary-->El comando **LISTBOX Get property** devuelve el valor de *property* del list box o columna especificado mediante los parámetros *object* y *\**.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *object* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *object* es una variable. En este caso, se pasa una referencia a una variable en lugar de una cadena. Para más información sobre los nombres de los objetos, consulte la sección *Propiedades de los objetos*.

**Nota:** si el list box o columna especificado utilizando los parámetros *object* y *\** no existe, el comando **LISTBOX Get property** devuelve -1 para propiedades numéricas, o una cadena vacía.

En el parámetro *property*, pase una constante que indique la propiedad cuyo valor desea obtener. Puede utilizar una de las siguientes constantes del tema "*List Box*":

| Constante                      | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------ | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk allow wordwrap              | 14    | Propiedad **[Ajustar palabra](../../FormObjects/properties_Display.md#wordwrap)** <br/>Se aplica a: columna \* <br/>Valores posibles:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                                 |
| lk auto row height             | 31    | Propiedad **[Alto de línea automático](../../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height)** para list box de tipo array <br/>Se aplica a: List box o columna<br/>Valores posibles:<br/> lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                           |
| lk background color expression | 22    | Propiedad **[Expresión color de fondo](../../FormObjects/properties_BackgroundAndBorder.md#background-color-expression)** para los list box de tipo selección de registros, colección o selección de entidades<br/>Se aplica a: list box o columna                                                                                                                                                                                                                                                                        |
| lk cell horizontal padding     | 36    | Propiedad **[Margen horizontal](../../FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding)**<br/>Margen horizontal de celda en píxeles (mismo valor para las márgenes izquierda y derecha)<br/>Se aplica a: list box, columna, encabezado, pie de página                                                                                                                                                                                                                                 |
| lk cell vertical padding       | 37    | Propiedad **[Margen vertical](../../FormObjects/properties_CoordinatesAndSizing.md#vertical-padding)**<br/>Margen vertical de celda en píxeles (mismo valor para las márgenes superior e inferior)<br/>Se aplica a: list box, columna, encabezado, pie de página                                                                                                                                                                                                                                       |
| lk column max width            | 26    | Propiedad **[Ancho Máximo](../../FormObjects/properties_CoordinatesAndSizing.md#maximum-width)** <br/>Se aplica a: Columna \*                                                                                                                                                                                                                                                                                                                                                                                             |
| lk column min width            | 25    | Propiedad **[Ancho mínimo](../../FormObjects/properties_CoordinatesAndSizing.md#minimum-width)** <br/>Se aplica a: Columna \*                                                                                                                                                                                                                                                                                                                                                                                             |
| lk column resizable            | 15    | Propiedad **[Redimensionable](../../FormObjects/properties_ResizingOptions.md#resizable)** <br/>Se aplica a: columna \* <br/>Valores posibles:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                        |
| lk current item expression     | 38    | Propiedad **[Elemento actual](../../FormObjects/properties_DataSource.md#current-item)** <br/>Se aplica a: List box (Collection / Entity selection)                                                                                                                                                                                                                                                                                                                                                    |
| lk current item pos expression | 39    | Propiedad **[Posición elemento actual](../../FormObjects/properties_DataSource.md#current-item-position)** <br/>Se aplica a: List box (Collection / Entity selection)                                                                                                                                                                                                                                                                                                                                  |
| lk detail form name            | 19    | Propiedad **[Nombre formulario detallado](../../FormObjects/properties_ListBox.md#detail-form-name)** para list box de tipo selección<br/>Se aplica a: List box                                                                                                                                                                                                                                                                                                                                                           |
| lk display footer              | 8     | Propiedad **[Mostrar pies de página](../../FormObjects/properties_Footers.md#display-footers)**<br/>Se aplica a: list box<br/>Valores posibles:<br/>lk no (0): oculto <br/>lk yes (1): mostrado                                                                                                                                                                                                                                     |
| lk display header              | 0     | Propiedad **[Mostrar encabezados](../../FormObjects/properties_Headers.md#display-headers)**<br/>Se aplica a: list box<br/>Valores posibles:<br/>lk no (0): oculto <br/>lk yes (1): mostrado                                                                                                                                                                                                                                        |
| lk display type                | 21    | **[Display Type](../../FormObjects/properties_Display.md#display-type)** property for numeric columns<br/>Applies to: Column \* <br/>Possible values: <br/> lk numeric format (0): displays values in numeric format <br/> lk three states checkbox (1): displays values as three-state checkboxes                                                                                                                                  |
| lk double click on row         | 18    | **[Double-click on row](../../FormObjects/properties_ListBox.md#double-click-on-row)** property for selection type list box<br/>Applies to: List box<br/>Possible values: <br/> lk do nothing (0): does not trigger any automatic action <br/> lk edit record (1): displays corresponding record in read-write mode <br/> lk display record (2): displays corresponding record in read-only mode |
| lk extra rows                  | 13    | Propiedad **[Ocultar líneas vacías extra](../../FormObjects/properties_BackgroundAndBorder.md#hide-extra-blank-rows)** <br/>Se aplica a: List box<br/>Valores posibles: <br/> lk display (0)<br/> lk hide (1)                                                                                                                                                                                                                                                       |
| lk font color expression       | 23    | Propiedad **[Expresión color de fuente](../../FormObjects/properties_Text.md#font-color-expression)** para los list box de tipo selección de registros, colección o selección de entidades<br/>Se aplica a: list box o columna                                                                                                                                                                                                                                                                                            |
| lk font style expression       | 24    | Propiedad **[Expresión estilo](../../FormObjects/properties_Text.md#style-expression)** para los list box de tipo selección de registros, colección o selección de entidades<br/>Se aplica a: list box o columna                                                                                                                                                                                                                                                                                                          |
| lk hide selection highlight    | 16    | Propiedad **[Ocultar resaltado de selección](../../FormObjects/properties_Appearance.md#hide-selection-highlight)** <br/>Se aplica a: List box<br/>Valores posibles: <br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                 |
| lk highlight set               | 27    | Propiedad **[Conjunto resaltado](../../FormObjects/properties_ListBox.md#highlight-set)** para el list box de tipo selección<br/>Se aplica a: List box                                                                                                                                                                                                                                                                                                                                                                    |
| lk hor scrollbar height        | 3     | Altura en píxeles (solo se puede leer)<br/>Aplica a: List box                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| lk meta expression             | 34    | **[Meta Info Expression](../../FormObjects/properties_Text.md#meta-info-expression)** property for collection or entity selection type list boxes<br/>Applies to: List box                                                                                                                                                                                                                                                                                                                                                |
| lk movable rows                | 35    | **[Movable Rows](../../FormObjects/properties_Action.md#movable-rows)** property for array type list box <br/>Applies to: List box (excluding hierarchical mode) <br/>Possible values:<br/> lk no (0): Rows cannot be moved at runtime <br/> lk yes (1): Rows can be moved at runtime (default)                                                                                               |
| lk multi style                 | 30    | Propiedad **[Multi-estilo](../../FormObjects/properties_Text.md#multi-style)** <br/>Se aplica a: columna \* <br/>Valores posibles:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                                    |
| lk named selection             | 28    | Propiedad **[Named Selection](../../FormObjects/properties_DataSource.md#selection-name)** para list box de tipo selección<br/>Se aplica a: List box                                                                                                                                                                                                                                                                                                                                                                      |
| lk resizing mode               | 11    | Propiedad **[Redimensionamiento automático de columnas](../../FormObjects/properties_ResizingOptions.md#column-auto-resizing)** propiedad<br/>Se aplica a: list box<br/>Valores posibles:<br/>lk manual (0) <br/> lk automatic (2)                                                                                                                                                                                                                                  |
| lk row height unit             | 17    | Unit of **[Row Height](../../FormObjects/properties_CoordinatesAndSizing.md#row-height)** property <br/>Applies to: List box<br/>Possible values:<br/> lk lines (1)<br/>lk pixels (0)<br/>                                                                                                                                                                                                                                                                          |
| lk selection mode              | 10    | Propiedad **[Modo de selección](../../FormObjects/properties_ListBox.md#selection-mode)** <br/>Se aplica a: List box<br/>Valores posibles: <br/> lk none (0)<br/>lk single (1)<br/>lk multiple (2)                                                                                                                                                                                                                                               |
| lk single click edit           | 29    | **[Single-Click Edit](../../FormObjects/properties_Entry.md#single-click-edit)** property<br/>Applies to: List box<br/>Possible values: <br/> lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                             |
| lk sortable                    | 20    | Propiedad **[Ordenable](../../FormObjects/properties_Action.md#sortable)** <br/>Se aplica a: List box<br/>Valores posibles: <br/> lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                                         |
| lk truncate                    | 12    | Propiedad **[Truncar con elipsis](../../FormObjects/properties_Display.md#truncate-with-ellipsis)** <br/>Se aplica a: List box o columna<br/>Valores posibles: <br/> lk without ellipsis (0) <br/> lk with ellipsis (1)                                                                                                                                                                                                                                             |
| lk ver scrollbar width         | 5     | Ancho en píxeles (solo se puede leer)<br/>Aplica a: List box                                                                                                                                                                                                                                                                                                                                                                                                                                        |

\* Estas propiedades sólo se aplican a columnas de list box; si pasa un list box como parámetro con una de estas propiedades, **LISTBOX Get property** devuelve -1, o una cadena vacía, dependiendo de la *property* pasada.

En general, para señalar un resultado inválido **LISTBOX Get property** devuelve -1 cuando recupera propiedades que tienen valores numéricos, o una cadena vacía; sin embargo, no se genera ningún error. Más específicamente, esto ocurre en los siguientes casos:

- Si pasa una *property* que no existe
- If you pass a *property* that is not available for the specified list box or column, e.g. you pass the lk font color expression property with an array type list box
- Si pasa una columna como parámetro con una *property* que se aplica a un list box, y viceversa, si pasa un list box como parámetro con una *property* que se aplica a una columna (ver \* más arriba)

In addition, it is not possible to return values from more than one column at a time; if you attempt to use the "@" symbol as part of a column name to indicate multiple columns with similar names, **LISTBOX Get property** returns the first matching value it finds; as a result, the value returned has no true significance.

**Note:**

- Las constantes lk display footer y lk display header son útiles para calcular el tamaño real del área de un list box en un formulario.

## Ejemplo 1

Dado un list box "MyListbox", si ejecuta la siguiente instrucción:

```4d
 $Value:=LISTBOX Get property(*; "MyListbox";lk selection mode) // el valor devuelto indica el modo de selección
```

En este caso, el resultado devuelto indica si varios registros pueden ser seleccionados.

## Ejemplo 2

Dado un list box "MyListbox", si ejecuta la siguiente instrucción:

```4d
 $resizable:=LISTBOX Get property(*;"MyListbox";lk column resizable)
```

**LISTBOX Get property** devuelve -1 porque la propiedad lk column resizable se aplica a columnas y se ha pasado un list box como parámetro.

## Ver también

[LISTBOX SET GRID](../commands/listbox-set-grid)  
[LISTBOX SET PROPERTY](../commands/listbox-set-property)  
[OBJECT SET SCROLLBAR](../commands/object-set-scrollbar)

## Propiedades

|                   |     |
| ----------------- | --- |
| Número de comando | 917 |
| Hilo seguro       | no  |




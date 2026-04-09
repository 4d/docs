---
id: listbox-set-property
title: LISTBOX SET PROPERTY
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET PROPERTY.Syntax-->**LISTBOX SET PROPERTY** ( * ; *object* : Text ; *property* : Integer ; *value* : Integer, Text )<br/>**LISTBOX SET PROPERTY** ( *object* : Variable ; *property* : Integer ; *value* : Integer, Text )<!-- END REF-->

<!--REF #_command_.LISTBOX SET PROPERTY.Params-->

<div class="no-index">

| Parámetros | Tipo           |                             | Descripción                                                                                                                                       |
| ---------- | -------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*         | Operador       | &#8594; | Si se especifica, object es un nombre de objeto (cadena). Si se omite, object es una variable. |
| object     | Text, Variable | &#8594; | Nombre del objeto del formulario (si se especifica \*) o Variable (si se omite \*)                          |
| property   | Integer        | &#8594; | Propiedad de list box o de columna de list box                                                                                                    |
| value      | Integer, Text  | &#8594; | Valor de la propiedad                                                                                                                             |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R6       | Modificado     |
| 16 R2       | Created        |

</details>
</div>

## Descripción

<!--REF #_command_.LISTBOX SET PROPERTY.Summary-->El comando **LISTBOX SET PROPERTY** define el *value* de la *property* del list box o de la columna de list box especificado por los parámetros *object* y *\**.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *object* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *object* es una variable. En este caso, se pasa una referencia a una variable en lugar de una cadena.

**Nota:** si el list box o la columna de list box designada por los parámetros *object* y *\** no existen, el comando no hace nada y no se genera ningún error.

En los parámetros *property* y *value*, usted indica, respectivamente, la propiedad a definir y su nuevo valor. Puede utilizar las siguientes constantes encontradas en el tema “*List Box*:

| Constante                      | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------ | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk allow wordwrap              | 14    | Propiedad **[Ajustar palabra](../FormObjects/properties_Display.md#wordwrap)** <br/>Se aplica a: columna \* <br/>Valores posibles:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                                                                 |
| lk auto row height             | 31    | Propiedad **[Alto de línea automático](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height)** para list box de tipo array <br/>Se aplica a: List box o columna<br/>Valores posibles:<br/> lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                           |
| lk background color expression | 22    | Propiedad **[Expresión color de fondo](../FormObjects/properties_BackgroundAndBorder.md#background-color-expression)** para los list box de tipo selección de registros, colección o selección de entidades<br/>Se aplica a: list box o columna                                                                                                                                                                                                                                                                                                        |
| lk cell horizontal padding     | 36    | Propiedad **[Margen horizontal](../FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding)**<br/>Margen horizontal de celda en píxeles (mismo valor para las márgenes izquierda y derecha)<br/>Se aplica a: list box, columna, encabezado, pie de página                                                                                                                                                                                                                                                                 |
| lk cell vertical padding       | 37    | Propiedad **[Margen vertical](../FormObjects/properties_CoordinatesAndSizing.md#vertical-padding)**<br/>Margen vertical de celda en píxeles (mismo valor para las márgenes superior e inferior)<br/>Se aplica a: list box, columna, encabezado, pie de página                                                                                                                                                                                                                                                                       |
| lk column max width            | 26    | Propiedad **[Ancho Máximo](../FormObjects/properties_CoordinatesAndSizing.md#maximum-width)** <br/>Se aplica a: Columna \*                                                                                                                                                                                                                                                                                                                                                                                                                             |
| lk column min width            | 25    | Propiedad **[Ancho mínimo](../FormObjects/properties_CoordinatesAndSizing.md#minimum-width)** <br/>Se aplica a: Columna \*                                                                                                                                                                                                                                                                                                                                                                                                                             |
| lk column resizable            | 15    | Propiedad **[Redimensionable](../FormObjects/properties_ResizingOptions.md#resizable)** <br/>Se aplica a: columna \* <br/>Valores posibles:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                                                        |
| lk current item expression     | 38    | Propiedad **[Elemento actual](../FormObjects/properties_DataSource.md#current-item)** <br/>Se aplica a: List box (Collection / Entity selection)                                                                                                                                                                                                                                                                                                                                                                                    |
| lk current item pos expression | 39    | Propiedad **[Posición elemento actual](../FormObjects/properties_DataSource.md#current-item-position)** <br/>Se aplica a: List box (Collection / Entity selection)                                                                                                                                                                                                                                                                                                                                                                  |
| lk detail form name            | 19    | Propiedad **[Nombre formulario detallado](../FormObjects/properties_ListBox.md#detail-form-name)** para list box de tipo selección<br/>Se aplica a: List box                                                                                                                                                                                                                                                                                                                                                                                           |
| lk display footer              | 8     | Propiedad **[Mostrar pies de página](../FormObjects/properties_Footers.md#display-footers)**<br/>Se aplica a: list box<br/>Valores posibles:<br/>lk no (0): oculto <br/>lk yes (1): mostrado                                                                                                                                                                                                                                                                     |
| lk display header              | 0     | Propiedad **[Mostrar encabezados](../FormObjects/properties_Headers.md#display-headers)**<br/>Se aplica a: list box<br/>Valores posibles:<br/>lk no (0): oculto <br/>lk yes (1): mostrado                                                                                                                                                                                                                                                                        |
| lk display type                | 21    | Propiedad **[Tipo de visualización](../FormObjects/properties_Display.md#display-type)** para las columnas numéricas<br/>Se aplica a: Columna \* <br/>Valores posibles: <br/> lk numeric format (0): muestra los valores en formato numérico <br/> lk three states checkbox (1): muestra los valores como casillas de selección de tres estados                                                                                                                  |
| lk double click on row         | 18    | Propiedad **[Doble clic en línea](../FormObjects/properties_ListBox.md#double-click-on-row)** para list box de tipo selección<br/>Se aplica a: List box<br/>Valores posibles: <br/> lk do nothing (0): no desencadena ninguna acción automática <br/> lk edit record (1): muestra el registro correspondiente en modo lectura-escritura <br/> lk display record (2): muestra el registro correspondiente en modo sólo lectura |
| lk extra rows                  | 13    | Propiedad **[Ocultar líneas vacías extra](../FormObjects/properties_BackgroundAndBorder.md#hide-extra-blank-rows)** <br/>Se aplica a: List box<br/>Valores posibles: <br/> lk display (0) <br/>lk hide (1)                                                                                                                                                                                                                                                                                       |
| lk font color expression       | 23    | Propiedad **[Expresión color de fuente](../FormObjects/properties_Text.md#font-color-expression)** para los list box de tipo selección de registros, colección o selección de entidades<br/>Se aplica a: list box o columna                                                                                                                                                                                                                                                                                                                            |
| lk font style expression       | 24    | Propiedad **[Expresión estilo](../FormObjects/properties_Text.md#style-expression)** para los list box de tipo selección de registros, colección o selección de entidades<br/>Se aplica a: list box o columna                                                                                                                                                                                                                                                                                                                                          |
| lk hide selection highlight    | 16    | Propiedad **[Ocultar resaltado de selección](../FormObjects/properties_Appearance.md#hide-selection-highlight)** <br/>Se aplica a: List box<br/>Valores posibles: <br/> lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                                |
| lk highlight set               | 27    | Propiedad **[Conjunto resaltado](../FormObjects/properties_ListBox.md#highlight-set)** para el list box de tipo selección<br/>Se aplica a: List box                                                                                                                                                                                                                                                                                                                                                                                                    |
| lk meta expression             | 34    | Propiedad **[Meta Info Expression](../FormObjects/properties_Text.md#meta-info-expression)** para los list box de tipo colección o entity selection<br/>Se aplica a: List box                                                                                                                                                                                                                                                                                                                                                                          |
| lk movable rows                | 35    | Propiedad **[Líneas desplazables](../FormObjects/properties_Action.md#movable-rows)** para los list box de tipo array <br/>Se aplica a: List box (excluyendo el modo jerárquico) <br/>Valores posibles:<br/> lk no (0): las líneas no se pueden mover en tiempo de ejecución <br/> lk yes (1): las línes se pueden mover en tiempo de ejecución (por defecto)                                                              |
| lk multi style                 | 30    | Propiedad **[Multi-estilo](../FormObjects/properties_Text.md#multi-style)** <br/>Se aplica a: columna \* <br/>Valores posibles:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                                                                    |
| lk named selection             | 28    | Propiedad **[Named Selection](../FormObjects/properties_DataSource.md#selection-name)** para list box de tipo selección<br/>Se aplica a: List box                                                                                                                                                                                                                                                                                                                                                                                                      |
| lk resizing mode               | 11    | Propiedad **[Redimensionamiento automático de columnas](../FormObjects/properties_ResizingOptions.md#column-auto-resizing)** propiedad<br/>Se aplica a: list box<br/>Valores posibles:<br/>lk manual (0) <br/> lk automatic (2)                                                                                                                                                                                                                                                                  |
| lk row height unit             | 17    | Unidad de la propiedad **[Alto de líneas](../FormObjects/properties_CoordinatesAndSizing.md#row-height)** <br/>Se aplica a: List box<br/>Valores posibles: <br/> lk líneas (1)<br/>lk píxeles (0)<br/>                                                                                                                                                                                                                                                                                           |
| lk selected items expression   | 40    | **[Selected items](../FormObjects/properties_DataSource.md#selected-items)** property<br/>Applies to: List box (Collection / Entity selection)                                                                                                                                                                                                                                                                                                                                                                                      |
| lk selection mode              | 10    | Propiedad **[Modo de selección](../FormObjects/properties_ListBox.md#selection-mode)** <br/>Se aplica a: List box<br/>Valores posibles: <br/> lk none (0)<br/>lk single (1)<br/>lk multiple (2)                                                                                                                                                                                                                                                                               |
| lk single click edit           | 29    | Propiedad **[Edición con un solo clic](../FormObjects/properties_Entry.md#single-click-edit)** <br/>Se aplica a: List box<br/>Valores posibles:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                                                    |
| lk sortable                    | 20    | Propiedad **[Ordenable](../FormObjects/properties_Action.md#sortable)** <br/>Se aplica a: List box<br/>Valores posibles: <br/> lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                                                                         |
| lk truncate                    | 12    | Propiedad **[Truncar con elipsis](../FormObjects/properties_Display.md#truncate-with-ellipsis)** <br/>Se aplica a: List box o columna<br/>Valores posibles: <br/> lk without ellipsis (0) <br/> lk with ellipsis (1)                                                                                                                                                                                                                                                                             |

\* Estas propiedades solo se pueden aplicar a las columnas de list box; sin embargo, si pasa un list box como parámetro, **LISTBOX SET PROPERTY** aplica la *propiedad* a cada columna del list box.

**Nota:** si pasa una *propiedad* que no existe, o que no está disponible para el list box o la columna especificado, por ejemplo lk font style expression en el caso de un list box de tipo array, el comando no hace nada y no se genera ningún error.

## Ejemplo 1

Quiere que todas las columnas del list box "MyListbox" sean redimensionables:

```4d
 LISTBOX SET PROPERTY(*;"MyListbox";lk column resizable;lk yes) //Todas las columnas del list box "MyListbox" se establecen como redimensionables
```

## Ejemplo 2

Desea definir un ancho máximo para la columna cuyo nombre es "ProductNumber":

```4d
 LISTBOX SET PROPERTY(*; "ProductNumber";lk column max width;200) //Esta columna tendrá un ancho máximo de 200
```

## Ver también

*List Box*  
[LISTBOX Get property](listbox-get-property.md)

## Propiedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1440 |
| Hilo seguro       | no   |



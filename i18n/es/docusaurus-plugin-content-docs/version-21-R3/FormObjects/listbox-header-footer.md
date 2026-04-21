---
id: listbox-header-footer
title: List Box Header and Footer
---

:::note

- To be able to access header properties for a list box, you must enable the [Display Headers](properties_Headers.md#display-headers) option.
- Para poder acceder a las propiedades de los encabezados de un list box, debe activar la opción [Mostrar encabezados](properties_Headers.md#display-headers) del list box.

:::

## Encabezados

Cuando se muestran los encabezados, puede seleccionar un encabezado en el editor de formularios haciendo clic en él cuando el objeto List box esté seleccionado:

![](../assets/en/FormObjects/listbox_header.png)

Puede definir propiedades de texto estándar para cada encabezado de columna de List box; en este caso, estas propiedades tienen prioridad sobre las de la columna o del propio List box.

Además, tiene acceso a las propiedades específicas de los encabezados. En particular, se puede mostrar un icono en el encabezado junto al título de la columna o en su lugar, por ejemplo, cuando se realizan [ordenaciones personalizadas](./listbox_overview.md#managing-sorts).

![](../assets/en/FormObjects/lbHeaderIcon.png)

Al momento de la ejecución, los eventos que se producen en un encabezado se generan en el método objeto de la columna de list box.

Cuando el comando [`OBJECT SET VISIBLE`](../commands/object-set-visible) es usado con un encabezado, se aplica a todos los encabezados, independientemente del elemento individual definido por el comando. Por ejemplo, `OBJECT SET VISIBLE(*; "header3";False)` ocultará todos los encabezados del objeto list box al que pertenece *header3* y no simplemente este encabezado.

### Propiedades específicas de los encabezados

[Negrita](properties_Text.md#bold) - [Clase](properties_Object.md#css-class) - [Fuente](properties_Text.md#font) - [Color de Fuente](properties_Text.md#font-color) - [Mensaje de ayuda](properties_Help.md#help-tip) - [Alineación Horizontal](properties_Text.md#horizontal-alignment) - [Relleno Horizontal](properties_CoordinatesAndSizing.md#horizontal-padding) - [Ubicación del Ícono](properties_TextAndPicture.md#icon-location) - [Cursiva](properties_Text.md#italic) - [Nombre del objeto](properties_Object.md#object-name) - [Ruta](properties_TextAndPicture.md#picture-pathname) - [Título](properties_Object.md#title) - [Subrayado](properties_Text.md#underline) - [Variable o Expresión](properties_Object.md#variable-or-expression) - [Alineación Vertical](properties_Text.md#vertical-alignment) - [Relleno Vertical](properties_CoordinatesAndSizing.md#vertical-padding) - [Ancho](properties_CoordinatesAndSizing.md#width)

## Pies

Los List box pueden contener "pies de página" no editables, que muestren información adicional. En el caso de los datos mostrados en forma de tabla, los pies de página suelen utilizarse para mostrar cálculos como los totales o los promedios.

Cuando se muestran los pies, puede hacer clic para seleccionar un pie de list box en el editor de formularios haciendo clic en el objeto:

![](../assets/en/FormObjects/listbox_footers.png)

Para cada pie de columna de list box, puede definir propiedades de texto estándar: en este caso, estas propiedades tienen prioridad sobre las de la columna o del list box. También puede acceder a propiedades específicas para los pies de página. En particular, puede insertar un [cálculo personalizado o automático](properties_Object.md#variable-calculation).

Al momento de la ejecución, los eventos que se producen en un pie de página se generan en el método objeto de la columna de list box.

Cuando se utiliza el comando [`OBJECT SET VISIBLE`](../commands/object-set-visible) con un pie de página, se aplica a todos los pies de página, independientemente del elemento individual definido por el comando. Por ejemplo, `OBJECT SET VISIBLE(*; "footer3";False)` ocultará todos los pies de página del objeto list box al que pertenece *footer3* y no simplemente este pie de página.

### Propiedades específicas de los pies

[Formato Alfa](properties_Display.md#alpha-format) - [Color de fondo](properties_BackgroundAndBorder.md#background-color--fill-color) - [Negrita](properties_Text.md#bold) - [Clase](properties_Object.md#css-class) - [Formato fecha](properties_Display.md#date-format) - [Tipo de expresión](properties_Object.md#expression-type) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Consejo de ayuda](properties_Help.md#help-tip) - [Alineación horizontal](properties_Text.md#horizontal-alignment) - [Relleno horizontal](properties_CoordinatesAndSizing.md#horizontal-padding) - [Itálica](properties_Text.md#italic) - [Formato número](properties_Display.md#number-format) - [Nombre del objeto](properties_Object.md#object-name) - [Formato imagen](properties_Display.md#picture-format) - [Formato hora](properties_Display.md#time-format) - [Truncar con puntos suspensivos](properties_Display.md#truncate-with-ellipsis) - [Subrayado](properties_Text.md#underline) - [Cálculo de variable](properties_Object.md#variable-calculation) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Alineación vertical](properties_Text.md#vertical-alignment) - [Relleno vertical](properties_CoordinatesAndSizing.md#vertical-padding) - [Ancho](properties_CoordinatesAndSizing.md#width) - [Ajuste de línea](properties_Display.md#wordwrap)




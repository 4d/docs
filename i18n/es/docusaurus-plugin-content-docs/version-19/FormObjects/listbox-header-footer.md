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

Cuando el comando `OBJECT SET VISIBLE` se utiliza con un encabezado, se aplica a todos los encabezados, independientemente del elemento individual definido por el comando. Por ejemplo, `OBJECT SET VISIBLE(*; "header3";False)` ocultará todos los encabezados del objeto list box al que pertenece *header3* y no simplemente este encabezado.

### Propiedades específicas de los encabezados

[Bold](properties_Text.md#bold) - [Class](properties_Object.md#css-class) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Icon Location](properties_TextAndPicture.md#icon-location) - [Italic](properties_Text.md#italic) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_TextAndPicture.md#picture-pathname) - [Title](properties_Object.md#title) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Width](properties_CoordinatesAndSizing.md#width)

## Pies

Los List box pueden contener "pies de página" no editables, que muestren información adicional. En el caso de los datos mostrados en forma de tabla, los pies de página suelen utilizarse para mostrar cálculos como los totales o los promedios.

Cuando se muestran los pies, puede hacer clic para seleccionar un pie de list box en el editor de formularios haciendo clic en el objeto:

![](../assets/en/FormObjects/listbox_footers.png)

Para cada pie de columna de list box, puede definir propiedades de texto estándar: en este caso, estas propiedades tienen prioridad sobre las de la columna o del list box. También puede acceder a propiedades específicas para los pies de página. En particular, puede insertar un [cálculo personalizado o automático](properties_Object.md#variable-calculation).

Al momento de la ejecución, los eventos que se producen en un pie de página se generan en el método objeto de la columna de list box.

Cuando el comando `OBJECT SET VISIBLE` se utiliza con un pie de página, se aplica a todos los pies, independientemente del elemento individual definido por el comando. Por ejemplo, `OBJECT SET VISIBLE(*; "footer3";False)` ocultará todos los pies de página del objeto list box al que pertenece *footer3* y no simplemente este pie de página.

### Propiedades específicas de los pies

[Alpha Format](properties_Display.md#alpha-format) - [Background Color](properties_BackgroundAndBorder.md#background-color--fill-color) - [Bold](properties_Text.md#bold) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Italic](properties_Text.md#italic) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Picture Format](properties_Display.md#picture-format) - [Time Format](properties_Display.md#time-format) - [Truncate with ellipsis](properties_Display.md#truncate-with-ellipsis) - [Underline](properties_Text.md#underline) - [Variable Calculation](properties_Object.md#variable-calculation) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)


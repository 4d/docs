---
id: propertiesCoordinatesAndSizing
title: Coordenadas y dimensiones
---

## Altura de línea automática

This property is only available for list boxes with the following [data sources](properties_Object.md#data-source):

- collection o entity selection,
- array (no jerárquico).

Esta propiedad no está seleccionada por defecto. Cuando se utiliza para al menos una columna, la altura de cada línea de la columna será calculada automáticamente por 4D, y se tendrá en cuenta el contenido de la columna. Tenga en cuenta que sólo se tendrán en cuenta las columnas con la opción seleccionada para calcular el alto de línea.

:::note

When resizing the form, if the "Grow" [horizontal sizing](properties_ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.

:::

When this property is enabled, the height of every row is automatically calculated in order to make the cell contents entirely fit without being truncated (unless the [Wordwrap](properties_Display.md#wordwrap) option is disabled.

- El cálculo de la altura de línea tiene en cuenta:
  - todo tipo de contenido (texto, números, fechas, horas, imágenes (el cálculo depende del formato de la imagen), objetos),
  - todo tipo de control (entradas, casillas de selección, listas, listas desplegables),
  - fuentes, estilos y tamaños de letra,
  - the [Wordwrap](properties_Display.md#wordwrap) option: if disabled, the height is based on the number of paragraphs (lines are truncated); if enabled, the height is based on number of lines (not truncated).

- El cálculo de la altura de línea no tiene en cuenta:
  - contenido de columna oculta
  - [Row Height](#row-height) and [Row Height Array](#row-height-array) properties (if any) set either in the Property list or by programming.

:::caution

\> Since it requires additional calculations at runtime, the automatic row height option could affect the scrolling fluidity of your list box, in particular when it contains a large number of rows.

:::

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles |
| ------------- | -------------- | ---------------- |
| rowHeightAuto | boolean        | true, false      |

#### Objetos soportados

[List Box Column](listbox_overview.md#list-box-columns)

---

## Abajo

Coordenadas inferiores del objeto en el formulario.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles          |
| ------ | -------------- | ------------------------- |
| bottom | number         | mínimo: 0 |

#### Objetos soportados

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Rectangle](shapes_overview.md#rectangle) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## Izquierda

Coordenadas de izquierda del objeto en el formulario.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles          |
| ------ | -------------- | ------------------------- |
| left   | number         | mínimo: 0 |

#### Objetos soportados

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## Derecha

Coordenadas de derecha del objeto en el formulario.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles          |
| ------ | -------------- | ------------------------- |
| right  | number         | mínimo: 0 |

#### Objetos soportados

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## Arriba

Coordenadas superiores del objeto en el formulario.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles          |
| ------ | -------------- | ------------------------- |
| top    | number         | mínimo: 0 |

#### Objetos soportados

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## Radio de redondeo

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                         |
| ----------- | -------------------------------------- |
| 19 R7       | Soporte para entradas y áreas de texto |

</details>

Define la redondez de las esquinas (en píxeles) del objeto. Por defecto, el valor del radio es de 0 píxeles. Puede cambiar esta propiedad para dibujar objetos redondeados con formas personalizadas:

![](../assets/en/FormObjects/shape_rectangle.png)

El valor mínimo es 0, en este caso se dibuja un objeto estándar no redondeado.
El valor máximo depende del tamaño del rectángulo (no puede superar la mitad del tamaño del lado más corto del rectángulo) y se calcula dinámicamente.

:::note

With [text areas](text.md) and [inputs](input_overview.md):

- the corner radius property is only available with "none", "solid", or "dotted" [border line styles](properties_BackgroundAndBorder.md#border-line-style),
- the corner roundness is drawn outside the area of the object (the object appears larger in the form but its [width](properties_CoordinatesAndSizing.md#width) and [height](properties_CoordinatesAndSizing.md#height) are not extended).

![](../assets/en/FormObjects/radius-text.png)

:::

You can also set this property using the [OBJECT Get corner radius](https://doc.4d.com/4dv19/help/command/en/page1323.html) and [OBJECT SET CORNER RADIUS](https://doc.4d.com/4dv19/help/command/en/page1324.html) commands.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles          |
| ------------ | -------------- | ------------------------- |
| borderRadius | integer        | mínimo: 0 |

#### Objetos soportados

[Input](input_overview.md) - [Rectangle](shapes_overview.md#rectangle) - [Text Area](text.md)

---

## Altura

Esta propiedad designa el tamaño vertical de un objeto.

> Algunos objetos pueden tener una altura predefinida que no se puede modificar.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles          |
| ------ | -------------- | ------------------------- |
| height | number         | mínimo: 0 |

#### Objetos soportados

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## Ancho

Esta propiedad designa el tamaño horizontal de un objeto.

> - Algunos objetos pueden tener una altura predefinida que no se puede modificar.
> - If the [Resizable](properties_ResizingOptions.md#resizable) property is used for a [list box column](listbox_overview.md#list-box-columns), the user can also manually resize the column.
> - When resizing the form, if the ["Grow" horizontal sizing](properties_ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles          |
| ------ | -------------- | ------------------------- |
| ancho  | number         | mínimo: 0 |

#### Objetos soportados

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [Line](shapes_overview.md#line) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## Ancho máximo

El ancho máximo de la columna (en píxeles). El ancho de la columna no puede aumentarse más allá de este valor al redimensionar la columna o el formulario.

> When resizing the form, if the ["Grow" horizontal sizing](properties_ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles          |
| -------- | -------------- | ------------------------- |
| maxWidth | number         | mínimo: 0 |

#### Objetos soportados

[List Box Column](listbox_overview.md#list-box-columns)

---

## Ancho mínimo

El ancho mínimo de la columna (en píxeles). El ancho de la columna no puede reducirse más allá de este valor al redimensionar la columna o el formulario.

> When resizing the form, if the ["Grow" horizontal sizing](properties_ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles          |
| -------- | -------------- | ------------------------- |
| minWidth | number         | mínimo: 0 |

#### Objetos soportados

[List Box Column](listbox_overview.md#list-box-columns)

---

## Altura de las líneas

Define la altura de las líneas del list box (excluyendo los encabezados y pies de página). Por defecto, la altura de la línea se define según la plataforma y el tamaño de la fuente.

#### Gramática JSON

| Nombre    | Tipos de datos | Valores posibles                                                    |
| --------- | -------------- | ------------------------------------------------------------------- |
| rowHeight | string         | valor css en la unidad "em" o "px" (por defecto) |

#### Objetos soportados

[List Box](listbox_overview.md#overview)

#### Ver también

[Row Height Array](#row-height-array)

---

## Array altura de las líneas

Esta propiedad se utiliza para indicar el nombre de un array de altura de línea que se quiere asociar al list box. Un array de altura de línea debe ser de tipo numérico (entero largo por defecto).

Cuando se define un array de altura de línea, cada uno de sus elementos cuyo valor es diferente de 0 (cero) se tiene en cuenta para determinar la altura de la línea correspondiente en el list box, basándose en la unidad de altura de línea actual.

Por ejemplo, puede escribir:

```4d
ARRAY LONGINT(RowHeights;20)
RowHeights{5}:=3
```

Asumiendo que la unidad de las líneas es "líneas", entonces la quinta línea del list box tendrá una altura de tres líneas, mientras que todas las demás líneas mantendrán su altura por defecto.

> - Para los list box de tipo array, esta propiedad sólo está disponible si la opción <a href="#automatic-row-height">Altura de línea automática</a> no está seleccionada.
> - For array and collection/entity selection list boxes, this property is available only if the [Automatic Row Height](#automatic-row-height) option is not selected.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                                 |
| --------------- | -------------- | ------------------------------------------------ |
| rowHeightSource | string         | Nombre de una variable array 4D. |

#### Objetos soportados

[List Box](listbox_overview.md#overview)

#### Ver también

[Row Height](#row-height)

---

## Relleno horizontal

Establece un relleno horizontal para las celdas. El valor se establece en píxeles (por defecto = 0).

![](../assets/en/FormObjects/padding.png)

#### Gramática JSON

| Nombre            | Tipos de datos | Valores posibles                                  |
| ----------------- | -------------- | ------------------------------------------------- |
| horizontalPadding | number         | Number of pixels (must be >=0) |

#### Objetos soportados

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Footers](properties_Footers.md) - [Headers](properties_Headers.md)

#### Ver también

[Vertical Padding](#vertical-padding)

---

## Relleno vertical

Establece un relleno vertical para las celdas. El valor se establece en píxeles (por defecto = 0).

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                                  |
| --------------- | -------------- | ------------------------------------------------- |
| verticalPadding | number         | Number of pixels (must be >=0) |

#### Objetos soportados

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Footers](properties_Footers.md) - [Headers](properties_Headers.md)

#### Ver también

[Horizontal Padding](#horizontal-padding)

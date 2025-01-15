---
id: propertiesCoordinatesAndSizing
title: Coordenadas y dimensiones
---

## Altura de línea automática

Esta propiedad sólo está disponible para los list boxes con las siguientes [fuentes de datos](properties_Object.md#data-source):

- collection o entity selection,
- array (no jerárquico).

Esta propiedad no está seleccionada por defecto. Cuando se utiliza para al menos una columna, la altura de cada línea de la columna será calculada automáticamente por 4D, y se tendrá en cuenta el contenido de la columna. Tenga en cuenta que sólo se tendrán en cuenta las columnas con la opción seleccionada para calcular el alto de línea.

:::note

Al redimensionar el formulario, si la propiedad de [dimensionamiento horizontal](properties_ResizingOptions.md#horizontal-sizing) "Agrandar" fue asignada al list box, la columna más a la derecha se agrandará más allá de su ancho máximo, si es necesario.

:::

Cuando esta propiedad está activada, la altura de cada línea se calcula automáticamente para que el contenido de la celda quepa por completo sin ser truncado (a menos que la opción [Wordwrap](properties_Display.md#wordwrap) esté desactivada.

- El cálculo de la altura de línea tiene en cuenta:
  - todo tipo de contenido (texto, números, fechas, horas, imágenes (el cálculo depende del formato de la imagen), objetos),
  - todo tipo de control (entradas, casillas de selección, listas, listas desplegables),
  - fuentes, estilos y tamaños de letra,
  - la opción [Wordwrap](properties_Display.md#wordwrap): si está desactivada, la altura se basa en el número de párrafos (las líneas se truncan); si está activada, la altura se basa en el número de líneas (no se trunca).

- El cálculo de la altura de línea no tiene en cuenta:
  - contenido de columna oculta
  - Para los list box de tipo array, esta propiedad sólo está disponible si la opción [Altura de línea automática](#automatic-row-height) no está seleccionada.

:::caution

\> Since it requires additional calculations at runtime, the automatic row height option could affect the scrolling fluidity of your list box, in particular when it contains a large number of rows.

:::

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles |
| ------------- | -------------- | ---------------- |
| rowHeightAuto | boolean        | true, false      |

#### Objetos soportados

[Columna de list box](listbox_overview.md#list-box-columns)

---

## Abajo

Coordenadas inferiores del objeto en el formulario.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles          |
| ------ | -------------- | ------------------------- |
| bottom | number         | mínimo: 0 |

#### Objetos soportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botón](button_overview.md) - [Rejilla de botones](buttonGrid_overview.md) - [Casilla de verificación](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista desplegable](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Lista jerárquica](list_overview.md#overview) - [Entrada](input_overview.md) - [Línea](shapes_overview.md#line) - [List Box](listbox_overview.md#overview) - [Columna List Box](listbox_overview.md#list-box-columns) - [Óvalo](shapes_overview.md#oval) - [Botón imagen](pictureButton_overview.md) - [Menú emergente con imagen](picturePopupMenu_overview.md) - [Área de Plug-in](pluginArea_overview.md#overview) - [Indicadores de progreso](progressIndicator.md) - [Botón de opción](radio_overview.md) - [Regla](ruler.md) - [Rectángulo](shapes_overview.md#rectangle) - [Selector](spinner.md) - [Separador](splitters.md) - [Imagen estática](staticPicture.md) - [Pasos](stepper.md) - [Subformulario](subform_overview.md) - [Control de pestañas](tabControl.md) - [Área de texto](text.md) - [Área web](webArea_overview.md#overview)

---

## Izquierda

Coordenadas de izquierda del objeto en el formulario.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles          |
| ------ | -------------- | ------------------------- |
| left   | number         | mínimo: 0 |

#### Objetos soportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botón](button_overview.md) - [Rejilla de botones](buttonGrid_overview.md) - [Casilla de verificación](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista desplegable](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Lista jerárquica](list_overview.md#overview) - [Entrada](input_overview.md) - [List Box](listbox_overview.md#overview) - [Línea](shapes_overview.md#line) - [Columna List Box](listbox_overview.md#list-box-columns) - [Óvalo](shapes_overview.md#oval) - [Botón imagen](pictureButton_overview.md) - [Menú emergente con imagen](picturePopupMenu_overview.md) - [Área de Plug-in](pluginArea_overview.md#overview) - [Indicadores de progreso](progressIndicator.md) - [Botón de opción](radio_overview.md) - [Regla](ruler.md) - [Rectángulo](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Separador](splitters.md) - [Imagen estática](staticPicture.md) - [Pasos](stepper.md) - [Subformulario](subform_overview.md) - [Control de pestañas](tabControl.md) - [Área de texto](text.md) - [Área web](webArea_overview.md#overview)

---

## Derecha

Coordenadas de derecha del objeto en el formulario.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles          |
| ------ | -------------- | ------------------------- |
| right  | number         | mínimo: 0 |

#### Objetos soportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botón](button_overview.md) - [Rejilla de botones](buttonGrid_overview.md) - [Casilla de verificación](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista desplegable](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Lista jerárquica](list_overview.md#overview) - [Entrada](input_overview.md) - [List Box](listbox_overview.md#overview) - [Línea](shapes_overview.md#line) - [Columna List Box](listbox_overview.md#list-box-columns) - [Óvalo](shapes_overview.md#oval) - [Botón imagen](pictureButton_overview.md) - [Menú emergente con imagen](picturePopupMenu_overview.md) - [Área de Plug-in](pluginArea_overview.md#overview) - [Indicadores de progreso](progressIndicator.md) - [Botón de opción](radio_overview.md) - [Regla](ruler.md) - [Rectángulo](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Separador](splitters.md) - [Imagen estática](staticPicture.md) - [Pasos](stepper.md) - [Subformulario](subform_overview.md) - [Control de pestañas](tabControl.md) - [Área de texto](text.md) - [Área web](webArea_overview.md#overview)

---

## Arriba

Coordenadas superiores del objeto en el formulario.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles          |
| ------ | -------------- | ------------------------- |
| top    | number         | mínimo: 0 |

#### Objetos soportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botón](button_overview.md) - [Rejilla de botones](buttonGrid_overview.md) - [Casilla de verificación](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista desplegable](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Lista jerárquica](list_overview.md#overview) - [Entrada](input_overview.md) - [List Box](listbox_overview.md#overview) - [Línea](shapes_overview.md#line) - [Columna List Box](listbox_overview.md#list-box-columns) - [Óvalo](shapes_overview.md#oval) - [Botón imagen](pictureButton_overview.md) - [Menú emergente con imagen](picturePopupMenu_overview.md) - [Área de Plug-in](pluginArea_overview.md#overview) - [Indicadores de progreso](progressIndicator.md) - [Botón de opción](radio_overview.md) - [Regla](ruler.md) - [Rectángulo](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Separador](splitters.md) - [Imagen estática](staticPicture.md) - [Pasos](stepper.md) - [Subformulario](subform_overview.md) - [Control de pestañas](tabControl.md) - [Área de texto](text.md) - [Área web](webArea_overview.md#overview)

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

Con [áreas de texto](text.md) y [entradas](input_overview.md):

- la propiedad de radio de la esquina sólo está disponible con los [estilos de línea de borde](properties_BackgroundAndBorder.md#border-line-style) "ninguno", "sólido" o "punteado",
- la redondez de la esquina se dibuja fuera del área del objeto (el objeto aparece más grande en el formulario pero su [ancho](properties_CoordinatesAndSizing.md#width) y [alto](properties_CoordinatesAndSizing.md#height) no se amplían).

![](../assets/en/FormObjects/radius-text.png)

:::

También se puede definir esta propiedad utilizando los comandos [OBJECT Get corner radius](https://doc.4d.com/4dv19/help/command/en/page1323.html) y [OBJECT SET CORNER RADIUS](https://doc.4d.com/4dv19/help/command/en/page1324.html).

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles          |
| ------------ | -------------- | ------------------------- |
| borderRadius | integer        | mínimo: 0 |

#### Objetos soportados

[Entrada](input_overview.md) - [Rectángulo](shapes_overview.md#rectangle) - [Área de texto](text.md)

---

## Altura

Esta propiedad designa el tamaño vertical de un objeto.

> Algunos objetos pueden tener una altura predefinida que no se puede modificar.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles          |
| ------ | -------------- | ------------------------- |
| height | number         | mínimo: 0 |

#### Objetos soportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botón](button_overview.md) - [Rejilla de botones](buttonGrid_overview.md) - [Casilla de verificación](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista desplegable](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Lista jerárquica](list_overview.md#overview) - [Entrada](input_overview.md) - [List Box](listbox_overview.md#overview) - [Línea](shapes_overview.md#line) - [Columna List Box](listbox_overview.md#list-box-columns) - [Óvalo](shapes_overview.md#oval) - [Botón imagen](pictureButton_overview.md) - [Menú emergente con imagen](picturePopupMenu_overview.md) - [Área de Plug-in](pluginArea_overview.md#overview) - [Indicadores de progreso](progressIndicator.md) - [Botón de opción](radio_overview.md) - [Regla](ruler.md) - [Rectángulo](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Separador](splitters.md) - [Imagen estática](staticPicture.md) - [Pasos](stepper.md) - [Subformulario](subform_overview.md) - [Control de pestañas](tabControl.md) - [Área de texto](text.md) - [Área web](webArea_overview.md#overview)

---

## Ancho

Esta propiedad designa el tamaño horizontal de un objeto.

> - Algunos objetos pueden tener una altura predefinida que no se puede modificar.
> - Si la propiedad [Redimensionable](properties_ResizingOptions.md#resizable) se utiliza para una [columna de list box](listbox_overview.md#list-box-columns), el usuario también puede cambiar manualmente el tamaño de la columna.
> - Al redimensionar el formulario, si la propiedad de [dimensionamiento horizontal "Agrandar"](properties_ResizingOptions.md#horizontal-sizing) fue asignada al list box, la columna más a la derecha se agrandará más allá de su ancho máximo, si es necesario.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles          |
| ------ | -------------- | ------------------------- |
| ancho  | number         | mínimo: 0 |

#### Objetos soportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botón](button_overview.md) - [Rejilla de botones](buttonGrid_overview.md) - [Casilla de verificación](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista desplegable](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Lista jerárquica](list_overview.md#overview) - [Entrada](input_overview.md) - [List Box](listbox_overview.md#overview) - [Línea](shapes_overview.md#line) - [Columna List Box](listbox_overview.md#list-box-columns) - [Óvalo](shapes_overview.md#oval) - [Botón imagen](pictureButton_overview.md) - [Menú emergente con imagen](picturePopupMenu_overview.md) - [Área de Plug-in](pluginArea_overview.md#overview) - [Indicadores de progreso](progressIndicator.md) - [Botón de opción](radio_overview.md) - [Rectángulo](shapes_overview.md#rectangle) - [Regla](ruler.md) - [Selector](spinner.md) - [Separador](splitters.md) - [Imagen estática](staticPicture.md) - [Pasos](stepper.md) - [Subformulario](subform_overview.md) - [Control de pestañas](tabControl.md) - [Área de texto](text.md) - [Área web](webArea_overview.md#overview)

---

## Ancho máximo

El ancho máximo de la columna (en píxeles). El ancho de la columna no puede aumentarse más allá de este valor al redimensionar la columna o el formulario.

> Al redimensionar el formulario, si la propiedad de [dimensionamiento horizontal "Agrandar"](properties_ResizingOptions.md#horizontal-sizing) fue asignada al list box, la columna más a la derecha se agrandará más allá de su ancho máximo, si es necesario.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles          |
| -------- | -------------- | ------------------------- |
| maxWidth | number         | mínimo: 0 |

#### Objetos soportados

[Columna de list box](listbox_overview.md#list-box-columns)

---

## Ancho mínimo

El ancho mínimo de la columna (en píxeles). El ancho de la columna no puede reducirse más allá de este valor al redimensionar la columna o el formulario.

> Al redimensionar el formulario, si la propiedad de [dimensionamiento horizontal "Agrandar"](properties_ResizingOptions.md#horizontal-sizing) fue asignada al list box, la columna más a la derecha se agrandará más allá de su ancho máximo, si es necesario.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles          |
| -------- | -------------- | ------------------------- |
| minWidth | number         | mínimo: 0 |

#### Objetos soportados

[Columna de list box](listbox_overview.md#list-box-columns)

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

[Array altura de línea](#row-height-array)

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
> - Para los array y list boxes colecciones/selección de entidades, esta propiedad sólo está disponible si la opción [Alto de línea automático](#automatic-row-height) no está seleccionada.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                                 |
| --------------- | -------------- | ------------------------------------------------ |
| rowHeightSource | string         | Nombre de una variable array 4D. |

#### Objetos soportados

[List Box](listbox_overview.md#overview)

#### Ver también

[Altura de fila](#altura-fila)

---

## Relleno horizontal

Establece un relleno horizontal para las celdas. El valor se establece en píxeles (por defecto = 0).

![](../assets/en/FormObjects/padding.png)

#### Gramática JSON

| Nombre            | Tipos de datos | Valores posibles                                    |
| ----------------- | -------------- | --------------------------------------------------- |
| horizontalPadding | number         | Número de píxeles (debe ser >=0) |

#### Objetos soportados

[List Box](listbox_overview.md#overview) - [Columna List Box](listbox_overview.md#list-box-columns) - [Pies de página](properties_Footers.md) - [Encabezados](properties_Headers.md)

#### Ver también

[Relleno vertical](#vertical-padding)

---

## Relleno vertical

Establece un relleno vertical para las celdas. El valor se establece en píxeles (por defecto = 0).

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                                    |
| --------------- | -------------- | --------------------------------------------------- |
| verticalPadding | number         | Número de píxeles (debe ser >=0) |

#### Objetos soportados

[List Box](listbox_overview.md#overview) - [Columna List Box](listbox_overview.md#list-box-columns) - [Pies de página](properties_Footers.md) - [Encabezados](properties_Headers.md)

#### Ver también

[Relleno horizontal](#horizontal-padding)

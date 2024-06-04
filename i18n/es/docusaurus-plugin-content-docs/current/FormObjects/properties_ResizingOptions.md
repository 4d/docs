---
id: propertiesResizingOptions
title: Opciones de redimensionamiento
---

## Redimensionamiento columnas auto

When this property is enabled (`rightToLeft` value in JSON), list box columns are automatically resized along with the list box, within the limits of the [minimum](properties_CoordinatesAndSizing.md#minimum-width) and [maximum](properties_CoordinatesAndSizing.md#maximum-width) widths defined.

Cuando esta propiedad está desactivada (valor `legacy` en JSON), sólo se redimensiona la columna más a la derecha del listbox, aunque su ancho supere el valor máximo definido.

### Cómo funciona el redimensionamiento automático de las columnas

- A medida que el ancho del list box aumenta, sus columnas se amplían, una a una, empezando de derecha a izquierda, hasta que cada una alcanza su [ancho máximo](properties_CoordinatesAndSizing.md#maximum-width). Sólo se redimensionan las columnas con la propiedad [Resizable](#resizable) seleccionada.

- El mismo procedimiento se aplica cuando el ancho del list box disminuye, pero en orden inverso (_es decir,_, las columnas se redimensionan empezando de izquierda a derecha). Cuando cada columna ha alcanzado su [ancho mínimo](properties_CoordinatesAndSizing.md#minimum-width), la barra de desplazamiento horizontal vuelve a activarse.

- Las columnas se redimensionan sólo cuando la barra de desplazamiento horizontal no está "activa"; _es decir,_, todas las columnas son totalmente visibles en el list box en su tamaño actual. **Nota**: si la barra de desplazamiento horizontal está oculta, esto no altera su estado: una barra de desplazamiento puede seguir estando activa, aunque no sea visible.

- Una vez que todas las columnas alcanzan su tamaño máximo, dejan de ampliarse y en su lugar se añade una columna en blanco (falsa) a la derecha para rellenar el espacio extra. Si hay una columna falsa (en blanco), cuando el ancho del list box disminuye, ésta es la primera área que se reduce.

![](../assets/en/FormObjects/property_columnAutoResizing.png)

#### Sobre la columna falsa (en blanco)

La apariencia de la columna falsa coincide con la de las columnas existentes; tendrá un encabezado y/o un pie de página falsos si estos elementos están presentes en las columnas del list box existentes y tendrá aplicados los mismos colores de fondo.

Se puede hacer clic en el encabezado y/o en el pie de página falsos, pero esto no tiene ningún efecto sobre las otras columnas (por ejemplo: no se realiza ninguna ordenación); no obstante, los eventos se generan en consecuencia `On Clicked`, \`On Header Cl

Si se hace clic en una celda de la columna falsa, el comando [LISTBOX GET CELL POSITION](https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-GET-CELL-POSITION.301-4311145.en.html) devuelve "X+1" para su número de columna (donde X es el número de columnas existent

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles        |
| ------------ | -------------- | ----------------------- |
| resizingMode | string         | "rightToLeft", "legacy" |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Dimensionamiento horizontal

Esta propiedad indica si el tamaño horizontal de un objeto debe ser movido o redimensionado cuando un usuario cambia el tamaño del formulario. También puede definirse dinámicamente por el comando del lenguaje `OBJECT SET RESIZING OPTIONS`.

Hay tres opciones disponibles:

| Option   | Valor JSON | Result                                                                                                                                                |
| -------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agrandar | "grow"     | El mismo porcentaje se aplica al ancho del objeto cuando el usuario redimensiona el ancho de la ventana,                                              |
| Mover    | "move"     | El objeto se desplaza la misma cantidad a la izquierda o a la derecha que el aumento del ancho cuando el usuario redimensiona el ancho de la ventana, |
| Ninguno  | "fixed"    | El objeto permanece inmóvil cuando se cambia el tamaño del formulario                                                                                 |

> Esta propiedad funciona junto con la propiedad [Dimensionamiento vertical](#tamaño-vertical).

#### Gramática JSON

| Nombre  | Tipos de datos | Valores posibles        |
| ------- | -------------- | ----------------------- |
| sizingX | string         | "grow", "move", "fixed" |

#### Objetos soportados

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md#overview)

---

## Dimensionamiento vertical

Esta propiedad indica si el tamaño vertical de un objeto debe ser movido o redimensionado cuando un usuario cambia el tamaño del formulario. También puede definirse dinámicamente por el comando del lenguaje `OBJECT SET RESIZING OPTIONS`.

Hay tres opciones disponibles:

| Option   | Valor JSON | Result                                                                                                                                                |
| -------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agrandar | "grow"     | El mismo porcentaje se aplica a la altura del objeto cuando el usuario redimensiona el ancho de la ventana,                                           |
| Mover    | "move"     | El objeto se desplaza la misma cantidad hacia arriba o hacia abajo que el aumento de la altura cuando el usuario redimensiona el ancho de la ventana, |
| Ninguno  | "fixed"    | El objeto permanece inmóvil cuando se cambia el tamaño del formulario                                                                                 |

> Esta propiedad funciona junto con la propiedad [Dimensionamiento horizontal](#horizontal-sizing).

#### Gramática JSON

| Nombre  | Tipos de datos | Valores posibles        |
| ------- | -------------- | ----------------------- |
| sizingY | string         | "grow", "move", "fixed" |

#### Objetos soportados

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md#overview)

---

## Pulsador

Cuando un objeto splitter tiene esta propiedad, los otros objetos a su derecha (splitter vertical) o debajo de él (separador horizontal) son empujados al mismo tiempo que el splitter, sin parar.

Here is the result of a “pusher” splitter being moved:
![](../assets/en/FormObjects/splitter_pusher1.png)

![](../assets/en/FormObjects/splitter_pusher3.png)

Cuando esta propiedad no se aplica al splitter, el resultado es el siguiente:

![](../assets/en/FormObjects/splitter_pusher2.png)

#### Gramática JSON

| Nombre       | Tipos de datos |                              Valores posibles                              |
| :----------- | :------------: | :------------------------------------------------------------------------: |
| splitterMode |     string     | "move" (pusher), "resize" (standard) |

#### Objetos soportados

[Separadores](splitters.md)

---

## Redimensionable

Designa si el tamaño de la columna puede ser modificado por el usuario.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles |
| :-------------- | :------------: | :--------------: |
| redimensionable |     boolean    |  "true", "false" |

#### Objetos soportados

[List Box Column](listbox_overview.md#list-box-columns)

---
id: propertiesBackgroundAndBorder
title: Fondo y borde
---

## Color de fondo alternado

Permite definir un color de fondo diferente para las líneas o columnas impares de un list box. By default, _Automatic_ is selected: the column uses the alternate background color set at the list box level.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                                                        |
| ------------- | -------------- | ----------------------------------------------------------------------- |
| alternateFill | string         | todos los valores css; "transparent"; "automatic"; "automaticAlternate" |

#### Objetos soportados

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Color de fondo / Color de relleno

Define el color de fondo de un objeto.

In the case of a list box, by default _Automatic_ is selected: the column uses the background color set at the list box level.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                         |
| ------ | -------------- | ---------------------------------------- |
| fill   | string         | un valor css; "transparent"; "automatic" |

#### Objetos soportados

[Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [Oval](shapes_overview.md#oval) - [Rectangle](shapes_overview.md#rectangle) - [Text Area](text.md)

#### Ver también

[Transparent](#transparent)

---

## Expresión color de fondo

`List box de tipo colección y de tipo selección de entidades`

Una expresión o una variable (no se pueden utilizar variables array) para aplicar un color de fondo personalizado a cada línea del list box. La expresión o la variable se evaluará para cada línea mostrada y debe devolver un valor de color RGB. For more information, refer to the description of the [`OBJECT SET RGB COLORS`](https://doc.4d.com/4dv20/help/command/en/page628.html) command in the _4D Language Reference manual_.

You can also set this property using the [`LISTBOX SET PROPERTY`](https://doc.4d.com/4dv20/help/command/en/page1440.html) command with `lk background color expression` constant.

> With collection or entity selection type list boxes, this property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                                 |
| ------------- | -------------- | ------------------------------------------------ |
| rowFillSource | string         | Una expresión que devuelve un valor de color RGB |

#### Objetos soportados

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Estilo del borde

Permite definir un estilo estándar para el borde del objeto.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                                  |
| ----------- | -------------- | ----------------------------------------------------------------- |
| borderStyle | text           | "system", "none", "solid", "dotted", "raised", "sunken", "double" |

#### Objetos soportados

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro areas](writeProArea_overview.md) - [Buttons](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicator](progressIndicator.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Stepper](stepper.md) - [Subform](subform_overview.md#overview) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## Tipo de línea punteada

Describe el tipo de línea punteada como una secuencia de puntos blancos y negros.

#### Gramática JSON

| Nombre          | Tipos de datos             | Valores posibles                                                                                                                                 |
| --------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| strokeDashArray | arrays numéricos o cadenas | Ej. "6 1" o \[6,1\] para una secuencia de 6 puntos negros y 1 punto blanco |

#### Objetos soportados

[Rectangle](shapes_overview.md#rectangle) - [Oval](shapes_overview.md#oval) - [Line](shapes_overview.md#line)

---

## Ocultar líneas vacías finales

Controla la visualización de las líneas vacías adicionales añadidas en la parte inferior de un objeto list box. Por defecto, 4D añade esas líneas adicionales para llenar el área vacía:

![](../assets/en/FormObjects/property_hideExtraBlankRows1.png)

Puede eliminar estas líneas vacías seleccionando esta opción. La parte inferior del objeto del list box se deja vacía:

![](../assets/en/FormObjects/property_hideExtraBlankRows2.png)

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles |
| ------------------ | -------------- | ---------------- |
| hideExtraBlankRows | boolean        | true, false      |

#### Objetos soportados

[List Box](listbox_overview.md#overview)

---

## Color de línea

Designa el color de las líneas del objeto.
El color puede ser especificado por:

- un nombre de color - como "red"
- un valor HEX - como "# ff0000"
- un valor RVB - como "rgb (255,0,0)"

You can also set this property using the [`OBJECT SET RGB COLORS`](https://doc.4d.com/4dv20/help/command/en/page628.html) command.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                         |
| ------ | -------------- | ---------------------------------------- |
| stroke | string         | un valor css, "transparent", "automatic" |

> This property is also available for text based objects, in which case it designates both the font color and the object's lines, see [Font color](properties_Text.md#font-color).

#### Objetos soportados

[Line](shapes_overview.md#line) - [Oval](shapes_overview.md#oval) - [Rectangle](shapes_overview.md#rectangle)

---

## Ancho de línea

Designa el grosor de una línea.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                                  |
| ----------- | -------------- | ----------------------------------------------------------------- |
| strokeWidth | number         | 0 for smallest width on a printed form, or any integer value < 20 |

#### Objetos soportados

[Line](shapes_overview.md#line) - [Oval](shapes_overview.md#oval) - [Rectangle](shapes_overview.md#rectangle)

---

## Array colores de fondo

`Array type list boxes`

El nombre de un array para aplicar un color de fondo personalizado a cada línea o columna del list box.

Debe introducirse el nombre de un array Entero largo. Cada elemento de este array corresponde a una línea del list box (si se aplica al list box) o a una celda de la columna (si se aplica a una columna), por lo que el array debe tener el mismo tamaño que el array asociado a la columna. You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv20/4D/20.1/SET-RGB-COLORS.302-6481080.en.html) theme. Si desea que la celda herede el color de fondo definido en el nivel superior, pase el valor -255 al elemento del array correspondiente.

Por ejemplo, dado un list box en el que las líneas tienen un color gris/gris claro alternado, definido en las propiedades del list box. También se ha definido para el list box un array de color de fondo con el fin de cambiar a naranja claro el color de las líneas en las que al menos un valor es negativo:

```4d
 <>_BgndColors{$i}:=0x00FFD0B0 // orange
 <>_BgndColors{$i}:=-255 // default value
```

![](../assets/en/FormObjects/listbox_styles1.png)

A continuación, quiere colorear las celdas con valores negativos en naranja oscuro. To do this, you set a background color array for each column, for example `<>_BgndColor_1`, `<>_BgndColor_2` and `<>_BgndColor_3`. Los valores de estos arrays tienen prioridad sobre los definidos en las propiedades del list box, así como los del array de color de fondo general:

```4d
 <>_BgndColorsCol_3{2}:=0x00FF8000 // dark orange
 <>_BgndColorsCol_2{5}:=0x00FF8000
 <>_BgndColorsCol_1{9}:=0x00FF8000
 <>_BgndColorsCol_1{16}:=0x00FF8000
```

![](../assets/en/FormObjects/listbox_styles2.png)

You can get the same result using the [`LISTBOX SET ROW FONT STYLE`](https://doc.4d.com/4dv20/help/command/en/page1268.html) and [`LISTBOX SET ROW COLOR`](https://doc.4d.com/4dv20/help/command/en/page1270.html) commands. Tienen la ventaja de permitirle omitir el tener que predefinir arrays de estilo/color para las columnas: en su lugar son creadas dinámicamente por los comandos.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                                    |
| ------------- | -------------- | --------------------------------------------------- |
| rowFillSource | string         | El nombre de un array entero largo. |

#### Objetos soportados

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Transparente

Define el fondo del list box como "Transparent". When set, any [alternate background color](#alternate-background-color) or [background color](#background-color-fill-color) defined for the column is ignored.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
| fill   | text           | "transparent"    |

#### Objetos soportados

[List Box](listbox_overview.md#overview)

#### Ver también

[Background Color / Fill Color](#background-color-fill-color)

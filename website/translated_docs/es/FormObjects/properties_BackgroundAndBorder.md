---
id: propertiesBackgroundAndBorder
title: Fondo y borde
---

---
## Color de fondo alternado

Permite definir un color de fondo diferente para las líneas o columnas impares de un list box. Por defecto, *Automático* está seleccionado: la columna utiliza el color de fondo alternativo definido en el nivel del list box.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                         |
| ------------- | -------------- | ---------------------------------------- |
| alternateFill | cadena         | un valor css; "transparent"; "automatic" |

#### Objetos soportados
[List Box](listbox_overview.md#overview) - [Columna List Box](listbox_overview.md#list-box-columns)



---
## Color de fondo / Color de relleno

Define el color de fondo de un objeto.

En el caso de un list box, por defecto se selecciona *Automático*: la columna utiliza el color de fondo definido al nivel del list box.

#### Gramática JSON


| Nombre | Tipos de datos | Valores posibles                         |
| ------ | -------------- | ---------------------------------------- |
| fill   | cadena         | un valor css; "transparent"; "automatic" |

#### Objetos soportados

[Lista jerárquica](list_overview.md) - [List Box](listbox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns) - [Pie de List Box](listbox_overview.md#list-box-footers) - [Óvalo](shapes_overview.md#oval) - [Rectángulo](shapes_overview.md#rectangle) - [Área de texto](text.md)

#### Ver también
[Transparente](#transparent)


---
## Expresión color de fondo

`List box de tipo colección y de tipo selección de entidades`

Una expresión o una variable (no se pueden utilizar variables array) para aplicar un color de fondo personalizado a cada línea del list box. La expresión o la variable se evaluará para cada línea mostrada y debe devolver un valor de color RGB. Para más información, consulte la descripción del comando `OBJECT SET RGB COLORS` en el manual *Lenguaje de 4D*.

También puede definir esta propiedad utilizando el comando `LISTBOX SET PROPERTY` con la constante `lk background color expression`.
> Con los list box de tipo colección o selección de entidades, esta propiedad también puede definirse utilizando una [Meta Info Expression](properties_Text.md#meta-info-expression).

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                                 |
| ------------- | -------------- | ------------------------------------------------ |
| rowFillSource | cadena         | Una expresión que devuelve un valor de color RGB |

#### Objetos soportados
[List Box](listbox_overview.md#overview) - [Columna List Box](listbox_overview.md#list-box-columns)






---
## Estilo del borde

Permite definir un estilo estándar para el borde del objeto.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                                  |
| ----------- | -------------- | ----------------------------------------------------------------- |
| borderStyle | texto          | "system", "none", "solid", "dotted", "raised", "sunken", "double" |

#### Objetos soportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botones](button_overview.md) - [Rejilla de botones](buttonGrid_overview.md) - [Casilla de selección](list_overview.md#overview) - [Área de entrada](input_overview.md) - [List Box](listbox_overview.md#overview) - [Botón imagen](pictureButton_overview.md) - [Menú emergente de imagen](picturePopupMenu_overview.md) - [Área de plugin](pluginArea_overview.md#overview) - [Indicador de progreso](progressIndicator.md) - [Regla](ruler.md) - [Spinner](spinner.md) - [Stepper](stepper.md) - [Subformulario](subform_overview.md#overview) - [Área de texto](text.md) - [Área Web](webArea_overview.md#overview)



---
## Tipo de línea punteada

Describe el tipo de línea punteada como una secuencia de puntos blancos y negros.

#### Gramática JSON

| Nombre          | Tipos de datos             | Valores posibles                                                             |
| --------------- | -------------------------- | ---------------------------------------------------------------------------- |
| strokeDashArray | arrays numéricos o cadenas | Ej. "6 1" o \[6,1\] para una secuencia de 6 puntos negros y 1 punto blanco |

#### Objetos soportados

[Rectángulo](shapes_overview.md#rectangle) - [Óvalo](shapes_overview.md#oval) - [Línea](shapes_overview.md#line)




---
## Ocultar líneas vacías finales

Controla la visualización de las líneas vacías adicionales añadidas en la parte inferior de un objeto list box. Por defecto, 4D añade esas líneas adicionales para llenar el área vacía:

![](assets/en/FormObjects/property_hideExtraBlankRows1.png)

Puede eliminar estas líneas vacías seleccionando esta opción. La parte inferior del objeto del list box se deja vacía:

![](assets/en/FormObjects/property_hideExtraBlankRows2.png)

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles |
| ------------------ | -------------- | ---------------- |
| hideExtraBlankRows | booleano       | true, false      |

#### Objetos soportados

[List Box](listbox_overview.md#overview)




---
## Color de línea

Designates the color of the object's lines. The color can be specified by:

* a color name - like "red"
* un valor HEX - como "# ff0000"
* un valor RVB - como "rgb (255,0,0)"

You can also set this property using the [**OBJECT SET RGB COLORS**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-RGB-COLORS.301-4505456.en.html) command.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                          |
| ------ | -------------- | ----------------------------------------- |
| stroke | cadena         | any css value, "transparent", "automatic" |

> This property is also available for text based objects, in which case it designates both the font color and the object's lines, see [Font color](properties_Text.md#font-color).

#### Objetos soportados

[Línea](shapes_overview.md#line) - [Óvalo](shapes_overview.md#oval) - [Rectángulo](shapes_overview.md#rectangle)



---
## Ancho de línea

Designates the thickness of a line.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                                  |
| ----------- | -------------- | ----------------------------------------------------------------- |
| strokeWidth | number         | 0 for smallest width on a printed form, or any integer value < 20 |

#### Objetos soportados

[Línea](shapes_overview.md#line) - [Óvalo](shapes_overview.md#oval) - [Rectángulo](shapes_overview.md#rectangle)







---
## Array colores de fondo

`List box de tipo array`

The name of an array to apply a custom background color to each row of the list box or column.

The name of a Longint array must be entered. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html) theme. If you want the cell to inherit the background color defined at the higher level, pass the value -255 to the corresponding array element.

For example, given a list box where the rows have an alternating gray/light gray color, defined in the properties of the list box. A background color array has also been set for the list box in order to switch the color of rows where at least one value is negative to light orange:

```4d
 <>_BgndColors{$i}:=0x00FFD0B0 // orange
 <>_BgndColors{$i}:=-255 // valor por defecto
```
![](assets/en/FormObjects/listbox_styles1.png)

A continuación, quiere colorear las celdas con valores negativos en naranja oscuro. To do this, you set a background color array for each column, for example <>_BgndColor_1, <>_BgndColor_2 and <>_BgndColor_3. The values of these arrays have priority over the ones set in the list box properties as well as those of the general background color array:

```4d
 <>_BgndColorsCol_3{2}:=0x00FF8000 // dark orange
 <>_BgndColorsCol_2{5}:=0x00FF8000
 <>_BgndColorsCol_1{9}:=0x00FF8000
 <>_BgndColorsCol_1{16}:=0x00FF8000
```
![](assets/en/FormObjects/listbox_styles2.png)

You can get the same result using the `LISTBOX SET ROW FONT STYLE` and `LISTBOX SET ROW COLOR` commands. They have the advantage of letting you skip having to predefine style/color arrays for the columns: instead they are created dynamically by the commands.


#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles             |
| ------------- | -------------- | ---------------------------- |
| rowFillSource | cadena         | The name of a longint array. |

#### Objetos soportados
[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)





---
## Transparente

Sets the list box background to "Transparent". When set, any [alternate background color](#alternate-background-color) or [background color](#background-color-fill-color) defined for the column is ignored.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
| fill   | texto          | "transparent"    |

#### Objetos soportados
[List Box](listbox_overview.md#overview)

#### Ver también
[Color de fondo / Color de relleno](#background-color-fill-color)

---
id: propertiesText
title: Text
---

---

## Autorizar selector fuente/color

When this property is enabled, the [OPEN FONT PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-FONT-PICKER.301-4505612.en.html) and [OPEN COLOR PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-COLOR-PICKER.301-4505611.en.html) commands can be called to display the system font and color picker windows. A través de estas ventanas, los usuarios pueden cambiar la fuente o el color de un objeto formulario que tenga el foco directamente haciendo clic. Cuando esta propiedad está desactivada (por defecto), los comandos del selector abierto no tienen efecto.

#### Gramática JSON

| Propiedad            | Tipos de datos | Valores posibles                             |
| -------------------- | -------------- | -------------------------------------------- |
| allowFontColorPicker | boolean        | false (por defecto), true |

#### Objetos soportados

[Input](input_overview.md)

---

## Negrita

Ajusta el texto seleccionado para que aparezca más oscuro y pesado.

You can set this property using the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command.

> This is normal text.<br/>
> **This is bold text.**

#### Gramática JSON

| Propiedad  | Tipos de datos | Valores posibles |
| ---------- | -------------- | ---------------- |
| fontWeight | text           | "normal", "bold" |

#### Objetos soportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Itálica

Hace que el texto seleccionado se incline ligeramente hacia la derecha.

You can also set this property via the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command.

> This is normal text.<br/>
> _This is text in italics._

#### Gramática JSON

| Nombre    | Tipos de datos | Valores posibles   |
| --------- | -------------- | ------------------ |
| fontStyle | string         | "normal", "italic" |

#### Objetos soportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Subrayado

Hace que el texto tenga una línea por debajo.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles      |
| -------------- | -------------- | --------------------- |
| textDecoration | string         | "normal", "underline" |

#### Objetos soportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Fuente

This property allows you to specify either the **font theme** or the **font family** used in the object.

> **Font theme** and **font family** properties are mutually exclusive. Un tema de fuente se encarga de los atributos de fuente, incluido el tamaño. Una familia de fuentes permite definir el nombre, el tamaño y el color de la fuente.

### Tema de fuente

La propiedad de tema de fuente designa un nombre de estilo automático. Los estilos automáticos determinan de forma dinámica la familia de fuentes, el tamaño y el color de la fuente que se utilizará para el objeto, según los parámetros sistema. Estos parámetros dependen de:

- la plataforma,
- el lenguaje del sistema,
- y el tipo de objeto de formulario.

Con el tema de fuente, se garantiza que los títulos se muestren siempre de acuerdo con los estándares actuales de la interfaz del sistema. Sin embargo, su tamaño puede variar de una máquina a otra.

Hay tres temas de fuentes disponibles:

- **normal**: automatic style, applied by default to any new object created in the Form editor.
- **main** and **additional** font themes are only supported by [text areas](text.md) and [inputs](input_overview.md). Estos temas están pensados principalmente para diseñar cajas de diálogo. Se refieren a los estilos de fuente utilizados, respectivamente, para el texto principal y la información adicional en las ventanas de su interfaz. A continuación se muestran las cajas de diálogo típicas (macOS y Windows) que utilizan estos temas de fuentes:

![](../assets/en/FormObjects/FontThemes.png)

> Los temas de fuentes gestionan la fuente, así como su tamaño y color. Puede aplicar propiedades de estilo personalizadas (Negrita, Cursiva o Subrayado) sin alterar su funcionamiento.

#### Gramática JSON

| Nombre    | Tipos de datos | Valores posibles               |
| --------- | -------------- | ------------------------------ |
| fontTheme | string         | "normal", "main", "additional" |

#### Objetos soportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

### Familia de fuentes

Hay dos tipos de nombres de familias de fuentes:

- _family-name:_ The name of a font-family, like "times", "courier", "arial", etc.
- _generic-family:_ The name of a generic-family, like "serif", "sans-serif", "cursive", "fantasy", "monospace".

You can set this using the [**OBJECT SET FONT**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT.301-4054834.en.html) command.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                    |
| ---------- | -------------- | ----------------------------------- |
| fontFamily | string         | Nombre de la familia de fuentes CSS |

> 4D recommends using only [web safe](https://www.w3schools.com/cssref/css_websafe_fonts.asp) fonts.

#### Objetos soportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Tamaño fuente

Permite definir el tamaño de la fuente del objeto en puntos.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles                                                           |
| -------- | -------------- | -------------------------------------------------------------------------- |
| fontSize | integer        | Tamaño de letra en puntos. Valor mínimo: 0 |

#### Objetos soportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Color de fuente

Designa el color de la fuente.

> This property also sets the color of object's [border](#border-line-style-dotted-line-type) (if any) when "plain" or "dotted" style is used.

El color puede ser especificado por:

- un nombre de color - como "red"
- un valor HEX - como "# ff0000"
- un valor RVB - como "rgb (255,0,0)"

You can also set this property using the [**OBJECT SET RGB COLORS**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-RGB-COLORS.301-4505456.en.html) command.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                         |
| ------ | -------------- | ---------------------------------------- |
| stroke | string         | un valor css, "transparent", "automatic" |

#### Objetos soportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Progress Indicators](progressIndicator.md) - [Ruler](ruler.md) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Expresión color fuente

`Selection and collection/entity selection type list boxes`

Se utiliza para aplicar un color de fuente personalizado a cada línea del list box. Debe utilizar valores de color RGB. For more information about this, refer to the description of the [OBJECT SET RGB COLORS](https://doc.4d.com/4dv19R/help/command/en/page628.html) command in the 4D Language Reference manual.

Debe introducir una expresión o una variable (no se pueden utilizar variables de tipo array). La expresión o variable se evaluará para cada línea mostrada. You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html) theme.

You can also set this property using the `LISTBOX SET PROPERTY` command with `lk font color expression` constant.

> This property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).

The following example uses a variable name: enter _CompanyColor_ for the **Font Color Expression** and, in the form method, write the following code:

```4d
CompanyColor:=Choose([Companies]ID;Background color;Light shadow color;   
Foreground color;Dark shadow color)
```

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles       |
| --------------- | -------------- | ---------------------- |
| rowStrokeSource | string         | Expresión color fuente |

#### Objetos soportados

[List Box](listbox_overview.md#overview)

---

## Expresión estilo

`Selection and collection/entity selection type list boxes`

Utilizado para aplicar un estilo de fuente personalizado a cada línea de list box o de cada celda de la columna.

Debe introducir una expresión o una variable (no se pueden utilizar variables de tipo array). La expresión o variable se evaluará para cada línea mostrada (si se aplica al list box) o cada celda mostrada (si se aplica a una columna). You can use the constants of the [Font Styles](https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html) theme.

Ejemplo:

```4d
Choose([Companies]ID;Bold;Plain;Italic;Underline)
```

You can also set this property using the `LISTBOX SET PROPERTY` command with `lk font style expression` constant.

> This property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles                                                     |
| -------------- | -------------- | -------------------------------------------------------------------- |
| rowStyleSource | string         | Expresión de estilo a evaluar para cada línea/celda. |

#### Objetos soportados

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Alineación horizontal

Ubicación horizontal del texto dentro del área que lo contiene.

#### Gramática JSON

| Nombre    | Tipos de datos | Valores posibles                                  |
| --------- | -------------- | ------------------------------------------------- |
| textAlign | string         | "right", "center", "left", "automatic", "justify" |

:::note

- "automatic" is not supported by [check boxes](checkbox_overview.md) and [radio buttons](radio_overview.md)
- "justify" is only supported by [inputs](input_overview.md) and [text areas](text.md)

:::

#### Objetos soportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) (all styles except Regular and Flat) - [Group Box](groupBox.md) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Radio Button](radio_overview.md) (all styles except Regular and Flat) - [Text Area](text.md)

---

## Alineamiento vertical

Ubicación vertical del texto dentro del área que lo contiene.

The **Default** option (`automatic` JSON value) sets the alignment according to the type of data found in each column:

- `bottom` for all data (except pictures) and
- `top` for picture type data.

This property can also be handled by the [OBJECT Get vertical alignment](https://doc.4d.com/4dv19R/help/command/en/page1188.html) and [OBJECT SET VERTICAL ALIGNMENT](https://doc.4d.com/4dv19R/help/command/en/page1187.html) commands.

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                       |
| ------------- | -------------- | -------------------------------------- |
| verticalAlign | string         | "automatic", "top", "middle", "bottom" |

#### Objetos soportados

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers)

---

## Meta Info expression

`Collection or entity selection type list boxes`

Indica una expresión o una variable que se evaluará para cada línea mostrada. Permite definir todo un conjunto de atributos texto de las líneas. You must pass an **object variable** or an **expression that returns an object**. Se soportan las siguientes propiedades:

| Nombre de propiedad | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| stroke              | string  | Color de la fuente. Todo color CSS (por ejemplo: "#FF00FF"), "automatic", "transparent"                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| fill                | string  | Color de fondo. Todo color CSS (por ejemplo: "#F00FFF"), "automatic", "transparent"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| fontStyle           | string  | "normal","italic"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| fontWeight          | string  | "normal","bold"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| textDecoration      | string  | "normal","underline"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| unselectable        | boolean | Designates the corresponding row as not being selectable (_i.e._, highlighting is not possible). Las áreas que se pueden introducir ya no se pueden introducir si esta opción está activada, a menos que la opción "Edición con un solo clic" también esté activada. Los controles como las casillas de selección y las listas siguen siendo funcionales. Esta configuración se ignora si el modo de selección del list box es "Ninguno". Valores por defecto: False. |
| disabled            | boolean | Desactiva la línea correspondiente. Las áreas editables ya no son accesibles si esta opción está activada. Text and controls (checkboxes, lists, etc.) appear dimmed or grayed out. Valores por defecto: False.                                                                                                                                                                                                                                                                                       |

La propiedad especial "cell" permite aplicar un conjunto de propiedades a una sola columna:

| Nombre de propiedad |              |                | Tipo   | Descripción                                                                                                                                                                                                                                                                                      |
| ------------------- | ------------ | -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cell                |              |                | object | Propiedades aplicables a una o varias columnas                                                                                                                                                                                                                                                   |
|                     | _columnName_ |                | object | _columnName_ is the object name of the list box column                                                                                                                                                                                                                                           |
|                     |              | _propertyName_ | string | las propiedades "stroke", "fill", "fontStyle", "fontWeight" o "textDecoration" (ver arriba). **Note**: "unselectable" and "disabled" properties can only be defined at row level. Se ignoran si se pasan en el objeto "celda" |

> Style settings made with this property are ignored if other style settings are already defined through expressions (_i.e._, [Style Expression](#style-expression), [Font Color Expression](#font-color-expression), [Background Color Expression](#background-color-expression)).

**Examples**

In a _Color_ project method, write the following code:

```4d
//Color method
//Sets font color for certain rows and background color for Col2 and Col3 columns
Form.meta:=New object
If(This.ID>5) //ID is an attribute of collection objects/entities
  Form.meta.stroke:="purple"
  Form.meta.cell:=New object("Col2";New object("fill";"black");\
  	"Col3";New object("fill";"red"))
Else
  Form.meta.stroke:="orange"
End if
```

**Best Practice:** For optimization reasons, it is usually recommended to create the `meta.cell` object once in the form method:

```4d
  //form method
 Case of
    :(Form event code=On Load)
       Form.colStyle:=New object("Col2";New object("fill";"black");\
       	"Col3";New object("fill";"red"))  
 // you can also define other style sets  
       Form.colStyle2:=New object("Col2";New object("fill";"green");\
       	"Col3";New object("fontWeight";"bold"))  
 End case
```

Then, the _Color_ method would contain:

```4d
  //Color method
 ...
 If(This.ID>5)
    Form.meta.stroke:="purple"
    Form.meta.cell:=Form.colStyle //reuse the same object for better performance
 Else
 	Form.meta.stroke:="orange"
	Form.meta.cell:=Form.colStyle2
 End if
 ...
```

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                     |
| ---------- | -------------- | -------------------------------------------------------------------- |
| metaSource | string         | Expresión de objeto a evaluar para cada línea/celda. |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Multistyle

Esta propiedad permite la posibilidad de utilizar estilos específicos en el área seleccionada. When this option is checked, 4D interprets any `<SPAN> HTML` tags found in the area.

Por defecto, esta opción no está activa.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles |
| ---------- | -------------- | ---------------- |
| styledText | boolean        | true, false      |

#### Objetos soportados

[Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Orientación

Modifica la orientación (rotación) de un área de texto. Las áreas de texto pueden girarse en incrementos de 90°. Cada valor de orientación se aplica manteniendo el mismo punto de partida inferior izquierdo para el objeto:

| Valor de orientación               | Result                                         |
| ---------------------------------- | ---------------------------------------------- |
| 0 (por defecto) | ![](../assets/en/FormObjects/orientation1.png) |
| 90                                 | ![](../assets/en/FormObjects/orientation2.png) |
| 180                                | ![](../assets/en/FormObjects/orientation3.png) |
| 270                                | ![](../assets/en/FormObjects/orientation4.png) |

In addition to [static text areas](text.md), [input](input_overview.md) text objects can be rotated when they are non-[enterable](properties_Entry.md#enterable). Cuando se aplica una propiedad de rotación a un objeto de entrada, se elimina la propiedad editable (si la hay). Este objeto se excluye entonces del orden de entrada.

#### Gramática JSON

| Nombre    | Tipos de datos | Valores posibles |
| --------- | -------------- | ---------------- |
| textAngle | number         | 0, 90, 180, 270  |

#### Objetos soportados

[Input](input_overview.md) (non-enterable) - [Text Area](text.md)

---

## Array colores de fuente

`Array type list boxes`

Permite definir un color de fuente personalizado para cada línea del list box o celda de la columna.

Se debe utilizar el nombre de un array Entero largo. Cada elemento de este array corresponde a una línea del list box (si se aplica al list box) o a una celda de la columna (si se aplica a una columna), por lo que el array debe tener el mismo tamaño que el array asociado a la columna. You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html) theme. Si desea que la celda herede el color de fondo definido en el nivel superior, pase el valor -255 al elemento del array correspondiente.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                   |
| --------------- | -------------- | ---------------------------------- |
| rowStrokeSource | string         | El nombre de un array entero largo |

#### Objetos soportados

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Array de estilos

`Array type list boxes`

Permite definir un estilo de fuente personalizado para cada línea del list box o cada celda de la columna.

Se debe utilizar el nombre de un array Entero largo. Cada elemento de este array corresponde a una línea del list box (si se aplica al list box) o a una celda de la columna (si se aplica a una columna), por lo que el array debe tener el mismo tamaño que el array asociado a la columna. To fill the array (using a method), use the constants of the [Font Styles](https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html) theme. Se pueden añadir constantes para combinar estilos. Si desea que la celda herede el estilo definido en el nivel superior, pase el valor -255 al elemento del array correspondiente.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles                                    |
| -------------- | -------------- | --------------------------------------------------- |
| rowStyleSource | string         | El nombre de un array entero largo. |

#### Objetos soportados

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Almacenar con etiquetas de estilo por defecto

This property is only available for a [Multi-style](#multi-style) input area.
Cuando esta propiedad está activada, el área almacenará las etiquetas de estilo con el texto, incluso si no se ha realizado ninguna modificación. En este caso, las etiquetas corresponden al estilo por defecto. Cuando esta propiedad está desactivada, sólo se almacenan las etiquetas de estilo modificadas.

Por ejemplo, este es un texto que incluye una modificación de estilo:

![](../assets/en/FormObjects/tagStyle1.png)

Cuando la propiedad está desactivada, el área sólo almacena la modificación. Por lo tanto, los contenidos almacenados son:

```
What a <SPAN STYLE="font-size:13.5pt">beautiful</SPAN> day!
```

Cuando la propiedad está activa, el área almacena toda la información de formato. La primera etiqueta genérica describe el estilo por defecto y luego cada variación es objeto de un par de etiquetas anidadas. Por lo tanto, los contenidos almacenados en el área son:

```
<SPAN STYLE="font-family:'Arial';font-size:9pt;text-align:left;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;background-color:#FFFFFF">What a <SPAN STYLE="font-size:13.5pt">beautiful</SPAN> day!</SPAN>
```

#### Gramática JSON

| Nombre            | Tipos de datos | Valores posibles                                              |
| ----------------- | -------------- | ------------------------------------------------------------- |
| storeDefaultStyle | boolean        | true, false (por defecto). |

#### Objetos soportados

[Input](input_overview.md)

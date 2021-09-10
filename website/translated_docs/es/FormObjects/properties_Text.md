---
id: propertiesText
title: Texto
---

---
## Allow font/color picker

When this property is enabled, the [OPEN FONT PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-FONT-PICKER.301-4505612.en.html) and [OPEN COLOR PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-COLOR-PICKER.301-4505611.en.html) commands can be called to display the system font and color picker windows. Using these windows, the users can change the font or color of a form object that has the focus directly by clicking. When this property is disabled (default), the open picker commands have no effect.


#### Gramática JSON

| Propiedad            | Tipos de datos | Valores posibles      |
| -------------------- | -------------- | --------------------- |
| allowFontColorPicker | booleano       | false (default), true |

#### Objects Supported

[Entrada](input_overview.md)

---
## Bold

Sets the selected text to appear darker and heavier.

You can set this property using the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command.
> This is normal text.<br> **This is bold text.**

#### Gramática JSON

| Propiedad  | Tipos de datos | Valores posibles |
| ---------- | -------------- | ---------------- |
| fontWeight | texto          | "normal", "bold" |

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)


---
## Itálica

Sets the selected text to slant slightly to the right.

You can also set this property via the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command.
> This is normal text.<br> *This is text in italics.*

#### Gramática JSON

| Nombre    | Tipos de datos | Valores posibles   |
| --------- | -------------- | ------------------ |
| fontStyle | cadena         | "normal", "italic" |

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)




---
## Subrayado
Sets the text to have a line running beneath it.
> This is normal text.<br> This is <span style="text-decoration:underline">underlined</span> text.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles      |
| -------------- | -------------- | --------------------- |
| textDecoration | cadena         | "normal", "underline" |

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)






---
## Font

This property allows you to specify either the **font theme** or the **font family** used in the object.
> **Font theme** and **font family** properties are mutually exclusive. A font theme takes hold of font attributes, including size. A font family allows you to define font name, font size and font color.


### Font Theme

The font theme property designates an automatic style name. Automatic styles determine the font family, font size and font color to be used for the object dynamically according to system parameters. These parameters depend on:

- the platform,
- the system language,
- and the type of form object.

With the font theme, you are guaranteed that titles are always displayed in accordance with the current interface standards of the system. However, their size may vary from one machine to another.

Three font themes are available:
- **normal**: automatic style, applied by default to any new object created in the Form editor.
- **main** and **additional** font themes are only supported by [text areas](text.md) and [inputs](input_overview.md). These themes are primarily intended for designing dialog boxes. They refer to font styles used, respectively, for main text and additional information in your interface windows. Here are typical dialog boxes (macOS and Windows) using these font themes:

![](assets/en/FormObjects/FontThemes.png)

> Font themes manage the font as well as its size and color. You can apply custom style properties (Bold, Italic or Underline) without altering its functioning.



#### Gramática JSON

| Nombre    | Tipos de datos | Valores posibles               |
| --------- | -------------- | ------------------------------ |
| fontTheme | cadena         | "normal", "main", "additional" |


#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)




### Font Family

There are two types of font family names:

* *family-name:* The name of a font-family, like "times", "courier", "arial", etc.
* *generic-family:* The name of a generic-family, like "serif", "sans-serif", "cursive", "fantasy", "monospace".

You can set this using the [**OBJECT SET FONT**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT.301-4054834.en.html) command.
> <span style="font-family:Times New Roman; font-size:20pt"> This is Times New Roman font.</span><br> <span style="font-family:Calibri; font-size:20pt"> This is Calibri font.</span><br>
<span style="font-family:Papyrus; font-size:20pt"> This is Papyrus font.</span>

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles     |
| ---------- | -------------- | -------------------- |
| fontFamily | cadena         | CSS font family name |
> 4D recommends using only [web safe](https://www.w3schools.com/cssref/css_websafe_fonts.asp) fonts.

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)



---
## Tamaño fuente

Allows defining the object's font size in points.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles                      |
| -------- | -------------- | ------------------------------------- |
| fontSize | integer        | Font size in points. Minimum value: 0 |

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)


---
## Color de fuente

Designates the font color.

> This property also sets the color of object's [border](#border-line-style-dotted-line-type) (if any) when "plain" or "dotted" style is used.

The color can be specified by:

* a color name - like "red"
* a HEX value - like "#ff0000"
* an RGB value - like "rgb(255,0,0)"

You can also set this property using the [**OBJECT SET RGB COLORS**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-RGB-COLORS.301-4505456.en.html) command.


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                          |
| ------ | -------------- | ----------------------------------------- |
| stroke | cadena         | any css value, "transparent", "automatic" |

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Progress Indicators](progressIndicator.md) - [Ruler](ruler.md) - [Radio Button](radio_overview.md) - [Text Area](text.md)



---

## Expresión color fuente

`Selection and collection/entity selection type list boxes`

Used to apply a custom font color to each row of the list box. You must use RGB color values. For more information about this, refer to the description of the [OBJECT SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/OBJECT-SET-RGB-COLORS.301-4311385.en.html) command in the 4D Language Reference manual.

You must enter an expression or a variable (array type variables cannot be used). The expression or variable will be evaluated for each row displayed. You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html) theme.

You can also set this property using the `LISTBOX SET PROPERTY` command with `lk font color expression` constant.
> This property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).

The following example uses a variable name: enter *CompanyColor* for the **Font Color Expression** and, in the form method, write the following code:

```4d
CompanyColor:=Choose([Companies]ID;Background color;Light shadow color;   
Foreground color;Dark shadow color)
```

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles      |
| --------------- | -------------- | --------------------- |
| rowStrokeSource | cadena         | Font color expression |

#### Objects Supported

[List Box](listbox_overview.md#overview)

---
## Expresión estilo

`Selection and collection/entity selection type list boxes`

Used to apply a custom character style to each row of the list box or each cell of the column.

You must enter an expression or a variable (array type variables cannot be used). The expression or variable will be evaluated for each row displayed (if applied to the list box) or each cell displayed (if applied to a column). You can use the constants of the [Font Styles](https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html) theme.

Ejemplo:

```4d
Choose([Companies]ID;Bold;Plain;Italic;Underline)
```

You can also set this property using the `LISTBOX SET PROPERTY` command with `lk font style expression` constant.
> This property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).


#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles                                |
| -------------- | -------------- | ----------------------------------------------- |
| rowStyleSource | cadena         | Style expression to evaluate for each row/cell. |

#### Objects Supported

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)






---
## Alineación horizontal

Horizontal location of text within the area that contains it.

#### Gramática JSON

| Nombre    | Tipos de datos | Valores posibles                                  |
| --------- | -------------- | ------------------------------------------------- |
| textAlign | cadena         | "automatic", "right", "center", "justify", "left" |

#### Objects Supported

[Group Box](groupBox.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Text Area](text.md)


---
## Alineamiento vertical

Vertical location of text within the area that contains it.

The **Default** option (`automatic` JSON value) sets the alignment according to the type of data found in each column:
- `bottom` for all data (except pictures) and
- `top` for picture type data.

This property can also be handled by the [OBJECT Get vertical alignment](https://doc.4d.com/4Dv18/4D/18/OBJECT-Get-vertical-alignment.301-4505442.en.html) and [OBJECT SET VERTICAL ALIGNMENT](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-VERTICAL-ALIGNMENT.301-4505430.en.html) commands.


#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                       |
| ------------- | -------------- | -------------------------------------- |
| verticalAlign | cadena         | "automatic", "top", "middle", "bottom" |

#### Objects Supported

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers)









---
## Meta Info Expression
`Collection or entity selection type list boxes`

Specifies an expression or a variable which will be evaluated for each row displayed. It allows defining a whole set of row text attributes. You must pass an **object variable** or an **expression that returns an object**. The following properties are supported:

| Property name       | Tipo     | Descripción                                                                                                                                                                                                                                                                                                                                                                |
| ------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stroke              | cadena   | Font color. Any CSS color (ex: "#FF00FF"), "automatic", "transparent"                                                                                                                                                                                                                                                                                                      |
| fill                | cadena   | Background color. Any CSS color (ex: "#F00FFF"), "automatic", "transparent"                                                                                                                                                                                                                                                                                                |
| fontStyle           | cadena   | "normal","italic"                                                                                                                                                                                                                                                                                                                                                          |
| fontWeight          | cadena   | "normal","bold"                                                                                                                                                                                                                                                                                                                                                            |
| textDecoration      | cadena   | "normal","underline"                                                                                                                                                                                                                                                                                                                                                       |
| unselectable        | booleano | Designates the corresponding row as not being selectable (*i.e.*, highlighting is not possible). Enterable areas are no longer enterable if this option is enabled unless the "Single-Click Edit" option is also enabled. Controls such as checkboxes and lists remain functional. This setting is ignored if the list box selection mode is "None". Default value: False. |
| disabled            | booleano | Disables the corresponding row. Enterable areas are no longer enterable if this option is enabled. Text and controls (checkboxes, lists, etc.) appear dimmed or grayed out. Default value: False.                                                                                                                                                                          |
| cell.\<columnName> | objeto   | Allows applying the property to a single column. Pass in \<columnName> the object name of the list box column. **Note**: "unselectable" and "disabled" properties can only be defined at row level. They are ignored if passed in the "cell" object                                                                                                                       |

> Style settings made with this property are ignored if other style settings are already defined through expressions (*i.e.*, [Style Expression](#style-expression), [Font Color Expression](#font-color-expression), [Background Color Expression](#background-color-expression)).


**Ejemplo**

En el método proyecto *Color*, escribe el siguiente código:

```4d
//Método Color
//Define el color de la fuente para ciertas líneas y el color de fondo para una columna específica:
C_OBJECT($0)
Form.meta:=New object
If(This.ID>5) //ID es un atributo de objetos/entidades de una colección
  Form.meta.stroke:="purple"
  Form.meta.cell:=New object("Column2";New object("fill";"black"))
Else
  Form.meta.stroke:="orange"
End if
$0:=Form.meta
```

**Buenas prácticas:** por razones de optimización, se recomendaría en este caso crear el objeto `meta.cell` una vez en el método formulario:

```4d
  //método formulario
 Case of
    :(Form event code=On Load)
       Form.colStyle:=New object("Column2";New object("fill";"black"))
 End case
```

Entonces, el método *Color* contendría:

```4d
  //método Color
 ...
 If(This.ID>5)
    Form.meta.stroke:="purple"
    Form.meta.cell:=Form.colStyle //reutilizar el mismo objeto para mejorar el rendimiento
 ...
```
> Ver también el comando [This](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html).



#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                 |
| ---------- | -------------- | ------------------------------------------------ |
| metaSource | cadena         | Object expression to evaluate for each row/cell. |

#### Objects Supported

[List Box](listbox_overview.md)








---
## Multi-style

Esta propiedad permite la posibilidad de utilizar estilos específicos en el área seleccionada. Cuando esta opción está marcada, 4D interpreta todas las etiquetas \<SPAN> HTML presentes en el área. </p> 

<p spaces-before="0">
  By default, this option is not enabled.
</p>



<h4 spaces-before="0">
  Gramática JSON
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Nombre
    </th>
    
    <th>
      Tipos de datos
    </th>
    
    <th>
      Valores posibles
    </th>
  </tr>
  
  <tr>
    <td>
      styledText
    </td>
    
    <td>
      booleano
    </td>
    
    <td>
      true, false
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Objects Supported
</h4>

<p spaces-before="0">
  <a href="listbox_overview.md#list-box-columns">List Box Column</a> - <a href="input_overview.md">Input</a>
</p>








<hr />
<h2 spaces-before="0">
  Orientation
</h2>

<p spaces-before="0">
  Modifica la orientación (rotación) de un área de texto. Las áreas de texto pueden girarse en incrementos de 90°. Cada valor de orientación se aplica manteniendo el mismo punto de partida inferior izquierdo para el objeto:
</p>

<table spaces-before="0">
  <tr>
    <th>
      Orientation value
    </th>
    
    <th>
      Resultado
    </th>
  </tr>
  
  <tr>
    <td>
      0 (default)
    </td>
    
    <td>
      <img src="assets/en/FormObjects/orientation1.png" alt="" />
    </td>
  </tr>
  
  <tr>
    <td>
      90
    </td>
    
    <td>
      <img src="assets/en/FormObjects/orientation2.png" alt="" />
    </td>
  </tr>
  
  <tr>
    <td>
      180
    </td>
    
    <td>
      <img src="assets/en/FormObjects/orientation3.png" alt="" />
    </td>
  </tr>
  
  <tr>
    <td>
      270
    </td>
    
    <td>
      <img src="assets/en/FormObjects/orientation4.png" alt="" />
    </td>
  </tr>
</table>

<p spaces-before="0">
  Además de <a href="text.md">áreas de texto estáticas</a>, los objetos de texto de las <a href="input_overview.md">áreas de entrada</a> pueden girar cuando no son<a href="properties_Entry.md#enterable">editables</a>. Cuando se aplica una propiedad de rotación a un objeto de entrada, se elimina la propiedad editable (si la hay). Este objeto se excluye entonces del orden de entrada.
</p>




<h4 spaces-before="0">
  Gramática JSON
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Nombre
    </th>
    
    <th>
      Tipos de datos
    </th>
    
    <th>
      Valores posibles
    </th>
  </tr>
  
  <tr>
    <td>
      textAngle
    </td>
    
    <td>
      number
    </td>
    
    <td>
      0, 90, 180, 270
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Objects Supported
</h4>

<p spaces-before="0">
  <a href="input_overview.md">Entrada</a> (no editable) - <a href="text.md">Área de texto</a>
</p>





<hr />
<h2 spaces-before="0">
  Array colores de fuente
</h2>

<p spaces-before="0">
  <code>Array type list boxes</code>
</p>

<p spaces-before="0">
  Permite definir un color de fuente personalizado para cada línea del list box o celda de la columna.
</p>

<p spaces-before="0">
  Se debe utilizar el nombre de un array Entero largo. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. You can use the constants of the <a href="https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html">SET RGB COLORS</a> theme. If you want the cell to inherit the background color defined at the higher level, pass the value -255 to the corresponding array element.
</p>

<h4 spaces-before="0">
  Gramática JSON
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Nombre
    </th>
    
    <th>
      Tipos de datos
    </th>
    
    <th>
      Valores posibles
    </th>
  </tr>
  
  <tr>
    <td>
      rowStrokeSource
    </td>
    
    <td>
      cadena
    </td>
    
    <td>
      The name of a longint array
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Objects Supported
</h4>

<p spaces-before="0">
  <a href="listbox_overview.md">List Box</a> - <a href="listbox_overview.md#list-box-columns">List Box Column</a>
</p>





<hr />
<h2 spaces-before="0">
  Array de estilos
</h2>

<p spaces-before="0">
  <code>Array type list boxes</code>
</p>

<p spaces-before="0">
  Permite definir un estilo de fuente personalizado para cada línea del list box o cada celda de la columna.
</p>

<p spaces-before="0">
  Se debe utilizar el nombre de un array Entero largo. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. Para llenar el array (utilizando un método), utilice las constantes del tema <a href="https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html">Estilos de fuente</a>. Se pueden añadir constantes para combinar estilos. Si desea que la celda herede el estilo definido en el nivel superior, pase el valor -255 al elemento del array correspondiente.
</p>


<h4 spaces-before="0">
  Gramática JSON
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Nombre
    </th>
    
    <th>
      Tipos de datos
    </th>
    
    <th>
      Valores posibles
    </th>
  </tr>
  
  <tr>
    <td>
      rowStyleSource
    </td>
    
    <td>
      cadena
    </td>
    
    <td>
      The name of a longint array.
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Objects Supported
</h4>

<p spaces-before="0">
  <a href="listbox_overview.md#overview">List Box</a> - <a href="listbox_overview.md#list-box-columns">List Box Column</a>
</p>



<hr />
<h2 spaces-before="0">
  Store with default style tags
</h2>

<p spaces-before="0">
  Esta propiedad sólo está disponible para un área de entrada <a href="#multi-estilo">Multi-estilo</a>. Cuando esta propiedad está activada, el área almacenará las etiquetas de estilo con el texto, incluso si no se ha realizado ninguna modificación. En este caso, las etiquetas corresponden al estilo por defecto. Cuando esta propiedad está desactivada, sólo se almacenan las etiquetas de estilo modificadas.
</p>

<p spaces-before="0">
  Por ejemplo, este es un texto que incluye una modificación de estilo:
</p>

<p spaces-before="0">
  <img src="assets/en/FormObjects/tagStyle1.png" alt="" />
</p>

<p spaces-before="0">
  Cuando la propiedad está desactivada, el área sólo almacena la modificación. Por lo tanto, los contenidos almacenados son:
</p>

<pre><code>¡Qué &lt;SPAN STYLE="font-size:13.5pt"&gt;hermoso&lt;/SPAN&gt; día!
</code></pre>

<p spaces-before="0">
  Cuando la propiedad está activa, el área almacena toda la información de formato. La primera etiqueta genérica describe el estilo por defecto y luego cada variación es objeto de un par de etiquetas anidadas. Por lo tanto, los contenidos almacenados en el área son:
</p>

<pre><code>&lt;SPAN STYLE="font-family:'Arial';font-size:9pt;text-align:left;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;background-color:#FFFFFF"&gt;¡Qué &lt;SPAN STYLE="font-size:13.5pt"&gt;hermoso&lt;/SPAN&gt; día!&lt;/SPAN&gt;
</code></pre>

<h4 spaces-before="0">
  Gramática JSON
</h4>

<table spaces-before="0">
  <tr>
    <th>
      Nombre
    </th>
    
    <th>
      Tipos de datos
    </th>
    
    <th>
      Valores posibles
    </th>
  </tr>
  
  <tr>
    <td>
      storeDefaultStyle
    </td>
    
    <td>
      booleano
    </td>
    
    <td>
      true, false (default).
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Objects Supported
</h4>

<p spaces-before="0">
  <a href="input_overview.md">Entrada</a>
</p>






















---
id: propertiesText
title: Text
---

* * *

## Allow font/color picker

When this property is enabled, the [OPEN FONT PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-FONT-PICKER.301-4505612.en.html) and [OPEN COLOR PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-COLOR-PICKER.301-4505611.en.html) commands can be called to display the system font and color picker windows. Using these windows, the users can change the font or color of a form object that has the focus directly by clicking. When this property is disabled (default), the open picker commands have no effect.

#### JSON Grammar

| Property             | Datentyp | Possible Values       |
| -------------------- | -------- | --------------------- |
| allowFontColorPicker | boolean  | false (default), true |


#### Objects Supported

[Input](input_overview.md)

* * *

## Bold

Sets the selected text to appear darker and heavier.

You can set this property using the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command.

> This is normal text.  
> **This is bold text.**

#### JSON Grammar

| Property   | Datentyp | Possible Values  |
| ---------- | -------- | ---------------- |
| fontWeight | Text     | "normal", "bold" |


#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

* * *

## Italic

Sets the selected text to slant slightly to the right.

You can also set this property via the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command.

> This is normal text.  
> *This is text in italics.*

#### JSON Grammar

| Name      | Datentyp | Possible Values    |
| --------- | -------- | ------------------ |
| fontStyle | string   | "normal", "italic" |


#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

* * *

## Underline

Sets the text to have a line running beneath it.

> This is normal text.  
> This is <span style="text-decoration:underline">underlined</span> text.

#### JSON Grammar

| Name           | Datentyp | Possible Values       |
| -------------- | -------- | --------------------- |
| textDecoration | string   | "normal", "underline" |


#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

* * *

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

#### JSON Grammar

| Name      | Datentyp | Possible Values                |
| --------- | -------- | ------------------------------ |
| fontTheme | string   | "normal", "main", "additional" |


#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

### Font Family

There are two types of font family names:

* *family-name:* The name of a font-family, like "times", "courier", "arial", etc.
* *generic-family:* The name of a generic-family, like "serif", "sans-serif", "cursive", "fantasy", "monospace".

You can set this using the [**OBJECT SET FONT**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT.301-4054834.en.html) command.

> <span style="font-family:Times New Roman; font-size:20pt"> This is Times New Roman font.</span>  
> <span style="font-family:Calibri; font-size:20pt"> This is Calibri font.</span>  
> <span style="font-family:Papyrus; font-size:20pt"> This is Papyrus font.</span>
#### JSON Grammar

| Name       | Datentyp | Possible Values      |
| ---------- | -------- | -------------------- |
| fontFamily | string   | CSS font family name |


> 4D recommends using only [web safe](https://www.w3schools.com/cssref/css_websafe_fonts.asp) fonts.

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

* * *

## Font Size

Allows defining the object's font size in points.

#### JSON Grammar

| Name     | Datentyp | Possible Values                       |
| -------- | -------- | ------------------------------------- |
| fontSize | integer  | Font size in points. Minimum value: 0 |


#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

* * *

## Font Color

Designates the font color.

> This property also sets the color of object's [border](#border-line-style-dotted-line-type) (if any) when "plain" or "dotted" style is used.

The color can be specified by:

* a color name - like "red"
* a HEX value - like "#ff0000"
* an RGB value - like "rgb(255,0,0)"

You can also set this property using the [**OBJECT SET RGB COLORS**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-RGB-COLORS.301-4505456.en.html) command.

#### JSON Grammar

| Name   | Datentyp | Possible Values                           |
| ------ | -------- | ----------------------------------------- |
| stroke | string   | any css value, "transparent", "automatic" |


#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Progress Indicators](progressIndicator.md) - [Ruler](ruler.md) - [Radio Button](radio_overview.md) - [Text Area](text.md)

* * *

## Font Color Expression

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

#### JSON Grammar

| Name            | Datentyp | Possible Values       |
| --------------- | -------- | --------------------- |
| rowStrokeSource | string   | Font color expression |


#### Objects Supported

[List Box](listbox_overview.md#overview)

* * *

## Style Expression

`Selection and collection/entity selection type list boxes`

Used to apply a custom character style to each row of the list box or each cell of the column.

You must enter an expression or a variable (array type variables cannot be used). The expression or variable will be evaluated for each row displayed (if applied to the list box) or each cell displayed (if applied to a column). You can use the constants of the [Font Styles](https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html) theme.

Beispiel:

```4d
Choose([Companies]ID;Bold;Plain;Italic;Underline)
```

You can also set this property using the `LISTBOX SET PROPERTY` command with `lk font style expression` constant.

> This property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).

#### JSON Grammar

| Name           | Datentyp | Possible Values                                 |
| -------------- | -------- | ----------------------------------------------- |
| rowStyleSource | string   | Style expression to evaluate for each row/cell. |


#### Objects Supported

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

* * *

## Horizontal Alignment

Horizontal location of text within the area that contains it.

#### JSON Grammar

| Name      | Datentyp | Possible Values                                   |
| --------- | -------- | ------------------------------------------------- |
| textAlign | string   | "automatic", "right", "center", "justify", "left" |


#### Objects Supported

[Group Box](groupBox.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Header](listbox_overview.md#list-box-footers) - [Text Area](text.md)

* * *

## Vertical Alignment

Vertical location of text within the area that contains it.

The **Default** option (`automatic` JSON value) sets the alignment according to the type of data found in each column:

- `bottom` for all data (except pictures) and 
- `top` for picture type data.

This property can also be handled by the [OBJECT Get vertical alignment](https://doc.4d.com/4Dv18/4D/18/OBJECT-Get-vertical-alignment.301-4505442.en.html) and [OBJECT SET VERTICAL ALIGNMENT](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-VERTICAL-ALIGNMENT.301-4505430.en.html) commands.

#### JSON Grammar

| Name          | Datentyp | Possible Values                        |
| ------------- | -------- | -------------------------------------- |
| verticalAlign | string   | "automatic", "top", "middle", "bottom" |


#### Objects Supported

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers)

* * *

## Meta Info Expression

`Collection or entity selection type list boxes`

Specifies an expression or a variable which will be evaluated for each row displayed. It allows defining a whole set of row text attributes. You must pass an **object variable** or an **expression that returns an object**. The following properties are supported:

| Property name       | Typ     | Description                                                                                                                                                                                                                                                                                                                                                                |
| ------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stroke              | string  | Font color. Any CSS color (ex: "#FF00FF"), "automatic", "transparent"                                                                                                                                                                                                                                                                                                      |
| fill                | string  | Background color. Any CSS color (ex: "#F00FFF"), "automatic", "transparent"                                                                                                                                                                                                                                                                                                |
| fontStyle           | string  | "normal","italic"                                                                                                                                                                                                                                                                                                                                                          |
| fontWeight          | string  | "normal","bold"                                                                                                                                                                                                                                                                                                                                                            |
| textDecoration      | string  | "normal","underline"                                                                                                                                                                                                                                                                                                                                                       |
| unselectable        | boolean | Designates the corresponding row as not being selectable (*i.e.*, highlighting is not possible). Enterable areas are no longer enterable if this option is enabled unless the "Single-Click Edit" option is also enabled. Controls such as checkboxes and lists remain functional. This setting is ignored if the list box selection mode is "None". Default value: False. |
| disabled            | boolean | Disables the corresponding row. Enterable areas are no longer enterable if this option is enabled. Text and controls (checkboxes, lists, etc.) appear dimmed or grayed out. Default value: False.                                                                                                                                                                          |
| cell.\<columnName> | object  | Allows applying the property to a single column. Pass in \<columnName> the object name of the list box column. **Note**: "unselectable" and "disabled" properties can only be defined at row level. They are ignored if passed in the "cell" object                                                                                                                       |


> Style settings made with this property are ignored if other style settings are already defined through expressions (*i.e.*, [Style Expression](#style-expression), [Font Color Expression](#font-color-expression), [Background Color Expression](#background-color-expression)).

The following example uses the *Color* project method.

In the form method, write the following code:

```4d
//form method
Case of
  :(Form event=On Load)
   Form.meta:=New object
End case
```

In the *Color* method, write the following code:

```4d
//Color method
//Sets font color for certain rows and the background color for a specific column:
C_OBJECT($0)
If(This.ID>5) //ID is an attribute of collection objects/entities
  Form.meta.stroke:="purple"
  Form.meta.cell:=New object("Column2";New object("fill";"black"))
Else
  Form.meta.stroke:="orange"
End if
$0:=Form.meta
```

> See also the [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html) command.

#### JSON Grammar

| Name       | Datentyp | Possible Values                                  |
| ---------- | -------- | ------------------------------------------------ |
| metaSource | string   | Object expression to evaluate for each row/cell. |


#### Objects Supported

[List Box](listbox_overview.md)

* * *

## Multi-style

This property enables the possibility of using specific styles in the selected area. When this option is checked, 4D interprets any \<SPAN> HTML tags found in the area.</p> 

<p>
  By default, this option is not enabled.
</p>

<h4>
  JSON Grammar
</h4>

<table>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Datentyp
    </th>
    
    <th>
      Possible Values
    </th>
  </tr>
  
  <tr>
    <td>
      styledText
    </td>
    
    <td>
      boolean
    </td>
    
    <td>
      true, false
    </td>
  </tr>
</table>

<h4>
  Objects Supported
</h4>

<p>
  <a href="listbox_overview.md#list-box-columns">List Box Column</a> - <a href="input_overview.md">Input</a>
</p>

<hr />

<h2>
  Orientation
</h2>

<p>
  Modifies the orientation (rotation) of a text area. Text areas can be rotated by increments of 90°. Each orientation value is applied while keeping the same lower left starting point for the object:
</p>

<table>
  <tr>
    <th>
      Orientation value
    </th>
    
    <th>
      Result
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

<p>
  In addition to <a href="text.md">static text areas</a>, <a href="input_overview.md">input</a> text objects can be rotated when they are non-<a href="properties_Entry.md#enterable">enterable</a>. When a rotation property is applied to an input object, the enterable property is removed (if any). This object is then excluded from the entry order.
</p>

<h4>
  JSON Grammar
</h4>

<table>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Datentyp
    </th>
    
    <th>
      Possible Values
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

<h4>
  Objects Supported
</h4>

<p>
  <a href="input_overview.md">Input</a> (non-enterable) - <a href="text.md">Text Area</a>
</p>

<hr />

<h2>
  Row Font Color Array
</h2>

<p>
  <code>Array type list boxes</code>
</p>

<p>
  Allows setting a custom font color to each row of the list box or cell of the column.
</p>

<p>
  The name of a Longint array must be used. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. You can use the constants of the <a href="https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html">SET RGB COLORS</a> theme. If you want the cell to inherit the background color defined at the higher level, pass the value -255 to the corresponding array element.
</p>

<h4>
  JSON Grammar
</h4>

<table>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Datentyp
    </th>
    
    <th>
      Possible Values
    </th>
  </tr>
  
  <tr>
    <td>
      rowStrokeSource
    </td>
    
    <td>
      string
    </td>
    
    <td>
      The name of a longint array
    </td>
  </tr>
</table>

<h4>
  Objects Supported
</h4>

<p>
  <a href="listbox_overview.md">List Box</a> - <a href="listbox_overview.md#list-box-columns">List Box Column</a>
</p>

<hr />

<h2>
  Row Style Array
</h2>

<p>
  <code>Array type list boxes</code>
</p>

<p>
  Allows setting a custom font style to each row of the list box or each cell of the column.
</p>

<p>
  The name of a Longint array must be used. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. To fill the array (using a method), use the constants of the <a href="https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html">Font Styles</a> theme. You can add constants together to combine styles. If you want the cell to inherit the style defined at the higher level, pass the value -255 to the corresponding array element.
</p>

<h4>
  JSON Grammar
</h4>

<table>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Datentyp
    </th>
    
    <th>
      Possible Values
    </th>
  </tr>
  
  <tr>
    <td>
      rowStyleSource
    </td>
    
    <td>
      string
    </td>
    
    <td>
      The name of a longint array.
    </td>
  </tr>
</table>

<h4>
  Objects Supported
</h4>

<p>
  <a href="listbox_overview.md#overview">List Box</a> - <a href="listbox_overview.md#list-box-columns">List Box Column</a>
</p>

<hr />

<h2>
  Store with default style tags
</h2>

<p>
  This property is only available for a <a href="#multi-style">Multi-style</a> input area. When this property is enabled, the area will store the style tags with the text, even if no modification has been made. In this case, the tags correspond to the default style. When this property is disabled, only modified style tags are stored.
</p>

<p>
  For example, here is a text that includes a style modification:
</p>

<p>
  <img src="assets/en/FormObjects/tagStyle1.png" alt="" />
</p>

<p>
  When the property is disabled, the area only stores the modification. The stored contents are therefore:
</p>

<pre><code>What a &lt;SPAN STYLE="font-size:13.5pt"&gt;beautiful&lt;/SPAN&gt; day!
</code></pre>

<p>
  When the property is enabled, the area stores all the formatting information. The first generic tag describes the default style then each variation is the subject of a pair of nested tags. The contents stored in the area are therefore:
</p>

<pre><code>&lt;SPAN STYLE="font-family:'Arial';font-size:9pt;text-align:left;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;background-color:#FFFFFF"&gt;What a &lt;SPAN STYLE="font-size:13.5pt"&gt;beautiful&lt;/SPAN&gt; day!&lt;/SPAN&gt;
</code></pre>

<h4>
  JSON Grammar
</h4>

<table>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Datentyp
    </th>
    
    <th>
      Possible Values
    </th>
  </tr>
  
  <tr>
    <td>
      storeDefaultStyle
    </td>
    
    <td>
      boolean
    </td>
    
    <td>
      true, false (default).
    </td>
  </tr>
</table>

<h4>
  Objects Supported
</h4>

<p>
  <a href="input_overview.md">Input</a>
</p>
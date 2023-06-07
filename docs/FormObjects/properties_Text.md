---
id: propertiesText
title: Text 
---
---

## Allow font/color picker

When this property is enabled, the [OPEN FONT PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-FONT-PICKER.301-4505612.en.html) and [OPEN COLOR PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-COLOR-PICKER.301-4505611.en.html) commands can be called to display the system font and color picker windows. Using these windows, the users can change the font or color of a form object that has the focus directly by clicking. When this property is disabled (default), the open picker commands have no effect.

#### JSON Grammar

|Property|Data Type|Possible Values|
|---|---|---|
|allowFontColorPicker|boolean |false (default), true|

#### Objects Supported

[Input](input_overview.md)

---

## Bold

Sets the selected text to appear darker and heavier.

You can set this property using the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command.

>This is normal text.<br/>
**This is bold text.**

#### JSON Grammar

|Property|Data Type|Possible Values|
|---|---|---|
|fontWeight|text |"normal", "bold"|

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Italic

Sets the selected text to slant slightly to the right.

You can also set this property via the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command.

>This is normal text.<br/>
*This is text in italics.*

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|fontStyle|string |"normal", "italic"|

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Underline

Sets the text to have a line running beneath it.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|textDecoration|string|"normal", "underline"|

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Font

This property allows you to specify either the **font theme** or the **font family** used in the object.

>**Font theme** and **font family** properties are mutually exclusive. A font theme takes hold of font attributes, including size. A font family allows you to define font name, font size and font color.

### Font Theme

The font theme property designates an automatic style name. Automatic styles determine the font family, font size and font color to be used for the object dynamically according to system parameters. These parameters depend on:

- the platform,
- the system language,
- and the type of form object.

With the font theme, you are guaranteed that titles are always displayed in accordance with the current interface standards of the system. However, their size may vary from one machine to another.

Three font themes are available:

- **normal**: automatic style, applied by default to any new object created in the Form editor.
- **main** and **additional** font themes are only supported by [text areas](text.md) and [inputs](input_overview.md). These themes are primarily intended for designing dialog boxes. They refer to font styles used, respectively, for main text and additional information in your interface windows. Here are typical dialog boxes (macOS and Windows) using these font themes:

![](../assets/en/FormObjects/FontThemes.png)

> Font themes manage the font as well as its size and color. You can apply custom style properties (Bold, Italic or Underline) without altering its functioning.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|fontTheme|string |"normal", "main", "additional"|

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

### Font Family

There are two types of font family names:

- *family-name:* The name of a font-family, like "times", "courier", "arial", etc.
- *generic-family:* The name of a generic-family, like "serif", "sans-serif", "cursive", "fantasy", "monospace".

You can set this using the [**OBJECT SET FONT**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT.301-4054834.en.html) command.  

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|fontFamily|string |CSS font family name  |

>4D recommends using only [web safe](https://www.w3schools.com/cssref/css_websafe_fonts.asp) fonts.

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Font Size

Allows defining the object's font size in points.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|fontSize|integer |Font size in points. Minimum value: 0|

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Font Color

Designates the font color.

> This property also sets the color of object's [border](#border-line-style-dotted-line-type) (if any) when "plain" or "dotted" style is used.

The color can be specified by:

- a color name - like "red"
- a HEX value - like "#ff0000"
- an RGB value - like "rgb(255,0,0)"

You can also set this property using the [**OBJECT SET RGB COLORS**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-RGB-COLORS.301-4505456.en.html) command.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|stroke|string | any css value, "transparent", "automatic"|

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Progress Indicators](progressIndicator.md) - [Ruler](ruler.md) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Font Color Expression

`Selection and collection/entity selection type list boxes`

Used to apply a custom font color to each row of the list box. You must use RGB color values. For more information about this, refer to the description of the [OBJECT SET RGB COLORS](https://doc.4d.com/4dv19R/help/command/en/page628.html) command in the 4D Language Reference manual.

You must enter an expression or a variable (array type variables cannot be used). The expression or variable will be evaluated for each row displayed. You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html) theme.

You can also set this property using the `LISTBOX SET PROPERTY` command with `lk font color expression` constant.

>This property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).

The following example uses a variable name: enter *CompanyColor* for the **Font Color Expression** and, in the form method, write the following code:

```4d
CompanyColor:=Choose([Companies]ID;Background color;Light shadow color;   
Foreground color;Dark shadow color)
```

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowStrokeSource|string |Font color expression|

#### Objects Supported

[List Box](listbox_overview.md#overview)

---

## Style Expression

`Selection and collection/entity selection type list boxes`

Used to apply a custom character style to each row of the list box or each cell of the column.

You must enter an expression or a variable (array type variables cannot be used). The expression or variable will be evaluated for each row displayed (if applied to the list box) or each cell displayed (if applied to a column). You can use the constants of the [Font Styles](https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html) theme.

Example:

```4d
Choose([Companies]ID;Bold;Plain;Italic;Underline)
```

You can also set this property using the `LISTBOX SET PROPERTY` command with `lk font style expression` constant.

>This property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowStyleSource|string|Style expression to evaluate for each row/cell.|

#### Objects Supported

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Horizontal Alignment

Horizontal location of text within the area that contains it.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|textAlign|string |"right", "center", "left", "automatic", "justify"|

:::note

- "automatic" is not supported by [check boxes](checkbox_overview.md) and [radio buttons](radio_overview.md)
- "justify" is only supported by [inputs](input_overview.md) and [text areas](text.md)
 
:::

#### Objects Supported

[Button](button_overview.md) - [Check Box](checkbox_overview.md) (all styles except Regular and Flat) - [Group Box](groupBox.md) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Radio Button](radio_overview.md) (all styles except Regular and Flat) - [Text Area](text.md)

---

## Vertical Alignment

Vertical location of text within the area that contains it.

The **Default** option (`automatic` JSON value) sets the alignment according to the type of data found in each column:

- `bottom` for all data (except pictures) and
- `top` for picture type data.

This property can also be handled by the [OBJECT Get vertical alignment](https://doc.4d.com/4dv19R/help/command/en/page1188.html) and [OBJECT SET VERTICAL ALIGNMENT](https://doc.4d.com/4dv19R/help/command/en/page1187.html) commands.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|verticalAlign|string |"automatic", "top", "middle", "bottom"|

#### Objects Supported

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers)

---

## Meta Info Expression

`Collection or entity selection type list boxes`

Specifies an expression or a variable which will be evaluated for each row displayed. It allows defining a whole set of row text attributes. You must pass an **object variable** or an **expression that returns an object**. The following properties are supported:

|Property name| Type| Description|
|---|----|---|
|stroke |string |Font color. Any CSS color (ex: "#FF00FF"), "automatic", "transparent"|
|fill |string| Background color. Any CSS color (ex: "#F00FFF"), "automatic", "transparent"|
|fontStyle |string| "normal","italic"|
|fontWeight|string |"normal","bold"|
|textDecoration|string| "normal","underline"|
|unselectable|boolean| Designates the corresponding row as not being selectable (*i.e.*, highlighting is not possible). Enterable areas are no longer enterable if this option is enabled unless the "Single-Click Edit" option is also enabled. Controls such as checkboxes and lists remain functional. This setting is ignored if the list box selection mode is "None". Default value: False.|
|disabled |boolean |Disables the corresponding row. Enterable areas are no longer enterable if this option is enabled. Text and controls (checkboxes, lists, etc.) appear dimmed or grayed out. Default value: False.|

The special "cell" property allows you to apply a set of properties to a single column:

|Property name|||Type| Description|
|---|----|---|---|---|
|cell|||object|Properties to apply to single column(s)|
||*columnName*|| object|*columnName* is the object name of the list box column|
|||*propertyName*|string|"stroke", "fill", "fontStyle", "fontWeight", or "textDecoration" property (see above). **Note**: "unselectable" and "disabled" properties can only be defined at row level. They are ignored if passed in the "cell" object|

> Style settings made with this property are ignored if other style settings are already defined through expressions (*i.e.*, [Style Expression](#style-expression), [Font Color Expression](#font-color-expression), [Background Color Expression](#background-color-expression)).

**Examples**

In a *Color* project method, write the following code:

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

Then, the *Color* method would contain:

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



#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|metaSource| string|Object expression to evaluate for each row/cell.|

#### Objects Supported

[List Box](listbox_overview.md)

---

## Multi-style

This property enables the possibility of using specific styles in the selected area. When this option is checked, 4D interprets any `<SPAN> HTML` tags found in the area.

By default, this option is not enabled.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|styledText| boolean|true, false|

#### Objects Supported

[Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) 

---

## Orientation

Modifies the orientation (rotation) of a text area. Text areas can be rotated by increments of 90°. Each orientation value is applied while keeping the same lower left starting point for the object:

|Orientation value|Result|
|----|---|
|0 (default)|![](../assets/en/FormObjects/orientation1.png)|
|90|![](../assets/en/FormObjects/orientation2.png)|
|180|![](../assets/en/FormObjects/orientation3.png)|
|270|![](../assets/en/FormObjects/orientation4.png)|

In addition to [static text areas](text.md), [input](input_overview.md) text objects can be rotated when they are non-[enterable](properties_Entry.md#enterable). When a rotation property is applied to an input object, the enterable property is removed (if any). This object is then excluded from the entry order.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|textAngle|number |0, 90, 180, 270|

#### Objects Supported

[Input](input_overview.md) (non-enterable) - [Text Area](text.md)

---

## Row Font Color Array

`Array type list boxes`

Allows setting a custom font color to each row of the list box or cell of the column.

The name of a Longint array must be used. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html) theme. If you want the cell to inherit the background color defined at the higher level, pass the value -255 to the corresponding array element.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowStrokeSource|string|The name of a longint array|

#### Objects Supported

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Row Style Array

`Array type list boxes`

Allows setting a custom font style to each row of the list box or each cell of the column.

The name of a Longint array must be used. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. To fill the array (using a method), use the constants of the [Font Styles](https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html) theme. You can add constants together to combine styles. If you want the cell to inherit the style defined at the higher level, pass the value -255 to the corresponding array element.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowStyleSource|string|The name of a longint array.|

#### Objects Supported

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Store with default style tags

This property is only available for a [Multi-style](#multi-style) input area.
When this property is enabled, the area will store the style tags with the text, even if no modification has been made. In this case, the tags correspond to the default style. When this property is disabled, only modified style tags are stored.

For example, here is a text that includes a style modification:

![](../assets/en/FormObjects/tagStyle1.png)

When the property is disabled, the area only stores the modification. The stored contents are therefore:

```
What a <SPAN STYLE="font-size:13.5pt">beautiful</SPAN> day!
```

When the property is enabled, the area stores all the formatting information. The first generic tag describes the default style then each variation is the subject of a pair of nested tags. The contents stored in the area are therefore:

```
<SPAN STYLE="font-family:'Arial';font-size:9pt;text-align:left;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;background-color:#FFFFFF">What a <SPAN STYLE="font-size:13.5pt">beautiful</SPAN> day!</SPAN>
```

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|storeDefaultStyle|boolean|true, false (default).|

#### Objects Supported

[Input](input_overview.md)

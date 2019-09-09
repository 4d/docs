---
id: propertiesText
title:Text 
---

## Bold

Sets the selected text to appear darker and heavier.

You can set this property via the Property List or via the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command. 

>This is normal text.<br>
**This is bold text.**

#### JSON Grammar

|Property|Data Type|Possible Values|
|---|---|---|
|fontWeight|text | "normal", "bold"|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Text Area](textAndGroupBox_overview.md#text) - [Group Box](textAndGroupBox_overview.md#group-box) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Header](listbox_overview.md#list-box-footers)






## Font

This property specifies the name of font family used in the object. 

There are two types of font family names:

* *family-name:* The name of a font-family, like "times", "courier", "arial", etc.
* *generic-family:* The name of a generic-family, like "serif", "sans-serif", "cursive", "fantasy", "monospace".

You can set this property via the Property List or you via the [**OBJECT SET FONT**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT.301-4054834.en.html) command.  

><span style="font-family:Times New Roman; font-size:20pt"> This is Times New Roman font.</span><br>
<span style="font-family:Calibri; font-size:20pt"> This is Calibri font.</span><br>
<span style="font-family:Papyrus; font-size:20pt"> This is Papyrus font.</span>

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|fontFamily|string |CSS font family name  |

>4D recommends using only [web safe](https://www.w3schools.com/cssref/css_websafe_fonts.asp) fonts.

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Text Area](textAndGroupBox_overview.md#text) - [Group Box](textAndGroupBox_overview.md#group-box) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Header](listbox_overview.md#list-box-footers)





## Font Color

This property specifies the color of the font used in the object. The color is specified by:

* a color name - like "red"
* a HEX value - like "#ff0000"
* an RGB value - like "rgb(255,0,0)"

You can set this property via the Property List or via the [**OBJECT SET RGB COLORS**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-RGB-COLORS.301-4128232.en.html) command. 

>This font is <span style="color:red">red</span>.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|stroke|string | any css value, "transparent", "automatic"|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Text Area](textAndGroupBox_overview.md#text) - [Group Box](textAndGroupBox_overview.md#group-box) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Header](listbox_overview.md#list-box-footers)







## Font Color Expression

`Selection and collection/entity selection type list boxes`

Used to apply a custom font color to each row of the list box. You must use RGB color values. For more information about this, refer to the description of the [OBJECT SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/OBJECT-SET-RGB-COLORS.301-4311385.en.html) command in the 4D Language Reference manual.

you must enter an expression or a variable (array type variables cannot be used). The expression or variable will be evaluated for each row displayed. You can use the Formula editor to specify an expression. To do this, click on the [...] button which appears when you select the area. You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html) theme.

>This property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).
 
The following example uses a variable name: enter *CompanyColor* for the **Font Color Expression** and, in the form method, write the following code:
 
````code4d
CompanyColor:=Choose([Companies]ID;Default background color;Default light shadow color;Default foreground color;Default dark shadow color)
````

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowStrokeSource|string |Name of expression. |

#### Objects Supported

[List Box](listbox_overview.md#overview) 





## Horizontal Alignment

Horizontal location of text within the area that contains it.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|textAlign|string |"automatic", "right", "center", "justify", "left"|

#### Objects Supported

[Text Area](textAndGroupBox_overview.md#text) - [Group Box](textAndGroupBox_overview.md#group-box) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Header](listbox_overview.md#list-box-footers)






## Italic

Sets the selected text to slant slightly to the right.

You can set this property via the Property List or via the [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-FONT-STYLE.301-4128244.en.html) command. 

>This is normal text.<br>
*This is text in italics.*

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|fontStyle|string |"normal", "italic"|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Text Area](textAndGroupBox_overview.md#text) - [Group Box](textAndGroupBox_overview.md#group-box) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Header](listbox_overview.md#list-box-footers)









## Meta Info Expression
`Collection or entity selection type list boxes`

Specifies an expression or a variable which will be evaluated for each row displayed. It allows defining a whole set of row text attributes. You must pass an object variable or an expression that returns an object. The following properties are supported:

|Property name|	Type|	Description|
|---|---|---|
|stroke	|string	|Font color. Any CSS color (ex: "#FF00FF"), "automatic", "transparent"|
|fill	|string|	Background color. Any CSS color (ex: "#F00FFF"), "automatic", "transparent"|
|fontStyle	|string|	"normal","italic"|
|fontWeight|	string	|"normal","bold"|
|textDecoration|	string|	"normal","underline"|
|unselectable|	boolean|	Designates the corresponding row as not being selectable (*i.e.*, highlighting is not possible). Enterable areas are no longer enterable if this option is enabled unless the "Single-Click Edit" option is also enabled. Controls such as checkboxes and lists remain functional. This setting is ignored if the list box selection mode is "None". Default value: False.|
|disabled	|boolean	|Disables the corresponding row. Enterable areas are no longer enterable if this option is enabled. Text and controls (checkboxes, lists, etc.) appear dimmed or grayed out. Default value: False.|
|cell.\<columnName>|	object|	Allows applying the property to a single column. Pass in \<columnName> the object name of the list box column. **Note**: "unselectable" and "disabled" properties can only be defined at row level. They are ignored if passed in the "cell" object|

Note: Style settings made with this property are ignored if other style settings are defined through expressions in the Property list (*i.e.*, Style Expression, Font Color Expression, Background Color Expression).
  
The following example uses the *Color* project method. 

In the form method, write the following code:

````code4d
//form method
Case of
  :(Form event=On Load)
   Form.meta:=New object
End case
```` 


In the *Color* method, write the following code:

````code4d
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
````

>See also the [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html) command.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|metaSource| string|An object expression|

#### Objects Supported

[List Box](listbox_overview.md#overview)









## Multi-style

This property enables the possibility of using specific styles in the selected area. When this option is checked, 4D interprets any \<SPAN> HTML tags found in the area. 

By default, this option is not enabled.


>Enables the [Context Menu](properties_Entry.md#context-menu) property.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|styledText| boolean|"true", "false"|

#### Objects Supported

[List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)










## Orientation

Modifies the orientation (rotation) of the text area.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|textAngle|string |0, 90, 180, 270|

#### Objects Supported

[Text Area](textAndGroupBox_overview.md#text)






## Row Font Color Array
`Array type list boxes`

Allows setting a custom font color to each row of the list box or cell of the column. 
 
The name of a Longint array must be used. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html) theme. If you want the cell to inherit the background color defined at the higher level, pass the value -255 to the corresponding array element.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowStrokeSource|string|The name of a longint array|

#### Objects Supported

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)






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







## Style Expression

`Selection and collection/entity selection type list boxes`

Used to apply a custom character style to each row of the list box or each cell of the column.

You must enter an expression or a variable (array type variables cannot be used). The expression or variable will be evaluated for each row displayed (if applied to the list box) or each cell displayed (if applied to a column). You can use the constants of the [Font Styles](https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html) theme.

Example:
 
```code4d
Choose([Companies]ID;Bold;Plain;Italic;Underline)
```


>This property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowStyleSource|string|Style expression to evaluate for each row/cell.|

#### Objects Supported

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)







## Underline
Sets the selected text to have a line running beneath it.

>This is normal text.<br>
>This is <span style="text-decoration:underline">underlined</span> text.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|textDecoration|string|"normal", "underline"|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Text Area](textAndGroupBox_overview.md#text) - [Group Box](textAndGroupBox_overview.md#group-box) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Header](listbox_overview.md#list-box-footers)






## Vertical Alignment

Vertical location of text within the area that contains it.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|verticalAlign|string |"automatic", "top", "middle", "bottom"|

#### Objects Supported

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Header](listbox_overview.md#list-box-footers)





















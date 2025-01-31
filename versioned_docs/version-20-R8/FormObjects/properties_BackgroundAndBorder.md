---
id: propertiesBackgroundAndBorder
title: Background and Border
---


## Alternate Background Color

Allows setting a different background color for odd-numbered rows/columns in a list box. By default, *Automatic* is selected: the column uses the alternate background color set at the list box level.

You can also set this property using the [`OBJECT SET RGB COLORS`](https://doc.4d.com/4dv20/help/command/en/page628.html) command.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|alternateFill|string|any css value; "transparent"; "automatic"; "automaticAlternate"|

#### Objects Supported

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Background Color / Fill Color

Defines the background color of an object.

In the case of a list box, by default *Automatic* is selected: the column uses the background color set at the list box level.

You can also set this property using the [`OBJECT SET RGB COLORS`](https://doc.4d.com/4dv20/help/command/en/page628.html) command.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|fill|string|any css value; "transparent"; "automatic"|

#### Objects Supported

[Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [Oval](shapes_overview.md#oval) - [Rectangle](shapes_overview.md#rectangle) - [Text Area](text.md)

#### See also

[Transparent](#transparent)

---

## Background Color Expression

`Selection and collection type list boxes`

An expression or a variable (array variables cannot be used) to apply a custom background color to each row of the list box. The expression or variable will be evaluated for each row displayed and must return a RGB color value. For more information, refer to the description of the [`OBJECT SET RGB COLORS`](https://doc.4d.com/4dv20/help/command/en/page628.html) command in the *4D Language Reference manual*.

You can also set this property using the [`LISTBOX SET PROPERTY`](https://doc.4d.com/4dv20/help/command/en/page1440.html) command with `lk background color expression` constant.

>With collection or entity selection type list boxes, this property can also be set using a [Meta Info Expression](properties_Text.md#meta-info-expression).

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowFillSource|string|An expression returning a RGB color value|

#### Objects Supported

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Border Line Style {#border-line-style}

Allows setting a standard style for the object border.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|borderStyle|text |"system", "none", "solid", "dotted", "raised", "sunken", "double"|

#### Objects Supported

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro areas](writeProArea_overview.md) - [Buttons](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicator](progressIndicator.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Stepper](stepper.md) - [Subform](subform_overview.md#overview) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## Dotted Line Type {#dotted-line-type}

Describes dotted line type as a sequence of black and white points.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|strokeDashArray|number array or string|Ex. "6 1" or \[6,1\] for a sequence of 6 black point and 1 white point|

#### Objects Supported

[Rectangle](shapes_overview.md#rectangle) - [Oval](shapes_overview.md#oval) - [Line](shapes_overview.md#line)

---

## Hide extra blank rows

Controls the display of extra blank rows added at the bottom of a list box object. By default, 4D adds such extra rows to fill the empty area:

![](../assets/en/FormObjects/property_hideExtraBlankRows1.png)

You can remove these empty rows by selecting this option. The bottom of the list box object is then left blank:

![](../assets/en/FormObjects/property_hideExtraBlankRows2.png)

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|hideExtraBlankRows|boolean|true, false|

#### Objects Supported

[List Box](listbox_overview.md#overview)

---

## Line Color

Designates the color of the object's lines.
The color can be specified by:

* a color name - like "red"
* a HEX value - like "#ff0000"
* an RGB value - like "rgb(255,0,0)"

You can also set this property using the [`OBJECT SET RGB COLORS`](https://doc.4d.com/4dv20/help/command/en/page628.html) command.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|stroke |string |any css value, "transparent", "automatic"|

> This property is also available for text based objects, in which case it designates both the font color and the object's lines, see [Font color](properties_Text.md#font-color).

#### Objects Supported

[Line](shapes_overview.md#line) - [Oval](shapes_overview.md#oval) - [Rectangle](shapes_overview.md#rectangle)

---

## Line Width

Designates the thickness of a line.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|strokeWidth|number|0 for smallest width on a printed form, or any integer value < 20|

#### Objects Supported

[Line](shapes_overview.md#line) - [Oval](shapes_overview.md#oval) - [Rectangle](shapes_overview.md#rectangle)

---

## Row Background Color Array

`Array type list boxes`

The name of an array to apply a custom background color to each row of the list box or column.

The name of a Longint array must be entered. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv20/4D/20.1/SET-RGB-COLORS.302-6481080.en.html) theme. If you want the cell to inherit the background color defined at the higher level, pass the value -255 to the corresponding array element.

For example, given a list box where the rows have an alternating gray/light gray color, defined in the properties of the list box. A background color array has also been set for the list box in order to switch the color of rows where at least one value is negative to light orange:

```4d
 <>_BgndColors{$i}:=0x00FFD0B0 // orange
 <>_BgndColors{$i}:=-255 // default value
```

![](../assets/en/FormObjects/listbox_styles1.png)

Next you want to color the cells with negative values in dark orange. To do this, you set a background color array for each column, for example `<>_BgndColor_1`, `<>_BgndColor_2` and `<>_BgndColor_3`. The values of these arrays have priority over the ones set in the list box properties as well as those of the general background color array:

```4d
 <>_BgndColorsCol_3{2}:=0x00FF8000 // dark orange
 <>_BgndColorsCol_2{5}:=0x00FF8000
 <>_BgndColorsCol_1{9}:=0x00FF8000
 <>_BgndColorsCol_1{16}:=0x00FF8000
```

![](../assets/en/FormObjects/listbox_styles2.png)

You can get the same result using the [`LISTBOX SET ROW FONT STYLE`](https://doc.4d.com/4dv20/help/command/en/page1268.html) and [`LISTBOX SET ROW COLOR`](https://doc.4d.com/4dv20/help/command/en/page1270.html) commands. They have the advantage of letting you skip having to predefine style/color arrays for the columns: instead they are created dynamically by the commands.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|rowFillSource|string|The name of a longint array.|

#### Objects Supported

[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Transparent

Sets the list box background to "Transparent". When set, any [alternate background color](#alternate-background-color) or [background color](#background-color--fill-color) defined for the column is ignored.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|fill|text|"transparent"|

#### Objects Supported

[List Box](listbox_overview.md#overview)

#### See also

[Background Color / Fill Color](#background-color--fill-color)

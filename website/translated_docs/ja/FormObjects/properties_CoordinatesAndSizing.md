---
id: propertiesCoordinatesAndSizing
title: Coordinates & Sizing
---

---
## 自動行高

This property is only available for array-based, non-hierarchical list boxes. The property is not selected by default.

When used, the height of every row in the column will automatically be calculated by 4D, and the column contents will be taken into account. Note that only columns with the option selected will be taken into account to calculate the row height.
> When resizing the form, if the "Grow" [horizontal sizing](properties_ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.

When this property is enabled, the height of every row is automatically calculated in order to make the cell contents entirely fit without being truncated (unless the [Wordwrap](properties_Display.md#wordwrap) option is disabled.

*   The row height calculation takes into account:
    *   any content types (text, numerics, dates, times, pictures (calculation depends on the picture format), objects),
    *   any control types (inputs, check boxes, lists, dropdowns),
    *   fonts, fonts styles and font sizes,
    *   the [Wordwrap](properties_Display.md#wordwrap) option: if disabled, the height is based on the number of paragraphs (lines are truncated); if enabled, the height is based on number of lines (not truncated).

*   The row height calculation ignores:
    *   hidden column contents
    *   [Row Height](#row-height) and [Row Height Array](#row-height-array) properties (if any) set either in the Property list or by programming.
> Since it requires additional calculations at runtime, the automatic row height option could affect the scrolling fluidity of your list box, in particular when it contains a large number of rows.




#### JSON 文法

| 名             | データタイプ  | とりうる値       |
| ------------- | ------- | ----------- |
| rowHeightAuto | boolean | true, false |

#### 対象オブジェクト

[List Box Column](listbox_overview.md#list-box-columns)





---
## 下

Bottom coordinate of the object in the form.


#### JSON 文法

| 名      | データタイプ | とりうる値  |
| ------ | ------ | ------ |
| bottom | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Rectangle](shapes_overview.md#rectangle) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)


---
## 左

Left coordinate of the object on the form.

#### JSON 文法

| 名    | データタイプ | とりうる値  |
| ---- | ------ | ------ |
| left | number | 最小値: 0 |


#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)



---
## 右

Right coordinate of the object in the form.

#### JSON 文法

| 名     | データタイプ | とりうる値  |
| ----- | ------ | ------ |
| right | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)




---
## 上

Top coordinate of the object in the form.

#### JSON 文法

| 名   | データタイプ | とりうる値  |
| --- | ------ | ------ |
| top | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)




---
## 角の半径

Defines the corner roundness (in pixels) of objects of the [rectangle](shapes_overview.md#rectangle) type. By default, the radius value for rectangles is 0 pixels. You can change this property to draw rounded rectangles with custom shapes:

![](assets/en/FormObjects/shape_rectangle.png)

Minimum value is 0, in this case a standard non-rounded rectangle is drawn. Maximum value depends on the rectangle size (it cannot exceed half the size of the shortest rectangle side) and is calculated dynamically.

You can also set this property using the [OBJECT Get corner radius](https://doc.4d.com/4Dv17R6/4D/17-R6/OBJECT-Get-corner-radius.301-4311357.en.html) and [OBJECT SET CORNER RADIUS](https://doc.4d.com/4Dv17R6/4D/17-R6/OBJECT-SET-CORNER-RADIUS.301-4311356.en.html) commands.

#### JSON 文法

| 名            | データタイプ  | とりうる値  |
| ------------ | ------- | ------ |
| borderRadius | integer | 最小値: 0 |

#### 対象オブジェクト

[四角](shapes_overview.md#rectangle)




---
## 高さ

This property designates an object's vertical size.
> Some objects may have a predefined height that cannot be altered.

#### JSON 文法

| 名      | データタイプ | とりうる値  |
| ------ | ------ | ------ |
| height | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)


---
## 幅

This property designates an object's horizontal size.
> * Some objects may have a predefined height that cannot be altered.
> * If the [Resizable](properties_ResizingOptions.md#resizable) property is used for a [list box column](listbox_overview.md#list-box-columns), the user can also manually resize the column.
> * When resizing the form, if the ["Grow" horizontal sizing](properties_ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.


#### JSON 文法

| 名     | データタイプ | とりうる値  |
| ----- | ------ | ------ |
| width | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)









---
## 最大幅

The maximum width of the column (in pixels). The width of the column cannot be increased beyond this value when resizing the column or form.
> When resizing the form, if the ["Grow" horizontal sizing](properties_ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.


#### JSON 文法

| 名        | データタイプ | とりうる値  |
| -------- | ------ | ------ |
| maxWidth | number | 最小値: 0 |

#### 対象オブジェクト

[List Box Column](listbox_overview.md#list-box-columns)


---
## 最小幅

The minimum width of the column (in pixels). The width of the column cannot be reduced below this value when resizing the column or form.
> When resizing the form, if the ["Grow" horizontal sizing](properties_ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.


#### JSON 文法

| 名        | データタイプ | とりうる値  |
| -------- | ------ | ------ |
| minWidth | number | 最小値: 0 |

#### 対象オブジェクト

[List Box Column](listbox_overview.md#list-box-columns)








---
## 行の高さ


Sets the height of list box rows (excluding headers and footers). By default, the row height is set according to the platform and the font size.


#### JSON 文法

| 名         | データタイプ | とりうる値                                    |
| --------- | ------ | ---------------------------------------- |
| rowHeight | string | css value in unit "em" or "px" (default) |

#### 対象オブジェクト

[リストボックス](listbox_overview.md#overview)


#### 参照
[行高さ配列](#row-height-array)



---
## 行高さ配列

This property is used to specify the name of a row height array that you want to associate with the list box. A row height array must be of the numeric type (longint by default).

When a row height array is defined, each of its elements whose value is different from 0 (zero) is taken into account to determine the height of the corresponding row in the list box, based on the current Row Height unit.

たとえば:

```4d
ARRAY LONGINT(RowHeights;20)
RowHeights{5}:=3
```

Assuming that the unit of the rows is "lines," then the fifth row of the list box will have a height of three lines, while every other row will keep its default height.
> * The Row Height Array property is not taken into account for hierarchical list boxes.
> * For array-based list boxes, this property is available only if the [Automatic Row Height](#automatic-row-height) option is not selected.

#### JSON 文法

| 名               | データタイプ | とりうる値                        |
| --------------- | ------ | ---------------------------- |
| rowHeightSource | string | Name of a 4D array variable. |

#### 対象オブジェクト

[リストボックス](listbox_overview.md#overview)


#### 参照
[行の高さ](#row-height)





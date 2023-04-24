---
id: comboBoxOverview
title: Combo Box
---

A combo box is similar to a [drop-down list](dropdownList_Overview.md#overview), except that it accepts text entered from the keyboard and has additional options. 

![](../assets/en/FormObjects/combo_box.png)

Fundamentally, you treat a combo box as an enterable area that uses its object, array or a choice list as the set of default values.

## Handling combo boxes

Use the [`On Data Change`](Events/onDataChange.md) event to manage entries into the enterable area, as you would for any input form object. 

You initialize a combo box in exactly the same way as a [drop-down list](dropdownList_Overview.md#overview): using an object, an array, or a choice list. 

### Using an object

> This feature is only available in 4D projects.

An [object](Concepts/dt_object.md) encapsulating a [collection](../Concepts/dt_collection.md) can be used as the data source of a combo box. The object must contain the following properties:

|Property|Type|Description|
|---|---|---|
|`values`|Collection|Mandatory - Collection of scalar values. All values must be of the same type. Supported types:<li>strings</li><li>numbers</li><li>dates</li><li>times</li>If empty or not defined, the combo box is empty|
|`currentValue`|same as Collection|Text entered by the user|

If the object contains other properties, they are ignored. 

When the user enters text into the combo box, the `currentValue` property of the object gets the entered text.

### Using an array

Please refer to **Using an array** in the [drop-down list page](dropdownList_Overview.md#using-an-array) for information about how to initialize the array.

When the user enters text into the combo box, the 0th element of the array gets the entered text. 

### Using a choice list

If you want to use a combo box to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the form object's data source. This makes it easier to manage listed fields/variables.

>If you use a hierarchical list, only the first level is displayed and can be selected.

To associate a combo box with a field or variable, you can just enter the name of the field or variable directly in the [Variable or Expression](properties_Object.md#variable-or-expression) of the form object in the Property List.

When the form is executed, 4D automatically manages the combo box during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the combo box when the form is displayed:

Please refer to **Using a choice** in the [drop-down list page](dropdownList_Overview.md#using-a-choice-list) for more information.
 

## Options

Combo box type objects accept two specific options: 

- [Automatic insertion](properties_DataSource.md#automatic-insertion): enables automatically adding a value to the data source when a user enters a value that is not found in the list associated with the combo box.
- [Excluded List](properties_RangeOfValues.md#excluded-list) (list of excluded values): allows setting a list whose values cannot be entered in the combo box. If an excluded value is entered, it is not accepted and an error message is displayed.

>Associating a [list of required values](properties_RangeOfValues.md#required-list) is not available for combo boxes. In an interface, if an object must propose a finite list of required values, then you must use a [drop-down list](dropdownList_Overview.md#overview) object.

## Supported Properties
[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  
---
id: propertiesObject
title:Object 
---

## Type

 `MANDATORY SETTING`

This property designates the type of the form object (active or inactive). For more information about form objects, see the [Form editor](https://doc.4d.com/4Dv17R5/4D/17-R5/Form-editor.300-4163727.en.html) page.

To draw an object type, select the corresponding button and then trace the object in the form. After creating an object, you can modify its type using the Property List. Hold down the Shift key as you draw to constrain the object to a regular shape. Lines are constrained to horizontal, 45°, or vertical, rectangles are constrained to squares, and ovals are constrained to circles.

When a button is selected, you can scroll through its variants using the **Shift+Selection** key shortcut. Help tips display the currently selected variant and the associated selection key of the object.

You can click twice on the button so that it remains selected even after you have traced an object in the form (continual selection). This function makes creating several successive objects of the same type easier. To cancel a continual selection, click on another object or tool.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|type|string|"groupBox", "button","checkbox", "radio", "buttonGrid", "pictureButton", "picturePopup"|



#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) -[Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) -  [Picture Button](pictureButton_overview.md) - [Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkBox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview)

## Plug-in Kind
Describes the type of plug-in.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|pluginAreaKind|string|The type of plug-in.|


#### Objects Supported
[Plug-in Area](pluginArea_overview.md#overview)


## Object Name

Each active form object is associated with an object name. Each object name must be unique.

>Object names are limited to a size of 255 bytes.

When using 4D’s language, you can refer to an active form object by its object name (for more information about this, refer to [Object Properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Object-Properties.300-4128195.en.html) in the 4D Language Reference manual).

For more information about naming rules for form objects, refer to [GET REGISTERED CLIENTS](https://doc.4d.com/4Dv17R5/4D/17-R5/GET-REGISTERED-CLIENTS.301-4128067.en.html) (the rules are the same) as well as to [Identifiers](https://doc.4d.com/4Dv17R5/4D/17-R5/Identifiers.300-4128320.en.html) in the 4D Language Reference manual.




#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|name|string |Any name which does not belong to an already existing object|



#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) -  [Picture](pictureButton_overview.md) - [Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkBox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview)



## Variable or Expression

This property specifies the source of the data. Each active form object is associated with an object name and a variable name. The variable name can be different from the object’s name. In the same form, you can use the same variable several times but each object name must be unique.

>Object names are limited to a size of 255 bytes and for variable names the size is limited to 31 bytes.

When using 4D’s language, you can refer to an active form object by either its variable name or object name (for more information about this, refer to [Object Properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Object-Properties.300-4128195.en.html) in the 4D Language Reference manual).

For more information about naming rules for form objects and variables, refer to [GET REGISTERED CLIENTS](https://doc.4d.com/4Dv17R5/4D/17-R5/GET-REGISTERED-CLIENTS.301-4128067.en.html) (the rules are the same) as well as to [Identifiers](https://doc.4d.com/4Dv17R5/4D/17-R5/Identifiers.300-4128320.en.html) in the 4D Language Reference manual.



### Variables

Variables associated with form objects can contain any type of expression that returns a value — and not only variable names. You can simply enter the expression directly in the “Variable or Expression” area of the Property List for the object.

Variables can be enterable or non-enterable and can receive data of the Alpha, Text, number, Date, Time and/or Picture type. 


### Expressions

You can also enter an expression directly in the “Variable or Expression” area of the Property List for the object. Any valid 4D expression is allowed: simple expression, formula, 4D function, project method name or field using the standard `[Table]Field` syntax. The expression is evaluated when the form is executed and reevaluated for each form event. Naturally in this case it is not possible to manage the value of the variable by programming. 


>If the value entered corresponds to both a variable name and a method name, 4D considers that you are indicating the method.




#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dataSource|string, or string array for hierarchical listbox column|4D variable, field name, or arbitrary complex language expression|



#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Picture](pictureButton_overview.md) - 
[Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkBox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) 



## Expression Type

Indicates the expression / variable type.


![](assets/en/FormObjects/property_expressionType.png)



#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dataSourceTypeHint |string  |"integer", "boolean" |



#### Objects Supported

[Radio Button](radio_overview.md) - [Check Box](checkBox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) 




## Title

This property allows inserting a label on the button. The font and the style of this label can be set in the “Text” theme.

You can force a carriage return in the label by using the \ character (backslash). 

![](assets/en/FormObjects/property_title.png)



To insert a \ in the label, enter \\. 

By default, the label is placed in the center of the button. When the button also contains an icon, you can modify the relative location of these two elements using the [Title/Picture Position](../Properties/property_titlePicturePosition) property. 

For database translation purposes, you can enter an XLIFF reference in the title area of a button (see [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).



#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|text|string |any text |


#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Radio Button](radio_overview.md) - [Check Box](checkBox_overview.md) 



## Radio Group

Enables radio buttons to be used in coordinated sets: only one button at a time can be selected in the set.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
| radioGroup|string  |Radio group name|



#### Objects Supported

[Radio Button](radio_overview.md) 



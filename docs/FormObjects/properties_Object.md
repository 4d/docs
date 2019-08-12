---
id: propertiesObject
title:Object 
---

## Collection or entity selection

To use collection elements or entities to define the row contents of the list box.

Enter an expression that returns either a collection or an entity selection. Usually, you will enter the name of a variable, a collection element or a property that contain a collection or an entity selection. 

The collection or the entity selection must be available to the form when it is loaded. Each element of the collection or each entity of the entity selection will be associated to a list box row and will be available as an object through the [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html) command:

*	if you used a collection of objects, you can call **This** in the datasource expression to access each property value, for example **This.\<propertyPath>**.
*	if you used an entity selection, you can call **This** in the datasource expression to access each attribute value, for example  **This.\<attributePath>**. 

>If you used a collection of scalar values (and not objects), 4D allows you to display each value by calling **This.value** in the datasource expression. However in this case you will not be able to modify values or to access the current ite object (see below)
Note: For information about entity selections, please refer to the [ORDA](https://doc.4d.com/4Dv17R6/4D/17-R6/ORDA.200-4354624.en.html) chapter.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dataSource |string|Name of a collection or entity selection.|

#### Objects Supported

[List Box](listbox_overview.md#overview)










## Data Souce

Specifies the source of the data.

![](assets/en/FormObjects/listbox_dataSource.png)

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dataSource|string, or string array for hierarchical listbox column|A 4D variable, field name, or an arbitrary complex language expression.|

#### Objects Supported

[List Box](listbox_overview.md#overview)




## Expression Type

A 4D expression (simple expression, formula or 4D method). The expression must return a value. The value will be evaluated in the On Display Detail and On Data Change events. The result of the expression will be automatically displayed when you switch to Application mode. The expression will be evaluated for each record of the selection (current or temporary) of the Master Table (for selection type list boxes), each element of the collection (for collection type list boxes) or each entity of the selection (for entity selection list boxes). If it is empty, the column will not display any results.

The following expression types are supported:
*	String
*	Numeric
*	Date
*	Picture
*	Boolean
*	For collection/entity selection list boxes, Null or unsupported types are displayed as empty strings.

When using collections or entity selections, you will usually declare the element property or entity attribute associated to a column within an expression containing This. This is a dedicated 4D command that returns a reference to the currently processed element (see the This command description). For example, you can use This.<propertyPath> where and <propertyPath> is the path of a property in the collection or an entity attribute path to access the current value of each element/entity. 

If you use a collection of scalar values, 4D will create an object for each collection element with a single property (named "value"), filled with the element value. In this case, you will use This.value as expression. 

In any cases, you can define the expression using the 4D Formula Editor by clicking on the [...] button in the Property List. 
If a non-assignable expression is used (e.g. [Person]FirstName+" "+[Person]LastName), the column is never enterable even if the Enterable option is checked.

If a field, a variable, or an assignable expression (e.g. Person.lastName) is used, the column can be enterable or not depending on the Enterable option. 

In Design mode, the data source type is displayed in the first row of the column. For example, [Table1]MyFld.
If the defined expression is not correct, the column of the list box will display an error message in Application mode.

![](assets/en/FormObjects/property_expressionType.png)

For List Box Columns, this property is used to associate a display format with the column data. The formats provided will depend on the variable type (array type list box) or the data/field type (selection and collection type list boxes). The standard 4D formats that can be used are: Alpha, Numeric, Date, Time, Picture and Boolean. The Text type does not have specific display formats. Any existing custom formats are also available.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dataSourceTypeHint |string  |"integer", "boolean" |

#### Objects Supported

[Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box Column](listbox_overview.md#overview)  - [List Box Header](listbox_overview.md#list-box-footers)



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

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) -  [Picture](pictureButton_overview.md) - [Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Header](listbox_overview.md#list-box-footers)



## Plug-in Kind
Describes the type of plug-in.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|pluginAreaKind|string|The type of plug-in.|


#### Objects Supported
[Plug-in Area](pluginArea_overview.md#overview)





## Radio Group

Enables radio buttons to be used in coordinated sets: only one button at a time can be selected in the set.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
| radioGroup|string  |Radio group name|


#### Objects Supported

[Radio Button](radio_overview.md) 





## Title

This property allows inserting a label on an object. The font and the style of this label can be specified.

You can force a carriage return in the label by using the \ character (backslash). 

![](assets/en/FormObjects/property_title.png)

To insert a \ in the label, enter "&#92;&#92;". 

By default, the label is placed in the center of the object. When the object also contains an icon, you can modify the relative location of these two elements using the [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) property. 

For database translation purposes, you can enter an XLIFF reference in the title area of a button (see [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|text|string |any text |

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [List Box Header](listbox_overview.md#list-box-headers)





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

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) -[Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) -  [Picture Button](pictureButton_overview.md) - [Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Web Area](webArea_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)









## Variable Calculation

This option sets the type of calculation to be done in the footer area. There are several types of calculations available as well as the Custom option:

*	**Minimum, Maximum, Sum, Count, Average, Standard deviation**(*), **Variance**(*) and **Sum squares**(*). These calculations are described below. When a calculation is selected, it is applied automatically to all the values found in the list box column. Note that the calculation does not take the shown/hidden state of list box rows into account. If you want to restrict a calculation to only visible rows, you must use a custom calculation.

	When an automatic calculation has been assigned to a footer areas, a "standard action" shield is then associated with it:
![](assets/en/FormObjects/listbox_footers_variableCalculation.png)
*	Custom: When you select this option, no automatic calculations are performed by 4D and you must assign the value of the variable in this area by programming.

### Automatic calculations  

You can associate various automatic calculations with a footer area. The following table shows which calculations can be used according to the type of data found in each column and indicates the type automatically affected by 4D to the footer variable (if it is not typed by the code):

![](assets/en/FormObjects/listbox_footers_variableCalculation_auto.png)

(*) Only for array type list boxes.

>Automatic calculations are not supported with (you need to use custom calculations):
>
>*	footers of columns based on formulas,
>*	footers of Collection and Entity selection list boxes.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|variableCalculation|string|"none", "minimum", "maximum", "sum", "count", "average", "standardDeviation", "variance", "sumSquare"|

#### Objects Supported

[List Box Header](listbox_overview.md#list-box-footers)





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

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Picture](pictureButton_overview.md) - [Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Header](listbox_overview.md#list-box-footers)












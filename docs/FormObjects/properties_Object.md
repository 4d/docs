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










## Data Source

Specifies the source of the data.

![](assets/en/FormObjects/listbox_dataSource.png)

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dataSource|string, or string array for hierarchical listbox column|A 4D variable, field name, or an arbitrary complex language expression.|

#### Objects Supported

[List Box](listbox_overview.md#overview)




## Expression Type

Specify the data type for the expression or variable. Note that main purpose of this setting is to configure the themes and options available in the Property list so that they will correspond to the data type. It does not actually type the variable itself. In view of database compilation, you must use the commands of the Compiler theme.

However, this property has a typing function in the following specific cases:

- **Dynamic variables**: you can use this menu to declare the type of [dynamic variables](#dynamic-variables).
- **[List Box Columns](listboxOverview.md#list-box-columns)**: this property is used to associate a display format with the column data. The formats provided will depend on the variable type (array type list box) or the data/field type (selection and collection type list boxes). The standard 4D formats that can be used are: Alpha, Numeric, Date, Time, Picture and Boolean. The Text type does not have specific display formats. Any existing custom formats are also available.
- **Picture variables**: you can use this menu to declare the variables before loading the form in interpreted mode.

> Specific native mechanisms govern the display of picture variables in forms. These mechanisms require greater precision when configuring variables: from now on, they must have already been declared before loading the form — i.e., even before the `On Load` form event — unlike other types of variables. To do this, you need either for the statement `C_PICTURE(varName)` to have been executed before loading the form (typically, in the method calling the `DIALOG` command), or for the variable to have been typed at the form level using the expression type property.
Otherwise, the picture variable will not be displayed correctly (only in interpreted mode).


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dataSourceTypeHint |string  |"integer", "boolean", "number", "picture", "text", date", "time", "arrayText", "arrayDate", "arrayTime", "arrayNumber", "collection", "object", "undefined"|

#### Objects Supported

[Input Area](inputOverview.md) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Radio Button](radiobuttonOverview.md) - [Indicators](indicatorsOveriew.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box Column](listbox_overview.md#overview)  - [List Box Header](listbox_overview.md#list-box-footers) - [Tab Control](splitterTabControlOverview#tab-controls)



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

This property designates the type of the active or inactive form object. Object types are described in the [Objects](buttonOverview.md) section.

In the Form editor, to select an object type, click the corresponding toolbar button and then trace the object in the form. After creating an object, you can modify its type using the Property List.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|type|string|"button", "buttonGrid", "checkbox", "combo", "dropdown", "groupBox", "input", "line", "list", "listbox", "oval", "picture", "pictureButton", "picturePopup", "plugin", "progress", "radio", "rectangle", "ruler", "spinner", "splitter", "stepper", "subform", "tab", "text", "view", "webArea", "write"|


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

This property specifies the source of the data. Each active form object is associated with an object name and a variable name. The variable name can be different from the object’s name. In the same form, you can use the same variable several times but each object name must be unique. When using 4D’s language, you can refer to an active form object by either its variable name or object name (for more information, refer to [Object Properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Object-Properties.300-4128195.en.html) in the *4D Language Reference* manual).

>Object names are limited to a size of 255 bytes and for variable names the size is limited to 31 bytes. See [Identifiers](https://developer.4d.com/docs/en/Concepts/identifiers.html) section for more information about naming rules.

The form object variables allow you to control and monitor the objects. For example, when a button is clicked, its variable is set to 1; at all other times, it is 0. The variable associated with a progress indicator lets you read and change the current setting.

Variables can be enterable or non-enterable and can receive data of the Alpha, Text, number, Date, Time and/or Picture type. 

### Using expressions

You can enter an expression in the “Variable or Expression” area of the Property List for the object. Any valid 4D expression is allowed: simple expression, formula, 4D function, project method name or field using the standard `[Table]Field` syntax. The expression is evaluated when the form is executed and reevaluated for each form event. Naturally in this case it is not possible to manage the value of the variable by programming. 

>If the value entered corresponds to both a variable name and a method name, 4D considers that you are indicating the method.


### Dynamic variables

You can leave it up to 4D to create variables associated with your form objects (buttons, enterable variables, check boxes, etc.) dynamically and according to your needs. To do this, simply leave the "Variable or Expression" property (or `dataSource` JSON field) blank.

When a variable is not named, when the form is loaded, 4D creates a new variable for the object, with a calculated name that is unique in the space of the process variables of the interpreter (which means that this mechanism can be used even in compiled mode). This temporary variable will be destroyed when the form is closed.
In order for this principle to work in compiled mode, it is imperative that dynamic variables are explicitly typed. There are two ways to do this:

- You can set the type using the [Expression type](#expression-type) property. 
- You can use a specific initialization code when the form is loaded that uses, for example, the `VARIABLE TO VARIABLE` command:

```code4d
 If(Form event=On Load)
    C_TEXT($init)
    $Ptr_object:=OBJECT Get pointer(Object named;"comments")
    $init:=""
    VARIABLE TO VARIABLE(Current process;$Ptr_object->;$init)
 End if
```

In the 4D code, dynamic variables can be accessed using a pointer obtained with the `OBJECT Get pointer` command. For example:

```code4d
  // assign the time 12:00:00 to the variable for the "tstart" object
 $p :=OBJECT Get pointer(Object named;"tstart")
 $p->:=?12:00:00?
```
 
There are two advantages with this mechanism:

- On the one hand, it allows the development of "subform" type components that can be used several times in the same host form. Let us take as an example the case of a datepicker subform that is inserted twice in a host form to set a start date and an end date. This subform will use objects for choosing the date of the month and the year. It will be necessary for these objects to work with different variables for the start date and the end date. Letting 4D create their variable with a unique name is a way of resolving this difficulty.
- On the other hand, it can be used to limit memory usage. In fact, form objects only work with process or inter-process variables. However, in compiled mode, an instance of each process variable is created in all the processes, including the server processes. This instance takes up memory, even when the form is not used during the session. Therefore, letting 4D create variables dynamically when loading the forms can save memory.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dataSource|string, or string array for hierarchical listbox column|4D variable, field name, or arbitrary complex language expression. Empty string for [dynamic variables](#dynamic-variables)|


#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Picture](pictureButton_overview.md) - [Button Grid](buttonGrid_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Combo Box](comboBox_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Header](listbox_overview.md#list-box-footers)












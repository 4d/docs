---
id: propertiesDataSource
title: Data Source 
---

## Automatic Insertion

When this option is selected, if a user enters a value that is not found in the choice list associated with the object, this value is automatically added to the list stored in memory. You can associate choice lists to objects using:
- the [Choice List](properties_DataSource.md#choice-list) JSON property
- the [OBJECT SET LIST BY NAME](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-LIST-BY-NAME.301-4128227.en.html) or [OBJECT SET LIST BY REFERENCE](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-LIST-BY-REFERENCE.301-4128237.en.html) commands.
- the form editor's Property List.

For example, given a choice list containing "France, Germany, Italy" that is associated with a "Countries" combo box: if the **automatic insertion** property is set and a user enters "Spain", then the value "Spain" is automatically added to the list in memory:

![](assets/en/FormObjects/comboBox_AutomaticInsertion_example.png)

Naturally, the value entered must not belong to the list of [excluded values](properties_RangeOfValues.md#excluded-list) associated with the object, if one has been set.

>If the list was created from a list defined in Design mode, the original list is not modified.

When the **automatic insertion** option is not selected (default), the value entered is stored in the object but not in the list in memory.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|automaticInsertion|boolean |"true", "false"|

#### Objects Supported

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)





## Choice List

Allows setting a standard style for the object border.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|choiceList|list |A list of possible values|

#### Objects Supported

[Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - 
[Combo Box](comboBox_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)






## Current item
`Collection or entity selection list boxes`

Specifies a variable or expression that will be assigned the collection element/entity selected by the user. You must use an object variable or an assignable expression that accepts objects. If the user does not select anything or if you used a collection of scalar values, the Null value is assigned.

>This property is "read-only", it is automatically updated according to user actions in the list box. You cannot edit its value to modify the list box selection status.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|currentItemSource| string|Object expression	|

#### Objects Supported
[List Box ](listbox_overview.md#overview)






## Current item position
`Collection or entity selection list boxes`

Specifies a variable or expression that will be assigned a longint indicating the position of the collection element/entity selected by the user.

*	if no element/entity is selected, the variable or expression receives zero,
*	if a single element/entity is selected, the variable or expression receives its location,
*	if multiple elements/entities are selected, the variable or expression receives the position of element/entity that was last selected.

>This property is "read-only", it is automatically updated according to user actions in the list box. You cannot edit its value to modify the list box selection status.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|currentItemPositionSource| string|Number expression	|

#### Objects Supported
[List Box ](listbox_overview.md#overview)






## Data Type

`Selection and collection type list boxes`

Used to define the type of expression or variable associated with a column. It is used to indicate the display format to apply.

The available formats are:

*	Text 
*	Numeric
*	Integer
*	Date
*	Time 
*	Picture 
*	Boolean
*	Object

If a field is entered in [Expression](#expression), the Data Type property is not available; the display format corresponding to the field type is used.



#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dataSourceTypeHint |string |"integer", "number", "boolean", "picture", "text", date", "time", "arrayText", "collection", "object", "undefined"|

#### Objects Supported

[List Box Column](listbox_overview.md#list-box-columns)








## Default values 

You can assign a default value to be entered in a field or enterable object. The default value is entered when a new record is first displayed. You can change the value unless the field or entry area has been defined as non-enterable.

The default value must be appropriate for the field type. 4D provides stamps for generating default values for the date, time, and sequence number. The date and time are taken from the system date and time. 4D automatically generates any sequence numbers needed. The table below shows the stamp to use to generate default values automatically:

|Stamp|	Meaning|
|---|---|
|#D|Current date|
|#H	|Current time|
|#N	|Sequence number|

You can use a sequence number to create a unique number for each record in the table for the current data file. A sequence number is a longint that is generated for each new record. The numbers start at one (1) and increase incrementally by one (1). A sequence number is never repeated even if the record it is assigned to is deleted from the table. Each table has its own internal counter of sequence numbers. For more information, refer to the [Autoincrement](https://doc.4d.com/4Dv17R6/4D/17-R6/Field-properties.300-4354738.en.html#976029) paragraph. 

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|values |collection |A collection of default values (strings)|

#### Objects Supported

[List Box Column (array type only)](listbox_overview.md#list-box-columns)






## Expression

A 4D expression to be associated with a column. You can enter:

*	A simple variable (in this case, it must be explicitly declared for compilation). You can use any type of variable except BLOBs and arrays. The value of the variable will be generally calculated in the `On Display Detail` event.
*	A field using the standard [Table]Field syntax (selection type list box only), for example: [Employees]LastName. The following types of fields can be used:
	*	String
	*	Numeric
	*	Date
	*	Time
	*	Picture
	*	Boolean

	You can use fields from the Master Table or from other tables.
*	A 4D expression (simple expression, formula or 4D method). The expression must return a value. The value will be evaluated in the `On Display Detail` and `On Data Change` events. The result of the expression will be automatically displayed when you switch to Application mode. The expression will be evaluated for each record of the selection (current or temporary) of the Master Table (for selection type list boxes), each element of the collection (for collection type list boxes) or each entity of the selection (for entity selection list boxes). If it is empty, the column will not display any results.

	The following expression types are supported:
	*	String
	*	Numeric
	*	Date
	*	Picture
	*	Boolean
	*	For collection/entity selection list boxes, Null or unsupported types are displayed as empty strings.

	When using collections or entity selections, you will usually declare the element property or entity attribute associated to a column within an expression containing **This**. **This** is a dedicated 4D command that returns a reference to the currently processed element (see the [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html) command description). For example, you can use **This.\<propertyPath>** where and **\<propertyPath>** is the path of a property in the collection or an entity attribute path to access the current value of each element/entity. 
	
	If you use a collection of scalar values, 4D will create an object for each collection element with a single property (named "value"), filled with the element value. In this case, you will use **This.value** as expression. 

	In any cases, you can define the expression using the 4D Formula Editor by clicking on the [...] button in the Property List. 

	If a non-assignable expression is used (*e.g.* *[Person]FirstName+" "+[Person]LastName*), the column is never enterable even if the **Enterable** option is checked.

	If a field, a variable, or an assignable expression (*e.g. Person.lastName*) is used, the column can be enterable or not depending on the **Enterable** option. 

	In Design mode, the data source type is displayed in the first row of the column. For example, *[Table1]MyFld*.
If the defined expression is not correct, the column of the list box will display an error message in Application mode.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dataSource |string |A 4D variable, field name, or an arbitrary complex language expression.|

#### Objects Supported

[List Box Column](listbox_overview.md#list-box-columns)






## Master Table
`Current selection list boxes`

Specifies the table whose current selection will be used. This table and its current selection will form the reference for the fields associated with the columns of the list box (field references or expressions containing fields). Even if some columns contain fields from other tables, the number of rows displayed will be defined by the master table.
 
All database tables can be used, regardless of whether the form is related to a table (table form) or not (project form). 

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|table| number|Table number|

#### Objects Supported
[List Box](listbox_overview.md#overview)






## Selected Items
`Collection or entity selection list boxes`

Specifies a variable or expression that will be assigned the elements or entities selected by the user.

*	for a collection list box, you must use a collection variable or an assignable expression that accepts collections,
*	for an entity selection list box, an entity selection object is built. You must use an object variable or an assignable expression that accepts objects.

>This property is "read-only", it is automatically updated according to user actions in the list box. You cannot edit its value to modify the list box selection status.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|selectedItemsSource| string|Collection expression	|

#### Objects Supported
[List Box ](listbox_overview.md#overview)



## Selection Name
`Named selection list boxes`

Specifies the named selection to be used. You must enter the name of a valid named selection. It can be a process or interprocess named selection. The contents of the list box will be based on this selection. The named selection chosen must exist and be valid at the time the list box is displayed, otherwise the list box will be displayed blank.

> Named selections are ordered lists of records. They are used to keep the order and current record of a selection in memory. For more information, refer to **Named Selections** section in the *4D Language Reference manual*.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|namedSelection| string|Named selection name|

#### Objects Supported
[List Box](listbox_overview.md#overview)

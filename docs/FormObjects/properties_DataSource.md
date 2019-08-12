---
id: propertiesDataSource
title: Data Source 
---

## Automatic Insertion

Enables automatically adding a value to a list stored in memory when a user enters a value that is not found in the choice list associated with the object.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|automaticInsertion|boolean |"true", "false"|

#### Objects Supported

[Combo Box](comboBox_overview.md)





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
|values |string  |A list of default values|

#### Objects Supported

[List Box Column](listbox_overview.md#list-box-columns)






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




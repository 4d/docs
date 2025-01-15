---
id: propertiesDataSource
title: Data Source 
---

## Automatic Insertion

When this option is selected, if a user enters a value that is not found in the list associated with the object, this value is automatically added to the list stored in memory.

When the **automatic insertion** option is not set (default), the value entered is stored in the form object but not in the list in memory.

This property is supported by:

- [Combo box](comboBox_overview.md) and [list box column](listbox_overview.md#list-box-columns) form objects associated to a choice list.
- [Combo box](comboBox_overview.md) form objects whose associated list is filled by their array or object datasource.

For example, given a choice list containing "France, Germany, Italy" that is associated with a "Countries" combo box: if the **automatic insertion** property is set and a user enters "Spain", then the value "Spain" is automatically added to the list in memory:

![](../assets/en/FormObjects/comboBox_AutomaticInsertion_example.png)

> If the choice list was created from a list defined in Design mode, the original list is not modified.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|automaticInsertion|boolean |true, false|

#### Objects Supported

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Choice List

Associates a choice list with an object. It can be a choice list name (a list reference) or a collection of default values.

You can also associate choice lists to objects using the [OBJECT SET LIST BY NAME](https://doc.4d.com/4dv19/help/command/en/page237.html) or [OBJECT SET LIST BY REFERENCE](https://doc.4d.com/4dv19/help/command/en/page1266.html) commands.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|choiceList|list, collection|A list of possible values|
|list|list, collection|A list of possible values (hierarchical lists only)|

#### Objects Supported

[Drop-down List](dropdownList_Overview.md) -
[Combo Box](comboBox_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Choice List (static list)

List of static values to use as labels for the tab control object.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|labels|list, collection|A list of values to fill the tab control|

#### Objects Supported

[Tab Control](tabControl.md)

---

## Current item

`Collection or entity selection list boxes`

Specifies a variable or expression that will be assigned the collection element/entity selected by the user. You must use an object variable or an assignable expression that accepts objects. If the user does not select anything or if you used a collection of scalar values, the Null value is assigned.

>This property is "read-only", it is automatically updated according to user actions in the list box. You cannot edit its value to modify the list box selection status.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|currentItemSource| string|Object expression |

#### Objects Supported

[List Box](listbox_overview.md#overview)

---

## Current item position

`Collection or entity selection list boxes`

Specifies a variable or expression that will be assigned a longint indicating the position of the collection element/entity selected by the user.

- if no element/entity is selected, the variable or expression receives zero,
- if a single element/entity is selected, the variable or expression receives its location,
- if multiple elements/entities are selected, the variable or expression receives the position of element/entity that was last selected.

>This property is "read-only", it is automatically updated according to user actions in the list box. You cannot edit its value to modify the list box selection status.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|currentItemPositionSource| string|Number expression |

#### Objects Supported

[List Box](listbox_overview.md)

---

## Data Type (expression type)

Defines the data type for the displayed expression. This property is used with:

- [List box columns](listbox_overview.md#list-box-columns) of the selection and collection types.
- [Drop-down lists](dropdownList_Overview.md) associated to objects or arrays.

See also [**Expression Type**](properties_Object.md#expression-type) section.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dataSourceTypeHint |string  |<li>**list box columns:** "boolean", "number", "picture", "text", date", "time". *Array/selection list box only*: "integer", "object"</li><li>**drop-down lists:** "object", "arrayText", "arrayDate", "arrayTime", "arrayNumber"</li>|

#### Objects Supported

[Drop-down Lists](dropdownList_Overview.md) associated to objects or arrays - [List Box column](listbox_overview.md#list-box-columns)

---

## Data Type (list)

Defines the type of data to save in the field or variable associated to the [drop-down list](dropdownList_Overview.md). This property is used with:

- Drop-down lists [associated to a choice list](dropdownList_Overview.md#using-a-choice-list).
- Drop-down lists [associated to a hierarchical choice list](dropdownList_Overview.md#using-a-hierarchical-choice-list).

Three options are available:

- **List reference**: declares that the drop-down list is hierarchical. It means that the drop-down list can display up to two hierarchical levels and its contents can be managed by the 4D language commands of the **Hierarchical Lists** theme.
- **Selected item value** (default): the drop-down list is not hierarchical and the value of the item chosen in the list by the user is saved directly. For example, if the user chooses the value "Blue", then this value is saved in the field.
- **Selected item reference**: the drop-down list is not hierarchical and the reference of the choice list item is saved in the object. This reference is the numeric value associated with each item either through the *itemRef* parameter of the [`APPEND TO LIST`](https://doc.4d.com/4dv19/help/command/en/page376.html) or [`SET LIST ITEM`](https://doc.4d.com/4dv19/help/command/en/page385.html) commands, or in the list editor. This option lets you optimize memory usage: storing numeric values in fields uses less space than storing strings. It also makes it easier to translate applications: you just create multiple lists in different languages but with the same item references, then load the list based on the language of the application.

Using the **Selected item reference** option requires compliance with the following principles:

- To be able to store the reference, the field or variable data source must be of the Number type (regardless of the type of value displayed in the list). The [expression](properties_Object.md#expression-type) property is automatically set.
- Valid and unique references must be associated with list items.
- The drop-down list must be associated with a field or a variable.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|saveAs| string|"value", "reference"|

> Setting only `"dataSourceTypeHint" : "integer"` with a `"type": "dropdown"` form object will declare a hierarchical drop-down list.

#### Objects Supported

[Drop-down Lists](dropdownList_Overview.md) associated to lists

---

## Default (list of) values

List of values that will be used as default values for the list box column (array type only). These values are automatically available in the [array variable](properties_Object.md#variable-or-expression) associated with this column when the form is executed. Using the language, you can manage the object by referring to this array.

> Do not make confusion between this property and the "[default value](properties_RangeOfValues.md#default-list-of-values)" property that allows to define a field value in new records.

You must enter a list of values. In the Form editor, a specific dialog box allows you to enter values separated by carriage returns:

![](../assets/en/FormObjects/defaultValues.png)

> You can also define a [choice list](properties_DataSource.md#choice-list) with the list box column. However, a choice list will be used as list of selectable values for each column row, whereas the default list fill all column rows.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|values |collection |A collection of default values (strings), ex: "a", "b", "c", "d"|

#### Objects Supported

[List Box Column (array type only)](listbox_overview.md#list-box-columns)

---

## Expression

This description is specific to [selection](listbox_overview.md#selection-list-boxes)
 and [collection](listbox_overview.md#collection-or-entity-selection-list-boxes) type list box columns. See also **[Variable or Expression](properties_Object.md#variable-or-expression)** section.

A 4D expression to be associated with a column. You can enter:

- A **simple variable** (in this case, it must be explicitly declared for compilation). You can use any type of variable except BLOBs and arrays. The value of the variable will be generally calculated in the `On Display Detail` event.

- A **field** using the standard [Table]Field syntax ([selection type list box](listbox_overview.md#selection-list-boxes)
 only), for example: `[Employees]LastName`. The following types of fields can be used:
  - String
  - Numeric
  - Date
  - Time
  - Picture
  - Boolean  
You can use fields from the Master Table or from other tables.

- A **4D expression** (simple expression, formula or 4D method). The expression must return a value. The value will be evaluated in the `On Display Detail` and `On Data Change` events. The result of the expression will be automatically displayed when you switch to Application mode. The expression will be evaluated for each record of the selection (current or named) of the Master Table (for selection type list boxes), each element of the collection (for collection type list boxes) or each entity of the selection (for entity selection list boxes). If it is empty, the column will not display any results.
The following expression types are supported:
  - String
  - Numeric
  - Date
  - Picture
  - Boolean
  
 For collection/entity selection list boxes, Null or unsupported types are displayed as empty strings.  
 When using collections or entity selections, you will usually declare the element property or entity attribute associated to a column within an expression containing [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html). `This` is a dedicated 4D command that returns a reference to the currently processed element. For example, you can use `This.\<propertyPath>` where `\<propertyPath>` is the path of a property in the collection or an entity attribute path to access the current value of each element/entity.
 If you use a collection of scalar values, 4D will create an object for each collection element with a single property (named "value"), filled with the element value. In this case, you will use `This.value` as expression.

 If a [non-assignable expression](Concepts/quick-tour.md#expressions) is used (e.g. `[Person]FirstName+" "+[Person]LastName`), the column is never enterable even if the [Enterable](properties_Entry.md#enterable) property is enabled.

If a field, a variable, or an assignable expression (*e.g. Person.lastName*) is used, the column can be enterable or not depending on the [Enterable](properties_Entry.md#enterable) property.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|dataSource |string |A 4D variable, field name, or an arbitrary complex language expression.|

#### Objects Supported

[List Box Column](listbox_overview.md#list-box-columns)

---

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

---

## Save as

This property is available in the following conditions:

- a [choice list](#choice-list) is associated with the object
- for [inputs](input_overview.md) and [list box columns](listbox_overview.md#list-box-columns), a [required list](properties_RangeOfValues.md#required-list) is also defined for the object (both options should use usually the same list), so that only values from the list can be entered by the user.

This property specifies, in the context of a field or variable associated with a list of values, the type of contents to save:

- **Save as Value** (default option): the value of the item chosen in the list by the user is saved directly. For example, if the user chooses the value "Blue", then this value is saved in the field.
- **Save as Reference**: the reference of the choice list item is saved in the object. This reference is the numeric value associated with each item either through the *itemRef* parameter of the [`APPEND TO LIST`](https://doc.4d.com/4dv19/help/command/en/page376.html) or [`SET LIST ITEM`](https://doc.4d.com/4dv19/help/command/en/page385.html) commands, or in the list editor.

This option lets you optimize memory usage: storing numeric values in fields uses less space than storing strings. It also makes it easier to translate applications: you just create multiple lists in different languages but with the same item references, then load the list based on the language of the application.

Using this property requires compliance with the following principles:

- To be able to store the reference, the field or variable data source must be of the Number type (regardless of the type of value displayed in the list). The [expression](properties_Object.md#expression-type) property is automatically set.
- Valid and unique references must be associated with list items.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|saveAs| string|"value", "reference"|

#### Objects Supported

[Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Selected Items

`Collection or entity selection list boxes`

Specifies a variable or expression that will be assigned the elements or entities selected by the user.

- for a collection list box, you must use a collection variable or an assignable expression that accepts collections,
- for an entity selection list box, an entity selection object is built. You must use an object variable or an assignable expression that accepts objects.

>This property is "read-only", it is automatically updated according to user actions in the list box. You cannot edit its value to modify the list box selection status.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|selectedItemsSource| string|Assignable collection or object expression |

#### Objects Supported

[List Box](listbox_overview.md#overview)

---

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

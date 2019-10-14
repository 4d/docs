---
id: propertiesSubform
title: Subform 
---


## Allow Deletion

Specifies if the user can delete subrecords in a list subform.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|deletableInList|boolean|True/False (default: True)|

#### Objects Supported

[Subform](subform_overview.md#overview)



## Detail Form

You use this property to declare the detail form to use in the subform. It can be:

- a widget, i.e. a page-type subform endowed with specific functions. In this case, the [list subform](#list-form) and [Source](#source) properties must be empty or not present.   
You can select a component form name when it is published in the component.

>You can generate [components](Concepts/components.md) providing additional functionalities through subforms. 

- the detail form to associate a with the [list subform](#list-form). The detail form can be used to enter or view subrecords. It generally contains more information than the list subform. Naturally, the detail form must belong to the same table as the subform. You normally use an Output form as the list form and an Input form as the detail form. If you do not specify the form to use for full page entry, 4D automatically uses the default Input format of the table.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|detailForm|string|Name (string) of table or project form, a POSIX path (string) to a .json file describing the form, or an object describing the form |

#### Objects Supported

[Subform](subform_overview.md#overview)


## Double click on empty row

Action to perform in case of a double-click on an empty line of a list subform. The following options are available:
- Do nothing: Ignores double-click.
- Add Record: Creates a new record in the subform and changes to editing mode. The record will be created directly in the list if the [Enterable in List] property is enabled. Otherwise, it will be created in page mode, in the [detail form](detail-form) associated with the subform.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|doubleClickInEmptyAreaAction|string|"addSubrecord" or "" to do nothing|

#### Objects Supported

[Subform](subform_overview.md#overview)

#### See also
[Double click on row](properties_Listbox.md#double-click-on-row)



## Enterable in list

When a list subform has this property enabled, the user can modify record data directly in the list, without having to use the [associated detail form](#detail-form). 

> To do this, simply click twice on the field to be modified in order to switch it to editing mode (make sure to leave enough time between the two clicks so as not to generate a double-click).


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|enterableInList|boolean|true / false|


#### Objects Supported

[Subform](subform_overview.md#overview)




## List Form

You use this property to declare the list form to use in the subform.  A list subform lets you enter, view, and modify data in other tables. 

List subforms can be used for data entry in two ways: the user can enter data directly in the subform, or enter it in an [input form](#detail-form). In this configuration, the form used as the subform is referred to as the List form. The input form is referred to as the Detail form. 

You can also allow the user to enter data in the List form.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|listForm|string|Name (string) of table or project form, a POSIX path (string) to a .json file describing the form, or an object describing the form |

#### Objects Supported

[Subform](subform_overview.md#overview)




## Source

Specifies the table that the list subform belongs to (if any).

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|table|string|4D table name, or "" if no table.|

#### Objects Supported 

[Subform](subform_overview.md#overview)


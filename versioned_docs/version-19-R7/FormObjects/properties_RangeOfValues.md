---
id: propertiesRangeOfValues
title: Range of Values
---

## Default value

You can assign a default value to be entered in an input object. This property is useful for example when the input [data source](properties_Object.md#variable-or-expression) is a field: the default value is entered when a new record is first displayed. You can change the value unless the input area has been defined as [non-enterable](properties_Entry.md#enterable).

The default value can only be used if the [data source type](properties_Object.md#expression-type) is:

- text/string
- number/integer
- date
- time
- boolean

4D provides stamps for generating default values for the date, time, and sequence number. The date and time are taken from the system date and time. 4D automatically generates any sequence numbers needed. The table below shows the stamp to use to generate default values automatically:

|Stamp| Meaning|
|---|---|
|#D|Current date|
|#H|Current time|
|#N|Sequence number|

You can use a sequence number to create a unique number for each record in the table for the current data file. A sequence number is a longint that is generated for each new record. The numbers start at one (1) and increase incrementally by one (1). A sequence number is never repeated even if the record it is assigned to is deleted from the table. Each table has its own internal counter of sequence numbers. For more information, refer to the [Autoincrement](https://doc.4d.com/4Dv17R6/4D/17-R6/Field-properties.300-4354738.en.html#976029) paragraph.

> Do not make confusion between this property and the "[default values](properties_DataSource.md#default-list-of-values)" property that allows to fill a list box column with static values.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|defaultValue |string, number, date, time, boolean|Any value and/or a stamp: "#D", "#H", "#N"|

#### Objects Supported

[Input](input_overview.md)

---

## Excluded List

Allows setting a list whose values cannot be entered in the object. If an excluded value is entered, it is not accepted and an error message is displayed.

>If a specified list is hierarchical, only the items of the first level are taken into account.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|excludedList|list |A list of values to be excluded.|

#### Objects Supported

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)

---

## Required List

Restricts the valid entries to the items on the list. For example, you may want to use a required list for job titles so that valid entries are limited to titles that have been approved by management.

Making a list required does not automatically display the list when the field is selected. If you want to display the required list, assign the same list to the [Choice List](properties_DataSource.md#choice-list) property.
However, unlike the [Choice List](properties_DataSource.md#choice-list) property, when a required list is defined, keyboard entry is no longer possible, only the selection of a list value using the pop-up menu is allowed. If different lists are defined using the [Choice List](properties_DataSource.md#choice-list) and Required List properties, the Required List property has priority.

>If a specified list is hierarchical, only the items of the first level are taken into account.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|requiredList|list |A list of mandatory values.|

#### Objects Supported

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)

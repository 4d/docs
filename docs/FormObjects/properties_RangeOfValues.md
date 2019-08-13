---
id: propertiesRangeOfValues
title: Range of Values
---

## Excluded List

Allows setting a list whose values cannot be entered in the column. If an excluded value is entered, it is not accepted and an error message is displayed.

>If a specified list is hierarchical, only the items of the first level are taken into account.

#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|excludedList|list |A list of values to be excluded.|

#### Objects Supported

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)





## Required List

Restricts the valid entries to the items on the list. For example, you may want to use a required list for job titles so that valid entries are limited to titles that have been approved by management.

Making a list required does not automatically display the list when the field is selected. If you want to display the required list, assign the same list with the [Choice List](properties_DataSource.md#choice-list) drop-down list. However, unlike the [Choice List](properties_DataSource.md#choice-list) property, when a required list is defined, keyboard entry is no longer possible, only the selection of a list value using the pop-up menu is allowed. If different lists are defined using the [Choice List](properties_DataSource.md#choice-list) and Required List properties, the Required List property has priority.

>If a specified list is hierarchical, only the items of the first level are taken into account.

#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|requiredList|list |A list of mandatory values.|

#### Objects Supported

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)






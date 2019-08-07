---
id: propertiesListBox
title: List Box
---

## Number of Columns

Sets the number of columns. 

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
| columnCount|integer |minimum: 1

#### Objects Supported

[List Box](listbox_overview.md#overview)





## Number of Locked Columns

Number of columns that must stay permanently displayed in the left part of the list box, even when the user scrolls through the columns horizontally.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|lockedColumnCount |integer |minimum: 0|

#### Objects Supported

[List Box](listbox_overview.md#overview)





## Number of Static Columns

Number of columns that cannot be moved during execution.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|staticColumnCount | integer|minimum: 0|

#### Objects Supported

[List Box](listbox_overview.md#overview)





## Row Control Array



#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
| | ||

#### Objects Supported

[List Box](listbox_overview.md#overview)




## Selection Mode

Designates the options for allowing users to select records.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
| selectionMode|string |"multiple", "single", "none"|

#### Objects Supported

[List Box](listbox_overview.md#overview)
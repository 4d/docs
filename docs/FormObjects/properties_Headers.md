---
id: propertiesHeaders
title: Headers
---

## Display Headers

Used to display or hide column headers.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|showHeaders|boolean |"true", "false"|

#### Objects Supported

[List Box](listbox_overview.md#overview)





## Height

Used to set the row height for a list box header. You can set the unit (lines or pixels) for the height value.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|headerHeight|string |pattern ^(\\d+)(px&#124;em)?$ (positive decimal + px/em )|

#### Objects Supported

[List Box](listbox_overview.md#overview)
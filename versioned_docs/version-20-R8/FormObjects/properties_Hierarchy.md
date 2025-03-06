---
id: propertiesHierarchy
title: Hierarchy
---

## Hierarchical List Box

`Array type list boxes`

This property specifies that the list box must be displayed in hierarchical form. In the JSON form, this feature is triggered [when the *dataSource* property value is an array](properties_Object.md#array-list-box), i.e. a collection.

Additional options (**Variable 1...10**) are available when the *Hierarchical List Box* option is selected, corresponding to each *dataSource* array to use as break column. Each time a value is entered in a field, a new row is added. Up to 10 variables can be specified. These variables set the hierarchical levels to be displayed in the first column.

See [Hierarchical list boxes](listbox_overview.md#hierarchical-list-boxes)

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|datasource|string array |Collection of array names defining the hierarchy|

#### Objects Supported

[List Box](listbox_overview.md)

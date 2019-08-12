---
id: propertiesHierarchy
title: Hierarchy
---

## Hierarchical List Box

Used to specify that the list box must be displayed in hierarchical form.

Additional options (Variable 1 ... 10) are available when the *Hierarchical List Box* option is selected. Each time a value is entered in a field, a new row is added. Up to 10 variables can be specified. These variables set the hierarchical levels to be displayed in the first column.

The first variable always corresponds to the name of the variable for the first column of the list box (the two values are automatically bound). This first variable is always visible and enterable. For example: country.
 
The second variable is also always visible and enterable; it specifies the second hierarchical level. For example: regions.
 
Beginning with the third field, each variable depends on the one preceding it. For example: counties, cities, and so on. A maximum of ten hierarchical levels can be specified.
 
If you remove a value, the whole hierarchy moves up a level.
 
The last variable is never hierarchical even if several identical values exists at this level. For example, referring to the configuration illustrated above, imagine that arr1 contains the values A A A B B B, arr2 has the values 1 1 1 2 2 2 and arr3 the values X X Y Y Y Z. In this case, A, B, 1 and 2 could appear in collapsed form, but not X and Y:

![](assets/en/FormObjects/property_hierarchicalListBox.png)

This principle is not applied when only one variable is specified in the hierarchy: in this case, identical values may be grouped. 
 
>If you specify a hierarchy based on the first columns of an existing list box, you must then remove or hide these columns (except for the first), otherwise they will appear in duplicate in the list box. If you specify the hierarchy via the pop-up menu of the editor (see [Hierarchical list boxes](https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-list-boxes.300-4354816.en.html)), the unnecessary columns are automatically removed from the list box.



#### JSON Grammar

A 4D variable, field name, or an arbitrary complex language expression to specify the source of the data.


|Name|Data Type|Possible Values|
|---|---|---|
|datasource|string, or string array for hierarchical list box column | A 4D variable, field name, or an arbitrary complex language expression.|

#### Objects Supported

[List Box](listbox_overview.md#overview)

---
id: onColumnMoved
title: On Column Moved
---

|Code|Can be called by|Definition|  
|---|---|---|
|32|[List Box](../FormObjects/listbox_overview.md) - [List Box Column](../FormObjects/listbox_overview.md#list-box-columns)| A list box column is moved by the user via drag and drop|


## Description

This event is generated when a column of the list box is moved by the user using drag and drop ([if allowed](../FormObjects/properties_ListBox.md#locked-columns-and-static-columns)). It is not generated if the column is dragged and then dropped in its initial location. 

The `LISTBOX MOVED COLUMN NUMBER` command returns the new position of the column. 
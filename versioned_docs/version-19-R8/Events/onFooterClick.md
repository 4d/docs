---
id: onFooterClick
title: On Footer Click
---

|Code|Can be called by|Definition|  
|---|---|---|
|57|[List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns)|A click occurs in the footer of a list box column|


## Description

This event is available for a list box or list box column object. It is generated when a click occurs in the footer of a list box column. In this context, the `OBJECT Get pointer` command returns a pointer to the variable of the footer that is clicked. The event is generated for both left and right clicks.

You can test the number of clicks made by the user by means of the `Clickcount` command.

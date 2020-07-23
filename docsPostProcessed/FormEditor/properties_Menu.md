---
id: menu
title: Menu
---


## Associated Menu Bar 

When a menu bar is associated to a form, it is added to the right of the current menu bar when the form is displayed in Application environment.

The selection of a menu command causes an `On Menu Selected` event to be sent to the form method; you can then use the `Menu selected` command to test the selected menu. 

> If the menu bar of the form is identical to the current menu bar, it is not added. 

The form menu bar will operate for both input and output forms.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|menuBar|string|Name of a menu bar|


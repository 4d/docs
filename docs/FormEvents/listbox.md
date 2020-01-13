---
id: listbox
title: List Box 
---

[List box](../FormObjects/listboxOverview.html) events can be handled by either the list box object or the list box column object. No matter the object handling the event, every event returns an object which includes the following main properties:


|Property|	Type|	Description|
|---|---|---|
|objectName	|text|	Name of the object triggering the event - Not included if the event is triggered by the form|
|code	|longint	|Numeric value of the form event. See *Form event code*|
|description	|text	|Name of the form event (*e.g.*, "On After Edit").|


>If an event occurs on a "fake" column, an empty string is typically returned.

Depending on the event and where it occurred in the list box, additional properties may be returned. These additional properties are:

|Property|	Type|	Description|
|---|---|---|
|area|text|Sheet area ("header", "footer", "cell")|
|areaName|text|Name of the area|
|column|longint|Column number|
|columnName|text|Name of the column|
|direction|text|Direction of the scroll ("horizontal", "vertical")|
|footerName|text|Name of the footer|
|headerName|text|Name of the header|
|isRowSelected|boolean|True if row is selected, else False|
|newPosition|longint|New position of the column or row|
|newSize|longint|New size of the column or row|
|oldPosition|longint|Previous position of the column or row|
|oldSize|longint|Previous size of the column or row|
|row|longint|Row number|


The following table provides information about the events handled by [list box](../FormObjects/listboxOverview.html#list-box-objects) and list box column objects, the type(s) of list boxes excluded from an event, as well as additional properties returned (if any). 


|Form Event  |Form Event Code|Excluded List Box Types|Applies to Column Objects?|Additional Properties /Comments|
|---|---|---|---|---|
|On After Edit|45||Yes|<li>column</li><li>columnName</li><li>row</li>|
|On After Keystroke|28||Yes|<li>column</li><li>columnName</li><li>row</li>|
|On After Sort|30||Yes|<li>column</li><li>columnName</li><li>row</li><p><p>*Compound formulas cannot be sorted. (e.g., This.firstName + This.lastName)*|
|On Alternative Click|38|Collection or entity selection, <p><p>Current Selection,<p>Named Selection|Yes|<li>column</li><li>columnName</li><li>row</li>|
|On Before Data Entry|41||Yes|<li>column</li><li>columnName</li><li>row</li>|
|On Before Keystroke|17||Yes|<li>column</li><li>columnName</li><li>row</li>|
|On Begin Drag Over|46||Yes|<li>column</li><li>columnName</li><li>row</li>|
|On Clicked|4||Yes|<li>column</li><li>columnName</li><li>row</li>|
|On Close Detail|26|Collection or entity selection,<p><p> Arrays|No|<li>row</li>|
|On Collapse<p><p>*Hierarchical list box only*|44||No|<li>column</li><li>columnName</li><li>row</li>|
|On Column Moved|32||Yes|<li>columnName</li><li>newPosition</li><li>oldPosition</li>|
|On Column Resize|33||Yes|<li>column</li><li>columnName</li><li>newSize</li><li>oldSize</li>|
|On Data Change|20||Yes|<li>column</li><li>columnName</li><li>row</li>|
|On Delete Action|58||No|<li>row</li>|
|On Display Detail|8||No|<li>isRowSelected</li><li>row</li>|
|On Double Clicked|13||Yes|<li>column</li><li>columnName</li><li>row</li>|
|On Drag Over|21||Yes|<li>area</li><li>areaName</li><li>column</li><li>columnName</li><li>row</li>|
|On Drop|16||Yes|<li>column</li><li>columnName</li><li>row</li>|
|On Expand<p><p>*Hierarchical list box only*|43||No|<li>column</li><li>columnName</li><li>row</li>|
|On Footer Click|57|Collection or entity selection|Yes|<li>column</li><li>columnName</li><li>footerName</li>|
|On Getting Focus|15||Yes|<li>column</li><li>columnName</li><li>row</li><p><p>*Additional properties returned only when editing a cell*|
|On Header Click|42||Yes|<li>column</li><li>columnName</li><li>headerName</li>|
|On Load|1||Yes||
|On Losing Focus|14||Yes|<li>column</li><li>columnName</li><li>row</li><p><p>*Additional properties returned only when editing a cell has been completed*|
|On Mouse Enter|35||No|<li>area</li><li>areaName</li><li>column</li><li>columnName</li><li>row</li>|
|On Mouse Leave|36||No||
|On Mouse Move|37||No|<li>area</li><li>areaName</li><li>column</li><li>columnName</li><li>row</li>|
|On Open Detail|25|Collection or entity selection, <p><p>Arrays|No|<li>row</li>|
|On Row Moved|34||Yes|<li>newPosition</li><li>oldPosition</li>|
|On Selection Change|31||No||
|On Scroll|59||No|<li>direction</li>|
|On Unload|24||Yes||
|On Validate|3||||





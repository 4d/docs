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


>Note: if an event occurs on a "fake" column, an empty string is typically returned.


Generally, form events can be handled by any type of [list box](../FormObjects/listboxOverview.html#list-box-objects). The following table provides information about the events handled by list box and list box column objects, exceptions to the general behavior, as well as additional information (if any).


|Form Event  |Form Event Code|Excluded List Box Types|Apply to Columns?|Additional Properties|Comments|
|---|---|---|---|---|---|
|**On Activate**|11|n/a||||
|On After Edit|45||Yes|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3||
|On After Keystroke|28||Yes|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3||
|On After Sort|30||Yes|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3|Compound formulas cannot be sorted. <p><p>Example:<br> This.firstName + This.lastName|
|On Alternative Click|38|Collection or entity selection, <p><p>Current Selection,<p>Named Selection|Yes|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3||
|On Before Data Entry|41||Yes|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3||
|On Before Keystroke|17||Yes|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3||
|On Begin Drag Over|46||Yes|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3||
|**On Begin URL Loading**|47|n/a||||
|**On bound variable change**|54|n/a||||
|On Clicked|4||Yes|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3||
|**On Close Box** |22|n/a||||
|On Close Detail|26|Collection or entity selection,<p><p> Arrays|No|*row*<br>The row number <br>Value=1||
|On Collapse|44||No|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3|Hierarchical list box only|
|On Column Moved|32||Yes|*oldPosition*<br>The previous position of moved column<br>Value=1<p><p>*newPosition*<br>New position of moved column<br>Value=2<p>*columnName*<br>Name of column<br>Value=3||
|On Column Resize|33||Yes|*column*<br>The column number<br>Value=1<p><p>*columnName*<br>The name of column<br>Value=2<p>*oldSize*<br>The previous size of column<br>Value=3<p>*newSize*<br>The new size of column<br>Value=4||
|On Data Change|**20**||Yes|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3|**Not in the Form event code page's table** |
|**On Deactivate**|12|n/a||||
|On Delete Action|58||No|*row*<br>The row number<br>Value=1||
|On Display Detail|8||No|*row*<br>The row number<br>Value=1<p><p>*isRowSelected*<br>True if row is selected ("true" or"false")<br>Value=2||
|On Double Clicked|13||Yes|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3|
|On Drag Over|21||Yes|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3<p>*area*<br>Where the event occurred ("header", "footer", or "cell")<br>Value=4<p>*areaName*<br>The name of the list box area<br>Value=5||
|On Drop|16||Yes|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3||
|**On End URL Loading**|49|n/a||||
|On Expand|43||No|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3|Hierarchical list box only|
|On Footer Click|57|Collection or entity selection|Yes|*column*<br>The column number <br>Value=1<p><p>*columnName*<br>Name of column <br>Value=2<p>*footerName*<br>The name of footer<br>Value=3||
|On Getting Focus|15||Yes|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3|Additional properties returned only when editing a cell|
|**On Header** |5|n/a||||
|On Header Click|42||Yes|*column*<br>The column number <br>Value=1<p><p>*columnName*<br>Name of column <br>Value=2<p>*headerName*<br>The name of header<br>Value=3||
|On Load|1||Yes|||
|**On Load Record** |40|n/a||||
|**On Long Click** |39|n/a||||
|On Losing Focus|14||Yes|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3|Additional properties returned only when editing a cell has been completed|
|**On Menu Selected** |18|n/a||||
|On Mouse Enter|35||No|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3<p>*area*<br>The area of the event ("header", "footer", or "cell")<br>Value=4<p>*areaName*<br>The name of area<br>Value=5||
|On Mouse Leave|36||No|||
|On Mouse Move|37||No|*row*<br>The row number <br>Value=1<p><p>*column*<br>The column number <br>Value=2<p>*columnName*<br>Name of column <br>Value=3<p>*area*<br>The area of the event ("header", "footer", or "cell")<br>Value=4<p>*areaName*<br>The name of area<br>Value=5||
|**On Mouse Up**|2|n/a||||
|On Open Detail|25|Collection or entity selection, <p><p>Arrays|No|*row*<br>The row number <br>Value=1||
|**On Open External Link**|52|n/a||||
|**On Outside Call**|10|n/a||||
|**On Page Change**|56|n/a||||
|**On Plug in Area** |19|n/a||||
|**On Printing Break**|6|n/a||||
|**On Printing Detail** |23|n/a||||
|**On Printing Footer**|7|n/a||||
|**On Resize** |29|n/a||||
|On Row Moved|34||Yes|*oldPosition*<br>The previous position of moved row<br>Value=1<p><p>*newPosition*<br>The new position of moved row<br>Value=2||
|**On Row Resize**|60|n/a||||
|On Selection Change|31||No|||
|On Scroll|59||No|*direction*<br>The scroll direction ("horizontal" or "vertical")<br>Value=1||
|**On Timer** |27|n/a||||
|On Unload|24||Yes|||
|**On URL Filtering**|51|n/a||||
|**On URL Loading Error**|50|n/a||||
|**On URL Resource Loading**|48|n/a||||
|On Validate|3|||||
|**On VP Ready**|9|n/a||||
|**On Window Opening Denied**|53|n/a||||





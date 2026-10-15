---
id: wa-get-external-links-filters
title: WA GET EXTERNAL LINKS FILTERS
slug: /commands/wa-get-external-links-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Syntax-->**WA GET EXTERNAL LINKS FILTERS** ( * ; *object* : Text ; *filtersArr* : Text array ; *allowDenyArr* : Boolean array )<br/>**WA GET EXTERNAL LINKS FILTERS** ( *object* : Variable, Field ; *filtersArr* : Text array ; *allowDenyArr* : Boolean array )<!-- END REF-->
<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| filtersArr | Text array | &#8592; | Filters array |
| allowDenyArr | Boolean array | &#8592; | Allow-deny array |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL Release 2|Created|

</details>
</div>

## Description 

<!--REF #_command_.WA GET EXTERNAL LINKS FILTERS.Summary-->The **WA GET EXTERNAL LINKS FILTERS** command returns, in the *filtersArr* and *allowDenyArr* arrays, the external link filters of the Web area designated by the *\** and *object* parameters.<!-- END REF--> If no filter is active, the arrays are returned empty. 

The filters are installed by the [WA SET EXTERNAL LINKS FILTERS](../commands/wa-set-external-links-filters) command. If the arrays are reinitialized during the session, the **WA GET EXTERNAL LINKS FILTERS** command can be used to find out the current settings.

## See also 

[WA GET URL FILTERS](../commands/wa-get-url-filters)  
[WA SET EXTERNAL LINKS FILTERS](../commands/wa-set-external-links-filters)  

## Properties

|  |  |
| --- | --- |
| Command number | 1033 |
| Thread safe | no |



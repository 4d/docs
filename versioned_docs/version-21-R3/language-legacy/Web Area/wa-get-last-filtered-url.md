---
id: wa-get-last-filtered-url
title: WA Get last filtered URL
slug: /commands/wa-get-last-filtered-url
displayed_sidebar: docs
---

<!--REF #_command_.WA Get last filtered URL.Syntax-->**WA Get last filtered URL** ( * ; *object* : Text ) : Text<br/>**WA Get last filtered URL** ( *object* : Variable, Field ) : Text<!-- END REF-->
<!--REF #_command_.WA Get last filtered URL.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Text | &#8592; | Last filtered URL |
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

<!--REF #_command_.WA Get last filtered URL.Summary-->The **WA Get last filtered URL** command returns the last URL that was filtered in the Web area designated by the *\** and *object* parameters.<!-- END REF-->

The URL may have been filtered for one of the following reasons:

* The URL was denied because of a filter ([WA SET URL FILTERS](../commands/wa-set-url-filters) command),
* The link is open in the default browser ([WA SET EXTERNAL LINKS FILTERS](../commands/wa-set-external-links-filters) command),
* The URL attempts to open a pop-up window.

It is advisable to call this command in the context of the On URL Filtering, On Open External Link and On Window Opening Denied form events in order to find out the URL that was filtered.

## See also 

[WA GET EXTERNAL LINKS FILTERS](../commands/wa-get-external-links-filters)  
[WA GET URL FILTERS](../commands/wa-get-url-filters)  
[WA SET EXTERNAL LINKS FILTERS](../commands/wa-set-external-links-filters)  
[WA SET URL FILTERS](../commands/wa-set-url-filters)  

## Properties

|  |  |
| --- | --- |
| Command number | 1035 |
| Thread safe | no |



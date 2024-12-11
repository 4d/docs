---
id: wa-get-last-filtered-url
title: WA Get last filtered URL
slug: /commands/wa-get-last-filtered-url
displayed_sidebar: docs
---

<!--REF #_command_.WA Get last filtered URL.Syntax-->**WA Get last filtered URL** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.WA Get last filtered URL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| Function result | Text | &#8592; | Last filtered URL |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Get last filtered URL.Summary-->The **WA Get last filtered URL** command returns the last URL that was filtered in the Web area designated by the *\** and *object* parameters.<!-- END REF-->

The URL may have been filtered for one of the following reasons:

* The URL was denied because of a filter ([WA SET URL FILTERS](wa-set-url-filters.md) command),
* The link is open in the default browser ([WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md) command),
* The URL attempts to open a pop-up window.

It is advisable to call this command in the context of the On URL Filtering, On Open External Link and On Window Opening Denied form events in order to find out the URL that was filtered.

#### See also 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1035 |
| Thread safe | &check; |
| Forbidden on the server ||



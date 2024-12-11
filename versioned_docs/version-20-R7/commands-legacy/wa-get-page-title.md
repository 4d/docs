---
id: wa-get-page-title
title: WA Get page title
slug: /commands/wa-get-page-title
displayed_sidebar: docs
---

<!--REF #_command_.WA Get page title.Syntax-->**WA Get page title** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.WA Get page title.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| Function result | Text | &#8592; | Title of current page |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Get page title.Summary-->The WA Get page title command returns the title of the current page or the page being displayed in the Web area designated by the *\** and *object* parameters.<!-- END REF--> The title corresponds to the HTML "Title" tag.

This command returns an empty string if there is no title available for the current URL. 

#### See also 

[WA Get page content](wa-get-page-content.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1036 |
| Thread safe | &check; |
| Forbidden on the server ||



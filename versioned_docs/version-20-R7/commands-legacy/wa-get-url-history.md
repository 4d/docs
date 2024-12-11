---
id: wa-get-url-history
title: WA GET URL HISTORY
slug: /commands/wa-get-url-history
displayed_sidebar: docs
---

<!--REF #_command_.WA GET URL HISTORY.Syntax-->**WA GET URL HISTORY** ( {* ;} *object* ; *urlsArr* {; *direction* {; *titlesArr*}} )<!-- END REF-->
<!--REF #_command_.WA GET URL HISTORY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| urlsArr | Text array | &#8592; | Array of URLs visited |
| direction | Integer | &#8594;  | 0 or omitted=List of previous URLs, 1=List of next URLs |
| titlesArr | Text array | &#8592; | Array of window titles |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA GET URL HISTORY.Summary-->The WA GET URL HISTORY command returns one or two arrays containing the URLs visited during the session in the Web area designated by the *\** and *object* parameters.<!-- END REF--> It can be used to build a custom navigation interface.

The information provided concerns the session; in other words, the navigation carried out in the same Web area as long as the form has not been closed.

The *urlsArr* array is filled with the list of URLs visited. Depending on the value of the *direction* parameter (if it is passed), the array recovers the list of previous URLs (default operation), or the list of next URLs. These lists correspond to the content of the standard Back and Forward buttons of browsers.

The URLs are classed by chronological order.

Pass a value indicating the list to recover in *direction*. You can use one of the following constants, found in the *Web Area* theme:

| Constant         | Type    | Value |
| ---------------- | ------- | ----- |
| WA next URLs     | Integer | 1     |
| WA previous URLs | Integer | 0     |

If you omit the *direction* parameter, the value 0 is used.

If it is passed, the *titlesArr* parameter contains the list of window names associated with the URLs. This array is synchronized with the *urlsArr* array.

**Compatibility Note:* As of 4D v19 R5, this command only returns the current URL in urlsArr and titlesArr arrays for web areas using the Windows system rendering engine.* 

#### See also 

[WA Create URL history menu](wa-create-url-history-menu.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1048 |
| Thread safe | &check; |
| Forbidden on the server ||



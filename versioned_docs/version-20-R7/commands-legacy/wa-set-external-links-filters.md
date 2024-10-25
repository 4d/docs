---
id: wa-set-external-links-filters
title: WA SET EXTERNAL LINKS FILTERS
slug: /commands/wa-set-external-links-filters
displayed_sidebar: docs
---

<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Syntax-->**WA SET EXTERNAL LINKS FILTERS** ( {* ;} *object* ; *filtersArr* ; *allowDenyArr* )<!-- END REF-->
<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| filtersArr | Text array | &#8594;  | Filters array |
| allowDenyArr | Boolean array | &#8594;  | Allow-deny array |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WA SET EXTERNAL LINKS FILTERS.Summary-->The **WA SET EXTERNAL LINKS FILTERS** command sets up one or more external link filters for the Web area designated by the *\** and *object* parameters.<!-- END REF--> External link filters determine whether a URL associated with the current page via a link must be opened in the Web area or in the default Web browser of the machine.

When the user clicks on a link in the current page, 4D consults the list of external link filters in order to check whether the URL requested must be opened in the browser of the machine. If so, the page corresponding to the URL is displayed in the Web browser and the On Open External Link form event is generated. Otherwise (default operation), the page corresponding to the URL is displayed in the Web area. The evaluation of the URL is based on the contents of the *filtersArr* and *allowDenyArr* arrays. 

The *filtersArr* and *allowDenyArr* arrays must be synchronized. 

* Each element of the *filtersArr* array must contain a URL to be filtered. You can use the *\** as a wildcard to replace one or more characters.
* Each corresponding element in the *allowDenyArr* array must contain a Boolean indicating whether the URL must be opened in the Web area ([True](true.md "True")) or in the Web browser ([False](false.md "False")).

If there is a contradiction at the configuration level (the same URL is both allowed and denied), the last setting is the one taken into account. 

To disable URL filtering, call the command and pass empty arrays or pass, respectively, the values "*\**" and [True](true.md "True") in the last elements of the *filtersArr* and *allowDenyArr* arrays.

**Important:** The filtering established by the [WA SET URL FILTERS](wa-set-url-filters.md) command is taken into account before that of the **WA SET EXTERNAL LINKS FILTERS** command. This means that if a URL is denied because of a [WA SET URL FILTERS](wa-set-url-filters.md) command filter, it cannot be opened in the browser even if it is explicitly specified by the **WA SET EXTERNAL LINKS FILTERS** command (see example 2).

#### Example 1 

This example causes sites to be opened in external browsers:

```4d
 ARRAY STRING(0;$filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 
 APPEND TO ARRAY($filters;"*www.google.*") //Select "google"
 APPEND TO ARRAY($AllowDeny;False)
  //False: this link will be opened in an external browser
 APPEND TO ARRAY($filters;"*www.apple.*")
 APPEND TO ARRAY($AllowDeny;False)
  //False: this link will be opened in an external browser
 WA SET EXTERNAL LINKS FILTERS(MyWArea;$filters;$AllowDeny)
```

#### Example 2 

This example combines the filtering of both sites and external links:

```4d
 ARRAY STRING(0;$filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 APPEND TO ARRAY($filters;"*www.google.*") //Select "google"
 APPEND TO ARRAY($AllowDeny;False) //Deny this link
 WA SET URL FILTERS(MyWArea;$filters;$AllowDeny)
 
 ARRAY STRING(0;$filters;0)
 ARRAY BOOLEAN($AllowDeny;0)
 APPEND TO ARRAY($filters;"*www.google.*") //Select "google"
 APPEND TO ARRAY($AllowDeny;False)
  //False: this link should be opened in an external browser but this setting
  //has no effect because the link will be blocked by the URL filtering.
 WA SET EXTERNAL LINKS FILTERS(MyWArea;$filters;$AllowDeny)
```

#### See also 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  
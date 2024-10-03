---
id: wa-get-current-url
title: WA Get current URL
displayed_sidebar: docs
---

<!--REF #_command_.WA Get current URL.Syntax-->**WA Get current URL** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.WA Get current URL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string) If omitted, object is a variable |
| object | Form object | -> | Object name (if * is specified) or Variable (if * is omitted) |
| Function result | String | <- | URL currently loaded in the Web area |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Get current URL.Summary-->The WA Get current URL command returns the URL address of the page displayed in the Web area designated by the *\** and *object* parameters.<!-- END REF-->

If the current URL is not available, the command returns an empty string.

If the Web page is completely loaded, the value returned by the function is the same as that of the "URL" variable associated with the Web area. If the page is in the process of being loaded, the two values will be different: the function returns the completely loaded URL and the variable contains the URL in the process of being loaded.

#### Example 

The page displayed is the URL "www.apple.com" and the "www.4d.com" page is in the process of being loaded:

```4d
 $url:=WA Get current URL(MyWArea) //returns "http://www.apple.com"
  //The associated URL variable contains "http://www.4d.com"
```

#### See also 

[WA OPEN URL](wa-open-url.md)  
---
id: wa-set-page-content
title: WA SET PAGE CONTENT
slug: /commands/wa-set-page-content
displayed_sidebar: docs
---

<!--REF #_command_.WA SET PAGE CONTENT.Syntax-->**WA SET PAGE CONTENT** ( {* ;} *object* ; *content* ; *baseURL* )<!-- END REF-->
<!--REF #_command_.WA SET PAGE CONTENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| content | Text | &#8594;  | HTML source code |
| baseURL | Text | &#8594;  | URL for relative references (Mac OS) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Compatibility Note 

<!--REF #_command_.WA SET PAGE CONTENT.Summary-->This historical command is no longer really useful.<!-- END REF--> As security is tightened in modern browsers, there are more and more restrictions on modifying page content "on the fly". A more reliable approach is to create a local file (e.g. in the temporary folder) and use [WA OPEN URL](wa-open-url.md) to load it. To clear the content, just call **WA OPEN URL**(myArea;”about:blank”).

#### Description 

The WA SET PAGE CONTENT command replaces the page displayed in the Web area designated by the *\** and *object* parameters by the HTML code passed in the *content* parameter.

The *baseURL* parameter specifies, under Mac OS, a base URL that will be added in front of any relative links found in the page. 

Under Windows, this parameter has no effect and the base URL is not specified so it is not possible to use relative references on this platform. 

**Note:** Under Windows, you cannot call this command unless a page has already been loaded previously into the Web area. If necessary, you can pass the "about:blank" URL in order to load a blank page.

#### Example 

Displays "Hello world!" and sets a "file:///" base URL (Mac OS only):

```4d
 WA SET PAGE CONTENT(MyWArea;"

[Hello World!]

";"file:///")
```

#### See also 

[WA Get page content](wa-get-page-content.md)  
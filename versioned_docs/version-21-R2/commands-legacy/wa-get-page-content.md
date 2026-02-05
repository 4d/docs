---
id: wa-get-page-content
title: WA Get page content
slug: /commands/wa-get-page-content
displayed_sidebar: docs
---

<!--REF #_command_.WA Get page content.Syntax-->**WA Get page content** ( * ; *object* : Text ) : Text<br/>**WA Get page content** ( *object* : Variable, Field ) : Text<!-- END REF-->
<!--REF #_command_.WA Get page content.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
| Function result | Text | &#8592; | HTML source code |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.WA Get page content.Summary-->The WA Get page content command returns the HTML code of the current page or the page being displayed in the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

This command returns an empty string if the contents of the current page is not available.

## See also 

[WA SET PAGE CONTENT](wa-set-page-content.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 1038 |
| Thread safe | no |



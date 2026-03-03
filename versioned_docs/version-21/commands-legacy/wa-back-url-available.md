---
id: wa-back-url-available
title: WA Back URL available
slug: /commands/wa-back-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Back URL available.Syntax-->**WA Back URL available** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.WA Back URL available.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
| Function result | Boolean | &#8592; | True if there is a previous URL in the sequence of URLs opened;otherwise, False |
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

<!--REF #_command_.WA Back URL available.Summary-->The WA Back URL available command finds out whether there is a previous URL available in the sequence of URLs opened in the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

The command returns **True** if a URL exists and **False** otherwise. More particularly, this command can be used, in a custom interface, to enable or disable navigation buttons.

## See also 

[WA Forward URL available](wa-forward-url-available.md)  
[WA OPEN BACK URL](wa-open-back-url.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 1026 |
| Thread safe | no |



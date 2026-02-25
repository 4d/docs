---
id: wa-forward-url-available
title: WA Forward URL available
slug: /commands/wa-forward-url-available
displayed_sidebar: docs
---

<!--REF #_command_.WA Forward URL available.Syntax-->**WA Forward URL available** ( * ; *object* : Text ) : Boolean<br/>**WA Forward URL available** ( *object* : Variable, Field ) : Boolean<!-- END REF-->
<!--REF #_command_.WA Forward URL available.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Boolean | &#8592; | True if there is a following URL in the sequence of URLs opened;otherwise, False |
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

<!--REF #_command_.WA Forward URL available.Summary-->The WA Forward URL available command finds out whether there is a following URL available in the sequence of URLs opened in the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

The command returns **True** if a URL exists and **False** otherwise. More particularly, this command can be used, in a custom interface, to enable or disable navigation buttons.

## See also 

[WA Back URL available](../commands/wa-back-url-available)  
[WA OPEN FORWARD URL](../commands/wa-open-forward-url)  

## Properties

|  |  |
| --- | --- |
| Command number | 1027 |
| Thread safe | no |



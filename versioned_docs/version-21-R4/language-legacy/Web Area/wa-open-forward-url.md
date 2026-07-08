---
id: wa-open-forward-url
title: WA OPEN FORWARD URL
slug: /commands/wa-open-forward-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN FORWARD URL.Syntax-->**WA OPEN FORWARD URL** ( * ; *object* : Text )<br/>**WA OPEN FORWARD URL** ( *object* : Variable, Field )<!-- END REF-->
<!--REF #_command_.WA OPEN FORWARD URL.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
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

<!--REF #_command_.WA OPEN FORWARD URL.Summary-->The **WA OPEN FORWARD URL** command loads the next URL in the sequence of URLs opened into the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

If there is no next URL (in other words, if the user has never returned to a previous URL), the command does nothing. You can test whether a next URL is available using the [WA Forward URL available](../commands/wa-forward-url-available) command.

## See also 

[WA OPEN BACK URL](../commands/wa-open-back-url)  
[WA OPEN URL](../commands/wa-open-url)  

## Properties

|  |  |
| --- | --- |
| Command number | 1022 |
| Thread safe | no |



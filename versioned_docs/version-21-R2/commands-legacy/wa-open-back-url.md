---
id: wa-open-back-url
title: WA OPEN BACK URL
slug: /commands/wa-open-back-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN BACK URL.Syntax-->**WA OPEN BACK URL** ( * ; *object* : Text )<br/>**WA OPEN BACK URL** ( *object* : Variable, Field )<!-- END REF-->
<!--REF #_command_.WA OPEN BACK URL.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
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

<!--REF #_command_.WA OPEN BACK URL.Summary-->The **WA OPEN BACK URL** command loads the previous URL in the sequence of URLs opened into the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

If there is no previous URL, the command does nothing. You can test whether a previous URL is available using the [WA Back URL available](wa-back-url-available.md) command.

## See also 

[WA OPEN FORWARD URL](wa-open-forward-url.md)  
[WA OPEN URL](wa-open-url.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 1021 |
| Thread safe | no |



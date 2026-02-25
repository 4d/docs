---
id: wa-zoom-out
title: WA ZOOM OUT
slug: /commands/wa-zoom-out
displayed_sidebar: docs
---

<!--REF #_command_.WA ZOOM OUT.Syntax-->**WA ZOOM OUT** ( * ; *object* : Text )<br/>**WA ZOOM OUT** ( *object* : Variable, Field )<!-- END REF-->
<!--REF #_command_.WA ZOOM OUT.Params-->
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
|19 R5|Renamed|
|11 SQL Release 2|Created|

</details>
</div>

## Description 

<!--REF #_command_.WA ZOOM OUT.Summary-->The WA ZOOM OUT command reduces the size of the contents displayed in the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

Under macOS, the scope of this command is the 4D session: the configuration carried out by this command is not retained after the 4D application is closed.

Under Windows, the scope of this command is global: the configuration is retained after the 4D application is closed.

:::note Compatibility

This command does nothing on Windows with the [Web system rendering engine](../../FormObjects/webArea_overview.md#web-rendering-engine) when the [Fluent UI rendering theme](../../FormEditor/forms.md#fluent-ui-rendering) is used. 

:::

## See also 

[WA ZOOM IN](../commands/wa-zoom-in)  

## Properties

|  |  |
| --- | --- |
| Command number | 1040 |
| Thread safe | no |



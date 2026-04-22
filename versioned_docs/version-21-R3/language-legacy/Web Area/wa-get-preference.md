---
id: wa-get-preference
title: WA GET PREFERENCE
slug: /commands/wa-get-preference
displayed_sidebar: docs
---

<!--REF #_command_.WA GET PREFERENCE.Syntax-->**WA GET PREFERENCE** ( * ; *object* : Text ; *selector* : Integer ; *value* : Variable )<br/>**WA GET PREFERENCE** ( *object* : Variable, Field ; *selector* : Integer ; *value* : Variable )<!-- END REF-->
<!--REF #_command_.WA GET PREFERENCE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| selector | Integer | &#8594;  | Preference to get |
| value | Variable | &#8592; | Current value of the preference |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R5|Modified|
|19|Modified|
|14 R2|Modified|
|11 SQL Release 2|Created|

</details>
</div>

## Description 

<!--REF #_command_.WA GET PREFERENCE.Summary-->The WA GET PREFERENCE command gets the current value of the preference in the Web area designated by the *\** and *object* parameters.<!-- END REF--> 

Pass the preference whose value you want to get in the *selector* parameter. You can pass one of the following constants, found in the *Web Area* theme:

| Constant                  | Value | Comment                                                                                                                                 |
| ------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------- |
| WA enable contextual menu | 4     | Allow the display of a standard contextual menu in the Web area. Default (any engine) = False                                           |
| WA enable URL drop        | 101   | Change drop icon and call *On Window Opening Denied* event when URLs or files are dropped in the Web area. Default (any engine) = False |
| WA enable Web inspector   | 100   | Allow the display of the Web inspector in the area. Default (any engine) = False                                                        |

In the *value* parameter, pass a variable that will receive the current value of the preference. The *value* variable is always a Boolean: it contains **True** if the preference is active and **False** otherwise.


:::note Compatibility

Drag and drop is not supported with Web areas on Windows when the [Fluent UI rendering theme](../../FormEditor/forms.md#fluent-ui-rendering) is used. The `WA enable URL drop` selector value is always **False** in this context. 

:::


## See also 

[WA SET PREFERENCE](../commands/wa-set-preference)  

## Properties

|  |  |
| --- | --- |
| Command number | 1042 |
| Thread safe | no |



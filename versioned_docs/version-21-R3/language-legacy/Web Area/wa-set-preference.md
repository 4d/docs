---
id: wa-set-preference
title: WA SET PREFERENCE
slug: /commands/wa-set-preference
displayed_sidebar: docs
---

<!--REF #_command_.WA SET PREFERENCE.Syntax-->**WA SET PREFERENCE** ( * ; *object* : Text ; *selector* : Integer ; *value* : Boolean )<br/>**WA SET PREFERENCE** ( *object* : Variable, Field ; *selector* : Integer ; *value* : Boolean )<!-- END REF-->
<!--REF #_command_.WA SET PREFERENCE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| selector | Integer | &#8594;  | Preference to be modified |
| value | Boolean | &#8594;  | Value of the preference (True = allowed,  False = not allowed) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R5|Modified|
|19|Modified|
|14 R2|Modified|
|14|Modified|
|11 SQL Release 2|Created|

</details>
</div>

## Description 

<!--REF #_command_.WA SET PREFERENCE.Summary-->The WA SET PREFERENCE command sets different preferences for the Web area designated by the *\** and *object* parameters.<!-- END REF-->

Pass the preference to be modified in the *selector* parameter and the value to be assigned to it in the *value* parameter. In *selector*, you can pass one of the following constants, found in the *Web Area* theme:

| Constant                  | Value | Comment                                                                                                                                 |
| ------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------- |
| WA enable contextual menu | 4     | Allow the display of a standard contextual menu in the Web area. Default (any engine) = False                                           |
| WA enable URL drop        | 101   | Change drop icon and call *On Window Opening Denied* event when URLs or files are dropped in the Web area. Default (any engine) = False. |
| WA enable Web inspector   | 100   | Allow the display of the Web inspector in the area. Default (any engine) = False                                                        |

For each preference, pass **True** in *value* to activate it and **False** to deactivate it.


:::note Compatibility

Drag and drop is not supported with Web areas on Windows when the [Fluent UI rendering theme](../../FormEditor/forms.md#fluent-ui-rendering) is used. Passing **true** to the `WA enable URL drop` selector is ignored in this context. 

:::

## Example 

To enable URL drops in the 'myarea' Web area:

```4d
  //in the form method
 WA SET PREFERENCE(*;"myarea";WA enable URL drop;True)
```

```4d
  //in web area object method
 If(FORM Event.code=On Window Opening Denied)
    WA OPEN URL(*;"myarea";WA Get last filtered URL(*;"WebArea"))
 End if
```

## See also 

[WA GET PREFERENCE](../commands/wa-get-preference)  

## Properties

|  |  |
| --- | --- |
| Command number | 1041 |
| Thread safe | no |



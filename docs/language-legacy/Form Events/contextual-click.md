---
id: contextual-click
title: Contextual click
slug: /commands/contextual-click
displayed_sidebar: docs
---

<!--REF #_command_.Contextual click.Syntax-->**Contextual click**  : Boolean<!-- END REF-->
<!--REF #_command_.Contextual click.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True if a contextual click was detected, otherwise False |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6.8.1|Created|

</details>
</div>

## Description 

<!--REF #_command_.Contextual click.Summary-->The Contextual click command returns True if a contextual click has been made<!-- END REF-->:

* Under Windows and Mac OS, contextual clicks are made using the right button of the mouse.
* Under Mac OS, contextual clicks can also be made using a **Control+click** combination.

This command should be used only in the context of the On Clicked form event. It is therefore necessary to verify in Design mode that the event has been properly selected in the Form properties and/or in the specific object. 

## Example 

This method, combined with a scrollable area, enables you to change the value of an array element using a context menu: 

```4d
 If(Contextual click)
    If(Pop up menu("True;False")=1)
       myArray{myArray}:="True"
    Else
       myArray{myArray}:="False"
    End if
 End if
```

## See also 

[Form event code](../commands/form-event-code)  
[Right click](../commands/right-click)  

## Properties

|  |  |
| --- | --- |
| Command number | 713 |
| Thread safe | no |




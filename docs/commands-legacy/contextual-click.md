---
id: contextual-click
title: Contextual click
slug: /commands-legacy/contextual-click
displayed_sidebar: docs
---

<!--REF #_command_.Contextual click.Syntax-->**Contextual click**  -> Function result<!-- END REF-->
<!--REF #_command_.Contextual click.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#x1F850; | True if a contextual click was detected, otherwise False |

<!-- END REF-->

#### Description 



The Contextual click command returns True if a contextual click has been made:

* Under Windows and Mac OS, contextual clicks are made using the right button of the mouse.
* Under Mac OS, contextual clicks can also be made using a **Control+click** combination.

This command should be used only in the context of the On Clicked form event. It is therefore necessary to verify in Design mode that the event has been properly selected in the Form properties and/or in the specific object. 

#### Example 

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

#### See also 

[Form event code](form-event-code.md)  
[Right click](right-click.md)  
---
id: is-waiting-mouse-up
title: Is waiting mouse up
slug: /commands/is-waiting-mouse-up
displayed_sidebar: docs
---

<!--REF #_command_.Is waiting mouse up.Syntax-->**Is waiting mouse up**  : Boolean<!-- END REF-->
<!--REF #_command_.Is waiting mouse up.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True if the object is waiting for a mouse up event, False otherwise |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Is waiting mouse up.Summary-->The **Is waiting mouse up** command returns **True** if the current object has been clicked and the mouse button has not been released, while the parent window has the focus.<!-- END REF--> Otherwise, it returns **False**, in particular if the parent window has lost the focus before the mouse button was released. 

 The command must be called in the context of the current object. It is designed to be used in conjunction with the On Mouse Up form event which is available for picture fields and variables. It allows your code to handle the cases where the user clicked and started to move something within a form object picture, and this action is interrupted by an external event, such as an alert dialog box. In this case, the internal state of the object can be suspended indefinitely because it is waiting for a mouse up event which will never occur. To prevent this issue, you must protect your mouse moving code within a **Is waiting mouse up** command which makes you sure that it is executed in a valid context. 

#### Example 

The following code can be used to manage a mouse tracking feature in a picture object:

```4d
  //Object method of the picture object
 var vLtracking : Integer //flag for tracking mode
 Case of
    :(Form event code=On Clicked)
       If(Is waiting mouse up) //the mouse button is still not released
          vLtracking:=1 //we are in tracking mode
  //... Write here initialization code for the tracking feature
       End if
    :(Form event code=On Mouse Move)
       If(vLtracking=1) //we are in tracking mode
          If(Not(Is waiting mouse up)) //we'll never have the mouse up
             vLtracking:=0 //stop the tracking mode
  //... Write here the code for handling or canceling user tracking action
          Else //the object is still waiting for a mouse up
  //... Write here the code for the tracking
          End if
       End if
    :(Form event code=On Mouse Up) //the mouse button was released
  //... Write here the code to complete the tracking action
       vLtracking:=0 //end of the tracking mode
 End case
```

#### See also 

[Form event code](../commands/form-event-code.md)  
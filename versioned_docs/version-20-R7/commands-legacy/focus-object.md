---
id: focus-object
title: Focus object
slug: /commands/focus-object
displayed_sidebar: docs
---

<!--REF #_command_.Focus object.Syntax-->**Focus object**  : Pointer<!-- END REF-->
<!--REF #_command_.Focus object.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Pointer | &#8592; | Pointer to the object having the focus |

<!-- END REF-->

#### Compatibility Note 

<!--REF #_command_.Focus object.Summary-->This command is kept only for compatibility reasons.<!-- END REF--> Starting with version 12 of 4D, it is recommended to use the [OBJECT Get pointer](object-get-pointer.md) command.

#### Description 

**Focus object** returns a pointer to the object having the focus in the current form. If no object has the focus, the command returns [Is nil pointer](is-nil-pointer.md). You can use **Focus object** to perform an action on a form area without having to know which object is currently selected. Be sure to test that the object is the correct data type, using [Type](type.md), before performing an action on it. 

**Note:** When it is used with a list box, the **Focus object** function returns a pointer to the list box or the column of the list box depending on the context. For more information, please refer to the *Managing List Box Objects* section.

This command cannot be used with fields in subforms.

**Note:** This command is to be used only in a data entry context; otherwise it will return errors.

#### Example 

The following example is an object method for a button. The object method changes the data in the current object to uppercase. The object must be a text or string data type (type 0 or 24):

```4d
 $vp :=Focus object //Save the pointer to the last area
 Case of
    :(Nil($vp)) //No object has the focus
       ...
    :((Type($vp->)=Is alpha field)|(Type($vp->)=Is string var)) //If it is a string or text area
       $vp->:=Uppercase($vp->) //Change the area to uppercase
 End case
```

#### See also 

[OBJECT Get pointer](object-get-pointer.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 278 |
| Thread safe | &check; |
| Forbidden on the server ||



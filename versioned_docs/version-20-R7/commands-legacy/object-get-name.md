---
id: object-get-name
title: OBJECT Get name
slug: /commands/object-get-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get name.Syntax-->**OBJECT Get name** {( *selector* )} : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get name.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | Object category |
| Function result | Text | &#8592; | Name of object |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT Get name.Summary-->The **OBJECT Get name** command returns the name of a form object.<!-- END REF--> 

The command can be used to designate two types of objects according to the value of the *selector* parameter. In this parameter, you can pass one of the following constants (placed in the "*Form Objects (Access)*" theme:

* Object current or *selector* omitted: If you pass this selector or omit the *selector* parameter, the command returns the name of the object from which it was called (object method or submethod called by the object method). In this case, the command must be called in the context of a form object, otherwise it returns an empty string.
* Object with focus: If you pass this selector, the command returns the name of the object that has the focus in the form.

#### Example 

Object method for "bValidateForm" button:

```4d
 $btnName:=OBJECT Get name(Object current)
```

After the execution of this object method, the *$btnName* variable contains the "bValidateForm" value.

#### See also 

*Form Objects (Access)*  
[OBJECT Get pointer](object-get-pointer.md)  
*Objects (Forms)*  
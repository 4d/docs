---
id: object-get-name
title: OBJECT Get name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get name.Syntax-->**OBJECT Get name** {( *selector* )} -> Function result<!-- END REF-->
<!--REF #_command_.OBJECT Get name.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| selector | Longint | -> | Object category |
| Function result | Text | <- | Name of object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get name.Summary-->The **OBJECT Get name** command returns the name of a form object.<!-- END REF--> 

The command can be used to designate two types of objects according to the value of the *selector* parameter. In this parameter, you can pass one of the following constants (placed in the "[Form Objects (Access)](/4Dv20R6/4D/20-R6/Form-Objects-Access.302-6958495.en.html)" theme:

* Object current or *selector* omitted: If you pass this selector or omit the *selector* parameter, the command returns the name of the object from which it was called (object method or submethod called by the object method). In this case, the command must be called in the context of a form object, otherwise it returns an empty string.
* Object with focus: If you pass this selector, the command returns the name of the object that has the focus in the form.

#### Example 

Object method for "bValidateForm" button:

```4d
 $btnName:=OBJECT Get name(Object current)
```

After the execution of this object method, the *$btnName* variable contains the "bValidateForm" value.

#### See also 
[Form Objects (Access)](../../4D/20-R6/Form-Objects-Access.302-6958495.en.html)  
[OBJECT Get pointer](object-get-pointer.md)  
[Objects (Forms)](objects-forms.md)  
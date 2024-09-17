---
id: object-get-pointer
title: OBJECT Get pointer
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get pointer.Syntax-->**OBJECT Get pointer** {( *selector* {; *objectName* {; *subformName*}})} -> Function result<!-- END REF-->
<!--REF #_command_.OBJECT Get pointer.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| selector | Longint | -> | Object category |
| objectName | Text | -> | Object name |
| subformName | Text | -> | Subform object name |
| Function result | Pointer | <- | Pointer to object variable |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get pointer.Summary-->The **OBJECT Get pointer** command returns a pointer to the variable of a form object.<!-- END REF--> 

This command can be used to designate different objects according to the value of the *selector* parameter. You can pass one of the following constants (found in the "[Form Objects (Access)](/4Dv20R6/4D/20-R6/Form-Objects-Access.302-6958495.en.html)" theme) in this parameter:

* Object current or *selector* omitted: If you omit the *selector* parameter or pass this selector, the command returns a pointer to the variable associated with the current object (object whose method is executing).  
**Note:** This is strictly equivalent to the previous functioning of the [Self](self.md) command. This command is only kept for compatibility reasons.
* Object with focus: If you pass this selector, the command returns a pointer to the variable associated with the object that has the focus in the form. The last two optional parameters are ignored if they are passed.  
**Note:** This is strictly equivalent to the functioning of the [Focus object](focus-object.md) command. This command is now obsolete beginning with 4D v12\.
* Object subform container: If you pass this selector, the command returns a pointer to the variable bound with the subform container. The last two optional parameters are ignored if they are passed. This selector can therefore only be used in the context of a form used as a subform, so as to access the variable bound with the container object.
* Object named: If you pass this selector, you must also pass the second parameter, *objectName*. In this case, the command returns a pointer to the variable associated with the object whose name was passed in this parameter.  
**Note:** If *objectName* corresponds to a subform and the "Output subform" option is checked, the command returns a pointer to the table of the subform if a source table is specified; otherwise it returns Nil.

**Note:** When it is used in the context of a list box, **OBJECT Get pointer** with Object current or Object with focus selectors returns a pointer to the list box, the column, or the header, depending on the context. For more information, please refer to the [Managing List Box Objects](/4Dv20R6/4D/20-R6/Managing-List-Box-Objects.300-6958138.en.html) page.

The optional *subformName* parameter lets you retrieve a pointer to an *objectName* object that does not belong to the current context, in other words, in the parent form. To be able to use this parameter, you must have passed the Object named selector.   
When the *subformName* parameter is passed, the **OBJECT Get pointer** command first looks for the subform object named *subformName* in the current form, then looks inside this subform for an object named *objectName*. If this object is found, it returns a pointer to the variable of this object.

#### Example 

Given a form "SF" used twice as a subform in the same parent form. The subform objects are named "SF1" and "SF2". The "SF" form contains an object named *CurrentValue*. In the "On Load" form event of the form method of the parent form, we want to initialize the *CurrentValue* object of SF1 to "January" and that of SF2 to "February": 

```4d
 var $Ptr : Pointer
 $Ptr:=OBJECT Get pointer(Object named;"CurrentValue";"SF1")
 $Ptr->:="January"
 $Ptr:=OBJECT Get pointer(Object named;"CurrentValue";"SF2")
 $Ptr->:="February"
```

#### See also 

[Focus object](focus-object.md)  
[Form Objects (Access)](../../4D/20-R6/Form-Objects-Access.302-6958495.en.html)  
[OBJECT Get name](object-get-name.md)  
[OBJECT Get subform container value](object-get-subform-container-value.md)  
[Objects (Forms)](objects-forms.md)  
[Self](self.md)  
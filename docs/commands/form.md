---
id: form
title: Form
displayed_sidebar: docs
---

<!--REF #_command_.Form.Syntax-->**Form**  -> Function result<!-- END REF-->
<!--REF #_command_.Form.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Object | <- | Form data associated to the current form |

<!-- END REF-->

#### Description 

<!--REF #_command_.Form.Summary-->The **Form** command returns the object associated with the current form, if any.<!-- END REF--> 4D automatically associates an object to the current form in the following cases:

* the current form has been displayed by the [DIALOG](dialog.md) command,
* the current form is a subform,
* a table form is currently displayed on screen.

##### DIALOG form 

If the current form is being displayed by a call to the [DIALOG](dialog.md) command, **Form** returns either an empty object, or the *formData* object passed as parameter to this command, if any. 

##### Subform 

If the current form is a subform, the returned object depends on the parent container variable:

* If the variable associated to the parent container has been typed as an object ([C\_OBJECT](c-object.md)), **Form** returns the value of this variable.  
In this case, the object returned by **Form** is the same as the one returned by the following expression:  
```4d  
 (OBJECT Get pointer(Object subform container))->  
```
* If the variable associated to the parent container has not been typed as an object, **Form** returns an empty object, maintained by 4D in the subform context.

For more information, please refer to the [Page subforms](/4Dv20R6/4D/20-R6/Page-subforms.300-7003341.en.html) section.

##### Table form 

**Form** returns the object associated with the table form displayed on screen. In the context of an input form displayed from an output form (i.e. after a double-click on a record), the returned object contains the following property: 

| **Property** | **Type** | **Description**                           |
| ------------ | -------- | ----------------------------------------- |
| parentForm   | object   | **Form** object of the parent output form |

#### Example 

In a form displaying the record of a person, a "Check children" button opens a dialog to verify/modify the names and ages of their children:

![](../assets/en/Commands/pict3542015.en.png)

**Note:** The "Children" object field is represented only to show its structure for this example.

In the verification form, you have assigned some [Form](form.md) object properties to variables:

![](../assets/en/Commands/pict3541682.en.png)

Here is the code for the "Check children" button:

```4d
 C_LONGINT($win;$n;$i)

 C_BOOLEAN($save)

 ARRAY OBJECT($children;0)

 OB GET ARRAY([Person]Children;"children";$children) //get the children collection

 $save:=False //initialize the save variable
 

 $n:=Size of array($children)

 If($n>0)

    $win:=Open form window("Edit_Children";Movable form dialog box)

    SET WINDOW TITLE("Check children for "+[Person]Name)

    For($i;1;$n) //for each child

       DIALOG("Edit_Children";$children{$i}) //displays dialog filled with values

       If(OK=1) //the user clicked OK

          $save:=True

       End if

    End for

    If($save=True)

       [Person]Children:=[Person]Children //forces object field update

    End if

    CLOSE WINDOW($win)

 Else

    ALERT("No child to check.")

 End if
```

**Note:** This example requires that object notation be enabled in the database (see [Compatibility page](/4Dv20R6/4D/20-R6/Compatibility-page.300-7003469.en.html)).

The form displays information for each child:

![](../assets/en/Commands/pict3515152.en.png)

If values are edited and the OK button is clicked, the field is updated (the parent record must be saved afterwards). 

#### See also 
[DIALOG](dialog.md)  
---
id: form
title: Formulario
displayed_sidebar: docs
---

<!--REF #_command_.Form.Syntax-->**Form**  : Object<!-- END REF-->

<!--REF #_command_.Form.Params-->

| Parámetros | Tipo   |   | Descripción                   |
| ---------- | ------ | - | ----------------------------- |
| Resultado  | Object | ← | Form data of the current form |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones     |
| ----------- | ------------------ |
| 20 R8       | Form class support |

</details>

#### Descripción

<!--REF #_command_.Form.Summary-->The **Form** command returns the object associated with the current form (instantiated from the *formData* parameter or the user class assigned in the Form editor).<!-- END REF-->The **Form** command returns the object associated with the current form (instantiated from the *formData* parameter or the user class assigned in the Form editor).The **Form** command returns the object associated with the current form (instantiated from the *formData* parameter or the user class assigned in the Form editor).The **Form** command returns the object associated with the current form (instantiated from the *formData* parameter or the user class assigned in the Form editor). 4D automatically associates an object to the current form in the following cases:

- the current form has been loaded by one of the [`DIALOG`](dialog.md), [`Print form`](print-form.md), or [`FORM LOAD`](form-load.md) commands,
- the current form is a subform,
- a table form is currently displayed on screen.

##### Commands (DIALOG...)

If the current form is being displayed or loaded by a call to the [DIALOG](dialog.md), [`Print form`](print-form.md), or [`FORM LOAD`](form-load.md) commands, **Form** returns either:

- the *formData* object passed as parameter to this command, if any,
- or, an instantiated object of the [user class associated to the form](../FormEditor/properties_FormProperties.md#form-class), if any,
- or, an empty object.

##### Subformulario

If the current form is a subform, the returned object depends on the parent container variable:

- **Form** returns the object associated with the table form displayed on screen.\
  In the context of an input form displayed from an output form (i.e. after a double-click on a record), the returned object contains the following property:

```4d
 (OBJECT Get pointer(Object subform container))->  
```

- If the variable associated to the parent container has not been typed as an object, **Form** returns an empty object, maintained by 4D in the subform context.

For more information, please refer to the *Page subforms* section.

##### Table form

**Form** returns the object associated with the table form displayed on screen. **Form** returns the object associated with the table form displayed on screen.\
In the context of an input form displayed from an output form (i.e. after a double-click on a record), the returned object contains the following property:

| **Property** | **Type** | **Description**                           |
| ------------ | -------- | ----------------------------------------- |
| parentForm   | object   | **Form** object of the parent output form |

#### Ejemplo

In a form displaying the record of a person, a "Check children" button opens a dialog to verify/modify the names and ages of their children:

![](../assets/en/commands/pict3542015.en.png)

**Note:** The "Children" object field is represented only to show its structure for this example.

In the verification form, you have assigned some Form object properties to inputs:

![](../assets/en/commands/pict3541682.en.png)

Here is the code for the "Check children" button:

```4d
 var $win;$n;$i : Integer
 var $save : Boolean
 ARRAY OBJECT($children;0)
 OB GET ARRAY([Person]Children;"children";$children) //get the children collection
 $save:=False //initialize the save variable
 
 $n:=Size of array($children)
 If($n>0)
    $win:=Open form window("Edit_Children";Movable form dialog box)
    SET WINDOW TITLE("Check children for "+[Person]Name)
    For($i;1;$n) //for each child
       DIALOG("Edit_Children";$children{$i}) //displays dialog filled with values
       If(OK=1) //the user clicked OK
          $save:=True
       End if
    End for
    If($save=True)
       [Person]Children:=[Person]Children //forces object field update
    End if
    CLOSE WINDOW($win)
 Else
    ALERT("No child to check.")
 End if
```

The form displays information for each child:

![](../assets/en/commands/pict3515152.en.png)

If values are edited and the OK button is clicked, the field is updated (the parent record must be saved afterwards).

#### Ver también

[DIALOG](dialog.md)

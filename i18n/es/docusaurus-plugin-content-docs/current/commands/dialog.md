---
id: dialog
title: DIALOG
displayed_sidebar: docs
---

<!--REF #_command_.DIALOG.Syntax-->**DIALOG** ( {*aTable* ;} *form* {; *formData*}{; *} )<!-- END REF-->

<!--REF #_command_.DIALOG.Params-->

| Parámetros | Tipo         |                             | Descripción                                                                                                                                                                                  |
| ---------- | ------------ | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aTable     | Tabla        | &#8594; | Tabla propia del formulario o Si se omite: tabla por defecto o uso del formulario del proyecto                                                                               |
| form       | Text, Object | &#8594; | Name (string) of table or project form, or a POSIX path (string) to a .json file describing the form, or an object describing the form |
| formData   | Object       | &#8594; | Datos a asociar al formulario                                                                                                                                                                |
| \*         | Operador     | &#8594; | Usar el mismo proceso                                                                                                                                                                        |

<!-- END REF-->

## Descripción

<!--REF #_command_.DIALOG.Summary-->The **DIALOG** command presents the *form* to the user, along with *formData* parameter(s) (optional).<!-- END REF--> 

This command is designed to work with customized and advanced user interfaces based on forms. You can use it to display information coming from the database or other locations, or to provide data entry features. A diferencia de [ADD RECORD](../commands-legacy/add-record.md) o [MODIFY RECORD](../commands-legacy/modify-record.md), **DIALOG** le ofrece un control total sobre el formulario, su contenido y los botones de navegación y validación.

Este comando suele invocarse junto con el comando [Open form window](../commands-legacy/open-form-window.md) para mostrar formularios sofisticados, como se muestra en el siguiente ejemplo:

![](../assets/en/commands/pict3541609.en.png)

The **DIALOG** command can also be used instead of [ALERT](../commands-legacy/alert.md), [CONFIRM](../commands-legacy/confirm.md) or [Request](../commands-legacy/request.md) when the information to be presented or gathered is more complex than those commands can manage.

En el parámetro *form*, puede pasar:

- el nombre de un formulario (formulario proyecto o formulario tabla) a utilizar;
- the path (in POSIX syntax) to a valid .json file containing a description of the form to use;
- an object containing a description of the form to use.

Opcionalmente, puede pasar uno o varios parámetros al *form* utilizando un objeto "form data". Any properties of the form data object will then be available from within the form context through the [Form](form.md) command. For example, if you use a form data object containing {"version";"12"}, you will be able to get or set the value of the "version" property in the form by calling:

```4d
 $v:=Form.version //"12"
 Form.version:=13
```

To fill the "form data" object, you have two possibilities:

- usar el parámetro *formData*. Using a local variable for *formData* allows you to safely pass parameters to your forms, whatever the calling context. In particular, if the same form is called from different places in the same process, you will always be able to access its specific values by simply calling [Form](form.md).myProperty. Moreover, since objects are passed by reference, if the user modifies a property value in the form, it will automatically be saved in the object itself.

- [asociar una clase usuario al formulario](../FormEditor/properties_FormProperties.md#form-class), en cuyo caso 4D instanciará automáticamente un objeto de esta clase cuando se cargará el formulario. Las propiedades y funciones del objeto estarán automáticamente disponibles a través del objeto devuelto por [Form](form.md). Puede escribir por ejemplo `Form.myFunction()`.

:::note

- El parámetro *formData* tiene prioridad sobre una clase de formulario (el objeto de clase no es instanciado si se pasa un parámetro *formData*).
- If you do not pass the *formData* parameter (or if you pass an undefined object) and no user class is associated to the form, **DIALOG** creates a new empty object bound to the *form*.

:::

The dialog is closed by the user either with an "accept" action (triggered by the ak accept standard action, the Enter key, or the [ACCEPT](../commands-legacy/accept.md) command), or with a "cancel" action (triggered by the ak cancel standard action, the Escape key, or the [CANCEL](../commands-legacy/cancel.md) command). An accept action will set the OK system variable to 1, while a cancel action will set OK to 0\.

Tenga en cuenta que la validación no es igual al guardado: si el diálogo incluye campos, debe llamar explícitamente al comando [SAVE RECORD](../commands-legacy/save-record.md) para guardar cualquier dato que haya sido modificado.

If you pass the optional *\** parameter, the form is loaded and displayed in the last open window of the current process and the command finishes its execution while leaving the active form on the screen.\
If you pass the optional *\** parameter, the form is loaded and displayed in the last open window of the current process and the command finishes its execution while leaving the active form on the screen.\
If you pass the optional *\** parameter, the form is loaded and displayed in the last open window of the current process and the command finishes its execution while leaving the active form on the screen.\
This form then reacts “normally” to user actions and is closed using a standard action or when 4D code related to the form (object method or form method) calls the [CANCEL](../commands-legacy/cancel.md) or [ACCEPT](../commands-legacy/accept.md) command.\
If you pass the optional *\** parameter, the form is loaded and displayed in the last open window of the current process and the command finishes its execution while leaving the active form on the screen.\
If you pass the optional *\** parameter, the form is loaded and displayed in the last open window of the current process and the command finishes its execution while leaving the active form on the screen.\
This form then reacts “normally” to user actions and is closed using a standard action or when 4D code related to the form (object method or form method) calls the [CANCEL](../commands-legacy/cancel.md) or [ACCEPT](../commands-legacy/accept.md) command. Si el proceso actual termina, los formularios creados de este modo se cierran automáticamente del mismo modo que si se hubiera llamado a un comando [CANCEL](../commands-legacy/cancel.md). This opening mode is particularly useful for displaying a floating palette with a document, without necessarily requiring another process.

**Notas:**

- Puede combinar el uso de la sintaxis **DIALOG**(form;\*) con el comando [CALL FORM](../commands-legacy/call-form.md) para establecer la comunicación entre los formularios.
- You must create a window before calling the **DIALOG**(form;\*) statement. It is not possible to use the current dialog window in the process nor the window created by default for each process. En caso contrario, se genera el error -9909.
- When the *\** parameter is used, the window is closed automatically following a standard action or a call to the [CANCEL](../commands-legacy/cancel.md) or [ACCEPT](../commands-legacy/accept.md) command. You do not have to manage the closing of the window itself.

## Ejemplo 1

The following example can be used to create a tool palette:

```4d
  //Display tool palette
 $palette_window:=Open form window("tools";Palette form window)
 DIALOG("tools";*) //Give back the control immediately
  //Display main document windowl
 $document_window:=Open form window("doc";Plain form window)
 DIALOG("doc")
```

## Ejemplo 2

In a form displaying the record of a person, a "Check children" button opens a dialog to verify/modify the names and ages of their children:

![](../assets/en/commands/pict3542015.en.png)

**Note:** The "Children" object field is represented only to show its structure for this example.

In the verification form, you have assigned some [Form](form.md) object properties to variables:

![](../assets/en/commands/pict3541682.en.png)

Este es el código del botón "Check children":

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

El formulario muestra información sobre cada niño:

![](../assets/en/commands/pict3515152.en.png)

If values are edited and the OK button is clicked, the field is updated (the parent record must be saved afterwards).

## Ejemplo 3

The following example uses the path to a .json form to display the records in an employee list:

```4d
 Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)
 ALL RECORDS([Personnel])
 DIALOG("/RESOURCES/OutputPersonnel.json";*)
```

que muestra:

![](../assets/en/commands/pict3687439.en.png)

## Ejemplo 4

The following example uses a .json file as an object and modifies a few properties:

```4d
 var $form : Object
 $form:=JSON Parse(Document to text(Get 4D folder(Current resources folder)+"OutputPersonnel.json"))
 $form.windowTitle:="The Avengers"
 $form.pages[1].objects.logo.picture:="/RESOURCES/Images/Avengers.png"
 $form.pages[1].objects.myListBox.borderStyle:="double"
 Open form window($form;Plain form window)
 DIALOG($form;*)
```

The altered form is displayed with the title, logo and border modified:

![](../assets/en/commands/pict3688356.en.png)

## Variables y conjuntos sistema

After a call to **DIALOG**, if the dialog is accepted, OK is set to 1; if it is canceled, OK is set to 0.

## Ver también

[ACCEPT](../commands-legacy/accept.md)\
[ADD RECORD](../commands-legacy/add-record.md)\
[CALL FORM](../commands-legacy/call-form.md)\
[CANCEL](../commands-legacy/cancel.md)\
[Form](form.md)\
[Open window](../commands-legacy/open-window.md)

## Propiedades

|                        |                             |
| ---------------------- | --------------------------- |
| Número de comando      | 40                          |
| Hilo seguro            | &cross; |
| Modifica las variables | OK, error                   |


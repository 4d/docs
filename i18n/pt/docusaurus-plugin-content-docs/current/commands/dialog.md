---
id: dialog
title: DIALOG
displayed_sidebar: docs
---

<!--REF #_command_.DIALOG.Syntax-->**DIALOG** ( {*aTable* ;} *form* {; *formData*}{; *} )<!-- END REF-->

<!--REF #_command_.DIALOG.Params-->

| Parâmetro | Tipo         |   | Descrição                                                                                                                                                                                    |
| --------- | ------------ | - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aTable    | Tabela       | → | Table owning the form or If omitted: default table or use of project form                                                                                                    |
| form      | Text, Object | → | Name (string) of table or project form, or a POSIX path (string) to a .json file describing the form, or an object describing the form |
| formData  | Object       | → | Data to associate to the form                                                                                                                                                                |
| \*        | Operador     | → | Use the same process                                                                                                                                                                         |

<!-- END REF-->

#### Descrição

<!--REF #_command_.DIALOG.Summary-->The **DIALOG** command presents the *form* to the user, along with *formData* parameter(s) (optional).<!-- END REF--> 

This command is designed to work with customized and advanced user interfaces based on forms. You can use it to display information coming from the database or other locations, or to provide data entry features. Unlike [ADD RECORD](../commands-legacy/add-record.md) or [MODIFY RECORD](../commands-legacy/modify-record.md), **DIALOG** gives you full control over the form, its contents and the navigation and validation buttons.

This command is typically called along with the [Open form window](../commands-legacy/open-form-window.md) to display sophisticated forms, as shown in the following example:

![](../assets/en/commands/pict3541609.en.png)

The **DIALOG** command can also be used instead of [ALERT](../commands-legacy/alert.md), [CONFIRM](../commands-legacy/confirm.md) or [Request](../commands-legacy/request.md) when the information to be presented or gathered is more complex than those commands can manage.

In the *form* parameter, you can pass:

- the name of a form (project form or table form) to use;
- the path (in POSIX syntax) to a valid .json file containing a description of the form to use;
- an object containing a description of the form to use.

Optionally, you can pass parameter(s) to the *form* using a "form data" object. Any properties of the form data object will then be available from within the form context through the [Form](form.md) command. For example, if you use a form data object containing {"version";"12"}, you will be able to get or set the value of the "version" property in the form by calling:

```4d
 $v:=Form.version //"12"
 Form.version:=13
```

To fill the "form data" object, you have two possibilities:

- use the *formData* parameter. Using a local variable for *formData* allows you to safely pass parameters to your forms, whatever the calling context. In particular, if the same form is called from different places in the same process, you will always be able to access its specific values by simply calling [Form](form.md).myProperty. Moreover, since objects are passed by reference, if the user modifies a property value in the form, it will automatically be saved in the object itself.

- [associate a user class to the form](../FormEditor/properties_FormProperties.md#form-class), in which case 4D will automatically instantiate an object of this class when the form will be loaded. The object properties and functions will be automatically available through the object returned by [Form](form.md). You could write for example `Form.myFunction()`.

:::note

- The *formData* parameter has priority over a form class (the class object is not instantiated if a *formData* parameter is passed).
- If you do not pass the *formData* parameter (or if you pass an undefined object) and no user class is associated to the form, **DIALOG** creates a new empty object bound to the *form*.

:::

The dialog is closed by the user either with an "accept" action (triggered by the ak accept standard action, the Enter key, or the [ACCEPT](../commands-legacy/accept.md) command), or with a "cancel" action (triggered by the ak cancel standard action, the Escape key, or the [CANCEL](../commands-legacy/cancel.md) command). An accept action will set the OK system variable to 1, while a cancel action will set OK to 0\.

Keep in mind that validation does not equal saving: if the dialog includes fields, you must explicitly call the [SAVE RECORD](../commands-legacy/save-record.md) command to save any data that has been modified.

If you pass the optional *\** parameter, the form is loaded and displayed in the last open window of the current process and the command finishes its execution while leaving the active form on the screen.\
If you pass the optional *\** parameter, the form is loaded and displayed in the last open window of the current process and the command finishes its execution while leaving the active form on the screen.\
This form then reacts “normally” to user actions and is closed using a standard action or when 4D code related to the form (object method or form method) calls the [CANCEL](../commands-legacy/cancel.md) or [ACCEPT](../commands-legacy/accept.md) command. If the current process terminates, the forms created in this way are automatically closed in the same way as if a [CANCEL](../commands-legacy/cancel.md) command had been called. This opening mode is particularly useful for displaying a floating palette with a document, without necessarily requiring another process.

**Notas:**

- You can combine the use of the **DIALOG**(form;\*) syntax with the [CALL FORM](../commands-legacy/call-form.md) command to establish communication between the forms.
- You must create a window before calling the **DIALOG**(form;\*) statement. It is not possible to use the current dialog window in the process nor the window created by default for each process. Otherwise, error -9909 is generated.
- When the *\** parameter is used, the window is closed automatically following a standard action or a call to the [CANCEL](../commands-legacy/cancel.md) or [ACCEPT](../commands-legacy/accept.md) command. You do not have to manage the closing of the window itself.

#### Exemplo 1

The following example can be used to create a tool palette:

```4d
  //Display tool palette
 $palette_window:=Open form window("tools";Palette form window)
 DIALOG("tools";*) //Give back the control immediately
  //Display main document windowl
 $document_window:=Open form window("doc";Plain form window)
 DIALOG("doc")
```

#### Exemplo 2

In a form displaying the record of a person, a "Check children" button opens a dialog to verify/modify the names and ages of their children:

![](../assets/en/commands/pict3542015.en.png)

**Note:** The "Children" object field is represented only to show its structure for this example.

No formulário de verificação, você atribuiu algumas propriedades do objeto [Form](form.md) a variáveis:

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

#### Exemplo 3

The following example uses the path to a .json form to display the records in an employee list:

```4d
 Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)
 ALL RECORDS([Personnel])
 DIALOG("/RESOURCES/OutputPersonnel.json";*)
```

which displays:

![](../assets/en/commands/pict3687439.en.png)

#### Exemplo

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

#### System variables and sets

After a call to **DIALOG**, if the dialog is accepted, OK is set to 1; if it is canceled, OK is set to 0.

#### Veja também

[ACCEPT](../commands-legacy/accept.md)\
[ADD RECORD](../commands-legacy/add-record.md)\
[CALL FORM](../commands-legacy/call-form.md)\
[CANCEL](../commands-legacy/cancel.md)\
[Form](form.md)\
[Open window](../commands-legacy/open-window.md)

#### Propriedades

|                    |                                 |
| ------------------ | ------------------------------- |
| Command number     | 40                              |
| Thread safe        | &amp;cross; |
| Modifies variables | OK, error                       |

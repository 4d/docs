---
id: form-load
title: FORM LOAD
displayed_sidebar: docs
---

<!--REF #_command_.FORM LOAD.Syntax-->**FORM LOAD** ( {*aTable* ;} *form* {; *formData*}{; *} )<!-- END REF-->

<!--REF #_command_.FORM LOAD.Params-->

| Parâmetro | Tipo         |   | Descrição                                                                                                                                                                                                                |
| --------- | ------------ | - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| aTable    | Tabela       | → | Table form to load (if omitted, load a project form)                                                                                                                                                  |
| form      | Text, Object | → | Name (string) of form (project or table), ora POSIX path (string) to a .json file describing the form, or an object describing the form to open |
| formData  | Object       | → | Data to associate to the form                                                                                                                                                                                            |
| \*        | Operador     | → | If passed = command applies to host database when it is executed from a component (parameter ignored outside of this context)                                                                         |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*

#### Descrição

<!--REF #_command_.FORM LOAD.Summary-->The **FORM LOAD** command is used to load the *form* in memory in the current process along with *formData* (optional) in order to print its data or parse its contents.<!-- END REF-->The **FORM LOAD** command is used to load the *form* in memory in the current process along with *formData* (optional) in order to print its data or parse its contents.The **FORM LOAD** command is used to load the *form* in memory in the current process along with *formData* (optional) in order to print its data or parse its contents. There can only be one current form per process.

In the *form* parameter, you can pass:

- the name of a form, or
- the path (in POSIX syntax) to a valid .json file containing a description of the form to use, or
- an object containing a description of the form.

When the command is executed from a component, it loads the component forms by default. If you pass the *\** parameter, the method loads the host database forms.

##### formData

Optionally, you can pass parameters to the *form* using either the *formData* object or the form class object automatically instantiated by 4D if you have [associated a user class to the form](../FormEditor/properties_FormProperties.md#form-class). Any properties of the form data object will then be available from within the form context through the [Form](form.md) command.
Any properties of the form data object will then be available from within the form context through the [Form](form.md) command.

Para obter informações detalhadas sobre o objeto de dados do formulário, consulte o comando [`DIALOG`](dialog.md).

##### Printing data

In order to be able to execute this command, a print job must be opened beforehand using the [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md) command. The [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md) command makes an implicit call to the [FORM UNLOAD](../commands-legacy/form-unload.md) command, so in this context it is necessary to execute **FORM LOAD**. Once loaded, this *form* becomes the current printing form. All the object management commands, and in particular the [Print object](../commands-legacy/print-object.md) command, work with this form.

If a printing form has already been loaded beforehand (via a previous call to the **FORM LOAD** command), it is closed and replaced by *form*. You can open and close several project forms in the same print session. Changing the printing form via the **FORM LOAD** command does not generate page breaks. It is up to the developer to manage page breaks.

Only the [`On Load` form event](../Events/onLoad.md) is executed during the opening of the project form, as well as any object methods of the form. Other form events are ignored. O evento formulário [`On Unload`](../Events/onUnload.md) é executado no final da impressão.

To preserve the graphic consistency of forms, it is recommended to apply the "Printing" appearance property regardless of the platform.

The current printing form is automatically closed when the [CLOSE PRINTING JOB](../commands-legacy/close-printing-job.md) command is called.

##### Parsing form contents

This consists in loading an off-screen form for parsing purposes. To do this, just call **FORM LOAD** outside the context of a print job. In this case, form events are not executed.

**FORM LOAD** can be used with the [FORM GET OBJECTS](../commands-legacy/form-get-objects.md) and [OBJECT Get type](../commands-legacy/object-get-type.md) commands in order to perform any type of processing on the form contents. You must then call the [FORM UNLOAD](../commands-legacy/form-unload.md) command in order to release the form from memory.

Note that in all cases, the form on screen remains loaded (it is not affected by the **FORM LOAD** command) so it is not necessary to reload it after calling [FORM UNLOAD](../commands-legacy/form-unload.md).

**Reminder:** In the off-screen context, do not forget to call [FORM UNLOAD](../commands-legacy/form-unload.md) to avoid any risk of memory overflow.

#### Exemplo 1

Calling a project form in a print job:

```4d
 OPEN PRINTING JOB
 FORM LOAD("print_form")
  // execution of events and object methods
```

#### Exemplo 2

Calling a table form in a print job:

```4d
 OPEN PRINTING JOB
 FORM LOAD([People];"print_form")
  // execution of events and object methods
```

#### Exemplo 3

Parsing of form contents to carry out processing on text input areas:

```4d
 FORM LOAD([People];"my_form")
  // selection of form without execution of events or methods
 FORM GET OBJECTS(arrObjNames;arrObjPtrs;arrPages;*)
 For($i;1;Size of array(arrObjNames))
    If(OBJECT Get type(*;arrObjNames{$i})=Object type text input)
  //… processing
    End if
 End for
 FORM UNLOAD //do not forget to unload the form
```

#### Exemplo

The following example returns the number of objects on a JSON form:

```4d
 ARRAY TEXT(objectsArray;0) //sort form items into arrays
 ARRAY POINTER(variablesArray;0)
 ARRAY INTEGER(pagesArray;0)
 
 FORM LOAD("/RESOURCES/OutputForm.json") //load the form
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages+Form inherited)
 
 ALERT("The form contains "+String(size of array(objectsArray))+" objects") //return the object count
```

the result shown is:

![](../assets/en/commands/pict3688480.en.png)

#### Exemplo 2

You want to print a form containing a list box. During the *on load* event, you want the contents of the list box to be modified.

1\. In the printing method, you write:

```4d
 var $formData : Object
 var $over : Boolean
 var $full : Boolean
 
 OPEN PRINTING JOB
 $formData:=New object
 $formData.LBcollection:=New collection()
 ... //fill the collection with data
 
 FORM LOAD("GlobalForm";$formData) //store the collection in $formData
 $over:=False
 Repeat
    $full:=Print object(*;"LB") // the datasource of this "LB" listbox is Form.LBcollection
    LISTBOX GET PRINT INFORMATION(*;"LB";lk printing is over;$over)
    If(Not($over))
       PAGE BREAK
    End if
 Until($over)
 FORM UNLOAD
 CLOSE PRINTING JOB
```

2\. In the form method, you can write:

```4d
 var $o : Object
 Case of
    :(Form event code=On Load)
       For each($o;Form.LBcollection) //LBcollection is available
          $o.reference:=Uppercase($o.reference)
       End for each
 End case
```

#### Veja também

[Current form name](../commands-legacy/current-form-name.md)\
[FORM UNLOAD](../commands-legacy/form-unload.md)\
[LISTBOX GET OBJECTS](../commands-legacy/listbox-get-objects.md)\
[OBJECT Get type](../commands-legacy/object-get-type.md)\
[Print object](../commands-legacy/print-object.md)

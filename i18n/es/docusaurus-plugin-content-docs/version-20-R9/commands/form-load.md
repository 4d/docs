---
id: form-load
title: FORM LOAD
displayed_sidebar: docs
---

<!--REF #_command_.FORM LOAD.Syntax-->**FORM LOAD** ( {*aTable* ;} *form* {; *formData*}{; *} )<!-- END REF-->

<!--REF #_command_.FORM LOAD.Params-->

| Parámetros | Tipo         |                             | Descripción                                                                                                                                                                                                                                         |
| ---------- | ------------ | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aTable     | Tabla        | &#8594; | Formulario tabla a cargar (si se omite, carga un formulario proyecto)                                                                                                                                                            |
| form       | Text, Object | &#8594; | Nombre (cadena) del formulario (proyecto o tabla), o una ruta POSIX (cadena) a un archivo .json que describa el formulario, o un objeto que describa el formulario a abrir |
| formData   | Object       | &#8594; | Datos a asociar al formulario                                                                                                                                                                                                                       |
| \*         | Operador     | &#8594; | Si se pasa = el comando se aplica a la base de datos del host cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto)                                                                                  |

<!-- END REF-->

## Descripción

<!--REF #_command_.FORM LOAD.Summary-->El comando **FORM LOAD** se utiliza para cargar el *form* en memoria en el proceso actual junto con *formData* (opcional) para imprimir sus datos o analizar su contenido.<!-- END REF--> Sólo puede haber un formulario actual por proceso.

En el parámetro *form*, puede pasar:

- el nombre de un formulario, o
- the path (in POSIX syntax) to a valid .json file containing a description of the form to use, or
- un objeto que contiene la descripción del formulario.

When the command is executed from a component, it loads the component forms by default. If you pass the *\** parameter, the method loads the host database forms.

### formData

Opcionalmente, puede pasar parámetros al *form* usando el objeto *formData* o el objeto de clase form automáticamente instanciado por 4D si has [asociado una clase de usuario al formulario](../FormEditor/properties_FormProperties.md#form-class). Any properties of the form data object will then be available from within the form context through the [Form](form.md) command.
El objeto de datos del formulario está disponible en el [evento de formulario `On Load`](../Events/onLoad.md).

Para obtener información detallada sobre el objeto de datos del formulario, consulte el comando [`DIALOG`](dialog.md).

### Impresión de datos

Para poder ejecutar este comando, debe abrirse previamente un trabajo de impresión utilizando el comando [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md). El comando [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md) hace una llamada implícita al comando [FORM UNLOAD](../commands-legacy/form-unload.md), por lo que en este contexto es necesario ejecutar **FORM LOAD**. Once loaded, this *form* becomes the current printing form. All the object management commands, and in particular the [Print object](../commands-legacy/print-object.md) command, work with this form.

If a printing form has already been loaded beforehand (via a previous call to the **FORM LOAD** command), it is closed and replaced by *form*. You can open and close several project forms in the same print session. Changing the printing form via the **FORM LOAD** command does not generate page breaks. Corresponde al desarrollador gestionar los saltos de página.

Only the [`On Load` form event](../Events/onLoad.md) is executed during the opening of the project form, as well as any object methods of the form. Otros eventos de formulario son ignorados. The [`On Unload` form event](../Events/onUnload.md) is executed at the end of printing.

To preserve the graphic consistency of forms, it is recommended to apply the "Printing" appearance property regardless of the platform.

The current printing form is automatically closed when the [CLOSE PRINTING JOB](../commands-legacy/close-printing-job.md) command is called.

### Análisis del contenido del formulario

This consists in loading an off-screen form for parsing purposes. Para ello, basta con llamar a **FORM LOAD** fuera del contexto de un trabajo de impresión. In this case, form events are not executed.

**FORM LOAD** puede utilizarse con los comandos [FORM GET OBJECTS](../commands-legacy/form-get-objects.md) y [OBJECT Get type](../commands-legacy/object-get-type.md) para realizar cualquier tipo de procesamiento sobre el contenido del formulario. A continuación, debe llamar al comando [FORM UNLOAD](../commands-legacy/form-unload.md) para liberar el formulario de la memoria.

Note that in all cases, the form on screen remains loaded (it is not affected by the **FORM LOAD** command) so it is not necessary to reload it after calling [FORM UNLOAD](../commands-legacy/form-unload.md).

**Recordatorio:** en el contexto fuera de pantalla, no olvide llamar a [FORM UNLOAD](../commands-legacy/form-unload.md) para evitar cualquier riesgo de saturación de memoria.

## Ejemplo 1

Llamada a un formulario proyecto en un trabajo de impresión:

```4d
OPEN PRINTING JOB
 FORM LOAD("print_form")
// ejecución de eventos y de métodos objeto
```

## Ejemplo 2

Calling a table form in a print job:

```4d
OPEN PRINTING JOB
 FORM LOAD([People];"print_form")
 // ejecución de eventos y de métodos objeto
```

## Ejemplo 3

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

## Ejemplo 4

The following example returns the number of objects on a JSON form:

```4d
 ARRAY TEXT(objectsArray;0) //sort form items into arrays
 ARRAY POINTER(variablesArray;0)
 ARRAY INTEGER(pagesArray;0)
 
 FORM LOAD("/RESOURCES/OutputForm.json") //load the form
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages+Form inherited)
 
 ALERT("The form contains "+String(size of array(objectsArray))+" objects") //return the object count
```

el resultado mostrado es:

![](../assets/en/commands/pict3688480.en.png)

## Ejemplo 5

Desea imprimir un formulario que contiene un list box. During the *on load* event, you want the contents of the list box to be modified.

1\. En el método de impresión, usted escribe:

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

2\. En el método formulario, puede escribir:

```4d
 var $o : Object
 Case of
    :(Form event code=On Load)
       For each($o;Form.LBcollection) //LBcollection is available
          $o.reference:=Uppercase($o.reference)
       End for each
 End case
```

## Ver también

[Current form name](../commands-legacy/current-form-name.md)\
[FORM UNLOAD](../commands-legacy/form-unload.md)\
[LISTBOX GET OBJECTS](../commands-legacy/listbox-get-objects.md)\
[OBJECT Get type](../commands-legacy/object-get-type.md)\
[Print object](../commands-legacy/print-object.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1103                        |
| Hilo seguro       | &cross; |



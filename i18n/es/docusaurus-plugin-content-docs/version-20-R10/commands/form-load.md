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
- la ruta (en sintaxis POSIX) a un archivo .json válido que contenga una descripción del formulario a utilizar, o
- un objeto que contiene la descripción del formulario.

Cuando el comando se ejecuta desde un componente, carga los formularios del componente por defecto. Si pasa el parámetro *\**, el método carga los formularios de la base de datos local.

### formData

Opcionalmente, puede pasar parámetros al *form* usando el objeto *formData* o el objeto de clase form automáticamente instanciado por 4D si has [asociado una clase de usuario al formulario](../FormEditor/properties_FormProperties.md#form-class). Todas las propiedades del objeto de datos del formulario estarán entonces disponibles desde el contexto del formulario a través del comando [Form](form.md).
El objeto de datos del formulario está disponible en el [evento de formulario `On Load`](../Events/onLoad.md).

Para obtener información detallada sobre el objeto de datos del formulario, consulte el comando [`DIALOG`](dialog.md).

### Impresión de datos

Para poder ejecutar este comando, debe abrirse previamente un trabajo de impresión utilizando el comando [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md). El comando [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md) hace una llamada implícita al comando [FORM UNLOAD](../commands-legacy/form-unload.md), por lo que en este contexto es necesario ejecutar **FORM LOAD**. Una vez cargado, este *form* se convierte en el formulario de impresión actual. Todos los comandos de gestión de objetos, y en particular el comando [Print object](../commands-legacy/print-object.md), funcionan con este formulario.

Si ya se ha cargado previamente un formulario de impresión (mediante una llamada previa al comando **FORM LOAD**), éste se cierra y se sustituye por *form*. Puede abrir y cerrar varios formularios proyecto en la misma sesión de impresión. El cambio del formulario de impresión mediante el comando **FORM LOAD** no genera saltos de página. Corresponde al desarrollador gestionar los saltos de página.

Solo se ejecuta el [evento formulario `On Load`](../Events/onLoad.md) durante la apertura del formulario proyecto, así como todos los métodos objeto del formulario. Otros eventos de formulario son ignorados. El [evento formulario `On Unload`](../Events/onUnload.md) se ejecuta al final de la impresión.

Para preservar la coherencia gráfica de los formularios, se recomienda aplicar la propiedad de apariencia "Impresión" independientemente de la plataforma.

El formulario de impresión actual se cierra automáticamente cuando el comando [CLOSE PRINTING JOB](../commands-legacy/close-printing-job.md) es llamado.

### Análisis del contenido del formulario

Esto consiste en cargar un formulario fuera de pantalla con fines de análisis. Para ello, basta con llamar a **FORM LOAD** fuera del contexto de un trabajo de impresión. En este caso, los eventos de formulario no se ejecutan.

**FORM LOAD** puede utilizarse con los comandos [FORM GET OBJECTS](../commands-legacy/form-get-objects.md) y [OBJECT Get type](../commands-legacy/object-get-type.md) para realizar cualquier tipo de procesamiento sobre el contenido del formulario. A continuación, debe llamar al comando [FORM UNLOAD](../commands-legacy/form-unload.md) para liberar el formulario de la memoria.

Tenga en cuenta que en todos los casos, el formulario en pantalla permanece cargado (no le afecta el comando **FORM LOAD**) por lo que no es necesario volver a cargarlo después de llamar a [FORM UNLOAD](../commands-legacy/form-unload.md).

**Recordatorio:** en el contexto fuera de pantalla, no olvide llamar a [FORM UNLOAD](../commands-legacy/form-unload.md) para evitar cualquier riesgo de saturación de memoria.

## Ejemplo 1

Llamada a un formulario proyecto en un trabajo de impresión:

```4d
OPEN PRINTING JOB
 FORM LOAD("print_form")
// ejecución de eventos y de métodos objeto
```

## Ejemplo 2

Llamada a un formulario tabla en un trabajo de impresión:

```4d
OPEN PRINTING JOB
 FORM LOAD([People];"print_form")
 // ejecución de eventos y de métodos objeto
```

## Ejemplo 3

Análisis del contenido de los formularios para efectuar el tratamiento de las áreas de introducción de texto:

```4d
 FORM LOAD([People];"my_form")
  // selección de formulario sin ejecución de eventos o métodos
 FORM GET OBJECTS(arrObjNames;arrObjPtrs;arrPages;*)
 For($i;1;Size of array(arrObjNames))
    If(OBJECT Get type(*;arrObjNames{$i})=Object type text input)
  //… procesamiento
    End if
 End for
 FORM UNLOAD //no olvide descargar el formulario
```

## Ejemplo 4

El siguiente ejemplo devuelve el número de objetos de un formulario JSON:

```4d
 ARRAY TEXT(objectsArray;0) //ordenar los elementos del formulario en arrays
 ARRAY POINTER(variablesArray;0)
 ARRAY INTEGER(pagesArray;0)
 
 FORM LOAD("/RESOURCES/OutputForm.json") //cargar el formulario
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages+Form inherited)
 
 ALERT("The form contains "+String(size of array(objectsArray))+" objects") //devuelve el recuento de objetos
```

el resultado mostrado es:

![](../assets/en/commands/pict3688480.en.png)

## Ejemplo 5

Desea imprimir un formulario que contiene un list box. Durante el evento *on load*, desea que se modifique el contenido del  list box.

1\. En el método de impresión, usted escribe:

```4d
 var $formData : Object
 var $over : Boolean
 var $full : Boolean
 
 OPEN PRINTING JOB
 $formData:=New object
 $formData.LBcollection:=New collection()
 ... //llenar la colección con datos
 
 FORM LOAD("GlobalForm";$formData) //almacenar la colección en $formData
 $over:=False
 Repeat
    $full:=Print object(*;"LB") // la fuente de datos de este listbox "LB" es Form.LBcollection
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
       For each($o;Form.LBcollection) //LBcollection está disponible
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



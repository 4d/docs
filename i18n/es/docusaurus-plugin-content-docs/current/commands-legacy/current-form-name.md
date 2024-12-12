---
id: current-form-name
title: Current form name
slug: /commands/current-form-name
displayed_sidebar: docs
---

<!--REF #_command_.Current form name.Syntax-->**Current form name**  : Text<!-- END REF-->
<!--REF #_command_.Current form name.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nombre del formulario de proyecto actual o formulario tabla actual en el proceso |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Current form name.Summary-->El comando **Current form name** devuelve el nombre del formulario actual definido para el proceso.<!-- END REF--> El formulario actual puede ser un formulario proyecto o un formulario tabla.

Por defecto, si no se ha llamado al comando [FORM LOAD](../commands/form-load.md) en el proceso actual, el formulario actual es el que está siendo visualizado o impreso. Si ha llamado al comando [FORM LOAD](../commands/form-load.md) en el proceso, el formulario actual es el definido para este comando y permanece así hasta que llame a [FORM UNLOAD](form-unload.md) (o [CLOSE PRINTING JOB](close-printing-job.md)).

El comando devuelve:

* el nombre del formulario, o
* el nombre del archivo sin la extensión si el formulario actual es creado por un archivo .json, o
* el atributo "nombre" si el formulario actual es creado por un objeto, o
* una cadena vacía si no hay una forma actual definida para el proceso.

#### Ejemplo 1 

En un formulario de entrada, ponga el siguiente código en un bóton:

```4d
 var $FormName : Text
 $win:=Open form window([Members];"Input";Plain form window)
 DIALOG([Members];"Input")
 $FormName:=Current form name
  // $FormName = "Input"
 FORM LOAD([Members];"Drag")
 $FormName:=Current form name
  // $FormName = "Drag"
  //...
```

#### Ejemplo 2 

Usted quiere obtener el formulario actual si éste es un formulario proyecto:

```4d
 $PointerTable:=Current form table
 If(Nil($PointerTable)) // este es un formulario proyecto
    $FormName:=Current form name
    ... // procesamiento
 End if
```

#### Ver también 

[FORM LOAD](../commands/form-load.md)  
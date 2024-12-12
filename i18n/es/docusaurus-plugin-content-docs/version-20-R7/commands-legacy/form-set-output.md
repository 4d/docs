---
id: form-set-output
title: FORM SET OUTPUT
slug: /commands/form-set-output
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET OUTPUT.Syntax-->**FORM SET OUTPUT** ( {*tabla* ;} *form* {; *formUsuario*} )<!-- END REF-->
<!--REF #_command_.FORM SET OUTPUT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual definir el formulario de salida, o Tabla por defecto, si se omite |
| form | Text, Object | &#8594;  | Nombre del formulario |
| formUsuario | Text | &#8594;  | Nombre del formulario usuario a utilizar |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.FORM SET OUTPUT.Summary-->El comando **FORM SET OUTPUT** define el formulario de salida actual de *formulario* o *formUsuario*.<!-- END REF--> El formulario debe pertenecer a *tabla*.

El parámetro *form* es el formulario que se mostrará. Pase el:

* el nombre de un formulario;
* la ruta (en sintaxis POSIX) a un archivo .json válido que contiene una descripción del formulario a usar. Ver *Ruta de archivo del formulario*;
* un objeto que contiene una descripción del formulario.

El alcance de este comando es el proceso actual. Cada tabla tiene su propio formulario de salida en cada proceso.

**Nota**: por razones estructurales, este comando no es compatible con formularios de proyecto. 

FORM SET OUTPUT no muestra el formulario; simplemente designa el formulario que debe imprimir, mostrar, o utilizar otro comando. Para mayor información sobre la creación de formularios, consulte el Manual de Diseño.

El formulario de salida por defecto se define en la ventana del Explorador en el entorno Diseño para cada tabla. Este formulario de salida por defecto se utiliza si el comando FORM SET OUTPUT no se utiliza para especificar un formulario de salida, o si usted especifica un formulario que no existe.

El parámetro opcional *formUsuario* le permite especificar un formulario usuario (que viene desde *formulario*) como formulario de salida por defecto. Si pasa un nombre de formulario de usuario correcto, este formulario será utilizado por defecto en lugar del formulario de salida en el proceso actual. Esto le permite tener simultáneamente diferentes formularios de usuario personalizados (generados utilizando el comando *\_o\_CREATE USER FORM*) y utilizar el que convenga de acuerdo al contexto.

Para mayor información sobre formularios usuario, consulte la sección *Presentación de los formularios de usuario*. 

Los formularios de salida son utilizados por tres grupos de comandos. Un grupo muestra una lista de registros en pantalla, otro grupo genera informes, y el tercer grupo exporta datos. Los comandos [DISPLAY SELECTION](display-selection.md) y [MODIFY SELECTION](modify-selection.md)  muestran una lista de registros utilizando un formulario de salida. Utilice el formulario de salida durante la creación de informes con los comandos [PRINT LABEL](print-label.md) y [PRINT SELECTION](print-selection.md) . Cada uno de los comandos de exportación ([EXPORT DIF](export-dif.md), [EXPORT SYLK](export-sylk.md) y [EXPORT TEXT](export-text.md)) utiliza también el formulario de salida.

#### Ejemplo 1 

El siguiente ejemplo muestra un uso típico de **FORM SET OUTPUT**. Note que aunque el comando **FORM SET OUTPUT** aparece inmediatamente antes de que el formulario sea utilizado, no es obligatorio. De hecho, el comando podría ejecutarse en un método completamente diferente, siempre y cuando se ejecute antes de este método:

```4d
 FORM SET INPUT([Parts];"Parts In") //Selección del formulario de entrada
 FORM SET OUTPUT([Parts];"Parts List") //Selección del formulario de salida
 MODIFY SELECTION([Parts]) //Este comando utiliza ambos formularios
```

#### Ejemplo 2 

Los siguientes ejemplos usan la ruta a un formulario .json para imprimir los registros en una lista de empleados:

```4d
 FORM SET OUTPUT([Personnel];"/RESOURCES/PersonnelForm.json")
 ALL RECORDS([Personnel])
 PRINT SELECTION([Personnel])
```

#### Ver también 

[DISPLAY SELECTION](display-selection.md)  
[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[FORM SET INPUT](form-set-input.md)  
[MODIFY SELECTION](modify-selection.md)  
[PRINT LABEL](print-label.md)  
[PRINT SELECTION](print-selection.md)  
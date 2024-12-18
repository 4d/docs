---
id: no-default-table
title: NO DEFAULT TABLE
slug: /commands/no-default-table
displayed_sidebar: docs
---

<!--REF #_command_.NO DEFAULT TABLE.Syntax-->**NO DEFAULT TABLE**<!-- END REF-->
<!--REF #_command_.NO DEFAULT TABLE.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.NO DEFAULT TABLE.Summary-->El comando NO DEFAULT TABLE permite cancelar el efecto del comando [DEFAULT TABLE](default-table.md "DEFAULT TABLE").<!-- END REF--> Después de la ejecución de este comando, no hay tabla por defecto definida para el proceso. 

Este comando no tendrá efecto si el comando [DEFAULT TABLE](default-table.md "DEFAULT TABLE") no ha sido llamado de antemano.

Este comando está relacionado con el uso de formularios de proyecto (formularios no asociados a tablas): la mayoría de los comandos relacionados a los formularios (aparte de los formularios de usuario) aceptan un parámetro opcional de tipo tabla como primer parámetro. Por ejemplo, este es el caso de los comandos *FORM GET PARAMETER*, [Open form window](open-form-window.md "Open form window") o [DIALOG](../commands/dialog.md "DIALOG"). Como un formulario de proyecto y un formulario de tabla pueden tener el mismo nombre, este parámetro puede utilizarse para determinar el formulario a utilizar: pase el parámetro cuando quiera apuntar a un formulario tabla y omítalo en el caso de un formulario de proyecto.

En una base que contiene un formulario de proyecto llamado “ElFormulario” y un formulario de tabla con el mismo nombre para la tabla \[Tabla1\]:

```4d
 DIALOG([Tabla1];"ElFormulario") //4D utiliza el formulario de tabla
 DIALOG("ElFormulario") //4D utiliza el formulario de proyecto
```

Sin embargo, este principio es nulo e inválido si el comando [DEFAULT TABLE](default-table.md "DEFAULT TABLE") se ejecuta cuando la base contiene un formulario de proeycto y un formulario de tabla con el mismo nombre. En efecto, en este caso 4D utilizará el formulario de tabla por defecto, incluso si no se pasa el parámetro *tabla*. Para garantizar el uso de formularios de proyecto, simplemente utilice el comando NO DEFAULT TABLE.

#### Ejemplo 

En una base que contiene un formulario de proyecto llamado “ElFormulario” y un formulario de tabla con el mismo nombre para la tabla \[Tabla1\]: 

```4d
 DEFAULT TABLE([Tabla1])
 DIALOG("ElFormulario") //4D utiliza el formulario de tabla
 NO DEFAULT TABLE
 DIALOG("ElFormulario") //4D utiliza el formulario de proyecto
```

#### Ver también 

[DEFAULT TABLE](default-table.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 993 |
| Hilo seguro | &check; |



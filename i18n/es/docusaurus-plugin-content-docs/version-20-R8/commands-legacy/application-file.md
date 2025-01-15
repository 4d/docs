---
id: application-file
title: Application file
slug: /commands/application-file
displayed_sidebar: docs
---

<!--REF #_command_.Application file.Syntax-->**Application file**  : Text<!-- END REF-->
<!--REF #_command_.Application file.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nombre largo del archivo 4D ejecutable o  de la aplicación 4D |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Application file.Summary-->El comando Application file devuelve el nombre largo del archivo ejecutable o de la aplicación 4D que está utilizando.<!-- END REF-->

En Windows  
Si está utilizando por ejemplo 4D ubicado en \\PROGRAMS\\4D en el disco E, el comando devuelve E:\\PROGRAMS\\4D\\4D.exe.

En Macintosh  
Si está corriendo por ejemplo 4D en la carpeta Programas del disco Macintosh HD, el comando devuelve Macintosh HD:Programs:4D.app.

#### Ejemplo 

Al iniciar su base de datos en Windows, necesita verificar si una librería DLL se encuentra ubicada en el mismo nivel del archivo ejecutable 4D. En el de su aplicación puede escribir:

```4d
 If(Is Windows&(Application type#4D Server))
    var $appPath : Object
    $appPath:=Path to object(Application file)
    If(Test path name(($appPath.parentFolder)+"XRAYCAPT.DLL")#Is a document)
       ALERT("XRAYCAPT.DLL is missing. The X-ray capture capability will not be available.")
    End if
 End if
```

#### Ver también 

[Data file](data-file.md)  
[Structure file](structure-file.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 491 |
| Hilo seguro | &check; |



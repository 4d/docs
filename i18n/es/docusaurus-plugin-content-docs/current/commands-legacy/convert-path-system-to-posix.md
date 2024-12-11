---
id: convert-path-system-to-posix
title: Convert path system to POSIX
slug: /commands/convert-path-system-to-posix
displayed_sidebar: docs
---

<!--REF #_command_.Convert path system to POSIX.Syntax-->**Convert path system to POSIX** ( *rutaSistema* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Convert path system to POSIX.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaSistema | Text | &#8594;  | Ruta de acceso relativa o absoluta expresada en sintaxis sistema |
| * | Operador | &#8594;  | Opción de codificación |
| Resultado | Text | &#8592; | Absolute pathname expressed in POSIX syntax |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Convert path system to POSIX.Summary-->El comando Convert path system to POSIX convierte una ruta expresada con la sintaxis sistema en una ruta expresada con la sintaxis POSIX (Unix).<!-- END REF-->

Pase en el parámetro *rutaSistema* la ruta de acceso a un archivo o carpeta, expresada con la sintaxis sistema (Mac OS o Windows). Esta ruta puede ser absoluta o relativa a la carpeta de la base (carpeta que contiene el archivo de estructura de la base). No es obligatorio que los elementos de la ruta existan realmente en el disco en el momento de la ejecución del comando (el comando no prueba la validez de la ruta de acceso). 

El comando devuelve la ruta de acceso completa del archivo o de la carpeta expresada en la sintaxis POSIX. El comando siempre devuelve una ruta absoluta, sin importar el tipo de la ruta pasada en *rutaSistema*. Si pasa una ruta relativa en *rutaSistema*, 4D completa el valor devuelto al añadir la ruta de acceso a la carpeta de la base. 

El parámetro opcional *\** permite definir la codificación de la ruta POSIX. Por defecto, Convert path system to POSIX no codifica los caracteres especiales de la ruta POSIX. Si pasa el parámetro \*, los caracteres especiales se traducen (por ejemplo, "My folder" se convierte en "Mi%20carpeta").

#### Ejemplo 1 

Ejemplos bajo Mac OS

```4d
 $path:=Convert path system to POSIX("machd:file 2.txt")
  //machd es el disco de inicio
  //devuelve "/file 2.txt"
 $path:=Convert path system to POSIX("disk2:file 2.txt")
  //disk2 es un disco adicional (sin inicio)
  //devuelve "/Volumes/disk2/file 2.txt"
 $path:=Convert path system to POSIX("machd:file 2.txt";*)
  //devuelve "/file%202.txt"
 $path:=Convert path system to POSIX(":resources:images") //ruta relativa
  //devuelve "/User/mark/Documents/videodatabase/resources/images"
 $path:=Convert path system to POSIX("resources:images") //ruta relativa
  //devuelve "/resources/images"
```

#### Ejemplo 2 

Ejemplo bajo Windows

```4d
 $path:=Convert path system to POSIX("c:\docs\file 2.txt")
  //returns "c:/docs/file 2.txt"
 $path:=Convert path system to POSIX("\\srv\tempo\file.txt")
  //returns "//srv/tempo/file.txt"
```

#### Ver también 

[Convert path POSIX to system](convert-path-posix-to-system.md)  
[Object to path](object-to-path.md)  
[Path to object ](path-to-object.md)  
[Test path name](test-path-name.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1106 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||



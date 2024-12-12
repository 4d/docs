---
id: convert-path-posix-to-system
title: Convert path POSIX to system
slug: /commands/convert-path-posix-to-system
displayed_sidebar: docs
---

<!--REF #_command_.Convert path POSIX to system.Syntax-->**Convert path POSIX to system** ( *rutaPosix* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Convert path POSIX to system.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaPosix | Text | &#8594;  | Ruta de acceso POSIX |
| * | Operador | &#8594;  | Opción de codificación |
| Resultado | Text | &#8592; | Ruta de acceso expresada en sintaxis sistema |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Convert path POSIX to system.Summary-->El comando Convert path POSIX to system convierte una ruta de acceso expresada con la sintaxis POSIX (Unix) en una ruta expresada con la sintaxis sistema.<!-- END REF--> 

Pase en el parámetro *rutaPosix* la ruta de acceso completa a un archivo o carpeta, expresada con la sintaxis POSIX. Esta ruta debe ser absoluta (debe comenzar con el carácter "/"). Debe pasar una ruta disco; no es posible pasar una ruta red (comenzando, por ejemplo con ftp://ftp.mysite.fr).

El comando devuelve la ruta de acceso completa del archivo o del archivo expresada en la sintaxis del sistema actual. 

El parámetro opcional *\** permite indicar si el parámetro *rutaPosix* está codificado. Si este es el caso, debe pasar este parámetro, de lo contrario la conversión no será válida. El comando devuelve la ruta de acceso sin codificación. 

#### Ejemplo 1 

Ejemplos bajo Mac OS:

```4d
 $path:=Convert path POSIX to system("/Volumes/machd/file 2.txt")
  //devuelve "machd:file 2.txt"
 $path:=Convert path POSIX to system("/Volumes/machd/file%202.txt";*)
  //devuelve "machd:file 2.txt"
 $path:=Convert path POSIX to system("/file 2.txt")
  //devuelve "machd:file 2.txt" si machd es el disco de inicio
```

#### Ejemplo 2 

Ejemplos bajo Windows:

```4d
 $path:=Convert path POSIX to system("c:/docs/file 2.txt")
  //devuelve "c:\\docs\\file 2.txt"
 $path:=Convert path POSIX to system("c:/docs/file%202.txt";*)
  //devuelve "c:\\docs\\file 2.txt"
```

#### Ver también 

[Convert path system to POSIX](convert-path-system-to-posix.md)  
[Object to path](object-to-path.md)  
[Path to object ](path-to-object.md)  
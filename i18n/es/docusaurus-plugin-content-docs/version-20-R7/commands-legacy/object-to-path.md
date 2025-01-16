---
id: object-to-path
title: Object to path
slug: /commands/object-to-path
displayed_sidebar: docs
---

<!--REF #_command_.Object to path.Syntax-->**Object to path** ( *objRuta* ) : Text<!-- END REF-->
<!--REF #_command_.Object to path.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRuta | Object | &#8594;  | Objeto que describe los contenidos de una ruta |
| Resultado | Text | &#8592; | Nombre de ruta |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Object to path.Summary-->El comando **Object to path** devuelve un nombre de ruta (cadena) en función de la información de ruta que pasó en el parámetro *objRuta*.<!-- END REF--> Las siguientes rutas son soportadas:

* Ruta del sistema (Windows o macOS) o ruta Posix. El tipo de ruta está definido por el último carácter de la propiedad parentFolder (ver a continuación).
* Ruta relativa o ruta absoluta (ver *Ruta de acceso absoluta o relativa* para más información).

En *objRuta*, pase un objeto que define la ruta que desea generar. Debe contener las siguientes propiedades:

| **Propiedad** | **Tipo** | **Descripción**                                                                                                                                                                                                                                                                                |
| ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| parentFolder  | Texto    | Información del directorio para la ruta. El último carácter debe ser un separador de carpeta. El comando usa este carácter para conocer el tipo de ruta. Si se trata de un separador Posix ("/"), la ruta se crea con los separadores Posix; de lo contrario, se usa el separador del sistema. |
| name          | Texto    | Nombre final de archivo o carpeta de la ruta especificada sin extensión.                                                                                                                                                                                                                       |
| extension     | Texto    | Extensión del nombre final de archivo o carpeta. Comienza con "." (puede ser omitido). Cadena vacía "" si no hay extensión.                                                                                                                                                                    |
| isFolder      | Booleano | True si el nombre es un nombre de carpeta, de lo contrario, false (el valor predeterminado es false)                                                                                                                                                                                           |

Por lo general, *objRuta* se generará con el comando [Path to object ](path-to-object.md), sin embargo, el objeto se puede generar con cualquier medio. Tenga en cuenta que **Object to path** solo maneja cadenas. Tampoco comprueba si la ruta es válida con respecto al tipo de ruta, ni la existencia real de ningún archivo o carpeta.

#### Ejemplo 

Queremos duplicar y cambiar el nombre de un archivo en su propia carpeta

```4d
 var $o : Object
 $o:=New object
 var $path : Text
 $path:="C:\\MyDocs\\file.txt"
 
 $o:=Path to object($path)
 $o.name:=$o.name+"_copy"
 COPY DOCUMENT($path;Object to path($o))
```

#### Ver también 

[Convert path POSIX to system](convert-path-posix-to-system.md)  
[Convert path system to POSIX](convert-path-system-to-posix.md)  
[File](file.md)  
[Folder ](folder.md)  
[Path to object ](path-to-object.md)  
[Test path name](test-path-name.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1548 |
| Hilo seguro | &check; |



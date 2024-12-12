---
id: path-to-object
title: Path to object
slug: /commands/path-to-object
displayed_sidebar: docs
---

<!--REF #_command_.Path to object.Syntax-->**Path to object**  ( *Ruta* {; *tipoRuta*} ) : Object<!-- END REF-->
<!--REF #_command_.Path to object.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Ruta | Text | &#8594;  | Nombre de la ruta |
| tipoRuta | Integer | &#8594;  | Tipo de sintaxis de ruta: Sistema (por defecto) o Posix |
| Resultado | Object | &#8592; | Objeto que describe los contenidos de la ruta |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Path to object.Summary-->El comando **Path to object**  devuelve un objeto que contiene las propiedades específicas de la *ruta* que pasó en el parámetro.<!-- END REF--> 

De forma predeterminada, si omite el parámetro *tipoRuta*, se asumirá que pasó una *ruta* del sistema que contiene separadores del sistema ("\\" en Windows, ":" en macOS). Si pasó una *ruta* Posix que contiene separadores de Posix ("/") o desea expresar el tipo de ruta, pase una de las siguientes constantes en el parámetro *tipoRuta*:

| Constante      | Tipo         | Valor | Comentario                                                                                   |
| -------------- | ------------ | ----- | -------------------------------------------------------------------------------------------- |
| Path is POSIX  | Entero largo | 1     | La ruta se expresa utilizando la sintaxis de Posix                                           |
| Path is system | Entero largo | 0     | (Por defecto) La ruta se expresa utilizando la sintaxis actual del sistema (Windows o macOS) |

El comando devuelve un objeto resultante de analizar la *ruta*. Las siguientes propiedades están disponibles:

| **Propiedad** | **Tipo** | **Descripción**                                                                                                 |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| parentFolder  | Texto    | Información del directorio para la ruta. El último caracter es siempre un separador de carpetas.                |
| name          | Texto    | Nombre del archivo o carpeta final de la ruta especificada, sin extensión.                                      |
| extension     | Texto    | Extensión del nombre final de archivo o carpeta. Siempre comienza por ".". Cadena vacía "" si no hay extensión. |
| isFolder      | Booleano | True si el nombre es un nombre de carpeta, de lo contrario, de lo contrario (el valor predeterminado es false)  |

Se supondrá que pasó una ruta de carpeta si el último carácter de la *ruta* es un separador correspondiente al tipo de ruta (por ejemplo, "\\" en Windows). De lo contrario, se supondrá que pasó un nombre de archivo.   
La extensión, si no está vacía, se devuelve independientemente de si la ruta representa un archivo o una carpeta. En este caso, debe concatenar el nombre y la extensión para recuperar el nombre completo.  
  
Tenga en cuenta que **Path to object**  solo maneja cadenas. Tampoco comprueba si la ruta es válida con respecto al tipo de ruta, ni a la existencia real de ningún archivo o carpeta. 

#### Ejemplo 1 

Los siguientes ejemplos muestran varios resultados con rutas de archivos:

```4d
 var $o : Object
 $o:=Path to object("C:\\first\\second\\fileZ") //en Windows
  //$o.parentFolder="C:\\first\\second\\"
  //$o.name="fileZ"
  //$o.extension=""
  //$o.isFolder=false
```

```4d
 var $o : Object
 $o:=Path to object("osx:Users:john:Documents:Comments.text)  //en macOS
  //$o.parentFolder="osx:Users:john:Documents:"
  //$o.name="Comments"
  //$o.extension=".text"
  //$o.isFolder=false
```

```4d
 var $o : Object
 $o:=Path to object("\\images\\jan\\pict1.png";Path is system) //en Windows
  //$o.parentFolder="\\images\\jan\\"
  //$o.name="pict1"
  //$o.extension=".png"
  //$o.isFolder=false
```

Definiendo una ruta a una carpeta:

```4d
 var $o : Object
 $o:=Path to object("osx:Users:oscargoldman:Desktop:Databases:") //macOS
  //$o.parentFolder="osx:Users:oscargoldman:Desktop:"
  //$o.name="Databases"
  //$o.extension=""
  //$o.isFolder=True
```

```4d
 var $o : Object
 $o:=Path to object("C:\\4D\\Main\\216410\\64\\4D\\4D.user\\")  //windows
  //$o.parentFolder="C:\\4D\\Main\\216410\\64\\4D\\"
  //$o.name="4D"
  //$o.extension=".user"
  //$o.isFolder=true
```

```4d
 var $o : Object
 $o:=Path to object("/first/second.bundle/";Path is POSIX)
  //$o.parentFolder="/first/"
  //$o.name="second"
  //$o.extension=".bundle"
  //$o.isFolder=true
```

Si la ruta es un directorio raíz, *parentFolder* está vacío:

```4d
 var $o : Object
 $o:=Path to object("C:\\")  //en windows
  //$o.parentFolder=""
  //$o.name="c:"
  //$o.extension=""
  //$o.isFolder=true
```

```4d
 var $o : Object
 $o:=Path to object("osx:") //en macOS
  //$o.parentFolder=""
  //$o.name="osx"
  //$o.extension=""
  //$o.isFolder=true
```

Si la última parte de la ruta es ".something", se considera como un nombre de archivo:

```4d
 var $o : Object
 $o:=Path to object("/folder/.invisible";Path is POSIX)
  //$o.parentFolder="/folder/"
  //$o.name=".invisible"
  //$o.extension=""
  //$o.isFolder=false
```

#### Ejemplo 2 

Puede combinar este comando con [Object to path](object-to-path.md) para cambiar el nombre de un archivo en una ruta:

```4d
 var $o : Object
 var $path : Text
 $o:=Path to object("C:\\4D\\resources\\images\\4D.jpg")
  //$o.parentFolder="C:\\4D\\resources\\images\\"
  //$o.name="4D"
  //$o.extension=".jpg"
  //$o.isFolder=false
 
 $o.name:="4DOld"
 $path:=Object to path($o)
  //$path="C:\4D\resources\images\4DOld.jpg"
```

#### Ejemplo 3 

Desea saber la cantidad de subcarpetas en una ruta:

```4d
 var $o : Object
 var $path : Text
 var $vCount : Integer
 $path:=Select folder //let the user select a folder
 $o:=Path to object($path)
 Repeat
    $o:=Path to object($o.parentFolder)
    $vCount:=$vCount+1
 Until($o.parentFolder="")
 ALERT("The path depth is: "+String($count))
```

#### Ver también 

[Convert path POSIX to system](convert-path-posix-to-system.md)  
[Convert path system to POSIX](convert-path-system-to-posix.md)  
[File](file.md)  
[Folder ](folder.md)  
[Object to path](object-to-path.md)  
[Test path name](test-path-name.md)  
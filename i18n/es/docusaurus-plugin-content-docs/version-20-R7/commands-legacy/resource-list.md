---
id: resource-list
title: RESOURCE LIST
slug: /commands/resource-list
displayed_sidebar: docs
---

<!--REF #_command_.RESOURCE LIST.Syntax-->**RESOURCE LIST** ( *resTipo* ; *resNums* ; *resNoms* {; *resArchivo*} )<!-- END REF-->
<!--REF #_command_.RESOURCE LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| resTipo | Text | &#8594;  | Tipo de recurso (4 caracteres) |
| resNums | Integer array | &#8592; | Números de recursos de este tipo |
| resNoms | Text array | &#8592; | Nombres de los recursos de este tipo |
| resArchivo | Time | &#8594;  | Número de referencia del archivo de recursos o Todos los archivos de recursos abiertos, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RESOURCE LIST.Summary-->El comando RESOURCE LIST llena los arrays *resNums* y *resNoms* con los números y los nombres de los recursos cuyo tipo se pasa en *resTipo*.<!-- END REF--> 

**Importante:** debe pasar una cadena de 4 caracteres en *resTipo*.

Si pasa un número de referencia de archivo de recursos válido en el parámetro opcional *resArchivo*, sólo se listan los recursos presentes en este archivo. Si no pasa *resArchivo*, se listan todos los recursos de los archivos de recursos abiertos. 

Si predeclara los arrays antes de llamar a RESOURCE LIST, debe predeclarar *resNums* como un array de tipo Entero largo y *resNoms* como un array de tipo Alfa o Texto. Si no predecla los arrays, el comando crea *resNums* como un array de tipo Entero largo y *resNoms* como un array de tipo Texto.

Después de la llamada, puede probar el número de recursos encontrados aplicando el comando [Size of Array](size-of-array.md "Size of Array") al array *resNums* o *resNoms*.

#### Ejemplo 1 

El siguiente ejemplo llena los arrays *$alResNum* y *$atResNom* con los números y los nombres de recursos de tipo lista de cadenas presentes en el archivo de estructura de la base:

```4d
 If(On Windows)
    $vhEstructuraResArchivo:=Open resource file(Replace string(Structure file;".4DB";".RSR"))
 Else
    $vhEstructuraResArchivo:=Open resource file(Structure file)
 End if
 If(OK=1)
    RESOURCE LIST("STR#";$alResNum;$atResNom;$vhEstructuraResArchivo)
 End if
```

#### Ejemplo 2 

El siguiente ejemplo copia los recursos imagen presentes en todos los archivos de recursos abiertos en la librería de imágenes de la base:

```4d
 RESOURCE LIST("PICT";$alResNum;$atResNom)
 Open window(50;50;550;120;5;"Copia de los recursos PICT...")
 For($vlElem;1;Size of array($alResNum))
    GET PICTURE RESOURCE($alResNum{$vlElem};$vgImagen)
    If(OK=1)
       $vsNombre:=$atResNom{$vlElem}
       If($vsNombre="")
          $vsNombre:="PICT resNum="+String($alResNum{$vlElem})
       End if
       ERASE WINDOW
       GOTO XY(2;1)
       MESSAGE("Añada la imagen “"+$vsNombre+"”a la librería de imágenes de la base.")
       SET PICTURE TO LIBRARY($vgImagen;$alResNum{$vlElem};$vsNombre)
    End if
 End for
 CLOSE WINDOW
```

#### Ver también 

[RESOURCE TYPE LIST](resource-type-list.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 500 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||



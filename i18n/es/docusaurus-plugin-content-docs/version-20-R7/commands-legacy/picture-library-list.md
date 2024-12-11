---
id: picture-library-list
title: PICTURE LIBRARY LIST
slug: /commands/picture-library-list
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE LIBRARY LIST.Syntax-->**PICTURE LIBRARY LIST** ( *refsImag* ; *nomsImag* )<!-- END REF-->
<!--REF #_command_.PICTURE LIBRARY LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refsImag | Integer array | &#8592; | Números de referencia de las imágenes de la librería de imágenes |
| nomsImag | Text array | &#8592; | Nombres de las imágenes de la librería de imágenes |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PICTURE LIBRARY LIST.Summary-->El comando PICTURE LIBRARY LIST devuelve los números de referencia y los nombres de las imágenes almacenadas en la librería de imágenes de la base de datos.<!-- END REF--> 

Después de llamarlo, usted recupera los números de referencia en el array *refsImag* y los nombres en el array *nomsImag*. Los dos arrays están sincronizados: el elemento n de *refsImag* es el número de referencia de la imagen de la librería cuyo nombre es devuelto en el elemento n de *nomsImagenes*.

Si es necesario, el comando crea y dimensiona automáticamente los arrays *refsImagenes* y *nomsImagenes.*

La longitud máxima del nombre de una imagen de la librería es de 255 caracteres. 

Si la librería de imágenes está vacía, los dos arrays devueltos estarán vacíos. 

Para obtener el número de imágenes almacenadas actualmente en la librería de imágenes, utilice el comando [Size of Array](size-of-array.md "Size of Array") para obtener el tamaño de uno de los dos arrays.

#### Ejemplo 1 

El siguiente código devuelve el catálogo de la librería de imágenes en los arrays *alRefImag* y *asNomImag*:

```4d
 PICTURE LIBRARY LIST(alRefImag;asNomImag)
```

#### Ejemplo 2 

El siguiente ejemplo prueba si la librería de imágenes está vacía o no:

```4d
 PICTURE LIBRARY LIST(alRefImag;asNomImag)
 If(Size of array(alRefImag)=0)
    ALERT("La librería de imágenes está vacía.")
 Else
    ALERT("La librería de imágenes contiene "+String(Size of array(alRefImag))+" imágenes.")
 End if
```

#### Ejemplo 3 

El siguiente ejemplo exporta la librería de imágenes a un documento almacenado en el disco:

```4d
 PICTURE LIBRARY LIST($alPicRef;$asPicName)
 $vlNbPictures:=Size of array($alPicRef)
 If($vlNbPictures>0)
    SET CHANNEL(12;"")
    If(OK=1)
       $vsTag:="4DV6PICTURELIBRARYEXPORT"
       SEND VARIABLE($vsTag)
       SEND VARIABLE($vlNbPictures)
       gError:=0
       For($vlPicture;1;$vlNbPictures)
          $vlPicRef:=$alPicRef{$vlPicture}
          $vsPicName:=$asPicName{$vlPicture}
          GET PICTURE FROM LIBRARY($alPicRef{$vlPicture};$vgPicture)
          If(OK=1)
             SEND VARIABLE($vlPicRef)
             SEND VARIABLE($vsPicName)
             SEND VARIABLE($vgPicture)
          Else
             $vlPicture:=$vlPicture+1
             gError:=-108
          End if
       End for
       SET CHANNEL(11)
       If(gError#0)
          ALERT("La librería de imágenes no pudo exportarse, inténtelo con más memoria.")
          DELETE DOCUMENT(Document)
       End if
    End if
 Else
    ALERT("La librería de imágenes está vacía.")
 End if
```

#### Ver también 

[GET PICTURE FROM LIBRARY](get-picture-from-library.md)  
[REMOVE PICTURE FROM LIBRARY](remove-picture-from-library.md)  
[SET PICTURE TO LIBRARY](set-picture-to-library.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 564 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||



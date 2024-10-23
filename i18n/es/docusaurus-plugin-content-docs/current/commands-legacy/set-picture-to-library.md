---
id: set-picture-to-library
title: SET PICTURE TO LIBRARY
slug: /commands/set-picture-to-library
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE TO LIBRARY.Syntax-->**SET PICTURE TO LIBRARY** ( *imagen* ; *refImag* ; *nomImag* )<!-- END REF-->
<!--REF #_command_.SET PICTURE TO LIBRARY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| imagen | Picture | &#8594;  | Nueva imagen |
| refImag | Integer | &#8594;  | Número de referencia de la imagen en la librería de imágenes |
| nomImag | Text | &#8594;  | Nuevo nombre de la imagen |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SET PICTURE TO LIBRARY.Summary-->El comando SET PICTURE TO LIBRARY crea una nueva imagen o reemplaza una imagen existente en la librería de imágenes.<!-- END REF-->

Antes de llamar el comando, usted pasa:

* el número de referencia de la imagen en *refImag* (entre 1 y 32767 )
* la imagen misma en *imagen*.
* el nombre de la imagen en *nomImag* (longitud máxima: 255 caracteres).

Si hay una imagen en la librería de imágenes con el mismo número de referencia, su contenido será reemplazado y la imagen se renombra con los valores pasados en *imagen* y *nomImag.*  
  
Si no hay una imagen en la librería de imágenes con el número de referencia pasado en *refImag*, una nueva imagen se añade a la librería de imágenes.

**4D Server:** SET PICTURE TO LIBRARY no puede utilizarse dentro de un método ejecutado en el equipo servidor (procedimiento almacenado o trigger). Si llama SET PICTURE TO LIBRARY en un equipo servidor, no pasa nada, la llamada se ignora.

**Advertencia:** los objetos de estructura (elementos de listas jerárquicas, líneas de menú, etc.) pueden referirse a una imagen de la librería de imágenes. Sea prudente cuando modifique por programación una imagen de la librería de imágenes.

**Nota:** si pasa una imagen vacía en *imagen* o un valor negativo o nulo en *refImag*, el comando no hace nada.

#### Ejemplo 1 

Sin importar el contenido actual de la librería de imágenes, el siguiente ejemplo añade una nueva imagen a la librería buscando primero un número de referencia de una imagen única:

```4d
 PICTURE LIBRARY LIST($alRefImag;$asNomsImag)
 Repeat
    $vlRefImag:=1+Abs(Random)
 Until(Find in array($alRefImag;$vlRefImag)<0)
 SET PICTURE TO LIBRARY(vgImagen;$vlRefImag;"Nueva Imagen")
```

#### Ejemplo 2 

El siguiente ejemplo importa en la librería de imágenes las imágenes (almacenadas en un documento en disco) creadas por el tercer ejemplo del comando [PICTURE LIBRARY LIST](picture-library-list.md "PICTURE LIBRARY LIST"):

```4d
 SET CHANNEL(10;"")
 If(OK=1)
    RECEIVE VARIABLE($vsTag)
    If($vsTag="4DV6PICTURELIBRARYEXPORT")
       RECEIVE VARIABLE($vlNbImagenes)
       If($vlNbImagenes>0)
          For($vlImag;1;$vlNbImagenes)
             RECEIVE VARIABLE($vlPicRef)
             If(OK=1)
                RECEIVE VARIABLE($vsNomImag)
             End if
             If(OK=1)
                RECEIVE VARIABLE($vgImag)
             End if
             If(OK=1)
                SET PICTURE TO LIBRARY($vgImag;$vlRefImag;$vsNomImag)
             Else
                $vlImag:=$vlNbImagenes+1
                ALERT("Este archivo parece estar dañado.")
             End if
          End for
       Else
          ALERT("Este archivo parece estar dañado.")
       End if
    Else
       ALERT("El archivo “"+Document+"” no es un archivo de exportación de la librería de imágenes.")
    End if
    SET CHANNEL(11)
 End if
```

#### Gestión de errores 

Si no hay suficiente memoria para añadir la imagen a la librería de imágenes, se genera un error -108\. Note que los errores E/S también pueden ser generados (si por ejemplo el archivo de estructura está bloqueado). Puede interceptar estos errores con un método de gestión de errores.

#### Ver también 

[GET PICTURE FROM LIBRARY](get-picture-from-library.md)  
[PICTURE LIBRARY LIST](picture-library-list.md)  
[REMOVE PICTURE FROM LIBRARY](remove-picture-from-library.md)  
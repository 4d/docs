---
id: set-picture-metadata
title: SET PICTURE METADATA
slug: /commands/set-picture-metadata
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE METADATA.Syntax-->**SET PICTURE METADATA** ( *imagen* ; *nomMeta* ; *ContenidoMeta* {; *nomMeta2* ; *ContenidoMeta2* ; ... ; *nomMetaN* ; *ContenidoMetaN*} )<!-- END REF-->
<!--REF #_command_.SET PICTURE METADATA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| imagen | Picture | &#8594;  | Imagen cuyos metadatos quiere escribir |
| nomMeta | Text | &#8594;  | Nombre o ruta del bloque a escribir |
| ContenidoMeta | Variable | &#8594;  | Contenido del metadato |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET PICTURE METADATA.Summary-->El comando SET PICTURE METADATA permite escribir o modificar el contenido de los metadatos (o meta-etiquetas) presentes en *imagen* (campo o una variable imagen 4D), cuando son modificables.<!-- END REF--> 

Los metadatos son información adicional insertada en las imágenes. 4D permite manipular cuatro tipos de metadatos estándar: EXIF, GPS, IPTC y TIFF. 

**Nota:** para una descripción detallada de estos tipos de metadatos, puede consultar los siguientes documentos: <http://www.iptc.org/std/IIM/4.1/specification/IIMV4.1.pdf> (IPTC) y <http://exif.org/Exif2-2.PDF> (TIFF, EXIF y GPS). 

En el parámetro *nomMeta*, pase una cadena especificando el tipo de metadato a escribir o modificar. Puede pasar:

* una de las constantes del tema *Nombres de metadatos imágenes*. Este tema agrupa todas las etiquetas soportadas por 4D. Cada constante contiene una ruta de etiqueta (por ejemplo, "TIFF/DateTime"),
* el nombre de un bloque completo de metadatos ("TIFF", "EXIF", "GPS" o "IPTC"),
* una cadena vacía ("").

Pase los nuevos valores del metadato en el parámetro *contenidoMeta*:

* Si pasa una constante de ruta de etiqueta en *nomMeta*, en el parámetro de contenido puede pasar el valor a definir directamente o una de las constantes apropiadas del tema *Picture Metadata Values*.
* El valor puede ser de tipo Texto, Entero largo, Real, Fecha u Hora, de acuerdo al metadato especificado. Puede utilizar un array si el metadato contiene más de un valor. Si pasa una cadena, debe ser formateada en XML (estándar XMP). Puede pasar una cadena vacía ("") para borrar todo metadato existente. Si *nomMeta* está *indefinido*, se utiliza una cadena vacía.
* Si pasa un nombre de bloque o una cadena vacía en *nomMeta*, pase en *contenidoMeta* la referencia XML DOM del elemento que contiene los metadatos a definir. En el caso de una cadena vacía, todos los metadatos se modificarán.

**Atención:** ciertos metadatos están en modo sólo lectura y por lo tanto no pueden ser modificados por el comando **SET PICTURE METADATA**, por ejemplo TIFF XResolution/TIFF YResolution, EXIF Color Space or EXIF Pixel X Dimension/EXIF Pixel Y Dimension.

Bajo Windows, si ocurre un error durante la ejecución del comando, la variable *OK* toma el valor 0\. Note que bajo Mac OS, por razones técnicas, los errores de escritura de metadatos no se detectan. Por lo tanto este comando no modifica la variable *OK* bajo MacOS.

**Notas:**

* Sólo ciertos formatos de imágenes (específicamente JPEG y TIFF) soportan los metadatos. Por el contrario, los formatos tales como GIF o BMP no aceptan los metadatos. Cuando convierte una imagen con metadatos a un formato que no los soporta, se pierde la información.
* Bajo OS X versión 10.7 (Lion), un bug del framework nativo utilizado para la codificación y decodificación de los metadatos puede causar errores de precisión en las coordenadas de GPS. En este caso, se recomienda una actualización a OS X 10.8 (Mountain Lion) o 10.9 (Maverick).

#### Ejemplo 1 

Escritura de varios valores del metadato "Keywords" por medio de arrays:

```4d
 ARRAY TEXT($arrTkeywords;2)
 $arrTkeywords{1}:="Francia"
 $arrTkeywords{2}:="Europa"
 SET PICTURE METADATA(vPicture;IPTC keywords;$arrTkeywords)
```

#### Ejemplo 2 

Escritura del bloque GPS vía una referencia DOM:

```4d
 var $domMetas : Text
 $domMetas:=DOM Parse XML source("metas.xml")
 var $gpsRef : Text
 $gpsRef:=DOM Find XML element($domMetas;"Metadatas/GPS")
 If(OK=1)
    SET PICTURE METADATA(vImage;"GPS";$refGPS)
  //$gpsRef realmente apunta al elemento GPS
    ...
 End if
 DOM CLOSE XML($domMetas)
```

#### Nota 

Cuanto todos los metadatos se manipulan vía una referencia de elementos DOM, las etiquetas se guardan como atributos asociados a un elemento (hijo del elemento referenciado) cuyo nombre es el nombre del bloque (TIFF, IPTC, etc.). Cuando se manipula un bloque de metadatos específico, las etiquetas del bloque se almacenan como atributos directamente asociados al elemento referenciado por el comando. 

#### Ver también 

[GET PICTURE KEYWORDS](get-picture-keywords.md)  
[GET PICTURE METADATA](get-picture-metadata.md)  
*Nombres de metadatos imágenes*  
*Picture Metadata Values*  
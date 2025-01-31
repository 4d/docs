---
id: picture-codec-list
title: PICTURE CODEC LIST
slug: /commands/picture-codec-list
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE CODEC LIST.Syntax-->**PICTURE CODEC LIST** ( *arrayCodec* {; *arrayNoms*}{; *} )<!-- END REF-->
<!--REF #_command_.PICTURE CODEC LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrayCodec | Text array | &#8592; | Identificadores de codecs de imágenes disponibles |
| arrayNoms | Text array | &#8592; | Nombres de los codecs de imágenes |
| * | Operador | &#8594;  | Devuelve la lista de los codecs de lectura |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PICTURE CODEC LIST.Summary-->El comando PICTURE CODEC LIST llena el array *arrayCodec* con la lista de los identificadores de los codecs de imágenes que están disponibles en el equipo donde se ejecuta.<!-- END REF--> Esta lista incluye los codecs de los formatos de imágenes que son gestionados nativamente por 4D. 

Los identificadores de los codecs pueden devolverse en el array *arrayCodec* de las siguientes formas:

* como una extensión (por ejemplo, “.gif”)
* como un tipo Mime (por ejemplo, “Imagen/jpeg”)
**Nota de compatibilidad**: si QuickTime se ha activado en la base (ver la sección *Imágenes*), los códigos QuickTime de 4 caracteres también pueden ser devueltos (por ejemplo "PNTG").La forma devuelta por el comando depende del modo de declaración del codec al nivel del sistema operativo. El array opcional *arrayNoms* permite recuperar el nombre de cada codec. Estos nombres son más explícitos que los identificadores. Este array puede utilizarse, por ejemplo, para crear y mostrar un menú que liste los codecs disponibles.

Por defecto, si no pasa el parámetro *\**, el comando devuelve únicamente los codecs que pueden ser utilizados para codificar (escribir) las imágenes. Estos identificadores pueden utilizarse en el parámetro *formato* de los comandos de exportación de imágenes [WRITE PICTURE FILE](write-picture-file.md) y [PICTURE TO BLOB](picture-to-blob.md).  
 Si pasa el parámetro *\**, el comando también devuelve la lista de codecs utilizados para decodificar (leer) las imágenes. Las dos listas no son exclusivas, ciertos codecs de lectura y de escritura son idénticos. Los codecs destinados a la codificación de las imágenes pueden utilizarse para la decodificación. Por otra parte, los codecs de decodificación no necesariamente pueden utilizarse para la codificación. Por ejemplo, el codec ".jpg" se encontrará en ambas listas, mientras el ".xbmp" estará presente en la lista de codecs de lectura pero no en la de escritura.

#### Ver también 

*Imágenes*  
[Is picture file](is-picture-file.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 992 |
| Hilo seguro | &check; |



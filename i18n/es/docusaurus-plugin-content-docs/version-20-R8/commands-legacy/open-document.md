---
id: open-document
title: Open document
slug: /commands/open-document
displayed_sidebar: docs
---

<!--REF #_command_.Open document.Syntax-->**Open document** ( *doc* {; *tipo*}{; *modo*} ) : Time<!-- END REF-->
<!--REF #_command_.Open document.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| doc | Text | &#8594;  | Nombre del documento o Ruta de acceso completa al documento o Cadena vacía para mostrar la caja de diálogo |
| tipo | Text | &#8594;  | Lista de los tipos de documentos a filtrar o "*" para no filtrar los documentos |
| modo | Integer | &#8594;  | Modo de apertura del documento |
| Resultado | Time | &#8592; | Número de referencia del documento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Open document.Summary-->El comando Open document abre el documento cuyo nombre o ruta de acceso se pasa en *documento*.<!-- END REF--> 

Si pasa una cadena vacía en *document*, aparece una caja de diálogo estándar de apertura de archivos y el usuario puede seleccionar el documento a abrir. Si cancela el diálogo, no se abre el documento; Open document devuelve una referencia de documento nula y la variable OK toma el valor 0.

* Si el documento se abre correctamente, Open document devuelve su número de referencia y la variable OK toma el valor 1.
* Si el documento está abierto en lectura y se omite el parámetro *modo*, Open document abre el documento en modo lectura/escritura y la variable OK toma el valor 1.
* Si el documento ya está abierto en modo escritura/lectura y usted intenta abrirlo en modo Escritura, se genera el error (-43). Sin embargo puede abrirlo en modo lectura únicamente, luego la variable OK toma el valor 1.
* Si el documento no existe, se genera un error.

En el parámetro *elTipo*, pase el o los tipo(s) de archivo(s) que pueden ser seleccionados en la caja de diálogo de apertura. Puede pasar una lista de varios tipos separados por un ; (punto y coma). Para cada tipo definido, se añadirá una línea en el menú de elección del tipo de caja de diálogo.

Bajo Mac OS, puede pasar el tipo Mac OS clásico (TEXT, APPL, etc.), o un tipo UTI (Uniform Tipo Identifier). Los tipos UTIs son definidos por Apple para responder a las necesidades de estandarización de los tipos de archivos. Por ejemplo, "public.text" es el tipo UTI de los archivos de tipo texto. Para mayor información sobre los UTIs, consulte *Introduction to Uniform Type Identifiers Overview page* en el sitio web *developer.apple.com* (documentación en inglès). 

Bajo Windows, también puede pasar un tipo de archivo clásico Mac OS, 4D efectúa la correspondencia interna, o la extensión de los archivos (.txt, .exe, etc.). Note que bajo Windows, el usuario puede “forzar” la visualización de todos los tipos de archivos introduciendo \*.\* en la caja de diálogo. Sin embargo, en este caso, 4D llevará a cabo una verificación adicional de los tipos de archivos seleccionados: si el usuario selecciona un tipo de archivo no autorizado, el comando devuelve un error.  
Si no quiere restringir los archivos mostrados a uno o varios tipos, pase la cadena "\*" (asterisco) o ".\*" en *elTipo*.

El parámetro opcional *modo* permite definir el modo de apertura del archivo *documento*. Están disponibles cuatro modos de apertura. 4D ofrece las siguientes constantes predefinidas, ubicadas en el tema *Documentos sistema*:

| Constante      | Tipo         | Valor |
| -------------- | ------------ | ----- |
| Read and Write | Entero largo | 0     |
| Write Mode     | Entero largo | 1     |
| Read Mode      | Entero largo | 2     |
| Get Pathname   | Entero largo | 3     |

Si un documento está abierto, Open document se ubica inicialmente al comienzo del documento, mientras [Append document](append-document.md) se ubica al final del documento.

Una vez haya abierto un documento, puede leer y escribir en el documento utilizando los comandos [RECEIVE PACKET](receive-packet.md) y [SEND PACKET](send-packet.md) que puede combinar con los comandos [Get document position](get-document-position.md) y [SET DOCUMENT POSITION](set-document-position.md) para acceder directamente a cualquier parte del documento.

No olvide llamar finalmente a [CLOSE DOCUMENT](close-document.md) para el documento.

#### Ejemplo 1 

El siguiente ejemplo abre un documento existente llamado Note, escribe la cadena “Good-bye” en el documento y lo cierra. Todo contenido existente en el documento se sobrescribirá: 

```4d
 var vhDoc : Time
 vhDoc:=Open document("Note.txt";Read and Write) //Abrir el documento Note
 If(OK=1)
    SEND PACKET(vhDoc;"Good-bye") //Escribe una palabra en el documento
    CLOSE DOCUMENT(vhDoc) //Cierra el documento
 End if
```

#### Ejemplo 2 

Puede leer un documento incluso si está abierto en modo escritura:  

```4d
 vDoc:=Open document("PassFile";"TEXT") // El archivo está abierto
  // Antes de cerrar el archivo, es posible consultarlo en modo de solo lectura:
 vRef:=Open document("PassFile";"TEXT";Read Mode)
```

#### Variables y conjuntos del sistema 

Si el documento se abre correctamente, la variable sistema OK toma el valor 1; de lo contrario, toma el valor 0\. Después de la llamada, la variable sistema Document contiene el nombre completo del documento.

Si pasa el valor 3 en *modo*, la función devuelve ?00:00:00? (sin referencia de documento). El documento no se abre pero las variables sistema Document y OK se actualizan:

* OK toma el valor 1.
* Document contiene la ruta de acceso y el nombre del archivo *document*.

**Nota:** si no se encuentra el archivo definido en *documento* o si pasa una cadena vacía en *documento*, aparece una caja de diálogo de apertura de archivos. Si el usuario elije un documento y hace clic en el botón OK, *documento* define la ruta al documento seleccionado por el usuario y OK toma el valor 1\. Si el usuario hace clic en el botón Cancelar, OK toma el valor 0.

#### Ver también 

[Append document](append-document.md)  
[Create document](create-document.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 264 |
| Hilo seguro | &check; |
| Modifica variables | OK, Document, error |



---
id: create-document
title: Create document
slug: /commands/create-document
displayed_sidebar: docs
---

<!--REF #_command_.Create document.Syntax-->**Create document** ( *doc* {; *tipo*} ) : Time<!-- END REF-->
<!--REF #_command_.Create document.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| doc | Text | &#8594;  | Nombre del documento o Ruta de acceso completa del documento o Cadena vacía para mostrar caja de diálogo estándar de guardar archivos |
| tipo | Text | &#8594;  | Lista de los tipos de documentos a filtrar o "*" para no filtrar los documentos |
| Resultado | Time | &#8592; | Número de referencia del documento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Create document.Summary-->El comando Create document crea un nuevo documento y devuelve su número de referencia.<!-- END REF--> 

Pase el nombre o ruta completa del nuevo documento *documento*. Si *documento* ya existe en el disco, se sobrescribe. Sin embargo, si *documento* está bloqueado o abierto, se genera un error. 

Si pasa una cadena vacía en *documento*, aparece una caja de diálogo estándar de registro de archivos y el usuario puede especifica el nombre del documento que quiere crear. Si cancela el diálogo, no se crea el documento; Create document devuelve una referencia de documento nula y la variable OK toma el valor 0.

Si el documento se crea correctamente y se abre, Create document devuelve su número de referencia y la variable OK toma el valor 1\. El documento de la variable sistema Document se actualiza y devuelve la ruta de acceso completa del documento creado. 

Create document crea por defecto un documento de tipo .TXT (Windows) o TEXT (Macintosh). Para crear otro tipo de documento, pase el parámetro *elTipo*.

En el parámetro *elTipo*, puede pasar uno o varios tipos de archivo con el fin de configurar la lista de tipos autorizados en la caja de diálogo. Puede pasar una lista de varios tipos separados por un ; (punto y coma). Para cada tipo definido, se añadirá una línea al menú de elección del tipo de caja de diálogo. 

Bajo Mac OS, puede pasar un tipo Mac OS clásico (TEXT, APPL, etc.), o un tipo UTI (Uniform Tipo Identifier). Los tipos UTIs son definidos por Apple para cumplir con las necesidades de estandarización de tipos de archivos. Por ejemplo, "public.text" es el tipo UTI de los archivos de tipo texto. Para mayor información sobre UTIs, consulte la siguiente dirección: *https://developer.apple.com/library/mac/#documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html* (documentación en inglés).   
  
Bajo Windows, puede pasar igualmente un tipo de archivo clásico Mac OS, 4D efectúa la correspondencia internamente, o la extensión de archivos (.txt, .exe, etc.). Note que bajo Windows, el usuario puede “forzar” la visualización de todos los tipos de archivos introduciendo \*.\* en la caja de diálogo. Sin embargo, en este caso, 4D efectuará una verificación suplementaria de los tipos de archivos seleccionados: si el usuario selecciona un tipo de archivo no autorizado, el comando devuelve un error.  
  
Si no quiere restringir los archivos mostrados a uno o a más tipos, pase "\*" (asterisco) o ".\*" en *elTipo*. 

En Windows pase una extensión de archivo Windows o un tipo de archivo Mac OS asociado con la ayuda del comando *\_o\_MAP FILE TYPES*. Si quiere crear un documento sin extensión, un documento con varias extensiones, o un documento con una extensión de más de tres caracteres, no utilice el parámetro *elTipo* y pase el nombre completo en *documento* (ver ejemplo 2).

Una vez haya creado y abierto un documento, puede escribir o leer los valores del documento utilizando los comandos [RECEIVE PACKET](receive-packet.md) y [SEND PACKET](send-packet.md) que puede combinar con los comandos [Get document position](get-document-position.md) y [SET DOCUMENT POSITION](set-document-position.md) para acceder directamente a ciertas partes del documento.

No olvide llamar finalmente a [CLOSE DOCUMENT](close-document.md) para el documento.

#### Ejemplo 1 

El siguiente ejemplo crea y abre un nuevo documento llamado Nota, escribe la cadena “Hola” y cierra el documento:

```4d
 var vhDoc : Time
 vhDoc:=Create document("Nota.txt") // Crear un nuevo documento llamado Nota
 If(OK=1)
    SEND PACKET(vhDoc;"Hola") // Escribir una palabra en el documento
    CLOSE DOCUMENT(vhDoc) // Cerrar el documento
 End if
```

#### Ejemplo 2 

El siguiente ejemplo crea documentos con extensiones que no son estándar en Windows:

```4d
 $vtMiDoc:=Create document("Doc.ext1.ext2") //Varias extensiones
 $vtMiDoc:=Create document("Doc.shtml") //Extensión larga
 $vtMiDoc:=Create document("Doc.") //Sin extensión (el punto "." es obligatorio)
```

#### Variables y conjuntos del sistema 

Si el documento se crea correctamente, la variable sistema OK toma el valor 1 y la variable sistema Document contiene la ruta completa y el nombre del archivo *documento*. 

#### Ver también 

[Append document](append-document.md)  
[Open document](open-document.md)  
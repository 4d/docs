---
id: append-document
title: Append document
slug: /commands/append-document
displayed_sidebar: docs
---

<!--REF #_command_.Append document.Syntax-->**Append document** ( *doc* {; *tipo*} ) : Time<!-- END REF-->
<!--REF #_command_.Append document.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| doc | Text | &#8594;  | Nombre del documento o Ruta de acceso completa al documento o Cadena vacía para mostrar la caja de diálogo estándar de apertura de archivos |
| tipo | Text | &#8594;  | Lista de tipos de documentos a filtrar o "*" para no filtrar los documentos |
| Resultado | Time | &#8592; | Número de referencia del documento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Append document.Summary-->El comando Append document hace lo mismo que [Open document](open-document.md "Open document"): permite abrir un documento en disco.<!-- END REF--> 

La única diferencia es que Append document define la ubicación del archivo al final del documento mientras que [Open document](open-document.md "Open document") lo hace al principio.

Para mayor información consulte la descripción del comando Open document.

#### Ejemplo 

El siguiente ejemplo abre un documento existente llamado Nota, añade la cadena “y hasta pronto” seguida por un retorno de carro al final del documento, y cierra el documento. Si el documento ya contiene la cadena “Adiós”, el documento contendrá ahora la cadena “Adiós y hasta pronto”, seguido por un retorno de carro:

```4d
 var vhDocRef : Time
 vhDocRef:=Append document("Nota.txt") // Abrir el documento Nota
 SEND PACKET(vhDocRef;" y hasta pronto"+Char(13)) // Añadir la cadena
 CLOSE DOCUMENT(vhDocRef) // Cerrar el documento
```

#### Ver también 

[Create document](create-document.md)  
[Open document](open-document.md)  
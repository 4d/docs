---
id: close-document
title: CLOSE DOCUMENT
slug: /commands/close-document
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE DOCUMENT.Syntax-->**CLOSE DOCUMENT** ( *docRef* )<!-- END REF-->
<!--REF #_command_.CLOSE DOCUMENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Número de referencia del documento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CLOSE DOCUMENT.Summary-->CLOSE DOCUMENT cierra el documento especificado por *docRef*.<!-- END REF-->

Cerrar un documento es la única forma de asegurar que los datos escritos en el archivo sean guardados. Debe cerrar todos los documentos abiertos por los comandos [Open document](open-document.md "Open document"), [Create document](create-document.md "Create document") o [Append document](append-document.md "Append document").

#### Ejemplo 

El siguiente ejemplo permite al usuario crear un nuevo documento, escribe la cadena “Hola” y cierra el documento:

```4d
 var vhDocRef : Time
 vhDocRef:=Create document("")
 If(OK=1)
    SEND PACKET(vhDocRef;"Hola") // Escribe una palabra en el documento
    CLOSE DOCUMENT(vhDocRef) // Cierra el documento
 End if
```

#### Ver también 

[Append document](append-document.md)  
[Create document](create-document.md)  
[Open document](open-document.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 267 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||



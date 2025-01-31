---
id: send-packet
title: SEND PACKET
slug: /commands/send-packet
displayed_sidebar: docs
---

<!--REF #_command_.SEND PACKET.Syntax-->**SEND PACKET** ( {*docRef* ;} *paquete* )<!-- END REF-->
<!--REF #_command_.SEND PACKET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Número de referencia del documento o canal actual (puerto serial o documento) |
| paquete | Text, Blob | &#8594;  | Cadena o BLOB a enviar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SEND PACKET.Summary-->El comando SEND PACKET envía un paquete a un puerto serial o a un documento.<!-- END REF--> Si *docRef* se especifica, el paquete se escribe en el documento referenciado por *docRef*. Si *docRef* no se especifica, el paquete se escribe para el puerto serial o documento previamente abierto por el comando [SET CHANNEL](set-channel.md). 

Un *paquete* es sólo una serie simple de datos, generalmente una cadena de caracteres.

También puede pasar un BLOB en *paquete*. Esto le permite evitar las restricciones relacionadas con la codificación de los caracteres enviados en modo texto (ver ejemplo 2).

**Nota:** cuando pasa un BLOB en *paquete*, el comando no tiene en cuenta ningún conjunto de caracteres definido por el comando [USE CHARACTER SET](use-character-set.md). El BLOB se envía sin ninguna modificación.

Antes de utilizar SEND PACKET, debe abrir un puerto serial o un documento con [SET CHANNEL](set-channel.md), o abrir un documento con uno de los comandos de gestión de documentos.

Cuando escribe un documento, el primer SEND PACKET comienza a escribir al comienzo del documento a menos que el documento hubiera sido abierto con [USE CHARACTER SET](use-character-set.md). Hasta el momento en que el documento se cierra, cada paquete subsiguiente se añade a los paquetes enviados anteriormente.

**Nota:** este comando es útil para un documento abierto con [SET CHANNEL](set-channel.md). Por otra parte, para un documento abierto con [Open document](open-document.md), [Create document](create-document.md) o [Append document](append-document.md), usted puede utilizar los comandos [Get document position](get-document-position.md) y [SET DOCUMENT POSITION](set-document-position.md) para obtener y cambiar la ubicación en el documento donde ocurrirá la próxima escritura (SEND PACKET) o lectura ([RECEIVE PACKET](receive-packet.md)).

#### Ejemplo 1 

El siguiente ejemplo escribe datos de campos en un documento. Escribe los campos como campos de longitud fija. Si un campo es de longitud menor a la especificada, el campo se llena con espacios. (es decir, se añaden espacios para alcanzar la longitud especificada.) Aunque el uso de campos de longitud fija es un método ineficiente de almacenamiento de datos, algunos sistemas informáticos y ciertas aplicaciones todavía lo utilizan:

```4d
 $vhDocRef :=Create document("") // Creación de un documento
 If(OK=1) // ¿Se creó el documento?
    For($vlRegistro;1;Records in selection([Personas])) // Bucle para cada registro
  // Envío de un paquete creado a partir de una cadena de 15 espacios que contiene el campo Nombre
       SEND PACKET($vhDocRef;Change string(15*Char(SPACE);[Personas]Nombre;1))
  // Envío de un segundo paquete creado a partir de una cadena de 15 espacios que contiene el campo Apellido
  // Este podría estar en el primer SEND PACKET, pero se separa por claridad
       SEND PACKET($vhDocRef;Change string(15*Char(SPACE);[Personas]Apellido;1))
       NEXT RECORD([Personas])
    End for
  // Envío de Char(26), utilizado como marcador de fin de registro por algunos ordenadores
    SEND PACKET($vhDocRef;Char(SUB ASCII code))
    CLOSE DOCUMENT($vhDocRef) // Cierre del documento
 End if
```

#### Ejemplo 2 

Este ejemplo ilustra el envío y recuperación de caracteres extendidos vía un BLOB en un documento:

```4d
 var $enviar_blob : Blob
 var $recibir_blob : Blob
 TEXT TO BLOB("âzértÿ";$enviar_blob;UTF8 text without length)
 SET BLOB SIZE($enviar_blob;16;255)
 $enviar_blob{6}:=0
 $enviar_blob{7}:=1
 $enviar_blob{8}:=2
 $enviar_blob{9}:=3
 $enviar_blob{10}:=0
 $vlDocRef:=Create document("blob.test")
 If(OK=1)
    SEND PACKET($vlDocRef;$enviar_blob)
    CLOSE DOCUMENT($vlDocRef)
 End if
 $vlDocRef=Open document(document)
 If(OK=1)
    RECEIVE PACKET($vlDocRef;$recibir_blob;65536)
    CLOSE DOCUMENT($vlDocRef)
 End if
```

#### Ver también 

[Get document position](get-document-position.md)  
[RECEIVE PACKET](receive-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 103 |
| Hilo seguro | &check; |



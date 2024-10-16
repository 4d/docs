---
id: send-record
title: SEND RECORD
slug: /commands/send-record
displayed_sidebar: docs
---

<!--REF #_command_.SEND RECORD.Syntax-->**SEND RECORD** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.SEND RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual enviar el registro actual o tabla por defecto, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SEND RECORD.Summary-->SEND RECORD envía el registro actual de *tabla* al puerto serial o a un documento abierto por el comando [SET CHANNEL](set-channel.md "SET CHANNEL").<!-- END REF--> El registro se envía con un formato interno especial que sólo puede ser leído por [RECEIVE RECORD](receive-record.md "RECEIVE RECORD"). Si no existe un registro actual, SEND RECORD no tiene efecto.

Se envía el registro completo. Esto significa que todos los subregistros, imágenes y BLOBs almacenados en el registro también son enviados. 

**Importante:** cuando los registros se envían y recuperan utilizando SEND RECORD y [RECEIVE RECORD](receive-record.md "RECEIVE RECORD"), la estructura de la tabla fuente y la estructura de la tabla de destino deben ser compatibles. Si no lo son, 4D convertirá los valores de acuerdo a las definiciones de la tabla cuando se ejecute [RECEIVE RECORD](receive-record.md "RECEIVE RECORD").

**Nota:** si envía un registro a un documento utilizando este comando, el documento debe haber sido abierto utilizando el comando [SET CHANNEL](set-channel.md "SET CHANNEL"). No es posible utilizar SEND RECORD con un documento abierto con [Open document](open-document.md "Open document"), [Append document](append-document.md "Append document") o [Create document](create-document.md "Create document").

**Nota de compatibilidad**: a partir de la versión 11 de 4D este comando no soporta subtablas.

#### Ejemplo 

Ver el ejemplo del comando [RECEIVE RECORD](receive-record.md "RECEIVE RECORD").

#### Ver también 

[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[SEND VARIABLE](send-variable.md)  
---
id: send-variable
title: SEND VARIABLE
slug: /commands/send-variable
displayed_sidebar: docs
---

<!--REF #_command_.SEND VARIABLE.Syntax-->**SEND VARIABLE** ( *variable* )<!-- END REF-->
<!--REF #_command_.SEND VARIABLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | Variable a enviar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SEND VARIABLE.Summary-->SEND VARIABLE envía *variable* al documento o puerto serial previamente abierto por [SET CHANNEL](set-channel.md "SET CHANNEL").<!-- END REF--> La variable se envía con un formato interno especial que puede ser leído sólo por [RECEIVE VARIABLE](receive-variable.md). SEND VARIABLE envía la variable completa (incluyendo su tipo y valor).

**Notas:**

1. Si envía una variable a un documento utilizando este comando, el documento debe haber sido abierto por el comando [SET CHANNEL](set-channel.md "SET CHANNEL"). No puede utilizar SEND VARIABLE con un documento abierto con [Open document](open-document.md "Open document"), [Append document](append-document.md "Append document") o [Create document](create-document.md "Create document").
2. Este comando no soporta variables de tipo Array. Si quiere enviar y recibir arrays de un documento o un puerto serial, utilice los nuevos *comandos BLOB* introducidos en la versión 6.

#### Ejemplo 

Ver el ejemplo del comando [RECEIVE RECORD](receive-record.md "RECEIVE RECORD").

#### Ver también 

[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[SEND RECORD](send-record.md)  
[SET CHANNEL](set-channel.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 80 |
| Hilo seguro | &check; |



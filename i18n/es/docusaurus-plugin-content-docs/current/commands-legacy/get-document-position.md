---
id: get-document-position
title: Get document position
slug: /commands/get-document-position
displayed_sidebar: docs
---

<!--REF #_command_.Get document position.Syntax-->**Get document position** ( *docRef* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Get document position.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| docRef | Time | &#x1F852; | Número de referencia del documento |
| Resultado | Real | &#x1F850; | Posición en el archivo (expresada en bytes) a partir del inicio del archivo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get document position.Summary-->Este comando sólo funciona en un documento abierto cuyo número de referencia se pasa en el parámetro *docRef*.<!-- END REF--> 

Get document position devuelve la posición, a partir del inicio del documento, donde ocurrirá la próxima lectura ([RECEIVE PACKET](receive-packet.md "RECEIVE PACKET")) o escritura ([SEND PACKET](send-packet.md "SEND PACKET")).

#### Ver también 

[RECEIVE PACKET](receive-packet.md)  
[SEND PACKET](send-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  
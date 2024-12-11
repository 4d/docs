---
id: get-document-position
title: Get document position
slug: /commands/get-document-position
displayed_sidebar: docs
---

<!--REF #_command_.Get document position.Syntax-->**Get document position** ( *docRef* ) : Real<!-- END REF-->
<!--REF #_command_.Get document position.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Número de referência de documento |
| Resultado | Real | &#8592; | Posição do arquivo (expressa em bytes) a partir do início do arquivo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get document position.Summary-->Este comando apenas funciona em um documento aberto cujo número de referência se passa no parâmetro *docRef*.<!-- END REF--> 

Get document position devolve a posição, a partir do início do documento, onde ocorrerá a próxima leitura ([RECEIVE PACKET](receive-packet.md)) ou escrita ([SEND PACKET](send-packet.md)).

#### Ver também 

[RECEIVE PACKET](receive-packet.md)  
[SEND PACKET](send-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 481 |
| Thread-seguro | &check; |
| Proibido no servidor ||



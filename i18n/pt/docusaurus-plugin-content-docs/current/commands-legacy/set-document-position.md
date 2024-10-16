---
id: set-document-position
title: SET DOCUMENT POSITION
slug: /commands/set-document-position
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT POSITION.Syntax-->**SET DOCUMENT POSITION** ( *docRef* ; *offset* {; *ancora*} )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT POSITION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Número de referência de documento |
| offset | Real | &#8594;  | Posição de arquivo (expresso em bytes) |
| ancora | Integer | &#8594;  | 1 = em relação ao começo do arquivo 2= em relação ao final do arquivo 3= em relação a posição atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET DOCUMENT POSITION.Summary-->Este comando funciona apenas em um documento aberto cujo número de referência é passado em *docRef*.<!-- END REF-->

SET DOCUMENT POSITION define a posição que se passa em *offset* onde ocorrerá a próxima leitura ([RECEIVE PACKET](receive-packet.md)) ou escrita ([SEND PACKET](send-packet.md)).  

Se omite o parâmetro opcional *ancora*, a posição é relativa ao início do documento. Se especificar o parâmetro *ancora*, passe um dos valores listados anteriormente.  
  
 Dependendo da âncora pode passar valores positivos ou negativos em offset.

#### Ver também 

[Get document position](get-document-position.md)  
[RECEIVE PACKET](receive-packet.md)  
[SEND PACKET](send-packet.md)  
---
id: set-document-size
title: SET DOCUMENT SIZE
slug: /commands/set-document-size
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT SIZE.Syntax-->**SET DOCUMENT SIZE** ( *docRef* ; *tamanho* )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT SIZE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Número de referência de documento |
| tamanho | Real | &#8594;  | Novo tamanho expresso em bytes |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET DOCUMENT SIZE.Summary-->O comando SET DOCUMENT SIZE define o tamanho de um documento para o número de bytes que são passados em *tamanho*.<!-- END REF-->  

Se o documento está aberto, passe seu número de referencia em *docRef*.  
  
Em Macintosh, é modificado o tamanho do data fork do documento

#### Ver também 

[Get document position](get-document-position.md)  
[Get document size](get-document-size.md)  
[SET DOCUMENT POSITION](set-document-position.md)  
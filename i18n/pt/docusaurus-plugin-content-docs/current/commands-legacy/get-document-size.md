---
id: get-document-size
title: Get document size
slug: /commands/get-document-size
displayed_sidebar: docs
---

<!--REF #_command_.Get document size.Syntax-->**Get document size** ( *documento* {; *} ) -> Resultado<!-- END REF-->
<!--REF #_command_.Get document size.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Text, Time | &srarr; | Número de referência de documento ou nome do documento |
| * | Operador | &srarr; | Apenas em Mac OS :  se omitido, tamanho do data fork;  se especificado, tamanho do resource fork |
| Resultado | Real | &larr; | Tamanho (expresso em bytes) do documento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get document size.Summary-->O comando Get document size retorna o tamanho de um documento, expresso em bytes.<!-- END REF-->  

Se o documento estiver aberto, passe seu número de referência em *documento*.  
Se o documento não estiver aberto, passe seu nome ou rota em *documento*.  
  
Em Macintosh, se não passa o parâmetro opcional *\**, se retorna o tamanho do data fork. Se passa o parâmetro *\**, se retorna o tamanho do resource fork.

#### Ver também 

[Get document position](get-document-position.md)  
[SET DOCUMENT POSITION](set-document-position.md)  
[SET DOCUMENT SIZE](set-document-size.md)  
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
| documento | String, refDoc | &#x1F852; | Número de referência de documento ou nome do documento |
| * | Operador | &#x1F852; | Apenas em Mac OS :  se omitido, tamanho do data fork;  se especificado, tamanho do resource fork |
| Resultado | Real | &#x1F850; | Tamanho (expresso em bytes) do documento |

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
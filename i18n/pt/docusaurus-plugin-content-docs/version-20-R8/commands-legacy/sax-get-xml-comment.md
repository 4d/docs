---
id: sax-get-xml-comment
title: SAX GET XML COMMENT
slug: /commands/sax-get-xml-comment
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML COMMENT.Syntax-->**SAX GET XML COMMENT** ( *documento* ; *comentario* )<!-- END REF-->
<!--REF #_command_.SAX GET XML COMMENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referência do documento aberto |
| comentario | Text | &#8592; | XML comment |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAX GET XML COMMENT.Summary-->O comando SAX GET XML COMMENT devolve um *comentario* se um evento SAX de tipo XML Comment se gera no documento XML referenciado no parâmetro *documento*.<!-- END REF--> Para maior informação sobre os eventos SAX, consulte a descrição do comando [SAX Get XML node](sax-get-xml-node.md).

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Se ocorrer um erro, assume o valor 0.  

#### Ver também 

[SAX ADD XML COMMENT](sax-add-xml-comment.md)  
[SAX Get XML node](sax-get-xml-node.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 874 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |



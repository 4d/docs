---
id: delete-from-blob
title: DELETE FROM BLOB
slug: /commands/delete-from-blob
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FROM BLOB.Syntax-->**DELETE FROM BLOB** ( *BLOB* ; *offset* ; *tamanho* )<!-- END REF-->
<!--REF #_command_.DELETE FROM BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB do qual deletar bytes |
| offset | Integer | &#8594;  | Offset inicial onde os bytes serão deletados |
| tamanho | Integer | &#8594;  | Número de bytes a serem excluídos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DELETE FROM BLOB.Summary-->O comando DELETE FROM BLOB apaga o número de bytes especificado por *tamanho* do BLOB *blob* a partir da posição especificada por *offset* (expressada de modo relativo ao começo do BLOB).<!-- END REF--> O tamanho do BLOB é reduzido em *tamanho* de bytes.

##### Nota 

**Nota de compatibilidade**: como este comando altera o blob passado como parâmetro, não é compatível com objetos blob (tipo 4D.Blob). Ver *Passing blobs and blob objects to 4D commands* em developer.4d.com

#### Ver também 

[INSERT IN BLOB](insert-in-blob.md)  
---
id: insert-in-blob
title: INSERT IN BLOB
slug: /commands/insert-in-blob
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN BLOB.Syntax-->**INSERT IN BLOB** ( *BLOB* ; *offset* ; *len* {; *filler*} )<!-- END REF-->
<!--REF #_command_.INSERT IN BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB no qual inserir os bytes |
| offset | Integer | &#8594;  | Posição de início de inserção dos bytes |
| len | Integer | &#8594;  | Número de bytes a ser inserido |
| filler | Integer | &#8594;  | Valor de byte padrão (0x00..0xFF) 0x00 se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.INSERT IN BLOB.Summary-->O comando INSERT IN BLOB insere o número de bytes especificado por *len* no BLOB *blob* na posição especificada pelo deslocamento.<!-- END REF--> O BLOB, então torna-se *len* bytes maior.

Se você não especificar o parâmetro *offset* de preenchimento facultativo, os bytes inseridos no BLOB são ajustados para 0x00\. Caso contrário, os bytes são definidos para o valor que você passa em preenchimento (modulo 256-0.. 255).

Antes da chamada, você passa no parâmetro *offset* a posição de inserção em relação ao início do BLOB. 

##### Nota 

**Nota de compatibilidade**: como este comando altera o blob passado como parâmetro, não é compatível com objetos blob (tipo 4D.Blob). Ver *Passing blobs and blob objects to 4D commands* em developer.4d.com

#### Ver também 

[DELETE FROM BLOB](delete-from-blob.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 559 |
| Thread-seguro | &check; |



---
id: copy-blob
title: COPY BLOB
slug: /commands/copy-blob
displayed_sidebar: docs
---

<!--REF #_command_.COPY BLOB.Syntax-->**COPY BLOB** ( *oriBLOB*  ; *dstBLOB* ; *oriOffset*  ; *dstOffset* ; *tamanho* )<!-- END REF-->
<!--REF #_command_.COPY BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| oriBLOB | BLOB | &#x1F852; | BLOB origem |
| dstBLOB | BLOB | &#x1F852; | BLOB destino |
| oriOffset | Inteiro longo | &#x1F852; | Posição da fonte para a cópia |
| dstOffset | Inteiro longo | &#x1F852; | Posição de destino para a cópia |
| tamanho | Inteiro longo | &#x1F852; | Número de bytes a copiar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.COPY BLOB.Summary-->O comando COPY BLOB copia o número de bytes especificado por *tamanho* do BLOB *oriBLOB* para o BLOB *dstBLOB*.<!-- END REF-->

A cópia começa na posição (expressa em relação ao início do BLOB fonte) especificado pelo *oriOffset* e realiza-se na posição (expressa em relação ao início do BLOB destino) especificado pelo *dstOffset*.

**Nota:** O BLOB de destino pode ser redimensionado, se necessário.

#### Ver também 

[DELETE FROM BLOB](delete-from-blob.md)  
[INSERT IN BLOB](insert-in-blob.md)  
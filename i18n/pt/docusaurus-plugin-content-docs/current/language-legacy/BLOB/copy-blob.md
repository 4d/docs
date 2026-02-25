---
id: copy-blob
title: COPY BLOB
slug: /commands/copy-blob
displayed_sidebar: docs
---

<!--REF #_command_.COPY BLOB.Syntax-->**COPY BLOB** ( *oriBLOB* : Blob  ; *dstBLOB* : Blob ; *oriOffset* : Integer  ; *dstOffset* : Integer ; *tamanho* : Integer )<!-- END REF-->
<!--REF #_command_.COPY BLOB.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| oriBlob | Blob | &#8594; | BLOB origem |
| dstBlob | Blob | &#8594; | BLOB destino |
| oriOffset | Integer | &#8594; | Posição da fonte para a cópia |
| dstOffset | Integer | &#8594; | Posição de destino para a cópia |
| tamanho | Integer | &#8594; | Número de bytes a copiar |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.COPY BLOB.Summary-->O comando COPY BLOB copia o número de bytes especificado por *tamanho* do BLOB *oriBLOB* para o BLOB *dstBLOB*.<!-- END REF-->

A cópia começa na posição (expressa em relação ao início do BLOB fonte) especificado pelo *oriOffset* e realiza-se na posição (expressa em relação ao início do BLOB destino) especificado pelo *dstOffset*.

**Nota:** O BLOB de destino pode ser redimensionado, se necessário.

## Ver também 

[DELETE FROM BLOB](../commands/delete-from-blob)  
[INSERT IN BLOB](../commands/insert-in-blob)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 558 |
| Thread-seguro | yes |



---
id: blob-size
title: BLOB size
slug: /commands/blob-size
displayed_sidebar: docs
---

<!--REF #_command_.BLOB size.Syntax-->**BLOB size** ( *BLOB* ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB size.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | Campo ou variável BLOB |
| Resultado | Integer | &#8592; | Tamanho em bytes do BLOB |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BLOB size.Summary-->BLOB size retorna o tamanho do *blob* expressado em bytes.<!-- END REF-->

#### Exemplo 

A linha de código adiciona 100 bytes ao BLOB *meuBlob*:

```4d
 SET BLOB SIZE(meuBlob;BLOB size(meuBlob)+100)
```

#### Ver também 

[SET BLOB SIZE](set-blob-size.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 605 |
| Thread-seguro | &check; |



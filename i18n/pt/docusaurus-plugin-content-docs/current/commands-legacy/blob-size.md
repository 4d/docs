---
id: blob-size
title: BLOB size
slug: /commands/blob-size
displayed_sidebar: docs
---

<!--REF #_command_.BLOB size.Syntax-->**BLOB size** ( *BLOB* ) -> Resultado<!-- END REF-->
<!--REF #_command_.BLOB size.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| BLOB | BLOB | &#x1F852; | Campo ou variável BLOB |
| Resultado | Inteiro longo | &#x1F850; | Tamanho em bytes do BLOB |

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
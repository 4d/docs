---
id: blob-size
title: BLOB size
slug: /commands/blob-size
displayed_sidebar: docs
---

<!--REF #_command_.BLOB size.Syntax-->**BLOB size** ( *BLOB* : Blob ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB size.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Blob | Blob | &#8594; | Campo ou variável BLOB |
| Resultado | Integer | &#8592; | Tamanho em bytes do BLOB |
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

<!--REF #_command_.BLOB size.Summary-->BLOB size retorna o tamanho do *blob* expressado em bytes.<!-- END REF-->

## Exemplo 

A linha de código adiciona 100 bytes ao BLOB *meuBlob*:

```4d
 SET BLOB SIZE(meuBlob;BLOB size(meuBlob)+100)
```

## Ver também 

[SET BLOB SIZE](../commands/set-blob-size)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 605 |
| Thread-seguro | yes |



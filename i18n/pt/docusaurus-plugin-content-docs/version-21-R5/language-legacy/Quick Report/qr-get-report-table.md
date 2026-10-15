---
id: qr-get-report-table
title: QR Get report table
slug: /commands/qr-get-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report table.Syntax-->**QR Get report table** ( *area* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get report table.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594; | Referência da área |
| Resultado | Integer | &#8592; | Nº de tabela |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|2003|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.QR Get report table.Summary-->O comando QR Get report table devolve o número da tabela atual do relatório designado pelo parâmetro *area*.<!-- END REF-->

Se passa um número de *area* inválido, se gera o erro -9850.

## Ver também 

[QR SET REPORT TABLE](../commands/qr-set-report-table)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 758 |
| Thread-seguro | no |
| Modificar variáveis | error |



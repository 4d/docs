---
id: qr-set-report-table
title: QR SET REPORT TABLE
slug: /commands/qr-set-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR SET REPORT TABLE.Syntax-->**QR SET REPORT TABLE** ( *area* : Integer ; *tabela* : Integer )<!-- END REF-->
<!--REF #_command_.QR SET REPORT TABLE.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594; | Referência da área |
| tabela | Integer | &#8594; | Número de tabela |
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

<!--REF #_command_.QR SET REPORT TABLE.Summary-->O comando QR SET REPORT TABLE define a tabela atual para a área do relatório referenciada pelo parâmetro *area* a tabela número *tabela*.<!-- END REF-->  

  
É necessário que uma tabela seja atribuída ao relatório já que o editor de relatórios utilizará a seleção atual desta tabela para mostrar os dados, efetuar os cálculos e propagar relações, se for necessário.  
  
Se passa um número de *area* inválido, se gera o erro -9850.  
Se o parâmetro *tabela* for incorreto, se gera o erro -9852.

## Ver também 

[QR Get report table](../commands/qr-get-report-table)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 757 |
| Thread-seguro | no |
| Modificar variáveis | error |



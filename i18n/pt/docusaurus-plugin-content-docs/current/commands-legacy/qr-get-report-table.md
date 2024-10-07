---
id: qr-get-report-table
title: QR Get report table
slug: /commands/qr-get-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report table.Syntax-->**QR Get report table** ( *area* ) -> Resultado<!-- END REF-->
<!--REF #_command_.QR Get report table.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Inteiro longo | &#x1F852; | Referência da área |
| Resultado | Inteiro longo | &#x1F850; | Nº de tabela |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR Get report table.Summary-->O comando QR Get report table devolve o número da tabela atual do relatório designado pelo parâmetro *area*.<!-- END REF-->

Se passa um número de *area* inválido, se gera o erro -9850.

#### Ver também 

[QR SET REPORT TABLE](qr-set-report-table.md)  
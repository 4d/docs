---
id: qr-set-report-table
title: QR SET REPORT TABLE
slug: /commands/qr-set-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR SET REPORT TABLE.Syntax-->**QR SET REPORT TABLE** ( *area* ; *tabela* )<!-- END REF-->
<!--REF #_command_.QR SET REPORT TABLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| tabela | Integer | &#8594;  | Número de tabela |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.QR SET REPORT TABLE.Summary-->O comando QR SET REPORT TABLE define a tabela atual para a área do relatório referenciada pelo parâmetro *area* a tabela número *tabela*.<!-- END REF-->  

  
É necessário que uma tabela seja atribuída ao relatório já que o editor de relatórios utilizará a seleção atual desta tabela para mostrar os dados, efetuar os cálculos e propagar relações, se for necessário.  
  
Se passa um número de *area* inválido, se gera o erro -9850.  
Se o parâmetro *tabela* for incorreto, se gera o erro -9852.

#### Ver também 

[QR Get report table](qr-get-report-table.md)  
---
id: qr-run
title: QR RUN
slug: /commands/qr-run
displayed_sidebar: docs
---

<!--REF #_command_.QR RUN.Syntax-->**QR RUN** ( *area* )<!-- END REF-->
<!--REF #_command_.QR RUN.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área a executar |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.QR RUN.Summary-->O comando QR RUN provoca a execução do relatório rápido designado pelo parâmetro *area*.<!-- END REF--> O relatório é gerado com seus parâmetros atuais, incluindo seu tipo de saída. Pode utilizar o comando [QR SET DESTINATION](qr-set-destination.md) para modificar o tipo de saída.  

O relatório se executa na tabela à que pertence a área. Quando *area* designa uma área fora da tela, é necessário especificar a tabela a utilizar através do comando [QR SET REPORT TABLE](qr-set-report-table.md).  
  
Se passa um número de *area* inválido, se gera o erro -9850.

**4D Server:** este comando pode ser executado em 4D Server como parte de um procedimento armazenado. Neste contexto, tenha certeza de que não apareça nenhuma caixa de diálogo na equipe servidor (exceto para os requisitos específicos). Para isso, é necessário chamar pelo comando [QR SET DESTINATION](qr-set-destination.md) com o parâmetro "\*". Em caso de um problema da impressora (sem papel, impressora desconectada, etc), não é gerado nenhuma mensagem de erro.

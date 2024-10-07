---
id: qr-get-report-kind
title: QR Get report kind
slug: /commands/qr-get-report-kind
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report kind.Syntax-->**QR Get report kind** ( *area* ) -> Resultado<!-- END REF-->
<!--REF #_command_.QR Get report kind.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#x1F852; | Referência da área |
| Resultado | Integer | &#x1F850; | Tipo de relatório |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR Get report kind.Summary-->O comando QR Get report kind devolve o tipo do relatório presente em *area*.<!-- END REF-->

* Se o comando devolve 1, o relatório é de tipo lista.
* Se o comando devolve 2, o relatório é de tipo tabela cruzada.

Igualmente pode comparar o resultado da função com as constantes do tema *QR Tipos de relatórios*:

| Constante       | Tipo          | Valor |
| --------------- | ------------- | ----- |
| qr cross report | Inteiro longo | 2     |
| qr list report  | Inteiro longo | 1     |
  
  
Se passa um número de *area* incorreto, se gera o erro -9850. 

#### Ver também 

[QR SET REPORT KIND](qr-set-report-kind.md)  
---
id: qr-set-report-kind
title: QR SET REPORT KIND
slug: /commands/qr-set-report-kind
displayed_sidebar: docs
---

<!--REF #_command_.QR SET REPORT KIND.Syntax-->**QR SET REPORT KIND** ( *area* ; *tipo* )<!-- END REF-->
<!--REF #_command_.QR SET REPORT KIND.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referência da área |
| tipo | Integer | &#8594;  | Tipo do relatório |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR SET REPORT KIND.Summary-->O comando QR SET REPORT KIND define o *tipo* do relatório presente em *area*.<!-- END REF-->  
  
 \* Se *tipo* for igual a 1, o relatório é de tipo lista.  
 \* Se *tipo* for igual a 2, o relatório é de tipo tabela cruzada.  
  
Igualmente pode utilizar as constantes do tema *QR Tipos de relatórios*:  

| Constante       | Tipo          | Valor |
| --------------- | ------------- | ----- |
| qr cross report | Inteiro longo | 2     |
| qr list report  | Inteiro longo | 1     |
  
  
Se define um novo tipo para um relatório existente, se eliminam os parâmetros anteriores e se cria um novo relatório vazio.  
  
Se passa um número de *area* inválido, se gera o erro -9850.  
  
Se passa um valor incorreto do parâmetro *propriedade*, se gera o erro -9852.  

#### Ver também 

[QR Get report kind](qr-get-report-kind.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 738 |
| Thread-seguro | &cross; |
| Modificar variáveis | error |



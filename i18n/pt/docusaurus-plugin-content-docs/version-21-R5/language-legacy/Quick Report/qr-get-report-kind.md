---
id: qr-get-report-kind
title: QR Get report kind
slug: /commands/qr-get-report-kind
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report kind.Syntax-->**QR Get report kind** ( *area* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get report kind.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594; | Referência da área |
| Resultado | Integer | &#8592; | Tipo de relatório |
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

<!--REF #_command_.QR Get report kind.Summary-->O comando QR Get report kind devolve o tipo do relatório presente em *area*.<!-- END REF-->

* Se o comando devolve 1, o relatório é de tipo lista.
* Se o comando devolve 2, o relatório é de tipo tabela cruzada.

Igualmente pode comparar o resultado da função com as constantes do tema *QR Tipos de relatórios*:

| Constante       | Tipo          | Valor |
| --------------- | ------------- | ----- |
| qr cross report | Inteiro longo | 2     |
| qr list report  | Inteiro longo | 1     |
  
  
Se passa um número de *area* incorreto, se gera o erro -9850. 

## Ver também 

[QR SET REPORT KIND](../commands/qr-set-report-kind)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 755 |
| Thread-seguro | no |
| Modificar variáveis | error |



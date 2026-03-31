---
id: accumulate
title: ACCUMULATE
slug: /commands/accumulate
displayed_sidebar: docs
---

<!--REF #_command_.ACCUMULATE.Syntax-->**ACCUMULATE** ( *dados* : Field, Variable {; *...dados* : Field, Variable} )<!-- END REF-->
<!--REF #_command_.ACCUMULATE.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| dados | Field, Variable | &#8594; | Campo ou variável de tipo numérico a acumular |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.ACCUMULATE.Summary-->ACCUMULATE especifica os campos ou variáveis a acumular em um relatório realizado utilizando [PRINT SELECTION](../commands/print-selection).<!-- END REF-->.

Deve executar [BREAK LEVEL](../commands/break-level) e ACCUMULATE antes de cada relatório para o qual queira utilizar quebras. Estes comandos ativam o processo de quebras para um relatório. Ver a explicação do comando [Subtotal](subtotal.md "Subtotal").

Utilize ACCUMULATE quando queira incluir sub-totais para tal os campos ou variáveis numéricas em um relatório. ACCUMULATE lhe indica a 4D que armazena os sub-totais para cada elemento especificado em objeto. Os sub-totais se acumulam para cada nível de quebra especificado pelo comando [Subtotal](../commands/subtotal).

Execute ACCUMULATE antes de imprimir um relatório com [PRINT SELECTION](../commands/print-selection)..

Utilize a função [Subtotal](subtotal.md "Subtotal") no método de formulário ou em um método de objeto para devolver o sub-total de um dos objetos especificados em *dados*.

## Exemplo 

Ver o exemplo do comando [BREAK LEVEL](../commands/break-level) .

## Ver também 

[BREAK LEVEL](../commands/break-level)  
[ORDER BY](../commands/order-by)  
[PRINT SELECTION](../commands/print-selection)  
[Subtotal](../commands/subtotal)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 303 |
| Thread-seguro | no |



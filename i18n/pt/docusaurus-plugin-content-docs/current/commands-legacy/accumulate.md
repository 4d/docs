---
id: accumulate
title: ACCUMULATE
slug: /commands/accumulate
displayed_sidebar: docs
---

<!--REF #_command_.ACCUMULATE.Syntax-->**ACCUMULATE** ( *dados* {; *dados2* ; ... ; *dadosN*} )<!-- END REF-->
<!--REF #_command_.ACCUMULATE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| dados | Field, Variable | &#8594;  | Campo ou variável de tipo numérico a acumular |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.ACCUMULATE.Summary-->ACCUMULATE especifica os campos ou variáveis a acumular em um relatório realizado utilizando [PRINT SELECTION](print-selection.md).<!-- END REF-->.

Deve executar [BREAK LEVEL](break-level.md "BREAK LEVEL") e ACCUMULATE antes de cada relatório para o qual queira utilizar quebras. Estes comandos ativam o processo de quebras para um relatório. Ver a explicação do comando [Subtotal](subtotal.md "Subtotal").

Utilize ACCUMULATE quando queira incluir sub-totais para tal os campos ou variáveis numéricas em um relatório. ACCUMULATE lhe indica a 4D que armazena os sub-totais para cada elemento especificado em objeto. Os sub-totais se acumulam para cada nível de quebra especificado pelo comando [Subtotal](subtotal.md).

Execute ACCUMULATE antes de imprimir um relatório com [PRINT SELECTION](print-selection.md)..

Utilize a função [Subtotal](subtotal.md "Subtotal") no método de formulário ou em um método de objeto para devolver o sub-total de um dos objetos especificados em *dados*.

#### Exemplo 

Ver o exemplo do comando [BREAK LEVEL](break-level.md) .

#### Ver também 

[BREAK LEVEL](break-level.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  
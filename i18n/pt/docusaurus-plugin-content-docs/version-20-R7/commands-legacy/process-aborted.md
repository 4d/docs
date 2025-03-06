---
id: process-aborted
title: Process aborted
slug: /commands/process-aborted
displayed_sidebar: docs
---

<!--REF #_command_.Process aborted.Syntax-->**Process aborted**  : Boolean<!-- END REF-->
<!--REF #_command_.Process aborted.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True = o processo está prestes a ser abortado, False = o processo não será abortado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Process aborted.Summary-->O comando Process aborted retorna **True** se o processo no qual foi chamado, está prestes a ser interrompido inesperadamente, o que significa que a execução do comando, não teve uma execução "normal".<!-- END REF--> 

Este status acontece muito raramente. Processos são geralmente parados antes do código e podem ser notificados a condição "process aborted". Essa condição pode acontecer em loops compilados não executando qualquer comando 4D. Para mais informação sobre como 4D maneja o fechamento de processos, veja [Método banco de dados On Exit](metodo-banco-de-dados-on-exit.md) .

#### Ver também 

[Método banco de dados On Exit](metodo-banco-de-dados-on-exit.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 672 |
| Thread-seguro | &check; |



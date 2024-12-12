---
id: count-user-processes
title: Count user processes
slug: /commands/count-user-processes
displayed_sidebar: docs
---

<!--REF #_command_.Count user processes.Syntax-->**Count user processes**  : Integer<!-- END REF-->
<!--REF #_command_.Count user processes.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de processos abertos (com exceção dos processos kernel) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Count user processes.Summary-->Count user processes devolve o número dos processos abertos direto ou indiretamente pelo usuário (processos para os quais o parâmetro *origem* devolvido pelo comando Count user processes é maior ou igual a 0).<!-- END REF-->

#### Ver também 

[Count tasks](count-tasks.md)  
[Count users](count-users.md)  
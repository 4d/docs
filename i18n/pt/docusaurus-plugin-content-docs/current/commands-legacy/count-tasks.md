---
id: count-tasks
title: Count tasks
slug: /commands/count-tasks
displayed_sidebar: docs
---

<!--REF #_command_.Count tasks.Syntax-->**Count tasks**  : Integer<!-- END REF-->
<!--REF #_command_.Count tasks.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número total de processos abertos (incluindo processos kernel) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Count tasks.Summary-->Count tasks devolve o número de processos abertos mais alto em uma máquina 4D remota, 4D Server (procedimentos armazenados) ou monousuário de 4D.<!-- END REF--> Os processos são enumerados na ordem em foram criados. Quando ainda não tiver interrompido nenhum processo durante a sessão, este comando retorna o número total de processos abertos.

Este número leva em conta todos os processos, inclusive aqueles administrados automaticamente por 4D. O processo principal, a gestão da cachê, o processo de desenho, a gestão de índices ou o processo do servidor Web. 

#### Exemplo 

Ver o exemplo para [Process state](process-state.md "Process state") e [On Exit Database Method](metodo-banco-de-dados-on-exit.md "On Exit Database Method").

#### Ver também 

[Count user processes](count-user-processes.md)  
[Count users](count-users.md)  
[Process info](../commands/process-info.md)  
[Process state](process-state.md)  
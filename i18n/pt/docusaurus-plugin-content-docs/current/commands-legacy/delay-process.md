---
id: delay-process
title: DELAY PROCESS
slug: /commands/delay-process
displayed_sidebar: docs
---

<!--REF #_command_.DELAY PROCESS.Syntax-->**DELAY PROCESS** ( *processo* ; *duraçao* )<!-- END REF-->
<!--REF #_command_.DELAY PROCESS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &#8594;  | Número de processo |
| duraçao | Real | &#8594;  | Duração expressada em ticks |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DELAY PROCESS.Summary-->DELAY PROCESS permite atrasar um *processo* por um número de ticks (1 tick = 1/60 de segundo).<!-- END REF--> Durante este período, o *processo* atrasado não utiliza tempo de processamento. Ainda que a execução de um processo pode ser retardada, ainda está em memória.

Pode atrasar um processo por menos de um tick. Por exemplo, se passar 0.5 em duração, o processo será atrasado por 1/2 tick, ou seja 1/120 de segundo.

Se o processo já está atrasado, este comando o atrasa novamente. O parâmetro *duraçao* não é adicionado ao tempo que falta, mas o substitui. Portanto passe zero (0) em *duraçao* caso não queira atrasar o processo.

Se o processo não existe, o comando não faz nada.

**Nota:** não pode utilizar este comando para atribuir um procedimento armazenado no equipo servidor de um equipo cliente (*processo*<0).

#### Exemplo 1 

Ver os exemplos em *Record Locking*.

#### Exemplo 2 

Ver o exemplo do comando [Process number](process-number.md).

#### Ver também 

[HIDE PROCESS](hide-process.md)  
[PAUSE PROCESS](pause-process.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 323 |
| Thread-seguro | &check; |
| Proibido no servidor ||



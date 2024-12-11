---
id: pause-process
title: PAUSE PROCESS
slug: /commands/pause-process
displayed_sidebar: docs
---

<!--REF #_command_.PAUSE PROCESS.Syntax-->**PAUSE PROCESS** ( *processo* )<!-- END REF-->
<!--REF #_command_.PAUSE PROCESS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &#8594;  | Número de processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PAUSE PROCESS.Summary-->PAUSE PROCESS suspende a execução de *processo* até que seja reativada pelo comando [RESUME PROCESS](resume-process.md "RESUME PROCESS").<!-- END REF--> Durante este período, *processo* não toma tempo em sua máquina. Ainda que um processo esteja suspendido, o processo ainda está em memória. 

Se *processo* já está suspendido, PAUSE PROCESS não faz nada. Se o processo há sido retrasado utilizando o comando [DELAY PROCESS](delay-process.md "DELAY PROCESS"), se suspende o processo. É recebida a ordem [RESUME PROCESS](resume-process.md "RESUME PROCESS") retoma o processo imediatamente. 

Quando se suspende a execução de um processo, as janelas que pertencem a este processo não são editáveis. Neste caso, para evitar confundir ao usuário, considere ocultar o processo. Se *processo* não existe, o comando não faz nada.

**Advertência:** utilize PAUSE PROCESS unicamente com processos que você haja criado. PAUSE PROCESS não tem nenhum efeito no processo principal.

**Nota:** não pode utilizar este comando para atribuir um procedimento armazenado na máquina servidor de uma máquina cliente. (*processo*<0).

#### Ver também 

[ABORT PROCESS BY ID](abort-process-by-id.md)  
[DELAY PROCESS](delay-process.md)  
[HIDE PROCESS](hide-process.md)  
[RESUME PROCESS](resume-process.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 319 |
| Thread-seguro | &check; |
| Proibido no servidor ||



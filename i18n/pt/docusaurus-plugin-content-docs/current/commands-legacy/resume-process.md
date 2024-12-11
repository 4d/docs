---
id: resume-process
title: RESUME PROCESS
slug: /commands/resume-process
displayed_sidebar: docs
---

<!--REF #_command_.RESUME PROCESS.Syntax-->**RESUME PROCESS** ( *processo* )<!-- END REF-->
<!--REF #_command_.RESUME PROCESS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &#8594;  | Número de processo |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESUME PROCESS.Summary-->RESUME PROCESS reativa um *processo* cuja execução foi atrasada ou suspendida.<!-- END REF--> Se *processo* não está atrasado ou suspendido, RESUME PROCESS não faz nada.

Se *processo* foi atrasado anteriormente, consulte os comandos [PAUSE PROCESS](pause-process.md "PAUSE PROCESS") ou [DELAY PROCESS](delay-process.md "DELAY PROCESS"). Se *processo* não existe, o comando não faz nada.

**Nota:** não pode utilizar este comando para adicionar um procedimento armazenado na máquina servidor de uma máquina cliente. (*processo*<0).

#### Ver também 

[DELAY PROCESS](delay-process.md)  
[PAUSE PROCESS](pause-process.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 320 |
| Thread-seguro | &check; |
| Proibido no servidor ||



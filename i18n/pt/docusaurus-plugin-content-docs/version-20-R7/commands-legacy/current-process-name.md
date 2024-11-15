---
id: current-process-name
title: Current process name
slug: /commands/current-process-name
displayed_sidebar: docs
---

<!--REF #_command_.Current process name.Syntax-->**Current process name**  : Text<!-- END REF-->
<!--REF #_command_.Current process name.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nome do processo atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Current process name.Summary-->O comando **Current process name** devolve o nome do processo no qual este comando se chama.<!-- END REF-->

Este comando é particularmente útil no contexto dos processos de trabalho (ver *Sobre Workers*). Pode ser utilizado para identificar o processo worker a chamar ao escrever código genérico. 

#### Exemplo 

Se quiser chamar a um processo worker e passar o nome de processo de chamada como parâmetro:

```4d
 CALL WORKER(1;"myMessage";Current process name;"Start:"+String(vMax))
```

#### Ver também 

[CALL WORKER](call-worker.md)  
[KILL WORKER](kill-worker.md)  
*Sobre Workers*  
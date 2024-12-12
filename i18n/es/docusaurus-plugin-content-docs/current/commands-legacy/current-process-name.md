---
id: current-process-name
title: Current process name
slug: /commands/current-process-name
displayed_sidebar: docs
---

<!--REF #_command_.Current process name.Syntax-->**Current process name**  : Text<!-- END REF-->
<!--REF #_command_.Current process name.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nombre del proceso actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Current process name.Summary-->El comando **Current process name** devuelve el nombre del proceso en el que este comando se llama.<!-- END REF-->

Este comando es particularmente útil en el contexto de los procesos de trabajo (ver la sección *Sobre workers*). Puede ser utilizado para identificar el proceso worker a llamar al escribir código genérico. 

#### Ejemplo 

Quiere llamar a un proceso worker y pasar el nombre del proceso de llamada como parámetro:

```4d
 CALL WORKER(1;"myMessage";Current process name;"Start:"+String(vMax))
```

#### Ver también 

[CALL WORKER](call-worker.md)  
[KILL WORKER](kill-worker.md)  
*Sobre workers*  
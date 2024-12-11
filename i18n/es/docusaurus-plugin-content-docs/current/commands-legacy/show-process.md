---
id: show-process
title: SHOW PROCESS
slug: /commands/show-process
displayed_sidebar: docs
---

<!--REF #_command_.SHOW PROCESS.Syntax-->**SHOW PROCESS** ( *proceso* )<!-- END REF-->
<!--REF #_command_.SHOW PROCESS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &#8594;  | Número de proceso del proceso a mostrar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SHOW PROCESS.Summary-->SHOW PROCESS muestra todas las ventanas que pertenecen a *proceso*.<!-- END REF--> Este comando no trae las ventanas de *proceso* al primer plano. Para hacer esto, utilice el comando [BRING TO FRONT](bring-to-front.md "BRING TO FRONT").  
Si el proceso ya está siendo visualizado, el comando no tiene efecto.

#### Ejemplo 

El siguiente ejemplo muestra un proceso llamado Clientes, que se ha ocultado previamente. El número de proceso se almacena en la variable interproceso *<>Clientes*:

```4d
 SHOW PROCESS(◊Clientes)
```

#### Ver también 

[BRING TO FRONT](bring-to-front.md)  
[HIDE PROCESS](hide-process.md)  
[Process state](process-state.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 325 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||



---
id: pause-process
title: PAUSE PROCESS
slug: /commands/pause-process
displayed_sidebar: docs
---

<!--REF #_command_.PAUSE PROCESS.Syntax-->**PAUSE PROCESS** ( *process* )<!-- END REF-->
<!--REF #_command_.PAUSE PROCESS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro de process |

<!-- END REF-->

#### Description 

<!--REF #_command_.PAUSE PROCESS.Summary-->**PAUSE PROCESS** suspend l'exécution de *process* jusqu'à ce qu'il soit remis en action par la comande [RESUME PROCESS](resume-process.md).<!-- END REF--> Pendant ce temps, *process* n'utilise pas de temps machine. Lorsqu'un process est suspendu, il existe toujours en mémoire.

Si *process* est déjà suspendu, **PAUSE PROCESS** ne fait rien. Si le process est endormi à l'aide de [DELAY PROCESS](delay-process.md), le process est suspendu. S'il reçoit l'ordre [RESUME PROCESS](resume-process.md), le process redevient actif immédiatement.

Lorsqu'un process est suspendu, les fenêtres qui lui appartiennent ne sont pas saisissables. Dans ce cas, si vous ne voulez pas dérouter l'utilisateur, il faut auparavant cacher le process. Si *process* n'existe pas, cette commande ne fait rien.

**Attention :** Utilisez **PAUSE PROCESS** seulement avec les process que vous avez créés. **PAUSE PROCESS** n'a aucun effet sur le process principal.

**Note :** Vous ne pouvez pas utiliser cette commande à partir d'un poste client pour affecter une procédure stockée sur le poste serveur (*process*<0).

#### Voir aussi 

[ABORT PROCESS BY ID](abort-process-by-id.md)  
[DELAY PROCESS](delay-process.md)  
[HIDE PROCESS](hide-process.md)  
[RESUME PROCESS](resume-process.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 319 |
| Thread safe | &check; |
| Interdite sur le serveur ||



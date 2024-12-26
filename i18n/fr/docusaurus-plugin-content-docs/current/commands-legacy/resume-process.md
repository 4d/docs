---
id: resume-process
title: RESUME PROCESS
slug: /commands/resume-process
displayed_sidebar: docs
---

<!--REF #_command_.RESUME PROCESS.Syntax-->**RESUME PROCESS** ( *process* )<!-- END REF-->
<!--REF #_command_.RESUME PROCESS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro de process |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESUME PROCESS.Summary-->**RESUME PROCESS** réactive un process suspendu ou endormi.<!-- END REF--> Si *process* n'est pas endormi ou suspendu, **RESUME PROCESS** ne fait rien.

Si *process* a été suspendu, référez-vous aux commandes [PAUSE PROCESS](pause-process.md) ou [DELAY PROCESS](delay-process.md). Si *process* n'existe pas, cette commande ne fait rien.

**Note :** Vous ne pouvez pas utiliser cette commande à partir d'un poste client pour affecter une procédure stockée sur le poste serveur (*process*<0).

#### Voir aussi 

[DELAY PROCESS](delay-process.md)  
[PAUSE PROCESS](pause-process.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 320 |
| Thread safe | &check; |
| Interdite sur le serveur ||



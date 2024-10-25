---
id: delay-process
title: DELAY PROCESS
slug: /commands/delay-process
displayed_sidebar: docs
---

<!--REF #_command_.DELAY PROCESS.Syntax-->**DELAY PROCESS** ( *process* ; *durée* )<!-- END REF-->
<!--REF #_command_.DELAY PROCESS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro de process |
| durée | Real | &#8594;  | Durée exprimée en ticks |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELAY PROCESS.Summary-->**DELAY PROCESS** permet d'endormir un *process* pour un certain nombre de ticks (1 tick = 1/60ème de seconde).<!-- END REF--> Pendant cette période, le process endormi n'utilise pas de temps machine. Il reste cependant toujours en mémoire.

Vous pouvez endormir un process sur une durée inférieure à un tick. Par exemple, si vous passez 0,5 dans *durée*, le process sera endormi pour 1/2 tick, soit 1/120e de seconde. 

Si le process est déjà endormi, cette commande l'endort à nouveau. Le paramètre *durée* n'est pas ajouté au temps restant mais le remplace. Vous pouvez passer zéro (0) dans *durée* si vous ne voulez plus endormir le process.

Si le process n'existe pas, la commande ne fait rien.

**Note :** Vous ne pouvez pas utiliser cette commande à partir d'un poste client pour affecter une procédure stockée sur le poste serveur (*process*<0).

#### Exemple 1 

Reportez-vous aux exemples de la section *Verrouillage d'enregistrements*.

#### Exemple 2 

Reportez-vous à l'exemple de la fonction [Process number](process-number.md).

#### Voir aussi 

[HIDE PROCESS](hide-process.md)  
[PAUSE PROCESS](pause-process.md)  
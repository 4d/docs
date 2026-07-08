---
id: pause-process
title: PAUSE PROCESS
slug: /commands/pause-process
displayed_sidebar: docs
---

<!--REF #_command_.PAUSE PROCESS.Syntax-->**PAUSE PROCESS** ( *process* : Integer )<!-- END REF-->
<!--REF #_command_.PAUSE PROCESS.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro de process |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.PAUSE PROCESS.Summary-->**PAUSE PROCESS** suspend l'exécution de *process* jusqu'à ce qu'il soit remis en action par la comande [RESUME PROCESS](../commands/resume-process).<!-- END REF--> Pendant ce temps, *process* n'utilise pas de temps machine. Lorsqu'un process est suspendu, il existe toujours en mémoire.

Si *process* est déjà suspendu, **PAUSE PROCESS** ne fait rien. Si le process est endormi à l'aide de [DELAY PROCESS](../commands/delay-process), le process est suspendu. S'il reçoit l'ordre [RESUME PROCESS](../commands/resume-process), le process redevient actif immédiatement.

Lorsqu'un process est suspendu, les fenêtres qui lui appartiennent ne sont pas saisissables. Dans ce cas, si vous ne voulez pas dérouter l'utilisateur, il faut auparavant cacher le process. Si *process* n'existe pas, cette commande ne fait rien.

**Attention :** Utilisez **PAUSE PROCESS** seulement avec les process que vous avez créés. **PAUSE PROCESS** n'a aucun effet sur le process principal.

**Note :** Vous ne pouvez pas utiliser cette commande à partir d'un poste client pour affecter une procédure stockée sur le poste serveur (*process*<0).

## Voir aussi 

[ABORT PROCESS BY ID](../commands/abort-process-by-id)  
[DELAY PROCESS](../commands/delay-process)  
[HIDE PROCESS](../commands/hide-process)  
[RESUME PROCESS](../commands/resume-process)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 319 |
| Thread safe | yes |



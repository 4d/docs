---
id: resume-process
title: RESUME PROCESS
slug: /commands/resume-process
displayed_sidebar: docs
---

<!--REF #_command_.RESUME PROCESS.Syntax-->**RESUME PROCESS** ( *process* : Integer )<!-- END REF-->
<!--REF #_command_.RESUME PROCESS.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro de process |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.RESUME PROCESS.Summary-->**RESUME PROCESS** réactive un process suspendu ou endormi.<!-- END REF--> Si *process* n'est pas endormi ou suspendu, **RESUME PROCESS** ne fait rien.

Si *process* a été suspendu, référez-vous aux commandes [PAUSE PROCESS](../commands/pause-process) ou [DELAY PROCESS](../commands/delay-process). Si *process* n'existe pas, cette commande ne fait rien.

**Note :** Vous ne pouvez pas utiliser cette commande à partir d'un poste client pour affecter une procédure stockée sur le poste serveur (*process*<0).

## Voir aussi 

[DELAY PROCESS](../commands/delay-process)  
[PAUSE PROCESS](../commands/pause-process)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 320 |
| Thread safe | yes |
| Interdite sur le serveur ||



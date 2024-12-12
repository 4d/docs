---
id: close-printing-job
title: CLOSE PRINTING JOB
slug: /commands/close-printing-job
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE PRINTING JOB.Syntax-->**CLOSE PRINTING JOB**<!-- END REF-->
<!--REF #_command_.CLOSE PRINTING JOB.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.CLOSE PRINTING JOB.Summary-->La commande **CLOSE PRINTING JOB** permet de refermer la tâche d’impression préalablement ouverte par la commande [OPEN PRINTING JOB](open-printing-job.md) et d’envoyer à l’imprimante courante le document d’impression éventuellement construit.<!-- END REF-->

**Note de compatibilité :** À partir de 4D v20 R4, les tâches d'impression sont non-bloquantes dans les nouveaux projets. Pour plus d'informations, veuillez consulter la documentation sur l'[option d'impression non-bloquante](https://developer.4d.com/docs/fr/settings/compatibility/) dans les paramètres de compatibilité.

#### Voir aussi 

[OPEN PRINTING JOB](open-printing-job.md)  
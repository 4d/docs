---
id: open-printing-job
title: OPEN PRINTING JOB
slug: /commands/open-printing-job
displayed_sidebar: docs
---

<!--REF #_command_.OPEN PRINTING JOB.Syntax-->**OPEN PRINTING JOB**<!-- END REF-->
<!--REF #_command_.OPEN PRINTING JOB.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OPEN PRINTING JOB.Summary-->La commande **OPEN PRINTING JOB** ouvre une tâche d’impression (print job) et y empile tous les ordres d’impression exécutés par la suite, tant que la commande [CLOSE PRINTING JOB](close-printing-job.md) n’est pas appelée.<!-- END REF--> Cette commande vous permet de contrôler les tâches d’impression, et notamment de vous assurer qu’aucune tâche d’impression “parasite” ne puisse s’intercaler dans une séquence d’impressions.

La commande **OPEN PRINTING JOB** peut être utilisée avec toutes les commandes d’impression de 4D, les commandes de l’éditeur d’états rapides ainsi que les commandes d’impression de 4D Write Pro et 4D View Pro. 

La tâche d'impression est locale au process, chaque process a ses propres paramètres d'impression (options d'impression, imprimante actuelle, etc.). Plusieurs tâches d'impression peuvent être ouvertes en même temps dans 4D.

Vous devez appeler la commande [CLOSE PRINTING JOB](close-printing-job.md) pour terminer la tâche et envoyer le document d’impression à l’imprimante. Si vous omettez cette commande, le document d’impression restera dans la pile.

**OPEN PRINTING JOB** utilise les paramètres d’impression courants (paramètres par défaut ou définis via la commande [SET PRINT OPTION](set-print-option.md)). Les commandes modifiant les paramètres d’impression doivent être appelées avant **OPEN PRINTING JOB**. Dans le cas contraire, une erreur est générée (exception : la constante Orientation option peut être appelée par la commande [SET PRINT OPTION](set-print-option.md) dans une tâche d'impression).

**Note de compatibilité :** À partir de 4D v20 R4, les tâches d'impression sont non-bloquantes dans les nouveaux projets. Pour plus d'informations, veuillez consulter la documentation sur l'[option d'impression non-bloquante](https://developer.4d.com/docs/fr/settings/compatibility/) dans les paramètres de compatibilité.

#### Variables et ensembles système 

La variable système OK est définie sur 1 si la tâche d'impression a été ouverte avec succès. Sinon, elle est défini sur 0, par exemple dans les cas suivants :

* la tâche d'impression a été annulée par l'utilisateur
* sous Windows, le format d'aperçu avant impression sélectionné n'est pas disponible

#### Voir aussi 

[CLOSE PRINTING JOB](close-printing-job.md)  
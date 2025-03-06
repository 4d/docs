---
id: process-aborted
title: Process aborted
slug: /commands/process-aborted
displayed_sidebar: docs
---

<!--REF #_command_.Process aborted.Syntax-->**Process aborted**  : Boolean<!-- END REF-->
<!--REF #_command_.Process aborted.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai = le process est sur le point d’être interrompu, Faux = le process n’est pas sur le point d’être interrompu |

<!-- END REF-->

#### Description 

<!--REF #_command_.Process aborted.Summary-->La commande **Process aborted** retourne **Vrai** si le process dans lequel elle est appelée est sur le point d’être interrompu de manière inopinée — c’est-à-dire sans être parvenu au terme “normal” de son exécution.<!-- END REF-->

Ce statut se produira très rarement. Les process sont généralement arrêtés avant que le code ne puisse être notifié de la condition "process interrompu". Cette condition peut se produire uniquement dans des boucles compilées n'exécutant aucune commande 4D. Pour plus d'informations sur la façon dont 4D gère la fermeture des process, veuillez vous reporter à la page [On Exit database method](on-exit-database-method.md).

#### Voir aussi 

[On Exit database method](on-exit-database-method.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 672 |
| Thread safe | &check; |



---
id: get-last-update-log-path
title: Get last update log path
slug: /commands/get-last-update-log-path
displayed_sidebar: docs
---

<!--REF #_command_.Get last update log path.Syntax-->**Get last update log path** : Text<!-- END REF-->
<!--REF #_command_.Get last update log path.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Chemin d’accès du journal de mise à jour le plus récent |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get last update log path.Summary-->La commande **Get last update log path** retourne le chemin d’accès complet du fichier journal de mise à jour le plus récent sur le poste où elle est appelée.<!-- END REF-->

Le journal de mise à jour est généré par 4D lors des processus de mise à jour automatiques. Il contient les informations relatives aux mises à jour effectuées ainsi que les éventuelles erreurs rencontrées. 

Cette commande est destinée à être utilisée dans un processus de mise à jour automatique d’une application fusionnée (serveur ou monoposte). Pour plus d’informations, reportez-vous à la section *Finaliser et déployer les applications finales* dans le manuel *Mode Développement*.

#### Voir aussi 

[RESTART 4D](restart-4d.md)  
[SET UPDATE FOLDER](set-update-folder.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1301 |
| Thread safe | &check; |
| Interdite sur le serveur ||



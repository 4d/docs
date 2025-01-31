---
id: on-startup-database-method
title: On Startup database method
slug: /commands/on-startup-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Startup database method.Syntax-->**On Startup database method**<!-- END REF-->
<!--REF #_command_.On Startup database method.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.On Startup database method.Summary-->La **On Startup database method** est exécutée une seule fois, au moment de l'ouverture de la base.<!-- END REF-->

Les environnements 4D suivants sont concernés :

* 4D en mode local
* 4D en mode distant (sur le poste client une fois que la connexion a été acceptée par 4D Server)
* Application 4D compilée et fusionnée avec 4D VolumeDesktop

**Note :** La **On Startup database method** n'est PAS exécutée par 4D Server.

La **On Startup database method** est exécutée automatiquement par 4D ; à la différence des méthodes projet, vous ne pouvez pas appeler cette méthode base par programmation. Vous pouvez toutefois l'exécuter depuis l'éditeur de méthodes. Vous pouvez également utiliser des sous-routines. 

La **On Startup database method** est l'emplacement idéal pour :

* Initialiser les variables interprocess que vous utiliserez pendant toute la session de travail.
* Démarrer automatiquement des process à l'ouverture de la base.
* Charger des préférences ou des paramétrages sauvegardés dans ce but lors de la session de travail précédente.
* Empêcher l'ouverture de la base si une condition n'est pas remplie (comme par exemple, une ressource système manquante) par l'appel explicite de la commande [QUIT 4D](quit-4d.md).
* Accomplir toute autre action que vous souhaitez exécuter automatiquement à chaque ouverture de la base.

En revanche, il est fortement déconseillé de lancer des impressions depuis la **On Startup database method**. 

#### Exemple 

Reportez-vous à l'exemple de la section [On Exit database method](on-exit-database-method.md).

#### Voir aussi 

[On Exit database method](on-exit-database-method.md)  
*Présentation des méthodes base*  
[QUIT 4D](quit-4d.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 905263 |
| Thread safe | &cross; |



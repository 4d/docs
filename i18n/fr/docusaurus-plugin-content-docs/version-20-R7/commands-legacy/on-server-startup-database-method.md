---
id: on-server-startup-database-method
title: On Server Startup database method
slug: /commands/on-server-startup-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Server Startup database method.Syntax-->**On Server Startup database method**<!-- END REF-->
<!--REF #_command_.On Server Startup database method.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### 

<!--REF #_command_.On Server Startup database method.Summary-->La méthode base Sur démarrage serveur est appelée une fois sur le poste serveur lorsque vous ouvrez une base avec 4D Server.<!-- END REF--> La méthode base Sur démarrage serveur n'est jamais exécutée dans un environnement autre que 4D Server.

La méthode base Sur démarrage serveur est l'emplacement idéal pour :

* Initialiser les variables interprocess utilisées pendant toute la session 4D Server.
* Démarrer automatiquement des *Procédures stockées* à l'ouverture de la base.
* Charger des préférences ou des paramétrages sauvegardé(e)s dans ce but lors de la précédente session 4D Server.
* Empêcher l'ouverture de la base si une condition n'est pas remplie (par exemple, absence de ressources système) par un appel explicite à [QUIT 4D](quit-4d.md).
* Placer toute action devant être automatiquement effectuée à chaque ouverture de la base.

Si vous souhaitez exécuter du code automatiquement sur un poste client lorsqu'un 4D distant se connecte au serveur, utilisez la [On Startup database method](on-startup-database-method.md).

**Note :** La méthode base Sur démarrage serveur est exécutée de façon atomique, ce qui signifie qu'aucun 4D distant ne peut se connecter tant que l'exécution de la méthode n'est pas terminée.

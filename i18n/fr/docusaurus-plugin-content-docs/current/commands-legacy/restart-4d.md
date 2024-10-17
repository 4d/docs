---
id: restart-4d
title: RESTART 4D
slug: /commands/restart-4d
displayed_sidebar: docs
---

<!--REF #_command_.RESTART 4D.Syntax-->**RESTART 4D** {( *délai* {; *message*} )}<!-- END REF-->
<!--REF #_command_.RESTART 4D.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| délai | Integer | &#8594;  | Délai (secondes) avant que 4D ne redémarre |
| message | Text | &#8594;  | Texte à afficher sur les postes clients |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESTART 4D.Summary-->La commande **RESTART 4D** provoque le redémarrage de l’application 4D courante.<!-- END REF--> 

Cette commande est principalement destinée à une utilisation dans le contexte d’une application fusionnée (client/serveur ou monoposte) et en combinaison avec la commande [SET UPDATE FOLDER](set-update-folder.md). Dans ce cas, le processus de mise à jour automatique est enclenché : la nouvelle version de l’application désignée par [SET UPDATE FOLDER](set-update-folder.md) remplace automatiquement la version courante au moment du redémarrage consécutif à **RESTART 4D**. Le chemin d’accès au fichier de données est mémorisé et est automatiquement utilisé. 

Si aucune information de mise à jour n’a été définie via la commande [SET UPDATE FOLDER](set-update-folder.md) dans la session courante, la commande redémarre simplement l’application 4D avec les fichiers de structure et de données courants. 

Le paramètre *délai* permet de différer le redémarrage de l’application afin de laisser aux postes clients le temps de se déconnecter. Vous devez passer une valeur en secondes dans *délai*. Si vous omettez ce paramètre, l’application serveur attendra que toutes les applications clientes se soient déconnectées, dans un délai maximum de 10 minutes. Au-delà, toutes les applications clientes sont automatiquement déconnectées. 

**Note :** Les paramètres *délai* et *message* sont uniquement pris en compte avec les applications serveur (ils sont ignorés lorsque la commande est exécutée sur une application monoposte ou sur un 4D distant). 

Le paramètre optionnel *message* vous permet d’afficher un message personnalisé aux applications clientes connectées. 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et l’application redémarre. Vous pouvez intercepter les erreurs éventuellement générées par la commande à l’aide d’une méthode installée via la commande [ON ERR CALL](on-err-call.md). 

#### Voir aussi 

[Get last update log path](get-last-update-log-path.md)  
[SET UPDATE FOLDER](set-update-folder.md)  
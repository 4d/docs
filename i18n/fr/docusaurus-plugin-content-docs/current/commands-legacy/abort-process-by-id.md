---
id: abort-process-by-id
title: ABORT PROCESS BY ID
slug: /commands/abort-process-by-id
displayed_sidebar: docs
---

<!--REF #_command_.ABORT PROCESS BY ID.Syntax-->**ABORT PROCESS BY ID** ( *uniqueID* )<!-- END REF-->
<!--REF #_command_.ABORT PROCESS BY ID.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| uniqueID | Integer | &#8594;  | ID unique du process |

<!-- END REF-->

#### Description 

<!--REF #_command_.ABORT PROCESS BY ID.Summary-->La commande **ABORT PROCESS BY ID** stoppe un process spécifique sur 4D Server.<!-- END REF-->

Dans le paramètre *uniqueID*, passez l'ID unique du process que vous souhaitez stopper sur le serveur. Vous pouvez récupérer l'ID du process à l'aide des commandes [Process activity](../commands/process-activity.md) ou [Process info](../commands/process-info.md).

**Notes** : 

* Cette commande ne peut être exécutée que sur 4D Server. Si la méthode appelant la commande est exécutée localement sur un 4D distant ou monoposte, **ABORT PROCESS BY ID** ne fait rien.
* Cette commande ne peut être utilisée qu'avec la couche réseau *ServerNet*. Voir *Nouvelle couche réseau ServerNet (compatibilité)*.
* Cette commande ne doit être utilisée que pour la recherche d'erreurs ou à des fins d'administration, et non pas comme une procédure ordinaire.

#### Exemple 

Vous souhaitez stopper le process sélectionné parmi la collection de process affichée dans une list box :

```4d
  //variable =curItemPosition
 
  // Récupérez la liste des process sur le serveur et affichez-la dans la list box
 $activity:=Get process activity(Processes only).processes
 ...
  // Le process sélectionné est stoppé sur le serveur
 ABORT PROCESS BY ID($activity[curItemPosition].ID)
```

#### Voir aussi 

[PAUSE PROCESS](pause-process.md)  
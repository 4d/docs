---
id: web-server-list
title: WEB Server list
slug: /commands/web-server-list
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server list.Syntax-->**WEB Server list**  -> Résultat<!-- END REF-->
<!--REF #_command_.WEB Server list.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Collection | &#x1F850; | Collection de tous les objets Serveur Web disponibles |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB Server list.Summary-->La commande **WEB Server list** retourne la collection de tous les objets Serveur Web disponibles dans l'application 4D.<!-- END REF--> 

Une application 4D peut contenir un à plusieurs serveurs Web : 

* 1 serveur Web pour la base hôte (serveur Web par défaut)
* 1 serveur Web pour chaque composant.

Tous les serveurs Web disponibles sont retournés par la commande, qu'ils soient en cours d'exécution ou pas.

**Note :** L'objet serveur Web par défaut est automatiquement chargé dans 4D au démarrage. Par ailleurs, si vous souhaitez utiliser le serveur Web d'un composant, il doit être instancié à l'aide de la commande [WEB Server](web-server.md). 

Vous pouvez utiliser la propriété *name* de l'objet serveur Web pour identifier la base ou le composant à laquelle/auquel est associé chaque objet serveur Web. Pour une description détaillée de l'objet serveur Web, veuillez vous reporter à la commande [WEB Server](web-server.md).

#### Exemple 

Vous souhaitez connaitre le nombre de serveurs Web en cours d'exécution qui sont disponibles : 

```4d
 var $wSList : Collection
 var $vRun : Integer
 
 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" serveur(s) web exécutés sur "+Chaine($wSList.length)+" disponibles.")
```

#### Voir aussi 

[WEB Server](web-server.md)  
*webServer.stop( )*  
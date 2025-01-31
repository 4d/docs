---
id: current-process-name
title: Current process name
slug: /commands/current-process-name
displayed_sidebar: docs
---

<!--REF #_command_.Current process name.Syntax-->**Current process name**  : Text<!-- END REF-->
<!--REF #_command_.Current process name.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Nom du process courant |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current process name.Summary-->La commande **Current process name** retourne le nom du process depuis lequel elle est appelée.<!-- END REF-->

Cette commande est particulièrement utile dans le contexte des process workers (voir la section *A propos des workers*). Lorsque vous écrivez du code générique, vous pouvez l'utiliser afin d'identifier le process worker à appeler. 

#### Exemple 

Vous voulez appeler un process worker et lui passer comme paramètre le nom du process appelant :

```4d
 CALL WORKER(1;"monMessage";Current process name;"Début :"+String(vMax))
```

#### Voir aussi 

*A propos des workers*  
[CALL WORKER](call-worker.md)  
[KILL WORKER](kill-worker.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1392 |
| Thread safe | &check; |



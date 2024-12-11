---
id: adjust-index-cache-priority
title: ADJUST INDEX CACHE PRIORITY
slug: /commands/adjust-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Syntax-->**ADJUST INDEX CACHE PRIORITY** ( *leChamp* ; *priorité* )<!-- END REF-->
<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ dont vous voulez ajuster la priorité du ou des index dans le cache |
| priorité | Integer | &#8594;  | Priorité du ou des index du champ dans le cache |

<!-- END REF-->

#### Mode expert 

<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Summary-->Cette commande est réservée pour des besoins spécifiques.<!-- END REF--> Elle doit être utilisée avec précaution car elle peut affecter les performances de la base. 

#### Description 

La commande **ADJUST INDEX CACHE PRIORITY** modifie la valeur de *priorité* du ou des index du champ *leChamp* chargés dans le cache pour le process courant. Un appel à cette commande remplace toute valeur précédente modifiée avec la même commande dans le même process. Cette commande ajuste la priorité pour des besoins ponctuels, par exemple lors de l'exécution d'un import ou d'une recherche.

**Note :** Cette commande fonctionne en mode local seulement (4D Server et 4D) ; elle ne peut pas être utilisée avec 4D en mode distant. 

 Cette commande modifie la priorité de tous les index liés au champ *leChamp*, y compris les index de mots-clés (à noter qu'il n'est pas possible de personnaliser la priorité des index composites).

Passez dans le paramètre *priorité* une des constantes du thème "*Gestion du cache*" :

| Constante                | Comment                                              |
| ------------------------ | ---------------------------------------------------- |
| Cache priority low       |                                                      |
| Cache priority very low  |                                                      |
| Cache priority normal    | Rétablit la priorité de cache à sa valeur par défaut |
| Cache priority high      |                                                      |
| Cache priority very high |                                                      |

#### Exemple 

Vous souhaitez modifier temporairement la priorité des index du champ \[Docs\]Comments dans le cache :

```4d
 ADJUST INDEX CACHE PRIORITY([Docs]Comments;Cache priority very high)
 QUERY([Docs];[Docs]Comments%"Extra") // recherche dans le champ indexé
  //...réalisation d'autres recherches ou tris sur la même table
  //à l'issue, retour à la priorité de cache normale
 ADJUST INDEX CACHE PRIORITY([Docs]Comments;Cache priority normal)
```

#### Voir aussi 

[Get adjusted index cache priority](get-adjusted-index-cache-priority.md)  
[SET INDEX CACHE PRIORITY](set-index-cache-priority.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1430 |
| Thread safe | &check; |
| Interdite sur le serveur ||



---
id: set-index-cache-priority
title: SET INDEX CACHE PRIORITY
slug: /commands/set-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET INDEX CACHE PRIORITY.Syntax-->**SET INDEX CACHE PRIORITY** ( *leChamp* ; *priorité* )<!-- END REF-->
<!--REF #_command_.SET INDEX CACHE PRIORITY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ dont vous voulez modifier la priorité des index pour toute la session |
| priorité | Integer | &#8594;  | Priorité du ou des index du champ dans le cache |

<!-- END REF-->

#### Mode expert 

<!--REF #_command_.SET INDEX CACHE PRIORITY.Summary-->Cette commande est réservée pour des besoins spécifiques.<!-- END REF--> Elle doit être utilisée avec précaution car elle peut affecter les performances de la base. 

#### Description 

La commande **SET INDEX CACHE PRIORITY** applique une *priorité* spécifique aux index du champ *leChamp* chargés dans le cache pour tous les process dans la session courante. Elle doit être appelée dans la méthode base **Sur ouverture** ou **Sur démarrage serveur**.

**Note :** Cette commande fonctionne en mode local seulement (4D Server et 4D) ; elle ne peut pas être utilisée avec 4D en mode distant. 

 Cette commande définit la priorité de tous les index liés au champ *leChamp*, y compris les index de mots-clés (à noter qu'il n'est pas possible de personnaliser la priorité des index composites).

Passez dans le paramètre *priorité* une des constantes du thème "*Gestion du cache*" :

| Constante                | Comment                                              |
| ------------------------ | ---------------------------------------------------- |
| Cache priority low       |                                                      |
| Cache priority very low  |                                                      |
| Cache priority normal    | Rétablit la priorité de cache à sa valeur par défaut |
| Cache priority high      |                                                      |
| Cache priority very high |                                                      |

#### Exemple 

Dans la , vous souhaitez définir une priorité très haute pour les index du champ \[Client\]Nom :

```4d
 SET INDEX CACHE PRIORITY([Client]Nom;Cache priority very high)
```

#### Voir aussi 

[ADJUST INDEX CACHE PRIORITY](adjust-index-cache-priority.md)  
[Get adjusted index cache priority](get-adjusted-index-cache-priority.md)  
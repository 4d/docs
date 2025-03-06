---
id: adjust-table-cache-priority
title: ADJUST TABLE CACHE PRIORITY
slug: /commands/adjust-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Syntax-->**ADJUST TABLE CACHE PRIORITY** ( *laTable* ; *priority* )<!-- END REF-->
<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dont vous souhaitez ajuster la priorité des données scalaires |
| priority | Integer | &#8594;  | Priorité des données scalaires de la table dans le cache |

<!-- END REF-->

#### Mode expert 

<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Summary-->Cette commande est réservée pour des besoins spécifiques.<!-- END REF--> Elle doit être utilisée avec précaution car elle peut affecter les performances de la base. 

#### Description 

La commande **ADJUST TABLE CACHE PRIORITY** modifie la valeur de *priorité* des données scalaires de *laTable* chargées dans le cache pour le process courant. Un appel à cette commande remplace toute valeur précédente modifiée avec la même commande dans le même process. Cette commande ajuste la priorité pour des besoins ponctuels, par exemple lors de l'exécution d'un import ou d'une recherche.

**Note :** Cette commande fonctionne en mode local seulement (4D Server et 4D) ; elle ne peut pas être utilisée avec 4D en mode distant. 

 Cette commande définit uniquement la priorité des champs scalaires de la table (types date, numériques ou alpha). La priorité des types de champs binaires (Blob, texte, images et objets) est gérée via la commande [ADJUST BLOBS CACHE PRIORITY](adjust-blobs-cache-priority.md). 

Passez dans le paramètre *priorité* une des constantes du thème "*Gestion du cache*" :

| Constante                | Comment                                              |
| ------------------------ | ---------------------------------------------------- |
| Cache priority low       |                                                      |
| Cache priority very low  |                                                      |
| Cache priority normal    | Rétablit la priorité de cache à sa valeur par défaut |
| Cache priority high      |                                                      |
| Cache priority very high |                                                      |

#### Exemple 

Vous souhaitez modifier temporairement la priorité des champs scalaires de la table \[Docs\] dans le cache :

```4d
 ADJUST TABLE CACHE PRIORITY([Docs];Cache priority low)
  // ... effectuer une opération spécifique
 ADJUST TABLE CACHE PRIORITY([Docs];Cache priority normal)
```

#### Voir aussi 

[Get adjusted table cache priority](get-adjusted-table-cache-priority.md)  
[SET TABLE CACHE PRIORITY](set-table-cache-priority.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1429 |
| Thread safe | &check; |



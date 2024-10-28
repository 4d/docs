---
id: set-table-cache-priority
title: SET TABLE CACHE PRIORITY
slug: /commands/set-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET TABLE CACHE PRIORITY.Syntax-->**SET TABLE CACHE PRIORITY** ( *laTable* ; *priorité* )<!-- END REF-->
<!--REF #_command_.SET TABLE CACHE PRIORITY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dont vous souhaitez modifier la priorité des données scalaires pour toute la session |
| priorité | Integer | &#8594;  | Priorité des valeurs scalaires de la table dans le cache |

<!-- END REF-->

#### Mode expert 

<!--REF #_command_.SET TABLE CACHE PRIORITY.Summary-->Cette commande est réservée pour des besoins spécifiques.<!-- END REF--> Elle doit être utilisée avec précaution car elle peut affecter les performances de la base. 

#### Description 

La commande **SET TABLE CACHE PRIORITY** applique une *priorité* spécifique aux données de *laTable* chargées dans le cache pour tous les process dans la session courante. Elle doit être appelée dans la méthode base **Sur ouverture** ou **Sur démarrage serveur**.

**Note :** Cette commande fonctionne en mode local seulement (4D Server et 4D) ; elle ne peut pas être utilisée avec 4D en mode distant. 

 Cette commande définit uniquement la priorité des champs scalaires de la table (types date, numériques ou alpha). La priorité des types de champs binaires (Blob, texte, images et objets) est gérée via la commande [SET BLOBS CACHE PRIORITY](set-blobs-cache-priority.md). 

Passez dans le paramètre *priorité* une des constantes du thème "*Gestion du cache*" :

| Constante                | Comment                                              |
| ------------------------ | ---------------------------------------------------- |
| Cache priority low       |                                                      |
| Cache priority very low  |                                                      |
| Cache priority normal    | Rétablit la priorité de cache à sa valeur par défaut |
| Cache priority high      |                                                      |
| Cache priority very high |                                                      |

#### Exemple 

Dans la , vous souhaitez fixer une priorité très haute pour les données scalaires de la table \[Client\] :

```4d
 SET TABLE CACHE PRIORITY([Client];Cache priority very high)
```

#### Voir aussi 

[ADJUST INDEX CACHE PRIORITY](adjust-index-cache-priority.md)  
[ADJUST TABLE CACHE PRIORITY](adjust-table-cache-priority.md)  
[Get adjusted table cache priority](get-adjusted-table-cache-priority.md)  
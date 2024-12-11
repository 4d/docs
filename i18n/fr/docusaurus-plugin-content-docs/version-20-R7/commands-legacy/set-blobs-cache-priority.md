---
id: set-blobs-cache-priority
title: SET BLOBS CACHE PRIORITY
slug: /commands/set-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET BLOBS CACHE PRIORITY.Syntax-->**SET BLOBS CACHE PRIORITY** ( *laTable* ; *priorité* )<!-- END REF-->
<!--REF #_command_.SET BLOBS CACHE PRIORITY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dont vous souhaitez modifier la priorité des données "blobs" pour toute la session |
| priorité | Integer | &#8594;  | Priorité des données "blobs" de la table dans le cache |

<!-- END REF-->

#### Mode expert 

<!--REF #_command_.SET BLOBS CACHE PRIORITY.Summary-->Cette commande est réservée pour des besoins spécifiques.<!-- END REF--> Elle doit être utilisée avec précaution car elle peut affecter les performances de la base. 

#### Description 

La commande **SET BLOBS CACHE PRIORITY** applique une *priorité* spécifique aux "blobs" de *laTable* chargées dans le cache pour tous les process dans la session courante. Elle doit être appelée dans la méthode base **Sur ouverture** ou **Sur démarrage serveur**.

**Note :** Cette commande fonctionne en mode local seulement (4D Server et 4D) ; elle ne peut pas être utilisée avec 4D en mode distant. 

 Les champs de données "blobs" incluent les types BLOB, texte, image et objet. La commande modifie la priorité de ces données uniquement lorsqu'elles sont stockées dans le fichier de données. 

Passez dans le paramètre *priorité* une des constantes du thème "*Gestion du cache*" :

| Constante                | Comment                                              |
| ------------------------ | ---------------------------------------------------- |
| Cache priority low       |                                                      |
| Cache priority very low  |                                                      |
| Cache priority normal    | Rétablit la priorité de cache à sa valeur par défaut |
| Cache priority high      |                                                      |
| Cache priority very high |                                                      |

#### Exemple 

Dans la , vous souhaitez fixer une priorité très haute pour les "blobs" de la table \[Client\] :

```4d
 SET BLOBS CACHE PRIORITY([Client];Cache priority very high)
```

#### Voir aussi 

[ADJUST BLOBS CACHE PRIORITY](adjust-blobs-cache-priority.md)  
[Get adjusted blobs cache priority](get-adjusted-blobs-cache-priority.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1425 |
| Thread safe | &check; |
| Interdite sur le serveur ||



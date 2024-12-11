---
id: adjust-blobs-cache-priority
title: ADJUST BLOBS CACHE PRIORITY
slug: /commands/adjust-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Syntax-->**ADJUST BLOBS CACHE PRIORITY** ( *laTable* ; *priorité* )<!-- END REF-->
<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dont vous souhaitez ajuster la priorité des données "blobs" |
| priorité | Integer | &#8594;  | Priorité des données "blobs" de la table dans le cache |

<!-- END REF-->

#### Mode expert 

<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Summary-->Cette commande est réservée pour des besoins spécifiques.<!-- END REF--> Elle doit être utilisée avec précaution car elle peut affecter les performances de la base. 

#### Description 

La commande **ADJUST BLOBS CACHE PRIORITY** modifie la valeur de *priorité* des données "blobs" de *laTable* chargées dans le cache pour le process courant. Un appel à cette commande remplace toute valeur précédente modifiée avec la même commande dans le même process. Cette commande ajuste la priorité pour des besoins ponctuels, par exemple lors de l'exécution d'un import ou d'une recherche.

**Note :** Cette commande fonctionne en mode local seulement (4D Server et 4D) ; elle ne peut pas être utilisée avec 4D en mode distant.

 Les champs de données "blobs" incluent les types BLOB, texte, image et objet. La commande modifie la priorité de ces données uniquement lorsqu'elles sont stockées dans le fichier de données. La priorité des champs de données scalaires (telles que des dates ou des numériques) est ajustée par la commande [ADJUST TABLE CACHE PRIORITY](adjust-table-cache-priority.md). 

Passez dans le paramètre *priorité* une des constantes du thème "*Gestion du cache*" :

| Constante                | Comment                                              |
| ------------------------ | ---------------------------------------------------- |
| Cache priority low       |                                                      |
| Cache priority very low  |                                                      |
| Cache priority normal    | Rétablit la priorité de cache à sa valeur par défaut |
| Cache priority high      |                                                      |
| Cache priority very high |                                                      |

#### Exemple 

Vous souhaitez modifier temporairement la priorité des champs Texte de la table \[Docs\]Comments dans le cache pour effectuer une recherche séquentielle :

```4d
 ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority very high)
 QUERY([Docs];[Docs]Auteur#"A@") // recherche séquentielle sur un champ non indexé
  //...réalisation d'autres recherches ou tris sur la même table
  //à l'issue, retour à la priorité de cache normale
 ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority normal)
```

#### Voir aussi 

[Get adjusted blobs cache priority](get-adjusted-blobs-cache-priority.md)  
[SET BLOBS CACHE PRIORITY](set-blobs-cache-priority.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1431 |
| Thread safe | &check; |
| Interdite sur le serveur ||



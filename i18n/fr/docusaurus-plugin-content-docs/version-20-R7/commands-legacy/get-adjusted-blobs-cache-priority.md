---
id: get-adjusted-blobs-cache-priority
title: Get adjusted blobs cache priority
slug: /commands/get-adjusted-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted blobs cache priority.Syntax-->**Get adjusted blobs cache priority** ( *laTable* ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted blobs cache priority.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table pour laquelle connaître la valeur de priorité des "blobs" |
| Résultat | Integer | &#8592; | Valeur de priorité courante pour les champs "blobs" |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get adjusted blobs cache priority.Summary-->La commande **Get adjusted blobs cache priority** retourrne la valeur ajustée de priorité de cache appliquée par le gestionnaire de cache aux données de type "blobs" de *laTable*.<!-- END REF--> Cette commande est destinée uniquement à la phase de débogage et de mise au point de l'application. 

**Note :** Cette commande fonctionne en mode local seulement (4D Server et 4D) ; elle ne peut pas être utilisée avec 4D en mode distant. 

#### Voir aussi 

[ADJUST BLOBS CACHE PRIORITY](adjust-blobs-cache-priority.md)  
*Gestion des priorités dans le cache de la base*  
[SET BLOBS CACHE PRIORITY](set-blobs-cache-priority.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1428 |
| Thread safe | &check; |
| Interdite sur le serveur ||



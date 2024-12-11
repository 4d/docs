---
id: get-adjusted-table-cache-priority
title: Get adjusted table cache priority
slug: /commands/get-adjusted-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted table cache priority.Syntax-->**Get adjusted table cache priority** ( *laTable* ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted table cache priority.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table pour laquelle connaître la valeur de priorité des données scalaires |
| Résultat | Integer | &#8592; | Valeur de priorité courante pour les champs scalaires |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get adjusted table cache priority.Summary-->La commande **Get adjusted table cache priority** retourrne la valeur ajustée de priorité de cache appliquée par le gestionnaire de cache aux données scalaires de laTable.<!-- END REF--> Cette commande est destinée uniquement à la phase de débogage et de mise au point de l'application. 

**Note :** Cette commande fonctionne en mode local seulement (4D Server et 4D) ; elle ne peut pas être utilisée avec 4D en mode distant. 

Les types de données scalaires incluent les types date/heure, numériques et alpha.

#### Voir aussi 

[ADJUST TABLE CACHE PRIORITY](adjust-table-cache-priority.md)  
*Gestion des priorités dans le cache de la base*  
[SET TABLE CACHE PRIORITY](set-table-cache-priority.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1426 |
| Thread safe | &check; |
| Interdite sur le serveur ||



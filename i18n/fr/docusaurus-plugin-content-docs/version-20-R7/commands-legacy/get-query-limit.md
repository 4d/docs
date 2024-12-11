---
id: get-query-limit
title: Get query limit
slug: /commands/get-query-limit
displayed_sidebar: docs
---

<!--REF #_command_.Get query limit.Syntax-->**Get query limit** : Integer<!-- END REF-->
<!--REF #_command_.Get query limit.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Nombre limite d’enregistrements, 0 = nombre illimité |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get query limit.Summary-->La commande **Get query limit** retourne la limite du nombre d’enregistrements qu’une recherche pourra trouver dans le process courant.<!-- END REF--> 

Vous fixez cette limite à l’aide de la commande [SET QUERY LIMIT](set-query-limit.md). 

Par défaut, si aucune limite n’a été définie, la commande retourne 0.

#### Voir aussi 

[SET QUERY LIMIT](set-query-limit.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1156 |
| Thread safe | &check; |
| Interdite sur le serveur ||



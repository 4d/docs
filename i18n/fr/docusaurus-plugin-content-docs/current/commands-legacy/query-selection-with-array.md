---
id: query-selection-with-array
title: QUERY SELECTION WITH ARRAY
slug: /commands/query-selection-with-array
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION WITH ARRAY.Syntax-->**QUERY SELECTION WITH ARRAY** ( *champCible* ; *tableau* )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION WITH ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| champCible | Field | &#8594;  | Champ duquel comparer les valeurs |
| tableau | Array | &#8594;  | Tableau des valeurs recherchées |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY SELECTION WITH ARRAY.Summary-->La commande **QUERY SELECTION WITH ARRAY** recherche dans la sélection courante de la table du champ passé en premier paramètre les enregistrements pour lesquels la valeur de *champCible* est égale à au moins une des valeurs des éléments du *tableau*.<!-- END REF--> Les enregistrements trouvés constituent la nouvelle sélection courante.

**QUERY SELECTION WITH ARRAY** fonctionne de la même manière que [QUERY WITH ARRAY](query-with-array.md). La différence entre ces deux commandes se situe au niveau de la portée de la recherche :

* [QUERY WITH ARRAY](query-with-array.md) effectue sa recherche parmi la totalité des enregistrements de la table de *champCible*.
* **QUERY SELECTION WITH ARRAY** effectue sa recherche uniquement parmi les enregistrements de la sélection courante de la table de *champCible*.

Pour plus d’informations, reportez-vous à la description de la commande [QUERY WITH ARRAY](query-with-array.md).

#### Voir aussi 

[QUERY WITH ARRAY](query-with-array.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1050 |
| Thread safe | &check; |
| Change la sélection courante ||



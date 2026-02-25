---
id: query-selection-with-array
title: QUERY SELECTION WITH ARRAY
slug: /commands/query-selection-with-array
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION WITH ARRAY.Syntax-->**QUERY SELECTION WITH ARRAY** ( *champCible* ; *tableau* )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION WITH ARRAY.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| champCible | Field | &#8594;  | Champ duquel comparer les valeurs |
| tableau | Array | &#8594;  | Tableau des valeurs recherchées |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL Release 2|Créé|

</details>
</div>

## Description 

<!--REF #_command_.QUERY SELECTION WITH ARRAY.Summary-->La commande **QUERY SELECTION WITH ARRAY** recherche dans la sélection courante de la table du champ passé en premier paramètre les enregistrements pour lesquels la valeur de *champCible* est égale à au moins une des valeurs des éléments du *tableau*.<!-- END REF--> Les enregistrements trouvés constituent la nouvelle sélection courante.

**QUERY SELECTION WITH ARRAY** fonctionne de la même manière que [QUERY WITH ARRAY](../commands/query-with-array). La différence entre ces deux commandes se situe au niveau de la portée de la recherche :

* [QUERY WITH ARRAY](../commands/query-with-array) effectue sa recherche parmi la totalité des enregistrements de la table de *champCible*.
* **QUERY SELECTION WITH ARRAY** effectue sa recherche uniquement parmi les enregistrements de la sélection courante de la table de *champCible*.

Pour plus d’informations, reportez-vous à la description de la commande [QUERY WITH ARRAY](../commands/query-with-array).

## Voir aussi 

[QUERY WITH ARRAY](../commands/query-with-array)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1050 |
| Thread safe | yes |
| Change la sélection courante ||



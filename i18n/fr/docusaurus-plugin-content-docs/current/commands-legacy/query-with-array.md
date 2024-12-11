---
id: query-with-array
title: QUERY WITH ARRAY
slug: /commands/query-with-array
displayed_sidebar: docs
---

<!--REF #_command_.QUERY WITH ARRAY.Syntax-->**QUERY WITH ARRAY** ( *champCible* ; *tableau* )<!-- END REF-->
<!--REF #_command_.QUERY WITH ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| champCible | Field | &#8594;  | Champ duquel comparer les valeurs |
| tableau | Array | &#8594;  | Tableau des valeurs recherchées |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY WITH ARRAY.Summary-->La commande **QUERY WITH ARRAY** recherche dans la table du champ passé en premier paramètre tous les enregistrements pour lesquels la valeur de *champCible* est égale à au moins une des valeurs des éléments du tableau *tableau*.<!-- END REF--> Les enregistrements trouvés constituent la nouvelle sélection courante.

Cette commande permet de construire rapidement et simplement une recherche sur plusieurs valeurs.

**Notes :**

* Cette commande ne peut pas être utilisée avec des champs de type image et BLOB.
* *champCible* et *tableau* doivent impérativement être du même type. Exception : vous pouvez utiliser un tableau de type Entier long avec un champ de type Heure.

#### Exemple 

Cet exemple permet de récupérer les enregistrements des clients français et américains :

```4d
 ARRAY TEXT(TabRecherche;2)
 TabRecherche{1}:="FR"
 TabRecherche{2}:="US"
 QUERY WITH ARRAY([Clients]Pays;TabRecherche)
```

#### Voir aussi 

[QUERY SELECTION WITH ARRAY](query-selection-with-array.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 644 |
| Thread safe | &check; |
| Change la sélection courante ||
| Interdite sur le serveur ||



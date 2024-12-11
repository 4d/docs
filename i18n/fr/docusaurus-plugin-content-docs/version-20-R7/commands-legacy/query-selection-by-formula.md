---
id: query-selection-by-formula
title: QUERY SELECTION BY FORMULA
slug: /commands/query-selection-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION BY FORMULA.Syntax-->**QUERY SELECTION BY FORMULA** ( *laTable* {; *formule*} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION BY FORMULA.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dans laquelle effectuer la recherche parmi la sélection courante |
| formule | Boolean | &#8594;  | Formule de recherche |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY SELECTION BY FORMULA.Summary-->La commande **QUERY SELECTION BY FORMULA** vous permet de rechercher des enregistrements dans *laTable*.<!-- END REF-->modifie la sélection courante de *laTable* pour le process courant et fait du premier enregistrement le nouvel enregistrement courant. 

**QUERY SELECTION BY FORMULA** fonctionne de la même manière que [QUERY BY FORMULA](query-by-formula.md). La différence entre ces deux commandes se situe au niveau de la portée de la recherche :

* [QUERY BY FORMULA](query-by-formula.md) effectue sa recherche parmi la totalité des enregistrements de la table.
* **QUERY SELECTION BY FORMULA** effectue sa recherche uniquement parmi les enregistrements de la sélection courante.

Pour plus d'informations, reportez-vous à la description de la commande [QUERY BY FORMULA](query-by-formula.md).

#### Voir aussi 

[QUERY](query.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY SELECTION](query-selection.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 207 |
| Thread safe | &check; |
| Change l'enregistrement courant ||
| Change la sélection courante ||
| Interdite sur le serveur ||



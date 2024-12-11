---
id: query-selection
title: QUERY SELECTION
slug: /commands/query-selection
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION.Syntax-->**QUERY SELECTION** ( {*laTable* }{;}{ *critère* {; *}} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dans laquelle effectuer la recherche ou ou Table par défaut si ce paramètre est omis |
| critère | Expression | &#8594;  | Lignes de recherche |
| * | Opérateur | &#8594;  | Attente d'exécution de la recherche |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY SELECTION.Summary-->**QUERY SELECTION** recherche des enregistrements dans *laTable*.<!-- END REF-->modifie la sélection courante de *laTable* pour le process courant. Le premier enregistrement de la nouvelle sélection devient l'enregistrement courant.

**QUERY SELECTION** a un fonctionnement et des effets proches de ceux de [QUERY](query.md). La différence entre ces deux commandes est la portée de la recherche :

* [QUERY](query.md) recherche des enregistrements dans la table.
* **QUERY SELECTION** recherche des enregistrements parmi la sélection courante de la table.

Pour plus d'informations, reportez-vous à la description de la commande [QUERY](query.md).

La commande **QUERY SELECTION** est utile lorsqu'une recherche ne peut pas être exprimée via une séquence d'appels à [QUERY](query.md) reliés à l'aide du paramètre *\**. Typiquement, c'est le cas lorsque vous souhaitez effectuer une recherche dans une sélection courante qui ne résulte pas d'une précédente recherche, mais de l'exécution d'une commande telle que [USE SET](use-set.md). 

#### Exemple 

Vous souhaitez effectuer une recherche parmi les enregistrements préalablement surlignés par l'utilisateur dans un formulaire liste. Vous pouvez écrire :

```4d
 USE SET("UserSet") //remplace la sélection courante par les enregistrements surlignés
 QUERY SELECTION([Sociétés];[Sociétés]Ville="Paris";*)
 QUERY SELECTION([Sociétés];[Sociétés]Activité="Affaires boursières")
```

Vous trouvez donc toutes les sociétés basées à Paris, dont l'activité est boursière, parmi la sélection initiale de l'utilisateur.

#### Voir aussi 

[QUERY](query.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 341 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Change l'enregistrement courant ||
| Change la sélection courante ||
| Interdite sur le serveur ||



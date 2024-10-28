---
id: set-query-and-lock
title: SET QUERY AND LOCK
slug: /commands/set-query-and-lock
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY AND LOCK.Syntax-->**SET QUERY AND LOCK** ( *verrou* )<!-- END REF-->
<!--REF #_command_.SET QUERY AND LOCK.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| verrou | Boolean | &#8594;  | Vrai = verrouiller les enregistrements trouvés par les recherches, Faux = ne pas les verrouiller |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET QUERY AND LOCK.Summary-->La commande **SET QUERY AND LOCK** vous permet de demander le verrouillage automatique des enregistrements trouvés par toutes les recherches qui suivent son appel dans la transaction courante.<!-- END REF--> Ce mécanisme permet de s’assurer que les enregistrements ne puissent pas être modifiés par un process autre que le process courant entre une recherche et la manipulation des résultats.

Par défaut, les enregistrements trouvés par les recherches ne sont pas verrouillés. Passez **Vrai** dans le paramètre *verrou* pour activer le verrouillage.

Cette commande doit impérativement être utilisée à l’intérieur d’une transaction. Si elle est appelée hors du contexte d’une transaction, une erreur est générée. Ce principe permet un meilleur contrôle du verrouillage des enregistrements. Les enregistrements trouvés restent verrouillés tant que la transaction n’a pas été terminée (qu’elle ait été validée ou annulée). A l’issue de la transaction, tous les enregistrements sont déverrouillés, excepté l'enregistrement courant.

Le verrouillage des enregistrements est effectif pour toutes les tables dans la transaction courante.

Lorsqu'une instruction **SET QUERY AND LOCK(Vrai)** a été exécutée, les commandes de recherche (par exemple [QUERY](query.md)) adoptent un fonctionnement spécifique si un enregistrement déjà verrouillé est trouvé :

* la recherche est stoppée et la variable système OK prend la valeur 0,
* la sélection courante est vidée,
* l'ensemble système LockedSet contient l'enregistrement verrouillé à l'origine de l'arrêt de la recherche.

Par conséquent, dans ce contexte il est nécessaire de tester l'ensemble LockedSet à l'issue d'une recherche infructueuse (sélection courante vide et/ou variable OK à 0) afin de déterminer la cause de l'échec.

Appelez **SET QUERY AND LOCK(Faux)** afin de désactiver le mécanisme après usage.

**SET QUERY AND LOCK** modifie uniquement le comportement des commandes de recherche, c'est-à-dire :

* [QUERY](query.md)
* [QUERY SELECTION](query-selection.md)
* [QUERY BY EXAMPLE](query-by-example.md)
* [QUERY BY FORMULA](query-by-formula.md)
* [QUERY SELECTION BY FORMULA](query-selection-by-formula.md)
* [QUERY BY SQL](query-by-sql.md)
* [QUERY WITH ARRAY](query-with-array.md)
* [QUERY SELECTION WITH ARRAY](query-selection-with-array.md)
* [QUERY BY ATTRIBUTE](query-by-attribute.md)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)

En revanche, **SET QUERY AND LOCK** n'affecte pas les autres commandes qui modifient la sélection courante telles que [ALL RECORDS](all-records.md), [RELATE MANY](relate-many.md), etc.

#### Exemple 

Dans cet exemple, il n’est pas possible de supprimer un client qui aurait été passé de la catégorie “C” à la catégorie “A” par un autre process entre le [QUERY](query.md) et le [DELETE SELECTION](delete-selection.md) : 

```4d
 START TRANSACTION
 SET QUERY AND LOCK(True)
 QUERY([Clients];[Clients]Catégorie=“C”)
  //A cet instant, les enregistrements trouvés sont automatiquement verrouillés pour tous les autres process
 DELETE SELECTION([Clients])
 SET QUERY AND LOCK(False)
 VALIDATE TRANSACTION
```

#### Gestion des erreurs 

Si la commande est appelée hors du contexte d’une transaction, une erreur est générée. 

#### Voir aussi 

[QUERY](query.md)  
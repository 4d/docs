---
id: create-entity-selection
title: Create entity selection
displayed_sidebar: docs
---

<!--REF #_command_.Create entity selection.Syntax-->***Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF-->

<!--REF #_command_.Create entity selection.Params-->

| Paramètres | Type                               |   | Description                                                                                          |
| ---------- | ---------------------------------- | - | ---------------------------------------------------------------------------------------------------- |
| dsTable    | Table                              | → | Table de la base 4D dont la sélection courante doit être utilisée pour construire l'entity selection |
| settings   | Object                             | → | Option de création : contexte                                                        |
| Résultat   | 4D.EntitySelection | ← | Nouvelle entity selection liée à la dataclass de la table                                            |

<!-- END REF-->

#### Description

La commande `Create entity selection` <!--REF #_command_.Create entity selection.Summary-->construit et renvoie une nouvelle entity selection [modifiable](../ORDA/entities.md#shareable-or-alterable-entity-selections) relative à la classe de données correspondant à la *dsTable* fournie, en fonction de la sélection actuelle de cette table<!-- END REF-->.

Si la sélection actuelle est triée, une entity selection [triée](../ORDA/dsMapping.md#ordered-or-unordered-entity-selection) est créée (l'ordre de la sélection actuelle est conservé). Si la sélection courante n'est pas triée, une entity selection non-triée est créée.

Si la *dsTable* n'est pas exposée dans [`ds`](ds.md), une erreur est retournée. Cette commande ne peut pas être utilisée avec un datastore distant.

Dans le paramètre optionnel *settings*, vous pouvez passer un objet contenant la propriété suivante :

| Propriété | Type | Description                                                                                                            |
| --------- | ---- | ---------------------------------------------------------------------------------------------------------------------- |
| context   | Text | Nom du [contexte d'optimisation](../ORDA/client-server-optimization.md) appliqué à l'entity selection. |

#### Exemple

```4d
var $employees : cs.EmployeeSelection
ALL RECORDS([Employee])
$employees:=Create entity selection([Employee]) 
// L'entity selection $employees contient maintenant un ensemble de 
// références vers toutes les entités de la dataclass Employee
```

#### Voir également

[USE ENTITY SELECTION](use-entity-selection.md)<br/>[`dataClass.newSelection()`](../API/DataClassClass.md#newselection)

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

The `Create entity selection` command <!--REF #_command_.Create entity selection.Summary-->builds and returns a new, [alterable](../ORDA/entities.md#shareable-or-alterable-entity-selections) entity selection related to the dataclass matching the given *dsTable*, according to the current selection of this table<!-- END REF-->.

If the current selection is sorted, an [ordered](../ORDA/dsMapping.md#ordered-or-unordered-entity-selection) entity selection is created (the order of the current selection is kept). Si la sélection courante n'est pas triée, une entity selection non-triée est créée.

If the *dsTable* is not exposed in [`ds`](ds.md), an error is returned. Cette commande ne peut pas être utilisée avec un datastore distant.

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

#### Propriétés

|                |                                     |
| -------------- | ----------------------------------- |
| Command number | 1512                                |
| Thread safe    | &amp;amp;check; |

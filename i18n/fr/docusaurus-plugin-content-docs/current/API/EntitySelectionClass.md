---
id: EntitySelectionClass
title: EntitySelection
---

An entity selection is an object containing one or more reference(s) to [entities](ORDA/dsMapping.md#entity) belonging to the same [Dataclass](ORDA/dsMapping.md#dataclass). Une entity selection peut contenir 0, 1 ou X entités de la dataclass - où X peut représenter le nombre total d'entités contenues dans la dataclass.

Entity selections can be created from existing selections using various functions of the [`DataClass` class](DataClassClass.md) such as [`.all()`](DataClassClass.md#all) or [`.query()`](DataClassClass.md#query), or functions of the `EntityClass` class itself, such as [`.and()`](#and) or [`orderBy()`](#orderby). You can also create blank entity selections using the [`dataClass.newSelection()`](DataClassClass.md#newselection) function or the [`Create new selection`](#create-new-selection) command.

### Sommaire

|                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntitySelectionClass.index.Syntax -->](#91index93)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE EntitySelectionClass.index.Summary -->                                                         |
| [<!-- INCLUDE EntitySelectionClass.attributeName.Syntax -->](#attributename)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE EntitySelectionClass.attributeName.Summary -->                                     |
| [<!-- INCLUDE #EntitySelectionClass.add().Syntax -->](#add)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.add().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.and().Syntax -->](#and)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.and().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.at().Syntax -->](#at)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.at().Summary -->                                                                |
| [<!-- INCLUDE #EntitySelectionClass.average().Syntax -->](#average)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.average().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.contains().Syntax -->](#contains)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.contains().Summary -->                                              |
| [<!-- INCLUDE #EntitySelectionClass.copy().Syntax -->](#contains)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.copy().Summary -->                                                      |
| [<!-- INCLUDE #EntitySelectionClass.count().Syntax -->](#count)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.count().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.distinct().Syntax -->](#distinct)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.distinct().Summary -->                                              |
| [<!-- INCLUDE #EntitySelectionClass.distinctPaths().Syntax -->](#distinctPaths)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.distinctPaths().Summary -->                               |
| [<!-- INCLUDE #EntitySelectionClass.drop().Syntax -->](#drop)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.drop().Summary -->                                                          |
| [<!-- INCLUDE #EntitySelectionClass.extract().Syntax -->](#extract)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.extract().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.first().Syntax -->](#first)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.first().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.getDataClass().Syntax -->](#getdataclass)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.getDataClass().Summary -->                                  |
| [<!-- INCLUDE #EntitySelectionClass.getRemoteContextAttributes().Syntax -->](#getremotecontextattributes)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Summary --> |
| [<!-- INCLUDE #EntitySelectionClass.isAlterable().Syntax -->](#isalterable)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.isAlterable().Summary -->                                     |
| [<!-- INCLUDE #EntitySelectionClass.isOrdered().Syntax -->](#isordered)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.isOrdered().Summary -->                                           |
| [<!-- INCLUDE #EntitySelectionClass.last().Syntax -->](#last)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.last().Summary -->                                                          |
| [<!-- INCLUDE #EntitySelectionClass.length.Syntax -->](#length)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.length.Summary -->                                                        |
| [<!-- INCLUDE #EntitySelectionClass.max().Syntax -->](#max)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.max().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.min().Syntax -->](#min)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.min().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.minus().Syntax -->](#minus)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.minus().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.or().Syntax -->](#or)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.or().Summary -->                                                                |
| [<!-- INCLUDE #EntitySelectionClass.orderBy().Syntax -->](#orderby)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.orderBy().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.orderByFormula().Syntax -->](#orderbyformula)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.orderByFormula().Summary -->                            |
| [<!-- INCLUDE #EntitySelectionClass.query().Syntax -->](#query)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.query().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.queryPath.Syntax -->](#querypath)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.queryPath.Summary -->                                               |
| [<!-- INCLUDE #EntitySelectionClass.queryPlan.Syntax -->](#queryplan)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.queryPlan.Summary -->                                               |
| [<!-- INCLUDE #EntitySelectionClass.refresh().Syntax -->](#refresh)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.refresh().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.selected().Syntax -->](#selected)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.selected().Summary -->                                              |
| [<!-- INCLUDE #EntitySelectionClass.slice().Syntax -->](#slice)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.slice().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.sum().Syntax -->](#sum)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.sum().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.toCollection().Syntax -->](#tocollection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.toCollection().Summary -->                                  |

## Create entity selection

<!-- REF #_command_.Create entity selection.Syntax -->**Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #_command_.Create entity selection.Params -->

| Paramètres | Type                               |     | Description                                                                                          |
| ---------- | ---------------------------------- | :-: | ---------------------------------------------------------------------------------------------------- |
| dsTable    | Table                              |  -> | Table de la base 4D dont la sélection courante doit être utilisée pour construire l'entity selection |
| settings   | Object                             |  -> | Option de création : contexte                                                        |
| Résultat   | 4D.EntitySelection |  <- | Nouvelle entity selection liée à la dataclass de la table                                            |

<!-- END REF -->

#### Description

The `Create entity selection` command builds and returns a new, [alterable](ORDA/entities.md#shareable-or-alterable-entity-selections) entity selection related to the dataclass matching the given _dsTable_, according to the current selection of this table.

If the current selection is sorted, an [ordered](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) entity selection is created (the order of the current selection is kept). Si la sélection courante n'est pas triée, une entity selection non-triée est créée.

If the _dsTable_ is not exposed in [`ds`](API/DataStoreClass.md#ds), an error is returned. Cette commande ne peut pas être utilisée avec un datastore distant.

In the optional _settings_ parameter, you can pass an object containing the following property:

| Propriété | Type | Description                                                                                                                  |
| --------- | ---- | ---------------------------------------------------------------------------------------------------------------------------- |
| context   | Text | Label for the [optimization context](../ORDA/client-server-optimization.md) applied to the entity selection. |

#### Exemple

```4d
var $employees : cs.EmployeeSelection
ALL RECORDS([Employee])
$employees:=Create entity selection([Employee]) 
// L'entity selection $employees contient maintenant un ensemble de 
// références vers toutes les entités de la dataclass Employee
```

#### Voir également

[`dataClass.newSelection()`](DataClassClass.md#newselection)

## USE ENTITY SELECTION

<!-- REF #_command_.USE ENTITY SELECTION.Syntax -->**USE ENTITY SELECTION** (*entitySelection*)<!-- END REF -->

<!-- REF #_command_.USE ENTITY SELECTION.Params -->

| Paramètres      | Type            |     | Description          |
| --------------- | --------------- | :-: | -------------------- |
| entitySelection | EntitySelection |  -> | Une entity selection |

<!-- END REF -->

#### Description

The `USE ENTITY SELECTION` command updates the current selection of the table matching the dataclass of the _entitySelection_ parameter, according to the content of the entity selection.

This command cannot be used with a [Remote datastore](../ORDA/remoteDatastores.md).

:::info

Cette commande est conçue pour permettre aux sélections courantes 4D de bénéficier de la puissance des requêtes ORDA. For performance reasons, in 4D single-user and 4D Server, the command directly connects _entitySelection_ to the current selection. Therefore, once _entitySelection_ has been used, it must not be reused or altered afterwards.

:::

:::note

After a call to `USE ENTITY SELECTION`, the first record of the updated current selection (if not empty) becomes the current record, but it is not loaded in memory. If you need to use the values of the fields in the current record, use the `LOAD RECORD` command after the `USE ENTITY SELECTION` command.

:::

#### Exemple

```4d
var $entitySel : cs.EmployeeSelection

$entitySel:=ds.Employee.query("lastName = :1";"M@") //$entitySel est associée à la dataclass Employee
REDUCE SELECTION([Employee];0)
USE ENTITY SELECTION($entitySel) //La sélection courante de la table Employee est mise à jour
```

<!-- REF EntitySelectionClass.index.Desc -->

## &#91_index_&#93

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF EntitySelectionClass.index.Syntax -->***[index]*** : 4D.Entity<!-- END REF -->

#### Description

The `EntitySelection[index]` notation <!-- REF EntitySelectionClass.index.Summary -->allows you to access entities within the entity selection using the standard collection syntax<!-- END REF -->: pass the position of the entity you want to get in the _index_ parameter.

A noter que l'entité correspondante est rechargée depuis le datastore.

_index_ can be any number between 0 and `.length`-1.

- If _index_ is out of range, an error is returned.
- If _index_ corresponds to a dropped entity, a Null value is returned.

:::caution

`EntitySelection[index]` is a non assignable expression, which means that it cannot be used as en editable entity reference with methods like [`.lock()`](EntityClass.md#lock) or [`.save()`](EntityClass.md#save). Pour travailler avec l'entité correspondante, vous devez assigner l'expression retournée à une expression assignable, comme une variable. Exemples :

```4d
 $sel:=ds.Employee.all() //creation de l'entity selection
  //code invalide:
 $result:=$sel[0].lock() //ne fonctionnera PAS
 $sel[0].lastName:="Smith" //ne fonctionnera PAS
 $result:=$sel[0].save() //ne fonctionnera PAS
  //code valide :
 $entity:=$sel[0]  //OK
 $entity.lastName:="Smith" //OK
 $entity.save() //OK
```

:::

#### Exemple

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@")
 $employee:=$employees[2]  // La 3e entité de l'entity selection $employees est rechargée depuis le datastore
```

<!-- END REF -->

<!-- REF EntitySelectionClass.attributeName.Desc -->

## ._attributeName_

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF EntitySelectionClass.attributeName.Syntax -->***.attributeName*** : Collection<br/>***.attributeName*** : 4D.EntitySelection<!-- END REF -->

#### Description

Tout attribut de dataclass peut être utilisé en tant que propriété d'une entity selection afin de retourner <!-- REF EntitySelectionClass.attributeName.Summary -->une "projection" des valeurs de l'attribut dans l'entity selection<!-- END REF -->. Projected values can be a collection or a new entity selection, depending on the [kind](DataClassClass.md#attributename) (`storage` or `relation`) of the attribute.

- If _attributeName_ kind is `storage`:
  `.attributeName` returns a collection of values of the same type as _attributeName_.
- If _attributeName_ kind is `relatedEntity`:
  `.attributeName` returns a new entity selection of related values of the same type as _attributeName_. Les doublons sont supprimés (une entity selection non ordonnée est retournée).
- If _attributeName_ kind is `relatedEntities`:
  `.attributeName` returns a new entity selection of related values of the same type as _attributeName_. Les doublons sont supprimés (une entity selection non ordonnée est retournée).

Lorsqu'un attribut relationnel est utilisé comme propriété d'une entity selection, le résultat est toujours une autre entity selection, même si une seule entité est retournée. Dans ce cas, si aucune entité n'est renvoyée, le résultat est une sélection d'entités vide.

Si l'attribut n'existe pas dans l'entity selection, une erreur est retournée.

#### Exemple 1

Projection de valeurs de stockage :

```4d
 var $firstNames : Collection
 $entitySelection:=ds.Employee.all()
 $firstNames:=$entitySelection.firstName // firstName est un texte
```

Le résultat est une collection de chaînes, par exemple :

```4d
[
    "Joanna",
    "Alexandra",
    "Rick"
]
```

#### Exemple 2

Projection d'entité liée :

```4d
 var $es; $entitySelection : cs.EmployeeSelection
 $entitySelection:=ds.Employee.all()
 $es:=$entitySelection.employer // employer est lié à la dataclass Company
```

L'objet résultant est une entity selection de la dataclass Company sans doublons (s'il y en a).

#### Exemple 3

Projection d'entités liées :

```4d
 var $es : cs.EmployeeSelection
 $es:=ds.Employee.all().directReports // directReports est récursif et lié à la dataclass Employee
```

L'objet résultant est une entity selection de la dataclass Employee sans doublons (s'il y en a).

<!-- END REF -->

<!-- REF EntitySelectionClass.add().Desc -->

## .add()

<details><summary>Historique</summary>

| Release | Modifications                                        |
| ------- | ---------------------------------------------------- |
| 19 R7   | Support of _entitySelection_ parameter               |
| 18 R5   | Supporte uniquement les entity selections altérables |
| 17      | Ajout                                                |

</details>

<!-- REF #EntitySelectionClass.add().Syntax -->**.add**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.add**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.add().Params -->

| Paramètres      | Type                               |     | Description                                                        |
| --------------- | ---------------------------------- | :-: | ------------------------------------------------------------------ |
| entity          | 4D.Entity          |  -> | Entité à ajouter à l'entity selection                              |
| entitySelection | 4D.EntitySelection |  -> | Entity selection à ajouter à l'entity selection d'origine          |
| Résultat        | 4D.EntitySelection |  -> | Entity selection including the added _entity_ or _entitySelection_ |

<!-- END REF -->

#### Description

The `.add()` function <!-- REF #EntitySelectionClass.add().Summary -->adds the specified _entity_ or _entitySelection_ to the original entity selection and returns the modified entity selection<!-- END REF -->.

> Cette fonction modifie l'entity selection d'origine.

:::info avertissement

The entity selection must be _alterable_, i.e. it has been created for example by [`.newSelection()`](DataClassClass.md#newselection) or `Create entity selection`, otherwise `.add()` will return an error. Les entity selections partageables n'acceptent pas l'ajout d'entités. For more information, please refer to the [Shareable or alterable entity selections](ORDA/entities.md#shareable-or-alterable-entity-selections) section.

:::

**Ajouter une entité**

- If the entity selection is ordered, _entity_ is added at the end of the selection. Si une référence à la même entité appartient déjà à l'entity selection, elle est dupliquée et une nouvelle référence est ajoutée.
- If the entity selection is unordered, _entity_ is added anywhere in the selection, with no specific order.

**Ajouter une entity selection**

- If the entity selection is ordered, its order is kept and _entitySelection_ is added at the end of the selection. If references to the same entities of _entitySelection_ already belong to the entity selection, they are duplicated and new references are added.
- Si l'entity selection n'est pas ordonnée, elle devient ordonnée.

> For more information, please refer to the [Ordered or unordered entity selection](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) section.

L'entity selection modifiée est retournée par la fonction, afin que les appels vers la fonction puissent être chaînés.

An error occurs if _entity_ and the entity selection are not related to the same Dataclass. If _entity_ is Null, no error is raised.

#### Exemple 1

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.newSelection()
 $employee:=ds.Employee.new()
 $employee.lastName:="Smith"
 $employee.save()
 $employees.add($employee) //L'entité $employee est ajoutée à l'entity selection $employees
```

#### Exemple 2

Les appels vers la fonction peuvent être chaînés :

```4d
 var $sel : cs.ProductSelection
 var $p1;$p2;$p3 : cs.ProductEntity

 $p1:=ds.Product.get(10)
 $p2:=ds.Product.get(11)
 $p3:=ds.Product.get(12)
 $sel:=ds.Product.newSelection()
 $sel:=$sel.add($p1).add($p2).add($p3)
```

#### Exemple 3

Dans une interface utilisateur, nous avons deux listes. L'utilisateur sélectionne des éléments de list1 pour les ajouter dans list2.

```4d
$sellist2:=$sellist2.add($sellist1)
```

<!-- END REF -->

<!-- REF EntitySelectionClass.and().Desc -->

## .and()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.and().Syntax -->**.and**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.and**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.and().Params -->

| Paramètres      | Type                               |     | Description                                                                      |
| --------------- | ---------------------------------- | :-: | -------------------------------------------------------------------------------- |
| entity          | 4D.Entity          |  -> | Entité à intersecter                                                             |
| entitySelection | 4D.EntitySelection |  -> | Entity selection à intersecter                                                   |
| Résultat        | 4D.EntitySelection |  <- | Entity selection résultante de l'intersection à l'aide de l'opérateur logique ET |

<!-- END REF -->

#### Description

The `.and()` function <!-- REF #EntitySelectionClass.and().Summary -->combines the entity selection with an _entity_ or _entitySelection_ parameter using the logical AND operator<!-- END REF -->; it returns a new, unordered entity selection that contains only the entities that are referenced in both the entity selection and the parameter.

- If you pass _entity_ as parameter, you combine this entity with the entity selection. Si l'entité appartient à l'entity selection, une nouvelle entity selection contenant uniquement l'entité est retournée. Sinon, une entity selection vide est retournée.
- If you pass _entitySelection_ as parameter, you combine both entity selections. Une nouvelle entity selection contenant uniquement les entités référencées dans les deux sélections est retournée. S'il n'y a pas d'intersection d'entité, une entity selection vide est retournée.

> You can compare [ordered and/or unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). La sélection résultante est toujours non ordonnée.

If the original entity selection or the _entitySelection_ parameter is empty, or if the _entity_ is Null, an empty entity selection is returned.

Si l'entity selection initiale et le paramètre ne sont pas liés à la même dataclass, une erreur est retournée.

#### Exemple 1

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@")   
  //The $employees entity selection contains the entity
  //with primary key 710 and other entities
  //for ex. "Colin Hetrick" / "Grady Harness" / "Sherlock Holmes" (primary key 710)
 $employee:=ds.Employee.get(710) // Returns "Sherlock Holmes"

 $result:=$employees.and($employee) //$result is an entity selection containing   
  //only the entity with primary key 710 ("Sherlock Holmes")
```

#### Exemple 2

Nous voulons obtenir une sélection d'employés nommés "Jones" qui vivent à New York :

```4d
 var $sel1; $sel2; $sel3 : cs.EmployeeSelection
 $sel1:=ds.Employee.query("name =:1";"Jones")
 $sel2:=ds.Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2)
```

<!-- END REF -->

<!-- REF EntitySelectionClass.at().Desc -->

## .at()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.at().Syntax -->**.at**( *index* : Integer ) : 4D.Entity <!-- END REF -->

<!-- REF #EntitySelectionClass.at().Params -->

| Paramètres | Type                      |     | Description                  |
| ---------- | ------------------------- | :-: | ---------------------------- |
| index      | Integer                   |  -> | Index de l'entité à renvoyer |
| Résultat   | 4D.Entity |  <- | L'entité à cet index         |

<!-- END REF -->

#### Description

The `.at()` function <!-- REF #EntitySelectionClass.at().Summary -->returns the entity at position _index_, allowing for positive and negative integer<!-- END REF -->.

If _index_ is negative (from -1 to -n with n : length of the entity selection), the returned entity will be based on the reverse order of the entity selection.

The function returns Null if _index_ is beyond entity selection limits.

#### Exemple

```4d
var $employees : cs.EmployeeSelection
var $emp1; $emp2 : cs.EmployeeEntity
$employees:=ds.Employee.query("lastName = :1";"H@")
$emp1:=$employees.at(2)  //3rd entity of the $employees entity selection 
$emp2:=$employees.at(-3) //starting from the end, 3rd entity
	//of the $employees entity selection
```

<!-- END REF -->

<!-- REF EntitySelectionClass.average().Desc -->

## .average()

<details><summary>Historique</summary>

| Release | Modifications                                     |
| ------- | ------------------------------------------------- |
| 18 R6   | Retourne undefined si l'entity selection est vide |
| 17      | Ajout                                             |

</details>

<!-- REF #EntitySelectionClass.average().Syntax -->**.average**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.average().Params -->

| Paramètres    | Type |     | Description                                                                                                                |
| ------------- | ---- | :-: | -------------------------------------------------------------------------------------------------------------------------- |
| attributePath | Text |  -> | Chemin de l'attribut à utiliser pour le calcul                                                                             |
| Résultat      | Real |  <- | Moyenne arithmétique des valeurs des entités pour l'attribut (Undefined pour une entity selection vide) |

<!-- END REF -->

#### Description

The `.average()` function <!-- REF #EntitySelectionClass.average().Summary -->returns the arithmetic mean (average) of all the non-null values of _attributePath_ in the entity selection<!-- END REF -->.

Pass in the _attributePath_ parameter the attribute path to evaluate.

Seules les valeurs numériques sont utilisées pour le calcul. Note however that, if the _attributePath_ of the entity selection contains mixed value types, `.average()` takes all scalar elements into account to calculate the average value.

> Les valeurs de type Date sont converties en valeurs numériques (secondes) et utilisées pour calculer la moyenne.

`.average()` returns **undefined** if the entity selection is empty or _attributePath_ does not contain numerical values.

Une erreur est retournée si :

- _attributePath_ is a related attribute,
- _attributePath_ designates an attribute that does not exist in the entity selection dataclass.

#### Exemple

Nous voulons obtenir la liste des employés dont le salaire est supérieur au salaire moyen :

```4d
 var $averageSalary : Real
 var $moreThanAv : cs.EmployeeSelection
 $averageSalary:=ds.Employee.all().average("salary")
 $moreThanAv:=ds.Employee.query("salary > :1";$averageSalary)
```

<!-- END REF -->

<!-- REF EntitySelectionClass.contains().Desc -->

## .contains()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.contains().Syntax -->**.contains**( *entity* : 4D.Entity ) : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.contains().Params -->

| Paramètres | Type                      |     | Description                                                  |
| ---------- | ------------------------- | :-: | ------------------------------------------------------------ |
| entity     | 4D.Entity |  -> | Entité à évaluer                                             |
| Résultat   | Boolean                   |  <- | Vrai si l'entité appartient à l'entity selection, sinon Faux |

<!-- END REF -->

#### Description

The `.contains()` function <!-- REF #EntitySelectionClass.contains().Summary -->returns true if entity reference belongs to the entity selection<!-- END REF -->, and false otherwise.

In _entity_, specify the entity to search for in the entity selection. Si l'entité est Null, la fonction retournera faux.

If _entity_ and the entity selection do not belong to the same dataclass, an error is raised.

#### Exemple

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity

 $employees:=ds.Employee.query("lastName=:1";"H@")
 $employee:=ds.Employee.get(610)

 If($employees.contains($employee))
    ALERT("The entity with primary key 610 has a last name beginning with H")
 Else
    ALERT("The entity with primary key 610 does not have a last name beginning with H")
 End if
```

<!-- END REF -->

<!-- REF EntitySelectionClass.count().Desc -->

## .count()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.count().Syntax -->**.count**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.count().Params -->

| Paramètres    | Type |     | Description                                                       |
| ------------- | ---- | :-: | ----------------------------------------------------------------- |
| attributePath | Text |  -> | Chemin de l'attribut à utiliser pour le calcul                    |
| Résultat      | Real |  <- | Number of non null _attributePath_ values in the entity selection |

<!-- END REF -->

#### Description

The `.count()` function <!-- REF #EntitySelectionClass.count().Summary -->returns the number of entities in the entity selection with a non-null value in _attributePath_<!-- END REF -->.

> Seules les valeurs scalaires sont prises en compte. Les valeurs de type objet ou collection sont considérées comme des valeurs null.

Une erreur est retournée si :

- _attributePath_ is a related attribute,
- _attributePath_ is not found in the entity selection dataclass.

#### Exemple

Nous voulons trouver le nombre total d'employés d'une entreprise sans compter ceux dont l'intitulé du poste n'a pas été défini :

```4d
 var $sel : cs.EmployeeSelection
 var $count : Real

 $sel:=ds.Employee.query("employer = :1";"Acme, Inc")
 $count:=$sel.count("jobtitle")
```

<!-- END REF -->

<!-- REF EntitySelectionClass.copy().Desc -->

## .copy()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R5   | Ajout         |

</details>

<!-- REF #EntitySelectionClass.copy().Syntax -->**.copy**( { *option* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.copy().Params -->

| Paramètres | Type                               |     | Description                                                      |
| ---------- | ---------------------------------- | :-: | ---------------------------------------------------------------- |
| option     | Integer                            |  -> | `ck shared`: return a shareable entity selection |
| Résultat   | 4D.EntitySelection |  <- | Copie de l'entity selection                                      |

<!-- END REF -->

#### Description

The `.copy()` function <!-- REF #EntitySelectionClass.copy().Summary -->returns a copy of the original entity selection<!-- END REF -->.

> Cette fonction ne modifie pas l'entity selection d'origine.

By default, if the _option_ parameter is omitted, the function returns a new, alterable entity selection (even if the function is applied to a shareable entity selection). Pass the `ck shared` constant in the _option_ parameter if you want to create a shareable entity selection.

> For information on the shareable property of entity selections, please refer to the [Shareable or alterable entity selections](ORDA/entities.md#shareable-or-alterable-entity-selections) section.

#### Exemple

Vous créez une nouvelle entity selection de produits, vide lorsque le formulaire est chargé :

```4d
 Case of
    :(Form event code=On Load)
       Form.products:=ds.Products.newSelection()
 End case

```

Cette entity selection est ensuite mise à jour avec les produits et vous souhaitez partager les produits entre plusieurs process. Copiez l'entity selection Form.products comme sélection partageable:

```4d
 ...
  // The Form.products entity selection is updated
 Form.products.add(Form.selectedProduct)

 Use(Storage)
    If(Storage.products=Null)
       Storage.products:=New shared object()
    End if

    Use(Storage.products)
       Storage.products:=Form.products.copy(ck shared)
    End use
 End use
```

<!-- END REF -->

<!-- REF EntitySelectionClass.distinct().Desc -->

## .distinct()

<details><summary>Historique</summary>

| Release | Modifications                |
| ------- | ---------------------------- |
| 20      | Support of `dk count values` |
| 17      | Ajout                        |

</details>

<!-- REF #EntitySelectionClass.distinct().Syntax -->**.distinct**( *attributePath* : Text { ; *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #EntitySelectionClass.distinct().Params -->

| Paramètres    | Type       |     | Description                                                             |
| ------------- | ---------- | :-: | ----------------------------------------------------------------------- |
| attributePath | Text       |  -> | Chemin de l'attribut dont vous souhaitez obtenir les valeurs distinctes |
| options       | Integer    |  -> | `dk diacritical`, `dk count values`                                     |
| Résultat      | Collection |  <- | Collection avec seulement les valeurs distinctes                        |

<!-- END REF -->

#### Description

The `.distinct()` function <!-- REF #EntitySelectionClass.distinct().Summary -->returns a collection containing only distinct (different) values from the _attributePath_ in the entity selection<!-- END REF -->.

La collection retournée est automatiquement triée. **Null** values are not returned.

In the _attributePath_ parameter, pass the entity attribute whose distinct values you want to get. Seules les valeurs scalaires (texte, nombre, booléen ou date) peuvent être gérées. If the _attributePath_ leads to an object property that contains values of different types, they are first grouped by type and sorted afterwards. Les types sont renvoyés dans l'ordre suivant :

1. booléens
2. chaînes
3. nombres
4. dates

You can use the `[]` notation to designate a collection when _attributePath_ is a path within an object (see examples).

In the _options_ parameter, you can pass one or a combination of the following constants:

| Constante         | Valeur | Commentaire                                                                                                                                                                                                                               |
| ----------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk diacritical`  | 8      | L'évaluation est sensible à la casse et différencie les caractères accentués. Par défaut si omis, une évaluation non diacritique est effectuée                                                                            |
| `dk count values` | 32     | Renvoie le nombre d'entités pour chaque valeur distincte. When this option is passed, `.distinct()` returns a collection of objects containing a pair of `{"value":*value*; "count":*count*}` properties. |

:::note

The `dk count values` option is only available with storage attributes of type boolean, string, number, and date.

:::

Une erreur est retournée si :

- _attributePath_ is a related attribute,
- _attributePath_ is not found in the entity selection dataclass.

#### Exemples

Vous souhaitez obtenir une collection contenant un seul élément par nom de pays :

```4d
var $countries : Collection
$countries:=ds.Employee.all().distinct("address.country")
//$countries[0]={"Argentina"}
//$countries[1]={"Australia"}
//$countries[2]={"Belgium"}
///...
```

`nicknames` is a collection and `extra` is an object attribute:

```4d
$values:=ds.Employee.all().distinct("extra.nicknames[].first")
```

Vous souhaitez connaître le nombre de noms de postes différents dans l'entreprise :

```4d
var $jobs : Collection
$jobs:=ds.Employee.all().distinct("jobName";dk count values)  
//$jobs[0]={"value":"Developer";"count":17}
//$jobs[1]={"value":"Office manager";"count":5}
//$jobs[2]={"value":"Accountant";"count":2}
//...
```

<!-- END REF -->

<!-- REF EntitySelectionClass.distinctPaths().Desc -->

## .distinctPaths()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.distinctPaths().Syntax -->**.distinctPaths**( *attribute* : Text ) : Collection<!-- END REF -->

<!-- REF #EntitySelectionClass.distinctPaths().Params -->

| Paramètres | Type       |     | Description                                                             |
| ---------- | ---------- | :-: | ----------------------------------------------------------------------- |
| attribute  | Text       |  -> | Nom de l'attribut objet dont vous souhaitez obtenir les chemins d'accès |
| Résultat   | Collection |  <- | Nouvelle collection avec chemins distincts                              |

<!-- END REF -->

#### Description

The `.distinctPaths()` function <!-- REF #EntitySelectionClass.distinctPaths().Summary -->returns a collection of distinct paths found in the indexed object _attribute_ for the entity selection<!-- END REF -->.

If _attribute_ is not an indexed object attribute, an error is generated.

After the call, the size of the returned collection is equal to the number of distinct paths found in _attribute_ for the entity selection. Les chemins sont renvoyés sous forme de chaînes, y compris les attributs imbriqués et les collections, par exemple "info.address.number" ou "children[].birthdate". Entities with a null value in the _attribute_ are not taken into account.

#### Exemple

You want to get all paths stored in a _fullData_ object attribute:

```4d
var $paths : Collection
$paths:=ds.Employee.all().distinctPaths("fullData")
//$paths[0]="age"
//$paths[1]="Children"
//$paths[2]="Children[].age"
//$paths[3]="Children[].name"
//$paths[4]="Children.length"
///...
```

:::note

_length_ is automatically added as path for nested collection properties.

:::

<!-- END REF -->

<!-- REF EntitySelectionClass.drop().Desc -->

## .drop()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.drop().Syntax -->**.drop**( { *mode* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.drop().Params -->

| Paramètres | Type                               |     | Description                                                                                                                                                |
| ---------- | ---------------------------------- | :-: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mode       | Integer                            |  -> | `dk stop dropping on first error`: stops method execution on first non-droppable entity                                                    |
| Résultat   | 4D.EntitySelection |  <- | Entity selection vide si exécutée avec succès, sinon entity selection contenant la ou les entité(s) non supprimée(s) |

<!-- END REF -->

#### Description

The `.drop()` function <!-- REF #EntitySelectionClass.drop().Summary -->removes the entities belonging to the entity selection from the table related to its dataclass within the datastore<!-- END REF -->. L'entity selection reste en mémoire.

> La suppression d'entités est permanente et ne peut pas être annulée. Il est recommandé d'appeler cette action dans une transaction afin d'avoir une possibilité de récupération.

If a locked entity is encountered during the execution of `.drop()`, it is not removed. Par défaut, la fonction traite toutes les entités de l'entity selection et renvoie des entités non supprimables dans l'entity selection. If you want the method to stop execution at the first encountered non-droppable entity, pass the `dk stop dropping on first error` constant in the _mode_ parameter.

#### Exemple

Example without the `dk stop dropping on first error` option:

```4d
 var $employees; $notDropped : cs.EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop() // $notDropped is an entity selection containing all the not dropped entities
 If($notDropped.length=0) //The delete action is successful, all the entities have been deleted
    ALERT("You have dropped "+String($employees.length)+" employees") //The dropped entity selection remains in memory
 Else
    ALERT("Problem during drop, try later")
 End if
```

Example with the `dk stop dropping on first error` option:

```4d
 var $employees; $notDropped : cs.EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop(dk stop dropping on first error) //$notDropped is an entity selection containing the first not dropped entity
 If($notDropped.length=0) //The delete action is successful, all the entities have been deleted
    ALERT("You have dropped "+String($employees.length)+" employees") //The dropped entity selection remains in memory
 Else
    ALERT("Problem during drop, try later")
 End if
```

<!-- END REF -->

<!-- REF EntitySelectionClass.extract().Desc -->

## .extract()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R3   | Ajout         |

</details>

<!-- REF #EntitySelectionClass.extract().Syntax -->

**.extract**( _attributePath_ : Text { ; _option_ : Integer } ) : Collection<br/>**.extract**( _attributePath_ { ; _targetPath_ } { ; _...attributePathN_ : Text ; _targetPathN_ : Text } ) : Collection<!-- END REF -->

<!-- REF #EntitySelectionClass.extract().Params -->

| Paramètres    | Type       |     | Description                                                                                                                |
| ------------- | ---------- | :-: | -------------------------------------------------------------------------------------------------------------------------- |
| attributePath | Text       |  -> | Chemin d'attribut dont les valeurs doivent être extraites dans la nouvelle collection                                      |
| targetPath    | Text       |  -> | Chemin ou nom d'attribut cible                                                                                             |
| option        | Integer    |  -> | `ck keep null`: include null attributes in the returned collection (ignored by default) |
| Résultat      | Collection |  <- | Collection contenant les valeurs extraites                                                                                 |

<!-- END REF -->

#### Description

The `.extract()` function <!-- REF #EntitySelectionClass.extract().Summary -->returns a collection containing _attributePath_ values extracted from the entity selection<!-- END REF -->.

_attributePath_ can refer to:

- un attribut scalaire de dataclass,
- une entité liée,
- des entités liées.

If _attributePath_ is invalid, an empty collection is returned.

Cette fonction accepte deux syntaxes.

**.extract( attributePath : Text { ; option : Integer } ) : Collection**

With this syntax, `.extract()` populates the returned collection with the _attributePath_ values of the entity selection.

By default, entities for which _attributePath_ is _null_ or undefined are ignored in the resulting collection. You can pass the `ck keep null` constant in the _option_ parameter to include these values as **null** elements in the returned collection.

- Dataclass attributes with [.kind](DataClassClass.md#attributename) = "relatedEntity" are extracted as a collection of entities (duplications are kept).
- Dataclass attributes with [.kind](DataClassClass.md#attributename) = "relatedEntities" are extracted as a collection of entity selections.

**.extract ( attributePath ; targetPath { ; ...attributePathN ; ... targetPathN}) : Collection**

With this syntax, `.extract()` populates the returned collection with the _attributePath_ properties. Each element of the returned collection is an object with _targetPath_ properties filled with the corresponding _attributePath_ properties. Null values are kept (_option_ parameter is ignored with this syntax).

If several _attributePath_ are given, a _targetPath_ must be given for each. Only valid pairs \[_attributePath_, _targetPath_] are extracted.

- Dataclass attributes with [.kind](DataClassClass.md#attributename) = "relatedEntity" are extracted as an entity.
- Dataclass attributes with [.kind](DataClassClass.md#attributename) = "relatedEntities" are extracted as an entity selection.

> Les entités d'une collection d'entités auxquelles on accède par \[ ] ne sont pas rechargées depuis la base de données.

#### Exemple

Considérons les tables et relations suivantes :

![](../assets/en/API/entityselection.PNG)

```4d
 var $firstnames; $addresses; $mailing; $teachers : Collection
  //
  //
  //$firstnames is a collection of Strings


 $firstnames:=ds.Teachers.all().extract("firstname")
  //
  //$addresses is a collection of entities related to dataclass Address
  //Null values for address are extracted
 $addresses:=ds.Teachers.all().extract("address";ck keep null)
  //
  //
  //$mailing is a collection of objects with properties "who" and "to"
  //"who" property content is String type
  //"to" property content is entity type (Address dataclass)
 $mailing:=ds.Teachers.all().extract("lastname";"who";"address";"to")
  //
  //
  //$mailing is a collection of objects with properties "who" and "city"
  //"who" property content is String type
  //"city" property content is String type
 $mailing:=ds.Teachers.all().extract("lastname";"who";"address.city";"city")
  //
  //$teachers is a collection of objects with properties "where" and "who"
  //"where" property content is String
  //"who" property content is an entity selection (Teachers dataclass)
 $teachers:=ds.Address.all().extract("city";"where";"teachers";"who")
  //
  //$teachers is a collection of entity selections
 $teachers:=ds.Address.all().extract("teachers")
```

<!-- END REF -->

<!-- REF EntitySelectionClass.first().Desc -->

## .first()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.first().Syntax -->**.first()** : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.first().Params -->

| Paramètres | Type                      |     | Description                                                                                                |
| ---------- | ------------------------- | :-: | ---------------------------------------------------------------------------------------------------------- |
| Résultat   | 4D.Entity |  <- | Référence vers la première entité de l'entity selection (Null si la selection est vide) |

<!-- END REF -->

#### Description

The `.first()` function <!-- REF #EntitySelectionClass.first().Summary -->returns a reference to the entity in the first position of the entity selection<!-- END REF -->.

Le résultat de cette fonction est similaire à :

```4d
 $entity:=$entitySel[0]
```

Il existe cependant une différence entre les deux instructions lorsque la sélection est vide :

```4d
 var $entitySel : cs.EmpSelection
 var $entity : cs.EmpEntity
 $entitySel:=ds.Emp.query("lastName = :1";"Nonexistentname") //no matching entity
  //entity selection is then empty
 $entity:=$entitySel.first() //returns Null
 $entity:=$entitySel[0]  //generates an error
```

#### Exemple

```4d
 var $entitySelection : cs.EmpSelection
 var $entity : cs.EmpEntity
 $entitySelection:=ds.Emp.query("salary > :1";100000)
 If($entitySelection.length#0)
    $entity:=$entitySelection.first()
 End if
```

<!-- END REF -->

<!-- REF EntitySelectionClass.getDataClass().Desc -->

## .getDataClass()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #EntitySelectionClass.getDataClass().Syntax -->**.getDataClass()** : 4D.DataClass<!-- END REF -->

<!-- REF #EntitySelectionClass.getDataClass().Params -->

| Paramètres | Type                         |     | Description                                        |
| ---------- | ---------------------------- | :-: | -------------------------------------------------- |
| Résultat   | 4D.DataClass |  <- | Dataclass à laquelle appartient l'entity selection |

<!-- END REF -->

#### Description

The `.getDataClass()` function <!-- REF #EntitySelectionClass.getDataClass().Summary -->returns the dataclass of the entity selection<!-- END REF -->.

Cette fonction est utile principalement dans le contexte de code générique.

#### Exemple

Le code générique suivant duplique toutes les entités de l'entity selection :

```4d
  //duplicate_entities method
  //duplicate_entities($entity_selection)

 #DECLARE ( $entitySelection : 4D.EntitySelection )  
 var $dataClass : 4D.DataClass
 var $entity; $duplicate : 4D.Entity
 var $status : Object
 $dataClass:=$entitySelection.getDataClass()
 For each($entity;$entitySelection)
    $duplicate:=$dataClass.new()
    $duplicate.fromObject($entity.toObject())
    $duplicate[$dataClass.getInfo().primaryKey]:=Null //reset the primary key
    $status:=$duplicate.save()
 End for each
```

<!-- END REF -->

<!-- REF EntitySelectionClass.getRemoteContextAttributes().Desc -->

## .getRemoteContextAttributes()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19R5    | Ajout         |

</details>

<!-- REF #EntitySelectionClass.getRemoteContextAttributes().Syntax -->**.getRemoteContextAttributes()** : Text<!-- END REF -->

<!-- REF #EntitySelectionClass.getRemoteContextAttributes().Params -->

| Paramètres | Type |    | Description                                                                  |
| ---------- | ---- | -- | ---------------------------------------------------------------------------- |
| result     | Text | <- | Attributs de contexte associés à l'entity selection, séparés par une virgule |

<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. Dans la plupart des cas, vous n'aurez pas besoin de l'utiliser.

#### Description

The `.getRemoteContextAttributes()` function <!-- REF #EntitySelectionClass.getRemoteContextAttributes().Summary -->returns information about the optimization context used by the entity selection<!-- END REF -->.

If there is no [optimization context](../ORDA/remoteDatastores.md#clientserver-optimization) for the entity selection, the function returns an empty Text.

#### Exemple

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $p : cs.PersonsEntity

var $info : Text
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$persons:=$ds.Persons.all()
$text:=""
For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / "
End for each

$info:=$persons.getRemoteContextAttributes()
//$info = "firstname,address,address.city"
```

#### Voir également

[Entity.getRemoteContextAttributes()](./EntityClass.md#getRemoteContextAttributes)<br/>[.clearAllRemoteContexts()](./DataStoreClass.md#clearallremotecontexts)<br/>[.getRemoteContextInfo()](./DataStoreClass.md#getremotecontextinfo)<br/>[.getAllRemoteContexts()](./DataStoreClass.md#getallremotecontexts)<br/>[.setRemoteContextInfo()](./DataStoreClass.md#setremotecontextinfo)

<!-- REF EntitySelectionClass.isAlterable().Desc -->

## .isAlterable()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R5   | Ajout         |

</details>

<!-- REF #EntitySelectionClass.isAlterable().Syntax -->**.isAlterable()** : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isAlterable().Params -->

| Paramètres | Type    |     | Description                                           |
| ---------- | ------- | :-: | ----------------------------------------------------- |
| Résultat   | Boolean |  <- | Vrai si l'entity selection est modifiable, sinon Faux |

<!-- END REF -->

#### Description

The `.isAlterable()` function <!-- REF #EntitySelectionClass.isAlterable().Summary -->returns True if the entity selection is alterable<!-- END REF -->, and False if the entity selection is not alterable.

For more information, please refer to [Shareable or alterable entity selections](ORDA/entities.md#shareable-or-alterable-entity-selections).

#### Exemple

You are about to display `Form.products` in a [list box](FormObjects/listbox_overview.md) to allow the user to add new products. Vous voulez vous assurer qu'elle est modifiable afin que l'utilisateur puisse ajouter de nouveaux produits sans erreur :

```4d
If (Not(Form.products.isAlterable()))
    Form.products:=Form.products.copy()
End if
...
Form.products.add(Form.product)
```

<!-- END REF -->

<!-- REF EntitySelectionClass.isOrdered().Desc -->

## .isOrdered()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.isOrdered().Syntax -->**.isOrdered()** : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isOrdered().Params -->

| Paramètres | Type    |     | Description                                      |
| ---------- | ------- | :-: | ------------------------------------------------ |
| Résultat   | Boolean |  <- | Vrai si l'entity selection est triée, sinon Faux |

<!-- END REF -->

#### Description

The `.isOrdered()` function <!-- REF #EntitySelectionClass.isOrdered().Summary -->returns True if the entity selection is ordered<!-- END REF -->, and False if it is unordered.

> Cette fonction renvoie toujours Vrai lorsque l'entity selection provient d'un datastore distant.

For more information, please refer to [Ordered or unordered entity selection](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

#### Exemple

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $isOrdered : Boolean
 $employees:=ds.Employee.newSelection(dk keep ordered)
 $employee:=ds.Employee.get(714) // Gets the entity with primary key 714

  //In an ordered entity selection, we can add the same entity several times (duplications are kept)
 $employees.add($employee)
 $employees.add($employee)
 $employees.add($employee)

 $isOrdered:=$employees.isOrdered()
 If($isOrdered)
    ALERT("The entity selection is ordered and contains "+String($employees.length)+" employees")
 End if
```

<!-- END REF -->

<!-- REF EntitySelectionClass.last().Desc -->

## .last()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.last().Syntax -->**.last()** : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.last().Params -->

| Paramètres | Type                      |     | Description                                                                                                      |
| ---------- | ------------------------- | :-: | ---------------------------------------------------------------------------------------------------------------- |
| Résultat   | 4D.Entity |  <- | Référence vers la dernière entité de l'entity selection (Null si l'entity selection est vide) |

<!-- END REF -->

#### Description

The `.last()` function <!-- REF #EntitySelectionClass.last().Summary -->returns a reference to the entity in last position of the entity selection<!-- END REF -->.

Le résultat de cette fonction est similaire à :

```4d
 $entity:=$entitySel[length-1]
```

Si l'entity selection est vide, la fonction renvoie Null.

#### Exemple

```4d
 var $entitySelection : cs.EmpSelection
 var $entity : cs.EmpEntity
 $entitySelection:=ds.Emp.query("salary < :1";50000)
 If($entitySelection.length#0)
    $entity:=$entitySelection.last()
 End if
```

<!-- END REF -->

<!-- REF EntitySelectionClass.length.Desc -->

## .length

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.length.Syntax -->**.length** : Integer<!-- END REF -->

#### Description

The `.length` property <!-- REF #EntitySelectionClass.length.Summary -->returns the number of entities in the entity selection<!-- END REF -->. Si l'entity selection est vide, elle contient 0.

Entity selections always have a `.length` property.

> To know the total number of entities in a dataclass, it is recommended to use the [`getCount()`](DataClassClass.md#getcount) function which is more optimized than the `ds.myClass.all().length` expression.

#### Exemple

```4d
 var $vSize : Integer
 $vSize:=ds.Employee.query("gender = :1";"male").length
 ALERT(String(vSize)+" employés masculins trouvés.")
```

<!-- END REF -->

<!-- REF EntitySelectionClass.max().Desc -->

## .max()

<details><summary>Historique</summary>

| Release | Modifications                                     |
| ------- | ------------------------------------------------- |
| 17      | Ajout                                             |
| 18 R6   | Retourne undefined si l'entity selection est vide |

</details>

<!-- REF #EntitySelectionClass.max().Syntax -->**.max**( *attributePath* : Text ) : any<!-- END REF -->

<!-- REF #EntitySelectionClass.max().Params -->

| Paramètres    | Type |    | Description                                    |
| ------------- | ---- | -- | ---------------------------------------------- |
| attributePath | Text | -> | Chemin de l'attribut à utiliser pour le calcul |
| Résultat      | any  | <- | Valeur la plus haute de l'attribut             |

<!-- END REF -->

#### Description

The `.max()` function <!-- REF #EntitySelectionClass.max().Summary -->returns the highest (or maximum) value among all the values of _attributePath_ in the entity selection<!-- END REF -->. It actually returns the value of the last entity of the entity selection as it would be sorted in ascending order using the [`.orderBy()`](#orderby) function.

If you pass in _attributePath_ a path to an object property containing different types of values, the `.max()` function will return the maximum value within the first scalar type in the default 4D type list order (see [`.sort()`](CollectionClass.md#sort) description).

`.max()` returns **undefined** if the entity selection is empty or _attributePath_ is not found in the object attribute.

Une erreur est retournée si :

- _attributePath_ is a related attribute,
- _attributePath_ designates an attribute that does not exist in the entity selection dataclass.

#### Exemple

Nous souhaitons connaître le salaire le plus élevé parmi les employées :

```4d
 var $sel : cs.EmpSelection
 var $maxSalary : Real
 $sel:=ds.Employee.query("gender = :1";"female")
 $maxSalary:=$sel.max("salary")
```

<!-- END REF -->

<!-- REF EntitySelectionClass.min().Desc -->

## .min()

<details><summary>Historique</summary>

| Release | Modifications                                     |
| ------- | ------------------------------------------------- |
| 17      | Ajout                                             |
| 18 R6   | Retourne undefined si l'entity selection est vide |

</details>

<!-- REF #EntitySelectionClass.min().Syntax -->**.min**( *attributePath* : Text ) : any<!-- END REF -->

<!-- REF #EntitySelectionClass.min().Params -->

| Paramètres    | Type |     | Description                                    |
| ------------- | ---- | :-: | ---------------------------------------------- |
| attributePath | Text |  -> | Chemin de l'attribut à utiliser pour le calcul |
| Résultat      | any  |  <- | Valeur la plus basse de l'attribut             |

<!-- END REF -->

#### Description

The `.min()` function <!-- REF #EntitySelectionClass.min().Summary --> returns the lowest (or minimum) value among all the values of attributePath in the entity selection<!-- END REF -->.  It actually returns the first entity of the entity selection as it would be sorted in ascending order using the [`.orderBy()`](#orderby) function (excluding **null** values).

If you pass in _attributePath_ a path to an object property containing different types of values, the `.min()` function will return the minimum value within the first scalar value type in the type list order (see [`.sort()`](CollectionClass.md#sort) description).

`.min()` returns **undefined** if the entity selection is empty or _attributePath_ is not found in the object attribute.

Une erreur est retournée si :

- _attributePath_ is a related attribute,
- _attributePath_ designates an attribute that does not exist in the entity selection dataclass.

#### Exemple

Nous souhaitons connaître le salaire le plus bas parmi les employées :

```4d
 var $sel : cs.EmpSelection
 var $minSalary : Real
 $sel:=ds.Employee.query("gender = :1";"female")
 $minSalary:=$sel.min("salary")
```

<!-- END REF -->

<!-- REF EntitySelectionClass.minus().Desc -->

## .minus()

<details><summary>Historique</summary>

| Release | Modifications                    |
| ------- | -------------------------------- |
| 19 R7   | Support of _keepOrder_ parameter |
| 17      | Ajout                            |

</details>

<!-- REF #EntitySelectionClass.minus().Syntax -->**.minus**( *entity* : 4D.Entity { ; *keepOrder* : Integer } ) : 4D.EntitySelection<br/>**.minus**( *entitySelection* : 4D.EntitySelection { ; *keepOrder* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.minus().Params -->

| Paramètres      | Type                               |     | Description                                                                                                |
| --------------- | ---------------------------------- | :-: | ---------------------------------------------------------------------------------------------------------- |
| entity          | 4D.Entity          |  -> | Entité à soustraire                                                                                        |
| entitySelection | 4D.EntitySelection |  -> | Entity selection à soustraire                                                                              |
| keepOrder       | Integer                            |  -> | `dk keep ordered` (integer) to keep the initial order in the resulting entity selection |
| Résultat        | 4D.EntitySelection |  <- | Nouvelle entity selection ou une nouvelle référence sur l'entity selection existante                       |

<!-- END REF -->

#### Description

The `.minus()` function <!-- REF #EntitySelectionClass.minus().Summary -->excludes from the entity selection to which it is applied the _entity_ or the entities of _entitySelection_ and returns the resulting entity selection<!-- END REF -->.

- If you pass _entity_ as parameter, the function creates a new entity selection without _entity_ (if _entity_ belongs to the entity selection). If _entity_ was not included in the original entity selection, a new reference to the entity selection is returned.
- If you pass _entitySelection_ as parameter, the function returns an entity selection containing the entities belonging to the original entity selection without the entities belonging to _entitySelection_. You can compare [ordered and/or unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

By default, if you omit the _keepOrder_ parameter, the resulting entity selection is unordered. If you want to keep the order of the original entity selection (for example if you want to reuse the entity selection in a user interface), pass the `dk keep ordered` constant in _keepOrder_. Dans ce cas, le résultat est une entity selection ordonnée et l'ordre de l'entity selection initiale est conservé.

:::note

If you pass `dk keep ordered` in _keepOrder_ and the removed _entitySelection_ contains entities duplicated in the original entity selection, all occurences of the duplicates are removed.

:::

If the original entity selection or both the original entity selection and the _entitySelection_ parameter are empty, an empty entity selection is returned.

If _entitySelection_ is empty or if _entity_ is Null, a new reference to the original entity selection is returned.

Si l'entity selection initiale et le paramètre ne sont pas liés à la même dataclass, une erreur est retournée.

#### Exemple 1

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity

 $employees:=ds.Employee.query("lastName = :1";"H@")
  // The $employees entity selection contains the entity with primary key 710 and other entities
  // for ex. "Colin Hetrick", "Grady Harness", "Sherlock Holmes" (primary key 710)

 $employee:=ds.Employee.get(710) // Returns "Sherlock Holmes"

 $result:=$employees.minus($employee) //$result contains "Colin Hetrick", "Grady Harness"
```

#### Exemple 2

Vous voulez avoir une sélection d'employées nommées "Jones" qui vivent à New York :

```4d
 var $sel1; $sel2; $sel3 : cs.EmployeeSelection
 $sel1:=ds.Employee.query("name =:1";"Jones")
 $sel2:=ds.Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2).minus(ds.Employee.query("gender='male'"))
```

#### Exemple 3

Dans une interface utilisateur, nous avons une liste qui affiche des éléments dans un ordre spécifique. Si l'utilisateur sélectionne des éléments dans la liste pour les supprimer, l'ordre doit être conservé lors du rafraîchissement de la liste :

```4d
$listsel:=$listsel.minus($selectedItems; dk keep ordered)
```

<!-- END REF -->

<!-- REF EntitySelectionClass.or().Desc -->

## .or()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.or().Syntax -->**.or**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.or**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.or().Params -->

| Paramètres      | Type                               |     | Description                                                                    |
| --------------- | ---------------------------------- | :-: | ------------------------------------------------------------------------------ |
| entity          | 4D.Entity          |  -> | Entité à intersecter                                                           |
| entitySelection | 4D.EntitySelection |  -> | Entity selection à intersecter                                                 |
| Résultat        | 4D.EntitySelection |  <- | Nouvelle entity selection ou nouvelle référence à l'entity selection d'origine |

<!-- END REF -->

#### Description

The `.or()` function <!-- REF #EntitySelectionClass.or().Summary -->combines the entity selection with the _entity_ or _entitySelection_ parameter using the logical (not exclusive) OR operator<!-- END REF -->; it returns a new, unordered entity selection that contains all the entities from the entity selection and the parameter.

- If you pass _entity_ as parameter, you compare this entity with the entity selection. Si l'entité appartient à l'entity selection, une nouvelle référence à l'entity selection est retournée. Sinon, une nouvelle entity selection contenant l'entity selection d'origine et l'entité est retournée.
- If you pass _entitySelection_ as parameter, you compare entity selections. A new entity selection containing the entities belonging to the original entity selection or _entitySelection_ is returned (or is not exclusive, entities referenced in both selections are not duplicated in the resulting selection).

> You can compare [ordered and/or unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). La sélection résultante est toujours non ordonnée.

If the original entity selection and the _entitySelection_ parameter are empty, an empty entity selection is returned. If the original entity selection is empty, a reference to _entitySelection_ or an entity selection containing only _entity_ is returned.

If _entitySelection_ is empty or if _entity_ is Null, a new reference to the original entity selection is returned.

Si l'entity selection initiale et le paramètre ne sont pas liés à la même dataclass, une erreur est retournée.

#### Exemple 1

```4d
 var $employees1; $employees2; $result : cs.EmployeeSelection
 $employees1:=ds.Employee.query("lastName = :1";"H@") //"Colin Hetrick","Grady Harness"
 $employees2:=ds.Employee.query("firstName = :1";"C@") //"Colin Hetrick", "Cath Kidston"
 $result:=$employees1.or($employees2) //$result contient "Colin Hetrick", "Grady Harness","Cath Kidston"
```

#### Exemple 2

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") // "Colin Hetrick","Grady Harness", "Sherlock Holmes"
 $employee:=ds.Employee.get(686) //l'entité avec clé primaire 686 n'appartient pas à l'entity selection $employees 
  //elle correspond à l'employée "Mary Smith"

 $result:=$employees.or($employee) //$result contient "Colin Hetrick", "Grady Harness", "Sherlock Holmes", "Mary Smith"
```

<!-- END REF -->

<!-- REF EntitySelectionClass.orderBy().Desc -->

## .orderBy()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.orderBy().Syntax -->**.orderBy**( *pathString* : Text ) : 4D.EntitySelection<br/>**.orderBy**( *pathObjects* : Collection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.orderBy().Params -->

| Paramètres  | Type                               |     | Description                                                                                                                |
| ----------- | ---------------------------------- | :-: | -------------------------------------------------------------------------------------------------------------------------- |
| pathString  | Text                               |  -> | Chemin(s) d'attribut(s) et mode(s) de tri pour l'entity selection |
| pathObjects | Collection                         |  -> | Collection d'objets critère                                                                                                |
| Résultat    | 4D.EntitySelection |  <- | Nouvelle entity selection dans l'ordre spécifié                                                                            |

<!-- END REF -->

#### Description

The `.orderBy()` function <!-- REF #EntitySelectionClass.orderBy().Summary -->returns a new ordered entity selection containing all entities of the entity selection in the order specified by _pathString_ or _pathObjects_ criteria<!-- END REF -->.

> - Cette fonction ne modifie pas l'entity selection d'origine.
> - For more information on ordered entity selections, please refer to the [Ordered or unordered entity selection](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) section.

Vous devez utiliser un paramètre de critère pour définir la manière dont les entités doivent être triées. Deux paramètres différents sont pris en charge :

- _pathString_ (Text) : This parameter contains a formula made of 1 to x attribute paths and (optionally) sort orders, separated by commas. La syntaxe est :

```4d
"attributePath1 {desc or asc}, attributePath2 {desc or asc},..."
```

L'ordre dans lequel les attributs sont passés détermine la priorité de tri des entités. Par défaut, les attributs sont triés par ordre croissant. Vous pouvez définir l'ordre de tri de chaque propriété dans la formule de critère, séparée du chemin de propriété par un simple espace : passez "asc" pour trier par ordre croissant ou "desc" pour un ordre décroissant.

- _pathObjects_ (collection): each element of the collection contains an object structured in the following way:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

Par défaut, les attributs sont triés par ordre croissant ("descending" est false).

Vous pouvez ajouter autant d'objets que nécessaire dans la collection de critères.

> Les valeurs nulles sont évaluées comme étant inférieures aux autres valeurs.

If you pass an invalid attribute path in _pathString_ or _pathObject_, the function returns an empty entity selection.

#### Exemple

```4d
// order by formula
 $sortedEntitySelection:=$entitySelection.orderBy("firstName asc, salary desc")
 $sortedEntitySelection:=$entitySelection.orderBy("firstName")


  // order by collection avec ou sans tri
 $orderColl:=New collection
 $orderColl.push(New object("propertyPath";"firstName";"descending";False))
 $orderColl.push(New object("propertyPath";"salary";"descending";True))
 $sortedEntitySelection:=$entitySelection.orderBy($orderColl)

 $orderColl:=New collection
 $orderColl.push(New object("propertyPath";"manager.lastName"))

 $orderColl.push(New object("propertyPath";"salary"))
 $sortedEntitySelection:=$entitySelection.orderBy($orderColl)
```

<!-- END REF -->

<!-- REF EntitySelectionClass.orderByFormula().Desc -->

## .orderByFormula()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R6   | Ajout         |

</details>

<!-- REF #EntitySelectionClass.orderByFormula().Syntax -->**.orderByFormula**( *formulaString* : Text { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<br/>**.orderByFormula**( *formulaObj* : Object { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.orderByFormula().Params -->

| Paramètres    | Type                               |     | Description                                                    |
| ------------- | ---------------------------------- | :-: | -------------------------------------------------------------- |
| formulaString | Text                               |  -> | Chaîne formule                                                 |
| formulaObj    | Object                             |  -> | Objet formule                                                  |
| sortOrder     | Integer                            |  -> | `dk ascending` (default) or `dk descending` |
| settings      | Object                             |  -> | Paramètre(s) de la formule                  |
| Résultat      | 4D.EntitySelection |  <- | Nouvelle entity selection triée                                |

<!-- END REF -->

#### Description

The `.orderByFormula()` function <!-- REF #EntitySelectionClass.orderByFormula().Summary -->returns a new, ordered entity selection<!-- END REF --> containing all entities of the entity selection in the order defined through the _formulaString_ or _formulaObj_ and, optionally, _sortOrder_ and _settings_ parameters.

> Cette fonction ne modifie pas l'entity selection d'origine.

You can use either a _formulaString_ or a _formulaObj_ parameter:

- _formulaString_: you pass a 4D expression such as "Year of(this.birthDate)".
- _formulaObj_: pass a valid formula object created using the `Formula` or `Formula from string` command.

The _formulaString_ or _formulaObj_ is executed for each entity of the entity selection and its result is used to define the position of the entity in the returned entity selection. Le résultat doit être de type triable (booléen, date, numérique, texte, heure, null).

> Un résultat null est toujours la plus petite valeur.

By default if you omit the _sortOrder_ parameter, the resulting entity selection is sorted in ascending order. Optionnally, you can pass one of the following values in the _sortOrder_ parameter:

| Constante     | Valeur | Commentaire                                        |
| ------------- | ------ | -------------------------------------------------- |
| dk ascending  | 0      | Ordre de tri croissant (défaut) |
| dk descending | 1      | Ordre de tri décroissant                           |

Within the _formulaString_ or _formulaObj_, the processed entity and thus its attributes are available through the `This` command (for example, `This.lastName`).

You can pass parameter(s) to the formula using the `args` property (object) of the `settings` parameter: the formula receives the `settings.args` object in $1.

#### Exemple 1

Pour effectuer un tri d'étudiants à l'aide d'une formule texte :

```4d
 var $es1; $es2 : cs.StudentsSelection
 $es1:=ds.Students.query("nationality=:1";"French")
 $es2:=$es1.orderByFormula("length(this.lastname)") //croissant par défaut
 $es2:=$es1.orderByFormula("length(this.lastname)";dk descending)
```

Pour effectuer le même tri dans le même ordre, mais à l'aide d'un objet formule :

```4d
 var $es1; $es2 : cs.StudentsSelection
 var $formula : Object
 $es1:=ds.Students.query("nationality=:1";"French")
 $formula:=Formula(Length(This.lastname))
 $es2:=$es1.orderByFormula($formula) // croissant par défaut
 $es2:=$es1.orderByFormula($formula;dk descending)
```

#### Exemple 2

A formula is given as a formula object with parameters; `settings.args` object is received as $1 in the _**computeAverage**_ method.

In this example, the "marks" object field in the **Students** dataClass contains students' grades for each subject. Un seul objet formule est utilisé pour calculer la note moyenne des étudiants à l'aide de différents coefficients pour schoolA et schoolB.

```4d
 var $es1; $es2 : cs.StudentsSelection
 var $formula; $schoolA; $schoolB : Object
 $es1:=ds.Students.query("nationality=:1";"French")
 $formula:=Formula(computeAverage($1))

 $schoolA:=New object() //settings object
 $schoolA.args:=New object("english";1;"math";1;"history";1) // Coefficients to compute an average

  //Order students according to school A criteria
 $es2:=$es1.entitySelection.orderByFormula($formula;$schoolA)

 $schoolB:=New object() //settings object
 $schoolB.args:=New object("english";1;"math";2;"history";3) // Coefficients to compute an average

  //Order students according to school B criteria
 $es2:=$es1.entitySelection.orderByFormula($formula;dk descending;$schoolB)
```

```4d
  //
  // computeAverage method
  // -----------------------------
 #DECLARE ($coefList : Object) -> $result : Integer
 var $subject : Text
 var $average; $sum : Integer

 $average:=0
 $sum:=0

 For each($subject;$coefList)
    $sum:=$sum+$coefList[$subject]
 End for each

 For each($subject;This.marks)
    $average:=$average+(This.marks[$subject]*$coefList[$subject])
 End for each

 $result:=$average/$sum
```

<!-- END REF -->

<!-- REF EntitySelectionClass.query().Desc -->

## .query()

<details><summary>Historique</summary>

| Release | Modifications                                     |
| ------- | ------------------------------------------------- |
| 17 R6   | Prise en charge des paramètres Formula            |
| 17 R5   | Prise en charge des placeholders pour les valeurs |
| 17      | Ajout                                             |

</details>

<!-- REF #EntitySelectionClass.query().Syntax -->**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br/>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.query().Params -->

| Paramètres    | Type                               |     | Description                                                                                                                        |
| ------------- | ---------------------------------- | :-: | ---------------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Text                               |  -> | Critères de recherche en texte                                                                                                     |
| formula       | Object                             |  -> | Critères de recherche en objet formule                                                                                             |
| value         | any                                |  -> | Valeur(s) à utiliser comme placeholder(s)                                                    |
| querySettings | Object                             |  -> | Options de recherche : parameters, attributes, args, allowFormulas, context, queryPath, queryPlan                  |
| Résultat      | 4D.EntitySelection |  <- | New entity selection made up of entities from entity selection meeting the search criteria specified in _queryString_ or _formula_ |

<!-- END REF -->

#### Description

The `.query()` function <!-- REF #EntitySelectionClass.query().Summary -->searches for entities that meet the search criteria specified in _queryString_ or _formula_ and (optionally) _value_(s) among all the entities in the entity selection<!-- END REF -->, and returns a new object of type `EntitySelection` containing all the entities that are found. Le mode lazy loading est appliqué.

> Cette fonction ne modifie pas l'entity selection d'origine.

If no matching entities are found, an empty `EntitySelection` is returned.

For detailed information on how to build a query using _queryString_, _value_, and _querySettings_ parameters, please refer to the DataClass [`.query()`](DataClassClass.md#query) function description.

> By default if you omit the **order by** statement in the _queryString_, the returned entity selection is [not ordered](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). A noter cependant qu'en client/server, elle se comporte comme une entity selection triée (les entités sont ajoutées à la fin de la sélection).

#### Exemple 1

```4d
 var $entitySelectionTemp : cs.EmployeeSelection
 $entitySelectionTemp:=ds.Employee.query("lastName = :1";"M@")
 Form.emps:=$entitySelectionTemp.query("manager.lastName = :1";"S@")
```

#### Exemple 2

More examples of queries can be found in the DataClass [`.query()`](DataClassClass.md#query) page.

#### Voir également

[`.query()`](DataClassClass.md#query) for dataclass

<!-- END REF -->

<!-- REF EntitySelectionClass.queryPath.Desc -->

## .queryPath

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.queryPath.Syntax -->**.queryPath** : Text<!-- END REF -->

#### Description

The `.queryPath` property <!-- REF #EntitySelectionClass.queryPath.Summary -->contains a detailed description of the query as it was actually performed by 4D<!-- END REF -->. This property is available for `EntitySelection` objects generated through queries if the `"queryPath":true` property was passed in the _querySettings_ parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.html#query) page.

<!-- END REF -->

<!-- REF EntitySelectionClass.queryPlan.Desc -->

## .queryPlan

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.queryPlan.Syntax -->**.queryPlan** : Text<!-- END REF -->

#### Description

The `.queryPlan` property <!-- REF #EntitySelectionClass.queryPlan.Summary --> contains a detailed description of the query just before it is executed (i.e., the planned query)<!-- END REF -->. This property is available for `EntitySelection` objects generated through queries if the `"queryPlan":true` property was passed in the _querySettings_ parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.html#query) page.

<!-- END REF -->

<!-- REF EntitySelectionClass.refresh().Desc -->

## .refresh()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R3   | Ajout         |

</details>

<!-- REF #EntitySelectionClass.refresh().Syntax -->**.refresh()**<!-- END REF -->

<!-- REF #EntitySelectionClass.refresh().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

> This function only works with a remote datastore (client / server or `Open datastore` connection).

The `.refresh()` function <!-- REF #EntitySelectionClass.refresh().Summary -->immediately "invalidates" the entity selection data in the local ORDA cache<!-- END REF --> so that the next time 4D requires the entity selection, it will be reloaded from the database.

Par défaut, le cache local d'ORDA est invalidé après 30 secondes. Dans le contexte des applications client/serveur à l'aide d'ORDA et du langage classique, cette fonction vous permet d'être certain que l'application distante fonctionne toujours avec les données les plus récentes.

#### Exemple 1

Dans cet exemple, les langages classiques et ORDA modifient simultanément les mêmes données :

```4d
 //On a 4D remote

 var $selection : cs.StudentsSelection
 var $student : cs.StudentsEntity

 $selection:=ds.Students.query("lastname=:1";"Collins")
  //The first entity is loaded in the ORDA cache
 $student:=$selection.first()

  //Update with classic 4D, ORDA cache is not aware of if
 QUERY([Students];[Students]lastname="Collins")
 [Students]lastname:="Colin"
 SAVE RECORD([Students])

  //to get the latest version, the ORDA cache must be invalidated
 $selection.refresh()
  // Even if cache is not expired, the first entity is reloaded from disk
 $student:=$selection.first()

  //$student.lastname contains "Colin"
```

#### Exemple 2

Une list box affiche l'entity selection Form.students, sur laquelle plusieurs clients travaillent.

```4d
// Methode formulaire:
 Case of
    :(Form event code=On Load)
       Form.students:=ds.Students.all()
 End case
  //
  //
  // Sur client #1, l'utilisateur charge, met à jour et sauvegarde la première entité
  // Sur client #2, l'utilisateur charge, met à jour et sauvegarde la même entité
  //
  //
  // Sur client #1:
 Form.students.refresh() // Invalide le cache ORDA pour l'entity selection Form.students
  // Le contenu de la list box est rafraîchi à partir de la base avec les mises à jour effectuées par le client #2
```

<!-- END REF -->

<!-- REF EntitySelectionClass.selected().Desc -->

## .selected()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R3   | Ajout         |

</details>

<!-- REF #EntitySelectionClass.selected().Syntax -->**.selected**( *selectedEntities* : 4D.EntitySelection ) : Object<!-- END REF -->

<!-- REF #EntitySelectionClass.selected().Params -->

| Paramètres       | Type                               |     | Description                                                                              |
| ---------------- | ---------------------------------- | :-: | ---------------------------------------------------------------------------------------- |
| selectedEntities | 4D.EntitySelection |  -> | Entity selection avec des entités dont il faut connaître le rang dans l'entity selection |
| Résultat         | Object                             |  <- | Plage(s) d'entités sélectionnées dans l'entity selection              |

<!-- END REF -->

#### Description

The `.selected()` function <!-- REF #EntitySelectionClass.selected().Summary -->returns an object describing the position(s) of _selectedEntities_ in the original entity selection<!-- END REF -->.

> Cette fonction ne modifie pas l'entity selection d'origine.

Pass in the _selectedEntities_ parameter an entity selection containing entities for which you want to know the position in the original entity selection. _selectedEntities_ must be an entity selection belonging to the same dataclass as the original entity selection, otherwise an error 1587 - "The entity selection comes from an incompatible dataclass" is raised.

#### Résultat

L'objet retourné contient les propriétés suivantes :

| Propriété                                                                          | Type       | Description                              |
| ---------------------------------------------------------------------------------- | ---------- | ---------------------------------------- |
| ranges                                                                             | Collection | Collection d'objets plage                |
| ranges[].start | Integer    | Indice de la première entité de la plage |
| ranges[].end   | Integer    | Indice de la dernière entité de la plage |

If a `ranges` property contains a single entity, `start` = `end`. L'indice démarre à 0.

The function returns an empty collection in the `ranges` property if the original entity selection or the _selectedEntities_ entity selection is empty.

#### Exemple

```4d
var $invoices; $cashSel; $creditSel : cs.Invoices
var $result1; $result2 : Object

$invoices:=ds.Invoices.all()

$cashSelection:=ds.Invoices.query("payment = :1"; "Cash")
$creditSel:=ds.Invoices.query("payment IN :1"; New collection("Cash"; "Credit Card"))

$result1:=$invoices.selected($cashSelection)
$result2:=$invoices.selected($creditSel)

//$result1 = {ranges:[{start:0;end:0},{start:3;end:3},{start:6;end:6}]}
//$result2 = {ranges:[{start:0;end:1},{start:3;end:4},{start:6;end:7}]}

```

<!-- END REF -->

<!-- REF EntitySelectionClass.slice().Desc -->

## .slice()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.slice().Syntax -->**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.slice().Params -->

| Paramètres | Type                               |     | Description                                                                               |
| ---------- | ---------------------------------- | :-: | ----------------------------------------------------------------------------------------- |
| startFrom  | Integer                            |  -> | Position à laquelle démarrer l'opération (incluse)                     |
| end        | Integer                            |  -> | Position de fin (non incluse)                                          |
| Résultat   | 4D.EntitySelection |  <- | Nouvelle entity selection contenant les entités copiées (shallow copy) |

<!-- END REF -->

#### Description

The `.slice()` function <!-- REF #EntitySelectionClass.slice().Summary -->returns a portion of an entity selection into a new entity selection<!-- END REF -->, selected from the _startFrom_ index to the _end_ index (_end_ is not included) or to the last entity of the entity selection. Cette fonction effectue une shallow copy (copie superficielle) de l'entity selection (les mêmes références d'entités sont utilisées).

> Cette fonction ne modifie pas l'entity selection d'origine.

The returned entity selection contains the entities specified by _startFrom_ and all subsequent entities up to, but not including, the entity specified by _end_. If only the _startFrom_ parameter is specified, the returned entity selection contains all entities from _startFrom_ to the last entity of the original entity selection.

- If _startFrom_ < 0, it is recalculated as _startFrom:=startFrom+length_ (it is considered as the offset from the end of the entity selection). If the calculated value < 0, _startFrom_ is set to 0.
- If _startFrom >= length_, the function returns an empty entity selection.
- If _end_ < 0, it is recalculated as _end:=end+length_.
- If _end < startFrom_ (passed or calculated values), the method does nothing.

Si l'entity selection contient des entités qui ont été supprimées entre-temps, elles sont également retournées.

#### Exemple 1

Vous souhaitez obtenir une sous-sélection des 9 premières entités de l'entity selection :

```4d
var $sel; $sliced : cs.EmployeeSelection
$sel:=ds.Employee.query("salary > :1";50000)
$sliced:=$sel.slice(0;9) //
```

#### Exemple 2

En supposant que ds.Employee.all().length = 10

```4d
var $slice : cs.EmployeeSelection


$slice:=ds.Employee.all().slice(-1;-2) //tries to return entities from index 9 to 8, but since 9 > 8, returns an empty entity selection

```

<!-- END REF -->

<!-- REF EntitySelectionClass.sum().Desc -->

## .sum()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.sum().Syntax -->**.sum**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.sum().Params -->

| Paramètres    | Type |     | Description                                    |
| ------------- | ---- | :-: | ---------------------------------------------- |
| attributePath | Text |  -> | Chemin de l'attribut à utiliser pour le calcul |
| Résultat      | Real |  <- | Somme des valeurs de l'entity selection        |

<!-- END REF -->

#### Description

The `.sum()` function <!-- REF #EntitySelectionClass.sum().Summary -->returns the sum for all _attributePath_ values in the entity selection<!-- END REF -->.

`.sum()` returns 0 if the entity selection is empty.

La somme peut uniquement être effectuée sur des valeurs numériques. If the _attributePath_ is an object property, only numerical values are taken into account for the calculation (other value types are ignored). In this case, if _attributePath_ leads to a property that does not exist in the object or does not contain any numeric values, `.sum()` returns 0.

Une erreur est retournée si :

- _attributePath_ is not a numerical or an object attribute,
- _attributePath_ is a related attribute,
- _attributePath_ is not found in the entity selection dataclass.

#### Exemple

```4d
var $sel : cs.EmployeeSelection
var $sum : Real

$sel:=ds.Employee.query("salary < :1";20000)
$sum:=$sel.sum("salary")
```

<!-- END REF -->

<!-- REF EntitySelectionClass.toCollection().Desc -->

## .toCollection()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #EntitySelectionClass.toCollection().Syntax -->**.toCollection**( { *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer } } ) : *Collection*<br/>**.toCollection**( *filterString* : Text {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<br/>**.toCollection**( *filterCol* : Collection {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<!-- END REF -->

<!-- REF #EntitySelectionClass.toCollection().Params -->

| Paramètres   | Type       |     | Description                                                                                                     |
| ------------ | ---------- | :-: | --------------------------------------------------------------------------------------------------------------- |
| filterString | Text       |  -> | Chemin(s) d'attribut(s) à extraire                                        |
| filterCol    | Collection |  -> | Collection d'attribut(s) à extraire                                                          |
| options      | Integer    |  -> | `dk with primary key`: adds the primary key<br/>`dk with stamp`: adds the stamp |
| begin        | Integer    |  -> | Désigne la position de début                                                                                    |
| howMany      | Integer    |  -> | Nombre d'entités à extraire                                                                                     |
| Résultat     | Collection |  <- | Collection d'objets contenant les attributs et valeurs de l'entity selection                                    |

<!-- END REF -->

#### Description

The `.toCollection()` function <!-- REF #EntitySelectionClass.toCollection().Summary -->creates and returns a collection where each element is an object containing a set of properties and values <!-- END REF -->corresponding to the attribute names and values for the entity selection.

Si aucun paramètre de filtre n'est passé ou si le paramètre contient une chaîne vide ou "\*", tous les attributs sont extraits. Attributes with [kind](DataClassClass.md#attributename) property as "relatedEntity" are extracted with the simple form: an object with property \_\_KEY (primary key). Les attributs dont la propriété "kind" est "relatedEntities" ne sont pas extraits.

Vous pouvez également indiquer les attributs à extraire à l'aide d'un paramètre de filtre. Deux types de filtres sont utilisables :

- _filterString_ --a string with property paths separated with commas: "propertyPath1, propertyPath2, ...".
- _filterCol_ --a collection of strings containing property paths: \["propertyPath1","propertyPath2",...]

If a filter is specified for an attribute of the `relatedEntity` kind:

- propertyPath = "relatedEntity" -> it is extracted with simple form
- propertyPath = "relatedEntity.\*" -> all the properties are extracted
- propertyPath = "relatedEntity.propertyName1, relatedEntity.propertyName2, ..." -> only those properties are extracted

If a filter is specified for an attribute of the `relatedEntities` kind:

- propertyPath = "relatedEntities.\*" -> all the properties are extracted
- propertyPath = "relatedEntities.propertyName1, relatedEntities.propertyName2, ..." -> only those properties are extracted

In the _options_ parameter, you can pass the `dk with primary key` and/or `dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.

:::caution Warning

Si vous utilisez un autre attribut que la clé primaire comme attribut 1 dans une relation, la valeur de cet attribut sera inscrite dans la propriété "__KEY". Keep in mind that it is recommended to use the primary key as One attribute in your relations, especially when you use `.toCollection()` and `.fromCollection()` functions.

:::

The _begin_ parameter allows you to indicate the starting index of the entities to extract. Vous pouvez passer toute valeur comprise entre 0 et la longueur de l'entity selection -1.

The _howMany_ parameter lets you specify the number of entities to extract, starting with the one specified in _begin_. Dropped entities are not returned but are taken into account according to _howMany_. For example, if _howMany_= 3 and there is 1 dropped entity, only 2 entities are extracted.

If _howMany_ > length of the entity selection, the method returns (length - _begin_) objects.

Une collection vide est retournée si :

- l'entity selection est vide, ou
- _begin_ is greater than the length of the entity selection.

#### Exemple 1

La structure suivante sera utilisée pour les exemples de cette section :

![](../assets/en/API/dataclassAttribute4.png)

Exemple sans paramètres de filtre ni d'options :

```4d
 var $employeesCollection : Collection
 var $employees : cs.EmployeeSelection

 $employeesCollection:=New collection
 $employees:=ds.Employee.all()
 $employeesCollection:=$employees.toCollection()
```

Retourne :

```4d
[
    {
        "ID": 416,
        "firstName": "Gregg",
        "lastName": "Wahl",
        "salary": 79100,
        "birthDate": "1963-02-01T00:00:00.000Z",
        "woman": false,
        "managerID": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412

        }
    },
    {
        "ID": 417,
        "firstName": "Irma",
        "lastName": "Durham",
        "salary": 47000,
        "birthDate": "1992-06-16T00:00:00.000Z",
        "woman": true,
        "managerID": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412
        }
    }
]
```

#### Exemple 2

Retourne :

```4d
var $employeesCollection : Collection
var $employees : cs.EmployeeSelection

$employeesCollection:=New collection
$employees:=ds.Employee.all()
$employeesCollection:=$employees.toCollection("";dk with primary key+dk with stamp)
```

Retourne :

```4d
[
    {
        "__KEY": 416,
        "__STAMP": 1,
        "ID": 416,
        "firstName": "Gregg",
        "lastName": "Wahl",
        "salary": 79100,
        "birthDate": "1963-02-01T00:00:00.000Z",
        "woman": false,
        "managerID": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412
        }
    },
    {
        "__KEY": 417,
        "__STAMP": 1,
        "ID": 417,
        "firstName": "Irma",
        "lastName": "Durham",
        "salary": 47000,
        "birthDate": "1992-06-16T00:00:00.000Z",
        "woman": true,
        "managerID": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412
        }
    }]
```

#### Exemple 3

Retourne :

```4d
var $employeesCollection; $filter : Collection
var $employees : cs.EmployeeSelection


$employeesCollection:=New collection
$filter:=New collection


$filter.push("firstName")
$filter.push("lastName")

$employees:=ds.Employee.all()
$employeesCollection:=$employees.toCollection($filter;0;0;2)
```

Retourne :

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl"
    },
    {
        "firstName": "Irma",
        "lastName": "Durham"
    }
]

```

#### Exemple 4

Example with `relatedEntity` type with simple form:

```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName,lastName,employer")
```

Retourne :

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "employer": {
            "__KEY": 20
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "__KEY": 20
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "__KEY": 20
        }
    }
   ]
```

#### Exemple 5

Example with _filterCol_ parameter:

```4d
var $employeesCollection; $coll : Collection
$employeesCollection:=New collection
$coll:=New collection("firstName";"lastName")
$employeesCollection:=$employees.toCollection($coll)
```

Retourne :

```4d
[
    {
        "firstName": "Joanna",
        "lastName": "Cabrera"
    },
    {
        "firstName": "Alexandra",
        "lastName": "Coleman"
    }
]
```

#### Exemple 6

Dans cet exemple, les langages classiques et ORDA modifient simultanément les mêmes données :

```4d
var $employeesCollection; $coll : Collection
$employeesCollection:=New collection
$coll:=New collection
$coll.push("firstName")
$coll.push("lastName")
$coll.push("employer.*")
$employeesCollection:=$employees.toCollection($coll)
```

Retourne :

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    }
  ]
```

#### Exemple 7

Exemple avec extraction de quelques propriétés de relatedEntity :

```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName, lastName, employer.name")
```

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",

        "employer": {
            "name": "India Astral Secretary"
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "name": "India Astral Secretary"
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "name": "India Astral Secretary"
        }
    }]
```

#### Exemple 8

Example with extraction of some properties of `relatedEntities`:

```4d
 var $employeesCollection : Collection
 $employeesCollection:=New collection
 $employeesCollection:=$employees.toCollection("firstName, lastName, directReports.firstName")
```

Retourne :

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "directReports": []
    },
    {
        "firstName": "Mike",
        "lastName": "Phan",
        "directReports": [
            {
                "firstName": "Gary"
            },
            {
                "firstName": "Sadie"
            },
            {
                "firstName": "Christie"
            }
        ]
    },
    {
        "firstName": "Gary",

        "lastName": "Reichert",
        "directReports": [
            {
                "firstName": "Rex"
            },
            {
                "firstName": "Jenny"
            },
            {
                "firstName": "Lowell"
            }
        ]
    }]
```

#### Exemple 9

Example with extraction of all properties of `relatedEntities`:

```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName, lastName, directReports.*")

```

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "directReports": []
    },    
    {
        "firstName": "Mike",
        "lastName": "Phan",
        "directReports": [
            {
                "ID": 425,
                "firstName": "Gary",
                "lastName": "Reichert",
                "salary": 65800,
                "birthDate": "1957-12-23T00:00:00.000Z",
                "woman": false,
                "managerID": 424,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 424
                }
            },
            {
                "ID": 426,
                "firstName": "Sadie",
                "lastName": "Gallant",
                "salary": 35200,
                "birthDate": "2022-01-03T00:00:00.000Z",
                "woman": true,
                "managerID": 424,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 424
                }
            }
                   ]
    },
    {
        "firstName": "Gary",
        "lastName": "Reichert",
        "directReports": [
            {
                "ID": 428,
                "firstName": "Rex",
                "lastName": "Chance",
                "salary": 71600,
                "birthDate": "1968-08-09T00:00:00.000Z",
                "woman": false,

                "managerID": 425,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 425
                }
            },
            {
                "ID": 429,
                "firstName": "Jenny",
                "lastName": "Parks",
                "salary": 51300,
                "birthDate": "1984-05-25T00:00:00.000Z",
                "woman": true,
                "managerID": 425,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 425
                }
            }
           ]
 }
]
```

<!-- END REF -->

---
id: EntitySelectionClass
title: EntitySelection
---


Une entity selection est un objet contenant une ou plusieurs référence(s) à des [entités](ORDA/dsMapping.md#entity) appartenant à la même [Dataclass](ORDA/dsMapping.md#dataclass). Une entity selection peut contenir 0, 1 ou X entités de la dataclass - où X peut représenter le nombre total d'entités contenues dans la dataclass.

Les entity selections peuvent être créées à partir de sélections existantes à l'aide de diverses fonctions de la classe [`DataClass`](DataClassClass.md) telles que [`.all()`](DataClassClass.md#all) ou [`.query()`](DataClassClass.md#query), ou de la classe `EntityClass` elle-même, telles que [`.and()`](#and) ou [`orderBy()`](#orderby). Vous pouvez également créer des entity selections vides à l'aide de la fonction [`dataClass.newSelection()`](DataClassClass.md#newselection) ou de la commande [`Create new selection`](#create-new-selection).

### Sommaire

|                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntitySelectionClass.index.Syntax -->](#91index93)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.index.Summary -->|
| [<!-- INCLUDE EntitySelectionClass.attributeName.Syntax -->](#attributename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.attributeName.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.add().Syntax -->](#add)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.add().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.and().Syntax -->](#and)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.and().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.average().Syntax -->](#average)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.average().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.contains().Syntax -->](#contains)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.contains().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.count().Syntax -->](#count)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.count().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.distinct().Syntax -->](#distinct)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.distinct().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.drop().Syntax -->](#drop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.drop().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.extract().Syntax -->](#extract)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.extract().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.first().Syntax -->](#first)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.first().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.getDataClass().Syntax -->](#getdataclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.getDataClass().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.isAlterable().Syntax -->](#isalterable)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isAlterable().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.isOrdered().Syntax -->](#isordered)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isOrdered().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.last().Syntax -->](#last)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.last().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.length.Syntax -->](#length)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.length.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.max().Syntax -->](#max)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.max().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.min().Syntax -->](#min)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.min().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.minus().Syntax -->](#minus)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.minus().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.or().Syntax -->](#or)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.or().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.orderBy().Syntax -->](#orderby)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderBy().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.orderByFormula().Syntax -->](#orderbyformula)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderByFormula().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.query().Syntax -->](#query)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.query().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.queryPath.Syntax -->](#querypath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPath.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.queryPlan.Syntax -->](#queryplan)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPlan.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.refresh().Syntax -->](#refresh)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.refresh().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.slice().Syntax -->](#slice)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.slice().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.sum().Syntax -->](#sum)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.sum().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.toCollection().Syntax -->](#tocollection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.toCollection().Summary -->|



## Create entity selection

<!-- REF #_command_.Create entity selection.Syntax -->
**Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #_command_.Create entity selection.Params -->
| Paramètres | Type               |    | Description                                                                                          |
| ---------- | ------------------ |:--:| ---------------------------------------------------------------------------------------------------- |
| dsTable    | Table              | -> | Table de la base 4D dont la sélection courante doit être utilisée pour construire l'entity selection |
| settings   | Object             | -> | Option de création : contexte                                                                        |
| Résultat   | 4D.EntitySelection | <- | Nouvelle entity selection liée à la dataclass de la table                                            |
<!-- END REF -->


#### Description

La commande `Create entity selection` construit et retourne une nouvelle entity selection [altérable](ORDA/entities.md#shareable-or-alterable-entity-selections) liée à la dataclass correspondant à la table *dsTable*, basée sur la sélection courante de cette table.

Si la sélection courante est triée, une entity selection [triée](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) est créée (l'ordre de la sélection courante est conservé). Si la sélection courante n'est pas triée, une entity selection non-triée est créée.

Si la table *dsTable* n'est pas exposée dans [`ds`](API/DataStoreClass.md#ds), une erreur est retournée. Cette commande ne peut pas être utilisée avec un datastore distant.

Dans le paramètre optionnel *settings*, vous pouvez passer un objet contenant la propriété suivante :

| Propriété | Type | Description                                                                                                 |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------- |
| context   | Text | Nom du [contexte d'optimisation](ORDA/entities.md#clientserver-optimization) appliqué à l'entity selection. |


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

<!-- REF EntitySelectionClass.index.Desc -->
## &#91;*index*&#93;

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF EntitySelectionClass.index.Syntax -->
***&#91;index&#93;*** : 4D.Entity<!-- END REF -->


#### Description

The `EntitySelection[index]` notation <!-- REF EntitySelectionClass.index.Summary -->allows you to access entities within the entity selection using the standard collection syntax<!-- END REF -->: pass the position of the entity you want to get in the *index* parameter.

Note that the corresponding entity is reloaded from the datastore.

*index* peut être tout nombre compris entre 0 et `.length`-1.

*   Si *index* est en-dehors de ces limites, une erreur est retournée.
*   Si *index* correspond à une entité supprimée, la valeur Null est retournée.
> **Attention** : `EntitySelection[index]` est une expression non assignable, ce qui signifie qu'elle ne peut pas être utilisée comme référence modifiable de l'entité avec des fonctions telles que [`.lock()`](EntityClass.md#lock) ou [`.save()`](EntityClass.md#save). Pour travailler avec l'entité correspondante, vous devez assigner l'expression retournée à une expression assignable, comme une variable. Voici quelques exemples :

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

#### Exemple


```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@")
 $employee:=$employees[2]  // La 3e entité de l'entity selection $employees est rechargée depuis le datastore
```

<!-- END REF -->




<!-- REF EntitySelectionClass.attributeName.Desc -->
## .*attributeName*

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |
</details>

<!-- REF EntitySelectionClass.attributeName.Syntax -->
***.attributeName*** : Collection<br>***.attributeName*** : 4D.EntitySelection<!-- END REF -->


#### Description

Tout attribut de dataclass peut être utilisé en tant que propriété d'une entity selection afin de retourner <!-- REF EntitySelectionClass.attributeName.Summary -->une "projection" des valeurs de l'attribut dans la sélection d'entités<!-- END REF -->. Les valeurs projetés peuvent être une collection ou une nouvelle entity selection, selon le [kind](DataClassAttributeClass.md#kind) (`storage` ou `relation`) de l'attribut.

*   Si le "kind" de *attributeName* est `storage`: `.attributeName` retourne une collection de valeurs du même type que *attributeName*.
*   Si le kind de *attributeName* est `relatedEntity` : `.attributeName` retourne une nouvelle entity selection de valeurs liées du même type que *attributeName*. Les doublons sont supprimés (une entity selection non ordonnée est retournée).
*   Si le kind de *attributeName* est `relatedEntities` : `.attributeName` retourne une nouvelle entity selection de valeurs liées du même type que *attributeName*. Les doublons sont supprimés (une entity selection non ordonnée est retournée).


Lorsqu'un attribut de relation est utilisé comme propriété d'une entity selection, le résultat est toujours une autre entity selection, même si une seule entité est retournée. Dans ce cas, si aucune entité n'est retournée, le résultat est une entity selection vide.

Si l'attribut n'existe pas dans l'entity selection, une erreur est retournée.






#### Exemple 1

Projection of storage values:


```4d
 var $firstNames : Collection
 $entitySelection:=ds.Employee.all()
 $firstNames:=$entitySelection.firstName // firstName est un texte
```

The resulting collection is a collection of strings, for example:

```4d
[
    "Joanna",
    "Alexandra",
    "Rick"
]
```

#### Exemple 2

Projection of related entity:

```4d
 var $es; $entitySelection : cs.EmployeeSelection
 $entitySelection:=ds.Employee.all()
 $es:=$entitySelection.employer // employer est lié à la dataclass Company
```

The resulting object is an entity selection of Company with duplications removed (if any).

#### Exemple 3

Projection of related entities:

```4d
 var $es : cs.EmployeeSelection
 $es:=ds.Employee.all().directReports // directReports est récursif et lié à la dataclass Employee
```

The resulting object is an entity selection of Employee with duplications removed (if any).

<!-- END REF -->




<!-- REF EntitySelectionClass.add().Desc -->
## .add()

<details><summary>Historique</summary>
| Version | Modifications                                        |
| ------- | ---------------------------------------------------- |
| v18 R5  | Supporte uniquement les entity selections altérables |
| v17     | Ajout                                                |
</details>


<!-- REF #EntitySelectionClass.add().Syntax -->
**.add**( *entity* : 4D.Entity ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.add().Params -->
| Paramètres | Type               |    | Description                           |
| ---------- | ------------------ |:--:| ------------------------------------- |
| entity     | 4D.Entity          | -> | Entité à ajouter à l'entity selection |
| Résultat   | 4D.EntitySelection | -> | Entity selection incluant l'*entity*  |
<!-- END REF -->


#### Description

The `.add()` function <!-- REF #EntitySelectionClass.add().Summary -->adds the specified *entity* to the entity selection and returns the modified entity selection<!-- END REF -->.
> Cette fonction modifie l'entity selection d'origine.

**Attention :** L'entity selection doit être *altérable*, c'est-à-dire qu'elle a été créée par exemple par [`.newSelection()`](DataClassClass.md#newselection) ou `Create entity selection`, sinon `.add()` retournera une erreur. Les entity selections partageables n'acceptent pas l'ajout d'entités. Pour plus d'informations, reportez-vous au paragraphe [Entity selections partageables ou altérables](ORDA/entities.md#shareable-or-alterable-entity-selections).


*   Si l'entity selection est ordonnée, le paramètre *entity* est ajouté à la fin de la sélection. Si une référence à la même entité appartient déjà à l'entity selection, elle est dupliquée et une nouvelle référence est ajoutée.
*   Si l'entity selection est non ordonnée, le paramètre *entity* est ajouté n'importe où dans la sélection, sans ordre spécifique.
> Pour plus d'informations, reportez-vous au paragraphe [Entity selections triées ou non triées](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

L'entity selection modifiée est retournée par la fonction, afin que les appels vers la fonction puissent être chaînés.

Une erreur est générée si *entity* et l'entity selection ne sont pas liées à la même dataclass. Si *entity* est Null, aucune erreur n'est générée.

#### Exemple 1

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"S@")
 $employee:=ds.Employee.new()
 $employee.lastName:="Smith"
 $employee.save()
 $employees.add($employee) //The $employee entity is added to the $employees entity selection
```

#### Exemple 2

Les appels vers la fonction peuvent être chaînés :

```4d
 var $sel : cs.ProductSelection
 var $p1;$p2;$p3 : cs.ProductEntity

 $p1:=ds.Product.get(10)
 $p2:=ds.Product.get(11)
 $p3:=ds.Product.get(12)
 $sel:=ds.Product.query("ID > 50")
 $sel:=$sel.add($p1).add($p2).add($p3)
```

<!-- END REF -->


<!-- REF EntitySelectionClass.and().Desc -->
## .and()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |
</details>

<!-- REF #EntitySelectionClass.and().Syntax -->
**.and**( *entity* : 4D.Entity ) : 4D.EntitySelection<br>**.and**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.and().Params -->
| Paramètres      | Type               |    | Description                                                                    |
| --------------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| entity          | 4D.Entity          | -> | Entity to intersect with                                                       |
| entitySelection | 4D.EntitySelection | -> | Entity selection to intersect with                                             |
| Résultat        | 4D.EntitySelection | <- | New entity selection with the result of intersection with logical AND operator |
<!-- END REF -->


#### Description

The `.and()` function <!-- REF #EntitySelectionClass.and().Summary -->combines the entity selection with an *entity* or *entitySelection* parameter using the logical AND operator<!-- END REF -->; it returns a new, unordered entity selection that contains only the entities that are referenced in both the entity selection and the parameter.

*   If you pass *entity* as parameter, you combine this entity with the entity selection. If the entity belongs to the entity selection, a new entity selection containing only the entity is returned. Otherwise, an empty entity selection is returned.
*   If you pass *entity* as parameter, you compare this entity with the entity selection. If the entity belongs to the entity selection, a new reference to the entity selection is returned. Otherwise, a new entity selection containing the original entity selection and the entity is returned.
> If the current selection is sorted, an [ordered](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) entity selection is created (the order of the current selection is kept). If the current selection is unsorted, an unordered entity selection is created.

If the original entity selection or the *entitySelection* parameter is empty, or if the *entity* is Null, an empty entity selection is returned.

If the original entity selection and the parameter are not related to the same dataclass, an error is raised.


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

We want to have a selection of employees named "Jones" who live in New York:

```4d
 var $sel1; $sel2; $sel3 : cs.EmployeeSelection
 $sel1:=ds.Employee.query("name =:1";"Jones")
 $sel2:=ds.Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2)
```

<!-- END REF -->


<!-- REF EntitySelectionClass.average().Desc -->
## .average()

<details><summary>Historique</summary>
| Version | Modifications                               |
| ------- | ------------------------------------------- |
| v18 R6  | Returns undefined if empty entity selection |
| v17     | Ajout                                       |

</details>

<!-- REF #EntitySelectionClass.average().Syntax -->
**.average**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.average().Params -->
| Paramètres    | Type |    | Description                                                                                |
| ------------- | ---- |:--:| ------------------------------------------------------------------------------------------ |
| attributePath | Text | -> | Attribute path to be used for calculation                                                  |
| Résultat      | Real | <- | Arithmetic mean (average) of entity attribute values (Undefined if empty entity selection) |
<!-- END REF -->

#### Description

The `.average()` function <!-- REF #EntitySelectionClass.average().Summary -->returns the arithmetic mean (average) of all the non-null values of *attributePath* in the entity selection<!-- END REF -->.

Pass in the *attributePath* parameter the attribute path to evaluate.

Only numerical values are taken into account for the calculation. Note however that, if the *attributePath* of the entity selection contains mixed value types, `.average()` takes all scalar elements into account to calculate the average value.
> Date values are converted to numerical values (seconds) and used to calculate the average.

`.average()` returns **undefined** if the entity selection is empty or *attributePath* does not contain numerical values.

An error is returned if:

*   *attributePath* is a related attribute,
*   *attributePath* designates an attribute that does not exist in the entity selection dataclass.


#### Exemple

We want to obtain a list of employees whose salary is higher than the average salary:

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
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntitySelectionClass.contains().Syntax -->
**.contains**( *entity* : 4D.Entity ) : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.contains().Params -->
| Paramètres | Type      |    | Description                                                    |
| ---------- | --------- |:--:| -------------------------------------------------------------- |
| entity     | 4D.Entity | -> | Entity to evaluate                                             |
| Résultat   | Boolean   | <- | True if the entity belongs to the entity selection, else False |
<!-- END REF -->

#### Description

The `.contains()` function <!-- REF #EntitySelectionClass.contains().Summary -->returns true if entity reference belongs to the entity selection<!-- END REF -->, and false otherwise.

In *entity*, specify the entity to search for in the entity selection. If entity is Null, the function will return false.

If *entity* and the entity selection do not belong to the same dataclass, an error is raised.

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
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntitySelectionClass.count().Syntax -->
**.count**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.count().Params -->
| Paramètres    | Type |    | Description                                                       |
| ------------- | ---- |:--:| ----------------------------------------------------------------- |
| attributePath | Text | -> | Path of the attribute to be used for calculation                  |
| Résultat      | Real | <- | Number of non null *attributePath* values in the entity selection |
<!-- END REF -->

#### Description

The `.count()` function <!-- REF #EntitySelectionClass.count().Summary -->returns the number of entities in the entity selection with a non-null value in *attributePath*<!-- END REF -->.
> Only scalar values are taken into account. Object or collection type values are considered as null values.

An error is returned if:

*   *attributePath* is a related attribute,
*   *attributePath* is not found in the entity selection dataclass.

#### Exemple

We want to find out the total number of employees for a company without counting any whose job title has not been specified:

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
| Version | Modifications |
| ------- | ------------- |
| v18 R5  | Ajout         |

</details>

<!-- REF #EntitySelectionClass.copy().Syntax -->
**.copy**( { *option* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.copy().Params -->
| Paramètres | Type               |    | Description                                      |
| ---------- | ------------------ |:--:| ------------------------------------------------ |
| option     | Integer            | -> | `ck shared`: return a shareable entity selection |
| Résultat   | 4D.EntitySelection | <- | Copy of the entity selection                     |
<!-- END REF -->

#### Description

The `.copy()` function <!-- REF #EntitySelectionClass.copy().Summary -->returns a copy of the original entity selection<!-- END REF -->.

> This function does not modify the original entity selection.

By default, if the *option* parameter is omitted, the function returns a new, alterable entity selection (even if the function is applied to a shareable entity selection). Pass the `ck shared` constant in the *option* parameter if you want to create a shareable entity selection.

> For information on the shareable property of entity selections, please refer to the [Shareable or alterable entity selections](ORDA/entities.md#shareable-or-alterable-entity-selections) section.

#### Exemple

You create a new, empty entity selection of products when the form is loaded:

```4d
 Case of
    :(Form event code=On Load)
       Form.products:=ds.Products.newSelection()
 End case

```

Then this entity selection is updated with products and you want to share the products between several processes. You copy the Form.products entity selection as a shareable one:

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
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntitySelectionClass.distinct().Syntax -->
**.distinct**( *attributePath* : Text { ; *option* : Integer } ) : Collection<!-- END REF -->

<!-- REF #EntitySelectionClass.distinct().Params -->
| Paramètres    | Type       |    | Description                                                      |
| ------------- | ---------- |:--:| ---------------------------------------------------------------- |
| attributePath | Text       | -> | Path of attribute whose distinct values you want to get          |
| option        | Integer    | -> | `dk diacritical`: diacritical evaluation ("A" # "a" for example) |
| Résultat      | Collection | <- | Collection with only distinct values                             |
<!-- END REF -->

#### Description

The `.distinct()` function <!-- REF #EntitySelectionClass.distinct().Summary -->returns a collection containing only distinct (different) values from the *attributePath* in the entity selection<!-- END REF -->.

The returned collection is automatically sorted. **Null** values are not returned.

In the *attributePath* parameter, pass the entity attribute whose distinct values you want to get. Only scalar values (text, number, boolean, or date) can be handled. If the *attributePath* leads to an object property that contains values of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1.  booleans
2.  strings
3.  numbers
4.  dates

You can use the `[]` notation to designate a collection when *attributePath* is a path within an object (see examples).

By default, a non-diacritical evaluation is performed. If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `dk diacritical` constant in the *option* parameter.

An error is returned if:

*   *attributePath* is a related attribute,
*   *attributePath* is not found in the entity selection dataclass.

#### Exemples

You want to get a collection containing a single element per country name:

```4d
 var $countries : Collection
 $countries:=ds.Employee.all().distinct("address.country")
```

`nicknames` is a collection and `extra` is an object attribute:

```4d
$values:=ds.Employee.all().distinct("extra.nicknames[].first")
```

<!-- END REF -->



<!-- REF EntitySelectionClass.drop().Desc -->
## .drop()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntitySelectionClass.drop().Syntax -->
**.drop**( { *mode* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.drop().Params -->
| Paramètres | Type               |    | Description                                                                                      |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------------------------ |
| mode       | Integer            | -> | `dk stop dropping on first error`: stops method execution on first non-droppable entity          |
| Résultat   | 4D.EntitySelection | <- | Empty entity selection if successful, else entity selection containing non-droppable entity(ies) |
<!-- END REF -->

#### Description

The `.drop()` function <!-- REF #EntitySelectionClass.drop().Summary -->removes the entities belonging to the entity selection from the table related to its dataclass within the datastore<!-- END REF -->. The entity selection remains in memory.
> Removing entities is permanent and cannot be undone. It is recommended to call this action in a transaction in order to have a rollback option.

If a locked entity is encountered during the execution of `.drop()`, it is not removed. By default, the method processes all entities of the entity selection and returns non-droppable entities in the entity selection. If you want the method to stop execution at the first encountered non-droppable entity, pass the `dk stop dropping on first error` constant in the *mode* parameter.

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
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajout         |

</details>


<!-- REF #EntitySelectionClass.extract().Syntax -->**.extract**( *attributePath* : Text { ; *option* : Integer } ) : Collection<br>**.extract**( *attributePath* { ; *targetPath* } { ; *...attributePathN* : Text ; *targetPathN* : Text } ) : Collection<!-- END REF -->


<!-- REF #EntitySelectionClass.extract().Params -->
| Paramètres    | Type       |    | Description                                                                             |
| ------------- | ---------- |:--:| --------------------------------------------------------------------------------------- |
| attributePath | Text       | -> | Attribute path whose values must be extracted to the new collection                     |
| targetPath    | Text       | -> | Target attribute path or attribute name                                                 |
| option        | Integer    | -> | `ck keep null`: include null attributes in the returned collection (ignored by default) |
| Résultat      | Collection | <- | Collection containing extracted values                                                  |
<!-- END REF -->

#### Description

The `.extract()` function <!-- REF #EntitySelectionClass.extract().Summary -->returns a collection containing *attributePath* values extracted from the entity selection<!-- END REF -->.

*attributePath* can refer to:

*   a scalar dataclass attribute,
*   related entity,
*   related entities.

If *attributePath* is invalid, an empty collection is returned.

This function accepts two syntaxes.

**.extract( attributePath : Text { ; option : Integer } ) : Collection**

With this syntax, `.extract()` populates the returned collection with the *attributePath* values of the entity selection.

By default, entities for which *attributePath* is *null* or undefined are ignored in the resulting collection. You can pass the `ck keep null` constant in the *option* parameter to include these values as **null** elements in the returned collection.

*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" are extracted as a collection of entities (duplications are kept).
*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntities" are extracted as a collection of entity selections.


**.extract ( attributePath ; targetPath { ; ...attributePathN ; ... targetPathN}) : Collection**

With this syntax, `.extract()` populates the returned collection with the *attributePath* properties. Each element of the returned collection is an object with *targetPath* properties filled with the corresponding *attributePath* properties. Null values are kept (*option* parameter is ignored with this syntax).

If several *attributePath* are given, a *targetPath* must be given for each. Only valid pairs \[*attributePath*, *targetPath*] are extracted.

*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" are extracted as an entity.
*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntities" are extracted as an entity selection.

> Entities of a collection of entities accessed by \[ ] are not reloaded from the database.


#### Exemple

Given the following table and relation:

![](assets/en/API/entityselection.PNG)

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
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntitySelectionClass.first().Syntax -->
**.first()** : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.first().Params -->
| Paramètres | Type      |    | Description                                                                        |
| ---------- | --------- |:--:| ---------------------------------------------------------------------------------- |
| Résultat   | 4D.Entity | <- | Reference to the first entity of the entity selection (Null if selection is empty) |
<!-- END REF -->

#### Description

The `.first()` function <!-- REF #EntitySelectionClass.first().Summary -->returns a reference to the entity in the first position of the entity selection<!-- END REF -->.

The result of this function is similar to:

```4d
 $entity:=$entitySel[0]
```

There is, however, a difference between both statements when the selection is empty:


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
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |

</details>

<!-- REF #EntitySelectionClass.getDataClass().Syntax -->
**.getDataClass()** : 4D.DataClass<!-- END REF -->


<!-- REF #EntitySelectionClass.getDataClass().Params -->
| Paramètres | Type         |    | Description                                            |
| ---------- | ------------ |:--:| ------------------------------------------------------ |
| Résultat   | 4D.DataClass | <- | Dataclass object to which the entity selection belongs |
<!-- END REF -->

#### Description

The `.getDataClass()` function <!-- REF #EntitySelectionClass.getDataClass().Summary -->returns the dataclass of the entity selection<!-- END REF -->.

This function is mainly useful in the context of generic code.

#### Exemple

The following generic code duplicates all entities of the entity selection:

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


<!-- REF EntitySelectionClass.isAlterable().Desc -->
## .isAlterable()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R5  | Ajout         |

</details>

<!-- REF #EntitySelectionClass.isAlterable().Syntax -->
**.isAlterable()** : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isAlterable().Params -->
| Paramètres | Type    |    | Description                                                |
| ---------- | ------- |:--:| ---------------------------------------------------------- |
| Résultat   | Boolean | <- | True if the entity selection is alterable, False otherwise |
<!-- END REF -->

#### Description

The `.isAlterable()` function <!-- REF #EntitySelectionClass.isAlterable().Summary -->returns True if the entity selection is alterable<!-- END REF -->, and False if the entity selection is not alterable.

For more information, please refer to [Shareable or alterable entity selections](ORDA/entities.md#shareable-or-alterable-entity-selections).

#### Exemple

You are about to display `Form.products` in a [list box](FormObjects/listbox_overview.md) to allow the user to add new products. You want to make sure it is alterable so that the user can add new products without error:

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

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntitySelectionClass.isOrdered().Syntax -->
**.isOrdered()** : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isOrdered().Params -->
| Paramètres | Type    |    | Description                                              |
| ---------- | ------- |:--:| -------------------------------------------------------- |
| Résultat   | Boolean | <- | True if the entity selection is ordered, False otherwise |
<!-- END REF -->

#### Description

The `.isOrdered()` function <!-- REF #EntitySelectionClass.isOrdered().Summary -->returns True if the entity selection is ordered<!-- END REF -->, and False if it is unordered.
> This function always returns True when the entity selection comes from a remote datastore.

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
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntitySelectionClass.last().Syntax -->
**.last()** : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.last().Params -->
| Paramètres | Type      |    | Description                                                                           |
| ---------- | --------- |:--:| ------------------------------------------------------------------------------------- |
| Résultat   | 4D.Entity | <- | Reference to the last entity of the entity selection (Null if empty entity selection) |
<!-- END REF -->

#### Description

The `.last()` function <!-- REF #EntitySelectionClass.last().Summary -->returns a reference to the entity in last position of the entity selection<!-- END REF -->.

The result of this function is similar to:

```4d
 $entity:=$entitySel[length-1]
```

If the entity selection is empty, the function returns Null.


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
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntitySelectionClass.length.Syntax -->
**.length** : Integer<!-- END REF -->


#### Description

The `.length` property <!-- REF #EntitySelectionClass.length.Summary -->returns the number of entities in the entity selection<!-- END REF -->. If the entity selection is empty, it returns 0.

Entity selections always have a `.length` property.


#### Exemple

```4d
 var $vSize : Integer
 $vSize:=ds.Employee.query("gender = :1";"male").length
 ALERT(String(vSize)+" male employees found.")
```


<!-- END REF -->


<!-- REF EntitySelectionClass.max().Desc -->
## .max()

<details><summary>Historique</summary>
| Version | Modifications                               |
| ------- | ------------------------------------------- |
| v17     | Ajout                                       |
| v18 R6  | Returns undefined if empty entity selection |

</details>

<!-- REF #EntitySelectionClass.max().Syntax -->
**.max**( *attributePath* : Text ) : any<!-- END REF -->


<!-- REF #EntitySelectionClass.max().Params -->
| Paramètres    | Type |    | Description                                      |
| ------------- | ---- |:--:| ------------------------------------------------ |
| attributePath | Text | -> | Path of the attribute to be used for calculation |
| Résultat      | any  | <- | Highest value of attribute                       |
<!-- END REF -->

#### Description

The `.max()` function <!-- REF #EntitySelectionClass.max().Summary -->returns the highest (or maximum) value among all the values of *attributePath* in the entity selection<!-- END REF -->. It actually returns the value of the last entity of the entity selection as it would be sorted in ascending order using the [`.orderBy()`](#orderby) function.

If you pass in *attributePath* a path to an object property containing different types of values, the `.max()` function will return the maximum value within the first scalar type in the default 4D type list order (see [`.sort()`](CollectionClass.md#sort) description).

`.max()` returns **undefined** if the entity selection is empty or *attributePath* is not found in the object attribute.


An error is returned if:

*   *attributePath* is a related attribute,
*   *attributePath* designates an attribute that does not exist in the entity selection dataclass.



#### Exemple

We want to find the highest salary among all the female employees:

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
| Version | Modifications                               |
| ------- | ------------------------------------------- |
| v17     | Ajout                                       |
| v18 R6  | Returns undefined if empty entity selection |


</details>

<!-- REF #EntitySelectionClass.min().Syntax -->
**.min**( *attributePath* : Text ) : any<!-- END REF -->

<!-- REF #EntitySelectionClass.min().Params -->
| Paramètres    | Type |    | Description                                      |
| ------------- | ---- |:--:| ------------------------------------------------ |
| attributePath | Text | -> | Path of the attribute to be used for calculation |
| Résultat      | any  | <- | Lowest value of attribute                        |
<!-- END REF -->

#### Description

The `.min()` function <!-- REF #EntitySelectionClass.min().Summary --> returns the lowest (or minimum) value among all the values of attributePath in the entity selection<!-- END REF -->.  It actually returns the first entity of the entity selection as it would be sorted in ascending order using the [`.orderBy()`](#orderby) function (excluding **null** values).

If you pass in *attributePath* a path to an object property containing different types of values, the `.min()` function will return the minimum value within the first scalar value type in the type list order (see [`.sort()`](CollectionClass.md#sort) description).

`.min()` returns **undefined** if the entity selection is empty or *attributePath* is not found in the object attribute.

An error is returned if:

*   *attributePath* is a related attribute,
*   *attributePath* designates an attribute that does not exist in the entity selection dataclass.


#### Exemple

In this example, we want to find the lowest salary among all the female employees:

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
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details>

<!-- REF #EntitySelectionClass.minus().Syntax -->
**.minus**( *entity* : 4D.Entity ) : 4D.EntitySelection<br>**.minus**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.minus().Params -->
| Paramètres      | Type               |    | Description                                                              |
| --------------- | ------------------ |:--:| ------------------------------------------------------------------------ |
| entity          | 4D.Entity          | -> | Entity to substract                                                      |
| entitySelection | 4D.EntitySelection | -> | Entity selection to substract                                            |
| Résultat        | 4D.EntitySelection | <- | New entity selection or a new reference on the existing entity selection |
<!-- END REF -->

#### Description

The `.minus()` function <!-- REF #EntitySelectionClass.minus().Summary -->excludes from the entity selection to which it is applied the *entity* or the entities of *entitySelection* and returns the resulting entity selection<!-- END REF -->.

*   If you pass *entity* as parameter, the function creates a new entity selection without *entity* (if *entity* belongs to the entity selection). If *entity* was not included in the original entity selection, a new reference to the entity selection is returned.
*   La fonction `.sum()`<!-- REF #EntitySelectionClass.sum().Summary -->retourne la somme de toutes les valeurs d'*attributPath* dans la sélection d'entités<!-- END REF -->.
> If the current selection is sorted, an [ordered](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) entity selection is created (the order of the current selection is kept). If the current selection is unsorted, an unordered entity selection is created.

If the original entity selection or both the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned.

If *entitySelection* is empty or if *entity* is Null, a new reference to the original entity selection is returned.

If the original entity selection and the parameter are not related to the same dataclass, an error is raised.


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

We want to have a selection of female employees named "Jones" who live in New York :

```4d
 var $sel1; $sel2; $sel3 : cs.EmployeeSelection
 $sel1:=ds.Employee.query("name =:1";"Jones")
 $sel2:=ds.Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2).minus(ds.Employee.query("gender='male'"))
```<!-- END REF --><!-- REF EntitySelectionClass.or().Desc -->## .or()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details><!-- REF #EntitySelectionClass.or().Syntax -->**.or**( *entity* : 4D.Entity ) : 4D.EntitySelection<br>**.or**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection
<!-- END REF -->

<!-- REF #EntitySelectionClass.or().Params -->| Paramètres      | Type               |    | Description                                                            |
| --------------- | ------------------ |:--:| ---------------------------------------------------------------------- |
| entity          | 4D.Entity          | -> | Entity to intersect with                                               |
| entitySelection | 4D.EntitySelection | -> | Entity selection to intersect with                                     |
| Résultat        | 4D.EntitySelection | <- | New entity selection or new reference to the original entity selection |<!-- END REF -->#### Description

The `.or()` function<!-- REF #EntitySelectionClass.or().Summary -->combines the entity selection with the *entity* or *entitySelection* parameter using the logical (not exclusive) OR operator<!-- END REF -->; it returns a new, unordered entity selection that contains all the entities from the entity selection and the parameter.

*   If you pass *entitySelection* as parameter, you compare entity selections. A new entity selection that contains only the entities that are referenced in both selections is returned. Otherwise, a new entity selection containing the original entity selection and the entity is returned.
*   If the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned. If the original entity selection is empty, a reference to *entitySelection* or an entity selection containing only *entity* is returned.
> If the current selection is sorted, an [ordered](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) entity selection is created (the order of the current selection is kept). If the current selection is unsorted, an unordered entity selection is created.

If the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned. If the original entity selection is empty, a reference to *entitySelection* or an entity selection containing only *entity* is returned.

If *entitySelection* is empty or if *entity* is Null, a new reference to the original entity selection is returned.

If the original entity selection and the parameter are not related to the same dataclass, an error is raised.


#### Exemple 1

```4d
 var $employees1; $employees2; $result : cs.EmployeeSelection
 $employees1:=ds.Employee.query("lastName = :1";"H@") //Returns "Colin Hetrick","Grady Harness"
 $employees2:=ds.Employee.query("firstName = :1";"C@") //Returns "Colin Hetrick", "Cath Kidston"
 $result:=$employees1.or($employees2) //$result contains "Colin Hetrick", "Grady Harness","Cath Kidston"
```

#### Exemple 2

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") // Returns "Colin Hetrick","Grady Harness", "Sherlock Holmes"
 $employee:=ds.Employee.get(686) //the entity with primary key 686 does not belong to the $employees entity selection
  //It matches the employee "Mary Smith"

 $result:=$employees.or($employee) //$result contains "Colin Hetrick", "Grady Harness", "Sherlock Holmes", "Mary Smith"
```<!-- END REF --><!-- REF EntitySelectionClass.orderBy().Desc -->## .orderBy()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details><!-- REF #EntitySelectionClass.orderBy().Syntax -->**.orderBy**( *pathString* : Text ) : 4D.EntitySelection<br>**.orderBy**( *pathObjects* : Collection ) : 4D.EntitySelection
<!-- END REF -->

<!-- REF #EntitySelectionClass.orderBy().Params -->| Paramètres  | Type               |    | Description                                                           |
| ----------- | ------------------ |:--:| --------------------------------------------------------------------- |
| pathString  | Text               | -> | Attribute path(s) and sorting instruction(s) for the entity selection |
| pathObjects | Collection         | -> | Collection of criteria objects                                        |
| Résultat    | 4D.EntitySelection | <- | New entity selection in the specified order                           |<!-- END REF -->#### Description

The `.orderBy()` function<!-- REF #EntitySelectionClass.orderBy().Summary -->returns a new ordered entity selection containing all entities of the entity selection in the order specified by *pathString* or *pathObjects* criteria<!-- END REF -->.
> * This method does not modify the original entity selection.
*   Pour plus d'informations, reportez-vous au paragraphe [Entity selections triées ou non triées](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

You must use a criteria parameter to define how the entities must be sorted. Two different parameters are supported:

*   *pathString* (Text) : This parameter contains a formula made of 1 to x attribute paths and (optionally) sort orders, separated by commas. The syntax is:

```4d
"attributePath1 {desc or asc}, attributePath2 {desc or asc},..."
```

The order in which the attributes are passed determines the sorting priority of the entities. By default, attributes are sorted in ascending order. You can set the sort order of a property in the criteria string, separated from the property path by a single space: pass "asc" to sort in ascending order or "desc" in descending order.

*   *pathObjects* (collection): each element of the collection contains an object structured in the following way:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

By default, attributes are sorted in ascending order ("descending" is false).

You can add as many objects in the criteria collection as necessary.
> Null values are evaluated as less than other values.

#### Exemple


```4d
// order by formula
 $sortedEntitySelection:=$entitySelection.orderBy("firstName asc, salary desc")
 $sortedEntitySelection:=$entitySelection.orderBy("firstName")

  // order by collection with or without sort orders
 $orderColl:=New collection
 $orderColl.push(New object("propertyPath";"firstName";"descending";False))
 $orderColl.push(New object("propertyPath";"salary";"descending";True))
 $sortedEntitySelection:=$entitySelection.orderBy($orderColl)

 $orderColl:=New collection
 $orderColl.push(New object("propertyPath";"manager.lastName"))
 $orderColl.push(New object("propertyPath";"salary"))
 $sortedEntitySelection:=$entitySelection.orderBy($orderColl)
```<!-- END REF --><!-- REF EntitySelectionClass.orderByFormula().Desc -->## .orderByFormula( )

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R6  | Ajout         |

</details><!-- REF #EntitySelectionClass.orderByFormula().Syntax -->**.orderByFormula**( *formulaString* : Text { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<br>**.orderByFormula**( *formulaObj* : Object { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection
<!-- END REF -->

<!-- REF #EntitySelectionClass.orderByFormula().Params -->| Paramètres    | Type               |    | Description                                 |
| ------------- | ------------------ |:--:| ------------------------------------------- |
| formulaString | Text               | -> | Formula string                              |
| formulaObj    | Object             | -> | Formula object                              |
| sortOrder     | Integer            | -> | `dk ascending` (default) or `dk descending` |
| settings      | Object             | -> | Parameter(s) for the formula                |
| Résultat      | 4D.EntitySelection | <- | New ordered entity selection                |<!-- END REF --> #### Description

The `.orderByFormula()` function<!-- REF #EntitySelectionClass.orderByFormula().Summary -->returns a new, ordered entity selection<!-- END REF -->containing all entities of the entity selection in the order defined through the *formulaString* or *formulaObj* and, optionally, *sortOrder* and *settings* parameters.
> This function does not modify the original entity selection.

You can use either a *formulaString* or a *formulaObj* parameter:

- *formulaString*: you pass a 4D expression such as "Year of(this.birthDate)".
- *formulaObj*: pass a valid formula object created using the `Formula` or `Formula from string` command.

The *formulaString* or *formulaObj* is executed for each entity of the entity selection and its result is used to define the position of the entity in the returned entity selection. The result must be of a sortable type (boolean, date, number, text, time, null).
> A null result is always the smallest value.

By default if you omit the *sortOrder* parameter, the resulting entity selection is sorted in ascending order. Optionnally, you can pass one of the following values in the *sortOrder* parameter:

| Constant      | Valeur | Commentaire                    |
| ------------- | ------ | ------------------------------ |
| dk ascending  | 0      | Ascending sort order (default) |
| dk descending | 1      | Descending sort order          |

Within the *formulaString* or *formulaObj*, the processed entity and thus its attributes are available through the `This` command (for example, `This.lastName`).

You can pass parameter(s) to the formula using the `args` property (object) of the `settings` parameter: the formula receives the `settings.args` object in $1.

#### Exemple 1

Sorting students using a formula provided as text:

```4d
 var $es1; $es2 : cs.StudentsSelection
 $es1:=ds.Students.query("nationality=:1";"French")
 $es2:=$es1.orderByFormula("length(this.lastname)") //ascending by default
 $es2:=$es1.orderByFormula("length(this.lastname)";dk descending)
```

Same sort order but using a formula object:

```4d
 var $es1; $es2 : cs.StudentsSelection
 var $formula : Object
 $es1:=ds.Students.query("nationality=:1";"French")
 $formula:=Formula(Length(This.lastname))
 $es2:=$es1.orderByFormula($formula) // ascending by default
 $es2:=$es1.orderByFormula($formula;dk descending)
```


#### Exemple 2

A formula is given as a formula object with parameters; `settings.args` object is received as $1 in the ***computeAverage*** method.

In this example, the "marks" object field in the **Students** dataClass contains students' grades for each subject. A single formula object is used to compute a student's average grade with different coefficients for schoolA and schoolB.

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
```<!-- END REF --><!-- REF EntitySelectionClass.query().Desc -->## .query()

<details><summary>Historique</summary>
| Version | Modifications                      |
| ------- | ---------------------------------- |
| v17 R6  | Support of Formula parameters      |
| v17 R5  | Support of placeholders for values |
| v17     | Ajout                              |

</details><!-- REF #EntitySelectionClass.query().Syntax -->**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.query().Params -->| Paramètres    | Type               |    | Description                                                                                                                                                   |
| ------------- | ------------------ |:--:| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Text               | -> | Search criteria as string                                                                                                                                     |
| formula       | Object             | -> | Search criteria as formula object                                                                                                                             |
| value         | any                | -> | Value(s) to use for indexed placeholder(s)                                                                                                                    |
| querySettings | Object             | -> | Query options: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan                                                                     |
| Résultat      | 4D.EntitySelection | <- | New entity selection made up of entities from entity selection meeting the search criteria specified in *queryString* or *formula*|<!-- END REF -->|

#### Description

The `.query()` function<!-- REF #EntitySelectionClass.query().Summary -->searches for entities that meet the search criteria specified in *queryString* or *formula* and (optionally) *value*(s) among all the entities in the entity selection<!-- END REF -->, and returns a new object of type `EntitySelection` containing all the entities that are found. Lazy loading is applied.
> This function does not modify the original entity selection.

If no matching entities are found, an empty `EntitySelection` is returned.

For detailed information on how to build a query using *queryString*, *value*, and *querySettings* parameters, please refer to the DataClass [`.query()`](DataClassClass.md#query) function description.
> By default if you omit the **order by** statement in the *queryString*, the returned entity selection is [not ordered](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). Note however that, in Client/Server mode, it behaves like an ordered entity selection (entities are added at the end of the selection).

#### Exemple 1


```4d
 var $entitySelectionTemp : cs.EmployeeSelection
 $entitySelectionTemp:=ds.Employee.query("lastName = :1";"M@")
 Form.emps:=$entitySelectionTemp.query("manager.lastName = :1";"S@")
```


#### Exemple 2

More examples of queries can be found in the DataClass [`.query()`](DataClassClass.md#query) page.

#### Voir également

[`.query()`](DataClassClass.md#query) for dataclass<!-- END REF --><!-- REF EntitySelectionClass.queryPath.Desc -->## .queryPath

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details><!-- REF #EntitySelectionClass.queryPath.Syntax -->**.queryPath** : Text<!-- END REF -->#### Description

The `.queryPath` property<!-- REF #EntitySelectionClass.queryPath.Summary -->contains a detailed description of the query as it was actually performed by 4D<!-- END REF -->. This property is available for `EntitySelection` objects generated through queries if the `"queryPath":true` property was passed in the *querySettings* parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.html#query) page.<!-- END REF --><!-- REF EntitySelectionClass.queryPlan.Desc -->## .queryPlan

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details><!-- REF #EntitySelectionClass.queryPlan.Syntax -->**.queryPlan** : Text<!-- END REF -->#### Description

The `.queryPlan` property<!-- REF #EntitySelectionClass.queryPlan.Summary -->contains a detailed description of the query just before it is executed (i.e., the planned query)<!-- END REF -->. This property is available for `EntitySelection` objects generated through queries if the `"queryPlan":true` property was passed in the *querySettings* parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.html#query) page.<!-- END REF --><!-- REF EntitySelectionClass.refresh().Desc -->## .refresh()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajout         |

</details><!-- REF #EntitySelectionClass.refresh().Syntax -->**.refresh()**
<!-- END REF -->

<!-- REF #EntitySelectionClass.refresh().Params -->| Paramètres | Type |  | Description                 |
| ---------- | ---- |::| --------------------------- |
|            |      |  | Ne requiert aucun paramètre |<!-- END REF --> #### Description
> This function only works with a remote datastore (client / server or `Open datastore` connection).

The `.refresh()` function<!-- REF #EntitySelectionClass.refresh().Summary -->immediately "invalidates" the entity selection data in the local ORDA cache<!-- END REF -->so that the next time 4D requires the entity selection, it will be reloaded from the database.

By default, the local ORDA cache is invalidated after 30 seconds. In the context of client / server applications using both ORDA and the classic language, this method allows you to make sure a remote application will always work with the latest data.

#### Exemple 1

In this example, classic and ORDA code modify the same data simultaneously:

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

A list box displays the Form.students entity selection and several clients work on it.

```4d
// Form method:
 Case of
    :(Form event code=On Load)
       Form.students:=ds.Students.all()
 End case
  //
  //
  // On client #1, the user loads, updates, and saves the first entity
  // On client #2, the user loads, updates, and saves the same entity
  //
  //
  // On client #1:
 Form.students.refresh() // Invalidates the ORDA cache for the Form.students entity selection
  // The list box content is refreshed from the database with update made by client #2
```<!-- END REF --><!-- REF EntitySelectionClass.slice().Desc -->## .slice()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details><!-- REF #EntitySelectionClass.slice().Syntax -->**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : 4D.EntitySelection
<!-- END REF -->

<!-- REF #EntitySelectionClass.slice().Params -->| Paramètres | Type               |    | Description                                                    |
| ---------- | ------------------ |:--:| -------------------------------------------------------------- |
| startFrom  | Integer            | -> | Index to start the operation at (included)                     |
| end        | Integer            | -> | End index (not included)                                       |
| Résultat   | 4D.EntitySelection | <- | New entity selection containing sliced entities (shallow copy) |<!-- END REF -->#### Description

La fonction `.slice()`<!-- REF #EntitySelectionClass.slice().Summary -->retourne une partie d'une sélection d'entité dans une nouvelle sélection d'entité<!-- END REF -->, sélectionnée de l'index *startFrom* à l'index de *fin* (*fin* non incluse) ou à la dernière entité de la sélection d'entité. This method returns a shallow copy of the entity selection (it uses the same entity references).
> This function does not modify the original entity selection.

The returned entity selection contains the entities specified by *startFrom* and all subsequent entities up to, but not including, the entity specified by *end*. If only the *startFrom* parameter is specified, the returned entity selection contains all entities from *startFrom* to the last entity of the original entity selection.

*   If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the entity selection). If the calculated value < 0, *startFrom* is set to 0.
*   If *startFrom >= length*, the function returns an empty entity selection.
*   If *end* < 0, it is recalculated as *end:=end+length*.
*   If *end < startFrom* (passed or calculated values), the method does nothing.

If the entity selection contains entities that were dropped in the meantime, they are also returned.

#### Exemple 1

You want to get a selection of the first 9 entities of the entity selection:

```4d
var $sel; $sliced : cs.EmployeeSelection
$sel:=ds.Employee.query("salary > :1";50000)
$sliced:=$sel.slice(0;9) //
```


#### Exemple 2

Assuming we have ds.Employee.all().length = 10

```4d
var $slice : cs.EmployeeSelection
$slice:=ds.Employee.all().slice(-1;-2) //tries to return entities from index 9 to 8, but since 9 > 8, returns an empty entity selection

```<!-- END REF --><!-- REF EntitySelectionClass.sum().Desc -->## .sum( )

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |


</details><!-- REF #EntitySelectionClass.sum().Syntax -->**.sum**( *attributePath* : Text ) : Real
<!-- END REF -->

<!-- REF #EntitySelectionClass.sum().Params -->| Paramètres    | Type |    | Description                                      |
| ------------- | ---- |:--:| ------------------------------------------------ |
| attributePath | Text | -> | Path of the attribute to be used for calculation |
| Résultat      | Real | <- | Sum of entity selection values                   |<!-- END REF -->#### Description


La fonction `.sum()`<!-- REF #EntitySelectionClass.sum().Summary -->retourne la somme de toutes les valeurs d'*attributPath* dans la sélection d'entités<!-- END REF -->.

`.sum()` returns 0 if the entity selection is empty.

The sum can only be done on values of number type. The sum can only be done on values of number type. In this case, if *attributePath* leads to a property that does not exist in the object or does not contain any numeric values, `.sum()` returns 0.

An error is returned if:

*   *attributePath* is not a numerical or an object attribute,
*   *attributePath* is a related attribute,
*   *attributePath* is not found in the entity selection dataclass.



#### Exemple

```4d
var $sel : cs.EmployeeSelection
var $sum : Real

$sel:=ds.Employee.query("salary < :1";20000)
$sum:=$sel.sum("salary")
```<!-- END REF --><!-- REF EntitySelectionClass.toCollection().Desc -->## .toCollection( )

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17     | Ajout         |

</details><!-- REF #EntitySelectionClass.toCollection().Syntax -->**.toCollection**( { *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer } } ) : *Collection*<br>**.toCollection**( *filterString* : Text {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<br>**.toCollection**( *filterCol* : Collection {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*
<!-- END REF -->

<!-- REF #EntitySelectionClass.toCollection().Params -->| Paramètres   | Type       |    | Description                                                                          |
| ------------ | ---------- |:--:| ------------------------------------------------------------------------------------ |
| filterString | Text       | -> | String with entity attribute path(s) to extract                                      |
| filterCol    | Collection | -> | Collection of entity attribute path(s) to extract                                    |
| options      | Integer    | -> | `dk with primary key`: adds the primary key<br>`dk with stamp`: adds the stamp |
| begin        | Integer    | -> | Designates the starting index                                                        |
| howMany      | Integer    | -> | Number of entities to extract                                                        |
| Résultat     | Collection | <- | Collection of objects containing attributes and values of entity selection           | <!-- END REF -->#### Description

La fonction `.toCollection()`<!-- REF #EntitySelectionClass.toCollection().Summary -->crée et retourne une collection où chaque élément est un objet contenant un ensemble de propriétés et de valeurs<!-- END REF -->correspondant aux noms et valeurs d'attribut pour la sélection d'entité.

If no filter parameter is passed or the first parameter contains an empty string or "*", all the attributes are extracted. Les attributs avec la propriété [kind](DataClassAttributeClass.md#kind) définie sur "relatedEntity" sont extraits avec la forme simple : un objet avec la propriété \_\_KEY (clé primaire). Attributes with kind property as "relatedEntities" are not extracted.

Or, you can designate the entity attributes to extract using a filter parameter. You can use one of these two filters:

*   *filterString* --a string with property paths separated with commas: "propertyPath1, propertyPath2, ...".
*   *filterCol* --a collection of strings containing property paths: \["propertyPath1","propertyPath2",...]


If a filter is specified for an attribute of the `relatedEntity` kind:

*   propertyPath = "relatedEntity" -> it is extracted with simple form
*   propertyPath = "relatedEntity.*" -> all the properties are extracted
*   propertyPath = "relatedEntity.propertyName1, relatedEntity.propertyName2, ..." -> only those properties are extracted


If a filter is specified for an attribute of the `relatedEntities` kind:

*   propertyPath = "relatedEntities.*" -> all the properties are extracted
*   propertyPath = "relatedEntities.propertyName1, relatedEntities.propertyName2, ..." -> only those properties are extracted



In the *options* parameter, you can pass the `dk with primary key` and/or `dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.

The *begin* parameter allows you to indicate the starting index of the entities to extract. You can pass any value between 0 and entity selection length-1.

The *howMany* parameter lets you specify the number of entities to extract, starting with the one specified in *begin*. Dropped entities are not returned but are taken into account according to *howMany*. For example, if *howMany*= 3 and there is 1 dropped entity, only 2 entities are extracted.

If *howMany* > length of the entity selection, the method returns (length - *begin*) objects.

An empty collection is returned if:

*   the entity selection is empty, or
*   *begin* is greater than the length of the entity selection.


#### Exemple 1

The following structure will be used throughout all examples of this section:

![](assets/en/API/dataclassAttribute4.png)


Example without filter or options parameter:

```4d
 var $employeesCollection : Collection
 var $employees : cs.EmployeeSelection

 $employeesCollection:=New collection
 $employees:=ds.Employee.all()
 $employeesCollection:=$employees.toCollection()
```

Returns:

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

Example with options:

```4d
var $employeesCollection : Collection
var $employees : cs.EmployeeSelection

$employeesCollection:=New collection
$employees:=ds.Employee.all()
$employeesCollection:=$employees.toCollection("";dk with primary key+dk with stamp)
```

Returns:

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

Example with slicing and filtering on properties:

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

Returns:

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


#### Example 4

Example with `relatedEntity` type with simple form:


```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName,lastName,employer")
```

returns:

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

#### Example 5

Example with *filterCol* parameter:

```4d
var $employeesCollection; $coll : Collection
$employeesCollection:=New collection
$coll:=New collection("firstName";"lastName")
$employeesCollection:=$employees.toCollection($coll)
```

Returns:

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

#### Example 6

Example with extraction of all properties of a relatedEntity:

```4d
var $employeesCollection; $coll : Collection
$employeesCollection:=New collection
$coll:=New collection
$coll.push("firstName")
$coll.push("lastName")
$coll.push("employer.*")
$employeesCollection:=$employees.toCollection($coll)
```

Returns:

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

#### Example 7

Example with extraction of some properties of a relatedEntity:

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

#### Example 8

Example with extraction of some properties of `relatedEntities`:

```4d
 var $employeesCollection : Collection
 $employeesCollection:=New collection
 $employeesCollection:=$employees.toCollection("firstName, lastName, directReports.firstName")
```

Returns:

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

#### Example 9

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
```<!-- END REF -->




<style> h2 { background: #d9ebff;}</style>

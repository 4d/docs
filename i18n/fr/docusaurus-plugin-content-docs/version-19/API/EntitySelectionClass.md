---
id: EntitySelectionClass
title: EntitySelection
---


Une entity selection est un objet contenant une ou plusieurs référence(s) à des [entités](ORDA/dsMapping.md#entity) appartenant à la même [Dataclass](ORDA/dsMapping.md#dataclass). Une entity selection peut contenir 0, 1 ou X entités de la dataclass - où X peut représenter le nombre total d'entités contenues dans la dataclass.

Les entity selections peuvent être créées à partir de sélections existantes à l'aide de diverses fonctions de la classe [`DataClass`](DataClassClass.md) telles que [`.all()`](DataClassClass.md#all) ou [`.query()`](DataClassClass.md#query), ou de la classe `EntityClass` elle-même, telles que [`.and()`](#and) ou [`orderBy()`](#orderby). Vous pouvez également créer des entity selections vides à l'aide de la fonction [`dataClass.newSelection()`](DataClassClass.md#newselection) ou de la commande [`Create new selection`](#create-new-selection).

### Sommaire

|                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntitySelectionClass.index.Syntax -->](#91index93)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.index.Summary -->                              |
| [<!-- INCLUDE EntitySelectionClass.attributeName.Syntax -->](#attributename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.attributeName.Summary -->          |
| [<!-- INCLUDE #EntitySelectionClass.add().Syntax -->](#add)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.add().Summary -->                                  |
| [<!-- INCLUDE #EntitySelectionClass.and().Syntax -->](#and)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.and().Summary -->                                  |
| [<!-- INCLUDE #EntitySelectionClass.average().Syntax -->](#average)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.average().Summary -->                      |
| [<!-- INCLUDE #EntitySelectionClass.contains().Syntax -->](#contains)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.contains().Summary -->                   |
| [<!-- INCLUDE #EntitySelectionClass.count().Syntax -->](#count)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.count().Summary -->                            |
| [<!-- INCLUDE #EntitySelectionClass.distinct().Syntax -->](#distinct)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.distinct().Summary -->                   |
| [<!-- INCLUDE #EntitySelectionClass.drop().Syntax -->](#drop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.drop().Summary -->                               |
| [<!-- INCLUDE #EntitySelectionClass.extract().Syntax -->](#extract)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.extract().Summary -->                      |
| [<!-- INCLUDE #EntitySelectionClass.first().Syntax -->](#first)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.first().Summary -->                            |
| [<!-- INCLUDE #EntitySelectionClass.getDataClass().Syntax -->](#getdataclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.getDataClass().Summary -->       |
| [<!-- INCLUDE #EntitySelectionClass.isAlterable().Syntax -->](#isalterable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isAlterable().Summary -->          |
| [<!-- INCLUDE #EntitySelectionClass.isOrdered().Syntax -->](#isordered)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isOrdered().Summary -->                |
| [<!-- INCLUDE #EntitySelectionClass.last().Syntax -->](#last)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.last().Summary -->                               |
| [<!-- INCLUDE #EntitySelectionClass.length.Syntax -->](#length)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.length.Summary -->                             |
| [<!-- INCLUDE #EntitySelectionClass.max().Syntax -->](#max)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.max().Summary -->                                  |
| [<!-- INCLUDE #EntitySelectionClass.min().Syntax -->](#min)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.min().Summary -->                                  |
| [<!-- INCLUDE #EntitySelectionClass.minus().Syntax -->](#minus)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.minus().Summary -->                            |
| [<!-- INCLUDE #EntitySelectionClass.or().Syntax -->](#or)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.or().Summary -->                                     |
| [<!-- INCLUDE #EntitySelectionClass.orderBy().Syntax -->](#orderby)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderBy().Summary -->                      |
| [<!-- INCLUDE #EntitySelectionClass.orderByFormula().Syntax -->](#orderbyformula)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderByFormula().Summary --> |
| [<!-- INCLUDE #EntitySelectionClass.query().Syntax -->](#query)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.query().Summary -->                            |
| [<!-- INCLUDE #EntitySelectionClass.queryPath.Syntax -->](#querypath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPath.Summary -->                    |
| [<!-- INCLUDE #EntitySelectionClass.queryPlan.Syntax -->](#queryplan)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPlan.Summary -->                    |
| [<!-- INCLUDE #EntitySelectionClass.refresh().Syntax -->](#refresh)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.refresh().Summary -->                      |
| [<!-- INCLUDE #EntitySelectionClass.slice().Syntax -->](#slice)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.slice().Summary -->                            |
| [<!-- INCLUDE #EntitySelectionClass.sum().Syntax -->](#sum)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.sum().Summary -->                                  |
| [<!-- INCLUDE #EntitySelectionClass.toCollection().Syntax -->](#tocollection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.toCollection().Summary -->       |

## Create entity selection

<!-- REF #_command_.Create entity selection.Syntax -->

**Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #_command_.Create entity selection.Params -->
| Paramètres | Type               |    | Description                                                                                          |
| ---------- | ------------------ |:--:| ---------------------------------------------------------------------------------------------------- |
| dsTable    | Table              | -> | Table de la base 4D dont la sélection courante doit être utilisée pour construire l'entity selection |
| settings   | Object             | -> | Option de création : contexte                                                                        |
| Result     | 4D.EntitySelection | <- | Nouvelle entity selection liée à la dataclass de la table|<!-- END REF -->                 |

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
| v17     | Ajoutées      |

</details>

<!-- REF EntitySelectionClass.index.Syntax -->

***&#91;index&#93;*** : 4D.Entity<!-- END REF -->

#### Description

The `EntitySelection[index]` notation <!-- REF EntitySelectionClass.index.Summary -->allows you to access entities within the entity selection using the standard collection syntax<!-- END REF -->: pass the position of the entity you want to get in the *index* parameter.

A noter que l'entité correspondante est rechargée depuis le datastore.

*index* peut être tout nombre compris entre 0 et `.length`-1.

* Si *index* est en-dehors de ces limites, une erreur est retournée.
* If *attributeName* kind is `storage`: `.attributeName` returns a collection of values of the same type as *attributeName*.
> > **Warning**: `EntitySelection[index]` is a non assignable expression, which means that it cannot be used as en editable entity reference with methods like [`.lock()`](EntityClass.md#lock) or [`.save()`](EntityClass.md#save). Pour travailler avec l'entité correspondante, vous devez assigner l'expression retournée à une expression assignable, comme une variable. Exemple :

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
| v17     | Ajoutées      |

</details>

<!-- REF EntitySelectionClass.attributeName.Syntax -->

***.attributeName*** : Collection<br/>***.attributeName*** : 4D.EntitySelection<!-- END REF -->

#### Description

Any dataclass attribute can be used as a property of an entity selection to return <!-- REF EntitySelectionClass.attributeName.Summary -->a "projection" of values for the attribute in the entity selection<!-- END REF -->. Les valeurs projetées peuvent être une collection ou une nouvelle entity selection, selon le [kind](DataClassAttributeClass.md#kind) (`storage` ou `relation`) de l'attribut.

* If *index* corresponds to a dropped entity, a Null value is returned.
* If *attributeName* kind is `relatedEntity`: `.attributeName` returns a new entity selection of related values of the same type as *attributeName*. Les doublons sont supprimés (une entity selection non ordonnée est retournée).
* If *attributeName* kind is `relatedEntities`: `.attributeName` returns a new entity selection of related values of the same type as *attributeName*. Les doublons sont supprimés (une entity selection non ordonnée est retournée).

Lorsqu'un attribut de relation est utilisé comme propriété d'une entity selection, le résultat est toujours une autre entity selection, même si une seule entité est retournée. Lorsqu'un attribut de relation est utilisé comme propriété d'une entity selection, le résultat est toujours une autre entity selection, même si une seule entité est retournée.

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

#### Exemple 3

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

| Version | Modifications                                        |
| ------- | ---------------------------------------------------- |
| v18 R5  | Supporte uniquement les entity selections altérables |
| v17     | Ajoutées                                             |

</details>

<!-- REF #EntitySelectionClass.add().Syntax -->

**.add**( *entity* : 4D.Entity ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.add().Params -->
| Paramètres      | Type               |    | Description                                                     |
| --------------- | ------------------ |:--:| --------------------------------------------------------------- |
| entité (entity) | 4D.Entity          | -> | Entité à ajouter à l'entity selection                           |
| Result          | 4D.EntitySelection | -> | Entity selection incluant l'*entity*|<!-- END REF --> |

#### Description

The `.add()` function <!-- REF #EntitySelectionClass.add().Summary -->adds the specified *entity* to the entity selection and returns the modified entity selection<!-- END REF -->.
> Les valeurs de type Date sont converties en valeurs numériques (secondes) et utilisées pour calculer la moyenne.

**Attention :** L'entity selection doit être *altérable*, c'est-à-dire qu'elle a été créée par exemple par [`.newSelection()`](DataClassClass.md#newselection) ou `Create entity selection`, sinon `.add()` retournera une erreur. Les entity selections partageables n'acceptent pas l'ajout d'entités. Pour plus d'informations, reportez-vous au paragraphe [Entity selections partageables ou altérables](ORDA/entities.md#shareable-or-alterable-entity-selections).

* Si l'entity selection est ordonnée, le paramètre *entity* est ajouté à la fin de la sélection. Si une référence à la même entité appartient déjà à l'entity selection, elle est dupliquée et une nouvelle référence est ajoutée.
* Si l'entity selection est non ordonnée, le paramètre *entity* est ajouté n'importe où dans la sélection, sans ordre spécifique.
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
 $employees.add($employee) //L'entité $employee est ajoutée à l'entity selection $employees
```

#### Exemple 3

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
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.and().Syntax -->

**.and**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.and**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.and().Params -->
| Paramètres      | Type               |    | Description                                                                                                 |
| --------------- | ------------------ |:--:| ----------------------------------------------------------------------------------------------------------- |
| entité (entity) | 4D.Entity          | -> | Entité à intersecter                                                                                        |
| entitySelection | 4D.EntitySelection | -> | Entity selection à intersecter                                                                              |
| Result          | 4D.EntitySelection | <- | Entity selection résultante de l'intersection à l'aide de l'opérateur logique ET|<!-- END REF --> |

#### Description

The `.and()` function <!-- REF #EntitySelectionClass.and().Summary -->combines the entity selection with an *entity* or *entitySelection* parameter using the logical AND operator<!-- END REF -->; it returns a new, unordered entity selection that contains only the entities that are referenced in both the entity selection and the parameter.

* Si vous passez *entity* comme paramètre, vous combinez cette entité avec l'entity selection. Si l'entité appartient à l'entity selection, une nouvelle entity selection contenant uniquement l'entité est retournée. Sinon, une entity selection vide est retournée.
* If you pass *entity* as parameter, you compare this entity with the entity selection. If the entity belongs to the entity selection, a new reference to the entity selection is returned. Otherwise, a new entity selection containing the original entity selection and the entity is returned.
> > You can compare [ordered and/or unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). La sélection résultante est toujours non ordonnée.

Si l'entity selection initiale ou celle du paramètre *entitySelection* est vide, ou si *entity* est Null, une entity selection vide est retournée.

Si l'entity selection initiale et le paramètre ne sont pas liés à la même dataclass, une erreur est retournée.

#### Exemple 1

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@")   
  //l'entity selection $employees contient l'entité
  //ayant la clé primaire 710 et d'autres entités
  //par ex. "Colin Hetrick" / "Grady Harness" / "Sherlock Holmes" (clé primaire 710)
 $employee:=ds.Employee.get(710) // Retourne "Sherlock Holmes"

 $result:=$employees.and($employee) //$result est une entity selection contenant
  //uniquement l'entité avec la clé primaire 710 ("Sherlock Holmes")
```

#### Exemple 3

Nous voulons obtenir une sélection d'employés nommés "Jones" qui vivent à New York :

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

| Version | Modifications                                     |
| ------- | ------------------------------------------------- |
| v18 R6  | Retourne undefined si l'entity selection est vide |
| v17     | Ajoutées                                          |

</details>

<!-- REF #EntitySelectionClass.average().Syntax -->

**.average**( *attributePath* : Text ) : Real<!-- END REF -->


<!-- REF #EntitySelectionClass.average().Params -->
| Paramètres    | Type |    | Description                                                                                                                        |
| ------------- | ---- |:--:| ---------------------------------------------------------------------------------------------------------------------------------- |
| attributePath | Text | -> | Chemin de l'attribut à utiliser pour le calcul                                                                                     |
| Result        | Real | <- | Moyenne arithmétique des valeurs des entités pour l'attribut (Undefined pour une entity selection vide)|<!-- END REF --> |

#### Description

The `.average()` function <!-- REF #EntitySelectionClass.average().Summary -->The `.average()` function<!-- END REF -->.

Passez dans le paramètre *attributePath* le chemin de l'attribut à utiliser pour le calcul.

Seules les valeurs numériques sont utilisées pour le calcul. Notez cependant que, lorsque le *attributePath* de l'entity selection contient des valeurs de types variés, `.average()` tient compte de tous les éléments contenant des valeurs scalaires pour calculer la moyenne.
> Les valeurs de type Date sont converties en valeurs numériques (secondes) et utilisées pour calculer la moyenne.

`.average()` retourne **undefined** si l'entity selection est vide ou si *attributePath* ne contient pas de valeurs numériques.

Une erreur est retournée si :

* *attributePath* est un attribut relatif,
* *attributePath* désigne un attribut qui n'existe pas dans la dataclass de l'entity selection.

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

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.contains().Syntax -->

**.contains**( *entity* : 4D.Entity ) : Boolean<!-- END REF -->


<!-- REF #EntitySelectionClass.contains().Params -->
| Paramètres      | Type      |    | Description                                                                             |
| --------------- | --------- |:--:| --------------------------------------------------------------------------------------- |
| entité (entity) | 4D.Entity | -> | Entité à évaluer                                                                        |
| Result          | Boolean   | <- | Vrai si l'entité appartient à l'entity selection, sinon Faux|<!-- END REF --> |

#### Description

The `.contains()` function <!-- REF #EntitySelectionClass.contains().Summary -->returns true if entity reference belongs to the entity selection<!-- END REF -->, and false otherwise.

Dans *entity*, spécifiez l'entité à rechercher dans l'entity selection. Si l'entité est Null, la fonction retournera faux.

Si *entity* et l'entity selection n'appartiennent pas à la même dataclass, une erreur est générée.

#### Exemple

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity

 $employees:=ds.Employee.query("lastName=:1";"H@")
 $employee:=ds.Employee.get(610)

 If($employees.contains($employee))
    ALERT("L'entité ayant la clé primaire 610 a un nom commençant par H")
 Else
    ALERT("L'entité ayant la clé primaire 610 n'a pas un nom commençant par H")
 End if
```


<!-- END REF -->

<!-- REF EntitySelectionClass.count().Desc -->
## .count()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.count().Syntax -->

**.count**( *attributePath* : Text ) : Real<!-- END REF -->


<!-- REF #EntitySelectionClass.count().Params -->
| Paramètres    | Type |    | Description                                                                                      |
| ------------- | ---- |:--:| ------------------------------------------------------------------------------------------------ |
| attributePath | Text | -> | Chemin de l'attribut à utiliser pour le calcul                                                   |
| Result        | Real | <- | Nombre de valeurs de *attributePath* non null dans l'entity selection|<!-- END REF --> |

#### Description

The `.count()` function <!-- REF #EntitySelectionClass.count().Summary -->The `.count()` function<!-- END REF -->.
> Seules les valeurs scalaires sont prises en compte. Les valeurs de type objet ou collection sont considérées comme des valeurs null.

Une erreur est retournée si :

* *attributePath* est un attribut relatif,
* *attributePath* n'est pas trouvé dans la dataclass de l'entity selection.

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

| Version | Modifications |
| ------- | ------------- |
| v18 R5  | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.copy().Syntax -->

**.copy**( { *option* : Integer } ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.copy().Params -->
| Paramètres | Type               |    | Description                                             |
| ---------- | ------------------ |:--:| ------------------------------------------------------- |
| option     | Integer            | -> | `ck shared` : retourne une entity selection partageable |
| Result     | 4D.EntitySelection | <- | Copie de l'entity selection|<!-- END REF -->  |

#### Description

The `.copy()` function <!-- REF #EntitySelectionClass.copy().Summary -->The `.copy()` function<!-- END REF -->.

> Les entités d'une collection d'entités auxquelles on accède via [ ] ne sont pas rechargées depuis la base de données.

Par défaut, si le paramètre *option* est omis, la fonction retourne une nouvelle entity selection non partageable (même si la fonction est appliquée à une entity selection partageable). Passez la constante `ck shared` dans le paramètre *option* si vous souhaitez créer une entity selection partageable.

> Cette fonction retourne toujours vrai lorsque l'entity selection provient d'un datastore distant.

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
  // L'entity selection Form.products est mise à jour
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
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.distinct().Syntax -->

**.distinct**( *attributePath* : Text { ; *option* : Integer } ) : Collection<!-- END REF -->


<!-- REF #EntitySelectionClass.distinct().Params -->
| Paramètres    | Type        |    | Description                                                                 |
| ------------- | ----------- |:--:| --------------------------------------------------------------------------- |
| attributePath | Text        | -> | Chemin de l'attribut dont vous souhaitez obtenir les valeurs distinctes     |
| option        | Integer     | -> | `dk diacritical` : évaluation diacritique ("A" # "a" par exemple)           |
| Result        | Collections | <- | Collection avec seulement les valeurs distinctes|<!-- END REF --> |

#### Description

The `.distinct()` function <!-- REF #EntitySelectionClass.distinct().Summary -->The `.distinct()` function<!-- END REF -->.

La collection retournée est automatiquement triée. Les valeurs **Null** ne sont pas renvoyées.

Dans le paramètre *attributePath* passez l'attribut d'entité dont vous voulez obtenir les valeurs distinctes. Seules les valeurs scalaires (texte, nombre, booléen ou date) peuvent être gérées. Les types sont renvoyés dans l'ordre suivant : Si *attributePath* est un attribut d'objet qui contient des valeurs de types différents, elles sont groupées par type et triées ensuite.

1. booléens
2. chaînes
3. nombres
4. dates

Vous pouvez utiliser la notation `[]` pour désigner une collection lorsque *attributePath* est un chemin dans un objet (cf. exemples).

Par défaut, une évaluation non diacritique est effectuée. Si vous souhaitez que l'évaluation soit sensible à la casse ou pour différencier des caractères accentués et non-accentués, passez la constante `dk diacritical` dans le paramètre *option*.

Une erreur est retournée si :

* *attributePath* est un attribut relatif,
* *attributePath* n'est pas trouvé dans la dataclass de l'entity selection.

#### Exemples

Vous souhaitez obtenir une collection contenant un seul élément par nom de pays :

```4d
 var $countries : Collection
 $countries:=ds.Employee.all().distinct("address.country")
```

`nicknames` est une collection et `extra` est un attribut d'objet :

```4d
$values:=ds.Employee.all().distinct("extra.nicknames[].first")
```


<!-- END REF -->

<!-- REF EntitySelectionClass.drop().Desc -->
## .drop()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.drop().Syntax -->

**.drop**( { *mode* : Integer } ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.drop().Params -->
| Paramètres                 | Type               |    | Description                                                                                                           |
| -------------------------- | ------------------ |:--:| --------------------------------------------------------------------------------------------------------------------- |
| mode                       | Integer            | -> | `dk stop dropping on first error` : stoppe l'exécution de la fonction au niveau de la première entité non-supprimable |
| Result                     | 4D.EntitySelection | <- | Entity selection vide si exécutée avec succès, sinon entity selection contenant la ou les entité(s) non supprimée(s)  |
| <!-- END REF --> |                    |    |                                                                                                                       |

#### Description

The `.drop()` function <!-- REF #EntitySelectionClass.drop().Summary -->removes the entities belonging to the entity selection from the table related to its dataclass within the datastore<!-- END REF -->. L'entity selection reste en mémoire.
> La suppression d'entités est permanente et ne peut pas être annulée. Il est recommandé d'appeler cette action dans une transaction afin d'avoir une possibilité de récupération.

Si une entité verrouillée est rencontrée lors de l'exécution de `.drop()`, elle n'est pas supprimée. Par défaut, la fonction traite toutes les entités de l'entity selection et renvoie des entités non supprimables dans l'entity selection. Si vous souhaitez que la fonction arrête l'exécution au niveau de la première entité non supprimable rencontrée, passez la constante `dk stop dropping on first error` dans le paramètre *mode*.

#### Exemple

Exemple sans l'option `dk stop dropping on first error` :

```4d
 var $employees; $notDropped : cs.EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop() // $notDropped est une entity selection contenant toutes les entités non supprimées
 If($notDropped.length=0) ///La suppression est un succès, toutes les entités ont été supprimées
    ALERT("Vous avez supprimé "+String($employees.length)+" employés") //L'entity selection supprimée reste en mémoire
 Else
    ALERT("Problème durant la suppression, réessayez plus tard")
 End if
```

Exemple avec l'option `dk stop dropping on first error` :

```4d
 var $employees; $notDropped : cs.EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop(dk stop dropping on first error) //$notDropped est une entity selection contenant la première entité non supprimée
 If($notDropped.length=0) //La suppression est un succès, toutes les entités ont été supprimées
    ALERT("Vous avez supprimé "+String($employees.length)+" employés") //L'entity selection supprimée reste en mémoire
 Else
    ALERT("Problème durant la suppression, réessayez plus tard")
 End if
```


<!-- END REF -->

<!-- REF EntitySelectionClass.extract().Desc -->
## .extract()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |

</details>


<!-- REF #EntitySelectionClass.extract().Syntax --> **.extract**( *attributePath* : Text { ; *option* : Integer } ) : Collection<br/>**.extract**( *attributePath* { ; *targetPath* } { ; *...attributePathN* : Text ; *targetPathN* : Text } ) : Collection<!-- END REF -->


<!-- REF #EntitySelectionClass.extract().Params -->
| Paramètres    | Type        |    | Description                                                                                    |
| ------------- | ----------- |:--:| ---------------------------------------------------------------------------------------------- |
| attributePath | Text        | -> | Chemin d'attribut dont les valeurs doivent être extraites dans la nouvelle collection          |
| targetPath    | Text        | -> | Chemin ou nom d'attribut cible                                                                 |
| option        | Integer     | -> | `ck keep null` : inclure les attributs null dans la collection retournée (ignorés par défaut). |
| Result        | Collections | <- | Collection containing extracted values|<!-- END REF -->                              |

#### Description

The `.extract()` function <!-- REF #EntitySelectionClass.extract().Summary -->The `.extract()` function<!-- END REF -->.

*attributePath* peut désigner :

* un attribut scalaire de dataclass,
* une entité liée,
* des entités liées.

Si *attributePath* est invalide, une collection vide est retournée.

Cette fonction accepte deux syntaxes.

**.extract( attributePath : Text { ; option : Integer } ) : Collection**

Avec cette syntaxe, `.extract()` remplit la collection retournée avec des valeurs de *attributePath* de l'entity selection.

Par défaut, les entités pour lesquelles *attributePath* est *null* ou indéfini sont ignorées dans la collection résultante. Vous pouvez passer la constante `ck keep null` dans le paramètre *option* pour intégrer ces valeurs comme des éléments **null** dans la collection retournée.

* Les attributs dataclass avec [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" sont extraits sous forme de collection d'entités (les duplications sont conservées).
* Les attributs dataclass avec [.kind](DataClassAttributeClass.md#kind) = "relatedEntities" sont extraits sous forme de collection d'entity selections.

**.extract ( attributePath ; targetPath { ; ...attributePathN ; ... targetPathN}) : Collection**

Avec cette syntaxe, `.extract()` remplit la collection retournée avec les valeurs de *attributePath*. Chaque élément de la collection retournée est un objet avec les propriétés *targetPath* complétées par les propriétés *attributePath* correspondantes. Les valeurs null sont conservées (le paramètre *option* est ignoré avec cette syntaxe).

Si plusieurs *attributePath* sont renseignés, un *targetPath* doit être fourni pour chacun. Seules les paires \[*attributePath*, *targetPath*] valides sont extraites.

* Les attributs dataclass avec [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" sont extraits sous forme d'entity.
* Les attributs dataclass avec [.kind](DataClassAttributeClass.md#kind) = "relatedEntities" sont extraits sous forme d'entity selection.

> Les valeurs Null sont évaluées comme inférieures aux autres valeurs.

#### Exemple

Considérons les tables et relations suivantes :

![](../assets/en/API/entityselection.PNG)

```4d
 var $firstnames; $addresses; $mailing; $teachers : Collection
  //
  //
  //$firstnames est une collection de Chaînes


 $firstnames:=ds.Teachers.all().extract("firstname")
  //
  //$addresses est une collection d'entités liées à la dataclass Address
  //Les valeurs null d'Address sont extraites
 $addresses:=ds.Teachers.all().extract("address";ck keep null)
  //
  //
  //$mailing est une collection d'objets avec les propriétés "who" et "to"
  //Le contenu de la propriété "who" est de type Chaîne 
  //Le contenu de la propriété "to" est de type entity (dataclass Address)
 $mailing:=ds.Teachers.all().extract("lastname";"who";"address";"to")
  //
  //
  //$mailing est une collection d'objets avec les propriétés "who" et "city"
  //Le contenu de la propriété "who" est de type Chaîne 
  //Le contenu de la propriété "city" est de type Chaîne 
 $mailing:=ds.Teachers.all().extract("lastname";"who";"address.city";"city")
  //
  //$teachers est une collection d'objets avec les propriétés "where" et "who"
  //Le contenu de la propriété "where" est de type Chaîne
  //Le contenu de la propriété "who" est une entity selection (dataclass Teachers)
 $teachers:=ds.Address.all().extract("city";"where";"teachers";"who")
  //
  //$teachers est une collection d'entity selections
 $teachers:=ds.Address.all().extract("teachers")
```


<!-- END REF -->

<!-- REF EntitySelectionClass.first().Desc -->
## .first()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.first().Syntax -->

**.first()** : 4D.Entity<!-- END REF -->


<!-- REF #EntitySelectionClass.first().Params -->
| Paramètres | Type      |    | Description                                                                                                   |
| ---------- | --------- |:--:| ------------------------------------------------------------------------------------------------------------- |
| Result     | 4D.Entity | <- | Reference to the first entity of the entity selection (Null if selection is empty)|<!-- END REF --> |

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
 $entitySel:=ds.Emp.query("lastName = :1";"Nonexistentname") //aucune entité correspondante
  //l'entity selection est alors vide
 $entity:=$entitySel.first() //renvoie Null
 $entity:=$entitySel[0]  //génère une erreur
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
| v17 R5  | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.getDataClass().Syntax -->

**.getDataClass()** : 4D.DataClass<!-- END REF -->


<!-- REF #EntitySelectionClass.getDataClass().Params -->
| Paramètres | Type         |    | Description                                                                       |
| ---------- | ------------ |:--:| --------------------------------------------------------------------------------- |
| Result     | 4D.DataClass | <- | Dataclass object to which the entity selection belongs|<!-- END REF --> |

#### Description

The `.getDataClass()` function <!-- REF #EntitySelectionClass.getDataClass().Summary -->The `.getDataClass()` function<!-- END REF -->.

Cette fonction est utile principalement dans le contexte de code générique.

#### Exemple

Le code générique suivant duplique toutes les entités de l'entity selection :

```4d
  //méthode duplicate_entities
  //duplicate_entities($entity_selection)

 #DECLARE ( $entitySelection : 4D.EntitySelection )  
 var $dataClass : 4D.DataClass
 var $entity; $duplicate : 4D.Entity
 var $status : Object
 $dataClass:=$entitySelection.getDataClass()
 For each($entity;$entitySelection)
    $duplicate:=$dataClass.new()
    $duplicate.fromObject($entity.toObject())
    $duplicate[$dataClass.getInfo().primaryKey]:=Null //réinitialise la clé primaire
    $status:=$duplicate.save()
 End for each
```


<!-- END REF -->

<!-- REF EntitySelectionClass.isAlterable().Desc -->
## .isAlterable()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R5  | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.isAlterable().Syntax -->

**.isAlterable()** : Boolean<!-- END REF -->


<!-- REF #EntitySelectionClass.isAlterable().Params -->
| Paramètres | Type    |    | Description                                                                           |
| ---------- | ------- |:--:| ------------------------------------------------------------------------------------- |
| Result     | Boolean | <- | True if the entity selection is alterable, False otherwise|<!-- END REF --> |

#### Description

The `.isAlterable()` function <!-- REF #EntitySelectionClass.isAlterable().Summary -->returns True if the entity selection is alterable<!-- END REF -->, and False if the entity selection is not alterable.

Pour plus d'informations, voir [Entity selections partageables ou modifiables](ORDA/entities.md#entity-selections-partageables-ou-modifiables).

#### Exemple

Vous êtes sur le point d'afficher l'entity selection `Form.products` dans une [list box](FormObjects/listbox_overview.md) pour permettre à l'utilisateur d'ajouter de nouveaux produits. Vous voulez vous assurer qu'elle est modifiable afin que l'utilisateur puisse ajouter de nouveaux produits sans erreur :

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
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.isOrdered().Syntax -->

**.isOrdered()** : Boolean<!-- END REF -->


<!-- REF #EntitySelectionClass.isOrdered().Params -->
| Paramètres | Type    |    | Description                                                                         |
| ---------- | ------- |:--:| ----------------------------------------------------------------------------------- |
| Result     | Boolean | <- | True if the entity selection is ordered, False otherwise|<!-- END REF --> |

#### Description

The `.isOrdered()` function <!-- REF #EntitySelectionClass.isOrdered().Summary -->returns True if the entity selection is ordered<!-- END REF -->, and False if it is unordered.
> Cette fonction ne modifie pas l'entity selection d'origine.

Pour plus d'informations, voir [Entity selections triées vs Entity selections non-triées](ORDA/dsMapping.md#entity-selections-triees-vs-entity-selections-non-triees).

#### Exemple

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $isOrdered : Boolean
 $employees:=ds.Employee.newSelection(dk keep ordered)
 $employee:=ds.Employee.get(714) // // renvoie l'entité avec clé primaire 714

  //Dans une entity selection triée, vous pouvez ajouter la même entité plusieurs fois (les duplications sont conservées)
 $employees.add($employee)
 $employees.add($employee)
 $employees.add($employee)

 $isOrdered:=$employees.isOrdered()
 If($isOrdered)
    ALERT("L'entity selection est triée et contient "+String($employees.length)+" employés")
 End if
```


<!-- END REF -->

<!-- REF EntitySelectionClass.last().Desc -->
## .last()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.last().Syntax -->

**.last()** : 4D.Entity<!-- END REF -->


<!-- REF #EntitySelectionClass.last().Params -->
| Paramètres | Type      |    | Description                                                                                                      |
| ---------- | --------- |:--:| ---------------------------------------------------------------------------------------------------------------- |
| Result     | 4D.Entity | <- | Reference to the last entity of the entity selection (Null if empty entity selection)|<!-- END REF --> |

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

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.length.Syntax -->

**.length** : Integer<!-- END REF -->

#### Description

The `.length` property <!-- REF #EntitySelectionClass.length.Summary -->returns the number of entities in the entity selection<!-- END REF -->. Si l'entity selection est vide, elle contient 0.

Les entity selections ont toujours une propriété `.length`.

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

| Version | Modifications                                     |
| ------- | ------------------------------------------------- |
| v17     | Ajoutées                                          |
| v18 R6  | Retourne undefined si l'entity selection est vide |

</details>

<!-- REF #EntitySelectionClass.max().Syntax -->

**.max**( *attributePath* : Text ) : any<!-- END REF -->


<!-- REF #EntitySelectionClass.max().Params -->
| Paramètres    | Type |    | Description                                           |
| ------------- | ---- |:--:| ----------------------------------------------------- |
| attributePath | Text | -> | Chemin de l'attribut à utiliser pour le calcul        |
| Result        | any  | <- | Highest value of attribute|<!-- END REF --> |

#### Description

The `.max()` function <!-- REF #EntitySelectionClass.max().Summary -->returns the highest (or maximum) value among all the values of *attributePath* in the entity selection<!-- END REF -->. Autrement dit, elle retourne la valeur de la dernière entité de la sélection si elle était triée par ordre croissant avec la fonction [`.orderBy()`](#orderby).

Si vous passez dans *attributePath* le chemin d'un attribut objet contenant des valeurs de différents types, la fonction `.max()` retournera la valeur maximale du premier type de valeur scalaire dans l'ordre par défaut de la liste des types 4D (voir [`.sort()`](CollectionClass.md#sort)).

`.max()` retourne **undefined** si l'entity selection est vide ou si *attributePath* n'est pas trouvé dans l'attribut objet.

Une erreur est retournée si :

* *attributePath* est un attribut relatif,
* *attributePath* désigne un attribut qui n'existe pas dans la dataclass de l'entity selection.

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

| Version | Modifications                                     |
| ------- | ------------------------------------------------- |
| v17     | Ajoutées                                          |
| v18 R6  | Retourne undefined si l'entity selection est vide |

</details>

<!-- REF #EntitySelectionClass.min().Syntax -->

**.min**( *attributePath* : Text ) : any<!-- END REF -->


<!-- REF #EntitySelectionClass.min().Params -->
| Paramètres    | Type |    | Description                                          |
| ------------- | ---- |:--:| ---------------------------------------------------- |
| attributePath | Text | -> | Chemin de l'attribut à utiliser pour le calcul       |
| Result        | any  | <- | Lowest value of attribute|<!-- END REF --> |

#### Description

The `.min()` function <!-- REF #EntitySelectionClass.min().Summary --> returns the lowest (or minimum) value among all the values of attributePath in the entity selection<!-- END REF -->.  Autrement dit, elle retourne la valeur de la première entité de la sélection si elle était triée par ordre croissant avec la fonction [`.orderBy()`](#orderby) (hors valeurs **Null**).

Si vous passez dans *attributePath* le chemin d'un attribut objet contenant des valeurs de différents types, la fonction `.min()` retournera la valeur minimale du premier type de valeur scalaire dans l'ordre par défaut de la liste des types 4D (voir [`.sort()`](CollectionClass.md#sort)).

`.min()` retourne **undefined** si l'entity selection est vide ou si *attributePath* n'est pas trouvé dans l'attribut objet.

Une erreur est retournée si :

* *attributePath* est un attribut relatif,
* *attributePath* désigne un attribut qui n'existe pas dans la dataclass de l'entity selection.

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

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.minus().Syntax -->

**.minus**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.minus**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.minus().Params -->
| Paramètres      | Type               |    | Description                                                                                         |
| --------------- | ------------------ |:--:| --------------------------------------------------------------------------------------------------- |
| entité (entity) | 4D.Entity          | -> | Entité à soustraire                                                                                 |
| entitySelection | 4D.EntitySelection | -> | Entity selection à soustraire                                                                       |
| Result          | 4D.EntitySelection | <- | New entity selection or a new reference on the existing entity selection|<!-- END REF --> |

#### Description

The `.minus()` function <!-- REF #EntitySelectionClass.minus().Summary -->excludes from the entity selection to which it is applied the *entity* or the entities of *entitySelection* and returns the resulting entity selection<!-- END REF -->.

* Si vous passez *entity* en paramètre, la fonction crée une nouvelle entity selection sans *entity* (si *entity* appartient à l'entity selection). Si *entity* n'était pas incluse dans l'entity selection d'origine, une nouvelle référence à l'entity selection est renvoyée.
* Si vous passez *entitySelection* en paramètre, la fonction retourne une entity selection contenant les entités appartenant à l"entity selection d'origine, sans les entités appartenant à *entitySelection*.
> > You can compare [ordered and/or unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). La sélection résultante est toujours non ordonnée.

Si l'entity selection initiale ou l'entity selection initiale et celle du paramètre *entitySelection* sont vides, une entity selection vide est retournée.

Si *entitySelection* est vide ou si *entity* est Null, une nouvelle référence à l'entity selection d'origine est renvoyée.

Si l'entity selection initiale et le paramètre ne sont pas liés à la même dataclass, une erreur est retournée.

#### Exemple 1

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity

 $employees:=ds.Employee.query("lastName = :1";"H@") 
  // l'entity selection $employees contient l'entité avec la clé primaire 710 ainsi que d'autres entités
  // par ex. "Colin Hetrick", "Grady Harness", "Sherlock Holmes" (clé primaire 710)

 $employee:=ds.Employee.get(710) // "Sherlock Holmes"

 $result:=$employees.minus($employee) //$result contient "Colin Hetrick", "Grady Harness"
```

#### Exemple 3

Vous voulez avoir une sélection d'employées nommées "Jones" qui vivent à New York :

```4d
 var $sel1; $sel2; $sel3 : cs.EmployeeSelection
 $sel1:=ds.Employee.query("name =:1";"Jones")
 $sel2:=ds.Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2).minus(ds.Employee.query("gender='male'"))
```


<!-- END REF -->

<!-- REF EntitySelectionClass.or().Desc -->
## .or()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.or().Syntax -->

**.or**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.or**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.or().Params -->
| Paramètres      | Type               |    | Description                                                                                       |
| --------------- | ------------------ |:--:| ------------------------------------------------------------------------------------------------- |
| entité (entity) | 4D.Entity          | -> | Entité à intersecter                                                                              |
| entitySelection | 4D.EntitySelection | -> | Entity selection à intersecter                                                                    |
| Result          | 4D.EntitySelection | <- | New entity selection or new reference to the original entity selection|<!-- END REF --> |

#### Description

The `.or()` function <!-- REF #EntitySelectionClass.or().Summary -->combines the entity selection with the *entity* or *entitySelection* parameter using the logical (not exclusive) OR operator<!-- END REF -->; it returns a new, unordered entity selection that contains all the entities from the entity selection and the parameter.

* If you pass *entitySelection* as parameter, you compare entity selections. Une nouvelle entity selection contenant uniquement les entités qui sont référencées dans les deux sélections est retournée. A new entity selection that contains only the entities that are referenced in both selections is returned.
* If the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned. If the original entity selection is empty, a reference to *entitySelection* or an entity selection containing only *entity* is returned.
> > You can compare [ordered and/or unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). La sélection résultante est toujours non ordonnée.

The returned entity selection contains the entities specified by *startFrom* and all subsequent entities up to, but not including, the entity specified by *end*. If only the *startFrom* parameter is specified, the returned entity selection contains all entities from *startFrom* to the last entity of the original entity selection.

Si *entitySelection* est vide ou si *entity* est Null, une nouvelle référence à l'entity selection d'origine est renvoyée.

Si l'entity selection initiale et le paramètre ne sont pas liés à la même dataclass, une erreur est retournée.

#### Exemple 1

```4d
 var $employees1; $employees2; $result : cs.EmployeeSelection
 $employees1:=ds.Employee.query("lastName = :1";"H@") //"Colin Hetrick","Grady Harness"
 $employees2:=ds.Employee.query("firstName = :1";"C@") //"Colin Hetrick", "Cath Kidston"
 $result:=$employees1.or($employees2) //$result contient "Colin Hetrick", "Grady Harness","Cath Kidston"
```

#### Exemple 3

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

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.orderBy().Syntax -->

**.orderBy**( *pathString* : Text ) : 4D.EntitySelection<br/>**.orderBy**( *pathObjects* : Collection ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.orderBy().Params -->
| Paramètres  | Type               |    | Description                                                            |
| ----------- | ------------------ |:--:| ---------------------------------------------------------------------- |
| pathString  | Text               | -> | Chemin(s) d'attribut(s) et mode(s) de tri pour l'entity selection      |
| pathObjects | Collections        | -> | Collection d'objets critère                                            |
| Result      | 4D.EntitySelection | <- | New entity selection in the specified order|<!-- END REF --> |

#### Description

The `.orderBy()` function <!-- REF #EntitySelectionClass.orderBy().Summary -->The `.orderBy()` function<!-- END REF -->.
> * Cette fonction ne modifie pas l'entity selection d'origine.
* Pour plus d'informations, reportez-vous au paragraphe [Entity selections triées ou non triées](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

Vous devez utiliser un paramètre de critère pour définir la manière dont les entités doivent être triées. Deux paramètres différents sont pris en charge :

* *pathString* (Texte) : Ce paramètre contient une formule composée de chemins d'attribut de 1 à n et (optionnellement) de tri, séparés par des virgules. La syntaxe est :

```4d
"attributePath1 {desc or asc}, attributePath2 {desc or asc},..."
```

L'ordre dans lequel les attributs sont passés détermine la priorité de tri des entités. Par défaut, les attributs sont triés par ordre croissant. Vous pouvez définir l'ordre de tri de chaque propriété dans la formule de critère, séparée du chemin de propriété par un simple espace : passez "asc" pour trier par ordre croissant ou "desc" pour un ordre décroissant.

* *pathObjects* (collection) : chaque élément de la collection contient un objet structuré de la façon suivante :

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

Par défaut, les attributs sont triés par ordre croissant ("descending" est false).

Vous pouvez ajouter autant d'objets que nécessaire dans la collection de critères.
> Cette fonction est utilisable uniquement avec un datastore distant (client/serveur ou connexion `Open datastore`).

#### Exemple

```4d
// tri avec formule
 $sortedEntitySelection:=$entitySelection.orderBy("firstName asc, salary desc")
 $sortedEntitySelection:=$entitySelection.orderBy("firstName")

  // tri avec collection avec ou sans ordres de tri
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

| Version | Modifications |
| ------- | ------------- |
| v17 R6  | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.orderByFormula().Syntax -->

**.orderByFormula**( *formulaString* : Text { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<br/>**.orderByFormula**( *formulaObj* : Object { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.orderByFormula().Params -->
| Paramètres    | Type               |    | Description                                             |
| ------------- | ------------------ |:--:| ------------------------------------------------------- |
| formulaString | Text               | -> | Chaîne formule                                          |
| formulaObj    | Object             | -> | Objet formule                                           |
| sortOrder     | Integer            | -> | `dk ascending` (par défaut) ou`dk descending`           |
| settings      | Object             | -> | Paramètre(s) de la formule                              |
| Result        | 4D.EntitySelection | <- | New ordered entity selection|<!-- END REF --> |

#### Description

The `.orderByFormula()` function <!-- REF #EntitySelectionClass.orderByFormula().Summary -->returns a new, ordered entity selection<!-- END REF --> containing all entities of the entity selection in the order defined through the *formulaString* or *formulaObj* and, optionally, *sortOrder* and *settings* parameters.
> Les entités d'une collection d'entités auxquelles on accède via [ ] ne sont pas rechargées depuis la base de données.

Vous pouvez utiliser soit le paramètre *formulaString*, soit le paramètre *formulaObj* :

* *formulaString* : passez une expression 4D telle que "Year of(this.birthDate)".
* *formulaObj* : passez un objet formule valide créé à l'aide de la commande `Formula` ou `Formula from string`.

La formule de *formulaString* ou *formulaObj* est exécutée pour chaque entité de l'entity selection et son résultat sert à définir la position de l'entité dans l'entity selection retournée. Le résultat doit être de type triable (booléen, date, numérique, texte, heure, null).
> Un résultat null est toujours la plus petite valeur.

Par défaut, si vous omettez le paramètre *sortOrder*, l'entity selection résultante est triée par ordre croissant. Vous pouvez optionnellement passer l'une des valeurs suivantes dans le paramètre *sortOrder* :

| Constante     | Value | Commentaire                     |
| ------------- | ----- | ------------------------------- |
| dk ascending  | 0     | Ordre de tri croissant (défaut) |
| dk descending | 1     | Ordre de tri décroissant        |

Dans *formulaString* et *formulaObj*, l'entité qui est traitée ainsi que ses attributs sont disponibles via la commande `This` (par exemple, `This.lastName`).

Vous pouvez passer un ou plusieurs paramètre(s) à la formule à l'aide de la propriété `args` (objet) du paramètre `settings` : la formule reçoit l'objet `settings.args` dans $1.

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

#### Exemple 3

Une formule est donnée sous forme d'objet formule avec des paramètres; l'objet `settings.args` est reçu dans $1 dans la méthode ***computeAverage***.

Dans cet exemple, le champ objet "marks" de la dataclass **Students** contient les notes des étudiants dans chaque matière. Un seul objet formule est utilisé pour calculer la note moyenne des étudiants à l'aide de différents coefficients pour schoolA et schoolB.

```4d
 var $es1; $es2 : cs.StudentsSelection
 var $formula; $schoolA; $schoolB : Object
 $es1:=ds.Students.query("nationality=:1";"French")
 $formula:=Formula(computeAverage($1))

 $schoolA:=New object() //objet settings
 $schoolA.args:=New object("english";1;"math";1;"history";1) // Coefficients permettant de calculer la moyenne

  //Trier les étudiants en fonction du critère schoolA
 $es2:=$es1.entitySelection.orderByFormula($formula;$schoolA)

 $schoolB:=New object() //objet settings 
 $schoolB.args:=New object("english";1;"math";2;"history";3) // Coefficients permettant de calculer une moyenne

  //Trier les étudiants en fonction du critère schoolB
 $es2:=$es1.entitySelection.orderByFormula($formula;dk descending;$schoolB)
```

```4d
  //
  // méthode computeAverage 
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

| Version | Modifications                                     |
| ------- | ------------------------------------------------- |
| v17 R6  | Prise en charge des paramètres Formula            |
| v17 R5  | Prise en charge des placeholders pour les valeurs |
| v17     | Ajoutées                                          |

</details>

<!-- REF #EntitySelectionClass.query().Syntax -->

**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br/>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.query().Params -->
| Paramètres    | Type               |    | Description                                                                                                                                                                        |
| ------------- | ------------------ |:--:| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Text               | -> | Critères de recherche en texte                                                                                                                                                     |
| formula       | Object             | -> | Critères de recherche en objet formule                                                                                                                                             |
| value         | any                | -> | Valeur(s) à utiliser comme placeholder(s)                                                                                                                                          |
| querySettings | Object             | -> | Options de recherche : parameters, attributes, args, allowFormulas, context, queryPath, queryPlan                                                                                  |
| Result        | 4D.EntitySelection | <- | Nouvelle entity selection composée d'entités issues de l'entity selection répondant aux critères de recherche spécifiés dans *queryString* ou *formula*|<!-- END REF --> |

#### Description

The `.query()` function <!-- REF #EntitySelectionClass.query().Summary -->The `.query()` function<!-- END REF -->searches for entities that meet the search criteria specified in *queryString* or *formula* and (optionally) *value*(s) among all the entities in the entity selection Le mode lazy loading est appliqué.
> Les entités d'une collection d'entités auxquelles on accède via [ ] ne sont pas rechargées depuis la base de données.

Si aucune entité correspondante n'est trouvée, une `EntitySelection` vide est retournée.

Si aucune entité correspondante n'est trouvée, une `EntitySelection` vide est retournée.
> Par défaut, si vous omettez la déclaration **order by** dans *queryString*, l'entity selection retournée n'est [pas triée](ORDA/dsMapping.md#entity-selections-triees-vs-entity-selections-non-triees). A noter cependant qu'en client/server, elle se comporte comme une entity selection triée (les entités sont ajoutées à la fin de la sélection).

#### Exemple 1

```4d
 var $entitySelectionTemp : cs.EmployeeSelection
 $entitySelectionTemp:=ds.Employee.query("lastName = :1";"M@")
 Form.emps:=$entitySelectionTemp.query("manager.lastName = :1";"S@")
```

#### Exemple 3

Pour plus d'informations sur la génération d'une requête à l'aide des paramètres *queryString*, *value*, et *querySettings*, reportez-vous à la description de la fonction de dataclass [`.query()`](DataClassClass.md#query).

#### Voir également

Vous trouverez plus d'exemples de requêtes dans la page [`.query()`](DataClassClass.md#query) .

<!-- END REF -->

<!-- REF EntitySelectionClass.queryPath.Desc -->
## .queryPath

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.queryPath.Syntax -->

**.queryPath** : Text<!-- END REF -->

#### Description

The `.queryPath` property <!-- REF #EntitySelectionClass.queryPath.Summary -->contains a detailed description of the query as it was actually performed by 4D<!-- END REF -->. Cette propriété est disponible pour les objets de type `EntitySelection` générés via des recherches si la propriété `"queryPath":true` a été passée dans le paramètre *querySettings* de la fonction [`.query()`](#query).

Pour plus d'informations, veuillez vous reporter au paragraphe **querySettings** de la fonction de dataclass [`.query()`](DataClassClass.html#query).

<!-- END REF -->

<!-- REF EntitySelectionClass.queryPlan.Desc -->
## .queryPlan

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.queryPlan.Syntax -->

**.queryPlan** : Text<!-- END REF -->

#### Description

The `.queryPlan` property <!-- REF #EntitySelectionClass.queryPlan.Summary --> contains a detailed description of the query just before it is executed (i.e., the planned query)<!-- END REF -->. Cette propriété est disponible pour les objets de type `EntitySelection` générés via des recherches si la propriété `"queryPlan":true` a été passée dans le paramètre *querySettings* de la fonction [`.query()`](#query).

Pour plus d'informations, veuillez vous reporter au paragraphe **querySettings** de la fonction de dataclass [`.query()`](DataClassClass.html#query).

<!-- END REF -->

<!-- REF EntitySelectionClass.refresh().Desc -->
## .refresh()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R3  | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.refresh().Syntax -->

**.refresh()**<!-- END REF -->


<!-- REF #EntitySelectionClass.refresh().Params -->
| Paramètres | Type |  | Description                                            |
| ---------- | ---- |::| ------------------------------------------------------ |
|            |      |  | Ne requiert aucun paramètre|<!-- END REF --> |

#### Description
> Cette fonction est utilisable uniquement avec un datastore distant (client/serveur ou connexion `Open datastore`).

The `.refresh()` function <!-- REF #EntitySelectionClass.refresh().Summary -->immediately "invalidates" the entity selection data in the local ORDA cache<!-- END REF --> so that the next time 4D requires the entity selection, it will be reloaded from the database.

Par défaut, le cache local d'ORDA est invalidé après 30 secondes. Dans le contexte des applications client/serveur à l'aide d'ORDA et du langage classique, cette fonction vous permet d'être certain que l'application distante fonctionne toujours avec les données les plus récentes.

#### Exemple 1

Dans cet exemple, les langages classiques et ORDA modifient simultanément les mêmes données :

```4d
 //Sur un 4D distant

 var $selection : cs.StudentsSelection
 var $student : cs.StudentsEntity

 $selection:=ds.Students.query("lastname=:1";"Collins")
  //La première entité est chargée dans le cache d'ORDA
 $student:=$selection.first()

  //Mise à jour avec un 4D classique, le cache ORDA cache n'en est pas informé
 QUERY([Students];[Students]lastname="Collins")
 [Students]lastname:="Colin"
 SAVE RECORD([Students])

  //pour obtenir la dernière version, le cache d'ORDA doit être invalidé
 $selection.refresh()
  // Même si le cache n'a pas expiré, la première entité est rechargée à partir du disque
 $student:=$selection.first()

  //$student.lastname contient "Colin"
```

#### Exemple 3

Dans cet exemple, les langages classiques et ORDA modifient simultanément les mêmes données :

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

<!-- REF EntitySelectionClass.slice().Desc -->
## .slice()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.slice().Syntax -->

**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.slice().Params -->
| Paramètres | Type               |    | Description                                                                                       |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------------------------- |
| startFrom  | Integer            | -> | Position à laquelle démarrer l'opération (incluse)                                                |
| end        | Integer            | -> | Position de fin (non incluse)                                                                     |
| Result     | 4D.EntitySelection | <- | Nouvelle entity selection contenant les entités copiées (shallow copy)|<!-- END REF --> |

#### Description

The `.slice()` function <!-- REF #EntitySelectionClass.slice().Summary -->returns a portion of an entity selection into a new entity selection<!-- END REF -->, selected from the *startFrom* index to the *end* index (*end* is not included) or to the last entity of the entity selection. Cette fonction effectue une shallow copy (copie superficielle) de l'entity selection (les mêmes références d'entités sont utilisées).
> Les entités d'une collection d'entités auxquelles on accède via [ ] ne sont pas rechargées depuis la base de données.

If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the entity selection). If the calculated value < 0, *startFrom* is set to 0.

* Si *startFrom* < 0, il est recalculé comme *startFrom:=startFrom+length* (il est considéré comme partant de la fin de l'entity selection). Si la valeur calculée est négative, *startFrom* prend la valeur 0.
* Si *startFrom >= length*, la fonction retourne une entity selection vide.
* Si *end* < 0, le paramètre est recalculé comme *end:=end+length*.
* Si *end < startFrom* (valeurs passées ou recalculées), la fonction ne fait rien.

Si l'entity selection contient des entités qui ont été supprimées entre-temps, elles sont également retournées.

#### Exemple 1

Si l'entity selection contient des entités qui ont été supprimées entre-temps, elles sont également retournées.

```4d
var $sel; $sliced : cs.EmployeeSelection
$sel:=ds.Employee.query("salary > :1";50000)
$sliced:=$sel.slice(0;9)
```

#### Exemple 3

Vous souhaitez obtenir une sous-sélection des 9 premières entités de l'entity selection :

```4d
var $slice : cs.EmployeeSelection
$slice:=ds.Employee.all().slice(-1;-2) //tente de retourner les entités de position 9 à 8, mais comme 9 > 8, retourne une entity selection vide

```


<!-- END REF -->

<!-- REF EntitySelectionClass.sum().Desc -->
## .sum( )

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.sum().Syntax -->

**.sum**( *attributePath* : Text ) : Real<!-- END REF -->


<!-- REF #EntitySelectionClass.sum().Params -->
| Paramètres    | Type |    | Description                                                        |
| ------------- | ---- |:--:| ------------------------------------------------------------------ |
| attributePath | Text | -> | Chemin de l'attribut à utiliser pour le calcul                     |
| Result        | Real | <- | Somme des valeurs de l'entity selection|<!-- END REF --> |

#### Description

The `.sum()` function <!-- REF #EntitySelectionClass.sum().Summary -->The `.sum()` function<!-- END REF -->.

La fonction `.sum()` <!-- REF #EntitySelectionClass.sum().Summary -->retourne la somme de toutes les valeurs d'*attributePath* dans l'entity selection<!-- END REF -->.

La somme peut uniquement être effectuée sur des valeurs numériques. Si *attributePath* est de type objet, seules les valeurs numériques qu'il contient seront prises en compte (les autres types de valeurs sont ignorés). Dans ce cas, si *attributePath* désigne une propriété qui n'existe pas dans l'objet ou qui ne contient pas de valeurs numériques, `.sum()` retourne 0.

Une erreur est retournée si :

* *attributePath* est un attribut qui n'est ni de type numérique ni de type objet,
* *attributePath* est un attribut relatif,
* *attributePath* n'est pas trouvé dans la dataclass de l'entity selection.

#### Exemple

```4d
var $sel : cs.EmployeeSelection
var $sum : Real

$sel:=ds.Employee.query("salary < :1";20000)
$sum:=$sel.sum("salary")
```


<!-- END REF -->

<!-- REF EntitySelectionClass.toCollection().Desc -->
## .toCollection( )

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17     | Ajoutées      |

</details>

<!-- REF #EntitySelectionClass.toCollection().Syntax -->

**.toCollection**( { *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer } } ) : *Collection*<br/>**.toCollection**( *filterString* : Text {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<br/>**.toCollection**( *filterCol* : Collection {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<!-- END REF -->


<!-- REF #EntitySelectionClass.toCollection().Params -->
| Paramètres   | Type        |    | Description                                                                                           |
| ------------ | ----------- |:--:| ----------------------------------------------------------------------------------------------------- |
| filterString | Text        | -> | Chemin(s) d'attribut(s) à extraire                                                                    |
| filterCol    | Collections | -> | Collection d'attribut(s) à extraire                                                                   |
| options      | Integer     | -> | `dk with primary key`: adds the primary key<br/>`dk with stamp`: adds the stamp                 |
| begin        | Integer     | -> | Désigne la position de début                                                                          |
| howMany      | Integer     | -> | Nombre d'entités à extraire                                                                           |
| Result       | Collections | <- | Collection of objects containing attributes and values of entity selection|<!-- END REF --> |

#### Description

The `.toCollection()` function <!-- REF #EntitySelectionClass.toCollection().Summary -->creates and returns a collection where each element is an object containing a set of properties and values <!-- END REF -->corresponding to the attribute names and values for the entity selection.

Si aucun paramètre de filtre n'est passé ou si le paramètre contient une chaîne vide ou "*", tous les attributs sont extraits. Les attributs dont la propriété [kind](DataClassAttributeClass.md#kind) est "relatedEntity" sont extraits avec la forme simple : un objet avec la propriété \_\_KEY (clé primaire). Les attributs dont la propriété "kind" est "relatedEntities" ne sont pas extraits.

Vous pouvez également indiquer les attributs à extraire à l'aide d'un paramètre de filtre. Deux types de filtres sont utilisables :

* *filterString* --une chaîne avec les chemins des propriétés séparés par des virgules : "propertyPath1, propertyPath2, ...".
* *filterCol* --une collection de chaînes contenant des chemins de propriétés : ["propertyPath1","propertyPath2",...]

Si un filtre est spécifié pour un attribut de type `relatedEntity` :

* propertyPath = "relatedEntity" -> l'extraction se fait dans une forme simple
* propertyPath = "relatedEntity.*" -> toutes les propriétés sont extraites
* propertyPath = "relatedEntity.propertyName1, relatedEntity.propertyName2, ..." -> seules ces propriétés sont extraites

Si un filtre est spécifié pour un attribut de type `relatedEntity` :

* propertyPath = "relatedEntities.*" -> toutes les propriétés sont extraites
* propertyPath = "relatedEntities.propertyName1, relatedEntities.propertyName2, ..." -> seules ces propriétés sont extraites

Si un filtre est spécifié pour un attribut de type`relatedEntities` :

Le paramètre *begin* vous permet d'indiquer la position de départ des entités à extraire. Vous pouvez passer toute valeur comprise entre 0 et la longueur de l'entity selection -1.

Le paramètre *howMany* vous permet de spécifier le nombre d'entités à extraire, à partir de celle désignée par *begin*. Les entités supprimées ne sont pas retournées mais sont prises en compte dans *howMany*. Par exemple, si *howMany*= 3 et s'il y a une entité supprimée, seulement 2 entités sont extraites.

Si le "kind" de *attributeName* est `storage`: `.attributeName` retourne une collection de valeurs du même type que *attributeName*.

Si *howMany* > length de l'entity selection, la fonction retourne (length - *begin*) objects.

* l'entity selection est vide, ou
* *begin* est supérieur à la longueur de l'entity selection.

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

#### Exemple 3

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

Retourne :

```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName,lastName,employer")
```

Exemple avec le type `relatedEntity` avec une forme simple :

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

retourne :

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

Retourne :

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

Retourne :

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

Exemple avec extraction de quelques propriétés de relatedEntity :

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

Retourne :

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

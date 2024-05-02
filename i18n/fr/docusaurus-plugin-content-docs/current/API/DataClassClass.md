---
id: DataClassClass
title: DataClass
---

A [DataClass](ORDA/dsMapping.md#dataclass) provides an object interface to a database table. All dataclasses in a 4D application are available as a property of the `ds` [datastore](ORDA/dsMapping.md#datastore).

### Sommaire

|                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE DataClassClass.attributeName.Syntax -->](#attributename)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE DataClassClass.attributeName.Summary -->                                  |
| [<!-- INCLUDE #DataClassClass.all().Syntax -->](#all)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataClassClass.all().Summary -->                                                          |
| [<!-- INCLUDE #DataClassClass.clearRemoteCache().Syntax -->](#clearremotecache)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataClassClass.clearRemoteCache().Summary -->                   |
| [<!-- INCLUDE #DataClassClass.fromCollection().Syntax -->](#fromcollection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataClassClass.fromCollection().Summary -->                         |
| [<!-- INCLUDE #DataClassClass.get().Syntax -->](#get)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataClassClass.get().Summary -->                                                          |
| [<!-- INCLUDE #DataClassClass.getCount().Syntax -->](#getcount)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataClassClass.getCount().Summary -->                                           |
| [<!-- INCLUDE #DataClassClass.getDataStore().Syntax -->](#getdatastore)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataClassClass.getDataStore().Summary -->                               |
| [<!-- INCLUDE #DataClassClass.getInfo().Syntax -->](#getinfo)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataClassClass.getInfo().Summary -->                                              |
| [<!-- INCLUDE #DataClassClass.getRemoteCache().Syntax -->](#getremotecache)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataClassClass.getRemoteCache().Summary -->                         |
| [<!-- INCLUDE #DataClassClass.new().Syntax -->](#new)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataClassClass.new().Summary -->                                                          |
| [<!-- INCLUDE #DataClassClass.newSelection().Syntax -->](#newselection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataClassClass.newSelection().Summary -->                               |
| [<!-- INCLUDE #DataClassClass.query().Syntax -->](#query)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataClassClass.query().Summary -->                                                    |
| [<!-- INCLUDE #DataClassClass.setRemoteCacheSettings().Syntax -->](#setremotecachesettings)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #DataClassClass.setRemoteCacheSettings().Summary --> |

<!-- REF DataClassClass.attributeName.Desc -->

## ._attributeName_

<details><summary>Historique</summary>

| Release | Modifications                                |
| ------- | -------------------------------------------- |
| 19 R3   | Ajout de l'attribut .exposed |
| 17      | Ajout                                        |

</details>

<!-- REF DataClassClass.attributeName.Syntax -->***.attributeName*** : object<!-- END REF -->

#### Description

Les attributs des dataclasses sont des <!-- REF DataClassClass.attributeName.Summary -->objets disponibles directement en tant que propriétés<!-- END REF --> de ces classes.

Les objets renvoyés ont des propriétés que vous pouvez lire pour obtenir des informations sur les attributs de votre dataclass.

> Les objets attributs de dataclass peuvent être modifiés, mais la structure sous-jacente de la base de données ne sera pas altérée.

#### Objet retourné

Les objets attributs retournés contiennent les propriétés suivantes :

| Propriété        | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoFilled       | Boolean | Vrai si la valeur de l'attribut est automatiquement remplie par 4D. Correspond aux propriétés de champs 4D suivantes : "Autoincrement" pour les champs de type numérique et "UUID Auto" pour les champs UUID (alpha). Not returned if `.kind` = "relatedEntity" or "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| exposed          | Boolean | Vrai si l'attribut est exposé en REST                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| fieldNumber      | entier  | Numéro interne du champ 4D correspondant à l'attribut. Not returned if `.kind` = "relatedEntity" or "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| fieldType        | Integer | Type de champ de la base de données 4D de l'attribut. Depends on the attribute `kind`. Possible values: <li>if `.kind` = "storage": corresponding 4D field type, see [`Value type`](https://doc.4d.com/4dv20/help/command/en/page1509.html)</li><li>if `.kind` = "relatedEntity": 38 (`is object`)</li><li>if `.kind` = "relatedEntities": 42 (`is collection`)</li><li>if `.kind` = "calculated" or "alias" = same as above, depending on the resulting value (field type, relatedEntity or relatedEntities)</li>                                                                                                                                                         |
| indexed          | Boolean | Vrai s'il existe un index B-tree ou Cluster B-tree sur l'attribut. Not returned if `.kind` = "relatedEntity" or "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| inverseName      | Text    | Nom de l'attribut qui se trouve à l'autre côté de la relation. Returned only when `.kind` = "relatedEntity" or "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| keywordIndexed   | Boolean | Vrai s'il existe un index de mots-clés sur l'attribut. Not returned if `.kind` = "relatedEntity" or "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| kind             | Text    | Catégorie de l'attribut. Possible values:<li>"storage": storage (or scalar) attribute, i.e. attribute storing a value, not a reference to another attribute</li><li>"calculated": computed attribute, i.e. defined through a [`get` function](../ORDA/ordaClasses.md#function-get-attributename)</li><li>"alias": attribute built upon [another attribute](../ORDA/ordaClasses.md#alias-attributes-1)</li><li>"relatedEntity": N -> 1 relation attribute (reference to an entity)</li><li>"relatedEntities": 1 -> N relation attribute (reference to an entity selection)</li>             |
| obligatoire      | Boolean | Vrai si la saisie d'une valeur null est rejetée pour l'attribut. Not returned if `.kind` = "relatedEntity" or "relatedEntities". Attention : Cette propriété correspond à la propriété du champ "Reject NULL value input" au niveau de la base de données 4D. Elle n'est pas liée à la propriété "Mandatory" existante qui est une option de contrôle de la saisie de données pour une table.                                                                                                                                                                                                                                                                                                                                                       |
| name             | Text    | Nom de l'attribut sous forme de chaîne                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| path             | Text    | Path of [an alias attribute](../ORDA/ordaClasses.md#alias-attributes-1) based upon a relation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| readOnly         | Boolean | Vrai si l'attribut est en lecture seule. For example, computed attributes without [`set` function](../ORDA/ordaClasses.md#function-set-attributename) are read-only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| relatedDataClass | Text    | Nom de la dataclass liée à l'attribut. Returned only when `.kind` = "relatedEntity" or "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| type             | Text    | Type conceptuel de la valeur de l'attribut, utile pour la programmation générique. Depends on the attribute `kind`. Possible values: <li>if `.kind` = "storage": "blob", "bool", "date", "image", "number", "object", or "string". "number" is returned for any numeric types including duration; "string" is returned for uuid, alpha and text attribute types; "blob" attributes are [blob objects](../Concepts/dt_blob.md#blob-type).</li><li>if `.kind` = "relatedEntity": related dataClass name</li><li>if `.kind` = "relatedEntities": related dataClass name + "Selection" suffix</li><li>if `.kind` = "calculated" or "alias": same as above, depending on the result</li> |
| unique           | Boolean | Vrai si la valeur de l'attribut doit être unique. Not returned if `.kind` = "relatedEntity" or "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

:::tip

For generic programming, use `Bool(attributeName.property)`, `Num(attributeName.property)` or `String(attributeName.property)` (depending on the property type) to get a valid value even if the property is not returned.

:::

#### Exemple 1

```4d
$salary:=ds.Employee.salary //retourne l'attribut salary dans la dataclass Employee
$compCity:=ds.Company["city"] //retourne l'attribut city dans la dataclass Company
```

#### Exemple 2

Considérant la structure suivante d'une base :

![](../assets/en/API/dataclassAttribute.png)

```4d
var $firstnameAtt;$employerAtt;$employeesAtt : Object

 $firstnameAtt:=ds.Employee.firstname
  //{name:firstname,kind:storage,fieldType:0,type:string,fieldNumber:2,indexed:true,
  //keyWordIndexed:false,autoFilled:false,mandatory:false,unique:false}

 $employerAtt:=ds.Employee.employer
  //{name:employer,kind:relatedEntity,relatedDataClass:Company,
  //fieldType:38,type:Company,inverseName:employees}
  //38=Is object

 $employeesAtt:=ds.Company.employees
  //{name:employees,kind:relatedEntities,relatedDataClass:Employee,
  //fieldType:42,type:EmployeeSelection,inverseName:employer}
  //42=Is collection
```

#### Exemple 3

Considérant les propriétés de table suivantes :

![](../assets/en/API/dataclassAttribute2.png)

```4d
 var $sequenceNumberAtt : Object
 $sequenceNumberAtt=ds.Employee.sequenceNumber
  //{name:sequenceNumber,kind:storage,fieldType:0,type:string,fieldNumber:13,
  //indexed:true,keyWordIndexed:false,autoFilled:true,mandatory:false,unique:true}
```

<!-- END REF -->

<!-- REF DataClassClass.all().Desc -->

## .all()

<details><summary>Historique</summary>

| Release | Modifications                       |
| ------- | ----------------------------------- |
| 17 R5   | Support of the _settings_ parameter |
| 17      | Ajout                               |

</details>

<!-- REF #DataClassClass.all().Syntax -->**.all** ( { *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #DataClassClass.all().Params -->

| Paramètres | Type                               |     | Description                                        |
| ---------- | ---------------------------------- | :-: | -------------------------------------------------- |
| settings   | Object                             |  -> | Option de création : contexte      |
| Résultat   | 4D.EntitySelection |  <- | Références vers toutes les entités de la dataclass |

<!-- END REF -->

#### Description

The `.all()` function <!-- REF #DataClassClass.all().Summary -->queries the datastore to find all the entities related to the dataclass and returns them as an entity selection<!-- END REF -->.

Les entités sont renvoyées dans l'ordre par défaut, qui est initialement l'ordre dans lequel elles ont été créées. Notez cependant que, si des entités ont été supprimées et que de nouvelles entités ont été ajoutées, l'ordre par défaut ne reflète plus l'ordre de création.

Si aucune entité n'est trouvée, une entity selection vide est renvoyée.

Le mode lazy loading est appliqué.

**settings**

In the optional _settings_ parameter, you can pass an object containing additional options. La propriété suivante est prise en charge :

| Propriété | Type | Description                                                                                                                                                                                                                                                                                                                         |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Text | Nom du contexte d'optimisation appliqué à l'entity selection. Ce contexte sera utilisé par le code qui manipule l'entity selection afin de bénéficier de l'optimisation. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |

> To know the total number of entities in a dataclass, it is recommended to use the [`getCount()`](#getcount) function which is more optimized than the `ds.myClass.all().length` expression.

#### Exemple

```4d
 var $allEmp : cs.EmployeeSelection
 $allEmp:=ds.Employee.all()
```

<!-- REF #DataClassClass.clearRemoteCache().Desc -->

## .clearRemoteCache()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #DataClassClass.clearRemoteCache().Syntax -->**.clearRemoteCache()**<!-- END REF -->

<!-- REF #DataStoreClass.clearRemoteCache().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.clearRemoteCache()` function <!-- REF #DataClassClass.clearRemoteCache().Summary -->empties the ORDA cache of a dataclass<!-- END REF -->.

> This function does not reset the `timeout` and `maxEntries` values.

#### Exemple

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $p : cs.PersonsEntity
var $cache : Object
var $info : Collection
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$persons:=$ds.Persons.all()
$text:=""
For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / "
End for each

$cache:=$ds.Persons.getRemoteCache()

$ds.Persons.clearRemoteCache()
// Cache of the Persons dataclass = {timeout:30;maxEntries:30000;stamp:255;entries:[]}
```

<!-- END REF -->

<!-- REF DataClassClass.fromCollection().Desc -->

## .fromCollection()

<details><summary>Historique</summary>

| Release | Modifications                       |
| ------- | ----------------------------------- |
| 17 R5   | Support of the _settings_ parameter |
| 17      | Ajout                               |

</details>

<!-- REF #DataClassClass.fromCollection().Syntax -->**.fromCollection**( *objectCol* : Collection { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #DataClassClass.fromCollection().Params -->

| Paramètres | Type                               |     | Description                                            |
| ---------- | ---------------------------------- | :-: | ------------------------------------------------------ |
| objectCol  | Collection                         |  -> | Collection d'objets à faire correspondre à des entités |
| settings   | Object                             |  -> | Option de création : contexte          |
| Résultat   | 4D.EntitySelection |  <- | Entity selection issue de la collection                |

<!-- END REF -->

#### Description

The `.fromCollection()` function <!-- REF #DataClassClass.fromCollection().Summary -->updates or creates entities in the dataclass according to the _objectCol_ collection of objects, and returns the corresponding entity selection<!-- END REF -->.

In the _objectCol_ parameter, pass a collection of objects to create new or update existing entities of the dataclass. Les noms des propriétés doivent correspondre à ceux des attributs de la dataclass. Si un nom de propriété n'existe pas dans la dataclass, il est ignoré. Si une valeur d'attribut n'est pas définie dans la collection pour une entité créée, l'attribut prend la valeur Null.

The mapping between the objects of the collection and the entities is done on the **attribute names** and **matching types**. Si une propriété d'objet a le même nom qu'un attribut d'entité mais que leurs types ne sont pas compatibles, l'attribut de l'entité ne reçoit pas de valeur.

**Create or update mode**

For each object of _objectCol_:

- Si l'objet contient une propriété booléenne "\_\_NEW" fixée à faux (ou ne contient pas de propriété booléenne "\_\_NEW"), l'entité est modifiée ou créée avec les valeurs correspondantes des propriétés de l'objet. Aucune vérification spécifique n'est effectuée concernant la clé primaire :
  - Si la clé primaire est fournie et existe, l'entité est modifiée. Dans ce cas, la clé primaire peut être fournie telle quelle ou via la propriété "\_\_KEY" (contenant la valeur de la propriété primaire).
  - Si la clé primaire est fournie (telle quelle) et n'existe pas, l'entité est créée
  - Si la clé primaire n'est pas fournie, l'entité est créée et la clé primaire est assignée selon les règles en vigueur de la base de données.
- If the object contains a boolean property "\_\_NEW" set to **true**, the entity is created with the corresponding values of the attributes from the object. Une vérification est effectuée sur la clé primaire :
  - Si la clé primaire est fournie (telle quelle) et existe, une erreur est générée
  - Si la clé primaire est fournie (telle quelle) et n'existe pas, l'entité est créée
  - Si la clé primaire n'est pas fournie, l'entité est créée et la clé primaire est assignée selon les règles en vigueur de la base de données.

> The "\_\_KEY" property containing a value is taken into account only when the "\_\_NEW" property is set to **false** (or is omitted) and a corresponding entity exists. Dans tous les autres cas, la valeur de la propriété "\_\_KEY" est ignorée, la valeur de la clé primaire doit être passée "telle quelle".

**Related entities**

The objects of _objectCol_ may contain one or more nested object(s) featuring one or more related entities, which can be useful to create or update links between entities.

Les objets imbriqués décrivant les entités relatives doivent contenir une propriété "\_\_KEY" (contenant la valeur de la clé primaire de l'entité relative) ou la clé primaire de l'entité relative elle-même. L'utilisation de la propriété \_\_KEY permet de ne pas dépendre du nom de l'attribut clé primaire.

> Ce mécanisme ne permet pas de créer ou de modifier les entités liées.

**Stamp**

Si une propriété \_\_STAMP est fournie, une vérification est effectuée sur le stamp (marqueur interne) de l'entité dans le datastore et une erreur est retournée en cas d'invalidité ("Le stamp ne correspond pas à celui de l'enregistrement# XX de la table XXXX"). For more information, see [Entity locking](ORDA/entities.md#entity-locking).

**settings**

In the optional _settings_ parameter, you can pass an object containing additional options. La propriété suivante est prise en charge :

| Propriété | Type | Description                                                                                                                                                                                                                                                                                                                         |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Text | Nom du contexte d'optimisation appliqué à l'entity selection. Ce contexte sera utilisé par le code qui manipule l'entity selection afin de bénéficier de l'optimisation. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |

#### Exemple 1

Nous souhaitons modifier une entité existante. La propriété \_\_NEW n'est pas fixée, la clé primaire de l'employé est passée et existe :

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=668 //Existing PK in Employee table
 $emp.firstName:="Arthur"
 $emp.lastName:="Martin"
 $emp.employer:=New object("ID";121) //Existing PK in the related dataClass Company
  // For this employee, we can change the Company by using another existing PK in the related dataClass Company
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### Exemple 2

Nous souhaitons modifier une entité existante. La propriété \_\_NEW n'est pas fournie, la clé primaire de l'employé est avec l'attribut \_\_KEY et existe :

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.__KEY:=1720 //Existing PK in Employee table
 $emp.firstName:="John"
 $emp.lastName:="Boorman"
 $emp.employer:=New object("ID";121) //Existing PK in the related dataClass Company
  // For this employee, we can change the Company by using another existing PK in the related dataClass Company
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### Exemple 3

Création simple d'une entité à partir d'une collection :

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.firstName:="Victor"
 $emp.lastName:="Hugo"
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### Exemple 4

Nous souhaitons créer une entité. La propriété \_\_NEW est à Vrai, la clé primaire de l'employé n'est pas fournie :

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.firstName:="Mary"
 $emp.lastName:="Smith"
 $emp.employer:=New object("__KEY";121) //Existing PK in the related dataClass Company
 $emp.__NEW:=True
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)






```

#### Exemple 5

Nous souhaitons créer une entité. La propriété \_\_NEW n'est pas passée, la clé primaire de l'employé est fournie et n'existe pas :

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=10000 //Unexisting primary key
 $emp.firstName:="Françoise"
 $emp.lastName:="Sagan"
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### Exemple 6

Dans cet exemple, la première entité sera bien créée mais la seconde création échouera car les deux entités utilisent la même clé primaire :

```4d
 var $empsCollection : Collection
 var $emp; $emp2 : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=10001 // Unexisting primary key
 $emp.firstName:="Simone"
 $emp.lastName:="Martin"
 $emp.__NEW:=True
 $empsCollection.push($emp)

 $emp2:=New object
 $emp2.ID:=10001 // Same primary key, already existing
 $emp2.firstName:="Marc"
 $emp2.lastName:="Smith"
 $emp2.__NEW:=True
 $empsCollection.push($emp2)
 $employees:=ds.Employee.fromCollection($empsCollection)
  //first entity is created
  //duplicated key error for the second entity
```

#### Voir également

[**.toCollection()**](EntitySelectionClass.md#tocollection)

<!-- END REF -->

<!-- REF DataClassClass.get().Desc -->

## .get()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #DataClassClass.get().Syntax -->**.get**( *primaryKey* : Integer { ; *settings* : Object } ) : 4D.Entity<br/>**.get**( *primaryKey* : Text { ; *settings* : Object } ) : 4D.Entity<!-- END REF -->

<!-- REF #DataClassClass.get().Params -->

| Paramètres | Type                      |     | Description                                       |
| ---------- | ------------------------- | :-: | ------------------------------------------------- |
| primaryKey | Integer OR Text           |  -> | Valeur de la clé primaire de l'entité à récupérer |
| settings   | Object                    |  -> | Option de création : contexte     |
| Résultat   | 4D.Entity |  <- | Entité correspondant à la clé primaire indiquée   |

<!-- END REF -->

#### Description

The `.get()` function <!-- REF #DataClassClass.get().Summary -->queries the dataclass to retrieve the entity matching the _primaryKey_ parameter<!-- END REF -->.

In _primaryKey_, pass the primary key value of the entity to retrieve. Le type de valeur doit correspondre au type de clé primaire définie dans le datastore (entier long ou texte). You can also make sure that the primary key value is always returned as Text by using the [`.getKey()`](EntityClass.md#getkey) function with the `dk key as string` parameter.

If no entity is found with _primaryKey_, a **Null** entity is returned.

Le chargement différé (lazy loading) est appliqué, ce qui signifie que les données associées sont chargées à partir du disque uniquement lorsque cela est nécessaire.

**settings**

In the optional _settings_ parameter, you can pass an object containing additional options. La propriété suivante est prise en charge :

| Propriété | Type | Description                                                                                                                                                                                                                                                                                                     |
| --------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Text | Nom du contexte d'optimisation appliqué à l'entité. Ce contexte sera utilisé par le code qui manipule l'entité afin de bénéficier de l'optimisation. This feature is [designed for ORDA client/server processing](ORDA/entities.md#client-server-optimization). |

#### Exemple 1

```4d
 var $entity : cs.EmployeeEntity  
 var $entity2 : cs.InvoiceEntity
 $entity:=ds.Employee.get(167) // return the entity whose primary key value is 167
 $entity2:=ds.Invoice.get("DGGX20030") // return the entity whose primary key value is "DGGX20030"
```

#### Exemple 2

This example illustrates the use of the _context_ property:

```4d
 var $e1; $e2; $e3; $e4 : cs.EmployeeEntity
 var $settings; $settings2 : Object

 $settings:=New object("context";"detail")
 $settings2:=New object("context";"summary")

 $e1:=ds.Employee.get(1;$settings)
 completeAllData($e1) // In completeAllData method, an optimization is triggered and associated to context "detail"

 $e2:=ds.Employee.get(2;$settings)
 completeAllData($e2) // In completeAllData method, the optimization associated to context "detail" is applied

 $e3:=ds.Employee.get(3;$settings2)
 completeSummary($e3) //In completeSummary method, an optimization is triggered and associated to context "summary"

 $e4:=ds.Employee.get(4;$settings2)
 completeSummary($e4) //In completeSummary method, the optimization associated to context "summary" is applied
```

<!-- END REF -->

<!-- REF DataClassClass.getCount.Desc -->

## .getCount()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #DataClassClass.getCount().Syntax -->**.getCount()** : Integer <!-- END REF -->

<!-- REF #DataClassClass.getCount().Params -->

| Paramètres | Type    |    | Description                        |
| ---------- | ------- | -- | ---------------------------------- |
| result     | Integer | <- | Nombre d'entités dans la dataclass |

<!-- END REF -->

#### Description

The `.getCount()` function <!-- REF #DataClassClass.getCount().Summary --> returns the number of entities in a dataclass<!-- END REF -->.

Si cette fonction est utilisée dans une transaction, les entités créées durant la transaction sont prises en compte.

#### Exemple

```4d
var $ds : 4D.DataStoreImplementation
var $number : Integer

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$number:=$ds.Persons.getCount()
```

<!-- END REF -->

<!-- REF DataClassClass.getDataStore().Desc -->

## .getDataStore()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #DataClassClass.getDataStore().Syntax -->**.getDataStore()** : cs.DataStore<!-- END REF -->

<!-- REF #DataClassClass.getDataStore().Params -->

| Paramètres | Type                         |     | Description               |
| ---------- | ---------------------------- | :-: | ------------------------- |
| Résultat   | cs.DataStore |  <- | Datastore de la dataclass |

<!-- END REF -->

#### Description

The `.getDataStore()` function <!-- REF #DataClassClass.getDataStore().Summary -->returns the datastore for the specified dataclass<!-- END REF -->.

Le datastore peut être :

- the main datastore, as returned by the `ds` command.
- a remote datastore, opened using the `Open datastore` command.

#### Exemple

The _**SearchDuplicate**_ project method searches for duplicated values in any dataclass.

```4d
 var $pet : cs.CatsEntity
 $pet:=ds.Cats.all().first() //get an entity
 SearchDuplicate($pet;"Dogs")
```

```4d
  // SearchDuplicate method
  // SearchDuplicate(entity_to_search;dataclass_name)

 #DECLARE ($pet : Object ; $dataClassName : Text)
 var $dataStore; $duplicates : Object  

 $dataStore:=$pet.getDataClass().getDataStore()
 $duplicates:=$dataStore[$dataClassName].query("name=:1";$pet.name)
```

<!-- END REF -->

<!-- REF DataClassClass.getInfo().Desc -->

## .getInfo()

<details><summary>Historique</summary>

| Release | Modifications           |
| ------- | ----------------------- |
| 19 R3   | Ajout propriété exposed |
| 17 R5   | Ajout                   |

</details>

<!-- REF #DataClassClass.getInfo().Syntax -->**.getInfo()** : Object <!-- END REF -->

<!-- REF #DataClassClass.getInfo().Params -->

| Paramètres | Type   |    | Description                   |
| ---------- | ------ | -- | ----------------------------- |
| Résultat   | Object | <- | Informations sur la dataclass |

<!-- END REF -->

#### Description

The `.getInfo()` function <!-- REF #DataClassClass.getInfo().Summary -->returns an object providing information about the dataclass<!-- END REF -->. Cette fonction est utile pour l'écriture de code générique.

**Returned object**

| Propriété   | Type    | Description                              |
| ----------- | ------- | ---------------------------------------- |
| exposed     | Boolean | Vrai si la dataclass est exposée en REST |
| name        | Text    | Nom de la dataclass                      |
| primaryKey  | Text    | Nom de la clé primaire de la dataclass   |
| tableNumber | Integer | Numéro interne de la table 4D            |

#### Exemple 1

```4d
 #DECLARE ($entity : Object)  
 var $status : Object

 computeEmployeeNumber($entity) //do some actions on entity

 $status:=$entity.save()
 if($status.success)
    ALERT("Record updated in table "+$entity.getDataClass().getInfo().name)
 End if
```

#### Exemple 2

```4d
 var $settings : Object
 var $es : cs.ClientsSelection

 $settings:=New object
 $settings.parameters:=New object("receivedIds";getIds())
 $settings.attributes:=New object("pk";ds.Clients.getInfo().primaryKey)
 $es:=ds.Clients.query(":pk in :receivedIds";$settings)
```

#### Exemple 3

```4d
 var $pk : Text
 var $dataClassAttribute : Object

 $pk:=ds.Employee.getInfo().primaryKey
 $dataClassAttribute:=ds.Employee[$pk] // If needed the attribute matching the primary key is accessible
```

<!-- END REF -->

<!-- REF DataClassClass.getRemoteCache().Desc -->

## .getRemoteCache()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #DataClassClass.getRemoteCache().Syntax -->**.getRemoteCache**() : Object <!-- END REF -->

<!-- REF #DataClassClass.getRemoteCache().Params -->

| Paramètres | Type   |    | Description                                                                 |
| ---------- | ------ | -- | --------------------------------------------------------------------------- |
| result     | Object | <- | Objet décrivant le contenu du cache ORDA pour la dataclass. |

<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. Dans la plupart des cas, vous n'aurez pas besoin de l'utiliser.

#### Description

The `.getRemoteCache()` function <!-- REF #DataClassClass.getRemoteCache().Summary -->returns an object that holds the contents of the ORDA cache for a dataclass.<!-- END REF -->.

Calling this function from a 4D single-user application returns `Null`.

L'objet retourné contient les propriétés suivantes :

| Propriété  | Type       | Description                                                                                   |
| ---------- | ---------- | --------------------------------------------------------------------------------------------- |
| maxEntries | Integer    | Nombre maximum de collections "entries".                                      |
| stamp      | Integer    | Marqueur du cache.                                                            |
| timeout    | Integer    | Durée avant qu'une nouvelle entrée dans le cache soit indiquée comme expirée. |
| entries    | Collection | Contient un objet pour chaque entité dans le cache.                           |

Each entry object in the `entries` collection has the following properties:

| Propriété | Type    | Description                                              |
| --------- | ------- | -------------------------------------------------------- |
| data      | Object  | Objet contenant les données de l'entrée. |
| expired   | Boolean | True si l'entrée a expiré.               |
| key       | Text    | Clé primaire de l'entité.                |

The `data` object in each entry contains the following properties:

| Propriété                                             | Type    | Description                                                                                                                                                               |
| ----------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __KEY       | String  | Clé primaire de l'entité                                                                                                                                                  |
| __STAMP     | Longint | Stamp de l'entité dans la base de données                                                                                                                                 |
| __TIMESTAMP | String  | Timestamp de l'entité dans la base de données (le format est YYYY-MM-DDTHH:MM:SS:ms:Z) |
| dataClassAttributeName                                | Variant | S'il y a des données dans le cache pour un attribut de dataclass, il est retourné dans une propriété du même type que dans la base de données.            |

Les données concernant les entités liées sont stockées dans le cache de l'objet data.

#### Exemple

In the following example, `$ds.Persons.all()` loads the first entity with all its attributes. Then, the request optimization is triggered, so only `firstname` and `address.city` are loaded.

Note that `address.city` is loaded in the cache of the `Persons` dataclass.

Only the first entity of the `Address` dataclass is stored in the cache. Elle est chargée durant la première itération de la boucle.

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $p : cs.PersonsEntity
var $cachePersons; $cacheAddress : Object
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$persons:=$ds.Persons.all()

$text:=""
For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / "
End for each

$cachePersons:=$ds.Persons.getRemoteCache()
$cacheAddress:=$ds.Adress.getRemoteCache()
```

#### Voir également

[.setRemoteCacheSettings()](#setremotecachesettings)<br/>[.clearRemoteCache()](#clearremotecache)

<!-- REF DataClassClass.new().Desc -->

## .new()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #DataClassClass.new().Syntax -->**.new()** : 4D.Entity <!-- END REF -->

<!-- REF #DataClassClass.new().Params -->

| Paramètres | Type                      |    | Description                                  |
| ---------- | ------------------------- | -- | -------------------------------------------- |
| Résultat   | 4D.Entity | <- | Nouvelle entité correspondant à la dataclass |

<!-- END REF -->

#### Description

The `.new()` function <!-- REF #DataClassClass.new().Summary -->creates in memory and returns a new blank entity related to the Dataclass<!-- END REF -->.

The entity object is created in memory and is not saved in the database until the [`.save( )`](EntityClass.md#save) function is called. Si l'entité est supprimée avant d'être sauvegardée, elle ne peut pas être récupérée.

**4D Server**: In client-server, if the primary key of the corresponding table is auto-incremented, it will be calculated when the entity is saved on the server.

All attributes of the entity are initialized with the **null** value.

> Attributes can be initialized with default values if the **Map NULL values to blank values** option is selected at the 4D database structure level.

#### Exemple

Cet exemple crée une nouvelle entité dans la dataclass "Log" et enregistre les informations dans l'attribut "info" :

```4d
 var $entity : cs.LogEntity
 $entity:=ds.Log.new() //create a reference
 $entity.info:="New entry" //store some information
 $entity.save() //save the entity
```

<!-- END REF -->

<!-- REF DataClassClass.newSelection().Desc -->

## .newSelection()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17      | Ajout         |

</details>

<!-- REF #DataClassClass.newSelection().Syntax -->**.newSelection**( { *keepOrder* : Integer } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.newSelection().Params -->

| Paramètres | Type                               |    | Description                                                                                                                                                                                 |
| ---------- | ---------------------------------- | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keepOrder  | Integer                            | -> | `dk keep ordered`: creates an ordered entity selection,<br/>`dk non ordered`: creates an unordered entity selection (default if omitted) |
| Résultat   | 4D.EntitySelection | <- | Nouvelle entity selection vide liée à la dataclass                                                                                                                                          |

<!-- END REF -->

#### Description

The `.newSelection()` function <!-- REF #DataClassClass.newSelection().Summary -->creates a new, blank, non-shareable entity selection, related to the dataclass, in memory<!-- END REF -->.

> For information on non-shareable entity selections, please refer to [this section](ORDA/entities.md#shareable-or-non-shareable-entity-selections).

If you want to create an ordered entity selection, pass the `dk keep ordered` selector in the _keepOrder_ parameter. By default if you omit this parameter, or if you pass the `dk non ordered` selector, the method creates an unordered entity selection. Les entity selections non triées sont plus rapides, mais vous ne pouvez pas vous fier aux positions des entités. For more information, please see [Ordered vs Unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

When created, the entity selection does not contain any entities (`mySelection.length` returns 0). This method lets you build entity selections gradually by making subsequent calls to the [`add()`](EntitySelectionClass.md#add) function.

#### Exemple

```4d
 var $USelection; $OSelection : cs.EmployeeSelection
 $USelection:=ds.Employee.newSelection() //create an unordered empty entity selection
 $OSelection:=ds.Employee.newSelection(dk keep ordered) //create an ordered empty entity selection
```

<!-- END REF -->

<!-- REF DataClassClass.query().Desc -->

## .query()

<details><summary>Historique</summary>

| Release | Modifications                                     |
| ------- | ------------------------------------------------- |
| 17 R6   | Prise en charge des paramètres Formula            |
| 17 R5   | Prise en charge des placeholders pour les valeurs |
| 17      | Ajout                                             |

</details>

<!-- REF #DataClassClass.query().Syntax -->**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br/>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection <!-- END REF -->

<!-- REF #DataClassClass.query().Params -->

| Paramètres    | Type                               |    | Description                                                                                                                 |
| ------------- | ---------------------------------- | -- | --------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Text                               | -> | Critères de recherche en texte                                                                                              |
| formula       | Object                             | -> | Critères de recherche en objet formule                                                                                      |
| value         | any                                | -> | Valeur(s) à utiliser comme placeholder(s)                                             |
| querySettings | Object                             | -> | Options de recherche : parameters, attributes, args, allowFormulas, context, queryPath, queryPlan           |
| Résultat      | 4D.EntitySelection | <- | New entity selection made up of entities from dataclass meeting the search criteria specified in _queryString_ or _formula_ |

<!-- END REF -->

#### Description

The `.query()` function <!-- REF #DataClassClass.query().Summary -->searches for entities that meet the search criteria specified in _queryString_ or _formula_ and (optionally) _value_(s)<!-- END REF -->, for all the entities in the dataclass, and returns a new object of type `EntitySelection` containing all the entities that are found. Le mode lazy loading est appliqué.

If no matching entities are found, an empty `EntitySelection` is returned.

#### paramètre queryString

The _queryString_ parameter uses the following syntax:

```4d
attributePath|formula comparator value   
 {logicalOperator attributePath|formula comparator value}   
 {order by attributePath {desc | asc}}
```

où :

- **attributePath**: path of attribute on which you want to execute the query. Ce paramètre peut contenir un nom simple (par exemple "pays") ou un chemin d'attribut valide (par exemple "pays.nom"). In case of an attribute path whose type is `Collection`, `[]` notation is used to handle all the occurences (for example `children[].age`).

> _You cannot use directly attributes whose name contains special characters such as ".", "\[ ]", or "=", ">", "#"..., because they will be incorrectly evaluated in the query string. If you need to query on such attributes, you must consider using placeholders, which allow an extended range of characters in attribute paths (see_ **Using placeholders** _below)._

- **formula**: a valid formula passed as `Text` or `Object`. La formule sera évaluée pour chaque entité traitée et doit retourner une valeur booléenne. Within the formula, the entity is available through the `This` object.

  - **Text**: the formula string must be preceeded by the `eval( )` statement, so that the query parser evaluates the expression correctly. For example: _"eval(length(This.lastname) >=30)"_
  - **Object**: the [formula object](FunctionClass.md) is passed as a **placeholder** (see below). The formula must have been created using the [`Formula`](FunctionClass.md#formula) or [`Formula from string`](FunctionClass.md#formula-from-string) command.

> * Keep in mind that 4D formulas only support `&` and `|` symbols as logical operators.
> * Si la formule n'est pas le seul critère de recherche, le système d'optimisation des requêtes pourra prioriser le traitement d'autres critères (ex : attributs indexés) et ainsi, la formule sera évaluée uniquement pour un sous-ensemble d'entités.

Les formules contenues dans les requêtes peuvent recevoir des paramètres via $1. This point is detailed in the **formula parameter** paragraph below.

> - You can also pass directy a `formula` parameter object instead of the `queryString` parameter (recommended when formulas are more complex). See **formula parameter** paragraph below.
> - For security reasons, formula calls within `query()` functions can be disallowed. See `querySettings` parameter description.

- **comparator**: symbol that compares _attributePath_ and _value_. Les symboles suivants sont pris en charge :

| Comparaison                             | Symbole(s) | Commentaire                                                                                                                                                                                                                                  |
| --------------------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Egal à                                  | =, ==                         | Retourne les données correspondantes, prend en charge le joker de recherche (@), ne tient pas compte de la casse et est non diacritique.                                                     |
|                                         | ===, IS                       | Retourne les données correspondantes, considère le @ comme un caractère standard, ne tient pas compte de la casse et est non diacritique                                                                                        |
| Différent de                            | #, !=                         | Prend en charge le joker de recherche (@). Equivalent to "Not condition applied on a statement" ([see below](#not-equal-to-in-collections)).              |
|                                         | !==, IS NOT                   | Considère le @ comme un caractère standard                                                                                                                                                                                      |
| Condition Not appliquée à une assertion | NOT                           | Les parenthèses sont obligatoires lorsque NOT est utilisé avant une déclaration contenant plusieurs opérateurs. Equivalent to "Not equal to" ([see below](#not-equal-to-in-collections)). |
| Inférieur à                             | <                             |                                                                                                                                                                                                                                              |
| Supérieur à                             | >                             |                                                                                                                                                                                                                                              |
| Inférieur ou égal à                     | <=                            |                                                                                                                                                                                                                                              |
| Supérieur ou égal à                     | > =                           |                                                                                                                                                                                                                                              |
| Inclus parmi                            | IN                            | Retourne les données égales à au moins une des valeurs d'une collection ou d'un ensemble de valeurs, prend en charge le joker de recherche (@)                                                               |
| Contient mot-clé                        | %                             | Les mots-clés peuvent être utilisés avec les attributs de type texte ou image                                                                                                                                                                |

- **value**: the value to compare to the current value of the property of each entity in the entity selection or element in the collection. It can be a **placeholder** (see **Using placeholders** below) or any expression matching the data type property.
  Lorsque vous utilisez une valeur constante, les règles suivantes doivent être respectées :
  - **text** type constant can be passed with or without simple quotes (see **Using quotes** below). Pour rechercher une chaîne dans une chaîne (recherche de type "contient"), utilisez le symbole joker (@) dans valeur pour isoler la chaîne à chercher, comme dans cet exemple : "@Smith@". Les mots-clés suivants sont interdits pour des constantes de type texte : true, false.
  - **boolean** type constants: **true** or **false** (case sensitive).
  - **numeric** type constants: decimals are separated by a '.' (period).
  - **date** type constants: "YYYY-MM-DD" format
  - **null** constant: using the "null" keyword will find **null** and **undefined** properties.
  - in case of a query with an IN comparator, _value_ must be a collection, or values matching the type of the attribute path between \[ ] separated by commas (for strings, `"` characters must be escaped with `\`).
- **logicalOperator**: used to join multiple conditions in the query (optional). Vous pouvez utiliser un des opérateurs logiques suivants (le nom ou le symbole peut être passé) :

| Conjonction | Symbole(s)                                          |
| ----------- | ---------------------------------------------------------------------- |
| AND         | &, &&, and |
| OU          | \|,\|\|, or                                                            |

- **order by attributePath**: you can include an order by _attributePath_ statement in the query so that the resulting data will be sorted according to that statement. You can use multiple order by statements, separated by commas (e.g., order by _attributePath1_ desc, _attributePath2_ asc). Par défaut, le tri est par ordre croissant. Passez 'desc' pour définir un tri par ordre décroissant et 'asc' pour définir un tri par ordre croissant.

> If you use this statement, the returned entity selection is ordered (for more information, please refer to [Ordered vs Unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection)).

#### Utilisation de guillemets

Lorsque vous utilisez des guillemets dans des recherches, vous devez utiliser des guillemets simples ' ' à l'intérieur de la requête et des guillemets doubles " " pour encadrer la requête, sinon une erreur est renvoyée. Par exemple :

```4d
"employee.name = 'smith' AND employee.firstname = 'john'"
```

> Les guillemets simples (') ne sont pas pris en charge dans les valeurs recherchées car ils casseraient la chaîne de recherche. Par exemple, "comp.name = 'John's pizza' " génèrera une erreur. Si vous devez rechercher des valeurs contenant des guillemets simples, il est nécessaire d'utiliser des placeholders (voir ci-dessous).

#### Utilisation de parenthèses

Vous pouvez utiliser des parenthèses dans la recherche afin de prioriser les calculs. Par exemple, vous pouvez organiser une recherche de la manière suivante :

```4d
"(employee.age >= 30 OR employee.age <= 65) AND (employee.salary <= 10000 OR employee.status = 'Manager')"
```

#### Utilisation de placeholders

4D allows you to use placeholders for _attributePath_, _formula_ and _value_ arguments within the _queryString_ parameter. Un placeholder est un paramètre que vous insérez dans des chaines de recherche et qui est remplacé par une autre valeur au moment où la chaîne de recherche est évaluée. La valeur des placeholders est évaluée une seule fois, au début de la requête ; elle n'est pas évaluée pour chaque élément.

Two types of placeholders can be used: **indexed placeholders** and **named placeholders**:

|            | Placeholders indexés                                                                                                                                                                                                                                                                                                                                  | Placeholders nommés                                                                                                                                                                                          |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Définition | Parameters are inserted as `:paramIndex` (for example :1, :2...) in _queryString_ and their corresponding values are provided by the sequence of _value_ parameter(s). You can use up to 128 _value_ parameters | Parameters are inserted as `:paramName` (for example :myparam) and their values are provided in the attributes and/or parameters objects in the _querySettings_ parameter |
| Exemple    | `$r:=class.query(":1=:2";"city";"Chicago")`                                                                                                                                                                                                                                                                                                           | `$o.attributes:=New object("att";"city")`<br/> `$o.parameters:=New object("name";"Chicago")`<br/> `$r:=class.query(":att=:name";$o)`                                                                         |

You can mix all argument kinds in _queryString_. A _queryString_ can contain, for _attributePath_, _formula_ and _value_ parameters:

- des valeurs directes (pas de placeholders)
- des placeholders indexés et/ou nommés.

Using placeholders in queries **is recommended** for the following reasons:

1. Cela empêche l'injection de code malveillant : si vous utilisez dans la chaîne de recherche des variables dont le contenu provient directement de la saisie de l'utilisateur, celui-ci pourrait modifier les conditions de recherche en saisissant des arguments de recherche supplémentaires. Par exemple, imaginez une chaîne de recherche du type :

```4d
 $vquery:="status = 'public' & name = "+myname //user enters their name
 $result:=$col.query($vquery)
```

Cette recherche semble sécurisée puisque les données non publiques sont filtrées. However, if the user enters in the _myname_ area something like _"smith OR status='private'_, the query string would be modified at the interpretation step and could return private data.

Lorsque vous utilisez des placeholders, le contournement des options de sécurité n'est pas possible :

```4d
 $result:=$col.query("status='public' & name=:1";myname)
```

In this case if the user enters _smith OR status='private'_ in the _myname_ area, it will not be interpreted in the query string, but only passed as a value. La recherche d'une personne nommée "smith OR status='private"' échouera simplement.

2. It prevents having to worry about formatting or character issues, especially when handling _attributePath_ or _value_ parameters that might contain non-alphanumeric characters such as ".", "['...

3. Cela permet l'utilisation de variables ou d'expressions dans les arguments de recherche. Exemples :

```4d
$result:=$col.query("address.city = :1 & name =:2";$city;$myVar+"@")
$result2:=$col.query("company.name = :1";"John's Pizzas")
```

#### Recherche de valeurs null

Lorsque vous recherchez les valeurs null, vous ne pouvez pas utiliser la syntaxe placeholder car le moteur de recherche considère la valeur null comme une valeur de comparaison invalide. Par exemple, si vous exécutez la recherche suivante :

```4d
$vSingles:=ds.Person.query("spouse = :1";Null) // ne fonctionnera PAS
```

Vous n'obtiendrez pas le résultat souhaité car la valeur null sera évaluée par 4D comme une erreur résultant de l'évaluation du paramètre (pouvant être, par exemple, un attribut provenant d'une autre recherche). Pour ce type de recherche, vous devez utiliser la syntaxe de recherche directe :

```4d
 $vSingles:=ds.Person.query("spouse = null") //correct syntax
```

#### Not equal to et les collections

When searching within dataclass object attributes containing collections, the "not equal to _value_" comparator (`#` or `!=`) will find elements where ALL properties are different from _value_ (and not those where AT LEAST one property is different from _value_, which is how work other comparators). Basically, it is equivalent to search for "Not(find collection elements where property equals _value_"). Par exemple, avec les entités suivantes :

```
Entity 1:
ds.Class.name: "A"
ds.Class.info:
    { "coll" : [ {
                "val":1,
                "val":1
            } ] }

Entity 2:
ds.Class.name: "B"
ds.Class.info:
    { "coll" : [ {
                "val":1,
                "val":0
            } ] }

Entity 3:
ds.Class.name: "C"
ds.Class.info:
    { "coll" : [ {
                "val":0,
                "val":0
            } ] }
```

Considérons les résultats suivants :

```4d
ds.Class.query("info.coll[].val = :1";0)
// renvoie B et C
// trouve "entités avec 0 dans au moins une propriété val"

ds.Class.query("info.coll[].val != :1";0)
// renvoie uniquement A
// trouve les "entités dont toutes les propriétés val sont différentes de 0"
// ce qui est équivalent à
ds.Class.query(not("info.coll[].val = :1";0))
```

If you want to implement a query that finds entities where "at least one property is different from _value_", you need to use a special notation using a letter in the `[]`:

```4d
ds.Class.query("info.coll[a].val != :1";0)  
// renvoie A et B
// trouve "les entités dont au moins une propriété val est différente de 0"
```

You can use any letter from the alphabet as the `[a]` notation.

#### Lier les critères de recherche pour les attributs de collections

:::info

This feature is only available in queries on dataclasses and [entity selections](EntitySelectionClass.md#query). It cannot be used in queries on [collections](CollectionClass.md#query).

:::

Lorsque vous effectuez une recherche parmi des attributs objet de dataclass contenant des collections à l'aide de plusieurs critères de recherche reliés par l'opérateur AND, vous pouvez vouloir vous assurer que seules les entités contenant des éléments correspondant à tous les critères sont renvoyées, et non les entités où les critères peuvent être trouvés dans différents éléments. Pour ce faire, vous devez lier les critères de la recherche aux éléments de la collection, de sorte que seuls les éléments individuels contenant les critères liés soient trouvés.

Par exemple, avec les deux entités suivantes :

```
Entity 1:
ds.People.name: "martin"
ds.People.places:
    { "locations" : [ {
                "kind":"home",
                "city":"paris"
            } ] }

Entity 2:
ds.People.name: "smith"
ds.People.places:
    { "locations" : [ {
                "kind":"home",
                "city":"lyon"
            } , {
                "kind":"office",
                "city":"paris"
            } ] }
```

Vous souhaitez trouver des personnes dont le lieu de résidence est situé dans la ville de Paris. Si vous écrivez :

```4d
ds.People.query("places.locations[].kind= :1 and places.locations[].city= :2";"home";"paris")
```

... the query will return "martin" **and** "smith" because "smith" has a "locations" element whose "kind" is "home" and a "locations" element whose "city" is "paris", even though they are different elements.

If you want to only get entities where matching arguments are in the same collection element, you need to **link arguments**. Pour lier des critères de recherche :

- Ajoutez une lettre entre le caractère \[] dans le premier chemin à lier et répétez la même lettre dans tous les critères liés. For example: `locations[a].city and locations[a].kind`. Vous pouvez utiliser n'importe quelle lettre de l'alphabet latin (non sensible à la casse).
- Pour ajouter différents critères liés dans la même requête, utilisez une autre lettre. Vous pouvez créer jusqu'à 26 combinaisons de critères dans une seule requête.

Avec les entités ci-dessus, si vous écrivez :

```4d
ds.People.query("places.locations[a].kind= :1 and places.locations[a].city= :2";"home";"paris")
```

... the query will only return "martin" because it has a "locations" element whose "kind" is "home" and whose "city" is "paris". La recherche ne retournera pas "smith" car les valeurs "home" et "paris" ne sont pas contenues dans le même élément de collection.

#### Recherches dans les relations N vers N

ORDA propose une syntaxe spéciale pour faciliter les recherches dans les relations N vers N. In this context, you may need to search for different values with an `AND` operator BUT in the same attribute. Par exemple, considérez la structure suivante :

![alt-text](../assets/en/API/manytomany.png)

Imagine that you want to search all movies in which _both_ actor A and actor B have a role. If you write a simple query using an `AND` operator, it will not work:

```4d
// code invalide
$es:=ds.Movie.query("roles.actor.lastName = :1 AND roles.actor.lastName = :2";"Hanks";"Ryan")  
// $es est vide
```

Fondamentalement, le problème vient de la logique interne de la recherche : vous ne pouvez pas rechercher une entité dont un attribut aurait simultanément la valeur "A" et "B".

To make it possible to perform such queries, ORDA allows a special syntax: you just need to add a _class index_ between **{}** in all additional relation attributes used in the string:

```4d
"relationAttribute.attribute = :1 AND relationAttribute{x}.attribute = :2 [AND relationAttribute{y}.attribute...]"
```

**{x}** tells ORDA to create another reference for the relation attribute. Le moteur de recherches effectuera alors toutes les opérations internes nécessaires. Note that **x** can be any number **except 0**: {1}, or {2}, or {1540}... ORDA a simplement besoin d'une référence unique dans la recherche pour chaque class index.

Dans notre exemple, cela pourrait donner :

```4d
// code valide
$es:=ds.Movie.query("roles.actor.lastName = :1 AND roles.actor{2}.lastName = :2";"Hanks";"Ryan")  
// $es contient des films (You've Got Mail, Sleepless in Seattle, Joe Versus the Volcano)
```

#### Paramètre formula

As an alternative to formula insertion within the _queryString_ parameter (see above), you can pass directly a formula object as a boolean search criteria. Using a formula object for queries is **recommended** since you benefit from tokenization, and code is easier to search/read.

The formula must have been created using the [`Formula`](FunctionClass.md#formula) or [`Formula from string`](FunctionClass.md#formula-from-string) command. Dans ce cas :

- the _formula_ is evaluated for each entity and must return true or false. Lors de l'exécution de la requête, si le résultat de la formule n'est pas un booléen, il est considéré comme faux.
- within the _formula_, the entity is available through the `This` object.
- if the `Formula` object is **null**, the error 1626 ("Expecting a text or formula") is generated, that you call intercept using a method installed with `ON ERR CALL`.

> For security reasons, formula calls within `query()` functions can be disallowed. See _querySettings_ parameter description.

#### Passer des paramètres aux formules

Any _formula_ called by the `query()` class function can receive parameters:

- Parameters must be passed through the **args** property (object) of the _querySettings_ parameter.
- The formula receives this **args** object as a **$1** parameter.

Ce code montre comment les paramètres sont passés aux fonctions :

```4d
 $settings:=New object("args";New object("exclude";"-")) //args object to pass parameters
 $es:=ds.Students.query("eval(checkName($1.exclude))";$settings) //args is received in $1
```

Des exemples supplémentaires sont fournis dans l'exemple 3.

**4D Server**: In client/server, formulas are executed on the server. In this context, only the `querySettings.args` object is sent to the formulas.

#### Paramètre querySettings

In the _querySettings_ parameter, you can pass an object containing additional options. Les propriétés suivantes sont prises en charge :

| Propriété     | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| parameters    | Object  | **Named placeholders for values** used in the _queryString_ or _formula_. Values are expressed as property / value pairs, where property is the placeholder name inserted for a value in the _queryString_ or _formula_ (":placeholder") and value is the value to compare. Vous pouvez combiner, dans une même recherche, des placeholders indexés (valeurs passées directement dans les paramètres <em x-id="3">value</em>) et les valeurs des placeholders nommés.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| attributes    | Object  | **Named placeholders for attribute paths** used in the _queryString_ or _formula_. Attributes are expressed as property / value pairs, where property is the placeholder name inserted for an attribute path in the _queryString_ or _formula_ (":placeholder"), and value can be a string or a collection of strings. Each value is a path that can designate either a scalar or a related attribute of the dataclass or a property in an object field of the dataclass<table><tr><th>Type</th><th>Description</th></tr><tr><td>String</td><td>attributePath expressed using the dot notation, e.g. "name" or "user.address.zipCode"</td></tr><tr><td>Collection of strings</td><td>Each string of the collection represents a level of attributePath, e.g. \["name"] or \["user","address","zipCode"]. Using a collection allows querying on attributes with names that are not compliant with dot notation, e.g. \["4Dv17.1","en/fr"]</td></tr></table>You can mix indexed placeholders (values directly passed in _value_ parameters) and named placeholder values in the same query. |
| args          | Object  | Paramètre(s) à passer aux formules, le cas échéant. The **args** object will be received in $1 within formulas and thus its values will be available through _$1.property_ (see example 3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| allowFormulas | Boolean | Vrai pour autoriser les appels de formules dans la query (défaut). Passez faux pour interdire l'exécution de formules. If set to false and `query()` is given a formula, an error is sent (1278 - Formula not allowed in this member method).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| context       | Text    | Nom du contexte d'optimisation automatique appliqué à l'entity selection. Ce contexte sera utilisé par le code qui manipule l'entity selection afin de bénéficier de l'optimisation. This feature is designed for client/server processing; for more information, please refer to the [**Client/server optimization**](../ORDA/client-server-optimization.md#optimization-context) section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| queryPlan     | Boolean | Dans l'entity selection résultante, retourne ou ne retourne la description détaillée de la recherche juste avant d'être exécutée, i.e. La propriété retournée est un objet qui inclut chaque recherche et sous-recherche programmée (dans le cas d'une recherche complexe). Cette option est utile durant la phase de développement d'une application. Elle est utilisée conjointement à queryPath. Par défaut, si elle est omise : faux. **Note**: This property is supported only by the `entitySelection.query()` and `dataClass.query()` functions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| queryPath     | Boolean | Dans l'entity selection résultante, retourne ou ne retourne pas la description détaillée de la recherche telle qu'elle est effectuée. La propriété retournée est un objet qui contient le chemin utilisé pour la recherche (généralement identique à celui de queryPlan, mais il peut être différent si le moteur parvient à optimiser la recherche), la durée du traitement et le nombre d'enregistrements trouvés. Cette option est utile durant la phase de développement d'une application. Par défaut, si elle est omise : faux. **Note**: This property is supported only by the `entitySelection.query()` and `dataClass.query()` functions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### A propos de queryPlan et queryPath

The information recorded in `queryPlan`/`queryPath` include the query type (indexed and sequential) and each necessary subquery along with conjunction operators. Les query paths contiennent également le nombre d'entités trouvées et la durée d'exécution de chaque critère de recherche. Il peut être utile d'analyser ces informations lors du développement de vos applications. Généralement, la description du plan de recherche (queryPlan) et son chemin réel (queryPath) sont identiques mais ils peuvent différer car 4D peut intégrer des optimisations dynamiques lorsqu'une requête est exécutée, afin d'améliorer les performances. Par exemple, le moteur 4D peut convertir dynamiquement une requête indexée en requête séquentielle s'il estime qu'elle sera plus rapide. Ce cas particulier peut se produire lorsque le nombre d'entités recherchées est faible.

Par exemple, si vous exécutez la recherche suivante :

```4d
 $sel:=ds.Employee.query("salary < :1 and employer.name = :2 or employer.revenues > :3";\  
 50000;"Lima West Kilo";10000000;New object("queryPath";True;"queryPlan";True))
```

queryPlan:

```4d
{Or:[{And:[{item:[index : Employee.salary ] < 50000},  
 {item:Join on Table : Company  :  Employee.employerID = Company.ID,  
 subquery:[{item:[index : Company.name ] = Lima West Kilo}]}]},  
 {item:Join on Table : Company  :  Employee.employerID = Company.ID,  
 subquery:[{item:[index : Company.revenues ] > 10000000}]}]}
```

queryPath:

```4d
{steps:[{description:OR,time:63,recordsfounds:1388132,  
 steps:[{description:AND,time:32,recordsfounds:131,  
 steps:[{description:[index : Employee.salary ] < 50000,time:16,recordsfounds:728260},{description:Join on Table : Company  :  Employee.employerID = Company.ID,time:0,recordsfounds:131,  
 steps:[{steps:[{description:[index : Company.name ] = Lima West Kilo,time:0,recordsfounds:1}]}]}]},{description:Join on Table : Company  :  Employee.employerID = Company.ID,time:31,recordsfounds:1388132,  
 steps:[{steps:[{description:[index : Company.revenues ] > 10000000,time:0,recordsfounds:933}]}]}]}]}
```

#### Exemple 1

Cette section présente différents exemples de recherches.

Recherche avec une chaîne :

```4d
$entitySelection:=ds.Customer.query("firstName = 'S@'")
```

Recherche avec une instruction NOT :

```4d
$entitySelection:=ds.Employee.query("not(firstName=Kim)")
```

Recherche avec des dates :

```4d
$entitySelection:=ds.Employee.query("birthDate > :1";"1970-01-01")
$entitySelection:=ds.Employee.query("birthDate <= :1";Current date-10950)
```

Recherche avec des placeholders indexés pour les valeurs :

```4d
$entitySelection:=ds.Customer.query("(firstName = :1 or firstName = :2) and (lastName = :3 or lastName = :4)";"D@";"R@";"S@";"K@")
```

Recherche avec des placeholders indexés pour les valeurs sur une dataclass liée :

```4d
$entitySelection:=ds.Employee.query("lastName = :1 and manager.lastName = :2";"M@";"S@")
```

Recherche avec des placeholders indexés avec tri décroissant :

```4d
$entitySelection:=ds.Student.query("nationality = :1 order by campus.name desc, lastname";"French")
```

Recherche avec des placeholders nommés pour les valeurs :

```4d
var $querySettings : Object
var $managedCustomers : cs.CustomerSelection
$querySettings:=New object
$querySettings.parameters:=New object("userId";1234;"extraInfo";New object("name";"Smith"))
$managedCustomers:=ds.Customer.query("salesperson.userId = :userId and name = :extraInfo.name";$querySettings)
```

Recherche utilisant les placeholders nommés et indexés pour les valeurs :

```4d
var $querySettings : Object
var $managedCustomers : cs.CustomerSelection
$querySettings.parameters:=New object("userId";1234)
$managedCustomers:=ds.Customer.query("salesperson.userId = :userId and name=:1";"Smith";$querySettings)
```

Recherche avec objets queryPlan et queryPath :

```4d
$entitySelection:=ds.Employee.query("(firstName = :1 or firstName = :2) and (lastName = :3 or lastName = :4)";"D@";"R@";"S@";"K@";New object("queryPlan";True;"queryPath";True))

  //vous pouvez ensuite obtenir ces propriétés dans la sélection d'entité résultante
var $queryPlan; $queryPath : Object
$queryPlan:=$entitySelection.queryPlan
$queryPath:=$entitySelection.queryPath
```

Recherche avec un chemin d'attribut de type Collection :

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[].name = :1";"horsebackriding")
```

Recherche avec un chemin d'attribut de type Collection et des critères liés :

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[a].name = :1 and extraInfo.hobbies[a].level=:2";"horsebackriding";2)
```

Recherche avec un chemin d'attribut de type Collection et plusieurs critères liés :

```4d
$entitySelection:=ds.Employee.query("extraInfo.hobbies[a].name = :1 and
 extraInfo.hobbies[a].level = :2 and extraInfo.hobbies[b].name = :3 and
 extraInfo.hobbies[b].level = :4";"horsebackriding";2;"Tennis";5)
```

Recherche avec un chemin d'attribut de type Objet :

```4d
$entitySelection:=ds.Employee.query("extra.eyeColor = :1";"blue")
```

Recherche avec instruction IN :

```4d
$entitySelection:=ds.Employee.query("firstName in :1";New collection("Kim";"Dixie"))
```

Recherche avec instruction NOT (IN) :

```4d
$entitySelection:=ds.Employee.query("not (firstName in :1)";New collection("John";"Jane"))
```

Recherche avec des placeholders indexés pour les attributs :

```4d
var $es : cs.EmployeeSelection
$es:=ds.Employee.query(":1 = 1234 and :2 = 'Smith'";"salesperson.userId";"name")
  //salesperson est une entité reliée
```

Recherche avec des placeholders indexés pour les attributs et avec des placeholders nommés pour les valeurs :

```4d
var $es : cs.EmployeeSelection
var $querySettings : Object
$querySettings:=New object
$querySettings.parameters:=New object("customerName";"Smith")
$es:=ds.Customer.query(":1 = 1234 and :2 = :customerName";"salesperson.userId";"name";$querySettings)
  //salesperson est une entité reliée
```

Recherche avec des placeholders indexés pour les attributs et les valeurs :

```4d
var $es : cs.EmployeeSelection
$es:=ds.Clients.query(":1 = 1234 and :2 = :3";"salesperson.userId";"name";"Smith")
  //salesperson est une entité reliée
```

#### Exemple 2

Cette section illustre les recherches avec des placeholders nommés pour les attributs.

Considérons une dataclass Employee avec 2 entités :

Entité 1 :

```4d
name: "Marie"
number: 46
softwares:{
"Word 10.2": "Installed",
"Excel 11.3": "To be upgraded",
"Powerpoint 12.4": "Not installed"
}
```

Entité 2 :

```4d
name: "Sophie"
number: 47
softwares:{
"Word 10.2": "Not installed",
"Excel 11.3": "To be upgraded",
"Powerpoint 12.4": "Not installed"
}
```

Recherche avec des placeholders nommés pour les attributs :

```4d
 var $querySettings : Object
 var $es : cs.EmployeeSelection
 $querySettings:=New object
 $querySettings.attributes:=New object("attName";"name";"attWord";New collection("softwares";"Word 10.2"))
 $es:=ds.Employee.query(":attName = 'Marie' and :attWord = 'Installed'";$querySettings)
  //$es.length=1 (Employee Marie)
```

Recherche avec des placeholders nommés pour les attributs et les valeurs :

```4d
 var $querySettings : Object
 var $es : cs.EmployeeSelection
 var $name : Text
 $querySettings:=New object
  //Named placeholders for values
  //The user is asked for a name
 $name:=Request("Please enter the name to search:")
 If(OK=1)
    $querySettings.parameters:=New object("givenName";$name)
  //Named placeholders for attribute paths
    $querySettings.attributes:=New object("attName";"name")
    $es:=ds.Employee.query(":attName= :givenName";$querySettings)
 End if
```

#### Exemple 3

Ces exemples illustrent les diverses manières d'utiliser des formules avec ou sans paramètres dans vos recherches.

The formula is given as text with `eval()` in the _queryString_ parameter:

```4d
 var $es : cs.StudentsSelection
 $es:=ds.Students.query("eval(length(This.lastname) >=30) and nationality='French'")
```

The formula is given as a `Formula` object through a placeholder:

```4d
 var $es : cs.StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds.Students.query(":1 and nationality='French'";$formula)
```

Only a `Formula` object is given as criteria:

```4d
 var $es : cs.StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds.Students.query($formula)
```

Plusieurs formules peuvent être appliquées :

```4d
 var $formula1; $1; $formula2 ;$0 : Object
 $formula1:=$1
 $formula2:=Formula(Length(This.firstname)>=30)
 $0:=ds.Students.query(":1 and :2 and nationality='French'";$formula1;$formula2)
```

A text formula in _queryString_ receives a parameter:

```4d
 var $es : cs.StudentsSelection
 var $settings : Object
 $settings:=New object()
 $settings.args:=New object("filter";"-")
 $es:=ds.Students.query("eval(checkName($1.filter)) and nationality=:1";"French";$settings)
```

```4d
  //checkName method
 #DECLARE($exclude : Text) -> $result : Boolean
 $result:=(Position($exclude;This.lastname)=0)
```

Using the same _**checkName**_ method, a `Formula` object as placeholder receives a parameter:

```4d
 var $es : cs.StudentsSelection
 var $settings; $formula : Object
 $formula:=Formula(checkName($1.filter))
 $settings:=New object()
 $settings.args:=New object("filter";"-")
 $es:=ds.Students.query(":1 and nationality=:2";$formula;"French";$settings)
 $settings.args.filter:="*" // change the parameters without updating the $formula object
 $es:=ds.Students.query(":1 and nationality=:2";$formula;"French";$settings)
```

Nous voulons interdire les formules, par exemple lorsque les utilisateurs saisissent leurs requêtes :

```4d
 var $es : cs.StudentsSelection
 var $settings : Object
 var $queryString : Text
 $queryString:=Request("Enter your query:")
 if(OK=1)
    $settings:=New object("allowFormulas";False)
    $es:=ds.Students.query($queryString;$settings) //An error is raised if $queryString contains a formula
 End if
```

#### Voir également

[`.query()`](EntitySelectionClass.md#query) for entity selections

<!-- END REF -->

<!-- REF DataClassClass.setRemoteCacheSettings().Desc -->

## .setRemoteCacheSettings()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #DataClassClass.setRemoteCacheSettings().Syntax -->**.setRemoteCacheSettings**(*settings* : Object) <!-- END REF -->

<!-- REF #DataClassClass.setRemoteCacheSettings().Params -->

| Paramètres | Type   |    | Description                                                                                        |
| ---------- | ------ | -- | -------------------------------------------------------------------------------------------------- |
| settings   | Object | -> | Objet définissant le timeout et la taille maximum du cache ORDA pour la dataclass. |

<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. Dans la plupart des cas, vous n'aurez pas besoin de l'utiliser.

#### Description

The `.setRemoteCacheSettings()` function <!-- REF #DataClassClass.setRemoteCacheSettings().Summary -->sets the timeout and maximum size of the ORDA cache for a dataclass.<!-- END REF -->.

In the _settings_ parameter, pass an object with the following properties:

| Propriété  | Type    | Description                               |
| ---------- | ------- | ----------------------------------------- |
| timeout    | Integer | Timeout en secondes.      |
| maxEntries | Integer | Nombre maximum d'entités. |

`timeout` sets the timeout of the ORDA cache for the dataclass (default is 30 seconds). Lorsque le timeout est atteint, les entités de la dataclass dans le cache sont considérées comme expirées. Cela signifie que :

- les données sont toujours présentes
- la prochaine fois que les données seront requises, elles seront demandées au serveur
- 4D supprime automatiquement les données expirées lorsque le nombre maximum d'entités est atteint

Setting a `timeout` property sets a new timeout for the entities already present in the cache. Cela peut être utile lorsque vous travaillez avec des données qui ne changent pas souvent, et pour lesquelles de nouvelles requêtes au serveur ne sont donc pas nécessaires.

`maxEntries` sets the max number of entities in the ORDA cache. Par défaut ce nombre est 30 000.

The minimum number of entries is 300, so the value of `maxEntries` must be equal to or higher than 300. Sinon la valeur est ignorée et le nombre d'entrées maximum est fixé à 300.

If no valid properties are passed as `timeout` and `maxEntries`, the cache remains unchanged, with its default or previously set values.

Lorsqu'une entité est sauvegardée, elle est mise à jour dans le cache et expirera lorsque le timeout sera atteint.

#### Exemple

```4d
var $ds : 4D.DataStoreImplementation

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$ds.Buildings.setRemoteCacheSettings(New object("timeout"; 60; "maxEntries"; 350))
```

#### Voir également

[.clearRemoteCache()](#clearremotecache)<br/>[.getRemoteCache()](#clearremotecache)

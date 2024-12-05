---
id: DataClassClass
title: DataClass
---

Une [dataclass](ORDA/dsMapping.md#dataclass) fournit un objet d'interface à une table de la base de données. Toutes les dataclasses d'une application 4D sont disponibles en tant que propriété du [datastore](ORDA/dsMapping.md#datastore) `ds` .

### Sommaire

|                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE DataClassClass.attributeName.Syntax -->](#attributename)<br/><!-- INCLUDE DataClassClass.attributeName.Summary -->                                  |
| [<!-- INCLUDE #DataClassClass.all().Syntax -->](#all)<br/><!-- INCLUDE #DataClassClass.all().Summary -->                                                          |
| [<!-- INCLUDE #DataClassClass.clearRemoteCache().Syntax -->](#clearremotecache)<br/><!-- INCLUDE #DataClassClass.clearRemoteCache().Summary -->                   |
| [<!-- INCLUDE #DataClassClass.fromCollection().Syntax -->](#fromcollection)<br/><!-- INCLUDE #DataClassClass.fromCollection().Summary -->                         |
| [<!-- INCLUDE #DataClassClass.get().Syntax -->](#get)<br/><!-- INCLUDE #DataClassClass.get().Summary -->                                                          |
| [<!-- INCLUDE #DataClassClass.getCount().Syntax -->](#getcount)<br/><!-- INCLUDE #DataClassClass.getCount().Summary -->                                           |
| [<!-- INCLUDE #DataClassClass.getDataStore().Syntax -->](#getdatastore)<br/><!-- INCLUDE #DataClassClass.getDataStore().Summary -->                               |
| [<!-- INCLUDE #DataClassClass.getInfo().Syntax -->](#getinfo)<br/><!-- INCLUDE #DataClassClass.getInfo().Summary -->                                              |
| [<!-- INCLUDE #DataClassClass.getRemoteCache().Syntax -->](#getremotecache)<br/><!-- INCLUDE #DataClassClass.getRemoteCache().Summary -->                         |
| [<!-- INCLUDE #DataClassClass.new().Syntax -->](#new)<br/><!-- INCLUDE #DataClassClass.new().Summary -->                                                          |
| [<!-- INCLUDE #DataClassClass.newSelection().Syntax -->](#newselection)<br/><!-- INCLUDE #DataClassClass.newSelection().Summary -->                               |
| [<!-- INCLUDE #DataClassClass.query().Syntax -->](#query)<br/><!-- INCLUDE #DataClassClass.query().Summary -->                                                    |
| [<!-- INCLUDE #DataClassClass.setRemoteCacheSettings().Syntax -->](#setremotecachesettings)<br/><!-- INCLUDE #DataClassClass.setRemoteCacheSettings().Summary --> |

<!-- REF DataClassClass.attributeName.Desc -->

## .*attributeName*

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

| Propriété        | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoFilled       | Boolean | Vrai si la valeur de l'attribut est automatiquement remplie par 4D. Correspond aux propriétés de champs 4D suivantes : "Autoincrement" pour les champs de type numérique et "UUID Auto" pour les champs UUID (alpha). Non retourné si `.kind` = "relatedEntity" ou "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| exposed          | Boolean | Vrai si l'attribut est exposé en REST                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| fieldNumber      | integer | Numéro interne du champ 4D correspondant à l'attribut. Non retourné si `.kind` = "relatedEntity" ou "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| fieldType        | Integer | Type de champ de la base de données 4D de l'attribut. Dépend de l'attribut `kind`. Valeurs possibles : <li>si `.kind` = "storage" : type de champ 4D correspondant, voir [`Value type`](https://doc.4d.com/4dv20/help/command/en/page1509.html)</li><li>si `.kind` = "relatedEntity" : 38 (`is object`)</li><li>si `.kind` = "relatedEntities" : 42 (`is collection`)</li><li>si `.kind` = "calculated" ou "alias" = même chose que ci-dessus, en fonction de la valeur résultante (type de champ, relatedEntity ou relatedEntities)</li>                                                                                                                                                                               |
| indexed          | Boolean | Vrai s'il existe un index B-tree ou Cluster B-tree sur l'attribut. Non retourné si `.kind` = "relatedEntity" ou "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| inverseName      | Text    | Nom de l'attribut qui se trouve à l'autre côté de la relation. Renvoyé uniquement lorsque `.kind` = "relatedEntity" ou "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| keywordIndexed   | Boolean | Vrai s'il existe un index de mots-clés sur l'attribut. Non retourné si `.kind` = "relatedEntity" ou "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| kind             | Text    | Catégorie de l'attribut. Valeurs possibles :<li>"storage" : attribut de stockage (ou scalaire), c'est-à-dire attribut stockant une valeur et non une référence à un autre attribut</li><li>"calculated" : attribut calculé, c'est-à-dire défini par une [fonction `get`](../ORDA/ordaClasses.md#function-get-attributename)</li><li>"alias" : attribut construit sur [un autre attribut](../ORDA/ordaClasses.md#alias-attributes-1)</li><li>"relatedEntity" : attribut de relation N -> 1 (référence à une entité)</li><li>"relatedEntities" : attribut de relation 1->N (référence à une entity selection)</li>                                                                                        |
| obligatoire      | Boolean | Vrai si la saisie d'une valeur null est rejetée pour l'attribut. Non retourné si `.kind` = "relatedEntity" ou "relatedEntities". Attention : Cette propriété correspond à la propriété du champ "Reject NULL value input" au niveau de la base de données 4D. Elle n'est pas liée à la propriété "Mandatory" existante qui est une option de contrôle de la saisie de données pour une table.                                                                                                                                                                                                                                                                                                                                                                                                    |
| name             | Text    | Nom de l'attribut sous forme de chaîne                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| path             | Text    | Chemin d'un [attribut alias](../ORDA/ordaClasses.md#alias-attributes-1) basé sur une relation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| readOnly         | Boolean | Vrai si l'attribut est en lecture seule. Par exemple, les attributs calculés sans la fonction [`set`](../ORDA/ordaClasses.md#function-set-attributename) sont en lecture seule.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| relatedDataClass | Text    | Nom de la dataclass liée à l'attribut. Renvoyé uniquement lorsque `.kind` = "relatedEntity" ou "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| type             | Text    | Type conceptuel de la valeur de l'attribut, utile pour la programmation générique. Dépend de l'attribut `kind`. Valeurs possibles : <li>si `.kind` = "storage" : "blob", "bool", "date", "image", "number", "object", ou "string". "number" est renvoyé pour tous les types numériques, y compris la durée ; "string" est renvoyé pour les types d'attributs uuid, alpha et texte ; les attributs "blob" sont des [objets blob](../Concepts/dt_blob.md#blob-type).</li><li>si `.kind` = "relatedEntity" : nom de la dataClass liée</li><li>si `.kind` = "relatedEntities" : nom de la dataClass liée + suffixe "Selection"</li><li>si `.kind` = "calculated" ou "alias" : même chose que ci-dessus, en fonction du résultat</li> |
| unique           | Boolean | Vrai si la valeur de l'attribut doit être unique. Non retourné si `.kind` = "relatedEntity" ou "relatedEntities".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

:::tip

Pour la programmation générique, utilisez `Bool(attributeName.property)`, `Num(attributeName.property)` ou `String(attributeName. )` (selon le type de propriété) pour obtenir une valeur valide même si la propriété n'est pas retournée.

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

| Release | Modifications                           |
| ------- | --------------------------------------- |
| 17 R5   | Prise en charge du paramètre *settings* |
| 17      | Ajout                                   |

</details>

<!-- REF #DataClassClass.all().Syntax -->**.all** ( { *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #DataClassClass.all().Params -->

| Paramètres | Type                               |                             | Description                                        |
| ---------- | ---------------------------------- | :-------------------------: | -------------------------------------------------- |
| settings   | Object                             |              ->             | Option de création : contexte      |
| Résultat   | 4D.EntitySelection | <- | Références vers toutes les entités de la dataclass |

<!-- END REF -->

#### Description

La fonction `.all()` <!-- REF #DataClassClass.all().Summary -->requête le datastore pour obtenir toutes les entités liées à la dataclass et les renvoie sous la forme d'une entity selection<!-- END REF -->.

Les entités sont renvoyées dans l'ordre par défaut, qui est initialement l'ordre dans lequel elles ont été créées. Notez cependant que, si des entités ont été supprimées et que de nouvelles entités ont été ajoutées, l'ordre par défaut ne reflète plus l'ordre de création.

Si aucune entité n'est trouvée, une entity selection vide est renvoyée.

Le mode lazy loading est appliqué.

**settings**

Dans le paramètre optionnel *settings*, vous pouvez passer un objet contenant des options supplémentaires. La propriété suivante est prise en charge :

| Propriété | Type | Description                                                                                                                                                                                                                                                                                                                               |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Text | Nom du contexte d'optimisation appliqué à l'entity selection. Ce contexte sera utilisé par le code qui manipule l'entity selection afin de bénéficier de l'optimisation. Cette fonctionnalité est [conçue pour le traitement ORDA client/serveur](../ORDA/client-server-optimization.md). |

> Pour connaître le nombre total d'entités dans une dataclass, il est recommandé d'utiliser la fonction [`getCount()`](#getcount) qui est plus optimisée que l'expression `ds.myClass.all().length`.

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

La fonction `.clearRemoteCache()` <!-- REF #DataClassClass.clearRemoteCache().Summary -->vide le cache ORDA d'une dataclass<!-- END REF -->.

> Cette fonction ne réinitialise pas les valeurs de `timeout` et `maxEntries`.

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

#### Voir également

[`entitySelection.refresh()`](EntitySelectionClass.md#refresh)

<!-- END REF -->

<!-- REF DataClassClass.fromCollection().Desc -->

## .fromCollection()

<details><summary>Historique</summary>

| Release | Modifications                           |
| ------- | --------------------------------------- |
| 17 R5   | Prise en charge du paramètre *settings* |
| 17      | Ajout                                   |

</details>

<!-- REF #DataClassClass.fromCollection().Syntax -->**.fromCollection**( *objectCol* : Collection { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #DataClassClass.fromCollection().Params -->

| Paramètres | Type                               |                             | Description                                            |
| ---------- | ---------------------------------- | :-------------------------: | ------------------------------------------------------ |
| objectCol  | Collection                         |              ->             | Collection d'objets à faire correspondre à des entités |
| settings   | Object                             |              ->             | Option de création : contexte          |
| Résultat   | 4D.EntitySelection | <- | Entity selection issue de la collection                |

<!-- END REF -->

#### Description

La fonction `.fromCollection()` <!-- REF #DataClassClass.fromCollection().Summary -->met à jour ou crée des entités dans la dataclass en fonction de la collection d'objets *objectCol* et renvoie l'entity selection correspondante<!-- END REF -->.

Dans le paramètre *objectCol* passez une collection d'objets destinée à créer ou à modifier des entités de la dataclass. Les noms des propriétés doivent correspondre à ceux des attributs de la dataclass. Si un nom de propriété n'existe pas dans la dataclass, il est ignoré. Si une valeur d'attribut n'est pas définie dans la collection pour une entité créée, l'attribut prend la valeur Null.

La correspondance entre les objets de la collection et les entités est effectuée au niveau des **noms d'attributs** et de leur **type de données**. Si une propriété d'objet a le même nom qu'un attribut d'entité mais que leurs types ne sont pas compatibles, l'attribut de l'entité ne reçoit pas de valeur.

**Mode création ou modification**

Pour chaque objet de *objectCol* :

- Si l'objet contient une propriété booléenne "\_\*NEW" fixée à faux (ou ne contient pas de propriété booléenne "\*\_NEW"), l'entité est modifiée ou créée avec les valeurs correspondantes des propriétés de l'objet. Aucune vérification spécifique n'est effectuée concernant la clé primaire :
  - Si la clé primaire est fournie et existe, l'entité est modifiée. Dans ce cas, la clé primaire peut être fournie telle quelle ou via la propriété "\_\_KEY" (contenant la valeur de la propriété primaire).
  - Si la clé primaire est fournie (telle quelle) et n'existe pas, l'entité est créée
  - Si la clé primaire n'est pas fournie, l'entité est créée et la clé primaire est assignée selon les règles en vigueur de la base de données.
- si l'objet contient une propriété booléenne "\_\_NEW" fixée à **vrai**, l'entité est créée avec les valeurs correspondantes des propriétés de l'objet. Une vérification est effectuée sur la clé primaire :
  - Si la clé primaire est fournie (telle quelle) et existe, une erreur est générée
  - Si la clé primaire est fournie (telle quelle) et n'existe pas, l'entité est créée
  - Si la clé primaire n'est pas fournie, l'entité est créée et la clé primaire est assignée selon les règles en vigueur de la base de données.

> La propriété "\*\*KEY" contenant une valeur est prise en compte uniquement lorsque la propriété "\*\*NEW" est à **false** (ou est omise) et qu'une entité correspondante existe. Dans tous les autres cas, la valeur de la propriété "\*\_KEY" est ignorée, la valeur de la clé primaire doit être passée "telle quelle".

**Entités liées**

Les objets de *objectCol* peuvent contenir un ou plusieurs objet(s) imbriqué(s) décrivant une ou plusieurs entité(s) relative(s), ce qui peut être utile pour créer ou modifier des relations entre les entités.

Les objets imbriqués décrivant les entités relatives doivent contenir une propriété "\_\*KEY" (contenant la valeur de la clé primaire de l'entité relative) ou la clé primaire de l'entité relative elle-même. L'utilisation de la propriété \*\_KEY permet de ne pas dépendre du nom de l'attribut clé primaire.

> Ce mécanisme ne permet pas de créer ou de modifier les entités liées.

**Stamp**

Si une propriété \_\_STAMP est fournie, une vérification est effectuée sur le stamp (marqueur interne) de l'entité dans le datastore et une erreur est retournée en cas d'invalidité ("Le stamp ne correspond pas à celui de l'enregistrement# XX de la table XXXX"). Pour plus d'informations, voir [Verrouillage d'une entité](ORDA/entities.md#verrouillage-d-une-entite).

**settings**

Dans le paramètre optionnel *settings*, vous pouvez passer un objet contenant des options supplémentaires. La propriété suivante est prise en charge :

| Propriété | Type | Description                                                                                                                                                                                                                                                                                                                               |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Text | Nom du contexte d'optimisation appliqué à l'entity selection. Ce contexte sera utilisé par le code qui manipule l'entity selection afin de bénéficier de l'optimisation. Cette fonctionnalité est [conçue pour le traitement ORDA client/serveur](../ORDA/client-server-optimization.md). |

#### Exemple 1

Nous souhaitons modifier une entité existante. La propriété \_\_NEW n'est pas fixée, la clé primaire de l'employé est passée et existe :

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.ID:=668 //Clé primaire existante dans la dataclass Employee
 $emp.firstName:="Arthur"
 $emp.lastName:="Martin"
 $emp.employer:=New object("ID";121) //Clé primaire existante dans la dataclass liée Company
  // Nous modifions la Company de cet employé en lui assignant une autre clé primaire existante dans la dataclass liée Company
 $empsCollection.push($emp)
 $employees:=ds.Employee.fromCollection($empsCollection)
```

#### Exemple 2

Nous souhaitons modifier une entité existante. La propriété \_\*NEW n'est pas fournie, la clé primaire de l'employé est avec l'attribut \*\_KEY et existe :

```4d
 var $empsCollection : Collection
 var $emp : Object
 var $employees : cs.EmployeeSelection

 $empsCollection:=New collection
 $emp:=New object
 $emp.__KEY:=1720 //Clé primaire existante dans la dataclass Employee
 $emp.firstName:="John"
 $emp.lastName:="Boorman"
 $emp.employer:=New object("ID";121) //Clé primaire existante dans la dataclass liée Company
  // Nous modifions la Company de cet employé en lui assignant une autre clé primaire existante dans la dataclass relative Company
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
 $emp.employer:=New object("__KEY";121) //Clé primaire existante dans la dataclass liée Company
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
 $emp.ID:=10000 //clé primaire qui n'existe pas
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
 $emp.ID:=10001 // Clé primaire inexistante
 $emp.firstName:="Simone"
 $emp.lastName:="Martin"
 $emp.__NEW:=True
 $empsCollection.push($emp)

 $emp2:=New object
 $emp2.ID:=10001 // ERREUR clé primaire identique
 $emp2.firstName:="Marc"
 $emp2.lastName:="Smith"
 $emp2.__NEW:=True
 $empsCollection.push($emp2)
 $employees:=ds.Employee.fromCollection($empsCollection)
  //la première entité est créée
  //erreur clé dupliquée pour la seconde
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

| Paramètres | Type                      |                             | Description                                       |
| ---------- | ------------------------- | :-------------------------: | ------------------------------------------------- |
| primaryKey | Integer OR Text           |              ->             | Valeur de la clé primaire de l'entité à récupérer |
| settings   | Object                    |              ->             | Option de création : contexte     |
| Résultat   | 4D.Entity | <- | Entité correspondant à la clé primaire indiquée   |

<!-- END REF -->

#### Description

La fonction `.get()` <!-- REF #DataClassClass.get().Summary -->requête la dataclass pour récupérer l'entité correspondant au paramètre *primaryKey*<!-- END REF -->.

Dans *primaryKey*, passez la valeur de clé primaire de l'entité à récupérer. Le type de valeur doit correspondre au type de clé primaire définie dans le datastore (entier long ou texte). Le type de valeur doit correspondre au type de clé primaire définie dans le datastore (entier long ou texte).

Si aucune entité avec *primaryKey* n'est trouvée, une entité **Null** est retournée.

Le chargement différé (lazy loading) est appliqué, ce qui signifie que les données associées sont chargées à partir du disque uniquement lorsque cela est nécessaire.

**settings**

Dans le paramètre optionnel *settings*, vous pouvez passer un objet contenant des options supplémentaires. La propriété suivante est prise en charge :

| Propriété | Type | Description                                                                                                                                                                                                                                                                                                           |
| --------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Text | Nom du contexte d'optimisation appliqué à l'entité. Ce contexte sera utilisé par le code qui manipule l'entité afin de bénéficier de l'optimisation. Cette fonctionnalité est [conçue pour le traitement ORDA client/serveur](../ORDA/client-server-optimization.md). |

:::info

Lorsque vous appelez la fonction `.get()` **sans** paramètre *settings*, une requête de valeur d'attribut est envoyée directement au serveur (le [cache ORDA](.. /ORDA/client-server-optimization.md#orda-cache) n'est pas utilisé). Par contre, lorsque vous appelez `.get()` **avec** un `context` passé dans le paramètre *settings*, les valeurs des attributs sont récupérées à partir du cache ORDA correspondant au contexte. Dans ce cas, il peut être conseillé d'appeler [`reload()`](EntityClass.md#reload) pour s'assurer que les données les plus récentes sont récupérées depuis le serveur.

:::

#### Exemple 1

```4d
 var $entity : cs.EmployeeEntity  
 var $entity2 : cs.InvoiceEntity
 $entity:=ds.Employee.get(167) // retourne l'entité dont la valeur de clé primaire est 167
 $entity2:=ds.Invoice.get("DGGX20030") // retourne l'entité dont la valeur de clé primaire est "DGGX20030"
```

#### Exemple 2

Cet exemple illustre l'utilisation de la propriété *context* :

```4d
 var $e1; $e2; $e3; $e4 : cs.EmployeeEntity
 var $settings; $settings2 : Object

 $settings:=New object("context";"detail")
 $settings2:=New object("context";"summary")

 $e1:=ds.Employee.get(1;$settings)
 completeAllData($e1) // Dans la méthode completeAllData, une optimisation est lancée et associée au contexte "detail"

 $e2:=ds.Employee.get(2;$settings)
 completeAllData($e2) // Dans la méthode completeAllData, l'optimisation associée au contexte "detail" est appliquée

 $e3:=ds.Employee.get(3;$settings2)
 completeSummary($e3) //Dans la méthode completeSummary, une optimisation est lancée et associée au contexte "summary"

 $e4:=ds.Employee.get(4;$settings2)
 completeSummary($e4) //Dans la méthode completeSummary, l'optimisation associée au contexte "summary" est appliquée
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

| Paramètres | Type    |                             | Description                        |
| ---------- | ------- | --------------------------- | ---------------------------------- |
| Résultat   | Integer | <- | Nombre d'entités dans la dataclass |

<!-- END REF -->

#### Description

La fonction `.getCount()` <!-- REF #DataClassClass.getCount().Summary --> renvoie le nombre d'entités dans une dataclass<!-- END REF -->.

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

| Paramètres | Type                         |                             | Description               |
| ---------- | ---------------------------- | :-------------------------: | ------------------------- |
| Résultat   | cs.DataStore | <- | Datastore de la dataclass |

<!-- END REF -->

#### Description

La fonction `.getDataStore()` <!-- REF #DataClassClass.getDataStore().Summary -->renvoie le datastore de la dataclass spécifiée<!-- END REF -->.

Le datastore peut être :

- le datastore principal, retourné par la commande `ds`.
- un datastore distant, ouvert à l'aide de la commande `Open datastore`.

#### Exemple

La méthode projet ***SearchDuplicate*** recherche des valeurs dupliquées dans une dataclass.

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

| Paramètres | Type   |                             | Description                   |
| ---------- | ------ | --------------------------- | ----------------------------- |
| Résultat   | Object | <- | Informations sur la dataclass |

<!-- END REF -->

#### Description

La fonction `.getInfo()` <!-- REF #DataClassClass.getInfo().Summary -->renvoie un objet fournissant des informations sur la dataclass<!-- END REF -->. Cette fonction est utile pour l'écriture de code générique.

**Objet retourné**

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

 computeEmployeeNumber($entity) //Exécuter des actions sur une entité

 $status:=$entity.save()
 if($status.success)
    ALERT("Enregistrement mis à jour dans la table "+$entity.getDataClass().getInfo().name)
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
 $dataClassAttribute:=ds.Employee[$pk] // Le cas échéant, l'attribut correspondant à la clé primaire est accessible
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

| Paramètres | Type   |                             | Description                                                                 |
| ---------- | ------ | --------------------------- | --------------------------------------------------------------------------- |
| Résultat   | Object | <- | Objet décrivant le contenu du cache ORDA pour la dataclass. |

<!-- END REF -->

> **Mode avancé :** Cette fonction est destinée aux développeurs qui souhaitent personnaliser les fonctionnalités par défaut de ORDA dans le cadre de configurations spécifiques. Dans la plupart des cas, vous n'aurez pas besoin de l'utiliser.

#### Description

La fonction `.getRemoteCache()` <!-- REF #DataClassClass.getRemoteCache().Summary -->renvoie un objet qui contient le contenu du cache ORDA pour une dataclass<!-- END REF -->.

Si elle est appelée depuis une application 4D monoposte, la fonction retourne `Null`.

L'objet retourné contient les propriétés suivantes :

| Propriété  | Type       | Description                                                                                   |
| ---------- | ---------- | --------------------------------------------------------------------------------------------- |
| maxEntries | Integer    | Nombre maximum de collections "entries".                                      |
| stamp      | Integer    | Marqueur du cache.                                                            |
| timeout    | Integer    | Durée avant qu'une nouvelle entrée dans le cache soit indiquée comme expirée. |
| entries    | Collection | Contient un objet pour chaque entité dans le cache.                           |

Chaque objet "entrée" de la collection `entries` contient les propriétés suivantes :

| Propriété | Type    | Description                                              |
| --------- | ------- | -------------------------------------------------------- |
| data      | Object  | Objet contenant les données de l'entrée. |
| expired   | Boolean | True si l'entrée a expiré.               |
| key       | Text    | Clé primaire de l'entité.                |

L'objet `data` de chaque entrée contient les propriétés suivantes :

| Propriété                                             | Type    | Description                                                                                                                                                               |
| ----------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __KEY       | Text    | Clé primaire de l'entité                                                                                                                                                  |
| __STAMP     | Integer | Stamp de l'entité dans la base de données                                                                                                                                 |
| __TIMESTAMP | Text    | Timestamp de l'entité dans la base de données (le format est YYYY-MM-DDTHH:MM:SS:ms:Z) |
| dataClassAttributeName                                | Variant | S'il y a des données dans le cache pour un attribut de dataclass, il est retourné dans une propriété du même type que dans la base de données.            |

Les données concernant les entités liées sont stockées dans le cache de l'objet data.

#### Exemple

Dans l'exemple suivant, `$ds.Persons.all()` charge la première entité avec tous ses attributs. Ensuite, l'optimiseur de requêtes entre en jeu, et seuls `firstname` et `address.city` sont chargés.

Notez que `address.city` est chargé dans le cache de la dataclass `Persons`.

Seule la première entité de la dataclass `Address` est stockée dans le cache. Elle est chargée durant la première itération de la boucle.

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

| Paramètres | Type                      |                             | Description                                  |
| ---------- | ------------------------- | --------------------------- | -------------------------------------------- |
| Résultat   | 4D.Entity | <- | Nouvelle entité correspondant à la dataclass |

<!-- END REF -->

#### Description

La fonction `.new()` <!-- REF #DataClassClass.new().Summary -->crée en mémoire et renvoie une nouvelle entité vierge liée à la Dataclass<!-- END REF -->.

L'objet entité est créé en mémoire et n'est pas sauvegardé dans la base de données tant que la fonction [`.save( )`](EntityClass.md#save) n'est pas appelée. Si l'entité est supprimée avant d'être sauvegardée, elle ne peut pas être récupérée.

**4D Server**: En client-serveur, si la clé primaire de la table correspondante est auto-incrémentée, elle sera calculée au moment de la sauvegarde de l'entité sur le serveur.

Tous les attributs de l'entité sont initialisés avec la valeur **null**.

> Les attributs peuvent être initialisés à des valeurs par défaut si l'option **Traduire les NULL en valeurs vides** est sélectionnée au niveau de la structure de la base 4D.

#### Exemple

Cet exemple crée une nouvelle entité dans la dataclass "Log" et enregistre les informations dans l'attribut "info" :

```4d
 var $entity : cs.LogEntity
 $entity:=ds.Log.new() //crée une référence
 $entity.info:="New entry" //valorise l'attribut info
 $entity.save() //sauvegarde l'entité
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

| Paramètres | Type                               |                             | Description                                                                                                                                                                         |
| ---------- | ---------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keepOrder  | Integer                            | ->                          | `dk keep ordered` : crée une entity selection triée,<br/>`dk non ordered` : crée une entity selection non triée (défaut si omis) |
| Résultat   | 4D.EntitySelection | <- | Nouvelle entity selection vide liée à la dataclass                                                                                                                                  |

<!-- END REF -->

#### Description

La fonction `.newSelection()` <!-- REF #DataClassClass.newSelection().Summary -->crée une nouvelle entity selection vierge, non partageable, liée à la dataclass, dans la mémoire<!-- END REF -->.

> Pour plus d'informations sur les entity selections non partageables, veuillez vous reporter à [cette section](ORDA/entities.md#shareable-or-non-shareable-entity-selections).

Si vous voulez créer une entity selection triée, passez le sélecteur `dk keep ordered` dans le paramètre *keepOrder*. Par défaut, si vous omettez ce paramètre ou si vous passez le sélecteur `dk non ordered` la fonction crée une entity selection non triée. Les entity selections non triées sont plus rapides, mais vous ne pouvez pas vous fier aux positions des entités. Les entity selections non triées sont plus rapides, mais vous ne pouvez pas vous fier aux positions des entités.

Une fois créée, l'entity selection ne contient aucune entité (`mySelection.length` retourne 0). Cette méthode vous permet de construire progressivement des entity selections en faisant des appels ultérieurs à la fonction [`add()`](EntitySelectionClass.md#add).

#### Exemple

```4d
 var $USelection; $OSelection : cs.EmployeeSelection
 $USelection:=ds.Employee.newSelection() //crée une entity selection non triée vide
 $OSelection:=ds.Employee.newSelection(dk keep ordered) //crée une entity selection triée vide
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

| Paramètres    | Type                               |                             | Description                                                                                                                                                                                |
| ------------- | ---------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| queryString   | Text                               | ->                          | Critères de recherche en texte                                                                                                                                                             |
| formula       | Object                             | ->                          | Critères de recherche en objet formule                                                                                                                                                     |
| value         | any                                | ->                          | Valeur(s) à utiliser comme placeholder(s)                                                                                                            |
| querySettings | Object                             | ->                          | Options de recherche : parameters, attributes, args, allowFormulas, context, queryPath, queryPlan                                                                          |
| Résultat      | 4D.EntitySelection | <- | Nouvelle entity selection constituée des entités de la dataclass correspondant au(x) critère(s) de recherche fournis dans *queryString* ou *formula* |

<!-- END REF -->

#### Description

La fonction `.query()` <!-- REF #DataClassClass.query().Summary -->recherche les entités qui répondent aux critères de recherche spécifiés dans *queryString* ou *formula* et (optionnellement) *value*(s)<!-- END REF -->, pour toutes les entités de la dataclass, et renvoie un nouvel objet de type `EntitySelection` contenant toutes les entités trouvées. Le mode lazy loading est appliqué.

Si aucune entité correspondante n'est trouvée, une `EntitySelection` vide est retournée.

#### paramètre queryString

Le paramètre *queryString* doit respecter la syntaxe suivante :

```4d
attributePath|formula comparator value   
 {logicalOperator attributePath|formula comparator value}   
 {order by attributePath {desc | asc}}
```

où :

- **attributePath** : Chemin de l'attribut sur lequel vous souhaitez exécuter la recherche. Ce paramètre peut contenir un nom simple (par exemple "pays") ou un chemin d'attribut valide (par exemple "pays.nom"). Dans le cas d'un chemin d'accès à un attribut dont le type est `Collection`, la notation `[]` est utilisée pour traiter toutes les occurrences (par exemple `children[].age`).

> Vous ne pouvez pas utiliser directement des attributs dont les noms contiennent des caractères spéciaux tels que ".", "\[ ]", ou "=", ">", "#"..., car ils ne seront pas correctement évalués dans la chaîne de recherche. Si vous souhaitez rechercher ces attributs, vous devez utiliser des placeholders, qui permettent d'utiliser un ensemble de caractères plus étendu dans les chemins d'attribut (voir \* **Utiliser des placeholders** \*ci-dessous).

- **formula** : Une formule valide passée en `Text` ou en `Object`. La formule sera évaluée pour chaque entité traitée et doit retourner une valeur booléenne. Dans la formule, l'entité est disponible via l'objet `This`.

  - **Text** : la chaîne de la formule doit être précédée de l'instruction `eval()`, afin que l'analyseur de la requête évalue correctement l'expression. Par exemple : *"eval(length(This.lastname) >=30)"*
  - **Object**: l'[objet formule](FunctionClass.md) est passé en tant que **placeholder** (voir ci-dessous). La formule doit avoir été créée à l'aide de la commande [`Formula`](FunctionClass.md#formula) ou [`Formula from string`](FunctionClass.md#formula-from-string).

> * N'oubliez pas que les formules de 4D prennent uniquement en charge les symboles `&` et `|` comme opérateurs logiques.
> * Si la formule n'est pas le seul critère de recherche, le système d'optimisation des requêtes pourra prioriser le traitement d'autres critères (ex : attributs indexés) et ainsi, la formule sera évaluée uniquement pour un sous-ensemble d'entités.

Les formules contenues dans les requêtes peuvent recevoir des paramètres via $1. Ce point est détaillé dans le paragraphe **Paramètre formula** ci-dessous.

> - Vous pouvez également passer directement un paramètre `formula` au lieu d'un paramètre `queryString` (recommandé lorsque les formules sont plus complexes). Voir le paragraphe **Paramètre formula** ci-dessous.
> - Pour des raisons de sécurité, les appels de formule dans les fonctions `query()` peuvent être interdits. Voir la description du paramètre `querySettings`.

- **comparator** : symbole d'opérateur utilisé pour comparer *attributePath* et *value*. Les symboles suivants sont pris en charge :

| Comparaison                             | Symbole(s) | Commentaire                                                                                                                                                                                                                                       |
| --------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Egal à                                  | =, ==                         | Retourne les données correspondantes, prend en charge le joker de recherche (@), ne tient pas compte de la casse et est non diacritique.                                                          |
|                                         | ===, IS                       | Retourne les données correspondantes, considère le @ comme un caractère standard, ne tient pas compte de la casse et est non diacritique                                                                                             |
| Différent de                            | #, !=                         | Prend en charge le joker de recherche (@). Équivalent à "Condition Not appliquée à une assertion" ([voir ci-dessous](#not-equal-to-in-collections)).           |
|                                         | !==, IS NOT                   | Considère le @ comme un caractère standard                                                                                                                                                                                           |
| Condition Not appliquée à une assertion | NOT                           | Les parenthèses sont obligatoires lorsque NOT est utilisé avant une déclaration contenant plusieurs opérateurs. Équivalent à "Not equal to" ([voir ci-dessous](#not-equal-to-in-collections)). |
| Inférieur à                             | <    |                                                                                                                                                                                                                                                   |
| Supérieur à                             | >                             |                                                                                                                                                                                                                                                   |
| Inférieur ou égal à                     | <=   |                                                                                                                                                                                                                                                   |
| Supérieur ou égal à                     | > =                           |                                                                                                                                                                                                                                                   |
| Inclus parmi                            | IN                            | Retourne les données égales à au moins une des valeurs d'une collection ou d'un ensemble de valeurs, prend en charge le joker de recherche (@)                                                                    |
| Contient mot-clé                        | %                             | Les mots-clés peuvent être utilisés avec les attributs de type texte ou image                                                                                                                                                                     |

- Peut être un **placeholder** (voir **Utiliser des placeholders** ci-dessous) ou toute expression correspondant à la propriété du type de donnée. **value** : valeur à comparer à la valeur courante de la propriété pour chaque entité de l'entity selection.
  Lorsque vous utilisez une valeur constante, les règles suivantes doivent être respectées :
  - Les valeurs constantes de type **texte** peuvent être passées avec ou sans guillemets (voir **Utilisation des guillemets** ci-dessous). Pour rechercher une chaîne dans une chaîne (recherche de type "contient"), utilisez le symbole joker (@) dans valeur pour isoler la chaîne à chercher, comme dans cet exemple : "@Smith@". Les mots-clés suivants sont interdits pour des constantes de type texte : true, false.
  - Valeurs constantes de type**booléen**: **true** or **false** (sensible à la casse).
  - Valeurs constantes de type **numérique** : les décimales doivent être séparées par un '.'
  - Constantes de type **date** : "YYYY-MM-DD" format
  - Constantes **null** : en utilisant le mot-clé "null", la recherche trouvera les propriétés ayant la valeur **null** et **undefined**.
  - Dans le cas d'une recherche avec un comparateur IN, *value*doit être une collection, ou des valeurs du même type que les données du chemin d'attribut, fournies entre \[ ] et séparées par des virgules (pour les chaînes, les caractères `"` doivent être écha
- **logicalOperator** : utilisé pour relier des conditions multiples dans la recherche (optionnel). Vous pouvez utiliser un des opérateurs logiques suivants (le nom ou le symbole peut être passé) :

| Conjonction | Symbole(s)                                          |
| ----------- | ---------------------------------------------------------------------- |
| AND         | &, &&, and |
| OU          | \|,\|\|, or                                                            |

- **order by attributePath** : vous pouvez inclure une déclaration order by *attributePath* dans la requête afin que les données résultantes soient triées selon cette déclaration. Vous pouvez utiliser plusieurs tris par déclaration, en les séparant par des virgules (e.g., order by *attributePath1* desc, *attributePath2* asc). Par défaut, le tri est par ordre croissant. Passez 'desc' pour définir un tri par ordre décroissant et 'asc' pour définir un tri par ordre croissant.

> Si vous utilisez cette instruction, l'entity selection renvoyée est ordonnée (pour plus d'informations, veuillez vous référer à [Ordered vs Unordered entity selections](ORDA/dsMapping.md#ordered-or-unordered-entity-selection)).

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

4D vous permet d'utiliser des placeholders pour les arguments *attributePath*, *formula* et *value* dans le paramètre *queryString*. Un placeholder est un paramètre que vous insérez dans des chaines de recherche et qui est remplacé par une autre valeur au moment où la chaîne de recherche est évaluée. La valeur des placeholders est évaluée une seule fois, au début de la requête ; elle n'est pas évaluée pour chaque élément.

Il existe deux types de placeholders : les **placeholders indexés** et les **placeholders nommés** :

|            | Placeholders indexés                                                                                                                                                                                                                                                                                                                                                                                            | Placeholders nommés                                                                                                                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Définition | Les paramètres sont insérés sous la forme `:paramIndex` (par exemple :1, :2...) dans *queryString* et leurs valeurs correspondantes sont fournies par la séquence de paramètres *value*. A *queryString* can contain, for *attributePath*, *formula* and *value* parameters: | Les paramètres sont insérés sous la forme `:paramName` (par exemple :myparam) et leurs valeurs sont fournies dans les objets attributes et/ou parameters dans le paramètre *querySettings* |
| Exemple    | `$r:=class.query(":1=:2";"city";"Chicago")`                                                                                                                                                                                                                                                                                                                                                                     | `$o.attributes:=New object("att";"city")`<br/> `$o.parameters:=New object("name";"Chicago")`<br/> `$r:=class.query(":att=:name";$o)`                                                                                          |

Vous pouvez combiner tous les types d'arguments dans *queryString*. Une *queryString* peut contenir, pour les paramètres *attributePath*, *formula* et *value* :

- des valeurs directes (pas de placeholders)
- des placeholders indexés et/ou nommés.

L'utilisation de placeholders dans les recherches **est recommandée** pour les raisons suivantes :

1. Cela empêche l'injection de code malveillant : si vous utilisez dans la chaîne de recherche des variables dont le contenu provient directement de la saisie de l'utilisateur, celui-ci pourrait modifier les conditions de recherche en saisissant des arguments de recherche supplémentaires. Par exemple, imaginez une chaîne de recherche du type :

```4d
 $vquery:="status = 'public' & name = "+myname //l'utilisateur saisit son nom
 $result:=$col.query($vquery)
```

Cette recherche semble sécurisée puisque les données non publiques sont filtrées. Cependant, si l'utilisateur saisit dans la zone *myname* une chaîne du type *"smith OR status='private'*, la chaîne de recherche sera modifiée à l'étape de l'interprétation et pourra retourner des données privées.

Lorsque vous utilisez des placeholders, le contournement des options de sécurité n'est pas possible :

```4d
 $result:=$col.query("status='public' & name=:1";myname)
```

Dans ce cas, si l'utilisateur saisit *smith OR status='private'* dans la zone *myname*, cela ne sera pas interprété dans la chaîne de recherche, mais uniquement passé en tant que valeur. La recherche d'une personne nommée "smith OR status='private"' échouera simplement.

2. Cela résout les questions liées au formatage des valeurs ou des caractères, notamment lorsque vous gérez des paramètres *attributePath* et *value* qui peuvent contenir des caractères non-alphanumériques tels que ".", "["...

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
 $vSingles:=ds.Person.query("spouse = null") //syntaxe valide
```

#### Not equal to et les collections

Lors d'une recherche dans les attributs d'objets de dataclass contenant des collections, le comparateur "not equal to *value*" (`#` ou `!=`) trouvera les éléments dont TOUTES les propriétés sont différentes de *value* (et non ceux dont AU MOINS une propriété est différente de *value*, ce qui est le cas des autres comparateurs). Fondamentalement, cela équivaut à rechercher "Not(chercher éléments de la collection pour lesquels la propriété vaut *value*"). Par exemple, avec les entités suivantes :

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

Si vous souhaitez mettre en œuvre une recherche qui trouve les entités dont "au moins une propriété est différente de *value*", vous devez utiliser une notation spéciale en utilisant une lettre dans les `[]` :

```4d
ds.Class.query("info.coll[a].val != :1";0)  
// renvoie A et B
// trouve "les entités dont au moins une propriété val est différente de 0"
```

Vous pouvez utiliser n'importe quelle lettre de l'alphabet comme notation `[a]` .

#### Lier les critères de recherche pour les attributs de collections

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

... la requête renverra "martin" **et** "smith" parce que "smith" a un élément "locations" dont le "kind" est "home" et un élément "locations" dont la "city" est "paris", même s'il s'agit d'éléments différents.

Si vous souhaitez obtenir uniquement les entités dont les critères correspondants sont dans le même élément de collection, vous devez **lier les critères**. Pour lier des critères de recherche :

- Ajoutez une lettre entre le caractère \[] dans le premier chemin à lier et répétez la même lettre dans tous les critères liés. Par exemple : `locations[a].city and locations[a].kind`. Vous pouvez utiliser n'importe quelle lettre de l'alphabet latin (non sensible à la casse).
- Pour ajouter différents critères liés dans la même requête, utilisez une autre lettre. Vous pouvez créer jusqu'à 26 combinaisons de critères dans une seule requête.

Avec les entités ci-dessus, si vous écrivez :

```4d
ds.People.query("places.locations[a].kind= :1 and places.locations[a].city= :2";"home";"paris")
```

... la recherche retournera uniquement "martin" car il possède un élément "locations" dont "kind" est "home" et dont "city" est "paris". La recherche ne retournera pas "smith" car les valeurs "home" et "paris" ne sont pas contenues dans le même élément de collection.

#### Recherches dans les relations N vers N

ORDA propose une syntaxe spéciale pour faciliter les recherches dans les relations N vers N. ORDA propose une syntaxe spéciale pour faciliter les recherches dans les relations N vers N. Dans ce contexte, vous pouvez avoir besoin de rechercher des valeurs différentes à l'aide de l'opérateur `AND` MAIS dans le même attribut. Par exemple, considérez la structure suivante :

![alt-text](../assets/en/API/manytomany.png)

Imaginez que vous souhaitiez rechercher tous les films dans lesquels un acteur A *et* un acteur B ont simultanément joué un rôle. Si vous écrivez une recherche simple utilisant l'opérateur `AND`, cela ne va pas fonctionner :

```4d
// code invalide
$es:=ds.Movie.query("roles.actor.lastName = :1 AND roles.actor.lastName = :2";"Hanks";"Ryan")  
// $es est vide
```

Fondamentalement, le problème vient de la logique interne de la recherche : vous ne pouvez pas rechercher une entité dont un attribut aurait simultanément la valeur "A" et "B".

Pour rendre possible ce type de recherche, ORDA prend en charge une syntaxe spéciale : vous devez juste ajouter un *index de classe* entre les caractères **{}** dans tous les attributs relationnels supplémentaires utilisés dans la chaîne de recherche :

```4d
"relationAttribute.attribute = :1 AND relationAttribute{x}.attribute = :2 [AND relationAttribute{y}.attribute...]"
```

**{x}** indique à ORDA de créer une autre référence pour l'attribut relationnel. Le moteur de recherches effectuera alors toutes les opérations internes nécessaires. Notez que **x** peut être n'importe quel nombre **à l'exception de 0**: {1}, ou {2}, ou {1540}... ORDA a simplement besoin d'une référence unique dans la recherche pour chaque class index.

Dans notre exemple, cela pourrait donner :

```4d
// code valide
$es:=ds.Movie.query("roles.actor.lastName = :1 AND roles.actor{2}.lastName = :2";"Hanks";"Ryan")  
// $es contient des films (You've Got Mail, Sleepless in Seattle, Joe Versus the Volcano)
```

#### Paramètre formula

Au lieu d'insérer une formule dans le paramètre *queryString* (voir ci-dessus), vous pouvez directement passer un objet formule en tant que critère de recherche booléen. L'utilisation d'un objet formule pour les recherches est **recommandée** car vous bénéficiez de la tokenisation et le code est plus facile à rechercher/lire.

La formule doit avoir été créée à l'aide de la commande [`Formula`](FunctionClass.md#formula) ou [`Formula from string`](FunctionClass.md#formula-from-string). Dans ce cas :

- *formula* est évaluée pour chaque entité et doit renvoyer vrai ou faux. Lors de l'exécution de la requête, si le résultat de la formule n'est pas un booléen, il est considéré comme faux.
- dans *formula*, l'entité est disponible via l'objet `This`.
- si l'objet `Formula` est **null**, l'erreur 1626 ("Attente d'un texte ou d'une formule") est générée, que vous pouvez intercepter à l'aide d'une méthode installée avec `ON ERR CALL`.

> Pour des raisons de sécurité, les appels de formule dans les fonctions `query()` peuvent être interdits. Voir la description du paramètre *querySettings*.

#### Passer des paramètres aux formules

Toute *formula* appelée par la fonction `query()` peut recevoir des paramètres :

- Les paramètres doivent être passés via la propriété **args** du paramètre *querySettings*.
- La formule reçoit cet objet **args** en tant que paramètre **$1**.

Ce code montre comment les paramètres sont passés aux fonctions :

```4d
 $settings:=New object("args";New object("exclude";"-")) //objet args pour passer des paramètres
 $es:=ds.Students.query("eval(checkName($1.exclude))";$settings) //args est reçu dans $1
```

Des exemples supplémentaires sont fournis dans l'exemple 3.

**4D Server** : En client/serveur, les formules sont exécutées sur le serveur. Dans ce contexte, seul l'objet `querySettings.args` est envoyé aux formules.

#### Paramètre querySettings

Dans le paramètre *querySettings* vous pouvez passer un objet contenant des options supplémentaires. Les propriétés suivantes sont prises en charge :

| Propriété     | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| parameters    | Object  | **Placeholders nommés pour les valeurs** utilisées dans *queryString* ou *formula*. Les valeurs sont exprimées sous forme de paires propriété / valeur, où propriété est le nom du placeholder inséré pour une valeur dans *queryString* ou *formula* (":placeholder") et où valeur correspond à la valeur à comparer. Vous pouvez combiner, dans une même recherche, des placeholders indexés (valeurs passées directement dans les paramètres <em x-id="3">value</em>) et les valeurs des placeholders nommés.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| attributes    | Object  | **Placeholders nommés pour les chemins d'attributs** utilisés dans *queryString* ou *formula*. Les attributs sont exprimés sous forme de paires propriété / valeur, où propriété est le nom du placeholder inséré pour un chemin d'attribut dans *queryString* or *formula* (":placeholder"), et où valeur peut être une chaine ou une collection de chaines. Chaque valeur est un chemin qui peut désigner soit un scalaire, soit un attribut lié de la classe de données, soit une propriété dans un champ d'objet de la classe de données.<table><tr><th>Type de données</th><th>Description</th></tr><tr><td>Chaîne</td><td>attributePath exprimé à l'aide de la notation point, par exemple "name" ou "user.address.zipCode"</td></tr><tr><td>Collection de chaînes</td><td>Chaque chaîne de la collection représente un niveau d'attributePath, par exemple \["name"] ou \["user", "address", "zipCode"]. L'utilisation d'une collection permet de rechercher des attributs dont les noms ne sont pas compatibles avec la notation à points, par exemple \["4Dv17.1", "en/fr"]</td></tr></table>Vous pouvez mélanger des placeholders indexés (valeurs passées directement dans les paramètres *value*) et des valeurs de placeholders nommés dans la même requête. |
| args          | Object  | Paramètre(s) à passer aux formules, le cas échéant. L'objet **args** sera reçu dans $1 à l'intérieur des formules et donc ses valeurs seront disponibles via la propriété *$1.property* (cf. exemple 3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| allowFormulas | Boolean | Vrai pour autoriser les appels de formules dans la query (défaut). Passez faux pour interdire l'exécution de formules. Si la `query()` contient une formule alors que cette propriété est à Faux, une erreur est retournée (1278 - Formule non autorisée).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| context       | Text    | Nom du contexte d'optimisation automatique appliqué à l'entity selection. Ce contexte sera utilisé par le code qui manipule l'entity selection afin de bénéficier de l'optimisation. Cette fonctionnalité est conçue pour le traitement client/serveur ; pour plus d'informations, veuillez vous référer à la section [**Optimisation client/serveur**](../ORDA/client-server-optimization.md#contexte-doptimisation).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| queryPlan     | Boolean | Dans l'entity selection résultante, retourne ou ne retourne la description détaillée de la recherche juste avant d'être exécutée, i.e. La propriété retournée est un objet qui inclut chaque recherche et sous-recherche programmée (dans le cas d'une recherche complexe). Cette option est utile durant la phase de développement d'une application. Elle est utilisée conjointement à queryPath. Par défaut, si elle est omise : faux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| queryPath     | Boolean | Dans l'entity selection résultante, retourne ou ne retourne pas la description détaillée de la recherche telle qu'elle est effectuée. La propriété retournée est un objet qui contient le chemin utilisé pour la recherche (généralement identique à celui de queryPlan, mais il peut être différent si le moteur parvient à optimiser la recherche), la durée du traitement et le nombre d'enregistrements trouvés. Cette option est utile durant la phase de développement d'une application. Par défaut, si elle est omise : faux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### A propos de queryPlan et queryPath

Les informations enregistrées dans `queryPlan` et `queryPath` incluent le type de recherche (indexée ou séquentielle), chaque sous-recherche nécessaire, ainsi que les opérateurs de conjonction. Les query paths contiennent également le nombre d'entités trouvées et la durée d'exécution de chaque critère de recherche. Il peut être utile d'analyser ces informations lors du développement de vos applications. Généralement, la description du plan de recherche (queryPlan) et son chemin réel (queryPath) sont identiques mais ils peuvent différer car 4D peut intégrer des optimisations dynamiques lorsqu'une requête est exécutée, afin d'améliorer les performances. Par exemple, le moteur 4D peut convertir dynamiquement une requête indexée en requête séquentielle s'il estime qu'elle sera plus rapide. Ce cas particulier peut se produire lorsque le nombre d'entités recherchées est faible.

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

La formule est fournie sous forme de texte avec `eval()` dans le paramètre *queryString* :

```4d
 var $es : cs.StudentsSelection
 $es:=ds.Students.query("eval(length(This.lastname) >=30) and nationality='French'")
```

La formule est fournie sous forme d'objet `Formula` via un placeholder :

```4d
 var $es : cs.StudentsSelection
 var $formula : Object
 $formula:=Formula(Length(This.lastname)>=30)
 $es:=ds.Students.query(":1 and nationality='French'";$formula)
```

Seul un objet `Formula` est fourni comme critère de recherche :

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

Une formule texte dans *queryString* reçoit un paramètre :

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

En utilisant la même méthode ***checkName***, un objet `Formula` en placeholder reçoit un paramètre :

```4d
 var $es : cs.StudentsSelection
 var $settings; $formula : Object
 $formula:=Formula(checkName($1.filter))
 $settings:=New object()
 $settings.args:=New object("filter";"-")
 $es:=ds.Students.query(":1 and nationality=:2";$formula;"French";$settings)
 $settings.args.filter:="*" // modifie les paramètres sans mettre à jour l'objet $formula 
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
    $es:=ds.Students.query($queryString;$settings) //Une erreur est gnérée si $queryString contient une formule
 End if
```

#### Voir également

[`.query()`](EntitySelectionClass.md#query) pour les entity selections

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

> **Mode avancé :** Cette fonction est destinée aux développeurs qui souhaitent personnaliser les fonctionnalités par défaut de ORDA dans le cadre de configurations spécifiques. Dans la plupart des cas, vous n'aurez pas besoin de l'utiliser.

#### Description

La fonction `.setRemoteCacheSettings()` <!-- REF #DataClassClass.setRemoteCacheSettings().Summary -->définit le timeout et la taille maximale du cache ORDA pour une dataclass.<!-- END REF -->.

Dans le paramètre *settings*, passez un objet contenant les propriétés suivantes :

| Propriété  | Type    | Description                               |
| ---------- | ------- | ----------------------------------------- |
| timeout    | Integer | Timeout en secondes.      |
| maxEntries | Integer | Nombre maximum d'entités. |

`timeout` définit le timeout du cache ORDA pour la dataclass (30 secondes par défaut). Lorsque le timeout est atteint, les entités de la dataclass dans le cache sont considérées comme expirées. Cela signifie que :

- les données sont toujours présentes
- la prochaine fois que les données seront requises, elles seront demandées au serveur
- 4D supprime automatiquement les données expirées lorsque le nombre maximum d'entités est atteint

Modifier la propriété `timeout` définit un nouveau timeout pour les entités déjà présentes dans le cache. Cela peut être utile lorsque vous travaillez avec des données qui ne changent pas souvent, et pour lesquelles de nouvelles requêtes au serveur ne sont donc pas nécessaires.

`maxEntries` définit le nombre maximum d'entités dans le cache ORDA. Par défaut ce nombre est 30 000.

Le nombre d'entrées minimum est 300, donc la valeur de `maxEntries` doit être égale ou supérieure à 300. Sinon la valeur est ignorée et le nombre d'entrées maximum est fixé à 300.

Si aucune propriété valide n'est passée à `timeout` et `maxEntries`, le cache n'est pas modifié, il conserve ses valeurs précédentes ou par défaut.

Lorsqu'une entité est sauvegardée, elle est mise à jour dans le cache et expirera lorsque le timeout sera atteint.

#### Exemple

```4d
var $ds : 4D.DataStoreImplementation

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$ds.Buildings.setRemoteCacheSettings(New object("timeout"; 60; "maxEntries"; 350))
```

#### Voir également

[.clearRemoteCache()](#clearremotecache)<br/>[.getRemoteCache()](#clearremotecache)

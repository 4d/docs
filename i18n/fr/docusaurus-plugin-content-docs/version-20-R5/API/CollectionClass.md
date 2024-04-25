---
id: CollectionClass
title: Collection
---

The Collection class manages [Collection](Concepts/dt_collection.md) type variables.

Une collection est initialisée avec :

|                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.New collection.Syntax -->](#new-collection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #_command_.New collection.Summary -->                      |
| [<!-- INCLUDE #_command_.New shared collection.Syntax -->](#new-shared-collection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #_command_.New shared collection.Summary --> |

### Exemple

```4d
 var $colVar : Collection //création d'une variable 4D de type collection
 $colVar:=New collection ///initialisation de la collection et assignation à la variable 4D
```

### Sommaire

|                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #collection.at().Syntax -->](#at)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.at().Summary -->                                  |
| [<!-- INCLUDE #collection.average().Syntax -->](#average)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.average().Summary -->                   |
| [<!-- INCLUDE #collection.clear().Syntax -->](#clear)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.clear().Summary -->                         |
| [<!-- INCLUDE #collection.combine().Syntax -->](#combine)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.combine().Summary -->                   |
| [<!-- INCLUDE #collection.concat().Syntax -->](#concat)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.concat().Summary -->                      |
| [<!-- INCLUDE #collection.copy().Syntax -->](#copy)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.copy().Summary -->                            |
| [<!-- INCLUDE #collection.count().Syntax -->](#count)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.count().Summary -->                         |
| [<!-- INCLUDE #collection.countValues().Syntax -->](#countvalues)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.countValues().Summary -->       |
| [<!-- INCLUDE #collection.distinct().Syntax -->](#distinct)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.distinct().Summary -->                |
| [<!-- INCLUDE #collection.equal().Syntax -->](#equal)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.equal().Summary -->                         |
| [<!-- INCLUDE #collection.every().Syntax -->](#every)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.every().Summary -->                         |
| [<!-- INCLUDE #collection.extract().Syntax -->](#extract)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.extract().Summary -->                   |
| [<!-- INCLUDE #collection.fill().Syntax -->](#fill)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.fill().Summary -->                            |
| [<!-- INCLUDE #collection.filter().Syntax -->](#filter)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.filter().Summary -->                      |
| [<!-- INCLUDE #collection.find().Syntax -->](#find)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.find().Summary -->                            |
| [<!-- INCLUDE #collection.findIndex().Syntax -->](#find)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.findIndex().Summary -->                  |
| [<!-- INCLUDE #collection.first().Syntax -->](#first)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.first().Summary -->                         |
| [<!-- INCLUDE #collection.flat().Syntax -->](#flat)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.flat().Summary -->                            |
| [<!-- INCLUDE #collection.flatMap().Syntax -->](#flatMap)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.flatMap().Summary -->                   |
| [<!-- INCLUDE #collection.includes().Syntax -->](#includes)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.includes().Summary -->                |
| [<!-- INCLUDE #collection.indexOf().Syntax -->](#indexof)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.indexOf().Summary -->                   |
| [<!-- INCLUDE #collection.indices().Syntax -->](#indices)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.indices().Summary -->                   |
| [<!-- INCLUDE #collection.insert().Syntax -->](#insert)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.insert().Summary -->                      |
| [<!-- INCLUDE #collection.join().Syntax -->](#join)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.join().Summary -->                            |
| [<!-- INCLUDE #collection.last().Syntax -->](#last)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.last().Summary -->                            |
| [<!-- INCLUDE #collection.lastIndexOf().Syntax -->](#lastindexof)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.lastIndexOf().Summary -->       |
| [<!-- INCLUDE #collection.length.Syntax -->](#length)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.length.Summary -->                          |
| [<!-- INCLUDE #collection.map().Syntax -->](#map)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.map().Summary -->                               |
| [<!-- INCLUDE #collection.max().Syntax -->](#max)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.max().Summary -->                               |
| [<!-- INCLUDE #collection.min().Syntax -->](#min)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.min().Summary -->                               |
| [<!-- INCLUDE #collection.multiSort().Syntax -->](#multisort)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.multiSort().Summary -->             |
| [<!-- INCLUDE #collection.orderBy().Syntax -->](#orderby)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.orderBy().Summary -->                   |
| [<!-- INCLUDE #collection.orderByMethod().Syntax -->](#orderbymethod)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.orderByMethod().Summary --> |
| [<!-- INCLUDE #collection.pop().Syntax -->](#pop)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.pop().Summary -->                               |
| [<!-- INCLUDE #collection.push().Syntax -->](#push)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.push().Summary -->                            |
| [<!-- INCLUDE #collection.query().Syntax -->](#query)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.query().Summary -->                         |
| [<!-- INCLUDE #collection.reduce().Syntax -->](#reduce)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.reduce().Summary -->                      |
| [<!-- INCLUDE #collection.reduceRight().Syntax -->](#reduceRight)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.reduceRight().Summary -->       |
| [<!-- INCLUDE #collection.remove().Syntax -->](#remove)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.remove().Summary -->                      |
| [<!-- INCLUDE #collection.resize().Syntax -->](#resize)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.resize().Summary -->                      |
| [<!-- INCLUDE #collection.reverse().Syntax -->](#reverse)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.reverse().Summary -->                   |
| [<!-- INCLUDE #collection.shift().Syntax -->](#shift)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.shift().Summary -->                         |
| [<!-- INCLUDE #collection.slice().Syntax -->](#slice)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.slice().Summary -->                         |
| [<!-- INCLUDE #collection.some().Syntax -->](#some)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.some().Summary -->                            |
| [<!-- INCLUDE #collection.sort().Syntax -->](#sort)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.sort().Summary -->                            |
| [<!-- INCLUDE #collection.sum().Syntax -->](#sum)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.sum().Summary -->                               |
| [<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #collection.unshift().Summary -->                   |

## `New collection`

<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New collection.Params -->

| Paramètres | Type                                                                    |     | Description                                |
| ---------- | ----------------------------------------------------------------------- | :-: | ------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer |  -> | Valeur(s) de collection |
| Résultat   | Collection                                                              |  <- | New collection                             |

<!-- END REF -->

#### Description

The `New collection` command <!-- REF #_command_.New collection.Summary --> creates a new empty or prefilled collection<!-- END REF --> and returns its reference.

If you do not pass any parameters, `New collection` creates an empty collection and returns its reference.

Vous devez affecter la référence retournée à une variable 4D de type Collection.

> Keep in mind that `var : Collection` or `C_COLLECTION` statements declare a variable of the `Collection` type but does not create any collection.

Optionally, you can prefill the new collection by passing one or several _value_(s) as parameter(s).

Sinon, vous pouvez ajouter ou modifier des éléments ultérieurement par affectation. Par exemple :

```4d
 myCol[10]:="My new element"
```

If the new element index is beyond the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value.

Vous pouvez passer n'importe quel nombre de valeurs de n'importe quel type pris en charge (number, text, date, picture, pointer, object, collection...). Contrairement aux tableaux, les collections peuvent mélanger des données de différents types.

Vous devez prêter attention aux problèmes de conversion suivants :

- If you pass a pointer, it is kept "as is"; it is evaluated using the `JSON Stringify` command
- Les dates sont stockées sous la forme de date « aaaa-mm-jj » ou des chaînes au format « AAAA-MM-JJTHH: ss.SSSZ: mm » , selon la configuration actuelle « dates à l'intérieur des objets » de la base de données. Lors de la conversion de dates 4D en texte avant de les stocker dans la collection, par défaut le programme prend en compte le fuseau horaire local. You can modify this behavior using the `Dates inside objects` selector of the `SET DATABASE PARAMETER` command.
- Si vous passez une heure, elle est stockée sous la forme d'un nombre de millisecondes (Réel).

#### Exemple 1

Vous souhaitez créer une nouvelle collection vide et l'assigner à une variable collection 4D :

```4d
 var $myCol : Collection
 $myCol:=New collection
  //$myCol=[]
```

#### Exemple 2

Vous souhaitez créer une collection pré-remplie :

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]
```

#### Exemple 3

Vous souhaitez créer une nouvelle collection puis ajouter un élément :

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  //$coll=["a","b","c"]
 $coll[9]:="z" //ajouter un 10e élément avec la valeur "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```

## `New shared collection`

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New shared collection.Params -->

| Paramètres | Type                                                                |     | Description                                            |
| ---------- | ------------------------------------------------------------------- | :-: | ------------------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Shared object, Shared collection |  -> | Valeur(s) de la collection partagée |
| Résultat   | Collection                                                          |  <- | New shared collection                                  |

<!-- END REF -->

#### Description

The `New shared collection` command <!-- REF #_command_.New shared collection.Summary --> creates a new empty or prefilled shared collection<!-- END REF --> and returns its reference.

Adding an element to this collection using the assignment operator must be surrounded by the [`Use...End use`](Concepts/shared.md#useend-use) structure, otherwise an error is generated (this is not necessary when adding elements using functions such as [`push()`](#push) or [`map()`](#map) because they automatically trigger an internal _Use...End use_). Reading an element without a _Use...End use_ structure is, however, possible.

:::info

For more information on shared collections, please refer to the [Shared objects and collections](Concepts/shared.md) page.

:::

If you do not pass any parameters, `New shared collection` creates an empty shared collection and returns its reference.

Vous devez affecter la référence retournée à une variable 4D de type Collection.

> Keep in mind that `var : Collection` or `C_COLLECTION` statements declare a variable of the `Collection` type but do not create any collection.

Optionally, you can prefill the new shared collection by passing one or several _value_(s) as parameter(s). Sinon, vous pouvez ajouter ou modifier des éléments ultérieurement via l'assignation en notation objet (cf. exemple).

If the new element index is beyond the last existing element of the shared collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value.

Vous pouvez passer tout nombre de valeurs de n'importe quel type pris en charge :

- nombre (réel, entier...). Les valeurs numériques sont toujours stockées sous forme de réels.
- text
- boolean
- date
- heure (stockée en nombre de milliseconds - réel)
- Null
- shared object(\*)
- shared collection(\*)

:::note

Contrairement aux collections standard (non partagées), les collections partagées ne prennent pas en charge les images, les pointeurs et les objets ou collections non partagés.

:::

(\*)When a shared object or collection is added to a shared collection, they share the same _locking identifier_. For more information on this point, refer to [4D Doc Center](https://doc.4d.com).

#### Exemple

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

<!-- REF collection.at().Desc -->

## .at()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>

<!-- REF #collection.at().Syntax -->**.at**( *index* : Integer ) : any <!-- END REF -->

<!-- REF #collection.at().Params -->

| Paramètres | Type    |     | Description                   |
| ---------- | ------- | :-: | ----------------------------- |
| index      | Integer |  -> | Index de l'élément à renvoyer |
| Résultat   | any     |  <- | L'élément à cet index         |

<!-- END REF -->

#### Description

The `.at()` function <!-- REF #collection.at().Summary -->returns the item at position _index_, allowing for positive and negative integers<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

Les nombres entiers négatifs déterminent la position à partir du dernier élément de la collection.

The function returns Undefined if _index_ is beyond collection limits.

#### Exemple

```4d
var $col : Collection 
$col:=New collection(10; 20; 30; 40; 50)
$element:=$col.at(0) // 10
$element:=$col.at(1) // 20
$element:=$col.at(-1) // 50
$element:=$col.at(-2) // 40
$element:=$col.at(10) // undefined
```

<!-- END REF -->

<!-- REF collection.average().Desc -->

## .average()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.average().Syntax -->**.average**( {*propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.average().Params -->

| Paramètres   | Type            |     | Description                                                     |
| ------------ | --------------- | :-: | --------------------------------------------------------------- |
| propertyPath | Text            |  -> | Chemin de propriété d'objet à utiliser pour évaluer les valeurs |
| Résultat     | Real, Undefined |  <- | Moyenne arithmétique des valeurs de la collection               |

<!-- END REF -->

#### Description

The `.average()` function <!-- REF #collection.average().Summary -->returns the arithmetic mean (average) of defined values in the collection instance<!-- END REF -->.

Seuls les éléments ayant une valeur numérique sont pris en compte pour le calcul (les autres types d'éléments sont ignorés).

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property to take into account.

`.average()` returns `undefined` if:

- la collection est vide,
- la collection ne contient pas d'éléments numériques,
- _propertyPath_ is not found in the collection.

#### Exemple 1

```4d
 var $col : Collection
 $col:=New collection(10;20;"Monday";True;6)
 $vAvg:=$col.average() //12
```

#### Exemple 2

```4d
 var $col : Collection
 $col:=New collection
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500))
 $vAvg:=$col.average("salary") //23500
```

<!-- END REF -->

<!-- REF collection.clear().Desc -->

## .clear()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.clear().Syntax -->**.clear()** : Collection<!-- END REF -->

<!-- REF #collection.clear().Params -->

| Paramètres | Type       |     | Description                                                   |
| ---------- | ---------- | :-: | ------------------------------------------------------------- |
| Résultat   | Collection |  <- | Collection d'origine dont tous les éléments ont été supprimés |

<!-- END REF -->

#### Description

The `.clear()` function <!-- REF #collection.clear().Summary -->removes all elements from the collection instance and returns an empty collection<!-- END REF -->.

> Cette fonction modifie la collection d'origine.

#### Exemple

```4d
var $col : Collection
$col:=New collection(1;2;5)
$col.clear()
$vSize:=$col.length //$vSize=0
```

<!-- END REF -->

<!-- REF collection.combine().Desc -->

## .combine()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.combine().Syntax -->**.combine**( *col2* : Collection {; *index* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.combine().Params -->

| Paramètres | Type       |     | Description                                                                         |
| ---------- | ---------- | :-: | ----------------------------------------------------------------------------------- |
| col2       | Collection |  -> | Collection à combiner                                                               |
| index      | Integer    |  -> | Emplacement où insérer les éléments à combiner (défaut=length+1) |
| Résultat   | Collection |  <- | Collection d'origine incluant les éléments combinés                                 |

<!-- END REF -->

#### Description

The `.combine()` function <!-- REF #collection.combine().Summary -->inserts _col2_ elements at the end or at the specified _index_ position in the collection instance and returns the edited collection<!-- END REF -->. Unlike the `.insert()` function, `.combine()` adds each value of _col2_ in the original collection, and not as a single collection element.

> Cette fonction modifie la collection d'origine.

By default, _col2_ elements are added at the end of the orginal collection. You can pass in _index_ the position where you want the _col2_ elements to be inserted in the collection.

> **Warning**: Keep in mind that collection elements are numbered from 0.

- If _index_ > the length of the collection, the actual starting _index_ will be set to the length of the collection.
- If _index_ < 0, it is recalculated as _index:=index+length_ (it is considered as the offset from the end of the collection).
- If the calculated value is negative, _index_ is set to 0.

#### Exemple

```4d
var $c; $fruits : Collection
$c:=New collection(1;2;3;4;5;6)
$fruits:=New collection("Orange";"Banana";"Apple";"Grape")
$c.combine($fruits;3) //[1,2,3,"Orange","Banana","Apple","Grape",4,5,6]
```

<!-- END REF -->

<!-- REF collection.concat().Desc -->

## .concat()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.concat().Syntax -->**.concat**( *value* : any { *;...valueN* } ) : Collection<!-- END REF -->

<!-- REF #collection.concat().Params -->

| Paramètres | Type                                                           |     | Description                                                                                                                                         |
| ---------- | -------------------------------------------------------------- | :-: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| value      | Number, Text, Object, Collection, Date, Time, Boolean, Picture |  -> | Valeur(s) à concaténer. If _value_ is a collection, all collection elements are added to the original collection |
| Résultat   | Collection                                                     |  <- | Nouvelle collection contenant les valeurs d'origine et les valeurs ajoutées                                                                         |

<!-- END REF -->

#### Description

The `.concat()` function <!-- REF #collection.concat().Summary -->returns a new collection containing the elements of the original collection with all elements of the _value_ parameter added to the end<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

If _value_ is a collection, all its elements are added as new elements at the end of the original collection. If _value_ is not a collection, it is added itself as a new element.

#### Exemple

```4d
var $c : Collection
$c:=New collection(1;2;3;4;5)
$fruits:=New collection("Orange";"Banana";"Apple";"Grape")
$fruits.push(New object("Intruder";"Tomato"))
$c2:=$c.concat($fruits) //[1,2,3,4,5,"Orange","Banana","Apple","Grape",{"Intruder":"Tomato"}]
$c2:=$c.concat(6;7;8) //[1,2,3,4,5,6,7,8]
```

<!-- END REF -->

<!-- REF collection.copy().Desc -->

## .copy()

<details><summary>Historique</summary>

| Release | Modifications                                                      |
| ------- | ------------------------------------------------------------------ |
| 18 R3   | New _ck shared_ option. New _groupWith_ parameters |
| v16 R6  | Ajout                                                              |

</details>

<!-- REF #collection.copy().Syntax -->**.copy**() : Collection<br/>**.copy**( *option* : Integer ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->

<!-- REF #collection.copy().Params -->

| Paramètres   | Type       |     | Description                                                                                                                         |
| ------------ | ---------- | :-: | ----------------------------------------------------------------------------------------------------------------------------------- |
| option       | Integer    |  -> | `ck resolve pointers`: resolve pointers before copying,<br/>`ck shared`: return a shared collection |
| groupWithCol | Collection |  -> | Collection partagée à grouper avec la collection résultante                                                                         |
| groupWithObj | Object     |  -> | Objet partagé à grouper avec la collection résultante                                                                               |
| Résultat     | Collection |  <- | Copie de la collection d'origine (deep copy)                                                                     |

<!-- END REF -->

#### Description

The `.copy()` function <!-- REF #collection.copy().Summary --> returns a deep copy of the collection instance<!-- END REF -->._**Deep copy**_ means that objects or collections within the original collection are duplicated and do not share any reference with the returned collection.

> Cette fonction ne modifie pas la collection d'origine.

If passed, the _option_ parameter can contain one of the following constants (or both):

| option                | Description                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | Si la collection d'origine contient des valeurs de type pointeur, par défaut la copie contient également les pointeurs. However, you can resolve pointers when copying by passing the `ck resolve pointers` constant. Dans ce cas, chaque pointeur contenu dans la collection est évalué lors de la copie et sa valeur déréférencée est utilisée.               |
| `ck shared`           | By default, `copy()` returns a regular (not shared) collection, even if the command is applied to a shared collection. Pass the `ck shared` constant to create a shared collection. In this case, you can use the _groupWith_ parameter to associate the shared collection with another collection or object (see below). |

The _groupWithCol_ or _groupWithObj_ parameters allow you to designate a collection or an object with which the resulting collection should be associated.

:::note

Les objets Datastore, dataclass et entity ne sont pas copiables. If `.copy()` is called with them, `Null` values are returned.

:::

#### Exemple 1

We want to copy the _$lastnames_ regular (non shared) collection into the _$sharedObject_ shared object. To do this, we must create a shared copy of the collection (_$sharedLastnames_).

```4d
var $sharedObject : Object
var $lastnames;$sharedLastnames : Collection
var $text : Text

$sharedObject:=New shared object

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) //$lastnames est un collection standard

$sharedLastnames:=$lastnames.copy(ck shared) //$sharedLastnames est une collection partagée

//Nous pouvons désormais placer $sharedLastnames dans $sharedObject
Use($sharedObject)
    $sharedObject.lastnames:=$sharedLastnames
End use
```

#### Exemple 2

We want to combine _$sharedColl1_ and _$sharedColl2_. Etant donné qu'ils appartiennent à différents groupes partagés, une combinaison directe pourrait générer une erreur. Therefore, we must make a shared copy of _$sharedColl1_ and designate _$sharedColl2_ as a shared group for the copy.

```4d
var $sharedColl1;$sharedColl2;$copyColl : Collection

$sharedColl1:=New shared collection(New shared object("lastname";"Smith"))
$sharedColl2:=New shared collection(New shared object("lastname";"Brown"))

//$copyColl appartient au nouveau groupe partagé comme $sharedColl2
 $copyColl:=$sharedColl1.copy(ck shared;$sharedColl2)
 Use($sharedColl2)
    $sharedColl2.combine($copyColl)
 End use
```

#### Exemple 3

We have a regular collection (_$lastnames_) and we want to put it in the **Storage** of the application. To do this, we must create a shared copy beforehand (_$sharedLastnames_).

```4d
var $lastnames;$sharedLastnames : Collection
var $text : Text

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) //$lastnames est une collection standard

$sharedLastnames:=$lastnames.copy(ck shared) // copie partagée

Use(Storage)
    Storage.lastnames:=$sharedLastnames
End use
```

#### Exemple 4

This example illustrates the use of the `ck resolve pointers` option:

```4d
 var $col : Collection
 var $p : Pointer
 $p:=->$what

 $col:=New collection
 $col.push(New object("alpha";"Hello";"num";1))
 $col.push(New object("beta";"You";"what";$p))

 $col2:=$col.copy()
 $col2[1].beta:="World!"
 ALERT($col[0].alpha+" "+$col2[1].beta) //displays "Hello World!"

 $what:="You!"
 $col3:=$col2.copy(ck resolve pointers)
 ALERT($col3[0].alpha+" "+$col3[1].what) //displays "Hello You!"
```

<!-- END REF -->

<!-- REF collection.count().Desc -->

## .count()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.count().Syntax -->**.count**( { *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.count().Params -->

| Paramètres   | Type |     | Description                                                     |
| ------------ | ---- | :-: | --------------------------------------------------------------- |
| propertyPath | Text |  -> | Chemin de propriété d'objet à utiliser pour évaluer les valeurs |
| Résultat     | Real |  <- | Nombre d'éléments dans la collection                            |

<!-- END REF -->

#### Description

The `.count()` function <!-- REF #collection.count().Summary -->returns the number of non-null elements in the collection<!-- END REF -->.

If the collection contains objects, you can pass the _propertyPath_ parameter. In this case, only elements that contain the _propertyPath_ are taken into account.

#### Exemple

```4d
 var $col : Collection
 var $count1;$count2 : Real
 $col:=New collection(20;30;Null;40)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500))
 $col.push(New object("lastName";"Henry";"salary";12000))
 $count1:=$col.count() //$count1=7
 $count2:=$col.count("name") //$count2=3

```

<!-- END REF -->

<!-- REF collection.countValues().Desc -->

## .countValues()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.countValues().Syntax -->**.countValues**( *value* : any {; *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.countValues().Params -->

| Paramètres   | Type                                            |     | Description                                                     |
| ------------ | ----------------------------------------------- | :-: | --------------------------------------------------------------- |
| value        | Text, Number, Boolean, Date, Object, Collection |  -> | Valeur à compter                                                |
| propertyPath | Text                                            |  -> | Chemin de propriété d'objet à utiliser pour évaluer les valeurs |
| Résultat     | Real                                            |  <- | Nombre d'occurrences de la valeur                               |

<!-- END REF -->

#### Description

The `.countValues()` function <!-- REF #collection.countValues().Summary -->returns the number of times value is found in the collection<!-- END REF -->.

You can pass in _value_:

- une valeur scalaire (texte, numérique, booléen, date),
- une référence d'objet ou de collection.

For an element to be found, the type of _value_ must be equivalent to the type of the element; the method uses the equality operator.

The optional _propertyPath_ parameter allows you to count values inside a collection of objects: pass in _propertyPath_ the path of the property whose values you want to count.

> Cette fonction ne modifie pas la collection d'origine.

#### Exemple 1

```4d
 var $col : Collection
 var $vCount : Integer
 $col:=New collection(1;2;5;5;5;3;6;4)
 $vCount:=$col.countValues(5) // $vCount=3
```

#### Exemple 2

```4d
 var $col : Collection
 var $vCount : Integer
 $col:=New collection
 $col.push(New object("name";"Smith";"age";5))
 $col.push(New object("name";"Wesson";"age";2))
 $col.push(New object("name";"Jones";"age";3))
 $col.push(New object("name";"Henry";"age";4))
 $col.push(New object("name";"Gross";"age";5))
 $vCount:=$col.countValues(5;"age") //$vCount=2
```

#### Exemple 3

```4d
 var $numbers; $letters : Collection
 var $vCount : Integer

 $letters:=New collection("a";"b";"c")
 $numbers:=New collection(1;2;$letters;3;4;5)

 $vCount:=$numbers.countValues($letters) //$vCount=1
```

<!-- END REF -->

<!-- REF collection.distinct().Desc -->

## .distinct()

<details><summary>Historique</summary>

| Release | Modifications                |
| ------- | ---------------------------- |
| 20      | Support of `ck count values` |
| v16 R6  | Ajout                        |

</details>

<!-- REF #collection.distinct().Syntax -->**.distinct**( {*options* : Integer} ) : Collection<br/>**.distinct**( *propertyPath* : Text {; *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.distinct().Params -->

| Paramètres   | Type       |     | Description                                                             |
| ------------ | ---------- | :-: | ----------------------------------------------------------------------- |
| propertyPath | Text       |  -> | Chemin de l'attribut dont vous souhaitez obtenir les valeurs distinctes |
| options      | Integer    |  -> | `ck diacritical`, `ck count values`                                     |
| Résultat     | Collection |  <- | Nouvelle collection contenant uniquement les valeurs distinctes         |

<!-- END REF -->

#### Description

The `.distinct()` function <!-- REF #collection.distinct().Summary -->returns a collection containing only distinct (different) values from the original collection<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

La collection retournée est automatiquement triée. **Null** values are not returned.

If the collection contains objects, you can pass the _propertyPath_ parameter to indicate the object property whose distinct values you want to get.

In the _options_ parameter, you can pass one or a combination of the following constants:

| Constante         | Valeur | Commentaire                                                                                                                                                                                                                               |
| ----------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck diacritical`  | 8      | L'évaluation est sensible à la casse et différencie les caractères accentués. Par défaut si omis, une évaluation non diacritique est effectuée                                                                            |
| `ck count values` | 32     | Renvoie le nombre d'éléments pour chaque valeur distincte. When this option is passed, `.distinct()` returns a collection of objects containing a pair of `{"value":*value*;"count":*count*}` attributes. |

#### Exemples

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("a";"b";"c";"A";"B";"c";"b";"b")
 $c.push(New object("size";1))
 $c.push(New object("size";3))
 $c.push(New object("size";1))
 $c2:=$c.distinct() //$c2=["a","b","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct(ck diacritical) //$c2=["a","A","b","B","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct("size") //$c2=[1,3]
 $c3:=$c.distinct("size";ck count values) //$c3=[{value:1,count:2},{value:3,count:1}]

```

<!-- END REF -->

<!-- REF collection.equal().Desc -->

## .equal()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.equal().Syntax -->**.equal**( *collection2* : Collection {; *option* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #collection.equal().Params -->

| Paramètres  | Type       |     | Description                                                                                         |
| ----------- | ---------- | :-: | --------------------------------------------------------------------------------------------------- |
| collection2 | Collection |  -> | Collection à comparer                                                                               |
| option      | Integer    |  -> | `ck diacritical`: diacritical evaluation ("A" # "a" for example) |
| Résultat    | Boolean    |  <- | Vrai si les collections sont identiques, sinon faux                                                 |

<!-- END REF -->

#### Description

The `.equal()` function <!-- REF #collection.equal().Summary -->compares the collection with collection2 <!-- END REF -->and returns **true** if they are identical (deep comparison).

Par défaut, une évaluation non diacritique est effectuée. If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `ck diacritical` constant in the option parameter.

> Elements with **Null** values are not equal to Undefined elements.

#### Exemple

```4d
 var $c; $c2 : Collection
 var $b : Boolean

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"orange");2;3;4)
 $b:=$c.equal($c2) // false

 $c:=New collection(New object("1";"a";"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"orange");2;3)
 $b:=$c.equal($c2) // false

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"ORange");2;3)
 $b:=$c.equal($c2) // true

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"ORange");2;3)
 $b:=$c.equal($c2;ck diacritical) //false
```

<!-- END REF -->

<!-- REF collection.every().Desc -->

## .every()

<details><summary>Historique</summary>

| Release | Modifications                |
| ------- | ---------------------------- |
| 19 R6   | Prise en charge des formules |
| v16 R6  | Ajout                        |

</details>

<!-- REF #collection.every().Syntax -->**.every**( { *startFrom* : Integer ; } *formula* : 4D.Function { ;*...param* : any } ) : Boolean<br/>**.every**( { *startFrom* : Integer ; } *methodName* : Text { ;*...param* : any } ) : Boolean<!-- END REF -->

<!-- REF #collection.every().Params -->

| Paramètres | Type                        |     | Description                                                          |
| ---------- | --------------------------- | :-: | -------------------------------------------------------------------- |
| startFrom  | Integer                     |  -> | Elément à partir duquel débuter l'évaluation                         |
| formula    | 4D.Function |  -> | Objet formule                                                        |
| methodName | Text                        |  -> | Nom de méthode                                                       |
| param      | Mixed                       |  -> | Parameter(s) to pass to _formula_ or _methodName_ |
| Résultat   | Boolean                     |  <- | Vrai si tous les éléments sont évalués à vrai                        |

<!-- END REF -->

#### Description

The `.every()` function <!-- REF #collection.every().Summary -->returns **true** if all elements in the collection successfully passed a test implemented in the provided _formula_ object or _methodName_ name<!-- END REF -->.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for every element fulfilling the test. It receives an `Object` in first parameter ($1).

La callback reçoit les paramètres suivants :

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

Elle peut définir le(s) paramètre(s) suivant(s) :

- (mandatory if you used a method) _$1.result_ (Boolean): **true** if the element value evaluation is successful, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. La valeur retournée est la dernière calculée.

In all cases, at the point when the `.every()` function encounters the first collection element evaluated to **false**, it stops calling the callback and returns **false**.

By default, `.every()` tests the whole collection. Optionally, you can pass in _startFrom_ the index of the element from which to start the test.

- If _startFrom_ >= the collection's length, **false** is returned, which means the collection is not tested.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection ( _startFrom:=startFrom+length_).
- If _startFrom_ = 0, the whole collection is searched (default).

#### Exemple 1

```4d
var $c : Collection  
var $b : Boolean
var $f : 4D.Function

$f:=Formula($1.value>0)
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every($f) //returns true
$c.push(-1)
$b:=$c.every($f) //returns false
```

#### Exemple 2

Cet exemple vérifie que tous les éléments de la collection sont de type réel :

```4d
var $c : Collection
var $b : Boolean
var $f : 4D.Function

$f:=Formula(Value type($1.value)=$2
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every($f;Is real) //$b=true
$c:=$c.push(New object("name";"Cleveland";"zc";35049))
$c:=$c.push(New object("name";"Blountsville";"zc";35031))
$b:=$c.every($f;Is real) //$b=false
```

<!-- END REF -->

<!-- REF collection.extract().Desc -->

## .extract()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.extract().Syntax -->**.extract**( *propertyPath* : Text { ; *option* : Integer } ) : Collection<br/>**.extract**( *propertyPath* : Text ;  *targetPath* : Text  { ;...*propertyPathOrTargetPathN* : Text } ) : Collection<!-- END REF -->

<!-- REF #collection.extract().Params -->

| Paramètres   | Type       |     | Description                                                                                                                                                                                           |
| ------------ | ---------- | :-: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Text       |  -> | Chemin de propriété d'objet dont les valeurs doivent être extraites dans la nouvelle collection                                                                                                       |
| targetpath   | Text       |  -> | Chemin ou nom de propriété cible                                                                                                                                                                      |
| option       | Integer    |  -> | `ck keep null`: include null properties in the returned collection (ignored by default). Parameter ignored if _targetPath_ passed. |
| Résultat     | Collection |  <- | Nouvelle collection contenant les valeurs extraites                                                                                                                                                   |

<!-- END REF -->

#### Description

The `.extract()` function <!-- REF #collection.extract().Summary -->creates and returns a new collection containing _propertyPath_ values extracted from the original collection of objects<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

The contents of the returned collection depends on the _targetPath_ parameter:

- If the _targetPath_ parameter is omitted, `.extract()` populates the new collection with the _propertyPath_ values of the original collection.

  By default, elements for which _propertyPath_ is null or undefined are ignored in the resulting collection. You can pass the `ck keep null` constant in the _option_ parameter to include these values as null elements in the returned collection.

- If one or more _targetPath_ parameter(s) are passed (corresponding to one or more _propertyPath_ parameter(s)), `.extract()` populates the new collection with the _propertyPath_ properties and each element of the new collection is an object with _targetPath_ properties filled with the matching _propertyPath_ properties. Null values are kept (_option_ parameter is ignored with this syntax).

#### Exemple 1

```4d
var $c : Collection
$c:=New collection
$c.push(New object("name";"Cleveland"))
$c.push(New object("zip";5321))
$c.push(New object("name";"Blountsville"))
$c.push(42)
$c2:=$c.extract("name") // $c2=[Cleveland,Blountsville]
$c2:=$c.extract("name";ck keep null) //$c2=[Cleveland,null,Blountsville,null]
```

#### Exemple 2

```4d
var $c : Collection
$c:=New collection
$c.push(New object("zc";35060))
$c.push(New object("name";Null;"zc";35049))
$c.push(New object("name";"Cleveland";"zc";35049))
$c.push(New object("name";"Blountsville";"zc";35031))
$c.push(New object("name";"Adger";"zc";35006))
$c.push(New object("name";"Clanton";"zc";35046))
$c.push(New object("name";"Clanton";"zc";35045))
$c2:=$c.extract("name";"City") //$c2=[{City:null},{City:Cleveland},{City:Blountsville},{City:Adger},{City:Clanton},{City:Clanton}]
$c2:=$c.extract("name";"City";"zc";"Zip") //$c2=[{Zip:35060},{City:null,Zip:35049},{City:Cleveland,Zip:35049},{City:Blountsville,Zip:35031},{City:Adger,Zip:35006},{City:Clanton,Zip:35046},{City:Clanton,Zip:35045}]
```

<!-- END REF -->

<!-- REF collection.fill().Desc -->

## .fill()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.fill().Syntax -->**.fill**( *value* : any ) : Collection<br/>**.fill**( *value* : any ;  *startFrom*  : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.fill().Params -->

| Paramètres | Type                                            |     | Description                                               |
| ---------- | ----------------------------------------------- | :-: | --------------------------------------------------------- |
| value      | Number, Text, Object, Collection, Date, Boolean |  -> | Valeur de remplissage                                     |
| startFrom  | Integer                                         |  -> | Numéro de l'élément de départ (inclus) |
| end        | Integer                                         |  -> | Position de fin (non incluse)          |
| Résultat   | collection                                      |  <- | Collection d'origine avec valeurs de remplissage          |

<!-- END REF -->

#### Description

The `.fill()` function <!-- REF #collection.fill().Summary -->fills the collection with the specified _value_, optionally from _startFrom_ index to _end_ index, and returns the resulting collection<!-- END REF -->.

> Cette fonction modifie la collection d'origine.

- If the _startFrom_ parameter is omitted, _value_ is set to all collection elements (_startFrom_=0).
- If the _startFrom_ parameter is passed and _end_ omitted, _value_ is set to collection elements starting at _startFrom_ to the last element of the collection (_end_=length).
- If both the _startFrom_ parameter and _end_ are passed, _value_ is set to collection elements starting at _startFrom_ to the element _end_.

En cas d'incohérence, les règles suivantes sont appliquées :

- If _startFrom_ < 0, it is recalculated as _startFrom:=startFrom+length_ (it is considered as the offset from the end of the collection). If the calculated value is negative, _startFrom_ is set to 0.
- If _end_ < 0 , it is recalculated as _end:=end+length_.
- If _end_ < _startFrom_ (passed or calculated values), the method does nothing.

#### Exemple

```4d
 var $c : Collection
 $c:=New collection(1;2;3;"Lemon";Null;"";4;5)
 $c.fill("2") // $c:=[2,2,2,2,2,2,2,2]
 $c.fill("Hello";5) // $c=[2,2,2,2,2,Hello,Hello,Hello]
 $c.fill(0;1;5) // $c=[2,0,0,0,0,Hello,Hello,Hello]
 $c.fill("world";1;-5) //-5+8=3 -> $c=[2,"world","world",0,0,Hello,Hello,Hello]
```

<!-- END REF -->

<!-- REF collection.filter().Desc -->

## .filter()

<details><summary>Historique</summary>

| Release | Modifications                |
| ------- | ---------------------------- |
| 19 R6   | Prise en charge des formules |
| v16 R6  | Ajout                        |

</details>

<!-- REF #collection.filter().Syntax -->**.filter**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.filter**( *methodName* : Text { ; *...param* : any } ) : Collection<!-- END REF -->

<!-- REF #collection.filter().Params -->

| Paramètres | Type                        |     | Description                                                                          |
| ---------- | --------------------------- | :-: | ------------------------------------------------------------------------------------ |
| formula    | 4D.Function |  -> | Objet formule                                                                        |
| methodName | Text                        |  -> | Nom de méthode                                                                       |
| param      | any                         |  -> | Parameter(s) to pass to _formula_ or _methodName_                 |
| Résultat   | Collection                  |  <- | Nouvelle collection contenant les éléments filtrés (shallow copy) |

<!-- END REF -->

#### Description

The `.filter()` function <!-- REF #collection.filter().Summary -->returns a new collection containing all elements of the original collection for which the _formula_ or _methodName_ result is **true**<!-- END REF -->. This function returns a _**shallow copy**_, which means that objects or collections in both collections share the same reference. Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour filtrer les éléments de la collection en utilisant soit :

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional) and an object in first parameter (_$1_). The callback can perform any test, with or without the parameter(s) and must return **true** for each element fulfilling the condition and thus, to push to the new collection.

La callback reçoit les paramètres suivants :

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

Elle peut définir le(s) paramètre(s) suivant(s) :

- _$1.result_ (Boolean): **true** if the element value matches the filter condition and must be kept, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. La valeur retournée est la dernière calculée.

:::note

When using _methodName_ as callback, and if the method does not return any value, `.filter()` will look at the property _$1.result_ that you must set to **true** for each element fulfilling the condition.

:::

#### Exemple 1

Vous voulez obtenir la collection des éléments de type texte dont la longueur est inférieure à 6 :

```4d
var $col;$colNew : Collection
$col:=New collection("hello";"world";"red horse";66;"tim";"san jose";"miami")
$colNew:=$col.filter(Formula((Value type($1.value)=Is text) && (Length($1.value)<$2)); 6)
  //$colNew=["hello","world","tim","miami"]
```

#### Exemple 2

Vous voulez filtrer les éléments de la collection en fonction de leur type :

```4d
 var $c;$c2;$c3 : Collection
 var $f : 4D.Function

 $f:=Formula(OB Get type($1;"value")=$2)
 $c:=New collection(5;3;1;4;6;2)
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c2:=$c.filter($f;Is real) // $c2=[5,3,1,4,6,2]
 $c3:=$c.filter($f;Is object)
  // $c3=[{name:Cleveland,zc:35049},{name:Blountsville,zc:35031}]
```

<!-- END REF -->

<!-- REF collection.find().Desc -->

## .find()

<details><summary>Historique</summary>

| Release | Modifications                |
| ------- | ---------------------------- |
| 19 R6   | Prise en charge des formules |
| v16 R6  | Ajout                        |

</details>

<!-- REF #collection.find().Syntax -->**.find**( { *startFrom* : Integer ; }  *formula* : 4D.Function { ; *...param* : any } ) : any<br/>**.find**( { *startFrom* : Integer ; }  *methodName* : Text { ; *...param* : any } ) : any<!-- END REF -->

<!-- REF #collection.find().Params -->

| Paramètres | Type                        |     | Description                                                           |
| ---------- | --------------------------- | :-: | --------------------------------------------------------------------- |
| startFrom  | Integer                     |  -> | Elément à partir duquel débuter la recherche                          |
| formula    | 4D.Function |  -> | Objet formule                                                         |
| methodName | Text                        |  -> | Nom de méthode                                                        |
| param      | any                         |  -> | Parameter(s) to pass to _formula_ or _methodName_  |
| Résultat   | any                         |  <- | Première valeur trouvée (Undefined si non trouvée) |

<!-- END REF -->

#### Description

The `.find()` function <!-- REF #collection.find().Summary -->returns the first value in the collection for which _formula_ or _methodName_ result, applied on each element, returns **true**<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for the first element fulfilling the condition. It receives an `Object` in first parameter ($1).

La callback reçoit les paramètres suivants :

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

Elle peut définir le(s) paramètre(s) suivant(s) :

- (mandatory if you used a method) _$1.result_ (Boolean): **true** if the element value matches the search condition, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. La valeur retournée est la dernière calculée.

By default, `.find()` searches in the whole collection. Optionally, you can pass in _startFrom_ the index of element from which to start the search.

- If _startFrom_ >= the collection's length, -1 is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_).
  **Note**: Even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

#### Exemple 1

Vous souhaitez obtenir le premier élément de texte dont la taille est inférieure à 5 caractères :

```4d
var $col : Collection
$col:=New collection("hello";"world";4;"red horse";"tim";"san jose")
$value:=$col.find(Formula((Value type($1.value)=Is text) && (Length($1.value)<$2)); 5) //$value="tim"
```

#### Exemple 2

Vous souhaitez trouver un nom de ville dans une collection :

```4d
var $c : Collection
var $c2 : Object
$c:=New collection
$c.push(New object("name"; "Cleveland"; "zc"; 35049))
$c.push(New object("name"; "Blountsville"; "zc"; 35031))
$c.push(New object("name"; "Adger"; "zc"; 35006))
$c.push(New object("name"; "Clanton"; "zc"; 35046))
$c.push(New object("name"; "Clanton"; "zc"; 35045))

$c2:=$c.find(Formula($1.value.name=$2); "Clanton")  //$c2={name:Clanton,zc:35046}

```

<!-- END REF -->

<!-- REF collection.findIndex().Desc -->

## .findIndex()

<details><summary>Historique</summary>

| Release | Modifications                |
| ------- | ---------------------------- |
| 19 R6   | Prise en charge des formules |
| v16 R6  | Ajout                        |

</details>

<!-- REF #collection.findIndex().Syntax -->**.findIndex**( { *startFrom* : Integer ; }  *formula* : 4D.Function { ; *...param* : any } ) : Integer<br/>**.findIndex**( { *startFrom* : Integer ; }  *methodName* : Text { ; *...param* : any } ) : Integer<!-- END REF -->

<!-- REF #collection.findIndex().Params -->

| Paramètres | Type                        |     | Description                                                            |
| ---------- | --------------------------- | :-: | ---------------------------------------------------------------------- |
| startFrom  | Integer                     |  -> | Elément à partir duquel débuter la recherche                           |
| formula    | 4D.Function |  -> | Objet formule                                                          |
| methodName | Text                        |  -> | Nom de méthode                                                         |
| param      | any                         |  -> | Parameter(s) to pass to _formula_ or _methodName_   |
| Résultat   | Integer                     |  <- | Numéro du premier élément trouvé (-1 si non trouvé) |

<!-- END REF -->

#### Description

The `.findIndex()` function <!-- REF #collection.findIndex().Summary -->returns the index, in the collection, of the first value for which _formula_ or _methodName_, applied on each element, returns **true**<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for the first element fulfilling the condition. It receives an `Object` in first parameter ($1).

La callback reçoit les paramètres suivants :

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

Elle peut définir le(s) paramètre(s) suivant(s) :

- (mandatory if you used a method) _$1.result_ (Boolean): **true** if the element value matches the search condition, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. La valeur retournée est la dernière calculée.

By default, `.findIndex()` searches in the whole collection. Optionally, you can pass in _startFrom_ the index of element from which to start the search.

- If _startFrom_ >= the collection's length, -1 is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_).
  **Note**: Even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

#### Exemple

Vous souhaitez trouver la position du premier nom de ville dans la collection :

```4d
var $c : Collection
var $val2;$val3 : Integer
$c:=New collection
$c.push(New object("name";"Cleveland";"zc";35049))
$c.push(New object("name";"Blountsville";"zc";35031))
$c.push(New object("name";"Adger";"zc";35006))
$c.push(New object("name";"Clanton";"zc";35046))
$c.push(New object("name";"Clanton";"zc";35045))
$val2:=$c.findIndex(Formula($1.value.name=$2);"Clanton") // $val2=3
$val3:=$c.findIndex($val2+1;Formula($1.value.name=$2);"Clanton") //$val3=4
```

<!-- END REF -->

<!-- REF collection.first().Desc -->

## .first()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>

<!-- REF #collection.first().Syntax -->**.first**() : any <!-- END REF -->

<!-- REF #collection.first().Params -->

| Paramètres | Type |     | Description                   |
| ---------- | ---- | :-: | ----------------------------- |
| Résultat   | any  |  <- | Premier élément de collection |

<!-- END REF -->

#### Description

The `.first()` function <!-- REF #collection.first().Summary -->returns the first element of the collection<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

La fonction renvoie Undefined si la collection est vide.

#### Exemple

```4d
var $col; $emptyCol : Collection
var $first : Variant
$col:=New collection(10; 20; 30; "hello"; 50)
$first:=$col.first() // 10

$emptyCol:=New collection() //vide
// $first:=$emptyCol[0] //retournerait une erreur
$first:=$emptyCol.first() // retourne Undefined
```

<!-- END REF -->

<!-- REF collection.flat().Desc -->

## .flat()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>

<!-- REF #collection.flat().Syntax -->**.flat**( { *depth* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.flat().Params -->

| Paramètres | Type       |     | Description                                                                                                        |
| ---------- | ---------- | :-: | ------------------------------------------------------------------------------------------------------------------ |
| depth      | Integer    |  -> | La profondeur à laquelle une structure de collection imbriquée doit être mise à plat. Par défaut=1 |
| Résultat   | Collection |  <- | Collection mise à plat                                                                                             |

<!-- END REF -->

#### Description

The `.flat()` function <!-- REF #collection.flat().Summary -->creates a new collection with all sub-collection elements concatenated into it recursively up to the specified _depth_<!-- END REF -->.

By default, if the _depth_ parameter is omitted, only the first level of the nested collection structure will be flattened.

> Cette fonction ne modifie pas la collection d'origine.

#### Exemple

```4d
$col:=New collection(1; 2; New collection(3; 4))
$col.flat()
// [1, 2, 3, 4]

$col:=New collection(1; 2; New collection(3; 4; New collection(5; 6)))
$col.flat()
// [1, 2, 3, 4, [5, 6]]

$col:=New collection(1; 2; New collection(3; 4; New collection(5; 6)))
$col.flat(2)
// [1, 2, 3, 4, 5, 6]

$col:=New collection(1; 2; New collection(3; 4; 5; 6; New collection(7; 8; New collection(9; 10))))
$col.flat(MAXLONG)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

<!-- END REF -->

<!-- REF collection.flatMap().Desc -->

## .flatMap()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>

<!-- REF #collection.flatMap().Syntax -->**.flatMap**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.flatMap**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.flatMap().Params -->

| Paramètres | Type                        |     | Description                                                                |
| ---------- | --------------------------- | :-: | -------------------------------------------------------------------------- |
| formula    | 4D.Function |  -> | Objet formule                                                              |
| methodName | Text                        |  -> | Nom de méthode                                                             |
| param      | any                         |  -> | Parameter(s) to pass to _formula_ or _methodName_       |
| Résultat   | Collection                  |  <- | Collection de valeurs transformées et mises à plat sur une profondeur de 1 |

<!-- END REF -->

#### Description

The `.flatMap()` function <!-- REF #collection.flatMap().Summary -->creates a new collection based upon the result of the call of the _formula_ 4D function or _methodName_ method on each element of the original collection and flattened by a depth of 1<!-- END REF -->. Optionally, you can pass parameters to _formula_ or _methodName_ using the _param_ parameter(s).

This function is identical to a [`map()`](#map) call followed by a [`flat()`](#flat) call of depth 1.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). La callback peut effectuer n'importe quelle opération, avec ou sans le(s) paramètre(s), et doit renvoyer une nouvelle valeur transformée à ajouter à la collection résultante. It receives an `Object` in first parameter ($1).

La callback reçoit les paramètres suivants :

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

Elle peut définir le(s) paramètre(s) suivant(s) :

- (mandatory if you used a method) _$1.result_ (any type): new transformed value to add to the resulting collection
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. La valeur retournée est la dernière calculée.

#### Exemple 1

```4d
var $col ; $result : Collection
$col:=New collection(1; 2; 3; 4)

$result:=$col.map(Formula(New collection($1.value*2))
 // [[2],[4],[6],[8]]

$result:=$col.flatMap(Formula(New collection($1.value*2))
// [2,4,6,8]
```

#### Exemple 2

```
var $col; $result : Collection
$col:=New collection("Hello how"; ""; "are you ?")

$result:=$col.map(Formula(Split string($1.value; " ")))
// [["Hello", "how"], [], ["are", "you", "?"]]

$result:=$col.flatMap(Formula(Split string($1.value; " ")))
// ["Hello", "how", "are", "you", "?"]
```

#### Exemple 3

Vous souhaitez calculer le pourcentage de chaque valeur de la collection par rapport au total :

```4d
var $c; $c2 : Collection
var $f : 4D.Function
$c:=New collection(1; 4; 9; 10; 20)
$f:=Formula(New collection($1.value;Round(($1.value/$2)*100; 2)))
$c2:=$c.flatMap($f; $c.sum())
  //$c2=[1, 2.27, 4, 9.09,9, 20.45,10, 22.73, 20, 45.45]
```

<!-- END REF -->

<!-- REF collection.includes().Desc -->

## .includes()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>

<!-- REF #collection.includes().Syntax -->**.includes**( *toSearch* : expression { ; *startFrom* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #collection.includes().Params -->

| Paramètres | Type       |     | Description                                   |
| ---------- | ---------- | :-: | --------------------------------------------- |
| toSearch   | expression |  -> | Expression à rechercher dans la collection    |
| startFrom  | Integer    |  -> | Elément à partir duquel débuter la recherche  |
| Résultat   | Boolean    |  <- | True if _toSearch_ is found in the collection |

<!-- END REF -->

#### Description

The `.includes()` function <!-- REF #collection.includes().Summary -->returns True if the _toSearch_ expression is found among collection elements, otherwise False<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

In _toSearch_, pass the expression to find in the collection. Vous pouvez passer :

- une valeur scalaire (texte, numérique, booléen, date),
- la valeur null,
- une référence d'objet ou de collection.

_toSearch_ must match exactly the element to find (the same rules as for the equality operator of the data type are applied).

Optionally, you can pass the index of collection from which to start the search in _startFrom_.

- If _startFrom_ >= collection's length, False is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_). Note that even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

#### Exemple

```4d
 var $col : Collection
 var $in : Boolean
 var $obj : Object
 $obj:=New object("value"; 10)
 $col:=New collection(1;2;"Henry";5;3;"Albert";6;4;"Alan";5;$obj)
 $in:=$col.includes(3) //True
 $in:=$col.includes(5;6) //True
 $in:=$col.includes("al@") //True
 $in:=$col.includes("Hello") //False
 $in:=$col.includes($obj)  //True
 $in:=$col.includes(New object("value"; 10)) //False
```

<!-- END REF -->

<!-- REF collection.indexOf().Desc -->

## .indexOf()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.indexOf().Syntax -->**.indexOf**(  *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.indexOf().Params -->

| Paramètres | Type       |     | Description                                                                        |
| ---------- | ---------- | :-: | ---------------------------------------------------------------------------------- |
| toSearch   | expression |  -> | Expression à rechercher dans la collection                                         |
| startFrom  | Integer    |  -> | Elément à partir duquel débuter la recherche                                       |
| Résultat   | Integer    |  <- | Numéro de la première occurrence de toSearch dans la collection, -1 si non trouvée |

<!-- END REF -->

#### Description

The `.indexOf()` function <!-- REF #collection.indexOf().Summary -->searches the _toSearch_ expression among collection elements and returns the index of the first found occurrence, or -1 if it was not found<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

In _toSearch_, pass the expression to find in the collection. Vous pouvez passer :

- une valeur scalaire (texte, numérique, booléen, date),
- la valeur null,
- une référence d'objet ou de collection.

_toSearch_ must match exactly the element to find (the same rules as for the equality operator of the data type are applied).

Optionally, you can pass the index of collection from which to start the search in _startFrom_.

- If _startFrom_ >= the collection's length, -1 is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_).
  **Note**: Even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

#### Exemple

```4d
 var $col : Collection
 var $i : Integer
 $col:=New collection(1;2;"Henry";5;3;"Albert";6;4;"Alan";5)
 $i:=$col.indexOf(3) //$i=4
 $i:=$col.indexOf(5;5) //$i=9
 $i:=$col.indexOf("al@") //$i=5
 $i:=$col.indexOf("Hello") //$i=-1
```

<!-- END REF -->

<!-- REF collection.indices().Desc -->

## .indices()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.indices().Syntax -->**.indices**(  *queryString* : Text { ; *...value* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.indices().Params -->

| Paramètres  | Type       |     | Description                                                                                                                                                 |
| ----------- | ---------- | :-: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| queryString | Text       |  -> | Critère(s) de recherche                                                                                                                  |
| value       | any        |  -> | Valeur(s) à comparer lors de l'utilisation de paramètre(s) dans la chaîne                                             |
| Résultat    | Collection |  <- | Numéro(s) d'élément(s) de la collection répondant au(x) critère(s) de recherche |

<!-- END REF -->

#### Description

The `.indices()` function works exactly the same as the [`.query()`](#query) function but <!-- REF #collection.indices().Summary -->returns indexes, in the original collection, of object collection elements that match the _queryString_ search conditions<!-- END REF -->, and not elements themselves. Les positions sont retournées dans un ordre croissant.

> Cette fonction ne modifie pas la collection d'origine.

The _queryString_ parameter uses the following syntax:

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

For a detailed description of the _queryString_ and _value_ parameters, please refer to the `dataClass.query()` function.

#### Exemple

```4d
 var $c; $icol : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))

 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $icol:=$c.indices("name = :1";"Cleveland") // $icol=[0]
 $icol:=$c.indices("zc > 35040") // $icol=[0,3,4]
```

<!-- END REF -->

<!-- REF collection.insert().Desc -->

## .insert()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.insert().Syntax -->**.insert**( *index* : Integer ; *element* : any ) : Collection <!-- END REF -->

<!-- REF #collection.insert().Params -->

| Paramètres | Type       |     | Description                                    |
| ---------- | ---------- | :-: | ---------------------------------------------- |
| index      | Integer    |  -> | Où insérer l'élément                           |
| element    | any        |  -> | Elément à insérer dans la collection           |
| Résultat   | Collection |  <- | Collection d'origine incluant l'élément inséré |

<!-- END REF -->

#### Description

The `.insert()` function <!-- REF #collection.insert().Summary --> inserts _element_ at the specified _index_ position in the collection instance and returns the edited collection<!-- END REF -->.

> Cette fonction modifie la collection d'origine.

In _index_, pass the position where you want the element to be inserted in the collection.

> **Warning**: Keep in mind that collection elements are numbered from 0.

- If _index_ > the length of the collection, actual starting index will be set to the length of the collection.
- If _index_ <0, it is recalculated as _index:=index+length_ (it is considered as the offset from the end of the collection).
- Si la valeur recalculée est négative, index prend la valeur 0.

Vous pouvez passer tout type d'élément accepté par les collections, y compris une autre collection.

#### Exemple

```4d
 var $col : Collection
 $col:=New collection("a";"b";"c";"d") //$col=["a","b","c","d"]
 $col.insert(2;"X") //$col=["a","b","X","c","d"]
 $col.insert(-2;"Y") //$col=["a","b","X","Y","c","d"]
 $col.insert(-10;"Hi") //$col=["Hi","a","b","X","Y","c","d"]
```

<!-- END REF -->

<!-- REF collection.join().Desc -->

## .join()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.join().Syntax -->**.join**( *delimiter* : Text { ; *option* : Integer } ) : Text <!-- END REF -->

<!-- REF #collection.join().Params -->

| Paramètres | Type    |     | Description                                                                            |
| ---------- | ------- | :-: | -------------------------------------------------------------------------------------- |
| delimiter  | Text    |  -> | Séparateur à utiliser entre les éléments                                               |
| option     | Integer |  -> | `ck ignore null or empty`: ignore null and empty strings in the result |
| Résultat   | Text    |  <- | Chaîne contenant tous les éléments de la collection, séparés par delimiter             |

<!-- END REF -->

#### Description

The `.join()` function <!-- REF #collection.join().Summary -->converts all elements of the collection to strings and concatenates them using the specified _delimiter_ string as separator<!-- END REF -->.The function returns the resulting string.

> Cette fonction ne modifie pas la collection d'origine.

Par défaut, les éléments null ou vides de la collection sont inclus dans la chaîne résultante. Pass the `ck ignore null or empty` constant in the _option_ parameter if you want to remove them from the resulting string.

#### Exemple

```4d
 var $c : Collection
 var $t1;$t2 : Text
 $c:=New collection(1;2;3;"Paris";Null;"";4;5)
 $t1:=$c.join("|") //1|2|3|Paris|null||4|5
 $t2:=$c.join("|";ck ignore null or empty) //1|2|3|Paris|4|5
```

<!-- END REF -->

<!-- REF collection.last().Desc -->

## .last()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>

<!-- REF #collection.last().Syntax -->**.last**() : any <!-- END REF -->

<!-- REF #collection.last().Params -->

| Paramètres | Type |     | Description                   |
| ---------- | ---- | :-: | ----------------------------- |
| Résultat   | any  |  <- | Dernier élément de collection |

<!-- END REF -->

#### Description

The `.last()` function <!-- REF #collection.last().Summary -->returns the last element of the collection<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

La fonction renvoie Undefined si la collection est vide.

#### Exemple

```4d
var $col; $emptyCol : Collection
var $last : Variant
$col:=New collection(10; 20; 30; "hello"; 50)
$last:=$col.last() // 50

$emptyCol:=New collection() //empty
// $last:=$emptyCol[$emptyCol.length-1] //returns an error
$last:=$emptyCol.last() // returns Undefined

```

<!-- END REF -->

<!-- REF collection.lastIndexOf().Desc -->

## .lastIndexOf()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.lastIndexOf().Syntax -->**.lastIndexOf**( *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.lastIndexOf().Params -->

| Paramètres | Type       |     | Description                                                                       |
| ---------- | ---------- | :-: | --------------------------------------------------------------------------------- |
| toSearch   | expression |  -> | Elément à chercher dans la collection                                             |
| startFrom  | Integer    |  -> | Elément à partir duquel débuter la recherche                                      |
| Résultat   | Integer    |  <- | Numéro de la dernière occurrence de toSearch dans la collection, -1 si non trouvé |

<!-- END REF -->

#### Description

The `.lastIndexOf()` function <!-- REF #collection.lastIndexOf().Summary -->searches the _toSearch_ expression among collection elements and returns the index of the last occurrence<!-- END REF -->, or -1 if it was not found.

> Cette fonction ne modifie pas la collection d'origine.

In _toSearch_, pass the expression to find in the collection. Vous pouvez passer :

- une valeur scalaire (texte, numérique, booléen, date),
- la valeur null,
- une référence d'objet ou de collection.

_toSearch_ must match exactly the element to find (the same rules as for the equality operator are applied).

Optionally, you can pass the index of collection from which to start a reverse search in _startFrom_.

- If _startFrom_ >= the collection's length minus one (coll.length-1), the whole collection is searched (default).
- If _startFrom_ < 0, it is recalculated as _startFrom:=startFrom+length_ (it is considered as the offset from the end of the collection). Si la position calculée est négative, -1 est retourné (la collection n'est pas évaluée).
  **Note:** Even if _startFrom_ is negative, the collection is still searched from right to left.
- If _startFrom_ = 0, -1 is returned, which means the collection is not searched.

#### Exemple

```4d
 var $col : Collection
 var $pos1;$pos2;$pos3;$pos4;$pos5 : Integer
 $col:=Split string("a,b,c,d,e,f,g,h,i,j,e,k,e";",") //$col.length=13
 $pos1:=$col.lastIndexOf("e") //retourne 12
 $pos2:=$col.lastIndexOf("e";6) //retourne 4
 $pos3:=$col.lastIndexOf("e";15) //retourne 12
 $pos4:=$col.lastIndexOf("e";-2) //retourne 10
 $pos5:=$col.lastIndexOf("x") //retourne -1
```

<!-- END REF -->

<!-- REF collection.length.Desc -->

## .length

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R5  | Ajout         |

</details>

<!-- REF #collection.length.Syntax -->**.length** : Integer<!-- END REF -->

#### Description

The `.length` property <!-- REF #collection.length.Summary -->returns the number of elements in the collection<!-- END REF -->.

The `.length` property is initialized when the collection is created. Elle est automatiquement mise à jour en cas d'ajout ou de suppression d'éléments. This property is **read-only** (you cannot use it to set the size of the collection).

#### Exemple

```4d
 var $col : Collection //$col.length est initialisée à 0
 $col:=New collection("one";"two";"three") //$col.length est mise à jour et vaut 3
 $col[4]:="five" //$col.length vaut 5
 $vSize:=$col.remove(0;3).length //$vSize=2
```

<!-- END REF -->

<!-- REF collection.map().Desc -->

## .map()

<details><summary>Historique</summary>

| Release | Modifications                |
| ------- | ---------------------------- |
| 19 R6   | Prise en charge des formules |
| v16 R6  | Ajout                        |

</details>

<!-- REF #collection.map().Syntax -->**.map**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.map**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.map().Params -->

| Paramètres | Type                        |     | Description                                                          |
| ---------- | --------------------------- | :-: | -------------------------------------------------------------------- |
| formula    | 4D.Function |  -> | Objet formule                                                        |
| methodName | Text                        |  -> | Nom de méthode                                                       |
| param      | any                         |  -> | Parameter(s) to pass to _formula_ or _methodName_ |
| Résultat   | Collection                  |  <- | Collection de valeurs transformées                                   |

<!-- END REF -->

#### Description

The `.map()` function <!-- REF #collection.map().Summary -->creates a new collection based upon the result of the call of the _formula_ 4D function or _methodName_ method on each element of the original collection<!-- END REF -->. Optionally, you can pass parameters to _formula_ or _methodName_ using the _param_ parameter(s). `.map()` always returns a collection with the same size as the original collection, except if _$1.stop_ was used (see below).

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). La callback peut effectuer n'importe quelle opération, avec ou sans le(s) paramètre(s), et doit renvoyer une nouvelle valeur transformée à ajouter à la collection résultante. It receives an `Object` in first parameter ($1).

La callback reçoit les paramètres suivants :

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

Elle peut définir le(s) paramètre(s) suivant(s) :

- (mandatory if you used a method) _$1.result_ (any type): new transformed value to add to the resulting collection
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. La valeur retournée est la dernière calculée.

#### Exemple

```4d
var $c; $c2 : Collection
$c:=New collection(1; 4; 9; 10; 20)
$c2:=$c.map(Formula(Round(($1.value/$2)*100; 2)); $c.sum())
  //$c2=[2.27,9.09,20.45,22.73,45.45]
```

<!-- END REF -->

<!-- REF collection.max().Desc -->

## .max()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.max().Syntax -->**.max**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.max().Params -->

| Paramètres   | Type                                            |     | Description                                                     |
| ------------ | ----------------------------------------------- | :-: | --------------------------------------------------------------- |
| propertyPath | Text                                            |  -> | Chemin de propriété d'objet à utiliser pour évaluer les valeurs |
| Résultat     | Boolean, Text, Number, Collection, Object, Date |  <- | Valeur maximum de la collection                                 |

<!-- END REF -->

#### Description

The `.max()` function <!-- REF #collection.max().Summary -->returns the element with the highest value in the collection<!-- END REF --> (the last element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).

> Cette fonction ne modifie pas la collection d'origine.

If the collection contains different types of values, the `.max()` function will return the maximum value within the last element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property whose maximum value you want to get.

If the collection is empty, `.max()` returns _Undefined_.

#### Exemple

```4d
 var $col : Collection
 $col:=New collection(200;150;55)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Alabama";"salary";10500))
 $max:=$col.max() //{name:Alabama,salary:10500}
 $maxSal:=$col.max("salary") //50000
 $maxName:=$col.max("name") //"Wesson"
```

<!-- END REF -->

<!-- REF collection.min().Desc -->

## .min()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.min().Syntax -->**.min**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.min().Params -->

| Paramètres   | Type                                            |     | Description                                                     |
| ------------ | ----------------------------------------------- | :-: | --------------------------------------------------------------- |
| propertyPath | Text                                            |  -> | Chemin de propriété d'objet à utiliser pour évaluer les valeurs |
| Résultat     | Boolean, Text, Number, Collection, Object, Date |  <- | Valeur minimum de la collection                                 |

<!-- END REF -->

#### Description

The `.min()` function <!-- REF #collection.min().Summary -->returns the element with the smallest value in the collection<!-- END REF --> (the first element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).

> Cette fonction ne modifie pas la collection d'origine.

If the collection contains different types of values, the `.min()` function will return the minimum value within the first element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property whose minimum value you want to get.

If the collection is empty, `.min()` returns _Undefined_.

#### Exemple

```4d
 var $col : Collection
 $col:=New collection(200;150;55)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Alabama";"salary";10500))
 $min:=$col.min() //55
 $minSal:=$col.min("salary") //10000
 $minName:=$col.min("name") //"Alabama"
```

<!-- END REF -->

<!-- REF collection.multiSort().Desc -->

## .multiSort()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R3   | Ajout         |

</details>

<!-- REF #collection.multiSort().Syntax -->**.multiSort**() : Collection<br/>**.multiSort**( *colsToSort* : Collection ) : Collection<br/>**.multiSort**( *formula* : 4D.Function ; *colsToSort* : Collection ) : Collection<!-- END REF -->

<!-- REF #collection.multiSort().Params -->

| Paramètres | Type                        |     | Description                                                                                                                                                   |
| ---------- | --------------------------- | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D.Function |  -> | Objet formule                                                                                                                                                 |
| colsToSort | Collection                  |  -> | Collection of collections and/or objects with {`collection`:_colToSort_;`order`:`ck ascending` or `ck descending`} properties |
| Résultat   | Collection                  |  <- | Collection d'origine triée                                                                                                                                    |

<!-- END REF -->

#### Description

The `.multiSort()` function <!-- REF #collection.multiSort().Summary -->enables you to carry out a multi-level synchronized sort on a set of collections<!-- END REF -->.

> This function modifies the original collection as well as all collections used in _colsToSort_ parameter.

If `.multiSort()` is called with no parameters, the function has the same effect as the [`.sort()`](#sort) function: the collection is sorted (only scalar values) in ascending order by default, according to their type. Si la collection contient des éléments de différents types, ils sont d'abord groupés par type et triés par la suite. Les types sont renvoyés dans l'ordre suivant :

1. Null
2. booléens
3. chaînes
4. nombres
5. objets
6. collections
7. dates

**Tri synchronisé à un niveau**

To sort several collections synchronously, just pass in _colsToSort_ a collection of collections to sort. Vous pouvez passer un nombre illimité de collections. The original collection will be sorted in ascending order and all _colsToSort_ collections will be sorted in a synchronized manner.

:::note

All _colsToSort_ collections must have the same number of elements, otherwise an error is returned.

:::

If you want to sort the collections in some other order than ascending, you must supply a _formula_ ([Formula object](FunctionClass.md#formula) that defines the sort order. The return value should be a boolean that indicates the relative order of the two elements: **True** if _$1.value_ is less than _$1.value2_, **False** if _$1.value_ is greater than _$1.value2_. Vous pouvez passer des paramètres supplémentaires à la formule si nécessaire.

La formule reçoit les paramètres suivants :

- $1 (object), où :
  - _$1.value_ (any type): first element value to be compared
  - _$1.value2_ (any type): second element value to be compared
- $2...$N (tout type) : paramètres supplémentaires (extraParam)

**Tri synchronisé à plusieurs niveaux**

Defining a multi-level synchronized sort requires that you pass an object containing {`collection`:_colToSort_;`order`:`ck ascending` or `ck descending`} properties instead of the _colToSort_ itself for every collection to use as sub-level.

The sort levels are determined by the order in which the collections are passed in the _colsToSort_ parameter: the position of a `collection`/`order` object in the syntax determines its sort level.

:::note

The `.multiSort()` function uses a [stable](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability) sort algorithm.

:::

#### Exemple 1

Un simple tri synchronisé de collections avec différents types de valeurs :

```4d
var $col;$col2;$col3 : Collection
$col:=["A"; "C"; "B"]
$col2:=[1; 2; 3]
$col3:=[["Jim"; "Philip"; "Maria"]; ["blue"; "green"]; ["11"; 22; "33"]]

$col.multiSort([$col2; $col3])
//$col=["A","B","C"]
//$col2=[1,3,2]
//$col3[0]=["Jim","Philip","Maria"]
//$col3[1]=["11",22,"33"]
//$col3[2]=["blue","green"]

```

#### Exemple 2

Vous souhaitez trier trois collections synchronisées : ville, pays et continent. Vous souhaitez un tri croissant des première et troisième collections, et une synchronisation pour la deuxième collection :

```4d
var $city : Collection
var $country : Collection
var $continent : Collection

$city:=["Paris"; "Lyon"; "Rabat"; "Eching"; "San Diego"]
$country:=["France"; "France"; "Morocco"; "Germany"; "US"]
$continent:=["Europe"; "Europe"; "Africa"; "Europe"; "America"]

$continent.multiSort([$country; {collection: $city; order: ck ascending}])
//$continent=["Africa","America","Europe","Europe","Europe"]
//$country=["Morocco","US","France","France","Germany"]
//$city=["Rabat","San Diego","Lyon","Paris","Eching"]

```

#### Exemple 3

Vous pouvez également synchroniser des collections d'objets.

```4d
var $name : Collection
var $address : Collection
$name:=[]
$name.push({firstname: "John"; lastname: "Smith"})
$name.push({firstname: "Alain"; lastname: "Martin"})
$name.push({firstname: "Jane"; lastname: "Doe"})
$name.push({firstname: "John"; lastname: "Doe"})
$address:=[]
$address.push({city: "Paris"; country: "France"})
$address.push({city: "Lyon"; country: "France"})
$address.push({city: "Eching"; country: "Germany"})
$address.push({city: "Berlin"; country: "Germany"})

$name.multiSort(Formula($1.value.firstname<$1.value2.firstname); [$address])
//"Alain Martin","Jane Doe","John Smith","John Doe"
//"Lyon France","Eching Germany","Paris France","Berlin Germany"

```

<!-- END REF -->

<!-- REF collection.orderBy().Desc -->

## .orderBy()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.orderBy().Syntax -->**.orderBy**( ) : Collection<br/>**.orderBy**( *pathStrings* : Text ) : Collection<br/>**.orderBy**( *pathObjects* : Collection ) : Collection<br/>**.orderBy**( *ascOrDesc* : Integer ) : Collection <!-- END REF -->

<!-- REF #collection.orderBy().Params -->

| Paramètres  | Type       |     | Description                                                                                         |
| ----------- | ---------- | :-: | --------------------------------------------------------------------------------------------------- |
| pathStrings | Text       |  -> | Chemin(s) de propriété(s) à utiliser pour trier la collection |
| pathObjects | Collection |  -> | Collection d'objets critère                                                                         |
| ascOrDesc   | Integer    |  -> | `ck ascending` or `ck descending` (scalar values)                                |
| Résultat    | Collection |  <- | Copiée triée de la collection (shallow copy)                                     |

<!-- END REF -->

#### Description

The `.orderBy()` function <!-- REF #collection.orderBy().Summary -->returns a new collection containing all elements of the collection in the specified order<!-- END REF -->.

This function returns a _shallow copy_, which means that objects or collections in both collections share the same reference. Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

> Cette fonction ne modifie pas la collection d'origine.

Si vous ne passez aucun paramètre, la fonction classe les valeurs scalaires de la collection dans un ordre croissant (les autres types d'éléments tels que les objets ou les collections sont renvoyés avec un ordre interne). You can modify this automatic order by passing the `ck ascending` or `ck descending` constants in the _ascOrDesc_ parameter (see below).

Vous pouvez également passer des critères afin de configurer le tri des éléments de la collection. Trois syntaxes sont prises en charge pour ce paramètre :

- _pathStrings_ : Text (formula). **Syntax**: `propertyPath1 {desc or asc}, propertyPath2 {desc or asc},...` (default order: asc). _pathStrings_ contains a formula made of 1 to x property paths and (optionally) sort orders, separated by commas. L'ordre dans lequel les propriétés sont passées détermine la priorité de tri des éléments de la collection. Par défaut, les propriétés sont triées pas ordre croissant. Vous pouvez définir l'ordre de tri de chaque propriété dans la formule de critère, séparée du chemin de propriété par un simple espace : passez "asc" pour trier par ordre croissant ou "desc" pour un ordre décroissant.

- _pathObjects_ : Collection. You can add as many objects in the _pathObjects_ collection as necessary. Par défaut, les propriétés sont triées par ordre croissant ("descending" est faux). Chaque élément de la collection contient un objet structuré de la manière suivante :

```4d
{
    "propertyPath": string,
    "descending": boolean

}
```

- _ascOrDesc_ : Integer. You pass one of the following constants from the **Objects and collections** theme:

  | Constante     | Type    | Valeur | Commentaire                                                             |
  | ------------- | ------- | ------ | ----------------------------------------------------------------------- |
  | ck ascending  | Longint | 0      | Les éléments sont triés par ordre croissant (défaut) |
  | ck descending | Longint | 1      | Les éléments sont triés par ordre décroissant                           |

  Cette syntaxe trie uniquement les valeurs scalaires de la collection (les autres types d'éléments comme les objets ou les collections sont retournés non triés).

Si la collection contient des éléments de différents types, ils sont d'abord groupés par type et triés par la suite. Les types sont renvoyés dans l'ordre suivant :

1. Null
2. booléens
3. chaînes
4. nombres
5. objets
6. collections
7. dates

#### Exemple 1

Tri d'une collection de nombres par ordre croissant ou décroissant :

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(Random)
 End for
 $c2:=$c.orderBy(ck ascending)
 $c3:=$c.orderBy(ck descending)
```

#### Exemple 2

Tri d'une collection d'objets basé sur une formule de texte avec noms de propriétés :

```4d
 var $c; $c2 : Collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(New object("id";$vCounter;"value";Random))
 End for
 $c2:=$c.orderBy("value desc")
 $c2:=$c.orderBy("value desc, id")
 $c2:=$c.orderBy("value desc, id asc")
```

Tri d'une collection d'objets sur des propriétés :

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))

 $c2:=$c.orderBy("phones.p1 asc")
```

#### Exemple 3

Tri d'une collection d'objets via une collection d'objets critères :

```4d
 var $crit; $c; $c2 : COllection
 $crit:=New collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(New object("id";$vCounter;"value";Random))
 End for
 $crit.push(New object("propertyPath";"value";"descending";True))
 $crit.push(New object("propertyPath";"id";"descending";False))
 $c2:=$c.orderBy($crit)
```

Tri avec un chemin de propriété :

```4d

 var $crit; $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))
 $crit:=New collection(New object("propertyPath";"phones.p2";"descending";True))
 $c2:=$c.orderBy($crit)
```

<!-- END REF -->

<!-- REF collection.orderByMethod().Desc -->

## .orderByMethod()

<details><summary>Historique</summary>

| Release | Modifications                |
| ------- | ---------------------------- |
| 19 R6   | Prise en charge des formules |
| v16 R6  | Ajout                        |

</details>

<!-- REF #collection.orderByMethod().Syntax -->**.orderByMethod**( *formula* : 4D.Function { ; ...*extraParam* : expression } ) : Collection<br/>**.orderByMethod**( *methodName* : Text { ; ...*extraParam* : expression } ) : Collection<!-- END REF -->

<!-- REF #collection.orderByMethod().Params -->

| Paramètres | Type                        |     | Description                                                    |
| ---------- | --------------------------- | :-: | -------------------------------------------------------------- |
| formula    | 4D.Function |  -> | Objet formule                                                  |
| methodName | Text                        |  -> | Nom de méthode                                                 |
| extraParam | any                         |  -> | Paramètre(s) à passer                       |
| Résultat   | Collection                  |  <- | Copie triée de la collection (shallow copy) |

<!-- END REF -->

#### Description

The `.orderByMethod()` function <!-- REF #collection.orderByMethod().Summary -->returns a new collection containing all elements of the collection in the order defined through the _formula_ 4D function or _methodName_ method<!-- END REF -->.

This function returns a _shallow copy_, which means that objects or collections in both collections share the same reference. Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;

- or _methodName_, the name of a project method (text).

In the callback, pass some code that compares two values and returns **true** if the first value is lower than the second value. You can provide _extraParam_ parameters to the callback if necessary.

La callback reçoit les paramètres suivants :

- $1 (object), où :
  - _$1.value_ (any type): first element value to be compared
  - _$1.value2_ (any type): second element value to be compared
  - $2...$N (tout type) : paramètres supplémentaires (extraParam)

Si vous avez utilisé une méthode, elle doit définir le paramètre suivant :

- _$1.result_ (boolean): **true** if _$1.value < $1.value2_, **false** otherwise

#### Exemple 1

Vous souhaitez trier une collection de chaînes contenant des nombres par valeur plutôt que par ordre alphabétique :

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("33";"4";"1111";"222")
 $c2:=$c.orderBy() //$c2=["1111","222","33","4"], alphabetical order
 $c3:=$c.orderByMethod(Formula(Num($1.value)<Num($1.value2))) // $c3=["4","33","222","1111"]
```

#### Exemple 2

Vous souhaitez trier une collection de chaînes de caractères en fonction de leur longueur :

```4d
 var $fruits; $c2 : Collection
 $fruits:=New collection("Orange";"Apple";"Grape";"pear";"Banana";"fig";"Blackberry";"Passion fruit")
 $c2:=$fruits.orderByMethod(Formula(Length(String($1.value))>Length(String($1.value2))))
  //$c2=[Passion fruit,Blackberry,Orange,Banana,Apple,Grape,pear,fig]
```

#### Exemple 3

Vous souhaitez trier une collection par code de caractère ou par langage :

```4d
var $strings1; $strings2 : Collection
$strings1:=New collection("Alpha";"Charlie";"alpha";"bravo";"Bravo";"charlie")

//utilisation du code de caractère:
$strings2:=$strings1.orderByMethod(Function(sortCollection);sk character codes)
// result : ["Alpha","Bravo","Charlie","alpha","bravo","charlie"]

//utilisation du langage:
$strings2:=$strings1.orderByMethod(Function(sortCollection);sk strict)
// result : ["alpha","Alpha","bravo","Bravo","charlie","Charlie"]
```

The _**sortCollection**_ method:

```4d
var $1 : Object
var $2: Integer // sort option

$1.result:=(Compare strings($1.value;$1.value2;$2)<0)
```

<!-- END REF -->

<!-- REF collection.pop().Desc -->

## .pop()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.pop().Syntax -->**.pop()** : any <!-- END REF -->

<!-- REF #collection.pop().Params -->

| Paramètres | Type |     | Description                   |
| ---------- | ---- | :-: | ----------------------------- |
| Résultat   | any  |  <- | Dernier élément de collection |

<!-- END REF -->

#### Description

The `.pop()` function <!-- REF #collection.pop().Summary -->removes the last element from the collection and returns it as the function result<!-- END REF -->.

> Cette fonction modifie la collection d'origine.

When applied to an empty collection, `.pop()` returns _**undefined**_.

#### Exemple

`.pop()`, used in conjunction with [`.push()`](#push), can be used to implement a first-in, last-out stack feature:

```4d
 var $stack : Collection
 $stack:=New collection //$stack=[]
 $stack.push(1;2) //$stack=[1,2]
 $stack.pop() //$stack=[1]  Returns 2
 $stack.push(New collection(4;5)) //$stack=[[1,[4,5]]
 $stack.pop() //$stack=[1]  Returns [4,5]
 $stack.pop() //$stack=[]  Returns 1
```

<!-- END REF -->

<!-- REF collection.push().Desc -->

## .push()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.push().Syntax -->**.push**( *element* : any { ;...*elementN* } ) : Collection <!-- END REF -->

<!-- REF #collection.push().Params -->

| Paramètres | Type       |     | Description                                             |
| ---------- | ---------- | :-: | ------------------------------------------------------- |
| element    | Mixed      |  -> | Élément(s) à ajouter à la collection |
| Résultat   | Collection |  <- | Collection originale contenant des éléments ajoutés     |

<!-- END REF -->

#### Description

The `.push()` function <!-- REF #collection.push().Summary -->appends one or more _element_(s) to the end of the collection instance and returns the edited collection<!-- END REF -->.

> Cette fonction modifie la collection d'origine.

#### Exemple 1

```4d
 var $col : Collection
 $col:=New collection(1;2) //$col=[1,2]
 $col.push(3) //$col=[1,2,3]
 $col.push(6;New object("firstname";"John";"lastname";"Smith"))
  //$col=[1,2,3,6,{firstname:John,lastname:Smith}
```

#### Exemple 2

Vous souhaitez trier la collection obtenue :

```4d
 var $col; $sortedCol : Collection
 $col:=New collection(5;3;9) //$col=[5,3,9]
 $sortedCol:=$col.push(7;50).sort()
  //$col=[5,3,9,7,50]
  //$sortedCol=[3,5,7,9,50]
```

<!-- END REF -->

<!-- REF collection.query().Desc -->

## .query()

<details><summary>Historique</summary>

| Release | Modifications                    |
| ------- | -------------------------------- |
| 17 R5   | Prise en charge de querySettings |
| v16 R6  | Ajout                            |

</details>

<!-- REF #collection.query().Syntax -->**.query**( *queryString* : Text ; *...value* : any ) : Collection<br/>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->

<!-- REF #collection.query().Params -->

| Paramètres    | Type       |     | Description                                                                                                     |
| ------------- | ---------- | :-: | --------------------------------------------------------------------------------------------------------------- |
| queryString   | Text       |  -> | Critère(s) de recherche                                                                      |
| value         | Mixed      |  -> | Valeur(s) à comparer lors de l'utilisation de paramètre(s) dans la chaîne |
| querySettings | Object     |  -> | Options de requête : paramètres, attributs                                                      |
| Résultat      | Collection |  <- | Élément(s) correspondant à queryString dans la collection                                    |

<!-- END REF -->

#### Description

The `.query()` function <!-- REF #collection.query().Summary -->returns all elements of a collection of objects that match the search conditions <!-- END REF -->defined by _queryString_ and (optionally) _value_ or _querySettings_. Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

> Cette fonction ne modifie pas la collection d'origine.

The _queryString_ parameter uses the following syntax:

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

For detailed information on how to build a query using _queryString_, _value_ and _querySettings_ parameters, please refer to the [`dataClass.query()`](DataClassClass.md#query) function description.

> Formulas are not supported by the `collection.query()` function, neither in the _queryString_ parameter nor as _formula_ object parameter.

#### Exemple 1

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $c2:=$c.query("name = :1";"Cleveland") //$c2=[{name:Cleveland,zc:35049}]
 $c3:=$c.query("zc > 35040") //$c3=[{name:Cleveland,zc:35049},{name:Clanton,zc:35046},{name:Clanton,zc:35045}]
```

#### Exemple 2

```4d
 var $c : Collection
 $c:=New collection
 $c.push(New object("name";"Smith";"dateHired";!22-05-2002!;"age";45))
 $c.push(New object("name";"Wesson";"dateHired";!30-11-2017!))
 $c.push(New object("name";"Winch";"dateHired";!16-05-2018!;"age";36))

 $c.push(New object("name";"Sterling";"dateHired";!10-5-1999!;"age";Null))
 $c.push(New object("name";"Mark";"dateHired";!01-01-2002!))
```

Cet exemple renvoie les personnes dont le nom contient "in" :

```4d
 $col:=$c.query("name = :1";"@in@")
  //$col=[{name:Winch...},{name:Sterling...}]
```

Cet exemple retourne des personnes dont le nom ne commence pas par une chaine dont la valeur provient d'une variable (saisie par l'utilisateur, par exemple) :

```4d
 $col:=$c.query("name # :1";$aString+"@")
  //if $astring="W"
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}]
```

Cet exemple retourne des personnes dont l'âge n'est pas connu (propriété définie sur null ou indéfinie) :

```4d
 $col:=$c.query("age=null") //placeholders not allowed with "null"
  //$col=[{name:Wesson...},{name:Sterling...},{name:Mark...}]
```

Cet exemple retourne des personnes embauchées il y a plus de 90 jours :

```4d
 $col:=$c.query("dateHired < :1";(Current date-90))
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}] if today is 01/10/2018
```

#### Exemple 3

More examples of queries can be found in the `dataClass.query()` page.

<!-- END REF -->

<!-- REF collection.reduce().Desc -->

## .reduce()

<details><summary>Historique</summary>

| Release | Modifications                |
| ------- | ---------------------------- |
| 19 R6   | Prise en charge des formules |
| v16 R6  | Ajout                        |

</details>

<!-- REF #collection.reduce().Syntax -->**.reduce**( *formula* : 4D.Function { ; *initValue* : any { ; *...param* : expression }} ) : any<br/>**.reduce**( *methodName* : Text { ; *initValue* : any { ; *...param* : expression }} ) : any <!-- END REF -->

<!-- REF #collection.reduce().Params -->

| Paramètres | Type                                            |     | Description                                                                       |
| ---------- | ----------------------------------------------- | :-: | --------------------------------------------------------------------------------- |
| formula    | 4D.Function                     |  -> | Objet formule                                                                     |
| methodName | Text                                            |  -> | Nom de méthode                                                                    |
| initValue  | Text, Number, Object, Collection, Date, Boolean |  -> | Value to use as the first argument to the first call of _formula_ or _methodName_ |
| param      | expression                                      |  -> | Paramètre(s) à passer                                          |
| Résultat   | Text, Number, Object, Collection, Date, Boolean |  <- | Résultat de la valeur de l'accumulateur                                           |

<!-- END REF -->

#### Description

The `.reduce()` function <!-- REF #collection.reduce().Summary -->applies the _formula_ or _methodName_ callback against an accumulator and each element in the collection (from left to right) to reduce it to a single value<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback takes each collection element and performs any desired operation to accumulate the result into _$1.accumulator_, which is returned in _$1.value_.

You can pass the value to initialize the accumulator in _initValue_. If omitted, _$1.accumulator_ starts with _Undefined_.

La callback reçoit les paramètres suivants :

- in _$1.value_: element value to be processed
- in _$2: param_
- in _$N..._: _paramN..._

Elle peut définir le(s) paramètre(s) suivant(s) :

- _$1.accumulator_: value to be modified by the function and which is initialized by _initValue_.
- _$1.stop_ (boolean, optional): **true** to stop the method callback. La valeur retournée est la dernière calculée.

#### Exemple 1

```4d
var $c : Collection
$c:=New collection(5;3;5;1;3;4;4;6;2;2)
$r:=$c.reduce(Formula($1.accumulator*=$1.value); 1)  //retourne 86400
```

#### Exemple 2

Cet exemple permet de réduire plusieurs éléments de collection à un seul :

```4d
 var $c;$r : Collection
 $c:=New collection
 $c.push(New collection(0;1))
 $c.push(New collection(2;3))
 $c.push(New collection(4;5))
 $c.push(New collection(6;7))
 $r:=$c.reduce(Formula(Flatten)) //$r=[0,1,2,3,4,5,6,7]
```

With the following _**Flatten**_ method:

```4d
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
```

<!-- END REF -->

<!-- REF collection.reduceRight().Desc -->

## .reduceRight()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20      | Ajout         |

</details>

<!-- REF #collection.reduceRight().Syntax -->**.reduceRight**( *formula* : 4D.Function { ; *initValue* : any { ; *...param* : expression }} ) : any<br/>**.reduceRight**( *methodName* : Text { ; *initValue* : any { ; *...param* : expression }} ) : any <!-- END REF -->

<!-- REF #collection.reduceRight().Params -->

| Paramètres | Type                                            |     | Description                                                                       |
| ---------- | ----------------------------------------------- | :-: | --------------------------------------------------------------------------------- |
| formula    | 4D.Function                     |  -> | Objet formule                                                                     |
| methodName | Text                                            |  -> | Nom de méthode                                                                    |
| initValue  | Text, Number, Object, Collection, Date, Boolean |  -> | Value to use as the first argument to the first call of _formula_ or _methodName_ |
| param      | expression                                      |  -> | Paramètre(s) à passer                                          |
| Résultat   | Text, Number, Object, Collection, Date, Boolean |  <- | Résultat de la valeur de l'accumulateur                                           |

<!-- END REF -->

#### Description

The `.reduceRight()` function <!-- REF #collection.reduceRight().Summary -->applies the _formula_ or _methodName_ callback against an accumulator and each element in the collection (from right to left) to reduce it to a single value<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback takes each collection element and performs any desired operation to accumulate the result into _$1.accumulator_, which is returned in _$1.value_.

You can pass the value to initialize the accumulator in _initValue_. If omitted, _$1.accumulator_ starts with _Undefined_.

La callback reçoit les paramètres suivants :

- in _$1.value_: element value to be processed
- in _$2: param_
- in _$N..._: _paramN..._

Elle peut définir le(s) paramètre(s) suivant(s) :

- _$1.accumulator_: value to be modified by the function and which is initialized by _initValue_.
- _$1.stop_ (boolean, optional): **true** to stop the method callback. La valeur retournée est la dernière calculée.

#### Exemple 1

```4d
var $c : Collection
$c:=New collection(5;3;5;1;3;4;4;6;2;2)
$r:=$c.reduceRight(Formula($1.accumulator*=$1.value); 1)  //returns 86400

```

#### Exemple 2

Cet exemple permet de réduire plusieurs éléments de collection à un seul :

```4d
 var $c;$r : Collection
 $c:=New collection
 $c.push(New collection(0;1))
 $c.push(New collection(2;3))
 $c.push(New collection(4;5))
 $c.push(New collection(6;7))
 $r:=$c.reduceRight(Formula(Flatten)) //$r=[6,7,4,5,2,3,0,1]
```

With the following _**Flatten**_ method:

```4d
	//Flatten project method
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
```

<!-- END REF -->

<!-- REF collection.remove().Desc -->

## .remove()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.remove().Syntax -->**.remove**( *index* : Integer { ; *howMany* : Integer } ) : Collection <!-- END REF -->

<!-- REF #collection.remove().Params -->

| Paramètres | Type       |     | Description                                                                            |
| ---------- | ---------- | :-: | -------------------------------------------------------------------------------------- |
| index      | Integer    |  -> | Élément à partir duquel la suppression peut commencer                                  |
| howMany    | Integer    |  -> | Nombre d'éléments à supprimer, ou 1 élément si omis                                    |
| Résultat   | Collection |  <- | Collection d'origine sans élément(s) supprimé(s) |

<!-- END REF -->

#### Description

The `.remove()` function <!-- REF #collection.remove().Summary -->removes one or more element(s) from the specified _index_ position in the collection and returns the edited collection<!-- END REF -->.

> Cette fonction modifie la collection d'origine.

In _index_, pass the position where you want the element to be removed from the collection.

> **Warning**: Keep in mind that collection elements are numbered from 0. If _index_ is greater than the length of the collection, actual starting index will be set to the length of the collection.

- If _index_ < 0, it is recalculated as _index:=index+length_ (it is considered as the offset from the end of the collection).
- If the calculated value < 0, _index_ is set to 0.
- If the calculated value > the length of the collection, _index_ is set to the length.

In _howMany_, pass the number of elements to remove from _index_. If _howMany_ is not specified, then one element is removed.

Si vous essayez de supprimer un élément d'une collection vide, la méthode ne fait rien (aucune erreur n'est générée).

#### Exemple

```4d
 var $col : Collection
 $col:=New collection("a";"b";"c";"d";"e";"f";"g";"h")
 $col.remove(3) // $col=["a","b","c","e","f","g","h"]
 $col.remove(3;2) // $col=["a","b","c","g","h"]
 $col.remove(-8;1) // $col=["b","c","g","h"]
 $col.remove(-3;1) // $col=["b","g","h"]
```

<!-- END REF -->

<!-- REF collection.resize().Desc -->

## .resize()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.resize().Syntax -->**.resize**( *size* : Integer { ; *defaultValue* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.resize().Params -->

| Paramètres   | Type                                            |     | Description                                         |
| ------------ | ----------------------------------------------- | :-: | --------------------------------------------------- |
| size         | Integer                                         |  -> | Nouvelle taille de la collection                    |
| defaultValue | Number, Text, Object, Collection, Date, Boolean |  -> | Valeur par défaut pour remplir de nouveaux éléments |
| Résultat     | Collection                                      |  <- | Collection d'origine redimensionnée                 |

<!-- END REF -->

#### Description

The `.resize()` function <!-- REF #collection.resize().Summary -->sets the collection length to the specified new size and returns the resized collection<!-- END REF -->.

> Cette fonction modifie la collection d'origine.

- If _size_ < collection length, exceeding elements are removed from the collection.
- If _size_ > collection length, the collection length is increased to size.

By default, new elements are filled will **null** values. You can specify the value to fill in added elements using the _defaultValue_ parameter.

#### Exemple

```4d
 var $c : Collection
 $c:=New collection
 $c.resize(10) // $c=[null,null,null,null,null,null,null,null,null,null]

 $c:=New collection
 $c.resize(10;0) // $c=[0,0,0,0,0,0,0,0,0,0]

 $c:=New collection(1;2;3;4;5)
 $c.resize(10;New object("name";"X")) //$c=[1,2,3,4,5,{name:X},{name:X},{name:X},{name:X},{name:X}]

 $c:=New collection(1;2;3;4;5)
 $c.resize(2) //$c=[1,2]

```

<!-- END REF -->

<!-- REF collection.reverse().Desc -->

## .reverse()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.reverse().Syntax -->**.reverse( )** : Collection <!-- END REF -->

<!-- REF #collection.reverse().Params -->

| Paramètres | Type       |     | Description                     |
| ---------- | ---------- | :-: | ------------------------------- |
| Résultat   | Collection |  <- | Copie inversée de la collection |

<!-- END REF -->

#### Description

The `.reverse()` function <!-- REF #collection.reverse().Summary -->returns a deep copy of the collection with all its elements in reverse order<!-- END REF -->. Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

> Cette fonction ne modifie pas la collection d'origine.

#### Exemple

```4d
 var $c; $c2 : Collection
 $c:=New collection(1;3;5;2;4;6)
 $c2:=$c.reverse() //$c2=[6,4,2,5,3,1]
```

<!-- END REF -->

<!-- REF collection.shift().Desc -->

## .shift()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.shift().Syntax -->**.shift()** : any<!-- END REF -->

<!-- REF #collection.shift().Params -->

| Paramètres | Type |     | Description                   |
| ---------- | ---- | :-: | ----------------------------- |
| Résultat   | any  |  <- | Premier élément de collection |

<!-- END REF -->

#### Description

The `.shift()` function <!-- REF #collection.shift().Summary -->removes the first element of the collection and returns it as the function result<!-- END REF -->.

> Cette fonction modifie la collection d'origine.

Si la collection est vide, cette méthode ne fait rien.

#### Exemple

```4d
 var $c : Collection
 var $val : Variant
 $c:=New collection(1;2;4;5;6;7;8)
 $val:=$c.shift()
  // $val=1
  // $c=[2,4,5,6,7,8]
```

<!-- END REF -->

<!-- REF collection.slice().Desc -->

## .slice()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.slice().Syntax -->**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.slice().Params -->

| Paramètres | Type       |     | Description                                                                                  |
| ---------- | ---------- | :-: | -------------------------------------------------------------------------------------------- |
| startFrom  | Integer    |  -> | Numéro de l'élément de départ (inclus)                                    |
| end        | Integer    |  -> | Position de fin (non incluse)                                             |
| Résultat   | Collection |  <- | Nouvelle collection contenant des éléments scindées (copie superficielle) |

<!-- END REF -->

#### Description

The `.slice()` function <!-- REF #collection.slice().Summary -->returns a portion of a collection into a new collection<!-- END REF -->, selected from _startFrom_ index to _end_ index (end not included). This function returns a _shallow copy_ of the collection. Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

> Cette fonction ne modifie pas la collection d'origine.

The returned collection contains the element specified by _startFrom_ and all subsequent elements up to, but not including, the element specified by _end_. If only the _startFrom_ parameter is specified, the returned collection contains all elements from _startFrom_ to the last element of the original collection.

- If _startFrom_ < 0, it is recalculated as _startFrom:=startFrom+length_ (it is considered as the offset from the end of the collection).
- If the calculated value < 0, _startFrom_ is set to 0.
- If _end_ < 0 , it is recalculated as _end:=end+length_.
- If _end < startFrom_ (passed or calculated values), the method does nothing.

#### Exemple

```4d
 var $c; $nc : Collection
 $c:=New collection(1;2;3;4;5)
 $nc:=$c.slice(0;3) //$nc=[1,2,3]
 $nc:=$c.slice(3) //$nc=[4,5]
 $nc:=$c.slice(1;-1) //$nc=[2,3,4]
 $nc:=$c.slice(-3;-2) //$nc=[3]
```

<!-- END REF -->

<!-- REF collection.some().Desc -->

## .some()

<details><summary>Historique</summary>

| Release | Modifications                |
| ------- | ---------------------------- |
| 19 R6   | Prise en charge des formules |
| v16 R6  | Ajout                        |

</details>

<!-- REF #collection.some().Syntax -->**.some**( { *startFrom* : Integer ; } *formula* : 4D.Function { ; *...param* : any } ) : Boolean<br/>**.some**( { *startFrom* : Integer ; } *methodName* : Text { ; *...param* : any } ) : Boolean<!-- END REF -->

<!-- REF #collection.some().Params -->

| Paramètres | Type                        |     | Description                                  |
| ---------- | --------------------------- | :-: | -------------------------------------------- |
| startFrom  | Integer                     |  -> | Elément à partir duquel débuter l'évaluation |
| formula    | 4D.Function |  -> | Objet formule                                |
| methodName | Text                        |  -> | Nom de méthode                               |
| param      | Mixed                       |  -> | Paramètre(s) à passer     |
| Résultat   | Boolean                     |  <- | Vrai si au moins un élément a réussi le test |

<!-- END REF -->

#### Description

The `.some()` function <!-- REF #collection.some().Summary -->returns true if at least one element in the collection successfully passed a test implemented in the provided _formula_ or _methodName_ code<!-- END REF -->.

Vous désignez le code 4D de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for every element fulfilling the test. It receives an `Object` in first parameter ($1).

La callback reçoit les paramètres suivants :

- in _$1.value_: element value to be processed
- in _$2: param_
- in _$N..._: _paramN..._

Elle peut définir le(s) paramètre(s) suivant(s) :

- (mandatory if you used a method) _$1.result_ (boolean): **true** if the element value evaluation is successful, **false** otherwise.
- _$1.stop_ (boolean, optional): **true** to stop the method callback. La valeur retournée est la dernière calculée.

In any case, at the point where `.some()` function encounters the first collection element returning true, it stops calling the callback and returns **true**.

By default, `.some()` tests the whole collection. Optionally, you can pass the index of an element from which to start the test in _startFrom_.

- If _startFrom_ >= the collection's length, **False** is returned, which means the collection is not tested.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection.
- If _startFrom_ = 0, the whole collection is searched (default).

#### Exemple

You want to know if at least one collection value is >0.

```4d
 var $c : Collection
 var $b : Boolean
 $c:=New collection
 $c.push(-5;-3;-1;-4;-6;-2)
 $b:=$c.some(Formula($1.value>0)) // $b=false
 $c.push(1)
 $b:=$c.some(Formula($1.value>0)) // $b=true

 $c:=New collection
 $c.push(1;-5;-3;-1;-4;-6;-2)
 $b:=$c.some(Formula($1.value>0)) //$b=true
 $b:=$c.some(1;Formula($1.value>0)) //$b=false
```

<!-- END REF -->

<!-- REF collection.sort().Desc -->

## .sort()

<details><summary>Historique</summary>

| Release | Modifications                |
| ------- | ---------------------------- |
| 19 R6   | Prise en charge des formules |
| v16 R6  | Ajout                        |

</details>

<!-- REF #collection.sort().Syntax -->**.sort**() : Collection<br/>**.sort**( *formula* : 4D.Function { ; *...extraParam* : any } ) : Collection<br/>**.sort**( *methodName* : Text { ; *...extraParam* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.sort().Params -->

| Paramètres | Type                        |     | Description                                           |
| ---------- | --------------------------- | :-: | ----------------------------------------------------- |
| formula    | 4D.Function |  -> | Objet formule                                         |
| methodName | Text                        |  -> | Nom de méthode                                        |
| extraParam | any                         |  -> | Paramètre(s) à passer à la méthode |
| Résultat   | Collection                  |  <- | Collection d'origine triée                            |

<!-- END REF -->

#### Description

The `.sort()` function <!-- REF #collection.sort().Summary -->sorts the elements of the original collection and also returns the sorted collection<!-- END REF --> .

> Cette fonction modifie la collection d'origine.

If `.sort()` is called with no parameters, only scalar values (number, text, date, booleans) are sorted. Les éléments sont triés par défaut par ordre croissant, en fonction de leur type. Si la collection contient des éléments de différents types, ils sont d'abord groupés par type et triés par la suite. Les types sont renvoyés dans l'ordre suivant :

1. Null
2. booléens
3. chaînes
4. nombres
5. objets
6. collections
7. dates

If you want to sort the collection elements in some other order or sort any type of element, you must supply in _formula_ ([Formula object](FunctionClass.md)) or _methodName_ (Text) a callback that defines the sort order. The return value should be a boolean that indicates the relative order of the two elements: **True** if _$1.value_ is less than _$1.value2_, **False** if _$1.value_ is greater than _$1.value2_. Vous pouvez fournir des paramètres supplémentaires à la callback si nécessaire.

La callback reçoit les paramètres suivants :

- $1 (object), où :
  - _$1.value_ (any type): first element value to be compared
  - _$1.value2_ (any type): second element value to be compared
- $2...$N (tout type) : paramètres supplémentaires (extraParam)

Si vous avez utilisé une méthode, elle doit définir le paramètre suivant :

- _$1.result_ (boolean): **true** if _$1.value < $1.value2_, **false** otherwise.

#### Exemple 1

```4d
 var $col; $col2 : Collection
 $col:=New collection("Tom";5;"Mary";3;"Henry";1;"Jane";4;"Artie";6;"Chip";2)
 $col2:=$col.sort() // $col2=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
  // $col=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
```

#### Exemple 2

```4d
 var $col; $col2 : Collection
 $col:=New collection(10;20)
 $col2:=$col.push(5;3;1;4;6;2).sort() //$col2=[1,2,3,4,5,6,10,20]
```

#### Exemple 3

```4d
var $col; $col2; $col3 : Collection
$col:=New collection(33;4;66;1111;222)
$col2:=$col.sort() //numerical sort: [4,33,66,222,1111]
$col3:=$col.sort(Formula(String($1.value)<String($1.value2))) //alphabetical sort: [1111,222,33,4,66]
```

<!-- END REF -->

<!-- REF collection.sum().Desc -->

## .sum()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.sum().Syntax -->**.sum**( { *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.sum().Params -->

| Paramètres   | Type |     | Description                                                     |
| ------------ | ---- | :-: | --------------------------------------------------------------- |
| propertyPath | Text |  -> | Chemin de propriété d'objet à utiliser pour évaluer les valeurs |
| Résultat     | Real |  <- | Somme des valeurs de collection                                 |

<!-- END REF -->

#### Description

The `.sum()` function <!-- REF #collection.sum().Summary -->returns the sum for all values in the collection instance<!-- END REF -->.

Seuls les éléments ayant une valeur numérique sont pris en compte pour le calcul (les autres types d'éléments sont ignorés).

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property to take into account.

`.sum()` returns 0 if:

- la collection est vide,
- la collection ne contient pas d'éléments numériques,
- _propertyPath_ is not found in the collection.

#### Exemple 1

```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection(10;20;"Monday";True;2)
 $vSum:=$col.sum() //32
```

#### Exemple 2

```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500,5))
 $vSum:=$col.sum("salary") //$vSum=70500,5
```

<!-- END REF -->

<!-- REF collection.unshift().Desc -->

## .unshift()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #collection.unshift().Syntax -->**.unshift**( *value* : any { ;...*valueN* : any } ) : Collection<!-- END REF -->

<!-- REF #collection.unshift().Params -->

| Paramètres | Type                                   |     | Description                                                      |
| ---------- | -------------------------------------- | :-: | ---------------------------------------------------------------- |
| value      | Text, Number, Object, Collection, Date |  -> | Valeur(s) à insérer au début de la collection |
| Résultat   | Real                                   |  <- | Collection contenant des éléments ajoutés                        |
|            |                                        |     |                                                                  |

<!-- END REF -->

#### Description

The `.unshift()` function <!-- REF #collection.unshift().Summary -->inserts the given _value_(s) at the beginning of the collection <!-- END REF -->and returns the modified collection.

> Cette fonction modifie la collection d'origine.

Si plusieurs valeurs sont passées, elles sont insérées toutes en même temps, ce qui signifie qu'elles apparaissent dans la collection résultante dans le même ordre que dans la liste d'arguments.

#### Exemple

```4d
 var $c : Collection
 $c:=New collection(1;2)
 $c.unshift(4) // $c=[4,1,2]
 $c.unshift(5) //$c=[5,4,1,2]
 $c.unshift(6;7) // $c=[6,7,5,4,1,2]
```

<!-- END REF -->

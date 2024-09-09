---
id: CollectionClass
title: Collection
---

La classe Collection gère les variables de type [Collection](Concepts/dt_collection.md).

Une collection est initialisée avec :

|                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #_command_.New collection.Syntax -->](#new-collection)<br/><!-- INCLUDE #_command_.New collection.Summary -->                      |
| [<!-- INCLUDE #_command_.New shared collection.Syntax -->](#new-shared-collection)<br/><!-- INCLUDE #_command_.New shared collection.Summary --> |

### Exemple

```4d
 var $colVar : Collection //création d'une variable 4D de type collection
 $colVar:=New collection ///initialisation de la collection et assignation à la variable 4D
```

### Sommaire

|                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #collection.at().Syntax -->](#at)<br/><!-- INCLUDE #collection.at().Summary -->                                  |
| [<!-- INCLUDE #collection.average().Syntax -->](#average)<br/><!-- INCLUDE #collection.average().Summary -->                   |
| [<!-- INCLUDE #collection.clear().Syntax -->](#clear)<br/><!-- INCLUDE #collection.clear().Summary -->                         |
| [<!-- INCLUDE #collection.combine().Syntax -->](#combine)<br/><!-- INCLUDE #collection.combine().Summary -->                   |
| [<!-- INCLUDE #collection.concat().Syntax -->](#concat)<br/><!-- INCLUDE #collection.concat().Summary -->                      |
| [<!-- INCLUDE #collection.copy().Syntax -->](#copy)<br/><!-- INCLUDE #collection.copy().Summary -->                            |
| [<!-- INCLUDE #collection.count().Syntax -->](#count)<br/><!-- INCLUDE #collection.count().Summary -->                         |
| [<!-- INCLUDE #collection.countValues().Syntax -->](#countvalues)<br/><!-- INCLUDE #collection.countValues().Summary -->       |
| [<!-- INCLUDE #collection.distinct().Syntax -->](#distinct)<br/><!-- INCLUDE #collection.distinct().Summary -->                |
| [<!-- INCLUDE #collection.equal().Syntax -->](#equal)<br/><!-- INCLUDE #collection.equal().Summary -->                         |
| [<!-- INCLUDE #collection.every().Syntax -->](#every)<br/><!-- INCLUDE #collection.every().Summary -->                         |
| [<!-- INCLUDE #collection.extract().Syntax -->](#extract)<br/><!-- INCLUDE #collection.extract().Summary -->                   |
| [<!-- INCLUDE #collection.fill().Syntax -->](#fill)<br/><!-- INCLUDE #collection.fill().Summary -->                            |
| [<!-- INCLUDE #collection.filter().Syntax -->](#filter)<br/><!-- INCLUDE #collection.filter().Summary -->                      |
| [<!-- INCLUDE #collection.find().Syntax -->](#find)<br/><!-- INCLUDE #collection.find().Summary -->                            |
| [<!-- INCLUDE #collection.findIndex().Syntax -->](#find)<br/><!-- INCLUDE #collection.findIndex().Summary -->                  |
| [<!-- INCLUDE #collection.first().Syntax -->](#first)<br/><!-- INCLUDE #collection.first().Summary -->                         |
| [<!-- INCLUDE #collection.flat().Syntax -->](#flat)<br/><!-- INCLUDE #collection.flat().Summary -->                            |
| [<!-- INCLUDE #collection.flatMap().Syntax -->](#flatMap)<br/><!-- INCLUDE #collection.flatMap().Summary -->                   |
| [<!-- INCLUDE #collection.includes().Syntax -->](#includes)<br/><!-- INCLUDE #collection.includes().Summary -->                |
| [<!-- INCLUDE #collection.indexOf().Syntax -->](#indexof)<br/><!-- INCLUDE #collection.indexOf().Summary -->                   |
| [<!-- INCLUDE #collection.indices().Syntax -->](#indices)<br/><!-- INCLUDE #collection.indices().Summary -->                   |
| [<!-- INCLUDE #collection.insert().Syntax -->](#insert)<br/><!-- INCLUDE #collection.insert().Summary -->                      |
| [<!-- INCLUDE #collection.join().Syntax -->](#join)<br/><!-- INCLUDE #collection.join().Summary -->                            |
| [<!-- INCLUDE #collection.last().Syntax -->](#last)<br/><!-- INCLUDE #collection.last().Summary -->                            |
| [<!-- INCLUDE #collection.lastIndexOf().Syntax -->](#lastindexof)<br/><!-- INCLUDE #collection.lastIndexOf().Summary -->       |
| [<!-- INCLUDE #collection.length.Syntax -->](#length)<br/><!-- INCLUDE #collection.length.Summary -->                          |
| [<!-- INCLUDE #collection.map().Syntax -->](#map)<br/><!-- INCLUDE #collection.map().Summary -->                               |
| [<!-- INCLUDE #collection.max().Syntax -->](#max)<br/><!-- INCLUDE #collection.max().Summary -->                               |
| [<!-- INCLUDE #collection.min().Syntax -->](#min)<br/><!-- INCLUDE #collection.min().Summary -->                               |
| [<!-- INCLUDE #collection.multiSort().Syntax -->](#multisort)<br/><!-- INCLUDE #collection.multiSort().Summary -->             |
| [<!-- INCLUDE #collection.orderBy().Syntax -->](#orderby)<br/><!-- INCLUDE #collection.orderBy().Summary -->                   |
| [<!-- INCLUDE #collection.orderByMethod().Syntax -->](#orderbymethod)<br/><!-- INCLUDE #collection.orderByMethod().Summary --> |
| [<!-- INCLUDE #collection.pop().Syntax -->](#pop)<br/><!-- INCLUDE #collection.pop().Summary -->                               |
| [<!-- INCLUDE #collection.push().Syntax -->](#push)<br/><!-- INCLUDE #collection.push().Summary -->                            |
| [<!-- INCLUDE #collection.query().Syntax -->](#query)<br/><!-- INCLUDE #collection.query().Summary -->                         |
| [<!-- INCLUDE #collection.reduce().Syntax -->](#reduce)<br/><!-- INCLUDE #collection.reduce().Summary -->                      |
| [<!-- INCLUDE #collection.reduceRight().Syntax -->](#reduceRight)<br/><!-- INCLUDE #collection.reduceRight().Summary -->       |
| [<!-- INCLUDE #collection.remove().Syntax -->](#remove)<br/><!-- INCLUDE #collection.remove().Summary -->                      |
| [<!-- INCLUDE #collection.resize().Syntax -->](#resize)<br/><!-- INCLUDE #collection.resize().Summary -->                      |
| [<!-- INCLUDE #collection.reverse().Syntax -->](#reverse)<br/><!-- INCLUDE #collection.reverse().Summary -->                   |
| [<!-- INCLUDE #collection.shift().Syntax -->](#shift)<br/><!-- INCLUDE #collection.shift().Summary -->                         |
| [<!-- INCLUDE #collection.slice().Syntax -->](#slice)<br/><!-- INCLUDE #collection.slice().Summary -->                         |
| [<!-- INCLUDE #collection.some().Syntax -->](#some)<br/><!-- INCLUDE #collection.some().Summary -->                            |
| [<!-- INCLUDE #collection.sort().Syntax -->](#sort)<br/><!-- INCLUDE #collection.sort().Summary -->                            |
| [<!-- INCLUDE #collection.sum().Syntax -->](#sum)<br/><!-- INCLUDE #collection.sum().Summary -->                               |
| [<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)<br/><!-- INCLUDE #collection.unshift().Summary -->                   |

## `New collection`

<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New collection.Params -->

| Paramètres | Type                                                                    |     | Description                                |
| ---------- | ----------------------------------------------------------------------- | :-: | ------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer |  -> | Valeur(s) de collection |
| Résultat   | Collection                                                              |  <- | La nouvelle collection                     |

<!-- END REF -->

#### Description

La commande `New collection` <!-- REF #_command_.New collection.Summary -->crée une nouvelle collection vide ou préremplie<!-- END REF --> et retourne sa référence.

Si vous ne passez aucun paramètre, `New collection` crée une collection vide et retourne sa référence.

Vous devez affecter la référence retournée à une variable 4D de type Collection.

> N'oubliez pas que les instructions `var : Collection` ou `C_COLLECTION` déclarent une variable du type `Collection` mais ne créent pas de collection.

Optionnellement, vous pouvez préremplir la nouvelle collection en passant une ou plusieurs *value*(s) comme paramètre(s).

Sinon, vous pouvez ajouter ou modifier des éléments ultérieurement par affectation. Par exemple :

```4d
 myCol[10]:="Mon nouvel élément"
```

Si l'indice du nouvel élément est au-delà du dernier élément existant de la collection, la collection est automatiquement redimensionnée et tous les nouveaux éléments intermédiaires sont reçoivent la valeur **null**.

Vous pouvez passer n'importe quel nombre de valeurs de n'importe quel type pris en charge (number, text, date, picture, pointer, object, collection...). Contrairement aux tableaux, les collections peuvent mélanger des données de différents types.

Vous devez prêter attention aux problèmes de conversion suivants :

- Si vous passez un pointeur, il est conservé "tel quel" ; il est évalué à l'aide de la commande `JSON Stringify`
- Les dates sont stockées sous la forme de date « aaaa-mm-jj » ou des chaînes au format « AAAA-MM-JJTHH: ss.SSSZ: mm » , selon la configuration actuelle « dates à l'intérieur des objets » de la base de données. Lors de la conversion de dates 4D en texte avant de les stocker dans la collection, par défaut le programme prend en compte le fuseau horaire local. Vous pouvez modifier ce comportement en utilisant le sélecteur `Dates inside objects` de la commande `SET DATABASE PARAMETER`.
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
| Résultat   | Collection                                                          |  <- | La nouvelle collection partagée                        |

<!-- END REF -->

#### Description

La commande `New shared collection` <!-- REF #_command_.New shared collection.Summary --> crée une nouvelle collection partagée vide ou préremplie<!-- END REF --> et retourne sa référence.

L'ajout d'un élément à cette collection à l'aide de l'opérateur d'assignation doit être entouré de la structure [`Use...End use`](Concepts/shared.md#useend-use), sinon une erreur est générée (cela n'est pas nécessaire lors de l'ajout d'éléments à l'aide de fonctions telles que [`push()`](#push) ou [`map()`](#map) car elles utilisent automatiquement une structure interne *Use...End use*). La lecture d'un élément sans structure *Use...End use* est cependant possible.

:::info

Pour plus d'informations sur les collections partagées, veuillez vous référer à la page [Objets et collections partagés](Concepts/shared.md).

:::

Si vous ne passez aucun paramètre, `New shared collection` crée une collection vide et retourne sa référence.

Vous devez affecter la référence retournée à une variable 4D de type Collection.

> N'oubliez pas que les instructions `var : Collection` ou `C_COLLECTION` déclarent une variable du type `Collection` mais ne créent pas de collection.

Optionnellement, vous pouvez préremplir la nouvelle collection partagée en passant une ou plusieurs *value*(s) comme paramètre(s). Sinon, vous pouvez ajouter ou modifier des éléments ultérieurement via l'assignation en notation objet (cf. exemple).

Si l'indice du nouvel élément est au-delà du dernier élément existant de la collection partagée, la collection est automatiquement redimensionnée et tous les nouveaux éléments intermédiaires reçoivent la valeur **null**.

Vous pouvez passer tout nombre de valeurs de n'importe quel type pris en charge :

- nombre (réel, entier...). Les valeurs numériques sont toujours stockées sous forme de réels.
- text
- boolean
- date
- heure (stockée en nombre de milliseconds - réel)
- Null
- objet partagé
- collection partagée

:::note

Contrairement aux collections standard (non partagées), les collections partagées ne prennent pas en charge les images, les pointeurs et les objets ou collections non partagés.

:::

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

La fonction `.at()` <!-- REF #collection.at().Summary -->retourne l'élément à la position *index*, acceptant des entiers positifs et négatifs<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

Les nombres entiers négatifs déterminent la position à partir du dernier élément de la collection.

La fonction renvoie Undefined si *index* est au-delà des limites de la collection.

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

La fonction `.average()` <!-- REF #collection.average().Summary -->retourne la moyenne arithmétique des valeurs définies dans l'instance de collection<!-- END REF -->.

Seuls les éléments ayant une valeur numérique sont pris en compte pour le calcul (les autres types d'éléments sont ignorés).

Si la collection contient des objets, passez le paramètre *propertyPath* pour indiquer la propriété d'objet à prendre en compte.

`.average()` retourne `undefined` si:

- la collection est vide,
- la collection ne contient pas d'éléments numériques,
- *propertyPath* n'est pas trouvé dans la collection.

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

La fonction `.clear()`<!-- REF #collection.clear().Summary -->supprime tous les éléments de l'instance de collection et retourne une collection vide<!-- END REF -->.

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

La fonction `.combine()` <!-- REF #collection.combine().Summary -->insère *col2* éléments à la fin ou à la position spécifiée par *index* dans l'instance de collection et retourne la collection modifiée<!-- END REF -->. A la différence de la fonction `.insert()`, `.combine()` ajoute chaque valeur de *col2* dans la collection d'origine, et non en tant qu'élément unique de collection.

> Cette fonction modifie la collection d'origine.

Par défaut, les éléments *col2* sont ajoutés à la fin de la collection originale. Vous pouvez passer dans *index* la position où vous souhaitez insérer les éléments *col2* dans la collection.

> **Attention** : Gardez à l'esprit que les éléments de collection sont numérotés à partir de 0.

- Si *index* > la longueur de la collection, l'*index* de départ réel sera la longueur de la collection.
- Si *index* < 0, il est recalculé comme *index:=index+length* (il est considéré comme décalage depuis la fin de la collection).
- Si la valeur calculée est négative, *index* est défini à 0.

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

| Paramètres | Type                                                           |     | Description                                                                                                                                                         |
| ---------- | -------------------------------------------------------------- | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value      | Number, Text, Object, Collection, Date, Time, Boolean, Picture |  -> | Valeur(s) à concaténer. Si *value* est une collection, tous les éléments de la collection sont ajoutés à la collection d'origine |
| Résultat   | Collection                                                     |  <- | Nouvelle collection contenant les valeurs d'origine et les valeurs ajoutées                                                                                         |

<!-- END REF -->

#### Description

La fonction `.concat()` <!-- REF #collection.concat().Summary -->retourne une nouvelle collection contenant les éléments de la collection d'origine avec tous les éléments du paramètre *value* ajoutés à la fin<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

Si *value* est une collection, tous ses éléments sont ajoutés comme de nouveaux éléments à la fin de la collection d'origine. Si *value* n'est pas une collection, son contenu est ajouté comme nouvel élément.

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

| Release | Modifications                                                                |
| ------- | ---------------------------------------------------------------------------- |
| 18 R3   | Nouvelle option *ck shared*. Nouveaux paramètres *groupWith* |
| v16 R6  | Ajout                                                                        |

</details>

<!-- REF #collection.copy().Syntax -->**.copy**() : Collection<br/>**.copy**( *option* : Integer ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->

<!-- REF #collection.copy().Params -->

| Paramètres   | Type       |     | Description                                                                                                                                      |
| ------------ | ---------- | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| option       | Integer    |  -> | `ck resolve pointers`: résoudre les pointeurs avant la copie,<br/>`ck shared`: retourner une collection partagée |
| groupWithCol | Collection |  -> | Collection partagée à grouper avec la collection résultante                                                                                      |
| groupWithObj | Object     |  -> | Objet partagé à grouper avec la collection résultante                                                                                            |
| Résultat     | Collection |  <- | Copie de la collection d'origine (deep copy)                                                                                  |

<!-- END REF -->

#### Description

La fonction `.copy()` <!-- REF #collection.copy().Summary --> renvoie une copie profonde (deep copy) de l'instance de collection<!-- END REF -->. ***Deep copy*** signifie que les objets ou les collections présents dans la collection d'origine sont dupliqués et ne partagent pas leur référence avec la collection qui est retournée.

> Cette fonction ne modifie pas la collection d'origine.

S'il est passé, le paramètre *option* peut contenir l'une des constantes suivantes (ou les deux) :

| option                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | Si la collection d'origine contient des valeurs de type pointeur, par défaut la copie contient également les pointeurs. Toutefois, vous pouvez résoudre les pointeurs au moment de la copie en passant la constante `ck resolve pointers`. Dans ce cas, chaque pointeur contenu dans la collection est évalué lors de la copie et sa valeur déréférencée est utilisée.                                     |
| `ck shared`           | Par défaut, `copy()` retourne une collection standard (non partagée), même si la commande est appliquée à une collection partagée. Passez la constante `ck shared` pour créer une collection partagée. Dans ce cas, vous pouvez utiliser le paramètre *groupWith* pour associer la collection partagée à une autre collection ou à un autre objet (voir ci-dessous). |

Les paramètres *groupWithCol* ou *groupWithObj* vous permettent de désigner une collection ou un objet avec lequel la collection résultante doit être associée.

:::note

Les objets Datastore, dataclass et entity ne sont pas copiables. Si `.copy()` est appelé avec eux, les valeurs `Null` sont retournées.

:::

#### Exemple 1

Nous souhaitons copier la collection régulière (non partagée) *$lastnames* dans l'objet partagé *$sharedObject*. Pour cela, nous devons créer une copie partagée de la collection (*$sharedLastnames*).

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

Nous voulons combiner *$sharedColl1* et *$sharedColl2*. Etant donné qu'ils appartiennent à différents groupes partagés, une combinaison directe pourrait générer une erreur. Par conséquent, nous devons faire une copie partagée de *$sharedColl1* et désigner *$sharedColl2* comme étant un groupe partagé pour la copie.

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

Nous avons une collection standard (*$lastnames*) et nous souhaitons la placer dans le **Storage** de l'application. Pour cela, nous devons créer une copie partagée au préalable (*$sharedLastnames*).

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

Cet exemple illustre l'utilisation de l'option `ck resolve pointers` :

```4d
 var $col : Collection
 var $p : Pointer
 $p:=->$what

 $col:=New collection
 $col.push(New object("alpha";"Hello";"num";1))
 $col.push(New object("beta";"You";"what";$p))

 $col2:=$col.copy()
 $col2[1].beta:="World!"
 ALERT($col[0].alpha+" "+$col2[1].beta) //"Hello World!"

 $what:="You!"
 $col3:=$col2.copy(ck resolve pointers)
 ALERT($col3[0].alpha+" "+$col3[1].what) //"Hello You!"
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

La fonction `.count()` <!-- REF #collection.count().Summary -->retourne le nombre d'éléments non nuls dans la collection<!-- END REF -->.

Si la collection contient des objets, vous pouvez passer le paramètre *propertyPath*. Dans ce cas, seuls les éléments qui contiennent le *propertyPath* sont pris en compte.

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

La fonction `.countValues()` <!-- REF #collection.countValues().Summary -->retourne le nombre d'occurences de *value*  dans la collection<!-- END REF -->.

Vous pouvez passer dans *value* :

- une valeur scalaire (texte, numérique, booléen, date),
- une référence d'objet ou de collection.

Pour qu'un élément soit comptabilisé, le type de *value* doit être égal à celui de l'élément ; la fonction utilise l'opérateur d'égalité.

Le paramètre optionnel *propertyPath* vous permet de compter des valeurs à l'intérieur d'une collection d'objets : passez dans *propertyPath* le chemin de la propriété dont vous souhaitez comptabiliser le nombre de valeurs.

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

| Release | Modifications                        |
| ------- | ------------------------------------ |
| 20      | Prise en charge de `ck count values` |
| v16 R6  | Ajout                                |

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

La fonction `.distinct()` <!-- REF #collection.distinct().Summary -->renvoie une collection contenant uniquement les valeurs distinctes (différentes) de la collection originale<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

La collection retournée est automatiquement triée. Les valeurs **Null** ne sont pas retournées.

Si la collection contient des objets, vous pouvez passer le paramètre *propertyPath* pour indiquer la propriété d'objet dont vous souhaitez obtenir les valeurs distinctes.

Dans le paramètre *options*, vous pouvez passer une ou une combinaison des constantes suivantes :

| Constante         | Valeur | Commentaire                                                                                                                                                                                                                                    |
| ----------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck diacritical`  | 8      | L'évaluation est sensible à la casse et différencie les caractères accentués. Par défaut si omis, une évaluation non diacritique est effectuée                                                                                 |
| `ck count values` | 32     | Renvoie le nombre d'éléments pour chaque valeur distincte. Lorsque cette option est passée, `.distinct()` renvoie une collection d'objets contenant une paire d'attributs `{"value":*value*;"count":*count*}`. |

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
| option      | Integer    |  -> | `ck diacritical`: évaluation diacritique ("A" # "a" par exemple) |
| Résultat    | Boolean    |  <- | Vrai si les collections sont identiques, sinon faux                                                 |

<!-- END REF -->

#### Description

La fonction `.equal()` <!-- REF #collection.equal().Summary -->compare récursivement le contenu de la collection et de *collection2* (comparaison profonde)<!-- END REF -->et renvoie **true** si elles sont identiques.

:::note Notes

- La fonction `.equal()` ne vérifie l'égalité que pour les éléments de type chaîne, booléen, nombre et null dans les collections. Elle ne vérifie pas l'égalité pour les objets natifs.
- Les éléments avec des valeurs **null** ne sont pas égaux aux éléments Undefined.

:::

Par défaut, une évaluation non diacritique est effectuée. Si vous souhaitez que l'évaluation soit sensible à la casse ou pour différencier des caractères accentués, passez la constante `ck diacritical` dans le paramètre option.

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
| param      | any                         |  -> | Paramètre(s) à passer à *formula* ou *methodName* |
| Résultat   | Boolean                     |  <- | Vrai si tous les éléments sont évalués à vrai                        |

<!-- END REF -->

#### Description

La fonction `.every()` <!-- REF #collection.every().Summary -->retourne **true** si tous les éléments de la collection ont été évalués à vrai par le test implémenté dans l'objet *formula* ou la méthode *methodName*<!-- END REF --> fourni(e).

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- *formula* (syntaxe recommandée), un [objet Formula](FunctionClass.md) qui peut encapsuler toute expression exécutable, y compris des fonctions et des méthodes projet;
- soit *methodName*, le nom d'une méthode projet (texte).

La callback est appelée avec le(s) paramètre(s) passé(s) dans *param* (facultatif). La callback peut effectuer n'importe quel test, avec ou sans le(s) paramètre(s) et doit retourner **true** pour chaque élément remplissant le test. Elle reçoit un `Objet` en premier paramètre ($1).

La callback reçoit les paramètres suivants :

- dans *$1.value* : valeur de l'élément à évaluer
- dans *$2* : param
- dans *$N...* : paramN...

Elle peut définir le(s) paramètre(s) suivant(s) :

- (obligatoire si vous avez utilisé une méthode) *$1.result* (Boolean) : **true** si l'évaluation de la valeur de l'élément est réussie, **false** sinon.
- *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel de la méthode. La valeur retournée est la dernière calculée.

Dans tous les cas, au point où la fonction `.every()` rencontre le premier élément de la collection évalué à **false**, elle cesse d'appeler la callback et retourne **false**.

Par défaut, `.every()` évalue l'ensemble de la collection. Optionnellement, vous pouvez passer dans *startFrom* l'index de l'élément à partir duquel commencer le test.

- Si *startFrom* >= la longueur de la collection, **false** est retourné, ce qui signifie que la collection n'est pas testée.
- Si *startFrom* <  0, la fin de la collection est considérée comme point de départ du calcul de la position (*startFrom:=startFrom+length*).
- Si *startFrom* = 0, l'ensemble de la collection est évalué (défaut).

#### Exemple 1

```4d
var $c : Collection  
var $b : Boolean
var $f : 4D.Function

$f:=Formula($1.value>0)
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every($f) // true
$c.push(-1)
$b:=$c.every($f) // false
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

| Paramètres   | Type       |     | Description                                                                                                                                                                                                     |
| ------------ | ---------- | :-: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Text       |  -> | Chemin de propriété d'objet dont les valeurs doivent être extraites dans la nouvelle collection                                                                                                                 |
| targetpath   | Text       |  -> | Chemin ou nom de propriété cible                                                                                                                                                                                |
| option       | Integer    |  -> | `ck keep null` : inclure les propriétés null dans la collection retournée (ignorées par défaut). Paramètre ignoré si *targetPath* est passé. |
| Résultat     | Collection |  <- | Nouvelle collection contenant les valeurs extraites                                                                                                                                                             |

<!-- END REF -->

#### Description

La fonction `.extract()` <!-- REF #collection.extract().Summary -->crée et renvoie une nouvelle collection contenant les valeurs *propertyPath* extraites de la collection originale d'objets<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

Le contenu de la collection retournée dépend du paramètre *targetPath* :

- Si le paramètre *targetPath* est omis, `.extract()` remplit la nouvelle collection avec les valeurs de *propertyPath* de la collection d'origine.

  Par défaut, les éléments pour lesquels *propertyPath* est null ou indéfini sont ignorés dans la collection résultante. Vous pouvez passer la constante `ck keep null` dans le paramètre *option* pour inclure ces valeurs en tant qu'éléments null dans la collection retournée.

- Si un ou plusieurs paramètre(s) *targetPath* sont passés (correspondant à un ou plusieurs paramètre(s) *propertyPath*), `.extract()` remplit la nouvelle collection avec les propriétés *propertyPath* et chaque élément de la nouvelle collection est un objet avec les propriétés *targetPath* remplies avec les propriétés *propertyPath* correspondantes. Les valeurs null sont conservées (le paramètre *option* est ignoré avec cette syntaxe).

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

La fonction `.fill()` <!-- REF #collection.fill().Summary -->remplit la collection avec la *valeur* spécifiée, éventuellement de l'index *startFrom* à l'index *end*, et renvoie la collection résultante<!-- END REF -->.

> Cette fonction modifie la collection d'origine.

- Si le paramètre *startFrom* est omis, *value* est appliquée à tous les éléments de la collection (*startFrom*=0).
- Si le paramètre *startFrom* est passé et *end* omis, *value* est appliquée aux éléments de la collection à partir de *startFrom* jusqu'au dernier élément de la collection (*end*=length).
- Si à la fois le paramètre *startFrom* et *end* sont passés, *value* est appliquée aux éléments de la collection à partir de *startFrom* jusqu'à l'élément *end*.

En cas d'incohérence, les règles suivantes sont appliquées :

- Si *startFrom* < 0, il est recalculé comme *startFrom:=startFrom+length* (il est considéré comme partant de la fin de la collection). Si la valeur calculée est négative, *startFrom* est défini à 0.
- Si *end* < 0 , il est recalculé comme *end:=end+length*.
- Si *end* < *startFrom* (valeurs passées ou recalculées), la méthode ne fait rien.

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
| param      | any                         |  -> | Paramètre(s) à passer à *formula* ou *methodName*                 |
| Résultat   | Collection                  |  <- | Nouvelle collection contenant les éléments filtrés (shallow copy) |

<!-- END REF -->

#### Description

La fonction `.filter()` <!-- REF #collection.filter().Summary -->retourne une nouvelle collection contenant tous les éléments de la collection d'origine pour lesquels le résultat de la *formula* ou de la méthode *methodName* est **true**<!-- END REF -->. Cette fonction retourne une ***shallow copy***, ce qui signifie que les objets ou les collections présents dans les deux collections partagent la même référence. Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour filtrer les éléments de la collection en utilisant soit :

- *formula* (syntaxe recommandée), un [objet Formula](FunctionClass.md) qui peut encapsuler toute expression exécutable, y compris des fonctions et des méthodes projet;
- soit *methodName*, le nom d'une méthode projet (texte).

La callback est appelée avec le(s) paramètre(s) passé(s) dans *param* (optionnel) et un objet en premier paramètre (*$1*). La callback peut effectuer n'importe quel test, avec ou sans le(s) paramètre(s) et doit retourner **true** pour chaque élément remplissant la condition et donc, devant être ajouté à la nouvelle collection.

La callback reçoit les paramètres suivants :

- dans *$1.value* : valeur de l'élément à évaluer
- dans *$2* : param
- dans *$N...* : paramN...

Elle peut définir le(s) paramètre(s) suivant(s) :

- *$1.result* (Booléen) : **true** si la valeur de l'élément correspond à la condition de filtre et doit être conservée, **false** sinon.
- *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel de la méthode. La valeur retournée est la dernière calculée.

:::note

Lorsque vous utilisez *methodName* comme callback, et si la méthode ne renvoie aucune valeur, `.filter()` recherchera la propriété *$1.result* que vous devez définir à **true** pour chaque élément remplissant la condition.

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
| param      | any                         |  -> | Paramètre(s) à passer à *formula* ou *methodName*  |
| Résultat   | any                         |  <- | Première valeur trouvée (Undefined si non trouvée) |

<!-- END REF -->

#### Description

La fonction `.find()` <!-- REF #collection.find().Summary -->retourne la première valeur dans la collection pour laquelle le résultat de *formula* ou de *methodName*, appliqué à chaque élément, retourne **true**<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- *formula* (syntaxe recommandée), un [objet Formula](FunctionClass.md) qui peut encapsuler toute expression exécutable, y compris des fonctions et des méthodes projet;
- soit *methodName*, le nom d'une méthode projet (texte).

La callback est appelée avec le(s) paramètre(s) passé(s) dans *param* (facultatif). La callback peut effectuer n'importe quel test, avec ou sans le(s) paramètre(s) et doit renvoyer **true** pour le premier élément qui satisfait la condition. Elle reçoit un `Objet` en premier paramètre ($1).

La callback reçoit les paramètres suivants :

- dans *$1.value* : valeur de l'élément à évaluer
- dans *$2* : param
- dans *$N...* : paramN...

Elle peut définir le(s) paramètre(s) suivant(s) :

- (obligatoire si vous avez utilisé une méthode) *$1.result* (Boolean) : **true** si la valeur de l'élément correspond à la condition de recherche, **false** sinon.
- *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel de la méthode. La valeur retournée est la dernière calculée.

Par défaut, `.find()` effectue une recherche dans la totalité de la collection. Optionnellement, vous pouvez passer dans *startFrom* l'index de l'élément à partir duquel commencer la recherche.

- Si *startFrom* >= la longueur de la collection, -1 est retourné, ce qui signifie que la recherche n'est pas effectuée.
- Si *startFrom* < 0, la fin de la collection est considérée comme point de départ du calcul de la position (*startFrom:=startFrom+length*).
  **Note**: Même si *startFrom* est négatif, la collection est toujours recherchée de gauche à droite.
- Si *startFrom* = 0, l'ensemble de la collection est évalué (défaut).

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
| param      | any                         |  -> | Paramètre(s) à passer à *formula* ou *methodName*   |
| Résultat   | Integer                     |  <- | Numéro du premier élément trouvé (-1 si non trouvé) |

<!-- END REF -->

#### Description

La fonction `.findIndex()` <!-- REF #collection.findIndex().Summary -->retourne l'indice, dans la collection, du premier élément pour lequel *formula* ou *methodName*, appliqué à chaque élément, retourne **true**<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- *formula* (syntaxe recommandée), un [objet Formula](FunctionClass.md) qui peut encapsuler toute expression exécutable, y compris des fonctions et des méthodes projet;
- soit *methodName*, le nom d'une méthode projet (texte).

La callback est appelée avec le(s) paramètre(s) passé(s) dans *param* (facultatif). La callback peut effectuer n'importe quel test, avec ou sans le(s) paramètre(s) et doit renvoyer **true** pour le premier élément qui satisfait la condition. Elle reçoit un `Objet` en premier paramètre ($1).

La callback reçoit les paramètres suivants :

- dans *$1.value* : valeur de l'élément à évaluer
- dans *$2* : param
- dans *$N...* : paramN...

Elle peut définir le(s) paramètre(s) suivant(s) :

- (obligatoire si vous avez utilisé une méthode) *$1.result* (Boolean) : **true** si la valeur de l'élément correspond à la condition de recherche, **false** sinon.
- *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel de la méthode. La valeur retournée est la dernière calculée.

Par défaut, `.findIndex()` effectue une recherche dans la totalité de la collection. Optionnellement, vous pouvez passer dans *startFrom* l'index de l'élément à partir duquel commencer la recherche.

- Si *startFrom* >= la longueur de la collection, -1 est retourné, ce qui signifie que la recherche n'est pas effectuée.
- Si *startFrom* < 0, la fin de la collection est considérée comme point de départ du calcul de la position (*startFrom:=startFrom+length*).
  **Note**: Même si *startFrom* est négatif, la collection est toujours recherchée de gauche à droite.
- Si *startFrom* = 0, l'ensemble de la collection est évalué (défaut).

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

La fonction `.first()` <!-- REF #collection.first().Summary -->retourne le premier élément de la collection<!-- END REF -->.

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

La fonction `.flat()` <!-- REF #collection.flat().Summary -->crée une nouvelle collection avec tous les éléments des sous-collections concaténés de manière récursive jusqu'à la *depth* spécifiée<!-- END REF -->.

Par défaut, si le paramètre *depth* est omis, seul le premier niveau de la structure de la collection imbriquée sera mis à plat.

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
| param      | any                         |  -> | Paramètre(s) à passer à *formula* ou *methodName*       |
| Résultat   | Collection                  |  <- | Collection de valeurs transformées et mises à plat sur une profondeur de 1 |

<!-- END REF -->

#### Description

La fonction `.flatMap()` <!-- REF #collection.flatMap().Summary -->crée une nouvelle collection basée sur le résultat de l'appel de la fonction 4D *formula* ou de la méthode *methodName* sur chaque élément de la collection d'origine et mise à plat sur une profondeur de 1<!-- END REF -->. Optionnellement, vous pouvez passer des paramètres à *formula* ou *methodName* en utilisant le(s) paramètre(s) *param*.

Cette fonction est identique à un appel à [`map()`](#map) suivi d'un appel à [`flat()`](#flat) de profondeur 1.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- *formula* (syntaxe recommandée), un [objet Formula](FunctionClass.md) qui peut encapsuler toute expression exécutable, y compris des fonctions et des méthodes projet;
- soit *methodName*, le nom d'une méthode projet (texte).

La callback est appelée avec le(s) paramètre(s) passé(s) dans *param* (facultatif). La callback peut effectuer n'importe quelle opération, avec ou sans le(s) paramètre(s), et doit renvoyer une nouvelle valeur transformée à ajouter à la collection résultante. Elle reçoit un `Objet` en premier paramètre ($1).

La callback reçoit les paramètres suivants :

- dans *$1.value* : valeur de l'élément à évaluer
- dans *$2* : param
- dans *$N...* : paramN...

Elle peut définir le(s) paramètre(s) suivant(s) :

- (obligatoire si vous avez utilisé une méthode) *$1.result* (tout type) : nouvelle valeur transformée à ajouter à la collection résultante
- *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel de la méthode. La valeur retournée est la dernière calculée.

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

| Paramètres | Type       |     | Description                                      |
| ---------- | ---------- | :-: | ------------------------------------------------ |
| toSearch   | expression |  -> | Expression à rechercher dans la collection       |
| startFrom  | Integer    |  -> | Elément à partir duquel débuter la recherche     |
| Résultat   | Boolean    |  <- | True si *toSearch* est trouvé dans la collection |

<!-- END REF -->

#### Description

La fonction `.includes()` <!-- REF #collection.includes().Summary -->retourne True si l'expression *toSearch* est trouvée parmi les éléments de la collection, sinon False<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

Dans *toSearch*, passez l'expression à trouver dans la collection. Vous pouvez passer :

- une valeur scalaire (texte, numérique, booléen, date),
- la valeur null,
- une référence d'objet ou de collection.

*toSearch* doit correspondre exactement à l'élément à trouver (les mêmes règles que l'opérateur d'égalité du type de données sont appliquées).

Optionnellement, vous pouvez passer l'indice de la collection à partir duquel démarrer la recherche dans *startFrom*.

- Si *startFrom* >= la longueur de la collection, False est retourné, ce qui signifie que la recherche n'est pas effectuée.
- Si *startFrom* < 0, la fin de la collection est considérée comme point de départ du calcul de la position (*startFrom:=startFrom+length*). Notez que même si *startFrom* est négatif, la collection est toujours recherchée de gauche à droite.
- Si *startFrom* = 0, l'ensemble de la collection est évalué (défaut).

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

La fonction `.indexOf()` <!-- REF #collection.indexOf().Summary -->recherche l'expression *toSearch* parmi les éléments de la collection et retourne l'indice de la première occurrence trouvée, ou -1 si aucune occurrence n'a été trouvée<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

Dans *toSearch*, passez l'expression à trouver dans la collection. Vous pouvez passer :

- une valeur scalaire (texte, numérique, booléen, date),
- la valeur null,
- une référence d'objet ou de collection.

*toSearch* doit correspondre exactement à l'élément à trouver (les mêmes règles que l'opérateur d'égalité du type de données sont appliquées).

Optionnellement, vous pouvez passer l'indice de la collection à partir duquel démarrer la recherche dans *startFrom*.

- Si *startFrom* >= la longueur de la collection, -1 est retourné, ce qui signifie que la recherche n'est pas effectuée.
- Si *startFrom* < 0, la fin de la collection est considérée comme point de départ du calcul de la position (*startFrom:=startFrom+length*).
  **Note**: Même si *startFrom* est négatif, la collection est toujours recherchée de gauche à droite.
- Si *startFrom* = 0, l'ensemble de la collection est évalué (défaut).

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

| Paramètres  | Type       |     | Description                                                                                                         |
| ----------- | ---------- | :-: | ------------------------------------------------------------------------------------------------------------------- |
| queryString | Text       |  -> | Critère(s) de recherche                                                                          |
| value       | any        |  -> | Valeur(s) à comparer lors de l'utilisation de paramètre(s) dans la chaîne     |
| Résultat    | Collection |  <- | Numéro(s) d'élément(s) de la collection répondant aux critères de queryString |

<!-- END REF -->

#### Description

La fonction `.indices()` fonctionne exactement comme la fonction [`.query()`](#query) mais <!-- REF #collection.indices().Summary -->renvoie les indices, dans la collection d'origine, des éléments de la collection d'objets qui correspondent aux conditions de recherche *queryString*<!-- END REF -->, et non les éléments eux-mêmes. Les positions sont retournées dans un ordre croissant.

> Cette fonction ne modifie pas la collection d'origine.

Le paramètre *queryString* doit respecter la syntaxe suivante :

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

Pour une description détaillée de la construction de recherches à l'aide des paramètres *queryString* et *value* veuillez vous reporter à la description de la fonction `dataclass.query()`.

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

La fonction `.insert()` <!-- REF #collection.insert().Summary --> insère *element* à la position *index* spécifiée dans l'instance de collection et renvoie la collection modifiée<!-- END REF -->.

> Cette fonction modifie la collection d'origine.

Dans *index*, passez le numéro de l'élément après lequel vous souhaitez que le paramètre element soit inséré.

> **Attention** : Gardez à l'esprit que les éléments de collection sont numérotés à partir de 0.

- Si *index* > la longueur de la collection, l'*index* de départ réel sera fixé à la longueur de la collection.
- Si *index* < 0, il est recalculé comme *index:=index+length* (la fin de la collection est considérée comme point de départ du calcul de la position).
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

| Paramètres | Type    |     | Description                                                                                    |
| ---------- | ------- | :-: | ---------------------------------------------------------------------------------------------- |
| delimiter  | Text    |  -> | Séparateur à utiliser entre les éléments                                                       |
| option     | Integer |  -> | `ck ignore null or empty` : ignorer les chaînes null ou vides dans le résultat |
| Résultat   | Text    |  <- | Chaîne contenant tous les éléments de la collection, séparés par delimiter                     |

<!-- END REF -->

#### Description

La fonction `.join()` <!-- REF #collection.join().Summary -->convertit tous les éléments de la collection en chaînes et les concatène en utilisant la chaîne *delimiter* spécifiée comme séparateur<!-- END REF -->. La fonction renvoie la chaîne résultante.

> Cette fonction ne modifie pas la collection d'origine.

Par défaut, les éléments null ou vides de la collection sont inclus dans la chaîne résultante. Passez la constante `ck ignore null or empty` dans le paramètre *option* si vous souhaitez les exclure de la chaîne résultante.

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

La fonction `.last()` <!-- REF #collection.last().Summary -->renvoie le dernier élément de la collection<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

La fonction renvoie Undefined si la collection est vide.

#### Exemple

```4d
var $col; $emptyCol : Collection
var $last : Variant
$col:=New collection(10; 20; 30; "hello"; 50)
$last:=$col.last() // 50

$emptyCol:=New collection() //vide
// $last:=$emptyCol[$emptyCol.length-1] //retourne une erreur
$last:=$emptyCol.last() // retourne Undefined

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

La fonction `.lastIndexOf()` <!-- REF #collection.lastIndexOf().Summary -->recherche l'expression *toSearch* parmi les éléments de la collection et renvoie l'indice de la dernière occurrence<!-- END REF -->, ou -1 si elle n'a pas été trouvée.

> Cette fonction ne modifie pas la collection d'origine.

Dans *toSearch*, passez l'expression à trouver dans la collection. Vous pouvez passer :

- une valeur scalaire (texte, numérique, booléen, date),
- la valeur null,
- une référence d'objet ou de collection.

*toSearch* doit correspondre exactement à l'élément recherché (les mêmes règles que pour l'opérateur d'égalité sont appliquées).

Optionnellement, vous pouvez passer le numéro de l'élément auquel démarrer la recherche inversée dans *startFrom*.

- Si *startFrom* >= taille de la collection (coll.length-1), l'ensemble de la collection est évalué (défaut).
- Si *startFrom* < 0, il est recalculé comme *startFrom:=startFrom+length* (il est considéré comme partant de la fin de la collection). Si la position calculée est négative, -1 est retourné (la collection n'est pas évaluée).
  **Note** : Même si *startFrom* est négatif, la recherche est effectuée de la droite vers la gauche.
- Si *startFrom* = 0, -1 est retourné, ce qui signifie que la recherche n'est pas effectuée.

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

La propriété `.length` <!-- REF #collection.length.Summary -->renvoie le nombre d'éléments de la collection<!-- END REF -->.

La propriété `.length` est initialisée à la création de la collection. Elle est automatiquement mise à jour en cas d'ajout ou de suppression d'éléments. Cette propriété est en **lecture seulement** (vous ne pouvez pas l'utiliser pour modifier la taille de la collection).

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
| param      | any                         |  -> | Paramètre(s) à passer à *formula* ou *methodName* |
| Résultat   | Collection                  |  <- | Collection de valeurs transformées                                   |

<!-- END REF -->

#### Description

La fonction `.map()` <!-- REF #collection.map().Summary -->crée une nouvelle collection basée sur le résultat de l'appel de la fonction 4D *formula* ou de la méthode *methodName* sur chaque élément de la collection d'origine<!-- END REF -->. Optionnellement, vous pouvez passer des paramètres à *formula* ou *methodName* en utilisant le(s) paramètre(s) *param*. `.map()` renvoie toujours une collection de la même taille que la collection originale, sauf si *$1.stop* a été utilisé (voir ci-dessous).

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- *formula* (syntaxe recommandée), un [objet Formula](FunctionClass.md) qui peut encapsuler toute expression exécutable, y compris des fonctions et des méthodes projet;
- soit *methodName*, le nom d'une méthode projet (texte).

La callback est appelée avec le(s) paramètre(s) passé(s) dans *param* (facultatif). La callback peut effectuer n'importe quelle opération, avec ou sans le(s) paramètre(s), et doit renvoyer une nouvelle valeur transformée à ajouter à la collection résultante. Elle reçoit un `Objet` en premier paramètre ($1).

La callback reçoit les paramètres suivants :

- dans *$1.value* : valeur de l'élément à évaluer
- dans *$2* : param
- dans *$N...* : paramN...

Elle peut définir le(s) paramètre(s) suivant(s) :

- (obligatoire si vous avez utilisé une méthode) *$1.result* (tout type) : nouvelle valeur transformée à ajouter à la collection résultante
- *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel de la méthode. La valeur retournée est la dernière calculée.

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

La fonction `.max()` <!-- REF #collection.max().Summary -->renvoie l'élément ayant la valeur la plus élevée dans la collection<!-- END REF --> (le dernier élément de la collection si elle était triée par ordre croissant à l'aide de la fonction [`.sort()`](#sort)).

> Cette fonction ne modifie pas la collection d'origine.

Si la collection contient différents types de valeurs, la fonction `.max()` renverra la valeur maximale du dernier type d'élément dans l'ordre de la liste des types (voir la description de [`.sort()`](#sort)).

Si la collection contient des objets, passez le paramètre *propertyPath* pour indiquer la propriété d'objet dont vous souhaitez obtenir la valeur maximale.

Si la collection est vide, `.max()` retourne *Undefined*.

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

La fonction `.min()` <!-- REF #collection.min().Summary -->renvoie l'élément ayant la plus petite valeur dans la collection<!-- END REF --> (le premier élément de la collection si elle était triée par ordre croissant à l'aide de la fonction [`.sort()`](#sort)).

> Cette fonction ne modifie pas la collection d'origine.

Si la collection contient différents types de valeurs, la fonction `.min()` renverra la valeur minimale du premier type d'élément dans l'ordre de la liste des types (voir la description de [`.sort()`](#sort)).

Si la collection contient des objets, passez le paramètre *propertyPath* pour indiquer la propriété d'objet dont vous souhaitez obtenir la valeur minimum.

Si la collection est vide, `.min()` retourne *Undefined*.

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

| Paramètres | Type                        |     | Description                                                                                                                                                        |
| ---------- | --------------------------- | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| formula    | 4D.Function |  -> | Objet formule                                                                                                                                                      |
| colsToSort | Collection                  |  -> | Collection de collections et/ou d'objets ayant des propriétés {`collection`:*colToSort*;`order`:`ck ascendant` ou `ck descendant`} |
| Résultat   | Collection                  |  <- | Collection d'origine triée                                                                                                                                         |

<!-- END REF -->

#### Description

La fonction `.multiSort()` <!-- REF #collection.multiSort().Summary -->vous permet d'effectuer un tri synchronisé à plusieurs niveaux sur un ensemble de collections<!-- END REF -->.

> Cette fonction modifie la collection d'origine ainsi que toutes les collections utilisées dans le paramètre *colsToSort* .

Si `.multiSort()` est appelé sans paramètres, la fonction a le même effet que la fonction [`.sort()`](#sort) : la collection est triée (uniquement les valeurs scalaires) par défaut dans l'ordre croissant, en fonction de leur type. Si la collection contient des éléments de différents types, ils sont d'abord groupés par type et triés par la suite. Les types sont renvoyés dans l'ordre suivant :

1. Null
2. booléens
3. chaînes
4. nombres
5. objets
6. collections
7. dates

**Tri synchronisé à un niveau**

Pour trier plusieurs collections de manière synchronisée, il suffit de passer dans *colsToSort* une collection de collections à trier. Vous pouvez passer un nombre illimité de collections. La collection originale sera triée par ordre croissant et toutes les collections *colsToSort* seront triées de manière synchronisée.

:::note

Toutes les collections *colsToSort* doivent avoir le même nombre d'éléments, sinon une erreur est renvoyée.

:::

Si vous souhaitez trier les collections dans un ordre autre que croissant, vous devez fournir *formula* ([objet Formula](FunctionClass.md#formula)) qui définit l'ordre de tri. La valeur de retour doit être un booléen qui indique l'ordre relatif des deux éléments : **True** si *$1.value* est inférieur à *$1.value2*, **False** si *$1.value* est supérieur à *$1.value2*. Vous pouvez passer des paramètres supplémentaires à la formule si nécessaire.

La formule reçoit les paramètres suivants :

- $1 (object), où :
  - *$1.value* (tout type) : valeur du premier élément à comparer
  - *$1.value2* (tout type) : valeur du second élément à comparer
- $2...$N (tout type) : paramètres supplémentaires (extraParam)

**Tri synchronisé à plusieurs niveaux**

Pour définir un tri synchronisé à plusieurs niveaux, vous devez transmettre un objet contenant les propriétés {`collection`:*colToSort*;`order`:`ck ascending` ou `ck descending`} au lieu d'une collection *colToSort* pour chaque collection à utiliser en ta

Les niveaux de tri sont déterminés par l'ordre dans lequel les collections sont passées dans le paramètre *colsToSort* : la position d'un objet `collection`/`order` dans la syntaxe détermine son niveau de tri.

:::note

La fonction `.multiSort()` utilise un algorithme de tri [stable](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability) .

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
| ascOrDesc   | Integer    |  -> | `ck ascending` ou `ck descending` (valeurs scalaires)                            |
| Résultat    | Collection |  <- | Copiée triée de la collection (shallow copy)                                     |

<!-- END REF -->

#### Description

La fonction `.orderBy()` <!-- REF #collection.orderBy().Summary -->renvoie une nouvelle collection contenant tous les éléments de la collection dans l'ordre spécifié<!-- END REF -->.

Cette fonction retourne une *shallow copy* (copie superficielle), ce qui signifie que les objets ou les collections présents dans les deux collections partagent la même référence. Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

> Cette fonction ne modifie pas la collection d'origine.

Si vous ne passez aucun paramètre, la fonction classe les valeurs scalaires de la collection dans un ordre croissant (les autres types d'éléments tels que les objets ou les collections sont renvoyés avec un ordre interne). Vous pouvez modifier ce tri automatique par défaut en passant la constante `ck ascending` ou `ck descending` dans le paramètre *ascOrDesc* (voir ci-dessous).

Vous pouvez également passer des critères afin de configurer le tri des éléments de la collection. Trois syntaxes sont prises en charge pour ce paramètre :

- *pathStrings* : Texte (formule). **Syntaxe** : `propertyPath1 {desc ou asc}, propertyPath2 {desc ou asc},...` (défaut : asc). *pathStrings* contient une formule constituée de 1 à N chemin(s) de propriété(s) et (optionnellement) ordres de tri, séparés par des virgules. L'ordre dans lequel les propriétés sont passées détermine la priorité de tri des éléments de la collection. Par défaut, les propriétés sont triées pas ordre croissant. Vous pouvez définir l'ordre de tri de chaque propriété dans la formule de critère, séparée du chemin de propriété par un simple espace : passez "asc" pour trier par ordre croissant ou "desc" pour un ordre décroissant.

- *pathObjects* : Collection. Vous pouvez ajouter autant d'objets dans la collection *pathObjects* que nécessaire. Par défaut, les propriétés sont triées par ordre croissant ("descending" est faux). Chaque élément de la collection contient un objet structuré de la manière suivante :

```4d
{
    "propertyPath": string,


    "descending": boolean

}
```

- *ascOrDesc* : Integer. Passez une des constantes suivantes du thème **Objets et collections** :

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

La fonction `.orderByMethod()` <!-- REF #collection.orderByMethod().Summary -->renvoie une nouvelle collection contenant tous les éléments de la collection dans l'ordre défini par la fonction 4D *formula* ou la méthode *methodName*<!-- END REF -->.

Cette fonction retourne une *shallow copy* (copie superficielle), ce qui signifie que les objets ou les collections présents dans les deux collections partagent la même référence. Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- *formula* (syntaxe recommandée), un [objet Formula](FunctionClass.md) qui peut encapsuler toute expression exécutable, y compris des fonctions et des méthodes projet;

- soit *methodName*, le nom d'une méthode projet (texte).

Dans la callback, passez votre code qui compare deux valeurs et retourne **true** si la première valeur est inférieure à la seconde valeur. Vous pouvez fournir des paramètres *extraParam* à la callback si nécessaire.

La callback reçoit les paramètres suivants :

- $1 (object), où :
  - *$1.value* (tout type) : valeur du premier élément à comparer
  - *$1.value2* (tout type) : valeur du second élément à comparer
  - $2...$N (tout type) : paramètres supplémentaires (extraParam)

Si vous avez utilisé une méthode, elle doit définir le paramètre suivant :

- *$1.result* (booléen): **true** si *$1.value < $1.value2*, **false** sinon

#### Exemple 1

Vous souhaitez trier une collection de chaînes contenant des nombres par valeur plutôt que par ordre alphabétique :

```4d
 var $c; $c2; $c3 : Collection
 $c:=Newcollection
 $c.push("33" ; "4" ; "1111" ; "222")
 $c2:=$c.orderBy() //$c2=["1111", "222", "33", "4"], ordre alphabétique
 $c3:=$c.orderByMethod(Formula(Num($1.value)<Num($1.value2))) // $c3=["4", "33", "222", "1111"]
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

La méthode ***sortCollection*** :

```4d
var $1 : Object
var $2: Integer // option de tri

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

La fonction `.pop()` <!-- REF #collection.pop().Summary -->supprime le dernier élément de la collection et le renvoie comme résultat de la fonction<!-- END REF -->.

> Cette fonction modifie la collection d'origine.

Lorsqu'elle est appliquée à une collection vide, .`pop()` retourne ***undefined***.

#### Exemple

`.pop()`, combinée à [`.push()`](#push), peut être utilisée pour implémenter une fonctionnalité first-in last-out de traitement de données empilées :

```4d
 var $stack : Collection
 $stack:=New collection //$stack=[]
 $stack.push(1;2) //$stack=[1,2]
 $stack.pop() //$stack=[1]  retourne 2
 $stack.push(New collection(4;5)) //$stack=[[1,[4,5]]
 $stack.pop() //$stack=[1]  retourne [4,5]
 $stack.pop() //$stack=[]  retourne 1
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
| element    | any        |  -> | Élément(s) à ajouter à la collection |
| Résultat   | Collection |  <- | Collection originale contenant des éléments ajoutés     |

<!-- END REF -->

#### Description

La fonction `.push()` <!-- REF #collection.push().Summary -->ajoute un ou plusieurs *element*(s) à la fin de l'instance de collection et renvoie la collection modifiée<!-- END REF -->.

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

| Release | Modifications                                                                    |
| ------- | -------------------------------------------------------------------------------- |
| 20 R6   | Prise en charge des recherches utilisant des références d'objet ou de collection |
| 17 R5   | Prise en charge de querySettings                                                 |
| v16 R6  | Ajout                                                                            |

</details>

<!-- REF #collection.query().Syntax -->**.query**( *queryString* : Text ) : Collection<br/>**.query**( *queryString* : Text ; *...value* : any ) : Collection<br/>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->

<!-- REF #collection.query().Params -->

| Paramètres    | Type       |     | Description                                                                                                     |
| ------------- | ---------- | :-: | --------------------------------------------------------------------------------------------------------------- |
| queryString   | Text       |  -> | Critère(s) de recherche                                                                      |
| value         | any        |  -> | Valeur(s) à comparer lors de l'utilisation de paramètre(s) dans la chaîne |
| querySettings | Object     |  -> | Options de requête : paramètres, attributs                                                      |
| Résultat      | Collection |  <- | Élément(s) correspondant à queryString dans la collection                                    |

<!-- END REF -->

#### Description

La fonction `.query()` <!-- REF #collection.query().Summary -->renvoie tous les éléments d'une collection d'objets qui correspondent aux conditions de recherche <!-- END REF -->définies par *queryString* et (éventuellement) *value* ou *querySettings*. Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

Une collection vide est renvoyée si la collection dans laquelle la requête est exécutée ne contient pas la *value* recherchée.

> Cette fonction ne modifie pas la collection d'origine.

#### paramètre queryString

Le paramètre *queryString* doit respecter la syntaxe suivante :

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

où :

- **propertyPath** : chemin de la propriété sur laquelle vous voulez exécuter la recherche. Ce paramètre peut contenir un nom simple (par exemple "pays") ou un chemin d'attribut valide (par exemple "pays.nom"). Dans le cas d'un chemin d'accès à un attribut dont le type est `Collection`, la notation `[]` est utilisée pour traiter toutes les occurrences (par exemple `children[].age`).

- **comparator** : symbole qui compare *propertyPath* et *value*. Les symboles suivants sont pris en charge :

| Comparaison                             | Symbole(s) | Commentaire                                                                                                                                                                                                                                       |
| --------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Egal à                                  | =, ==                         | Retourne les données correspondantes, prend en charge le joker de recherche (@), ne tient pas compte de la casse et est non diacritique.                                                          |
|                                         | ===, IS                       | Retourne les données correspondantes, considère le @ comme un caractère standard, ne tient pas compte de la casse et est non diacritique                                                                                             |
| Différent de                            | #, !=                         | Prend en charge le joker de recherche (@). Équivalent à "Condition Not appliquée à une assertion" ([voir ci-dessous](#not-equal-to-in-collections)).           |
|                                         | !==, IS NOT                   | Considère le @ comme un caractère standard                                                                                                                                                                                           |
| Condition Not appliquée à une assertion | NOT                           | Les parenthèses sont obligatoires lorsque NOT est utilisé avant une déclaration contenant plusieurs opérateurs. Équivalent à "Not equal to" ([voir ci-dessous](#not-equal-to-in-collections)). |
| Inférieur à                             | <                             |                                                                                                                                                                                                                                                   |
| Supérieur à                             | >                             |                                                                                                                                                                                                                                                   |
| Inférieur ou égal à                     | <=                            |                                                                                                                                                                                                                                                   |
| Supérieur ou égal à                     | > =                           |                                                                                                                                                                                                                                                   |
| Inclus parmi                            | IN                            | Retourne les données égales à au moins une des valeurs d'une collection ou d'un ensemble de valeurs, prend en charge le joker de recherche (@)                                                                    |

- **valeur** : valeur à comparer à la valeur actuelle de la propriété de chaque élément de la collection. Il peut s'agir de n'importe quelle valeur d'expression constante correspondant au type de données de l'élément ou d'un [**placeholder**](#using-placeholders).
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

4D vous permet d'utiliser des placeholders pour les arguments *propertyPath* et *value* dans le paramètre *queryString*. Un placeholder est un paramètre que vous insérez dans des chaines de recherche et qui est remplacé par une autre valeur au moment où la chaîne de recherche est évaluée. La valeur des placeholders est évaluée une seule fois, au début de la requête ; elle n'est pas évaluée pour chaque élément.

Il existe deux types de placeholders : les **placeholders indexés** et les **placeholders nommés**.

- **Placeholders indexés** : les paramètres sont insérés en tant que `:paramIndex` (par exemple ":1", ":2"...) dans *queryString* et leurs valeurs correspondantes sont fournies par la séquence de paramètres *value*. Vous pouvez utiliser jusqu'à 128 paramètres *value*.

Voici un exemple :

```4d
$c:=$myCol.query(":1=:2";"city";"Chicago")
```

- **placeholders nommés** : les paramètres sont insérés en tant que `:paramName` (par exemple ":myparam") et leurs valeurs sont fournies dans les objets "attributes" et/ou "parameters" dans le paramètre *querySettings*.

Voici un exemple :

```4d
$o.attributes:={att:"city"}
$o.parameters:={name:"Chicago")
$c:=$myCol.query(":att=:name";$o)
```

Vous pouvez combiner tous les types d'arguments dans *queryString*. Une *queryString* peut contenir, pour les paramètres *propertyPath* et *value* :

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

2. Cela évite d'avoir à se préoccuper des problèmes de formatage ou de caractères, en particulier lors de la gestion des paramètres *propertyPath* ou *value* qui peuvent contenir des caractères non alphanumériques tels que ".", "['...

3. Cela permet l'utilisation de variables ou d'expressions dans les arguments de recherche. Exemples :

```4d
$result:=$col.query("address.city = :1 & name =:2";$city;$myVar+"@")
$result2:=$col.query("company.name = :1";"John's Pizzas")
```

> L'utilisation d'une [**référence de collection** ou **référence d'objet**](#object-or-collection-reference-as-value) dans le paramètre *value* n'est pas prise en charge avec cette syntaxe. Vous devez utiliser le paramètre [*querySettings*](#querysettings-parameter).

#### Recherche de valeurs null

Lorsque vous recherchez les valeurs null, vous ne pouvez pas utiliser la syntaxe placeholder car le moteur de recherche considère la valeur null comme une valeur de comparaison invalide. Par exemple, si vous exécutez la recherche suivante :

```4d
$vSingles:=$colPersons.query("spouse = :1";Null) // ne fonctionnera PAS
```

Vous n'obtiendrez pas le résultat souhaité car la valeur null sera évaluée par 4D comme une erreur résultant de l'évaluation du paramètre (pouvant être, par exemple, un attribut provenant d'une autre recherche). Pour ce type de recherche, vous devez utiliser la syntaxe de recherche directe :

```4d
$vSingles:=$colPersons.query("spouse = null") //syntaxe correcte
```

#### Référence d'objet ou de collection comme value

Vous pouvez rechercher dans une collection en utilisant une référence d'objet ou une référence de collection comme paramètre *value* à comparer. La recherche fera correspondre les objets de la collection qui font référence à (pointent vers) la même **instance** d'objet ou de collection.

Les comparateurs suivants sont pris en charge :

| Comparaison  | Symbole(s) |
| ------------ | ----------------------------- |
| Egal à       | =, ==                         |
| Différent de | #, !=                         |

Pour construire une recherche avec une référence d'objet ou de collection, vous devez utiliser la syntaxe du paramètre *querySettings*. Exemple avec une référence d'objet :

```4d
var $o1:={a: 1}
var $o2:={a: 1} //même objet mais autre référence
var $o3:=$o1 //même objet et même référence

var $col; $colResult : Collection

$col:=[{o: $o1}; {o: $o2}; {o: $o3}]
$colResult:=$col.query("o = :v" ; {parameters : {v: $o3}})
	//$colResult.length=2
	//$colResult[0].o=$o1 est true
	//$colResult[1].o=$o1 est true

```

Exemple avec une référence de collection :

```4d

$c1:=[1 ; 2 ; 3]
$c2:=[1 ; 2 ; 3] //même collection mais autre référence
$c3:=$c1 //même collection et même référence

$col:=[{c: $c1}; {c: $c2}; {c: $c3}]
$col2:=$col.query("c = :v" ; {parameters: {v: $c3}})
	//$col2.length=2
	//$col2[0].c=$c1 est true
	//$col2[1].c=$c1 est true

```

#### Paramètre querySettings

Dans le paramètre *querySettings*, vous pouvez passer un objet contenant des placeholders de recherche en tant qu'objets. Les propriétés suivantes sont prises en charge :

| Propriété  | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| parameters | Object | **Placeholders nommés pour les valeurs** utilisées dans *queryString*. Les valeurs sont exprimées sous forme de paires propriété / valeur, où propriété est le nom du placeholder inséré pour une valeur dans *queryString* (":placeholder") et où valeur correspond à la valeur à comparer. Vous pouvez combiner, dans une même recherche, des placeholders indexés (valeurs passées directement dans les paramètres <em x-id="3">value</em>) et les valeurs des placeholders nommés.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| attributes | Object | **Placeholders nommés pour les chemins d'attributs** utilisés dans *queryString*. Les attributs sont exprimés sous forme de paires propriété / valeur, où propriété est le nom du placeholder inséré pour un chemin d'attribut dans *queryString* (":placeholder"), et où valeur peut être une chaine ou une collection de chaines. Chaque valeur est un chemin qui peut désigner une propriété dans un objet de la collection<table><tr><th>Type d'objet</th><th>Description</th></tr><tr><td>Chaîne</td><td>Chemin d'accès de l'attribut exprimé à l'aide de la notation à point, par exemple "name" ou "user.address.zipCode"</td></tr><tr><td>Collection de chaînes</td><td>Chaque chaîne de la collection représente un niveau d'attributePath, par exemple \["name"] ou \["user", "address", "zipCode"]. L'utilisation d'une collection permet de rechercher des attributs dont les noms ne sont pas compatibles avec la notation à points, par exemple \["4Dv17.1", "en/fr"]</td></tr></table>Vous pouvez mélanger des placeholders indexés (valeurs passées directement dans les paramètres *value*) et des valeurs de placeholders nommés dans la même requête. |

> L'utilisation de ce paramètre est obligatoire si vous souhaitez rechercher dans une collection en [utilisant une **référence de collection** ou une **référence d'un objet**](#référence-d-objet-ou-de-collection-comme-value).

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

Recherche avec des dates :

```4d

$entitySelection:=ds.Employee.query("birthDate > :1";"1970-01-01")
$entitySelection:=ds.Employee.query("birthDate <= :1";Current date-10950)
```

:::info

Vous trouverez plus d'exemples de requêtes dans la page `dataClass.query()`.

:::

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

| Paramètres | Type                                            |     | Description                                                                            |
| ---------- | ----------------------------------------------- | :-: | -------------------------------------------------------------------------------------- |
| formula    | 4D.Function                     |  -> | Objet formule                                                                          |
| methodName | Text                                            |  -> | Nom de méthode                                                                         |
| initValue  | Text, Number, Object, Collection, Date, Boolean |  -> | Valeur à utiliser comme premier argument du premier appel de *formula* ou *methodName* |
| param      | expression                                      |  -> | Paramètre(s) à passer                                               |
| Résultat   | Text, Number, Object, Collection, Date, Boolean |  <- | Résultat de la valeur de l'accumulateur                                                |

<!-- END REF -->

#### Description

La fonction `.reduce()` <!-- REF #collection.reduce().Summary -->applique la callback *formula* ou le *methodName* à un accumulateur et à chaque élément de la collection (de gauche à droite) pour les réduire à une seule valeur<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- *formula* (syntaxe recommandée), un [objet Formula](FunctionClass.md) qui peut encapsuler toute expression exécutable, y compris des fonctions et des méthodes projet;
- soit *methodName*, le nom d'une méthode projet (texte).

La callback prend chaque élément de la collection et effectue toutes les opérations souhaitées pour accumuler le résultat dans *$1.accumulator*, qui est retourné dans *$1.value*.

Vous pouvez passer la valeur pour initialiser l'accumulateur dans *initValue*. S'il est omis, *$1.accumulator* commence par *Undefined*.

La callback reçoit les paramètres suivants :

- dans *$1.value* : valeur de l'élément à évaluer
- dans $2 : *param*
- dans *$N...* : *paramN...*

Elle peut définir le(s) paramètre(s) suivant(s) :

- *$1.accumulator*: valeur à modifier par la fonction et qui est initialisée par *initValue*.
- *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel. La valeur retournée est la dernière calculée.

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

Avec la méthode ***Flatten*** suivante :

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

| Paramètres | Type                                            |     | Description                                                                            |
| ---------- | ----------------------------------------------- | :-: | -------------------------------------------------------------------------------------- |
| formula    | 4D.Function                     |  -> | Objet formule                                                                          |
| methodName | Text                                            |  -> | Nom de méthode                                                                         |
| initValue  | Text, Number, Object, Collection, Date, Boolean |  -> | Valeur à utiliser comme premier argument du premier appel de *formula* ou *methodName* |
| param      | expression                                      |  -> | Paramètre(s) à passer                                               |
| Résultat   | Text, Number, Object, Collection, Date, Boolean |  <- | Résultat de la valeur de l'accumulateur                                                |

<!-- END REF -->

#### Description

La fonction `.reduceRight()` <!-- REF #collection.reduceRight().Summary -->applique la callback *formula* ou *methodName* à un accumulateur et chaque élément de la collection (de droite à gauche) pour la réduire à une valeur unique<!-- END REF -->.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- *formula* (syntaxe recommandée), un [objet Formula](FunctionClass.md) qui peut encapsuler toute expression exécutable, y compris des fonctions et des méthodes projet;
- soit *methodName*, le nom d'une méthode projet (texte).

La callback prend chaque élément de la collection et effectue toutes les opérations souhaitées pour accumuler le résultat dans *$1.accumulator*, qui est retourné dans *$1.value*.

Vous pouvez passer la valeur pour initialiser l'accumulateur dans *initValue*. S'il est omis, *$1.accumulator* commence par *Undefined*.

La callback reçoit les paramètres suivants :

- dans *$1.value* : valeur de l'élément à évaluer
- dans $2 : *param*
- dans *$N...* : *paramN...*

Elle peut définir le(s) paramètre(s) suivant(s) :

- *$1.accumulator*: valeur à modifier par la fonction et qui est initialisée par *initValue*.
- *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel. La valeur retournée est la dernière calculée.

#### Exemple 1

```4d
var $c : Collection
$c:=New collection(5;3;5;1;3;4;4;6;2;2)
$r:=$c.reduceRight(Formula($1.accumulator*=$1.value); 1)  //86400

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

Avec la méthode ***Flatten*** suivante :

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

| Paramètres | Type       |     | Description                                                       |
| ---------- | ---------- | :-: | ----------------------------------------------------------------- |
| index      | Integer    |  -> | Élément à partir duquel la suppression peut commencer             |
| howMany    | Integer    |  -> | Nombre d'éléments à supprimer, ou 1 élément si omis               |
| Résultat   | Collection |  <- | Modified collection without removed element(s) |

<!-- END REF -->

#### Description

La fonction `.remove()` <!-- REF #collection.remove().Summary -->supprime un ou plusieurs élément(s) de la collection à partir de la position spécifiée dans *index* et renvoie la collection modifiée<!-- END REF -->.

> Cette fonction modifie la collection d'origine.

Dans *index*, passez le numéro de l'élément à partir duquel la suppression doit débuter dans la collection.

> **Attention** : Gardez à l'esprit que les éléments de collection sont numérotés à partir de 0. Si *index* est supérieur à la taille de la collection, l'*index* de départ réel sera fixé à la longueur (length) de la collection.

- Si *index* < 0, il est recalculé comme *index:=index+length* (il est considéré comme décalage depuis la fin de la collection).
- Si la valeur recalculée est négative, *index* prend la valeur 0.
- Si valeur recalculée > longueur de la collection, *index* prend comme valeur la taille de la collection.

Dans *howMany*, passez le nombre d'éléments à supprimer à partir de l'*index*. Si *howMany* n'est pas spécifié, un élément est supprimé.

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

La fonction `.resize()` <!-- REF #collection.resize().Summary -->redéfinit la longueur de la collection à la nouvelle taille spécifiée et renvoie la collection redimensionnée<!-- END REF -->.

> Cette fonction modifie la collection d'origine.

- Si *size* est inférieure à la longueur de la collection, les éléments excédentaires sont retirés de la collection.
- Si *size* > longueur de la collection, *size* est la nouvelle longueur de la collection.

Par défaut, les nouveaux éléments sont remplis par des valeurs **null**. Vous pouvez indiquer la valeur à remplir dans les éléments ajoutés à l'aide du paramètre *defaultValue*.

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

La fonction `.reverse()` <!-- REF #collection.reverse().Summary -->renvoie une copie profonde de la collection avec tous ses éléments dans l'ordre inverse<!-- END REF -->. Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

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

La fonction `.shift()` <!-- REF #collection.shift().Summary -->supprime le premier élément de la collection et le renvoie en tant que résultat de la fonction<!-- END REF -->.

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

La fonction `.slice()` <!-- REF #collection.slice().Summary -->retourne une partie d'une collection dans une nouvelle collection<!-- END REF -->, sélectionnée de l'indice *startFrom* à l'indice *end* (*end* non inclus). Cette fonction retourne une *copie superficielle* de la collection. Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

> Cette fonction ne modifie pas la collection d'origine.

La collection retournée contient l'élément spécifié par *startFrom* et tous les éléments suivants jusqu'à l'élément spécifié par *end* (mais non compris). Si seul le paramètre *startFrom* est spécifié, la collection retournée contient tous les éléments de *startFrom* au dernier élément de la collection d'origine.

- Si *startFrom* < 0, il est recalculé comme *startFrom:=startFrom+length* (il est considéré comme partant de la fin de la collection).
- Si la valeur calculée est négative, *startFrom* prend la valeur 0.
- Si *end* < 0 , il est recalculé comme *end:=end+length*.
- Si *end < startFrom* (valeurs passées ou recalculées), la fonction ne fait rien.

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

| Paramètres | Type |     | Description |
| ---------- | ---- | :-: | ----------- |

|startFrom |Integer|->|Index pour démarrer le test|
|formula|4D.Function|->|Objet formule|
|methodName|Text|->|Nom d'une méthode|
|param |any |->|Paramètre(s) à passer|
|Resultat|Boolean|<-|Vrai si au moins un élément a réussi le test|

<!-- END REF -->

#### Description

La fonction `.some()` <!-- REF #collection.some().Summary -->retourne true si au moins un élément de la collection a réussi le test implémenté dans le code *formula* ou *methodName* fourni<!-- END REF -->.

Vous désignez le code 4D de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- *formula* (syntaxe recommandée), un [objet Formula](FunctionClass.md) qui peut encapsuler toute expression exécutable, y compris des fonctions et des méthodes projet;
- soit *methodName*, le nom d'une méthode projet (texte).

La callback est appelée avec le(s) paramètre(s) passé(s) dans *param* (facultatif). La callback peut effectuer n'importe quel test, avec ou sans le(s) paramètre(s) et doit retourner **true** pour chaque élément remplissant le test. Elle reçoit un `Objet` en premier paramètre ($1).

La callback reçoit les paramètres suivants :

- dans *$1.value* : valeur de l'élément à évaluer
- dans $2 : *param*
- dans *$N...* : *paramN...*

Elle peut définir le(s) paramètre(s) suivant(s) :

- (obligatoire si vous avez utilisé une méthode) *$1.result* (booléen) : **true** si l'évaluation de la valeur de l'élément est à vrai, **false** sinon.
- *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel. La valeur retournée est la dernière calculée.

Dans tous les cas, au moment où la fonction `.some()` rencontre le premier élément de la collection retournant true, elle arrête d'appeler la callback et retourne **true**.

Par défaut, `.some()` évalue l'ensemble de la collection. Optionnellement, vous pouvez passer le numéro de l'élément auquel démarrer la recherche dans *startFrom*.

- Si *startFrom* >= la longueur de la collection, **False** est retourné, ce qui signifie que la collection n'est pas testée.

- Si *startFrom* < 0, il est considéré comme le décalage depuis la fin de la collection.

- Si *startFrom* = 0, l'ensemble de la collection est évalué (défaut).

#### Exemple

Vous voulez savoir si au moins une valeur de la collection est >0.

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

La fonction `.sort()` <!-- REF #collection.sort().Summary -->trie les éléments de la collection d'origine et retourne également la collection triée<!-- END REF --> .

> Cette fonction modifie la collection d'origine.

Si `.sort()` est appelé sans paramètre, seules les valeurs scalaires (numérique, texte, date, booléens) sont triées. Les éléments sont triés par défaut par ordre croissant, en fonction de leur type. Si la collection contient des éléments de différents types, ils sont d'abord groupés par type et triés par la suite. Les types sont renvoyés dans l'ordre suivant :

1. Null
2. booléens
3. chaînes
4. nombres
5. objets
6. collections
7. dates

Si vous souhaitez trier les éléments de la collection dans un autre ordre ou trier n'importe quel type d'élément, vous devez fournir dans \*formula \* ([objet Formula](FunctionClass.md)) ou *methodName* (Text) un callback qui définit l'ordre de tri. La valeur de retour doit être un booléen qui indique l'ordre relatif des deux éléments : **True** si *$1.value* est inférieur à *$1.value2*, **False** si *$1.value* est supérieur à *$1.value2*. Vous pouvez fournir des paramètres supplémentaires à la callback si nécessaire.

La callback reçoit les paramètres suivants :

- $1 (object), où :
  - *$1.value* (tout type) : valeur du premier élément à comparer
  - *$1.value2* (tout type) : valeur du second élément à comparer
- $2...$N (tout type) : paramètres supplémentaires (extraParam)

Si vous avez utilisé une méthode, elle doit définir le paramètre suivant :

- *$1.result* (booléen) : **true** si *$1.value < $1.value2*, **false** sinon.

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
$col3:=$col.sort(Formula(String($1.value)<String($1.value2))) //tri alphabétique : [1111,222,33,4,66]
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

La fonction `.sum()` <!-- REF #collection.sum().Summary -->retourne la somme de toutes les valeurs de l'instance de collection<!-- END REF -->.

Seuls les éléments ayant une valeur numérique sont pris en compte pour le calcul (les autres types d'éléments sont ignorés).

Si la collection contient des objets, passez le paramètre *propertyPath* pour indiquer la propriété d'objet à prendre en compte.

`.sum()` retourne 0 si :

- la collection est vide,
- la collection ne contient pas d'éléments numériques,
- *propertyPath* n'est pas trouvé dans la collection.

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

La fonction `.unshift()` <!-- REF #collection.unshift().Summary -->insère la/les *value*(s) donnée(s) au début de la collection <!-- END REF -->et renvoie la collection modifiée.

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

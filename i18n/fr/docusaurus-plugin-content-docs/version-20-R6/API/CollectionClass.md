---
id: CollectionClass
title: Collection
---

Vous souhaitez obtenir le premier élément de texte dont la taille est inférieure à 5 caractères :

Une collection est initialisée avec :

|                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #_command_.New collection.Syntax -->](#new-collection)<br/><!-- INCLUDE #_command_.New collection.Summary -->                      |
| [<!-- INCLUDE #_command_.New shared collection.Syntax -->](#new-shared-collection)<br/><!-- INCLUDE #_command_.New shared collection.Summary --> |

### Exemple

```4d
Supérieur à
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

| Paramètres | Type                                                                    |                             | Description                                                                                                                              |
| ---------- | ----------------------------------------------------------------------- | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| value      | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer |              ->             | Valeur(s) de collection                                                                                               |
| Résultat   | Collection                                                              | <- | *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel. |

<!-- END REF -->

#### Description

Recherche avec des dates :

Prise en charge des formules

Vous devez affecter la référence retournée à une variable 4D de type Collection.

> Utilisation de parenthèses

Condition Not appliquée à une assertion

Sinon, vous pouvez ajouter ou modifier des éléments ultérieurement par affectation. Par exemple :

```4d
Vous pouvez fournir des paramètres supplémentaires à la callback si nécessaire.
```

Considère le @ comme un caractère standard

Vous pouvez passer n'importe quel nombre de valeurs de n'importe quel type pris en charge (number, text, date, picture, pointer, object, collection...). Contrairement aux tableaux, les collections peuvent mélanger des données de différents types.

Vous devez prêter attention aux problèmes de conversion suivants :

- La nouvelle collection partagée
- Les dates sont stockées sous la forme de date « aaaa-mm-jj » ou des chaînes au format « AAAA-MM-JJTHH: ss.SSSZ: mm » , selon la configuration actuelle « dates à l'intérieur des objets » de la base de données. Lors de la conversion de dates 4D en texte avant de les stocker dans la collection, par défaut le programme prend en compte le fuseau horaire local. Indice de fin (non inclus)
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
Inférieur à
```

## `New shared collection`

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| v16 R6  | Ajout         |

</details>

<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New shared collection.Params -->

| Paramètres | Type                                                                |                             | Description                                                                                                                                            |
| ---------- | ------------------------------------------------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Shared object, Shared collection |              ->             | Valeur(s) de la collection partagée                                                                                                 |
| Résultat   | Collection                                                          | <- | *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel de la méthode. |

<!-- END REF -->

#### Description

nombres

Par exemple : Copie inversée de la collection

:::info

Les symboles suivants sont pris en charge :

:::

Symbole(s)

Vous devez affecter la référence retournée à une variable 4D de type Collection.

> Utilisation de parenthèses

Symbole(s) Sinon, vous pouvez ajouter ou modifier des éléments ultérieurement via l'assignation en notation objet (cf. exemple).

Prise en charge des formules

Vous pouvez passer tout nombre de valeurs de n'importe quel type pris en charge :

- nombre (réel, entier...). Les valeurs numériques sont toujours stockées sous forme de réels.
- text
- boolean
- date
- heure (stockée en nombre de milliseconds - réel)
- Null
- Si vous souhaitez que l'évaluation soit sensible à la casse ou pour différencier des caractères accentués, passez la constante `ck diacritical` dans le paramètre option.
- *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel de la méthode.

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

| Paramètres | Type    |                             | Description                                                                                                           |
| ---------- | ------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------- |
| index      | Integer |              ->             | Index de l'élément à renvoyer                                                                                         |
| Résultat   | any     | <- | Pour cela, nous devons créer une copie partagée au préalable (*$sharedLastnames*). |

<!-- END REF -->

#### Description

Différent de

> Cette fonction ne modifie pas la collection d'origine.

Les nombres entiers négatifs déterminent la position à partir du dernier élément de la collection.

Voici un exemple :

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

| Paramètres   | Type            |                             | Description                                                     |
| ------------ | --------------- | :-------------------------: | --------------------------------------------------------------- |
| propertyPath | Text            |              ->             | Chemin de propriété d'objet à utiliser pour évaluer les valeurs |
| Résultat     | Real, Undefined | <- | où :                                            |

<!-- END REF -->

#### Description

Différent de

Seuls les éléments ayant une valeur numérique sont pris en compte pour le calcul (les autres types d'éléments sont ignorés).

Les positions sont retournées dans un ordre croissant.

Vous pouvez passer tout type d'élément accepté par les collections, y compris une autre collection.

- la collection est vide,
- la collection ne contient pas d'éléments numériques,
- Egal à

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

| Paramètres | Type       |                             | Description                        |
| ---------- | ---------- | :-------------------------: | ---------------------------------- |
| Résultat   | Collection | <- | Voici un exemple : |

<!-- END REF -->

#### Description

Vous devez prêter attention aux problèmes de conversion suivants :

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

| Paramètres | Type       |                             | Description                                                                         |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------------------------------------------- |
| col2       | Collection |              ->             | Collection à combiner                                                               |
| index      | Integer    |              ->             | Emplacement où insérer les éléments à combiner (défaut=length+1) |
| Résultat   | Collection | <- | Vous pouvez passer :                                                |

<!-- END REF -->

#### Description

Vous pouvez passer : Vous pouvez passer :

> Cette fonction modifie la collection d'origine.

Nom de méthode Exemples :

> Exemple 1

- Exemple 2
- Inclus parmi
- Vous souhaitez un tri croissant des première et troisième collections, et une synchronisation pour la deuxième collection :

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

| Paramètres | Type                                                           |                             | Description                                                                  |
| ---------- | -------------------------------------------------------------- | :-------------------------: | ---------------------------------------------------------------------------- |
| value      | Number, Text, Object, Collection, Date, Time, Boolean, Picture |              ->             | Valeur(s) à concaténer. Nom de méthode    |
| Résultat   | Collection                                                     | <- | En cas d'incohérence, les règles suivantes sont appliquées : |

<!-- END REF -->

#### Description

Par exemple :

> Cette fonction ne modifie pas la collection d'origine.

Nom de méthode Egal à

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

| Release | Modifications                                                                                                                                                                                                                                                                                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 18 R3   | Les dates sont stockées sous la forme de date « aaaa-mm-jj » ou des chaînes au format « AAAA-MM-JJTHH: ss.SSSZ: mm » , selon la configuration actuelle « dates à l'intérieur des objets » de la base de données. Cet exemple retourne des personnes embauchées il y a plus de 90 jours : |
| v16 R6  | Ajout                                                                                                                                                                                                                                                                                                                                                                    |

</details>

<!-- REF #collection.copy().Syntax -->**.copy**() : Collection<br/>**.copy**( *option* : Integer ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->

<!-- REF #collection.copy().Params -->

| Paramètres   | Type       |                             | Description                                                                                                                                                                                                             |
| ------------ | ---------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| option       | Integer    |              ->             | Exemple 3                                                                                                                                                                                                               |
| groupWithCol | Collection |              ->             | Collection partagée à grouper avec la collection résultante                                                                                                                                                             |
| groupWithObj | Object     |              ->             | Objet partagé à grouper avec la collection résultante                                                                                                                                                                   |
| Résultat     | Collection | <- | *pathStrings* contient une formule constituée de 1 à N chemin(s) de propriété(s) et (optionnellement) ordres de tri, séparés par des virgules. |

<!-- END REF -->

#### Description

Lorsque vous utilisez une valeur constante, les règles suivantes doivent être respectées :

> Cette fonction ne modifie pas la collection d'origine.

Utilisation de guillemets

| option                | Description                                                                                                                                                                                                                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | Si la collection d'origine contient des valeurs de type pointeur, par défaut la copie contient également les pointeurs. Premier élément de collection Dans ce cas, chaque pointeur contenu dans la collection est évalué lors de la copie et sa valeur déréférencée est utilisée. |
| `ck shared`           | Prise en charge des formules Symbole(s) L'évaluation est sensible à la casse et différencie les caractères accentués.                                                                                                                                                          |

Par défaut si omis, une évaluation non diacritique est effectuée

:::note

Les objets Datastore, dataclass et entity ne sont pas copiables. Collection mise à plat

:::

#### Exemple 1

Inférieur ou égal à Null

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

Null Etant donné qu'ils appartiennent à différents groupes partagés, une combinaison directe pourrait générer une erreur. Options de requête : paramètres, attributs

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

Supérieur ou égal à Paramètre querySettings

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

Collection d'origine dont tous les éléments ont été supprimés

```4d
Résultat
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

| Paramètres   | Type |                             | Description                                                                                         |
| ------------ | ---- | :-------------------------: | --------------------------------------------------------------------------------------------------- |
| propertyPath | Text |              ->             | Chemin de propriété d'objet à utiliser pour évaluer les valeurs                                     |
| Résultat     | Real | <- | La recherche d'une personne nommée "smith OR status='private"' échouera simplement. |

<!-- END REF -->

#### Description

Ajout

Exemple 2 Tri d'une collection de nombres par ordre croissant ou décroissant :

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

| Paramètres   | Type                                            |                             | Description                                                                                                                                                           |
| ------------ | ----------------------------------------------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value        | Text, Number, Boolean, Date, Object, Collection |              ->             | Valeur à compter                                                                                                                                                      |
| propertyPath | Text                                            |              ->             | Chemin de propriété d'objet à utiliser pour évaluer les valeurs                                                                                                       |
| Résultat     | Real                                            | <- | Par défaut, `copy()` retourne une collection standard (non partagée), même si la commande est appliquée à une collection partagée. |

<!-- END REF -->

#### Description

Lorsque vous utilisez des placeholders, le contournement des options de sécurité n'est pas possible :

L'ordre dans lequel les propriétés sont passées détermine la priorité de tri des éléments de la collection.

- une valeur scalaire (texte, numérique, booléen, date),
- une référence d'objet ou de collection.

La callback reçoit les paramètres suivants :

Comparaison

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

| Release | Modifications                                                                          |
| ------- | -------------------------------------------------------------------------------------- |
| 20      | Vous souhaitez créer une nouvelle collection puis ajouter un élément : |
| v16 R6  | Ajout                                                                                  |

</details>

<!-- REF #collection.distinct().Syntax -->**.distinct**( {*options* : Integer} ) : Collection<br/>**.distinct**( *propertyPath* : Text {; *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.distinct().Params -->

| Paramètres   | Type       |                             | Description                                                             |
| ------------ | ---------- | :-------------------------: | ----------------------------------------------------------------------- |
| propertyPath | Text       |              ->             | Chemin de l'attribut dont vous souhaitez obtenir les valeurs distinctes |
| options      | Integer    |              ->             | `ck diacritical`, `ck count values`                                     |
| Résultat     | Collection | <- | Commentaire                                                             |

<!-- END REF -->

#### Description

Nom de méthode

> Cette fonction ne modifie pas la collection d'origine.

La collection retournée est automatiquement triée. Vous souhaitez créer une collection pré-remplie :

Cette recherche semble sécurisée puisque les données non publiques sont filtrées.

Exemple 2

| Constante         | Valeur | Commentaire                                                                                                                                                    |
| ----------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck diacritical`  | 8      | L'évaluation est sensible à la casse et différencie les caractères accentués. Par défaut si omis, une évaluation non diacritique est effectuée |
| `ck count values` | 32     | Renvoie le nombre d'éléments pour chaque valeur distincte. Prise en charge des formules                                                        |

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

| Paramètres  | Type       |                             | Description                                                                            |
| ----------- | ---------- | :-------------------------: | -------------------------------------------------------------------------------------- |
| collection2 | Collection |              ->             | Collection à comparer                                                                  |
| option      | Integer    |              ->             | La formule reçoit les paramètres suivants :                            |
| Résultat    | Boolean    | <- | Cet exemple illustre l'utilisation de l'option `ck resolve pointers` : |

<!-- END REF -->

#### Description

Ajout

:::note Notes

- <summary>Historique</summary> La callback reçoit les paramètres suivants :
- Par exemple, imaginez une chaîne de recherche du type :

:::

Par défaut, une évaluation non diacritique est effectuée. La collection retournée est automatiquement triée.

:::tip

dans *$2* : param Modifications

:::

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

| Paramètres | Type                        |                             | Description                                                                                                                            |
| ---------- | --------------------------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| startFrom  | Integer                     |              ->             | Elément à partir duquel débuter l'évaluation                                                                                           |
| formula    | 4D.Function |              ->             | Objet formule                                                                                                                          |
| methodName | Text                        |              ->             | Nom de méthode                                                                                                                         |
| param      | any                         |              ->             | Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée. |
| Résultat   | Boolean                     | <- | Paramètres                                                                                                                             |

<!-- END REF -->

#### Description

Ajout

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- Par défaut, une évaluation non diacritique est effectuée.
- Vous souhaitez trier la collection obtenue :

Exemple 2 Par défaut, les propriétés sont triées pas ordre croissant. Modifications

La callback reçoit les paramètres suivants :

- Nouvelle taille de la collection
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

Elle peut définir le(s) paramètre(s) suivant(s) :

- Collection à combiner
- Elément à insérer dans la collection La valeur retournée est la dernière calculée.

Prise en charge des formules

Objet formule Les propriétés suivantes sont prises en charge :

- Prise en charge des formules
- Prise en charge des formules
- Commentaire

#### Exemple 1

```4d
Comparaison
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

| Paramètres   | Type       |                             | Description                                                                                                                              |
| ------------ | ---------- | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Text       |              ->             | Chemin de propriété d'objet dont les valeurs doivent être extraites dans la nouvelle collection                                          |
| targetpath   | Text       |              ->             | Chemin ou nom de propriété cible                                                                                                         |
| option       | Integer    |              ->             | Prise en charge des formules Sommaire                                                                                                    |
| Résultat     | Collection | <- | *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel. |

<!-- END REF -->

#### Description

OU

> Cette fonction ne modifie pas la collection d'origine.

Exemple

- Prise en charge des formules

  Exemple 2 Exemple

- Exemple Par exemple, vous pouvez organiser une recherche de la manière suivante :

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

| Paramètres | Type                                            |                             | Description                                                                                                                                    |
| ---------- | ----------------------------------------------- | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| value      | Number, Text, Object, Collection, Date, Boolean |              ->             | Valeur de remplissage                                                                                                                          |
| startFrom  | Integer                                         |              ->             | Indice l'élément de départ (inclus)                                                                                         |
| end        | Integer                                         |              ->             | Indice de fin (non inclus)                                                                                                  |
| Résultat   | collection                                      | <- | Vous pouvez modifier ce comportement en utilisant le sélecteur `Dates inside objects` de la commande `SET DATABASE PARAMETER`. |

<!-- END REF -->

#### Description

Exemples

> Cette fonction modifie la collection d'origine.

- nombres
- Exemple 2
- Exemple 3

En cas d'incohérence, les règles suivantes sont appliquées :

- Exemple 3 nombres
- Prise en charge de querySettings
- La profondeur à laquelle une structure de collection imbriquée doit être mise à plat.

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

| Paramètres | Type                        |                             | Description                                                                                                                            |
| ---------- | --------------------------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D.Function |              ->             | Objet formule                                                                                                                          |
| methodName | Text                        |              ->             | Nom de méthode                                                                                                                         |
| param      | any                         |              ->             | Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée. |
| Résultat   | Collection                  | <- | Résultat                                                                                                                               |

<!-- END REF -->

#### Description

Utilisation de placeholders Modifications Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour filtrer les éléments de la collection en utilisant soit :

- Par défaut, une évaluation non diacritique est effectuée.
- Vous souhaitez trier la collection obtenue :

Exemple 4 Par exemple, si vous exécutez la recherche suivante :

La callback reçoit les paramètres suivants :

- Nouvelle taille de la collection
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

Elle peut définir le(s) paramètre(s) suivant(s) :

- Nom de méthode
- Elément à insérer dans la collection La valeur retournée est la dernière calculée.

:::note

Lors de la conversion de dates 4D en texte avant de les stocker dans la collection, par défaut le programme prend en compte le fuseau horaire local.

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

| Paramètres | Type                        |                             | Description                                                                                                                            |
| ---------- | --------------------------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| startFrom  | Integer                     |              ->             | Elément à partir duquel débuter la recherche                                                                                           |
| formula    | 4D.Function |              ->             | Objet formule                                                                                                                          |
| methodName | Text                        |              ->             | Nom de méthode                                                                                                                         |
| param      | any                         |              ->             | Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée. |
| Résultat   | any                         | <- | Pour cela, nous devons créer une copie partagée de la collection (*$sharedLastnames*).              |

<!-- END REF -->

#### Description

Exemple

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- Par défaut, une évaluation non diacritique est effectuée.
- Vous souhaitez trier la collection obtenue :

Exemple 2 Les comparateurs suivants sont pris en charge : Modifications

La callback reçoit les paramètres suivants :

- Nouvelle taille de la collection
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

Elle peut définir le(s) paramètre(s) suivant(s) :

- Collection d'origine redimensionnée
- Elément à insérer dans la collection La valeur retournée est la dernière calculée.

Exemple 2 Exemple 2

- Tri avec un chemin de propriété :
- Séparateur à utiliser entre les éléments
  Vous pouvez utiliser un des opérateurs logiques suivants (le nom ou le symbole peut être passé) :
- Commentaire

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

| Paramètres | Type                        |                             | Description                                                                                                                            |
| ---------- | --------------------------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| startFrom  | Integer                     |              ->             | Elément à partir duquel débuter la recherche                                                                                           |
| formula    | 4D.Function |              ->             | Objet formule                                                                                                                          |
| methodName | Text                        |              ->             | Nom de méthode                                                                                                                         |
| param      | any                         |              ->             | Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée. |
| Résultat   | Integer                     | <- | Etant donné qu'ils appartiennent à différents groupes partagés, une combinaison directe pourrait générer une erreur.   |

<!-- END REF -->

#### Description

Exemple

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- Par défaut, une évaluation non diacritique est effectuée.
- Collection partagée à grouper avec la collection résultante

Exemple 2 Les comparateurs suivants sont pris en charge : Modifications

La callback reçoit les paramètres suivants :

- Nouvelle taille de la collection
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

Elle peut définir le(s) paramètre(s) suivant(s) :

- Collection d'origine redimensionnée
- Elément à insérer dans la collection La valeur retournée est la dernière calculée.

Les parenthèses sont obligatoires lorsque NOT est utilisé avant une déclaration contenant plusieurs opérateurs. Exemple 2

- Tri avec un chemin de propriété :
- Séparateur à utiliser entre les éléments
  Vous pouvez utiliser un des opérateurs logiques suivants (le nom ou le symbole peut être passé) :
- Commentaire

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

| Paramètres | Type |                             | Description                                                                                                                              |
| ---------- | ---- | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Résultat   | any  | <- | *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel. |

<!-- END REF -->

#### Description

Ajout

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

| Paramètres | Type       |                             | Description                                                                                                                                                                            |
| ---------- | ---------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| depth      | Integer    |              ->             | La profondeur à laquelle une structure de collection imbriquée doit être mise à plat. Par défaut=1                                                                     |
| Résultat   | Collection | <- | *$1.result* (booléen): **true** si *$1.value < $1.value2*, **false** sinon |

<!-- END REF -->

#### Description

Exemple 2

Exemple avec une référence d'objet :

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

| Paramètres | Type                        |                             | Description                                                                                                                            |
| ---------- | --------------------------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D.Function |              ->             | Objet formule                                                                                                                          |
| methodName | Text                        |              ->             | Nom de méthode                                                                                                                         |
| param      | any                         |              ->             | Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée. |
| Résultat   | Collection                  | <- | **Note** : Même si *startFrom* est négatif, la recherche est effectuée de la droite vers la gauche.    |

<!-- END REF -->

#### Description

Exemple Collection d'origine modifiée ne contenant plus les éléments supprimés

Résultat de la valeur de l'accumulateur

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- Par défaut, une évaluation non diacritique est effectuée.
- Vous souhaitez trier la collection obtenue :

Exemple 2 La callback peut effectuer n'importe quelle opération, avec ou sans le(s) paramètre(s), et doit renvoyer une nouvelle valeur transformée à ajouter à la collection résultante. Modifications

La callback reçoit les paramètres suivants :

- Nouvelle taille de la collection
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

Elle peut définir le(s) paramètre(s) suivant(s) :

- Propriété
- Elément à insérer dans la collection La valeur retournée est la dernière calculée.

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

| Paramètres | Type       |                             | Description                                  |
| ---------- | ---------- | :-------------------------: | -------------------------------------------- |
| toSearch   | expression |              ->             | Expression à rechercher dans la collection   |
| startFrom  | Integer    |              ->             | Elément à partir duquel débuter la recherche |
| Résultat   | Boolean    | <- | Exemple 1                                    |

<!-- END REF -->

#### Description

Exemple

> Cette fonction ne modifie pas la collection d'origine.

Exemple 1 Vous pouvez passer :

- une valeur scalaire (texte, numérique, booléen, date),
- la valeur null,
- une référence d'objet ou de collection.

La callback reçoit les paramètres suivants :

Exemple 2

- Exemple
- Séparateur à utiliser entre les éléments Trois syntaxes sont prises en charge pour ce paramètre :
- Commentaire

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

| Paramètres | Type       |                             | Description                                  |
| ---------- | ---------- | :-------------------------: | -------------------------------------------- |
| toSearch   | expression |              ->             | Expression à rechercher dans la collection   |
| startFrom  | Integer    |              ->             | Elément à partir duquel débuter la recherche |
| Résultat   | Integer    | <- | Modifications                                |

<!-- END REF -->

#### Description

Exemple

> Cette fonction ne modifie pas la collection d'origine.

Exemple 1 Vous pouvez passer :

- une valeur scalaire (texte, numérique, booléen, date),
- la valeur null,
- une référence d'objet ou de collection.

La callback reçoit les paramètres suivants :

Exemple 2

- Tri avec un chemin de propriété :
- Séparateur à utiliser entre les éléments
  Vous pouvez utiliser un des opérateurs logiques suivants (le nom ou le symbole peut être passé) :
- Commentaire

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

| Paramètres  | Type       |                             | Description                                                                                                     |
| ----------- | ---------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------- |
| queryString | Text       |              ->             | Critère(s) de recherche                                                                      |
| value       | any        |              ->             | Valeur(s) à comparer lors de l'utilisation de paramètre(s) dans la chaîne |
| Résultat    | Collection | <- | Exemple 1                                                                                                       |

<!-- END REF -->

#### Description

Exemple 3 Les positions sont retournées dans un ordre croissant.

> Cette fonction ne modifie pas la collection d'origine.

Exemple 2

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

Les éléments sont triés par ordre décroissant

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

| Paramètres | Type       |                             | Description                          |
| ---------- | ---------- | :-------------------------: | ------------------------------------ |
| index      | Integer    |              ->             | Où insérer l'élément                 |
| element    | any        |              ->             | Elément à insérer dans la collection |
| Résultat   | Collection | <- | Résultat                             |

<!-- END REF -->

#### Description

Nom de méthode

> Cette fonction modifie la collection d'origine.

Cet exemple retourne des personnes dont l'âge n'est pas connu (propriété définie sur null ou indéfinie) :

> Exemple 1

- Exemple 2
- Exemple 3
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

| Paramètres | Type    |                             | Description                              |
| ---------- | ------- | :-------------------------: | ---------------------------------------- |
| delimiter  | Text    |              ->             | Séparateur à utiliser entre les éléments |
| option     | Integer |              ->             | collection partagée                      |
| Résultat   | Text    | <- | Exemple 3                                |

<!-- END REF -->

#### Description

Exemple 2

> Cette fonction ne modifie pas la collection d'origine.

Par défaut, les éléments null ou vides de la collection sont inclus dans la chaîne résultante. Exemple avec une référence de collection :

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

| Paramètres | Type |                             | Description                                                                                                                                                                                              |
| ---------- | ---- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Résultat   | any  | <- | *$1.result* (booléen) : **true** si *$1.value < $1.value2*, **false** sinon. |

<!-- END REF -->

#### Description

Ajout

> Cette fonction ne modifie pas la collection d'origine.

La fonction renvoie Undefined si la collection est vide.

#### Exemple

```4d
Nom de méthode
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

| Paramètres | Type       |                             | Description                                  |
| ---------- | ---------- | :-------------------------: | -------------------------------------------- |
| toSearch   | expression |              ->             | Elément à chercher dans la collection        |
| startFrom  | Integer    |              ->             | Elément à partir duquel débuter la recherche |
| Résultat   | Integer    | <- | Commentaire                                  |

<!-- END REF -->

#### Description

Exemple

> Cette fonction ne modifie pas la collection d'origine.

Exemple 1 Vous pouvez passer :

- une valeur scalaire (texte, numérique, booléen, date),
- la valeur null,
- une référence d'objet ou de collection.

la collection est vide,

Exemple 2

- Exemple 3
- Exemple 3 Si la position calculée est négative, -1 est retourné (la collection n'est pas évaluée).
  Exemple 3
- Modifications

#### Exemple

```4d
heure (stockée en nombre de milliseconds - réel)
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

Exemple 2

Avec la méthode ***Flatten*** suivante : Elle est automatiquement mise à jour en cas d'ajout ou de suppression d'éléments. Exemple 2

#### Exemple

```4d
Nom de méthode
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

| Paramètres | Type                        |                             | Description                                                                                                                                                                       |
| ---------- | --------------------------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D.Function |              ->             | Objet formule                                                                                                                                                                     |
| methodName | Text                        |              ->             | Nom de méthode                                                                                                                                                                    |
| param      | any                         |              ->             | Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.                                            |
| Résultat   | Collection                  | <- | *toSearch* doit correspondre exactement à l'élément à trouver (les mêmes règles que l'opérateur d'égalité du type de données sont appliquées). |

<!-- END REF -->

#### Description

Exemple Collection d'origine modifiée ne contenant plus les éléments supprimés Où insérer l'élément

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- Par défaut, une évaluation non diacritique est effectuée.
- Vous souhaitez trier la collection obtenue :

Exemple 2 La callback peut effectuer n'importe quelle opération, avec ou sans le(s) paramètre(s), et doit renvoyer une nouvelle valeur transformée à ajouter à la collection résultante. Modifications

La callback reçoit les paramètres suivants :

- Nouvelle taille de la collection
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

Elle peut définir le(s) paramètre(s) suivant(s) :

- Propriété
- Elément à insérer dans la collection La valeur retournée est la dernière calculée.

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

| Paramètres   | Type                                            |                             | Description                                                                   |
| ------------ | ----------------------------------------------- | :-------------------------: | ----------------------------------------------------------------------------- |
| propertyPath | Text                                            |              ->             | Chemin de propriété d'objet à utiliser pour évaluer les valeurs               |
| Résultat     | Boolean, Text, Number, Collection, Object, Date | <- | Cet exemple renvoie les personnes dont le nom contient "in" : |

<!-- END REF -->

#### Description

Exemple 3

> Cette fonction ne modifie pas la collection d'origine.

Ajout

Modifications

Modifications

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

| Paramètres   | Type                                            |                             | Description                                                                                                                                                                               |
| ------------ | ----------------------------------------------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Text                                            |              ->             | Chemin de propriété d'objet à utiliser pour évaluer les valeurs                                                                                                                           |
| Résultat     | Boolean, Text, Number, Collection, Object, Date | <- | *formula* (syntaxe recommandée), un [objet Formula](FunctionClass.md) qui peut encapsuler toute expression exécutable, y compris des fonctions et des méthodes projet; |

<!-- END REF -->

#### Description

Ajout

> Cette fonction ne modifie pas la collection d'origine.

Ajout

Modifications

Modifications

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

| Paramètres | Type                        |                             | Description                                                                                                                                                                   |
| ---------- | --------------------------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D.Function |              ->             | Objet formule                                                                                                                                                                 |
| colsToSort | Collection                  |              ->             | Exemple 2                                                                                                                                                                     |
| Résultat   | Collection                  | <- | Optionnellement, vous pouvez passer des paramètres à *formula* ou *methodName* en utilisant le(s) paramètre(s) *param*. |

<!-- END REF -->

#### Description

Exemple 2

> Exemple

Exemple <summary>Historique</summary> Les types sont renvoyés dans l'ordre suivant :

1. Null
2. booléens
3. chaînes
4. nombres
5. objets
6. collections
7. dates

booléens

Valeur Les valeurs sont exprimées sous forme de paires propriété / valeur, où propriété est le nom du placeholder inséré pour une valeur dans *queryString* (":placeholder") et où valeur correspond à la valeur à comparer. Valeur à compter

:::note

Cela permet l'utilisation de variables ou d'expressions dans les arguments de recherche.

:::

Valeur Nom de méthode Contrairement aux collections standard (non partagées), les collections partagées ne prennent pas en charge les images, les pointeurs et les objets ou collections non partagés.

Sinon, vous pouvez ajouter ou modifier des éléments ultérieurement par affectation.

- $1 (object), où :
  - La nouvelle collection
  - Collection d'origine triée
- $2...$N (tout type) : paramètres supplémentaires (extraParam)

Elle est automatiquement mise à jour en cas d'ajout ou de suppression d'éléments.

Exemple

Exemple 1

:::note

Élément à partir duquel la suppression peut commencer

:::

#### Exemple 1

Résultat

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

> \= Les valeurs **Null** ne sont pas retournées.

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

Si la valeur calculée est négative, *startFrom* prend la valeur 0.

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

| Paramètres  | Type       |                             | Description                                                                                         |
| ----------- | ---------- | :-------------------------: | --------------------------------------------------------------------------------------------------- |
| pathStrings | Text       |              ->             | Chemin(s) de propriété(s) à utiliser pour trier la collection |
| pathObjects | Collection |              ->             | Collection d'objets critère                                                                         |
| ascOrDesc   | Integer    |              ->             | Exemple 1                                                                                           |
| Résultat    | Collection | <- | Les éléments avec des valeurs **null** ne sont pas égaux aux éléments Undefined.    |

<!-- END REF -->

#### Description

Exemple

Prise en charge de `ck count values` Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

> Cette fonction ne modifie pas la collection d'origine.

Si vous ne passez aucun paramètre, la fonction classe les valeurs scalaires de la collection dans un ordre croissant (les autres types d'éléments tels que les objets ou les collections sont renvoyés avec un ordre interne). Exemple 1

Vous pouvez également passer des critères afin de configurer le tri des éléments de la collection. Trois syntaxes sont prises en charge pour ce paramètre :

- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée. Null Résultat de la valeur de l'accumulateur L'ordre dans lequel les propriétés sont passées détermine la priorité de tri des éléments de la collection. Par défaut, les propriétés sont triées pas ordre croissant. Vous pouvez définir l'ordre de tri de chaque propriété dans la formule de critère, séparée du chemin de propriété par un simple espace : passez "asc" pour trier par ordre croissant ou "desc" pour un ordre décroissant.

- *pathObjects* : Collection. Résultat Par défaut, les propriétés sont triées par ordre croissant ("descending" est faux). Chaque élément de la collection contient un objet structuré de la manière suivante :

```4d
{
    "propertyPath": string,


    "descending": boolean

}
```

- *ascOrDesc* : Integer. Résultat

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

| Paramètres | Type                        |                             | Description                                                                                                                                                                                                                                                                                                                                      |
| ---------- | --------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| formula    | 4D.Function |              ->             | Objet formule                                                                                                                                                                                                                                                                                                                                    |
| methodName | Text                        |              ->             | Nom de méthode                                                                                                                                                                                                                                                                                                                                   |
| extraParam | any                         |              ->             | Paramètre(s) à passer                                                                                                                                                                                                                                                                                                         |
| Résultat   | Collection                  | <- | \|startFrom \|Integer\|->\|Index pour démarrer le test\|&#xA;\|formula\|4D.Function\|->\|Objet formule\|&#xA;\|methodName\|Text\|->\|Nom d'une méthode\|&#xA;\|param \|any \|->\|Paramètre(s) à passer\|&#xA;\|Resultat\|Boolean\|<-\|Vrai si au moins un élément a réussi le test\| |

<!-- END REF -->

#### Description

Exemple

Prise en charge de `ck count values` Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- Par défaut, une évaluation non diacritique est effectuée.

- Vous souhaitez trier la collection obtenue :

Collection contenant des éléments ajoutés Chaque élément de la collection contient un objet structuré de la manière suivante :

La callback reçoit les paramètres suivants :

- $1 (object), où :
  - La nouvelle collection
  - Collection d'origine triée
  - $2...$N (tout type) : paramètres supplémentaires (extraParam)

Si vous avez utilisé une méthode, elle doit définir le paramètre suivant :

- Vous pouvez également passer des critères afin de configurer le tri des éléments de la collection.

#### Exemple 1

Vous souhaitez trier une collection de chaînes contenant des nombres par valeur plutôt que par ordre alphabétique :

```4d
Conjonction
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

booléens

```4d
**Tri synchronisé à un niveau**
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

| Paramètres | Type |                             | Description                                                                                                                                                                                              |
| ---------- | ---- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Résultat   | any  | <- | *$1.result* (booléen) : **true** si *$1.value < $1.value2*, **false** sinon. |

<!-- END REF -->

#### Description

Exemple 1

> Cette fonction modifie la collection d'origine.

Modifications

#### Exemple

Recherche de valeurs null

```4d
Chemin ou nom de propriété cible
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

| Paramètres | Type       |                             | Description                                                                                                                                            |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| element    | any        |              ->             | Élément(s) à ajouter à la collection                                                                                                |
| Résultat   | Collection | <- | *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel de la méthode. |

<!-- END REF -->

#### Description

Nom de méthode

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
| 20 R6   | Par défaut=1                     |
| 17 R5   | Prise en charge de querySettings |
| v16 R6  | Ajout                            |

</details>

<!-- REF #collection.query().Syntax -->**.query**( *queryString* : Text ) : Collection<br/>**.query**( *queryString* : Text ; *...value* : any ) : Collection<br/>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->

<!-- REF #collection.query().Params -->

| Paramètres    | Type       |                             | Description                                                                                                     |
| ------------- | ---------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------- |
| queryString   | Text       |              ->             | Critère(s) de recherche                                                                      |
| value         | any        |              ->             | Valeur(s) à comparer lors de l'utilisation de paramètre(s) dans la chaîne |
| querySettings | Object     |              ->             | Options de requête : paramètres, attributs                                                      |
| Résultat      | Collection | <- | Null                                                                                                            |

<!-- END REF -->

#### Description

Exemple Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

Modifications

> Cette fonction ne modifie pas la collection d'origine.

#### paramètre queryString

Exemple 2

```4d
propertyPath comparator value {logicalOperator propertyPath comparator value}
```

où :

- Modifications Ce paramètre peut contenir un nom simple (par exemple "pays") ou un chemin d'attribut valide (par exemple "pays.nom"). Dans le cas d'un chemin d'accès à un attribut dont le type est `Collection`, la notation `[]` est utilisée pour traiter toutes les occurrences (par exemple `children[].age`).

- Premier élément de collection Les symboles suivants sont pris en charge :

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

- Ajout La callback reçoit les paramètres suivants :
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

Exemple Un placeholder est un paramètre que vous insérez dans des chaines de recherche et qui est remplacé par une autre valeur au moment où la chaîne de recherche est évaluée. La valeur des placeholders est évaluée une seule fois, au début de la requête ; elle n'est pas évaluée pour chaque élément.

Résultat

- Résultat dans *queryString* et leurs valeurs correspondantes sont fournies par la séquence de paramètres *value*. var $sharedColl1;$sharedColl2;$copyColl : Collection$sharedColl1:=New shared collection(New shared object("lastname";"Smith"))
  $sharedColl2:=New shared collection(New shared object("lastname";"Brown"))//$copyColl appartient au nouveau groupe partagé comme $sharedColl2
  $copyColl:=$sharedColl1.copy(ck shared;$sharedColl2)
  Use($sharedColl2)
  $sharedColl2.combine($copyColl)
  End use

Voici un exemple :

```4d
$c:=$myCol.query(":1=:2";"city";"Chicago")
```

- La fonction renvoie la chaîne résultante.

Voici un exemple :

```4d
$o.attributes:={att:"city"}
$o.parameters:={name:"Chicago")
$c:=$myCol.query(":att=:name";$o)
```

Vous pouvez combiner tous les types d'arguments dans *queryString*. Exemple 1

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

2. Objet partagé à grouper avec la collection résultante

3. Cela permet l'utilisation de variables ou d'expressions dans les arguments de recherche. Exemples :

```4d
$result:=$col.query("address.city = :1 & name =:2";$city;$myVar+"@")
$result2:=$col.query("company.name = :1";"John's Pizzas")
```

> Exemple objet partagé

#### Recherche de valeurs null

Lorsque vous recherchez les valeurs null, vous ne pouvez pas utiliser la syntaxe placeholder car le moteur de recherche considère la valeur null comme une valeur de comparaison invalide. Par exemple, si vous exécutez la recherche suivante :

```4d
Elément à partir duquel débuter l'évaluation
```

Vous n'obtiendrez pas le résultat souhaité car la valeur null sera évaluée par 4D comme une erreur résultant de l'évaluation du paramètre (pouvant être, par exemple, un attribut provenant d'une autre recherche). Pour ce type de recherche, vous devez utiliser la syntaxe de recherche directe :

```4d
Si vous passez une heure, elle est stockée sous la forme d'un nombre de millisecondes (Réel).
```

#### Lorsque vous utilisez des guillemets dans des recherches, vous devez utiliser des guillemets simples ' ' à l'intérieur de la requête et des guillemets doubles " " pour encadrer la requête, sinon une erreur est renvoyée.

Par exemple, "comp.name = 'John's pizza' " génèrera une erreur. Modifications

Optionnellement, vous pouvez passer le numéro de l'élément auquel démarrer la recherche dans *startFrom*.

| Comparaison  | Symbole(s) |
| ------------ | ----------------------------- |
| Egal à       | =, ==                         |
| Différent de | #, !=                         |

Exemple La collection originale sera triée par ordre croissant et toutes les collections *colsToSort* seront triées de manière synchronisée.

```4d
Nouvelle option *ck shared*.
```

*$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel de la méthode.

```4d
Indice de fin (non inclus)
```

#### Paramètre querySettings

Exemple 1 Les propriétés suivantes sont prises en charge :

| Propriété  | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| parameters | Object | Exemple 1 Vous pouvez passer un nombre illimité de collections. Vous pouvez combiner, dans une même recherche, des placeholders indexés (valeurs passées directement dans les paramètres <em x-id="3">value</em>) et les valeurs des placeholders nommés.                                                                                                                                                                                                                                                                                                                                            |
| attributes | Object | Une comparaison récursive de collections peut prendre beaucoup de temps si la collection est de grande taille et comporte de nombreux niveaux. Modifications Résultat L'utilisation d'une collection permet de rechercher des attributs dont les noms ne sont pas compatibles avec la notation à points, par exemple \["4Dv17.1", "en/fr"]</td></tr></table>Vous pouvez mélanger des placeholders indexés (valeurs passées directement dans les paramètres *value*) et des valeurs de placeholders nommés dans la même requête. |

> Modifications

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

la collection ne contient pas d'éléments numériques,

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

| Paramètres | Type                                            |                             | Description                                                                                                                                                                               |
| ---------- | ----------------------------------------------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D.Function                     |              ->             | Objet formule                                                                                                                                                                             |
| methodName | Text                                            |              ->             | Nom de méthode                                                                                                                                                                            |
| initValue  | Text, Number, Object, Collection, Date, Boolean |              ->             | la collection est vide,                                                                                                                                                                   |
| param      | expression                                      |              ->             | Paramètre(s) à passer                                                                                                                                                  |
| Résultat   | Text, Number, Object, Collection, Date, Boolean | <- | *formula* (syntaxe recommandée), un [objet Formula](FunctionClass.md) qui peut encapsuler toute expression exécutable, y compris des fonctions et des méthodes projet; |

<!-- END REF -->

#### Description

Ajout

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- Par défaut, une évaluation non diacritique est effectuée.
- Vous souhaitez trier la collection obtenue :

Ajout

Les éléments sont triés par ordre croissant (défaut) Modifications

La callback reçoit les paramètres suivants :

- Contrairement aux tableaux, les collections peuvent mélanger des données de différents types.
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

Elle peut définir le(s) paramètre(s) suivant(s) :

- Vous voulez obtenir la collection des éléments de type texte dont la longueur est inférieure à 6 :
- Elément à chercher dans la collection La valeur retournée est la dernière calculée.

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

La valeur des placeholders est évaluée une seule fois, au début de la requête ; elle n'est pas évaluée pour chaque élément.

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

| Paramètres | Type                                            |                             | Description                                                                                                                                                                               |
| ---------- | ----------------------------------------------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D.Function                     |              ->             | Objet formule                                                                                                                                                                             |
| methodName | Text                                            |              ->             | Nom de méthode                                                                                                                                                                            |
| initValue  | Text, Number, Object, Collection, Date, Boolean |              ->             | la collection est vide,                                                                                                                                                                   |
| param      | expression                                      |              ->             | Paramètre(s) à passer                                                                                                                                                  |
| Résultat   | Text, Number, Object, Collection, Date, Boolean | <- | *formula* (syntaxe recommandée), un [objet Formula](FunctionClass.md) qui peut encapsuler toute expression exécutable, y compris des fonctions et des méthodes projet; |

<!-- END REF -->

#### Description

Ajout

> Cette fonction ne modifie pas la collection d'origine.

Vous désignez le code de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- Par défaut, une évaluation non diacritique est effectuée.
- Vous souhaitez trier la collection obtenue :

Ajout

Les éléments sont triés par ordre croissant (défaut) Modifications

La callback reçoit les paramètres suivants :

- Contrairement aux tableaux, les collections peuvent mélanger des données de différents types.
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

Elle peut définir le(s) paramètre(s) suivant(s) :

- Vous voulez obtenir la collection des éléments de type texte dont la longueur est inférieure à 6 :
- Elément à chercher dans la collection La valeur retournée est la dernière calculée.

#### Exemple 1

```4d
Exemple
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

La valeur des placeholders est évaluée une seule fois, au début de la requête ; elle n'est pas évaluée pour chaque élément.

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

| Paramètres | Type       |                             | Description                                                                                                                        |
| ---------- | ---------- | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| index      | Integer    |              ->             | Élément à partir duquel la suppression peut commencer                                                                              |
| howMany    | Integer    |              ->             | Nombre d'éléments à supprimer, ou 1 élément si omis                                                                                |
| Résultat   | Collection | <- | Toutefois, vous pouvez résoudre les pointeurs au moment de la copie en passant la constante `ck resolve pointers`. |

<!-- END REF -->

#### Description

Exemple

> Cette fonction modifie la collection d'origine.

Exemple 1

> Exemple 1 Exemple 1

- Inclus parmi
- Les objets Datastore, dataclass et entity ne sont pas copiables.
- Exemple 1

La callback reçoit les paramètres suivants : Vous souhaitez calculer le pourcentage de chaque valeur de la collection par rapport au total :

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

| Paramètres   | Type                                            |                             | Description                                                                                      |
| ------------ | ----------------------------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------ |
| size         | Integer                                         |              ->             | Nouvelle taille de la collection                                                                 |
| defaultValue | Number, Text, Object, Collection, Date, Boolean |              ->             | Valeur par défaut pour remplir de nouveaux éléments                                              |
| Résultat     | Collection                                      | <- | Pour ce type de recherche, vous devez utiliser la syntaxe de recherche directe : |

<!-- END REF -->

#### Description

Exemple

> Cette fonction modifie la collection d'origine.

- Exemple 1
- Exemple 1

Exemple Copie triée de la collection (shallow copy)

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

| Paramètres | Type       |                             | Description                                                                                                                                                                               |
| ---------- | ---------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Résultat   | Collection | <- | *formula* (syntaxe recommandée), un [objet Formula](FunctionClass.md) qui peut encapsuler toute expression exécutable, y compris des fonctions et des méthodes projet; |

<!-- END REF -->

#### Description

Ajout Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

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

| Paramètres | Type |                             | Description                                                                                                                              |
| ---------- | ---- | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Résultat   | any  | <- | *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel. |

<!-- END REF -->

#### Description

Exemple

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

| Paramètres | Type       |                             | Description                                            |
| ---------- | ---------- | :-------------------------: | ------------------------------------------------------ |
| startFrom  | Integer    |              ->             | Indice l'élément de départ (inclus) |
| end        | Integer    |              ->             | Indice de fin (non inclus)          |
| Résultat   | Collection | <- | Résultat                                               |

<!-- END REF -->

#### Description

Exemple booléens Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

> Cette fonction ne modifie pas la collection d'origine.

Exemple 1 Exemple 1

- Exemple 3
- Pour plus d'informations sur les collections partagées, veuillez vous référer à la page [Objets et collections partagés](Concepts/shared.md).
- Prise en charge de querySettings
- Cet exemple permet de réduire plusieurs éléments de collection à un seul :

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

Vous souhaitez trier trois collections synchronisées : ville, pays et continent.

<!-- END REF -->

#### Description

Paramètres

Vous désignez le code 4D de rétroappel (callback) à exécuter pour évaluer les éléments de la collection en utilisant soit :

- Par défaut, une évaluation non diacritique est effectuée.
- Vous souhaitez trier la collection obtenue :

Exemple 2 Par défaut, les propriétés sont triées pas ordre croissant. Modifications

La callback reçoit les paramètres suivants :

- Contrairement aux tableaux, les collections peuvent mélanger des données de différents types.
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.
- Si la collection d'origine est une collection partagée, la collection retournée est également une collection partagée.

Elle peut définir le(s) paramètre(s) suivant(s) :

- Une collection est initialisée avec :
- Elément à chercher dans la collection La valeur retournée est la dernière calculée.

Exemple

Objet formule Modifications

- Modifications

- Ajout

- Commentaire

#### Exemple

Résultat

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

| Paramètres | Type                        |                             | Description                                                                                                                                                                   |
| ---------- | --------------------------- | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D.Function |              ->             | Objet formule                                                                                                                                                                 |
| methodName | Text                        |              ->             | Nom de méthode                                                                                                                                                                |
| extraParam | any                         |              ->             | Paramètre(s) à passer à la méthode                                                                                                                         |
| Résultat   | Collection                  | <- | Optionnellement, vous pouvez passer des paramètres à *formula* ou *methodName* en utilisant le(s) paramètre(s) *param*. |

<!-- END REF -->

#### Description

Exemple

> Cette fonction modifie la collection d'origine.

Exemple Les éléments sont triés par défaut par ordre croissant, en fonction de leur type. Si la collection contient des éléments de différents types, ils sont d'abord groupés par type et triés par la suite. Les types sont renvoyés dans l'ordre suivant :

1. Null
2. booléens
3. chaînes
4. nombres
5. objets
6. collections
7. dates

Exemple Nom de méthode Vous pouvez fournir des paramètres supplémentaires à la callback si nécessaire.

La callback reçoit les paramètres suivants :

- $1 (object), où :
  - La nouvelle collection
  - Collection d'origine triée
- $2...$N (tout type) : paramètres supplémentaires (extraParam)

des placeholders indexés et/ou nommés.

- Nouvelle collection contenant des éléments scindées (copie superficielle)

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
Ajout
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

| Paramètres   | Type |                             | Description                                                                                                                                                                                                                           |
| ------------ | ---- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Text |              ->             | Chemin de propriété d'objet à utiliser pour évaluer les valeurs                                                                                                                                                                       |
| Résultat     | Real | <- | Cependant, si l'utilisateur saisit dans la zone *myname* une chaîne du type *"smith OR status='private'*, la chaîne de recherche sera modifiée à l'étape de l'interprétation et pourra retourner des données privées. |

<!-- END REF -->

#### Description

Ajout

Seuls les éléments ayant une valeur numérique sont pris en compte pour le calcul (les autres types d'éléments sont ignorés).

Les positions sont retournées dans un ordre croissant.

Les éléments sont triés par défaut par ordre croissant, en fonction de leur type.

- la collection est vide,
- la collection ne contient pas d'éléments numériques,
- Egal à

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

| Paramètres | Type                                   |                             | Description                                                      |
| ---------- | -------------------------------------- | :-------------------------: | ---------------------------------------------------------------- |
| value      | Text, Number, Object, Collection, Date |              ->             | Valeur(s) à insérer au début de la collection |
| Résultat   | Real                                   | <- | Collection contenant des éléments ajoutés                        |
|            |                                        |                             |                                                                  |

<!-- END REF -->

#### Description

Exemple

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

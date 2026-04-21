---
id: FunctionClass
title: Function
---

Un objet **`4D.Function`** contient un morceau de code qui peut être exécuté à partir d'un objet, soit en utilisant l'opérateur `()`, soit en utilisant les fonctions [`apply()`](#apply) et [`call()`](#call).

### Héritage

4D gère plusieurs types d'objets `Function`, héritant de la classe **4D.Function** :

- les **fonctions natives**, c'est-à-dire des fonctions intégrées de diverses classes 4D telles que [`collection.sort()`](./CollectionClass.md#sort) ou [`file.copyTo()`](./FileClass.md#copyto).
- **les fonctions utilisateur**, créées dans les [classes utilisateur](Concepts/classes.md) à l'aide du mot-clé [Function](Concepts/classes.md#function).
- les **fonctions de formule**, c'est-à-dire des fonctions qui peuvent exécuter un code de formule stocké dans des objets [4D.Formula](./FormulaClass.md),
- les **fonctions de méthode**, c'est-à-dire des fonctions qui peuvent exécuter du code source sous forme de texte stocké dans des objets [4D.Method](./MethodClass.md).

### Exécution du code dans les objets Function

Les objets Function peuvent être encapsulés dans des propriétés d'objet :

```4d
var $message : 4D.Formula
$message:=Formula(ALERT("Hello world"))
$f:={message: $message}
```

Cette propriété est une "fonction objet", c'est-à-dire une fonction qui est liée à son objet parent. Pour exécuter une fonction stockée dans une propriété objet, utilisez l'opérateur **()** après le nom de la propriété, comme par exemple :

```4d
 $f.message() //affiche"Hello world"
```

La syntaxe avec des crochets est également prise en charge :

```4d
 $f["message"]() //affiche "Hello world"
```

A noter que, même si elle n'a pas de paramètres (voir ci-dessous), une fonction objet à exécuter doit être appelée avec des parenthèses `()`. Appeler uniquement la propriété retournera une nouvelle référence à la formule (elle ne sera pas exécutée) :

```4d
 $o:=$f.message //retourne l'objet fonction en $o
```

Vous pouvez également exécuter une fonction en utilisant les fonctions [`apply()`](#apply) et [`call()`](#call) :

```4d
 $message.apply() //affiche "Hello world"
```

### Sommaire

|                                                                                                              |
| ------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary --> |
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary -->    |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary -->  |

<!-- REF FunctionClass.apply().Desc -->

## .apply()

<details><summary>Historique</summary>

| Release | Modifications                                        |
| ------- | ---------------------------------------------------- |
| 21 R3   | Prise en charge des objets 4D.Method |
| 17 R3   | Ajout                                                |

</details>

<!-- REF #FunctionClass.apply().Syntax -->**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *params* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->

<div class="no-index">

| Paramètres | Type       |                             | Description                                                |
| ---------- | ---------- | :-------------------------: | ---------------------------------------------------------- |
| thisObj    | Object     |              ->             | Objet à retourner par la commande `This` dans la fonction  |
| params     | Collection |              ->             | Collection de valeurs à passer en paramètres à la fonction |
| Résultat   | any        | <- | Valeur retournée par l'exécution de la fonction            |

</div>
<!-- END REF -->

#### Description

La fonction `.apply()` <!-- REF #FunctionClass.apply().Summary -->exécute l'objet fonction auquel elle est appliquée, en passant les paramètres sous forme de collection, et renvoie la valeur résultante<!-- END REF -->.

Dans le paramètre *thisObj*, vous pouvez passer une référence à l'objet qui sera utilisé comme `This` dans la fonction. Passez Null si vous ne voulez pas utiliser `This` mais que vous voulez envoyer des paramètres.

Vous pouvez passer une collection à utiliser comme paramètres dans la fonction en utilisant le paramètre facultatif *params* :

- dans les objets `4D.Formula`, les paramètres sont passés à $1...$n dans la formule.
- dans les autres objets `4D.Function` tels que les objets `4D.Method`, les paramètres sont passés aux [paramètres déclarés](../Concepts/parameters.md).

Notez que `.apply()` est similaire à [`.call()`](#call) à la différence près que les paramètres sont passés en tant que collection. Cela peut être utile pour passer des résultats calculés.

<!-- END REF -->

<!-- REF FunctionClass.call().Desc -->

## .call()

<details><summary>Historique</summary>

| Release | Modifications                                        |
| ------- | ---------------------------------------------------- |
| 21 R3   | Prise en charge des objets 4D.Method |
| 17 R3   | Ajout                                                |

</details>

<!-- REF #FunctionClass.call().Syntax -->**.call**() : any<br/>**.call**( *thisObj* : Object { ; *...params* : any } ) : any<!-- END REF -->

<!-- REF #FunctionClass.call().Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                                               |
| ---------- | ------ | --------------------------- | --------------------------------------------------------- |
| thisObj    | Object | ->                          | Objet à retourner par la commande `This` dans la fonction |
| params     | any    | ->                          | Valeurs à passer en paramètres à la fonction              |
| Résultat   | any    | <- | Valeur retournée par l'exécution de la fonction           |

</div>
<!-- END REF -->

#### Description

La fonction `.call()` <!-- REF #FunctionClass.call().Summary -->exécute l'objet fonction auquel elle est appliquée, avec un ou plusieurs paramètre(s) passé(s) directement, et renvoie la valeur résultante<!-- END REF -->.

Dans le paramètre *thisObj*, vous pouvez passer une référence à l'objet qui sera utilisé comme `This` dans la fonction.

Vous pouvez passer des valeurs à utiliser comme paramètres dans la fonction à l'aide du paramètre facultatif *params* :

- dans les objets `4D.Formula`, les paramètres sont passés à $1...$n dans la formule.
- dans les autres objets `4D.Function` tels que les objets `4D.Method`, les paramètres sont passés aux [paramètres déclarés](../Concepts/parameters.md).

Notez que `.call()` est similaire à [`.apply()`](#apply) à la différence près que les paramètres sont passés directement.

<!-- END REF -->

#### Exemple 1

```4d
 var $f : 4D.Function
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // retourne "HELLO"
```

#### Exemple 2

```4d
 $o:=New object("value";50)
 $f:=Formula(This.value*2)
 $result:=$f.call($o) // retourne 100
```

<!-- REF FunctionClass.source.Desc -->

## .source

<details><summary>Historique</summary>

| Release | Modifications                                        |
| ------- | ---------------------------------------------------- |
| 21 R3   | Prise en charge des objets 4D.Method |
| 18 R2   | Ajout                                                |

</details>

<!-- REF #FunctionClass.source.Syntax -->**.source** : Text <!-- END REF -->

#### Description

La propriété `.source` <!-- REF #FunctionClass.source.Summary -->contient le code source de la fonction sous forme de texte<!-- END REF -->.

La valeur renvoyée est le texte original utilisé pour créer l'objet 4D.Formula ou 4D.Method, mais reformaté.

Cette propriété est en **lecture seule**.

<!-- END REF -->

#### Exemple

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```




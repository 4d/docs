---
id: FunctionClass
title: Function
---

Un objet **`4D.Function`** contient un morceau de code qui peut être exécuté à partir d'un objet, soit en utilisant l'opérateur `()`, soit en utilisant les fonctions [`apply()`](#apply) et [`call()`](#call). 4D propose trois types d'objets `Function` :

- **les fonctions natives**, c'est-à-dire les fonctions intégrées des diverses classes 4D telles que `collection.sort()` ou `file.copyTo()`.
- **les fonctions utilisateur**, créées dans les [classes utilisateur](Concepts/classes.md) à l'aide du mot-clé [Function](Concepts/classes.md#function).
- **les fonctions de formule**, c'est-à-dire les fonctions qui peuvent exécuter n'importe quelle formule 4D.

### Objets Formula

Les commandes [Formula](../commands/formula.md) et [Formula from string](../commands/formula-from-string.md) vous permettent de créer des objets [`4D.Function`](#objets-formula) pour exécuter n'importe quelle expression ou code 4D exprimé sous forme de texte.

Les objets Formula peuvent être encapsulés dans des propriétés d'objet :

```4d
 var $f : 4D.Function
 $f:=New object
 $f.message:=Formula(ALERT("Hello world"))
```

Cette propriété est une "fonction objet", c'est-à-dire une fonction qui est liée à son objet parent. Pour exécuter une fonction stockée dans une propriété objet, utilisez l'opérateur **()** après le nom de la propriété, comme par exemple :

```4d
 $f.message() //affiche"Hello world"
```

La syntaxe avec des crochets est également prise en charge :

```4d
 $f["message"]() //affiche "Hello world"
```

A noter que, même si elle n'a pas de paramètres (voir ci-dessous), une fonction objet à exécuter doit être appelée avec des parenthèses (). Appeler uniquement la propriété retournera une nouvelle référence à la formule (elle ne sera pas exécutée) :

```4d
 $o:=$f.message //retourne l'objet formule en $o
```

Vous pouvez également exécuter une fonction en utilisant les fonctions [`apply()`](#apply) et [`call()`](#call) :

```4d
 $f.message.apply() //affiche "Hello world"
```

#### Passer des paramètres

Vous pouvez passer des paramètres à vos formules en utilisant [la syntaxe séquentielle des paramètres](Concepts/parameters.md#sequential-parameters) basée sur $1, $2...$n. Par exemple, vous pouvez écrire :

```4d
 var $f : Object
 $f:=New object
 $f.message:=Formula(ALERT("Hello "+$1))
 $f.message("John") //affiche "Hello John"
```

Ou en utilisant la fonction [.call()](#call) :

```4d
 var $f : Object
 $f:=Formula($1+" "+$2)
 $text:=$f.call(Null;"Hello";"World") //retourne "Hello World"
 $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //retourne "Welcome to 2019" (par exemple)
```

#### Paramètres d'une seule méthode

Pour plus de commodité, lorsque la formule est constituée d'une seule méthode projet, les paramètres peuvent être omis dans l'initialisation de l'objet formule. Ils peuvent simplement être passés lorsque la formule est appelée. Par exemple :

```4d
 var $f : 4D.Function

 $f:=Formula(myMethod)
  //Ecrire Formula(myMethod($1;$2)) n'est pas nécessaire
 $text:=$f.call(Null;"Hello";"World") //retourne "Hello World"
 $text:=$f.call() //retourne "How are you?"

  //myMethod
 #DECLARE ($param1 : Text; $param2 : Text)->$return : Text
 If(Count parameters=2)
    $return:=$param1+" "+$param2
 Else
    $return:="How are you?"
 End if
```

Les paramètres sont reçus dans la méthode, dans l'ordre où ils sont spécifiés dans l'appel.

### Sommaire

|                                                                                                              |
| ------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary --> |
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary -->    |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary -->  |

<!-- REF FunctionClass.apply().Desc -->

## .apply()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R3   | Ajout         |

</details>

<!-- REF #FunctionClass.apply().Syntax -->**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *formulaParams* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->

| Paramètres    | Type       |                             | Description                                                                                                                       |
| ------------- | ---------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------- |
| thisObj       | Object     |              ->             | Objet à retourner par la commande This dans la formule                                                                            |
| formulaParams | Collection |              ->             | Collection des valeurs à passer en tant que $1...$n lorsque `formula` est exécuté |
| Résultat      | any        | <- | Valeur obtenue à partir de l'exécution de la formule                                                                              |

<!-- END REF -->

#### Description

La fonction `.apply()` <!-- REF #FunctionClass.apply().Summary -->exécute l'objet `formula` auquel elle est appliquée et retourne la valeur résultante<!-- END REF -->. L'objet formula peut être créé à l'aide des commandes `Formula` ou `Formula from string`.

Dans le paramètre *thisObj*, vous pouvez passer une référence à l'objet à utiliser en tant que `This` dans la formule.

Vous pouvez également passer une collection à utiliser comme paramètres $1...$n dans la formule à l'aide du paramètre facultatif *formulaParams*.

Notez que `.apply()` est similaire à [`.call()`](#call) sauf que les paramètres sont passés en tant que collection. Cela peut être utile pour passer des résultats calculés.

#### Exemple 1

```4d
 var $f : 4D.Function
 $f:=Formula($1+$2+$3)

 $c:=New collection(10;20;30)
 $result:=$f.apply(Null;$c) // retourne 60
```

#### Exemple 2

```4d
 var $calc : 4D.Function
 var $feta; $robot : Object
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

 $calc.apply($feta) // $feta={name:Feta,price:12.5,quantity:5,total:62.5}
 $calc.apply($robot) // $robot={name:Robot,price:543,quantity:2,total:1086}
```

<!-- END REF -->

<!-- REF FunctionClass.call().Desc -->

## .call()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R3   | Ajout         |

</details>

<!-- REF #FunctionClass.call().Syntax -->**.call**() : any<br/>**.call**( *thisObj* : Object { ; ...*params* : any } ) : any<!-- END REF -->

<!-- REF #FunctionClass.call().Params -->

| Paramètres | Type   |                             | Description                                                                                                                           |
| ---------- | ------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| thisObj    | Object | ->                          | Objet à retourner par la commande This dans la formule                                                                                |
| params     | any    | ->                          | Valeur(s) à passer en tant que $1...$n lorsque formula est exécuté |
| Résultat   | any    | <- | Valeur obtenue à partir de l'exécution de la formule                                                                                  |

<!-- END REF -->

#### Description

La fonction `.call()` <!-- REF #FunctionClass.call().Summary -->exécute l'objet `formula` auquel elle est appliquée et retourne la valeur résultante<!-- END REF -->. L'objet formula peut être créé à l'aide des commandes `Formula` ou `Formula from string`.

Dans le paramètre *thisObj*, vous pouvez passer une référence à l'objet à utiliser en tant que `This` dans la formule.

Vous pouvez également passer des valeurs à utiliser comme paramètres *$1...$n* dans la formule à l'aide du paramètre facultatif *params*.

Notez que `.call()` est similaire à [`.apply()`](#apply) sauf que les paramètres sont passés directement.

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

<!-- END REF -->

<!-- REF FunctionClass.source.Desc -->

## .source

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R2   | Ajout         |

</details>

<!-- REF #FunctionClass.source.Syntax -->**.source** : Text <!-- END REF -->

#### Description

La propriété `.source` <!-- REF #FunctionClass.source.Summary -->contient l'expression source de `formula` sous forme de texte<!-- END REF -->.

Cette propriété est en **lecture seule**.

#### Exemple

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```

<!-- END REF -->

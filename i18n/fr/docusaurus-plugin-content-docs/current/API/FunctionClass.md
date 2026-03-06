---
id: FunctionClass
title: Function
---

Un objet **`4D.Function`** contient un morceau de code qui peut être exécuté à partir d'un objet, soit en utilisant l'opérateur `()`, soit en utilisant les fonctions [`apply()`](#apply) et [`call()`](#call).

### Héritage

4D handles several kinds of `Function` objects, inheriting from the **4D.Function** class:

- **native functions**, i.e. built-in functions from various 4D classes such as [`collection.sort()`](./CollectionClass.md#sort) or [`file.copyTo()`](./FileClass.md#copyto).
- **user functions**, created in [user classes](Concepts/classes.md) using the [`Function` keyword](Concepts/classes.md#function).
- **formula functions**, i.e. functions that can execute formula code stored in [4D.Formula](./FormulaClass.md) objects,
- **method functions**, i.e. functions that can execute source code as text stored in [4D.Method](./MethodClass.md) objects.

### Executing code in Function objects

Function objects can be encapsulated in object properties:

```4d
var $message : 4D.Formula
$message:=Formula(ALERT("Hello world"))
$f:={message: $message}
```

Cette propriété est une "fonction objet", c'est-à-dire une fonction qui est liée à son objet parent. Cette propriété est une "fonction objet", c'est-à-dire une fonction qui est liée à son objet parent.

```4d
 $f.message() //affiche"Hello world"
```

La syntaxe avec des crochets est également prise en charge :

```4d
 $f["message"]() //affiche "Hello world"
```

Note that, even if it does not have parameters (see below), an object function to be executed must be called with `()` parenthesis. Appeler uniquement la propriété retournera une nouvelle référence à la formule (elle ne sera pas exécutée) :

```4d
 $o:=$f.message //returns the function object in $o
```

You can also execute a function using the [`apply()`](#apply) and [`call()`](#call):

```4d
 $message.apply() //displays "Hello world"
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

| Release | Modifications                                 |
| ------- | --------------------------------------------- |
| 21 R3   | Support of 4D.Methods objects |
| 17 R3   | Ajout                                         |

</details>

<!-- REF #FunctionClass.apply().Syntax -->**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *params* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->

<div class="no-index">

| Paramètres | Type       |                             | Description                                                     |
| ---------- | ---------- | :-------------------------: | --------------------------------------------------------------- |
| thisObj    | Object     |              ->             | Object to be returned by the `This` command in the function     |
| params     | Collection |              ->             | Collection of values to be passed as parameters to the function |
| Résultat   | any        | <- | Value from function execution                                   |

</div>
<!-- END REF -->

#### Description

The `.apply()` function <!-- REF #FunctionClass.apply().Summary -->executes the function object to which it is applied, passing parameters as a collection, and returns the resulting value<!-- END REF -->.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the function. Pass Null if you do not want to use `This` but you want to send parameters.

You can pass a collection to be used as parameters in the function using the optional *params* parameter:

- in `4D.Formula` objects, parameters are passed in $1...$n in the formula.
- in other `4D.Function` objects such as `4D.Method` objects, parameters are passed in [declared method parameters](../Concepts/parameters.md).

Notez que `.apply()` est similaire à [`.call()`](#call) sauf que les paramètres sont passés en tant que collection. Cela peut être utile pour passer des résultats calculés.

<!-- END REF -->

<!-- REF FunctionClass.call().Desc -->

## .call()

<details><summary>Historique</summary>

| Release | Modifications                                 |
| ------- | --------------------------------------------- |
| 21 R3   | Support of 4D.Methods objects |
| 17 R3   | Ajout                                         |

</details>

<!-- REF #FunctionClass.call().Syntax -->**.call**() : any<br/>**.call**( *thisObj* : Object { ; *...params* : any } ) : any<!-- END REF -->

<!-- REF #FunctionClass.call().Params -->

<div class="no-index">

| Paramètres | Type   |                             | Description                                                 |
| ---------- | ------ | --------------------------- | ----------------------------------------------------------- |
| thisObj    | Object | ->                          | Object to be returned by the `This` command in the function |
| params     | any    | ->                          | Values to be passed as parameters to the function           |
| Résultat   | any    | <- | Value from function execution                               |

</div>
<!-- END REF -->

#### Description

The `.call()` function <!-- REF #FunctionClass.call().Summary -->executes the function object to which it is applied, with one or more parameter(s) passed directly, and returns the resulting value<!-- END REF -->.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the function.

You can pass values to be used as parameters in the function using the optional *params* parameter:

- in `4D.Formula` objects, parameters are passed in $1...$n in the formula.
- in `4D.Method` objects, parameters are passed in [declared method parameters](../Concepts/parameters.md).

Notez que `.call()` est similaire à [`.apply()`](#apply) sauf que les paramètres sont passés directement.

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

| Release | Modifications                                 |
| ------- | --------------------------------------------- |
| 21 R3   | Support of 4D.Methods objects |
| 18 R2   | Ajout                                         |

</details>

<!-- REF #FunctionClass.source.Syntax -->**.source** : Text <!-- END REF -->

#### Description

The `.source` property <!-- REF #FunctionClass.source.Summary -->contains the source code of the function as text<!-- END REF -->.

The returned value is the original text used to create the 4D.Formula or 4D.Method object but reformatted.

Cette propriété est en **lecture seule**.

<!-- END REF -->

#### Exemple

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```




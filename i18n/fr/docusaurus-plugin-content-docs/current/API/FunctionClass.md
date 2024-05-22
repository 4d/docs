---
id: FunctionClass
title: Function
---

A **`4D.Function`** object contains a piece of code that can be executed from an object, either using the `()` operator, or using the [`apply()`](#apply) and [`call()`](#call) functions. 4D propose trois types d'objets `Function` :

- **les fonctions natives**, c'est-à-dire les fonctions intégrées des diverses classes 4D telles que `collection.sort()` ou `file.copyTo()`.
- **les fonctions utilisateur**, créées dans les [classes utilisateur](Concepts/classes.md) à l'aide du mot-clé [Function](Concepts/classes.md#function).
- **les fonctions de formule**, c'est-à-dire les fonctions qui peuvent exécuter n'importe quelle formule 4D.

### Objets Formula

The [Formula](#formula) and [Formula from string](#formula-from-string) commands allow you to create [`4D.Function` objects](#about-4dfunction-objects) to execute any 4D expression or code expressed as text.

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

You can also execute a function using the [`apply()`](#apply) and [`call()`](#call) functions:

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
  //Writing Formula(myMethod($1;$2)) is not necessary
 $text:=$f.call(Null;"Hello";"World") //returns "Hello World"
 $text:=$f.call() //returns "How are you?"

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

## Formula

<details><summary>Historique</summary>

| Release | Modifications                                        |
| ------- | ---------------------------------------------------- |
| 17 R6   | Renommée (New formula -> Formula) |
| 17 R3   | Ajout                                                |

</details>

<!-- REF #_command_.Formula.Syntax -->**Formula** ( *formulaExp* : Expression ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula.Params -->

| Paramètres | Type                        |     | Description                            |
| ---------- | --------------------------- | :-: | -------------------------------------- |
| formulaExp | Expression                  |  -> | Formule à retourner comme objet        |
| Résultat   | 4D.Function |  <- | Fonction native encapsulant la formule |

<!-- END REF -->

#### Description

The `Formula` command <!-- REF #_command_.Formula.Summary -->creates a `4D Function` object based upon the _formulaExp_ expression<!-- END REF -->. .

Le fait d'avoir une formule en tant qu'objet permet de la passer en tant que paramètre (champ calculé) à des commandes ou à des méthodes ou de l'exécuter à partir de divers composants sans avoir à les déclarer comme "partagés par les composants et la base de données hôte". Lorsqu'il est appelé, l'objet formula est évalué dans le contexte de la base de données ou du composant qui l'a créé.

La formule retournée peut être appelée avec :

- [`.call()`](#call) or [`.apply()`](#apply) methods, or
- la syntaxe de la notation objet (voir [objet formula](#formula-object)).

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)
 $o:=New object("myFormula";$f)

  //three different ways to call the formula
 $f.call($o) //retourne 3
 $f.apply($o) //retourne 3
 $o.myFormula() //retourne 3
```

Vous pouvez passer des [paramètres](#passing-parameters) à `Formula`, comme le montre l'[exemple 4](#example-4) ci-dessous.

Vous pouvez indiquer l'objet sur lequel la formule est exécutée, comme le montre l'[exemple 5](#example-5). Les propriétés de l'objet sont alors accessibles via la commande `This`.

Si _formuleExp_ utilise des variables locales, leurs valeurs sont copiées et stockées dans l'objet formule retourné lors de sa création. Lors de son exécution, la formule utilise ces valeurs copiées plutôt que la valeur courante des variables locales. A noter que l'utilisation de tableaux comme variables locales n'est pas prise en charge.

L'objet créé par `Formula` peut être enregistré, par exemple, dans un champ de base de données ou dans un document blob.

#### Exemple 1

Une formule simple :

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)

 var $o : Object
 $o:=New object("f";$f)

 $result:=$o.f() // retourne 3
```

#### Exemple 2

Une formule utilisant des variables locales :

```4d


 $value:=10
 $o:=New object("f";Formula($value))
 $value:=20

 $result:=$o.f() // returns 10
```

#### Exemple 3

Une formule simple utilisant des paramètres :

```4d
 $o:=New object("f";Formula($1+$2))
 $result:=$o.f(10;20) //retourne 30
```

#### Exemple 4

Une formule simple utilisant des paramètres :

```4d
 $o:=New object("f";Formula(myMethod))
 $result:=$o.f("param1";"param2") // équivalent à $result:=myMethod("param1";"param2")
```

#### Exemple 5

Avec l'utilisation de `This` :

```4d
 $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))
 $o.firstName:="John"
 $o.lastName:="Smith"
 $result:=$o.fullName() //retourne "John Smith"
```

#### Exemple 6

Appeler une formule à l'aide de la notation objet :

```4d
 var $feta; $robot : Object
 var $calc : 4D.Function
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

  //sets the formula to object properties
 $feta.calc:=$calc
 $robot.calc:=$calc

  //call the formula
 $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}
 $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}
```

## Formula from string

<details><summary>Historique</summary>

| Release | Modifications                                                             |
| ------- | ------------------------------------------------------------------------- |
| 20 R3   | Prise en charge du paramètre _context_                                    |
| 17 R6   | Renommée : New formula from string -> Formula from string |
| 17 R3   | Ajout                                                                     |

</details>

<!-- REF #_command_.Formula from string.Syntax -->**Formula from string**( *formulaString* : Text ) : 4D.Function<br/>**Formula from string**( *formulaString* : Text ; *context* : Longint ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula from string.Params -->

| Paramètres    | Type                        |     | Description                                                                                       |
| ------------- | --------------------------- | :-: | ------------------------------------------------------------------------------------------------- |
| formulaString | Text                        |  -> | Formule texte à retourner comme objet                                                             |
| context       | Number                      |  -> | `sk execute in current database` (par défaut) ou `sk execute in host database` |
| Résultat      | 4D.Function |  <- | Objet natif encapsulant la formule                                                                |

<!-- END REF -->

#### Description

The `Formula from string` command <!-- REF #_command_.Formula from string.Summary -->creates a `4D.Function` object based upon the _formulaString_ and, optionnally, a _context_<!-- END REF -->.  crée un objet `4D.Function` sur la base de _formulaString_ et, éventuellement, d'un \*contexte \*

This command is similar to [`Formula`](#formula), except that it handles a text-based formula and allows to define an execution context. It is usually recommended to use the `Formula` command, except if the original formula was expressed as text (e.g., stored externally in a JSON file), or if you want to create a formula in a host database while calling `Formula from string` from a component. L'utilisation de la syntaxe avec tokens est fortement conseillée avec cette commande.

> Le contenu des variables locales n'étant pas accessible par nom en mode compilé, il ne peut pas être utilisé dans la _formulaString_. Si vous tentez d'accéder à une variable locale avec `Formula from string`, cela génèrera une erreur (-10737).

Si la formule est créée dans un composant, vous pouvez envisager d'utiliser le paramètre _context_ . Par défaut, les formules étant exécutées dans le contexte dans lequel elles ont été créées, elles ne pourront pas appeler une variable, une fonction ou une méthode non partagée de la base de données hôte. Dans ce cas, vous pouvez passer la constante `sk execute in host database` au paramètre _context_ pour exécuter l'objet `4D.Function` dans le contexte de la base de données hôte. Les constantes suivantes sont disponibles :

| Constante                        | Type    | Description                                                                                   |
| -------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| `sk execute in current database` | Longint | (par défaut) La formule sera exécutée dans le contexte où elle a été créée |
| `sk execute in host database`    | Longint | La formule sera exécutée dans le contexte de la base de données de hôte                       |

#### Exemple

Le code suivant permettra de créer un dialogue acceptant une formule dans un format texte :

```4d
 var $textFormula : Text
 var $f : 4D.Function
 $textFormula:=Request("Please type a formula")
 If(ok=1)
    $f:=Formula from string($textFormula)
    ALERT("Result = "+String($f.call()))
 End if
```

![](../assets/en/API/formulaDialog.png)

... et exécute la formule :

![](../assets/en/API/formulaAlert.png)

<!-- REF FunctionClass.apply().Desc -->

## .apply()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R3   | Ajout         |

</details>

<!-- REF #FunctionClass.apply().Syntax -->**.apply**() : any<br/>**.apply**( *thisObj* : Object { ; *formulaParams* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->

| Paramètres    | Type       |     | Description                                                                                                                       |
| ------------- | ---------- | :-: | --------------------------------------------------------------------------------------------------------------------------------- |
| thisObj       | Object     |  -> | Objet à retourner par la commande This dans la formule                                                                            |
| formulaParams | Collection |  -> | Collection des valeurs à passer en tant que $1...$n lorsque `formula` est exécuté |
| Résultat      | any        |  <- | Valeur obtenue à partir de l'exécution de la formule                                                                              |

<!-- END REF -->

#### Description

The `.apply()` function <!-- REF #FunctionClass.apply().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. L'objet formula peut être créé à l'aide des commandes `Formula` ou `Formula from string`.

Dans le paramètre _thisObj_, vous pouvez passer une référence à l'objet à utiliser en tant que `This` dans la formule.

Vous pouvez également passer une collection à utiliser comme paramètres $1...$n dans la formule à l'aide du paramètre facultatif _formulaParams_.

Note that `.apply()` is similar to [`.call()`](#call) except that parameters are passed as a collection. Cela peut être utile pour passer des résultats calculés.

#### Exemple 1

```4d
 var $f : 4D.Function
 $f:=Formula($1+$2+$3)

 $c:=New collection(10;20;30)
 $result:=$f.apply(Null;$c) // returns 60
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

| Paramètres | Type   |    | Description                                                                                                                           |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------------------------------------------------------- |
| thisObj    | Object | -> | Objet à retourner par la commande This dans la formule                                                                                |
| params     | any    | -> | Valeur(s) à passer en tant que $1...$n lorsque formula est exécuté |
| Résultat   | any    | <- | Valeur obtenue à partir de l'exécution de la formule                                                                                  |

<!-- END REF -->

#### Description

The `.call()` function <!-- REF #FunctionClass.call().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. L'objet formula peut être créé à l'aide des commandes `Formula` ou `Formula from string`.

Dans le paramètre _thisObj_, vous pouvez passer une référence à l'objet à utiliser en tant que `This` dans la formule.

Vous pouvez également passer des valeurs à utiliser comme paramètres _$1...$n_ dans la formule à l'aide du paramètre facultatif _params_.

Note that `.call()` is similar to [`.apply()`](#apply) except that parameters are passed directly.

#### Exemple 1

```4d
 var $f : 4D.Function
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // returns "HELLO"
```

#### Exemple 2

```4d
 $o:=New object("value";50)
 $f:=Formula(This.value*2)
 $result:=$f.call($o) // returns 100
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

The `.source` property <!-- REF #FunctionClass.source.Summary -->contains the source expression of the `formula` as text<!-- END REF -->.

Cette propriété est en **lecture seule**.

#### Exemple

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```

<!-- END REF -->

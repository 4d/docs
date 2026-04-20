---
id: FormulaClass
title: Formula
---

Les objets `4D.Formula` sont créés par les commandes [Formula](../commands/formula) ou [Formula from string](../commands/formula-from-string) et vous permettent d'exécuter n'importe quelle expression ou code 4D exprimé sous forme de texte d'une seule ligne.

Les objets de la classe `4D.Formula` héritent de la classe [`4D.Function`](./FunctionClass.md). Ainsi, pour exécuter la formule, vous pouvez :

- placer un objet `4D.Formula` dans une propriété d'objet et utiliser l'opérateur `()` après le nom de la propriété,
- ou appeler directement l'objet `4D.Formula` en utilisant la fonction [`call()`](#call) ou [`apply()`](#apply) sur lui.

Voir les exemples dans le paragraphe [Exécution du code dans les objets Function](../API/FunctionClass.md#executing-code-in-function-objects).

:::info

This class is [**streamable**](../Concepts/dt_object.md#binary-streaming-variable-to-blob) in binary.

:::

### Passer des paramètres aux formules

Vous pouvez passer des paramètres à vos formules en utilisant une syntaxe séquentielle basée sur `$1, $2,...,$n`. La numérotation des paramètres $ représente l'ordre dans lequel ils seront passés à la formule. Par exemple, vous pouvez écrire :

```4d
 $f:={message: Formula(ALERT("Hello "+$2+", "+$1))}
 $f.message("John";"Smith") //affiche "Hello Smith, John"
```

Ou en utilisant la fonction [.call()](#call) :

```4d
 var $f : 4D.Formula
 $f:=Formula($1+" "+$2)
 $text:=$f.call(Null;"Hello";"World") //retourne "Hello World"
 $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //retourne "Welcome to 2026" (par exemple)
```

#### Paramètres d'une seule méthode

Pour plus de commodité, lorsque la formule est constituée d'une seule méthode projet, les paramètres peuvent être omis dans l'initialisation de l'objet formule. Ils peuvent simplement être passés lorsque la formule est appelée. Par exemple :

```4d
 var $f : 4D.Formula

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

### Objet formule

|                                                                                                              |
| ------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<br/><!-- INCLUDE #FunctionClass.apply().Summary --> |
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<br/><!-- INCLUDE #FunctionClass.call().Summary -->    |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<br/><!-- INCLUDE #FunctionClass.source.Summary -->  |

<!-- INCLUDE FunctionClass.apply().Desc -->

#### Exemple 1

```4d
 var $f : 4D.Formula
 $f:=Formula($1+$2+$3)

 $c:=New collection(10;20;30)
 $result:=$f.apply(Null;$c) // retourne 60
```

#### Exemple 2

```4d
 var $calc : 4D.Formula
 var $feta; $robot : Object
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

 $calc.apply($feta) // $feta={name:Feta,price:12.5,quantity:5,total:62.5}
 $calc.apply($robot) // $robot={name:Robot,price:543,quantity:2,total:1086}
```

<!-- INCLUDE FunctionClass.call().Desc -->

#### Exemple 1

```4d
 var $f : 4D.Formula
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // retourne "HELLO"
```

#### Exemple 2

```4d
 $o:=New object("value";50)
 $f:=Formula(This.value*2)
 $result:=$f.call($o) // retourne 100
```

<!-- INCLUDE FunctionClass.source.Desc -->

#### Exemple

```4d
 var $of : 4D.Formula
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
```

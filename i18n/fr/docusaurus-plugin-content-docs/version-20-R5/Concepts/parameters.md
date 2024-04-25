---
id: parameters
title: Paramètres
---

Vous aurez souvent besoin de fournir des valeurs à vos méthodes et fonctions. Vous pouvez facilement effectuer cette opération grâce aux paramètres.

## Vue d’ensemble

**Parameters** (or **arguments**) are pieces of data that a method or a class function needs in order to perform its task. The terms _parameter_ and _argument_ are used interchangeably throughout this manual. Des paramètres sont également passés aux commandes intégrées de 4D. In this example, the string “Hello” is an argument to the `ALERT` built-in command:

```4d
ALERT("Bonjour")
```

Les paramètres sont passés de la même manière aux méthodes ou aux fonctions de classe (class functions). For example, if a class function named `getArea()` accepts two parameters, a call to the class function might look like this:

```4d
$area:=$o.getArea(50;100)
```

Or, if a project method named `DO_SOMETHING` accepts three parameters, a call to the method might look like this:

```4d
FAIRE QUELQUE CHOSE($AvecCeci;$EtCela;$CommeCeci)
```

Les paramètres d'entrée sont séparés par des points-virgules (;).

Les mêmes principes s'appliquent lorsque des méthodes sont exécutées via des commandes dédiées, comme par exemple :

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//pass the !05/05/20! date as parameter to the SetCalendarDate  
//in the context of a subform
```

Data can also be **returned** from methods and class functions. For example, the following line is a statement that uses the built-in command, `Length`, to return the length of a string. The statement puts the value returned by `Length` in a variable called _MyLength_.

```4d
MaLongueur:=Length("Comment suis-je arrivé là ?")
```

Toute sous-routine peut retourner une valeur. Un seul paramètre de sortie peut être déclaré par méthode ou fonction de classe.

Input and output values are [evaluated](#values-or-references) at the moment of the call and copied into or from local variables within the called class function or method. Variable parameters must be [declared](#declaring-parameters) in the called code.

:::info Compatibilité

Throughout the 4D documentation, you might see examples where parameters are automatically copied in sequentially numbered local variables ($0, $1, etc.) and declared using compiler directives. Ex: `C_TEXT($1;$2)`. Cette ancienne syntaxe est toujours prise en charge mais n'est plus recommandée.

:::

## Déclaration des paramètres

Dans les méthodes et fonctions de classe qui sont appelées, les valeurs des paramètres sont assignées aux variables locales. You usually declare parameters using a **parameter name** along with a **parameter type**, separated by colon.

- For class functions, parameters are declared along with the `Function` keyword.
- For methods (project methods, form object methods, database methods, and triggers), parameters are declared using the `#DECLARE` keyword at the beginning of the method code.

Exemples :

```4d
Function getArea($width : Integer; $height : Integer) -> $area : Integer
```

```4d
 //myProjectMethod
#DECLARE ($i : Integer) -> $myResult : Object
```

Les règles suivantes s'appliquent :

- La ligne de déclaration doit être la première ligne de code de la méthode ou de la fonction, sinon une erreur est affichée (seuls des commentaires ou des sauts de ligne peuvent précéder la déclaration).
- Parameter names must start with a `$` character and be compliant with [property naming rules](identifiers.md#object-properties).
- Les paramètres multiples (et leurs types) sont séparés par des points-virgules (;).
- Les syntaxes multilignes sont prises en charge (en utilisant le caractère "\").

For example, when you call a `getArea()` function with two parameters:

```4d
$area:=$o.getArea(50;100)
```

Dans le code de la fonction de classe, la valeur de chaque paramètre est copiée dans le paramètre déclaré correspondant :

```4d
// Class: Polygon
Function getArea($width : Integer; $height : Integer)-> $area : Integer
	$area:=$width*$height
```

> If the type is not defined, the parameter will be defined as [`Variant`](dt_variant.md).

All 4D method kinds support the `#DECLARE` keyword, including database methods. For example, in the `On Web Authentication` database method, you can declare named parameters:

```4d
	// On Web Authentication database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean
$entitySelection:=ds.User.query("login=:1"; $user)
// Check hash password...
```

### Valeur retournée

You declare the return parameter of a function by adding an arrow (->) and the parameter definition after the input parameter(s) list. Par exemple :

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

You can also declare the return parameter only by adding `: type`, in which case it can be handled by a [return statement](#return-expression). Par exemple :

```4d
Function add($x : Variant; $y : Integer): Integer
	return $x+$y
```

:::warning

Parameters, which include the returned value, must be declared only once. In particular, you cannot declare the same parameter as input and output, even with the same type. Par exemple :

```qs
	//invalid declaration
Function myTransform ($x : Integer) -> $x : Integer 
	//error: $x is declared twice
```

:::

### Type de données pris en charge

With named parameters, you can use the same data types as those which are [supported by the `var` keyword](variables.md#using-the-var-keyword), including class objects. Par exemple :

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```

:::note

Tables or array expressions can only be passed [as reference using a pointer](dt_pointer.md#pointers-as-parameters-to-methods).

:::

### Initialisation

When parameters are declared, they are initialized to the [**default value corresponding to their type**](data-types.md#default-values), which they will keep during the session as long as they have not been assigned.

## `return {expression}`

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

The `return` statement ends function or method execution and can be used to return an expression to the caller.

Par exemple, la fonction suivante retourne le carré de son argument, $x, où $x est un nombre.

```4d
Function square($x : Integer) 
   return $x * $x
```

> Internally, `return x` executes `$0:=x` or (if declared) `myReturnValue:=x`, and returns to the caller. If `return` is used without an expression, the function or method returns a null value of the declared return type (if any), otherwise _undefined_.

The `return` statement can be used along with the standard syntax for [returned values](#returned-value) (the returned value must be of the declared type). Cependant, notez qu'elle met immédiatement fin à l'exécution du code. Par exemple :

```4d
Function getValue
	$0:=10
	return 20
	// returns 20

Function getValue -> $v : Integer
	return 10
	$v:=20 // never executed
	// returns 10
```

## Indirections sur les paramètres (${N})

Les méthodes et fonctions 4D acceptent un nombre variable de paramètres. You can address those parameters with a `For...End for` loop, the [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html) command and the **parameter indirection syntax**. Within the method, an indirection address is formatted `${N}`, where `N` is a numeric expression.

### Utilisation des paramètres variadiques

Par un exemple, considérons une méthode qui calcule une somme de valeurs retournée suivant un format passé comme paramètre. A chaque appel à cette méthode, le nombre de valeurs à additionner peut varier. Il faudra donc passer comme paramètre à notre méthode les valeurs, en nombre variable, et le format, exprimé sous forme d’une chaîne de caractères.

Here is the method, named `MySum`:

```4d
 #DECLARE($format : Text) -> $result : Text
 $sum:=0
 For($i;2;Count parameters)
    $sum:=$sum+${$i}
 End for
 $result:=String($sum;$format)
```

Les paramètres de la méthode doivent être passés dans le bon ordre : le format d’abord et ensuite les valeurs, dont le nombre peut varier :

```4d
 Result:=MySum("##0.00";125,2;33,5;24) //"182.70"
 Result:=MySum("000";1;2;200) //"203"
```

Notez que même si vous avez déclaré 0, 1, ou plus paramètres, vous pouvez toujours passer le nombre de paramètres que vous voulez. Parameters are all available within the called code through the `${N}` syntax and extra parameters type is [Variant](dt_variant.md) by default (you can declare them using the [variadic notation](#declaring-variadic-parameters)). You just need to make sure parameters exist, thanks to the [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html) command. Par exemple :

```4d
//foo method
#DECLARE($p1: Text;$p2 : Text; $p3 : Date) 
For($i;1;Count parameters)
	ALERT("param "+String($i)+" = "+String(${$i}))
End for
```

Cette méthode peut être appelée :

```4d
foo("hello";"world";!01/01/2021!;42;?12:00:00?) //extra parameters are passed
```

> Pour une bonne gestion de cette indirection, il est important de respecter la convention suivante : si tous les paramètres ne sont pas adressés par indirection, ce qui est le cas le plus fréquent, il faut que les paramètres adressés par indirection soient passés en fin de liste.

### Déclaration des paramètres variadiques

Il n'est pas obligatoire de déclarer les paramètres variadiques. Non-declared variadic parameters automatically get the [Variant](dt_variant.md) type.

Toutefois, pour éviter les erreurs de correspondance de type lors de l'exécution du code, vous pouvez déclarer un nombre variable de paramètres en utilisant la notation "..." dans les prototypes de vos fonctions, constructeurs de classes et méthodes (paramètres variadiques). Vous spécifiez le type du paramètre en suivant la notation "..." avec le type désiré.

```4d
#DECLARE ( ... : Text ) // Undefined number of 'Text' parameters

```

```4d
Function myfunction ( ... : Text)

```

Lors de la déclaration de plusieurs paramètres, la notation variadique doit être employée en dernière position, par exemple :

```4d
#DECLARE ( param: Real ; ... : Text )

```

```4d
Function myfunction (var1: Integer ; ... : Text)
```

#### Exemple

Here we have a method called `SumNumbers` that returns the calculated total for all the numbers passed as parameters:

```4d

#DECLARE( ... : Real) : Real 



var $number; $total : Real 

For each ($number; 1; Count parameters)
	$total+=${$number}
End for each 

return $total

```

Cette méthode peut être appelée avec un nombre variable de paramètres Real. Dans le cas d'un paramètre de type incorrect, une erreur sera renvoyée avant que la méthode ne soit exécutée :

```4d

$total1:=SumNumbers // returns 0 
$total2:=SumNumbers(1; 2; 3; 4; 5) // returns 15
$total3:=SumNumbers(1; 2; "hello"; 4; 5) // error

```

:::note Compatibility Note

The legacy syntax for declaring variadic parameters (`C_TEXT(${4})`) is still supported for compatibility but the variadic notation is now preferred.

:::

## Compilation

Even if it is not mandatory in [interpreted mode](interpreted.md), you must make sure that all method and function parameters are properly declared as soon as you intend to compile your project.

:::note

You can delegate the declaration of parameters (as well as all variables) to the compiler by checking the [**Type the variable** compilation path option](../Project/compiler.md#compilation-path). However this option significantly increases compilation time.

:::

### Parameters declared in prototypes

When using the `#DECLARE` or `Function` keywords, parameters are automatically declared and no additional information is needed for the compiler. Exemples :

```4d
#DECLARE($myParam : Text; $myOtherParam : Integer) : Boolean
	// all method parameters are declared with their type
```

```4d
	// On Web Connection Database Method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text)
```

```4d
Function add($x : Variant; $y : Integer)-> $result : Integer
	// all function parameters are declared with their type
```

:::tip

Declaring parameters in prototypes is a good practice, even in non-compiled projects.

:::

### Method parameters declared outside prototypes

It can happen that method parameters are not declared in `#DECLARE` prototypes. Such statements can be found in particular in legacy 4D code. In this case, you must configure a `Compiler_Methods` method to gather the declarations for these method parameters.

#### `Compiler_Methods` method

When some method parameters are not declared in `#DECLARE` prototypes, the 4D compiler needs that you declare them in a specific method using a special syntax:

- vous pouvez regrouper tous les paramètres des variables locales des méthodes projet dans une ou plusieurs méthode(s) projet
- the method name(s) must start with "**Compiler_**", by default "Compiler_Methods".
- within such a method, you predeclare the parameters for each method using the following syntax: `C_XXX(methodName;parameter)`.

Par exemple :

```4d
 // Compiler_Methods
 C_REAL(OneMethodAmongOthers;$1;$2) 
```

:::note

Cette syntaxe n'est pas exécutable en mode interprété.

:::

You can create and fill automatically a `Compiler_Methods` method containing all your parameters declared outside prototypes using the [**Compiler Methods for...**](../Project/compiler.md#compiler-methods-for) **Methods** button in the Compiler Settings dialog box.

:::info

#### Particular cases

Some contexts do not support declaration in a "Compiler_" method, thus they are handled specifically:

- Triggers - Le paramètre $0 (Entier long), qui résulte d'un trigger, sera typé par le compilateur si le paramètre n'a pas été explicitement déclaré. Néanmoins, si vous souhaitez le déclarer, vous devez le faire dans le trigger lui-même.

- Form objects that accept the `On Drag Over` form event - The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Néanmoins, si vous souhaitez le déclarer, vous devez le faire dans la méthode projet.
  **Note:** The compiler does not initialize the $0 parameter. So, as soon as you use the `On Drag Over` form event, you must initialize $0. Par exemple :

```4d
 C_LONGINT($0)
 If(Form event code=On Drag Over)
    $0:=0
    ...
    If($DataType=Is picture)
       $0:=-1
    End if
    ...
 End if
```

:::

### Conflicts between declarations

- If a parameter is declared in both a `#DECLARE` prototype and a _Compiler__ method, the entry from the  _Compiler__ method is ignored.
- If a parameter is declared in both a `#DECLARE` prototype and a _Compiler__ method but with a different data type, the Code Live Checker generates an error during syntax checking and compilation.

## Type de paramètre erroné

Calling a parameter with an wrong type is an [error](error-handling.md) that prevents correct execution. Par exemple, si vous écrivez les méthodes suivantes :

```4d
// method1
#DECLARE($value : Text)
```

```4d
// method2
method1(42) //mauvais type, texte attendu
```

Ce cas est traité par 4D en fonction du contexte :

- in [compiled projects](interpreted.md), an error is generated at the compilation step whenever possible. Sinon, une erreur est générée lorsque la méthode est appelée.
- dans les projets interprétés :
  - if the parameter was declared using the [named syntax](#named-parameters) (`#DECLARE` or `Function`), an error is generated when the method is called.
  - if the parameter was declared using (`C_XXX`), no error is generated, the called method receives an empty value of the expected type.

## Utilisation des propriétés d'objet comme paramètres nommés

Using objects as parameters allow you to handle **named parameters**. Ce style de programmation est simple, souple et facile à lire.

For example, using the `CreatePerson` method:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

In the `ChangeAge` method you can write:

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

This provides a powerful way to define [optional parameters](#optional-parameters) (see also below). Pour gérer les paramètres manquants, vous pouvez :

- check if all expected parameters are provided by comparing them to the `Null` value, or
- prédéfinir les valeurs des paramètres, ou
- les utiliser sous forme de valeurs vides.

In the `ChangeAge` method above, both Age and Name properties are mandatory and would produce errors if they were missing. Pour éviter cela, vous pouvez simplement écrire :

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

Les deux paramètres sont alors optionnels. S'ils ne sont pas renseignés, le résultat sera "a 10 ans", mais aucune erreur ne sera générée.

Enfin, les paramètres nommés permettent de maintenir et de reproduire des applications en toutes simplicité et sécurité. Imaginez que vous réalisez, par la suite, qu'ajouter 10 ans n'est pas toujours approprié. Vous aurez besoin d'un autre paramètre pour définir le nombre d'années à ajouter. Vous pouvez écrire :

```4d
$person:=New object("Name";"Smith";"Age";40;"toAdd";10)
ChangeAge($person)

//ChangeAge
var $1;$para : Object
$para:=$1  
If ($para.toAdd=Null)
	$para.toAdd:=10
End if
$para.Age:=Num($para.Age)+$para.toAdd
ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

Ici, toute la puissance réside dans le fait de ne pas avoir à changer votre code existant. Cela fonctionnera toujours dans l'ancienne version, mais le cas échéant, vous pouvez utiliser une autre valeur que 10 ans.

Avec les variables nommées, n'importe quel paramètre peut être optionnel. Dans l'exemple ci-dessus, tous les paramètres sont optionnels et peuvent être donnés, dans n'importe quel ordre.

## Paramètres optionnels

In the _4D Language Reference_ manual, the { } characters (braces) indicate optional parameters. For example, `ALERT (message{; okButtonTitle})` means that the _okButtonTitle_ parameter may be omitted when calling the command. Vous pouvez l'appeler comme suit :

```4d
ALERT("Etes*vous sûr?";"Oui, je le suis") //2 paramètres
ALERT("Temps écoulé") //1 paramètre
```

Les méthodes et les fonctions 4D acceptent également de ces paramètres optionnels. Vous pouvez déclarer un nombre quelconque de paramètres. If you call a method or function with less parameters than declared, missing parameters are processed as default values in the called code, [according to their type](data-types.md#default-values). Par exemple :

```4d
// "concate" function of myClass
Function concate ($param1 : Text ; $param2 : Text)->$result : Text
$result:=$param1+" "+$param2
```

```4d
  // Méthode appelante
 $class:=cs.myClass.new()
 $class.concate("Hello") // "Hello "
 $class.concate() // Affiche " "
```

> Vous pouvez également appeler une méthode ou une fonction avec plus de paramètres que ceux déclarés. They will be available within the called code through the [${N} syntax](#parameter-indirection-n).

Using the `Count parameters` command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received.

L'exemple suivant affiche un message et peut insérer le texte dans un document sur disque ou dans une zone 4D Write Pro :

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )
 
 #DECLARE ($message : Text; $path : Text; $wpArea : Object)
  
 ALERT($message)
 If(Count parameters>=3)
    WP SET TEXT($wpArea;$1;wk append)
 Else
    If(Count parameters>=2)
       TEXT TO DOCUMENT($path;$message)
    End if
 End if
```

Une fois que cette méthode projet a été ajoutée à votre application, vous pouvez écrire :

```4d
APPEND TEXT(vtSomeText) //Affichera uniquement le message
APPEND TEXT(vtSomeText;$path) //Affiche le message et l'annexe au document dans $path
APPEND TEXT(vtSomeText;"";$wpArea) //Affiche le message et l'écrit dans $wpArea
```

> When optional parameters are needed in your methods, you might also consider using [object properties as named parameters](#using-objects-properties-as-named-parameters) which provide a flexible way to handle variable numbers of parameters.

## Valeurs ou références

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the local variables in the class function or subroutine. Les variables/paramètres locaux ne correspondent pas aux véritables champs, variables ou expressions passés par la méthode appelée; ils contiennent uniquement les valeurs qui n'ont pas été passées. Les variables/paramètres locaux ne correspondent pas aux véritables champs, variables ou expressions passés par la méthode appelée; ils contiennent uniquement les valeurs qui n'ont pas été passées. Par exemple :

```4d
	//Here is some code from the method MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)
 
	//Here is the code of the method DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
```

The alert box displayed by `DO_SOMETHING` will read "WILLIAMS" and the alert box displayed by `MY_METHOD` will read "williams". The method locally changed the value of the parameter $1, but this does not affect the value of the field `[People]Name` passed as parameter by the method `MY_METHOD`.

There are two ways to make the method `DO_SOMETHING` change the value of the field:

1. Plutôt que de passer le champ à la méthode, vous lui passez un pointeur :

```4d
  //Here is some code from the method MY_METHOD
 DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Last Name)
 
  //Here the code of the method DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

Ici, le paramètre n'est pas le champ lui-même, mais un pointeur vers le champ. Therefore, within the `DO SOMETHING` method, $1 is no longer the value of the field but a pointer to the field. The object **referenced** by $1 ($1-> in the code above) is the actual field. Par conséquent, la modification de l'objet référencé dépasse les limites de la sous-routine et le champ lui-même est affecté. Dans cet exemple, les deux boîtes de dialogue d'alerte afficheront "WILLIAM".

2. Rather than having the method `DO_SOMETHING` "doing something," you can rewrite the method so it returns a value.

```4d
	//Here is some code from the method MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

	//Here the code of the method DO SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

This second technique of returning a value by a subroutine is called “using a function.” This is described in the <a href="#returning-values">Returning values</a> paragraph. This is described in the [Returning values](#returning-values) paragraph.

### Cas particuliers : objets et collections

You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal _pointer_).

Consequently, when using such data types as parameters, `$1, $2...` do not contain _values_ but _references_. Modifying the value of the `$1, $2...` parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for [pointers](dt_pointer.md#pointers-as-parameters-to-methods), except that `$1, $2...` parameters do not need to be dereferenced in the subroutine.

For example, consider the `CreatePerson` method that creates an object and sends it as a parameter:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

The `ChangeAge` method adds 10 to the Age attribute of the received object

```4d
  //ChangeAge
 #DECLARE ($person : Object)
 $person.Age:=$person.Age+10
 ALERT(String($person.Age))
```

When you execute the `CreatePerson` method, both alert boxes will read "50" since the same object reference is handled by both methods.

**4D Server:** When parameters are passed between methods that are not executed on the same machine (using for example the "Execute on Server" option), references are not usable. Dans ce cas, ce sont des copies des paramètres objet ou collection qui sont envoyées au lieu de références.

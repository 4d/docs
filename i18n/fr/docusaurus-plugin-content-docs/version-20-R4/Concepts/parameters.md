---
id: parameters
title: Parameters
---


Vous aurez souvent besoin de fournir des valeurs à vos méthodes et fonctions. Vous pouvez facilement effectuer cette opération grâce aux paramètres.

## Vue d’ensemble

**Les paramètres** (ou **arguments**) sont des données dont une méthode ou une fonction de classe a besoin pour s’exécuter. Le terme *paramètres* ou *arguments* est utilisé indifféremment dans ce manuel. Des paramètres sont également passés aux commandes intégrées de 4D. Dans l’exemple ci-dessous, la chaîne “Bonjour” est un paramètre de la commande `ALERT` :

```4d
ALERT("Bonjour")
```

Les paramètres sont passés de la même manière aux méthodes ou aux fonctions de classe (class functions). Par exemple, si une fonction de classe nommée `getArea()` accepte deux paramètres, voilà à quoi pourrait ressembler un appel à la fonction de classe :

```4d
$area:=$o.getArea(50;100)
```

Ou si une méthode projet `FAIRE QUELQUE CHOSE` accepte trois paramètres, l'appel à cette méthode pourrait être de la forme suivante :

```4d
FAIRE QUELQUE CHOSE($AvecCeci;$EtCela;$CommeCeci)
```

Les paramètres d'entrée sont séparés par des points-virgules (;).

Les mêmes principes s'appliquent lorsque des méthodes sont exécutées via des commandes dédiées, comme par exemple :

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//passez la date du !05/05/20! comme paramètre de SetCalendarDate  
// dans le contexte d'un sous-formulaire
```

Les données peuvent également être **retournées** à partir de méthodes et de fonctions de classe. Par exemple, la ligne d’instruction suivante utilise une commande 4D, `Length`, qui retourne la longueur d’une chaîne. La valeur retournée par `Longueur` est placée dans une variable appelée *MaLongueur*.

```4d
MaLongueur:=Length("Comment suis-je arrivé là ?")
```

Toute sous-routine peut retourner une valeur. Un seul paramètre de sortie peut être déclaré par méthode ou fonction de classe.

Les valeurs d'entrée et de sortie sont [évaluées](#values-or-references) au moment de l'appel et copiées dans ou à partir de variables locales au sein de la fonction ou de la méthode appelée. Les variables de paramètres doivent être [déclarées](#declaring-parameters) dans le code appelé.


:::info Compatibilité

Dans la documentation de 4D, vous pouvez voir des exemples où les paramètres sont automatiquement copiés dans des variables locales numérotées séquentiellement ($0, $1, etc.) et déclarées à l'aide de directives de compilation. Ex : `C_TEXT($1;$2)`. Cette ancienne syntaxe est toujours prise en charge mais n'est plus recommandée.

:::


## Déclaration des paramètres

Dans les méthodes et fonctions de classe qui sont appelées, les valeurs des paramètres sont assignées aux variables locales. Vous déclarez généralement les paramètres en utilisant un **nom de paramètre** et un **type de paramètre**, séparés par deux points.

- Pour les fonctions de classe, les paramètres sont déclarés via le mot clé `Function`.
- Pour les méthodes (méthodes projet, méthodes objet, méthodes base et triggers), les paramètres sont déclarés à l'aide du mot clé `#DECLARE` saisi au début du code de la méthode.

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
- Les noms des paramètres doivent commencer par un caractère `$` et être conformes aux [règles de nommage des propriétés](identifiers.md#propriétés-des-objets).
- Les paramètres multiples (et leurs types) sont séparés par des points-virgules (;).
- Les syntaxes multilignes sont prises en charge (en utilisant le caractère "\").


Par exemple, lorsque vous appelez une fonction `getArea()` avec deux paramètres :

```4d
$area:=$o.getArea(50;100)
```

Dans le code de la fonction de classe, la valeur de chaque paramètre est copiée dans le paramètre déclaré correspondant :

```4d    
// Class: Polygon
Function getArea($width : Integer; $height : Integer)-> $area : Integer
    $area:=$width*$height
```
> Si le type n'est pas défini, le paramètre sera défini comme [`Variant`](dt_variant.md).

Tous les types de méthodes 4D prennent en charge le mot-clé `#DECLARE`, y compris les méthodes base. Par exemple, dans la méthode base `On Web Authentication`, vous pouvez déclarer des paramètres nommés :

```4d    
    // méthode base On Web Authentication
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean
$entitySelection:=ds.User.query("login=:1"; $user)
// vérifier le hash du mot de passe...
```

### Valeur retournée

Vous déclarez le paramètre de retour d'une fonction en ajoutant une flèche (->) et la définition du paramètre après la liste des paramètres d'entrée. Par exemple :

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

Vous pouvez également déclarer le paramètre de retour en ajoutant uniquement `: type`, auquel cas il peut être traité par un [return](#return-expression). Par exemple :

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

Avec les paramètres nommés, vous pouvez utiliser les mêmes types de données que ceux qui sont [pris en charge par le mot-clé `var`](variables.md#utilisation-du-mot-clé-var), y compris les objets des classes. Par exemple :

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```

:::note

Les expressions tables ou arrays (tableaux) peuvent être passées uniquement [par référence en utilisant un pointeur](dt_pointer.md#pointers-as-parameters-to-methods).

:::

### Initialisation

Lorsque les paramètres sont déclarés, ils sont initialisés à la [**valeur par défaut correspondant à leur type**](data-types.md#valeurs-par-defaut), qu'ils conserveront pendant la session tant que l'on ne leur aura pas affecté une valeur.



## `return {expression}`

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R4  | Ajout         |
</details>

L'instruction `return` met fin à l'exécution d'une fonction ou d'une méthode et peut être utilisée pour retourner une expression à l'appelant.

Par exemple, la fonction suivante retourne le carré de son argument, $x, où $x est un nombre.

```4d
Function square($x : Integer) 
   return $x * $x
```

> En interne, `return x` exécute `$0:=x` ou (si elle est déclarée) `myReturnValue:=x`, et retourne à l'appelant. Si `return` est utilisé sans expression, la fonction ou la méthode retourne une valeur nulle du type de retour déclaré (le cas échéant), sinon elle est *indéfinie*.


L'instruction `return` peut être utilisée avec la syntaxe standard pour les [valeurs retournées](#returned-value) (la valeur retournée doit être du type déclaré). Cependant, notez qu'elle met immédiatement fin à l'exécution du code. Par exemple :


```4d
Function getValue
    $0:=10
    return 20
    // retourne 20

Function getValue -> $v : Integer
    return 10
    $v:=20 // jamais exécutée
    // retourne 10
```



## Indirections sur les paramètres (${N})

Les méthodes et fonctions 4D acceptent un nombre variable de paramètres. Vous pouvez adresser ces paramètres avec une boucle `For...End for`, la commande [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html) et **la syntaxe d'indirection des paramètres**. Au sein de la méthode, une adresse d'indirection est formatée `${N}`, où `N` est une expression numérique.


### Utilisation des paramètres variadiques

Par un exemple, considérons une méthode qui calcule une somme de valeurs retournée suivant un format passé comme paramètre. A chaque appel à cette méthode, le nombre de valeurs à additionner peut varier. Il faudra donc passer comme paramètre à notre méthode les valeurs, en nombre variable, et le format, exprimé sous forme d’une chaîne de caractères.

Voici la méthode nommée `MySum` :

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

Notez que même si vous avez déclaré 0, 1, ou plus paramètres, vous pouvez toujours passer le nombre de paramètres que vous voulez. Tous les paramètres sont accessibles dans le code appelé via la syntaxe `${N}` et le type des paramètres supplémentaires est [Variant](dt_variant.md) par défaut (vous pouvez les déclarer en utilisant la notation variadique [](#declaring-variadic-parameters)). Il vous suffit de vous assurer que ces paramètres existent, grâce à la commande [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html). Par exemple :

```4d
//foo method
#DECLARE($p1: Text;$p2 : Text; $p3 : Date) 
For($i;1;Count parameters)
    ALERT("param "+String($i)+" = "+String(${$i}))
End for
```

Cette méthode peut être appelée :

```4d
foo("hello";"world";!01/01/2021!;42;?12:00:00?) //des paramètres supplémentaires sont passés
```

> Pour une bonne gestion de cette indirection, il est important de respecter la convention suivante : si tous les paramètres ne sont pas adressés par indirection, ce qui est le cas le plus fréquent, il faut que les paramètres adressés par indirection soient passés en fin de liste.


### Déclaration des paramètres variadiques

Il n'est pas obligatoire de déclarer les paramètres variadiques. Les paramètres variadiques non déclarés obtiennent automatiquement le type [Variant](dt_variant.md).

Toutefois, pour éviter les erreurs de correspondance de type lors de l'exécution du code, vous pouvez déclarer un nombre variable de paramètres en utilisant la notation "..." dans les prototypes de vos fonctions, constructeurs de classes et méthodes (paramètres variadiques). Vous spécifiez le type du paramètre en suivant la notation "..." avec le type désiré.

```4d
#DECLARE ( ... : Text ) // Nombre indéfini de paramètres 'Text'

```

```4d
Fonction myfunction ( ... : Text)

```


Lors de la déclaration de plusieurs paramètres, la notation variadique doit être employée en dernière position, par exemple :

```4d
#DECLARE ( param: Real ; ... : Text )

```

```4d
Function myfunction (var1: Integer ; ... : Text)
```



#### Exemple

Nous avons ici une méthode appelée `SumNumbers` qui renvoie le total calculé pour tous les nombres transmis en tant que paramètres :

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

$total1:=SumNumbers // renvoie 0 
$total2:=SumNumbers(1 ; 2 ; 3 ; 4 ; 5) // renvoie 15
$total3:=SumNumbers(1 ; 2 ; "hello" ; 4 ; 5) // erreur

```

:::note Note de compatibilité

La syntaxe legacy de déclaration des paramètres variadiques (`C_TEXT(${4})`) est toujours prise en charge à des fins de compatibilité, mais la notation variadique est désormais préférée.

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

- Objets formulaires qui acceptent l'événement formulaire `Sur glisser` - Le paramètre $0 (Entier long), qui résulte de l'événement formulaire `Sur glisser` est typé par le compilateur si le paramètre n'a pas été explicitement déclaré. Néanmoins, si vous souhaitez le déclarer, vous devez le faire dans la méthode projet. **Note :** Le compilateur n'initialise pas le paramètre $0. Ainsi, dès que vous utilisez l'événement formulaire `Sur glisser`, vous devez initialiser $0. Par exemple :

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

- If a parameter is declared in both a `#DECLARE` prototype and a *Compiler_* method, the entry from the  *Compiler_* method is ignored.
- If a parameter is declared in both a `#DECLARE` prototype and a *Compiler_* method but with a different data type, the Code Live Checker generates an error during syntax checking and compilation.



## Type de paramètre erroné

L'appel d'un paramètre de type incorrect est une [erreur](error-handling.md) qui empêche une exécution correcte. Par exemple, si vous écrivez les méthodes suivantes :

```4d
// method1
#DECLARE($value : Text)
```

```4d
// method2
method1(42) //mauvais type, texte attendu
```

Ce cas est traité par 4D en fonction du contexte :

- dans les [projets compilés](interpreted.md), une erreur est générée à l'étape de compilation lorsque cela est possible. Sinon, une erreur est générée lorsque la méthode est appelée.
- dans les projets interprétés :
    + si le paramètre a été déclaré en utilisant [la syntaxe nommée](#named-parameters) (`#DECLARE` ou `Function`), une erreur est générée lorsque la méthode est appelée.
    + si le paramètre a été déclaré à l'aide de (`C_XXX`), aucune erreur n'est générée, la méthode appelée reçoit une valeur vide du type attendu.






## Utilisation des propriétés d'objet comme paramètres nommés

L'utilisation d'objets en tant que paramètres vous permet de gérer des **paramètres nommés**. Ce style de programmation est simple, souple et facile à lire.

Par exemple, si vous utilisez la méthode `CreatePerson` :

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

Dans la méthode `ChangeAge`, vous pouvez écrire :

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

C'est un moyen puissant de définir des [paramètres optionnels](#optional-parameters) (voir ci-dessous également). Pour gérer les paramètres manquants, vous pouvez :
- vérifier si tous les paramètres attendus sont fournis en les comparant à la valeur `Null`, ou
- prédéfinir les valeurs des paramètres, ou
- les utiliser sous forme de valeurs vides.

Dans la méthode `ChangeAge` ci-dessus, les propriétés Age et Nom sont obligatoires et pourraient générer des erreurs si elles sont manquantes. Pour éviter cela, vous pouvez simplement écrire :

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

Dans le manuel *Langage de 4D*, les caractères { } (accolades) indiquent des paramètres facultatifs. Par exemple, `ALERT (message{; okButtonTitle})` signifie que le paramètre *okButtonTitle* doit être omis lors de l'appel de la commande. Vous pouvez l'appeler comme suit :

```4d
ALERT("Etes*vous sûr?";"Oui, je le suis") //2 paramètres
ALERT("Temps écoulé") //1 paramètre
```

Les méthodes et les fonctions 4D acceptent également de ces paramètres optionnels. Vous pouvez déclarer un nombre quelconque de paramètres. Si vous appelez une méthode ou une fonction avec moins de paramètres que ceux déclarés, les paramètres manquants sont traités comme des valeurs par défaut dans le code appelé, [en fonction de leur type](data-types.md#default-values). Par exemple :

```4d
// fonction "concate" de myClass
Function concate ($param1 : Text ; $param2 : Text)->$result : Text
$result:=$param1+" "+$param2
```
```4d
  // Méthode appelante
 $class:=cs.myClass.new()
 $class.concate("Hello") // "Hello "
 $class.concate() // Affiche " "
```

> Vous pouvez également appeler une méthode ou une fonction avec plus de paramètres que ceux déclarés. Ils seront disponibles dans le code appelé grâce à la [syntaxe ${N}](#parameter-indirection-n).

A l'aide de la commande `Count parameters` contenue dans la méthode appelée, vous pouvez détecter le nombre de paramètres et effectuer des opérations différentes en fonction de ce nombre.

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

> Lorsque les paramètres sont nécessaires dans vos méthodes, vous pouvez également envisager des [propriétés d'objet comme paramètres nommés](#using-objects-properties-as-named-parameters) pour gérer plusieurs paramètres de manière flexible.



## Valeurs ou références

Lorsque vous passez un paramètre, 4D évalue toujours l'expression du paramètre dans le contexte de la méthode appelée et définit la**valeur résultante** sur les variables locales dans la fonction de classe ou la sous-routine. Les variables/paramètres locaux ne correspondent pas aux véritables champs, variables ou expressions passés par la méthode appelée; ils contiennent uniquement les valeurs qui n'ont pas été passées. Les variables/paramètres locaux ne correspondent pas aux véritables champs, variables ou expressions passés par la méthode appelée; ils contiennent uniquement les valeurs qui n'ont pas été passées. Par exemple :

```4d
    //Voici du code extrait de la méthode MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)

    //Voici du code extrait de la méthode  DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
```

La boîte de dialogue d'alerte affichée par `FAIRE QUELQUE CHOSE` contiendra "WILLIAM" et celle affichée par `MA METHODE` contiendra "william". La méthode a modifié localement la valeur du paramètre $1, mais cela n'affecte pas la valeur du champ `[Personnes]Nom` passé en paramètre par la méthode `MA METHODE`.

Si vous voulez réellement que la méthode `FAIRE QUELQUE CHOSE` modifie la valeur du champ, deux solutions s'offrent à vous :

1. Plutôt que de passer le champ à la méthode, vous lui passez un pointeur :

```4d
  //Voici du code extrait de la méthode  MY_METHOD
 DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Last Name)

  //Voici du code extrait de la méthode  DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

Ici, le paramètre n'est pas le champ lui-même, mais un pointeur vers le champ. Ainsi, à l'intérieur de la méthode `FAIRE QUELQUE CHOSE`, $1 ne contient plus la valeur du champ mais un pointeur vers le champ. L'objet **référencé** par $1 ($1-> dans le code ci-dessus) est le champ lui-même. Par conséquent, la modification de l'objet référencé dépasse les limites de la sous-routine et le champ lui-même est affecté. Dans cet exemple, les deux boîtes de dialogue d'alerte afficheront "WILLIAM".

2. Plutôt que la méthode `FAIRE QUELQUE CHOSE` “fasse quelque chose”, vous pouvez la réécrire de manière à ce qu'elle retourne une valeur.

```4d
    //Voici du code extrait de la méthode MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

    //Voici du code extrait de la méthode DO SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

This second technique of returning a value by a subroutine is called “using a function.” This is described in the [Returning values](#returning-values) paragraph. Ceci est décrit dans le paragraphe [Valeurs retournées](#returning-values).


### Cas particuliers : objets et collections

Veillez à ce que les types de données d'Objet et Collection ne puissent être gérés que via une référence (c'est-à-dire un* pointeur* interne).

Par conséquent, lorsque vous utilisez des types de données comme paramètres, `$1, $2 ...` ne contiennent pas des *valeurs*, mais des *références*. La modification de la valeur des paramètres `$1, $2 ...` dans la sous-routine sera propagée à chaque fois que l'objet ou la collection source est utilisé(e). C'est le même principe que pour [les pointeurs](dt_pointer.md#passer-des-pointeurs-aux-méthodes), à la différence que les paramètres `$1, $2...` n'ont pas besoin d'être déréférencés dans la sous-routine.

Par exemple, considérons que la méthode `CreatePerson`, qui crée un objet et qui l'envoie comme paramètre :

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```


La méthode `ChangeAge` ajoute 10 à l'attribut Age de l'objet reçu

```4d
  //ChangeAge
 #DECLARE ($person : Object)
 $person.Age:=$person.Age+10
 ALERT(String($person.Age))
```

Si vous exécutez la méthode `CreatePerson`, les deux messages d'alerte contiendront "50" car le même objet est traité par les deux méthodes.


**4D Server :** Lorsque des paramètres sont passés entre des méthodes qui ne sont pas exécutées sur la même machine (lors de l'utilisation de l'option Exécuter sur serveur par exemple), il n'est pas possible d'utiliser des références. Dans ce cas, ce sont des copies des paramètres objet ou collection qui sont envoyées au lieu de références.



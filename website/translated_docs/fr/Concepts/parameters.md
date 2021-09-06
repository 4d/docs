---
id: parameters
title: Paramètres
---


Vous aurez souvent besoin de fournir des valeurs à vos méthodes et fonctions. Vous pouvez facilement effectuer cette opération grâce aux paramètres.

## Aperçu

**Les paramètres** (ou **arguments**) sont des données dont une méthode ou une fonction de classe a besoin pour s’exécuter. Le terme *paramètres* ou *arguments* est utilisé indifféremment dans ce manuel. Des paramètres sont également passés aux commandes intégrées de 4D. Dans l’exemple ci-dessous, la chaîne “Bonjour” est un paramètre de la commande `ALERTE` :

```4d
ALERT("Bonjour")
```

Les paramètres sont passés de la même manière aux méthodes ou aux fonctions de classe (class functions). Par exemple, si une fonction de classe nommée `getArea()` accepte deux paramètres, voilà) à quoi pourrait ressembler un appel à la fonction de classe :

```
$area:=$o.getArea(50;100)
```

Ou si la méthode `FAIRE QUELQUE CHOSE` accepte trois paramètres, l'appel à cette méthode pourrait être de la forme suivante :

```4d
FAIRE QUELQUE CHOSE(AvecCeci; EtCela; CommeCeci)
```

Les paramètres d'entrée sont séparés par des points-virgules (;).

Les mêmes principes s'appliquent lorsque des méthodes sont exécutées via des commandes consacrées, comme par exemple :

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//passez la date du !05/05/20! comme paramètre de SetCalendarDate  
// dans le contexte d'un sous-formulaire
```

Les données peuvent également être **retournées** à partir de méthodes et de fonctions de classe. Par exemple, la ligne d’instruction suivante utilise une commande intégrée, `Longueur`, qui retourne la longueur d’une chaîne. La valeur retournée par `Longueur` est placée dans une variable appelée *MaLongueur*.

```4d
MaLongueur:=Length("Comment suis-je arrivé là ?")
```

Toute sous-routine peut retourner une valeur. Only one single output parameter can be declared per method or class function.

Les valeurs d'entrée et de sortie sont [évaluées](#values-or-references) au moment de l'appel et copiée dans les variables locales au sein de la fonction de classe ou de la méthode appelée. Two syntaxes are proposed to declare variable parameters in the called code:

- [named variables](#named-parameters) (recommended in most cases) or
- [sequentially numbered variables](#sequential-parameters).


Both [named](#named-parameters) and [sequential](#sequential-parameters) syntaxes can be mixed with no restriction to declare parameters. Par exemple :

```4d
Function add($x : Integer)
    var $0;$2 : Integer
    $0:=$x+$2
```




## Paramètres nommés

Dans les méthodes et fonctions de classe qui sont appelées, les valeurs des paramètres sont assignées aux variables locales. Vous pouvez déclarer des paramètres en utilisant un **nom de paramètre** avec un **type de paramètre**, séparés par deux-points.

- Pour les fonctions de classe, les paramètres sont déclarés avec le mot clé `Function`.
- Pour les méthodes (méthodes projet, méthodes objet formulaire, méthodes de base de données et les triggers), les paramètres sont déclarés à l'aide du mot clé `#DECLARE` saisi au début du code de la méthode.

Voici quelques exemples :

```4d
Voici quelques exemples :

```4d
Function getArea($width : Integer; $height : Integer) -> $area : Integer
```

```4d  
 //myProjectMethod
#DECLARE ($i : Integer) -> $myResult : Object
```


Les règles suivantes s'appliquent :

- La ligne de déclaration doit être la première ligne de code de la méthode ou de la fonction, sinon une erreur est affichée (seuls les commentaires ou les sauts de ligne peuvent précéder la déclaration).
- Parameter names must start with a `$` character and be compliant with [property naming rules](dt_object.md#object-property-identifiers).
- Plusieurs paramètres (et types) sont séparés par des points-virgules (;).
- Les syntaxes multilignes sont prises en charge (en utilisant le caractère "\\").


For example, when you call a `getArea()` function with two parameters:

```4d
$area:=$o.getArea(50;100)
```

In the class function code, the value of each parameter is copied into the corresponding declared parameter:

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

You can also declare the return parameter only by adding `: type`, in which case it will automatically be available through `$0` ([see sequential syntax below](#returned-value-1)). Par exemple :

```4d
Function add($x : Variant; $y : Integer): Integer
    $0:=$x+$y
```


### Type de données pris en charge

With named parameters, you can use the same data types as those which are [supported by the `var` keyword](variables.md#using-the-var-keyword), including class objects.  Par exemple :

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```





## Paramètres séquentiels

As an alternative to [named parameters](#named-parameters) syntax, you can declare parameters using sequentially numbered variables: **$1**, **$2**, **$3**, and so on. La numérotation des variables locales représente l’ordre des paramètres.

> Although this syntax is supported by class functions, it is recommended to use [named parameters](#named-parameters) syntax in this case.

For example, when you call a `DO_SOMETHING` project method with three parameters:

```4d
FAIRE QUELQUE CHOSE(AvecCeci; EtCela; CommeCeci)
```

In the method code, the value of each parameter is automatically copied into $1, $2, $3 variables:

```4d
  //Code of the method DO_SOMETHING
  //Assuming all parameters are of the text type
 C_TEXT($1;$2;$3)
 ALERT("I received "+$1+" and "+$2+" and also "+$3)
  //$1 contains the $WithThis parameter
  //$2 contains the $AndThat parameter
  //$3 contains the $ThisWay parameter
```


### Valeur retournée

The value to be returned is automatically put into the local variable `$0`.


Par exemple, la méthode suivante, appelée `Uppercase4`, retourne une chaîne dont les quatre premiers caractères ont été passés en majuscules :

```4d
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

Voici un exemple qui utilise la méthode Uppercase4 :

```4d
$NewPhrase:=Uppercase4("This is good.")
```

Dans cet exemple, la variable *$NewPhrase* prend la valeur “THIS is good.”

La valeur retournée, `$0`, est une variable locale à la sous-routine. Elle peut être utilisée en tant que telle à l'intérieur de la sous-routine. Par exemple, vous pouvez écrire :

```4d
// Faire_quelque chose
$0:=Uppercase($1)
ALERT($0)
```

Dans cet exemple, `$0` recevait d'abord la valeur de `$1`, puis était utilisée en tant que paramètre de la commande `ALERT`. Dans une sous-méthode, vous pouvez utiliser `$0` comme n'importe quelle autre variable locale. C'est 4D qui retourne sa valeur finale `$0` (sa valeur courante au moment où la sous-routine se termine) à la méthode appelée.


### Type de données pris en charge

You can use any [expression](quick-tour.md#expression-types) as sequential parameter, except:

- tables
- arrays

Tables or array expressions can only be passed [as reference using a pointer](dt_pointer.md#pointers-as-parameters-to-methods).

## Parameter indirection (${$i})

Les méthodes projets 4D acceptent un grand nombre de paramètres de même type, commençant par la droite. Ce principe est appelé **l'indirection des paramètres**. Using the [`Count parameters`](https://doc.4d.com/4dv19/help/command/en/page259.html) command you can then address those parameters with a `For...End for` loop and the parameter indirection syntax. Within the method, an indirection address is formatted `${$i}`, where `$i` is a numeric variable. `${$i}` is called a **generic parameter**.

Dans l'exemple qui suit, la méthode projet `ENVOYER PAQUET` accepte le paramètre de temps suivi d'un nombre de variables des paramètres de texte :

```4d
  //SEND PACKETS Project Method
  //SEND PACKETS ( Time ; Text { ; Text2... ; TextN } )
  //SEND PACKETS ( docRef ; Data { ; Data2... ; DataN } )

 C_TIME($1)
 C_TEXT(${2}) //generic parameter declaration
 C_LONGINT($vlPacket)

 For($vlPacket;2;Count parameters)
    SEND PACKET($1;${$vlPacket})
 End for
```

> Pour une bonne gestion de cette indirection, il est important de respecter la convention suivante : si tous les paramètres ne sont pas adressés par indirection, ce qui est le cas le plus fréquent, il faut que les paramètres adressés par indirection soient passés en fin de liste.



### Using generic parameters

Consider a method that adds values and returns the sum formatted according to a format that is passed as a parameter. A chaque appel à cette méthode, le nombre de valeurs à additionner peut varier. Il faudra donc passer comme paramètre à notre méthode les valeurs, en nombre variable, et le format, exprimé sous forme d’une chaîne de caractères.

This method is called in the following manner:

```4d
 Résultat:=LaSomme("##0,00";125,2;33,5;24)

```

In this case, the calling method will get the string "182.70", which is the sum of the numbers, formatted as specified. The method's parameters must be passed in the correct order: first the format and then the values.

Here is the method, named `MySum`:

```4d
 $Somme:=0
 For($i;2;Nombre de paramètres)
    $Somme:=$Somme+${$i}
 End for
 $0:=String($Somme;$1)
```

This method can now be called in various ways:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)
 Result:=MySum("000";1;2;3;200)
```

Note that even if you declared one or more parameters in the method, you can always pass the number of parameters that you want. In this case, extra parameters are all available through the `${$i}` syntax and their type is [Variant](dt_variant.md). You just need to make sure parameters exist, thanks to the [`Count parameters`](https://doc.4d.com/4dv19/help/command/en/page259.html) command. Par exemple :

```4d
#DECLARE($param1 : Text) //we declare a single parameter, but we can get more
MESSAGE( "First parameter: "+$param1)
For($i;2;Count parameters)
    MESSAGE( "parameter "+string($i)+": " +String(${$i}))
End for
```


### Déclaration des paramètres génériques

De même que pour les autres variables locales, la déclaration du paramètre générique par directive de compilation n’est pas obligatoire. Il est néanmoins recommandé d'éviter toute ambiguïté. Non-declared generic parameters automatically get the [Variant](dt_variant.md) type.

To declare generic parameters parameters, you use a compiler directive to which you pass ${N} as a parameter, where N specifies the first generic parameter.

```4d
 C_LONGINT(${4})
```

> Declaring generic parameters can only be done with the [sequential syntax](#sequential-parameters).

La commande ci-dessus signifie que tous les paramètres à partir du quatrième (inclus) seront adressés par indirection. Ils seront tous de type Entier long. Les types de $1, $2 et $3 pourront être quelconques. En revanche, si vous utilisez $2 par indirection, le type utilisé sera le type générique. Il sera donc de type Entier long, même si pour vous, par exemple, il était de type Réel.

> The number in the declaration has to be a constant and not a variable.





## Déclaration des paramètres pour le mode compilé

Even if it is not mandatory in [interpreted mode](interpreted.md), you must declare each parameter in the called methods or functions to prevent any trouble.

When using the [named variable syntax](#named-parameters), parameters are automatically declared through the `#DECLARE` keyword or `Function` prototype. Par exemple :

```4d
Function add($x : Variant; $y : Integer)-> $result : Integer
    // all parameters are declared with their type
```


When using the [sequential variable syntax](#sequential-parameters), you need to make sure all parameters are properly declared. Dans l'exemple suivant, la méthode projet `ajoutCapitale` accepte un paramètre texte et retourne un résultat texte :

```4d
  // Méthode projet ajoutCapitale
  // ajoutCapitale ( Texte ) -> Texte
  // ajoutCapitale( Chaîne source ) -> chaîne avec la première lettre capitale

 C_TEXTE($0;$1)
 $0:=Majusc(Sous chaine($1;1;1))+Minusc(Sous chaine($1;2))
```

L'utilisation de commandes telles que `Nouveau process` avec les méthodes process qui acceptent les paramètres nécessite également que les paramètres soient explicitement déclarés dans la méthode appelée. Par exemple :

```4d
C_TEXT($string)
C_LONGINT($idProc;$int)
C_OBJECT($obj)

$idProc:=New process("foo_method";0;"foo_process";$string;$int;$obj)
```

Ce code peut être exécuté en mode compilé, uniquement si "foo_method" déclare ses paramètres :

```4d
//foo_method
C_TEXT($1)
C_LONGINT($2)
C_OBJECT($3)
...
```

> En mode compilé, vous pouvez regrouper tous les paramètres de variables locales pour les méthodes projets dans un méthode spécifique avec un nom commençant par "Compiler". Dans cette méthode, vous pouvez prédéclarer les paramètres de chaque méthode, comme par exemple :
```4d  
 // Compiler_method
 C_REAL(OneMethodAmongOthers;$1) 
```
See [Interpreted and compiled modes](interpreted.md) page for more information.

La déclaration des paramètres est également obligatoire dans les contextes suivants (ces contextes ne prennent pas en charge les déclarations dans une méthode "Compiler") :

- Méthodes base - Par exemple, la `méthode base Sur connexion Web` reçoit six paramètres, allant de $1 à $6, de type Texte. Au début de la méthode base, vous devez écrire (même si tous les paramètres ne sont pas utilisés) :

```4d
// Sur connexion Web
C_TEXT($1;$2;$3;$4;$5;$6)
```

> You can also use [named parameters](#named-parameters) with the `#DECLARE` keyword.

- Triggers - Le paramètre $0 (Entier long), qui résulte d'un trigger, sera typé par le compilateur si le paramètre n'a pas été explicitement déclaré. Néanmoins, si vous souhaitez le déclarer, vous devez le faire dans le trigger lui-même.

- Objets formulaires qui acceptent l'événement formulaire `Sur glisser` - Le paramètre $0 (Entier long), qui résulte de l'événement formulaire `Sur glisser` est typé par le compilateur si le paramètre n'a pas été explicitement déclaré. Néanmoins, si vous souhaitez le déclarer, vous devez le faire dans la méthode projet. **Note :** Le compilateur n'initialise pas le paramètre $0. Ainsi, dès que vous utilisez l'événement formulaire `Sur glisser`, vous devez initialiser $0. Par exemple :

```4d
 C_LONGINT($0)
 If(Form event=On Drag Over)
    $0:=0
    ...
    If($DataType=Is picture)
       $0:=-1
    End if
    ...
 End if
```

## Wrong parameter type

Calling a parameter with an wrong type is an [error](error-handling.md) that prevents correct execution. For example, if you write the following methods:

```4d
// method1
#DECLARE($value : Text)
```

```4d
// method2
method1(42) //wrong type, text expected
```

This case is handled by 4D depending on the context:

- in [compiled projects](interpreted.md), an error is generated at the compilation step whenever possible. Otherwise, an error is generated when the method is called.
- in interpreted projects:
    + if the parameter was declared using the [named syntax](#named-parameters) (`#DECLARE` or `Function`), an error is generated when the method is called.
    + if the parameter was declared using the [sequential syntax](#sequential-parameters) (`C_XXX`), no error is generated, the called method receives an empty value of the expected type.





## Variables d'entrée/de sortie

Dans une sous-méthode, vous pouvez utiliser les paramètres $1, $2... comme n'importe quelle autre variable locale. Toutefois, dans le cas où vous utilisez des commandes qui modifient la valeur de la variable passée en paramètre (par exemple `Trouver dans champ`), les paramètres $1, $2, etc. ne peuvent pas être utilisés directement. Vous devez d'abord les recopier dans des variables locales standard (par exemple `$mavar:=$1`).



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

Les méthodes projet 4D acceptent également des paramètres optionnels, en commençant par la droite. Cependant, il est difficile de gérer les paramètres optionnels lorsque certains d'entre eux sont manquants dans la méthode appelée - cela ne devrait jamais générer d'erreur. Une bonne pratique consisterait à assigner des valeurs par défaut aux paramètres non utilisés.

> Lorsque les paramètres sont nécessaires dans vos méthodes, vous pouvez également envisager des [propriétés d'objet comme paramètres nommés](#using-objects-properties-as-named-parameters) pour gérer plusieurs paramètres de manière flexible.

A l'aide de la commande `Count parameters` contenue dans la méthode appelée, vous pouvez détecter le nombre de paramètres et effectuer des opérations différentes en fonction de ce nombre.

L'exemple suivant affiche un message et peut insérer le texte dans un document sur disque ou dans une zone 4D Write Pro :

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )

 Method($message : Text; $path : Text; $wpArea : Object)

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

Cette deuxième technique de renvoi d'une valeur par une sous-routine est appelée «utilisation d'une fonction». Ceci est décrit dans le paragraphe [Valeurs retournées](#returning-values).


### Cas particuliers : objets et collections

Veillez à ce que les types de données d'Objet et Collection ne puissent être gérés que via une référence (c'est-à-dire un* pointeur* interne).

Par conséquent, lorsque vous utilisez des types de données comme paramètres, `$1, $2 ...` ne contiennent pas des *valeurs*, mais des *références*. La modification de la valeur des paramètres `$1, $2 ...` dans la sous-routine sera propagée à chaque fois que l'objet ou la collection source est utilisé(e). This is the same principle as for [pointers](dt_pointer.md#pointers-as-parameters-to-methods), except that `$1, $2...` parameters do not need to be dereferenced in the subroutine.

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



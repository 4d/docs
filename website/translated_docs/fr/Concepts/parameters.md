---
id: parameters
title: Paramètres
---


## Aperçu

Vous aurez souvent besoin de fournir des valeurs à vos méthodes. Vous pouvez facilement effectuer cette opération grâce aux paramètres.

**Les paramètres** (ou **arguments**) sont des données dont les méthodes ont besoin pour s’exécuter. Le terme *paramètres* ou *arguments* est utilisé indifféremment dans ce manuel. Des paramètres sont également passés aux commandes intégrées de 4D. Dans l’exemple ci-dessous, la chaîne “Bonjour” est un paramètre de la commande `ALERTE` :

```4d
ALERT("Bonjour")
```

Parameters are passed to methods or class functions in the same way. For example, if a class function named `getArea()` accepts two parameters, a call to the class function might look like this:

    $area:=$o.getArea(50;100)
    

Or, if a project method named `DO_SOMETHING` accepts three parameters, a call to the method might look like this:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

Les paramètres sont séparés par des points-virgules (;). Their value is [evaluated](#values-or-references) at the moment of the call and copied into local variables within the called class function or method, either in named variables (class functions only) or sequentially numbered variables (methods and class functions).

## Named parameters (class functions)

Inside called class functions, parameter values are assigned to local variables. You can declare class function parameters using a **parameter name** along with a **parameter type**, separated by colon. The parameter name must be [ECMA Script](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6) compliant. Multiple parameters (and types) are separated by semicolons (;).

For example, when you call a `getArea()` function with two parameters:

    $area:=$o.getArea(50;100)
    

In the class function code, the value of each parameter is copied into the corresponding declared parameter:

```4d
// Class: Polygon
Function getArea($width: Integer; $height : Integer)
    var $0 : Integer
    $0:=$width*$height
```

> If the type is not defined, the parameter will be defined as `Variant`.
> 
> Sequential parameters can be used in conjunction with named parameters. Par exemple:
> 
> ```4d
Function add($x : Integer)
  var $0,$2 : Integer
  $0:=$x+$2
```

### Supported data types

With named parameters, you can use the same data types as those which are [supported by the `var` keyword](variables.md#using-the-var-keyword), including for example:

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```

## Sequential parameters

You can declare methods or class function parameters using sequentially numbered variables: **$1**, **$2**, **$3**, and so on. La numérotation des variables locales représente l’ordre des paramètres.

> This syntax is supported for methods and class functions. However for class functions, it is recommended to use named parameters syntax.

For example, when you call a `DO_SOMETHING` project method with three parameters:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
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

Les mêmes principes s'appliquent lorsque des méthodes sont exécutées via des commandes consacrées, comme par exemple :

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//pass the !05/05/20! comme paramètre de SetCalendarDate
// dans le contexte d'un sous-formulaire
```

**Note :** Pour une bonne exécution du code, assurez-vous que tous les paramètres `$1`, `$2`... sont correctement déclarés dans les méthodes appelées (voir [Déclaration des paramètres](#declaring-parameters) ci-dessous).

### Input/Output variables

A l'intérieur de la sous-routine, vous pouvez utiliser les paramètres $1, $2... de la même manière que vous utilisez les autres variables locales. Toutefois, dans le cas où vous utilisez des commandes qui modifient la valeur de la variable passée en paramètre (par exemple `Trouver dans champ`), les paramètres $1, $2, etc. ne peuvent pas être utilisés directement. Vous devez d'abord les recopier dans des variables locales standard (par exemple `$mavar:=$1`).

### Supported data types

You can use any [expression](Concepts/quick-tour.md#expression-types) as sequential parameter, except:

- tables
- arrays

Les expressions de tables ou de tableaux peuvent être passées uniquement [comme une référence utilisant un pointeur](Concepts/dt_pointer.md#pointers-as-parameters-to-methods).

### Using objects properties as named parameters

L'utilisation d'objets en tant que paramètres vous permet de gérer des **paramètres nommés**. Ce style de programmation est simple, souple et facile à lire.

Par exemple, si vous utilisez la méthode `CreatePerson` :

```4d
  //La méthode CreatePerson crée un objet et l'envoie en tant que paramètre
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(Chaine(OB Lire($person;"Age")))  
```

Dans la méthode `ChangeAge`, vous pouvez écrire :

```4d
  //ChangeAge
 C_OBJECT($1;$para)
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Nom+" a "+String($para.Age)+" ans.")
```

C'est un moyen puissant de définir des [paramètres optionnels](#optional-parameters) (voir ci-dessous également). Pour gérer les paramètres manquants, vous pouvez :

- vérifier si tous les paramètres attendus sont fournis en les comparant à la valeur `Null`, ou
- prédéfinir les valeurs des paramètres, ou
- les utiliser sous forme de valeurs vides.

Dans la méthode `ChangeAge` ci-dessus, les propriétés Age et Nom sont obligatoires et pourraient générer des erreurs si elles sont manquantes. Pour éviter cela, vous pouvez simplement écrire :

```4d
  //ChangeAge
 C_OBJECT($1;$para)
 $para:=$1  
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Nom+" a "+String($para.Age)+" ans.")
```

Les deux paramètres sont alors optionnels. S'ils ne sont pas renseignés, le résultat sera "a 10 ans", mais aucune erreur ne sera générée.

Enfin, les paramètres nommés permettent de maintenir et de reproduire des applications en toutes simplicité et sécurité. Imaginez que vous réalisez, par la suite, qu'ajouter 10 ans n'est pas toujours approprié. Vous aurez besoin d'un autre paramètre pour définir le nombre d'années à ajouter. Vous pouvez écrire :

```4d
$person:=New object("Nom";"Smith";"Age";40;"àAjouter";10)
ChangeAge($person)

//ChangeAge
C_OBJECT($1;$para)
$para:=$1  
If ($para.toAdd=Null)
    $para.toAdd:=10
End if
$para.Age:=Num($para.Age)+$para.toAdd
ALERT(String($para.Nom)+" a "+String($para.Age)+" ans.")
```

Ici, toute la puissance réside dans le fait de ne pas avoir à changer votre code existant. Cela fonctionnera toujours dans l'ancienne version, mais le cas échéant, vous pouvez utiliser une autre valeur que 10 ans.

Avec les variables nommées, n'importe quel paramètre peut être optionnel. Dans l'exemple ci-dessus, tous les paramètres sont optionnels et peuvent être donnés, dans n'importe quel ordre.

### Declaring variables for sequential parameters

Even if it is not mandatory in [interpreted mode](Concepts/interpreted.md), you must declare each sequential variable in the called methods to prevent any trouble.

Dans l'exemple suivant, la méthode projet `ajoutCapitale` accepte un paramètre texte et retourne un résultat texte :

```4d
  // Méthode projet ajoutCapitale
  // ajoutCapitale ( Texte ) -> Texte
  // ajoutCapitale( Chaîne source ) -> chaîne avec la première lettre capitale

 C_TEXTE($0;$1)
 $0:=Majusc(Sous chaine($1;1;1))+Minusc(Sous chaine($1;2))
```

L'utilisation de commandes telles que `Nouveau process` avec les méthodes process qui acceptent les paramètres nécessite également que les paramètres soient explicitement déclarés dans la méthode appelée. Par exemple:

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

> For compiled mode, you can group all local variable parameters for project methods in a specific method with a name starting with "Compiler". Dans cette méthode, vous pouvez prédéclarer les paramètres de chaque méthode, comme par exemple :

```4d
 // Compiler_method
 C_REAL(OneMethodAmongOthers;$1) 
```

Pour plus d'informations, consultez la page [Modes interprété et compilé](Concepts/interpreted.md).

La déclaration des paramètres est également obligatoire dans les contextes suivants (ces contextes ne prennent pas en charge les déclarations dans une méthode "Compiler") :

- Database methods - For example, the `On Web Connection Database Method` receives six parameters, $1 to $6, of the data type Text. Au début de la méthode base, vous devez écrire (même si tous les paramètres ne sont pas utilisés) :

```4d
// Sur connexion Web
C_TEXT($1;$2;$3;$4;$5;$6)
```

- Triggers - The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Néanmoins, si vous souhaitez le déclarer, vous devez le faire dans le trigger lui-même.

- Form objects that accept the `On Drag Over` form event - The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the object method. **Note :** Le compilateur n'initialise pas le paramètre $0. Ainsi, dès que vous utilisez l'événement formulaire `Sur glisser`, vous devez initialiser $0. Par exemple:

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
````

### Parameter indirection

4D project methods accept a variable number of parameters of the same type, starting from the right. This principle is called **parameter indirection**. Using the `Count parameters` command you can then address those parameters with a `For...End for` loop and the parameter indirection syntax.

In the following example, the project method `SEND PACKETS` accepts a time parameter followed by a variable number of text parameters:

```4d
  //SEND PACKETS Project Method
  //SEND PACKETS ( Time ; Text { ; Text2... ; TexteN } )
  //ENVOYER PAQUET ( docRef ; Données { ; Données2... ; DonnéesN } )

 C_TIME($1)
 C_TEXT(${2})
 C_LONGINT($vlPacket)

 For($vlPacket;2;Count parameters)
    ENVOYER PAQUET($1;${$vlPacket})
 End for
```

Pour une bonne gestion de cette indirection, il est important de respecter la convention suivante : si tous les paramètres ne sont pas adressés par indirection, ce qui est le cas le plus fréquent, il faut que les paramètres adressés par indirection soient passés en fin de liste. A l’intérieur de la méthode, l’adressage par indirection se fait sous la forme : ${$i}, $i étant une variable numérique. ${$i} est appelé **paramètre générique**.

Illustrons notre propos par un exemple : écrivons une fonction qui prend des valeurs, fait leur somme et renvoie cette somme formatée suivant un format qui peut varier avec les valeurs. A chaque appel à cette méthode, le nombre de valeurs à additionner peut varier. Il faudra donc passer comme paramètre à notre méthode les valeurs, en nombre variable, et le format, exprimé sous forme d’une chaîne de caractères. 

Un appel à cette fonction se fera de la façon suivante :

```4d
 Résultat:=LaSomme("##0,00";125,2;33,5;24)

```

La méthode appelante récupérera dans ce cas la chaîne : 182,70, somme des nombres passés, formatée suivant le format spécifié. Les paramètres de la fonction doivent être passés dans un ordre précis : le format d’abord et ensuite les valeurs, dont le nombre peut varier d’un appel à l’autre.

Examinons maintenant la fonction que nous appelons `LaSomme` :

```4d
 $Somme:=0
 For($i;2;Nombre de paramètres)
    $Somme:=$Somme+${$i}
 End for
 $0:=String($Somme;$1)
```

Cette fonction pourra être appelée de diverses manières :

```4d
 Résultat:=LaSomme("##0,00";125,2;33,5;24)
 Résultat:=LaSomme("000";1;18;4;23;17)
```

De même que pour les autres variables locales, la déclaration du paramètre générique par directive de compilation n’est pas obligatoire. Il est néanmoins recommandé d'éviter toute ambiguïté. Pour déclarer ces paramètres, utilisez une directive de compilateur à laquelle vous passez ${N} comme paramètre, où N est le premier paramètre générique.

```4d
 C_LONGINT(${4})
```

La commande ci-dessus signifie que tous les paramètres à partir du quatrième (inclus) seront adressés par indirection. Ils seront tous de type Entier long. Les types de $1, $2 et $3 pourront être quelconques. En revanche, si vous utilisez $2 par indirection, le type utilisé sera le type générique. Il sera donc de type Entier long, même si pour vous, par exemple, il était de type Réel.

> The number in the declaration has to be a constant and not a variable.

## Returning values

Data can be returned from methods and class functions. For example, the following line is a statement that uses the built-in command, `Length`, to return the length of a string. La valeur retournée par `Longueur` est placée dans une variable appelée *MaLongueur* : 

```4d
MaLongueur:=Length("Comment suis-je arrivé là ?")
```

Toute sous-routine peut retourner une valeur. La valeur à retourner est placée dans la variable locale `$0`.

The return parameter ($0) is not supported in the named parameter list. It must be declared inside the function code. Par exemple:

```4d
Function add($x : Variant;$y : Integer)
    var $0 : Text
```

For example, the following method, called `Uppercase4`, returns a string with the first four characters of the string passed to it in uppercase:

```4d
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

The following is an example that uses the Uppercase4 method:

```4d
$NewPhrase:=Uppercase4("This is good.")
```

In this example, the variable *$NewPhrase* gets “THIS is good.”

The returned value, `$0`, is a local variable within the subroutine. Elle peut être utilisée en tant que telle à l'intérieur de la sous-routine. For example, you can write:

```4d
// Faire_quelque chose
$0:=Uppercase($1)
ALERT($0)
```

Dans cet exemple, `$0` recevait d'abord la valeur de `$1`, puis était utilisée en tant que paramètre de la commande `ALERT`. Dans une sous-méthode, vous pouvez utiliser `$0` comme n'importe quelle autre variable locale. C'est 4D qui retourne sa valeur finale `$0` (sa valeur courante au moment où la sous-routine se termine) à la méthode appelée.

## Paramètres optionnels

Dans le manuel *Langage de 4D*, les caractères { } (accolades) indiquent des paramètres facultatifs. Par exemple, `ALERT (message{; okButtonTitle})` signifie que le paramètre *okButtonTitle* doit être omis lors de l'appel de la commande. Vous pouvez l'appeler comme suit :

```4d
ALERT("Etes*vous sûr?";"Oui, je le suis") //2 paramètres
ALERT("Temps écoulé") //1 paramètre
```

Les méthodes projet 4D acceptent également des paramètres optionnels, en commençant par la droite. Cependant, il est difficile de gérer les paramètres optionnels lorsque certains d'entre eux sont manquants dans la méthode appelée - cela ne devrait jamais générer d'erreur. Une bonne pratique consisterait à assigner des valeurs par défaut aux paramètres non utilisés.

> When optional parameters are needed in your methods, you might also consider using [object properties as named parameters](#using-objects-properties-as-named-parameters) which provide a flexible way to handle variable numbers of parameters.

A l'aide de la commande `Count parameters` contenue dans la méthode appelée, vous pouvez détecter le nombre de paramètres et effectuer des opérations différentes en fonction de ce nombre.

L'exemple suivant affiche un message et peut insérer le texte dans un document sur disque ou dans une zone 4D Write Pro :

```4d
// Méthode projet APPEND TEXT
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )

 C_TEXT($1;$2)
 C_OBJECT($3)

 ALERT($1)
 If(Count parameters>=3)
    WP SET TEXT($3;$1;wk append)
 Else
    If(Count parameters>=2)
       TEXT TO DOCUMENT($2;$1)
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

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the local variables in the class function or subroutine. Les variables/paramètres locaux ne correspondent pas aux véritables champs, variables ou expressions passés par la méthode appelée; ils contiennent uniquement les valeurs qui n'ont pas été passées. Since its scope is local, if the value of a parameter is modified in the class function/subroutine, it does not change the value in the calling method. Par exemple:

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

This second technique of returning a value by a subroutine is called “using a function.” This is described in the [Returning values](#returning-values) paragraph.

### Cas particuliers : objets et collections

Veillez à ce que les types de données d'Objet et Collection ne puissent être gérés que via une référence (c'est-à-dire un* pointeur* interne).

Par conséquent, lorsque vous utilisez des types de données comme paramètres, `$1, $2 ...` ne contiennent pas des *valeurs*, mais des *références*. La modification de la valeur des paramètres `$1, $2 ...` dans la sous-routine sera propagée à chaque fois que l'objet ou la collection source est utilisé(e). C'est le même principe que pour [les pointeurs](Concepts/dt_pointer.md#pointers-as-parameters-to-methods), à l'exception des paramètres `$1, $2 ...` n'ont pas besoin d'être déréférencés dans la sous-routine.

Par exemple, considérons que la méthode `CreatePerson`, qui crée un objet et qui l'envoie comme paramètre :

```4d
  //La méthode CreatePerson crée un objet et l'envoie en tant que paramètre
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(Chaine(OB Lire($person;"Age")))  
```

La méthode `ChangeAge` ajoute 10 à l'attribut Age de l'objet reçu

```4d
  //ChangeAge
 C_OBJECT($1)
$1.Age:=$1.Age+10
 ALERT(String($1;Age))
```

Si vous exécutez la méthode `CreatePerson`, les deux messages d'alerte contiendront "50" car le même objet est traité par les deux méthodes.

**4D Server :** Lorsque des paramètres sont passés entre des méthodes qui ne sont pas exécutées sur la même machine (lors de l'utilisation de l'option Exécuter sur serveur par exemple, voir Propriétés des méthodes projet), il n'est pas possible d'utiliser des références. Dans ce cas, ce sont des copies des paramètres objet ou collection qui sont envoyées au lieu de références.
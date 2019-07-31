---
id: parameters
title: Paramètres
---


## Utilisation des paramètres

Vous aurez souvent besoin de fournir des valeurs à vos méthodes. Vous pouvez facilement effectuer cette opération grâce aux paramètres.

**Les paramètres** (ou **arguments**) sont des données dont les méthodes ont besoin pour s’exécuter. Le terme *paramètres* ou *arguments* est utilisé indifféremment dans ce manuel. Des paramètres sont également passés aux commandes intégrées de 4D. Dans l’exemple ci-dessous, la chaîne “Bonjour” est un paramètre de la commande `ALERTE` :

```code4d
ALERTE("Bonjour")
```

Les paramètres sont passés de la même manière aux méthodes. Par exemple, si la méthode FAIRE QUELQUE CHOSE accepte trois paramètres, l'appel à cette méthode pourrait être de la forme suivante :

```code4d
FAIRE QUELQUE CHOSE(AvecCeci;EtCela;CommeCeci)
```

Les paramètres sont séparés par des points-virgules (;).

Dans la sous-routine (la méthode appelée), la valeur de chaque paramètre est automatiquement copiée séquentiellement dans des variables locales numérotées : $1, $2, $3, etc. La numérotation des variables locales représente l’ordre des paramètres.

```code4d
  //Code de la méthode FAIRE QUELQUE CHOSE
  //Supposons que tous les paramètres sont de type texte
 C_TEXTE($1;$2;$3)
 ALERTE("J'ai reçu "+$1+" et "+$2+" et aussi "+$3)
  //$1 contient le paramètre AvecCeci
  //$2 contient le paramètre EtCela
  //$3 contient le paramètre CommeCeci
```

A l'intérieur de la sous-routine, vous pouvez utiliser les paramètres $1, $2... de la même manière que vous utilisez les autres variables locales. Toutefois, dans le cas où vous utilisez des commandes qui modifient la valeur de la variable passée en paramètre (par exemple `Trouver dans champ`), les paramètres $1, $2, etc. ne peuvent pas être utilisés directement. Vous devez d'abord les recopier dans des variables locales standard (par exemple `$mavar:=$1`).

Les mêmes principes s'appliquent lorsque des méthodes sont exécutées via des commandes consacrées, comme par exemple :

```code4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  
//pass the !05/05/10! date as parameter to the SetCalendarDate  
// in the context of a subform
```

**Note:** For a good execution of code, you need to make sure that all `$1`, `$2`... parameters are correctly declared within called methods (see [Declaring parameters](#declaring-parameters) below).

## Fonctions

Les méthodes peuvent retourner des valeurs. Une méthode qui retourne une valeur est appelée une fonction.

Les commandes de 4D ou de plug-ins qui retournent une valeur sont également appelées fonctions.

Par exemple, la ligne d’instruction suivante utilise une fonction intégrée, `Longueur`, qui retourne la longueur d’une chaîne. La valeur retournée par `Longueur` est placée dans une variable appelée *MaLongueur* : 

```code4d
MaLongueur:=Longueur("Comment suis-je arrivé là ?")
```

Toute sous-routine peut retourner une valeur. La valeur à retourner est placée dans la variable locale `$0`.

Par exemple, la fonction suivante, appelée `Majuscules4`, retourne une chaîne dont les quatre premiers caractères ont été passés en majuscules :

```code4d
$0:=Majusc(Sous chaine($1;1;4))+Sous chaine($1;5)
```

Voici un exemple qui utilise la fonction Majuscules4 :

```code4d
NouvellePhrase:=Majuscules4("Bien joué.")
```

Dans ce cas, la variable *NouvellePhrase* prend la valeur “BIEN joué.”

Le retour de fonction, `$0`, est une variable locale à la sous-routine. Elle peut être utilisée en tant que telle à l'intérieur de la sous-routine. Par exemple, dans le cas de la méthode `FAIRE QUELQUE CHOSE` utilisée précédemment, `$0` recevait d'abord la valeur de `$1`, puis était utilisée en tant que paramètre de la commande `ALERTE`. Dans une sous-méthode, vous pouvez utiliser `$0` comme n'importe quelle autre variable locale. C'est 4D qui retourne sa valeur finale `$0` (sa valeur courante au moment où la sous-routine se termine) à la méthode appelée.

## Déclaration des paramètres

Even if it not mandatory in [interpreted mode](Concepts/interpreted.md), you must declare each parameter in the called methods to prevent any trouble.

In the following example, the `OneMethodAmongOthers` project method declares three parameters:

```code4d
  // OneMethodAmongOthers Project Method
  // OneMethodAmongOthers ( Real ; Date { ; Long } )
  // OneMethodAmongOthers ( Amount ; Date { ; Ratio } )

 C_REAL($1) // 1st parameter is of type Real
 C_DATE($2) // 2nd parameter is of type Date
 C_LONGINT($3) // 3rd parameter is of type Long Integer
```

In the following example, the `Capitalize` project method accepts a text parameter and returns a text result:

```code4d
  // Capitalize Project Method
  // Capitalize ( Text ) -> Text
  // Capitalize ( Source string ) -> Capitalized string

 C_TEXT($0;$1)
 $0:=Uppercase(Substring($1;1;1))+Lowercase(Substring($1;2))
```

Using commands such as `New process` with process methods that accept parameters also require that parameters are explicitely declared in the called method. Par exemple:

```code4d
C_TEXT($string)
C_LONGINT($idProc;$int)
C_OBJECT($obj)

$idProc:=New process("foo_method";0;"foo_process";$string;$int;$obj)
```

This code can be executed in compiled mode only if "foo_method" declares its parameters:

```code4d
//foo_method
C_TEXT($1)
C_LONGINT($2)
C_OBJECT($3)
...
```

**Note:** For compiled mode, you can group all local variable parameters for project methods in a specific method with a name starting with "Compiler". Within this method, you can predeclare the parameters for each method, for example:

```code4d
 C_REAL(OneMethodAmongOthers;$1) 
```

See [Interpreted and compiled modes](Concepts/interpreted.md) page for more information.

Parameter declaration is also mandatory in the following contexts (these contexts do not support declaration in a "Compiler" method):

- Database methods For example, the `On Web Connection Database Method` receives six parameters, $1 to $6, of the data type Text. At the beginning of the database method, you must write (even if all parameters are not used):

```code4d
// On Web Connection
C_TEXT($1;$2;$3;$4;$5;$6)
```

- Triggers The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the trigger itself.

- Form objects that accept the `On Drag Over` form event The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to decalre it, you must do so in the object method. **Note:** The compiler does not initialize the $0 parameter. So, as soon as you use the `On Drag Over` form event, you must initialize $0. Par exemple:

```code4d
 C_LONGINT($0)
 If(Form event=On Drag Over)
    $0:=0
    ...
    If($DataType=Is picture)
       $0:=-1
    End if
    ...
 Fin de si
```

## Passing mode

Depending on their type, parameters are passed **by copy** or **by reference**:

- When a parameter is passed by copy, the local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Since its scope is local, if the value of a parameter is modified in the subroutine, it does not change the value in the calling method.
- When a parameter is passed by reference, the local variables/parameters contain references that point to the actual source fields, variables, or expressions passed by the calling method; modifiying the value of the local parameter will modify the source value.

The following table shows how the different types of elements can be passed:

| Type of parameter                                                      | How passed                             | Comment                                                               |
| ---------------------------------------------------------------------- | -------------------------------------- | --------------------------------------------------------------------- |
| Field, variable or expression of a scalar type (number, text, date...) | by copy                                | Can be passed by reference through a pointer, see below               |
| Field, variable or expression of type Object                           | by reference                           | See example below                                                     |
| Variable or expression of type Collection                              | by reference                           |                                                                       |
| Variable or expression of type Pointer                                 | by reference                           | See Passing Pointers to Methods                                       |
| Tableau                                                                | Cannot be passed directly as parameter | Can be passed by reference through a pointer, see Arrays and Pointers |
| Table                                                                  | Cannot be passed directly as parameter | Can be passed by reference through a pointer, see Pointers            |

### Paramètres passés par copie

Lorsque vous utilisez des champs, variables ou expressions de type scalaire en tant que paramètres de méthodes projets, seules des copies des valeurs sont passées.

Puisque `$1, $2...` sont des variables locales, elles ne sont définies qu’à l’intérieur de la sous-routine et sont effacées à la fin de son exécution. Pour cette raison, une sous-routine ne peut pas modifier, au niveau de la méthode appelante, la valeur réelle des champs ou des variables passé(e) s en paramètre. Par exemple :

```code4d
  // Voici une partie de la méthode MA METHODE
  // ...
 FAIRE QUELQUE CHOSE([Personnes]Nom) // Admettons que [Personnes]Nom est égal à "william"
 ALERTE([Personnes]Nom)
 
  // Voici le code de la méthode FAIRE QUELQUE CHOSE
 $1:=Majusc($1)
 ALERTE($1)
```

La boîte de dialogue d'alerte affichée par `FAIRE QUELQUE CHOSE` contiendra "WILLIAM" et celle affichée par `MA METHODE` contiendra "william". La méthode a modifié localement la valeur du paramètre $1, mais cela n'affecte pas la valeur du champ `[Personnes]Nom` passé en paramètre par la méthode `MA METHODE`.

Si vous voulez réellement que la méthode `FAIRE QUELQUE CHOSE` modifie la valeur du champ, deux solutions s'offrent à vous :

1. 1. Plutôt que de passer le champ à la méthode, vous lui passez un pointeur :

```code4d
  // Voici une partie de la méthode MA METHODE
  // ...
 FAIRE QUELQUE CHOSE(->[Personnes]Nom) // Admettons que [Personnes]Nom est égal à "william"
 ALERTE([Personnes]Nom)
 
  // Voici le code de la méthode FAIRE QUELQUE CHOSE
 $1->:=Majusc($1->)
 ALERTE($1->)
```

Ici, le paramètre n'est pas le champ lui-même, mais un pointeur vers le champ. Ainsi, à l'intérieur de la méthode `FAIRE QUELQUE CHOSE`, $1 ne contient plus la valeur du champ mais un pointeur vers le champ. L'objet **référencé** par $1 ($1-> dans le code ci-dessus) est le champ lui-même. Par conséquent, la modification de l'objet référencé dépasse les limites de la sous-routine et le champ lui-même est affecté. Dans cet exemple, les deux boîtes de dialogue d'alerte afficheront "WILLIAM".

2. Plutôt que la méthode `FAIRE QUELQUE CHOSE` “fasse quelque chose”, vous pouvez la réécrire de manière à ce qu'elle retourne une valeur. 

```code4d
  // Voici une partie de la méthode MA METHODE
  // ...
 [Personnes]Nom:=FAIRE QUELQUE CHOSE([Personnes]Nom) // Admettons que [Personnes]Nom est égal à "william"
 ALERTE([Personnes]Nom)
 
  // Voici le code de la méthode FAIRE QUELQUE CHOSE
 $0:=Majusc($1)
 ALERTE($0)
```

Une sous-routine retournant une valeur est appelée une fonction. Ce point est traité dans les paragraphes suivants.

### Paramètres passés par référence

Lorsque vous utilisez des variables, expressions ou champs de type objet ou collection en tant que *paramètres* de méthodes projet, ce sont des références vers les données sources qui sont passées. Dans ce cas, `$1, $2...` ne contiennent pas les valeurs mais des références. Toute modification de la valeur des paramètres `$1, $2...` à l'intérieur de la sous-routine sera propagée partout où l'objet ou la collection source est utilisée. C'est le même principe que pour les pointeurs, excepté le fait que les paramètres `$1, $2...` n'ont pas besoin d'être déréférencés à l'intérieur de la sous-routine.

Par exemple, considérons que la méthode `CreatePerson`, qui crée un objet et qui l'envoie comme paramètre :

```code4d
  //La méthode CreatePerson crée un objet et l'envoie en tant que paramètre
 C_OBJET($person)
 $person:=Creer objet("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERTE(Chaine(OB Lire($person;"Age")))  
```

La méthode `ChangeAge` ajoute 10 à l'attribut Age de l'objet reçu

```code4d
  //ChangeAge
 C_OBJET($1)
$1.Age:=$1.Age+10
 ALERTE(Chaine($1;Age))
```

Si vous exécutez la méthode `CreatePerson`, les deux messages d'alerte contiendront "50" car la même référence est traitée par les deux méthodes.

**4D Server :** Lorsque des paramètres sont passés entre des méthodes qui ne sont pas exécutées sur la même machine (lors de l'utilisation de l'option Exécuter sur serveur par exemple, voir Propriétés des méthodes projet), il n'est pas possible d'utiliser des références. Dans ce cas, ce sont des copies des paramètres objet ou collection qui sont envoyées au lieu de références.

## Named parameters

Using objects as parameters allow you to handle **named parameters**. This programming style is simple, flexible, and easy to read.

For example, using the `CreatePerson` method:

```code4d
  //La méthode CreatePerson crée un objet et l'envoie en tant que paramètre
 C_OBJET($person)
 $person:=Creer objet("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERTE(Chaine(OB Lire($person;"Age")))  
```

In the `ChangeAge` method you can write:

```code4d
  //ChangeAge
 C_OBJECT($1;$para)
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

This provides a powerful way to define [optional parameters](#optional-parameters) (see also below). To handle missing parameters, you can either: - check if all expected parameters are provided by comparing them to the `Null` value, or - preset parameter values, or - use them as empty values.

In the `ChangeAge` method above, both Age and Name properties are mandatory and would produce errors if they were missing. To avoid this case, you can just write:

```code4d
  //ChangeAge
 C_OBJECT($1;$para)
 $para:=$1  
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

Then both parameters are optional; if they are not filled, the result will be " is 10 years old", but no error will be generated.

Finally, with named parameters, maintaining or refactoring applications is very simple and safe. Imagine you later realize that adding 10 years is not always appropriate. You need another parameter to set how many years to add. You write:

```code4d
$person:=New object("Name";"Smith";"Age";40;"toAdd";10)
ChangeAge($person)

//ChangeAge
C_OBJECT($1;$para)
$para:=$1  
If ($para.toAdd=Null)
    $para.toAdd:=10
End if
$para.Age:=Num($para.Age)+$para.toAdd
ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

The power here is that you will not need to change your existing code. It will always work as in the previous version, but if necessary, you can use another value than 10 years.

With named variables, any parameter can be optional. In the above example, all parameters are optional and anyone can be given, in any order.

## Optional parameters

In the *4D Language Reference* manual, the { } characters (braces) indicate optional parameters. For example, `ALERT (message{; okButtonTitle})` means that the *okButtonTitle* parameter may be omitted when calling the command. You can call it in the following ways:

```code4d
ALERT("Are you sure?";"Yes I am") //2 parameters
ALERT("Time is over") //1 parameter
```

4D project methods also accept such optional parameters, starting from the right. The issue with optional parameters is how to handle the case where some of them are missing in the called method - it should never produce an error. A good practice is to assign default values to unused parameters.

> When optional parameters are needed in your methods, you might also consider using [Named parameters](#named-parameters) which provide a flexible way to handle variable numbers of parameters.

Using the `Count parameters` command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received.

The following example displays a text message and can insert the text into a document on disk or in a 4D Write Pro area:

```code4d
// APPEND TEXT Project Method
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

After this project method has been added to your application, you can write:

```code4d
APPEND TEXT(vtSomeText) //Will only display the  message
APPEND TEXT(vtSomeText;$path) //Displays text message and appends it to document at $path
APPEND TEXT(vtSomeText;"";$wpArea) //Displays text message and writes it to $wpArea
```

## Indirections sur les paramètres

Les méthodes projets 4D acceptent un grand nombre de paramètres de même type, commençant par la droite. Ce principe est appelé **l'indirection des paramètres**. L'utilisation de la commande `Nombre de paramètres` vous permet d'adresser ces paramètres avec la boucle `Boucle...Fin de boucle` ainsi que la syntaxe de l'indirection des paramètres.

In the following example, the project method `SEND PACKETS` accepts a time parameter followed by a variable number of text parameters:

```code4d
  //SEND PACKETS Project Method
  //SEND PACKETS ( Time ; Text { ; Text2... ; TextN } )
  //SEND PACKETS ( docRef ; Data { ; Data2... ; DataN } )

 C_TIME($1)
 C_TEXT(${2})
 C_LONGINT($vlPacket)

 For($vlPacket;2;Count parameters)
    SEND PACKET($1;${$vlPacket})
 End for
```

Pour une bonne gestion de cette indirection, il est important de respecter la convention suivante : si tous les paramètres ne sont pas adressés par indirection, ce qui est le cas le plus fréquent, il faut que les paramètres adressés par indirection soient passés en fin de liste. A l’intérieur de la méthode, l’adressage par indirection se fait sous la forme : ${$i}, $i étant une variable numérique. ${$i} est appelé **paramètre générique**.

Illustrons notre propos par un exemple : écrivons une fonction qui prend des valeurs, fait leur somme et renvoie cette somme formatée suivant un format qui peut varier avec les valeurs. A chaque appel à cette méthode, le nombre de valeurs à additionner peut varier. We must pass the values as parameters to the method and the format in the form of a character string. The number of values can vary from call to call.

This function is called in the following manner:

```code4d
 Result:=MySum("##0.00";125,2;33,5;24)

```

In this case, the calling method will get the string “182.70”, which is the sum of the numbers, formatted as specified. The function's parameters must be passed in the correct order: first the format and then the values.

Here is the function, named `MySum`:

```code4d
 $Sum:=0
 For($i;2;Count parameters)
    $Sum:=$Sum+${$i}
 End for
 $0:=String($Sum;$1)
```

This function can now be called in various ways:

```code4d
 Result:=MySum("##0.00";125,2;33,5;24)
 Result:=MySum("000";1;18;4;23;17)
```

### Déclaration des paramètres génériques

De même que pour les autres variables locales, la déclaration du paramètre générique par directive de compilation n’est pas obligatoire. Il est néanmoins recommandé d'éviter toute ambiguïté. Pour déclarer ces paramètres, utilisez une directive de compilateur à laquelle vous passez ${N} comme paramètre, où N est le premier paramètre générique.

```code4d
 C_ENTIER Long(${4})
```

La commande ci-dessus signifie que tous les paramètres à partir du quatrième (inclus) seront adressés par indirection. Ils seront tous de type Entier long. Les types de $1, $2 et $3 pourront être quelconques. En revanche, si vous utilisez $2 par indirection, le type utilisé sera le type générique. Il sera donc de type Entier long, même si pour vous, par exemple, il était de type Réel.

**Note :** Le nombre, dans la déclaration, doit toujours être une constante et jamais une variable.
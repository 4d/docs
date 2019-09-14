---
id: parameters
title: Paramètres
---


## Utilisation des paramètres

Vous aurez souvent besoin de fournir des valeurs à vos méthodes. Vous pouvez facilement effectuer cette opération grâce aux paramètres.

**Les paramètres** (ou **arguments**) sont des données dont les méthodes ont besoin pour s’exécuter. Le terme *paramètres* ou *arguments* est utilisé indifféremment dans ce manuel. Des paramètres sont également passés aux commandes intégrées de 4D. Dans l’exemple ci-dessous, la chaîne “Bonjour” est un paramètre de la commande `ALERTE` :

```code4d
ALERT("Bonjour")
```

Les paramètres sont passés de la même manière aux méthodes. Par exemple, si la méthode FAIRE QUELQUE CHOSE accepte trois paramètres, l'appel à cette méthode pourrait être de la forme suivante :

```code4d
FAIRE QUELQUE CHOSE(AvecCeci;EtCela;CommeCeci)
```

The parameters are separated by semicolons (;). Their value is evaluated at the moment of the call.

Dans la sous-routine (la méthode appelée), la valeur de chaque paramètre est automatiquement copiée séquentiellement dans des variables locales numérotées : $1, $2, $3, etc. La numérotation des variables locales représente l’ordre des paramètres.

```code4d
  //Code de la méthode FAIRE QUELQUE CHOSE
  //Supposons que tous les paramètres sont de type texte
 C_TEXT($1;$2;$3)
 ALERT("J'ai reçu "+$1+" et "+$2+" et aussi "+$3)
  //$1 contient le paramètre AvecCeci
  //$2 contient le paramètre EtCela
  //$3 contient le paramètre CommeCeci
```

A l'intérieur de la sous-routine, vous pouvez utiliser les paramètres $1, $2... de la même manière que vous utilisez les autres variables locales. Toutefois, dans le cas où vous utilisez des commandes qui modifient la valeur de la variable passée en paramètre (par exemple `Trouver dans champ`), les paramètres $1, $2, etc. ne peuvent pas être utilisés directement. Vous devez d'abord les recopier dans des variables locales standard (par exemple `$mavar:=$1`).

The same principles are used when methods are executed through dedicated commands, for example:

```code4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  
//passez la date !05/05/10! comme paramètre de SetCalendarDate
// dans le contexte d'un sous-formulaire
```

**Note :** Pour une bonne exécution du code, assurez-vous que tous les paramètres `$1`, `$2`... sont correctement déclarés dans les méthodes appelées (voir [Déclaration des paramètres](#declaring-parameters) ci-dessous).

### Supported expressions

You can use any [expression](Concepts/quick-tour.md#expression-types) as parameter, except:

- tables
- arrays

Tables or array expressions can only be passed [as reference using a pointer](Concepts/pointer.md#pointers-as-parameters-to-methods).

## Fonctions

Data can be returned from methods. A method that returns a value is called a function.

4D or 4D Plug-in commands that return a value are also called functions.

For example, the following line is a statement that uses the built-in function, `Length`, to return the length of a string. The statement puts the value returned by `Length` in a variable called *MyLength*. Here is the statement:

```code4d
MaLongueur:=Longueur("Comment suis-je arrivé là ?")
```

Any subroutine can return a value. The value to be returned is put into the local variable `$0`.

For example, the following function, called `Uppercase4`, returns a string with the first four characters of the string passed to it in uppercase:

```code4d
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

The following is an example that uses the Uppercase4 function:

```code4d
NouvellePhrase:=Majuscules4("Bien joué.")
```

In this example, the variable *NewPhrase* gets “THIS is good.”

The function result, `$0`, is a local variable within the subroutine. It can be used as such within the subroutine. For example, in the previous `DO SOMETHING` example, `$0` was first assigned the value of `$1`, then used as parameter to the `ALERT` command. Within the subroutine, you can use `$0` in the same way you would use any other local variable. It is 4D that returns the value of `$0` (as it is when the subroutine ends) to the called method.

## Déclaration des paramètres

Even if it is not mandatory in [interpreted mode](Concepts/interpreted.md), you must declare each parameter in the called methods to prevent any trouble.

In the following example, the `OneMethodAmongOthers` project method declares three parameters:

```code4d
  // Méthode projet OneMethodAmongOthers
  // OneMethodAmongOthers ( Réel ; Date { ; Entier long} )
  // OneMethodAmongOthers ( Amount ; Date { ; Pourcentage } )

 C_REAL($1) // 1er paramètre de type Réel
 C_DATE($2) // 2ème paramètre de type Date
 C_LONGINT($3) // 3ème paramètre de type Entier long
```

In the following example, the `Capitalize` project method accepts a text parameter and returns a text result:

```code4d
  // Méthode projet ajoutCapitale
  // ajoutCapitale ( Texte ) -> Texte
  // ajoutCapitale( Chaîne source ) -> chaîne avec la première lettre capitale

 C_TEXTE($0;$1)
 $0:=Majusc(Sous chaine($1;1;1))+Minusc(Sous chaine($1;2))
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
// Sur connexion Web
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
 End if
```

## Values or references

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the $1, $2... local variables in the subroutine (see [Using parameters](#using-parameters)). The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Since its scope is local, if the value of a parameter is modified in the subroutine, it does not change the value in the calling method. Par exemple:

```code4d
    //Here is some code from the method MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)

    //Here is the code of the method DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
```

The alert box displayed by `DO_SOMETHING` will read "WILLIAMS" and the alert box displayed by `MY_METHOD` will read "williams". The method locally changed the value of the parameter $1, but this does not affect the value of the field `[People]Name` passed as parameter by the method `MY_METHOD`.

There are two ways to make the method `DO_SOMETHING` change the value of the field:

1. 1. Plutôt que de passer le champ à la méthode, vous lui passez un pointeur :

```code4d
  //Here is some code from the method MY_METHOD
 DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Last Name)

  //Here the code of the method DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

Here the parameter is not the field, but a pointer to it. Therefore, within the `DO SOMETHING` method, $1 is no longer the value of the field but a pointer to the field. The object **referenced** by $1 ($1-> in the code above) is the actual field. Consequently, changing the referenced object goes beyond the scope of the subroutine, and the actual field is affected. In this example, both alert boxes will read "WILLIAMS".

2. Rather than having the method `DO_SOMETHING` "doing something," you can rewrite the method so it returns a value. 

```code4d
    //Here is some code from the method MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

    //Here the code of the method DO SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

This second technique of returning a value by a subroutine is called “using a function.” This is described in the [Functions](#functions) paragraph.

### Particular cases: objects and collections

You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal *pointer*).

Consequently, when using such data types as parameters, `$1, $2...` do not contain *values* but *references*. Modifying the value of the `$1, $2...` parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for [pointers](Concepts/dt_pointer.md#pointers-as-parameters-to-methods), except that `$1, $2...` parameters do not need to be dereferenced in the subroutine.

Par exemple, considérons que la méthode `CreatePerson`, qui crée un objet et qui l'envoie comme paramètre :

```code4d
  //La méthode CreatePerson crée un objet et l'envoie en tant que paramètre
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(Chaine(OB Lire($person;"Age")))  
```

La méthode `ChangeAge` ajoute 10 à l'attribut Age de l'objet reçu

```code4d
  //ChangeAge
 C_OBJECT($1)
$1.Age:=$1.Age+10
 ALERT(String($1;Age))
```

When you execute the `CreatePerson` method, both alert boxes will read "50" since the same object reference is handled by both methods.

**4D Server :** Lorsque des paramètres sont passés entre des méthodes qui ne sont pas exécutées sur la même machine (lors de l'utilisation de l'option Exécuter sur serveur par exemple, voir Propriétés des méthodes projet), il n'est pas possible d'utiliser des références. Dans ce cas, ce sont des copies des paramètres objet ou collection qui sont envoyées au lieu de références.

## Paramètres nommés

L'utilisation d'objets en tant que paramètres vous permet de gérer des **paramètres nommés**. Ce style de programmation est simple, souple et facile à lire.

Par exemple, si vous utilisez la méthode `CreatePerson` :

```code4d
  //La méthode CreatePerson crée un objet et l'envoie en tant que paramètre
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(Chaine(OB Lire($person;"Age")))  
```

Dans la méthode `ChangeAge`, vous pouvez écrire :

```code4d
  //ChangeAge
 C_OBJECT($1;$para)
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Nom+" a "+String($para.Age)+" ans.")
```

C'est un moyen puissant de définir des [paramètres optionnels](#optional-parameters) (voir ci-dessous également). To handle missing parameters, you can either:

- check if all expected parameters are provided by comparing them to the `Null` value, or
- preset parameter values, or
- use them as empty values.

Dans la méthode `ChangeAge` ci-dessus, les propriétés Age et Nom sont obligatoires et pourraient générer des erreurs si elles sont manquantes. Pour éviter cela, vous pouvez simplement écrire :

```code4d
  //ChangeAge
 C_OBJECT($1;$para)
 $para:=$1  
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Nom+" a "+String($para.Age)+" ans.")
```

Les deux paramètres sont alors optionnels. S'ils ne sont pas renseignés, le résultat sera "a 10 ans", mais aucune erreur ne sera générée.

Enfin, les paramètres nommés permettent de maintenir et de reproduire des applications en toutes simplicité et sécurité. Imaginez que vous réalisez, par la suite, qu'ajouter 10 ans n'est pas toujours approprié. Vous aurez besoin d'un autre paramètre pour définir le nombre d'années à ajouter. Vous pouvez écrire :

```code4d
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

## Paramètres optionnels

Dans le manuel *Langage de 4D*, les caractères { } (accolades) indiquent des paramètres facultatifs. Par exemple, `ALERT (message{; okButtonTitle})` signifie que le paramètre *okButtonTitle* doit être omis lors de l'appel de la commande. Vous pouvez l'appeler comme suit :

```code4d
ALERT("Etes*vous sûr?";"Oui, je le suis") //2 paramètres
ALERT("Temps écoulé") //1 paramètre
```

Les méthodes projet 4D acceptent également des paramètres optionnels, en commençant par la droite. Cependant, il est difficile de gérer les paramètres optionnels lorsque certains d'entre eux sont manquants dans la méthode appelée - cela ne devrait jamais générer d'erreur. Une bonne pratique consisterait à assigner des valeurs par défaut aux paramètres non utilisés.

> Lorsque les paramètres sont nécessaires dans vos méthodes, vous pouvez également envisager des [paramètres nommés](#named-parameters) pour gérer plusieurs paramètres de manière flexible.

A l'aide de la commande `Count parameters` contenue dans la méthode appelée, vous pouvez détecter le nombre de paramètres et effectuer des opérations différentes en fonction de ce nombre.

L'exemple suivant affiche un message et peut insérer le texte dans un document sur disque ou dans une zone 4D Write Pro :

```code4d
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

```code4d
APPEND TEXT(vtSomeText) //Affichera uniquement le message
APPEND TEXT(vtSomeText;$path) //Affiche le message et l'annexe au document dans $path
APPEND TEXT(vtSomeText;"";$wpArea) //Affiche le message et l'écrit dans $wpArea
```

## Indirections sur les paramètres

Les méthodes projets 4D acceptent un grand nombre de paramètres de même type, commençant par la droite. Ce principe est appelé **l'indirection des paramètres**. L'utilisation de la commande `Count parameters` vous permet d'adresser ces paramètres avec la boucle `For...End for` ainsi que la syntaxe de l'indirection des paramètres.

Dans l'exemple qui suit, la méthode projet `ENVOYER PAQUET` accepte le paramètre de temps suivi d'un nombre de variables des paramètres de texte :

```code4d
  //Méthode projet ENVOYER PAQUET
  //ENVOYER PAQUET ( Heure ; Texte { ; Texte2... ; TexteN } )
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

```code4d
 Résultat:=LaSomme("##0,00";125,2;33,5;24)

```

La méthode appelante récupérera dans ce cas la chaîne : 182,70, somme des nombres passés, formatée suivant le format spécifié. Les paramètres de la fonction doivent être passés dans un ordre précis : le format d’abord et ensuite les valeurs, dont le nombre peut varier d’un appel à l’autre.

Examinons maintenant la fonction que nous appelons `LaSomme` :

```code4d
 $Somme:=0
 For($i;2;Nombre de paramètres)
    $Somme:=$Somme+${$i}
 End for
 $0:=String($Somme;$1)
```

Cette fonction pourra être appelée de diverses manières :

```code4d
 Résultat:=LaSomme("##0,00";125,2;33,5;24)
 Résultat:=LaSomme("000";1;18;4;23;17)
```

### Déclaration des paramètres génériques

De même que pour les autres variables locales, la déclaration du paramètre générique par directive de compilation n’est pas obligatoire. Il est néanmoins recommandé d'éviter toute ambiguïté. Pour déclarer ces paramètres, utilisez une directive de compilateur à laquelle vous passez ${N} comme paramètre, où N est le premier paramètre générique.

```code4d
 C_LONGINT(${4})
```

La commande ci-dessus signifie que tous les paramètres à partir du quatrième (inclus) seront adressés par indirection. Ils seront tous de type Entier long. Les types de $1, $2 et $3 pourront être quelconques. En revanche, si vous utilisez $2 par indirection, le type utilisé sera le type générique. Il sera donc de type Entier long, même si pour vous, par exemple, il était de type Réel.

**Note :** Le nombre, dans la déclaration, doit toujours être une constante et jamais une variable.
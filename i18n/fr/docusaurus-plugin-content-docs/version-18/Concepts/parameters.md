---
id: parameters
title: Paramètres
---


## Utiliser des paramètres

Vous aurez souvent besoin de fournir des valeurs à vos méthodes. Vous pouvez facilement effectuer cette opération grâce aux paramètres.

**Les paramètres** (ou **arguments**) sont des données dont les méthodes ont besoin pour s’exécuter. Le terme *paramètres* ou *arguments* est utilisé indifféremment dans ce manuel. Des paramètres sont également passés aux commandes intégrées de 4D. Dans l’exemple ci-dessous, la chaîne “Bonjour” est un paramètre de la commande `ALERTE` :

```4d
ALERT("Bonjour")
```

Les paramètres sont passés de la même manière aux méthodes. Par exemple, si la méthode DO SOMETHING accepte trois paramètres, l'appel à cette méthode pourrait être de la forme suivante :

```4d
FAIRE QUELQUE CHOSE(AvecCeci;EtCela;CommeCeci)
```
Les paramètres sont séparés par des points-virgules (;). Leur valeur est calculée lorsqu'ils sont appelés.

Dans la sous-routine (la méthode appelée), la valeur de chaque paramètre est automatiquement copiée séquentiellement dans des variables locales numérotées : $1, $2, $3, etc. La numérotation des variables locales représente l’ordre des paramètres.

```4d
  //Code de la méthode FAIRE QUELQUE CHOSE
  //Supposons que tous les paramètres sont de type texte
 C_TEXT($1;$2;$3)
 ALERT("J'ai reçu "+$1+" et "+$2+" et aussi "+$3)
  //$1 contient le paramètre AvecCeci
  //$2 contient le paramètre EtCela
  //$3 contient le paramètre CommeCeci
```

Dans une sous-méthode, vous pouvez utiliser les paramètres $1, $2... comme n'importe quelle autre variable locale. Toutefois, dans le cas où vous utilisez des commandes qui modifient la valeur de la variable passée en paramètre (par exemple `Trouver dans champ`), les paramètres $1, $2, etc. ne peuvent pas être utilisés directement. Vous devez d'abord les recopier dans des variables locales standard (par exemple `$mavar:=$1`).

Les mêmes principes s'appliquent lorsque des méthodes sont exécutées via des commandes dédiées, comme par exemple :

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  
//passez la date du !05/05/10! comme paramètre de SetCalendarDate
// dans le contexte d'un sous-formulaire
```

**Note :** Pour une bonne exécution du code, assurez-vous que tous les paramètres `$1`, `$2` etc. sont correctement déclarés dans les méthodes appelées (voir [Déclaration des paramètres](#declaring-parameters) ci-dessous).


### Expressions prises en charge

Vous pouvez utiliser n'importe quelle [expression](Concepts/quick-tour.md#expression-types) comme paramètre, à l'exception des :

- tables
- arrays

Les expressions de tables ou de tableaux peuvent être passées uniquement [comme une référence utilisant un pointeur](Concepts/dt_pointer.md#pointers-as-parameters-to-methods).


## Fonctions

Les méthodes peuvent retourner des valeurs. Une méthode qui retourne une valeur est appelée une fonction.

Les commandes de 4D ou de plug-ins qui retournent une valeur sont également appelées fonctions.

Par exemple, la ligne d’instruction suivante utilise une fonction intégrée, `Longueur`, qui retourne la longueur d’une chaîne. La valeur retournée par `Longueur` est placée dans une variable appelée *MaLongueur*.

```4d
MaLongueur:=Length("Comment suis-je arrivé là ?")
```

Toute sous-routine peut retourner une valeur. La valeur à retourner est placée dans la variable locale `$0`.

Par exemple, la fonction suivante, appelée `Majuscules4`, retourne une chaîne dont les quatre premiers caractères ont été passés en majuscules :

```4d
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

Voici un exemple qui utilise la fonction Majuscules4 :

```4d
NouvellePhrase:=Majuscules4("Bien joué.")
```

Dans ce cas, la variable *NouvellePhrase* prend la valeur “BIEN joué.”

Le retour de fonction, `$0`, est une variable locale à la sous-routine. Elle peut être utilisée en tant que telle à l'intérieur de la sous-routine. It can be used as such within the subroutine. Dans une sous-méthode, vous pouvez utiliser `$0` comme n'importe quelle autre variable locale. C'est 4D qui retourne la valeur finale de `$0` (sa valeur au moment où la sous-routine se termine) à la méthode appelée.


## Déclaration des paramètres

Pour éviter tout conflit, vous devez déclarer chaque paramètre dans les méthodes appelées en [mode interprété](Concepts/interpreted.md), même si cela est facultatif.

Dans l'exemple ci-dessous, la méthode projet `OneMethodAmongOthers` déclare trois paramètres :

```4d
  // Méthode projet OneMethodAmongOthers
  // OneMethodAmongOthers ( Réel ; Date { ; Entier long} )
  // OneMethodAmongOthers ( Amount ; Date { ; Pourcentage } )

 C_REAL($1) // 1er paramètre de type Réel
 C_DATE($2) // 2ème paramètre de type Date
 C_LONGINT($3) // 3ème paramètre de type Entier long
```

Dans l'exemple suivant, la méthode projet `ajoutCapitale` accepte un paramètre texte et retourne un résultat texte :

```4d
  // Méthode projet ajoutCapitale
  // ajoutCapitale ( Texte ) -> Texte
  // ajoutCapitale( Chaîne source ) -> chaîne avec la première lettre capitale

 C_TEXTE($0;$1)
 $0:=Majusc(Sous chaine($1;1;1))+Minusc(Sous chaine($1;2))
```

L'utilisation de commandes telles que `New process` avec les méthodes process qui acceptent les paramètres nécessite également que les paramètres soient explicitement déclarés dans la méthode appelée.

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

**Note :** En mode compilé, vous pouvez regrouper tous les paramètres de variables locales pour les méthodes projets dans un méthode spécifique avec un nom commençant par "Compiler". Dans cette méthode, vous pouvez prédéclarer les paramètres de chaque méthode, comme par exemple :
```4d
 C_REAL(OneMethodAmongOthers;$1)
```
Pour plus d'informations, consultez la page [Modes interprété et compilé](Concepts/interpreted.md).

La déclaration des paramètres est également obligatoire dans les contextes suivants (ces contextes ne prennent pas en charge les déclarations dans une méthode "Compiler") :

- Database methods For example, the `On Web Connection Database Method` receives six parameters, $1 to $6, of the data type Text. Au début de la méthode base, vous devez écrire (même si tous les paramètres ne sont pas utilisés) :

```4d
// Sur connexion Web
C_TEXT($1;$2;$3;$4;$5;$6)
```

- Triggers The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Néanmoins, si vous souhaitez le déclarer, vous devez le faire dans le trigger lui-même.

- Form objects that accept the `On Drag Over` form event The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Néanmoins, si vous souhaitez le déclarer, vous devez le faire dans la méthode projet. **Note :** Le compilateur n'initialise pas le paramètre $0. Ainsi, dès que vous utilisez l'événement formulaire `Sur glisser`, vous devez initialiser $0.
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

## Valeurs ou références

Lorsque vous passez un paramètre, 4D évalue toujours l'expression du paramètre dans le contexte de la méthode appelée et définit la **valeur résultante** sur les variables locales $1, $2 etc. dans la sous-routine (voir [Utilisation des paramètres](#using-parameters)). Les variables/paramètres locaux ne correspondent pas aux véritables champs, variables ou expressions passés par la méthode appelée; ils contiennent uniquement les valeurs qui n'ont pas été passées. Cette portée étant locale, si la valeur d'un paramètre est modifiée dans la sous-routine, elle ne modifie pas la valeur dans la méthode appelée.

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

This second technique of returning a value by a subroutine is called “using a function.” This is described in the [Returning values](#returning-values) paragraph. Ceci est décrit dans le paragraphe [Fonctions](#functions).


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

**4D Server :** Lorsque des paramètres sont passés entre des méthodes qui ne sont pas exécutées sur la même machine (lors de l'utilisation de l'option Exécuter sur serveur par exemple), il n'est pas possible d'utiliser des références. Dans ce cas, ce sont des copies des paramètres objet ou collection qui sont envoyées au lieu de références.


## Paramètres nommés

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


## Paramètres optionnels

Dans le manuel *Langage de 4D*, les caractères { } (accolades) indiquent des paramètres facultatifs. Par exemple, `ALERT (message{; okButtonTitle})` signifie que le paramètre *okButtonTitle* doit être omis lors de l'appel de la commande. Vous pouvez l'appeler comme suit :
```4d
ALERT("Etes*vous sûr?";"Oui, je le suis") //2 paramètres
ALERT("Temps écoulé") //1 paramètre
```

Les méthodes projet 4D acceptent également des paramètres optionnels, en commençant par la droite. Cependant, il est difficile de gérer les paramètres optionnels lorsque certains d'entre eux sont manquants dans la méthode appelée - cela ne devrait jamais générer d'erreur. Une bonne pratique consisterait à assigner des valeurs par défaut aux paramètres non utilisés.

> Lorsque les paramètres sont nécessaires dans vos méthodes, vous pouvez également envisager des [paramètres nommés](#named-parameters) pour gérer plusieurs paramètres de manière flexible.

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


## Indirections sur les paramètres

Les méthodes projets 4D acceptent un grand nombre de paramètres de même type, commençant par la droite. Ce principe est appelé **l'indirection des paramètres**. L'utilisation de la commande `Count parameters` vous permet d'adresser ces paramètres avec la boucle `For...End for` ainsi que la syntaxe de l'indirection des paramètres.

Dans l'exemple qui suit, la méthode projet `ENVOYER PAQUET` accepte le paramètre de temps suivi d'un nombre de variables des paramètres de texte :

```4d
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


### Déclaration des paramètres génériques

De même que pour les autres variables locales, la déclaration du paramètre générique par directive de compilation n’est pas obligatoire. Il est néanmoins recommandé d'éviter toute ambiguïté. Pour déclarer ces paramètres, utilisez une directive de compilateur à laquelle vous passez ${N} comme paramètre, où N est le premier paramètre générique.

```4d
 C_LONGINT(${4})
```

La commande ci-dessus signifie que tous les paramètres à partir du quatrième (inclus) seront adressés par indirection. Ils seront tous de type Entier long. Les types de $1, $2 et $3 pourront être quelconques. En revanche, si vous utilisez $2 par indirection, le type utilisé sera le type générique. $1, $2 and $3 can be of any data type.

**Note :** Le nombre, dans la déclaration, doit toujours être une constante et jamais une variable.

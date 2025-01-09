---
id: object
title: Object
---

Les variables, champs ou expressions de type objet peuvent contenir des données de divers types. La structure des objets "natifs" 4D est basée sur le principe classique des paires "propriété/valeur" (aussi appelées "attribut/valeur). La syntaxe de ces objets s’inspire du JSON :

- Un nom de propriété est toujours un texte, par exemple "Nom". Il doit suivre des [règles spécifiques](identifiers.md#object-properties).

- Une valeur de propriété peut être du type suivant :
    - Numérique (réel, entier long, etc.)
    - text
    - Null
    - boolean
    - Pointeur (stocké tel quel, évalué à l’aide de la commande `JSON Stringify` ou lors d’une copie),
    - Date (type date ou chaîne au format date ISO)
    - Objet(1) (les objets peuvent être imbriqués sur plusieurs niveaux)
    - Image(2)
    - collection

(1) Les **objets non rationalisables** tels que les objets ORDA ([Entities](ORDA/dsMapping.md#entity), [Entity selections](ORDA/dsMapping.md#entity-selection), etc. , [web server](../API/WebServerClass.md)... ne peuvent pas être stockés dans des **champs objet**. Une erreur est retournée si vous essayez de le faire ; toutefois, ils sont entièrement pris en charge dans les **variables objets** en mémoire.

(2) Lorsqu'elles sont exposées sous forme de texte dans le débogueur ou exportées en JSON, les propriétés d'objet de type image indiquent "[object Picture]".

**Attention :** N'oubliez pas que les noms d'attributs tiennent compte des majuscules/minuscules.

Vous gérez les variables, les champs ou les expressions de type Objet à l'aide de la [notation objet](dt_object.md#syntax-basics) ou des commandes classiques du thème **Objets (langage)**. A noter que des commandes spécifiques du thème **Recherches**, telles que `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE` ou `ORDER BY ATTRIBUTE` peuvent être utilisées pour traiter des champs objets.

Chaque valeur de propriété accessible par la notation objet est considérée comme une expression. Vous pouvez utiliser ces valeurs partout où des expressions 4D sont attendues :

- Dans le code 4D, soit écrites dans les méthodes (éditeur de méthodes) soit externalisées (formules, fichiers d'étiquettes traités par la commande `PROCESS 4D TAGS` ou le Serveur Web, fichiers d'export, documents 4D Write Pro, etc.),
- Dans les zones d'expressions du débogueur et l'explorateur d'exécution,
- Dans la liste de propriétés de l'éditeur de formulaires pour les objets formulaires : champ Variable ou Expression et plusieurs expressions de list box et colonnes (source de données, couleur de fond, style ou couleur de police).

## Initialisation

Les objets doivent être initialisés à l'aide, par exemple, de la commande `New object`, sinon une erreur de syntaxe sera générée à la suite d'une lecture ou d'une modification de leurs propriétés.

Voici un exemple :
```4d
 C_OBJECT($obVar) ////création d'une variable 4D de type objet
 $obVar:=New object //initialisation de l'objet et assignation à la variable 4D
```

### Objet standard ou partagé

Vous pouvez créer deux types d'objets :

- standard (non partagés), à l'aide de la commande `New object`. Ces objets peuvent être modifiés sans contrôle d'accès spécifique mais ne peuvent pas être partagés entre les process.
- partagés, à l'aide de la commande `New shared object`. Le contenu de ces objets peut être partagé entre les process, y compris des process (thread) préemptifs. L'accès à ces objets doit être contrôlé via des structures `Use...End use`. Pour plus d'informations, veuillez vous reporter à la page [Objets partagés et collections partagées](Concepts/shared.md).


## Principes de syntaxe

La notation objet est utilisée pour accéder aux valeurs de propriétés d'objets via des séquences de symboles et de propriétés référencées (tokens).

### Propriétés des objets

Avec la notation objet, il est possible d'accéder aux propriétés d'objets (aussi appelées attributs d'objets) de deux façons :

- à l'aide du symbole "point" : > objet.NomPropriété

Voici un exemple :
```4d
     employee.name:="Smith"
```

- à l'aide d'une chaîne entre crochets : > objet["NomPropriété"]

Exemples :
```4d
     $vName:=employee["name"]
     //ou :
     $property:="name"
     $vName:=employee[$property]

```

Comme la valeur d'une propriété d'objet peut elle-même être un objet ou une collection, la notation objet requiert une séquence de symboles pour accéder aux sous-propriétés, par exemple :
```4d
 $vAge:=employee.children[2].age
```
La notation objet est utilisable avec tout élément de langage qui contient ou retourne un objet, c'est-à-dire :

- avec les **objets** eux-mêmes (stockés dans des variables, champs, propriétés d'objets, tableaux d'objets ou éléments de collections). Exemples :

```4d
     $age:=$myObjVar.employee.age //variable
 $addr:=[Emp]data_obj.address //champ
 $city:=$addr.city //propriété d'un objet
 $pop:=$aObjCountries{2}.population //tableau d'objets
 $val:=$myCollection[3].subvalue //élément de collection
```
- avec les **commandes 4D** qui retournent des objets. Voici un exemple :


```4d
     $measures:=Lire mesures base.DB.tables
```

- avec les **méthodes projet** qui retournent des objets. Voici un exemple :

```4d
      // MyMethod1
     C_OBJECT($0)
     $0:=New object("a";10;"b";20)

      //myMethod2
     $result:=MyMethod1.a //10
```

- avec les **collections** Exemple :

```4d
     myColl.length //taille de la collection
```

### Pointeurs

**Note :** Les objets étant toujours passés par référence, l'utilisation de pointeurs n'est généralement pas nécessaire. En passant un objet, 4D utilise automatiquement, en interne, un mécanisme similaire à un pointeur pour minimiser la mémoire nécessaire, pour vous permettre de modifier le paramètre et de retourner les modifications. Par conséquent, vous n'aurez pas besoin d'utiliser des pointeurs. Cependant, si vous souhaitez utiliser des pointeurs, il est possible d'accéder aux valeurs de propriétés via des pointeurs.

La notation objet pour les pointeurs est semblable à la notation objet standard, à la seule différence que le symbole "point" doit être omis.

- Accès direct :
> pointeurObjet->nomPropriété

- Accès par le nom :
> pointeurObjet->[nomPropriété"]

Voici un exemple :

```4d
 C_OBJECT(vObj)
 C_POINTER(vPtr)
 vObj:=New object
 vObj.a:=10
 vPtr:=->vObj
 x:=vPtr->a //x=10
```

### Valeur Null

Lorsque la notation objet est utilisée, la valeur **null** est prise en charge via la commande **Null**. Cette commande peut être utilisée pour affecter ou comparer la valeur null aux propriétés d'objets ou aux éléments de collections, par exemple :

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

Pour plus d'informations, veuillez vous reporter à la description de la commande `Null`.

### Valeur Undefined

L'évaluation d'une propriété d'objet peut parfois produire une valeur indéfinie (undefined). En règle générale, lorsque le code tente de lire ou d'affecter des expressions indéfinies, 4D génère des erreurs, hormis dans les cas décrits ci-dessous :

- La lecture d'une propriété d'un objet ou d'une valeur indéfini(e) retourne Indéfini ; l'affectation d'une valeur indéfinie à des variables (hors tableaux) a le même effet qu'appeler `CLEAR VARIABLE` avec elles :

```4d
     C_OBJET($o)
 C_ENTIER Long($val)
 $val:=10 //$val=10
 $val:=$o.a //$o.a est indéfini (pas d'erreur), et affecter cette valeur efface la variable
  //$val=0
```

- La lecture de la propriété **length** d'une collection indéfinie renvoie 0 :

```4d
     C_COLLECTION($c) //variable créée mais pas de collection définie
 $size:=$c.length //$size = 0
```

- Une valeur indéfinie passée en paramètre à une méthode projet est automatiquement convertie en 0 ou en "" en fonction de la déclaration du type du paramètre.

```4d
     C_OBJECT($o)
 mymethod($o.a) //passage d'un paramètre indéfini

  //Dans la méthode mymethod
 C_TEXT($1) //Paramètre de type texte
  // $1 contient ""
```

- Une expression de condition est automatiquement convertie à Faux lorsqu'elle est évaluée undefined avec les mots-clés If et Case of :

```4d
     C_OBJECT($o)
     If($o.a) // faux
     End if
     Case of
        :($o.a) // faux
     End case
```

- L'affectation d'une valeur indéfinie à une propriété d'objet existante réinitialise ou efface sa valeur, selon son type :
 - Objet, collection, pointeur : Null
 - Image : image vide
 - Booléen : False
 - Chaîne : ""
 - Numérique : 0
 - Date : !00-00-00! si la base utilise le type date pour les objets, sinon ""
 - Heure : 0 (nombre de ms)
 - Indéfini, Null : pas de changement

```4d
     C_OBJECT($o)
 $o:=New object("a";2)
 $o.a:=$o.b //$o.a=0
```

- L'affectation d'une valeur indéfinie à une propriété d'objet inexistante ne fait rien.

Lorsque des expressions d'un type donné sont attendues dans votre code 4D, vous pouvez vous assurer qu'elles auront le type souhaité même en cas de valeur Indéfinie en les encadrant avec la commande de transtypage 4D appropriée : `String`, `Num`, `Time`, `Date`, `Bool`. Ces commandes retournent une valeur vide du type spécifié lorsque l'expression est évaluée à Indéfinie. Par exemple :

```4d
 $myString:=Lowercase(String($o.a.b)) //pour être sûr d'obtenir une valeur texte même si indéfinie
  //afin d'éviter des erreurs dans le code
```


## Exemples

L'utilisation de la notation objet simplifie grandement le code 4D de manipulation des objets. A noter toutefois que la notation utilisant les commandes "OB" reste entièrement prise en charge.

- Ecriture et lecture de propriétés d'objets (cet exemple compare la notation objet et la syntaxe avec commandes) :

```4d
  // Utilisation de la notation objet
 C_OBJECT($myObj) //déclaration d'une variable objet 4D
 $myObj:=New object //création d'un objet et affectation à la variable
 $myObj.age:=56
 $age:=$myObj.age //56

  // Utilisation de la syntaxe par commande
 C_OBJECT($myObj2) //déclaration d'une variable objet 4D
 OB SET($myObj2;"age";42) //création d'un objet et création de la propriété age
 $age:=OB Get($myObj2;"age") //42

  // Bien entendu, les deux notations peuvent être utilisées simultanément
 C_OBJECT($myObj3)
 OB SET($myObj3;"age";10)
 $age:=$myObj3.age //10
```

- Création de propriétés et affectation de valeurs, y compris d'autres objets :

```4d
 C_OBJECT($Emp)
 $Emp:=New object
 $Emp.city:="London" //crée la propriété city avec la valeur "London"
 $Emp.city:="Paris" //modifie la propriété city
 $Emp.phone:=New object("office";"123456789";"home";"0011223344")
  //crée la propriété phone avec un autre objet comme valeur
```

- Lire une valeur dans un sous-objet est très simple avec la notation objet :

```4d
 $vCity:=$Emp.city //"Paris"
 $vPhone:=$Emp.phone.home //"0011223344"
```
- Vous pouvez accéder aux propriétés d'objets via des chaînes grâce à l'opérateur [ ]

```4d
 $Emp["city"]:="Berlin" //modification de la propriété city
  //cette syntaxe est utile pour créer des propriétés à l'aide de variables
 C_TEXT($addr)
 $addr:="address"
 For($i;1;4)
    $Emp[$addr+Chaine($i)]:=""
End for
  // crée 4 propriétés vides "address1...address4" dans l'objet $Emp
```

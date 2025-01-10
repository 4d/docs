---
id: object
title: Object
---

Les variables, champs ou expressions de type objet peuvent contenir des données de divers types. La structure des objets 4D natifs est basée sur le principe classique des paires "propriété/valeur". La syntaxe de ces objets s’inspire du JSON :

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

(1) **Non-streamable objects** such as ORDA objects ([entities](ORDA/dsMapping.md#entity), [entity selections](ORDA/dsMapping.md#entity-selection), etc.), [file handles](../API/FileHandleClass.md), [web server](../API/WebServerClass.md)... cannot be stored in **object fields**. Une erreur est retournée si vous essayez de le faire ; toutefois, ils sont entièrement pris en charge dans les **variables objets** en mémoire.

(2) Lorsqu'elles sont exposées sous forme de texte dans le débogueur ou exportées en JSON, les propriétés d'objet de type image indiquent "[object Picture]".

:::caution

N'oubliez pas que les noms de propriétés font la différence entre les majuscules et les minuscules.

:::


You manage Object type variables, fields or expressions using the standard [object notation](#properties) or the commands available in the **Objects (Language)** theme. A noter que des commandes spécifiques du thème **Recherches**, telles que `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE` ou `ORDER BY ATTRIBUTE` peuvent être utilisées pour traiter des champs objets.

Chaque valeur de propriété accessible par la notation objet est considérée comme une expression. Vous pouvez utiliser ces valeurs partout où des expressions 4D sont attendues :

- Dans le code 4D, soit écrites dans les méthodes (éditeur de code) soit externalisées (formules, fichiers balisés traités par la commande `PROCESS 4D TAGS` ou le serveur Web, fichiers d'export, documents 4D Write Pro, etc.),
- Dans les zones d'expressions du débogueur et l'explorateur d'exécution,
- Dans la liste de propriétés de l'éditeur de formulaires pour les objets formulaires : champ Variable ou Expression et plusieurs expressions de list box et colonnes (source de données, couleur de fond, style ou couleur de police).

## Instanciation

Les objets doivent avoir été instanciés, sinon toute tentative de lecture ou de modification de leurs propriétés génère une erreur de syntaxe.

L'instanciation d'un objet peut se faire de l'une des manières suivantes :

- à l'aide de la commande [`New object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html),
- en utilisant l'opérateur `{}` .

:::info

Plusieurs commandes et fonctions 4D renvoient des objets, par exemple [`Get database measures`](https://doc.4d.com/4Dv19R7/4D/19-R7/Get-database-measures.301-5945423.en.html) ou [`File`](../API/FileClass.md#file). Dans ce cas, il n'est pas nécessaire d'instancier explicitement l'objet, le langage 4D le fait pour vous.

:::



### Commande `New object`

La commande [`New object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html) crée un nouvel objet vide ou pré-rempli et renvoie sa référence.

Exemples :

```4d
 var $obVar : Object //déclaration d'une variable 4D de type objet
 $obVar:=New object //instantiation d'un objet et assignation à la vairable 4D

 var $obFilled : Object 
 $obFilled:=New object("name";"Smith";"age";42) //instantiation et assignation d'un objet pré-rempli
```


### Opérateur `{}`

L'opérateur `{}` permet de créer un **objet littéral**. Un objet littéral est une liste de zéro ou plusieurs paires de noms de propriétés et de valeurs associées d'un objet, entre accolades et séparées par des points-virgules (`{}`). La syntaxe d'objet littérale permet de créer des objets vides ou remplis.

Toute valeur de propriété étant considérée comme une expression, vous pouvez créer des sous-objets en utilisant `{}` dans les valeurs de propriété.  Vous pouvez également créer et référencer des **collections littérales**.

Exemples :

```4d
 var $o ; $o2 ; $o3 : Object //déclaration des variables objet
 $o := {} // instanciation d'un objet vide 
 $o2 := {a : "foo" ; b : 42 ; c : {} ; d : ($toto) ? true : false } // instantiation d'un objet
        // avec les propriétés {"a":"foo","b":42,"c":{},"d":false})

    // les mêmes propriétés en utilisant des variables
 var $a : Text
 var $b : Number
 var $c : Object
 $a:="foo"
 $b:=42
 $c:={}
 $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}

```

Vous pouvez mélanger les syntaxes `New object` et littérale :

```4d
$o:={\
    ob1: {age: 42}; \
    ob2: New object("message"; "Hello"); \
    form1: Formula(return This.ob1.age+10); \
    form2 : Formula(ALERT($1)); \
    col: [1; 2; 3; 4; 5; 6]\
    }

$o.form1()  //52
$o.form2($o.ob2.message)  // Hello
$col:=$o.col[5] //6
```




### Objet standard ou partagé

Vous pouvez créer deux types d'objets :

- des objets standard (non partagés), à l'aide de la commande [`New object`](https://doc.4d.com/4Dv20/4D/20/New-object.301-6237618.en.html) ou de la syntaxe littérale des objets (`{}`). Ces objets peuvent être modifiés sans contrôle d'accès spécifique mais ne peuvent pas être partagés entre les process.
- des objets partagés, en utilisant la commande [`New shared object`](https://doc.4d.com/4Dv20/4D/20/New-shared-object.301-6237617.en.html). Le contenu de ces objets peut être partagé entre les process, y compris des process (thread) préemptifs. L'accès à ces objets doit être contrôlé via des structures `Use...End use`. Pour plus d'informations, consultez la section [Objets et collections partagés](shared.md).



## Propriétés

Vous accédez aux valeurs des propriétés de l'objet à travers une chaîne de tokens. On peut accéder aux propriétés des objets de deux manières :

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

Comme la valeur d'une propriété d'objet peut elle-même être un objet ou une collection, vous pouvez utiliser une séquence de symboles pour accéder aux sous-propriétés, par exemple :

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

- **Project methods** or **Functions** that return objects. Voici un exemple :

```4d
      // MyMethod1
     #DECLARE -> $o : Object
     $o:=New object("a";10 ; "b";20)

      //myMethod2
     $result:=MyMethod1.a //10
```

- avec les **collections** Exemple :

```4d
     myColl.length //taille de la collection
```


### Valeur Null

When using the objects, the **null** value is supported though the **Null** command. Cette commande peut être utilisée pour assigner ou comparer la valeur null aux propriétés de l'objet, par exemple :

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

For more information, please refer to [Null and Undefined](dt_null_undefined.md).

### Valeur Undefined

L'évaluation d'une propriété d'objet peut parfois produire une valeur indéfinie (undefined). Attribuer une valeur undefined à une propriété d'objet existante réinitialise ou efface sa valeur. L'affectation d'une valeur indéfinie à une propriété d'objet inexistante ne fait rien.

For more information, please refer to [Null and Undefined](dt_null_undefined.md)


### Pointeurs

**Note :** Les objets étant toujours passés par référence, l'utilisation de pointeurs n'est généralement pas nécessaire. En passant un objet, 4D utilise automatiquement, en interne, un mécanisme similaire à un pointeur pour minimiser la mémoire nécessaire, pour vous permettre de modifier le paramètre et de retourner les modifications. Par conséquent, vous n'aurez pas besoin d'utiliser des pointeurs. Cependant, si vous souhaitez utiliser des pointeurs, il est possible d'accéder aux valeurs de propriétés via des pointeurs.

La notation objet pour les pointeurs est semblable à la notation objet standard, à la seule différence que le symbole "point" doit être omis.

- Accès direct :
> pointeurObjet->nomPropriété

- Accès par le nom :
> pointeurObjet->[nomPropriété"]

Voici un exemple :

```4d
 var vObj : Object
 var vPtr : Pointer
 vObj:=New object
 vObj.a:=10
 vPtr:=->vObj
 x:=vPtr->a //x=10
```


## Resources

Objects use *resources* such a documents, entity locks, and of course, memory. Ces ressources sont conservées aussi longtemps que les objets en ont besoin. Généralement, vous n'avez pas à vous en soucier, 4D libère automatiquement toutes les ressources rattachées à un objet lorsqu'il détecte que l'objet lui-même n'est plus référencé par aucune variable ou autre objet.

For instance, when there is no more references to an entity on which you have set a lock with [`$entity.lock()`](../API/EntityClass.md#lock), 4D will free the memory but also automatically release the associated lock, a call to [`$entity.unlock()`](../API/EntityClass.md#unlock) is useless.

If you want to release immediately all resources occupied by an object without having to wait that 4D does it automatically (at the end of the method execution for local variables for example), you just have to **nullify all its references**. Par exemple :

```4d

$doc:=WP Import document("large_novel.4wp")
    ... // do something with $doc
$doc:=Null  // free resources occupied by $doc
    ... // continue execution with more free memory

```

## Exemples

L'utilisation de la notation objet simplifie grandement le code 4D de manipulation des objets. A noter toutefois que la notation utilisant les commandes "OB" reste entièrement prise en charge.

- Ecriture et lecture de propriétés d'objets (cet exemple compare la notation objet et la syntaxe avec commandes) :

```4d
  // Using the object notation
 var $myObj : Object //declares a 4D variable object
 $myObj:={} //creates an object literal and assigns it to the variable
 $myObj.age:=56
 $age:=$myObj.age //56

  // Using the command notation
 var $myObj2 : Object //declares a 4D variable object
 OB SET($myObj2;"age";42) //creates an object and adds the age property
 $age:=OB Get($myObj2;"age") //42

  // Of course, both notations can be mixed
 var $myObj3 : Object
 OB SET($myObj3;"age";10)
 $age:=$myObj3.age //10
```

- Création de propriétés et affectation de valeurs, y compris d'autres objets :

```4d
 var $Emp : Object
 $Emp:=New object
 $Emp.city:="London" //creates the city property and sets its value to "London"
 $Emp.city:="Paris" //modifies the city property
 $Emp.phone:=New object("office";"123456789";"home";"0011223344")
  //creates the phone property and sets its value to an object
```

- Lire une valeur dans un sous-objet est très simple avec la notation objet :

```4d
 $vCity:=$Emp.city //"Paris"
 $vPhone:=$Emp.phone.home //"0011223344"
```

- You can access properties as strings using the `[]` operator

```4d
 $Emp["city"]:="Berlin" //modifies the city property
  //this can be useful for creating properties through variables
 var $addr : Text
 $addr:="address"
 For($i;1;4)
    $Emp[$addr+String($i)]:=""
 End for
  // creates 4 empty properties "address1...address4" in the $Emp object
```

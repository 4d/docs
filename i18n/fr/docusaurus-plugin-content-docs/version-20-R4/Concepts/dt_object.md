---
id: object
title: Object
---

Les variables, champs ou expressions de type objet peuvent contenir des données de divers types. La structure des objets 4D natifs est basée sur le principe classique des paires "propriété/valeur". La syntaxe de ces objets s’inspire du JSON :

- Un nom de propriété est toujours un texte, par exemple "Nom". It must follow [specific rules](identifiers.md#object-properties).

- Une valeur de propriété peut être du type suivant :
  - Numérique (réel, entier long, etc.)
  - text
  - Null
  - boolean
  - pointer (stored as such, evaluated using the `JSON Stringify` command or when copying),
  - Date (type date ou chaîne au format date ISO)
  - Objet(1) (les objets peuvent être imbriqués sur plusieurs niveaux)
  - Image(2)
  - collection

(1) **Non-streamable objects** such as ORDA objects ([entities](ORDA/dsMapping.md#entity), [entity selections](ORDA/dsMapping.md#entity-selection), etc.), [file handles](../API/FileHandleClass.md), [web server](../API/WebServerClass.md)... cannot be stored in **object fields**. An error is returned if you try to do it; however, they are fully supported in **object variables** in memory.

(2) When exposed as text in the debugger or exported to JSON, picture object properties print "[object Picture]".

:::caution

N'oubliez pas que les noms de propriétés font la différence entre les majuscules et les minuscules.

:::

You manage Object type variables, fields or expressions using the standard [object notation](#properties) or the commands available in the **Objects (Language)** theme. Note that specific commands of the **Queries** theme such as `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE`, or `ORDER BY ATTRIBUTE` can be used to carry out processing on object fields.

Chaque valeur de propriété accessible par la notation objet est considérée comme une expression. Vous pouvez utiliser ces valeurs partout où des expressions 4D sont attendues :

- in 4D code, either written in the methods (Code Editor) or externalized (formulas, 4D tags files processed by `PROCESS 4D TAGS` or the Web Server, export files, 4D Write Pro documents...),
- Dans les zones d'expressions du débogueur et l'explorateur d'exécution,
- Dans la liste de propriétés de l'éditeur de formulaires pour les objets formulaires : champ Variable ou Expression et plusieurs expressions de list box et colonnes (source de données, couleur de fond, style ou couleur de police).

## Instanciation

Les objets doivent avoir été instanciés, sinon toute tentative de lecture ou de modification de leurs propriétés génère une erreur de syntaxe.

L'instanciation d'un objet peut se faire de l'une des manières suivantes :

- using the [`New object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html) command,
- using the `{}` operator.

:::info

Several 4D commands and functions return objects, for example [`Get database measures`](https://doc.4d.com/4Dv19R7/4D/19-R7/Get-database-measures.301-5945423.en.html) or [`File`](../API/FileClass.md#file). Dans ce cas, il n'est pas nécessaire d'instancier explicitement l'objet, le langage 4D le fait pour vous.

:::

### `New object` command

The [`New object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html) command creates a new empty or prefilled object and returns its reference.

Exemples :

```4d
 var $obVar : Object //declaration of an object type 4D variable
 $obVar:=New object //instantiation of an object and assignment to the 4D variable
 
 var $obFilled : Object 
 $obFilled:=New object("name";"Smith";"age";42) //instantiation and assignment of a prefilled object
```

### `{}` operator

The `{}` operator allows you to create an **object literal**. Un objet littéral est une liste de zéro ou plusieurs paires de noms de propriétés et de valeurs associées d'un objet, entre accolades et séparées par des points-virgules (`{}`). La syntaxe d'objet littérale permet de créer des objets vides ou remplis.

Since any property value is considered an expression, you can create sub-objects using `{}` in property values.  You can also create and reference **collection literals**.

Exemples :

```4d
 var $o ; $o2 ; $o3 : Object //declaration of object variables
 $o := {} // instantiation of an empty object 
 $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instantiation of an object
 		// with properties {"a":"foo","b":42,"c":{},"d":false})

	// same properties using variables
 var $a : Text
 var $b : Number
 var $c : Object
 $a:="foo"
 $b:=42
 $c:={}
 $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}

```

You can mix the `New object` and literal syntaxes:

```4d
$o:={\
	ob1: {age: 42}; \
	ob2: New object("message"; "Hello"); \
	form1: Formula(return This.ob1.age+10); \
	form2 : Formula(ALERT($1)); \
	col: [1; 2; 3; 4; 5; 6]\
	}

$o.form1()  //52
$o.form2($o.ob2.message)  // displays Hello
$col:=$o.col[5] //6
```

### Objet standard ou partagé

Vous pouvez créer deux types d'objets :

- regular (non-shared) objects, using the [`New object`](https://doc.4d.com/4Dv20/4D/20/New-object.301-6237618.en.html) command or object literal syntax (`{}`). Ces objets peuvent être modifiés sans contrôle d'accès spécifique mais ne peuvent pas être partagés entre les process.
- shared objects, using the [`New shared object`](https://doc.4d.com/4Dv20/4D/20/New-shared-object.301-6237617.en.html) command. Le contenu de ces objets peut être partagé entre les process, y compris des process (thread) préemptifs. Access to these objects is controlled by `Use...End use` structures.
  For more information, refer to the [Shared objects and collections](shared.md) section.

## Propriétés

You access object property values through a chain of tokens. Object properties can be accessed in two ways:

- using a "dot" symbol:
  > object.propertyName

Voici un exemple :

```4d
     employee.name:="Dupont"
```

- using a string within square brackets:
  > object["propertyName"]

Exemples :

```4d
     $vName:=employee["name"]
     //or also:
     $property:="name"
	 $vName:=employee[$property]

```

Since an object property value can be an object or a collection, you can use a sequence of symbols to access sub-properties, for example:

```4d
 $vAge:=employee.children[2].age
```

La notation objet est utilisable avec tout élément de langage qui contient ou retourne un objet, c'est-à-dire :

- **Objects** themselves (stored in variables, fields, object properties, object arrays, or collection elements).
  Exemples :

```4d
     $age:=$myObjVar.employee.age //variable
 $addr:=[Emp]data_obj.address //champ
 $city:=$addr.city //propriété d'un objet
 $pop:=$aObjCountries{2}.population //tableau d'objets
 $val:=$myCollection[3].subvalue //élément de collection
```

- **4D commands** that return objects.
  Voici un exemple :

```4d
     $measures:=Lire mesures base.DB.tables
```

- **Project methods** or **Functions** that return objects.
  Voici un exemple :

```4d
      // MyMethod1
     #DECLARE -> $o : Object
     $o:=New object("a";10;"b";20)
     
      //myMethod2
     $result:=MyMethod1.a //10
```

- **Collections**
  Example:

```4d
     myColl.length //taille de la collection
```

### Valeur Null

When using the objects, the **null** value is supported though the **Null** command. This command can be used to assign or compare the null value to object properties, for example:

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

For more information, please refer to [Null and Undefined](dt_null_undefined.md).

### Valeur Indéfinie

L'évaluation d'une propriété d'objet peut parfois produire une valeur indéfinie (undefined). Assigning an undefined value to an existing object property reinitializes or clears its value. L'affectation d'une valeur indéfinie à une propriété d'objet inexistante ne fait rien.

For more information, please refer to [Null and Undefined](dt_null_undefined.md)

### Pointeurs

**Preliminary Note:** Since objects are always passed by reference, there is usually no need to use pointers. En passant un objet, 4D utilise automatiquement, en interne, un mécanisme similaire à un pointeur pour minimiser la mémoire nécessaire, pour vous permettre de modifier le paramètre et de retourner les modifications. Par conséquent, vous n'aurez pas besoin d'utiliser des pointeurs. Cependant, si vous souhaitez utiliser des pointeurs, il est possible d'accéder aux valeurs de propriétés via des pointeurs.

La notation objet pour les pointeurs est semblable à la notation objet standard, à la seule différence que le symbole "point" doit être omis.

- Accès direct :

> pointeurObjet->nomPropriété

- Accès par le nom :

> pointeurObjet->["nomPropriété"]

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

Objects use _resources_ such a documents, entity locks, and of course, memory. These resources are retained as long as objects need them. Usually, you do not have to worry about them, 4D automatically releases all resources attached to an object when it detects that the object itself is no longer referenced by any variable or other object.

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

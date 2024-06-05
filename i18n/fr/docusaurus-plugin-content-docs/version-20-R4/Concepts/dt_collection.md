---
id: collection
title: Collection
---

Les collections sont des listes ordonnées de valeurs de types similaires ou différents (texte, nombre, date, objet, booléen, collection ou null).

Collection type variables are managed using [object notation](dt_object.md#properties).

Pour accéder à un élément d'une collection, vous devez passer le numéro de l'élément entre crochets :

```4d
collectionRef[expression]
```

You can pass any valid 4D expression which returns a positive integer in _expression_. Exemples :

```4d
 myCollection[5]  //accès au 6e élément de la collection
 myCollection[$var]
```

**Warning:** Collection elements are numbered from 0.

Vous pouvez assigner une valeur à un élément de collection ou lire une valeur d'élément de collection :

```4d
 myCol[10]:="Mon nouvel élément"
 $myVar:=myCol[0]
```

Si vous assignez un numéro d'élément plus grand que celui du dernier élément existant dans la collection, la collection est automatiquement redimensionnée et les nouveaux éléments intermédiaires prennent la valeur null :

```4d
 var myCol : Collection
 myCol:=New collection("A";"B")
 myCol[5]:="Z"
  //myCol[2]=null
  //myCol[3]=null
  //myCol[4]=null
```

## Instanciation

Les collections doivent avoir été instanciées, sinon toute tentative de lecture ou de modification de leurs éléments génère une erreur de syntaxe.

L'instanciation d'une collection peut se faire de l'une des manières suivantes :

- using the [`New collection`](../API/CollectionClass.md#new-collection) command,
- using the `[]` operator.

:::info

Several 4D commands and functions return collections, for example [`Get Monitored Activity`](https://doc.4d.com/4dv19R/help/command/en/page1713.html) or [`collection.copy`](../API/CollectionClass.md#copy). Dans ce cas, il n'est pas nécessaire d'instancier explicitement la collection, le langage 4D le fait pour vous.

:::

### `New collection` command

The [`New collection`](../API/CollectionClass.md#new-collection) command creates a new empty or prefilled collection and returns its reference.

Exemples :

```4d
 var $colVar : Collection //declaration of a collection type 4D variable
 $colVar:=New collection //instantiation of the collection and assignment to the 4D variable
 
 var $colFilled : Collection
 $colFilled:=New collection("a";"b";1;42;{}) //instantiation and assignment of a prefilled collection
```

### `[]` operator

The `[]` operator allows you to create a **collection literal**. Une collection littérale est une liste de zéro ou plusieurs expressions, dont chacune représente un élément de collection, entre crochets (`[]`). Lorsque vous créez une collection en utilisant une collection littérale, elle est instanciée avec les valeurs spécifiées comme éléments, et sa longueur est définie au nombre d'arguments spécifiés.

Since any element is considered an expression, you can create sub-collections using `[]` in elements.  You can also create and reference **object literals**.

Si un élément n'est pas défini, il apparaîtra comme Null dans la collection.

Exemples :

```4d
var $col1; $col2; $users : Collection
$col1:=[] //empty collection
$col2:=[1;2;3;4;5;6] //collection of numbers
//collection of objects
$users:=[{name: "Alice"; \
	height: 183; \
	eyecolor: "hazel"; \
	id: $col2[5]\
	}; \
	{name: "Bob"; \
	height: 172; \
	eyecolor: "blue"\
	}]
```

:::note

If you create a collection literal containing a single element, make sure you do not use a name corresponding to an existing table name, otherwise the table syntax `[tableName]` will take priority.

:::

### Collection standard ou collection partagée

Vous pouvez créer deux types de collections :

- regular (non-shared) collections, using the [`New collection`](API/CollectionClass.md#new-collection) command or collection literal syntax (`[]`). Ces collections peuvent être modifiées sans contrôle d'accès spécifique mais ne peuvent pas être partagées entre les process.
- shared collections, using the [`New shared collection`](API/CollectionClass.md#new-shared-collection) command. Le contenu de ces collections peut être partagé entre les process, y compris des process (thread) préemptifs. Access to these collections is controlled by [`Use...End use`](Concepts/shared.md#useend-use) structures.

For more information, refer to the [Shared objects and collections](shared.md) section.

## Fonctions de collection

4D collection references benefit from special class functions (sometimes named _member functions_). Collection functions are listed in the [Class API Reference](../API/CollectionClass.md) section.

Par exemple :

```4d
$newCol:=$col.copy() //copie de $col vers $newCol
 $col.push(10;100) //ajout de 10 et 100 à la collection
```

Certaines fonctions retournent la collection d'origine après modification, de manière à ce que vous puissiez enchaîner les appels dans une même séquence :

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```

### paramètre propertyPath

Several functions accept a _propertyPath_ as parameter. Ce paramètre peut contenir :

- soit un nom de propriété d'objet, par exemple "nomComplet"
- soit un chemin de propriété d'objet, c'est-à-dire une séquence hiérarchique de sous-propriétés reliées par des points, par exemple "employé.enfant.prénom".

**Warning:** When using functions and _propertyPath_ parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //erreur
```

## Undefined

Reading the **length** property of an undefined collection produces 0:

```4d
     var $c : Collection //variable créée mais aucune collection n'est définie
     $size:=$c.length //$size = 0
```

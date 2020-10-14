---
id: collection
title: Collection
---

Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null).

Collection type variables are managed using object notation (see [Syntax basics](Concepts/dt_object.md#syntax-basics)).

Pour des informations complémentaires sur les collections 4D, passez le numéro (l'indice) de l'élément entre crochets :

```4d
collectionRef[expression]
```

You can pass any valid 4D expression which returns a positive integer in *expression*. Voici quelques exemples :

```4d
 myCollection[5]  //accès au 6e élément de la collection
 myCollection[$var]
```

**Attention :** N'oubliez pas que la numérotation des éléments de collection débute à 0.

You can assign a value to a collection element or get a collection element value:

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

## Initialisation

Les collections doivent être initialisées à l'aide, par exemple, de la commande `Creer collection`, sinon une erreur de syntaxe sera générée à la suite d'une lecture ou d'une modification d'un ou plusieurs élements de la collection.

Exemple :

```4d
 var $colVar : Collection //création d'une variable 4D de type collection. $colVar:=New $colVar:=New collection //initialisation de la collection et assignation à la variable 4D
```

### Collection standard ou collection partagée

Vous pouvez créer deux types de collections :

- regular (non-shared) collections, using the [`New collection`](API/collectionClass.md#new-collection) command. Ces collections peuvent être modifiées sans contrôle d'accès spécifique mais ne peuvent pas être partagées entre les process.
- shared collections, using the [`New shared collection`](API/collectionClass.md#new-shared-collection) command. Le contenu de ces collections peut être partagé entre les process, y compris des process (thread) préemptifs. Access to these collections is controlled by [`Use...End use`](Concepts/shared.md#useend-use) structures.

Pour plus d'informations, veuillez vous reporter à la page [Objets partagés et collections partagées](Concepts/shared.md).

## Collection functions

4D collection references benefit from special class functions (sometimes named *member functions*). Collection functions are listed in the [Class API Reference](API/collectionClass.md) section.

Par exemple:

```4d
$newCol:=$col.copy() //copie de $col vers $newCol
 $col.push(10;100) //ajout de 10 et 100 à la collection
```

Some functions return the original collection after modification, so that you can run the calls in a sequence:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### paramètre cheminPropriété


Several functions accept a _propertyPath_ as parameter. Ce paramètre peut contenir :

- soit un nom de propriété d'objet, par exemple "nomComplet"
- soit un chemin de propriété d'objet, c'est-à-dire une séquence hiérarchique de sous-propriétés reliées par des points, par exemple "employé.enfant.prénom".

**Warning:** When using functions and propertyPath parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //indéfini
 $vmin:=$col.min(["My.special.property"]) //erreur
```
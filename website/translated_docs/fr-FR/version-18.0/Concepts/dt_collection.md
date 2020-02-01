---
id: version-18.0-collection
title: Collection
original_id: collection
---

Les collections sont des listes ordonnées de valeurs de types similaires ou différents (texte, nombre, objet, booléen, collection ou null).

Pour manipuler les variables de type Collection, vous devez utiliser la notation objet (voir [Utiliser la notation objet](Concepts/dt_object.md#syntax-basics)).

Pour des informations complémentaires sur les collections 4D, passez le numéro (l'indice) de l'élément entre crochets :

```4d
collectionRef[expression]
```

Vous pouvez passer toute expression 4D valide qui retourne un nombre entier positif dans expression. Voici quelques exemples :

```4d
 myCollection[5]  //accès au 6e élément de la collection
 myCollection[$var]
```

**Warning:** Collection elements are numbered from 0.

Vous pouvez assigner une valeur à un élément de collection ou lire une valeur d'élément de collection à l'aide de la notation objet :

```4d
 myCol[10]:="Mon nouvel élément"
 $myVar:=myCol[0]
```

Si vous assignez un numéro d'élément plus grand que celui du dernier élément existant dans la collection, la collection est automatiquement redimensionnée et les nouveaux éléments intermédiaires prennent la valeur null :

```4d
 C_COLLECTION(myCol)
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
 C_COLLECTION($colVar) //création d'une variable 4D de type collection.
 $colVar:=New collection //initialisation de la collection et assignation à la variable 4D
```

### Collection standard ou collection partagée

Vous pouvez créer deux types de collections :

- standard (non partagées), à l'aide de la commande `New collection`. Ces collections peuvent être modifiées sans contrôle d'accès spécifique mais ne peuvent pas être partagées entre les process.
- partagées, à l'aide de la commande `New shared collection`. Le contenu de ces collections peut être partagé entre les process, y compris des process (thread) préemptifs. L'accès à ces collections doit être contrôlé via des structures `Use...End use`. Pour plus d'informations, veuillez vous reporter à la page [Objets partagés et collections partagées](Concepts/shared.md).

## Méthodes de collection

4D collection references benefit from special methods (sometimes named *member functions*). Grâce à la notation objet, ces méthodes sont appliquées sur les références de collections à l'aide de la syntaxe suivante :

> {$result:=}myCollection.method( {params} )

A noter que, même si elle n'a pas de paramètres, une méthode membre doit être appelée avec les parenthèses ( ) (opérateur d'exécution de méthode), sinon une erreur de syntaxe est générée.

Par exemple:

```4d
 $newCol:=$col.copy() //copie de $col vers $newCol
 $col.push(10;100) //ajout de 10 et 100 à la collection
```

Certaines méthodes retournent la collection d'origine après modification, de manière à ce que vous puissiez enchaîner les appels dans une même séquence :

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### paramètre cheminPropriété


Several methods accept a _propertyPath_ as parameter. Ce paramètre peut contenir :

- soit un nom de propriété d'objet, par exemple "nomComplet"
- soit un chemin de propriété d'objet, c'est-à-dire une séquence hiérarchique de sous-propriétés reliées par des points, par exemple "employé.enfant.prénom".

**Warning:** When using methods and propertyPath parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //indéfini
 $vmin:=$col.min(["My.special.property"]) //erreur
```
---
id: collection
title: Collection
---

Les collections sont des listes ordonnées de valeurs de types similaires ou différents (texte, nombre, date, objet, booléen, collection ou null).

Les variables de type collection sont gérées à l'aide de la [notation objet](dt_object.md#properties).

Pour accéder à un élément d'une collection, vous devez passer le numéro de l'élément entre crochets :

```4d
collectionRef[expression]
```

Vous pouvez passer toute expression 4D valide qui retourne un nombre entier positif dans *expression*. Exemples :

```4d
 myCollection[5]  //accès au 6e élément de la collection
 myCollection[$var]
```

**Attention :** N'oubliez pas que la numérotation des éléments de collection débute à 0.

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

- à l'aide de la commande [`New collection`](../API/CollectionClass.md#new-collection),
- en utilisant l'opérateur `[]`.

:::info

Plusieurs commandes et fonctions 4D renvoient des collections, par exemple [`Get Monitored Activity`](https://doc.4d.com/4dv19R/help/command/en/page1713.html) ou [`collection.copy`](../API/CollectionClass.md#copy). Dans ce cas, il n'est pas nécessaire d'instancier explicitement la collection, le langage 4D le fait pour vous.

:::

### Commande `New collection`

La commande [`New collection`](../API/CollectionClass.md#new-collection) crée une nouvelle collection vide ou pré-remplie et renvoie sa référence.

Exemples :

```4d
 var $colVar : Collection //déclaration d'une variable 4D de type collection
 $colVar:=New collection //instanciation de la collection et affectation à la variable 4D

 var $colFilled : Collection
 $colFilled:=New collection("a" ; "b";1;42;{}) //instanciation et affectation d'une collection pré-remplie
```

### Opérateur `[]`

L'opérateur `[]` vous permet de créer une collection **littérale**. Une collection littérale est une liste de zéro ou plusieurs expressions, dont chacune représente un élément de collection, entre crochets (`[]`). Lorsque vous créez une collection en utilisant une collection littérale, elle est instanciée avec les valeurs spécifiées comme éléments, et sa longueur est définie au nombre d'arguments spécifiés.

Tout élément étant considéré comme une expression, vous pouvez créer des sous-collections en utilisant `[]` dans les éléments.  Vous pouvez également créer et référencer des **objets littéraux**.

Si un élément n'est pas défini, il apparaîtra comme Null dans la collection.

Exemples :

```4d
var $col1; $col2; $users : Collection
$col1:=[] //collection vide
$col2:=[1;2;3;4;5;6] //collection de nombres
//collection d'objets
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

Si vous créez une collection littérale contenant un seul élément, assurez-vous que vous n'utilisez pas un nom correspondant à un nom de table existant, sinon la syntaxe de table `[tableName]` sera prioritaire.

:::



### Collection standard ou collection partagée

Vous pouvez créer deux types de collections :

- des collections standard (non partagées), à l'aide de la commande [`New collection`](API/CollectionClass.md#new-collection) ou de la syntaxe littérale de collection (`[]`). Ces collections peuvent être modifiées sans contrôle d'accès spécifique mais ne peuvent pas être partagées entre les process.
- des collections partagées, à l'aide de la commande [`New shared collection`](API/CollectionClass.md#new-shared-collection). Le contenu de ces collections peut être partagé entre les process, y compris des process (thread) préemptifs. L'accès à ces collections doit être contrôlé via des structures [`Use...End use`](Concepts/shared.md#useend-use).

Pour plus d'informations, consultez la section [Objets et collections partagés](shared.md).

## Fonctions de collection

Les références de collections 4D bénéficient de fonctions de classe spécifiques (souvent appelées *fonctions membres*). Les fonctions de collections sont listées dans la section [Class API Reference](../API/CollectionClass.md) .

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


Plusieurs fonctions acceptent un paramètre nommé _propertyPath_. Ce paramètre peut contenir :

- soit un nom de propriété d'objet, par exemple "nomComplet"
- soit un chemin de propriété d'objet, c'est-à-dire une séquence hiérarchique de sous-propriétés reliées par des points, par exemple "employé.enfant.prénom".

**Attention :** Lorsque vous utilisez des fonctions et des paramètres *propertyPath*, vous ne pouvez pas utiliser ".", "[ ]" ou des espaces dans les noms de propriétés, car cela empêcherait 4D d'analyser correctement le chemin :

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //erreur
```

## Undefined

La lecture de la propriété **length** d'une collection indéfinie renvoie 0 :

```4d
     var $c : Collection //variable créée mais aucune collection n'est définie
     $size:=$c.length //$size = 0
```
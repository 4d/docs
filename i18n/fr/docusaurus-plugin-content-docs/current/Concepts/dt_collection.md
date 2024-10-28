---
id: collection
title: Collection
---

Les collections sont des listes ordonnées de valeurs de types similaires ou différents (texte, nombre, date, objet, booléen, collection ou null).

Les variables de type de collection sont gérées à l'aide de la [notation objet](dt_object.md#proprietes).

Pour accéder à un élément d'une collection, vous devez passer le numéro de l'élément entre crochets :

```4d
collectionRef[expression]
```

Vous pouvez passer n'importe quelle expression 4D valide qui retourne un entier positif dans _expression_. Exemples :

```4d
 myCollection[5]  //accès au 6e élément de la collection
 myCollection[$var]
```

**Attention :** Les éléments des collections sont numérotés à partir de 0.

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

- en utilisant la commande [`New collection`](../commands/new-collection.md),
- en utilisant l'opérateur `[]`.

:::info

Plusieurs commandes et fonctions 4D renvoient des collections, par exemple [`Monitored activity`](../commandes-legacy/monitored-activity.md) ou [`collection.copy`](../API/CollectionClass.md#copy). Dans ce cas, il n'est pas nécessaire d'instancier explicitement la collection, le langage 4D le fait pour vous.

:::

### Commande `New collection`

La commande [`New collection`](../commands/new-collection.md) crée une nouvelle collection vide ou préremplie et renvoie sa référence.

Exemples :

```4d
 var $colVar : Collection //déclaration d'une variable 4D de type collection
 $colVar:=New collection //instanciation de la collection et affectation à la variable 4D
 
 var $colFilled : Collection
 $colFilled:=New collection("a";"b";1;42;{}) //instanciation et affectation d'une collection pré-remplie
```

### Opérateur `[]`

L'opérateur `[]` vous permet de créer une **collection littérale**. Une collection littérale est une liste de zéro ou plusieurs expressions, dont chacune représente un élément de collection, entre crochets (`[]`). Lorsque vous créez une collection en utilisant une collection littérale, elle est instanciée avec les valeurs spécifiées comme éléments, et sa longueur est définie au nombre d'arguments spécifiés.

Puisque n'importe quel élément est considéré comme une expression, vous pouvez créer des sous-collections en utilisant `[]` dans les éléments.  Vous pouvez également créer et référencer des **objets littéraux**.

Si un élément n'est pas défini, il apparaîtra comme Null dans la collection.

Exemples :

```4d
var $col1; $col2; $users : Collection
$col1:=[] //collection vide
$col2:=[1; ;3;4;5;6] //collection de nombres
//collection d'objets
$users:=[{name: "Alice"; \
	height: 183; \
	eyecolor: "hazel"; \
	id: $col2[5]\
	}; \
	{name : "Bob"; \
	hauteur: 172; \
	eyecolor: "blue"\
}]
```

:::note

Si vous créez une collection littérale contenant un seul élément, assurez-vous que vous n'utilisez pas un nom correspondant à un nom de table existant, sinon la syntaxe de la table `[tableName]` prendra la priorité.

:::

### Collection standard ou collection partagée

Vous pouvez créer deux types de collections :

- les collections standard (non partagées), en utilisant la commande [`New collection`] (../commands/new-collection.md) ou la syntaxe littérale des collections (`[]`). Ces collections peuvent être modifiées sans contrôle d'accès spécifique mais ne peuvent pas être partagées entre les process.
- les collections partagées, en utilisant la commande [`New shared collection`] (../commands/new-shared-collection.md). Le contenu de ces collections peut être partagé entre les process, y compris des process (thread) préemptifs. L'accès à ces collections est contrôlé par des structures [`Use...End use`](Concepts/shared.md#useend-use).

Pour plus d'informations, consultez la section [Objets et collections partagés](shared.md).

## Fonctions de collection

Les références de collections 4D bénéficient de fonctions de classe spéciales (aussi nommées _fonctions membres_). Les fonctions de collection sont listées dans la section [Collection Class](../API/CollectionClass.md) .

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

Plusieurs fonctions acceptent un paramètre _propertyPath_. Ce paramètre peut contenir :

- soit un nom de propriété d'objet, par exemple "nomComplet"
- soit un chemin de propriété d'objet, c'est-à-dire une séquence hiérarchique de sous-propriétés reliées par des points, par exemple "employé.enfant.prénom".

**Attention** : Lorsque vous utilisez des fonctions et des paramètres _propertyPath_, vous ne pouvez pas utiliser ".", "[ ]" ou des espaces dans les noms de propriétés, car cela empêcherait 4D d'analyser correctement le chemin :

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //erreur
```

## Opérateurs sur les collections

Vous pouvez utiliser des opérateurs de comparaison avec des **références de collection**, ce qui signifie que vous pouvez évaluer si deux ou plusieurs références pointent vers la même instance d'une collection.

```4d
var $c1:=["a";42] //référence à une instance
var $c2:=["a"; 2] //référence à une instance différente
var $c3:=$c1 //référence à la même instance
```

Sur la base du code ci-dessus, la table de comparaison est :

| Opération | Syntaxe                       | Retourne | Expression | Valeur |
| --------- | ----------------------------- | -------- | ---------- | ------ |
| Egalité   | collectionRef = collectionRef | Boolean  | $c1 = $c3  | True   |
|           |                               |          | $c1 = $c2  | False  |
| Inégalité | collectionRef # collectionRef | Boolean  | $c1 # $c3  | False  |
|           |                               |          | $c1 # $c2  | True   |

## Undefined

La lecture de la propriété **length** d'une collection undefined produit 0 :

```4d
     var $c : Collection //variable créée mais aucune collection n'est définie
     $size:=$c.length //$size = 0
```

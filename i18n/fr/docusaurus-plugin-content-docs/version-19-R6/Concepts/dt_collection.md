---
id: collection
title: Collections
---

Les collections sont des listes ordonnées de valeurs de types similaires ou différents (texte, nombre, date, objet, booléen, collection ou null).

Pour manipuler les variables de type Collection, vous devez utiliser la notation objet (voir [Les bases de la syntaxe](Concepts/dt_object.md#syntax-basics)).

Pour des informations complémentaires sur les collections 4D, passez le numéro (l'indice) de l'élément entre crochets :

```4d
collectionRef[expression]
```

Vous pouvez passer toute expression 4D valide qui retourne un nombre entier positif dans *expression*. Exemple :

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

## Initialisation

Les collections doivent être initialisées à l'aide, par exemple, de la commande `Creer collection`, sinon une erreur de syntaxe sera générée à la suite d'une lecture ou d'une modification d'un ou plusieurs élements de la collection.

Voici un exemple :

```4d
 var $colVar : Collection //création d'une variable 4D de type collection
 $colVar:=New collection ///initialisation de la collection et assignation à la variable 4D
```

### Collection standard ou collection partagée

Vous pouvez créer deux types de collections :

- collections standard (non partagées), à l'aide de la commande [`New collection`](API/CollectionClass.md#new-collection). Ces collections peuvent être modifiées sans contrôle d'accès spécifique mais ne peuvent pas être partagées entre les process.
- collections partagées, à l'aide de la commande [`New shared collection`](API/CollectionClass.md#new-shared-collection). Le contenu de ces collections peut être partagé entre les process, y compris des process (thread) préemptifs. L'accès à ces collections doit être contrôlé via des structures [`Use...End use`](Concepts/shared.md#useend-use).

Pour plus d'informations, veuillez vous reporter à la page [Objets partagés et collections partagées](Concepts/shared.md).

## Fonctions de collection

Les références de collections 4D bénéficient de fonctions de classe spécifiques (souvent appelées *fonctions méthodes*). Les fonctions de collection sont répertoriées dans la section [Class API Reference](API/CollectionClass.md).

```4d
$newCol:=$col.copy() //copie de $col vers $newCol
 $col.push(10;100) //ajout de 10 et 100 à la collection
```

Certaines fonctions retournent la collection d'origine après modification, de manière à ce que vous puissiez enchaîner les appels dans une même séquence :

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### paramètre cheminPropriété


Plusieurs fonctions admettent un paramètre nommé _cheminPropriété_. Ce paramètre peut contenir :

- soit un nom de propriété d'objet, par exemple "nomComplet"
- soit un chemin de propriété d'objet, c'est-à-dire une séquence hiérarchique de sous-propriétés reliées par des points, par exemple "employé.enfant.prénom".

**Attention :** Lorsque des fonctions ou un paramètre cheminPropriété sont attendus, l'utilisation de noms de propriétés contenant ".", "[ ]", ou des espaces n'est pas prise en charge car cela empêcherait 4D d'analyser correctement le chemin :

```4d
 $vmin:=$col.min("My.special.property") //indéfini
 $vmin:=$col.min(["My.special.property"]) //erreur
```
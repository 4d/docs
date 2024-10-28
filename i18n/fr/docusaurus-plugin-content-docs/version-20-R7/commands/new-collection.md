---
id: new-collection
title: New collection
displayed_sidebar: docs
---

<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!--REF #_command_.New collection.Params-->

| Paramètres | Type                                                                    |   | Description                                |
| ---------- | ----------------------------------------------------------------------- | - | ------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer | → | Valeur(s) de collection |
| Résultat   | Collection                                                              | ← | New collection                             |

<!-- END REF-->

#### Description

The `New collection` command <!--REF #_command_.New collection.Summary-->creates a new empty or prefilled collection and returns its reference.<!-- END REF--> Collections can be handled using properties and functions of the [Collection class API](../API/CollectionClass.md).

Si vous ne passez aucun paramètre, `New collection` crée une collection vide et retourne sa référence.

Vous devez affecter la référence retournée à une variable 4D de type Collection.

> Keep in mind that `var : Collection` statement declares a variable of the `Collection` type but does not create any collection.

Optionnellement, vous pouvez préremplir la nouvelle collection en passant une ou plusieurs *value*(s) comme paramètre(s).

Sinon, vous pouvez ajouter ou modifier des éléments ultérieurement par affectation. Par exemple :

```4d
 myCol[10]:="Mon nouvel élément"
```

Si l'indice du nouvel élément est au-delà du dernier élément existant de la collection, la collection est automatiquement redimensionnée et tous les nouveaux éléments intermédiaires sont reçoivent la valeur **null**.

Vous pouvez passer n'importe quel nombre de valeurs de n'importe quel type pris en charge (number, text, date, picture, pointer, object, collection...). Contrairement aux tableaux, les collections peuvent mélanger des données de différents types.

Vous devez prêter attention aux problèmes de conversion suivants :

- Si vous passez un pointeur, il est conservé "tel quel" ; il est évalué à l'aide de la commande `JSON Stringify`
- Les dates sont stockées sous la forme de date « aaaa-mm-jj » ou des chaînes au format « AAAA-MM-JJTHH: ss.SSSZ: mm » , selon la configuration actuelle « dates à l'intérieur des objets » de la base de données. Lors de la conversion de dates 4D en texte avant de les stocker dans la collection, par défaut le programme prend en compte le fuseau horaire local. Vous pouvez modifier ce comportement en utilisant le sélecteur `Dates inside objects` de la commande `SET DATABASE PARAMETER`.
- Si vous passez une heure, elle est stockée sous la forme d'un nombre de millisecondes (Réel).

#### Exemple 1

Vous souhaitez créer une nouvelle collection vide et l'assigner à une variable collection 4D :

```4d
 var $myCol : Collection
 $myCol:=New collection
  //$myCol=[]
```

#### Exemple 2

Vous souhaitez créer une collection pré-remplie :

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]
```

#### Exemple 3

Vous souhaitez créer une nouvelle collection puis ajouter un élément :

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  //$coll=["a","b","c"]
 $coll[9]:="z" //ajouter un 10e élément avec la valeur "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```

#### Voir également

[New shared collection](new-shared-collection.md)\
[Type](../commands-legacy/type.md)

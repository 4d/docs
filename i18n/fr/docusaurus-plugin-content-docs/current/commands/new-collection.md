---
id: new-collection
title: New collection
displayed_sidebar: docs
---

<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!--REF #_command_.New collection.Params-->

| Paramètres | Type                                                                    |                            | Description                                |
| ---------- | ----------------------------------------------------------------------- | -------------------------- | ------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer | &#8594 | Valeur(s) de collection |
| Résultat   | Collection                                                              | &#8592 | New collection                             |

<!-- END REF-->

#### Description

The `New collection` command <!--REF #_command_.New collection.Summary-->creates a new empty or prefilled collection and returns its reference.<!-- END REF--> Collections can be handled using properties and functions of the [Collection class API](../API/CollectionClass.md).

Prise en charge des formules

Vous devez affecter la référence retournée à une variable 4D de type Collection.

> Keep in mind that `var : Collection` statement declares a variable of the `Collection` type but does not create any collection.

Condition Not appliquée à une assertion

Sinon, vous pouvez ajouter ou modifier des éléments ultérieurement par affectation. Par exemple :

```4d
Vous pouvez fournir des paramètres supplémentaires à la callback si nécessaire.
```

Considère le @ comme un caractère standard

Vous pouvez passer n'importe quel nombre de valeurs de n'importe quel type pris en charge (number, text, date, picture, pointer, object, collection...). Contrairement aux tableaux, les collections peuvent mélanger des données de différents types.

Vous devez prêter attention aux problèmes de conversion suivants :

- La nouvelle collection partagée
- Les dates sont stockées sous la forme de date « aaaa-mm-jj » ou des chaînes au format « AAAA-MM-JJTHH: ss.SSSZ: mm » , selon la configuration actuelle « dates à l'intérieur des objets » de la base de données. Lors de la conversion de dates 4D en texte avant de les stocker dans la collection, par défaut le programme prend en compte le fuseau horaire local. Indice de fin (non inclus)
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
Inférieur à
```

#### Voir également

[New shared collection](new-shared-collection.md)\
[Type](../commands-legacy/type.md)

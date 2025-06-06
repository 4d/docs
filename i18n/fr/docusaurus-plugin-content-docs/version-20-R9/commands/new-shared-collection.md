---
id: new-shared-collection
title: New shared collection
displayed_sidebar: docs
---

<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!--REF #_command_.New shared collection.Params-->

| Paramètres | Type                                                  |                             | Description                                            |
| ---------- | ----------------------------------------------------- | --------------------------- | ------------------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Object, Collection | &#8594; | Valeur(s) de la collection partagée |
| Résultat   | Collection                                            | &#8592; | New shared collection                                  |

<!-- END REF-->

## Description

La commande `New shared collection` <!-- REF #_command_.New shared collection.Summary --> crée une nouvelle collection partagée vide ou préremplie<!-- END REF --> et retourne sa référence. Les collections peuvent être gérées à l'aide des propriétés et des fonctions de la [classe Collection](../API/CollectionClass.md).

L'ajout d'un élément à cette collection à l'aide de l'opérateur d'assignation doit être entouré de la structure [`Use...End use`](../Concepts/shared.md#useend-use), sinon une erreur est générée (cela n'est pas nécessaire lors de l'ajout d'éléments à l'aide de fonctions telles que [`push()`](../API/CollectionClass.md#push) ou [`map()`](../API/CollectionClass.md#map) car elles utilisent automatiquement une structure interne *Use...End use*). La lecture d'un élément sans structure *Use...End use* est cependant possible.

:::info

Pour plus d'informations sur les collections partagées, veuillez vous référer à la page [Objets et collections partagés](../Concepts/shared.md).

:::

Si vous ne passez aucun paramètre, `New shared collection` crée une collection vide et retourne sa référence.

Vous devez affecter la référence retournée à une variable 4D de type Collection.

> N'oubliez pas que l'instruction `var : Collection` déclare une variable de type `Collection` mais ne crée pas de collection.

Optionnellement, vous pouvez préremplir la nouvelle collection partagée en passant une ou plusieurs *value*(s) comme paramètre(s). Sinon, vous pouvez ajouter ou modifier des éléments ultérieurement via l'assignation en notation objet (cf. exemple).

Si l'indice du nouvel élément est au-delà du dernier élément existant de la collection partagée, la collection est automatiquement redimensionnée et tous les nouveaux éléments intermédiaires reçoivent la valeur **null**.

Vous pouvez passer tout nombre de valeurs de n'importe quel type pris en charge :

- nombre (réel, entier...). Les valeurs numériques sont toujours stockées sous forme de réels.
- text
- boolean
- date
- heure (stockée en nombre de milliseconds - réel)
- Null
- Si vous souhaitez que l'évaluation soit sensible à la casse ou pour différencier des caractères accentués, passez la constante `ck diacritical` dans le paramètre option.
- *$1.stop* (booléen, optionnel) : **true** pour stopper le rétroappel de la méthode.

:::note

Contrairement aux collections standard (non partagées), les collections partagées ne prennent pas en charge les images, les pointeurs et les objets ou collections non partagés.

:::

## Exemple

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

## Voir également

[New collection](new-collection.md)\
[New shared object](../commands-legacy/new-shared-object.md)\
*Shared objects and shared collections*

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1527                        |
| Thread safe        | &check; |



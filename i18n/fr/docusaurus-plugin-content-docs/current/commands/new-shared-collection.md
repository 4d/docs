---
id: new-shared-collection
title: New shared collection
displayed_sidebar: docs
---

<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!--REF #_command_.New shared collection.Params-->

| Paramètres | Type                                                                |                                 | Description                                            |
| ---------- | ------------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------ |
| value      | Number, Text, Date, Time, Boolean, Shared object, Shared collection | &amp;srarr; | Valeur(s) de la collection partagée |
| Résultat   | Collection                                                          | &amp;larr;  | New shared collection                                  |

<!-- END REF-->

#### Description

nombres Collections can be handled using properties and functions of the [Collection class API](../API/CollectionClass.md).

Adding an element to this collection using the assignment operator must be surrounded by the [`Use...End use`](../Concepts/shared.md#useend-use) structure, otherwise an error is generated (this is not necessary when adding elements using functions such as [`push()`](../API/CollectionClass.md#push) or [`map()`](../API/CollectionClass.md#map) because they automatically trigger an internal *Use...End use*). Copie inversée de la collection

:::info

For more information on shared collections, please refer to the [Shared objects and collections](../Concepts/shared.md) page.

:::

Symbole(s)

Vous devez affecter la référence retournée à une variable 4D de type Collection.

> Keep in mind that `var : Collection` statement declares a variable of the `Collection` type but does not create any collection.

Symbole(s) Sinon, vous pouvez ajouter ou modifier des éléments ultérieurement via l'assignation en notation objet (cf. exemple).

Prise en charge des formules

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

#### Exemple

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

#### Voir également

[New collection](new-collection.md)\
[New shared object](../commands-legacy/new-shared-object.md)\
*Shared objects and shared collections*

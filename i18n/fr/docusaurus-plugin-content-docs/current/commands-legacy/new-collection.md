---
id: new-collection
title: New collection
slug: /commands/new-collection
displayed_sidebar: docs
---

<!--REF #_command_.New collection.Syntax-->**New collection** {( *valeur* {; *valeur2* ; ... ; *valeurN*} )} -> Résultat<!-- END REF-->
<!--REF #_command_.New collection.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| valeur | Numérique, Texte, Date, Objet, Collection, Pointeur | &#x1F852; | Valeur(s) de la collection |
| Résultat | Collection | &#x1F850; | Nouvelle collection |

<!-- END REF-->

#### Description 

<!--REF #_command_.New collection.Summary-->La commande **New collection** crée une nouvelle collection vide ou pré-remplie et retourne sa référence.<!-- END REF--> 

Si vous ne passez aucun paramètre, **New collection** crée une collection vide et retourne sa référence.

Vous devez assigner la référence retournée à une variable 4D déclarée avec [C\_COLLECTION](c-collection.md).

**Note :** Gardez à l'esprit que [C\_COLLECTION](c-collection.md) déclare une variable de type [Collection](# "Tableau de valeurs de propriétés d'objets") mais ne crée aucune collection. 

Optionnellement, vous pouvez préremplir la nouvelle collection en passant une ou plusieurs *valeur*(s) en paramètre(s). 

Sinon, vous pourrez ajouter ou modifier des éléments ultérieurement via l'assignation en notation objet. Par exemple :

```4d
 myCol[10]:="Mon nouvel élément"
```

 Si l'indice du nouvel élément est situé au-delà du dernier élément existant de la collection, la collection est automatiquement redimensionnée et tous les nouveaux éléments intermédiaires prennent la valeur **null**.

**Note :** Pour plus d'informations sur la notation objet, veuillez vous reporter à la section *Utiliser la notation objet*. 

Vous pouvez passer tout nombre de valeurs de n'importe quel type pris en charge (nombre, texte, date, pointeur, objet, collection...). Contrairement aux tableaux, les collections peuvent mélanger les données de différents types. 

Nous attirons votre attention sur les particularités suivantes :

* Si vous passez un pointeur, il est conservé tel quel ; il est évalué en utilisant la commande [JSON Stringify](json-stringify.md)
* Les dates sont stockées sous forme de date "yyyy-mm-dd" ou de chaîne au format "YYYY-MM-DDTHH:mm:ss.SSSZ" en fonction du paramétrage courant relatif au stockage des dates dans les objets (cf. *Page Compatibilité*). Lorsque vous convertissez des dates 4D en texte, avant de les stocker dans la collection, par défaut, le programme utilise l'heure locale de la zone. Vous pouvez modifier ce comportement en utilisant le sélecteur Dates inside objects de la commande [SET DATABASE PARAMETER](set-database-parameter.md).
* Si vous passez une heure, elle est stockée en nombre de millisecondes (réel).

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

Vous créer une nouvelle collection puis ajoutez un élément :

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  //$coll=["a","b","c"]
 $coll[9]:="z" //ajout d'un 10e élément ayant pour valeur "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```

**Note :** Cet exemple requiert que la notation objet soit activée dans la base (cf. paragraphe *Notation objet*).

#### Voir aussi 

[C\_COLLECTION](c-collection.md)  
[New shared collection](new-shared-collection.md)  
[Type](type.md)  
---
id: array-to-collection
title: ARRAY TO COLLECTION
slug: /commands/array-to-collection
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TO COLLECTION.Syntax-->**ARRAY TO COLLECTION** ( *collection* ; *tableau* {; *nomPropriété*}{; *tableau2* ; *nomPropriété2* ; ... ; *tableauN* ; *nomPropriétéN*} )<!-- END REF-->
<!--REF #_command_.ARRAY TO COLLECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| collection | Collection | &#8592; | Collection qui reçoit les données du tableau |
| tableau | Array | &#8594;  | Tableau à copier vers la collection ; si le paramètre nomPropriété est passé, sont copiées les valeurs correspondantes à la propriété dans la collection |
| nomPropriété | Text | &#8594;  | Nom de propriété Objet dont les valeurs remplissent les éléments du tableau |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY TO COLLECTION.Summary-->La commande **ARRAY TO COLLECTION** copie un ou plusieurs *tableau*(x) dans les éléments ou les valeurs *nomPropriété* de *collection*.<!-- END REF-->

Cette commande peut être utilisée avec une *collection* qui contient des valeurs ou une *collection* qui contient des objets, dans ce cas le(s) paramètre(s) *nomPropriété* est (sont) obligatoire(s). 

* Si vous omettez le paramètre *nomPropriété*, la commande copie tous les éléments du *tableau* vers la *collection*. Si la *collection* n'était pas vide, les éléments existants sont remplacés et de nouveaux éléments sont ajoutés si la taille du *tableau* est plus grande que la longueur de la *collection*. Après l'exécution de cette commande, la longueur de la *collection* est identique à la taille du *tableau*.
* Si vous passez un ou plusieurs paramètres *nomPropriété*(s), la commande crée ou remplace les éléments de la *collection* avec des objets. Chaque objet est construit avec une propriété dont le nom est fourni dans le paramètre *nomPropriété*, et dont la valeur est l'élément de tableau correspondant. Si la *collection* n'était pas vide, les éléments existants sont remplacés et de nouveaux éléments sont ajoutés si la taille du *tableau* était plus grande que la collection. Aprés l'exécution de la commande, la longueur de la *collection* est identique à la celle du *tableau* le plus grand.

#### Exemple 1 

Vous souhaitez copier un tableau texte dans une collection :

```4d
 var $colFruits : Collection
 $colFruits:=New collection
 ARRAY TEXT($artFruits;4)
 $artFruits{1}:="Orange"
 $artFruits{2}:="Banana"
 $artFruits{3}:="Apple"
 $artFruits{4}:="Grape"
 ARRAY TO COLLECTION($colFruits;$artFruits)
  //$colFruits[0]="Orange"
  //$colFruits[1]="Banana"
  //...
```

#### Exemple 2 

Vous souhaitez copier les valeurs de champs dans une collection d'objets via des tableaux :

```4d
 var $col : Collection
 $col:=New collection
 ARRAY TEXT($artCity;0)
 ARRAY LONGINT($arLZipCode;0)
 SELECTION TO ARRAY([Customer]City;$artCity)
 SELECTION TO ARRAY([Customer]Zipcode;$arLZipCode)
 ARRAY TO COLLECTION($col;$artCity;"cityName";$arLZipCode;"Zip")
  //$col[0]={"cityName":"Cleveland","Zip":35049}
  //$col[1]={"cityName":"Blountsville","Zip":35031}
  //...
```

#### Exemple 3 

Vous souhaiter copier un tableau texte dans une collection partagée :

```4d
 ARRAY TEXT($at;1)
 
 APPEND TO ARRAY($at;"Apple")
 APPEND TO ARRAY($at;"Orange")
 APPEND TO ARRAY($at;"Grape")
 
 var $sharedCol : Collection
 $sharedCol:=New shared collection
 
 Use($sharedCol)
    ARRAY TO COLLECTION($sharedCol;$at)
 End use
```

#### Voir aussi 

[COLLECTION TO ARRAY](collection-to-array.md)  
*Conversions de type entre les collections et les tableaux 4D*  
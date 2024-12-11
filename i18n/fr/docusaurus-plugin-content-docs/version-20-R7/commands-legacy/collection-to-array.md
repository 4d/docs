---
id: collection-to-array
title: COLLECTION TO ARRAY
slug: /commands/collection-to-array
displayed_sidebar: docs
---

<!--REF #_command_.COLLECTION TO ARRAY.Syntax-->**COLLECTION TO ARRAY** ( *collection* ; *tableau* {; *nomPropriété*}{; *tableau2* ; *nomPropriété2* ; ... ; *tableauN* ; *nomPropriétéN*} )<!-- END REF-->
<!--REF #_command_.COLLECTION TO ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| collection | Collection | &#8594;  | Collection à copier dans un ou des tableau(x) |
| tableau | Array | &#8592; | Tableau reçevant les éléments de la collection ; si le paramètre nomPropriété est passé, le tableau reçoit les valeurs correspondantes à nomPropriété dans la collection. |
| nomPropriété | Text | &#8594;  | Nom de la propriété de l'objet dont les valeurs sont à copier dans le tableau ("" pour tous les éléments) |

<!-- END REF-->

#### Description 

<!--REF #_command_.COLLECTION TO ARRAY.Summary-->La commande **COLLECTION TO ARRAY** remplit un ou plusieurs *tableau*(x) avec les éléments ou les valeurs *nomPropriété* de la *collection* dans le ou les *tableau*(x).<!-- END REF-->

Cette commande peut être utilisée avec une *collection* qui contient des valeurs ou une *collection* qui contient des objets, dans ce cas le ou les paramètre(s) *nomPropriété* est (sont) obligatoire(s). 

* Si vous omettez le paramètre *nomPropriété*, la commande copie tous les éléments de la *collection* dans le *tableau*. Après l'exécution de la commande, la taille du *tableau* est identique à la longueur de la *collection*.
* Si vous passez un ou plusieurs paramètre(s *nomPropriété*, *collection* doit être une collection d'objets (les autres éléments sont ignorés). Dans ce cas, chaque paramètre *nomPropriété* indique le nom d'une propriété dans chaque objet de la collection dont vous voulez copier la valeur dans le *tableau* correspondant. Vous pouvez passer toutes les paires *nomPropriété* /*tableau* que vous voulez, en mélangeant les types de tableau. Après l'exécution de la commande, chaque taille de tableau est identique à la longueur de la collection.

Dans tous les cas, 4D convertit les éléments de la collection ou les valeurs selon le type du *tableau* (si nécessaire). Les règles de conversion sont détaillées dans la page *Conversions de type entre les collections et les tableaux 4D*.

#### Exemple 1 

Vous souhaitez copier une collection de chaînes dans un tableau texte :

```4d
 var $fruits : Collection
 $fruits:=New collection("Orange";"Banana";"Apple";"Grape")
 ARRAY TEXT($artFruits;0)
 COLLECTION TO ARRAY($fruits;$artFruits)
  //$artFruits{1}="Orange"
  //$artFruits{2}="Banana"
  //...
```

#### Exemple 2 

Vous voulez copier différentes valeurs de propriété d'une collection d'objets dans différents tableaux :

```4d
 var $col : Collection
 $col:=New collection
 ARRAY TEXT($city;0)
 ARRAY LONGINT($zipCode;0)
 $col.push(New object("name";"Cleveland";"zc";35049))
 $col.push(New object("name";"Blountsville";"zc";35031))
 $col.push(New object("name";"Adger";"zc";35006))
 $col.push(New object("name";"Clanton";"zc";35046))
 $col.push(New object("name";"Shelby";"zc";35143))
 
 COLLECTION TO ARRAY($col;$city;"name";$zipCode;"zc")
  //$city{1}="Cleveland", $zipCode{1}=35049
  //$city{2}="Blountsville", $zipCode{2}=35031
  //...
```

#### Voir aussi 

[ARRAY TO COLLECTION](array-to-collection.md)  
*Conversions de type entre les collections et les tableaux 4D*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1562 |
| Thread safe | &check; |
| Interdite sur le serveur ||



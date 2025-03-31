---
id: wp-add-picture
title: WP Add picture
slug: /WritePro/commands/wp-add-picture
displayed_sidebar: docs
---

<!--REF #_command_.WP Add picture.Syntax-->**WP Add picture** ( *wpDoc* {; *image*} ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Add picture.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Document 4D Write Pro |
| image | Picture, Text | &#8594;  | Image ou chemin d'accès de l'image |
| Résultat | Object | &#8592; | Objet référençant l'image |

<!-- END REF-->

## Description 

<!--REF #_command_.WP Add picture.Summary-->La commande **WP Add picture** ancre *image* à un emplacement fixe dans *wpDoc* et retourne sa référence.<!-- END REF--> La référence retournée peut alors être passée à la commande [WP SET ATTRIBUTES](wp-set-attributes.md) pour déplacer *image* à n'importe quel endroit dans *wpDoc* (page, section, en-tête, pied, etc.) avec une couche définie, taille, etc. 

Dans *wpDoc*, passez le nom de l'objet document 4D Write Pro.

Dans le paramètre optionnel *image*, vous pouvez passer :

* soit une image 4D,
* ou une chaîne contenant un chemin d'accès à un fichier image stocké sur le disque, exprimé en utilisant la syntaxe système.  
Vous pouvez passer soit le chemin d'accès complet, ou le chemin relatif au fichier de structure. Vous pouvez aussi passer un nom de fichier, dans ce cas, le fichier doit se trouver à côté du fichier de structure de la base. Si vous passez un nom de fichier, vous devez indiquer son extension.

> **Note** : Tous les formats d'image supportés par 4D peuvent être utilisés (voir la section *Introduction aux images* ). Vous pouvez obtenir la liste des formats image disponibles en utilisant la commande [PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md). Si l'image encapsule plusieurs formats (codecs), 4D Write Pro garde seulement un format pour l'affichage et un format pour l'impression (s'ils sont différents) dans le document ; les "meilleurs" formats sont automatiquement sélectionnés.

* Si le paramètre *image* est omis, vous obtenez une référence d'image valide et une image vide est ajoutée. Ce principe vous permet d'appeler par la suite la commande [WP SET ATTRIBUTES](wp-set-attributes.md) avec le sélecteur wk image expression afin d'utiliser une expression 4D pour remplir l'image. Si l'expression ne peut pas être évaluée ou ne retourne pas une image 4D valide, une image vide (cadre noir par défaut) est affichée.

Par défaut, l'image ajoutée est :

* intégrée derrière le texte,
* affichée dans le coin supérieur gauche du papier,
* affichée sur toutes les pages.

L'emplacement, la couche (en ligne, devant/derrière le texte), la visibilité, et toutes les propriétés de *image* peuvent être modifiées à l'aide de la commande [WP SET ATTRIBUTES](wp-set-attributes.md), ou via des actions standard (voir *Utiliser les actions standard 4D Write Pro*). 

**Note :** La commande [WP Selection range](wp-selection-range.md) retourne un objet *référence image* si une image ancrée est sélectionnée, et un *objet plage* si une image en ligne est sélectionnée. Vous pouvez vérifier si l'objet sélectionné est un objet image avec l'attribut wk type. Si sa valeur = 2, alors c'est un objet image, sinon c'est un objet plage (valeur = 0).

## Exemple 1 

Vous souhaitez ajouter une image avec les paramètrages par défaut, en utilisant un chemin d'accès.

```4d
 var $obPict : Object
 $obPict:=WP Add picture(myDoc;"C:\\Users\\John.Doe\\Pictures\\Sunrise.jpg")
```

Le résultat est :

![](../../assets/en/WritePro/commands/pict3617325.en.png)

## Exemple 2 

Vous voulez ajouter une image retaillée, centrée et ancrée au papier :

```4d
 var $obImage : Object
 $obImage:=WP Add picture(myDoc;"C:\\Users\\John.Doe\\Pictures\\Saved Pictures\\Sunrise.jpg")
 WP SET ATTRIBUTES($obImage;wk anchor origin;wk header box)
 WP SET ATTRIBUTES($obImage;wk anchor horizontal align;wk center)
 WP SET ATTRIBUTES($obImage;wk anchor vertical align;wk center)
 WP SET ATTRIBUTES($obImage;wk width;"650px";wk height;"120px")
```

Le résultat est :

![](../../assets/en/WritePro/commands/pict3617351.en.png)

## Exemple 3 

Vous souhaitez utiliser une expression de type champ pour ajouter une image ancrée dans un document affichant du texte provenant de la base de données :

```4d
 QUERY([Flowers];[Flowers]Common_Name="tulip")
 WP SET TEXT(myDoc;[Flowers]Description;wk append) //insertion du texte
 var $obImage : Object
 $obImage:=WP Add picture(myDoc)
 WP SET ATTRIBUTES($obImage;wk image formula;Formula([Flowers]Image))
```
  
  
![](../../assets/en/WritePro/commands/pict3841719.en.png)

## Voir aussi 

  
*Manipuler des images*  
[WP DELETE PICTURE](wp-delete-picture.md)  
[WP Picture range](wp-picture-range.md)  
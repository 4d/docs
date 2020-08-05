---
id: staticPicture
title: Image statique
---

## Aperçu

Les images statiques sont des [objets statiques](formObjects_overview.md#active-and-static-objects) pouvant être utilisées à des fins diverses dans les formulaires 4D, notamment comme décor, arrière-plan ou interface utilisateur :

![](assets/en/FormObjects/StaticPict.png)


Les images statiques sont stockées à l’extérieur des formulaires et insérées par référence. Dans l'éditeur de formules, les objets image statique sont créées par copier-coller ou par glisser-déposer.

> Si vous placez une image statique dans la page 0 d’un formulaire multi-pages, elle apparaîtra comme élément d’arrière-plan de toutes les pages. Vous pouvez également l’inclure dans un formulaire hérité, qui s'applique à l'arrière-plan de différents autres formulaires. Dans les deux cas, votre base s’exécutera plus rapidement.



## Format et emplacement

L'image d'origine doit être stockée dans un format géré nativement par 4D (4D reconnaît les principaux formats d'image : JPEG, PNG, BMP, SVG, GIF, etc.).

Two main locations can be used for static picture path:

- in the **Resources** folder of the project database. Appropriate when you want to share static pictures between several forms in the database. Dans ce cas, le chemin d'accès se trouve dans "/RESOURCES/\<picture path\>".
- in an image folder (e.g. named **Images**) within the form folder. Convient lorsque les images statiques sont utilisées uniquement dans le formulaire et/ou lorsque vous souhaitez pouvoir déplacer ou dupliquer le formulaire entier dans un ou plusieurs projets. Dans ce cas, le chemin d'accès est "<\picture path\>" et est résolu à partir de la racine du dossier du formulaire.


## Propriétés prises en charge

[Bas](properties_CoordinatesAndSizing.md#bottom) - [CSS Class](properties_Object.md#css-class) - [Affichage](properties_Picture.md#display) - [Hauteur](properties_CoordinatesAndSizing.md#height) - [Dim. horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Gauche](properties_CoordinatesAndSizing.md#left) - [Nom](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Droite](properties_CoordinatesAndSizing.md#right) - [Haut](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Dim. vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilité](properties_Display.md#visibility)  - [Largeur](properties_CoordinatesAndSizing.md#width)

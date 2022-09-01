---
id: picturePopupMenuOverview
title: Pop-up menu image
---

## Vue d’ensemble

Un pop-up menu image affiche un tableau d’images bidimensionnel. Un pop-up menu image peut être utilisé à la place d’un [bouton image](pictureButton_overview.md). Le mode de création d’une image destinée à être utilisée dans un pop-up menu image est identique à celui d’un bouton image. Le mode de fonctionnement de l’objet, quant à lui, s’apparente à la [Grille de boutons](buttonGrid_overview.md), à la différence près que l’image est utilisée comme un pop-up menu et non comme un objet du formulaire.

## Utiliser des pop-up menus images

Pour créer un pop-up menu image, vous devez [faire référence à une image](properties_Picture.md#pathname) conçue dans ce but. L’exemple suivant vous permet de sélectionner la langue d’interface de l’application à l’aide d’un pop-up menu image. Chaque langue est symbolisée par un drapeau :

![](../assets/en/FormObjects/picturePopupMenu_example.png)

### Programmation

Vous pouvez gérer les pop-up menus image par l’intermédiaire de méthodes. A l’instar des [grilles de boutons](buttonGrid_overview.md), les variables associées au pop-up menu image prennent pour valeur le numéro de l’élément sélectionné et zéro (0) si aucun élément n’est sélectionné. et zéro (0) si aucun élément n’est sélectionné. Les éléments sont numérotés de gauche à droite et de haut en bas, à compter de l’élément situé en haut à gauche.

### Aller à page

Vous pouvez associer l’[action standard](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) `Aller à page` à un objet de type pop-up menu image. Lorsque cette action est activée, 4D affiche automatiquement la page du formulaire correspondant à la position de l'image sélectionnée dans le tableau d'images. Les éléments sont numérotés de gauche à droite et de haut en bas, à compter de l’élément situé en haut à gauche.

Par exemple, si l’utilisateur clique sur le 3e élément, 4D affichera la page 3 du formulaire courant (si elle existe). Si vous souhaitez gérer vous-même l’effet du clic, conservez l’option par défaut `Pas d’action`.

## Propriétés prises en charge

[Gras](properties_Text.md#bold) - [Style de la bordure](properties_BackgroundAndBorder.md#border-line-style) - [Bas](properties_CoordinatesAndSizing.md#bottom) - [Classe](properties_Object.md#css-class) - [Colonnes](properties_Crop.md#columns) - [Hauteur](properties_CoordinatesAndSizing.md#height) - [Message d'aide](properties_Help.md#help-tip) - [Dim. horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Gauche](properties_CoordinatesAndSizing.md#left) - [Nom](properties_Object.md#object-name) - [Chemin d'accès](properties_Picture.md#pathname) - [Droite](properties_CoordinatesAndSizing.md#right) - [Lignes](properties_Crop.md#rows) - [Action standard](properties_Action.md#standard-action) - [Haut](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable ou expression](properties_Object.md#variable-or-expression) - [Dim. vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilité](properties_Display.md#visibility) - [Largeur](properties_CoordinatesAndSizing.md#width)  

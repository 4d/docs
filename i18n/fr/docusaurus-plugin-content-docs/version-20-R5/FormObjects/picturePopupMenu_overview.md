---
id: picturePopupMenuOverview
title: Pop-up menu image
---

Un pop-up menu image affiche un tableau d’images bidimensionnel. A picture pop-up menu can be used instead of a [picture button](pictureButton_overview.md). Le mode de création d’une image destinée à être utilisée dans un pop-up menu image est identique à celui d’un bouton image. The concept is the same as for [button grids](buttonGrid_overview.md), except that the graphic is used as a pop-up menu instead of a form object.

## Utiliser des pop-up menus images

To create a picture pop-up menu, you need to [refer to a picture](properties_Picture.md#pathname). L’exemple suivant vous permet de sélectionner la langue d’interface de l’application à l’aide d’un pop-up menu image. Chaque langue est symbolisée par un drapeau :

![](../assets/en/FormObjects/picturePopupMenu_example.png)

### Programmation

Vous pouvez gérer les pop-up menus image par l’intermédiaire de méthodes. As with [button grids](buttonGrid_overview.md), variables associated with picture pop-up menus are set to the value of the selected element in the picture pop-up menu. et zéro (0) si aucun élément n’est sélectionné. Les éléments sont numérotés de gauche à droite et de haut en bas, à compter de l’élément situé en haut à gauche.

### Aller à page

You can assign the `gotoPage` [standard action](https://doc.4d.com/4Dv19R4/4D/19-R4/Standard-actions.300-5736871.en.html) to a picture pop-up menu. Lorsque cette action est activée, 4D affiche automatiquement la page du formulaire correspondant à la position de l'image sélectionnée dans le tableau d'images. Les éléments sont numérotés de gauche à droite et de haut en bas, à compter de l’élément situé en haut à gauche.

Par exemple, si l’utilisateur clique sur le 3e élément, 4D affichera la page 3 du formulaire courant (si elle existe).
If you want to manage the effect of a click yourself, select `No action`.

## Propriétés prises en charge

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows)- [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

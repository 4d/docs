---
id: picturePopupMenuOverview
title: Pop-up menu image
---

Un pop-up menu image affiche un tableau d’images bidimensionnel. Un pop-up menu image peut être utilisé à la place d’un [bouton image](pictureButton_overview.md). Le mode de création d’une image destinée à être utilisée dans un pop-up menu image est identique à celui d’un bouton image. Le mode de fonctionnement de l’objet, quant à lui, s’apparente à la [Grille de boutons](buttonGrid_overview.md), à la différence près que l’image est utilisée comme un pop-up menu et non comme un objet du formulaire.

## Utiliser des pop-up menus images

Pour créer un pop-up menu image, vous devez [faire référence à une image](properties_Picture.md#pathname) conçue dans ce but. L’exemple suivant vous permet de sélectionner la langue d’interface de l’application à l’aide d’un pop-up menu image. Chaque langue est symbolisée par un drapeau :

![](../assets/en/FormObjects/picturePopupMenu_example.png)

### Programmation

Vous pouvez gérer les pop-up menus image par l’intermédiaire de méthodes. A l’instar des [grilles de boutons](buttonGrid_overview.md), les variables associées au pop-up menu image prennent pour valeur le numéro de l’élément sélectionné et zéro (0) si aucun élément n’est sélectionné. et zéro (0) si aucun élément n’est sélectionné. Les éléments sont numérotés de gauche à droite et de haut en bas, à compter de l’élément situé en haut à gauche.

### Aller à page

You can assign the `gotoPage` [standard action](https://doc.4d.com/4Dv19R4/4D/19-R4/Standard-actions.300-5736871.en.html) to a picture pop-up menu. Lorsque cette action est activée, 4D affiche automatiquement la page du formulaire correspondant à la position de l'image sélectionnée dans le tableau d'images. Les éléments sont numérotés de gauche à droite et de haut en bas, à compter de l’élément situé en haut à gauche.

Par exemple, si l’utilisateur clique sur le 3e élément, 4D affichera la page 3 du formulaire courant (si elle existe).
Si vous souhaitez gérer vous-même l’effet du clic, conservez l’option par défaut `Pas d’action`.

## Propriétés prises en charge

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows)- [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

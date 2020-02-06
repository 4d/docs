---
id: shapesOverview
title: Formes
---

Les formes sont des [objets statiques](formObjects_overview.md#active-and-static-objects) qui peuvent être ajoutées à des formes 4D.

Les formes 4D prennent en charge les formes basiques suivantes :

- rectangles
- lignes
- ovales


## Rectangle

Un rectangle statique est un objet décoratif contenu dans les formulaires. Les rectangles sont limités à des formes carrées.

Les rectangles sont créés à l'aide de plusieurs propriétés (couleur, épaisseur de ligne, motif, etc.). L'[arrondi](properties_CoordinatesAndSizing.md#corner-radius), en particulier, des coins du rectangle peuvent être définis.

![](assets/en/FormObjects/shapes_rectangle2.png)

#### Exemple JSON :

```4d
    "myRectangle": {
        "type": "rectangle",    //définit le type d'objet
        "left": 60,             //position sur la gauche du formulaire
        "top": 160,             //position en haut du formulaire
        "width": 100,           //largeur de l'objet 
        "height": 20,           //hauteur de l'objet
        "borderRadius": 20      //définit le rayon d'arrondi
                }
```


#### Propriétés prises en charge
[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Corner radius](properties_CoordinatesAndSizing.md#corner-radius) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Ligne

Une ligne statique est un objet décoratif pour les formulaires, entre deux tracés. Lines can be horizontal, vertical, or of any angle shapes.

The design of lines is controlled through many properties (color, line thickness, etc.).


### propriété startPoint
The `startPoint` JSON property defines from which coordinate to draw the line (see example).

> the `startPoint` property is not exposed in the Property List, where the line drawing direction is visible.



#### Exemple JSON :

```
    "myLine": {
        "type": "line",                
        "left": 20,
        "top": 40,
        "width": 100,
        "height": 80,
        "startPoint": "topLeft", //première orientation
        "strokeDashArray": "6 2" //pointillé
        }
```
Résultat : ![](assets/en/FormObjects/shape_line1.png)


```
    "myLine": {
        "type": "line",                
        "left": 20,
        "top": 40,
        "width": 100,
        "height": 80,
        "startPoint": "bottomLeft", //deuxième orientation
        "strokeDashArray": "6 2" //pointillé
        }
```
Résultat : ![](assets/en/FormObjects/shape_line2.png)



#### Propriétés prises en charge
[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [startPoint](#startpoint-property) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Ovale

Un ovale statique est un objet décoratif contenu dans les formulaires. Oval objects can be used to draw circular shapes (when [width](properties_CoordinatesAndSizing.md#width) and [height](properties_CoordinatesAndSizing.md#height) properties are equal).

![](assets/en/FormObjects/shape_oval.png)

#### Exemple JSON :

```4d
    "myOval": {
        "type": "oval",     //define the type of object
        "left": 60,         //left position on the form  
        "top": 160,         //top position on the form 
        "width": 100,       //width of the object
        "height": 20,       //height of the object
        "fill": "blue"      //define the background color
                }
```


#### Propriétés prises en charge
[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 
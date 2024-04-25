---
id: text
title: Text
---

A text object allows you to display static written content (_e.g._, instructions, titles, labels, etc.) on a form. Ces zones de texte statique peuvent devenir dynamiques lorsqu'elles incluent des références dynamiques. For more information, refer to [Using references in static text](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html).

#### Exemple JSON :

```4d
	"myText": {
                "type": "text",
                "text": "Hello World!",
                "textAlign": "center",
                "left": 60,			
                "top": 160,	
                "width": 100,
                "height": 20,
                "stroke": "#ff0000"		//text color   
                "fontWeight": "bold"
                }
```

## Rotation

4D lets you rotate text areas in your forms using the [Orientation](properties_Text.md#orientation) property.

![](../assets/en/FormObjects/staticText.png)

> Text rotation can be defined for a process using the `OBJECT SET TEXT ORIENTATION` language command.

Une fois qu’un texte a été orienté, il reste possible de modifier sa taille ou sa position ainsi que toutes ses propriétés. A noter que les propriétés de hauteur et de largeur de la zone de texte ne sont pas dépendantes de l’orientation :

![](../assets/en/FormObjects/staticText2.png)

- If the object is resized in direction A, its [width](properties_CoordinatesAndSizing.md#width) is modified;
- If the object is resized in direction C, its [height](properties_CoordinatesAndSizing.md#height) is modified;
- If the object is resized in direction B, both its [width](properties_CoordinatesAndSizing.md#width) and [height](properties_CoordinatesAndSizing.md#height) are modified.

## Propriétés prises en charge

<details><summary>Historique</summary>

| Release | Modifications                                 |
| ------- | --------------------------------------------- |
| 19 R7   | Prise en charge de la propriété Rayon d'angle |

</details>

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Corner radius](properties_CoordinatesAndSizing.md#corner-radius) - [Fill Color](properties_BackgroundAndBorder.md#fill-color) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Orientation](properties_Text.md#orientation) - [Right](properties_CoordinatesAndSizing.md#right) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

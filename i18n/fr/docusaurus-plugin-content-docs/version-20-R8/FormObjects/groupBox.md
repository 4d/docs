---
id: groupBox
title: Zone de groupe
---

Une zone de groupe est un objet statique qui vous permet de rassembler visuellement plusieurs objets de formulaire :

![](../assets/en/FormObjects/groupBox.png)

> The name of a group box is static text; you can use a “localizable” reference as with any 4D label (see [Using references in static text](https://doc.4d.com/4Dv20/4D/20.2/Using-references-in-static-text.300-6750154.en.html) and *XLIFF Architecture* section in 4D Design Reference.

#### Exemple JSON :

```
	"myGroup": {
		"type": "groupBox",	
		"title": "Employee Info"
		"left": 60,
		"top": 160,
		"width": 100,
		"height": 20
		}
```

#### Propriétés prises en charge

[Bottom](properties_CoordinatesAndSizing.md#bottom) - [CSS Class](properties_Object.md#css-class) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
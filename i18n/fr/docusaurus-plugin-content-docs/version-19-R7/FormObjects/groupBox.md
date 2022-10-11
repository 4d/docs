---
id: groupBox
title: Zone de groupe
---

Une zone de groupe est un objet statique qui vous permet de rassembler visuellement plusieurs objets de formulaire :

![](../assets/en/FormObjects/groupBox.png)
> Le nom d'une zone de groupe est un texte statique ; vous pouvez utiliser une référence "localisable", comme pour toute étiquette 4D (voir [Utiliser des références dans les textes statiques](https://doc. 4d. com/4Dv17/4D/17.3/Utiliser-des-references-dans-les-textes-statiques. 300-4639972. fr. html) et la section *Architecture XLIFF* dans le manuel Développement de 4D.



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
[Bas](properties_CoordinatesAndSizing.md#bottom) - [CSS Class](properties_Object.md#css-class) - [Police](properties_Text.md#font) - [Couleur de la police](properties_Text.md#font-color) - [Taille](properties_Text.md#font-size) - [Hauteur](properties_CoordinatesAndSizing.md#height) - [Alignement horizontal](properties_Text.md#horizontal-alignment) - [Dim. horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Italique](properties_Text.md#italic) - [Gauche](properties_CoordinatesAndSizing.md#left) - [Nom](properties_Object.md#object-name) - [Droite](properties_CoordinatesAndSizing.md#right) - [Titre](properties_Object.md#title) - [Haut](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Souligné](properties_Text.md#underline) - [Dim. vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilité](properties_Display.md#visibility) - [Largeur](properties_CoordinatesAndSizing.md#width) 
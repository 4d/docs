---
id: windowSize
title: Taille de la Fenêtre
---


## Hauteur fixe


Si vous cochez cette option, la hauteur de la fenêtre sera verrouillée et l'utilisateur ne pourra plus la redimensionner.

Si cette option n'est pas cochée, la largeur de la fenêtre du formulaire peut être modifiée. Dans ce cas, les propriétés [Hauteur mini et Hauteur maxi](#maximum-height-minimum-height) peuvent être utilisées pour déterminer les limites de redimensionnement.


#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles   |
| ------------- | --------------- | ------------------- |
| windowSizingY | string          | "fixed", "variable" |


---

## Largeur fixe


Si vous cochez cette option, la largeur de la fenêtre sera verrouillée et l'utilisateur ne pourra plus la redimensionner.

Si cette option n'est pas cochée, la largeur de la fenêtre du formulaire peut être modifiée. Dans ce cas, les propriétés [Largeur mini et Largeur maxi](#maximum-width-minimum-width) peuvent être utilisées pour déterminer les limites de redimensionnement.


#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles   |
| ------------- | --------------- | ------------------- |
| windowSizingX | string          | "fixed", "variable" |

---



## Hauteur maxi, Hauteur mini

Hauteur maximale et minimale (en pixels) d'une fenêtre de formulaire redimensionnable si l'option [Hauteur fixe](#fixed-height) n'est pas définie.

##### Grammaire JSON

| Nom             | Type de données | Valeurs possibles  |
| --------------- | --------------- | ------------------ |
| windowMinHeight | number          | valeur entier long |
| windowMaxHeight | number          | valeur entier long |


## Largeur maxi, Largeur mini

Largeur maximale et minimale (en pixels) d'une fenêtre de formulaire redimensionnable si l'option [Largeur fixe](#fixed-width) n'est pas définie.


#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles  |
| -------------- | --------------- | ------------------ |
| windowMinWidth | number          | valeur entier long |
| windowMaxWidth | number          | valeur entier long |


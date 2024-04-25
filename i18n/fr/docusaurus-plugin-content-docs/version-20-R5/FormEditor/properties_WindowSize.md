---
id: windowSize
title: Window Size
---

## Hauteur fixe

Si vous cochez cette option, la hauteur de la fenêtre sera verrouillée et l'utilisateur ne pourra plus la redimensionner.

Si cette option n'est pas cochée, la largeur de la fenêtre du formulaire peut être modifiée. In this case, the [Minimum Height and Maximum Height](#maximum-height-minimum-height) properties can be used to determine the resizing limits.

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles   |
| ------------- | --------------- | ------------------- |
| windowSizingY | string          | "fixed", "variable" |

---&#x20;

## Largeur fixe

Si vous cochez cette option, la largeur de la fenêtre sera verrouillée et l'utilisateur ne pourra plus la redimensionner.

Si cette option n'est pas cochée, la largeur de la fenêtre du formulaire peut être modifiée. In this case, the [Minimum Width and Maximum Width](#maximum-width-minimum-width) properties can be used to determine the resizing limits.

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles   |
| ------------- | --------------- | ------------------- |
| windowSizingX | string          | "fixed", "variable" |

---&#x20;

## Hauteur maxi, Hauteur mini

Maximum and minimum height (in pixels) of a resizeable form window if the [Fixed Height](#fixed-height) option is not set.

##### Grammaire JSON

| Nom             | Type de données | Valeurs possibles  |
| --------------- | --------------- | ------------------ |
| windowMinHeight | number          | valeur entier long |
| windowMaxHeight | number          | valeur entier long |

## Largeur maxi, Largeur mini

Maximum and minimum width (in pixels) of a resizeable form window if the [Fixed Width](#fixed-width) option is not set.

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles  |
| -------------- | --------------- | ------------------ |
| windowMinWidth | number          | valeur entier long |
| windowMaxWidth | number          | valeur entier long |

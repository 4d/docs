---
id: stepper
title: Stepper
---

Un stepper permet à l'utilisateur de faire défiler des valeurs numériques, des durées (heures) ou des dates par des étapes pré-définies en cliquant sur les boutons de direction.

![](../assets/en/FormObjects/indicator_numericStepper.png)

## Utilisation du stepper

La variable associée à l’objet peut être affectée à une zone saisissable (champ ou variable) afin de stocker ou modifier la valeur courante de l’objet.

Un stepper peut être directement associé à une variable numérique, heure ou date.

* Pour les valeurs de type heure, les propriétés Minimum, Maximum et Pas représentent des secondes. Par exemple, pour définir un stepper de 8h00 à 18h00 avec des pas de 10 minutes :
    * [minimum](properties_Scale.md#minimum) = 28 800 (8\*60\*60)
    * [maximum](properties_Scale.md#maximum) = 64 800 (18\*60\*60)
    * [step](properties_Scale.md#step) = 600 (10\*60)
* Pour les valeurs de type date, la valeur saisie dans la propriété [Pas](properties_Scale.md#step) représente des jours. Les propriétés Minimum et Maximum sont ignorées.
> Pour que le stepper fonctionne avec une variable heure ou date, il est impératif de définir son type dans le formulaire ET de la déclarer explicitement via la commande [C_TIME](https://doc.4d.com/4Dv17R5/4D/17-R5/C-TIME.301-4128557.en.html) ou [C_DATE](https://doc.4d.com/4Dv17R5/4D/17-R5/C-DATE.301-4128570.en.html).

Pour plus d'informations, veuillez vous reporter à la section [Utiliser des indicateurs](progressIndicator.md#using-indicators) de la page "Indicateurs de progression".

## Propriétés prises en charge
[Style de la bordure](properties_BackgroundAndBorder.md#border-line-style) -[Bas](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Saisissable](properties_Entry.md#enterable) - [Exécuter méthode objet](properties_Action.md#execute-object-method) - [Type d'expression](properties_Object.md#expression-type) (uniquement "entier", "numérique", "date", ou "heure") - [Hauteur](properties_CoordinatesAndSizing.md#height) - [Message d'aide](properties_Help.md#help-tip) - [Dim. horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Gauche](properties_CoordinatesAndSizing.md#left) - [Maximum](properties_Scale.md#maximum) - [Minimum](properties_Scale.md#minimum) - [Nom](properties_Object.md#object-name) - [Droite](properties_CoordinatesAndSizing.md#right) - [Step](properties_Scale.md#step) - [Haut](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable ou expression](properties_Object.md#variable-or-expression) - [Dim. vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilité](properties_Display.md#visibility) - [Largeur](properties_CoordinatesAndSizing.md#width)


## Voir également
- [indicateurs de progression](progressIndicator.md)
- [règle](ruler.md)







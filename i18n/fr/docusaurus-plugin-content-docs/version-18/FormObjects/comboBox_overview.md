---
id: comboBoxOverview
title: Combo Box
---

## Vue d’ensemble

Une combo box est semblable à une [liste déroulante](dropdownList_Overview.md#overview), hormis le fait que cet objet accepte la saisie de texte par l’utilisateur et qu'elle dispose d'options supplémentaires.

![](../assets/en/FormObjects/combo_box.png)

Une combo box peut être initialisée de la même manière qu’une liste déroulante. Lorsque l’utilisateur saisit du texte dans la combo box, il est stocké dans l’élément 0 du tableau. En d’autres termes, vous devez considérer l’objet combo box comme une zone saisissable qui utilise un tableau ou une liste de choix en tant que liste de valeurs par défaut.

Utilisez l’événement formulaire `Sur données modifiées` pour gérer les valeurs saisies, comme pour toute zone de saisie. Pour plus d’informations, reportez-vous à la description de la commande [Form event](https://doc.4d.com/4Dv17R5/4D/17-R5/Form-event.301-4127796.en.html) dans le *manuel Langage de 4D*.

## Options des combo box

Les objets de type Combo box acceptent deux options relatives aux listes de choix qui peuvent leur être associées :

- [Insertion automatique](properties_DataSource.md#automatic-insertion) : entraînera l’ajout automatique d'une valeur dans la liste stockée en mémoire lorsque l’utilisateur saisit une valeur leur non présente dans la liste de choix associée à la combo box.
- [Exclusion ](properties_RangeOfValues.md#excluded-list) (liste de valeurs exclues) : permet d'établir une liste dont les valeurs ne peuvent pas être saisies dans la combo box. Si une valeur exclue est saisie, elle n'est pas acceptée et un message d'erreur s'affiche.
> > Associating a [list of required values](properties_RangeOfValues.md#required-list) is not available for combo boxes. Dans le cadre d’une interface, si l’objet doit proposer une liste finie de valeurs obligatoires, il est nécessaire d’utiliser un objet de type [Liste déroulante](dropdownList_Overview.md#overview).

## Propriétés prises en charge

[Format alpha](properties_Display.md#alpha-format) - [Gras](properties_Text.md#bold) - [Bas](properties_CoordinatesAndSizing.md#bottom) - [Style de bouton](properties_TextAndPicture.md#button-style) - [Enumération](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Format date](properties_Display.md#date-format) - [Focusable](properties_Entry.md#focusable) - [Police](properties_Text.md#font) - [Couleur de la police](properties_Text.md#font-color) - [Taille](properties_Text.md#font-size) - [Hauteur](properties_CoordinatesAndSizing.md#height) - [Message d'aide](properties_Help.md#help-tip) - [Dim. horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Italique](properties_Text.md#italic) - [Gauche](properties_CoordinatesAndSizing.md#left) - [Non représenté](properties_Display.md#not-rendered) - [Nom](properties_Object.md#object-name) - [Droite](properties_CoordinatesAndSizing.md#right) - [Action standard ](properties_Action.md#standard-action) - [Format heure](properties_Display.md#time-format) - [Haut](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Souligné](properties_Text.md#underline) - [Variable ou expression](properties_Object.md#variable-or-expression) - [Dim. vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilité](properties_Display.md#visibility) - [Largeur](properties_CoordinatesAndSizing.md#width)  

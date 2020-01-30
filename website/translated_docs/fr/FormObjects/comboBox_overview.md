---
id: comboBoxOverview
title: Combo Box
---

## Overview

Une combo box est semblable à une [liste déroulante](dropdownList_Overview.md#overview), hormis le fait que cet objet accepte la saisie de texte par l’utilisateur et qu'elle dispose d'options supplémentaires.

![](assets/en/FormObjects/combo_box.png)

Une combo box peut être initialisée de la même manière qu’une liste déroulante. Lorsque l’utilisateur saisit du texte dans la combo box, il est stocké dans l’élément 0 du tableau. En d’autres termes, vous devez considérer l’objet combo box comme une zone saisissable qui utilise un tableau ou une liste de choix en tant que liste de valeurs par défaut.

Utilisez l’événement formulaire `Sur données modifiées` pour gérer les valeurs saisies, comme pour toute zone de saisie. Pour plus d’informations, reportez-vous à la description de la commande [Form event](https://doc.4d.com/4Dv17R5/4D/17-R5/Form-event.301-4127796.en.html) dans le *manuel Langage de 4D*.

## Options des combo box

Les objets de type Combo box acceptent deux options relatives aux listes de choix qui peuvent leur être associées :

- [Insertion automatique](properties_DataSource.md#automatic-insertion) : entraînera l’ajout automatique d'une valeur dans la liste stockée en mémoire lorsque l’utilisateur saisit une valeur leur non présente dans la liste de choix associée à la combo box.
- [Exclusion ](properties_RangeOfValues.md#excluded-list) (liste de valeurs exclues) : permet d'établir une liste dont les valeurs ne peuvent pas être saisies dans la combo box. Si une valeur exclue est saisie, elle n'est pas acceptée et un message d'erreur s'affiche.
> La possibilité d’associer [une liste de valeurs obligatoires](properties_RangeOfValues.md#required-list) n’est pas disponible pour les combo box. Dans le cadre d’une interface, si l’objet doit proposer une liste finie de valeurs obligatoires, il est nécessaire d’utiliser un objet de type [Liste déroulante](dropdownList_Overview.md#overview).

## Supported Properties
[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Not rendered](properties_Display.md#not-rendered) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Standard action](properties_Action.md#standard-action) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  
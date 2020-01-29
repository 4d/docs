---
id: comboBoxOverview
title: Combo Box
---

## Aperçu

Une combo box est semblable à une [liste déroulante](dropdownList_Overview.md#overview), hormis le fait que cet objet accepte la saisie de texte par l’utilisateur et qu'elle dispose d'options supplémentaires.

![](assets/en/FormObjects/combo_box.png)

Une combo box peut être initialisée de la même manière qu’une liste déroulante. Lorsque l’utilisateur saisit du texte dans la combo box, il est stocké dans l’élément 0 du tableau. En d’autres termes, vous devez considérer l’objet combo box comme une zone saisissable qui utilise un tableau ou une liste de choix en tant que liste de valeurs par défaut.

Utilisez l’événement formulaire `Sur données modifiées` pour gérer les valeurs saisies, comme pour toute zone de saisie. For more information, refer to the description of the [Form event](https://doc.4d.com/4Dv17R5/4D/17-R5/Form-event.301-4127796.en.html) command in the *4D Language Reference* manual.

## Options des combo box

Combo box type objects accept two specific options concerning choice lists associated with them:

- [Automatic insertion](properties_DataSource.md#automatic-insertion): enables automatically adding a value to a list stored in memory when a user enters a value that is not found in the choice list associated with the combo box.
- [Excluded List](properties_RangeOfValues.md#excluded-list) (list of excluded values): allows setting a list whose values cannot be entered in the combo box. If an excluded value is entered, it is not accepted and an error message is displayed.
> Associating a [list of required values](properties_RangeOfValues.md#required-list) is not available for combo boxes. In an interface, if an object must propose a finite list of required values, then you must use a [Pop-up menu type](dropdownList_Overview.md#overview) object.

## Propriétés prises en charge
[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Not rendered](properties_Display.md#not-rendered) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Standard action](properties_Action.md#standard-action) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  
---
id: comboBoxOverview
title: Combo Box
---

Une combo box est semblable à une [liste déroulante](dropdownList_Overview.md#overview), hormis le fait que cet objet accepte la saisie de texte par l’utilisateur et qu'elle dispose d'options supplémentaires.

![](../assets/en/FormObjects/combo_box.png)

Fondamentalement, vous devez considérer l’objet combo box comme une zone saisissable qui utilise un tableau ou une liste de choix en tant que liste de valeurs par défaut.

## Handling combo boxes

Use the [`On Data Change`](Events/onDataChange.md) event to manage entries into the enterable area, as you would for any input form object.

You initialize a combo box in exactly the same way as a [drop-down list](dropdownList_Overview.md#overview): using an object, an array, or a choice list.

### Utilisation d'un objet

> This feature is only available in 4D projects.

An [object](Concepts/dt_object.md) encapsulating a [collection](Concepts/dt_collection) can be used as the data source of a combo box. Cet objet doit avoir les propriétés suivantes :

| Propriété      | Type                   | Description                                                                                                                                                                                                                                             |
| -------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`       | Collections            | Obligatoire - Collection de valeurs scalaires. All values must be of the same type. Supported types:<li>chaînes</li><li>nombres</li><li>dates</li><li>times</li>If empty or not defined, the combo box is empty |
| `currentValue` | identique à Collection | Text entered by the user                                                                                                                                                                                                                                |

If the object contains other properties, they are ignored.

When the user enters text into the combo box, the `currentValue` property of the object gets the entered text.

### Utiliser un tableau

Please refer to **Using an array** in the [drop-down list page](dropdownList_Overview.md#using-an-array) for information about how to initialize the array.

When the user enters text into the combo box, the 0th element of the array gets the entered text.

### Utiliser une énumération

If you want to use a combo box to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the form object's data source. Cette possibilité facilite la gestion des champs/variables énuméré(e) s.
> Si vous utilisez une énumération hiérarchique, seul le premier niveau sera affiché et sélectionnable.

To associate a combo box with a field or variable, you can just enter the name of the field or variable directly in the [Variable or Expression](properties_Object.md#variable-or-expression) of the form object in the Property List.

When the form is executed, 4D automatically manages the combo box during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the combo box when the form is displayed:

Please refer to **Using a choice** in the [drop-down list page](dropdownList_Overview.md#using-a-choice-list) for more information.

## Options

Combo box type objects accept two specific options:

- [Automatic insertion](properties_DataSource.md#automatic-insertion): enables automatically adding a value to the data source when a user enters a value that is not found in the list associated with the combo box.
- [Exclusion ](properties_RangeOfValues.md#excluded-list) (liste de valeurs exclues) : permet d'établir une liste dont les valeurs ne peuvent pas être saisies dans la combo box. Si une valeur exclue est saisie, elle n'est pas acceptée et un message d'erreur s'affiche.
> > Associating a [list of required values](properties_RangeOfValues.md#required-list) is not available for combo boxes. In an interface, if an object must propose a finite list of required values, then you must use a [drop-down list](dropdownList_Overview.md#overview) object.

## Propriétés prises en charge

[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  

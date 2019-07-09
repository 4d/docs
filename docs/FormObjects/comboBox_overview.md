---
id: comboBoxOverview
title: Combo Boxes
---
## Overview

A combo box is similar to a drop-down list, except that it accepts text entered from the keyboard and has two specific options. You initialize a combo box in exactly the same way as a drop-down list (see [Pop-up Menus/Drop-down Lists](popupMenuDropdownList_Overview.md)).

If the user enters text into the combo box, it fills the 0th element of the array. In other respects, you treat a combo box as an enterable area that uses its array or a choice list as the set of default values.

Use the `On Data Change` event to manage entries into the enterable area, as you would for any enterable area object. For more information, refer to the description of the [Form event](https://doc.4d.com/4Dv17R5/4D/17-R5/Form-event.301-4127796.en.html) command in the 4D Language Reference manual.

## Options for combo boxes  

Combo box type objects accept two options concerning choice lists associated with them: [Automatic insertion](#automatic-insertion) and [Excluded List](#excluded-list) (list of excluded values).

### Automatic Insertion  
The [Automatic Insertion](properties_DataSource.md#automatic-insertion) option is found in the [Data Source](properties_DataSource.md) theme of the Property List for Combo box type objects:

![](assets/en/FormObjects/comboBox_AutomaticInsertion.png)

>This option is also available for list box columns since its cells are displayed as combo boxes when a column is associated with a choice list.

When this option is checked, if a user enters a value that is not found in the choice list associated with the object, this value is automatically added to the list stored in memory. You can associate choice lists using the [OBJECT SET LIST BY NAME](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-LIST-BY-NAME.301-4128227.en.html) or [OBJECT SET LIST BY REFERENCE](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-LIST-BY-REFERENCE.301-4128237.en.html) commands.

For example, given a choice list containing "France, Germany, Italy" that is associated with the "Countries" combo box: if the Automatic Insertion option is checked and a user enters "Spain", then the value "Spain" is automatically added to the list in memory:

![](assets/en/FormObjects/comboBox_AutomaticInsertion_example.png)

Naturally, the value entered must not belong to the list of excluded values associated with the object, if one has been set (see the following paragraph).

>If the list was created from a list defined in Design mode, the original list is not modified.

If the Automatic Insertion option is not checked, the value entered is stored in the object but not in the list in memory.

### Excluded List

The [Excluded List](properties_RangeOfValues.md#excluded-list) option is provided in the [Range of Values](properties_RangeOfValues.md) theme for combo box type objects; it allows you to associate a list of excluded values to these objects. When a user enters a value that belongs to this list, its entry is rejected automatically (see [Excluded lists](https://doc.4d.com/4Dv17R5/4D/17-R5/Data-entry-controls-and-assistance.300-4163624.en.html#421767)).

>Associating a list of required values is not available for combo boxes. In an interface, if an object must propose a finite list of required values, then you must use a Pop-up menu type object.

## Supported Properties
[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Choice List](properties_DataSource.md#choice-list) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Not rendered](properties_Display.md#not-rendered) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  
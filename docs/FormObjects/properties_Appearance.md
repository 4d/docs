---
id: propertiesAppearance
title:Appearance 
---

## Default Button

The default button property modifies a button's appearance in order to indicate the recommended choice to the user. The difference in appearance depends on the OS. 

|Windows|macOS|
|:---:|:---:|
|The default button has a blue outline. <p> ![](assets/en/FormObjects/property_defaultButtonWindows.en.png)|The default buttons are blue.<p>![](assets/en/FormObjects/property_defaultButtonmacOS.en.png)|

>There can only be one default button per form page.



#### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|:---:|
defaultButton|boolean|<li>"true"<li>"false |



#### Objects Supported

|Category|Link| 
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular)|

<hr>

## Tab Control Direction

You can set the direction of tab controls in your forms. This property is available on all the platforms but can only be displayed in macOS, when the platform interface is “System.” You can choose to place the tab controls on top (standard) or on the bottom.

When tab controls with a custom direction are displayed under Windows or with the “Printing” platform appearance, they automatically return to the standard direction (top).



#### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|---|
labelsPlacement|boolean|<li>"top"<li>"bottom" |



#### Objects Supported

|Category|Link| 
|---|---|
|Splitter / Tab Control|[Tab Control](splitterTabControlOverview#tab-controls)|
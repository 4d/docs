---
id: buttonGridOverview
title: Button Grid
---
## Overview

A button grid is a transparent object that is placed on top of a graphic. The graphic should depict a row-by-column array. You can use a button grid object to determine where the user clicks on the graphic. Your object method would use the On Clicked event and take appropriate action depending on the location of the click.

In 4D, a button grid is used as a color palette:

![](../../assets/en/button_buttonGrid.png)

The buttons on the grid are numbered from top left to bottom right. In this example, the grid is 16 columns across by 16 rows down. The button in the top-left position returns 1 when clicked. If the red button at the far right of the second row is selected, the button grid returns 32.


## Using button grids

To create the button grid, add a background graphic to the form and place a button grid on top of it. Specify the number of rows and columns in the corresponding entry areas of the “Crop” theme.


### Standard actions 
You can assign the ``Goto Page`` standard action to a button grid. When that action is selected, 4D will automatically display the page of the form that corresponds to the number of the button that is selected in the button grid.

For example, if the user selects the tenth button of the grid, 4D will display the tenth page of the current form (if it exists). 
If you want to manage the effect of the selection of a button yourself, leave the selection blank.

For more information, refer to Standard actions.



## Supported Properties

Border Line Style - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Columns](properties_Crop.md#columns) - [Droppable](properties_Action.md#droppable) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) 
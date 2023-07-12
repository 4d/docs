---
id: buttonGridOverview
title: Button Grid
---

A button grid is a transparent object that is placed on top of a graphic. The graphic should depict a row-by-column array. When one of the graphics is clicked on, it will have a sunken or pressed appearance:

![](../assets/en/FormObjects/buttonGrid_smileys.png)

You can use a button grid object to determine where the user clicks on the graphic. The object method would use the `On Clicked` event and take appropriate action depending on the location of the click.


## Creating button grids

To create the button grid, add a background graphic to the form and place a button grid on top of it. Specify the number of [rows](properties_Crop.md#rows) and [columns](properties_Crop.md#columns).

In 4D, a button grid is used as a color palette:

![](../assets/en/FormObjects/button_buttonGrid.png)

## Using button grids

The buttons on the grid are numbered from top left to bottom right. In the above example, the grid is 16 columns across by 16 rows down. The button in the top-left position returns 1 when clicked. If the red button at the far right of the second row is selected, the button grid returns 32. 
If no element is selected, the value is 0


### Goto page 

You can assign the ``gotoPage`` [standard action](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) to a button grid. When this action is selected, 4D will automatically display the page of the form that corresponds to the number of the button that is selected in the button grid. For example, if the user selects the tenth button of the grid, 4D will display the tenth page of the current form (if it exists). 


## Supported Properties

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows) - [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Width](properties_CoordinatesAndSizing.md#width) - [Visibility](properties_Display.md#visibility) 
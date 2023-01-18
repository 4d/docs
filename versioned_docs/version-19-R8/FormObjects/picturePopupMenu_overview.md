---
id: picturePopupMenuOverview
title: Picture Pop-up Menu
---

A picture pop-up menu is a pop-up menu that displays a two-dimensional array of pictures. A picture pop-up menu can be used instead of a [picture button](pictureButton_overview.md). The creation of the picture to use with a picture pop-up menu is similar to the creation of a picture for a picture button. The concept is the same as for [button grids](buttonGrid_overview.md), except that the graphic is used as a pop-up menu instead of a form object.


## Using picture pop-up menus 

To create a picture pop-up menu, you need to [refer to a picture](properties_Picture.md#pathname). The following example allows you to select the interface language by selecting it from a picture pop-up menu. Each language is represented by the corresponding flag:

![](../assets/en/FormObjects/picturePopupMenu_example.png)

### Programming  

You can manage picture pop-up menus using methods. As with [button grids](buttonGrid_overview.md), variables associated with picture pop-up menus are set to the value of the selected element in the picture pop-up menu. If no element is selected, the value is 0. Elements are numbered, row by row, from left to right starting with the top row.


### Goto page 
 
You can assign the ``gotoPage`` [standard action](https://doc.4d.com/4Dv19R4/4D/19-R4/Standard-actions.300-5736871.en.html) to a picture pop-up menu. When that action is selected, 4D will automatically display the page of the form that corresponds to the position of the picture selected in the picture array. Elements are numbered from left to right and top to bottom, beginning with the top left corner.

For example, if the user selects the 3rd element, 4D will display the third page of the current form (if it exists). 
If you want to manage the effect of a click yourself, select `No action`.




## Supported Properties
[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows)- [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  
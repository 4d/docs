---
id: pictureButtonOverview
title: Picture Button
---
## Overview

A picture button can have several different states— by comparison, a standard button accepts three states: enabled, disabled and clicked. As the name indicates, with a picture button each state is represented by a different picture.

Picture buttons can be used in two ways:

* As command buttons in a form. In this case, the picture button generally includes four different states: enabled, disabled, clicked and rolled over. This is what is used by the Form Wizard for most form templates. 
* As a picture button letting the user choose among several choices. In this case, a picture button can be used in place of a pop-up picture menu. With [Picture Pop-up Menus](https://doc.4d.com/4Dv17R5/4D/17-R5/Picture-Pop-up-Menus.300-4163666.en.html), all choices are displayed simultaneously (as the items in the pop-up menu), while the picture button displays the choices consecutively (as the user clicks the button).<p>
Here is an example of a picture button. Suppose you want to give the users of a custom application the opportunity to choose the interface language for the application. You implement the option as a picture button in a custom properties dialog box:<br>
![](../../assets/en/button_pictureButton.png) <br>Clicking the object changes the picture<p>


## Using picture buttons

You implement the picture button in the following manner. First, you prepare one graphic in which the series of pictures is arranged in a row, a column, or a row-by-column grid button. 

You can organize pictures as columns, rows, or a row-by-column grid (as shown above). When organizing pictures as a grid, they are numbered from left to right, row by row, beginning with 0. For example, the second picture of the second row of a grid that consists of four rows and three columns, is numbered 4.


### Animation

In addition to the standard positioning and appearance settings, you can set some specific properties for picture buttons, especially concerning how and when the pictures are displayed. These property options can be combined to enhance your picture buttons.

For example, you want to set a button that accepts the following modes: 
* ``Switch back when Released`` 
* ``Switch when Roll Over`` 
* ``Use Last Frame as Disabled``

In a table of thumbnails that has one row of four columns, each thumbnail corresponds to the Default, Clicked, Roll over, and Disabled states. 

Via the Property List, you would set the following properties: 

|Property|Setting |
|---|---|
|Rows|1|
|Columns|4|
|Switch back when Released|*checked*|
|Switch when Roll Over|*checked*|
|Use Last Frame as Disabled|*checked*|



>The associated variable of the picture button returns the index number, in the thumbnail table, of the current picture displayed. The numbering of pictures in the table begins with 0.

For more information, see the [Animation](properties_Animation.md) property page.

## Supported Properties

[Border Line Style](properties_BackgroundAndBorder.md) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Columns](properties_Crop.md#columns) - [Droppable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Loop back to first frame](properties_Animation.md#loopBackToFirstFrame) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_TextAndPicture.md#picture-pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows) - [Shortcut](properties_Entry.md#shortcut) - [Switch back when released](properties_Animation.md#switchBackWhenReleased) - [Switch continuously on clicks](properties_Animation.md#switch-continuously-on-clicks) - [Switch every x ticks](properties_Animation.md#switch-every-x-ticks) - [Title](properties_Object.md#title) - [Switch when roll over](properties_Animation.md#switchWhenRollOver) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 

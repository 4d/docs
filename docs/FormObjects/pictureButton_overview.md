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

 You implement the picture button in the following manner. First, you prepare one graphic in which the series of pictures is arranged in a row, a column, or a row-by-column grid bouton. You can add this graphic to the [Picture Library](https://doc.4d.com/4Dv17R5/4D/17-R5/Picture-Library.200-4163416.en.html), to a picture variable, or to a picture file.<p>
![](../../assets/en/button_pictureButton_implement.png)<p>
You can organize pictures as columns, rows, or a row-by-column grid (as shown above). When organizing pictures as a grid, they are numbered from left to right, row by row, beginning with 0. For example, the second picture of the second row of a grid that consists of four rows and three columns, is numbered 4.

  >**Notes**<p>
>The [Picture Library](https://doc.4d.com/4Dv17R5/4D/17-R5/Picture-Library.200-4163416.en.html) includes features that allow you to organize a picture as a table of thumbnails. When a picture has been defined as a table of thumbnails, you can create a picture button by dragging the picture name from the library.

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



>**Note**<p>
The associated variable of the picture button returns the index number, in the thumbnail table, of the current picture displayed. The numbering of pictures in the table begins with 0.

## Supported Properties


|Property|Description / JSON grammar|
|---|---|
|Border Line Style|Sets a standard style for the object border.<p><hr><p>JSON: borderStyle <p>Possible Values:<ul><li>"system"<li> "none"<li>"solid"<li> "dotted"<li> "raised"<li> "sunken"<li> "double" </li></ul>|
|[Bottom](../Properties/property_bottom)|Position of the object on the bottom of the form (centered)<p><hr><p>JSON: bottom<p>Possible Values:<ul><li>minimum: 0</li></ul>|
|Columns|Sets the number of columns in a thumbnail table.<p><hr><p>JSON: columnCount  <p>Possible Values:<ul><li>minimum: 1 </li></ul>|
|[Height](../Properties/property_height)|Designates an object's vertical size<p><hr><p>JSON: height<p><p>Possible values: <ul><li>minimum: 0</li></ul>|
|[Help Tip](../Properties/property_helpTip)|Allows displaying help messages associated with fields and active objects in forms<p><hr><p>JSON: tooltip<p><p>Possible values:<ul><li>Additional information in text form</li></ul>|
|[Horizontal Sizing](../Properties/property_horizontalSizing)|Specifies if the horizontal size of the object should be moved or resized when a user resizes the form<p><hr><p>JSON: sizingX<p><p>Possible values:<ul><li>"move"</li><li>"grow"</li><li>"fixed"</li></ul>|
|[Left](../Properties/property_left)|Positions an object on the left<p><hr><p>JSON: left<p><p>Possible values:<ul><li>minimum:0</li></ul>|
|Loop back to first frame|Displays pictures in a continuous loop<p><hr><p>JSON: loopBackToFirstFrame <p>Possible Values:<ul><li>"true"</li><li>"false" </li></ul>|
|[Object Name](../Properties/property_objectName)|The name of the form object. (optional for the form)<p><hr><p>JSON: name<p><p>Possible values:<ul><li>Any name which does not belong to an already existing object</li></ul>|
|[Pathname](../Properties/property_picturePathname)|The name, number, or the pathname of the picture<p><hr><p>JSON: icon<p><p>Possible values:<ul><li>absolute path</li><li>relative path</li></ul>|
|[Right](../Properties/property_right)|Positions an object on the right<p><hr><p>JSON: right<p><p>Possible values: <ul><li>minimum: 0</li></ul>|
|Rows|Sets the number of rows in a thumbnail table.<p><hr><p>JSON: rowCount <p>Possible Values:<ul><li>minimum: 1 </li></ul>|
|[Shortcut](../Properties/property_shortcut)|Defines the settings for a special meaning key<p><hr><p>JSON: shortcutAccel, shortcutAlt, shortcutCommand, shortcutControl<p><p>Possible values:<ul><li>"true"</li><li>"false"</li></ul> <p><hr><p>JSON: shortcutKey<p><p>Possible values: <ul><li>"[F1]" -> "[F15]"</li><li>"[Return]" </li><li> "[Enter]"</li><li> "[Backspace]" </li><li>"[Tab]"</li><li> "[Esc]"</li><li> "[Del]"</li><li> "[Home]"</li><li> "[End]"</li><li> "[Help]"</li><li> "[Page up]"</li><li> "[Page down]" </li><li>"[left arrow]"</li><li> "[right arrow]"</li><li> "[up arrow]"</li><li> "[down arrow]"</li></ul>|
|Switch back when released|Displays the first picture all the time except when the user clicks the button. Displays the second picture until the mouse button is released.<p><hr><p>JSON: switchBackWhenReleased <p>Possible Values:<ul><li>"true"</li><li>"false" </li></ul>|
|Switch continuously on clicks|Allows the user to hold down the mouse button to display the pictures continuously (i.e., as an animation).<p><hr><p>JSON: switchContinuously <p>Possible Values:<ul><li>"true"</li><li>"false" </li></ul>|
|Switch every x ticks|Cycles through the contents of the picture button at the specified speed (in ticks)<p><hr><p>JSON: frameDelay <p>Possible Values:<ul><li>minimum: 0 </li></ul>|
|Switch when roll over|Modifies the contents of the picture button when the mouse cursor passes over it. The initial picture is displayed when the cursor leaves the button’s area.<p><hr><p>JSON: switchWhenRollover <p>Possible Values:<ul><li>"true"</li><li>"false" </li></ul>|
|[Top](../Properties/property_top)|Positions an object on the top of the form<p><hr><p>JSON: top<p><p>Possible values: <ul><li>minimum: 0</li></ul>|
|[Type](../Properties/property_type)|Mandatory setting. Designates the type of the form object<p><hr><p>JSON: type<p><p>Possible values: <ul><li>"text"</li><li> "rectangle"</li><li>"groupBox"</li><li>"tab"</li><li>"line"</li><li>"button"</li><li> "checkbox"</li><li> "radio"</li><li>"dropdown"</li><li>"combo"</li><li>"webArea"</li><li>"write"</li><li>"subform"</li><li>"plugin"</li><li>"splitter"</li><li> "buttonGrid"</li><li>"progress"</li><li>"ruler"</li><li>"spinner"</li><li>"stepper"</li><li>"list"</li><li>"pictureButton"</li><li>"picturePopup"</li><li>"listbox"</li><li>"input"</li><li>"view"</li></ul>|
|Use Last frame as disabled|Enables setting the last thumbnail as the one to display when the button is disabled.<p><hr><p>JSON: useLastFrameAsDisabled <p>Possible Values:<ul><li>"true"</li><li>"false" </li></ul>|
|[Variable or Expression](../Properties/property_variableOrExpression)|Specifies the source of the data<p><hr><p>JSON: dataSource<p><p>Possible values:<ul><li>A 4D variable</li><li>A field name</li><li>An arbitrary complex language expression</li></ul>|
|[Vertical Sizing](../Properties/property_verticalSizing)|Specifies if the vertical size of the object should be moved or resized when a user resizes the form<p><hr><p>JSON: sizingY<p><p>Possible values:<ul><li>"move"</li><li>"grow"</li><li>"fixed"</li></ul>|
|[Visibility](../Properties/property_visibility)|Allows hiding the object in the Application environment<p><hr><p>JSON: visibility<p><p>Possible values:<ul><li>"visible"</li><li>"hidden"</li><li>"selectedRows"</li><li>"unselectedRows"</li></ul>|
|[Width](../Properties/property_width)|Designates an objects horizontal size<p><hr><p>JSON: width<p><p>Possible values: <ul><li>minimum: 0</li></ul>|

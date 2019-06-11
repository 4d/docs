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


|Property|Description / JSON grammar|
|---|---|
|Border Line Style|Sets a standard style for the object border.<p><hr><p>JSON: borderStyle <p>Possible Values:<ul><li>"system"<li> "none"<li>"solid"<li> "dotted"<li> "raised"<li> "sunken"<li> "double" </li></ul>|
|Columns|Sets the number of columns in a thumbnail table.<p><hr><p>JSON: columnCount  <p>Possible Values:<ul><li>minimum: 1 </li></ul>|
|[Height](../Properties/property_height)|Designates an object's vertical size<p><hr><p>JSON: height<p><p>Possible values: <ul><li>minimum: 0</li></ul>|
|[Help Tip](../Properties/property_helpTip)|Allows displaying help messages associated with fields and active objects in forms<p><hr><p>JSON: tooltip<p><p>Possible values:<ul><li>Additional information in text form</li></ul>|
|[Horizontal Sizing](../Properties/property_horizontalSizing)|Specifies if the horizontal size of the object should be moved or resized when a user resizes the form<p><hr><p>JSON: sizingX<p><p>Possible values:<ul><li>"move"</li><li>"grow"</li><li>"fixed"</li></ul>|
|[Left](../Properties/property_left)|Positions an object on the left<p><hr><p>JSON: left<p><p>Possible values:<ul><li>minimum:0</li></ul>|
|[Object Name](../Properties/property_objectName)|The name of the form object. (optional for the form)<p><hr><p>JSON: name<p><p>Possible values:<ul><li>Any name which does not belong to an already existing object</li></ul>|
|[Right](../Properties/property_right)|Positions an object on the right<p><hr><p>JSON: right<p><p>Possible values: <ul><li>minimum: 0</li></ul>|
|Rows|Sets the number of rows in a thumbnail table.<p><hr><p>JSON: rowCount <p>Possible Values:<ul><li>minimum: 1 </li></ul>|
|[Top](../Properties/property_top)|Positions an object on the top of the form<p><hr><p>JSON: top<p><p>Possible values: <ul><li>minimum: 0</li></ul>|
|[Type](../Properties/property_type)|Mandatory setting. Designates the type of the form object<p><hr><p>JSON: type<p><p>Possible values: <ul><li>"text"</li><li> "rectangle"</li><li>"groupBox"</li><li>"tab"</li><li>"line"</li><li>"button"</li><li> "checkbox"</li><li> "radio"</li><li>"dropdown"</li><li>"combo"</li><li>"webArea"</li><li>"write"</li><li>"subform"</li><li>"plugin"</li><li>"splitter"</li><li> "buttonGrid"</li><li>"progress"</li><li>"ruler"</li><li>"spinner"</li><li>"stepper"</li><li>"list"</li><li>"pictureButton"</li><li>"picturePopup"</li><li>"listbox"</li><li>"input"</li><li>"view"</li></ul>|
|[Variable or Expression](../Properties/property_variableOrExpression)|Specifies the source of the data<p><hr><p>JSON: dataSource<p><p>Possible values:<ul><li>A 4D variable</li><li>A field name</li><li>An arbitrary complex language expression</li></ul>|
|[Vertical Sizing](../Properties/property_verticalSizing)|Specifies if the vertical size of the object should be moved or resized when a user resizes the form<p><hr><p>JSON: sizingY<p><p>Possible values:<ul><li>"move"</li><li>"grow"</li><li>"fixed"</li></ul>|
|[Visibility](../Properties/property_visibility)|Allows hiding the object in the Application environment<p><hr><p>JSON: visibility<p><p>Possible values:<ul><li>"visible"</li><li>"hidden"</li><li>"selectedRows"</li><li>"unselectedRows"</li></ul>|
|[Width](../Properties/property_width)|Designates an objects horizontal size<p><hr><p>JSON: width<p><p>Possible values: <ul><li>minimum: 0</li></ul>|

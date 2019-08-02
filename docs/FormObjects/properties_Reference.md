---
id: propertiesReference
title:Reference List
---

|Property|Description|Possible Values|
|---|---|---|
|[automaticInsertion](properties_DataSource.md#automatic-insertion)|Enables automatically adding a value to a list when a user enters a value that is not in the object's associated choice list.|"true", "false"|
|[bottom](properties_TextAndPicture.md#title-picture-position)|Positions an object at the bottom (centered).|minimum: 0|
|[bottomMargin](properties_TextAndPicture.md#vertical-margin)|Vertical margin value (in pixels). |minimum: 0|
|[choiceList](properties_DataSource.md#choice-list)|A list of choices associated with an object|A list of choices|
|[columnCount](properties_Crop.md#columns)|Sets the number of columns.|minimum: 1|
|[customBackgroundPicture](properties_TextAndPicture.md#background-pathname) |absolute or relative path. Must be used in conjunction with the style property with the "custom" option.|
|[customOffset](properties_TextAndPicture.md#icon-offset)|Sets a custom offset value in pixels. Must be used with the style property with the "custom" option. |minimum: 0|
|[dataSource](properties_Object.md#variable-or-expression)|Specifies the source of the data.|A 4D variable, field name, or an arbitrary complex language expression.|
|[dataSourceTypeHint](properties_Object.md#expression-type)|Indicates the variable type.|"integer", "number", "boolean", "picture", "text", date", "time", "arrayText", "collection", "object", "undefined"|
|[frameDelay](properties_Animation.md#switch-every-x-ticks)|Enables cycling through the contents of the picture button at the specified speed (in ticks).|minimum: 0|
|[graduationStep](properties_Scale.md#graduation-step)| Scale display measurement.|minimum:0|
|[icon](properties_Picture.md#pathname)|The name, number, or the [pathname](properties_TextAndPicture.md#picture-pathname) of the picture.|An absolute or relative path|
|[iconFrames](properties_TextAndPicture.md#number-of-states)|Sets the exact number of states present in the picture. |minimum: 1|
|[labelsPlacement](properties_Scale.md#label-location)| Specifies the location of an object's displayed text.|<li>"none"<li>"top"<li>"bottom"<li>"left"<li>"right"|
|[left](properties_TextAndPicture.md#title-picture-position)|Positions an object on the [left](properties_CoordinatesAndSizing.md#left).|minimum: 0|
|[loopBackToFirstFrame](properties_Animation.md#loop-back-to-first-frame)|Pictures are displayed in a continuous loop.|"true", "false"|
|[middle](properties_TextAndPicture.md#title-picture-position)|integer|minimum: 0|
|[max](properties_Scale.md#maximum)|The maximum allowed value. For numeric steppers, these properties represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value. |minimum:0 (for numeric data types)|
|[min](properties_Scale.md#minimum)|The minimum allowed value. For numeric steppers, these properties represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.|minimum:0 (for numeric data types)|
|[name](properties_Object.md#object-name)|The name of the form object. (Optional for the form)|Any name which does not belong to an already existing object|
|[popupPlacement](properties_TextAndPicture.md#with-pop-up-menu) |Allows displaying a symbol that appears as a triangle in the button, which indicates that there is a pop-up menu attached. |"None", Linked", "Separated" |
|[radioGroup](properties_Object.md#radio-group)|Enables radio buttons to be used in coordinated sets: only one button at a time can be selected in the set.|	Radio group name|
|[right](properties_TextAndPicture.md#title-picture-position)|Positions an object on the right.|minimum: 0|
|[rightMargin](properties_TextAndPicture.md#horizontal-margin)|Horizontal margin value (in pixels). |minimum: 0|
|[rowCount](properties_Crop.md#rows)|Sets the number of rows.|minimum: 1|
|[showGraduations](properties_Scale.md#display-graduation)|Displays/Hides the graduations next to the labels. |<li>"true"<li>"false"|
|[step](properties_Scale.md#step)| Minimum interval accepted between values during use. For numeric steppers, this property represents seconds when the object is associated with a time type value and days when it is associated with a date type value.|minimum:1|
|[switchBackWhenReleased](properties_Animation.md#switch-back-when-released)|Displays the first picture all the time except when the user clicks the button. Displays the second picture until the mouse button is released.|<li>"true"<li>"false"|
|[switchContinuously](properties_Animation.md#switch-continuously-on-clicks)|Allows the user to hold down the mouse button to display the pictures continuously (i.e., as an animation).|"true", "false"|
|[switchWhenRollover](properties_Animation.md#switch-when-roll-over)|Modifies the contents of the picture button when the mouse cursor passes over it. The initial picture is displayed when the cursor leaves the button’s area.|"true", "false"|
|[text](properties_Object.md#title)|The title of the form object|Any text|
|[type](properties_Object.md#type)|Mandatory. Designates the data type of the form object.|"text", "rectangle", "groupBox", "tab", "line", "button", "checkbox", "radio", "dropdown", "combo", "webArea", "write", "subform", "plugin", "splitter", "buttonGrid", "progress", "ruler", "spinner", "stepper", "list", "pictureButton", "picturePopup", "listbox", "input", "view"|
|[style](properties_TextAndPicture.md#style)|Allows setting the general appearance of the button. See Button Style for more information.|"regular", "flat", "toolbar", "bevel", "roundedBevel", "gradientBevel", "texturedBevel", "office", "help", "circular", "disclosure", "roundedDisclosure", "custom"|
|[top](properties_TextAndPicture.md#title-picture-position)|Positions an object at the top (centered).|minimum: 0|
|[useLastFrameAsDisabled](properties_Animation.md#use-last-frame-as-disabled)|Enables setting the last thumbnail as the one to display when the button is disabled.|"true", "false"|

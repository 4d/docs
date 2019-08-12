---
id: propertiesReference
title: Reference List
---

|Property|Description|Possible Values|
|---|---|---|
|[action](properties_Action.md#standard-action)|Typical activity to be performed. |The name of a valid standard action. |
|[alternateFill](properties_BackgroundAndBorder.md#alternate-background-color)|Allows setting a different background color for odd-numbered rows/columns in a list box.|Any CSS value; "transparent"; "automatic"|
|[automaticInsertion](properties_DataSource.md#automatic-insertion)|Enables automatically adding a value to a list when a user enters a value that is not in the object's associated choice list.|"true", "false"|
|[booleanFormat](properties_Display.md#boolean-format)|Specifies only two possible values.	|"true", "false"|
|[borderRadius](properties_CoordinatesAndSizing.md#corner-radius)|The radius value for round rectangles. |minimum: 0|
|[borderStyle](properties_BackgroundAndBorder.md#border-line-style-dotted-line-type)|Allows setting a standard style for the object border. |"system", "none", "solid", "dotted", "raised", "sunken", "double"|
|[bottom](properties_CoordinatesAndSizing.md#bottom) (objects)<br>[bottom](properties_TextAndPicture.md#title-picture-position) (titles & pictures)|Positions an object at the bottom (centered).|minimum: 0|
|[bottomMargin](properties_TextAndPicture.md#vertical-margin)|Vertical margin value (in pixels). |minimum: 0|
|[choiceList](properties_DataSource.md#choice-list)|A list of choices associated with an object|A list of choices|
|[columnCount](properties_Crop.md#columns) (picture button, button grid, picture pop-up) <br> [columnCount](properties_ListBox.md#number-of-columns) (list box)|Sets the number of columns.|minimum: 1|
|[contextMenu](properties_Entry.md#context-menu)|Provides the user access to a standard context menu in the selected area.	|"automatic", "none"|
|[continuousExecution](properties_Action.md#execute-object-method)|Designates whether or not to run the method of an object while the user is tracking the control. |"true", "false"|
|[controlType](properties_Display.md#display-type)|Specifies how the value should be rendered in a list box cell.|"input", "checkbox" (for boolean / numeric columns), "automatic", "popup" (only for boolean columns)|
|[currentItemSource](properties_DataSource.md#current-item)| The last selected item in a list box.|Object expression	|
|[currentItemPositionSource](properties_DataSource.md#current-item-position)| The position of the last selected item in a list box.|Number expression	|
|[customBackgroundPicture](properties_TextAndPicture.md#background-pathname) |Sets the picture that will be drawn in the background of a button.|Absolute or relative path. Must be used in conjunction with the style property with the "custom" option.| 
|[customBorderX](properties_TextAndPicture.md#horizontal-margin)|Sets the size (in pixels) of the internal horizontal margins of an object. Must be used with the style property with the "custom" option.|minimum: 0
|[customBorderY](properties_TextAndPicture.md#vertical-margin)|Sets the size (in pixels) of the internal vertical margins of an object. Must be used with the style property with the "custom" option.|minimum: 0
|[customOffset](properties_TextAndPicture.md#icon-offset)|Sets a custom offset value in pixels. Must be used with the style property with the "custom" option. |minimum: 0|
|[dataSource](properties_Object.md#variable-or-expression) (objects)<br>[dataSource](properties_Subform.md#source) (subforms)<br>[dataSource](properties_Object.md#data-source) (array list box) <br> [dataSource](properties_Object.md#collection-or-entity-selection) (Collection or entity selection list box)<br> [dataSource](properties_DataSource.md#expression) (list box column) <br> [dataSource](properties_Hierarchy.md#hierarchical-list-box) (hierarchical list box)|Specifies the source of the data.|A 4D variable, field name, or an arbitrary complex language expression.|
|[dataSourceTypeHint](properties_Object.md#expression-type) (objects) <br> [dataSourceTypeHint](properties_DataSource.md#data-type) (list box column)|Indicates the variable type.|"integer", "number", "boolean", "picture", "text", date", "time", "arrayText", "collection", "object", "undefined"|
|[dateFormat](properties_Display.md#date-format)|Controls the way dates appear when displayed or printed. Must only be selected among the 4D built-in formats.|"systemShort", "systemMedium", "systemLong", "iso8601", "rfc822", "short", "shortCentury", "abbreviated", "long", "blankIfNull" (can be combined with the other possible values)|
|[defaultButton](properties_Appearance.md#default-button)|Modifies a button's appearance in order to indicate the recommended choice to the user.|"true", "false"|
|[detailForm](properties_Subform.md#detail-form) (subform)<br>[detailForm](properties_ListBox.md#detail-form-name) (list box)|Associates a detail form with a list subform.|Name (string) of table or project form, a POSIX path (string) to a .json file describing the form, or an object describing the form |
|[display](properties_Display.md#not-rendered) (objects) <br>[display](properties_Display.md#invisible) (list box column)|The object is not drawn on the form.|"true", "false"|
|[doubleClickInRowAction](properties_ListBox.md#double-click-on-row) |Action to perform in case of a double-click on a record. |"editSubrecord", "displaySubrecord"|
|[dragging](properties_Action.md#standard-action)|Enables dragging function. |"none", "custom", "automatic" (excluding list, list box) |
|[dropping](properties_Action.md#standard-action)|Enables dropping function. |"none", "custom", "automatic" (excluding list, list box) |
|[enterable](properties_Entry.md#enterable)|Indicates whether users can enter values into the object.|"true", "false"|
[entryFiler](properties_Entry.md#entry-filter)|Associates an entry filter with the object or column cells. This property is not accessible if the Enterable property is not enabled.|Text to narrow entries |
|[excludedList](properties_RangeOfValues.md#excluded-list)|Allows setting a list whose values cannot be entered in the column.|A list of values to be excluded.|
|[fill](properties_BackgroundAndBorder.md#fill-color) (shapes, hierarchical list) <br> [fill](properties_BackgroundAndBorder.md#background-color) (list box)|Defines the background color of an object. |Any CSS value, "transparent", "automatic"|
|[focusable](properties_Entry.md#focusable)|Indicates whether the object can have the focus (and can thus be activated by the keyboard for instance)|"true", "false"|
|[fontFamily](properties_Text.md#font)|Specifies the name of font family used in the object. |CSS font family name  |
|[fontStyle](properties_Text.md#italic)|Sets the selected text to slant slightly to the right. |"normal", "italic"| 
|[fontWeight](properties_Text.md#bold)|Sets the selected text to appear darker and heavier. | "normal", "bold"|
|[footerHeight](properties_Footers.md#height)|Used to set the row height |pattern (\\d+)(p&#124;em)?$ (positive decimal + px/em )|
|[frameDelay](properties_Animation.md#switch-every-x-ticks)|Enables cycling through the contents of the picture button at the specified speed (in ticks).|minimum: 0|
|[graduationStep](properties_Scale.md#graduation-step)| Scale display measurement.|minimum: 0|
|[headerHeight](properties_Headers.md#height)|Used to set the row height |pattern ^(\\d+)(px&#124;em)?$ (positive decimal + px/em )|
|[height](properties_CoordinatesAndSizing.md#height)|Designates an object's vertical size|minimum: 0|
|[hideExtraBlankRows](properties_BackgroundAndBorder.md#hide-extra-blank-rows)|Deactivates the visibility of extra, empty rows.	|"true", "false"|
|[hideSystemHighlight](properties_Appearance.md#hide-selection-highlight)|Used to specify hiding highlighted records in the list box.|"true", "false"|
| [highlightSet](properties_ListBox.md#highlight-set)| string| Name of the set.|
|[horizontalLineStroke](properties_Gridlines.md#horizontal-line-color)|	Defines the color of the horizontal lines in a list box (gray by default).|Any CSS value, "'transparent", "automatic"|
|[icon](properties_TextAndPicture.md#picture-pathname) (buttons)<br>[icon](properties_Picture.md#pathname) (picture button & picture pop-up menu)|The name, number, or the pathname of the picture.|An absolute or relative path|
|[iconFrames](properties_TextAndPicture.md#number-of-states)|Sets the exact number of states present in the picture. |minimum: 1|
|[iconPlacement](properties_TextAndPicture.md#icon-location)|Designates the placement of an icon in relation to the form object.|"none", "left", "right"|
|[labelsPlacement](properties_Scale.md#label-location) (objects)<br>[labelsPlacement](properties_Appearance.md#tab-control-direction) (splitter / tab control)| Specifies the location of an object's displayed text.|"none", "top", "bottom", "left", "right"|
|[left](properties_CoordinatesAndSizing.md#left) (objects) <br>[left](properties_TextAndPicture.md#title-picture-position) (titles & pictures)|Positions an object on the left.|minimum: 0|
|[lockedColumnCount](properties_ListBox.md#number-of-locked-columns) |Number of columns that must stay permanently displayed in the left part of a list box. |minimum: 0|
|[loopBackToFirstFrame](properties_Animation.md#loop-back-to-first-frame)|Pictures are displayed in a continuous loop.|"true", "false"|
|[max](properties_Scale.md#maximum)|The maximum allowed value. For numeric steppers, these properties represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value. |minimum: 0 (for numeric data types)|
|[maxWidth](properties_CoordinatesAndSizing.md#maximum-width)|Designates the largest size allowed for list box columns. |minimum: 0|
|[metaSource](properties_Text.md#meta-info-expression)| A meta object containing style and selection settings.|An object expression|
|[method](properties_Action.md#method)|A project method name. |The name of an existing project method|
|[middle](properties_TextAndPicture.md#title-picture-position)|The text is centered.|minimum: 0|
|[min](properties_Scale.md#minimum)|The minimum allowed value. For numeric steppers, these properties represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.|minimum: 0 (for numeric data types)|
|[minWidth](properties_CoordinatesAndSizing.md#minimum-width)|Designates the smallest size allowed for list box columns. |minimum: 0|
|[movableRows](properties_Action.md#movable-rows)|Authorizes the movement of rows during execution. |"true", "false"|
|[name](properties_Object.md#object-name)|The name of the form object. (Optional for the form)|Any name which does not belong to an already existing object|
|[numberFormat](properties_Display.md#number-format) |Controls the way the alphanumeric fields and variables appear when displayed or printed.|Numbers (including a decimal point or minus sign if necessary)|
|[pictureFormat](properties_Display.md#picture-format)|Controls how pictures appear when displayed or printed.|"truncatedTopLeft", "scaled", "truncatedCenter", "tiled" (pictures only), "proportionalTopLeft" (excluding pictures), "proportionalCenter"(excluding pictures)|
|[placeholder](properties_Entry.md#placeholder)	|Grays out text when the data source value is empty.|Text to be grayed out.|
|[pluginAreaKind](properties_Object.md#plug-in-kind)|Describes the type of plug-in. |The type of plug-in. |
|[popupPlacement](properties_TextAndPicture.md#with-pop-up-menu) |Allows displaying a symbol that appears as a triangle in the button, which indicates that there is a pop-up menu attached. |"None", Linked", "Separated" |
|[progressSource](properties_WebArea.md#progression)| A value between 0 and 100, representing the page load completion percentage in the Web area. Automatically updated by 4D, cannot be modified manually.|minimum: 0|
|[radioGroup](properties_Object.md#radio-group)|Enables radio buttons to be used in coordinated sets: only one button at a time can be selected in the set.|	Radio group name|
|[requiredList](properties_RangeOfValues.md#required-list)|Allows setting a list where only certain values can be inserted. |A list of mandatory values.|
|[resizable](properties_ResizingOptions.md#resizable)|Designates if the size of an object can be modified by the user.|"true", "false"|
|[resizingMode](properties_ResizingOptions.md#column-auto-resizing)|Specifies if a list box column should be automatically resized | "rightToLeft", "legacy"|
|[right](properties_CoordinatesAndSizing.md#right) (objects)<br>[right](properties_TextAndPicture.md#title-picture-position) (titles & pictures)|Positions an object on the right.|minimum: 0|
|[rightMargin](properties_TextAndPicture.md#horizontal-margin)|Horizontal margin value (in pixels). |minimum: 0|
|[rowControlSource](properties_Listbox.md#row-control-array) |A 4D array defining the list box rows. |Array|
|[rowCount](properties_Crop.md#rows)|Sets the number of rows.|minimum: 1|
|[rowFillSource](properties_BackgroundAndBorder.md#row-background-color-array) (array list box)<br>[rowFillSource](properties_BackgroundAndBorder.md#background-color-expression) (selection or collection list box)|The name of an array or expression to apply a custom background color to each row of a list box. |The name of an array or expression.|
|[rowHeight](properties_CoordinatesAndSizing.md#row-height)|Sets the height of list box rows. |CSS value unit "em" or "px" (default)|
|[rowHeightAuto](properties_CoordinatesAndSizing.md#automatic-row-height)|boolean |"true", "false"|
|[rowHeightAutoMax](properties_CoordinatesAndSizing.md#maximum-width)|Designates the largest height allowed for list box rows. |CSS value unit "em" or "px" (default). minimum: 0|
|[rowHeightAutoMin](properties_CoordinatesAndSizing.md#minimum-width)|Designates the smallest height allowed for list box rows. |CSS value unit "em" or "px" (default). minimum: 0|
|[rowHeightSource](properties_CoordinatesAndSizing.md#row-height-array)|An array defining different heights for the rows in a list box. |Name of a 4D array variable.|
|[rowStrokeSource](properties_Text.md#row-font-color-array) (array list box)<br>[rowStrokeSource](properties_Text.md#font-color-expression) (selection or collection/entity selection list box)|An array or expression for managing row colors.|Name of array or expression.|
|[rowStyleSource](properties_Text.md#row-style-array) (array list box) <br> [rowStyleSource](properties_Text.md#style-expression) (selection or collection/entity selection list box)|An array or expression for managing row styles.|Name of array or expression.|
|[scrollbarHorizontal](properties_Appearance.md#horizontal-scroll-bar) | A tool allowing the user to move the viewing area to the left or right.|"visible", "hidden", "automatic"|
|[scrollbarVertical](properties_Appearance.md#vertical-scroll-bar) | A tool allowing the user to move the viewing area up or down.|"visible", "hidden", "automatic"|
|[selectedItemsSource](properties_DataSource.md#selected-items)|Collection of the selected items in a list box.|Collection expression	|
|[selectionMode](properties_Action.md#multi-selectable) (hierarchical list) <br> [selectionMode](properties_ListBox.md#selection-mode) (list box)|	Allows the selection of multiple records/options.|	"multiple", "single", "none"
|[shortcutAccel](properties_Entry.md#shortcut)|Specifies the system to use, Windows or Mac.|"true", "false"|
|[shortcutAlt](properties_Entry.md#shortcut)|Designates the Alt key|"true", "false"|
|[shortcutCommand](properties_Entry.md#shortcut)|Designates the Command key (macOS)|"true", "false"|
|[shortcutControl](properties_Entry.md#shortcut)|Designates the Control key (Windows)|"true", "false"|
|[shortcutKey](properties_Entry.md#shortcut)|The letter or name of a special meaning key.|"[F1]" -> "[F15]", "[Return]", "[Enter]", "[Backspace]", "[Tab]", "[Esc]", "[Del]", "[Home]", "[End]", "[Help]", "[Page up]", "[Page down]", "[left arrow]", "[right arrow]", "[up arrow]", "[down arrow]"|
|[shortcutShift](properties_Entry.md#shortcut)	|Designates the Shift key	|"true", "false"|
|[showFooters](properties_Footers.md#display-headers)|Displays or hides column footers. |"true", "false"|
|[showGraduations](properties_Scale.md#display-graduation)|Displays/Hides the graduations next to the labels. |"true", "false"|
|[showHeaders](properties_Headers.md#display-headers)|Displays or hides column headers. |"true", "false"|
|[singleClickEdit](properties_Entry.md#single-click-edit)|Enables direct passage to edit mode.|"true", "false"|
|[sizingX](properties_ResizingOptions.md#horizontal-sizing)|Specifies if the horizontal size of an object should be moved or resized when a user resizes the form.|"grow", "move", "fixed"|
|[sizingY](properties_ResizingOptions.md#horizontal-sizing)|Specifies if the vertical size of an object should be moved or resized when a user resizes the form.|"grow", "move", "fixed"|
|[sortable](properties_Action.md#sortable)| Allows sorting column data by clicking the header.|"true", "false"|
|[splitterMode](properties_ResizingOptions.md#pusher)|When a splitter object has this property, other objects to its right (vertical splitter) or below it (horizontal splitter) are pushed at the same time as the splitter, with no stop.|"grow", "move", "fixed"|
|[staticColumnCount](properties_ListBox.md#number-of-static-columns) | Number of columns that cannot be moved during execution.|minimum: 0|
|[step](properties_Scale.md#step)| Minimum interval accepted between values during use. For numeric steppers, this property represents seconds when the object is associated with a time type value and days when it is associated with a date type value.|minimum: 1|
|[stroke](properties_Text.md#font-color) (text)<br> [stroke](properties_BackgroundAndBorder.md#line-color) (lines)<br>[stroke](properties_BackgroundAndBorder.md#transparent) (list box)|Specifies the color of the font or line used in the object. |Any CSS value, "transparent", "automatic"|
|[strokeWidth](properties_BackgroundAndBorder.md#line-width) |Designates the thickness of a line.|An integer or 0 for smallest width on a printed form|
|[switchBackWhenReleased](properties_Animation.md#switch-back-when-released)|Displays the first picture all the time except when the user clicks the button. Displays the second picture until the mouse button is released.|"true", "false"|
|[switchContinuously](properties_Animation.md#switch-continuously-on-clicks)|Allows the user to hold down the mouse button to display the pictures continuously (i.e., as an animation).|"true", "false"|
|[switchWhenRollover](properties_Animation.md#switch-when-roll-over)|Modifies the contents of the picture button when the mouse cursor passes over it. The initial picture is displayed when the cursor leaves the button’s area.|"true", "false"|
|[style](properties_TextAndPicture.md#style)|Allows setting the general appearance of the button. See Button Style for more information.|"regular", "flat", "toolbar", "bevel", "roundedBevel", "gradientBevel", "texturedBevel", "office", "help", "circular", "disclosure", "roundedDisclosure", "custom"|
|[text](properties_Object.md#title)|The title of the form object|Any text|
|[textAlign](properties_Text.md#horizontal-alignment)|Horizontal location of text within the area that contains it. |"automatic", "right", "center", "justify", "left"|
|[textAngle](properties_Text.md#orientation)|Modifies the orientation (rotation) of the text area. |0, 90, 180, 270|
|[textDecoration](properties_Text.md#underline)|Sets the selected text to have a line running beneath it.|"normal", "underline"|
|[textFormat](properties_Display.md#alpha-format)|Controls the way the alphanumeric fields and variables appear when displayed or printed.|"### ####", "(###) ### ####", "### ### ####", "### ## ####", "00000", custom formats|
|[threeState](properties_Display.md#three-states)|Allows a check box object to accept a third state.|"true", "false"|
|[timeFormat](properties_Display.md#time-format)|Controls the way times appear when displayed or printed. Must only be selected among the 4D built-in formats. |"systemShort", "systemMedium", "systemLong", "iso8601", "hh_mm_ss", "hh_mm", "hh_mm_am", "mm_ss", "HH_MM_SS", "HH_MM", "MM_SS", "blankIfNull" (can be combined with the other possible values)|
|[truncateMode](properties_Display.md#trucate-with-ellipsis) | Controls the display of values when list box columns are too narrow to show their full contents.|"withEllipsis", "none" |
|[type](properties_Object.md#type)|Mandatory. Designates the data type of the form object.|"text", "rectangle", "groupBox", "tab", "line", "button", "checkbox", "radio", "dropdown", "combo", "webArea", "write", "subform", "plugin", "splitter", "buttonGrid", "progress", "ruler", "spinner", "stepper", "list", "pictureButton", "picturePopup", "listbox", "input", "view"|
|[tooltip](properties_Help.md)|	Provide users with additional information about a field.|Additional information to help a user|
|[top](properties_CoordinatesAndSizing.md#top) (objects)<br>[top](properties_TextAndPicture.md#title-picture-position) (titles & pictures)|Positions an object at the top (centered).|minimum: 0|
|[urlSource](properties_WebArea.md#url)|Designates the the URL loaded or being loading by the associated Web area. |A URL.|
|[useLastFrameAsDisabled](properties_Animation.md#use-last-frame-as-disabled)|Enables setting the last thumbnail as the one to display when the button is disabled.|"true", "false"|
|[values](properties_DataSource.md#default-values) |Default value to be entered in a field or enterable object. |A list of default values|
|[variableCalculation](properties_Object.md#variable-calculation)|Allows mathematical calculations to be performed.|"none", "minimum", "maximum", "sum", "count", "average", "standardDeviation", "variance", "sumSquare"|
|[verticalAlign](properties_Text.md#vertical-alignment)|Vertical location of text within the area that contains it. |"automatic", "top", "middle", "bottom"|
|[verticalLineStroke](properties_Gridlines.md#vertical-line-color)|Defines the color of the vertical lines in a list box (gray by default).|Any CSS value, "'transparent", "automatic"|
|[visibility](properties_Display.md#visibility)|Allows hiding the object in the Application environment.|"visible", "hidden", "selectedRows", "unselectedRows"|
|[webEngine](properties_WebArea.md#use-embedded-web-rendering-engine)| Used to choose between two rendering engines for the Web area, depending on the specifics of the application.|"embedded", "system"|
|[width](properties_CoordinatesAndSizing.md#width)|Designates an object's horizontal size|minimum: 0|
|[wordwrap](properties_Display.md#wordwrap) |Manages the display of contents when it exceeds the width of the object. | "automatic" (excluding list box), "normal", "none"|

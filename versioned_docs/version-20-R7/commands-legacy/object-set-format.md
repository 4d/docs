---
id: object-set-format
title: OBJECT SET FORMAT
slug: /commands/object-set-format
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FORMAT.Syntax-->**OBJECT SET FORMAT** ( {* ;} *object* ; *displayFormat* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FORMAT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, Object is an Object Name (String) If omitted, Object is a Field or a Variable |
| object | any | &#8594;  | Object Name (if * is specified), or Field or Variable (if * is omitted) |
| displayFormat | Text | &#8594;  | New display format for the object |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET FORMAT.Summary-->**OBJECT SET FORMAT** sets the display format for the objects specified by *object* to the format you pass in *displayFormat*.<!-- END REF--> The new format is only used for the current display; it is not stored with the form.

If you specify the optional *\** parameter, you indicate an object name (a string) in *object*. If you omit the optional \* parameter, you indicate a field or a variable in *object*. In this case, you specify a field or variable reference (field or variable objects only) instead of a string. For more information about object names, see the *Object Properties* section.

**OBJECT SET FORMAT** can be used for both input forms and output forms (displayed or printed) and can be applied to fields or variables (enterable/non-enterable).

Naturally, you must use a display format compatible with the type of data found in the object or with the object itself.

##### Boolean 

To format Boolean fields:

* (all versions) you can pass a single value in *displayFormat*. In this case, the field will be displayed as a checkbox and its label will be the value specified.
* (binary databases only) you can pass two values, separated by a semicolon (*;*), in *displayFormat*. In this case, the field will be displayed as two radio buttons.

##### Date and Time 

To format Date or Time fields or variables, you can use:

* either a **predefined format** available though constants of the *Date Display Formats* or *Time Display Formats* theme (longint value). In this case, you must pass [Char](char.md)(n) in *displayFormat*, where *n* is the constant:  
    
Dates:  

| Constant                    | Value | Comment                                                                                                                         |  
| --------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------- |  
| Blank if null date          | 100   | To be added to the format constant. Indicates that in the case of a null value, 4D must return an empty string instead of zeros |  
| Date RFC 1123               | 10    | Fri, 10 Sep 2010 13:07:20 GMT (see Notes)                                                                                       |  
| Internal date abbreviated   | 6     | Dec 29, 2006                                                                                                                    |  
| Internal date long          | 5     | December 29, 2006                                                                                                               |  
| Internal date short         | 7     | 12/29/2006                                                                                                                      |  
| Internal date short special | 4     | 12/29/06 (but 12/29/1896 or 12/29/2096)                                                                                         |  
| ISO Date                    | 8     | 2006-12-29T00:00:00 (see Notes)                                                                                                 |  
| ISO Date GMT                | 9     | 2010-09-13T16:11:53Z (see Notes)                                                                                                |  
| System date abbreviated     | 2     | Sun, Dec 29, 2006                                                                                                               |  
| System date long            | 3     | Sunday, December 29, 2006                                                                                                       |  
| System date short           | 1     | 12/29/2006                                                                                                                      |  
    
Times:  

| Constant                     | Value | Comment                                                                                                                                                                                                                               |  
| ---------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Blank if null time           | 100   | To be added to the format constant. Indicates that in the case of a null value, 4D must return an empty string instead of zeros                                                                                                       |  
| HH MM                        | 2     | 01:02                                                                                                                                                                                                                                 |  
| HH MM AM PM                  | 5     | 1:02 AM                                                                                                                                                                                                                               |  
| HH MM SS                     | 1     | 01:02:03                                                                                                                                                                                                                              |  
| Hour min                     | 4     | 1 hour 2 minutes                                                                                                                                                                                                                      |  
| Hour min sec                 | 3     | 1 hour 2 minutes 3 seconds                                                                                                                                                                                                            |  
| ISO time                     | 8     | 0000-00-00T01:02:03\. Corresponds to the ISO8601 standard and contains, in theory, a date and a time. Since this format does not support combined dates/times, the date part is filled with 0s. This format expresses the local time. |  
| Min sec                      | 7     | 62 minutes 3 seconds                                                                                                                                                                                                                  |  
| MM SS                        | 6     | 62:03                                                                                                                                                                                                                                 |  
| System time long             | 11    | 1:02:03 AM HNEC (Mac only)                                                                                                                                                                                                            |  
| System time long abbreviated | 10    | 1•02•03 AM (Mac only)                                                                                                                                                                                                                 |  
| System time short            | 9     | 01:02:03                                                                                                                                                                                                                              |
* or a [customized format built upon a pattern](https://developer.4d.com/docs/Project/date-time-formats.md) (string value). For example:  
    
```4d  
 OBJECT SET FORMAT(*;"myDate";"dd/MM/yyyy")  
```  
    
See also example 2.  
    
**Notes**:  
\- To apply the "Blank if null" option to a customized format, add "blankIfNull" at the end of the format string (case sensitive). Example:  
```4d  
 OBJECT SET FORMAT(*;"myDate";"dd/MM/yyyy blankIfNull")  
```  
    
\- In order to avoid conflicts when formatting dates or times, single char formats must be prefixed by ":" Example:  
```4d  
 OBJECT SET FORMAT(*;"timeinput";":m")  
```

##### Picture 

To format Picture fields or variables, pass Char(n) in *displayFormat*, where *n* is one of the following predefined constants provided by 4D: 

| Constant                    | Type    | Value |
| --------------------------- | ------- | ----- |
| On background               | Integer | 3     |
| Replicated                  | Integer | 7     |
| Scaled to fit               | Integer | 2     |
| Scaled to fit prop centered | Integer | 6     |
| Scaled to fit proportional  | Integer | 5     |
| Truncated centered          | Integer | 1     |
| Truncated non centered      | Integer | 4     |

##### Alpha and Number 

To format fields or variables of the Alpha or Number type, pass the label of the format directly in the *displayFormat* parameter.

For more information about display formats, see the *Number formats* and *Alpha formats* sections of the 4D *Design Reference* manual.

**Note:** In *displayFormat*, to use custom display formats that you may have created in the tool box, prefix the name of the format with a vertical bar (|).

##### Picture buttons 

To format picture buttons, in the *displayFormat* parameter, pass a character string respecting the following syntax:  
*cols;lines;picture;flags{;ticks}*

* *cols* \= number of columns in the picture.
* *lines* \= number of lines in the picture.
* *picture* \= picture used, coming from the picture library, a picture variable, or a file in the Resources folder:  
   * If the picture comes from the picture library, enter its number, preceded by a question mark (e.g.: "?250").  
   * If the picture comes from a picture variable, enter the variable name.  
   * If the picture comes from a file stored in the Resources folder of the database, enter a path of the type "#{folder/}picturename" or "file:{folder/}picturename".
* *flags* \= display mode and operation of a picture button. This parameter can take any of the following values: 0, 1, 2, 16, 32, 64 and 128\. Each of these values represents a display mode or an operation mode. These values are cumulative; for instance, if you want to enable the modes 1 and 64, pass 65 in the *flags* parameter. Here are the details for each value:  
   * *flags* \= 0 (no option)  
   Displays the next picture in the series when the user clicks the picture. Displays the previous picture in the series when the user holds down the Shift key and clicks on the picture. When the user reaches the last picture in the series, the picture does not change when the user clicks it again. That is, it does not cycle back to the first picture in the series.  
   * *flags* \= 1 (Switch Continuously)  
   Similar to the previous option except that the user can hold down the mouse button to display the pictures continuously (i.e., as an animation). When the user reaches the last picture, the object does not cycle back to the first picture.  
   * *flags* \= 2 (Loop Back to First Frame)  
   Similar to the previous option except that the pictures are displayed in a continuous loop. When the user reaches the last picture and clicks again, the first picture appears, and so forth.  
   * *flags* \= 16 (Switch when Roll Over)  
   The contents of the picture button are modified when the mouse cursor passes over it. The initial picture is re-established when the cursor leaves the button's area. This mode is frequently used in multimedia applications or in HTML documents. The picture that is then displayed is the last picture of the thumbnail table, unless the Use Last Frame as Disabled option is selected (128). If that option is selected, it is the next-to-last thumbnail that is displayed.  
   * *flags* \= 32 (Switch Back when Released)  
   This mode operates with two pictures. It displays the first picture all the time except when the user clicks the button. In that case, the second picture is displayed until the mouse button is released, whereupon it switches back to the first picture. This mode allows you to create an action button that displays its status (idle or clicked). You can use this mode to create a 3D effect or display any picture that depicts the action.  
   * *flags* \= 64 (Transparent)  
   Used to make the background picture transparent.  
   * *flags* \= 128 (Use Last Frame as Disabled)  
   This mode allows you to set the last thumbnail as the thumbnail to display when the button is disabled. When this mode is selected, 4D displays the last thumbnail when the button is disabled. When this mode is used in addition to the modes 0, 1 and 2, the last thumbnail is not taken into account in the sequence of the other modes. It will appear only when the button is disabled.
* *ticks* \= activates the “Switch every n Ticks” mode and sets the time interval between the display of each picture. When this optional parameter is passed, it allows you to cycle through the contents of the picture button at the specified speed. For example, if you enter "2;3;?16807;0;10", the picture button will display a different picture every 10 ticks. When this mode is active, only the Transparent mode can be used (64).

##### Picture pop-up menus 

To format picture pop-up menus, in the *displayFormat* parameter, pass a character string respecting the following syntax:  
*cols;lines;picture;hMargin;vMargin;flags*  

* *cols* \= number of columns in the picture.
* *lines* \= number of lines in the picture.
* *picture* \= picture used, coming from the picture library or a picture variable:  
   * If the picture comes from the picture library, enter its number, preceded by a question mark (e.g.: "?250").  
   * If the picture comes from a picture variable, enter the variable name.
* *hMargin* \= margin in pixels between the horizontal limits of the menu and the picture.
* *vMargin* \= margin in pixels between the vertical limits of the menu and the picture.
* *flags* \= transparency mode of picture pop-up menu. Accepts the values 0 and 64:  
   * *flags* \= 0: the picture pop-up menu is not transparent,  
   * *flags* \= 64: the picture pop-up menu is transparent.

##### Thermometers and rulers 

To format objects of the thermometer or ruler type, in the *displayFormat* parameter, pass a character string respecting the following syntax:  
*min;max;unit;step;flags{;format{;display}}*  

* *min* \= value of the first graduation of the indicator.
* *max* \= value of the last graduation of the indicator.
* *unit* \= interval between the indicator graduations.
* *step* \= minimum interval of cursor movement in the indicator.
* *flags* \= display mode and operation of indicators. This parameter accepts the values 0, 2, 3, 16, 32 and 128\. These values can be accumulated in order to set several options (except for 128). Here are the details for each value:  
   * *flags* \= 0: does not display the units.  
   * *flags* \= 2: displays the units on the right or below the indicator.  
   * *flags* \= 3: displays the units on the left or above the indicator.  
   * *flags* \= 16: displays graduations adjacent to the units.  
   * *flags* \= 32: On Data Change is executed while the user is adjusting the indicator. If this value is not used, On Data Change occurs only after the user is finished adjusting the indicator.  
   * *flags* \= 128: activates the "Barber shop" (continuous animation) mode. This value cannot be combined with others. In this mode, the other parameters are ignored (except for the *display* parameter if passed). For more information about this mode, please refer to the *Design Reference* manual.
* *format* \= display format of the indicator graduations.  
Keep in mind that the units and graduations are automatically hidden if the size of the indicator object does not permit them to be displayed correctly.
* *display* \= specific display options. In the case of thermometers, this parameter is only taken into account when the *flags* subparameter is 128.  
   * *display* \= 0 (or is omitted): displays a standard ruler / displays a thermometer in continuous animation of the "barber shop" type.  
   * *display* \= 1 : activates "Stepper" mode for a ruler / activates the "Asynchronous progress" mode for a thermometer. For more information about these options, please refer to the *Design Reference* manual.

##### Dials 

To format objects of the dial type, in the *displayFormat* parameter, pass a character string respecting the following syntax:  
*min;max;unit;step{;flags}*  

* *min* \= value of the first graduation of the indicator.
* *max* \= value of the last graduation of the indicator.
* *unit* \= interval between the indicator graduations.
* *step* \= minimum interval of cursor movement in the indicator.
* *flags* \= operation mode of the dial (optional). This parameter only accepts the value 32: On Data Change is executed while the user is adjusting the indicator. If this value is not used, On Data Change occurs only after the user is finished adjusting the indicator.

##### Button grids 

To format button grids, in the *displayFormat* parameter, pass a character string respecting the following syntax:  
*cols;lines*  

* *cols* \= number of columns of the grid.
* *lines* \= number of lines of the grid.

**Note:** For more information about the display formats for form objects, refer to the 4D Design Reference manual.

##### 3D buttons 

To format 3D buttons, in the *displayFormat* parameter, pass a character string respecting the following syntax:  
*title;picture;background;titlePos;titleVisible;iconVisible;style;horMargin;vertMargin;* *iconOffset;popupMenu* *;* *hyperlink;numStates;imageHugsTitle*

* *title* \= Button title. This value can be expressed as text or a resource number (ex.: “:16800,1”)
* *picture* \= Picture linked to a button that comes from a picture library, a picture variable, or a file in the Resources folder:  
   * If the picture comes from a picture library, enter its number, preceded with a question mark (ex.: “?250”).  
   * If the picture comes from a picture variable, enter the variable name.  
   * If the picture comes from a file stored in the Resources folder of the database, enter a path of the type "#{folder/}picturename" or "file:{folder/}picturename".
* *background* \= Background picture linked to a button (Custom style), that comes from a picture library, a picture variable, a PICT resource or a file stored in the Resources folder (see above).
* *titlePos* \= position of the button title. Five values are possible:  
   * *titlePos* \= 1: Left  
   * *titlePos* \= 2: Top  
   * *titlePos* \= 3: Right  
   * *titlePos* \= 4: Bottom  
   * *titlePos* \= 5: Middle
* *titleVisible* \= Defines whether or not the title is visible. Two values are possible:  
   * *titleVisible* \= 0: the title is hidden  
   * *titleVisible* \= 1: the title is displayed
* *iconVisible* \= Defines whether or not the icon is visible. Two values are possible:  
   * *iconVisible* \= 0 : the icon is hidden  
   * *iconVisible* \= 1 : the icon is displayed
* *style* \= Button style. The value of this option determines whether various other options are taken into consideration (for example, background). The following values are possible:  
   * *style* \= 0: None  
   * *style* \= 1: Background offset  
   * *style* \= 2: Push button  
   * *style* \= 3: Toolbar button  
   * *style* \= 4: Custom  
   * *style* \= 5: Circle  
   * *style* \= 6: Small system square  
   * *style* \= 7: Office XP  
   * *style* \= 8: Bevel  
   * *style* \= 9: Rounded bevel  
   * *style* \= 10: Collapse/Expand  
   * *style* \= 11: Help  
   * *style* \= 12: OS X Textured  
   * *style* \= 13: OS X Gradient
* *horMargin* \= Horizontal margin. Number of pixels delimiting the inside left and right margins of the button (areas that the icon and the text must not encroach upon).
* *vertMargin* \= Vertical margin. Number of pixels delimiting the inside top and bottom margins of the button (areas that the icon and the text must not encroach upon).
* *iconOffset* \= Shifting of the icon to the right and down. This value, expressed in pixels, indicates the shifting of the button icon to the right and down when the button is clicked (the same value is used for both directions).
* *popupMenu* \= Association of a pop-up menu with the button. Three values are possible:  
   * *popupMenu* \= 0: No pop-up menu  
   * *popupMenu* \= 1: With linked pop-up menu  
   * *popupMenu* \= 2: With separate pop-up menu
* *hyperlink* \= TItle is underlined on mouseover to resemble a hyperlink (legacy mechanism). Two values are possible:  
   * *hyperlink* \= 0: title is not underlined on mouseover  
   * *hyperlink* \= 1: title is underlined on mouseover
* *numStates* \= Number of states present in picture used as icon for the 3D button, and which will be used by 4D to represent the standard button states (from 0 to 4).
* *imageHugsTitle* \= Sets whether the icon and title must be separated or adjoined. Two values are possible:  
   * *imageHugsTitle* \= 0 : icon and title are away from each other  
   * *imageHugsTitle* \= 1 : icon and title are adjoined

Certain options are not taken into account for all 3D button styles. Also, in certain cases, you may wish to not change all the options. To not pass an option, simply omit the corresponding value. For example, if you do not want to pass the *titleVisible*, *vertMargin* and *hyperlink* options, you can write:

```4d
 OBJECT SET FORMAT(myVar;"NiceButton;?256;:562;1;;1;4;5;;5;0;;2")
```

##### List box headers 

To format the icon in a list box header, pass a character string in the *displayFormat* parameter, which respects the following syntax:  
*picture;iconPos*

* *picture* \= header picture, coming from the picture library, a picture variable, or a picture file:  
   * If the picture comes from the picture library, enter its number, preceded by a question mark (e.g.: "?250").  
   * If it comes from a picture variable, enter the variable name.  
   * If it comes from a file stored in the Resources folder of the database, enter a URL of the type "#{folder/}picturename" or "file:{folder/}picturename".
* *iconPos* \= position of icon in header. Two values are supported:  
   * *iconPos* \= 1: Left  
   * *iconPos* \= 2: Right

This feature is useful, for example, when you want to work with a customized sort icon. 

#### Example 1 

The following line of code formats the *\[Employee\]Date Hired* field to the fifth format (Internal date long). 

```4d
 OBJECT SET FORMAT([Employee]Date Hired;Char(Internal date long))
```

#### Example 2 

This example formats a date variable and a time variable using [customized formats](https://developer.4d.com/docs/Project/date-time-formats.md): 

```4d
 OBJECT SET FORMAT(*;"mydate";"(yyyy) MMM dd") // (2023) Dec 12
 OBJECT SET FORMAT(*;"mytime";"hh'h' mm'mn' ss'sec.'") // 15h 12mn 17sec.
```

#### Example 3 

The following example changes the format for a *\[Company\]ZIP Code* field according to the length of the value stored in the field: 

```4d
 If(Length([Company]ZIP Code)=9)
    OBJECT SET FORMAT([Company]ZIP Code;"#####–####")
 Else
    OBJECT SET FORMAT([Company]ZIP Code;"#####")
 End if
```

#### Example 4 

The following example formats the value of the \[Stats\]Results field depending on whether it is a positive, negative, or null number:

```4d
 OBJECT SET FORMAT([Stats]Results;"### ##0.00;(### ##0.00);")
```

#### Example 5 

The following example sets the format of a Boolean field to display Married and Unmarried, instead of the default Yes and No: 

```4d
 OBJECT SET FORMAT([Employee]Marital Status;"Married;Unmarried")
```

#### Example 6 

Provided that you have stored a picture file named "envelope\_open.png" in the Resources folder of the database, you can write:

```4d
 vIcon:="#envelope_open.png"
 vPos:="2" // Right
 OBJECT SET FORMAT(*;"Header1";vIcon+";"+vPos)
```

![](../assets/en/commands/pict2878245.en.png)

#### Example 7 

The following example sets the format of a Boolean field to display a checkbox labelled “Classified”: 

```4d
 OBJECT SET FORMAT([Folder]Classification;"Classified")
```

#### Example 8 

You have a table of thumbnails containing 1 row and 4 columns, intended to display a picture button (“default”, “clicked”, “roll over” and “disabled”). You want to associate the Switch when Roll Over, Switch back when Released and Use Last Frame as Disabled options with it: 

```4d
 OBJECT SET FORMAT(*;"PictureButton";"4;1;?15000;176")
```

#### Example 9 

Switching a thermometer to "Barber shop" mode: 

```4d
 OBJECT SET FORMAT($Mythermo;";;;;128")
 $Mythermo:=1 //Start animation
```

#### See also 

[Example database (v15 R5)](https://download.4d.com/Demos/4D%5Fv15%5FR5/HDI%5FListBox%5FOBJECT%5FSET%5FFORMAT.zip)  
[GET SYSTEM FORMAT](get-system-format.md)  
[OBJECT Get format](object-get-format.md)  
[OBJECT SET FILTER](object-set-filter.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 236 |
| Thread safe | &cross; |



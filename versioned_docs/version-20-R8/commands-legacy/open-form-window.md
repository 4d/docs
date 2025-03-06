---
id: open-form-window
title: Open form window
slug: /commands/open-form-window
displayed_sidebar: docs
---

<!--REF #_command_.Open form window.Syntax-->**Open form window** ( {*aTable* ;} *formName* {; *type* {; *hPos* {; *vPos* {; *}}}} ) : Integer<!-- END REF-->
<!--REF #_command_.Open form window.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table of the form or Default table, if omitted |
| formName | Text, Object | &#8594;  | Name (string) of table or project form, or a POSIX path (string) to a .json file describing the form, oran object describing the form |
| type | Integer | &#8594;  | Window type |
| hPos | Integer | &#8594;  | Horizontal position of the window |
| vPos | Integer | &#8594;  | Vertical position of the window |
| * | Operator | &#8594;  | Save current position and size of the window |
| Function result | Integer | &#8592; | Window reference number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Open form window.Summary-->The Open form window command opens a new window using the size and resizing properties of the form *formName*.<!-- END REF-->

**Note:** To know the main properties of a form, use the [FORM GET PROPERTIES](form-get-properties.md) command.

In the *formName* parameter, you can pass:

* the name of a form (project form or table form) to use;
* the path (in POSIX syntax) to a valid .json file containing a description of the form to use. See *Form file path*;
* an object containing a description of the form to use.

The *formName* is not displayed in the window. If you want to display the form, you have to call a command which loads a form ([ADD RECORD](add-record.md) for example).

The optional *type* parameter allows you to specify a type for the window. You must pass one of the following predefined constants (placed in the *Open Form Window* theme):

| Constant                         | Type    | Value  |
| -------------------------------- | ------- | ------ |
| Controller form window           | Integer | 133056 |
| Form has full screen mode Mac    | Integer | 65536  |
| Form has no menu bar             | Integer | 2048   |
| Modal form dialog box            | Integer | 1      |
| Movable form dialog box          | Integer | 5      |
| Movable form dialog box no title | Integer | 524293 |
| Palette form window              | Integer | 1984   |
| Plain form window                | Integer | 8      |
| Plain form window no title       | Integer | 524296 |
| Pop up form window               | Integer | 32     |
| Sheet form window                | Integer | 33     |
| Toolbar form window              | Integer | 35     |

Window types are detailed in the *Window Types* section.

**Note:** The Form has full screen mode Mac and Form has no menu bar constants must be added to one of the other type constants.

By default, if the *type* parameter is not passed, a window of the Plain form window type is opened.

**Close box**  
Windows of the Movable form dialog box, Plain form window, and Palette form window types have a close box. No method is associated to the window's close box. Clicking on this close box cancels and closes the window, except if the On Close Box form event has been activated for the form. In this case, the code associated with this event will be executed.

**Size control**  
If "Window Size" properties of the *formName* are not set to "fixed", the opened window can be resized by the user. A zoom box can be available,depending on the window type. If the **Fixed Width** and/or **Fixed Height** property is checked in the form properties, the window will not be resizable.

**Note:** Some attributes (grow box, close box...) of the window created depend on the interface specifications of the operating system for the chosen *type*. It is therefore possible to obtain different results depending on the platform used.

The optional parameter *hPos* allows you to define the horizontal position of the window. You can pass a defined position in pixels or one of the following predefined constants placed in the *Open Form Window* theme:

| Constant              | Type    | Value  |
| --------------------- | ------- | ------ |
| Horizontally centered | Integer | 65536  |
| On the left           | Integer | 131072 |
| On the right          | Integer | 196608 |

The optional parameter *vPos* allows you to define the vertical position of the window. You can pass a defined position in pixels or one of the following predefined constants placed in the *Open Form Window* theme:

| Constant            | Type    | Value  |
| ------------------- | ------- | ------ |
| At the bottom       | Integer | 393216 |
| At the top          | Integer | 327680 |
| Vertically centered | Integer | 262144 |

These parameters are expressed relative to the top left corner of the contents area of the application window (Windows MDI mode) or to the main screen (macOS and Windows SDI mode). They take into account the presence of the tool bar and menu bar.

If you pass the optional parameter *\**, the current position and size of the window are memorized when closed. When the window is reopened again, its previous position and size are respected. In this case, the *vPos* and *hPos* parameters are only used the first time the window is opened.

#### Example 1 

The following statement opens a standard window with a close box and automatically adjusts it to be the same size as the "Input" form. The form window size is not set to "fixed", then the window also has a grow and a zoom box:

```4d
 $winRef :=Open form window([Table1];"Enter")
```

#### Example 2 

The following statement opens a floating palette in the upper left portion of the screen based on a project form named "Tools". This palette uses the last position it was in when the user closed it each time it is reopened:

```4d
 $winRef :=Open form window("Tools";Palette form window;On the left;At the top;*)
```

#### Example 3 

This code must be called on macOS while a document window is displayed, for example from a form button, to display a sheet window:

```4d
 $myWin:=Open form window("sheet form";Sheet form window)
  // For the moment, the window is created but remains hidden
 DIALOG([aTable];"dialForm")
  //The On Load event is generated then the sheet window is displayed; it "drops down"
  //from the bottom of the title bar
```

#### Example 4 

The following example uses the path to a .json form to display the records in an employee list: 

```4d
 Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)
 ALL RECORDS([Personnel])
 DIALOG("/RESOURCES/OutputPersonnel.json";*)
```

which displays:

![](../assets/en/commands/pict3687439.en.png)

#### See also 

[FORM GET PROPERTIES](form-get-properties.md)  
[Open window](open-window.md)  
*Window Types*  
*Window Types (compatibility)*  

#### Properties

|  |  |
| --- | --- |
| Command number | 675 |
| Thread safe | &cross; |



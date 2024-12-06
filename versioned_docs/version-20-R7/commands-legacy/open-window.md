---
id: open-window
title: Open window
slug: /commands/open-window
displayed_sidebar: docs
---

<!--REF #_command_.Open window.Syntax-->**Open window** ( *left* ; *top* ; *right* ; *bottom* {; *type* {; *title* {; *controlMenuBox*}}} ) : WinRef<!-- END REF-->
<!--REF #_command_.Open window.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| left | Integer | &#8594;  | Global left coordinate of window contents area |
| top | Integer | &#8594;  | Global top coordinate of window contents area |
| right | Integer | &#8594;  | Global right coordinate of window contents area, or -1 for using form default size |
| bottom | Integer | &#8594;  | Global bottom coordinate of window contents area, or -1 for using form default size |
| type | Integer | &#8594;  | Window type |
| title | Text | &#8594;  | Title of window or "" for using default form title |
| controlMenuBox | Text | &#8594;  | Method to call when the Control-menu box is double-clicked or the Close box is clicked |
| Function result | WinRef | &#8592; | Window reference number |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Open window.Summary-->**Open window** opens a new window with the dimensions given by the first four parameters:

* *left* is the distance in pixels from the left edge of the application window to the left internal edge of the window.<!-- END REF-->
* *top* is the distance in pixels from the top of the application window to the top internal edge of the window.
* *right* is the distance in pixels from the left edge of the application window to the right internal edge of the window.
* *bottom* is the distance in pixels from the top of the application window to the bottom internal edge of the window.

**Compatibility note:** **Open window** integrates various options which have evolved over the versions, and is now only kept for compatibility reasons. When you write new code for managing windows, we strongly recommend using the [Open form window](open-form-window.md) command, which is better suited to current interfaces. 

If you pass -1 in both *right* and *bottom,* you instruct 4D to automatically size the window under the following conditions:

* You have designed a form and set its Sizing Options in the Design environment Form properties window
* Before calling **Open window**, you selected the form using the [FORM SET INPUT](form-set-input.md) command, to which you passed the optional *\** parameter.

**Important:** This automatic sizing of the window will occur only if you made a prior call to [FORM SET INPUT](form-set-input.md) for the form to be displayed, and if you passed the \* optional parameter to [FORM SET INPUT](form-set-input.md).

* The *type* parameter is optional. It represents the type of window you want to display, and corresponds to the different windows shown in the section *Window Types (compatibility)* (constants of the *Open Window* theme). If the window type is negative, the window created is a floating window. If the type is not specified, type 1 is used by default.
* The *title* parameter is the optional title for the window

If you pass an empty string ("") in *title,* you instruct 4D to use the Window Title set in the Design environment Form Properties window for the form to be displayed.

**Important:** The default form title will be set to the window only if you made a prior call to [FORM SET INPUT](form-set-input.md) for the form to be displayed, and if you passed the \* optional parameter to [FORM SET INPUT](form-set-input.md).

* The *controlMenuBox* parameter is the optional Control-menu box method for the window. If this parameter is specified, a Control-menu box (Windows) or a Close Box (Macintosh) is added to the window. When the user double-clicks the Control-menu box (Windows) or clicks on the Close Box (Macintosh), the method passed in *controlMenuBox* is called.

**Note:** You can also manage the closing of the window from within the form method of the form displayed in the window when an On Close Box event occurs. For more information, see the command [Form event code](../commands/form-event-code.md).

If more than one window is open for a process, the last window opened is the active (frontmost) window for that process. Only information within the active window can be modified. Any other windows can be viewed. When the user types, the active window will always come to the front, if it is not already there.

Forms are displayed inside an open window. Text from the [MESSAGE](message.md) command also appears in the window.

**Open window** returns a WinRef type window reference, which can be used by window management commands (see the "*WinRef*" section). 

#### Example 1 

The following project method opens a window centered in the main window (Windows) or in the main screen (Macintosh). Note that it can accept two, three, or four parameters:

```4d
  // OPEN CENTERED WINDOW project method
  // $1 – Window width
  // $2 – Window height
  // $3 – Window type (optional)
  // $4 – Window title (optional)
 $SW:=Screen width\2
 $SH:=(Screen height\2)
 $WW:=$1\2
 $WH:=$2\2
 Case of
    :(Count parameters=2)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH)
    :(Count parameters=3)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH;$3)
    :(Count parameters=4)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH;$3;$4)
 End case
```

After the project method is written, you can use it this way:

```4d
 OPEN CENTERED WINDOW(400;250;Movable dialog box;"Update Archives")
 DIALOG([Utility Table];"UPDATE OPTIONS")
 CLOSE WINDOW
 If(OK=1)
  // ...
 End if
```

#### Example 2 

The following example opens a floating window that has a Control-menu box (Windows) or Close Box (Macintosh) method. The window is opened in the upper right hand corner of the application window.

```4d
 $myWindow:=Open window(Screen width-149;33;Screen width-4;178;-Palette window;"";"CloseColorPalette")
 DIALOG([Dialogs];"Color Palette")
```

The CloseColorPalette method calls the [CANCEL](cancel.md) command:

```4d
 CANCEL
```

#### Example 3 

The following example opens a window whose size and title come from the properties of the form displayed in the window: 

```4d
 FORM SET INPUT([Customers];"Add Records";*)
 $myWindow:=Open window(10;80;-1;-1;Plain window;"")
 Repeat
    ADD RECORD([Customers])
 Until(OK=0)
```

**Reminder:** In order to have **Open window** automatically use the properties of the form, you must call [FORM SET INPUT](form-set-input.md) with the optional *\** parameter, and the properties of the form must have been set accordingly in the Design environment.

#### Example 4 

This example illustrates the “delay” mechanism for displaying sheet windows under Mac OS X:

```4d
 $myWindow:=Open window(10;10;400;400;Sheet window)
  //For the moment, the window is created but remains hidden
 DIALOG([Table];"dialForm")
  //The On Load event is generated then the sheet window is displayed; it "drops down" from the bottom
  //of the title bar
```

#### See also 

[CLOSE WINDOW](close-window.md)  
[Open form window](open-form-window.md)  
*Open Window*  
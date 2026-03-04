---
id: open-window
title: Open window
slug: /commands/open-window
displayed_sidebar: docs
---

<!--REF #_command_.Open window.Syntax-->**Open window** ( *left* : Integer ; *top* : Integer ; *right* : Integer ; *bottom* : Integer {; *type* : Integer {; *title* : Text {; *controlMenuBox* : Text}}} ) : Integer<!-- END REF-->

<!--REF #_command_.Open window.Params-->

<div class="no-index">

| 引数             | 型       |                             | 説明                                                                                     |
| -------------- | ------- | --------------------------- | -------------------------------------------------------------------------------------- |
| left           | Integer | &#8594; | Global left coordinate of window contents area                                         |
| top            | Integer | &#8594; | Global top coordinate of window contents area                                          |
| right          | Integer | &#8594; | Global right coordinate of window contents area, or -1 for using form default size     |
| bottom         | Integer | &#8594; | Global bottom coordinate of window contents area, or -1 for using form default size    |
| type           | Integer | &#8594; | Window type                                                                            |
| title          | Text    | &#8594; | Title of window or "" for using default form title                                     |
| controlMenuBox | Text    | &#8594; | Method to call when the Control-menu box is double-clicked or the Close box is clicked |
| 戻り値            | Integer | &#8592; | ウィンドウ参照番号                                                                              |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

| リリース                        | 内容      |
| --------------------------- | ------- |
| 2004                        | 変更      |
| <6 | Created |

</details>
</div>

## 説明

<!--REF #_command_.Open window.Summary-->**Open window** opens a new window with the dimensions given by the first four parameters<!-- END REF-->:

- *left* is the distance in pixels from the left edge of the application window to the left internal edge of the window.
- *top* is the distance in pixels from the top of the application window to the top internal edge of the window.
- *right* is the distance in pixels from the left edge of the application window to the right internal edge of the window.
- *bottom* is the distance in pixels from the top of the application window to the bottom internal edge of the window.

**Compatibility note:** **Open window** integrates various options which have evolved over the versions, and is now only kept for compatibility reasons. When you write new code for managing windows, we strongly recommend using the [Open form window](../commands/open-form-window) command, which is better suited to current interfaces.

If you pass -1 in both *right* and *bottom,* you instruct 4D to automatically size the window under the following conditions:

- You have designed a form and set its Sizing Options in the Design environment Form properties window
- Before calling **Open window**, you selected the form using the [FORM SET INPUT](../commands/form-set-input) command, to which you passed the optional *\** parameter.

**Important:** This automatic sizing of the window will occur only if you made a prior call to [FORM SET INPUT](../commands/form-set-input) for the form to be displayed, and if you passed the \* optional parameter to [FORM SET INPUT](../commands/form-set-input).

The *type* parameter is optional. It represents the type of window you want to display. If the window type is negative, the window created is a floating window (if supported). If the type is not specified, type 1 is used by default. The following constants of the *Open Window* theme are supported:

| 定数                       | 説明                                                                                                                                                                                                                     |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alternate dialog box     | Can be a floating window                                                                                                                                                                                               |
| Has full screen mode Mac |                                                                                                                                                                                                                        |
| Modal dialog box         | Modal                                                                                                                                                                                                                  |
| Movable dialog box       | Modal, Can be a floating window                                                                                                                                                                                        |
| Palette window           |                                                                                                                                                                                                                        |
| Plain dialog box         | Modal, Can be a floating window                                                                                                                                                                                        |
| Plain fixed size window  |                                                                                                                                                                                                                        |
| Plain no zoom box window |                                                                                                                                                                                                                        |
| Plain window             |                                                                                                                                                                                                                        |
| Pop up window            |                                                                                                                                                                                                                        |
| Resizable sheet window   |                                                                                                                                                                                                                        |
| Round corner window      |                                                                                                                                                                                                                        |
| Sheet window             |                                                                                                                                                                                                                        |
| Texture appearance       | Option to be added to a window type on macOS only. Supported types: `Plain window`, `Plain no zoom box window`, `Plain fixed size window`, `Movable dialog box`, `Round corner window` |

For a description of window types, see [**Window types**](#window-types) below.

- The *title* parameter is the optional title for the window

If you pass an empty string ("") in *title,* you instruct 4D to use the Window Title set in the Design environment Form Properties window for the form to be displayed.

**Important:** The default form title will be set to the window only if you made a prior call to [FORM SET INPUT](../commands/form-set-input) for the form to be displayed, and if you passed the \* optional parameter to [FORM SET INPUT](../commands/form-set-input).

- The *controlMenuBox* parameter is the optional Control-menu box method for the window. If this parameter is specified, a Control-menu box (Windows) or a Close Box (Macintosh) is added to the window. When the user double-clicks the Control-menu box (Windows) or clicks on the Close Box (Macintosh), the method passed in *controlMenuBox* is called.

**Note:** You can also manage the closing of the window from within the form method of the form displayed in the window when an [`On Close Box` event](../../Events/onCloseBox.md) occurs.

If more than one window is open for a process, the last window opened is the active (frontmost) window for that process. Only information within the active window can be modified. Any other windows can be viewed. When the user types, the active window will always come to the front, if it is not already there.

Forms are displayed inside an open window. Text from the [MESSAGE](../commands/message) command also appears in the window.

### Window types {#window-types}

#### Alternate dialog box

- Can have a title: No
- Can have a close box or equivalent: No
- Can be resized: No
- Can be minimized/maximized or zoomed: No
- Suitable for scroll bars: No
- Usage: `DIALOG` or equivalent
- Modal, unless used as floating windows.

#### Has full screen mode Mac

The "full screen" option is available under macOS for document type windows. When this option is used, a "Full screen" button is displayed in the top right corner of the window. When the user clicks on this icon, the window switches to full screen and 4D automatically hides the main tool bar.
To use this option, you just add the `Has full screen mode Mac` constant to the *type* parameter. 例:

```4d
 $win:=Open form window([Interface];"User_Choice";Plain form window+Form has full screen mode Mac)
 DIALOG([Interface];"User_Choice")
```

> **Note:** Under Windows, this option has no effect.

#### Modal dialog box

- Can have a title: No
- Can have a close box or equivalent: No
- Can be resized: No
- Can be minimized/maximized or zoomed: No
- Suitable for scroll bars: No
- Usage: `DIALOG` or equivalent
- Modal

#### Movable dialog box

- Can have a title: Yes
- Can have a close box or equivalent: No
- Can be resized: No
- Can be minimized/maximized or zoomed: No
- Suitable for scroll bars: No
- Usage: `DIALOG` or equivalent
- Modal, but can be moved and can be used as floating windows

#### Palette window

This type of window allows you to generate floating windows which can be defined as resizable or not. Only the following options are supported:

| オプション         | Value to pass under Windows            | Value to pass under macOS              |
| ------------- | -------------------------------------- | -------------------------------------- |
| Not resizable | -(Palette window+2) | -Palette window                        |
| サイズ変更可        | -(Palette window+6) | -(Palette window+6) |

- Can have a title: Yes, if passed
- Can be resized: Yes, if the appropriate value is passed
- Usage: Floating windows with `DIALOG` or `DISPLAY SELECTION` (no data entry).
  Note: With this type of window, the set of values (constant+option) must always be passed as a negative value. Make sure that you pass, for example, -(Palette window+6) and not (-Palette window+6).

#### Plain dialog box {#plain-dialog-box}

- Can have a title: No
- Can have a close box or equivalent: No
- Can be resized: No
- Can be minimized/maximized or zoomed: No
- Suitable for scroll bars: No
- Usage: `DIALOG` or equivalent, splashscreens
- Modal, unless used as floating windows

#### Plain fixed size window

- Can have a title: Yes
- Can have a close box or equivalent: Yes
- Can be resized: No on Macintosh
- Can be minimized/maximized or zoomed: No
- Suitable for scroll bars: Yes and No
- Usage: data entry

#### Plain no zoom box window

- Can have a title: Yes
- Can have a close box or equivalent: Yes
- Can be resized: Yes
- Can be minimized/maximized or zoomed: No on Macintosh
- Suitable for scroll bars: Yes
- Usage: data entry with scrollbars, `DISPLAY SELECTION`, `MODIFY SELECTION`, etc.

#### Plain window

- Can have a title: Yes
- Can have a close box or equivalent: Yes
- Can be resized: Yes
- Can be minimized/maximized or zoomed: Yes
- Suitable for scroll bars: Yes
- Usage: data entry with scrollbars, `DISPLAY SELECTION`, `MODIFY SELECTION`, etc.

#### Pop up window

This type of window has the same basic characteristics as the [`Plain dialog box`](#plain-dialog-box) type windows and features the following advanced specifics:

- The window is automatically closed and the "cancel" event is passed to the window when:
  - a click occurs outside the window;
  - the background window or the MDI (Multiple Document Interface) window is moved;
  - the user hits the **Escape** key.
- This window is displayed in front of its "parent" window (it must not be used as the main window of the process). The background window is not disabled. However, it no longer receives events.
- You cannot resize or move the window using the mouse; however, when performing these actions programmatically, the redraw of background items is optimized.
- Usage: This type of window is primarily used to generate pop-up menus related to buttons like [toolbars type buttons](../../FormObjects/button_overview.md#toolbar).
- 制約:
  - It is not possible to display pop-up menu objects inside this type of window.
  - It does not permit the display of help tips under macOS.

#### Sheet window, Resizable sheet window

Sheet windows are specific to macOS. These windows “drop down” over the title bar of the main window using animation and are displayed above the main window. They are automatically centered in the main window. Their properties are comparable to those of the modal dialog boxes. They are generally used to perform an action directly relating to the action occurring in the primary window.

- You can only create a sheet window under macOS if the last open window is visible and a document type (form).
- The command opens a type 1 (Modal dialog box) window instead of a type 33 window or type 8 (Plain) window instead of type 34:
  - if the last opened window is not visible or is not a document type,
  - windows.
- Since a sheet window must be drawn above a form, its display is pushed back in the [`On load` event](../../Events/onLoad.md) of the first form loaded in the window.
- Usage: `DIALOG` or equivalent, under macOS (not standard under Windows).

#### Round corner window

- Can have a title: Yes
- Can have a close box or equivalent: Yes
- Can be resized: No on Macintosh
- Can be minimized/maximized or zoomed: No
- Suitable for scroll bars: No on Macintosh
- Usage: Rare (obsolete)

#### Texture appearance

Under macOS, it is possible to apply a texture appearance to windows. This type of look is found throughout the Macintosh interface. Under Windows, this property has no effect. To apply a texture appearance to a window created by the `Open window` command, you can just add the `Texture appearance` constant to the window type set in the *type* parameter. 例:

```4d
var $win:=Open window(10;80;-1;-1;Plain window+Texture appearance;"")
```

This look can be associated with the following types of windows:

- `Plain window`
- `Plain no zoom box window`
- `Plain fixed size window`
- `Movable dialog box`
- `Round corner window`

### Floating Windows

When you pass one of the [constants](#window-types) in *type*, you open a **regular window**. To open a **floating window**, pass a negative window type value to `Open window`. This feature is only supported by some types (see the constant table).

The main characteristic of floating windows is that they remain in the foreground even if the user clicks on another window of the process. Floating windows are generally used to display permanent information or tool bars.

### Modal windows

A modal window places the user in a state (or "mode") where they can only act within this window. As long as the modal window is displayed, the menu commands and other application windows are inaccessible. To close a modal window, the user must either validate it, cancel it, or choose one of the options it offers. Warning dialog boxes are a typical example of modal windows.

Windows of the types `Modal dialog box` and `Movable dialog` box are modal windows.

:::note

A modal window always stays in the foreground. As a consequence, when a modal window calls a non-modal window, this latter window is displayed in the background, even though it was called subsequent to the modal window. You should thus avoid this type of operation. On the other hand, when a modal window calls another modal window, this latter window will be displayed in the foreground.

:::

## 例題 1

The following project method opens a window centered in the main window (Windows) or in the main screen (Macintosh). Note that it can accept two, three, or four parameters:

```4d
  // OPEN CENTERED WINDOW project method
 #DECLARE($width : Integer; $height : Integer; $type : Integer; $title : Text)
 var $SW; $SH; $WW; $WH : Integer
 $SW:=Screen width\2
 $SH:=(Screen height\2)
 $WW:=$width\2
 $WH:=$height\2
 Case of
    :(Count parameters=2)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH)
    :(Count parameters=3)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH;$type)
    :(Count parameters=4)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH;$type;$title)
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

## 例題 2

The following example opens a floating window that has a Control-menu box (Windows) or Close Box (Macintosh) method. The window is opened in the upper right hand corner of the application window.

```4d
 var $myWindow : Integer
 $myWindow:=Open window(Screen width-149;33;Screen width-4;178;-Palette window;"";"CloseColorPalette")
 DIALOG([Dialogs];"Color Palette")
```

The CloseColorPalette method calls the [CANCEL](../commands/cancel) command:

```4d
 CANCEL
```

## 例題 3

The following example opens a window whose size and title come from the properties of the form displayed in the window:

```4d
  var $myWindow : Integer
 FORM SET INPUT([Customers];"Add Records";*)
 $myWindow:=Open window(10;80;-1;-1;Plain window;"")
 Repeat
    ADD RECORD([Customers])
 Until(OK=0)
```

**Reminder:** In order to have **Open window** automatically use the properties of the form, you must call [FORM SET INPUT](../commands/form-set-input) with the optional *\** parameter, and the properties of the form must have been set accordingly in the Design environment.

## 例題 4

This example illustrates the “delay” mechanism for displaying sheet windows under macOS:

```4d
  var $myWindow : Integer
 $myWindow:=Open window(10;10;400;400;Sheet window)
  //For the moment, the window is created but remains hidden
 DIALOG([Table];"dialForm")
  //The On Load event is generated then the sheet window is displayed; it "drops down" from the bottom
  //of the title bar
```

## 参照

[CLOSE WINDOW](../commands/close-window)  
[Open form window](../commands/open-form-window)

## プロパティ

|         |     |
| ------- | --- |
| コマンド番号  | 153 |
| スレッドセーフ | ×   |




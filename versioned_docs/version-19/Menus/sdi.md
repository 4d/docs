---
id: sdi
title: SDI mode on Windows 
---


On Windows, 4D developers can configure their 4D merged applications to work as SDI (Single-Document Interface) applications. In SDI applications, each window is independant from others and can have its own menu bar. SDI applications are opposed to MDI (Multiple Documents Interface) applications, where all windows are contained in and depend on the main window.

> The concept of sdi.mdI does not exist on macOS. This feature concerns Windows applications only and related options are ignored on macOS.

## SDI mode availability

The SDI mode is available in the following execution environment only:

- Windows
- Merged stand-alone or client 4D application

## Enabling the SDI mode

Enabling and using the SDI mode in your application require the following steps:

1. Check the **Use SDI mode on Windows** option in the "Interface" page of the Settings dialog box.
2. Build a merged application (standalone and/or client application).

Then, when executed it in a supported context (see above), the merged application will work automatically in SDI mode.

## Managing applications in SDI mode

Executing a 4D application in SDI mode does not require any specific implementation: existing menu bars are automatically moved in SDI windows themselves. However, you need to pay attention to specific principles that are listed below.

### Menus in Windows

In SDI mode, the process menu bar is automatically displayed in every document type window opened during the process life (this excludes, for example, floating palettes). When the process menu bar is not visible, menu item shortcuts remain active however.

Menus are added above windows without modifiying their contents size:

![](../assets/en/Menus/sdi1.png)

Windows can therefore be used in MDI or SDI modes without having to recalculate the position of objects.

#### About the splash screen

- If the **Splash screen** interface option was selected in the Settings, the splash window will contain any menus that would have been displayed in the MDI window. Note also that closing the splash screen window will result in exiting the application, just like in MDI mode.
- If the Splash screen option was not selected, menus will be displayed in opened windows only, depending on the programmer's choices.

### Automatic quit

When executed in MDI mode, a 4D application simply quits when the user closes the application window (MDI window). However, when executed in SDI mode, 4D applications do not have an application window and, on the other hand, closing the last opened window does not necessarily mean that the user wants the application to quit (faceless processes can be running, for example) -- although it could be what they want.

To handle this case, 4D applications executed in SDI mode include a mechanism to automatically quit (by calling the `QUIT 4D` command) when the following conditions are met:

- the user cannot interact anymore with the application
- there are no live user processes
- 4D processes or worker processes are waiting for an event
- the Web server is not started.

> When a menu with an associated *quit* standard action is called, the application quits and all windows are closed, wherever the menu was called from.

## Language

Although it is transparently handled by 4D, the SDI mode introduces small variations in the application interface management. Specificities in the 4D language are listed below.

|Command/feature|Specificity in SDI mode on Windows|
|---|---|
|`Open form window`|Options to support floating windows in SDI (`Controller form window`) and to remove the menu bar (`Form has no menu bar`)|
|`Menu bar height`|Returns the height in pixels of a single menu bar line even if the menu bar has been wrapped on two or more lines. Returns 0 when the command is called from a process without a form window|
|`SHOW MENU BAR` / `HIDE MENU BAR`|Applied to the current form window only (from where the code is executed)|
|`MAXIMIZE WINDOW`|The window is maximized to the screen size|
|`CONVERT COORDINATES`|`XY Screen` is the global coordinate system where the main screen is positioned at (0,0). Screens on its left side or on top of it can have negative coordinates and any screens on its right side or underneath it can have coordinates greater than the values returned by `Screen height` or `Screen width`.|
|`GET MOUSE`|Global coordinates are relative to the screen|
|`GET WINDOW RECT`|When -1 is passed in window parameter, the command returns 0;0;0;0|
|`On Drop database method`|Not supported|

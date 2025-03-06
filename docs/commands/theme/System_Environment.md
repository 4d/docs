---
id: System_Environment
title: System Environment
---
||
|---|
|[**Count screens**  : Integer](../../commands-legacy/count-screens)<br/>The Count screens command returns the number of screen monitors connected to your machine.|
|[**Current client authentication** {( *domain* ; *protocol* )} : Text](../../commands-legacy/current-client-authentication)<br/>The **Current client authentication** command asks the Windows Active Directory server to authenticate the current client and, if successful, returns the Windows login name for this client (session identifier).|
|[**Current machine**  : Text](../../commands-legacy/current-machine)<br/>The Current machine command returns the name of the machine as set in the network parameters of the operating system.|
|[**Current system user**  : Text](../../commands-legacy/current-system-user)<br/>The **Current system user** command returns the owner name of your machine, as set in the current user account on the machine.|
|[**Font file** ( *fontFamily* {; *fontStyle*} ) : any](../../commands-legacy/font-file)<br/>The **Font file** command returns an object describing the font file in your OS corresponding to the *fontFamily* and, optionally, *fontStyle* you passed in parameter.|
|[**FONT LIST** ( *fonts* {; listType | *} )](../../commands-legacy/font-list)<br/>The **FONT LIST** command populates the *fonts* text array with the names of scalable fonts available on your system.|
|[**FONT STYLE LIST** ( *fontFamily* ; *fontStyleList* ; *fontNameList* )](../../commands-legacy/font-style-list)<br/>The **FONT STYLE LIST** command returns the list of font styles and the list of complete font names supported by the font family defined in the *fontFamily* parameter.|
|[**GET SYSTEM FORMAT** ( *format* ; *value* )](../../commands-legacy/get-system-format)<br/>The **GET SYSTEM FORMAT** command returns the current value of several regional parameters defined in the operating system.|
|[**Is macOS** : Boolean](../../commands-legacy/is-macos)<br/>The **Is macOS** command returns True if the current operating system is macOS.|
|[**Is Windows** : Boolean](../../commands-legacy/is-windows)<br/>The **Is Windows** command returns True if the current operating system is Windows.|
|[**LOG EVENT** ( {*outputType* ;} *message* {; *importance*} )](../../commands-legacy/log-event)<br/>The **LOG EVENT** command sets up a customized system for recording internal events that occur during the use of your application.|
|[**Menu bar height**  : Integer](../../commands-legacy/menu-bar-height)<br/>Menu bar height returns the height of the menu bar, expressed in pixels.|
|[**Menu bar screen**  : Integer](../../commands-legacy/menu-bar-screen)<br/>Menu bar screen returns the number of the screen where the menu bar is located.|
|[**OPEN COLOR PICKER** {( *textOrBackground* )}](../../commands-legacy/open-color-picker)<br/>The **OPEN COLOR PICKER** command displays the system color picker dialog box.|
|[**OPEN FONT PICKER**](../../commands-legacy/open-font-picker)<br/>The **OPEN FONT PICKER** command displays the system font picker dialog box.|
|[**SCREEN COORDINATES** ( *left* ; *top* ; *right* ; *bottom* {; *screenID* {; *screenArea*}} )](../../commands-legacy/screen-coordinates)<br/>The SCREEN COORDINATES command returns in *left*, *top*, *right,* and *bottom* the global coordinates of the screen specified by *screenID*.|
|[**SCREEN DEPTH** ( *depth* ; *color* {; *screen*} )](../../commands-legacy/screen-depth)<br/>The SCREEN DEPTH command returns in *depth* and *color* information about the monitor.|
|[**Screen height** {( * )} : Integer](../../commands-legacy/screen-height)<br/>On Windows, Screen height returns the height of 4D application window (MDI window).|
|[**Screen width** {( * )} : Integer](../../commands-legacy/screen-width)<br/>On Windows, Screen width returns the width of 4D application window (MDI window).|
|[**Select RGB color** {( *defaultColor* {; *message*} )} : Integer](../../commands-legacy/select-rgb-color)<br/>The Select RGB color command displays the system color selection window and returns the RGB value of the color selected by the user.|
|[**SET RECENT FONTS** ( *fontsArray* )](../../commands-legacy/set-recent-fonts)<br/>The **SET RECENT FONTS** command modifies the list of fonts displayed in the context menu of the "recent fonts".|
|[**System folder** {( *type* )} : Text](../../commands-legacy/system-folder)<br/>The **System folder** command returns the pathname to a particular folder of the operating system or to the active Windows or macOS System folder itself.|
|[**System info**  : Object](../../commands-legacy/system-info)<br/>The **System info** command returns an object containg information about the operating system and the characteristics of the system hardware and software from the machine it's executed on.|
|[**Temporary folder**  : Text](../../commands-legacy/temporary-folder)<br/>The Temporary folder command returns the pathname to the current temporary folder set by your system.|

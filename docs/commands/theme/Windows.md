---
id: Windows
title: Windows
---
||
|---|
|[**CLOSE WINDOW** {( *window* )}](../../commands-legacy/close-window)<br/>**CLOSE WINDOW** closes the active window opened by the [Open window](open-window.md) or [Open form window](open-form-window.md) command in the current process.|
|[**CONVERT COORDINATES** ( *xCoord* ; *yCoord* ; *from* ; *to* )](../../commands-legacy/convert-coordinates)<br/>The **CONVERT COORDINATES** command converts the (x;y) coordinates of a point from one coordinate system to another.|
|[**Current form window**  : Integer](../../commands-legacy/current-form-window)<br/>The **Current form window** command returns the reference of the current form window.|
|[**DRAG WINDOW**](../../commands-legacy/drag-window)<br/>The DRAG WINDOW command lets users drag the window on which they clicked following the movements of the mouse.|
|[**ERASE WINDOW** {( *window* )}](../../commands-legacy/erase-window)<br/>The **ERASE WINDOW** command clears the contents of the window whose reference number is passed in *window*.|
|[**Find window** ( *left* ; *top* {; *windowPart*} ) : Integer](../../commands-legacy/find-window)<br/>The **Find window** command returns (if any) the reference number of the first window “touched” by the point whose coordinates passed in *left* and *top*.|
|[**Frontmost window** {( * )} : Integer](../../commands-legacy/frontmost-window)<br/>The Frontmost window command returns the window reference number of the frontmost window.|
|[**GET WINDOW RECT** ( *left* ; *top* ; *right* ; *bottom* {; *window*} )](../../commands-legacy/get-window-rect)<br/>The **GET WINDOW RECT** command returns the coordinates of the window whose reference number is passed in *window*.|
|[**Get window title** {( *window* )} : Text](../../commands-legacy/get-window-title)<br/>The **Get window title** command returns the title of the window whose reference number is passed in *window*.|
|[**HIDE TOOL BAR**](../../commands-legacy/hide-tool-bar)<br/>The **HIDE TOOL BAR** command handles the display of custom toolbars created by the [Open form window](open-form-window.md) command for the current process.|
|[**HIDE WINDOW** {( *window* )}](../../commands-legacy/hide-window)<br/>The **HIDE WINDOW** command hides the window whose number was passed in *window* or, if this parameter is omitted, the current process frontmost window.|
|[**Is window maximized** ( *window* ) : Boolean](../../commands-legacy/is-window-maximized)<br/>The **Is window maximized** command returns **True** if the window whose reference number is passed in *window* is currently maximized, and **False** otherwise.|
|[**Is window reduced** ( *window* ) : Boolean](../../commands-legacy/is-window-reduced)<br/>The **Is window reduced** command returns **True** if the window whose reference number is passed in *window* is currently reduced in the taskbar (Windows) or in the dock (macOS), and **False** otherwise.|
|[**MAXIMIZE WINDOW** {( *window* )}](../../commands-legacy/maximize-window)<br/>The MAXIMIZE WINDOW command triggers the expansion of the window whose reference number was passed in *window*.|
|[**MINIMIZE WINDOW** {( *window* )}](../../commands-legacy/minimize-window)<br/>The MINIMIZE WINDOW command sets the size of the window whose number is passed as *window* to the size it was before being maximized.|
|[**Next window** ( *window* ) : Integer](../../commands-legacy/next-window)<br/>The Next window command returns the window reference number of the window “behind” the window you pass in *window* (based on the front-to-back order of the windows).|
|[**Open form window** ( {*aTable* ;} *formName* {; *type* {; *hPos* {; *vPos* {; *}}}} ) : Integer](../../commands-legacy/open-form-window)<br/>The Open form window command opens a new window using the size and resizing properties of the form *formName*.|
|[**Open window** ( *left* ; *top* ; *right* ; *bottom* {; *type* {; *title* {; *controlMenuBox*}}} ) : Integer](../../commands-legacy/open-window)<br/>**Open window** opens a new window with the dimensions given by the first four parameters:

* *left* is the distance in pixels from the left edge of the application window to the left internal edge of the window.|
|[**REDRAW WINDOW** {( *window* )}](../../commands-legacy/redraw-window)<br/>The REDRAW WINDOW command provokes a graphical update of the window whose reference number you pass in *window*.|
|[**REDUCE RESTORE WINDOW** ( *window* )](../../commands-legacy/reduce-restore-window)<br/>The **REDUCE RESTORE WINDOW** command reduces/expands the window whose reference number was passed in *window* to/from the taskbar on Windows or the dock on macOS.|
|[**RESIZE FORM WINDOW** ( *width* ; *height* )](../../commands-legacy/resize-form-window)<br/>The **RESIZE FORM WINDOW** command lets you change the size of the current form window.|
|[**SET WINDOW DOCUMENT ICON** ( *winRef* )<br/>**SET WINDOW DOCUMENT ICON** ( *winRef* ; *image* )<br/>**SET WINDOW DOCUMENT ICON** ( *winRef* ; *file* )<br/>**SET WINDOW DOCUMENT ICON** (  *winRef* ; *image* ; *file* )](../../commands/set-window-document-icon)<br/>allows you to define an icon for windows in multi-window applications using either an *image* and/or *file* with the window reference *winRef*|
|[**SET WINDOW RECT** ( *left* ; *top* ; *right* ; *bottom* {; *window*}{; *} )](../../commands-legacy/set-window-rect)<br/>The SET WINDOW RECT command changes the global coordinates of the window whose reference number is passed in *window*.|
|[**SET WINDOW TITLE** ( *title* {; *window*} )](../../commands-legacy/set-window-title)<br/>The **SET WINDOW TITLE** command changes the title of the window whose reference number is passed in *window* to the text passed in *title* (max. length 80 characters).|
|[**SHOW TOOL BAR**](../../commands-legacy/show-tool-bar)<br/>The **SHOW TOOL BAR** command handles the display of custom toolbars created by the [Open form window](open-form-window.md) command for the current process.|
|[**SHOW WINDOW** {( *window* )}](../../commands-legacy/show-window)<br/>The **SHOW WINDOW** command displays the window whose number was passed in *window*.|
|[**Tool bar height**  : Integer](../../commands-legacy/tool-bar-height)<br/>The Tool bar height command returns the height of the current visible tool bar, expressed in pixels.|
|[**Window kind** {( *window* )} : Integer](../../commands-legacy/window-kind)<br/>The **Window kind** command returns the 4D type of the window whose reference number is passed in *window*.|
|[**WINDOW LIST** ( *windows* {; *} )](../../commands-legacy/window-list)<br/>The WINDOW LIST command populates the array *windows* with the window reference numbers of the windows currently open in all running processes (kernel or user processes).|
|[**Window process** {( *window* )} : Integer](../../commands-legacy/window-process)<br/>The Window process command returns the process number that runs the window whose reference number is passed in *window*.|

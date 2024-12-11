---
id: hide-tool-bar
title: HIDE TOOL BAR
slug: /commands/hide-tool-bar
displayed_sidebar: docs
---

<!--REF #_command_.HIDE TOOL BAR.Syntax-->**HIDE TOOL BAR**<!-- END REF-->
<!--REF #_command_.HIDE TOOL BAR.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.HIDE TOOL BAR.Summary-->The **HIDE TOOL BAR** command handles the display of custom toolbars created by the [Open form window](open-form-window.md) command for the current process.<!-- END REF-->

If a toolbar window has been created by the [Open form window](open-form-window.md) command with the Toolbar form window option, the command hides this window. If the toolbar window was already hidden or if no window of this type has been created, the command does nothing.

#### Example 

On OS X, you have defined a custom toolbar and a standard window that has the Has full screen mode Mac option. When a standard window is maximized by a user while the toolbar window is displayed, you do not want the toolbar to overlap the maximized window.

To prevent this, in the On Resize form event of the standard window, you need to detect when the window has entered full screen mode and then call **HIDE TOOL BAR**:

```4d
 Case of
    :(FORM Event=On Resize)
       GET WINDOW RECT($left;$top;$right;$bottom)
       If(Screen height=($bottom-$top))
          HIDE TOOL BAR
       Else
          SHOW TOOL BAR
       End if
 End case
```

#### See also 

[SHOW TOOL BAR](show-tool-bar.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 434 |
| Thread safe | &check; |
| Forbidden on the server ||



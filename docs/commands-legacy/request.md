---
id: request
title: Request
slug: /commands/request
displayed_sidebar: docs
---

<!--REF #_command_.Request.Syntax-->**Request** ( *message* {; *defaultResponse* {; *OKButtonTitle* {; *CancelButtonTitle*}}} )  : Text<!-- END REF-->
<!--REF #_command_.Request.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| message | Text | &#8594;  | Message to display in the request dialog box |
| defaultResponse | Text | &#8594;  | Default data for the enterable text area |
| OKButtonTitle | Text | &#8594;  | OK button title |
| CancelButtonTitle | Text | &#8594;  | Cancel button title |
| Function result | Text | &#8592; | Value entered by user |

<!-- END REF-->

#### Description 

<!--REF #_command_.Request.Summary-->The **Request** command displays a request dialog box composed of a message, a text input area, an **OK** button, and a **Cancel** Button.<!-- END REF-->

You pass the message to be displayed in the *message* parameter. If the message does not fit in the display area (usually around 50 characters, but it varies depending on the System and the font used), it can appear truncated.

By default, the title of the **OK** button is “OK” and that of the **Cancel** button is “Cancel.” To change the titles of these buttons, pass the new custom titles into the optional parameters OKButtonTitle and CancelButtonTitle. If necessary, the width of the buttons is resized toward the left, according to the width of the custom titles you pass.

The **OK** button is the default button. If you click the **OK** button or press **Enter** to accept the dialog box, the OK system variable is set to 1\. If you click the **Cancel** button to cancel the dialog box, the OK system variable is set to 0\. 

The user can enter text into the text input area. To specify a default value, pass the default text in the *defaultResponse* parameter. If the user clicks **OK**, **Request** returns the text. If the user clicks **Cancel**, **Request** returns an empty string (""). If the response should be a numeric or a date value, convert the string returned by **Request** to the proper type with the [Num](num.md) or [Date](date.md) functions.

**Tip:** Do not call the **Request** command from the section of a form or object method that handles the On Activate or On Deactivate form event; this will cause an endless loop.

**Tip:** If you need to get several pieces of information from the user, design a form and present it with [DIALOG](../commands/dialog.md), rather than presenting a succession of **Request** dialog boxes.

#### Example 1 

The line:

```4d
 $vsPrompt:=Request("Please enter your name:")
```

will display the request dialog box (on Windows) shown here:

![](../assets/en/commands/pict4225119.en.png)

#### Example 2 

The line:

```4d
 vsPrompt:=Request("Name of the Employee:";"";"Create Record";"Cancel")
 If(OK=1)
    ADD RECORD([Employees])
  //Note: vsPrompt is then copied into the field [Employees]Last name
  //during the On Load event in the form method
 End if
```

will display the request dialog box (on Windows) shown here:

![](../assets/en/commands/pict4225137.en.png)

#### Example 3 

The line:

```4d
 $vdPrompt:=Date(Request("Enter the new date:";String(Current date)))
```

will display the request dialog box (on Windows) shown here:

![](../assets/en/commands/pict4225146.en.png)

#### See also 

[ALERT](alert.md)  
[CONFIRM](confirm.md)  
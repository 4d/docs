---
id: screen-depth
title: SCREEN DEPTH
slug: /commands/screen-depth
displayed_sidebar: docs
---

<!--REF #_command_.SCREEN DEPTH.Syntax-->**SCREEN DEPTH** ( *depth* ; *color* {; *screen*} )<!-- END REF-->
<!--REF #_command_.SCREEN DEPTH.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| depth | Integer | &#x1F858; | Depth of the screen (number of colors = 2 ^ depth) |
| color | Integer | &#x1F858; | 1 = Color screen, 0 = Black and white or Gray scale |
| screen | Integer | &#x1F852; | Screen number, or main screen if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.SCREEN DEPTH.Summary-->The SCREEN DEPTH command returns in *depth* and *color* information about the monitor.<!-- END REF--> 

The depth of the screen is returned in *depth*. The depth of the screen is the exponent of the power of 2 expressing the number of colors displayed on your monitor. For example, if your monitor is set for 256 colors (2^8), the depth of your screen is 8.

The following predefined constants are provided by 4D:

| Constant                  | Type    | Value |
| ------------------------- | ------- | ----- |
| Black and white           | Longint | 0     |
| Four colors               | Longint | 2     |
| Millions of colors 24 bit | Longint | 24    |
| Millions of colors 32 bit | Longint | 32    |
| Sixteen colors            | Longint | 4     |
| Thousands of colors       | Longint | 16    |
| Two fifty six colors      | Longint | 8     |

If the monitor is set to display in color, *1* is returned in *color*. If the monitor is set to display in gray scale, *0* is returned in *color*. Note that this value is significant on the Macintosh platform.

The following predefined constants are provided by 4D:

| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| Is color      | Longint | 1     |
| Is gray scale | Longint | 0     |

The optional parameter *screen* specifies the monitor for which you want to get information. If you omit the *screen* parameter, the command returns the depth of the main screen.

#### Example 

Your application displays many color graphics. Somewhere in your database, you could write:

```4d
 SCREEN DEPTH($vlDepth;$vlColor)
 If($vlDepth<8)
    ALERT("The forms will look better if the monitor"+" was set to display 256 colors or more.")
 End if
```

#### See also 

[Count screens](count-screens.md)  
[SET SCREEN DEPTH](set-screen-depth.md)  
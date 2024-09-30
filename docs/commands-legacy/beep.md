---
id: beep
title: BEEP
slug: /commands/beep
displayed_sidebar: docs
---

<!--REF #_command_.BEEP.Syntax-->**BEEP**<!-- END REF-->
<!--REF #_command_.BEEP.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.BEEP.Summary-->The BEEP command causes the PC or Macintosh to generate a beep.<!-- END REF--> Your computer (on Windows or Macintosh) can emit a sound other than a beep, depending on the sound chosen in the Sound control panel.

**Warning:** Do not call BEEP from within a Web connection process, because the beep will be produced on the 4D Web server machine and not on the client Web browser machine.

#### Example 

In the following example, if no records are found by the query, a beep is emitted and an alert is displayed:

```4d
 QUERY([Customers];[Customers]Name=$vsNameToLookFor)
 If(Records in selection([Customers])=0)
    BEEP
    ALERT("There is no Customer with such a name.")
 End if
```

#### See also 

[PLAY](play.md)  
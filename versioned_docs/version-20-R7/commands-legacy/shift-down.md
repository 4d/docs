---
id: shift-down
title: Shift down
slug: /commands/shift-down
displayed_sidebar: docs
---

<!--REF #_command_.Shift down.Syntax-->**Shift down**  : Boolean<!-- END REF-->
<!--REF #_command_.Shift down.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | State of the Shift key |

<!-- END REF-->

#### Description 

<!--REF #_command_.Shift down.Summary-->Shift down returns TRUE if the Shift key is pressed.<!-- END REF-->

#### Example 

The following object method for the button *bAnyButton* performs different actions, depending on which modifier keys are pressed when the button is clicked:

```4d
  // bAnyButton Object Method
 Case of
  // Other multiple key combinations could be tested here
  // ...
    :(Shift down&Windows Ctrl down)
  // Shift and Windows Ctrl (or Macintosh Command) keys are pressed
       DO ACTION1
  // ...
    :(Shift down)
  // Only Shift key is pressed
       DO ACTION2
  // ...
    :(Windows Ctrl down)
  // Only Windows Ctrl (or Macintosh Command) key is pressed
       DO ACTION3
  // ...
  // Other individual keys could be tested here
  // ...
 End case
```

#### See also 

[Caps lock down](caps-lock-down.md)  
[Macintosh command down](macintosh-command-down.md)  
[Macintosh control down](macintosh-control-down.md)  
[Macintosh option down](macintosh-option-down.md)  
[Windows Alt down](windows-alt-down.md)  
[Windows Ctrl down](windows-ctrl-down.md)  
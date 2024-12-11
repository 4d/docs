---
id: level
title: Level
slug: /commands/level
displayed_sidebar: docs
---

<!--REF #_command_.Level.Syntax-->**Level**  : Integer<!-- END REF-->
<!--REF #_command_.Level.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Current break or header level |

<!-- END REF-->

#### Description 

<!--REF #_command_.Level.Summary-->Level is used to determine the current header or break level.<!-- END REF--> It returns the level number during the On Header and On Printing Break events.

Level 0 is the last level to be printed and is appropriate for printing a grand total. Level returns 1 when 4D prints a break on the first sorted field, 2 when 4D prints a break on the second sorted field, and so on.

#### Example 

This example is a template for a form method. It shows each of the possible events that can occur while a summary report uses a form as an output form. Level is called when a header or a break is printed:

```4d
  // Method of a form being used as output form for a summary report
 $vpFormTable:=Current form table
 Case of
  // ...
    :(FORM Event=On Header)
  // A header area is about to be printed
       Case of
          :(Before selection($vpFormTable->))
  // Code for the first break header goes here
          :(Level=1)
  // Code for a break header level 1 goes here
          :(Level=2)
  // Code for a break header level 2 goes here
  // ...
       End case
    :(FORM Event=On Printing Detail)
  // A record is about to be printed
  // Code for each record goes here
    :(FORM Event=On Printing Break)
  // A break area is about to be printed
       Case of
          :(Level=0)
  // Code for a break level 0 goes here
          :(Level=1)
  // Code for a break level 1 goes here
  // ...
       End case
    :(FORM Event=On Printing Footer)
       If(End selection($vpFormTable->))
  // Code for the last footer goes here
       Else
  // Code for a footer goes here
       End if
 End case
```

#### See also 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Form event code](../commands/form-event-code.md)  
[PRINT SELECTION](print-selection.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 101 |
| Thread safe | &check; |
| Forbidden on the server ||



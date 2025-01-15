---
id: is-editing-text
title: Is editing text
slug: /commands/is-editing-text
displayed_sidebar: docs
---

<!--REF #_command_.Is editing text.Syntax-->**Is editing text**  : Boolean<!-- END REF-->
<!--REF #_command_.Is editing text.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True if text is being entered, False otherwise |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is editing text.Summary-->The **Is editing text** command returns **True** if the user is entering values in an input form object, and **False** in all other cases.<!-- END REF--> 

This command is mainly to be used to distinguish, within code triggered by the On Before Keystroke form event, between actual user data entry and use of shortcut keys. For example, you might want to execute a different code whether the user is pressing a key to enter text in a cell, or to scroll the listbox.

The **Is editing text** command can only be used with the following form objects:

* input
* listbox (enterable and non-enterable)
* combo box

With other objects, the command always returns **False**. In particular, it cannot be used with 4D Write Pro and 4D View Pro areas.

#### Example 

You want to allow the user to select a row beginning with the typed letter or number in an enterable listbox:

```4d
 Case of
    :(FORM Event.code=On Before Keystroke) //a key is pressed
       If(Is editing text) //text is entered
  // you disallow some characters
          If(Keystroke="+")|(Keystroke="-")|(Keystroke="/")|(Keystroke="*")
             FILTER KEYSTROKE("")
          End if
       Else
  //nothing is beeing entered, scrolling shortcut feature
          $charCode:=Keystroke
          $char:=Uppercase($charCode) // removes accents
          Case of
             :((($char>="A")&($char<="Z"))|(($char>="0")&($char<="9")))
                ... //Select a row beginning with the typed letter or number
             :($charCode>=Left arrow key)&($charCode<=Down arrow key) // left/right/up/down arrows
                FILTER KEYSTROKE("") // disable actions of arrows
          End case
       End if
 End case
```

#### See also 

[FILTER KEYSTROKE](filter-keystroke.md)  
[Get edited text](get-edited-text.md)  
[Type ahead made easy (blog post)](https://blog.4d.com/type-ahead-made-easy/)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1744 |
| Thread safe | &cross; |



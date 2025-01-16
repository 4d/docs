---
id: get-edited-text
title: Get edited text
slug: /commands/get-edited-text
displayed_sidebar: docs
---

<!--REF #_command_.Get edited text.Syntax-->**Get edited text**  : Text<!-- END REF-->
<!--REF #_command_.Get edited text.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Text being entered |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get edited text.Summary-->The **Get edited text** command is mainly to be used with the On After Edit form event to retrieve the text as it is being entered.<!-- END REF--> It can also be used with the On Before Keystroke and On After Keystroke form events. For more information about those form events, please refer to the description of the command [Form event code](../commands/form-event-code.md).

The combination of this command with On Before Keystroke and On After Keystroke form events works as follows:

* As soon as a character is typed on the keyboard, the On Before Keystroke event is generated. In this case, the **Get edited text** function returns the contents of the area before the last keystroke occurred. For example, if the area contains “PA” and the user types an “R”, **Get edited text** returns “PA” in the On Before Keystroke event. If the area is empty initially, **Get edited text** returns an empty string.
* Next, the On After Keystroke form event is generated. In this case, **Get edited text** returns the contents of the area including the last character entered on the keyboard. For example, when the area contains “PA” and the user types an “R”, **Get edited text** returns “PAR” in the On After Keystroke event.

Note that the On After Keystroke event can generally be replaced by the On After Edit event, which supports more entry methods (such as IME).

These events are only generated in the object methods concerned.

When used in a context other than text entry in a form object, this function returns an empty string.

#### Example 1 

The following method automatically puts the characters being entered in capitals:

```4d
 If(Form event code=On After Edit)
    [Trips]Agencies:=Uppercase(Get edited text)
 End if
```

#### Example 2 

Here is an example of how to process on the fly characters entered in a text field. The idea consists of placing in another text field (called “Words”) all the words of the sentence being entered. To do so, write the following code in the object method of the field: 

```4d
 If(Form event code=On After Keystroke)
    $RealTimeEntry:=Get edited text
    PLATFORM PROPERTIES($platform)
    If($platform#3) // Mac OS
       Repeat
          $DecomposedSentence:=Replace string($RealTimeEntry;Char(32);Char(13))
       Until(Position(" ";$DecomposedSentence)=0)
    Else // Windows
       Repeat
          $DecomposedSentence:=Replace string($RealTimeEntry;Char(32);Char(13)+Char(10))
       Until(Position(" ";$DecomposedSentence)=0)
    End if
    [Example]Words:=$DecomposedSentence
 End if
```

**Note:** This example is not comprehensive because we have assumed that words are separated uniquely by spaces (Char (32)). For a complete solution you will need to add other filters to extract all the words (delimited by commas, semi-colons, apostrophes, etc.).

#### See also 

[Form event code](../commands/form-event-code.md)  
[Is editing text](is-editing-text.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 655 |
| Thread safe | &cross; |



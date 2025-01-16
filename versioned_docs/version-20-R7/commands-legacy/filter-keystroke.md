---
id: filter-keystroke
title: FILTER KEYSTROKE
slug: /commands/filter-keystroke
displayed_sidebar: docs
---

<!--REF #_command_.FILTER KEYSTROKE.Syntax-->**FILTER KEYSTROKE** ( *filteredChar* )<!-- END REF-->
<!--REF #_command_.FILTER KEYSTROKE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| filteredChar | Text | &#8594;  | Filtered keystroke character or Empty string to cancel the keystroke |

<!-- END REF-->

#### Description 

<!--REF #_command_.FILTER KEYSTROKE.Summary-->**FILTER KEYSTROKE** enables you to replace the character entered by the user into a field or an enterable area with the first character of the string *filteredChar* you pass.<!-- END REF-->

If you pass an empty string, the keystroke is cancelled and ignored.

Usually, you will call **FILTER KEYSTROKE** within a form or object method while handling an On Before Keystroke form event. To detect keystroke events, use the command [Form event code](../commands/form-event-code.md). To obtain the actual keystroke, use the commands [Keystroke](keystroke.md) or [Get edited text](get-edited-text.md).

**IMPORTANT NOTE:** The command **FILTER KEYSTROKE** allows you to cancel or replace the character entered by the user with another character. On the other hand, if you want to insert more than one character for a specific keystroke, remember that the text you see on the screen is NOT YET the value of the data source field or variable for the area being edited. The data source field or variable is assigned the entered value after the data entry for the area is validated. It is therefore up to you to “shadow” the data entry into a variable and then to work with this shadow value and reassign the enterable area (see the example in this section). You can also use the [Get edited text](get-edited-text.md) command.

You will use the command **FILTER KEYSTROKE** for:

* Filtering characters in a customized way
* Filtering data entry in a way that you cannot produce using data entry filters
* Implement dynamic lookup or autocomplete areas

**WARNING:** If you call the command [Keystroke](keystroke.md) after calling **FILTER KEYSTROKE**, the character you pass to this command is returned instead of the character actually entered.

#### Example 1 

Using the following code:

```4d
  //myObject enterable area object method
 Case of
    :(FORM Event=On Load)
       myObject:=""
    :(FORM Event=On Before Keystroke)
       If(Position(Keystroke;"0123456789")>0)
          FILTER KEYSTROKE("*")
       End if
 End case
```

All the digits entered in the area *myObject* are transformed into star characters.

#### Example 2 

This code implements the behavior of a Password enterable area in which all the entered characters are replaced (on the screen) by random characters:

```4d
  //vsPassword enterable area object method
 Case of
    :(FORM Event=On Load)
       vsPassword:=""
       vsActualPassword:=""
    :(FORM Event=On Before Keystroke)
       Handle keystroke(->vsPassword;->vsActualPassword)
       If(Position(Keystroke;Char(Backspace)+Char(Left arrow key)+Char(Right arrow key)+Char(Up arrow key)+Char(Down arrow key))=0)
          FILTER KEYSTROKE(Char(65+(Random%26)))
       End if
 End case
```

After the data entry is validated, you retrieve the actual password entered by the user in the variable *vsActualPassword*. Note: The method Handle keystroke is listed in the Example section for the command Keystroke. 

#### Example 3 

In your application, you have some text areas into which you can enter a few sentences. Your application also includes a dictionary table of terms commonly used throughout your database. While editing your text areas, you would like to be able to quickly retrieve and insert dictionary entries based on the selected characters in a text area. You have two ways to do this:  
 \- Provide some buttons with associated keys, or  
 \- Intercept special keystrokes during the editing of the text area

This example implements the second solution, based on the Help key.

As explained above, during the editing of the text area, the data source for this area will be assigned the entered value after you validate the data entry. In order to retrieve and insert dictionary entries into the text area while this area is being edited, you therefore need to shadow the data entry. You pass pointers to the enterable area and the shadow variable as the first two parameters, and you pass a string of the “forbidden” characters as the third parameter. No matter how the keystroke will be treated, the method returns the original keystroke. The “forbidden” characters are those that you do not want to be inserted into the enterable area and you want to treat as special characters. 

```4d
  // Shadow keystroke project method
  // Shadow keystroke ( Pointer ; Pointer ; String ) -> String
  // Shadow keystroke ( -> srcArea ; -> curValue ; Filter ) -> Old keystroke
#DECLARE ($srcArea : Pointer ; $curVal : Pointer ; $filter : Text) -> $old : Text
 var $vtNewValue : Text
  // Return the original keystroke
 $old:=Keystroke
  // Get the text selection range within the enterable area
 GET HIGHLIGHT($srcArea->;$vlStart;$vlEnd)
  // Start working with the current value
 $vtNewValue:=$curVal->
  // Depending on the key pressed or the character entered,
  // Perform the appropriate actions
 Case of
  // The Backspace (Delete) key has been pressed
    :(Character code($old)=Backspace)
  // Delete the selected characters or the character at the left of the text cursor
       $vtNewValue:=Delete text($vtNewValue;$vlStart;$vlEnd)
  // An Arrow key has been pressed
  // Do nothing, but accept the keystroke
    :(Character code($old)=Left arrow key)
    :(Character code($old)=Right arrow key)
    :(Character code($old)=Up arrow key)
    :(Character code($old)=Down arrow key)
 
  // An acceptable character has been entered
    :(Position($old;$filter)=0)
       $vtNewValue:=Insert text($vtNewValue;$vlStart;$vlEnd;$0)
    Else
  // The character is not accepted
       FILTER KEYSTROKE("")
 End case
  // Return the value for the next keystroke handling
 $curVal->:=$vtNewValue
```

This method uses the two following submethods:

```4d
  // Delete text project method
  // Delete text ( String ; Long ; Long ) -> String
  // Delete text ( -> Text ; SelStart ; SelEnd ) -> New text
#DECLARE ($src : Text ; $start : Integer ; $end : Integer) -> $new : Text 
 $new:=Substring($src;1;$start-1-Num($start=$end))+Substring($src;$end)
```
```4d 
  // Insert text project method
  // Insert text ( String ; Long ; Long ; String ) -> String
  // Insert text ( -> srcText ; SelStart ; SelEnd ; Text to insert ) -> New text
#DECLARE ($src : Text ; $start : Integer ; $end : Integer ; $toInsert : Text) -> $new : Text 
 $new:=$src
 If($start # $end)
    $new:=Substring($new;1;$start-1)+$toInsert+Substring($new;$end)
 Else
    Case of
       :($start<=1)
          $new:=$toInsert+$new
       :($start>Length($new))
          $new:=$new+$toInsert
       Else
          $new:=Substring($new;1;$start-1)+$toInsert+Substring($new;$start)
    End case
 End if
```

After you have added these project methods to your project, you can use them in this way:

```4d
  // vsDescription enterable area object method
 Case of
    :(FORM Event=On Load)
       vsDescription:=""
       vsShadowDescription:=""
  // Establish the list of the “forbidden” characters to be treated as special keys
  // ( here, in this example, only the Help Key is filtered)
       vsSpecialKeys:=Char(HelpKey)
    :(FORM Event=On Before Keystroke)
       $vsKey:=Shadow keystroke(->vsDescription;->vsShadowDescription;vsSpecialKeys)
       Case of
          :(Character code($vsKey)=Help key)
  // Do something when the Help key is pressed
  // Here, in this example, a Dictionary entry must be searched and inserted
             LOOKUP DICTIONARY(->vsDescription;->vsShadowDescription)
       End case
 End case
```

The LOOKUP DICTIONARY project method is listed below. Its purpose is to use the shadow variable for reassigning the enterable area being edited:

```4d
  // LOOKUP DICTIONARY project method
  // LOOKUP DICTIONARY ( Pointer ; Pointer )
  // LOOKUP DICTIONARY ( -> Enterable Area ; ->ShadowVariable )
 
#DECLARE ($area : Pointer ; $shadow : Pointer)
 var $vlStart;$vlEnd : Integer
 
  // Get the text selection range within the enterable area
 GET HIGHLIGHT($area->;$vlStart;$vlEnd)
  // Get the selected text or the word on the left of the text cursor
 $vtHighlightedText:=Get highlighted text($shadow->;$vlStart;$vlEnd)
  // Is there something to look for?
 If($vtHighlightedText#"")
  // If the text selection was the text cursor,
  // the selection now starts at the word preceeding the text cursor
    If($vlStart=$vlEnd)
       $vlStart:=$vlStart-Length($vtHighlightedText)
    End if
  // Look for the first available dictionary entry
    QUERY([Dictionary];[Dictionary]Entry=$vtHighlightedText+"@")
  // Is there one?
    If(Records in selection([Dictionary])>0)
  // If so, insert it in the shadow text
       $shadow->:=Insert text($shadow->;$vlStart;$vlEnd;[Dictionary]Entry)
  // Copy the shadow text to the enterable being edited
       $area->:=$shadow->
  // Set the selection just after the insert dictionary entry
       $vlEnd:=$vlStart+Length([Dictionary]Entry)
       HIGHLIGHT TEXT(vsComments;$vlEnd;$vlEnd)
    Else
  // There is no corresponding entry in the Dictionary
       BEEP
    End if
 Else
  // There is no highlighted text
    BEEP
 End if
```

The Get highlighted text method is listed here:

```4d
  // Get highlighted text project method
  // Get highlighted text ( String ; Long ; Long ) -> String
  // Get highlighted text ( Text ; SelStart ; SelEnd ) -> highlighted text
#DECLARE ($text : Text ; $start : Integer ; $end : Integer) -> $highlight : Text
 If($start<$end)
    $highlight:=Substring($text;$start;$end-$start)
 Else
    $highlight:=""
    $start:=$start-1
    Repeat
       If($start>0)
          If(Position($text[[$start]];"  ,.!?:;()-_–—")=0)
             $highlight:=$text[[$start]]+$highlight
             $start:=$start-1
          Else
             $start:=0
          End if
       End if
    Until($start=0)
 End if
```

#### See also 

[Form event code](../commands/form-event-code.md)  
[Get edited text](get-edited-text.md)  
[Is editing text](is-editing-text.md)  
[Keystroke](keystroke.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 389 |
| Thread safe | &cross; |



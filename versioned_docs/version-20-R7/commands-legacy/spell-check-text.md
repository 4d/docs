---
id: spell-check-text
title: SPELL CHECK TEXT
slug: /commands/spell-check-text
displayed_sidebar: docs
---

<!--REF #_command_.SPELL CHECK TEXT.Syntax-->**SPELL CHECK TEXT** ( *text* ; *errPos* ; *errLength* ; *checkPos* ; *arrSuggest* )<!-- END REF-->
<!--REF #_command_.SPELL CHECK TEXT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| text | Text | &#8594;  | Text to check |
| errPos | Integer | &#8592; | Position of first character of unknown word |
| errLength | Integer | &#8592; | Length of unknown word |
| checkPos | Integer | &#8594;  | Start position for check |
| arrSuggest | Text array | &#8592; | List of suggestions |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SPELL CHECK TEXT.Summary-->The **SPELL CHECK TEXT** command checks the contents of the *text* parameter beginning from the *checkPos* character and returns the position of the first unknown word it finds (if any).<!-- END REF-->

This command returns the position of the first character of this unknown word in *errPos* and its length in *errLength*. The *arrSuggest* array receives the correction suggestion(s) proposed by the spell checker.

If the check starts without error and an unknown word is found, the OK system variable is set to 0\. If an initialization error occurs during the check, or if no unknown words are found, OK is set to 1.

**Note OS X:** Under OS X, when the native spell checker is enabled, this command does not support grammar correction. 

#### Example 

We want to count the number of possible errors in a text:

```4d
 $pos:=1
 $errCount:=0
 ARRAY TEXT($tErrors;0)
 ARRAY TEXT($tSuggestions;0)
 Repeat
    SPELL CHECK TEXT($myText;$errPos;$errLength;$pos;$tSuggestions)
    If(OK=0)
       $errCount:=$errCount+1 // count any errors
       $errorWord:=Substring($myText;$errPos;$errLength)
       APPEND TO ARRAY($tErrors;$errorWord) // array of errors
       $pos:=$errPos+$errLength  //continue check
    End if
 Until(OK=1)
  // In the end $errCount=Size of array($tErrors)
```

#### See also 

[SPELL ADD TO USER DICTIONARY](spell-add-to-user-dictionary.md)  
[SPELL CHECKING](spell-checking.md)  
---
id: substring
title: Substring
slug: /commands/substring
displayed_sidebar: docs
---

<!--REF #_command_.Substring.Syntax-->**Substring** ( *source* ; *firstChar* {; *numChars*} ) : Text<!-- END REF-->
<!--REF #_command_.Substring.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| source | Text | &#8594;  | String from which to get substring |
| firstChar | Integer | &#8594;  | Position of first character |
| numChars | Integer | &#8594;  | Number of characters to get |
| Function result | Text | &#8592; | Substring of source |

<!-- END REF-->

#### Description 

<!--REF #_command_.Substring.Summary-->The **Substring** command returns the portion of *source* defined by *firstChar* and *numChars*.<!-- END REF--> 

The *firstChar* parameter points to the first character in the string to return, and *numChars* specifies how many characters to return.

If *firstChar* plus *numChars* is greater than the number of characters in the string, or if *numChars* is not specified, **Substring** returns the last character(s) in the string, starting with the character specified by *firstChar*. If *firstChar* is greater than the number of characters in the string, **Substring** returns an empty string ("").

**Warning:** When you use this command in a multi-style context, you need to convert any Window end-of-line characters ('\\r\\n') into single ('\\r') characters in order for processing to be valid. This is due to the mechanism which normalizes 4D line endings to ensure multi-platform compatibility for texts. For more information, refer to *Automatic normalization of line endings*. 

#### Example 1 

This example illustrates the use of Substring. The results, described in the comments, are assigned to the variable *vsResult*.

```4d
 vsResult:=Substring("08/04/62";4;2) // vsResult gets "04"
 vsResult:=Substring("Emergency";1;6) // vsResult gets "Emerge"
 vsResult:=Substring(var;2) // vsResult gets all characters except ` the first
```

#### Example 2 

The following project method appends the paragraphs found in the text (passed as first parameter) to a string or text array (the pointer of which is passed as second parameter):

```4d
  // EXTRACT PARAGRAPHS
  // EXTRACT PARAGRAPHS ( text ; Pointer )
  // EXTRACT PARAGRAPHS ( Text to parse ; -> Array of ¶s )
 
 var $1 : Text
 var $2 : Pointer
 
 $vlElem:=Size of array($2->)
 Repeat
    $vlElem:=$vlElem+1
    INSERT IN ARRAY($2->;$vlElem)
    $vlPos:=Position(Char(Carriage return);$1)
    If($vlPos>0)
       $2->{$vlElem}:=Substring($1;1;$vlPos-1)
       $1:=Substring($1;$vlPos+1)
    Else
       $2->{$vlElem}:=$1
    End if
 Until($1="")
```

#### See also 

[Position](position.md)  
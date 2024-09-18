---
id: get-highlight
title: GET HIGHLIGHT
slug: /commands-legacy/get-highlight
displayed_sidebar: docs
---

<!--REF #_command_.GET HIGHLIGHT.Syntax-->**GET HIGHLIGHT** ( {* ;} *object* ; *startSel* ; *endSel* )<!-- END REF-->
<!--REF #_command_.GET HIGHLIGHT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &rarr; | If specified, object is an object name (string) 
If omitted, object is a field or variable |
| object | Field, Variable, Form object | &rarr; | Object name (if * is specified) or 
Field or variable (if * is omitted) |
| startSel | Longint | <&rarr; | Current text selection starting position |
| endSel | Longint | <&rarr; | Current text selection ending position |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET HIGHLIGHT.Summary-->The GET HIGHLIGHT command is used to determine what text is currently highlighted in *object*.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass the *\** parameter, you indicate that the *object* parameter is a field or variable. In this case, you pass the field or variable reference (form fields or variables only) instead of a string.

**Note:** This command cannot be used with fields in the List form of a subform.

Text can be highlighted by the user or by the [HIGHLIGHT TEXT](highlight-text.md) command.

The parameter *startSel* returns the position of the first highlighted character. 

The parameter *endSel* returns the position of the last highlighted character plus one. 

If *startSel* and *endSel* are returned equal, the insertion point is positioned before the character specified by *startSel*. The user has not selected any text, and no characters are highlighted.

If the object designated by the *object* parameter is not found in the form, the command returns -1 in *startSel* and -2 in *endSel*. 

#### Example 1 

The following example gets the highlighted selection from the field called *\[Products\]Comments*: 

```4d
 GET HIGHLIGHT([Products]Comments;vFirst;vLast)
 If(vFirst<vlast)     alert("the="" selected="" text="" is:="" "+substring([products]comments;vfirst;vlast-vfirst))=""  end="" if<="" pre=""></vlast)>
```

#### Example 2 

See example for the [FILTER KEYSTROKE](filter-keystroke.md) command.

#### Example 3 

Modification of highlighted text style:

```4d
 GET HIGHLIGHT(*;"myText";$startsel,$endsel)
 ST SET ATTRIBUTES(*;"myText";$startsel,$endsel;Attribute underline style;1;Attribute bold style;1)
```

#### See also 

[FILTER KEYSTROKE](filter-keystroke.md)  
[HIGHLIGHT TEXT](highlight-text.md)  
[Keystroke](keystroke.md)  
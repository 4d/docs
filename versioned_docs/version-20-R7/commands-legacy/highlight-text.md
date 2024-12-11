---
id: highlight-text
title: HIGHLIGHT TEXT
slug: /commands/highlight-text
displayed_sidebar: docs
---

<!--REF #_command_.HIGHLIGHT TEXT.Syntax-->**HIGHLIGHT TEXT** ( {* ;} *object* ; *startSel* ; *endSel* )<!-- END REF-->
<!--REF #_command_.HIGHLIGHT TEXT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) <br/>If omitted, object is a field or variable |
| object | Field, Variable, any | &#8594;  | Object name (if * is specified) or Enterable field or variable (if * is omitted) |
| startSel | Integer | &#8594;  | New text selection starting position |
| endSel | Integer | &#8594;  | New text selection ending position |

<!-- END REF-->

#### Description 

<!--REF #_command_.HIGHLIGHT TEXT.Summary-->The HIGHLIGHT TEXT command highlights a section of the text in *object*.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass the *\** parameter, you indicate that the *object* parameter is a field or variable. In this case, you pass the field or variable reference (form fields or variables only) instead of a string.

If *object* is not the object currently being edited, it gets the focus.

**Note:** This command cannot be used with fields in a subform.  
  
*startSel* is the first character position to be highlighted, and *lastSel* is the last character plus one to be highlighted. If *startSel* and *lastSel* are equal, the insertion point is positioned before the character specified by *startSel*, and no characters are highlighted.

If *lastSel* is greater than the number of characters in *object*, then all characters between *startSel* and the end of the text are highlighted.

#### Example 1 

The following example selects all the characters of the enterable field *\[Products\]Comments*:

```4d
 HIGHLIGHT TEXT([Products]Comments;1;Length([Products]Comments)+1)
```

#### Example 2 

The following example moves the insertion point to the beginning of the enterable field *\[Products\]Comments*:

```4d
 HIGHLIGHT TEXT([Products]Comments;1;1)
```

#### Example 3 

The following example moves the insertion point to the end of the enterable field *\[Products\]Comments*:

```4d
 $vLen:=Length([Products]Comments)+1
 HIGHLIGHT TEXT([Products]Comments;$vLen;$vLen)
```

#### Example 4 

See example for the [FILTER KEYSTROKE](filter-keystroke.md) command.

#### See also 

[GET HIGHLIGHT](get-highlight.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 210 |
| Thread safe | &check; |
| Forbidden on the server ||



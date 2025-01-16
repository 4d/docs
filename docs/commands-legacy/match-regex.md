---
id: match-regex
title: Match regex
slug: /commands/match-regex
displayed_sidebar: docs
---

<!--REF #_command_.Match regex.Syntax-->**Match regex** ( *pattern* ; *aString* ; *start* {; pos_found ; length_found}{; *} ) -> Function result <br/>
**Match regex** ( *pattern* ; *aString* ) -> Function result<!-- END REF-->
<!--REF #_command_.Match regex.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| pattern | Text | &#8594;  | Regular expression |
| aString | Text | &#8594;  | String in which search will be done |
| start | Integer | &#8594;  | Position in aString where search will start |
| pos_found | Array integer, Integer | &#8592; | Position of occurrence |
| length_found | Array integer, Integer | &#8592; | Length of occurrence |
| * | Operator | &#8594;  | If passed: only searches at position indicated |
| Function result | Boolean | &#8592; | True = search has found an occurrence; Otherwise, False. |
| Match regex ( pattern ; aString ) -> Function result |
| Parameter | Type | Description |
| pattern | Text | &#8594;  | Regular expression (complete equality) |
| aString | Text | &#8594;  | String in which search will be done |
| Function result | Boolean | &#8592; | True = search has found an occurrence; Otherwise, False. |

<!-- END REF-->

#### Description 

<!--REF #_command_.Match regex.Summary-->The **Match regex** command checks the conformity of a character string with respect to a set of synthesized rules by means of a meta-language called “regular expression” or “rational expression.<!-- END REF-->” The regex abbreviation is commonly used to indicate these types of notations.

Pass the regular expression to search for in *pattern*. This consists of a set of characters used for describing a character string, using special characters.

Pass the string where you want to search for the regular expression in *aString*.

In *start*, pass the position at which to start the search in *aString*.

If *pos\_found* and *length\_found* are variables, the command returns the position and length of the occurrence in these variables. If you pass arrays, the command returns the position and length of the occurrence in the element zero of the arrays and the positions and lengths of the groups captured by the regular expression in the following elements.

The optional *\** parameter indicates, when it is passed, that the search must be carried out at the position specified by *start* without searching any further in the case of failure.

The command returns **True** if the search has found an occurrence.

For more information about regex, refer to the following address:  
<http://en.wikipedia.org/wiki/Regular%5Fexpression>

For more information about the syntax of the regular expression passed in the *pattern* parameter, refer to the following address:  
*https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expressions*

#### Example 1 

Search for complete equality (simple syntax):  
*vfound:=Match regex(pattern;mytext)*  

```4d
 QUERY BY FORMULA([Employees];Match regex(".*smith.*";[Employees]name))
```

#### Example 2 

Search in text by position:  
*vfound:=Match regex( pattern;mytext; start; pos\_found; length\_found)*  
Example to display all the $1 tags:   

```4d
 $start:=1
 Repeat
    vfound:=Match regex("<.*>";$1;$start;pos_found;length_found)
    If(vfound)
       ALERT(Substring($1;pos_found;length_found))
       $start:=pos_found+length_found
    End if
 Until(Not(vfound))
```

#### Example 3 

Search with support of “capture groups” via parentheses. ( ) are used to specify groups in the regexes:  
*vfound:=Match regex( pattern;mytext; start; pos\_found\_array; length\_found\_array)*  

```4d
 ARRAY LONGINT(pos_found_array;0)
 ARRAY LONGINT(length_found_array;0)
 vfound:=Match regex("(.*)stuff(.*)";$1;1;pos_found_array;length_found_array)
 If(vfound)
    $group1:=Substring($1;pos_found_array{1};length_found_array{1})
    $group2:=Substring($1;pos_found_array{2};length_found_array{2})
 End if
```

#### Example 4 

Search limiting the comparison of the pattern to the position indicated:  
Add a star to the end of one of the two previous syntaxes. 

```4d
 vfound:=Match regex("a.b";"---a-b---";1;$pos_found;$length_found)
  //returns True
 vfound:=Match regex("a.b";"---a-b---";1;$pos_found;$length_found;*)
  //returns False
 vfound:=Match regex("a.b";"---a-b---";4;$pos_found;$length_found;*)
  //returns True
```

**Note:** The positions and lengths returned are only meaningful in Unicode mode or if the text being worked with is of the 7-bit ASCII type.

#### Error management 

In the event of an error, the command generates an error that you can intercept via a method installed by the [ON ERR CALL](on-err-call.md) command.


#### Properties

|  |  |
| --- | --- |
| Command number | 1019 |
| Thread safe | &check; |
| Modifies variables | error |



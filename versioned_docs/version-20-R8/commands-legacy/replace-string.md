---
id: replace-string
title: Replace string
slug: /commands/replace-string
displayed_sidebar: docs
---

<!--REF #_command_.Replace string.Syntax-->**Replace string** ( *source* ; *oldString* ; *newString* {; *howMany*}{; *} ) : Text<!-- END REF-->
<!--REF #_command_.Replace string.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| source | Text | &#8594;  | Original string |
| oldText | Text | &#8594;  | Characters to replace |
| newText | Text | &#8594;  | Replacement string (if empty string, occurrences are deleted) |
| howMany | Integer | &#8594;  | How many times to replace If omitted, all occurrences are replaced |
| * | Operator | &#8594;  | If passed: evaluation based on character codes |
| Function result | Text | &#8592; | Resulting string |

<!-- END REF-->

#### Description 

<!--REF #_command_.Replace string.Summary-->Replace string replaces *howMany* occurrences of *oldString* in *source* with *newString*.<!-- END REF-->

If *newString* is an empty string (""), Replace string deletes each occurrence of *oldString* in *source*.

If *howMany* is specified, Replace stringwill replace only the number of occurrences of *oldString* specified, starting at the first character of *source*. If *howMany* is not specified, then all occurrences of *oldString* are replaced.

If *oldString* is an empty string, Replace string returns the unchanged *source*.

By default, the command makes global comparisons that take linguistic particularities and letters that may be written with one or more characters (for example æ = ae) into account. On the other hand, it is not diacritical (a=A, a=à and so on) and does not take "ignorable" characters such as characters whose code < 9 into account (Unicode specification). 

To modify this functioning, pass the asterisk *\** as the last parameter. In this case, comparisons will be based on character codes. You must pass the *\** parameter:

* If you want to replace special characters, used for example as delimiters (**Char**(1), etc.),
* If the replacement of characters must be case sensitive and take accented characters into account (a#A, a#à and so on).  
Note that in this mode, the evaluation does not handle variations in the way words are written.

**Note:** In 4D v15 R3 and higher, a significant optimization was made to the algorithm used by this command when you replace a string by another of a different length, regardless of the syntax used. This results in a considerable acceleration of processing in this context. 

#### Example 1 

The following example illustrates the use of **Replace string**. The results, described in the comments, are assigned to the variable *vtResult*.

```4d
 vtResult:=Replace string("Willow";" ll";"d") // Result gets "Widow"
 vtResult:=Replace string("Shout";"o";"") // Result gets "Shut"
 vtResult:=Replace string(vtOtherVar;Char(Tab);",";*) // Replaces all tabs in vtOtherVar with commas
```

#### Example 2 

The following example eliminates CRs and TABs from the text in *vtResult*:

```4d
 vtResult:=Replace string(Replace string(vtResult;Char(Carriage return);"";*);Char(Tab);"";*)
```

#### Example 3 

The following example illustrates the use of the \* parameter in the case of a diacritical evaluation:

```4d
 vtResult:=Replace string("Crème brûlée";"Brulee";"caramel") //Result gets "Crème caramel"
 vtResult:=Replace string("Crème brûlée";"Brulee";"caramel";*) //Result gets "Crème brûlée"
```

#### See also 

[Change string](change-string.md)  
[Delete string](delete-string.md)  
[Insert string](insert-string.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 233 |
| Thread safe | &check; |



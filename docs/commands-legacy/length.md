---
id: length
title: Length
slug: /commands/length
displayed_sidebar: docs
---

<!--REF #_command_.Length.Syntax-->**Length** ( *string* ) : Integer<!-- END REF-->
<!--REF #_command_.Length.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| string | Text | &#8594;  | String for which to return length |
| Function result | Integer | &#8592; | Length of string |

<!-- END REF-->

#### Description 

<!--REF #_command_.Length.Summary-->**Length** is used to find the length of *aString*.<!-- END REF-->returns the number of characters that are in *aString*.

**Note:** In Unicode mode, when you want to check whether a string contains any characters, including ignorable characters, you must use the test If(Length(vtAnyText)=0) rather than If(vtAnyText=""). If the string contains for example Char(1), which is an ignorable character, Length(vtAnyText) does return 1 but vtAnyText="" returns True.

#### Example 

This example illustrates the use of **Length**. The results, described in the comments, are assigned to the variable *vlResult*.

```4d
 vlResult:=Length("Topaz") // vlResult gets 5
 vlResult:=Length("Citizen") // vlResult gets 7
```


#### Properties
|  |  |
| --- | --- |
| Command number | 16 |
| Thread safe | &check; |
| Forbidden on the server ||



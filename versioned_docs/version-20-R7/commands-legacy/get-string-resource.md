---
id: get-string-resource
title: Get string resource
slug: /commands/get-string-resource
displayed_sidebar: docs
---

<!--REF #_command_.Get string resource.Syntax-->**Get string resource** ( *resID* {; *resFile*} ) : Text<!-- END REF-->
<!--REF #_command_.Get string resource.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resID | Integer | &#8594;  | Resource ID number |
| resFile | Time | &#8594;  | Resource file reference number, or all open resource files, if omitted |
| Function result | Text | &#8592; | Contents of the STR  resource |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get string resource.Summary-->The **Get string resource** command returns the string stored in the string (“STR ”) resource whose ID is passed in *resID*.<!-- END REF-->

If the resource is not found, an empty string is returned and the OK variable is set to 0 (zero).

If you pass a valid resource file reference number in *resFile*, the resource is searched for in that file only. If you do not pass *resFile*, the first occurrence of the resource found in the resource files chain is returned.

**Note:** A string resource can contain up to 255 characters.

#### Example 

The following example displays the contents of the string resource ID=20911, which must be located in at least one of the currently open resource files:

```4d
 ALERT(Get string resource(20911))
```

#### System variables and sets 

If the resource is found, OK is set to 1\. Otherwise, it is set to 0 (zero).

#### See also 

[Get indexed string](get-indexed-string.md)  
[Get text resource](get-text-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 506 |
| Thread safe | &cross; |
| Modifies variables | OK |



---
id: get-text-resource
title: Get text resource
slug: /commands/get-text-resource
displayed_sidebar: docs
---

<!--REF #_command_.Get text resource.Syntax-->**Get text resource** ( *resID* {; *resFile*} ) : Text<!-- END REF-->
<!--REF #_command_.Get text resource.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resID | Integer | &#8594;  | Resource ID number |
| resFile | Time | &#8594;  | Resource file reference number, or all open resource files, if omitted |
| Function result | Text | &#8592; | Contents of the TEXT resource |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Get text resource.Summary-->The **Get text resource** command returns the text stored in the text (“TEXT”) resource whose ID is passed in *resID*.<!-- END REF-->

If the resource is not found, empty text is returned, and the OK variable is set to 0 (zero).

If you pass a valid resource file reference number in *resFile*, the resource is searched for in that file only. If you do not pass *resFile*, the first occurrence of the resource found in the resource files chain is returned.

**Note:** A text resource can contain up to 32,000 characters.

#### Example 

The following example displays the contents of the text resource ID=20800, which must be located in at least one of the currently open resource files:

```4d
 ALERT(Get text resource(20800))
```

#### System variables and sets 

If the resource is found, OK is set to 1\. Otherwise, it is set to 0 (zero).

#### See also 

[Get indexed string](get-indexed-string.md)  
[Get string resource](get-string-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  
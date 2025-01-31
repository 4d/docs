---
id: get-indexed-string
title: Get indexed string
slug: /commands/get-indexed-string
displayed_sidebar: docs
---

<!--REF #_command_.Get indexed string.Syntax-->**Get indexed string** ( *resID* ; *strID* {; *resFile*} ) : Text<!-- END REF-->
<!--REF #_command_.Get indexed string.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resID | Integer | &#8594;  | Resource ID number or 'id' attribute of the 'group' element (XLIFF) |
| strID | Integer | &#8594;  | String number or 'id' attribute of the 'trans-unit' element (XLIFF) |
| resFile | Time | &#8594;  | Resource file reference number If omitted: all the XLIFF files or open resource files |
| Function result | Text | &#8592; | Value of the indexed string |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get indexed string.Summary-->The **Get indexed string** command returns: 

* Either one of the strings stored in the string list (“STR#”) resource whose ID is passed in *resID*.<!-- END REF-->
* Or a string stored in an open XLIFF file whose 'id' attribute of the 'group' element is passed in *resID* (see "Compatibility with XLIFF architecture" below).

You pass the number of the string in *strID*. The strings of a string list resource are numbered from 1 to N. To get all the strings (and their numbers) of a string list resource, use the [STRING LIST TO ARRAY](string-list-to-array.md) command.

If the resource or the string within the resource is not found, an empty string is returned and the OK variable is set to 0 (zero).

If you pass a valid resource file reference number in *resFile*, the resource is searched for in that file only. If you do not pass *resFile*, the first occurrence of the resource found in the resource files chain is returned.

**Note:** A string of a string list resource can contain up to 255 characters.

##### Compatibility with XLIFF architecture 

The **Get indexed string** command is compatible with the XLIFF architecture of 4D beginning with version 11: the command first looks for values corresponding to *resID* and *strID* in all the open XLIFF files (when the *resFile* parameter is omitted). In this case, *resID* specifies the **id** attribute of the **group** element and *strID* specifies the **id** attribute of the **trans-unit** element. If the value is not found, the command continues searching in the open resources files. For more information about XLIFF architecture in 4D, refer to the Design Reference manual.

#### System variables and sets 

If the resource is found, OK is set to 1\. Otherwise, it is set to 0 (zero).

#### See also 

[Get string resource](get-string-resource.md)  
[Get text resource](get-text-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 510 |
| Thread safe | &cross; |
| Modifies variables | OK |



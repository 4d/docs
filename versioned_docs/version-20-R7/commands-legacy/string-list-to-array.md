---
id: string-list-to-array
title: STRING LIST TO ARRAY
slug: /commands/string-list-to-array
displayed_sidebar: docs
---

<!--REF #_command_.STRING LIST TO ARRAY.Syntax-->**STRING LIST TO ARRAY** ( *resID* ; *strings* {; *resFile*} )<!-- END REF-->
<!--REF #_command_.STRING LIST TO ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resID | Integer | &#8594;  | Resource ID number or 'id' attribute of the 'group' element (XLIFF) |
| strings | Text array | &#8592; | Strings from the STR# resource or Strings from the 'group' element (XLIFF) |
| resFile | Time | &#8594;  | Resource file reference number If omitted: all the XLIFF files or open resources files |

<!-- END REF-->

#### Description 

<!--REF #_command_.STRING LIST TO ARRAY.Summary-->The **STRING LIST TO ARRAY** command populates the array *strings* with:

* Either the strings stored in the string list ("STR#") resource whose ID is passed in *resID*.<!-- END REF-->
* Or a string stored in an open XLIFF file whose 'id' attribute of the 'group' element is passed in *resID* (see "Compatibility with XLIFF architecture" below).

If the resource is not found, the array *strings* is left unchanged and the OK variable is set to 0 (zero).

If you pass a valid resource file reference number in *resFile*, the resource is searched for in that file only. If you do not pass *resFile*, the first occurrence of the resource found in the resource files chain is returned.

Before calling **STRING LIST TO ARRAY**, you can predeclare the array *strings* as a String or Text array. If you do not predeclare the array, the command creates *strings* as a Text array. 

**Note:** Each string of a string list resource can contain up to 255 characters. 

**Tip:** Limit your use of string list resources to those up to 32K in total size, and a maximum of a few hundred strings per resource.

#### Compatibility with XLIFF architecture 

The **STRING LIST TO ARRAY** command is compatible with the XLIFF architecture of 4D v11: the command first looks for values corresponding to *resID* and *strID* in all the open XLIFF files (when the *resFile* parameter is omitted) and fills the *strings* array with the corresponding values. In this case, *resID* specifies the **id** attribute of the **group** element and the *strings* array contains all the strings of the element. If the value is not found, the command continues searching in the open resources files.  
For more information about XLIFF architecture in 4D, refer to the Design Reference manual.

#### System variables and sets 

If the resource is found, OK is set to 1\. Otherwise, it is set to 0 (zero).

#### See also 

[Get indexed string](get-indexed-string.md)  
[Get string resource](get-string-resource.md)  
[Get text resource](get-text-resource.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 511 |
| Thread safe | &cross; |
| Modifies variables | OK |



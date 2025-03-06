---
id: get-picture-resource
title: GET PICTURE RESOURCE
slug: /commands/get-picture-resource
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE RESOURCE.Syntax-->**GET PICTURE RESOURCE** ( *resID* ; *resData* {; *resFile*} )<!-- END REF-->
<!--REF #_command_.GET PICTURE RESOURCE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resID | Integer | &#8594;  | Resource ID number |
| resData | Field, Variable | &#8594;  | Picture field or variable to receive the picture |
| &#8592; | Contents of the PICT resource |
| resFile | Time | &#8594;  | Resource file reference number, or all open resource files, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET PICTURE RESOURCE.Summary-->The **GET PICTURE RESOURCE** command returns in the picture field or variable *resData* the picture stored in the picture (“PICT”) resource whose ID is passed in *resID*.<!-- END REF-->

If the resource is not found, the *resData* parameter is left unchanged, and the OK variable is set to 0 (zero). 

If you pass a valid resource file reference number in *resFile*, the resource is searched for in that file only. If you do not pass *resFile*, the first occurrence of the resource found in the resource files chain is returned.

**Note:** A picture resource can be at least several megabytes in size.

#### Example 

See example for the [RESOURCE LIST](resource-list.md) command.

#### System variables and sets 

If the resource is found, OK is set to 1\. Otherwise, it is set to 0 (zero).

#### Error management 

If there is not enough memory to load the picture, an error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md).

#### See also 

[ON ERR CALL](on-err-call.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 502 |
| Thread safe | &cross; |
| Modifies variables | OK, error |



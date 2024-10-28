---
id: get-resource
title: GET RESOURCE
slug: /commands/get-resource
displayed_sidebar: docs
---

<!--REF #_command_.GET RESOURCE.Syntax-->**GET RESOURCE** ( *resType* ; *resID* ; *resData* {; *resFile*} )<!-- END REF-->
<!--REF #_command_.GET RESOURCE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resType | Text | &#8594;  | 4-character resource type |
| resID | Integer | &#8594;  | Resource ID number |
| resData | Blob | &#8594;  | BLOB field or variable to receive the data |
| &#8592; | Contents of the resource |
| resFile | Time | &#8594;  | Resource file reference number, or all open resource files, if omitted |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.GET RESOURCE.Summary-->The **GET RESOURCE** command returns in the BLOB field or variable *resData* the contents of the resource whose type and ID is passed in *resType* and *resID*.<!-- END REF-->

**Important:** You must pass a 4-character string in *resType*.

If the resource is not found, the *resData* parameter is left unchanged and the OK variable is set to 0 (zero). 

If you pass a valid resource file reference number in *resFile*, the resource is searched for in that file only. If you do not pass *resFile*, the first occurrence of the resource found in the resource files chain is returned.

**Note:** A resource can be at least several megabytes in size.

#### Platform independence 

 Remember that you are working with Mac OS-based resources. No matter what the platform, internal resource data such as Long Integer is stored using Macintosh byte ordering. On Windows, the data for standard resources (such as string list and pictures resources) is automatically byte swapped when necessary. On the other hand, if you create and use your own internal data structures, it is up to you to byte swap the data you extract from the BLOB (i.e., passing Macintosh byte ordering to a command such as [BLOB to longint](blob-to-longint.md)).

#### Example 

See the example for the  command.

#### System variables and sets 

If the resource is found, OK is set to 1\. Otherwise, it is set to 0 (zero).

#### Error management 

If there is not enough memory to load the resource, an error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md).

#### See also 

*Resources*  
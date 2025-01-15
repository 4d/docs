---
id: get-pasteboard-data-type
title: GET PASTEBOARD DATA TYPE
slug: /commands/get-pasteboard-data-type
displayed_sidebar: docs
---

<!--REF #_command_.GET PASTEBOARD DATA TYPE.Syntax-->**GET PASTEBOARD DATA TYPE** ( *4Dsignatures* ; *nativeTypes* {; *formatNames*} )<!-- END REF-->
<!--REF #_command_.GET PASTEBOARD DATA TYPE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| 4Dsignatures | Text array | &#8592; | 4D signatures of data types |
| nativeTypes | Text array | &#8592; | Native data types |
| formatNames | Text array | &#8592; | Format names (Windows only), empty strings under Mac OS |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET PASTEBOARD DATA TYPE.Summary-->The **GET PASTEBOARD DATA TYPE** command gets the list of data types present in the pasteboard.<!-- END REF--> This command should generally be used in the context of a drag and drop operation, within the On Drop or On Drag Over form events of the destination object. More particularly, it allows the pasteboard to be checked for the presence of a specific type of data.

This command returns the data types in several different forms via two (or three) arrays:

* The *4Dsignatures* array contains the data types expressed using the internal 4D signature (for example, “com.4d.private.picture.gif”). If a data type found is not recognized by 4D, an empty string (“”) is returned in the array.
* The *nativeTypes* array contains the data types expressed using their native types. The format of native types differs between Mac OS and Windows.  
   * Under Mac OS, native types are expressed as UTIs (Uniform Type Identifier).  
   * Under Windows, native types are expressed as numbers, with each number being associated with a format name. The *nativeTypes* array contains these numbers in the form of strings (“3”, “12”, and so on). If you want to use more explicit labels, it is recommended to use the optional *formatNames* array, which contains the format names of the native types under Windows.  
The *nativeTypes* array lets any type of data found in the pasteboard to be supported, including data whose type is not referenced by 4D.
* Under Windows, you can also pass the *formatNames* array, which receives the names of the data types found in the pasteboard. The values returned in this array can be used, for example, to build a format selection pop-up menu. Under Mac OS, the *formatNames* array returns empty strings.

For more information about the data types supported, please refer to the *Managing Pasteboards* section. 

#### See also 

*Managing Pasteboards*  

#### Properties

|  |  |
| --- | --- |
| Command number | 958 |
| Thread safe | &cross; |



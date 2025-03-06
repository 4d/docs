---
id: get-picture-from-library
title: GET PICTURE FROM LIBRARY
slug: /commands/get-picture-from-library
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FROM LIBRARY.Syntax-->**GET PICTURE FROM LIBRARY** ( picRef | picName ; *picture* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FROM LIBRARY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picRef &#124; picName | Integer, Text | &#8594;  | Reference number of Picture Library graphic or Name of Picture Library graphic |
| picture | Picture | &#8592; | Picture from the Picture Library |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET PICTURE FROM LIBRARY.Summary-->The **GET PICTURE FROM LIBRARY** command returns in the *picture* parameter the Picture Library graphic whose reference number is passed in *picRef* or whose name is passed in *picName*.<!-- END REF-->

If there is no picture with that reference number or name, **GET PICTURE FROM LIBRARY** leaves *picture* unchanged. 

#### Example 1 

The following example returns in *vgMyPicture* the picture whose reference number is stored in the local variable *$vlPicRef*:

```4d
 GET PICTURE FROM LIBRARY($vlPicRef;vgMyPicture)
```

#### Example 2 

The following example returns in *$DDcom\_Prot\_MyPicture* the picture with the name "DDcom\_Prot\_Button1" stored in the Picture Library:

```4d
 GET PICTURE FROM LIBRARY("DDcom_Prot_Button1";$DDcom_Prot_MyPicture)
```

#### Example 3 

See the third example for the [PICTURE LIBRARY LIST](picture-library-list.md) command.

#### System variables and sets 

If the Picture Library exists, the OK variable is set to 1\. Otherwise, OK is set to zero.

#### Error management 

If there is not enough memory to return the picture, an error -108 is generated. You can catch this error using an error-handling method.

#### See also 

[PICTURE LIBRARY LIST](picture-library-list.md)  
[REMOVE PICTURE FROM LIBRARY](remove-picture-from-library.md)  
[SET PICTURE TO LIBRARY](set-picture-to-library.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 565 |
| Thread safe | &cross; |
| Modifies variables | OK, error |



---
id: get-picture-from-library
title: GET PICTURE FROM LIBRARY
slug: /commands/get-picture-from-library
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FROM LIBRARY.Syntax-->**GET PICTURE FROM LIBRARY** ( *picRef* : Integer ; *picture* : Picture )<br/>**GET PICTURE FROM LIBRARY** ( *picName* : Text ; *picture* : Picture )<!-- END REF-->
<!--REF #_command_.GET PICTURE FROM LIBRARY.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| picRef | Integer | &#8594;  | Reference number of Picture Library graphic |
| picName | Text | &#8594;  | Name of Picture Library graphic |
| picture | Picture | &#8592; | Picture from the Picture Library |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6.7|Modified|
|<6|Created|

</details>
</div>

## Description 

:::warning

This command cannot be used in projects because the Picture library is only available in binary databases. 

:::


<!--REF #_command_.GET PICTURE FROM LIBRARY.Summary-->The **GET PICTURE FROM LIBRARY** command returns in the *picture* parameter the Picture Library graphic whose reference number is passed in *picRef* or whose name is passed in *picName*.<!-- END REF-->


If there is no picture with that reference number or name, **GET PICTURE FROM LIBRARY** leaves *picture* unchanged. 

## Example 1 

The following example returns in *vgMyPicture* the picture whose reference number is stored in the local variable *$vlPicRef*:

```4d
 GET PICTURE FROM LIBRARY($vlPicRef;vgMyPicture)
```

## Example 2 

The following example returns in *$DDcom\_Prot\_MyPicture* the picture with the name "DDcom\_Prot\_Button1" stored in the Picture Library:

```4d
 GET PICTURE FROM LIBRARY("DDcom_Prot_Button1";$DDcom_Prot_MyPicture)
```

## Example 3 

See the third example for the [PICTURE LIBRARY LIST](../commands/picture-library-list) command.

## System variables and sets 

If the Picture Library exists, the OK variable is set to 1\. Otherwise, OK is set to zero.

## Error management 

If there is not enough memory to return the picture, an error -108 is generated. You can catch this error using an error-handling method.

## See also 

[PICTURE LIBRARY LIST](../commands/picture-library-list)  
[REMOVE PICTURE FROM LIBRARY](../commands/remove-picture-from-library)  
[SET PICTURE TO LIBRARY](../commands/set-picture-to-library)  

## Properties

|  |  |
| --- | --- |
| Command number | 565 |
| Thread safe | no |
| Modifies variables | OK, error |



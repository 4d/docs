---
id: read-picture-file
title: READ PICTURE FILE
slug: /commands/read-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.READ PICTURE FILE.Syntax-->**READ PICTURE FILE** ( *fileName* : Text ; *picture* : Picture {; *} )<!-- END REF-->
<!--REF #_command_.READ PICTURE FILE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fileName | Text | &#8594;  | Name or full pathname of the file to read, or empty string |
| picture | Picture | &#8592; | Field or variable receiving picture |
| * | Operator | &#8594;  | If passed = accept any type of file |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL Release 2|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.READ PICTURE FILE.Summary-->The **READ PICTURE FILE** command opens the picture saved in the *fileName* disk file and loads it in the *picture* 4D field or variable.<!-- END REF-->

You can pass in *fileName* the full pathname of the file to read, or a file name only. If you pass only the file name, it should be located next to the database structure file. Under Windows, the file extension must be indicated.  
If an empty string ("") is passed in *fileName*, the standard Open file dialog box appears and the user selects the file to be read, as well as the available formats.

You can get the list of available formats using the [PICTURE CODEC LIST](../commands/picture-codec-list) command.

You pass in *picture* the picture variable or field which will receive the picture read.

**Note:** The internal picture format is stored within the 4D variable or field.

If you pass the optional *\** parameter, the command will accept any type of file. This means that you can work with pictures without necessarily having the suitable codecs (see the description of the [BLOB TO PICTURE](../commands/blob-to-picture) command).

## System variables and sets 

If the command is executed successfully, the system variable Document contains the full pathname to the open file and the system variable OK is set to 1\. Otherwise, OK is set to 0.

## See also 

[BLOB TO PICTURE](../commands/blob-to-picture)  
[PICTURE CODEC LIST](../commands/picture-codec-list)  
*Pictures*  
[WRITE PICTURE FILE](../commands/write-picture-file)  

## Properties

|  |  |
| --- | --- |
| Command number | 678 |
| Thread safe | yes |
| Modifies variables | OK, Document |



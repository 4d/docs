---
id: web-set-root-folder
title: WEB SET ROOT FOLDER
slug: /commands/web-set-root-folder
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET ROOT FOLDER.Syntax-->**WEB SET ROOT FOLDER** ( *rootFolder* : Text )<!-- END REF-->
<!--REF #_command_.WEB SET ROOT FOLDER.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| rootFolder | Text | &#8594;  | Pathname of Web server root folder |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Renamed|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.WEB SET ROOT FOLDER.Summary-->The **WEB SET ROOT FOLDER** command is used to modify the default root folder where 4D looks for the HTML files requested of the Web server.<!-- END REF-->

This command does not take the default root folder that may have been set in the Database Settings into account. For more information about this folder, please refer to the *Connection Security* section.

The location of the root folder can be expression either in HTML syntax (URL type), or in system syntax (absolute path):

* HTML syntax: folder names are separated by a slash ("/"), regardless of the platform you use.
* System syntax: absolute pathname (“long name”) respecting the syntax of the current platform, for example:  
   * (macOS) Disk:Applications:myserv:folder  
   * (Windows) C:\\Applications\\myserv\\folder

**Notes:**

* The Web server will need to be restarted in order for the new root folder to be taken into account.
* You can find out the location of the current root folder at any time using the [Get 4D folder](../commands/get-4d-folder) command.

If you specify an invalid pathname, an OS File manager error is generated. You can intercept the error with an [ON ERR CALL](../commands/on-err-call) method. If you display an alert or a message from within the error method, it will appear on the browser side.

## See also 

[Get 4D folder](../commands/get-4d-folder)  
[ON ERR CALL](../commands/on-err-call)  

## Properties

|  |  |
| --- | --- |
| Command number | 634 |
| Thread safe | yes |
| Modifies variables | error |



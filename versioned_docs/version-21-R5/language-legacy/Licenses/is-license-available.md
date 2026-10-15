---
id: is-license-available
title: Is license available
slug: /commands/is-license-available
displayed_sidebar: docs
---

<!--REF #_command_.Is license available.Syntax-->**Is license available** ( *license* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is license available.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| license | Integer | &#8594;  | Plug-in for which license validity testing is desired |
| Function result | Boolean | &#8592; | True if plug-in is available, otherwise False |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|14 R3|Modified|
|2004|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.Is license available.Summary-->The Is license available command lets you find out the availability of a plug-in.<!-- END REF--> It is useful, for instance, for displaying or hiding functions requiring the presence of a plug-in.

The Is license available command can be used in three different ways:

* The *license* parameter is omitted: in this case, the command returns [False](../commands/false) if the 4D application is in demonstration mode.
* You pass one of the constants of the “*Is License Available*” theme in the *license* parameter:  

| Constant               | Type    | Value     |  
| ---------------------- | ------- | --------- |  
| 4D Client SOAP license | Integer | 808465465 |  
| 4D Client Web license  | Integer | 808465209 |  
| 4D for OCI license     | Integer | 808465208 |  
| 4D ODBC Pro license    | Integer | 808464946 |  
| 4D REST Test license   | Integer | 808465719 |  
| 4D SOAP license        | Integer | 808465464 |  
| 4D View license        | Integer | 808465207 |  
| 4D Web license         | Integer | 808464945 |  
| 4D Write license       | Integer | 808464697 |  
    
In this case, the command returns [True](../commands/true) if the corresponding plug-in has a license available. The command takes into account any licenses attributed in Design mode or via the [SET PLUGIN ACCESS](../commands/set-plugin-access) command.  
Is license available returns [False](../commands/false) if the plug-in is operating in demo mode.
* You pass the ID number of the plug-in “4BNX” resource directly in the license parameter. In this case, the command behaves as described above.

## See also 

[CHANGE LICENSES](../commands/change-licenses)  
[License info](../commands/license-info)  
[Get plugin access](../commands/get-plugin-access)  
[PLUGIN LIST](../commands/plugin-list)  
[SET PLUGIN ACCESS](../commands/set-plugin-access)  

## Properties

|  |  |
| --- | --- |
| Command number | 714 |
| Thread safe | no |




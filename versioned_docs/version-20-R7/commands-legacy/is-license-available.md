---
id: is-license-available
title: Is license available
slug: /commands/is-license-available
displayed_sidebar: docs
---

<!--REF #_command_.Is license available.Syntax-->**Is license available** {( *license* )} -> Function result<!-- END REF-->
<!--REF #_command_.Is license available.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| license | Integer | &#8594;  | Plug-in for which license validity testing is desired |
| Function result | Boolean | &#8592; | True if plug-in is available, otherwise False |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Is license available.Summary-->The Is license available command lets you find out the availability of a plug-in.<!-- END REF--> It is useful, for instance, for displaying or hiding functions requiring the presence of a plug-in.

The Is license available command can be used in three different ways:

* The *license* parameter is omitted: in this case, the command returns [False](false.md "False") if the 4D application is in demonstration mode.
* You pass one of the constants of the “*Is License Available*” theme in the *license* parameter:  
| Constant               | Type    | Value     |  
| ---------------------- | ------- | --------- |  
| 4D Client SOAP license | Longint | 808465465 |  
| 4D Client Web license  | Longint | 808465209 |  
| 4D for OCI license     | Longint | 808465208 |  
| 4D ODBC Pro license    | Longint | 808464946 |  
| 4D REST Test license   | Longint | 808465719 |  
| 4D SOAP license        | Longint | 808465464 |  
| 4D View license        | Longint | 808465207 |  
| 4D Web license         | Longint | 808464945 |  
| 4D Write license       | Longint | 808464697 |  
    
In this case, the command returns [True](true.md "True") if the corresponding plug-in has a license available. The command takes into account any licenses attributed in Design mode or via the [SET PLUGIN ACCESS](set-plugin-access.md) command.  
Is license available returns [False](false.md "False") if the plug-in is operating in demo mode.
* You pass the ID number of the plug-in “4BNX” resource directly in the license parameter. In this case, the command behaves as described above.

#### See also 

[CHANGE LICENSES](change-licenses.md)  
[License info](license-info.md)  
[Get plugin access](get-plugin-access.md)  
[PLUGIN LIST](plugin-list.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  
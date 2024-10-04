---
id: get-plugin-access
title: Get plugin access
slug: /commands/get-plugin-access
displayed_sidebar: docs
---

<!--REF #_command_.Get plugin access.Syntax-->**Get plugin access** ( *plugIn* ) -> Function result<!-- END REF-->
<!--REF #_command_.Get plugin access.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| plugIn | Longint | &#x1F852; | Plug-in number |
| Function result | String | &#x1F850; | Group name associated with plug-in |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get plugin access.Summary-->The Get plugin access command returns the name of the user group authorized to use the plug-in whose number was passed in the *plugIn* parameter.<!-- END REF--> If there is no group associated with the plug-in, the command returns an empty string (""). 

Pass the number of the plug-in for which you want to find out the associated group of users in the *plugIn* parameter. Plug-in licenses include 4D Client Web and SOAP licenses. You can pass one of the following constants found in the *Is License Available* theme:

| Constant               | Type    | Value     |
| ---------------------- | ------- | --------- |
| 4D Client SOAP license | Longint | 808465465 |
| 4D Client Web license  | Longint | 808465209 |
| 4D for OCI license     | Longint | 808465208 |
| 4D ODBC Pro license    | Longint | 808464946 |
| 4D View license        | Longint | 808465207 |
| 4D Write license       | Longint | 808464697 |

#### See also 

[SET GROUP ACCESS](set-group-access.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  
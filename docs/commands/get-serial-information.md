---
id: get-serial-information
title: GET SERIAL INFORMATION
displayed_sidebar: docs
---

<!--REF #_command_.GET SERIAL INFORMATION.Syntax-->**GET SERIAL INFORMATION** ( *key* ; *user* ; *company* ; *connected* ; *maxUser* )<!-- END REF-->
<!--REF #_command_.GET SERIAL INFORMATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| key | Longint | <-> | Unique product key (encrypted) |
| user | String | <-> | Registered name |
| company | String | <-> | Registered organization |
| connected | Longint | <-> | Number of connected users |
| maxUser | Longint | <-> | Maximum number of connected users |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET SERIAL INFORMATION.Summary-->The GET SERIAL INFORMATION command returns various information about the 4D current version serialization.<!-- END REF-->

* *key*: unique ID of the installed product. A unique number is associated to a 4D application (such as 4D Server, 4D in local mode, 4D Desktop, etc.) installed on a machine. This number is encrypted, of course.
* *user*: Name application user as defined when installing.
* *company*: User’s company or organization name as defined during installation.
* *connected*: Number of connected users when executing the command.
* *maxUsers*: Maximal number of users concurrently connected.

**Note:** The last two parameters always return 1 for 4D single user except in demonstration versions (0 is then returned).

GET SERIAL INFORMATION is part of the general component protection scheme implemented in 4D. Component developers can associate a copy of their product to a given installed 4D application, in order to avoid any illegal copies.

The serialization works as follows: a user who wants to get a component sends his unique key generated through the GET SERIAL INFORMATION command to the developer. This can be done through an Order form included in a demo version of the component. The generated key is unique and is associated to a specific 4D application. 

The component developer can then generate his own serial number combining the key and a given cipher. The delivered component will offer a function verifying if the information returned by the GET SERIAL INFORMATION matches this serial number. Otherwise, the user will not be able to use the component.

**Note:** Plug-ins developers can use this protection scheme too. For more information, refer to the [*4D Plugin API Reference*](http://sources.4d.com/trac/4d%5F4dpluginapi#no1). 

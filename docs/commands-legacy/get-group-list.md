---
id: get-group-list
title: GET GROUP LIST
slug: /commands-legacy/get-group-list
displayed_sidebar: docs
---

<!--REF #_command_.GET GROUP LIST.Syntax-->**GET GROUP LIST** ( *groupNames* ; *groupNumbers* )<!-- END REF-->
<!--REF #_command_.GET GROUP LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| groupNames | String array | <&rarr; | Names of the groups as they appear in the Password editor window |
| groupNumbers | Longint array | <&rarr; | Corresponding unique group ID numbers |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET GROUP LIST.Summary-->GET GROUP LIST populates the arrays *groupNames* and *groupNumbers* with the names and unique ID numbers of the groups as they appear in the Password editor window.<!-- END REF-->

The array *groupNumbers*, synchronized with *groupNames*, is filled with the corresponding unique group ID numbers. 

* In project databases, these numbers start at 15001 and are dynamically allocated at startup and maintained during the session.
* In binary databases, these numbers are stored and belong to a specific range, depending on the group creator. For more information, please refer to the [User and group ID ranges](/4Dv20R6/4D/20-R6/Designer-and-Administrator.300-7003454.en.html#4607697) paragraph.

#### Error management 

If you do not have the proper access privileges for calling GET GROUP LIST or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using [ON ERR CALL](on-err-call.md).

#### See also 

[GET GROUP PROPERTIES](get-group-properties.md)  
[GET USER LIST](get-user-list.md)  
[Set group properties](set-group-properties.md)  
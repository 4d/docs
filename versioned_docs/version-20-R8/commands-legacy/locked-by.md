---
id: locked-by
title: LOCKED BY
slug: /commands/locked-by
displayed_sidebar: docs
---

<!--REF #_command_.LOCKED BY.Syntax-->**LOCKED BY** ( {*aTable* ;} *process* ; *4Duser* ; *sessionUser* ; *processName* )<!-- END REF-->
<!--REF #_command_.LOCKED BY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table to check for record locked, or Default table, if omitted |
| process | Integer | &#8592; | Process reference number |
| 4Duser | Text | &#8592; | 4D user name |
| sessionUser | Text | &#8592; | Name of user that opened work-session |
| processName | Text | &#8592; | Process name |

<!-- END REF-->

#### Description 

<!--REF #_command_.LOCKED BY.Summary-->LOCKED BY returns information about the user and process that have locked a record.<!-- END REF--> The process number(\*), the user name in the 4D application and in the system as well as the process name are returned in the *process*, *4Duser*, *sessionUser*, and *processName* variables. You can use this information in a custom dialog box to warn the user when a record is locked.

(\*) This is the number of the process on the machine where the code that actually locked the record is executed. In the case of a trigger or a method that is executed on the server, the number of the "twin" process on the server machine is returned. In the case of a method that is executed on a remote application, the number of the process on the remote machine is returned.

If the record is not locked, *process* returns 0 and *4Duser*, *sessionUser*, and *processName* return empty strings. If the record you try to load in read/write has been deleted, *process* returns -1 and *4Duser*, *sessionUser*, and *processName* return empty strings.

The *4Duser* parameter returned is the user name from the 4D password system or the user alias as defined with the [SET USER ALIAS](set-user-alias.md) (if any). If there is no password system or alias defined, “Designer” is returned.

The *sessionUser* parameter returned corresponds to the name of the user that opened the session on the client machine (this name is displayed more particularly in the 4D Server administration window for each open process).

If the record has been locked by a *$lock REST request*:

* *process* returns -2
* *4Duser* returns ""
* *sessionUser* returns ""
* *processName* returns the IP address of the locker, e.g. "127.0.0.1"

#### See also 

[Locked](locked.md)  
*Record Locking*  

#### Properties

|  |  |
| --- | --- |
| Command number | 353 |
| Thread safe | &check; |



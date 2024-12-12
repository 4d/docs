---
id: notify-resources-folder-modification
title: NOTIFY RESOURCES FOLDER MODIFICATION
slug: /commands/notify-resources-folder-modification
displayed_sidebar: docs
---

<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Syntax-->**NOTIFY RESOURCES FOLDER MODIFICATION**<!-- END REF-->
<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Summary-->The NOTIFY RESOURCES FOLDER MODIFICATION command "forces" 4D Server to send a notification to all the connected 4D machines indicating that the Resources folder of the database has been modified so that they can synchronize their local Resources folder.<!-- END REF--> 

This command can be used more particularly to manage the synchronization of the Resources folders of remote machines after this folder has been modified by a stored procedure on the server.

For more information about managing the Resources folder in remote mode, please refer to the 4D Server Reference Guide.

Only the information that modification has occurred is sent. Remote machines react according to current settings. The options are the following:

* No synchronization of the local Resources local folder during the session,
* Automatic synchronization of the local Resources folder during the session,
* Display of a warning so that the user may carry out a synchronization if desired.

Current settings are set either:

* at the overall database level using the parameter of the Database settings. In this case, it applies to all the remote machines;
* locally, using the [SET DATABASE PARAMETER](set-database-parameter.md) command executed on the remote machine (Auto synchro resources folder selector). In this case, it "overrides" the database setting and applies only to the remote machine for the duration of the session.

#### See also 

[Get 4D folder](get-4d-folder.md)  
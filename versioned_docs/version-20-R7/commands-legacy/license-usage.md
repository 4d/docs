---
id: license-usage
title: License usage
slug: /commands/license-usage
displayed_sidebar: docs
---

<!--REF #_command_.License usage.Syntax-->**License usage** : Collection<!-- END REF-->
<!--REF #_command_.License usage.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Collection | &#8592; | A collection of objects with information on the retained licenses. |

<!-- END REF-->

#### Description 

<!--REF #_command_.License usage.Summary-->The **License usage** command returns a collection of objects containing information on the retained licenses.<!-- END REF-->

Each object in the returned collection has the following attributes:

| **Property name**      | **Type** | **Description**                                                                                |
| ---------------------- | -------- | ---------------------------------------------------------------------------------------------- |
| productId              | Number   | ID of the license type                                                                         |
| productName            | Text     | Name of the license type                                                                       |
| productUsedCount       | Number   | Number of retained licenses (including this one) when the license was retained                 |
| productBalance         | Number   | Number of remaining licenses for the product (just after the action)                           |
| globalProductUsedCount | Number   | When several servers are running on the same machine, shows the retained count for all of them |
| token                  | Number   | Operation's unique ID                                                                          |
| time                   | Text     | Timestamp that indicates when the license was retained, in ISO 8601 format                     |
| reason                 | Text     | The reason/caller of this license usage                                                        |
| session                | Object   | Contains specific information about the retained license's session                             |

Depending on the type of session (4D client or REST for example), the contents of the *session* object in the above table will vary. See below for details.

#### session object for 4D client sessions 

Inside the returned collection for 4D sessions, each element contains a session object identical to the one returned by the [Process activity](../commands/process-activity.md) command:

| **Property name** | **Type**      | **Description**                                                           |
| ----------------- | ------------- | ------------------------------------------------------------------------- |
| type              | Text (enum)   | Session type. Possible values: "remote", "storedProcedure", "web", "rest" |
| userName          | Text          | User name                                                                 |
| machineName       | Text          | Name of the remote machine                                                |
| systemUserName    | Text          | Name of the system session opened on the remote machine                   |
| IPAddress         | Text          | IP address of the remote machine                                          |
| hostType          | Text (enum)   | Host type. Possible values: "windows", "mac", "browser"                   |
| creationDateTime  | Date ISO 8601 | Date and time of connection of the remote machine                         |
| state             | Text (enum)   | Session state. Possible values: "active", "postponed", "sleeping"         |
| ID                | Text          | Session UUID                                                              |
| persistentID      | Text          | Session's persistent ID                                                   |

#### session object for SQL sessions 

This table details the contents of the session object for SQL sessions:

| **Property name** | **Type** | **Description**           |
| ----------------- | -------- | ------------------------- |
| IPAddress         | Text     | IP address of the session |
| userAgent         | Text     | User Agent                |
| userName          | Text     | User Name                 |
| userId            | Number   | User ID                   |

#### session object for REST sessions 

This table details the contents of the session object for REST sessions:

| **Property name** | **Type** | **Description**                                  |
| ----------------- | -------- | ------------------------------------------------ |
| userName          | Text     | User Name                                        |
| sessionID         | Text     | REST session ID                                  |
| IPAddress         | Text     | ID of the client that initiated the REST session |
| isDatastore       | Boolean  | True if the REST request comes from a datastore  |


#### Properties

|  |  |
| --- | --- |
| Command number | 1782 |
| Thread safe | &cross; |



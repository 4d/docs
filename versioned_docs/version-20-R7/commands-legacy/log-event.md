---
id: log-event
title: LOG EVENT
slug: /commands/log-event
displayed_sidebar: docs
---

<!--REF #_command_.LOG EVENT.Syntax-->**LOG EVENT** ( {*outputType* ;} *message* {; *importance*} )<!-- END REF-->
<!--REF #_command_.LOG EVENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| outputType | Integer | &#8594;  | Message output type |
| message | Text | &#8594;  | Contents of the message |
| importance | Integer | &#8594;  | Message’s importance level |

<!-- END REF-->

#### Description 

<!--REF #_command_.LOG EVENT.Summary-->The **LOG EVENT** command sets up a customized system for recording internal events that occur during the use of your application.<!-- END REF-->

Pass the custom information to be noted according to the event in *message*.

The optional *outputType* parameter specifies the output channel taken by the *message*. You can pass one of the following constants, located in the "*Log Events*" theme, in this parameter:

| Constant                     | Type    | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------- | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Into 4D commands log         | Integer | 3     | Indicates to 4D to record the *message* in the 4D commands log file, if this file has been activated. The 4D commands log file can be enabled using the [SET DATABASE PARAMETER](set-database-parameter.md) command (selector 34).<br/>**Note:** 4D log files are grouped together in the **Logs** folder (see the [Get 4D folder](get-4d-folder.md) command).                                                                                  |
| Into 4D debug message        | Integer | 1     | Indicates to 4D to send the *message* to the system debugging environment. The result depends on the platform:<br/>Under Mac OS: the command sends the message to the ConsoleUnder Windows: the command sends the message as a debug message. To be able to read this message, you must have Microsoft Visual Studio or the DebugView utility for Windows (<http://technet.microsoft.com/en-us/sysinternals/bb896647.aspx>)                     |
| Into 4D diagnostic log       | Integer | 5     | Indicates to 4D to record the *message* in the 4D diagnostic file, if this file has been enabled. <br/>The diagnostic log file can be enabled using the [SET DATABASE PARAMETER](set-database-parameter.md) command (selector 79).                                                                                                                                                                                                              |
| Into 4D request log          | Integer | 2     | Indicates to 4D to record the *message* in the 4D requests log, if this file has been activated                                                                                                                                                                                                                                                                                                                                                         |
| Into system standard outputs | Integer | 6     | Indicates to 4D to send the *message* to a standard output stream. The message is sent to: **stdout** if *importance* \= Information message or Warning message **stderr** if *importance* \= Error message                                                                                                                                                                                                                                             |
| Into Windows log events      | Integer | 0     | Indicates to 4D to send the *message* to the “Log events” of Windows. This log receives and stores messages coming from running applications. In this case, you can attribute a level of importance to *message* via the optional *importance* parameter (see below).**<br/>Notes:** <br/>For this feature to be available, the Windows Log Events service must be running.Under Mac OS, the command does nothing with this output type |

If you do not pass the *outputType* parameter, the value 0 (Into Windows log events) is used by default.

You can attribute a level of importance to *message*, via the optional *importance* parameter which helps you to read and understand the log events. There are three levels of importance: Information, Warning, and Error.  4D provides you with the following predefined constants:

| Constant            | Type    | Value |
| ------------------- | ------- | ----- |
| Error message       | Integer | 2     |
| Information message | Integer | 0     |
| Warning message     | Integer | 1     |

If you don’t pass anything in *importance* or pass an incorrect value, the default value (0) is used.

:::note

The *importance* parameter is only used with *outputType* `Into Windows log events`, `Into 4D diagnostic log`, and `Into system standard outputs`.

:::

#### Example 

If you want to have keep track of when your database is opened under Windows, you could write the following line of code in the [On Startup database method](on-startup-database-method.md):

```4d
 LOG EVENT(Into Windows log events;"The Invoice database was opened.")
```

Each time the database is opened, this information will be written in Windows’ log events and its level of importance will be 0.

#### See also 

[SET DATABASE PARAMETER](set-database-parameter.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 667 |
| Thread safe | &check; |
| Forbidden on the server ||



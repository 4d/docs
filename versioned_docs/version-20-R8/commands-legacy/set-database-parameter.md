---
id: set-database-parameter
title: SET DATABASE PARAMETER
slug: /commands/set-database-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SET DATABASE PARAMETER.Syntax-->**SET DATABASE PARAMETER** ( {*aTable* ;} *selector* ; *value* )<!-- END REF-->
<!--REF #_command_.SET DATABASE PARAMETER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to set the parameter or, Default table if this parameter is omitted |
| selector | Integer | &#8594;  | Code of the database parameter to modify |
| value | Real, Text | &#8594;  | Value of the parameter |

<!-- END REF-->

## Description 

<!--REF #_command_.SET DATABASE PARAMETER.Summary-->The **SET DATABASE PARAMETER** command allows you to modify various internal parameters of the 4D database.<!-- END REF-->

The *selector* designates the database parameter to modify. 4D offers predefined constants, which are located in the “*Database Parameters*” theme. The following table lists each constant, describes its scope and indicates whether any changes made are kept between two sessions: 

### 4D Server timeout (13)

**Scope**: 4D application if *value* positive

**Kept between two sessions**: Yes if *value* positive

**Possible values**: 0 -> 32 767

**Description**: Value of the 4D Server timeout. The default 4D Server timeout value is defined on the "Client-Server/Network options" page of the Database settings dialog box on the server side. 

The server timeout sets the maximum period "authorized" to wait for a client response, for example when it is executing a blocking operation. After this period, 4D Server disconnects the client. The 4D Server Timeout selector allows you to set, in the corresponding *value*parameter, a new timeout expressed in minutes. This feature is particularly useful to increase the timeout before executing a blocking and time-consuming operation on the client, such as printing a large number of pages, which can cause an unexpected timeout.

You also have two options:

If you pass a **positive** value in the *value*parameter, you set a global and permanent timeout: the new value is applied to all process and is stored in the preferences of the 4D application (equivalent to change in the Preferences dialog box).If you pass a **negative** value in the *value*parameter, you set a local and temporary timeout: The new value is applied to the calling process only (the other processes keep the default values) and is reset to default as soon as the server receives any signal of activity from the client — for example, when the operation is finished. This option is useful for managing long operations initiated by 4D plug-ins. To set the "No timeout" option, pass 0 in *value*. See example 1.



### 4D Remote mode timeout (14)

**Scope** (legacy network layer only): 4D application if *value* positive

**Kept between two sessions**: Yes if *value* positive

**Description**: To be used in very specific cases. Value of the timeout granted by the remote 4D machine to the 4D Server machine. The default timeout value used by 4D in remote mode is set on the "Client-Server/Network options" page of the Database settings dialog box on the remote machine.

The 4D Remote mode timeout selector is only taken into account if you are using the legacy network. It is ignored when the *ServerNet* layer is activated: this setting is entirely managed by the 4D Server timeout (13) selector.



### Port ID (15)

**Scope**: 4D local, 4D Server

**Kept between two sessions**: No

**Description**: TCP port ID used by the 4D Web server with 4D in local mode and 4D Server. The default value, which can be set on the "Web/Configuration" page of the Preferences dialog box, is 80\. You can use the constants of the *TCP Port Numbers* theme for the *value* parameter.

The Port ID selector is useful for 4D Web Servers compiled and merged with 4D Desktop (in which there is no access to the Design mode). For more information about the TCP port ID, refer to the *Web Server Settings* section.



### Character set (17)

**Scope**: 4D local, 4D Server

**Kept between two sessions**: Yes

**Description**: *Constant obsolete (kept for compatibility reasons only).* We now recommend using the [WEB SET OPTION](web-set-option.md) and [WEB GET OPTION](web-get-option.md) commands for configuring the HTTP server.



### Max concurrent Web processes (18)

**Scope**: 4D local, 4D Server

**Kept between two sessions**: Yes

**Description**: *Constant obsolete (kept for compatibility reasons only).* We now recommend using the [WEB SET OPTION](web-set-option.md) and [WEB GET OPTION](web-get-option.md) commands for configuring the HTTP server.



### Client port ID (22)

**Scope**: All 4D remote machines

 **Kept between two** **sessions**: Yes

 **Possible values**: See selector 15

**Description**: Used to specify this parameter for all the remote 4D machines used as Web servers. The values defined using these selectors are applied to all the remote machines used as Web servers. If you want to define values only for certain remote machines, use the Preferences dialog box of 4D in remote mode.



### Client character set (24)

**Scope**: All 4D remote machines

 **Kept between two** **sessions**: Yes

 **Possible values**: See selector 17

**Description**: Used to specify this parameter for all the remote 4D machines used as Web servers. The values defined using these selectors are applied to all the remote machines used as Web servers. If you want to define values only for certain remote machines, use the Preferences dialog box of 4D in remote mode.



### Client max concurrent Web proc (25)

**Scope**: All 4D remote machines

 **Kept between two** **sessions**: Yes

 **Possible values**: See selector 18

**Description**: Used to specify this parameter for all the remote 4D machines used as Web servers. The values defined using these selectors are applied to all the remote machines used as Web servers. If you want to define values only for certain remote machines, use the Preferences dialog box of 4D in remote mode.



### Maximum Web requests size (27)

**Scope**: 4D local, 4D Server

**Kept between two sessions**: Yes

**Description**: *Constant obsolete (kept for compatibility reasons only).* We now recommend using the [WEB SET OPTION](web-set-option.md) and [WEB GET OPTION](web-get-option.md) commands for configuring the HTTP server.



### 4D Server log recording (28)

**Thread-safe** : Yes

**Scope**: 4D Server, 4D remote*

**Kept between two sessions**: No

**Possible values**: 0 or from 1 to X (0 = do not record, 1 to X = sequential number, added to the file name).

**Description**: Starts or stops the recording of standard requests received by 4D Server (excluding Web requests). By default, the value is 0 (requests not recorded).

4D Server lets you record each request received by the server machine in a log file. When this mechanism is enabled, two files are created in the Logs folder of the database. They are named *4DRequestsLogServer\_X*.txt and *4DRequestsLog\_ProcessInfoServer\_X*.txt on the server, and *4DRequestsLog\_X*.txt and *4DRequestsLog\_ProcessInfo\_X*.txt on the remote, where X is the sequential number of the log. Once a file has reached a size of 10 MB, it is closed and a new one is generated, with an incremented sequential number. If a file of the same name already exists, it is replaced directly. You can set the starting number of the sequence using the *value* parameter. These text files store various information concerning each request in a simple tabbed format: time, process number, size of request, processing duration, etc. For more information on the 4DRequestsLog files, please refer to the *Description of log files* section.



### Client Web log recording (30)

**Scope**:All 4D remote machines

 **Kept between two sessions**: Yes

 **Possible values**: 0 = Do not record (default), 1 = Record in CLF format, 2 = Record in DLF format, 3 = Record in ELF format, 4 = Record in WLF format.

**Description**: Starts or stops the recording of Web requests received by the Web servers of all the client machines. By default, the value is 0 (requests not recorded).

The operation of this selector is identical to that of selector 29; however, it applies to all the 4D remote machines used as Web servers. The "logweb.txt" file is, in this case, automatically placed in the Logs subfolder of the remote 4D database folder (cache folder). If you only want to set values for certain client machines, use the Preferences dialog box of 4D in remote mode.



### Table sequence number (31)

**Scope**:4D application

 **Kept between two sessions**: Yes

 **Possible values**: Any longint value.

**Description**: This selector is used to modify or get the current unique number for records of the table passed as parameter. "Current number" means "last number used": if you modify this value using [SET DATABASE PARAMETER](set-database-parameter.md), the next record will be created with a number that consists of the value passed + 1\. This new number is the one returned by the [Sequence number](sequence-number.md) command as well in any field of the table to which the "Autoincrement" property has been assigned in the Structure editor or via SQL.

By default, this unique number is set by 4D and corresponds to the order of record creation. For additional information, refer to the documentation of the [Sequence number](sequence-number.md) command.



### Debug log recording (34)

**Thread-safe** : Yes

**Scope**: 4D application

Kept between two **sessions**: No

**Description**: Starts or stops the sequential recording of events occurring at the 4D programming level in the *4DDebugLog\[\_n\].txt* file or *4DDebugLogServer\[\_n\].txt* (where \_n is the segment number of the file and *Server* is added to the file name when generated on the server). Two modes are available:

- Standard mode provides a basic view of events and the file is automatically placed in the Logs subfolder of the database, next to the structure file. Execution times are expressed in milliseconds with the "< ms" value displayed when an operation lasts less than one millisecond. 

- Tabbed mode provides additional information and uses a more compact, tabbed format in the file. Execution times are expressed in microseconds.

**Possible values**: Longint containing a bit field: value = bit1(1)+bit2(2)+bit3(4)+bit4(8)+…). 

- Bit 0 (value 1) requests to enable the file (note that any other non-null value also enables it as well)

- Bit 1 (value 2) requests call parameters to commands and (interpreted mode only) methods

- Bit 2 (value 4) enables tabbed format.

- Bit 3 (value 8) disables immediate writing of each operation on disk (enabled by default). Immediate writing is slower but more effective, for example for investigating causes of a crash. If you disable this mode, the file contents are generated more quickly.

- Bit 4 (value 16) disables recording of plug-in calls (enabled by default).

- Bit 5 (value 32) disables member function logging.

Examples:

SET DATABASE PARAMETER (34;1) // enables standard mode without parameters, with runtimes

SET DATABASE PARAMETER (34;2) // enables standard mode with parameters and runtimes

SET DATABASE PARAMETER (34;2+4) // enables tabbed mode with parameters and runtimes

SET DATABASE PARAMETER (34;0) // disables file

For any type of interpreted or compiled 4D application (4D all modes, 4D Server, 4D Volume Desktop), you can avoid having a file record too much information by:

- restricting the 4D commands that are examined by using Log command list (selector 80), or 

- restricting it to the current process only with Current process debug log recording (selector 111). This will add the letter "p" and the process number to the file name: *4DDebugLog\[\_pn\_n\].txt*  or *4DDebugLogServer\[\_pn\_n\].txt* *

*For more information about this format and on the use of the *4DDebugLog* file, please refer to the *Description of log files* section..

 This selector is provided solely for the purpose of debugging and should be used with care since it can impact the application performance. 







### Client Server port ID (35)

**Scope**:Database 

 **Kept between two** **sessions**: Yes

 **Possible values**: 0 to 65535

**Description**: TCP port number where the 4D Server publishes the database (bound for 4D remote machines). By default, the value is 19813\. 

Customizing this value means that several 4D client-server applications can be used on the same machine with the TCP protocol; in this case, you must indicate a different port number for each application.

The value is stored in the database structure file. It can be set with 4D in local mode but is only taken into account in client-server configuration.

When you modify this value, it is necessary to restart the server machine in order for the new value to be taken into account.



### HTTPS Port ID (39)

**Scope**:4D local, 4D Server

 Kept between two **sessions**: Yes

**Description**: *Constant obsolete (kept for compatibility reasons only).* We now recommend using the [WEB SET OPTION](web-set-option.md) and [WEB GET OPTION](web-get-option.md) commands for configuring the HTTP server.



### Client HTTPS port ID (40)

**Scope**:All 4D remote machines

 **Kept between two** **sessions**: Yes

 **Possible values**: 0 to 65535

**Description**: TCP port number used by the Web servers of the client machines for secure connections via SSL (HTTPS protocol). By default, the value is 443 (standard value).

This selector can be used to modify by programming the TCP port used by the Web servers of the client machines for secure connections via SSL (HTTPS protocol). By default, the value is 443 (standard value).

This selector operates exactly the same way as selector 39; however, it applies to all the 4D remote machines used as Web servers. If you only want to modify the value of certain specific client machines, use the Preferences dialog box of the remote 4D.



### SQL Autocommit (43)

**Scope**:Database

 **Kept between two** **sessions**: Yes

 **Possible values**: 0 (deactivation) or 1 (activation)

**Description**: Activation or deactivation of the SQL auto-commit mode. By default, the value is 0 (deactivated mode)

 The auto-commit mode is used to strengthen the referential integrity of the database. When this mode is active, all *SELECT*, *INSERT*, *UPDATE* and *DELETE* (SIUD) queries are automatically included in ad hoc transactions when they are not already executed within a transaction. This mode can also be set in the Preferences of the database.



### SQL Engine case sensitivity (44)

**Scope**: Database

Kept between two **sessions**: Yes

**Possible values**: 0 (case not taken into account) or 1 (case-sensitive)

**Description**: Activation or deactivation of case-sensitivity for string comparisons carried out by the SQL engine. 

By default, the value is 1 (case-sensitive): the SQL engine differentiates between upper and lower case and between accented characters when comparing strings (sorts and queries). For example “ABC”= “ABC” but “ABC” # “Abc” and "abc" # "âbc." In certain cases, for example so as to align the functioning of the SQL engine with that of the 4D engine, you may wish for string comparisons to not be case-sensitive (“ABC”=“Abc"="âbc"). 

**Warning:* Since this option modifies the database structure file and all processes, for performance reasons it is highly recommended to set it at database startup only.* This option can also be set in the Database settings.



### Client log recording (45)

**Scope**: Remote 4D machine 

**Kept between two sessions**: No

**Possible values**: 0 or from 1 to X (0 = do not record, 1 to X = sequential number, attached to file name). 

**Description**: Starts or stops recording of standard requests carried out by the 4D client machine that executed the command (excluding Web requests). By default, the value is 0 (no recording of requests). 

4D lets you record the log of requests carried out by the client machine. When this mechanism is activated, two files are created on the client machine, in the Logs subfolder of the local folder of the database. They are named 4DRequestsLog\_X.txt and 4DRequestsLog\_ProcessInfo\_X.txt, where X is the sequential number of the log. Once the file 4DRequestsLog has reached a size of 10 MB, it is closed and a new one is generated, with an incremented sequential number. If a file with the same name already exists, it is directly replaced. You can set the starting number for the sequence using the value parameter.

These text files store various information concerning each request in a simple tabbed format: time, process number, size of request, processing duration, etc. For more information on the 4DRequestsLog files, please refer to the *Description of log files* section.



### Query by formula on server (46)

**Scope**: Current table and process

 **Kept between two sessions**: No

 **Possible values**: 0 (use database configuration), 1 (execute on client) or 2 (execute on server)

**Description**: Execution location of [QUERY BY FORMULA](query-by-formula.md) and [QUERY SELECTION BY FORMULA](query-selection-by-formula.md) commands for the *table* passed in the parameter. 

When using a database in client-server mode, the query "by formula" commands can be executed either on the server or on the client machine:

In databases created with 4D v11 SQL, these commands are executed on the server. In converted databases, these commands are executed on the client machine, as in previous versions of 4D.In converted databases, a specific preference (Application/Compatibility page) can be used to globally modify the execution location of these commands.This difference in execution location influences not only application performance (execution on the server is usually faster) but also programming. In fact, the value of the components of the formula (in particular variables called via a method) differ according to the execution context. You can use this selector to punctually adapt the operation of your application. 

If you pass 0 in the *value* l’parameter, the execution location of query "by formula" commands will depend on the database configuration: in databases created with 4D v11 SQL, these commands will be executed on the server. In converted databases, they will be executed on the client machine or the server according to the database preferences. Pass 1 or 2 in *value* to "force" the execution of these commands, respectively, on the client or on the server machine.

Refer to example 2.

**Note:** If you want to be able to enable "SQL type" joins (see the QUERY BY FORMULA Joins selector), you must always execute formulas on the server so that they have access to the records. Be careful, in this context, the formula must not contain any calls to a method, otherwise it will automatically be switched to the remote machine.



### Order by formula on server (47)

**Scope**:Current table and process

 **Kept between two** **sessions**: No

 **Possible values**: 0 (use database configuration), 1 (execute on client) or 2 (execute on server)

**Description** : Execution location of [ORDER BY FORMULA](order-by-formula.md) command for the table passed in the parameter. 

When using a database in client-server mode, this command can be executed either on the server or on the client machine. This selector can be used to specify the execution location of this command (server or client). This mode can also be set in the database preferences. For more information, please refer to the description of selector 46, Query By Formula On Server.

**Note:** If you want to be able to enable "SQL type" joins (see the QUERY BY FORMULA Joins selector), you must always execute formulas on the server so that they have access to the records. Be careful, in this context, the formula must not contain any calls to a method, otherwise it will automatically be switched to the remote machine.



### Auto synchro resources folder (48)

**Scope**:4D remote machine

 **Kept between two** **sessions**: No

 **Possible values**: 0 (no synchronization), 1 (auto synchronization) or 2 (ask).

**Description**: Dynamic synchronization mode for *Resources* folder of 4D client machine that executed the command with that of the server. 

When the contents of the *Resources* folder on the server has been modified or a user has requested synchronization (for example via the resources explorer or following the execution of the [SET DATABASE LOCALIZATION](set-database-localization.md) command), the server notifies the connected client machines. 

Three synchronization modes are then possible on the client side. The Auto Synchro Resources Folder selector is used to specify the mode to be used by the client machine for the current session:

0 (default value): no dynamic synchronization (synchronization request is ignored) 1: automatic dynamic synchronization2: display of a dialog box on the client machines, with the possibility of allowing or refusing synchronization.The synchronization mode can also be set globally in the application Preferences.



### Query by formula joins (49)

**Scope**:Current process

 **Kept between two** **sessions**: No

 **Possible values**: 0 (use database configuration), 1 (always use automatic relations) or 2 (use SQL joins if possible).

**Description**: Operating mode of the [QUERY BY FORMULA](query-by-formula.md) and [QUERY SELECTION BY FORMULA](query-selection-by-formula.md) commands relating to the use of "SQL joins."

In databases created starting with version 11.2 of 4D v11 SQL, these commands carry out joins based on the SQL joins model. This mechanism can be used to modify the selection of a table according to a query carried out on another table without these tables being connected by an automatic relation (necessary condition in previous versions of 4D).

The QUERY BY FORMULA Joins selector lets you specify the operating mode of the query by formula commands for the current process:

0: Uses the current settings of the database (default value). In databases created starting with version 11.2 of 4D v11 SQL, "SQL joins" are always activated for queries by formula. In converted databases, this mechanism is not activated by default for compatibility reasons but can be implemented via a preference.1: Always use automatic relations (= functioning of previous versions of 4D). In this mode, a relation is necessary in order to set the selection of a table according to queries carried out on another table. 4D does not do "SQL joins."2: Use SQL joins if possible (= default operation of databases created in version 11.2 and higher of 4D v11 SQL ). In this mode, 4D establishes "SQL joins" for queries by formula when the formula is suited for it (with two notable exceptions, see the description of the [QUERY BY FORMULA](query-by-formula.md) or [QUERY SELECTION BY FORMULA](query-selection-by-formula.md) command).**Note:** With 4D in remote mode, "SQL joins" can only be used if the formulas are executed on the server (they must have access to the records). To configure where formulas are to be executed, please refer to selectors 46 and 47.



### HTTP compression level (50)

**Scope**:4D application

 Kept between two **sessions**: No

**Description**: *Constant obsolete (kept for compatibility reasons only).* We now recommend using the [WEB SET OPTION](web-set-option.md) and [WEB GET OPTION](web-get-option.md) commands for configuring the HTTP server.



### HTTP compression threshold (51)

**Scope**:4D application

 **Kept between two** **sessions**: No

**Description**: *Constant obsolete (kept for compatibility reasons only).* We now recommend using the [WEB SET OPTION](web-set-option.md) and [WEB GET OPTION](web-get-option.md) commands for configuring the HTTP server.



### Server base process stack size (53)

**Scope**: 4D Server

 Kept between two **sessions**: No

 **Possible values**: Positive longint.

**Description**: Size of the stack allocated to each preemptive system process on the server, expressed in bytes. The default size is determined by the system.

Preemptive system processes (processes of the 4D client base process type) are loaded to control the main 4D client processes. The size allocated by default to the stack of each preemptive process allows a good ease of execution but may prove to be consequential when very large numbers of processes (several hundred) are created. 

For optimization purposes, this size can be reduced considerably if the operations carried out by the database allow for it (for example if the database does not carry out sorts of large quantities of records). Values of 512 or even 256 KB are possible. Be careful, under-sizing the stack is critical and can be harmful to the operation of 4D Server. Setting this parameter should be done with caution and must take the database conditions of use into account (number of records, type of operations, etc.). 

In order to be taken into account, this parameter must be executed on the server machine (for example in the *On Server Startup Database Method*).



### Idle connections timeout (54)

**Scope**:4D application unless value is negative

**Kept between two** **sessions**: No

**Possible values**: Whole value expressing a duration in seconds. The value can be positive (new connections) or negative (existing connections). By default, the value is 20.

**Description**: Maximum period of inactivity (timeout) for connections to both the 4D database engine and the SQL engine, as well as, in *ServerNet* mode (new network layer), to the 4D application server. When an idle connection reaches this limit, it is automatically put on standby, which freezes the client/server session and closes the network socket. In the server administration window, the state of the user process is indicated as "Postponed". This functioning is completely transparent for the user: as soon as there is new activity on the connection which is on standby, the socket is automatically reopened and the client/server session is restored. 

On the one hand, this setting lets you save resources on the server: connections on standby close the socket and free up a process on the server. On the other hand, it lets you avoid losing connections due to the closing of idle sockets by the firewall. For this, the timeout value for idle connections must be lower than that of the firewall in this case. 

If you pass a positive value in *value*, it applies to all new connections in all the processes. If you pass a negative value, it applies to connections that are open in the current process. If you pass 0, idle connections are not subjected to a timeout.

This parameter must be set on the client side. Usually, you do not need to change this value.



### PHP interpreter IP address (55)

**Scope**:4D application

 Kept between two   **sessions**: No

**Values**: Formatted string of the IPv4 type (for example "127.0.0.1") or IPv6 type (for example "2001:0db8:0000:0000:0000:ff00:0042:8329")

**Description**: IP address used locally by 4D to communicate with the PHP interpreter via FastCGI. By default, the value is "127.0.0.1" (addresses in IPv6 format are supported starting with 4D v16R4). This address must correspond to the machine where 4D is located. This parameter can also be set globally for all the machines via the Database Settings.

For more information about the PHP interpreter, please refer to the *Design Reference* manual.



### PHP interpreter port (56)

**Scope**:4D application

 **Kept between two** **sessions**: No

**Values**: Positive long integer type value. By default, the value is 8002\. 

**Description**: Number of the TCP port used by the PHP interpreter of 4D. This parameter can also be modified globally for all the machines via the Database Settings. For more information about the PHP interpreter, please refer to the *Design Reference* manual.



### SSL cipher list (64)

**Scope**: 4D application

Kept between two **sessions**: No

**Possible values**: Sequence of strings separated by colons.

**Description:** Cipher list used by 4D for the secure protocol. This list modifies the priority of ciphering algorithms implemented by 4D. For example, you can pass the following string in the *value* parameter: "HIGH:!aNULL:!MD5:!3DES:!CAMELLIA:!AES128:!RSA:!DH:!RC4". For a complete description of the syntax for the ciphers list, refer to the *ciphers page of the OpenSSL*   *site*.

This setting applies to the main Web server (excluding Web server objects), the SQL server, client/server connections, as well as the HTTP client and all the 4D commands that make use of the secure protocol. It is temporary (it is not maintained between sessions). 

When the cipher list has been modified, you will need to restart the server concerned in order for the new settings to be taken into account.

To reset the cipher list to its default value (stored permanently in the SLI file), call the [SET DATABASE PARAMETER](set-database-parameter.md) command and pass an empty string ("") in the *value* parameter. 

**Note:** With the [Get database parameter](get-database-parameter.md) command, the cipher list is returned in the optional *stringValue* parameter and the return parameter is always 0.



### Cache unload minimum size (66)

**Scope**: 4D application

**Kept between two sessions**: No

**Possible values**: Positive longint > 1.

**Description**: Minimum size of memory to release from the database cache when the engine needs to make space in order to allocate an object to it (value in bytes). 

The purpose of this selector is to reduce the number of times that data is released from the cache in order to obtain better performance. You can vary this setting according to the size of the cache and that of the blocks of data being handled in your database. 

By default, if this selector is not used, 4D unloads at least 10% of the cache when space is needed.



### Direct2D status (69)

**Scope**: 4D application 

**Kept between two sessions**: No

**Description**: Activation mode of Direct2D under Windows.

**Possible values**: One of the following constants (mode 3 by default):

Direct2D Disabled (0): Direct2D mode is not enabled and the database functions in the previous mode (GDI/GDIPlus).

Direct2D Hardware (1): Use Direct2D as graphics hardware context for entire 4D application. If this context is not available, use Direct2D graphics software context.

Direct2D Software (3) (Default mode): Beginning with Windows 7, use Direct2D graphics software context for entire 4D application. 

**Warning:* This selector is provided for debugging purposes only. Since several 4D features rely on Direct2D, it must not be disabled in deployed applications. Only the default mode (Direct2D Software) is approved for deployed applications.*



### Direct2D get active status (74)

**Note**: You can only use this selector with the [Get database parameter](get-database-parameter.md) command and its value cannot be set.

**Description**: Returns active implementation of Direct2D under Windows. 

**Possible values**: 0, 1, 2, 3, 4 or 5 (see values of selector 69). The value returned depends on the availability of Direct2D, the hardware and the quality of Direct2D support by the operating system.

For example, if you execute:

 SET DATABASE PARAMETER(Direct2D status;Direct2D Hardware)  $mode:=Get database parameter(Direct2D get active status)

- On Windows 7 and higher, *$mode* is set to 1 when the system detects hardware compatible with Direct2D; otherwise, *$mode* is set to 3 (software context).

- On Windows Vista, *$mode* is set to 1 when the system detects hardware compatible with Direct2D; otherwise, *$mode* is set to 0 (disabling of Direct2D).

- On Windows XP, *$mode* is always set to 0 (not compatible with Direct2D).



### Diagnostic log recording (79)

**Thread-safe** : Yes

**Scope**: 4D application

Kept between two **sessions**: No

Possible values: 0 or 1 (0 = do not record, 1 = record)

**Description**: Starts or stops recording of the 4D diagnostic file. By default, the value is 0 (do not record).

4D can continuously record a set of events related to the internal application operation into a diagnostic file. Information contained in this file is intended for the development of 4D applications and can be analyzed with the help of the 4D tech support (for more information, please refer to the *Description of log files* section on *developer.4d.com*). When you pass 1 in this selector, a diagnostic file is automatically created (or opened) in the database **Logs** folder. The file is named *4DDiagnosticLog\_X*.txt (or *4DDiagnosticLogServer\_X*.txt if generated on the server). Once this file reaches a size of 10 MB, it is closed and a new file is generated, with an incremented sequence number X. 

Note that you can include custom information in this file using the [LOG EVENT](log-event.md) command.



### Log command list (80)

**Scope**: 4D application

Kept between two **sessions**: No

Possible values: String containing a list of 4D command numbers to record (separated by semi-colons) or "all" to record all the commands or "" (empty string) to record none of them or prefixed by "-" to exclude specific commands. 

**Description**: List of 4D commands to record in or exclude from the debugging file (see selector 34, Debug Log Recording). By default, all 4D commands are recorded.

This selector restricts the quantity of information saved in the debugging file by limiting the 4D commands whose execution you want to record or exclude from recording. For example, you can write:

 SET DATABASE PARAMETER(Log command list;"277;341") //Record only the QUERY and QUERY SELECTION commands    OR    SET DATABASE PARAMETER(Log command list;"-1666;-323") //Exclude the SET USER ALIAS and DELAY PROCESS commands from being recorded



### Spellchecker (81)

**Scope**: 4D application

 **Kept between two sessions**: No

 **Possible values**: 0 (default) = native macOS spellchecker (Hunspell disabled), 1 = Hunspell spellcheck enabled. 

**Description**: Enables the Hunspell spellcheck under macOS. By default, the native spellchecker is enabled on this platform. You may prefer to use the Hunspell spellcheck, for example, in order to unify the interface for your cross-platform applications (under Windows, only the Hunspell spellcheck is available). For more information, refer to *Spell checking*.



### Dates inside objects (85)

Scope: Current process

 Kept between two **sessions**: No

 **Possible values**: String type without time zone (0), String type with time zone (1), Date type (2) (default)

**Description**: Defines the way dates are stored within objects, as well as how they will be imported/exported in JSON. 

When the selector value is Date type (default value for databases created with 4D v17 and higher), 4D dates are stored with the date type within objects, with respect to the local date settings. When converted to JSON format, date attributes will be converted to strings which do not include a time. (**Note:** this setting can be set by means of the "Use date type instead of ISO date format in objects" option found on the *Compatibility page* of the Database Settings).

Passing String type with time zone in this selector will convert 4D dates into ISO strings and take the local time zone into account. For example, converting the date 23/08/2013 gives you "2013-08-22T22:00:000Z" in JSON format when the operation is performed in France during Daylight Savings Time (GMT+2). This principle conforms to the standard operation of JavaScript. This can be a source of errors when you want to send JSON date values to someone in a different time zone. For example, when you export a table using [Selection to JSON](selection-to-json.md) in France that is meant to be reimported in the US using [JSON TO SELECTION](json-to-selection.md). Since dates are re-interpreted in each time zone, the values stored in the database will be different. In this case, you can modify the conversion mode for dates so that they do not take the time zone into account by passing String type without time zone in this selector. Converting the date 23/08/2013 will then give you "2013-08-23T00:00:00Z" in all cases.



### Diagnostic log level (86)

**Thread-safe** : Yes

**Scope:** 4D application 

**Kept between two sessions:** No

**Description:** Level(s) of messages to be included in the diagnostic log when enabled (see selector Diagnostic log recording). Each level designates a category of diagnostic messages and automatically includes more important categorie(s). For a description of categories, see *Diagnostic log levels* section on *developer.4d.com*. 

**Possible values:** One of the following constants (Log info by default): Log trace: activates ERROR, WARN, INFO, DEBUG, TRACE (most detailed level) Log debug: activates ERROR, WARN, INFO, DEBUG Log info: activates ERROR, WARN, INFO (default) Log warn: activates ERROR, WARN Log error: activates ERROR (least detailed level)



### Use legacy network layer (87)

**Scope**: 4D in local mode, 4D Server

**Kept between two sessions**: Yes

**Description:** Sets or gets the current status of the legacy network layer for client/server connections. The legacy network layer is obsolete beginning with 4D v14 R5 and should be replaced progressively in your applications with the *ServerNet* network layer. *ServerNet* will be required in upcoming 4D releases in order to benefit from future network evolutions. For compatibility reasons, the legacy network layer is still supported to allow a smooth transition for existing applications; (it is used by default in applications converted from a release prior to v14 R5). Pass 1 in this parameter to use the legacy network layer (and disable *ServerNet*) for your client/server connections, and pass 0 to disable the legacy network (and use the *ServerNet*). 

This property can also be set by means of the "Use legacy network layer" option found on the *Compatibility page* of the Database Settings (see *Network and Client-Server options*). In this section, you will also find a discussion about migration strategy. We recommend that you activate the *ServerNet* as soon as possible. You will need to restart the application in order for this parameter to be taken into account. 

**Possible values:** 0 or 1 (0 = do not use legacy layer, 1 = use legacy layer)

**Default value:** 0 in databases created with 4D v14 R5 or higher, 1 in databases converted from 4D v14 R4 or earlier.



### SQL Server Port ID (88)

**Scope**: 4D local, 4D Server.

**Kept between two sessions**: Yes

**Description**: Gets or sets the TCP port number used by the integrated SQL server of 4D in local mode or 4D Server. By default, the value is 19812\. When this selector is set, the database setting is updated. You can also set the TCP port number on the "SQL" page of the Database Settings dialog box. 

**Possible values**: 0 to 65535.

**Default value**: 19812



### Circular log limitation (90)

**Thread-safe** : Yes

**Scope**: 4D local, 4D Server.

**Kept between two sessions**: No

**Possible values**: Any integer value, 0 = keep all logs

**Description**: Maximum number of files to keep in rotation for each type of log. By default, the 50 most recent files are kept. If you pass a value *X*, only the *X* most recent files are kept, with the oldest being erased automatically when a new one is created. This setting applies to all log files, i.e. request logs (selectors 28 and 45), debug log (selector 34), events log (selector 79), Web logs (selectors 29 and 84 of the [WEB SET OPTION](web-set-option.md) command), etc.



### Number of formulas in cache (92)

**Scope**: 4D application

**Kept between two sessions**: No

**Possible values**: Positive longints

**Default value**: 0 (no cache) 

**Description**: Sets or gets the maximum number of formulas to be kept in the cache of formulas, which is used by the [EXECUTE FORMULA](execute-formula.md) command. This limit is applied to all processes, but each process has its own formula cache. Caching formulas accelerates the [EXECUTE FORMULA](execute-formula.md) command execution in compiled mode since each cached formula is tokenized only once in this case. When you change the cache value, existing contents are reset even if the new size is larger than the previous one. Once the maximum number of formulas in the cache is reached, a new executed formula will erase the oldest one in the cache (FIFO mode). This parameter is only taken into account in compiled databases or compiled components.



### OpenSSL version (94)

**Scope**: all 4D machines*

* **Kept between two sessions**: No

**Description**: Returns the version number of the OpenSSL library in use on the machine. (Read only)



### Cache flush periodicity (95)

**Thread-safe** : Yes


**Scope**: 4D local, 4D Server

**Kept between two sessions**: No

**Possible values**: longint > 1 (seconds)

**Description**: Gets or sets the current cache flush periodicity, expressed in seconds. Modifying this value overrides the **Flush Cache every X Seconds** option in the [XML DECODE](xml-decode.md) of the Database settings for the session (it is not stored in the Database settings).



### Remote connection sleep timeout (98)

**Scope**: 4D Server application

**Kept between two sessions**: No

**Possible values**: Positive longint

**Description**: Current remote connection sleep timeout in seconds. By default, the value is 172800 (48 hours). 

The sleep timeout is applied after a machine running a 4D remote application has switched to sleep mode. In this case, its session is maintained by 4D Server (see feature description). 4D Server checks every 5 minutes if any sleeping remote 4D has exceeded the sleep timeout, in which case it is dropped. Thus, the maximum allowed sleeping time is *current sleep timeout + 300*. In some cases, you might want to modify the sleep timeout, for example to release locked records/licenses more rapidely.



### Tips enabled (101)

**Scope:** 4D application

**Kept between two sessions:** No

**Possible values:** 0 = tips disabled, 1 = tips enabled (default)

**Description:** Sets or gets the current display status of the tips for the 4D application. By default, tips are enabled.

 Note that this parameter sets all 4D tips, i.e. form help messages and Design mode editor's tips.



### Tips delay (102)

**Scope:** 4D application

**Kept between two sessions:** No

**Possible values:** longint >= 0 (ticks)

**Description:** Delay before tips are displayed once the mouse cursor has stopped in objects with attached help messages. Value is expressed in ticks (1/60th of a second). Default value is 45 ticks (0.75 seconds).



### Tips duration (103)

**Scope:** 4D application

**Kept between two sessions:** No

**Possible values:** longint >= 60 (ticks)

**Description:** Maximum display duration for a tip. Value is expressed in ticks (1/60th of a second). Default value is 720 ticks (12 seconds).



### Min TLS version (105)

**Scope**: 4D Server, 4D Web Server and 4D SQL Server

**Kept between two sessions**: No

**Description**: Used to specify the minimum Transport Layer Security (TLS) version, which provides data encryption and authentication between applications and servers. Connection attempts from clients supporting only versions below the minimum will be rejected. The setting is applied globally to the network layer. Once modified, the server must be restarted to use the new value. 

**Default value**: TLSv1\_3 

**Possible values**: TLSv1\_2 (TLS 1.2, introduced in 2008) TLSv1\_3 (TLS 1.3, introduced in 2018) **NOTES**: 

- The 4D Internet Commands plugin uses a different network layer, therefore this selector will have no impact on its TLS version.

- This setting is ignored for your client server connections if your 4D Server uses the legacy network layer.



### User param value (108)

**Scope:** 4D local, 4D Server

**Kept between two sessions:** No

**Possible values**: Any custom string

**Description:** Custom string passed from one session to the next one when the 4D application is restarted. This selector is useful in the context of automated unit tests that require applications to restart with different parameters. 

When used with [SET DATABASE PARAMETER](set-database-parameter.md), defines a new value that will be available within the next opened database after 4D is restarted manually or using the [OPEN DATABASE](open-database.md)(\*), [OPEN DATA FILE](open-data-file.md), or [RESTART 4D](restart-4d.md) commands. When used with [Get database parameter](get-database-parameter.md), gets the currently available user parameter value, defined using a command line (see *Command Line Interface*), the .4DLink file (see *Using a 4DLink file*), or a call to [SET DATABASE PARAMETER](set-database-parameter.md) during the previous session. (\*) If [SET DATABASE PARAMETER](set-database-parameter.md) sets a User param value before a call to [OPEN DATABASE](open-database.md) with a .4DLink file that also contains a user-param xml attribute, 4D takes into account only the parameter provided by [SET DATABASE PARAMETER](set-database-parameter.md).



### Times inside objects (109)

Scope: 4D local, 4D Server (all processes)

 Kept between two **sessions**: No

 **Possible values**: Times in seconds (0) (default), Times in milliseconds (1) 

**Description**: Defines the way time values are converted and stored within object properties and collection elements, as well as how they will be imported/exported in JSON and in Web areas. By default, starting with 4D v17, times are converted and stored as number of seconds in objects. 

In previous releases, time values were converted and stored as number of milliseconds in those contexts. Using this selector can help you migrating your applications by reverting to previous settings if necessary.

**Note**: ORDA methods and SQL engine ignore this setting, they always assume time values to be numbers of seconds.



### SMTP Log (110)

**Thread-safe** : Yes

**Scope**: 4D local, 4D Server*

* **Kept between two sessions**: No

 **Possible values**: 0 or from 1 to X (0 = do not record, 1 to X = sequential number, added to the file name). By default, the value is 0 (SMTP exchanges not recorded).

**Description**: Starts or stops the recording of exchanges between 4D and the SMTP server, when a *transporter* object is processed through *transporter.send( )* or *SMTP\_transporter.checkConnection( )*. By default, the value is 0 (exchanges not recorded). When this mechanism is enabled, a log file is created in the Logs folder of the database. It is named 4DSMTPLog\_X.txt, where *X* is the sequential number of the log. Once the file 4DSMTPLog has reached a size of 10 MB, it is closed and a new one is generated, with an incremented sequential number. If a file of the same name already exists, it is replaced directly. You can set the starting number of the sequence using the *value* parameter. By default, all files are kept, but you can control the number of files to keep using the Circular log limitation parameter. 

For more information on the 4DSMTPLog\_X.txt files, please refer to the *Description of log files* section.



### Current process debug log recording (111)

**Scope:** 4D application

**Kept between two sessions:** No

**Description**: Starts or stops the sequential recording of programming events **for the current process** in a separated log file. This log is similar to the Debug log recording (selector 34) but focuses on the current process only. The log file name includes the letter "p" and the process number: 4DDebugLog\[\_p*N*_*n*].txt, where N is the process unique ID. 

For more information about this format and on the use of the *4DDebugLog* file, please refer to *Description of log files* in the Design Reference. 

**Notes:** This selector is provided solely for the purpose of debugging and should be used with care. In particular, it must not put into production since it can have an impact on the application performance. You can use both Debug log recording and Current process debug log recording selectors simultaneously, in which case the current process actions will not be logged in the main log file.



### Is current database a project (112)

**Note:** You can only use this selector with the [Get database parameter](get-database-parameter.md) command and its value cannot be set.

**Scope**: 4D application

**Description**: Returns 1 if the current database architecture is a project, and 0 otherwise. For more information, please refer to *Project vs binary database* section.



### Is host database a project (113)

**Note:** You can only use this selector with the [Get database parameter](get-database-parameter.md) command and its value cannot be set.

**Scope**: 4D application

**Description**: Returns 1 if the host database architecture is a project, and 0 otherwise. For more information, please refer to *Project vs binary database* section.



### Libldap version (114)

**Scope**: Current 4D machine

**Kept between two sessions**: n/a

**Description**: Returns the version number of the LDAP library in the 4D application on the current machine. (Read only)



### Libsasl version (115)

**Scope**: Current 4D machine

**Kept between two sessions**: n/a

**Description**: Returns the version number of the SASL library in the 4D application on the current machine. (Read only)



### POP3 Log (116)

**Thread-safe** : Yes

**Scope:** 4D local, 4D Server

**Kept between two sessions:** No

**Possible values:** 0 or from 1 to X (0 = do not record, 1 to X = sequential number, added to the file name). By default, the value is 0 (POP3 exchanges not recorded).

**Description**: Starts or stops the recording of exchanges between 4D and the POP3 server, when a transporter object is processed through *POP3\_transporter.getMail( )* or *POP3\_transporter.checkConnection( )*. By default, the value is 0 (exchanges not recorded). When this mechanism is enabled, a log file is created in the Logs folder of the database. It is named 4DPOP3Log\_X.txt, where X is the sequential number of the log. Once the file 4DPOP3Log has reached a size of 10 MB, it is closed and a new one is generated, with an incremented sequential number. If a file of the same name already exists, it is replaced directly. You can set the starting number of the sequence using the value parameter. By default, all files are kept, but you can control the number of files to keep using the Circular log limitation parameter. 

For more information on the 4DPOP3Log\_X.txt files, please refer to the *Description of log files* section.



### Is host database writable (117)

**Note:** You can only use this selector with the [Get database parameter](get-database-parameter.md) command and its value cannot be set.

**Scope**: 4D application

**Description**: Returns 1 if the host project file/structure file is writable, and 0 if it is read-only.



### IMAP Log (119)

**Thread-safe** : Yes

**Scope**: 4D local, 4D Server

**Kept between two sessions**: No

**Possible values**: 0 or from 1 to X (0 = do not record, 1 to X = sequential number, added to the file name). By default, the value is 0 (IMAP exchanges not recorded).

**Description**: Starts or stops the recording of exchanges between 4D and the IMAP server, when a transporter object is processed through *IMAP\_transporter.getMail( )* or *IMAP\_transporter.checkConnection( )*. By default, the value is 0 (exchanges not recorded). When this mechanism is enabled, a log file is created in the Logs folder of the database. It is named 4DIMAPLog\_X.txt, where X is the sequential number of the log. Once the file 4DIMAPLog has reached a size of 10 MB, it is closed and a new one is generated, with an incremented sequential number. If a file of the same name already exists, it is replaced directly. You can set the starting number of the sequence using the value parameter. By default, all files are kept, but you can control the number of files to keep using the Circular log limitation parameter.

For more information on the 4DIMAPLog\_X.txt files, please refer to the *Description of log files* section.



### Libzip version (120)

**Scope:** Current 4D machine

**Kept between two sessions:** n/a

**Description:** Returns the version number of the libzip library in the 4D application on the current machine. (Read only)



### Pause logging (121)

**Thread-safe** : Yes

**Scope**: 4D application

**Kept between two** **sessions**: No

**Possible values**: 0 (resume logs), 1 (pause logs)

**Description:** This selector allows to suspend/resume all logging operations started on the application (except ORDA logs). This feature can be useful to temporarily lighten the 4D application tasks or schedule logging operations.



### TCP log (131)

**Scope:** 4D application.

**Kept between two sessions:** No.

**Possible values:** `0`: Logging disabled (default), `1`: Logging enabled. 

**Description:** Enables or disables the `4DTCPLog.txt` file for logging TCP  events.



:::note 

* The *table* parameter is only used by selectors 31, 46 and 47\. In all other cases, it is ignored if it is passed.
* If a setting is not kept between sessions, but you want to ensure that it's always applied, you can execute it in the [On Startup database method](on-startup-database-method.md) or [On Server Startup database method](on-server-startup-database-method.md).

:::

## Thread-safe selectors 

The **SET DATABASE PARAMETER** command can be used in preemptive processes when calling the following selectors:

* [4D Server log recording](#4d-server-log-recording-28)
* [Debug log recording](#debug-log-recording-34)
* [Diagnostic log recording](#diagnostic-log-recording-79)
* [Diagnostic log level](#diagnostic-log-level-86)
* [Circular log limitation](#circular-log-limitation-90)
* [Cache flush periodicity](#cache-flush-periodicity-95)
* [SMTP Log](#smtp-log-110)
* [POP3 Log](#pop3-log-116)
* [IMAP Log](#imap-log-119)
* [Pause logging](#pause-logging-121)


## Example 1 

The following statement will avoid any unexpected timeout:

```4d
  //Increasing the timeout to 3 hours for the current process
 SET DATABASE PARAMETER(4D Server Timeout;-60*3)
  //Executing a time-consuming operation with no control from 4D
 ...
 WR PRINT MERGE(Area;3;0)
 ...
```

## Example 2 

This example temporarily forces the execution of a query by formula command on the client machine:

```4d
 curVal:=Get database parameter([table1];Query By Formula On Server) //Store the current setting
 SET DATABASE PARAMETER([table1];Query By Formula On Server;1) //Force execution on the client machine
 QUERY BY FORMULA([table1];myformula)
 SET DATABASE PARAMETER([table1];Query By Formula On Server;curVal) //Re-establish current setting
```

## Example 3 

You want to export data in JSON that contains a converted 4D date. Note that conversion occurs when the date is saved in the object, so you must call the [SET DATABASE PARAMETER](set-database-parameter.md) command before calling [OB SET](ob-set.md): 

```4d
 var $o : Object
 SET DATABASE PARAMETER(Dates inside objects;0)
 OB SET($o ;"myDate";Current date) // JSON conversion
 $json:=JSON Stringify($o)
 SET DATABASE PARAMETER(Dates inside objects;1)
```

## See also 

[Get database parameter](get-database-parameter.md)  
[LOG EVENT](log-event.md)  
[QUERY SELECTION](query-selection.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 642 |
| Thread safe | &cross; |



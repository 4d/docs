---
id: server-admin
title: 4D Server Administration Window
---


When 4D Server is launched with interface under Windows or macOS, a graphical administration window is available, providing many analysis and control tools for the published 4D application. To display the 4D Server Administration window for the opened project, select the **Window > Administration** menu item, or press **Ctrl+U**.

> The 4D Server administration window can be accessed from a remote 4D. For more information about this point, please refer to Administration from Remote Machines.


## Monitor Page

The **Monitor** page displays dynamic information concerning database use as well as information about the system and the 4D Server application.

![](assets/en/Admin/server-admin.png)

> On Windows, some of the system information displayed on this page are retrieved via the Windows "Performance Analyzer" tools. These tools can only be accessed when the user that opened the session where 4D Server was launched has the necessary administration authorization.

#### Área gráfica

The graphic area lets you see the evolution in real time of several parameters: the CPU usage, network traffic and memory. You select the parameter to be displayed via a menu found in the center of the window:

![](assets/en/Admin/server-graphic.png)

- **CPU Usage**: Overall CPU usage of the machine, for all applications taken together. The specific part of 4D Server in this usage rate is provided in the "Processors" information area.
- **Network**: Number of bytes received per second by the machine (server or client). The number of bytes sent is provided in the "Network" information area.
- **Physical memory**: Quantity of RAM memory of machine used by 4D Server. A more detailed view of memory use is provided in the "Memory" information area.
- **Virtual memory**: Quantity of virtual memory used by the 4D Server application. This memory is allocated by the system according to the application needs. The value found at the bottom right of the area indicates the quantity of memory currently being used. The value found at the top left indicates the maximum quantity of usable virtual memory. The maximum value is calculated dynamically according to the general memory settings of the application.
- **Cache**: Quantity of cache memory used by the 4D Server application. The value found at the bottom right of the area indicates the quantity of memory currently being used. The value found at the top left indicates the total size of the cache memory, as set via the Settings.

Note that when this option is selected, the graph area scrolling is slowed down since an efficient analysis of the cache is generally carried out over a fairly long observation period.


#### Visión general del área

The "Overview" area provides various information concerning the system, application and licenses installed on the 4D Server machine.

- **System Information**: Computer, system and IP address of server
- **Application Information**: Internal version number of 4D Server and Volume Shadow Copy status
- **Maximum connections**: Number of simultaneous connections allowed by type of server
- **License**: Description of license. When the product license or one of its attached expansions expires in less than 10 days, e.g. in case of a subscription-license, 4D Server tries to automatically renew the license from the 4D user account. In this case, if the automatic renewal failed for some reason (connection error, invalid account status, non-prolongated contract...), a warning icon is displayed next to the license to alert the server administrator. Additional information about the license renewal status can be displayed in a tip when you hover the mouse over the area:

![](assets/en/Admin/server-licence-failed.png)

Usually, you will need to check the [**Licences Manager**](licenses.md).

#### Área de detalles

The "Details" area repeats part of the information displayed in the graphic area and provides additional information as well.

- **Hard drive**: Overall capacity of the hard disk and distribution of the space used by the database data (data file + data index), the space used by other files and the free space available.
- **Memory**: RAM memory installed on the machine and amount of memory used by 4D Server, by other applications or that is free. The memory used by 4D Server can also be displayed dynamically in the graphic area.
- **Processors**: Instant occupancy rate for processor(s) of the machine by 4D Server and by other applications. This rate is constantly recalculated. The occupancy rate by 4D Server can also be displayed dynamically in the graphic area.
- **Network**: Instantaneous number of bytes sent and received by the machine (server or client). This value is updated constantly. The number of bytes received by can also be displayed dynamically in the graphic area.


## Página Usuarios

The **Users** page lists the 4D users connected to the server.


![](assets/en/Admin/server-users.png)

The "Users" button indicates, in parentheses, the total number of users connected to the server (this number does not take into account any display filters applied to the window). The page also contains a dynamic search area and control buttons. You can modify the order of the columns by dragging and dropping their header areas.

You can also sort the list of column values by clicking on its header. Click several times to specify in turn an ascending/descending order.

![](assets/en/Admin/server-users-sort.png)

### Lista de usuarios

For each user connected to the server, the list provides the following information:

- System of the client machine (macOS or Windows) as an icon.
- **4D User**: Name of the 4D user, or alias if set with the [`SET USER ALIAS`](https://doc.4d.com/4dv19/help/command/en/page1666.html) command on the user machine. If passwords are not activated and no alias has been set, all users are named "Designer".
- **Machine name**: Name of the remote machine.
- **Session name**: Name of the session opened on the remote machine.
- **IP Address**: IP address of the remote machine.
- **Login date**: Date and time of the remote machine connection.
- **CPU Time**: CPU time consumed by this user since connecting.
- **Activity**: Ratio of time that 4D Server devotes to this user (dynamic display). "Sleeping" if the remote machine has switched to sleep mode (see below).

#### Managing sleeping users

4D Server specifically handles cases where a machine running a 4D remote application switches to sleep mode while its connection to the server machine is still active. In this case, the connected 4D remote application automatically notifies 4D Server of its imminent disconnection. On the server, the connected user changes to a **Sleeping** activity status:

![](assets/en/Admin/server-sleeping.png)

This status frees up resources on the server. In addition, the 4D remote application reconnects to 4D Server automatically after waking up from sleep mode.

The following scenario is supported: a remote user stops working for awhile, for example during a lunch break, but keeps the connection to the server open. The machine switches to sleep mode. When the user returns, they wake the machine up and the 4D remote application automatically recovers its connection to the server as well as the session context.

> A sleeping remote session is automatically dropped by the server after 48 hours of inactivity. You can modify this default timeout using the [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv19/help/command/en/page642.html) command with the `Remote connection sleep timeout` selector.


### Área de búsqueda/filtrado

This feature can be used to reduce the number of rows displayed in the list to those that correspond to the text entered in the search area. The area indicates the columns where the search/filtering will be carried out. On the Users page, it will be the 4D User, Machine name and Session name columns.

The list is updated in real time as you enter text in the area. It is possible to enter more than one value to be searched for: separate the values with a semi-colon. The `OR` type operator is used in this case. For example, if you enter "John;Mary;Peter," only rows with John OR Mary OR Peter in the target columns will be kept.


### Botones de administración

This page includes three control buttons. These are active if at least one row is selected. You can select several rows by holding down the **Shift** key for an adjacent selection or **Ctrl** (Windows) / **Command** (macOS) key for a non-adjacent selection.

#### Enviar mensaje

This button can be used to send a message to the 4D users selected in the window. If no user is selected, the button is not active. When you click on this button, a dialog box appears that lets you enter the message. The dialog box indicates the number of users that will receive this message:

![](assets/en/Admin/server-message.png)

The message will be displayed as an alert on the remote machines.

> You can perfom the same action for remote users with the [`SEND MESSAGE TO REMOTE USER`](https://doc.4d.com/4dv19/help/command/en/page1632.html) command.


#### Watch Processes

This button can be used to directly show the processes of the user(s) selected on the [**Processes** page](#process-page) of the window. When you click on this button, 4D Server switches to the Processes page and enters the selected user names in the search/filtering area.

#### Drop user

This button can be used to force the selected user(s) to disconnect. When you click on this button, a warning dialog box appears so that you can confirm or cancel this operation (hold down **Alt** key while clicking on the **Drop user** button to disconnect the selected user(s) directly without displaying the confirmation dialog box).

> You can perfom the same action for remote users with the [`DROP REMOTE USER`](https://doc.4d.com/4dv19/help/command/en/page1633.html) command.



## Página Procesos

The **Processes** page lists all the processes underway.

![](assets/en/Admin/server-admin-process-page.png)


The "Processes" button indicates, in parentheses, the total number of processes running in the server (this number does not take into account any display filters applied to the window nor the state of the **Display processes by groups** option).

You can change the order of the columns by simply dragging and dropping the column header areas. You can also sort the list of column values by clicking on its header.

Like the Users page, this page contains a dynamic [search/filtering area](#searchfiltering-area) that can be used to reduce the number of rows displayed in the list to those that correspond to the text entered in the search area. The search/filtering is carried out in the Session and Process name columns.

There are also three shortcut buttons that can be used to filter by the type of process displayed in the window:

![](assets/en/Admin/server-process-buttons.png)

- **Users processes**: Processes generated by and for the user sessions. These processes are preceded by an icon in the form of a figure.
- **4D Processes**: Processes generated by the 4D Server engine. These processes are preceded by an icon in the form of a notched wheel.
- **Spare processes**: Processes that are inactive but kept temporarily and that can be reused at any time. This mechanism optimizes the reactivity of 4D Server. These processes are preceded by an icon in the form of a dimmed figure.

The **Display processes by groups** option lets you group together the internal processes of 4D Server as well as the client processes, for better readability. When you check this option:

- the "twinned" 4D client processes (main 4D client process and 4D client base process, see [Process Type](#process-type)) are grouped as one,
- a "Task managers" group is created; it includes the internal processes dedicated to dividing up tasks (Shared balancer, Net session manager, Exclusive pool worker),
- a "Client managers" group is created; it includes various client internal processes.

The lower area of the window is used to display the graphic representation of the activity of the selected process(es).

> You can select several rows by holding down the **Shift** key for an adjacent selection or **Ctrl** (Windows) / **Command** (macOS) for a non-adjacent selection.

The activity of the process is the percentage of time that 4D Server has devoted to this process (ratio). The window provides the following information for each process:

- Type of process (see below),
- Sesión/Información:
    - Proceso 4D - en blanco,
    - User process - 4D user name,
    - Web process - URL path,
- Nombre del proceso,
- Number of the process (as returned by the [`New process`](https://doc.4d.com/4dv19/help/command/en/page317.html) command for example). The process number is the number assigned on the server. In the case of a global process, this number may be different from that assigned on the client machine.
- Current state of the process,
- Running time (in seconds) of the process since its creation,
- Percentage of time that 4D Server has devoted to this process (ratio).

### Tipo del proceso

Each process is identified by an icon as well as a type. The color and form of the icon indicates the type of process:

| icon                                    | type                                                                                                                                                      |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](assets/en/Admin/server-icon-1.png)  | Application server                                                                                                                                        |
| ![](assets/en/Admin/server-icon-2.png)  | Servidor SQL                                                                                                                                              |
| ![](assets/en/Admin/server-icon-3.png)  | DB4D Server (database engine)                                                                                                                             |
| ![](assets/en/Admin/server-icon-4.png)  | Servidor Web                                                                                                                                              |
| ![](assets/en/Admin/server-icon-5.png)  | Servidor SOAP                                                                                                                                             |
| ![](assets/en/Admin/server-icon-6.png)  | Protected 4D client process (development process of a connected 4D)                                                                                       |
| ![](assets/en/Admin/server-icon-7.png)  | Main 4D client process (main process of a connected 4D). Collaborative process, equivalent on the server of the process created on the client machine)    |
| ![](assets/en/Admin/server-icon-8.png)  | 4D client base process (process parallel to a 4D client process. Preemptive process responsible for controlling the corresponding main 4D client process) |
| ![](assets/en/Admin/server-icon-9.png)  | Spare process (former or future "4D client database process")                                                                                             |
| ![](assets/en/Admin/server-icon-10.png) | SQL server worker process                                                                                                                                 |
| ![](assets/en/Admin/server-icon-11.png) | HTTP server worker process                                                                                                                                |
| ![](assets/en/Admin/server-icon-12.png) | 4D client process (process running on the connected 4D)                                                                                                   |
| ![](assets/en/Admin/server-icon-13.png) | Stored procedure (process launched by a connected 4D and running on the server)                                                                           |
| ![](assets/en/Admin/server-icon-14.png) | Web method (launched by a 4DACTION for example)                                                                                                           |
| ![](assets/en/Admin/server-icon-15.png) | Método web (apropiativo)                                                                                                                                  |
| ![](assets/en/Admin/server-icon-16.png) | SOAP method (launched by a Web Service)                                                                                                                   |
| ![](assets/en/Admin/server-icon-17.png) | SOAP method (preemptive)                                                                                                                                  |
| ![](assets/en/Admin/server-icon-18.png) | Logger (registrador)                                                                                                                                      |
| ![](assets/en/Admin/server-icon-19.png) | TCP connection listener                                                                                                                                   |
| ![](assets/en/Admin/server-icon-20.png) | Gestor de sesiones TCP                                                                                                                                    |
| ![](assets/en/Admin/server-icon-21.png) | Otro proceso                                                                                                                                              |
| ![](assets/en/Admin/server-icon-22.png) | Worker process (cooperative)                                                                                                                              |
| ![](assets/en/Admin/server-icon-23.png) | 4D client process (preemptive)                                                                                                                            |
| ![](assets/en/Admin/server-icon-24.png) | Stored procedure (preemptive process)                                                                                                                     |
| ![](assets/en/Admin/server-icon-25.png) | Worker process (preemptive)                                                                                                                               |

> Each main 4D client process and its "twinned" 4D client base process are grouped together when the **Display processes by groups** option is checked.


### Botones de administración

The page also has five control buttons that act on the selected process(es). Note that only user processes can be acted upon.

![](assets/en/Admin/server-process-actions.png)

- **Abort Process**: can be used to abort the selected process(es). When you click on this button, a warning dialog box appears so that you can confirm or cancel the operation.

> You can also abort the selected process(es) directly without displaying the confirmation dialog box by holding down the **Alt** key while clicking on this button, or by using the [`ABORT PROCESS BY ID`](https://doc.4d.com/4dv19/help/command/en/page1634.html) command.

- **Pause Process**: can be used to pause the selected process(es).
- **Activate Process**: can be used to reactivate the selected process(es). The processes must have been paused previously (using the button above or by programming); otherwise, this button has no effect.
- **Debug Process**: can be used to open on the server machine one or more debugger windows for the selected process(es). When you click on this button, a warning dialog box appears so that you can confirm or cancel the operation. Note that the debugger window is only displayed when the 4D code is actually executed on the server machine (for example in a trigger or the execution of a method having the "Execute on Server" attribute).

> You can also debug a process directly without displaying the confirmation dialog box by holding down the **Alt** key while clicking on this button.

- **Watch users**: used to display, on the [Users page](#users-page), all the processes of the selected user(s). This button is active when at least one user process is selected.


## Página Mantenimiento

The **Maintenance** page of the 4D Server Administration window provides information concerning the current operation of the application. It also provides access to basic maintenance functions:

![](assets/en/Admin/server-maintenance.png)


### Last verification/compacting

These areas indicate the date, time and status of the last [data verification](MSC/verify.md) and [compacting operation](MSC/compact.md) carried out on the database.

#### Verify Records and Indexes

This button can be used to launch the verification operation directly, without interrupting the server. Note that the server may be noticeably slowed down during the operation.

All the records and all the indexes of the database are verified. If you want to be able to target the verification or have additional options available, you will need to use the [Maintenance and Security Center](MSC/overview.md) (MSC).

After verification, a report file is generated in XML format on the server in the [maintenance Logs](Project/architecture.md#logs) folder. The **View Report** button (named **Download Report** if the operation was carried out from a remote machine) lets you display the file in your browser.


This area indicates the date, time and status of the last  carried out on the database data.

#### Compact Data...

Thus button can be used to launch a data compacting operation directly. This operation requires stopping the server: when you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation:

![](assets/en/Admin/server-shut.png)

After the actual interruption of the application service, 4D Server carries out a standard compacting operation on the database data. If you want to have additional options available, you will need to use the [MSC](MSC/overview.md).

Once the compacting is finished, 4D Server automatically restarts the application. The 4D users can then be reconnected.

> If the request for compacting was carried out from a remote 4D remote machine, this machine is automatically reconnected by 4D Server.

After verification, a report file is generated in XML format on the server in the [maintenance Logs](Project/architecture.md#logs) folder. The **View Report** button (named **Download Report** if the operation was carried out from a remote machine) lets you display the file in your browser.


### Uptime

This area indicates the duration of the 4D Server application execution since the last time it was started (days, hours and minutes).


#### Reiniciar el servidor...

This button can be used to immediately close and restart the project. When you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation. After validation, 4D Server automatically closes and reopens the project. The 4D users can then be reconnected.

> If the request for restarting was carried out from a remote 4D machine, this machine is automatically reconnected by 4D Server.

### Última copia de seguridad

This area indicates the date and time of the [last backup](MSC/backup.md) of the database and provides information about the next scheduled automatic backup (if any). Automatic backups are configured using the **Scheduler** page of the structure settings.

- **Last backup**: date and time of last backup.
- **Next backup**: date and time of next scheduled backup.
- **Needed space**: estimated space needed for the backup. The actual size of the backup file may vary according to the settings (compression, etc.) and according to variations of the data file.
- **Available space**: space available on the backup volume.


The **Start backup** button can be used to backup the database immediately using the current backup parameters (files backed up, location of archives, options, etc.). You can view these parameters by clicking on the **Settings...** button. During a backup on the server, the client machines are "blocked" (but not disconnected) and it is not possible for any new clients to connect.


### Historial de peticiones y depuración

This area indicates the server log files recording duration (when log files are activated) and allows you to control their activation.

Refer to the [**Description of log files**](debugLogFiles.md) section for details on log files.

#### Start/Stop Request and Debug Logs

The **Start Request and Debug Logs** button starts log files. Since this may noticeably deteriorate server performance, it is to be reserved for the development phase of the application.

> This button only logs operations that are executed on the server.

When the logs have been activated, the button title changes to **Stop Request and Debug Logs**, so that you can stop recording requests at any time. Pay attention to the fact that restarting the log after stopping it "erases" the previous file.

#### View Report

The **View Report** button (named **Download report** if the operation was carried out from a remote desktop client) lets you open a system window displaying the request log file.

#### Load logs configuration file

This button allows you to load a special server [log configuration file](debugLogFiles.md#using-a-log-configuration-file) (`.json` file). Such a file can be provided by 4D technical services to monitor and study specific cases.


#### Detener el registro

This button suspends all currently logging operations started on the server. This feature can be useful to temporarily lighten the server tasks.

When the logs have been paused, the button title changes to **Resume logging**, so that you can resume the logging operations.

> You can pause and resume logging using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html) command.


## Application Server Page

The Application Server page groups together information about the desktop application published by 4D Server and can be used to manage this publication.

![](assets/en/Admin/server-admin-application-page.png)


The upper part of the page provides information about the current status of the 4D Server application server.

- **State**: Started or Stopped.
- **Starting time**: Date and time the application server was launched. This date corresponds to the opening of the project by 4D Server.
- **Uptime**: Time elapsed since last opening of the project by the server.

### Accept/Reject New Connections

This button toggles and can be used to manage the access of new desktop client machines to the application server.

By default, when the project is published:
- The button is titled "Reject new connections."
- New desktop clients can connect freely (within the limit of the connections permitted by the license).
- The project name is published in the remote connection dialog box (if the "At Startup Publish Database Name in the Connection Dialog" option is checked in the Preferences).

If you click on the **Reject new connections** button:
- The button title changes to "Accept new connections."
- No new desktop client can then connect. Clients attempting to connect will receive the following message:

![](assets/en/Admin/server-error.png)

- The project name no longer appears in the remote connection dialog box.
- Desktop clients that are already connected are not disconnected and can continue to work normally.

> You can perform the same action with the [`REJECT NEW REMOTE CONNECTIONS`](https://doc.4d.com/4dv19/help/command/en/page1635.html) command.

- If you click on the **Accept new connections button**, the application server returns to its default state.

This feature permits, for example, an administrator to carry out various maintenance operations (verification, compacting, etc.) just after having started the server. If the administrator uses a remote connection, they can be certain to be the only one modifying the data. It is also possible to use this function in preparation of a maintenance operation which requires that there be no desktop client machine connected.

### Information

#### Configuración

This area provides information about the 4D project published by the server: name and location of data and structure files and name of database log file. You can click on the structure or data file name in order to view its complete pathname.

The **Mode** field indicates the current execution mode of the application: compiled or interpreted.

The lower part of the area indicates the server configuration parameters (launched as service, port and IP address) and the enabling of TLS for client-server connections (does not concern SQL nor HTTP connections).

#### Memoria

This area indicates the **Total cache memory** (parameter set in the settings) and the **Used cache memory** (dynamic allocation by 4D Server according to its needs).


#### Application Server Connections

- **Maximum**: maximum number of simultaneous client connections allowed for the application server. This value depends on the license installed on the server machine.
- **Used**: actual number of connections currently being used.


## SQL Server Page

The SQL Server page groups together information about the integrated SQL server of 4D Server. It also includes a button that can be used to control the activation of the server.

![](assets/en/Admin/server-admin-sql-page.png)


The upper part of the page provides information about the current status of the SQL server of 4D Server.

- **State**: Started or Stopped
- **Starting time**: Date and time the SQL server was last launched.
- **Uptime**: Time elapsed since last startup of the SQL server.

### Start / Stop SQL Server

This button toggles and can be used to control the activation of the 4D Server SQL server.

- When the SQL server state is "Started," the button is titled **Stop SQL Server**. If you click on this button, the 4D Server SQL server is immediately stopped; it no longer replies to any external SQL requests received on the designated TCP port.
- When the SQL server state is "Stopped," the button is titled **Start SQL Server**. If you click on this button, the 4D Server SQL server is immediately started; it replies to any external SQL queries received on the designated TCP port. Note that you will need a suitable license to be able to use the 4D SQL server.

> The SQL server can also be launched automatically on application startup (option in the Settings) or by programming.

### Information

#### Configuración

This area provides information about the SQL server configuration parameters: automatic launching on startup, listening IP address, TCP port (19812 by default) and enabling of SSL for SQL connections (does not concern 4D nor HTTP connections).

These parameters can be modified via the 4D Settings.

#### Conecciones

Number of SQL connections currently open on 4D Server.

#### Maximum Connections

Maximum number of simultaneous SQL connections allowed. This value depends on the license installed on the server machine.

## Página del servidor HTTP

The HTTP Server page groups together information about the operation of the Web server and SOAP server of 4D Server. The Web server lets you publish Web content such as HTML pages or pictures for Web browsers, and to handle REST requests. The SOAP server manages the publication of Web Services. These servers rely on the internal HTTP server of 4D Server.

![](assets/en/Admin/server-admin-web-page.png)


The upper part of the page provides information about the current status of the HTTP server of 4D Server.

- **State**: Started or Stopped
- **Starting time**: Date and time the HTTP server was last launched.
- **Uptime**: Time elapsed since last startup of the HTTP server.
- **Total HTTP hits**: Number of (low level) HTTP hits received by the HTTP server since it was started.


### Iniciar/detener el servidor HTTP

This button toggles and can be used to control the activation of the 4D Server HTTP server.

- When the HTTP server state is "Started," the button is titled **Stop HTTP Server**. If you click on this button, the 4D Server HTTP server is immediately stopped; the Web server, REST server, and SOAP server no longer accept any requests.
- When the HTTP server state is "Stopped," the button is titled **Start HTTP Server**. If you click on this button, the 4D Server HTTP server is immediately started; Web, REST, and SOAP requests are accepted.

> You must have a suitable license in order to be able to start the HTTP server.
> 
> The HTTP server can also be launched automatically on application startup (Settings) or by programming.

### Información Web

This area provides specific information about the Web server of 4D Server.

- **Web requests**: Accepted or Rejected. This information indicates whether the Web server is activated. Since the Web server is directly linked to the HTTP server, Web requests are accepted when the HTTP server is started and rejected when it is stopped.
- **Maximum connections**: Maximum number of Web connections allowed. This value depends on the license installed on the server machine.

### Información SOAP

This area provides specific information about the SOAP server of 4D Server and includes a control button.

- **SOAP requests**: Accepted or Rejected. This information indicates whether the SOAP server is activated. In order for SOAP requests to be accepted, the HTTP server must be started and the SOAP server must explicitly accept the requests (see the Accept/Reject button).
- **Maximum connections**: Maximum number of SOAP connections allowed. This value depends on the license installed on the server machine.
- **Accept/Reject SOAP requests** button: This button toggles and can be used to control the activation of the 4D Server SOAP server. This button modifies the value of the **Allow Web Services Requests** option on the "Web Services" page of the Settings (and vice versa). You can also use the [`SOAP REJECT NEW REQUESTS`](https://doc.4d.com/4dv19/help/command/en/page1636.html) command to refuse new SOAP requests, however this does not modify the value of the **Allow Web Services Requests** option.

If you click on the **Accept SOAP requests** button and the HTTP server is stopped, 4D automatically starts it.

### HTTP Server Configuration

This area provides information about the configuration parameters and operation of the HTTP server:

- **Auto-launched at startup**: parameter set via the Settings.
- **HTTP Server processes (used/total)**: number of HTTP processes created on the server (current number of processes / total of all processes created).
- **Cache memory**: size of HTTP server cache memory, when it is activated (size actually used by cache / maximum size theoretically allocated to the cache in the Settings). You can click on the **Clear Cache** button to empty the current cache.
- **Listening to IP**, **HTTP Port** (80 by default), **TLS enabled** for HTTP connections (does not concern 4D nor SQL connections) and **HTTPS Port** used: current [configuration parameters](WebServer/webServerConfig.md) of the HTTP server, specified through the Settings or by programming.
- **Log file information**: name, format and date of the next automatic log backup of the HTTP server (logweb.txt file).


## Página de seguimiento en tiempo real

The Real Time Monitor page monitors the progress of "long" operations performed by the application in real time. These operations are, for example, sequential queries, execution of formulas, etc.

![](assets/en/Admin/server-admin-monitor-page.png)
> This page is available in the administration window of the server machine and also from a remote 4D machine. In the case of a remote machine, this page displays data from operations performed on the server machine.

A line is added for each long operation performed on the data. This line automatically disappears when the operation is complete (you can check the **Display operations at least 5 seconds** option to keep quick operations on screen for 5 seconds, see below).

The following information is provided for each line:

- **Start Time**: starting time of operation in the format: "dd/mm/yyyy - hh:mm:ss"
- **Duration** (ms): duration in milliseconds of operation in progress
- **Information**: title of operation.
- **Details**: this area displays detailed information which will vary according to the type of operation selected. More specifically:
    + **Created on**: indidates whether the operation results from a client action (Created on client) or if it was started explicitly on the server by means of a stored procedure or the "Execute on server" option (Created on server).
    + **Operation Details**: Operation type and (for query operations) query plan.
    + **Sub-operations** (if any): Dependent operations of the selected operation (e.g. deleting related records before a parent record).
    + **Process Details**: Additional information concerning the table, field, process or client, depending on the type of operation

> Real-time monitoring page uses the [`GET ACTIVITY SNAPSHOT`](https://doc.4d.com/4dv19/help/command/en/page1277.html) command internally. More information can be found in this command description.

The page is active and updated permanently as soon as it is displayed. It should be noted that its operation can significantly slow the execution of the application. It is possible to suspend the updating of this page in one of the following ways:

- clicking on the **Pause** button,
- haciendo clic en la lista,
- pressing the space bar.

When you pause the page, a "PAUSED" message appears and the button label changes to **Resume**. You can resume monitoring of the operations by performing the same action as for pausing.

#### Modo avanzado

The RTM page can display additional information, if necessary, for each listed operation.

To access the advanced mode for an operation, press **Shift** and select the desired operation. All available information is then displayed in the "Process Details" area without any filtering (as returned by the `GET ACTIVITY SNAPSHOT` command). Available information depends on the operation selected.

Here is an example of information displayed in standard mode:

![](assets/en/Admin/server-admin-monitor-adv1.png)


In advanced mode (**Shift+Click** on the operation), additional information is displayed:

![](assets/en/Admin/server-admin-monitor-adv2.png)

#### Snapshot button

The **Snapshot** button allows you to copy to the clipboard all the operations displayed in the RTM panel, as well as their related details (process and sub-operation info):

![](assets/en/Admin/server-admin-monitor-snapshot.png)


#### Display operations at least 5 seconds

If you check the **Display operations at least 5 seconds** option, any listed operation will be displayed on the page for at least five seconds, even after its execution is finished. Retained operations appear dimmed in the operation list. This feature is useful for getting information about operations that execute very quickly.

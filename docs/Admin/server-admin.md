---
id: server-admin
title: 4D Server Administration Window
---


When 4D Server is launched with interface under Windows or macOS, it includes a graphical administration window. This window provides many analysis and control tools for published 4D applications:

![](assets/en/Admin/server-admin.png)

To display the 4D Server Administration window, make sure a project is opened and select the **Window > Administration** menu item, or press **Ctrl+U**.

> The 4D Server administration window can be accessed from a remote 4D. For more information about this point, please refer to Administration from Remote Machines XXXXX.

The window contains several pages that can be accessed using the buttons at the top.


## Monitor Page

The **Monitor** page displays dynamic information concerning database use as well as information about the system and the 4D Server application.

> On Windows, some of the system information displayed on this page are retrieved via the Windows "Performance Analyzer" tools. These tools can only be accessed when the user that opened the session where 4D Server was launched has the necessary administration authorization. 

### Graphic area

The graphic area lets you see the evolution in real time of several parameters: the CPU usage, network traffic and memory. You select the parameter to be displayed via a menu found in the center of the window:

![](assets/en/Admin/server-graphic.png)
 
- **CPU Usage**: Overall CPU usage of the machine, for all applications taken together. The specific part of 4D Server in this usage rate is provided in the "Processors" information area.
- **Network**: Number of bytes received per second by the machine (server or client). The number of bytes sent is provided in the "Network" information area.
- **Physical memory**: Quantity of RAM memory of machine used by 4D Server. A more detailed view of memory use is provided in the "Memory" information area.
- **Virtual memory**: Quantity of virtual memory used by the 4D Server application. This memory is allocated by the system according to the application needs. The value found at the bottom right of the area indicates the quantity of memory currently being used. The value found at the top left indicates the maximum quantity of usable virtual memory. The maximum value is calculated dynamically according to the general memory settings of the application.
- **Cache**: Quantity of cache memory used by the 4D Server application. The value found at the bottom right of the area indicates the quantity of memory currently being used. The value found at the top left indicates the total size of the cache memory, as set via the Settings.
 
Note that when this option is selected, the graph area scrolling is slowed down since an efficient analysis of the cache is generally carried out over a fairly long observation period.


### Overview Area

The "Overview" area provides various information concerning the system, application and licenses installed on the 4D Server machine.
 
- **System Information**: Computer, system and IP address of server
- **Application Information**: Internal version number of 4D Server and Volume Shadow Copy status
- **Maximum connections**: Number of simultaneous connections allowed by type of server
- **License**: Description of license. When the product license or one of its attached expansions expires in less than 10 days, e.g. in case of a subscription-license, 4D Server tries to automatically renew the license from the 4D user account. In this case, if the automatic renewal failed for some reason (connection error, invalid account status, non-prolongated contract...), a warning icon is displayed next to the license to alert the server administrator. Additional information about the license renewal status can be displayed in a tip when you hover the mouse over the area:

![](assets/en/Admin/server-licence-failed.png)

Usually, you will need to check the [**Licences Manager**](licenses.md).

### Details Area

The "Details" area repeats part of the information displayed in the graphic area and provides additional information as well.

- **Hard drive**: Overall capacity of the hard disk and distribution of the space used by the database data (data file + data index), the space used by other files and the free space available.
- **Memory**: RAM memory installed on the machine and amount of memory used by 4D Server, by other applications or that is free. The memory used by 4D Server can also be displayed dynamically in the graphic area.
- **Processors**: Instant occupancy rate for processor(s) of the machine by 4D Server and by other applications. This rate is constantly recalculated. The occupancy rate by 4D Server can also be displayed dynamically in the graphic area.
- **Network**: Instantaneous number of bytes sent and received by the machine (server or client). This value is updated constantly. The number of bytes received by can also be displayed dynamically in the graphic area.



## Maintenance Page

The **Maintenance** page of the 4D Server Administration window provides information concerning the current operation of the application. It also provides access to basic maintenance functions:

![](assets/en/Admin/server-maintenance.png)


## Last verification

This area indicates the date, time and status of the last [data verification](MSC/verify.md) carried out on the database.

### Verify Records and Indexes

This button can be used to launch the verification operation directly, without interrupting the server. Note that the server may be noticeably slowed down during the operation. 

All the records and all the indexes of the database are verified. If you want to be able to target the verification or have additional options available, you will need to use the [Maintenance and Security Center](MSC/overview.md) (MSC).

After verification, a report file is generated in XML format on the server in the [maintenance Logs](Project/architecture.md#logs) folder. The **View Report** button (named **Download Report** if the operation was carried out from a remote machine) lets you display the file in your browser.

## Last compacting

This area indicates the date, time and status of the last [compacting operation](MSC/compact.md) carried out on the database data. 

### Compact Data... 

Thus button can be used to launch a data compacting operation directly. This operation requires stopping the server: when you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation:

![](assets/en/Admin/server-shut.png)

After the actual interruption of the application service, 4D Server carries out a standard compacting operation on the database data. If you want to have additional options available, you will need to use the [MSC](MSC/overview.md).

Once the compacting is finished, 4D Server automatically restarts the application. The 4D users can then be reconnected.

> If the request for compacting was carried out from a remote 4D remote machine, this machine is automatically reconnected by 4D Server.

After verification, a report file is generated in XML format on the server in the [maintenance Logs](Project/architecture.md#logs) folder. The **View Report** button (named **Download Report** if the operation was carried out from a remote machine) lets you display the file in your browser.


## Uptime

This area indicates the duration of the server operation since the last time it was started (days, hours and minutes).


### Restart server... 

This button can be used to immediately restart the server. When you click on this button, the 4D Server shutdown dialog box appears so that you can choose how to interrupt the operation. After restarting, 4D Server automatically relaunches the application. The 4D users can then be reconnected.

> If the request for restarting was carried out from a remote 4D machine, this machine is automatically reconnected by 4D Server.

## Last backup

This area indicates the date and time of the [last backup](MSC/backup.md) of the database and provides information about the next scheduled automatic backup (if any). Automatic backups are configured using the **Scheduler** page of the structure settings.

- **Last backup**: date and time of last backup.
- **Next backup**: date and time of next scheduled backup.
- **Needed space**: estimated space needed for the backup. The actual size of the backup file may vary according to the settings (compression, etc.) and according to variations of the data file.
- **Available space**: space available on the backup volume.


The **Start backup** button can be used to backup the database immediately using the current backup parameters (files backed up, location of archives, options, etc.). You can view these parameters by clicking on the **Settings...** button. During a backup on the server, the client machines are "blocked" (but not disconnected) and it is not possible for any new clients to connect.


## Request and Debug logs

This area indicates the server log files recording duration (when log files are activated) and allows you to control their activation.

Refer to the [**Description of log files**](debugLogFiles.md) section for details on log files. 

### Start/Stop Request and Debug Logs

The **Start Request and Debug Logs** button starts log files. Since this may noticeably deteriorate server performance, it is to be reserved for the development phase of the application.

> This button only logs operations that are executed on the server. 

When the logs have been activated, the button title changes to **Stop Request and Debug Logs**, so that you can stop recording requests at any time. Keep in mind that restarting the log after stopping it "erases" the previous file.

### View Report

The **View Report** button (named **Download report** if the operation was carried out from a client machine) lets you open a system window displaying the request log file.

### Load logs configuration file

This button allows you to load a special server log configuration file (`.json` file). Such a file can be provided by 4D technical services to monitor and study specific cases. 


### Pause logging

This button suspends all currently logging operations started on the server (except ORDA logs). This feature can be useful to temporarily lighten the server tasks. 

When the logs have been paused, the button title changes to **Resume logging**, so that you can resume the logging operations.

> You can pause and resume logging using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html) command. 
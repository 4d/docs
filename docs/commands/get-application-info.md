---
id: get-application-info
title: Get application info
displayed_sidebar: docs
---

<!--REF #_command_.Get application info.Syntax-->**Get application info** -> Function result<!-- END REF-->
<!--REF #_command_.Get application info.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Object | <- | Information about the active application activity |

<!-- END REF-->

#### Example 1 

<!--REF #_command_.Get application info.Summary-->The **Get application info** command returns an object providing detailed information about the active application's activity and network configuration.<!-- END REF-->

The command can be executed on applications running in both standalone and client/server environments. The information returned depends on where **Get application info** is executed. For example, if executed from a remote 4D, the information applies only to the remote workstation. If the command is called in a method that is executed on the server, the information returned applies to the the server.

The returned object contains the following properties:

| **Property**                | **Type**   | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | **Example**                                     |
| --------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| cpuUsage(\*)                | number     | Percentage of processor used by 4D. Note, for Macs, the number displayed is for 1 core and represents an average for the processor.                                                                                                                                                                                                                                                                                                                                                                         | 10.03                                           |
| headless                    | boolean    | True if the application is running in headless mode. Possible values: true, false. For more information, see [Command Line Interface](/4Dv20R6/4D/20-R6/Command-Line-Interface.300-7003243.en.html).                                                                                                                                                                                                                                                                                                        | false                                           |
| IPAddressesAllowDeny        | collection | 4D Server only. Returns a collection of IP addresses that are allowed or denied in the database's settings. For more information, see [IP configuration](/4Dv20R6/4D/20-R6/Network-and-Client-Server-options.300-7182857.en.html#3430598).                                                                                                                                                                                                                                                                  | \[{"mode": "allow", "ip": "192.168.\*"},{...}\] |
| \[ \].mode                  | string     | Property describing whether the IP address is allowed or not. Possible values: "allow" or "deny"                                                                                                                                                                                                                                                                                                                                                                                                            | "allow"                                         |
| \[ \].ip                    | string     | IP address                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | "192.167.1.2"                                   |
| IPAddressesToListen         | collection | 4D Server only. Returns the IP addresses that 4D Server listens for. For more information, see [IP configuration](/4Dv20R6/4D/20-R6/Network-and-Client-Server-options.300-7182857.en.html#3430598).                                                                                                                                                                                                                                                                                                         | \["192.168.18.12","192.168.18.10"\]             |
| launchedAsService           | boolean    | True if application launched as a service. Possible values: true, false. For more information, see [Registering a Database as a Service](/4Dv20R6/4D/20-R6/Registering-a-Database-as-a-Service.300-7182849.en.html).                                                                                                                                                                                                                                                                                        | false                                           |
| networkInputThroughput(\*)  | number     | The data rate (bytes/seconds) for network input of the machine running the application. In remote mode, the rate for the remote machine is returned. For more information, see [Monitor Page](/4Dv20R6/4D/13/Monitor-Page.300-845382.en.html).                                                                                                                                                                                                                                                              | 37311495                                        |
| networkOutputThroughput(\*) | number     | The data rate (bytes/seconds) for network output of the machine running the application. In remote mode, the rate for the remote machine is returned. For more information, see [Monitor Page](/4Dv20R6/4D/13/Monitor-Page.300-845382.en.html).                                                                                                                                                                                                                                                             | 88058023                                        |
| newConnectionsAllowed       | boolean    | 4D Server only. True if new connections allowed. Possible values: true, false. For more information, see .                                                                                                                                                                                                                                                                                                                                                                                                  | true                                            |
| pid                         | number     | ID of the 4D application instance process (provided by the OS) -- allows identifying each running 4D instance, for example from an external script                                                                                                                                                                                                                                                                                                                                                          | 16600                                           |
| portID                      | number     | 4D Server: port for active listening, 4D remote: port for remote connections. Not returned in standalone environment. Minimum: 1\. For more information, see [Port Number](/4Dv20R6/4D/20-R6/Network-and-Client-Server-options.300-7182857.en.html#3430584).                                                                                                                                                                                                                                                | 19814                                           |
| remoteDebuggerSessionID     | text       | Session ID of the remote application to which the server debugger is attached. This ID is also returned by [Get process activity](get-process-activity.md).                                                                                                                                                                                                                                                                                                                                                 | "A838A40BJN3NJKH..."                            |
| SDIMode                     | boolean    | True if the application is running in SDI mode on Windows (useless on macOS). Possible values: true, false. For more information, see [SDI mode](https://developer.4d.com/docs/Menus/sdi) on *developer.4d.com*                                                                                                                                                                                                                                                                                             | true                                            |
| TLSEnabled                  | boolean    | True if TLS enabled for client/server communications. Not returned in standalone environment. Possible values: true, false. For more information, see [TLS Protocol and Client/Server Connections](/4Dv20R6/4D/20-R6/Encrypting-ClientServer-Connections.300-7182851.en.html#2643000).                                                                                                                                                                                                                      | true                                            |
| uptime                      | number     | Time elapsed (in seconds) since local 4D database was opened. For remote connections, returns the time elapsed since the connection was made.                                                                                                                                                                                                                                                                                                                                                               | 143                                             |
| useLegacyNetworkLayer       | boolean    | True if legacy network layer used for the application server. Not returned in standalone environment. Possible values: true, false. For more information, see [Activating or deactivating the legacy network layer](/4Dv20R6/4D/20-R6/Network-and-Client-Server-options.300-7182857.en.html#3750418).                                                                                                                                                                                                       | false                                           |
| useQUICNetworkLayer         | boolean    | True if QUIC network layer used for the application server and db4d server (*beta* in 4D v20, see [Compatibility page](/4Dv20R6/4D/20-R6/Compatibility-page.300-7003469.en.html)). Not returned in standalone environment. Possible values: true, false. For more information, see [this blog post](https://blog.4d.com/quic-network/).                                                                                                                                                                     | false                                           |
| volumeShadowCopyStatus      | string     | Returns the status of the Volume Shadow Copy Service. Windows only. For more information, see [Using Volume Shadow Copy Service on Windows](/4Dv20R6/4D/20-R6/Using-Volume-Shadow-Copy-Service-on-Windows.300-7182850.en.html).  Possible values: Constant Value Comment vss available available The service is available. vss error error The service experienced an error. vss not available notAvailable The service is unavailable. vss update required updateRequired The service needs to be updated. | "available"                                     |

(\*) On Windows, you need to get this counter previously initialized, for example by a call to the **Get application info** command in the [On Startup database method](on-startup-database-method.md). 

#### Example 2 

The following code returns an object containing information about the running application:

```4d
 var $appInfo : Object
 $appInfo:=Get application info
```

If the code is executed from a standalone environment, the object contains (for example):

```RAW
{    "launchedAsService": false,    "volumeShadowCopyStatus": "notAvailable",    "cpuUsage": 10.035875,    "uptime": 469,    "headless": false,    "pid": 16500,    "networkInputThroughput": 377263157,    "networkOutputThroughput": 12345242236 }
```

If the code is executed from a 4D remote client, the object contains (for example):

```RAW
{    "launchedAsService": false,    "volumeShadowCopyStatus": "notAvailable",    "cpuUsage": 10.035875,    "portID": 19814,    "TLSEnabled": false,    "uptime": 143,    "headless": false,    "pid": 1550,    "useLegacyNetworkLayer": true,    "networkInputThroughput": 268047058,    "networkOutputThroughput": 12207686274 }
```

If the code is executed on 4D Server, the object contains (for example):

```RAW
{    "launchedAsService": false,    "volumeShadowCopyStatus": "notAvailable",    "cpuUsage": 10.016125,    "portID": 19814,    "TLSEnabled": false,    "uptime": 192,    "headless": false,    "pid": 9560,    "useLegacyNetworkLayer": true,    "useQUICNetworkLayer": false,    "newConnectionsAllowed": true,    "IPAddressesToListen": [        "192.168.18.8",        "192.168.18.7"     ],      "IPAddressesAllowDeny": [       {"mode": "allow", "ip": "192.168.*"},       {"mode": "deny", "ip": "192.167.15.3"},       {"mode": "allow", "ip": "192.167.1.2" }    ],    "networkInputThroughput": 149014925,    "networkOutputThroughput": 80238805 }
```

#### See also 

[Execute on server](execute-on-server.md)  
[Get database parameter](get-database-parameter.md)  
[Get system info](get-system-info.md)  
[REJECT NEW REMOTE CONNECTIONS](reject-new-remote-connections.md)  
---
id: application-info
title: Application info
slug: /commands/application-info
displayed_sidebar: docs
---

<!--REF #_command_.Application info.Syntax-->**Application info** : Object<!-- END REF-->
<!--REF #_command_.Application info.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Object | &#8592; | Information about the active application activity |

<!-- END REF-->

#### Description

<!--REF #_command_.Application info.Summary-->The **Application info** command returns an object providing detailed information about the active application's activity and network configuration.<!-- END REF-->

The command can be executed on applications running in both standalone and client/server environments. The information returned depends on where **Application info** is executed. For example, if executed from a remote 4D, the information applies only to the remote workstation. If the command is called in a method that is executed on the server, the information returned applies to the the server.

The returned object contains the following properties:

| **Property**                | **Type**   | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | **Example**                                     |
| --------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| cpuUsage(\*)                | number     | Percentage of processor used by 4D. Note, for Macs, the number displayed is for 1 core and represents an average for the processor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 10.03                                           |
| headless                    | boolean    | True if the application is running in headless mode. Possible values: true, false. For more information, see *Command Line Interface*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | false                                           |
| IPAddressesAllowDeny        | collection | 4D Server only. Returns a collection of IP addresses that are allowed or denied in the database's settings. For more information, see *IP configuration*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | \[{"mode": "allow", "ip": "192.168.\*"},{...}\] |
| \[ \].mode                  | string     | Property describing whether the IP address is allowed or not. Possible values: "allow" or "deny"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | "allow"                                         |
| \[ \].ip                    | string     | IP address                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | "192.167.1.2"                                   |
| IPAddressesToListen         | collection | 4D Server only. Returns the IP addresses that 4D Server listens for. For more information, see *IP configuration*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | \["192.168.18.12","192.168.18.10"\]             |
| launchedAsService           | boolean    | True if application launched as a service. Possible values: true, false. For more information, see *Registering a Database as a Service*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | false                                           |
| networkInputThroughput(\*)  | number     | The data rate (bytes/seconds) for network input of the machine running the application. In remote mode, the rate for the remote machine is returned. For more information, see *Monitor Page*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 37311495                                        |
| networkOutputThroughput(\*) | number     | The data rate (bytes/seconds) for network output of the machine running the application. In remote mode, the rate for the remote machine is returned. For more information, see *Monitor Page*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 88058023                                        |
| newConnectionsAllowed       | boolean    | 4D Server only. True if new connections allowed. Possible values: true, false. For more information, see .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | true                                            |
| pid                         | number     | ID of the 4D application instance process (provided by the OS) -- allows identifying each running 4D instance, for example from an external script                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 16600                                           |
| portID                      | number     | 4D Server: port for active listening, 4D remote: port for remote connections. Not returned in standalone environment. Minimum: 1\. For more information, see *Port Number*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 19814                                           |
| remoteDebuggerSessionID     | text       | Session ID of the remote application to which the server debugger is attached. This ID is also returned by [Process activity](../commands/process-activity.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | "A838A40BJN3NJKH..."                            |
| SDIMode                     | boolean    | True if the application is running in SDI mode on Windows (useless on macOS). Possible values: true, false. For more information, see [SDI mode](https://developer.4d.com/docs/Menus/sdi) on *developer.4d.com*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | true                                            |
| TLSEnabled                  | boolean    | True if TLS enabled for client/server communications. Not returned in standalone environment. Possible values: true, false. For more information, see *TLS Protocol and Client/Server Connections*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | true                                            |
| uptime                      | number     | Time elapsed (in seconds) since local 4D database was opened. For remote connections, returns the time elapsed since the connection was made.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 143                                             |
| useLegacyNetworkLayer       | boolean    | True if legacy network layer used for the application server. Not returned in standalone environment. Possible values: true, false. For more information, see *Activating or deactivating the legacy network layer*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | false                                           |
| useQUICNetworkLayer         | boolean    | True if QUIC network layer used for the application server and db4d server (*beta* in 4D v20, see *Compatibility page*). Not returned in standalone environment. Possible values: true, false. For more information, see [this blog post](https://blog.4d.com/quic-network/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | false                                           |
| volumeShadowCopyStatus      | string     | Returns the status of the Volume Shadow Copy Service. Windows only. For more information, see *Using Volume Shadow Copy Service on Windows*.  Possible values: <table> <thead> <tr> <td>Constant</td> <td>Value</td> <td>Comment</td> </tr> </thead> <tbody> <tr> <td>vss available</td> <td>available</td> <td>The service is available.</td> </tr><tr> <td>vss error</td> <td>error</td> <td>The service experienced an error.</td> </tr><tr> <td>vss not available</td> <td>notAvailable</td> <td>The service is unavailable.</td> </tr><tr> <td>vss update required</td> <td>updateRequired</td> <td>The service needs to be updated.</td> </tr> </tbody> </table> | "available"                                     |

(\*) On Windows, you need to get this counter previously initialized, for example by a call to the **Application info** command in the [On Startup database method](on-startup-database-method.md). 

#### Example

The following code returns an object containing information about the running application:

```4d
 var $appInfo : Object
 $appInfo:=Application info
```

If the code is executed from a standalone environment, the object contains (for example):

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.035875,
  "uptime": 469,
  "headless": false,
  "pid": 16500,
  "networkInputThroughput": 377263157,
  "networkOutputThroughput": 12345242236
}
```

If the code is executed from a 4D remote client, the object contains (for example):

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.035875,
  "portID": 19814,
  "TLSEnabled": false,
  "uptime": 143,
  "headless": false,
  "pid": 1550,
  "useLegacyNetworkLayer": true,
  "networkInputThroughput": 268047058,
  "networkOutputThroughput": 12207686274
}
```

If the code is executed on 4D Server, the object contains (for example):

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.016125,
  "portID": 19814,
  "TLSEnabled": false,
  "uptime": 192,
  "headless": false,
  "pid": 9560,
  "useLegacyNetworkLayer": true,
  "useQUICNetworkLayer": false,
  "newConnectionsAllowed": true,
  "IPAddressesToListen": [
    "192.168.18.8",
    "192.168.18.7"
  ],
  "IPAddressesAllowDeny": [
    {
      "mode": "allow",
      "ip": "192.168.*"
    },
    {
      "mode": "deny",
      "ip": "192.167.15.3"
    },
    {
      "mode": "allow",
      "ip": "192.167.1.2"
    }
  ],
  "networkInputThroughput": 149014925,
  "networkOutputThroughput": 80238805
}
```

#### See also 

[Execute on server](execute-on-server.md)  
[Get database parameter](get-database-parameter.md)  
[System info](system-info.md)  
[REJECT NEW REMOTE CONNECTIONS](reject-new-remote-connections.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1599 |
| Thread safe | &check; |



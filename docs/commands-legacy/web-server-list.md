---
id: web-server-list
title: WEB Server list
slug: /commands/web-server-list
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server list.Syntax-->**WEB Server list**  -> Function result<!-- END REF-->
<!--REF #_command_.WEB Server list.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Collection | &larr; | Collection of the available Web Server objects |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB Server list.Summary-->The **WEB Server list** command returns a collection of all Web server objects available in the 4D application.<!-- END REF--> 

A 4D application can contain anywhere from one to several Web servers: 

* 1 Web server for the host database (default Web server)
* 1 Web server for each component.

All available Web servers are returned by the **WEB Server list** command, whether they are actually running or not. 

**Note:** The default Web server object is automatically loaded by 4D at startup. On the other hand, each component Web server that you want to use must be instantiated using the [WEB Server](web-server.md) command. 

You can use the *name* property of the Web server object to identify the database or component to which each Web server object in the list is attached. For a detailed description of the Web server object, please refer to the [WEB Server](web-server.md) command. 

#### Example 

We want to know how many running web servers are available: 

```4d
 var $wSList : Collection
 var $vRun : Integer
 
 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")
```

#### See also 

[WEB Server](web-server.md)  
*webServer.stop( )*  
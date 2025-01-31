---
id: web-server
title: WEB Server
displayed_sidebar: docs
---

<!-- REF #_command_.WEB Server.Syntax -->**WEB Server** : 4D.WebServer<br/>**WEB Server**( *option* : Integer ) : 4D.WebServer<!-- END REF -->
<!--REF #_command_.WEB Server.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Web server to get (default if omitted = `Web server database`) |
| Function result | 4D.WebServer | &#8592; | Web server object |

<!-- END REF-->


<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R3|Added|
|19|support for .sessionCookieSameSite|

</details>


#### Description 

The `WEB Server` command <!-- REF #_command_.WEB Server.Summary -->returns the default Web server object, or the Web server object defined through the *option* parameter<!-- END REF -->.

By default, if the *option* parameter is omitted, the command returns a reference to the Web server of the database, i.e. the default Web server. To designate the Web server to return, you can pass one of the following constants in the *option* parameter:

|Constant|Value|Comment|
|---|---|---|
|`Web server database`|1|Current database Web server (default if omitted)|
|`Web server host database`|2|Web server of the host database of a component|
|`Web server receiving request`|3|Web server that received the request (target Web server)|

The **returned Web server object** contains the current values of the [Web server properties](../API/WebServerClass.md).

#### Example  

From your component, you want to know if the Web server of the host database is started:

```4d
  // Method of a component
 var $hostWS : 4D.WebServer
 $hostWS:=WEB Server(Web server host database)
 If($hostWS.isRunning)
    ...
 End if
```


#### See also 

[WEB Server list](web-server-list.md)  
[webServer.stop()](../API/WebServerClass.md#stop)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1674 |
| Thread safe | &cross; |



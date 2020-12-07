---
id: webAdmin
title: Web Administration
---


You can monitor your running 4D and 4D Server applications through the web. An embedded web server component, `WebAdmin`, offers a dedicated administration interface. You can connect locally or remotely to this web server from a browser or any web application and administrate the associated 4D application. 

The WebAdmin includes two main tools:

- the Web Administration, to configure and monitor your 4D or 4D Server application,
- the Data Browser, to view and handle the data within your datastore.

This feature is specially intended for 4D applications running headless - but can also be used with any 4D applications, including those with interfaces.


## Starting the WebAdmin web server

By default, the `WebAdmin` web server is not launched at 4D or 4D Server startup. You can launch it automatically or at any moment. 


### Launching at startup

By default, the `WebAdmin` web server is not launched at 4D or 4D Server startup. 

To configure an automatic startup:

- If you use a 4D application with interface, select **Web server administration automatic startup** option in the Web administration settings dialog box:

![alt-text](assets/en/Admin/waSettings.png)


- Whether you use 4D application which is headless or not, you can enable the automatic startup mode using the following Command Line Interface argument:

```
--webadmin-auto-start { true | false }
```

Example: 

```
open ~/Desktop/4D.app --webadmin-auto-start true
```

> If the TCP port used by the `WebAdmin` web server (HTTPS or HTTP, depending on the settings) is not free at startup, 4D will try to use alternatively the 20 following ports, and use the first available. If no port is available, the web server is not launched and an error is displayed or (headless application) logged in the console. 


### Start and stop on demand

You can start or stop the `WebAdmin` web server for your project at any moment:

- If you use a 4D application with interface, select **Start/Stop Server** from the **Administration** menu.

- Whether you use 4D application which is headless or not, you can execute the [.start()](API/webServerClass.md#start) or [.stop()](API/webServerClass.md#stop) function on the `WebAdmin` web server once it is instanciated.  


## WebAdmin Settings

You can configure the WebAdmin component using the WebAdmin settings dialog box. Configuring the WebAdmin component is mandatory in particular if you want to define the [**access key**](#access-key). By default when the access key is not set, access is free. 

To open the WebAdmin settings dialog box, select **Settings...** in the **Administration** menu. 

The WebAdmin Settings dialog box is displayed:

![alt-text](assets/en/Admin/waSettings2.png)

#### Web server administration automatic startup

Check this option if you want the Admin web server to be automatically launched when 4D or 4D Server starts ([see above](#launching-at-startup)). By default, this option is not checked.

#### HTTP Port 

Port number to use for connections through HTTP to the Admin web server. Default value is 7080. This option is only used:

- if HTTP connections to the Admin web server are allowed
- or, if the **Accept HTTP connections on localhost** is checked

#### Accept HTTP connections on localhost

When this option is checked, you will be able to connect to the WebAdmin web server through HTTP from the same machine as the 4D application, even if HTTP connections are not allowed.

By default, this option is checked.



#### HTTPS Port 

Port number to use for connections through HTTPS to the Admin web server. Default value is 7443. This option is only used:

- if HTTPS connections to the Admin web server are allowed
- or, if the **Accept HTTPS connections on localhost** is checked

#### Accept HTTPS connections on localhost

When this option is checked, you will be able to connect to the WebAdmin web server through HTTPS from the same machine as the 4D application, even if HTTPS connections are not allowed.

By default, this option is checked.

#### Certificate folder path

Path of the folder where the TLS certificate files are located. By default, the certificate folder path is empty and 4D or 4D Server uses the certificate files embedded in the 4D application (custom certificates must be stored next to the project folder). 

#### Debug log mode

Status or format of the HTTP request log file (HTTPDebugLog_*nn*.txt, stored in the "Logs" folder of the application -- *nn* is the file number). The following options are available:

- **disable** (default)
- **with all body parts** - enabled with body parts in response and request
- **without body parts** - enabled without body parts (body size is provided)
- **with request body** - enabled with body part in request only
- **with response body** - enabled with body part in response only

#### Access Key

Access key definition. Once an access key is defined for a WebAdmin server, web clients must provide this access key to be allowed to connect to the WebAdmin page or to the [Data Browser page](dataBrowser.md). 


## WebAdmin Headless Configuration

All WebAdmin settings are stored in a `settings.4DSettings` file (except the access key, which must be [defined separatly](#defining-the-access-key)). There is one default `settings.4DSettings` file per 4D or 4D Server application, so that it is possible to deploy multiple applications on the same host machine.

When running a 4D or 4D Server application headless, you can set and use the default `settings.4DSettings` file, or designate a custom `.4DSettings` file. 

To set the file contents, you can use the [WebAdmin settings dialog](#webadmin-settings) of the 4D application with interface and run it headless afterwards. The default `settings.4DSettings` file is then used.  

Or, you can set a custom `.4DSettings` file (xml format) and use it instead of the default file. Several dedicated arguments are available in the *Command Line Interface* to support this feature:  

|Argument|Value|Description|
|---|---|---|
|--webadmin-settings-file|File path|Path of the custom WebAdmin `.4DSettings` file for the WebAdmin web server|
|--webadmin-access-key|String|Access key for the WebAdmin web server|
|--webadmin-auto-start|Boolean|Status of the automatic startup for the WebAdmin web server|
|--webadmin-store-settings||Store the access key and automatic starting parameters in the currently used settings file (i.e. the default `settings.4DSettings` file or a custom file designated with the `--webadmin-settings-path` parameter). By default for security reasons, the access key and automatic starting parameters are not stored in the `.4DSettings` file. Use the `--webadmin-store-settings` argument to save these settings if necessary|

> The access key is never stored in the `.4DSettings` file, but a hash. 

Example:

```
"%HOMEPATH%\Desktop\4D Server.exe" MyApp.4DLink --webadmin-access-key "my Fabulous AccessKey" --webadmin-auto-start true --webadmin-store-settings

```


## Authentication and Session

As soon as an access key [is defined](#access-key) in the settings, any connection to the WebAdmin must be authenticated. 

> If no access key has been defined (empty string), a warning message is displayed by the WebAdmin.

When the WebAdmin web server is accessed from the **Open Web admin interface** command of the **Administration** menu, the user is automatically authenticated. 
 
When the WebAdmin web server is accessed by entering a URL and without prior identification, an authentication is required. 

- By default, the WebAdmin web server displays an authentication dialog box, allowing the user to enter the access key.
- You can also implement a custom authentication interface and validate the entered access key using the [`.validateAccessKey()`] function of the WebAdmin Web server.

If the user provides the access key, a session with the "WebAdmin" privilege is created on the 4D application. As long as the current session has "WebAdmin" privilege, the WebAdmin component delivers requested pages.



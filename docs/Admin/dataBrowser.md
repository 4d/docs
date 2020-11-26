---
id: dataBrowser
title: Data Browser (web)
---


The 4D Data Browser provides a web interface to enter, view, and manage data in your datastore. Using this tool, you can easily import or export data, create or delete entities in the dataclasses, search, order, or compare attribute values. It helps you to quickly identify issues and control data at any steps of the development process. 


## Enabling the Data Browser

The Data Browser relies on the `WebAdmin` web server component for the configuration and authentication settings: the Data Browser is automatically available when [the `WebAdmin` web server is launched](webAdmin.md#starting-the-webadmin-web-server) and the [session user is authenticated](webAdmin.md#authentication-and-session).  


## Opening a Data Browser window

Once the Data Browser is enabled, you can open a Data Browser window:

- If you use a 4D application with interface, select **Open DataBrowser Web Interface** command from the **Administration** menu.

- Whether you use 4D application which is headless or not, you can open your web browser and enter the following address:

`IP:HTTPPort/databrowser`

or

`IP:HTTPSPort/databrowser`

[HTTPPort](webAdmin.md#http-port) and [HTTPSPort](webAdmin.md#https-port) are configured in the `WebAdmin` settings. 


## WebAdmin Settings

You can configure the WebAdmin component using the WebAdmin settings dialog box. Configuring the WebAdmin component is mandatory in particular if you want to define the access key. By default when the access key is not set, access is free. 

To open the WebAdmin settings dialog box, select **WebAdmin Settings** in the **Administration** menu. 

The WebAdmin Settings dialog box is displayed:

![alt-text](assets/en/Admin/waSettings2.png)

#### Web server administration automatic startup

Check this option if you want the Admin web server to be automatically launched when 4D or 4D Server starts ([see above](#launching-at-startup)). By default, this option is not checked.

#### HTTP Port 

Port number to use for connections through HTTP to the Admin web server. Default value is 8080. This option is only used:

- if HTTP connections to the Admin web server are allowed
- or, if the **Accept HTTP connections on localhost** is checked

#### Accept HTTP connections on localhost

When this option is checked, you will be able to connect to the WebAdmin web server through HTTP from the same machine as the 4D application, even if HTTP connections are not allowed.

By default, this option is checked.



#### HTTPS Port 

Port number to use for connections through HTTPS to the Admin web server. Default value is 8443. This option is only used:

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

Access key definition. Once an access key is defined for a WebAdmin server, web clients must provide this access key to be allowed to connect to the WebAdmin page. 


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

When the WebAdmin web server is accessed without prior identification, an authentication is required. 

- By default, the WebAdmin web server displays an authentication dialog box, allowing the user to enter the access key.
- You can also implement a custom authentication interface and validate the entered access key using the [`.validateAccessKey()`] function of the WebAdmin Web server.

If the user provides the access key, a session with the "WebAdmin" privilege is created on the 4D application. As long as the current session has "WebAdmin" privilege, the WebAdmin component delivers requested pages.



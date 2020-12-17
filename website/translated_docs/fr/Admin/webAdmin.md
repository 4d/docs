---
id: webAdmin
title: Web Administration
---


You can monitor your running 4D and 4D Server applications through a web interface. An embedded web server component, named `WebAdmin`, offers dedicated administration features. You can connect locally or remotely to this web server from a browser or any web application and administrate the associated 4D application.

The WebAdmin handles the authentication of users with "WebAdmin" privileges, so that they can open administration sessions and access dedicated interfaces.

This feature can be used in 4D applications running headless as well as 4D applications running with interfaces.


## Starting the WebAdmin web server

By default, the `WebAdmin` web server is not launched. You need to start it automatically or at any moment.


### Start and stop

You can start or stop the `WebAdmin` web server for your project at any moment:

- If you use a 4D application with interface, select the **File > Web Administration > Start Server** menu item.

![alt-text](assets/en/Admin/waMenu2.png)

The menu item becomes **Stop Server** when the server is launched; select **Stop Server** to stop the WebAdmin server.

- Whether you use 4D application which is headless or not, you can execute the [.start()](API/webServerClass.md#start) or [.stop()](API/webServerClass.md#stop) function on the `WebAdmin` web server once it is instanciated.



### Launch at startup

You can configure the `WebAdmin` web server to be launched at 4D or 4D Server application startup (before any project is loaded).

- If you use a 4D application with interface, select the **File > Web Administration > Settings...** menu item.

![alt-text](assets/en/Admin/waMenu1.png)

Check the **Web server administration automatic startup** option in the settings dialog box:

![alt-text](assets/en/Admin/waSettings.png)

- Whether you use 4D application which is headless or not, you can enable the automatic startup mode using the following *Command Line Interface* argument:

```
--webadmin-auto-start { true | false }
```

Exemple :

```
open ~/Desktop/4D.app --webadmin-auto-start true
```

> If the TCP port used by the `WebAdmin` web server (HTTPS or HTTP, depending on the settings) is not free at startup, 4D will try successively the 20 following ports, and use the first available. If no port is available, the web server is not launched and an error is displayed or (headless application) logged in the console.


## WebAdmin Settings

Configuring the WebAdmin component is mandatory in particular to define the [**access key**](#access-key). By default when the access key is not set, administration access is free.

You can configure the WebAdmin component using the [Web Administration settings dialog box](#settings-dialog-box) (see below).

> If you use a headless 4D application, you can use [*Command Line Interface* arguments](#webadmin-headless-configuration) to define basic settings. You will have to customize the settings file to define advanced settings.


### Settings dialog box

To open the Web Administration settings dialog box, select the **File > Web Administration > Settings...** menu item.

![alt-text](assets/en/Admin/waMenu1.png)

The following dialog box is displayed:

![alt-text](assets/en/Admin/waSettings2.png)

#### Web server administration automatic startup

Check this option if you want the WebAdmin web server to be automatically launched when the 4D or 4D Server application starts ([see above](#launching-at-startup)). By default, this option is not checked.

#### Accept HTTP connections on localhost

When this option is checked, you will be able to connect to the WebAdmin web server through HTTP from the same machine as the 4D application.

By default, this option is checked.


#### HTTP Port

Port number to use for connections through HTTP to the WebAdmin web server when the **Accept HTTP connections on localhost** option is checked.

Default value is 7080.


#### Accept HTTPS

When this option is checked, you will be able to connect to the WebAdmin web server through HTTPS.

By default, this option is checked.

#### HTTPS Port

Port number to use for connections through HTTPS to the Admin web server when the **Accept HTTPS** option is checked.

Default value is 7443.


#### Certificate folder path

Path of the folder where the TLS certificate files are located. By default, the certificate folder path is empty and 4D or 4D Server uses the certificate files embedded in the 4D application (custom certificates must be stored next to the project folder).

#### Debug log mode

Status or format of the HTTP request log file (HTTPDebugLog_*nn*.txt, stored in the "Logs" folder of the application -- *nn* is the file number). Les options suivantes sont disponibles :

- **Disable** (default)
- **With all body parts** - enabled with body parts in response and request
- **Without body parts** - enabled without body parts (body size is provided)
- **With request body** - enabled with body part in request only
- **With response body** - enabled with body part in response only

#### Access Key

An access key is similar to a password but is not associated to a login. Once an access key is defined for a WebAdmin web server, web clients must provide this access key to be allowed to connect to any web administration interface, including the [Data Explorer page](dataExplorer.md).

- To define a new access key: click the **Add** button, enter the access key string in the dialog box and click **OK**. The button label becomes **Modify**.
- To modify the access key: click the **Modify** button, enter the new access key string in the dialog box and click **OK**.
- To delete the access key: click the **Modify** button, let the access key area empty and click **OK**.


## WebAdmin Headless Configuration

All \[WebAdmin settings\](#webadmin settings) are stored in a `settings.4DSettings` file (except the access key, which must be [defined separatly](#defining-the-access-key)). There is one default `settings.4DSettings` file per 4D or 4D Server application, so that it is possible to deploy multiple applications on the same host machine.

When running a 4D or 4D Server application headless, you can set and use the default `settings.4DSettings` file, or designate a custom `.4DSettings` file.

To set the file contents, you can use the [WebAdmin settings dialog](#settings-dialog-box) of the 4D application with interface and run it headless afterwards. The default `settings.4DSettings` file is then used.

Or, you can set a custom `.4DSettings` file (xml format) and use it instead of the default file. Several dedicated arguments are available in the *Command Line Interface* to support this feature:

| Argument                  | Valeur    | Description                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --webadmin-settings-file  | File path | Path of the custom WebAdmin `.4DSettings` file for the WebAdmin web server                                                                                                                                                                                                                                                                                                                                                       |
| --webadmin-access-key     | Chaine    | Access key for the WebAdmin web server                                                                                                                                                                                                                                                                                                                                                                                           |
| --webadmin-auto-start     | Booléen   | Status of the automatic startup for the WebAdmin web server                                                                                                                                                                                                                                                                                                                                                                      |
| --webadmin-store-settings |           | Store the access key and automatic starting parameters in the currently used settings file (i.e. the default `settings.4DSettings` file or a custom file designated with the `--webadmin-settings-path` parameter). By default for security reasons, the access key and automatic starting parameters are not stored in the `.4DSettings` file. Use the `--webadmin-store-settings` argument to save these settings if necessary |

> The access key is never stored in the `.4DSettings` file, but a hash.

Exemple :

```
"%HOMEPATH%\Desktop\4D Server.exe" MyApp.4DLink --webadmin-access-key "my Fabulous AccessKey" --webadmin-auto-start true --webadmin-store-settings

```


## Authentication and Session

As soon as an access key [is defined](#access-key) in the WebAdmin settings, any connection to an administration page must be authenticated.

When an administration page is accessed directly from a 4D or 4D Server menu item (**File > Web Administration > Web interface** or **Records > Data Explorer**), the user is automatically authenticated.

When an administration page is accessed by entering a URL and without prior identification, an authentication is required.

The WebAdmin web server displays an authentication dialog box, allowing the user to enter the access key.

If the user provides the access key, a web [session](WebServer/sessions.md) with the "WebAdmin" privilege is created on the 4D application. As long as the current session has "WebAdmin" privilege, the WebAdmin component delivers requested pages.



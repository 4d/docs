---
id: webAdmin
title: Administration tools (web)
---

## Overview

You can monitor your running 4D and 4D Server applications remotely through the web. An embedded component, `WebAdmin`, offers a dedicated administration interface. You can connect to this web server from a browser or any web application and administrate any parts of the attached 4D application. 

This feature is specially intended for 4D applications running headless - but can also be used with any 4D applications, including those with interfaces.



## Declaring the WebAdmin 4DSettings file

The WebAdmin web server is entirely configured through a dedicated `4DSettings` file. 

> Using a `4DSettings` file is necessary because the WebAdmin must be executed before any structure file is opened and thus, before any 4D code could be executed. 

By default, no active settings file is provided. You need to override the default settings in order to configure the WebAdmin server.

To use a custom `settings.4DSettings` file for the WebAdmin web server, you can either:

- designate a `settings.4DSettings` file path with `--admin-settings-file` key when opening 4D Server using the Command Line Interface:

```
"%HOMEPATH%\Desktop\4D Server.exe" MyApp.4DLink --admin-settings-file %HOMEPATH%\Web\mySettings.4DSettings
```

- or,  designate a `4DSettings` file path with a `\<administration admin_settings_path>` element in the 4D Server preferences (`4D Preferences v18.4DPreference` file):

```
<?xml version="1.0" encoding="UTF-8"?><preferences stamp="30">
	<com.4d>
		<general>
			<automatisms licence_autorenew_trycount="0" licence_autorenew_sentcount="0"/>  
			<administration admin_settings_path="file:///Users/imac/mySettings.4DSettings"/>
		</general>
	</com.4d>
</preferences>
```

> You can define specific settings for each 4D Server application on the computer using the `instance_4d` element. 

## Launching the WebAdmin web server

By default, the `WebAdmin` web server is not launched at 4D Server startup. To launch it, you must enable the HTTP and/or HTTPS protocol(s) in the component's web server. 

To do this, you need to edit the [`4DSettings` file for the component](#declaring-the-webadmin-4dsettings-file) and make sure at least one of the following keys are set to true:

- `allowHttp`
- `allow_ssl`

> If only `allowHttp` is set to true, you need to add `allow_http_on_local="true"` to enable the local access for the WebAdmin.

For example:

```
<standalone_server>
	<configuration https_port_number="9998" port_number="8081" allow_http_on_local="true" allowHttp="true" allow_ssl="true" 
</standalone_server>
```

## WebAdmin configuration

You can configure the WebAdmin using the following elements to add to its [`4DSettings` file](#declaring-the-webadmin-4dsettings-file):

### Debug log

#### Syntax

```
<configuration ... 
/>
<log debug_log="1"/> 
```

#### Description

Status of the HTTP request log file (HTTPDebugLog_nn.txt, stored in the "Logs" folder of the application -- nn is the file number). Values:

- 0 = disabled
- 1 = enabled without body parts (body size is provided in this case)
- 3 = enabled with body parts in response only
- 5 = enabled with body parts in request only
- 7 = enabled with body parts in response and request


### Certificate folder

#### Syntax

```
<configuration ... 
	certificate_folder="file:///Users/imac/" 
/>
```

#### Description 

Folder where the certificate files are located. The path is formatted in POSIX full path using filesystems.


### Instances

#### Syntax

```
<instances>
	<instance_4d path="file:///Users/imac/4D/Apps/4D Server.app/"  admin_settings_path="file:///Users/imac/mySettings.4DSettings" />
	<instance_4d path="file:///4D_2/4D.app/"  admin_settings_path="file:///Users/imac/mySettings_2.4DSettings" />
</instances>
```

#### Definition

Allow 4D Server administrator to specify a WebAdmin `4DSettings` for each 4D Server application, so that it is possible to deploy multiple 4D Server applications on the same host machine.

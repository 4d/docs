---
id: qodly-studio
title: Qodly Studio
---

**Qodly Studio** is part of the **Qodly platform**, dedicated to the development of web business applications designed, tested and published entirely in the 4D cloud.

As of 4D v20 R2, you can use Qodly Studio directly from 4D to build modern and sophisticated web interfaces that you can easily integrate to your existing 4D projects and deploy **on premise**. 

With Qodly Studio, you will discover a totally new web UI, get familiar with the concept of datasources, and learn how to:

- create webforms by placing components on a page
- map components to data
- trigger 4D code by configuring events
- and much more. 

:::info

The use of Qodly Studio in 4D requires a specific license. Qodly Studio options and menu items won't appear if the license is not activated.

:::

## Configuration

### Requirements

#### Browser 

Qodly Studio supports the following web browsers:

- Chrome
- Edge
- FireFox

The recommended resolution is 1920x1080.

#### 4D application

Qodly Studio only works with 4D projects (binary databases are not supported).


### Enabling access to Qodly Studio

By default, access to Qodly Studio is not granted. 

Qodly Studio is served by the [WebAdmin web server](../Admin/webAdmin.md) and displays data from 4D projects handled by the [4D web server](webServer.md). 

To enable access to Qodly Studio, you must explicitly allow it at two levels: 

* at the 4D application level, for global access
* at every project level

If one of the two levels (or both) are not enabled, access to Qodly Studio is denied (a 403 page is returned).

#### At the application level

As a first security level, you need to [allow access to Qodly Studio on the WebAdmin web server](../Admin/webAdmin.md#enable-access-to-qodly-studio).

This setting applies to the 4D application (4D or 4D Server) on the host machine. All projects opened with that 4D application take this setting into account.

Keep this option unchecked if you want to make sure no access to Qodly Studio is allowed on the application. 

Check this option to make it possible to access Qodly Studio. However, you still need to enable it at every project level.

Additionally, you can [configure the WebAdmin web server's HTTP/HTTPS port used](../Admin/webAdmin.md#accept-http-connections-on-localhost). 

:::note 

After any change to these settings, you must [restart the WebAdmin web server](../Admin/webAdmin.md#start-and-stop) for the new configuration to be effective.

:::

#### At the project level

After you have enabled access to Qodly Studio at the application level, you need to explicitly designate every project that can be accessed. The **Enable access to Qodly Studio** option must be enabled on the [Web Features page of the 4D application's Settings](../settings/web.md#enable-access-to-qodly-studio). 

Keep in mind that [user settings](../settings/overview.md) can be defined at several levels, and that priorities apply.


### Activating authentication

Authentication on the WebAdmin web server is granted using an access key. For more details, see [Access key](../Admin/webAdmin.md#access-key).

### Enabling rendering

To enable the [rendering of webforms](#rendering-webforms) that are created in Qodly Studio, the following options must be set.

* The 4D project's **Settings** > **Web** > **Web Features** > [**Expose as REST server**](../settings/web.md#exposed-as-rest-server) option must be activated 
* The [4D web server](webServer.md) must be running

When rendering webforms, the renderer will connect to the 4D web server through HTTP or HTTPS, depending on the settings, following the same HTTP/HTTPS connection pattern as for the [WebAdmin web server](../Admin/webAdmin.md#accept-http-connections-on-localhost).


### WebAdmin server and deployment 

For deployment, the WebAdmin server is not necessary. End-user access to your web application made with Qodly Studio is based on the 4D REST protocol, and as such, it works as through a conventional 4D remote application.

## Opening Qodly Studio

The Qodly Studio page is available when the [WebAdmin web server is running](../Admin/webAdmin.md#start-and-stop) and authentication is activated (see above). 

There are two ways to access Qodly Studio:

* from your 4D single-user application, go to **Design** > **Qodly Studio...**. 
If the WebAdmin web server is already running, depending on its configuration, your default browser opens at `IPaddress:HTTPPort/studio` or `IPaddress:HTTPSPort/studio`. Otherwise, you will be prompted if you want to start the WebAdmin web server first.

* on a browser, with the WebAdmin web server running (launched from 4D or 4D Server), enter the following address:
 	
`IPaddress:HTTPPort/studio`
		
or:
	
`IPaddress:HTTPSPort/studio`

For example, after launching a local web server on port 7080, type this address in your browser: 

`localhost:7080/studio`

You will then be prompted to enter the [access key](../Admin/webAdmin.md#access-key) to access Qodly Studio.

## Rendering webforms

Webforms can be rendered from the Qodly Studio IDE or from a browser window.

- From the Qodly Studio IDE: in the webform editor, click on the preview button (![preview-button](../assets/en/WebServer/preview-ide.png). 
In this case, the webform is rendered by the WebAdmin web server with access to all database resources. 

- Form a browser window: in the webform editor, click on the Render in a new tab button (![preview-button-tab](../assets/en/WebServer/preview-tab.png).
A tab will open at `IP:port/$lib/renderer/?w=WebFormName`.
In this case, the webform is rendered by Qodly web renderer engine. The renderer engine applies the REST resource restrictions defined in your 4D project's database. This means that only exposed datasources are rendered in the browser. The renderer engine applies as well the permission actions that might have been configured in your 4D project's database.

You can also render the whole website using the Qodly web renderer engine by clicking on the **Preview** button of the toolbar (![preview-button-tab](../assets/en/WebServer/preview-main.png). The home page [defined in the Settings](https://docqodly.github.io/docs/studio/settings/#application) is then displayed. 

:::note

Renderer buttons are displayed only when the [configuration options](#enabling-rendering) are activated.

::: 


## Qodly Studio Documentation

The official Qodly Studio documentation is available on the [Qodly documentation website](developer.qodly.com/docs/studio).

You can rely on this documentation and its associated resources for developing Qodly Studio-based webforms. However, some features (listed below) differ between on premise and cloud architectures.

### Cloud-only features

The following features, detailed in the Qodly Studio documentation, are only available for a usage in the Qodly Cloud architecture. They are therefore not supported Qodly Studio within 4D.

- **Model editor**: the Qodly Studio Model editor is built upon the datastore and includes specific features. You cannot use this editor with your 4D databases. 
- **Debugger (local mode)**: the Qodly Studio debugger can only be used when opening a 4D Server database from a remote 4D.
- **QodlyScript**: the Qodly Studio documentation shows code examples that use **QodlyScript**, the built-in Qodly language (see below). 

### 4D Language vs QodlyScript

QodlyScript inherits from the 4D Language, but with some differences. If you are familiar with the 4D language, you won't be lost, just keep in mind the following QodlyScript's specific features.

#### Variables

- QodlyScript does not support process or inteprocess variables; only local variables are allowed, and their name should not start with the `$` character. Declaring variables using the `var` keyword is mandatory.
- QodlyScript does not support arrays.

#### Commands

- QodlyScript only supports a subset of the 4D Language commands and their related concepts. They are listed in the QodlyScript reference manual.
- All QodlyScript commands are written in camel case without spaces. Inherited 4D command names have been rewritten to fulfill this requirement. For example, the QodlyScript version of `New collection` is `newCollection`.

#### Symbols and Keywords

Some basic symbols, operators, and keywords differ between the 4D Language and QodlyScript. 

|Description|4D Language|QodlyScript|
|---|---|---|
|argument separator|; |,|
|assignment operator|:= |=|
|comparison operator|= |==|
||#Declare|declare|
||Alias|alias|
||Case of|switch|
||Class constructor|constructor|
||Class extends|extends|
||Else|else|
||End for|end|
||End For each|end|
||End if|end|
||End case|end|
||End use|end|
||End while|end|
||False|false|
||For|for|
||For each|forEach|
||Function|function|
||If|if|
||Repeat|repeat|
||This|this|
||True|True|
||Until|until|
||Use|use|
||While|while|
|var types|||
||Text|string|
||Date|date|
||Time|time|
||Boolean|boolean|
||Integer|integer|
||Real|number|
||Picture|picture|
||Blob|blob|
||Collection|collection|
||Object|object|
||Variant|variant|

Unlisted items are identical.

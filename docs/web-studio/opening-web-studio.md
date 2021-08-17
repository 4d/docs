---
id: web-studio
title: Opening 4D WebStudio
---

## Enabling access and authentication

Before opening the WebStudio, you'll need to enable access and authentication. 

The web studio relies on the [`WebAdmin`](../Admin/webAdmin.md) web server component for its configuration and authentication settings. 

### Enabling access to the web studio

To enable access to the web studio on the database level, you need to check the option on the [web server configuration page](../WebServer/webServerAdmin.md#enable-access-to-the-web-studio). 

To do this, go to **Settings** > **Web** > **Web features** and check **Enable access to the web studio**.

### Activating authentication

By default, access to the web server is not granted. You need to activate authentication on the `WebAdmin` web server first (otherwise opening the web studio throws a 403 error).

To do this, go to **File** > **Web Administration** > **Settings...** and check **Enable access to the web studio**

## Opening the web studio

The web studio page is available when the [`WebAdmin` web server is running](../Admin/webAdmin.md#starting-the-webadmin-web-server) and [authentication is activated](#activating-authentication). 

There are two ways to access the web studio:

*	from your 4D application, go to **Design** > **Web Studio...**. 
 
 	If the `WebAdmin` server is already running, your default browser opens at `IPaddress:HTTPPort/studio`. Otherwise, you will be asked if you want to start the `WebAdmin` web server first.

*	on a browser, with the `WebAdmin` web server running, enter the following address:
 	
		IPaddress:HTTPPort/studio
		
	or:
	
		IPaddress:HTTPSPort/studio

	For example, after launching a local web server on port 7080, type this address in your browser to access the web studio: 

		localhost:7080/studio

	You will then be prompted to enter the [access key](../Admin/webAdmin.md#access-key) to open a `WebAdmin` session on the server.
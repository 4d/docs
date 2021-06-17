---
id: webStudio
title: 4D WebStudio
---

> **Preview**: 4D WebStudio is provided as a preview feature. Using this feature in production is not recommended; the final implementation could be slightly different.


4D WebStudio is a powerful integrated development environment (IDE) that lets tap into various parts of your 4D projects (such as databases and methods) and link them to highly customizable interface elements in order to build a complete application.


![alt-text](assets/en/web-studio/web-studio-intro.png)

### Requirements

4D WebStudio supports the following web browsers:

- Chrome
- Safari
- Edge
- FireFox

The minimum resolution to use the 4D WebStudio is 1280x720. Recommended resolution is 1920x1080.

## Access Configuration

The web studio relies on the [`WebAdmin`](../Admin/webAdmin.md) web server component for its configuration and authentication settings. 

- **configuration**: the 4D WebStudio configuration inherits the [`WebAdmin` web server settings](../Admin/webAdmin.md#webadmin-settings),
- **authentication**: access to 4D WebStudio is granted when the [session user is authenticated](../Admin/webAdmin.md#authentication-and-session) and has the "WebAdmin" privilege. When 4D WebStudio is accessed through the **WebStudio** menu item (see below), automatic authentication is provided. 

> **TODO --> ADD protection on instance level (4D client)**

## Opening 4D WebStudio

The 4D WebStudio page is automatically available when [the `WebAdmin` web server is started](../Admin/webAdmin.md#starting-the-webadmin-web-server). 

 There are two ways to access the 4D WebStudio :

 *	from a 4D application, go to **Design** > **4D WebStudio**. 
 
 	If the `WebAdmin` server is already running, your default browser opens at `IPaddress:HTTPPort/studio`. Otherwise, you will be asked if you want to start the `WebAdmin` web server first.

 *	on a browser, with the `WebAdmin` web server running, enter the following address:
 	
		IPaddress:HTTPPort/studio
		
	or:
	
		IPaddress:HTTPSPort/studio

	For example, after launching a local web server on port 7080, type this address in your browser to access the 4D WebStudio: 

		localhost:7080/studio

You will then be prompted to enter the [access key](../Admin/webAdmin.md#access-key) to open a `WebAdmin` session on the server:

![alt-text](assets/en/Admin/accessKeyEnter.png)

> [HTTPPort](../Admin/webAdmin.md#http-port) and [HTTPSPort](../Admin/webAdmin.md#https-port) values are configured in the `WebAdmin` settings. 

## Interface

The 4D WebStudio provides several tools ranging from interface customization to method and event linking.

### Explorer

You can see see the eplorer as the skeleton of your project. It displays your project's web forms, methods, classes, assets and data model.

![alt-text](assets/en/web-studio/explorer.png)

### Tabs

These tabs let you keep track of which elements of your project are currently opened, such as methods or web forms for example.

![alt-text](assets/en/web-studio/tabs.png)

### Components

Right under the tabs is the components section. You can search for a component or choose one from the list, then drag it onto the canvas.

![alt-text](assets/en/web-studio/components.png)

### Styles Library

The styles library offers a choice of predefined CSS styles that you can apply to your components.

![alt-text](assets/en/web-studio/styles-library.png)

### Data Sources
This section holds the various data sources available.

![alt-text](assets/en/web-studio/data-sources.png)

#### The difference between Catalog, Remote and Local

### Canvas
The largest panel holds the canvas. This is where you drop your components, styles and data sources to build your application.

![alt-text](assets/en/web-studio/canvas.png)

### The Style Panel

This panel allows for advanced component customization. It is a dynamic panel, which means that its contents adapt to the currently selected component.

![alt-text](assets/en/web-studio/style-panel.png)

### Events, Methods and Code Panel

You can link events to your components. For example, you cna assign an `onchange` event to a search bar so that it suggests a list of employees as the user is typing.

![alt-text](assets/en/web-studio/events.png)

### Tabs (save all etc)

You can save all

### Preview mode

You can preview what your app will look like by clicking the eyecon.



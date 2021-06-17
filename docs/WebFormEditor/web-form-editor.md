---
id: webFormEditor
title: Web Form Editor
---

> **Preview**: The Web Form Editor is provided as a preview feature. Using this feature in a production purpose is not recommended; final implementation could be slightly different.


The Web Form Editor is part of the Web Studio, which is a powerful web interface that lets you do web development on your browser. You can use the interface to tap into various parts of your 4D project such as its database and methods.

Using this tool along with 4D standalone or 4D server, you can combine interface design and content management by customizing your app's components and defining where the data is displayed.

![alt-text](assets/en/WebServer/web-form-editor.png)


## Access Configuration

The Web Form Editor relies on the [`WebAdmin`](webAdmin.md) web server component for the configuration and authentication settings. 

- **configuration**: the Web Form Editor configuration reuses the [`WebAdmin` web server settings](webAdmin.md#webadmin-settings),
- **authentication**: access to the Web Form Editor is granted when the [session user is authenticated](webAdmin.md#authentication-and-session) and has the "WebAdmin" privilege. When the Web Form Editor is accessed through the **Web Form Editor** menu item (see below), an automatic authentication is provided. 

> The Web Form Editor access can be disabled using the [`.setAdminProtection()`](API/DataStoreClass.md#setadminprotection) function. 


## Opening the Web Form Editor

The Web Form Editor page is automatically available when [the `WebAdmin` web server is started](webAdmin.md#starting-the-webadmin-web-server). 

 You can open your web browser and enter the following address:

	`IPaddress:HTTPPort/$lib/studio`
or
	`IPaddress:HTTPSPort/$lib/studio`

	In this context, you will be prompted to enter the [access key](webAdmin.md#access-key) to open a `WebAdmin` session on the server:

![alt-text](assets/en/Admin/accessKeyEnter.png)

> [HTTPPort](webAdmin.md#http-port) and [HTTPSPort](webAdmin.md#https-port) values are configured in the `WebAdmin` settings. 



## Using the Web Form Editor

Text

### Requirements

The Web Form Editor supports the following web browsers:

- Chrome
- Safari
- Edge
- FireFox

The minimum resolution to use the Web Form Editor is 1280x720. Recommended resolution is 1920x1080.

### Basics

The Web Form Editor provides ...


#### Components

text

#### Assigning entities to components

text

#### Events

When you click on...

#### Preview mode

Click the icon to ...



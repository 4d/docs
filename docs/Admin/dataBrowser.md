---
id: dataBrowser
title: Data Browser (web)
---


The 4D Data Browser provides a web interface to enter, view, and manage data in your datastore. Using this tool, you can easily import or export data, create or delete entities in the dataclasses, search, order, or compare attribute values. It helps you to quickly identify issues and control data at any steps of the development process. 


## Access Configuration

The Data Browser relies on the `WebAdmin` web server component for the configuration and authentication settings.

- **configuration**: the Data Browser is automatically available when [the `WebAdmin` web server is launched](webAdmin.md#starting-the-webadmin-web-server) and configured,
- **authentication**: access to the Data Browser is only granted when the [session user is authenticated](webAdmin.md#authentication-and-session).  


## Opening a Data Browser window

Once enabled, the Data Browser is available through a web page. 

- If you use a 4D application with interface, select **Open DataBrowser Web Interface** command from the **Administration** menu.

- Whether you use 4D application which is headless or not, you can open your web browser and enter the following address:

`IP:HTTPPort/databrowser`

or

`IP:HTTPSPort/databrowser`

[HTTPPort](webAdmin.md#http-port) and [HTTPSPort](webAdmin.md#https-port) are configured in the `WebAdmin` settings. 
 


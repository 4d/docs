---
id: dataExplorer
title: Web Data Explorer
---


The Data Explorer provides a web interface to enter, view, and manage data in your datastore. Using this tool, you can easily browse among all your entities in the dataclasses, search, order, or compare attribute values. It helps you to control data and quickly identify issues at any steps of the development process.


## Access Configuration

The Data Explorer relies on the [`WebAdmin`](webAdmin.md) web server component for the configuration and authentication settings.

- **configuration**: the Data Explorer configuration reuses the [`WebAdmin` web server settings](webAdmin.md#webadmin-settings),
- **authentication**: access to the Data Explorer is granted when the [session user is authenticated](webAdmin.md#authentication-and-session) and if the user has the "WebAdmin" privilege. When the Data Explorer is accessed through the **Data Explorer** menu item (see below), an automatic authentication is provided.

## Opening the Data Explorer

The Data Explorer page is automatically available when the `WebAdmin` web server is [started](webAdmin.md#starting-the-webadmin-web-server).

To connect to the Data Explorer web page:

- if you use a 4D application with interface, select **Data Explorer...** command from:
    - 4D stand-alone - the **Records** menu
    - 4D Server - the **Window** menu.

- whether you use a headless 4D application or not, you can open your web browser and enter the following address:

`IPaddress:HTTPPort/dataexplorer`

or

`IPaddress:HTTPSPort/dataexplorer`

[HTTPPort](webAdmin.md#http-port) and [HTTPSPort](webAdmin.md#https-port) are configured in the `WebAdmin` settings.


## Authentication

Access to the Data Explorer requires that the user session is authenticated and has the "WebAdmin" privilege.

- When the Data Explorer is accessed by entering a URL and without prior identification, an authentication is required. The user configuration must enter the [access key](webAdmin.md#access-key) in an authentication dialog box. If the access key was not defined in the [`WebAdmin settings`](webAdmin.md#webadmin-settings), no access via URL is possible.

- When the Data Explorer is accessed through the **Data Explorer** menu item, the user is automatically authenticated.


> A browser can only be authenticated for one Data Explorer page at a time (because of the session cookie). If you want to work simultaneously with multiple 4D instances on different projects, you must open Data Explorer pages with different browsers or use private browsing. 


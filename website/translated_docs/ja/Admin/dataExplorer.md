---
id: dataExplorer
title: Data Explorer (web)
---


The 4D Data Explorer provides a web interface to enter, view, and manage data in your datastore. Using this tool, you can easily import or export data, create or delete entities in the dataclasses, search, order, or compare attribute values. It helps you to quickly identify issues and control data at any steps of the development process.


## Access Configuration

The Data Explorer relies on the `WebAdmin` web server component for the configuration and authentication settings.

- **configuration**: the Data Explorer is automatically available when [the `WebAdmin` web server is started](webAdmin.md#starting-the-webadmin-web-server) and [configured](webAdmin.md#webadmin-settings),
- **authentication**: access to the Data Explorer is granted when the [session user is authenticated](webAdmin.md#authentication-and-session) and if the user has the "WebAdmin" privilege. When the Data Explorer is accessed through the **DataExplorer** menu (see below), an automatic authentication is provided.

## Opening the Data Explorer

The Data Explorer page is automatically available when [the `WebAdmin` web server is started](webAdmin.md#starting-the-webadmin-web-server) and [configured](webAdmin.md#webadmin-settings).

To connect to the Data Explorer web page:

- if you use a 4D application with interface, select **DataExplorer...** command from the **Administration** menu.

- whether you use a headless 4D application or not, you can open your web browser and enter the following address:

`IPaddress:HTTPPort/dataexplorer`

or

`IPaddress:HTTPSPort/dataexplorer`

[HTTPPort](webAdmin.md#http-port) and [HTTPSPort](webAdmin.md#https-port) are configured in the `WebAdmin` settings.


## Authentication

Access to the Data Explorer requires that the user session is authenticated and has the "WebAdmin" privilege.

> If no [access key](webAdmin.md#access-key) has been defined, a warning message is displayed by the Data Explorer.

When the Data Explorer is accessed through the **DataExplorer** menu command, the user is automatically authenticated.

When the Data Explorer is accessed by entering a URL and without prior identification, an authentication is required. The authentication configuration is handle in the [WebAdmin](webAdmin.md#authentication-and-session). 
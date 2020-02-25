---
id: webServerOverview
title: Web Server object
---

## Overview

A 4D application can start and monitor a web server related to the main (host) database, and also another web server related to each hosted component.

It means that, if you installed for example two components in your host database, you will be able to start and monitor up to 3 independant web servers from your application:

- one web server for the host database,
- one web server for the component 1,
- one web server for the component 2.

There is no other limit than memory to the number of components and thus, of web servers, that can be attached to a single 4D database. 

Each 4D web server, including the web server of the main database, is exposed as a specific **object**. Once instantiated, a web server object can be handled from the current database or any component. 

> The WEB commands of the 4D language are supported but can only apply to the main web server, or to the web servers of the remote application (with 4D Server). 

This feature allows you to develop independant components and features that come with their own web interface.
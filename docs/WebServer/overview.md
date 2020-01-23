---
id: webServerOverview
title: Web Server object
---

## Overview

A 4D application can start and monitor an independant web server for each hosted component, in addition to web server of the current (host) database. 

It means that, if you installed for example two components in your host database, you will be able to start and monitor up to 3 independant web servers from your application:

- one web server for the host database,
- one web server per component.

Each 4D web server is exposed as a specific **object**, including the web server of the current database. Once instantiated, a web server object can be handled from the current database or any component. 

> The WEB commands of the 4D language are supported but can only apply to the main web server, or to the web servers of the remote application (with 4D Server). 


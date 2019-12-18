---
id: gettingStarted
title: Getting Started 
---

4D Server provides you with a powerful REST server, that allows direct access to data stored in your 4D databases.

The REST server is automatically available in 4D databases, you only need to configure its use.


## Configuring the REST server

> REST services require the 4D HTTP server, so you need to make sure that the 4D Web server is started.

To start using the REST server, you first need to configure the REST access in the ""Web/REST Resource" page of the Database Settings:

![](assets/en/REST/Settings.png) 

- Check the **Expose as REST server** option (for security reasons, by default, 4D does not respond to REST requests). The warning message "Caution, check the access privileges" is displayed when you check this option to draw your attention to the fact that when REST services are activated, by default access to database objects is free as long as the REST accesses have not been configured.

- Assign a group of 4D users that is authorized to establish the link to the 4D database using REST queries. This step can be done later (it *must* be done in production databases), but while the menu displays <Anyone>, REST accesses are open to all users. Keep in mind that:
	- on 4D Server, opening a REST session requires that a free 4D client licence is available.
	- on 4D single-user, you can open up to three REST sessions for testing purposes. 





## Configuring REST server access

Configuring REST accesses allow you to control the user access to the REST features. Keep in mind that:

- on 4D Server, opening a REST session requires that a free 4D client licence is available.
- on 4D single-user, you can open up to three REST sessions for testing purposes. 



 , you only need to decide which data you want to expose. 



- the exposed datastores and their attributes
- the REST server cache contents, including user sessions.

## Catalog

Use the [`$catalog`](catalog), [`$catalog/{datastoreClass}`](catalog_{datastoreClass}), or [`$catalog/$all`](catalog_$all) parameters to get the list of exposed datastore classes and their attributes.

Note that the user must be in a group that has **Describe** permissions. For more information, refer to **Permission Actions**.

## Cache info

Use the [`$info`](info) parameter to get information about the entity selections currently stored in 4D Server's cache as well as running user sessions. 

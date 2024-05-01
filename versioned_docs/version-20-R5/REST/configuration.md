---
id: configuration
title: Server Configuration
---

Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your application directly, *i.e.* to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more. 

To start using the REST features, you need to start and configure the 4D REST server. 




## Starting the REST Server

For security reasons, by default, 4D does not respond to REST requests. If you want to start the REST Server, you must check the **Expose as REST server** option in the **Web** > **Web Features** page of the structure settings in order for REST requests to be processed. 

![alt-text](../assets/en/REST/Settings.png)

> REST services use the 4D HTTP server, so you need to make sure that the 4D web server is started.

The warning message "Caution, check the access privileges" is displayed when you check this option to draw your attention to the fact that when REST services are activated, by default access to database objects is free as long as the REST accesses have not been configured.

> You must restart the 4D application for your changes to take effect. 


## Controlling REST access

By default, REST accesses are open to all users which is obviously not recommended for security reasons, and also to control client licenses usage.  

You can configure REST accesses with one of the following means:
- (recommended) enable the **force login** mode and create an [`authentify()`](authUsers.md#authentify) datastore class function to authenticate users and assign privileges to their web session (see [User login modes](authUsers.md#user-login-modes)). 
- assign a **Read/Write** user group to REST services in the "**Web** > **Web Features**" page of the Structure Settings;
- write an `On REST Authentication` database method to intercept and handle every initial REST request.


:::info Important

- It is recommended not to enable different REST access control features simultaneously to avoid conflicts.     
- If an `On REST Authentication` database method has been defined, any setting made using the "Read/Write" menu on the **Web** > **Web Features** page of the Structure Settings is ignored.

:::

### Using the Structure Settings

The **Read/Write** menu in the "**Web** > **Web Features**" page of the structure settings specifies a group of 4D users that is authorized to establish the link to the 4D application using REST queries. 

By default, the menu displays `\<Anyone>`, which means that REST accesses are open to all users. Once you have specified a group, only a 4D user account that belongs to this group may be used to [access 4D by means of a REST request](authUsers.md). If an account is used that does not belong to this group, 4D returns an authentication error to the sender of the request.

> In order for this setting to take effect, the `On REST Authentication` database method must not be defined. If it exists, 4D ignores access settings defined in the Structure Settings. 

### Using the On REST Authentication database method
The `On REST Authentication` database method provides you with a custom way of controlling the opening of REST sessions on 4D. This database method is automatically called when a new session is opened through a REST request. When a [request to open a REST session](authUsers.md) is received, the connection identifiers are provided in the header of the request. The `On REST Authentication` database method is called so that you can evaluate these identifiers. You can use the list of users for the 4D application or you can use your own table of identifiers.
For more information, refer to the `On REST Authentication` database method [documentation](https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html). 



## Exposing tables and fields

Once REST services are enabled in the 4D application, by default a REST session can access all tables and fields of the 4D database through the [datastore interface](ORDA/dsMapping.md#datastore). Thus, it can use their data. For example, if your database contains an [Employee] table, it is possible to write:

```
http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"

```
This request will return all employees whose salary field is higher than 10000. 

> 4D tables and/or fields that have the "Invisible" attribute are also exposed in REST by default. 

If you want to customize the datastore objects accessible through REST, you must disable the exposure of each table and/or field that you want to hide. When a REST request attempts to access an unauthorized resource, 4D returns an error.

### Exposing tables

By default, all tables are exposed in REST.

For security reasons, you may want to only expose certain tables of your datastore to REST calls. For instance, if you created a [Users] table storing user names and passwords, it would be better not to expose it.

To remove the REST exposure for a table:

1. Display the Table Inspector in the Structure editor and select the table you want to modify.

2. Uncheck the **Expose as REST resource** option:
	![alt-text](../assets/en/REST/table.png)
Do this for each table whose exposure needs to be modified.


### Exposing fields 

By default, all 4D database fields are exposed in REST.

You may not want to expose certain fields of your tables to REST. For example, you may not want to expose the [Employees]Salary field. 

To remove the REST exposure for a field:

1. Display the Field Inspector in the Structure editor and select the field you want to modify.

2. Uncheck the **Expose as REST resource** for the field.
	![alt-text](../assets/en/REST/field.png)
Repeat this for each field whose exposure needs to be modified.

> In order for a field to be accessible through REST, the parent table must be as well. If the parent table is not exposed, none of its fields will be, regardless of their status.


## Preemptive mode

On 4D Server, REST requests are automatically handled through preemptive processes, **even in interpreted mode**. You need to make sure that your code is [compliant with a preemptive execution](../WebServer/preemptiveWeb.md#writing-thread-safe-web-server-code).

> To debug interpreted web code on the server machine, make sure the debugger is [attached to the server](../Debugging/debugging-remote.md) or [to a remote machine](../Debugging/debugging-remote.md#attaching-the-debugger-to-a-remote-4d-client). Web processes then switch to cooperative mode and the web server code can be debugged.

With 4D single-user, interpreted code always runs in cooperative mode.

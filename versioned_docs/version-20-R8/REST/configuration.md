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

As of 4D 20 R6, you configure REST accesses by enabling the [**force login** mode](authUsers.md#force-login-mode) and create an [`authentify()`](authUsers.md#authentify) datastore class function to authenticate users and assign privileges to their web session. 

:::note Compatibility

The **Access** area in the Settings dialog box is only available in converted projects for compatibility. See [Access](../settings/web.md#access) for more information. 

:::



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

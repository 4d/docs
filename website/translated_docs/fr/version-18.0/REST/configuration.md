---
id: version-18.0-configuration
title: Configuration du serveur
original_id: configuration
---

Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your database directly, *i.e.* to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more.

To start using the REST features, you need to start and configure the 4D REST server.

> - On 4D Server, opening a REST session requires that a free 4D client licence is available.  
>     
> - On 4D single-user, you can open up to three REST sessions for testing purposes.  
>     You need to manage the [session cookie](authUsers.md#session-cookie) to use the same session for your requesting application. 

## Starting the REST Server

For security reasons, by default, 4D does not respond to REST requests. If you want to start the REST Server, you must check the **Expose as REST server** option in the "Web/REST resource" page of the database settings in order for REST requests to be processed.

![alt-text](assets/en/REST/Settings.png)

> REST services use the 4D HTTP server, so you need to make sure that the 4D Web server is started.

The warning message "Caution, check the access privileges" is displayed when you check this option to draw your attention to the fact that when REST services are activated, by default access to database objects is free as long as the REST accesses have not been configured.

## Configuring REST access

By default, REST accesses are open to all users which is obviously not recommended for security reasons, and also to control client licenses usage.

You can configuring REST accesses with one of the following means:

- assigning a **Read/Write** user group to REST services in the "Web/REST resource" page of the Database Settings;
- writing an `On REST Authentication` database method to intercept and handle every initial REST request.

> You cannot use both features simultaneously. Once an `On REST Authentication` database method has been defined, 4D fully delegates control of REST requests to it: any setting made using the "Read/Write" menu on the Web/REST resource page of the Database Settings is ignored.

### Using the Database settings

The **Read/Write** menu in the "Web/REST resource" page of the database settings specifies a group of 4D users that is authorized to establish the link to the 4D database using REST queries.

By default, the menu displays **<Anyone>**, which means that REST accesses are open to all users. Once you have specified a group, only a 4D user account that belongs to this group may be used to [access 4D by means of a REST request](authUsers.md). If an account is used that does not belong to this group, 4D returns an authentication error to the sender of the request.

> In order for this setting to take effect, the `On REST Authentication` database method must not be defined. If it exists, 4D ignores access settings defined in the Database Settings.

### Méthode base On REST Authentication

La méthode base `On REST Authentication` vous permet de contrôler de manière personnalisée l’ouverture des sessions REST sur 4D. Cette méthode base est automatiquement appelée lorsqu'une nouvelle session est ouverte à l'aide d'une requête REST. Lorsqu'une [requête d’ouverture de session REST](authUsers.md) est reçue, les identifiants de connexion sont fournis dans l’en-tête de la requête. La méthode base `On REST Authentication` est appelée afin de vous permettre d’évaluer ces identifiants. Vous pouvez utiliser la liste des utilisateurs de la base 4D ou votre propre table d’identifiants. Pour obtenir plus d'informations, veuillez vous reporter à la [documentation](https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.fe.html) de la méthode base `On REST Authentication`.

## Exposer les tables et les champs

Once REST services are enabled in the 4D database, by default a REST session can access all tables and fields of the datastore, and thus use their data. For example, if your database contains an [Employee] table, it is possible to write:

    http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"
    
    

This request will return all employees whose salary field is higher than 10000.

> 4D tables and/or fields that have the "Invisible" attribute are also exposed in REST by default.

If you want to customize the datastore objects accessible through REST, you must disable the exposure of each table and/or field that you want to hide. When a REST request attempts to access an unauthorized resource, 4D returns an error.

### Exposing tables

By default, all tables are exposed in REST.

For security reasons, you may want to only expose certain tables of your datastore to REST calls. For instance, if you created a [Users] table storing user names and passwords, it would be better not to expose it.

To remove the REST exposure for a table:

1. Display the Table Inspector in the Structure editor and select the table you want to modify.

2. Uncheck the **Expose as REST resource** option: ![alt-text](assets/en/REST/table.png) Do this for each table whose exposure needs to be modified.

### Exposing fields

By default, all 4D database fields are exposed in REST.

You may not want to expose certain fields of your tables to REST. For example, you may not want to expose the [Employees]Salary field.

To remove the REST exposure for a field:

1. Display the Field Inspector in the Structure editor and select the field you want to modify.

2. Uncheck the **Expose as REST resource** for the field. ![alt-text](assets/en/REST/field.png) Repeat this for each field whose exposure needs to be modified.

> In order for a field to be accessible through REST, the parent table must be as well. If the parent table is not exposed, none of its fields will be, regardless of their status.
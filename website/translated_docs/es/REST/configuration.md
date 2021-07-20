---
id: configuration
title: Configuración del servidor
---

Utilizando peticiones HTTP estándar, el servidor 4D REST permite a las aplicaciones externas acceder directamente a los datos de su base, *es decir, *recuperar información sobre las clases de datos de su proyecto, manipular datos, entrar en su aplicación web, y mucho más.

To start using the REST features, you need to start and configure the 4D REST server.

> - On 4D Server, opening a REST session requires that a free 4D client licence is available.<br>
> - En 4D monopuesto, puede abrir hasta tres sesiones REST para realizar pruebas.   
>     Es necesario gestionar la [cookie de sesión](authUsers.md#session-cookie) para utilizar la misma sesión para su aplicación.



## Starting the REST Server

For security reasons, by default, 4D does not respond to REST requests. Si desea iniciar el servidor REST, debe marcar la opción **Exponer como servidor REST** en la página "Recurso web/REST" de la configuración de la base para que se procesen las solicitudes REST.

![alt-text](assets/en/REST/Settings.png)

> REST services use the 4D HTTP server, so you need to make sure that the 4D Web server is started.

The warning message "Caution, check the access privileges" is displayed when you check this option to draw your attention to the fact that when REST services are activated, by default access to database objects is free as long as the REST accesses have not been configured.


## Configuring REST access

By default, REST accesses are open to all users which is obviously not recommended for security reasons, and also to control client licenses usage.

You can configuring REST accesses with one of the following means:
- asignar un grupo de usuarios en **Lectura/Escritura** a los servicios REST en la página "Web/REST" de la Configuración de la base;
- writing an `On REST Authentication` database method to intercept and handle every initial REST request.

> You cannot use both features simultaneously. Una vez que se ha definido un método base `On REST Authentication`, 4D delega totalmente el control de las peticiones REST en él: se ignora cualquier ajuste realizado mediante el menú " Lectura/Escritura" en la página de recursos Web/REST de la Configuración de la base de datos.


### Utilización de los parámetros de la base

El menú **Lectura/Escritura** de la página "Web/REST" de los parámetros de la base especifica un grupo de usuarios 4D que está autorizado a establecer el enlace con la base de datos 4D utilizando las peticiones REST.

Por defecto, el menú muestra **<Anyone>**, lo que significa que los accesos REST están abiertos a todos los usuarios. Once you have specified a group, only a 4D user account that belongs to this group may be used to [access 4D by means of a REST request](authUsers.md). If an account is used that does not belong to this group, 4D returns an authentication error to the sender of the request.

> In order for this setting to take effect, the `On REST Authentication` database method must not be defined. Si existe, 4D ignora los parámetros de acceso definidos en las propiedades de la base.

### Using the On REST Authentication database method
The `On REST Authentication` database method provides you with a custom way of controlling the opening of REST sessions on 4D. This database method is automatically called when a new session is opened through a REST request. When a [request to open a REST session](authUsers.md) is received, the connection identifiers are provided in the header of the request. The `On REST Authentication` database method is called so that you can evaluate these identifiers. Puede utilizar la lista de usuarios de la base 4D o puede utilizar su propia tabla de identificadores. For more information, refer to the `On REST Authentication` database method [documentation](https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html).



## Exposing tables and fields

Una vez que los servicios REST sean activados en la base 4D, por defecto una sesión REST puede acceder a todas las tablas y los campos del datastore, y así utilizar sus datos. For example, if your database contains an [Employee] table, it is possible to write:

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

2. Uncheck the **Expose as REST resource** option: ![alt-text](assets/en/REST/table.png) Do this for each table whose exposure needs to be modified.


### Exposing fields

By default, all 4D database fields are exposed in REST.

You may not want to expose certain fields of your tables to REST. For example, you may not want to expose the [Employees]Salary field.

To remove the REST exposure for a field:

1. Display the Field Inspector in the Structure editor and select the field you want to modify.

2. Uncheck the **Expose as REST resource** for the field. ![alt-text](assets/en/REST/field.png) Repeat this for each field whose exposure needs to be modified.

> In order for a field to be accessible through REST, the parent table must be as well. If the parent table is not exposed, none of its fields will be, regardless of their status.

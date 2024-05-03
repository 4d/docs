---
id: configuration
title: Configuración del servidor
---

Using standard HTTP requests, the 4D REST Server allows external applications to access the data of your application directly, _i.e._ to retrieve information about the dataclasses in your project, manipulate data, log into your web application, and much more.

Para comenzar a utilizar las funcionalidades REST, es necesario iniciar y configurar el servidor 4D REST.

## Iniciar el servidor REST

Por razones de seguridad, por defecto, 4D no responde a las peticiones REST. If you want to start the REST Server, you must check the **Expose as REST server** option in the **Web** > **Web Features** page of the structure settings in order for REST requests to be processed.

![alt-text](../assets/en/REST/Settings.png)

> Los servicios REST utilizan el servidor HTTP 4D, por lo que debe asegurarse de que el servidor web 4D está iniciado.

El mensaje de advertencia "Atención, verifique los privilegios de acceso" aparece cuando se marca esta opción para llamar la atención sobre el hecho de que cuando se activan los servicios REST, por defecto el acceso a los objetos de la base de datos es gratuito mientras no se hayan configurado los accesos REST.

> Debe reiniciar la aplicación 4D para que los cambios surtan efecto.

## Controlando el acceso REST

Por defecto, los accesos REST están abiertos a todos los usuarios, lo que obviamente no es recomendable por razones de seguridad, y también para controlar el uso de las licencias de los clientes.

Puede configurar los accesos REST de una de las siguientes maneras:

- (recommended) enable the **force login** mode and create an [`authentify()`](authUsers.md#authentify) datastore class function to authenticate users and assign privileges to their web session (see [User login modes](authUsers.md#user-login-modes)).
- assign a **Read/Write** user group to REST services in the "**Web** > **Web Features**" page of the Structure Settings;
- write an `On REST Authentication` database method to intercept and handle every initial REST request.

:::info Important

- Se recomienda no habilitar simultáneamente diferentes características de control de acceso REST para evitar conflictos.
- If an `On REST Authentication` database method has been defined, any setting made using the "Read/Write" menu on the **Web** > **Web Features** page of the Structure Settings is ignored.

:::

### Uso de los parámetros de la Estructura

The **Read/Write** menu in the "**Web** > **Web Features**" page of the structure settings specifies a group of 4D users that is authorized to establish the link to the 4D application using REST queries.

By default, the menu displays `\<Anyone>`, which means that REST accesses are open to all users. Once you have specified a group, only a 4D user account that belongs to this group may be used to [access 4D by means of a REST request](authUsers.md). Si se utiliza una cuenta que no pertenece a este grupo, 4D devuelve un error de autenticación al remitente de la petición.

> In order for this setting to take effect, the `On REST Authentication` database method must not be defined. Si existe, 4D ignora los parámetros de acceso definidos en las propiedades de la estructura.

### Método base On REST Authentication

The `On REST Authentication` database method provides you with a custom way of controlling the opening of REST sessions on 4D. Este método base se llama automáticamente cuando se abre una nueva sesión a través de una solicitud REST. When a [request to open a REST session](authUsers.md) is received, the connection identifiers are provided in the header of the request. The `On REST Authentication` database method is called so that you can evaluate these identifiers. Puede utilizar la lista de usuarios de la aplicación 4D o puede utilizar su propia tabla de identificadores.
For more information, refer to the `On REST Authentication` database method [documentation](https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html).

## Exponer tablas y campos

Once REST services are enabled in the 4D application, by default a REST session can access all tables and fields of the 4D database through the [datastore interface](ORDA/dsMapping.md#datastore). Así, puede utilizar sus datos. Por ejemplo, si su base de datos contiene una tabla [Employee], es posible escribir:

```
http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"

```

Esta petición devolverá todos los empleados cuyo campo de salario sea superior a 10000.

> Las tablas y/o campos 4D que tienen el atributo "Invisible" también se exponen en REST por defecto.

Si desea personalizar los objetos del datastore accesibles a través de REST, debe desactivar la exposición de cada tabla y/o campo que desee ocultar. Cuando una petición REST intenta acceder a un recurso no autorizado, 4D devuelve un error.

### Exponer las tablas

Por defecto, todas las tablas se exponen en REST.

Por razones de seguridad, es posible que desee exponer sólo ciertas tablas de su almacén de datos a las llamadas REST. Por ejemplo, si ha creado una tabla [Users] que almacena los nombres de usuario y las contraseñas, sería mejor no exponerla.

Para eliminar la exposición REST de una tabla:

1. Visualice el inspector de tablas en el editor de estructuras y seleccione la tabla que desea modificar.

2. Uncheck the **Expose as REST resource** option:
   ![alt-text](../assets/en/REST/table.png)
   Do this for each table whose exposure needs to be modified.

### Exponer los campos

Por defecto, todos los campos de una base 4D se exponen en REST.

Es posible que no quiera exponer ciertos campos de sus tablas a REST. Por ejemplo, es posible que no quiera exponer el campo [Employees]Salary.

Para eliminar la exposición REST de un campo:

1. Visualice el inspector de campo en el editor de estructuras y seleccione el campo a modificar.

2. Uncheck the **Expose as REST resource** for the field.
   ![alt-text](../assets/en/REST/field.png)
   Repeat this for each field whose exposure needs to be modified.

> Para que un campo sea accesible a través de REST, la tabla padre también debe serlo. Si la tabla padre no está expuesta, ninguno de sus campos lo estará, independientemente de su estado.

## Modo apropiativo

On 4D Server, REST requests are automatically handled through preemptive processes, **even in interpreted mode**. You need to make sure that your code is [compliant with a preemptive execution](../WebServer/preemptiveWeb.md#writing-thread-safe-web-server-code).

> To debug interpreted web code on the server machine, make sure the debugger is [attached to the server](../Debugging/debugging-remote.md) or [to a remote machine](../Debugging/debugging-remote.md#attaching-the-debugger-to-a-remote-4d-client). Los procesos web pasan entonces al modo cooperativo y se puede depurar el código del servidor web.

Con 4D monopuesto, el código interpretado siempre se ejecuta en modo cooperativo.

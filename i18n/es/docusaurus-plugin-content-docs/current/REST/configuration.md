---
id: configuration
title: Configuración del servidor
---

Utilizando peticiones HTTP estándar, el servidor 4D REST permite a las aplicaciones externas acceder directamente a los datos de su aplicación, _es decir_, para recuperar información sobre las clases de datos de su proyecto, manipular datos, entrar en su aplicación web, y mucho más.

Para comenzar a utilizar las funcionalidades REST, es necesario iniciar y configurar el servidor 4D REST.

## Iniciar el servidor REST

Por razones de seguridad, por defecto, 4D no responde a las peticiones REST. Si desea iniciar el servidor REST, debe marcar la opción **Exponer como servidor REST** en la página **Web** > **Web Features** de la configuración de la estructura para que se procesen las peticiones REST.

![alt-text](../assets/en/REST/Settings.png)

> Los servicios REST utilizan el servidor HTTP 4D, por lo que debe asegurarse de que el servidor web 4D está iniciado.

El mensaje de advertencia "Atención, verifique los privilegios de acceso" aparece cuando se marca esta opción para llamar la atención sobre el hecho de que cuando se activan los servicios REST, por defecto el acceso a los objetos de la base de datos es gratuito mientras no se hayan configurado los accesos REST.

> Debe reiniciar la aplicación 4D para que los cambios surtan efecto.

## Controlando el acceso REST

Por defecto, los accesos REST están abiertos a todos los usuarios, lo que obviamente no es recomendable por razones de seguridad, y también para controlar el uso de las licencias de los clientes.

Puede configurar los accesos REST de una de las siguientes maneras:

- (recomendado) activar el modo de **inicio de sesión forzado** y crear una función de clase [`authentify()`](authUsers.md#authentify) en la clase datastore para autenticar usuarios y asignar privilegios a su sesión web (ver [Modos de inicio de sesión de usuario](authUsers.md#user-login-modes)).
- asignar un grupo de usuarios **Lectura/Escritura** a los servicios REST en la página "**Web** > **Funcionalidades web**" de los Parámetros de estructura;
- escribir un método base `On REST Authentication` para interceptar y manejar cada petición REST inicial.

:::info Importante

- Se recomienda no habilitar simultáneamente diferentes características de control de acceso REST para evitar conflictos.
- Si se ha definido un método base `On REST Authentication`, se ignorará cualquier ajuste realizado mediante el menú "Lectura/Escritura" de la página **Web** > **Funcionalidades web** de los Parámetros de estructura.

:::

### Uso de los parámetros de la Estructura

El menú **Lectura/Escritura** en la página "**Web** > **Funciones web**" de la configuración de la estructura especifica un grupo de usuarios 4D que está autorizado para establecer el enlace con la aplicación 4D utilizando las consultas REST.

Por defecto, el menú muestra `\<Anyone>`, lo que significa que los accesos REST están abiertos a todos los usuarios. Una vez que haya especificado un grupo, sólo una cuenta de usuario de 4D que pertenezca a este grupo podrá ser utilizada para [acceder a 4D mediante una petición REST](authUsers.md). Si se utiliza una cuenta que no pertenece a este grupo, 4D devuelve un error de autenticación al remitente de la petición.

> Para que esta configuración tenga efecto, el método base`On REST Authentication` no debe estar definido. Si existe, 4D ignora los parámetros de acceso definidos en las propiedades de la estructura.

### Método base On REST Authentication

El método base `On REST Authentication` le ofrece una forma personalizada de controlar la apertura de sesiones REST en 4D. Este método base se llama automáticamente cuando se abre una nueva sesión a través de una solicitud REST. Cuando se recibe una [solicitud para abrir una sesión REST](authUsers.md), los identificadores de conexión se ofrecen en el encabezado de la solicitud. Se llama al método base `On REST Authentication` para poder evaluar estos identificadores. Puede utilizar la lista de usuarios de la aplicación 4D o puede utilizar su propia tabla de identificadores.
Para más información, consulte la [documentación](https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html) del método base `On REST Authentication`.

## Exponer tablas y campos

Una vez activados los servicios REST en la aplicación 4D, por defecto una sesión REST puede acceder a todas las tablas y campos de la base de datos 4D a través de la [interfaz del datastore](ORDA/dsMapping.md#datastore). Así, puede utilizar sus datos. Por ejemplo, si su base de datos contiene una tabla [Employee], es posible escribir:

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

2. Desmarque la opción **Exponer como recurso REST**:
   ![alt-text](../assets/en/REST/table.png)
   Haga esto para cada tabla cuya exposición deba modificarse.

### Exponer los campos

Por defecto, todos los campos de una base 4D se exponen en REST.

Es posible que no quiera exponer ciertos campos de sus tablas a REST. Por ejemplo, es posible que no quiera exponer el campo [Employees]Salary.

Para eliminar la exposición REST de un campo:

1. Visualice el inspector de campo en el editor de estructuras y seleccione el campo a modificar.

2. Desmarque la opción **Exponer como recurso REST** para el campo.
   ![alt-text](../assets/en/REST/field.png)
   Repeat this for each field whose exposure needs to be modified.

> Para que un campo sea accesible a través de REST, la tabla padre también debe serlo. Si la tabla padre no está expuesta, ninguno de sus campos lo estará, independientemente de su estado.

## Modo apropiativo

En 4D Server, las peticiones REST se gestionan automáticamente a través de procesos apropiativos, **incluso en modo interpretado**. Debe asegurarse de que su código es [compatible con una ejecución apropiativa](../WebServer/preemptiveWeb.md#writing-thread-safe-web-server-code).

> Para depurar el código web interpretado en la máquina del servidor, asegúrese de que el depurador está [adjuntado al servidor](../Debugging/debugging-remote.md) o [a una máquina remota](../Debugging/debugging-remote.md#attaching-the-debugger-to-a-remote-4 Los procesos web pasan entonces al modo cooperativo y se puede depurar el código del servidor web.

Con 4D monopuesto, el código interpretado siempre se ejecuta en modo cooperativo.

---
id: webServer
slug: overview
title: Servidor Web
---

4D in local mode and 4D Server include a web server engine (aka http server) that enables you to design and publish powerful web applications that can make the most of your 4D databases.

:::warning Funcionalidad obsoleta

El uso del servidor web en un 4D remoto es **obsoleto** a partir de 4D 21. Ya no se recomienda utilizar esta funcionalidad.

:::

## Fácil de supervisar

Puede iniciar o detener la publicación de la aplicación web en cualquier momento. Para ello, basta con seleccionar un comando del menú o ejecutar una sola línea de código.

Monitoring the 4D web server is easy and can be done using the [4D Server administration window](../ServerWindow/http-server.md) or through [special URLs](webServerAdmin.md#administration-urls).

## Listo para usar

El servidor web 4D crea automáticamente una carpeta raíz y una página de inicio por defecto, disponibles inmediatamente.

## Seguridad

La seguridad de los datos está presente en todas las etapas de las implementaciones del servidor web 4D. Los niveles de seguridad son escalables y la configuración por defecto suele seleccionar las opciones más seguras. La seguridad del servidor web 4D se basa en los elementos siguientes:

- Soporte extendido del [**Protocolo TLS (HTTPS)**](../Admin/tls.md),

- **Autenticación**: flexible y personalizable [funcionalidades de autenticación](authentication.md) basado en configuraciones creadas así como en métodos base de reserva ([`On Web Authentication`](authentication.md#on-web-authentication) para el servidor web y `On REST Authentication` para el servidor REST),

- **Control de los contenidos expuestos**: sólo los elementos que exponga explícitamente pueden estar disponibles desde peticiones web directaso peticiones REST. Debe declarar:
  - [Los métodos proyecto](templates.md#accessing-4d-methods-via-the-web) expuestos a través de peticiones HTTP
  - [Las funciones ORDA](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) expuestas a través de peticiones REST
  - [Tablas y campos](REST/configuration.md#exposing-tables-and-fields) que no quiere que estén disponibles para las peticiones REST.

- **Sandboxing** mediante la definición de una [carpeta HTML raíz](webServerConfig.md#root-folder) por defecto,

- **Control del uso de los recursos del servidor** (por ejemplo, vía la opción [máximo de procesos web concurrentes](webServerConfig.md#maximum-concurrent-web-processes)).

> Para una visión general de las funciones de seguridad de 4D, consulte la [Guía de seguridad de 4D](https://blog.4d.com/4d-security-guide/).

## Sesiones usuario

El servidor web 4D incluye completas funcionalidades automáticas para gestionar fácilmente las [sesiones web](sessions.md) (sesiones de usuario) basadas en cookies.

## Punto de acceso para las peticiones REST

El servidor web 4D permite acceder a los datos almacenados en sus aplicaciones 4D a través de peticiones REST. REST requests provide direct access to any [ORDA](../ORDA/overview.md) operation such as adding, reading, editing, ordering, or searching data.

Las peticiones REST se detallan en la sección [Servidor REST](../REST/gettingStarted.md).

## Extensión de los parámetros

The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the `webServer` object properties or the [`WEB SET OPTION`](../commands-legacy/web-set-option.md) command.

## Plantillas y URLs

El servidor web 4D soporta el acceso a los datos almacenados en sus aplicaciones 4D a través de páginas de plantillas y URLs específicas.

- Las páginas de plantillas contienen [etiquetas especiales](templates.md) que inician el procesamiento del servidor web en el momento en que se envían a los navegadores.

- [Las URLs específicas](httpRequests.md) permiten llamar a 4D para ejecutar cualquier acción; estas URLs también pueden utilizarse como acciones de formulario para activar el procesamiento cuando el usuario publica formularios HTML.

## Métodos base dedicados

`On Web Authentication`, `On Web Connection`, así como también los métodos base`On REST Authentication` son los puntos de entrada de las peticiones en el servidor web; se pueden utilizar para evaluar y enrutar todo tipo de petición.

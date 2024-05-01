---
id: webServer
slug: overview
title: Servidor Web
---

4D en modo local y remoto y 4D Server incluyen un motor de servidor web (también conocido como servidor http) que le permite diseñar y publicar poderosas aplicaciones web que pueden aprovechar al máximo sus bases de datos 4D.

## Fácil de supervisar

Puede iniciar o detener la publicación de la aplicación web en cualquier momento. Para ello, basta con seleccionar un comando del menú o ejecutar una sola línea de código.

Monitoring the 4D web server is easy and can be done using the 4D Server administration window or through [special URLs](webServerAdmin.md#administration-urls).

## Listo para usar

El servidor web 4D crea automáticamente una carpeta raíz y una página de inicio por defecto, disponibles inmediatamente.

## Seguridad

La seguridad de los datos está presente en todas las etapas de las implementaciones del servidor web 4D. Los niveles de seguridad son escalables y la configuración por defecto suele seleccionar las opciones más seguras. La seguridad del servidor web 4D se basa en los elementos siguientes:

- Extended support of the [**TLS Protocol (HTTPS)**](../Admin/tls.md),

- **Authentication**: flexible and customizable [authentication features](authentication.md) based upon built-it settings as well as fallback database methods ([`On Web Authentication`](authentication.md#on-web-authentication) for the web server and [`On REST Authentication`](../REST/configuration.md#using-the-on-rest-authentication-database-method) for the REST server),

- **Control of exposed contents**: only elements that you expose explicitely can be available from direct web or REST requests. Debe declarar:
  - [Project methods](templates.md#allowing-project-methods) exposed through HTTP requests
  - [ORDA functions](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) exposed through REST requests
  - [Tables and fields](REST/configuration.md#exposing-tables-and-fields) that you don't want to be available to REST requests.

- **Sandboxing** through the definition of a [HTML Root](webServerConfig.md#root-folder) folder by default,

- **Control of server resource usage** (e.g. [maximum concurrent web processes](webServerConfig.md#maximum-concurrent-web-processes) option).

> For a general overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).

## Sesiones usuario

The 4D web server includes complete automatic features for easily managing [web sessions](sessions.md) (user sessions) based on cookies.

## Punto de acceso para las peticiones REST

El servidor web 4D permite acceder a los datos almacenados en sus aplicaciones 4D a través de peticiones REST. Las peticiones REST ofrecen acceso directo a cualquier operación de la base de datos, como añadir, leer, editar, ordenar o buscar datos.

REST requests are detailed in the [REST server](REST/gettingStarted.md) section.

## Extensión de los parámetros

The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the `webServer` object properties or the `WEB SET OPTION` command.

## Plantillas y URLs

El servidor web 4D soporta el acceso a los datos almacenados en sus aplicaciones 4D a través de páginas de plantillas y URLs específicas.

- Template pages contain [special tags](templates.md) that initiate web server processing at the time when they are sent to browsers.

- [specific URLs](httpRequests.md) enable 4D to be called in order to execute any action; these URLs can also be used as form actions to trigger processing when the user posts HTML forms.

## Métodos base dedicados

`On Web Authentication`, `On Web Connection`, as well as `On REST Authentication` database methods are the entry points of requests in the web server; they can be used to evaluate and route any type of request.

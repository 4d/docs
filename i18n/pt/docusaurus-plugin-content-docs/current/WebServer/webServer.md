---
id: webServer
slug: overview
title: Servidor Web
---

4D in local mode, 4D in remote mode and 4D Server include a web server engine (aka http server) that enables you to design and publish powerful web applications that can make the most of your 4D databases.

## Monitorização fácil

Você pode iniciar ou parar a publicação da aplicação web a qualquer momento. To do so, you just need to select a menu command or execute a single line of code.

Monitoring the 4D web server is easy and can be done using the 4D Server administration window or through [special URLs](webServerAdmin.md#administration-urls).

## Pronto a usar

The 4D web server automatically creates a default root folder and a default home page for an instantaneous availability.

## Segurança

A segurança dos dados está presente em todos os estágios das implementações do servidor web 4D. Security levels are scalable and default settings usually select the most secure options. A segurança do servidor web 4D é baseada nos seguintes elementos:

* Extended support of the [**TLS Protocol (HTTPS)**](../Admin/tls.md),

* **Authentication**: flexible and customizable [authentication features](authentication.md) based upon built-it settings as well as fallback database methods ([`On Web Authentication`](authentication.md#on-web-authentication) for the web server and [`On REST Authentication`](../REST/configuration.md#using-the-on-rest-authentication-database-method) for the REST server),

* **Control of exposed contents**: only elements that you expose explicitely can be available from direct web or REST requests. É necessário declarar:
  * [Métodos projeto](templates.md#allowing-project-methods) expostos por meio de solicitações HTTP
  * [ORDA functions](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) exposed through REST requests
  * [Tables and fields](REST/configuration.md#exposing-tables-and-fields) that you don't want to be available to REST requests.

* **Sandboxing** through the definition of a [HTML Root](webServerConfig.md#root-folder) folder by default,

* **Control of server resource usage** (e.g. [maximum concurrent web processes](webServerConfig.md#maximum-concurrent-web-processes) option).
> Para uma visão geral das funções de segurança de 4D, consulte o [Guia de segurança de 4D](https://blog.4d.com/4d-security-guide/).

## Sessões Usuário

The 4D web server includes complete automatic features for easily managing [web sessions](sessions.md) (user sessions) based on cookies.

## Ponto de acesso para solicitações REST

The 4D web server allows accessing data stored in your 4D applications through REST requests. REST requests provide direct access to any database operation such as adding, reading, editing, ordering, or searching data.

REST requests are detailed in the [REST server](REST/gettingStarted.md) section.

## Extensão dos parâmetros

The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the `webServer` object properties or the `WEB SET OPTION` command.

## Modelos e URLs

The 4D web server supports access to data stored in your 4D applications through template pages and specific URLs.

* Template pages contain [special tags](templates.md) that initiate web server processing at the time when they are sent to browsers.

* [URLs específicos](httpRequests.md) permitem que 4D seja chamado para executar qualquer ação; esses URLs também podem ser usados como ações de formulário para acionar o processamento quando o usuário publica formulários HTML.

## Métodos banco de dados dedicados

`On Web Authentication`, `On Web Connection`, as well as `On REST Authentication` database methods are the entry points of requests in the web server; they can be used to evaluate and route any type of request.

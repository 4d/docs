---
id: webServer
slug: overview
title: Servidor Web
---

4D in local mode, 4D in remote mode and 4D Server include a web server engine (aka http server) that enables you to design and publish powerful web applications that can make the most of your 4D databases.

## Monitorização fácil

Você pode iniciar ou parar a publicação da aplicação web a qualquer momento. To do so, you just need to select a menu command or execute a single line of code.

Monitorar o servidor 4D é fácil e pode ser feito usando a janela de administração do Servidor 4D ou através de [URLs especiais](webServerAdmin.md#administration-urls).

## Pronto a usar

The 4D web server automatically creates a default root folder and a default home page for an instantaneous availability.

## Segurança

A segurança dos dados está presente em todos os estágios das implementações do servidor web 4D. Security levels are scalable and default settings usually select the most secure options. A segurança do servidor web 4D é baseada nos seguintes elementos:

- Suporte estendido do [**Protocolo TLS (HTTPS)**](../Admin/tls.md),

- **Autenticação**: [recursos de autenticação](authentication.md) flexíveis e personalizáveis com base em configurações integradas, bem como métodos de banco de dados fallback ([`On Web Authentication`](authentication.md#on-web-authentication) para o servidor da Web e [`On REST Authentication`](../REST/configuration.md#using-the-on-rest-authentication-database-method) para o servidor REST),

- **Control de los contenidos expuestos**: sólo los elementos que exponga explícitamente pueden estar disponibles desde peticiones web directaso peticiones REST. É necessário declarar:
  - [Los métodos proyecto](templates.md#allowing-project-methods) expuestos a través de peticiones HTTP
  - [Las funciones ORDA](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) expuestas a través de peticiones REST
  - [Tablas y campos](REST/configuration.md#exposing-tables-and-fields) que no quiere que estén disponibles para las peticiones REST.

- **Sandboxing** mediante la definición de una [carpeta HTML raíz](webServerConfig.md#root-folder) por defecto,

- **Control del uso de los recursos del servidor** (por ejemplo, vía la opción [máximo de procesos web concurrentes](webServerConfig.md#maximum-concurrent-web-processes)).

> Para obter uma visão geral das funcionalidades de segurança do 4D, consulte o [guia de segurança do 4D](https://blog.4d.com/4d-security-guide/).

## Sessões Usuário

El servidor web 4D incluye completas funcionalidades automáticas para gestionar fácilmente las [sesiones web](sessions.md) (sesiones de usuario) basadas en cookies.

## Ponto de acesso para solicitações REST

The 4D web server allows accessing data stored in your 4D applications through REST requests. REST requests provide direct access to any database operation such as adding, reading, editing, ordering, or searching data.

Las peticiones REST se detallan en la sección [Servidor REST](REST/gettingStarted.md).

## Extensão dos parâmetros

La configuración del servidor web 4D se define a través de un amplio conjunto de ajustes a nivel de aplicación que también pueden personalizarse para la sesión utilizando las propiedades del objeto `webServer` o el comando `WEB SET OPTION`.

## Modelos e URLs

The 4D web server supports access to data stored in your 4D applications through template pages and specific URLs.

- Las páginas de plantillas contienen [etiquetas especiales](templates.md) que inician el procesamiento del servidor web en el momento en que se envían a los navegadores.

- [Las URLs específicas](httpRequests.md) permiten llamar a 4D para ejecutar cualquier acción; estas URLs también pueden utilizarse como acciones de formulario para activar el procesamiento cuando el usuario publica formularios HTML.

## Métodos banco de dados dedicados

`On Web Authentication`, `On Web Connection`, así como también los métodos base`On REST Authentication` son los puntos de entrada de las peticiones en el servidor web; se pueden utilizar para evaluar y enrutar todo tipo de petición.

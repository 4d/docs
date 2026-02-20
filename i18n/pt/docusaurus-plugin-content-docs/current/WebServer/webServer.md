---
id: webServer
slug: overview
title: Servidor Web
---

4D in local mode and 4D Server include a web server engine (aka http server) that enables you to design and publish powerful web applications that can make the most of your 4D databases.

:::warning Deprecated feature

Using the web server on a remote 4D is **deprecated** as of 4D 21. It is no longer recommended to use this feature.

:::

## Monitorização fácil

Você pode iniciar ou parar a publicação da aplicação web a qualquer momento. Para fazer isso, você só precisa selecionar um comando de menu ou executar uma única linha de código.

Monitoring the 4D web server is easy and can be done using the [4D Server administration window](../ServerWindow/http-server.md) or through [special URLs](webServerAdmin.md#administration-urls).

## Pronto a usar

O servidor 4D cria automaticamente uma pasta raiz padrão e uma página inicial padrão para uma disponibilidade instantânea.

## Segurança

A segurança dos dados está presente em todos os estágios das implementações do servidor web 4D. Os níveis de segurança são escalonáveis e as configurações padrão geralmente selecionam as opções mais seguras. A segurança do servidor web 4D é baseada nos seguintes elementos:

- Suporte estendido do [**Protocolo TLS (HTTPS)**](../Admin/tls.md),

- **Authentication**: flexible and customizable [authentication features](authentication.md) based upon built-it settings as well as fallback database methods ([`On Web Authentication`](authentication.md#on-web-authentication) for the web server and `On REST Authentication` for the REST server),

- **Control de los contenidos expuestos**: sólo los elementos que exponga explícitamente pueden estar disponibles desde peticiones web directaso peticiones REST. É necessário declarar:
  - [Los métodos proyecto](templates.md#accessing-4d-methods-via-the-web) expuestos a través de peticiones HTTP
  - [Las funciones ORDA](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) expuestas a través de peticiones REST
  - [Tablas y campos](REST/configuration.md#exposing-tables-and-fields) que no quiere que estén disponibles para las peticiones REST.

- **Sandboxing** mediante la definición de una [carpeta HTML raíz](webServerConfig.md#root-folder) por defecto,

- **Control del uso de los recursos del servidor** (por ejemplo, vía la opción [máximo de procesos web concurrentes](webServerConfig.md#maximum-concurrent-web-processes)).

> Para obter uma visão geral das funcionalidades de segurança do 4D, consulte o [guia de segurança do 4D](https://blog.4d.com/4d-security-guide/).

## Sessões Usuário

El servidor web 4D incluye completas funcionalidades automáticas para gestionar fácilmente las [sesiones web](sessions.md) (sesiones de usuario) basadas en cookies.

## Ponto de acesso para solicitações REST

O servidor web 4D permite acessar os dados armazenados em suas aplicações 4D através de solicitações REST. REST requests provide direct access to any [ORDA](../ORDA/overview.md) operation such as adding, reading, editing, ordering, or searching data.

Las peticiones REST se detallan en la sección [Servidor REST](../REST/gettingStarted.md).

## Extensão dos parâmetros

The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the `webServer` object properties or the [`WEB SET OPTION`](../commands-legacy/web-set-option.md) command.

## Modelos e URLs

O servidor web 4D suporta acesso a dados armazenados em suas aplicações 4D através de páginas de modelos e URLs específicas.

- Las páginas de plantillas contienen [etiquetas especiales](templates.md) que inician el procesamiento del servidor web en el momento en que se envían a los navegadores.

- [Las URLs específicas](httpRequests.md) permiten llamar a 4D para ejecutar cualquier acción; estas URLs también pueden utilizarse como acciones de formulario para activar el procesamiento cuando el usuario publica formularios HTML.

## Métodos banco de dados dedicados

`On Web Authentication`, `On Web Connection`, así como también los métodos base`On REST Authentication` son los puntos de entrada de las peticiones en el servidor web; se pueden utilizar para evaluar y enrutar todo tipo de petición.

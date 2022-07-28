---
id: preemptiveWeb
title: Uso de procesos web apropiativos
---


The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your compiled applications. You can configure your web-related code, including 4D tags and web database methods, to run simultaneously on as many cores as possible.

For in-depth information on preemptive process in 4D, please refer to the *Preemptive 4D processes* section in the [*4D Language Reference*](https://doc.4d.com).

## Disponibilidad del modo apropiativo para los procesos web

The following table indicates whether the preemptive mode is used or is available, depending on the execution context:

| 4D Server             | Interpreted, project ([client connected locally](../Desktop/clientServer.md#using-4d-and-4d-server-on-the-same-machine)) | Interpretado, proyecto (sin cliente conectado localmente) o binario | Compilado       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- | --------------- |
| Servidor REST         | cooperativo                                                                                                              | apropiativo                                                         | apropiativo     |
| Servidor Web          | cooperativo                                                                                                              | *parámetro web*                                                     | *parámetro web* |
| Servidor Web Services | cooperativo                                                                                                              | *parámetro web*                                                     | *parámetro web* |
| Legacy REST           | cooperativo                                                                                                              | *parámetro web*                                                     | *parámetro web* |

| 4D remoto/monopuesto  | Interpretado | Compilado       |
| --------------------- | ------------ | --------------- |
| Servidor REST         | cooperativo  | apropiativo     |
| Servidor Web          | cooperativo  | *parámetro web* |
| Servidor Web Services | cooperativo  | *parámetro web* |
| Legacy REST           | cooperativo  | *parámetro web* |

- REST Server: handles [ORDA data model class functions](../REST/ClassFunctions.md)
- Web Server: handles [web templates](templates.md), [4DACTION and database methods](httpRequests.md)
- Servidor de servicios web: gestiona las peticiones SOAP
- Legacy REST: direct requests to 4D methods (`/rest/{table}/{methodName}`)
- ***web setting*** means that the preemptive mode depends on a setting value:
    - when [**Scalable sessions**](sessions.md#enabling-sessions) option is selected, the [preemptive mode is automatically used](sessions.md#preemptive-mode) for web processes.
    - otherwise, the [**Use preemptive processes**](webServerConfig.md#use-preemptive-processes) option is taken into account.
    - regarding Web service processes (server or client), preemptive mode is supported at method level. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see [Publishing a Web Service with 4D](https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html)) or proxy client methods (see [Subscribing to a Web Service in 4D](https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html)) and make sure they are confirmed thread-safe by the compiler.




## Escribir código servidor web hilo seguro

All 4D code executed by the web server must be thread-safe if you want your web processes to be run in preemptive mode. When the **Use preemptive processes** option is checked in the Settings dialog box, the following parts of the application will be automatically evaluated by the 4D compiler:

*   Todos los métodos base relacionados con la web:
    *   [`On Web Authentication`](authentication.md#on-web-authentication)
    *   [`On Web Connection`](httpRequests.md#on-web-connection)
    *   [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method)
    *   [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication)

*   El método proyecto `compilador_web` (independientemente de su propiedad real "Modo de ejecución");

*   Basically any code processed by the `PROCESS 4D TAGS` command in the web context, for example through .shtml pages.

*   Todo método proyecto con el atributo "Disponible a través de etiquetas 4D y URLs (`4DACTION`, etc.)

*   Triggers para tablas con el atributo "Exponer como recurso REST"

*   [ORDA data model class functions](../REST/ClassFunctions.md) called via REST

*   Project methods with "REST Server" property checked (legacy REST calls)

For each of these methods and code parts, the compiler will check if the thread-safety rules are respected, and will return errors in case of issues. For more information about thread-safety rules, please refer to the *Writing a thread-safe method* paragraph in the *Processes* chapter of the [4D Language Reference](https://doc.4d.com) manual.

## Código web 4D hilo seguro

Most of the web-related 4D commands and functions, database methods and URLs are thread-safe and can be used in preemptive mode.

### Comandos 4D y métodos base

All 4D web-related commands are thread-safe, *i.e.*:

*   todos los comandos del tema *Servidor Web*,
*   todos los comandos del tema *Cliente HTTP*.

The web-related database methods are thread-safe and can be used in preemptive mode (see below): `On Web Authentication`, `On Web Connection`, `On REST Authentication`...).

Of course, the code executed by these methods must also be thread-safe.


### URLs del servidor web

The following 4D Web Server URLs are thread-safe and can be used in preemptive mode:

*   *4daction/* (el método proyecto llamado también debe ser hilo seguro)
*   *4dcgi/* (los métodos base llamados también deben ser hilo seguro)
*   *4dwebtest/*
*   *4dblank/*
*   *4dstats/*
*   *4dhtmlstats/*
*   *4dcacheclear/*
*   *rest/*
*   *4dimgfield/* (generado por `PROCESS 4D TAGS` para la petición web en los campos imagen)
*   *4dimg/* (generado por `PROCESS 4D TAGS` para la petición web en las variables imagen)

### Icono de proceso web apropiativo

Both the Runtime Explorer and the 4D Server administration window display a specific icon for preemptive web processes:

| Tipo de proceso                  | Icono                                    |
| -------------------------------- | ---------------------------------------- |
| Método Web (proceso apropiativo) | ![](assets/en/WebServer/processIcon.png) |



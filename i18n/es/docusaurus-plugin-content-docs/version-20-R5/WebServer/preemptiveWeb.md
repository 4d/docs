---
id: preemptiveWeb
title: Uso de procesos web apropiativos
---

El servidor web de 4D le permite aprovechar al máximo los ordenadores multinúcleo utilizando procesos web apropiativos en sus aplicaciones. Puede configurar su código relacionado con la web, incluyendo las etiquetas 4D, los métodos base Web o las funciones de clase REST de ORDA para que se ejecuten simultáneamente en tantos núcleos como sea posible.

For in-depth information on preemptive process in 4D, please refer to the _Preemptive 4D processes_ section in the [_4D Language Reference_](https://doc.4d.com).

## Disponibilidad del modo apropiativo para los procesos web

La siguiente tabla indica si el modo apropiativo se utiliza o está disponible, dependiendo del contexto de ejecución:

| 4D Server             | Interpreted ([debugger attached](../Debugging/debugging-remote.md)) | Interpretado (no asociado al depurador) | Compilado     |
| --------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------- |
| Servidor REST         | cooperativo                                                                            | preemptive                                                 | preemptive    |
| Servidor Web          | cooperativo                                                                            | cooperativo                                                | _web setting_ |
| Servidor Web Services | cooperativo                                                                            | cooperativo                                                | _web setting_ |

| 4D remoto/monopuesto  | Interpretado | Compilado     |
| --------------------- | ------------ | ------------- |
| Servidor REST         | cooperativo  | preemptive    |
| Servidor Web          | cooperativo  | _web setting_ |
| Servidor Web Services | cooperativo  | _web setting_ |

- REST Server: handles [ORDA data model class functions](../REST/ClassFunctions.md)
- Web Server: handles [web templates](templates.md), [4DACTION and database methods](httpRequests.md)
- Servidor de servicios web: gestiona las peticiones SOAP
- _**web setting**_ means that the preemptive mode depends on a setting value:
  - when [**Scalable sessions**](sessions.md#enabling-sessions) option is selected, the [preemptive mode is automatically used](sessions.md#preemptive-mode) for web processes.
  - otherwise, the [**Use preemptive processes**](webServerConfig.md#use-preemptive-processes) option is taken into account.
  - en lo que respecta a los procesos de servicios web (servidor o cliente), se soporta el modo apropiativo a nivel del método. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see [Publishing a Web Service with 4D](https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html)) or proxy client methods (see [Subscribing to a Web Service in 4D](https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html)) and make sure they are confirmed thread-safe by the compiler.

## Escribir código servidor web hilo seguro

Todo el código 4D ejecutado por el servidor web debe ser hilo seguro si quiere que sus procesos web se ejecuten en modo apropiativo. When the [preemptive mode is enabled](#availability-of-preemptive-mode-for-web-processes), the following parts of the application will be automatically evaluated by the 4D compiler:

- Todos los métodos base relacionados con la web:
  - [`On Web Authentication`](authentication.md#on-web-authentication)
  - [`On Web Connection`](httpRequests.md#on-web-connection)
  - [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method)
  - [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) and [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action)

- The `compiler_web` project method (regardless of its actual "Execution mode" property);

- Basically any code processed by the [`PROCESS 4D TAGS`](https://doc.4d.com/4dv19R/help/command/en/page816.html) command in the web context, for example through .shtml pages

- Any project method with the "Available through 4D tags and URLS (`4DACTION`, etc.)" attribute

- Triggers para tablas con el atributo "Exponer como recurso REST"

- [ORDA data model class functions](../REST/ClassFunctions.md) called via REST

Para cada uno de estos métodos y partes de código, el compilador comprobará si se respetan las reglas de seguridad de hilos, y devolverá errores en caso de que haya problemas. For more information about thread-safety rules, please refer to the _Writing a thread-safe method_ paragraph in the _Processes_ chapter of the [4D Language Reference](https://doc.4d.com) manual.

## Código web 4D hilo seguro

La mayoría de los comandos y funciones 4D relacionados con la web, los métodos base y las URL son hilo seguro y pueden utilizarse en modo apropiativo.

### Comandos 4D y métodos base

All 4D web-related commands are thread-safe, _i.e._:

- all commands from the _Web Server_ theme,
- all commands from the _HTTP Client_ theme.

The web-related database methods are thread-safe and can be used in preemptive mode (see above): `On Web Authentication`, `On Web Connection`, `On REST Authentication`...).

Por supuesto, el código ejecutado por estos métodos también debe ser hilo seguro.

### URLs del servidor web

Las siguientes URLs 4D Web Server son hilo seguro y pueden ser utilizadas en modo apropiativo:

- _4daction/_ (el método proyecto llamado también debe ser hilo seguro)
- _4dcgi/_ (los métodos base llamados también deben ser hilo seguro)
- _4dwebtest/_
- _4dblank/_
- _4dstats/_
- _4dhtmlstats/_
- _4dcacheclear/_
- _rest/_
- _4dimgfield/_ (generado por `PROCESS 4D TAGS` para peticiones web en campos imagen)
- _4dimg/_ (generated by `PROCESS 4D TAGS` for web request on picture variables)

### Icono de proceso web apropiativo

Tanto el Explorador de ejecución como la ventana de administración de 4D Server muestran un icono específico para los procesos web apropiativos:

| Tipo de proceso                                     | Icono                                       |
| --------------------------------------------------- | ------------------------------------------- |
| Método Web (proceso apropiativo) | ![](../assets/en/WebServer/processIcon.png) |

---
id: preemptiveWeb
title: Utilizar processos web preemptivos
---

The 4D Web Server allows you to take full advantage of multi-core computers by using preemptive web processes in your compiled applications. You can configure your web-related code, including 4D tags and web database methods, to run simultaneously on as many cores as possible.

For in-depth information on preemptive process in 4D, please refer to the [Preemptive Processes](../Develop/preemptive.md) section.

## Disponibilidade do modo preemptivo para os processos web

The following table indicates whether the preemptive mode is used or is available, depending on the execution context:

| 4D Server             | Interpretado ([asociado al depurador](../Debugging/debugging-remote.md)) | Interpretado (não associado ao depurador) | Compilado          |
| --------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------ |
| Servidor REST         | cooperativo                                                                                 | preemptive                                                   | preemptive         |
| Servidor Web          | cooperativo                                                                                 | cooperativo                                                  | _configuração web_ |
| Servidor Web Services | cooperativo                                                                                 | cooperativo                                                  | _configuração web_ |

| 4D remoto/usuário único | Interpretado | Compilado          |
| ----------------------- | ------------ | ------------------ |
| Servidor REST           | cooperativo  | preemptive         |
| Servidor Web            | cooperativo  | _configuração web_ |
| Servidor Web Services   | cooperativo  | _configuração web_ |

- Servidor REST: gestiona las [funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md)
- Servidor web: maneja las [plantillas web](templates.md), [4DACTION y los métodos base](httpRequests.md)
- Servidor de serviços Web: trata dos pedidos SOAP
- _**web setting**_ significa que el modo apropiativo depende de un valor de configuración:
  - when [**Scalable sessions**](sessions.md#enabling-sessions) option is selected, the [preemptive mode is automatically used](sessions.md#preemptive-mode) for web processes.
  - otherwise, the [**Use preemptive processes**](webServerConfig.md#use-preemptive-processes) option is taken into account.
  - regarding Web service processes (server or client), preemptive mode is supported at method level. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see [Publishing a Web Service with 4D](https://doc.4d.com/4Dv20/4D/20.2/Publishing-a-Web-Service-with-4D.300-6750334.en.html)) or proxy client methods (see [Subscribing to a Web Service in 4D](https://doc.4d.com/4Dv20/4D/20.2/Subscribing-to-a-Web-Service-in-4D.300-6750336.en.html)) and make sure they are confirmed thread-safe by the compiler.

## Escrever código servidor Web hilo seguro

All 4D code executed by the web server must be thread-safe if you want your web processes to be run in preemptive mode. Cuando el [modo apropiativo está activo](#availability-of-preemptive-mode-for-web-processes), las siguientes partes de la aplicación serán evaluadas automáticamente por el compilador 4D:

- Todos os métodos bases relacionados com a Web:
  - [`On Web Authentication`](authentication.md#on-web-authentication)
  - [`On Web Connection`](httpRequests.md#on-web-connection)
  - [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method)
  - [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) and [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action)

- El método proyecto `compilador_web` (independientemente de su propiedad real "Modo de ejecución");

- Basically any code processed by the [`PROCESS 4D TAGS`](https://doc.4d.com/4dv19R/help/command/en/page816.html) command in the web context, for example through .shtml pages

- Todo método proyecto con el atributo "Disponible a través de etiquetas 4D y URLs (`4DACTION`, etc.)

- Triggers para as tabelas com o atributo "Expor como recurso REST"

- [funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md) llamadas vía REST

For each of these methods and code parts, the compiler will check if the thread-safety rules are respected, and will return errors in case of issues. Para más información sobre las reglas hilo seguro, consulte el párrafo _Escribir un método hilo seguro_ en el capítulo _Procesos_ del manual de [Lenguaje 4D](https://doc.4d.com).

## Código web 4D hilo seguro

Most of the web-related 4D commands and functions, database methods and URLs are thread-safe and can be used in preemptive mode.

### Comandos 4D e métodos base

Todos los comandos 4D relativos a la web son hilo seguro, _es decir_:

- todos los comandos del tema _Servidor Web_,
- todos los comandos del tema _Cliente HTTP_.

Los métodos base relacionados con la web son hilo seguro y pueden utilizarse en modo apropiativo (ver arriba): `On Web Authentication`, `On Web Connection`, `On REST Authentication`...).

Obviamente, o código executado por esses métodos também deve ser thread-safe.

### URLs do servidor Web

The following 4D Web Server URLs are thread-safe and can be used in preemptive mode:

- _4daction/_ (el método proyecto llamado también debe ser hilo seguro)
- _4dcgi/_ (los métodos base llamados también deben ser hilo seguro)
- _4dwebtest/_
- _4dblank/_
- _4dstats/_
- _4dhtmlstats/_
- _4dcacheclear/_
- _rest/_
- _4dimgfield/_ (generado por `PROCESS 4D TAGS` para la petición web en los campos imagen)
- _4dimg/_ (generado por `PROCESS 4D TAGS` para la petición web en las variables imagen)

### Ícone de processo web preemptivo

Both the Runtime Explorer and the 4D Server administration window display a specific icon for preemptive web processes:

| Tipo de processo      | Ícone                                       |
| --------------------- | ------------------------------------------- |
| Método web preventivo | ![](../assets/en/WebServer/processIcon.png) |

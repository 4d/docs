---
id: http-server
title: Página del servidor HTTP
---

The **HTTP Server** page groups together information about the operation of the Web server and SOAP server of 4D Server. El servidor web le permite publicar contenido web, como páginas HTML o imágenes para los navegadores web, y gestionar las peticiones REST. El servidor SOAP gestiona la publicación de los servicios web. Estos servidores dependen del servidor HTTP interno de 4D Server.

![](../assets/en/Admin/server-admin-web-page.png)

La parte superior de la página ofrece información sobre el estado actual del servidor HTTP de 4D Server.

- **State**: Started or Stopped
- **Starting time**: Date and time the HTTP server was last launched.
- **Uptime**: Time elapsed since last startup of the HTTP server.
- **Total HTTP hits**: Number of (low level) HTTP hits received by the HTTP server since it was started.

## Iniciar/detener el servidor HTTP

Este botón se alterna y puede utilizarse para controlar la activación del servidor HTTP de 4D Server.

- When the HTTP server state is "Started," the button is titled **Stop HTTP Server**. Si hace clic en este botón, el servidor HTTP de 4D Server se detiene inmediatamente; el servidor web, el servidor REST y el servidor SOAP dejan de aceptar peticiones.
- When the HTTP server state is "Stopped," the button is titled **Start HTTP Server**. Si hace clic en este botón, el servidor HTTP de 4D Server se inicia inmediatamente; se aceptan peticiones Web, REST y SOAP.

> Debe tener una licencia adecuada para poder iniciar el servidor HTTP.
>
> El servidor HTTP también puede lanzarse automáticamente al iniciar la aplicación (Preferencias) o por programación.

## Información Web

Esta área ofrece información específica sobre el servidor web de 4D Server.

- **Web requests**: Accepted or Rejected. Esta información indica si el servidor web está activado. Dado que el servidor web está directamente vinculado al servidor HTTP, las peticiones web se aceptan cuando se inicia el servidor HTTP y se rechazan cuando se detiene.
- **Maximum connections**: Maximum number of Web connections allowed. Este valor depende de la licencia instalada en el equipo servidor.

## Información SOAP

Esta área ofrece información específica sobre el servidor SOAP de 4D Server e incluye un botón de control.

- **SOAP requests**: Accepted or Rejected. Esta información indica si el servidor SOAP está activado. Para que las peticiones SOAP sean aceptadas, el servidor HTTP debe estar iniciado y el servidor SOAP debe aceptar explícitamente las peticiones (ver el botón Aceptar/Rechazar).
- **Maximum connections**: Maximum number of SOAP connections allowed. Este valor depende de la licencia instalada en el equipo servidor.
- **Accept/Reject SOAP requests** button: This button toggles and can be used to control the activation of the 4D Server SOAP server. This button modifies the value of the **Allow Web Services Requests** option on the "Web Services" page of the Settings (and vice versa). You can also use the [`SOAP REJECT NEW REQUESTS`](https://doc.4d.com/4dv19/help/command/en/page1636.html) command to refuse new SOAP requests, however this does not modify the value of the **Allow Web Services Requests** option.

If you click on the **Accept SOAP requests** button and the HTTP server is stopped, 4D automatically starts it.

## Configuración servidor HTTP

Esta área ofrece información sobre los parámetros de configuración y el funcionamiento del servidor HTTP:

- **Auto-launched at startup**: parameter set via the Settings.
- **HTTP Server processes (used/total)**: number of HTTP processes created on the server (current number of processes / total of all processes created).
- **Cache memory**: size of HTTP server cache memory, when it is activated (size actually used by cache / maximum size theoretically allocated to the cache in the Settings). You can click on the **Clear Cache** button to empty the current cache.
- **Listening to IP**, **HTTP Port** (80 by default), **TLS enabled** for HTTP connections (does not concern 4D nor SQL connections) and **HTTPS Port** used: current [configuration parameters](WebServer/webServerConfig.md) of the HTTP server, specified through the Settings or by programming.
- **Log file information**: name, format and date of the next automatic log backup of the HTTP server (logweb.txt file).

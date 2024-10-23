---
id: web-server-list
title: WEB Server list
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server list.Syntax-->**WEB Server list** : Collection<!-- END REF-->

<!--REF #_command_.WEB Server list.Params-->

| Parámetros | Tipo       |                            | Descripción                                    |
| ---------- | ---------- | -------------------------- | ---------------------------------------------- |
| Resultado  | Collection | &#8592; | Collection of the available Web Server objects |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R3       | Añadidos       |

</details>

#### Descripción

El comando `WEB Server list` <!-- REF #_command_.WEB Server list.Summary -->devuelve una colección de todos los objetos del servidor Web disponibles en la aplicación 4D <!-- END REF -->.

Queremos saber cuántos servidores web en funcionamiento hay disponibles:

- un servidor web para la base de datos del host (servidor web por defecto)
- un servidor web para cada componente.

Todos los servidores Web disponibles son devueltos por el comando `WEB Server list`, se estén ejecutando o no.

> El objeto servidor web por defecto es cargado automáticamente por 4D al inicio. On the other hand, each component Web server that you want to use must be instantiated using the [`WEB Server`](web-server.md) command.

You can use the [.name](../API/WebServerClass.md#name) property of the Web server object to identify the project or component to which each Web server object in the list is attached.

#### Ejemplo

Puede utilizar la propiedad <a href="#nombre">.name</a> del objeto servidor web para identificar el proyecto o componente al que está unido cada objeto servidor web de la lista.

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")
```

#### Ver también

[WEB Server](web-server.md)\
[webServer.stop()](../API/WebServerClass.md#stop)

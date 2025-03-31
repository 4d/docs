---
id: web-server-list
title: WEB Server list
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server list.Syntax-->**WEB Server list** : Collection<!-- END REF-->

<!--REF #_command_.WEB Server list.Params-->

| Parámetros | Tipo       |   | Descripción                                    |
| ---------- | ---------- | - | ---------------------------------------------- |
| Resultado  | Collection | ← | Collection of the available Web Server objects |

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

Puede utilizar la propiedad [.name](../API/WebServerClass.md#name) del objeto servidor Web para identificar el proyecto o el componente al que está adjunto cada objeto servidor Web de la lista.

#### Ejemplo

Queremos saber cuántos servidores web en funcionamiento hay disponibles:

```4d
 var $wSList : Collection
 var $vRun : Integer

 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")
```

#### Ver también

[Servidor WEB](web-server.md)\
[webServer.stop()](../API/WebServerClass.md#stop)

#### Propiedades

|                |                                                                 |
| -------------- | --------------------------------------------------------------- |
| Command number | 1716                                                            |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |

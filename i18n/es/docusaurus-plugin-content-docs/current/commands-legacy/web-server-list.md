---
id: web-server-list
title: WEB Server list
slug: /commands/web-server-list
displayed_sidebar: docs
---

<!--REF #_command_.WEB Server list.Syntax-->**WEB Server list**  -> Resultado<!-- END REF-->
<!--REF #_command_.WEB Server list.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Collection | &#x1F850; | Colección de los objetos del servidor web disponibles |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB Server list.Summary-->El comando **WEB Server list** devuelve la colección de todos los objetos del servidor web disponibles en la aplicación 4D.<!-- END REF--> 

Una aplicación 4D puede contener de uno a varios servidores web:

* 1 servidor web para la base de datos local (servidor web predeterminado)
* 1 servidor web para cada componente.

El comando devuelve todos los servidores web disponibles, ya sea que se estén ejecutando o no.

**Nota:** 4D carga automáticamente el objeto predeterminado del servidor web al inicio. Por otro lado, cada servidor web componente que desee usar debe crearse una instancia utilizando el comando [WEB Server](web-server.md). 

Puede utilizar la propiedad *name* del objeto del servidor web para identificar la base de datos o el componente al que se adjunta cada objeto del servidor web en la lista. Para una descripción detallada del objeto del servidor web, consulte el comando [WEB Server](web-server.md).

#### Ejemplo 

Queremos saber cuántos servidores web en ejecución están disponibles:

```4d
 var $wSList : Collection
 var $vRun : Integer
 
 $wSList:=WEB Server list
 $vRun:=$wSList.countValues(True;"isRunning")
 ALERT(String($vRun)+" web server(s) running on "+String($wSList.length)+" available.")
```

#### Ver también 

[WEB Server](web-server.md)  
*webServer.stop( )*  
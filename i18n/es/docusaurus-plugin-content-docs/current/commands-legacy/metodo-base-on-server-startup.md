---
id: metodo-base-on-server-startup
title: Metodo base On Server Startup
slug: /commands/metodo-base-on-server-startup
displayed_sidebar: docs
---

<!--REF #_command_.Metodo base On Server Startup.Syntax-->**Método base On Server Startup**<!-- END REF-->
<!--REF #_command_.Metodo base On Server Startup.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.Metodo base On Server Startup.Summary-->El Método base On Server Startup se llama una vez en el equipo servidor cuando abre una base con 4D Server.<!-- END REF--> El Método base On Server Startup NO se ejecuta en un entorno diferente a 4D Server.

El Método base On Server Startup es la ubicación ideal para:

* Inicializar las variables interproceso utilizadas durante toda la sesión 4D Server.
* Iniciar automáticamente los *Procedimientos almacenados* al abrir la base.
* Cargar preferencias o parámetros guardados durante la sesión anterior de 4D Server.
* Evitar la apertura de la base si no se cumple una condición (ausencia de recursos sistema) para una llamada explícita a [QUIT 4D](quit-4d.md).
* Realizar otras acciones que quiera efectuar automáticamente cada vez que se abra la base.

Para ejecutar código automáticamente en un equipo cliente cuando un 4D remoto se conecta al servidor, utilice el Método base On Server Startup.

**Nota**: el Método base On Server Startup se ejecuta de manera atómica, lo que significa que ningún 4D remoto puede conectarse mientras la ejecución del método no haya terminado.

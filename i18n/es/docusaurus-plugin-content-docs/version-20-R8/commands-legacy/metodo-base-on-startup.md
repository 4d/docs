---
id: metodo-base-on-startup
title: Metodo base On Startup
slug: /commands/metodo-base-on-startup
displayed_sidebar: docs
---

<!--REF #_command_.Metodo base On Startup.Syntax-->**Método base On Startup**<!-- END REF-->
<!--REF #_command_.Metodo base On Startup.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.Metodo base On Startup.Summary-->El Método base On Startup se ejecuta una sola vez, al momento de la apertura de la base.<!-- END REF-->

Esto ocurre en los siguientes entornos 4D:

* 4D en modo local
* 4D en modo remoto (del lado del cliente, una vez la conexión haya sido aceptada por 4D Server)
* Aplicación 4D compilada y fusionada con 4D Volume Desktop

**Nota**: el Método base On Startup NO es ejecutado por 4D Server.

El Método base On Startup es invocado automáticamente por 4D; a diferencia de los métodos proyecto, usted no puede llamar este método base por programación. Sin embargo, puede ejecutarlo desde el editor de métodos. También puede utilizar subrutinas.

El Método base On Startup es perfecto para:

* Inicializar variables interproceso que utilizará durante toda la sesión de trabajo.
* Iniciar procesos automáticamente cuando abre una base.
* Cargar preferencias o parámetros guardados durante la sesión de trabajo anterior.
* Evitar la apertura de la base si no se cumple una condición (por ejemplo, si falta un recurso del sistema) llamando explícitamente [QUIT 4D](quit-4d.md).
* Realizar otras acciones que quiera ejecutar automáticamente cada vez que abra una base.

Sin embargo, le recomendamos NO lanzar trabajos de impresión desde el **Método base On Startup**. 

#### Ejemplo 

Vea el ejemplo en la sección [Método base On Exit](metodo-base-on-exit.md).

#### Ver también 

[Método base On Exit](metodo-base-on-exit.md)  
*Métodos de base de datos*  
[QUIT 4D](quit-4d.md)  
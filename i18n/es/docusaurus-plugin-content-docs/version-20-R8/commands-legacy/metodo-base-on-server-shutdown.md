---
id: metodo-base-on-server-shutdown
title: Metodo base On Server Shutdown
slug: /commands/metodo-base-on-server-shutdown
displayed_sidebar: docs
---

<!--REF #_command_.Metodo base On Server Shutdown.Syntax-->**Método base On Server Shutdown**<!-- END REF-->
<!--REF #_command_.Metodo base On Server Shutdown.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.Metodo base On Server Shutdown.Summary-->El Método base On Server Shutdown se llama una vez en el equipo servidor cuando la base actual se cierra en 4D Server.<!-- END REF--> El Método base On Server Shutdown NO es llamado por otro entorno 4D diferente de 4D Server.

Para cerrar la base actual en el servidor, puede seleccionar el comando de menú **Cerrar la base...** en el servidor. También puede elegir el comando **Salir** o llamar al comando [QUIT 4D](quit-4d.md) dentro de un procedimiento almacenado ejecutado en el servidor.

Cuando se inicia el proceso de cierre de la base, 4D efectúa las siguientes acciones:

* Si no hay un Método base On Server Shutdown, 4D Server aborta cada proceso en ejecución uno por uno, sin distinción.
* Si existe un Método base On Server Shutdown, 4D Server ejecuta este método en un nuevo proceso local. Por lo tanto puede utilizar este método base para informar los otros procesos, vía la comunicación interproceso, que deben detener su ejecución. Note que 4D Server saldrá finalmente, el Método base On Server Shutdown puede efectuar todas las operaciones de limpieza o cierre que usted quiera, pero no puede rehusarse a salir y en algún momento terminará.

El Método base On Server Shutdown es el lugar ideal para:

* Detener los procedimientos almacenados lanzados automáticamente cuando se abre la base.
* Guardar (localmente, en disco) las preferencias o los parámetros a reutilizar al inicio de la sesión siguiente en el *Método base On Server Startup*.
* Efectuar cualquier otra acción que quiera activar automáticamente cada vez que salga de la base.

**Importante:** si utiliza el Método base On Server Shutdown para cerrar los procedimientos almacenados, recuerde que el servidor sale una vez se ejecuta el Método base On Server Shutdown (y no los procedimientos almacenados). Si los procedimientos almacenados aún están corriendo en este momento, se abortarán. Por lo tanto, si quiere asegurarse de que los procedimientos almacenados se ejecuten completamente antes de ser abortados por el servidor, el Método base On Server Shutdown debe indicar a los procedimientos almacenados que deben terminar su ejecución (por ejemplo, utilizando una variable interproceso) y debe permitirles cerrar (por medio de un bucle de x segundos u otra variable interproceso).

Si quiere que el código se ejecute automáticamente en un equipo cliente cuando un 4D remoto deja de conectarse al servidor, utilice el [Semaphore](semaphore.md).

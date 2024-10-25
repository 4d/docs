---
id: quit-4d
title: QUIT 4D
slug: /commands/quit-4d
displayed_sidebar: docs
---

<!--REF #_command_.QUIT 4D.Syntax-->**QUIT 4D** {( *tiempo* )}<!-- END REF-->
<!--REF #_command_.QUIT 4D.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tiempo | Integer | &#8594;  | Tiempo en segundos antes de salir del servidor |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QUIT 4D.Summary-->El comando QUIT 4D sale de la aplicación 4D y regresa al escritorio.<!-- END REF-->

El proceso del comando es diferente si se ejecuta en 4D (modo local o remoto) o en 4D Server. 

##### Con 4D modo local y 4D modo remoto 

Después de llamar QUIT 4D, se detiene la ejecución del proceso actual, luego 4D efectúa las siguientes operaciones:

* Si hay un [Método base On Exit](metodo-base-on-exit.md), 4D comienza a ejecutar este método dentro de un nuevo proceso local. Por ejemplo, puede utilizar este método base para informar a otros procesos, vía comunicación interproceso, que deben cerrar (entrada de datos) o detener la ejecución de operaciones iniciadas por el [Método base On Startup](metodo-base-on-startup.md) (conexión de 4D a otro servidor de bases de datos). Tenga en cuenta que 4D se cerrará en todo caso; el [Método base On Exit](metodo-base-on-exit.md) puede realizar la limpieza y cierre de todas las operaciones, pero el cierre de la base es ineludible.
* Si no hay [Método base On Exit](metodo-base-on-exit.md), 4D cierra cada proceso en curso, uno por uno, sin distinción.

Si el usuario está introduciendo datos, los registros se cancelarán y no se guardarán.   
Si quiere permitirle al usuario guardar las modificaciones efectuadas en las ventanas del proceso actual, puede utilizar la comunicación interproceso para indicar a todos los otros procesos de usuario que la base está a punto de cerrarse. Para hacer esto, puede adoptar dos estrategias:

* Efectuar estas operaciones desde el proceso actual antes de llamar QUIT 4D.
* Manejar estas operaciones desde el [Método base On Exit](metodo-base-on-exit.md).

También es posible una tercera estrategia. Antes de llamar QUIT 4D, pruebe si una ventana necesita validación; si ese es el caso, pida al usuario validar o cancelar esta ventana y luego seleccionar nuevamente Salir. Sin embargo, desde el punto de vista de la interfaz del usuario, las primeras dos estrategias son preferibles.

**Nota:** el parámetro *tiempo* no puede utilizarse con 4D en modo local o remoto.

##### Con 4D Server (procedimiento almacenado) 

El comando QUIT 4D puede ejecutarse en el equipo servidor, en un proceso almacenado. En este caso, acepta el parámetro opcional *tiempo*.  
  
El parámetro *tiempo* le da un tiempo de espera a 4D Server antes de que la aplicación se cierre realmente, permitiendo a los equipos cliente desconectarse. Debe pasar un valor en segundos en *tiempo*. Este parámetro sólo se tiene en cuenta durante una ejecución en el equipo servidor. Se ignora en 4D en modo local o remoto. 

Si no pasa un parámetro para *tiempo*, 4D Server esperará hasta que todos los equipos cliente estén desconectados antes de salir.

A diferencia de 4D, el proceso de QUIT 4D por 4D Server es asincrónico: el método desde donde se llama el comando no se interrumpe después de su ejecución. 

Si hay un *Método base On Server Shutdown*, se ejecuta después del tiempo definido por el parámetro *tiempo*, o después de que todos los clientes se hayan desconectado, dependiendo de sus parámetros.

La acción del comando QUIT 4D utilizada en un procedimiento almacenado es la misma del comando Salir del menú Archivo de 4D Server: provoca la aparición de una caja de diálogo en cada equipo cliente indicando que el servidor está a punto de cerrar.

#### Ejemplo 

El método de proyecto siguiente está asociado al elemento de menú Salir en el menú Archivo.

```4d
  // Método de proyecto M_SALIR
 
 CONFIRM("¿Está seguro de que quiere salir?")
 If(OK=1)
    QUIT 4D
 End if
```

#### Ver también 

[Método base On Exit](metodo-base-on-exit.md)  
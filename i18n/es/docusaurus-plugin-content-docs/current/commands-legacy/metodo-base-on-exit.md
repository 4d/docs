---
id: metodo-base-on-exit
title: Metodo base On Exit
slug: /commands/metodo-base-on-exit
displayed_sidebar: docs
---

<!--REF #_command_.Metodo base On Exit.Syntax-->**Método base On Exit**<!-- END REF-->
<!--REF #_command_.Metodo base On Exit.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.Metodo base On Exit.Summary-->El Método base On Exit se llama una vez cuando sale de la base.<!-- END REF-->

Este método se utiliza en los siguientes entornos 4D:

* 4D en modo local
* 4D en modo remoto (del lado del cliente)
* Aplicación 4D compilada y fusionada con 4D Volume Desktop

**Nota**: **Método base On Exit** NO es invocado por 4D Server. Debe utilizar [Método base On Server Shutdown](metodo-base-on-server-shutdown.md) en este contexto.

El Método base On Exit es invocado automáticamente por 4D; a diferencia de los métodos proyecto, no puede llamar este método base por programación. Sin embargo, puede ejecutarlo desde el editor de métodos. Igualmente puede utilizar subrutinas.

Se sale de una base si:

* El usuario selecciona el comando **Salir** del menú **Archivo** en el entorno Diseño o desde el entorno Aplicación (Quit standard action).
* Se efectúa una llamada al comando [QUIT 4D](quit-4d.md).
* Un plug-in 4D hace una llamada al punto de entrada [QUIT 4D](quit-4d.md).

Sin importar cómo se inicie la salida de la base, 4D realiza las siguientes acciones:

* Si no existe un Método base On Exit, 4D aborta cada proceso en ejecución uno por uno, sin distinción. Si el usuario está introduciendo datos, los registros no se guardarán.
* Si existe un Método base On Exit, 4D comienza la ejecución de este método en un proceso local creado recientemente. Observe que saldrá eventualmente de 4D, el Método base On Exit puede realizar toda la limpieza o cierre de las operaciones que usted quiera, pero no puede negarse a salir.

Cuando 4D está a punto de salir, el programa:

* pide a los procesos en ejecución que aborten su ejecución lo antes posible (sólo se tiene en cuenta en los procesos que ejecutan código 4D)
* establece su bandera ‘proceso abortado’
* despierta los procesos que han sido retrasados por [DELAY PROCESS](delay-process.md) u otros medios.

  
4D continúa iterando procesos mientras cualquier proceso siga vivo, durante una duración máxima de 13 segundos. Para responder a una acción de abandono, recomendamos establecer una bandera (como una entrada en el objeto [Storage](storage.md)) en el Método base On Exit o en su método de abandono personalizado. Podría tener sentido hacer un bucle en ese método (máximo 10 segundos) para dar tiempo a que sus procesos en ejecución respondan y se abandonen a sí mismos correctamente. No es recomendable esperar más de 10 segundos, para evitar que 4D mate el proceso o el sistema operativo mate toda la aplicación.

El Método base On Exit es perfecto para:

* Guardar (localmente, en el disco) preferencias o parámetros a reutilizar al comienzo de la siguiente sesión en el .
* Realizar otras acciones automáticamente cada vez que se salga de la base.

**Nota:** no olvide que el proceso creado por el Método base On Exit es un proceso local/cliente, por lo tanto no puede acceder al archivo de datos. Si el Método base On Exit realiza una consulta o una ordenación, un cliente 4D que está a punto de salir quedará "congelado" y en realidad no saldrá de la aplicación. Si necesita acceder a datos cuando un cliente sale de la aplicación, cree un nuevo proceso global desde el cual el Método base On Exit pueda acceder al archivo de datos. En este caso, asegúrese de que el nuevo proceso termine correctamente antes del final de la ejecución del Método base On Exit (utilizando por ejemplo [Storage](storage.md) o un objeto compartido).

**Nota**: en un entorno cliente/servidor, **Método base On Exit** se comporta de manera diferente dependiendo de si el usuario sale manualmente (vía el comando de menú **Salir** o una llamada al comando [QUIT 4D](quit-4d.md)) o que 4D Server se cierre, lo que obliga a todos los clientes a salir.  
Cuando se sale de 4D Server y se da un tiempo de corte (por ejemplo, 10 minutos), cada cliente conectado muestra un mensaje de advertencia y si el usuario sale durante el período de tiempo determinado, el **Método base On Exit** se ejecuta normalmente. Sin embargo, en otros casos (por ejemplo, el usuario no responde a tiempo, el servidor solicita salir inmediatamente o el administrador desconecta manualmente al cliente), el **Método base On Exit** se ejecuta al mismo tiempo que la conexión al servidor se cierra. Como resultado, el código en **Método base On Exit** no puede iniciar otro proceso local o de servidor y no puede esperar a que se cancelen otros procesos (ni estos procesos pueden seguir accediendo al servidor). Si intenta hacerlo, se genera un error de red (como 10001 o 10002) ya que la conexión al servidor ya está cerrada.

#### Nota 

El siguiente ejemplo muestra un caso típico en el que se lanzan uno o más procesos en segundo plano que realizan trabajos regulares, que se ejecutan sin fin, en el [Método base On Startup](metodo-base-on-startup.md) (o en el [Método base On Server Startup](metodo-base-on-server-startup.md)). Una bandera en el objeto [Storage](storage.md) de la aplicación se utiliza para decirles que terminen y para comprobar si han terminado.

* En el [Método base On Startup](metodo-base-on-startup.md)

```4d
 Use(Storage)
    Storage.global:=New shared object("ExitNow";False)
 End use
 $p:=New process("Serverjob";0;"Background job#1")
 $p1:=New process("Check_Invoices";0;"Background job#2")
```

* Este es un ejemplo de un método en segundo plano:

```4d
  // hacer trabajos regulares en segundo plano en el servidor
 While(Not(Bool(Storage.global.ExitNow)))
  // ejecutar trabajos de contabilidad, calcular datos, etc.
  // ...
    DELAY PROCESS(Current process;60*60) //dormir un minuto, luego repetir el bucle
 End while
```

* En el **Método base On Exit**:

```4d
 Use(Storage.global)
    Storage.global.ExitNow:=True //pedir a todos los workers en segundo plano que salgan
 End use
 
 $time:=Current time
 $finished:=False
 While((($time+10)>(Current time+0))&(Not($finished)))&NBSP; // máximo 10 segundos
    $list:=Get process activity(Processes only) // obtener la lista de todos los procesos
    $sublist:=$list.processes.query("name='Background job@' and state >=0") //¿Aún hay un trabajo en segundo plano en ejecución?
    $finished:=($sublist.length=0)
    If($sublist.length>0)
       For each($job;$sublist)
          RESUME PROCESS($job.number) //asegurarse de que todos los procesos están despiertos
       End for each
    End if
 End while
```

#### Ver también 

[Método base On Startup](metodo-base-on-startup.md)  
[QUIT 4D](quit-4d.md)  
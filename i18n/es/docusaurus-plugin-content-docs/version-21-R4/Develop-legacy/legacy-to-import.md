---
id: legacy-to-import
title: develop-legacy
draft: true
---



<!-- REF develop-semaphores.Desc -->
## Semáforos  

Los semáforos le permiten asegurarse de que dos o más procesos no modifiquen el mismo recurso (archivo, registro...) al mismo tiempo. Solo el proceso que coloca el semáforo puede eliminarlo.

:::info

Las [señales](../API/SignalClass.md) también pueden utilizarse para gestionar las interacciones. Las señales le permiten asegurarse de que uno o varios procesos esperarán a que se complete una tarea específica antes de continuar su ejecución. Cualquier proceso puede esperar y/o liberar una señal.

:::

### ¿Qué es un semáforo?  

En un programa informático, un semáforo es una herramienta utilizada para proteger acciones que solo deben ser ejecutadas por un único proceso o usuario a la vez.

En 4D, la necesidad habitual de utilizar semáforos es para modificar un array interproceso: si un proceso está modificando los valores del array, otro proceso no debe poder hacer lo mismo al mismo tiempo. El desarrollador utiliza un semáforo para indicar a un proceso que solo puede ejecutar su secuencia de operaciones si ningún otro proceso está realizando ya las mismas tareas. Cuando un proceso encuentra un semáforo, existen tres posibilidades:

- Obtiene de inmediato el derecho a pasar
- Espera su turno hasta que obtiene el derecho a pasar
- Continúa su camino, renunciando a ejecutar las tareas.

Por lo tanto, el semáforo protege partes del código. Solo permite el paso de un proceso a la vez y bloquea el acceso hasta que el proceso que actualmente tiene el derecho de uso renuncia a este derecho liberando el semáforo.

### Comandos para trabajar con semáforos  

En 4D, usted coloca un semáforo llamando al comando [`Semaphore`](../commands/sempahore). Para liberar un semáforo, llame al comando [`CLEAR SEMAPHORE`](../commands/clear-sempahore).

El comando [`Semaphore`](../commands/sempahore) tiene un comportamiento muy particular ya que potencialmente realiza dos acciones simultáneamente:

- Si el semáforo ya está asignado, la función devuelve **True**
- Si el semáforo no está asignado, la función lo asigna al proceso y devuelve **False** al mismo tiempo.

Esta doble acción realizada por el mismo comando garantiza que ninguna operación externa pueda insertarse entre la prueba del semáforo y su asignación.

Puede utilizar el comando [`Test semaphore`](../commands/test-semaphore) para saber si un semáforo ya está asignado o no. Este comando se utiliza principalmente como parte de operaciones largas, como el cierre anual de cuentas, donde [`Test semaphore`](../commands/test-semaphore) le permite controlar la interfaz para impedir el acceso a ciertas operaciones, como la adición de datos contables.

### Cómo utilizar los semáforos  

Los semáforos deben utilizarse según los siguientes principios:

- Un semáforo debe colocarse y liberarse en el mismo método,
- La ejecución del código protegido por el semáforo debe ser lo más corta posible,
- El código debe temporizarse mediante el parámetro tickCount del comando [`Semaphore`](../commands/sempahore) para esperar la liberación del semáforo.

Aquí tiene un código típico para utilizar un semáforo:

```4d
 While(Semaphore("MySemaphore";300))
    IDLE
 End while
  // coloque aquí el código protegido por el semáforo
 CLEAR SEMAPHORE("MySemaphore")
```

Un semáforo que no se libera puede bloquear parte de la base de datos. Colocar y liberar los semáforos en el mismo método ayuda a eliminar este riesgo.

Minimizar el código protegido por el semáforo aumenta la fluidez de la aplicación y evita que el semáforo actúe como un cuello de botella. 

Por último, el uso del parámetro opcional *tickCount* del comando [`Semaphore`](../commands/sempahore) es esencial para optimizar la espera de la liberación del semáforo. Con este parámetro, el comando funciona de la siguiente manera:

- El proceso espera como máximo el número de ticks especificado (300 en el ejemplo) a que el semáforo esté disponible, sin que la ejecución del código pase a la línea siguiente,
- Si el semáforo se libera antes del final de este límite, se asigna inmediatamente al proceso (Semaphore devuelve False) y la ejecución del código se reanuda,
- Si el semáforo no se libera antes del final de este límite, entonces la ejecución del código se reanuda.

El comando también prioriza las solicitudes estableciendo una cola de espera. De esta manera, el primer proceso que solicite un semáforo será el primero en obtenerlo. Tenga en cuenta que el tiempo de espera se define en función de las particularidades de la aplicación.

### Semáforos locales o globales 

Existen dos tipos de semáforos en 4D: los semáforos locales y los semáforos globales.

- Un semáforo local es accesible por todos los procesos de la misma estación de trabajo y únicamente en esa estación. Un semáforo local puede crearse anteponiendo al nombre del semáforo un signo de dólar ($). Los semáforos locales se utilizan para supervisar operaciones entre procesos que se ejecutan en la misma estación de trabajo. Por ejemplo, un semáforo local puede utilizarse para supervisar el acceso a un array interproceso compartido por todos los procesos de su base de datos monousuario o de la estación de trabajo.
- Un semáforo global es accesible para todos los usuarios y todos sus procesos. Los semáforos globales se utilizan para supervisar operaciones entre los usuarios de una base de datos multiusuario.

Los semáforos globales y locales son idénticos en su lógica. La diferencia reside en su alcance.

En cliente/servidor, los semáforos globales se comparten entre todos los procesos que se ejecutan en todos los clientes y servidores. Un semáforo local solo se comparte entre los procesos que se ejecutan en la máquina donde se creó.

En las aplicaciones 4D monousuario, los semáforos globales o locales tienen el mismo alcance porque usted es el único usuario. No obstante, si su base de datos se utiliza en ambas configuraciones, asegúrese de utilizar semáforos globales o locales según lo que desee hacer.

**Nota:** Recomendamos utilizar semáforos locales cuando necesite un semáforo para gestionar un aspecto local de un cliente de la aplicación, como la interfaz o un array de variables interproceso. Si utiliza un semáforo global en este caso, no solo provocaría intercambios de red innecesarios, sino que también podría afectar innecesariamente a otras máquinas cliente. El uso de un semáforo local evitaría estos efectos secundarios indeseables.


<!-- END REF -->
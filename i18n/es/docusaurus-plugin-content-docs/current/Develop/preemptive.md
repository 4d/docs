---
id: preemptive
title: Procesos apropiativos
---

El código 4D compilado puede ejecutarse en **procesos apropiativos**. Gracias a esta característica, sus aplicaciones compiladas 4D pueden aprovechar al máximo las computadoras multinúcleo para que su ejecución sea más rápida y puedan soportar más usuarios conectados.

## ¿Qué es un proceso apropiativo?

Cuando se ejecuta en modo _apropiativo_, un proceso se dedica a una CPU. La gestión de procesos se delega entonces en el sistema, que puede asignar cada CPU por separado en una máquina multinúcleo.

Cuando se ejecuta en modo _cooperativo_, todos los procesos son gestionados por el hilo padre de la aplicación y comparten la misma CPU, incluso en una máquina multinúcleo.

Como resultado, en modo apropiativo, se mejora el rendimiento general de la aplicación, especialmente en máquinas de múltiples núcleos, ya que varios procesos (hilos) pueden ejecutarse realmente de forma simultánea. Sin embargo, las ganancias reales dependen de las operaciones que se ejecuten. A cambio, dado que cada hilo es independiente de los demás en modo apropiativo y no es administrado directamente por la aplicación, existen restricciones específicas aplicadas al código que se desea que cumpla con el uso apropiativo. Además, la ejecución apropiativa sólo está disponible en determinados contextos específicos.

## Disponibilidad del modo apropiativo

El uso del modo apropiativo está soportado en los siguientes contextos de ejecución:

| Contexto          | Ejecución apropiativa                                               |
| ----------------- | ------------------------------------------------------------------- |
| 4D Server         | sí                                                                  |
| 4D remoto         | sí, con [ServerNet o QUIC](../settings/client-server#network-layer) |
| 4D monopuesto     | sí                                                                  |
| Modo compilado    | sí                                                                  |
| Modo interpretado | no                                                                  |

Si el contexto de ejecución admite el modo apropiativo y si el método es "hilo seguro", un nuevo proceso de 4D lanzado utilizando los comandos `New process` o `CALL WORKER`, o el elemento de menú "Ejecutar método", se ejecutará en un hilo apropiativo.

En caso contrario, si se llama a `New process` o `CALL WORKER` desde un contexto de ejecución no soportado (es decir, desde el modo interpretado), el proceso es siempre cooperativo.

## Hilo seguro vs. hilo inseguro

El código 4D se puede ejecutar en hilo apropiativo sólo cuando se cumplen algunas condiciones específicas. Cada parte del código ejecutado (comandos, métodos, variables, funciones, etc.) debe ser compatible con el uso apropiativo. Los elementos que se pueden ejecutar en hilos apropiativos se llaman hilos seguros y los elementos que no se pueden ejecutar en hilos apropiativos se llaman hilos inseguros.

:::note

Dado que un hilo se maneja de forma independiente a partir del método del proceso padre, toda la cadena de llamada no debe incluir ningún código inseguro para los hilos; de lo contrario, la ejecución apropiativa no será posible. Este punto se discute [en este párrafo](#when-is-a-process-started-preemptivamente).

:::

La propiedad "seguridad de hilo" de cada elemento depende del elemento en sí:

- Comandos 4D: hilo seguro es una propiedad interna. En el [Manual de Referencia del Lenguaje 4D](https://doc.4d.com/4Dv20/4D/20.1/4D-Language-Reference.100-6479538.en.html), los comandos hilo seguro se identifican por el icono ![](../assets/en/Develop/thread-safe.png). También puede utilizar el comando [`Nombre del comando`](https://doc.4d.com/4dv20/help/command/en/page538.html) para saber si un comando es hilo seguro. Gran parte de los comandos 4D pueden ejecutarse en modo apropiativo.
- Métodos de proyecto: las condiciones para seguridad de hilo se listan en [este párrafo](#writing-a-thread-safe-method).

Básicamente, el código que se ejecuta en hilos apropiativos no puede llamar a las partes con las interacciones externas, tal como el código plug-in o las variables interproceso. Los accesos a los datos, sin embargo, son permitidos desde el servidor de datos 4D que soporta la ejecución apropiativa.

## Declarar un método apropiativo

By default, 4D executes all the project methods of your application in cooperative mode. If you want to benefit from the preemptive mode feature, the first step consists of explicitly declaring all methods that you want to be started in preemptive mode whenever possible -- that is, methods that you consider capable of being run in a preemptive process. The compiler will [check that these methods are actually thread-safe](#writing-a-thread-safe-method) at compile time. You can also disallow preemptive mode for some methods, if necessary.

Keep in mind that declaring a method "capable" of preemptive use makes it eligible for preemptive execution but does not guarantee that it will actually be executed in preemptive mode at runtime. Starting a process in preemptive mode results from an [evaluation performed by 4D](#when-is-a-process-started-preemptively) regarding the properties of all the methods in the call chain of the process.

To declare your method eligible for use in preemptive mode, you need to use the "Execution mode" declaration option in the Method Properties dialog box:

![](../assets/en/Develop/preemptif.png)

Se ofrecen las siguientes opciones:

- **Can be run in preemptive processes**: By checking this option, you declare that the method is able of being run in a preemptive process and therefore should be run in preemptive mode whenever possible. La propiedad "preemptive" del método toma el valor "capable".

  Cuando esta opción está seleccionada, el compilador de 4D verificará que el método es realmente capaz y devolverá errores si este no es el caso, por ejemplo, si llama directa o indirectamente a comandos o métodos que no pueden ser ejecutados en modo apropiativo (la cadena de llamadas completa es analizada pero los errores sólo son reportados al primer nivel). A continuación, puede editar el método para que sea hilo seguro, o seleccionar otra opción.

  Si la elegibilidad del método apropiativo es aprobada, éste se etiquetará internamente como "thread-safe" y se ejecutará en modo apropiativo siempre que se cumplan las condiciones requeridas. This property defines its eligibility for preemptive mode but does not guarantee that the method will actually be run in preemptive mode, since this execution mode requires a [specific context](#when-is-a-process-started-preemptively).

- **Cannot be run in preemptive processes**: By checking this option, you declare that the method must never be run in preemptive mode, and therefore must always be run in cooperative mode, as in previous 4D versions. La propiedad "preemptive" del método toma el valor "incapable".

  Cuando esta opción está marcada, el compilador de 4D no verificará la capacidad del método para ejecutarse de forma apropiativa; se etiquetará automáticamente como "thread-unsafe" internamente (incluso si es teóricamente compatible). Cuando se llama en ejecución, este método "contaminará" todos los otros métodos en el mismo hilo, forzando así que este hilo se ejecute en modo cooperativo, incluso si los otros métodos son hilo-seguro.

- **Indifferent**(default): By checking this option, you declare that you do not want to handle the preemptive property for the method. La propiedad "preemptive" del método se establece como "indifferent".

  Cuando esta opción está seleccionada, el compilador de 4D evaluará la compatibilidad del método con el modo apropiativo y lo etiquetará internamente como "thread-safe" o "thread-unsafe". No se devuelve ningún error relacionado con la ejecución apropiativa. Si el método se evalúa como "thread-safe", en la ejecución no impedirá el uso del modo apropiativo si se llama en un contexto apropiativo. Por el contrario, si el método se evalúa como "thread-unsafe", en ejecución impedirá la ejecución del modo apropiativo cuando sea llamado.

Note that with this option, whatever the internal thread safety evaluation, the method will always be executed in cooperative mode when called directly by 4D as the first parent method (for example through the `New process` command). Si se marca como "thread-safe" internamente, sólo se tiene en cuenta cuando se llama desde otros métodos dentro de una cadena de llamadas.

:::note Caso particular

If the method has also the [**Shared by components and host database**](../Project/code-overview.md#shared-by-components-and-host-database) property, setting the **Indifferent** option will automatically tag the method as thread-unsafe. If you want a shared component method to be thread-safe, you must explicitely set it to **Can be run in preemptive processes**.

:::

## ¿Cuándo se inicia un proceso de manera apropiativa?

:::info Recordatorio

Preemptive execution is only available in compiled mode.

:::

In compiled mode, when starting a process created by either `New process` or `CALL WORKER` commands, 4D reads the preemptive property of the process method (also named _parent_ method) and executes the process in preemptive or cooperative mode, depending on this property:

- If the process method is thread-safe (validated during compilation), the process is executed in a preemptive thread.
- If the process method is thread-unsafe, the process is run in a cooperative thread.
- If the preemptive property of the process method was set to "indifferent", by compatibility the process is run in a cooperative thread (even if the method is actually capable of preemptive use). Note however that this compatibility feature is only applied when the method is used as a process method: a method declared "indifferent" but internally tagged "thread-safe" by the compiler can be called preemptively by another method (see below).

The actual thread-safe property depends on the call chain. If a method with the property declared as "capable" calls a thread-unsafe method at either of its sublevels, a compilation error will be returned: if a single method in the entire call chain is thread-unsafe, it will "contaminate" all other methods and preemptive execution will be rejected by the compiler. A preemptive thread can be created only when the entire chain is thread-safe and the process method has been declared "Can be run in preemptive process".
On the other hand, the same thread-safe method may be executed in a preemptive thread when it is in one call chain, and in a cooperative thread when it is in another call chain.

For example, consider the following project methods:

```4d
  //MyDialog project method
  //contains interface calls: will be internally thread unsafe
 $win:=Open form window("tools";Palette form window)
 DIALOG("tools")
```

```4d
  //MyComp project method
  //contains simple computing: will be internally thread safe
 #DECLARE($value : Integer) -> $result : Integer
 $result:=$value*2
```

```4d
  //CallDial project method
 var $vName : Text
 MyDialog
```

```4d
  //CallComp project method
 var $vAge : Integer
 MyComp($vAge)
```

Executing a method in preemptive mode will depend on its "execution" property and the call chain. The following table illustrates these various situations:

![](../assets/en/Develop/legend.png)

| Declaración y cadena de llamadas      | Compilación | Seguridad de hilo resultante           | Ejecución                 | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------- | ----------- | -------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](../assets/en/Develop/scenar1.png) | OK          | ![](../assets/en/Develop/scenar2.png)  | Apropiativo               | CallComp es el método padre, declarado "capaz" de uso apropiativo; ya que MyComp es internamente hilo seguro, CallComp es hilo seguro y el proceso es apropiativo                                                                                                                                                                                                                                                                                                      |
| ![](../assets/en/Develop/scenar3.png) | Error       | ![](../assets/en/Develop/scenar4.png)  | La ejecución es imposible | CallDial es el método padre, declarado "capaz"; MyDialog es "indiferente". Sin embargo, ya que MyDialog está internamente hilo inseguro, contamina la cadena de llamadas. La compilación falla debido a un conflicto entre la declaración deCallDial y su capacidad real. La solución es o bien modificar MyDialog para que sea hilo seguro, de modo que la ejecución es apropiativa, o cambiar la declaración de propiedad de CallDial para correrlo como cooperativo |
| ![](../assets/en/Develop/scenar5.png) | OK          | ![](../assets/en/Develop/scenar6.png)  | Cooperativo               | Como CallDial se declara "incapaz" de uso apropiativo, la compilación es internamente hilo inseguro, la ejecución siempre será cooperativa, cualquiera que sea el estado de MyDialog                                                                                                                                                                                                                                                                                   |
| ![](../assets/en/Develop/scenar7.png) | OK          | ![](../assets/en/Develop/scenar8.png)  | Cooperativo               | Como CallComp es el método padre con la propiedad "indiferente", luego el proceso es cooperativo incluso si toda la cadena es hilo seguro.                                                                                                                                                                                                                                                                                                                             |
| ![](../assets/en/Develop/scenar9.png) | OK          | ![](../assets/en/Develop/scenar10.png) | Cooperativo               | Como CallDial es el método padre (la propiedad era "indiferente"), entonces el proceso es cooperativo y la compilación exitosa                                                                                                                                                                                                                                                                                                                                         |

### Cómo buscar el modo de ejecución actual

4D permite identificar el modo de ejecución de los procesos en modo compilado:

- El comando [`PROCESS PROPERTIES`](https://doc.4d.com/4dv20/help/command/en/page336.html) permite averiguar si un proceso se ejecuta en modo apropiativo o cooperativo.
- El Explorador de ejecución y la [ventana de administración de 4D Server](../ServerWindow/processes.md#process-type) muestran iconos específicos para los procesos apropiativos.

## Escribir un método hilo seguro

To be thread-safe, a method must respect the following rules:

- It must have either the "Can be run in preemptive processes" or "Indifferent" property
- It must not call a 4D command or function that is thread-unsafe.
- It must not call another project method or function that is thread-unsafe
- It must not call a plug-in that is thread-unsafe.
- It must not use any interprocess variables(1)
- It must not call interface objects(2) (there are exceptions however, see below).

(1) To exchange data between preemptive processes (and between all processes), you can pass [shared collections or shared objects](../Concepts/shared.md) as parameters to processes, and/or use the [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html) catalog.
[Worker processes](processes.md#worker-processes) also allow you to exchange messages between any processes, including preemptive processes.

(2) The [`CALL FORM`](https://doc.4d.com/4dv20/help/command/en/page1391.html) command provides an elegant solution to call interface objects from a preemptive process.

:::note Notas

- In the case of a "Shared by components and host databases" method, the "Can be run in preemptive processes" property must be selected.
- Todas las declaraciones SQL son hilo seguro. SQL code inserted in `Begin SQL`/`End SQL` blocks must comply with the following conditions:
  - It must apply to the 4D Server or 4D local database (ODBC or remote databases via `SQL LOGIN` are thread-unsafe. However, local databases used with `USE DATABASE` are thread-safe).
  * Any trigger called by SQL statements must be thread-safe (see [Triggers](#triggers) below).

:::

Methods with the "Can be run in preemptive processes" property will be checked by 4D during compilation. A compilation error is issued whenever the compiler finds something that prevents it from being thread-safe:

![](../assets/en/Develop/thread-unsafe.png)

:::info

It is possible to [disable locally the thread-safety verification](#).

:::

The [symbol file](../Project/compiler.md/#complete-list-of-methods), if enabled, also contains the thread safety status for each method.

### Interfaz de usuario

Since they are "external" accesses, calls to user interface objects such as forms, as well as to the Debugger, are not allowed in preemptive threads.

The only possible accesses to the user interface from a preemptive thread are:

- [Standard error dialog](../Debugging/basics). The dialog is displayed in the user mode process (on 4D) or the server user interface process (4D Server). The **Trace** button is disabled.
- Standard progress indicators
- `ALERT`, `Request` and `CONFIRM` dialogs. The dialog is displayed in the user mode process (on 4D) or the server user interface process (4D Server). Note that if 4D Server has been launched as a service on Windows with no user interaction allowed, the dialogs will not be displayed.

### Triggers

When a method uses a command that can call a trigger, the 4D compiler evaluates the thread safety of the trigger in order to check the thread safety of the method:

```4d
 SAVE RECORD([Table_1]) //trigger on Table_1, if it exists, must be thread-safe
```

Here is the list of commands that are checked at compilation time for trigger thread safety:

`SAVE RECORD`, `SAVE RELATED ONE`, `DELETE RECORD`, `DELETE SELECTION`, `ARRAY TO SELECTION`, `JSON TO SELECTION`, `APPLY TO SELECTION`, `IMPORT DATA`, `IMPORT DIF`, `IMPORT ODBC`, `IMPORT SYLK`, `IMPORT TEXT`.

If the table is passed dynamically, the compiler may sometimes not be able to find out which trigger it needs to evaluate. Here are some examples of such situations:

```4d
 DEFAULT TABLE([Table_1])
 SAVE RECORD
 SAVE RECORD($ptrOnTable->)
 SAVE RECORD(Table(myMethodThatReturnsATableNumber())->)
```

In this case, all triggers are evaluated. If a thread-unsafe command is detected in at least one trigger, the whole group is rejected and the method is declared thread-unsafe.

### Error-handling methods

[Error-catching methods](../Concepts/error-handling.md) installed by the `ON ERR CALL` command must be thread-safe if they are likely to be called from a preemptive process. In order to handle this case, the compiler checks the thread safety property of error-catching project methods passed to the `ON ERR CALL` command during compilation and returns appropriate errors if they do not comply with preemptive execution.

Note that this checking is only possible when the method name is passed as a constant, and is not computed, as shown below:

```4d
 ON ERR CALL("myErrMethod1") //will be checked by the compiler
 ON ERR CALL("myErrMethod"+String($vNum)) //will not be checked by the compiler
```

In addition, if an error-catching project method cannot be called at runtime (following a thread safety issue, or for any reason like "method not found"), the error -10532 "Cannot call error handling project method 'methodName'" is generated.

### Compatibilidad de punteros

A process can dereference a pointer to access the value of another process variable only if both processes are cooperative; otherwise, 4D will throw an error. In a preemptive process, if some 4D code tries to dereference a pointer to an interprocess variable, 4D will throw an error.

Ejemplo con los siguientes métodos:

Method1:

```4d
 myVar:=42
 $pid:=New process("Method2";0;"process name";->myVar)
```

Method2:

```4d
 $value:=$1->
```

If either the process running Method1 or the process running Method2 is preemptive, then the expression `$value:=$1->` will throw an execution error.

### Referencia de documento refDoc

The use of DocRef type parameters (opened document reference, used or returned by `Open document`, `Create document`, `Append document`, `CLOSE DOCUMENT`, `RECEIVE PACKET`, `SEND PACKET`) is limited to the following contexts:

- When called from a preemptive process, a `DocRef` reference is only usable from that preemptive process.
- When called from a cooperative process, a `DocRef` reference is usable from any other cooperative process.

## Desactivar localmente la verificación hilo de seguridad

En algunos casos, puede que prefiera que la verificación "thread-safety" de los comandos no se aplique a algunas partes del código, como por ejemplo, cuando tiene comandos no hilo seguro que sabe que nunca se van a llamar.

Para hacer esto, debe rodear el código a excluir del comando hilo seguro utilizando las directivas específicas `%T-` y `%T+ como comentarios. El comentario `//%T-`desactiva la verificación hilo seguro y el comentario`//%T+\` la reactiva:

```4d
  // %T- para deshabilitar la verificación hilo seguro
  
  // Coloque el código que contiene los comandos que se excluirán de la verificacion hilo seguro
 $w:=Open window(10;10;100;100) //por ejemplo
  
  // %T+ para reactivar nuevamente la verificación hilo seguro para el resto del método
```

Por supuesto, el desarrollador 4D es responsable de que el modo apropiativo del código sea compatible con las directivas de activación y de reactivación. Se generarán errores de tiempo de ejecución si se ejecuta código hilo no seguro en un hilo apropiativo.

---
id: SignalClass
title: Signal
---

Signals are tools provided by the 4D language to manage interactions and avoid conflicts between processes in a multiprocess application. Signals allow you to make sure one or more process(es) will wait for a specific task to be completed before continuing execution. Any process can wait and/or release a signal.

> Semaphores can also be used to manage interactions. Semaphores allow you to make sure that two or more processes do not modify the same resource (file, record...) at the same time. Sólo el proceso que define el semáforo puede eliminarlo.


### Signal Object

A signal is a shared object that must be passed as a parameter to commands that call or create workers or processes.

A `4D.Signal` object contains the following built-in methods and properties:

- [`.wait()`](#wait)
- [`.trigger()`](#trigger)
- [`.signaled`](#signaled)
- [`.description`](#description).

Any worker/process calling the `.wait()` method will suspend its execution until the `.signaled` property is true. While waiting for a signal, the calling process does not use any CPU. This can be very interesting for performance in multiprocess applications. The `.signaled` property becomes true when any worker/process calls the `.trigger()` method.

Note that to avoid blocking situations, the `.wait()` can also return after a defined timeout has been reached.

Signal objects are created with the [New signal](#new-signal) command.


### Trabajar con señales

In 4D, you create a new signal object by calling the [`New signal`](#new-signal) command. Once created, this signal must be passed as a parameter to the `New process` or `CALL WORKER` commands so that they can modify it when they have finished the task you want to wait for.

- `signal.wait()` must be called from the worker/process that needs another worker/process to finish a task in order to continue.
- `signal.trigger()` must be called from the worker/process that finished its execution in order to release all others.


![](assets/en/API/signal.png)

Once a signal has been released using a `signal.trigger()` call, it cannot be reused again. If you want to set another signal, you need to call the `New signal` command again.

Since a signal object is a [shared object](Concepts/shared.md), you can use it to return results from called workers/processes, provided that you do not forget to write values within a `Use...End use` structure (see example).

### Ejemplo

```4d
 var $signal : 4D.Signal

  // Creation of a signal
 $signal:=New signal

  // call main process and execute OpenForm method
 CALL WORKER(1;"OpenForm";$signal)
  // do another calculation
 ...
  // Waiting for the end of the process
 $signaled:=$signal.wait()

  // Processing of the results
 $calc:=$signal.result+...
```

***OpenForm*** method :

```4d
 #DECLARE ($signal : 4D.Signal)  
 var $form : Object
 $form:=New object("value";0)

  // Open the form
 $win:=Open form window("Information";Movable form dialog box)
 DIALOG("Information";$form)
 CLOSE WINDOW($win)

  // Add a new attribute to your $signal shared object to pass your result to the other process:
 Use($signal)
    $signal.result:=$form.value
 End use

  // Trigger the signal to the waiting process
 $signal.trigger()
```

### Resumen


|                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SignalClass.description.Syntax -->](#description)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.description.Summary -->|
| [<!-- INCLUDE #SignalClass.signaled.Syntax -->](#signaled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.signaled.Summary --> |
| [<!-- INCLUDE #SignalClass.trigger().Syntax -->](#trigger)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.trigger().Summary --> |
| [<!-- INCLUDE #SignalClass.wait().Syntax -->](#wait)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.wait().Summary --> |




<!-- REF SignalClass.New signal.Desc -->
## New signal


<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #_command_.New signal.Syntax -->
**New signal** { ( *description* : Text ) } : 4D.Signal<!-- END REF -->

<!-- REF SignalClass.New signal.Params -->
| Parámetros  | Tipo      |    | Descripción                          |
| ----------- | --------- |:--:| ------------------------------------ |
| description | Texto     | -> | Descripción para la señal            |
| Resultado   | 4D.Signal | <- | Objeto nativo que encapsula la señal |
<!-- END REF -->


#### Descripción

El comando `New signal` <!-- REF #_command_.New signal.Summary -->crea un objeto `4D.Signal`<!-- END REF -->.

Una señal es un objeto compartido que puede ser pasado como parámetro de un worker o proceso a otro worker o proceso, de manera que:

*   the called worker/process can update the signal object after specific processing has completed
*   the calling worker/process can stop its execution and wait until the signal is updated, without consuming any CPU resources.

Opcionalmente, en el parámetro *description* puede pasar un texto personalizado que describa la señal. Este texto también puede definirse después de la creación de la señal.

Dado que el objeto señal es un objeto compartido, también se puede utilizar para mantener las propiedades del usuario, incluyendo la propiedad [`.description`](#description), llamando a la estructura `Use...End use`.


**Valor devuelto**

Un nuevo objeto [`4D.Signal`](#signal-object).

#### Ejemplo

Este es un ejemplo típico de un worker que fija una señal:

```4d
 var $signal : 4D.Signal
 $signal:=New signal("This is my first signal")

 CALL WORKER("myworker";"doSomething";$signal)
 $signaled:=$signal.wait(1) //wait for 1 second max

 If($signaled)
    ALERT("myworker finished the work. Result: "+$signal.myresult)
 Else
    ALERT("myworker no ha terminado en menos de 1s")
 End if
```


El método ***doSomething*** puede ser:

```4d
 #DECLARE ($signal : 4D.Signal)
  //any processing
  //...
 Use($signal)
    $signal.myresult:=$processingResult  //return the result
 End use
 $signal.trigger() // The work is finished
```

<!-- END REF -->


<!-- REF SignalClass.description.Desc -->
## .description

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #SignalClass.description.Syntax -->
**.description** : Text<!-- END REF -->

#### Descripción

La propiedad `.description` <!-- REF #SignalClass.description.Summary -->contiene una descripción personalizada para el objeto `Signal`.<!-- END REF -->.

`.description` puede definirse al crear el objeto signal o en cualquier momento. Tenga en cuenta que, dado que el objeto `Signal` es un objeto compartido, cualquier acceso en modo de escritura a la propiedad `.description` debe estar rodeado por una estructura `Use...End use`.

Esta propiedad es **lectura-escritura**. 

<!-- END REF -->



<!-- REF SignalClass.signaled.Desc -->
## .signaled

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |

</details>

<!-- REF #SignalClass.signaled.Syntax -->
**.signaled**: Boolean<!-- END REF -->

#### Descripción

La propiedad `.signaled` <!-- REF #SignalClass.signaled.Summary -->contiene el estado actual del objeto `Signal`<!-- END REF -->. Cuando se crea signal, `.signaled` es **False**. Se convierte en **True** cuando se llama al objeto `.trigger( )`.

Esta propiedad es **de sólo lectura**. 

<!-- END REF -->



<!-- REF SignalClass.trigger().Desc -->
## .trigger()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #SignalClass.trigger().Syntax -->
**.trigger( )**<!-- END REF -->

<!-- REF #SignalClass.trigger().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |::| ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->


#### Descripción

La función `.trigger( )` <!-- REF #SignalClass.trigger().Summary -->pone la propiedad `signaled` del objeto signal como **true**<!-- END REF --> y despierta a todos los workers o procesos que esperan esta señal.

Si la señal ya está en el estado de señalización (es decir, la propiedad `signaled` ya es **true**), la función no hace nada.

<!-- END REF -->



<!-- REF SignalClass.wait().Desc -->
## .wait()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v17 R4  | Añadidos       |
</details>

<!-- REF #SignalClass.wait().Syntax -->
**.wait**( { *timeout* : Real } ) : Boolean <!-- END REF -->

<!-- REF #SignalClass.wait().Params -->
| Parámetros | Tipo     |    | Descripción                                     |
| ---------- | -------- | -- | ----------------------------------------------- |
| timeout    | Real     | -> | Tiempo máximo de espera de la señal en segundos |
| Resultado  | Booleano | <- | Estado de la propiedad `.signaled`              |
<!-- END REF -->


#### Descripción

La función `.wait( )` <!-- REF #SignalClass.wait().Summary -->hace que el proceso actual espere hasta que la propiedad `.signaled` del objeto signal se convierta en **true** o expire el *timeout* opcional.

Para evitar que el código se bloquee, puede pasar un tiempo máximo de espera en segundos en el parámetro *timeout* (se aceptan decimales).
> **Warning**: Calling `.wait( )` without a *timeout* in the 4D main process is not recommended because it could freeze the whole 4D application.

Si signal ya está en el estado de señalización (es decir, la propiedad `.signaled` ya es **true**), la función devuelve inmediatamente, sin esperar.

La función devuelve el valor de la propiedad `.signaled`. La evaluación de este valor permite saber si la función devuelta porque el `.trigger( )` se ha llamado (`.signaled` es **true**) o si el *timeout* vencido (`.signaled` es **false**).
> The state of a process that waits for a signal is `Waiting for internal flag`.<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>

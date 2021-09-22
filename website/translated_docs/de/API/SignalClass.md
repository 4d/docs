---
id: SignalClass
title: Signal
---

Signals are tools provided by the 4D language to manage interactions and avoid conflicts between processes in a multiprocess application. Signals allow you to make sure one or more process(es) will wait for a specific task to be completed before continuing execution. Any process can wait and/or release a signal.

> Semaphores can also be used to manage interactions. Semaphores allow you to make sure that two or more processes do not modify the same resource (file, record...) at the same time. Only the process that sets the semaphore can remove it.


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


### Working with signals

In 4D, you create a new signal object by calling the [`New signal`](#new-signal) command. Once created, this signal must be passed as a parameter to the `New process` or `CALL WORKER` commands so that they can modify it when they have finished the task you want to wait for.

- `signal.wait()` must be called from the worker/process that needs another worker/process to finish a task in order to continue.
- `signal.trigger()` must be called from the worker/process that finished its execution in order to release all others.


![](assets/en/API/signal.png)

Once a signal has been released using a `signal.trigger()` call, it cannot be reused again. If you want to set another signal, you need to call the `New signal` command again.

Since a signal object is a [shared object](Concepts/shared.md), you can use it to return results from called workers/processes, provided that you do not forget to write values within a `Use...End use` structure (see example).

### Beispiel

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

### Summary


|                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**.description** : Text](#description)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains a custom description for the `Signal` object.                                                                                                  |
| [**.signaled** : Boolean](#signaled)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the current state of the `Signal` object                                                                                                          |
| [**.trigger( )**](#trigger)<p>&nbsp;&nbsp;&nbsp;&nbsp;sets the `signaled` property of the signal object to **true**                                                                                                       |
| [**.wait**( { *timeout* : Real } ) : Boolean ](#wait)<p>&nbsp;&nbsp;&nbsp;&nbsp;makes the current process wait until the `.signaled` property of the signal object to become **true** or the optional *timeout* to expire |




## New signal


<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R4  | Added   |
</details>

**New signal** { ( *description* : Text ) } : 4D.Signal
| Parameter   | Typ       |    | Beschreibung                           |
| ----------- | --------- |:--:| -------------------------------------- |
| description | Text      | -> | Description for the signal             |
| Ergebnis    | 4D.Signal | <- | Native object encapsulating the signal |


#### Beschreibung

The `New signal` command creates a `4D.Signal` object.

A signal is a shared object which can be passed as parameter from a worker or process to another worker or process, so that:

*   the called worker/process can update the signal object after specific processing has completed
*   the calling worker/process can stop its execution and wait until the signal is updated, without consuming any CPU resources.

Optionally, in the *description* parameter you can pass a custom text describing the signal. This text can also be defined after signal creation.

Since the signal object is a shared object, it can also be used to maintain user properties, including the [`.description`](#description) property, by calling the `Use...End use` structure.


**Rückgabewert**

A new [`4D.Signal` object](#signal-object).

#### Beispiel

Here is a typical example of a worker that sets a signal:

```4d
 var $signal : 4D.Signal
 $signal:=New signal("This is my first signal")

 CALL WORKER("myworker";"doSomething";$signal)
 $signaled:=$signal.wait(1) //wait for 1 second max

 If($signaled)
    ALERT("myworker finished the work. Result: "+$signal.myresult)
 Else
    ALERT("myworker has not finished in less than 1s")
 End if
```


The ***doSomething*** method could be like:

```4d
 #DECLARE ($signal : 4D.Signal)
  //any processing
  //...
 Use($signal)
    $signal.myresult:=$processingResult  //return the result
 End use
 $signal.trigger() // The work is finished
```



## .description

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R4  | Added   |
</details>

**.description** : Text
#### Beschreibung

The `.description` property contains a custom description for the `Signal` object..

`.description` can be set at the creation of the signal object or at any moment. Note that since the `Signal` object is a shared object, any write-mode access to the `.description` property must be surrounded by a `Use...End use` structure.

This property is **read-write**.




## .signaled

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R4  | Added   |

</details>

**.signaled** : Boolean
#### Beschreibung

The `.signaled` property contains the current state of the `Signal` object. When the signal is created, `.signaled` is **False**. It becomes **True** when the `.trigger( )` is called on the object.

This property is **read-only**.




## .trigger()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R4  | Added   |
</details>

**.trigger( )**
| Parameter | Typ |  | Beschreibung                    |
| --------- | --- |::| ------------------------------- |
|           |     |  | Does not require any parameters |


#### Beschreibung

The `.trigger( )` function sets the `signaled` property of the signal object to **true** and awakens all workers or processes waiting for this signal.

If the signal is already in the signaled state (i.e., the `signaled` property is already **true**), the function does nothing.




## .wait()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v17 R4  | Added   |
</details>

**.wait**( { *timeout* : Real } ) : Boolean
| Parameter | Typ     |    | Beschreibung                                   |
| --------- | ------- | -- | ---------------------------------------------- |
| timeout   | Zahl    | -> | Maximum waiting time for the signal in seconds |
| Ergebnis  | Boolean | <- | State of the `.signaled` property              |


#### Beschreibung

The `.wait( )` function makes the current process wait until the `.signaled` property of the signal object to become **true** or the optional *timeout* to expire.

To prevent blocking code, you can pass a maximum waiting time in seconds in the *timeout* parameter (decimals are accepted).
> **Warning**: Calling `.wait( )` without a *timeout* in the 4D main process is not recommended because it could freeze the whole 4D application.

If the signal is already in the signaled state (i.e. the `.signaled` property is already **true**), the function returns immediately, without waiting.

The function returns the value of the `.signaled` property. Evaluating this value allows knowing if the function returned because the `.trigger( )` has been called (`.signaled` is **true**) or if the *timeout* expired (`.signaled` is **false**).
> The state of a process that waits for a signal is `Waiting for internal flag`.



<style> h2 { background: #d9ebff;}</style>

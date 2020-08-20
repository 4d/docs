---
id: signalClass
title: Signals
---

Signals are tools provided by the 4D language to manage interactions and avoid conflicts between processes in a multiprocess application. They 


## Signal Object

A signal is a shared object that:

*	contains two built-in methods, `.wait( )` and `.trigger( )`, as well as the `.signaled` and `.description` properties,
*	must be passed as a parameter to commands that call or create workers or processes.

Any worker/process calling the `.wait( )` method will suspend its execution until the `.signaled` property is true. While waiting for a signal, the calling process does not use any CPU. This can be very interesting for performance in multiprocess applications. The `.signaled` property becomes true when any worker/process calls the `.trigger( )` method.

Note that to avoid blocking situations, the `.wait( )` can also return after a defined timeout has been reached.

Signal objects are created with the [New signal](#new-signal) command.


## Example

```4d
 C_OBJECT($signal)
 
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
 C_OBJECT($1;$signal;$form)
 $signal:=$1
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

## Summary


||
|---|
|[<!-- INCLUDE #signalClass.description.Syntax -->](#description)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #signalClass.description.Summary -->|
|[<!-- INCLUDE #signalClass.signaled.Syntax -->](#signaled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #signalClass.signaled.Summary --> |
|[<!-- INCLUDE #signalClass.trigger().Syntax -->](#trigger-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #signalClass.trigger().Summary --> |
|[<!-- INCLUDE #signalClass.wait().Syntax -->](#wait-)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #signalClass.wait().Summary --> |


---

<!-- REF signalClass.New signal.Desc -->
## New signal 

Number: 1641

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF signalClass.New signal.Syntax -->
**New signal** { ( *description* ) } -> object<!-- END REF -->

<!-- REF signalClass.New signal.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|description|text|->|Description for the signal|
|Result|object|<-|Native object encapsulating the signal|
<!-- END REF -->


#### Description
The `New signal` command <!-- REF signalClass.New signal.Summary -->creates a `Signal` object<!-- END REF -->. 

A signal is a shared object which can be passed as parameter from a worker or process to another worker or process, so that:

*	the called worker/process can update the signal object after specific processing has completed
*	the calling worker/process can stop its execution and wait until the signal is updated, without consuming any CPU resources. 

Optionally, in the *description* parameter you can pass a custom text describing the signal. This text can also be defined after signal creation.

Since the signal object is a shared object, it can also be used to maintain user properties, including the `.description` property, by calling the `Use...End` use structure.
 

**Returned value**

The returned `Signal` object contains the following properties and methods:

|Property|	Type|	Description|
|---|---|---|
|`.signaled`|	Boolean|	(read-only property) false at signal creation. Becomes true when the `.trigger( )` function is called.|
|`.description`|	Text|	Custom description of the signal, if any.|

|Method	|Description|
|---|---|
|`.wait( )`|	Wait for the signal (calling process/worker)|
|`.trigger( )`|	Trigger the signal (called process/worker)|

#### Example 

Here is a typical example of a worker that sets a signal:

```4d
 C_OBJECT($signal)
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
C_OBJECT($1)
  //any processing
  //...
 Use($1)
    $1.myresult:=$processingResult  //return the result
 End use
 $1.trigger() // The work is finished
```

<!-- END REF -->

---

<!-- REF signalClass.description.Desc -->
## .description 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF #signalClass.description.Syntax -->
**.description** -> text<!-- END REF -->

#### Description
The `.description` property <!-- REF #signalClass.description.Summary -->contains a custom description for the `Signal` object.<!-- END REF -->.  

`.description` can be set at the creation of the signal object or at any moment. Note that since the `Signal` object is a shared object, any write-mode access to the `.description` property must be surrounded by a `Use...End use` structure.

This property is **read-write**. 

<!-- END REF -->

---

<!-- REF signalClass.signaled.Desc -->
## .signaled   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|

</details>

<!-- REF #signalClass.signaled.Syntax -->
**.signaled** -> boolean<!-- END REF -->

#### Description

The `.signaled` property <!-- REF #signalClass.signaled.Summary --> contains the current state of the `Signal` object<!-- END REF -->. When the signal is created, `.signaled` is **False**. It becomes **True** when the `.trigger( )` is called on the object.

This property is **read-only**. 

<!-- END REF -->

---

<!-- REF signalClass.trigger().Desc -->
## .trigger( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF #signalClass.trigger().Syntax -->
**.trigger( )** -> boolean<!-- END REF -->

<!-- REF #signalClass.trigger().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->


#### Description
The `.trigger( )` function <!-- REF #signalClass.trigger().Summary -->sets the "signaled" property of the signal object to *true*<!-- END REF --> and awakens all workers or processes waiting for this signal.

>For more information on the signal object, please refer to the [New signal](#new-signal) command.

If the signal is already in the signaled state (i.e., the signaled property is already **true**), the method does nothing.


#### Example

See example for the [New signal](#new-signal) command.


<!-- END REF -->

---

<!-- REF signalClass.wait().Desc -->
## .wait( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF #signalClass.wait().Syntax -->
**.wait**( { *timeout* } ) -> boolean <!-- END REF -->

<!-- REF #signalClass.wait().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|timeout|real|->|Maximum waiting time for the signal in seconds|
|Result|boolean|<-|State of the `.signaled` property|
<!-- END REF -->


#### Description
The `.wait( )` function <!-- REF #signalClass.wait().Summary -->makes the current process wait until the `.signaled` property of the signal object to become true or the optional timeout to expire<!-- END REF -->. 

>For more information on the signal object, please refer to the [New signal](#new-signal) command.

To prevent blocking code, you can pass a maximum waiting time in seconds in the *timeout* parameter (decimals are accepted). 

>**Warning**: Calling `.wait( )` without a *timeout* in the 4D main process is not recommended because it could freeze the whole 4D application.

If the signal is already in the signaled state (i.e. the `.signaled` property is already true), the function returns immediately, without waiting.

The function returns the value of the `.signaled` property. Evaluating this value allows knowing if the function returned because the `.trigger( )` has been called (`.signaled` is **true**) or if the *timeout* expired (`.signaled` is **false**).

>The state of a process that waits for a signal is `Waiting for internal flag`.



#### Example

See example for the [New signal](#new-signal) command.

<!-- END REF -->


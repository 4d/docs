---
id: new-signal
title: New signal
displayed_sidebar: docs
---

<!-- REF #_command_.New signal.Syntax -->**New signal** { ( *description* : Text ) } : 4D.Signal<!-- END REF -->

<!--REF #_command_.New signal.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| description | Text | &#8594;  | Description for the signal |
| Function result | 4D.Signal | &#8592; | Native object encapsulating the signal |

<!-- END REF-->

<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R4|Added|

</details>


#### Description 

The `New signal` command <!-- REF #_command_.New signal.Summary -->creates a `4D.Signal` object<!-- END REF -->.

A signal is a shared object which can be passed as parameter from a worker or process to another worker or process, so that:

*	the called worker/process can update the signal object after specific processing has completed
*	the calling worker/process can stop its execution and wait until the signal is updated, without consuming any CPU resources.

Optionally, in the *description* parameter you can pass a custom text describing the signal. This text can also be defined after signal creation.

Since the signal object is a shared object, it can also be used to maintain user properties, including the [`.description`](#description) property, by calling the `Use...End use` structure.


**Returned value**

A new [`4D.Signal` object](#signal-object).

#### Example

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


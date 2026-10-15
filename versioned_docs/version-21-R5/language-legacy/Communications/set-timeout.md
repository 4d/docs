---
id: set-timeout
title: SET TIMEOUT
slug: /commands/set-timeout
displayed_sidebar: docs
---

<!--REF #_command_.SET TIMEOUT.Syntax-->**SET TIMEOUT** ( *seconds* : Integer )<!-- END REF-->
<!--REF #_command_.SET TIMEOUT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| seconds | Integer | &#8594;  | Seconds until the timeout |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.SET TIMEOUT.Summary-->**SET TIMEOUT** specifies how much time a serial port command has to complete.<!-- END REF--> If the serial port command does not complete within the specified time, *seconds*, the serial port command is canceled, an error -9990 is generated, and the OK system variable is set to 0\. You can catch the error with an error-handling method installed using [ON ERR CALL](../commands/on-err-call).

Note that the time is the total time allowed for the command to execute, not the time between characters received. To cancel a previous setting and stop monitoring serial port communication, use a setting of 0 for *seconds*.

The commands that are affected by the timeout setting are:

* [RECEIVE PACKET](../commands/receive-packet)
* [RECEIVE RECORD](../commands/receive-record)
* [RECEIVE VARIABLE](../commands/receive-variable)

## Example 

The following example sets the serial port to receive data. It then sets a time-out. The data is read with [RECEIVE PACKET](../commands/receive-packet). If the data is not received in time, an error occurs:

```4d
 SET CHANNEL(MacOS serial port;Speed 9600+Data bits 8+Stop bits one+Parity none) // Open Serial Port
 SET TIMEOUT(10) // Set the timeout for 10 seconds
 ON ERR CALL("CATCH COM ERRORS") // Do not let the method being interrupted
 RECEIVE PACKET(vtBuffer;Char(13)) // Read until a carriage return is met
 If(OK=0)
    ALERT("Error receiving data.")
 Else
    [People]Name:=vtBuffer // Save received data in a field
 End if
 ON ERR CALL("")
```

## See also 

[ON ERR CALL](../commands/on-err-call)  
[RECEIVE BUFFER](../commands/receive-buffer)  
[RECEIVE PACKET](../commands/receive-packet)  
[RECEIVE RECORD](../commands/receive-record)  
[RECEIVE VARIABLE](../commands/receive-variable)  

## Properties

|  |  |
| --- | --- |
| Command number | 268 |
| Thread safe | yes |
| Modifies variables | OK, error |



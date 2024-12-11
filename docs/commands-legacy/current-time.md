---
id: current-time
title: Current time
slug: /commands/current-time
displayed_sidebar: docs
---

<!--REF #_command_.Current time.Syntax-->**Current time** {( * )} : Time<!-- END REF-->
<!--REF #_command_.Current time.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | Returns the current time from the server |
| Function result | Time | &#8592; | Current time |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current time.Summary-->The **Current time** command returns the current time from the system clock.<!-- END REF--> 

The current time is always between *00:00:00* and *23:59:59*. Use [String](string.md) or [Time string](time-string.md) to obtain the string form of the time expression returned by **Current time**.

**4D Server:** If you use the asterisk (\*) parameter when executing this function on a 4D Client machine, it returns the current time from the server.

#### Example 1 

The following example shows you how to time the length of an operation. Here, LongOperation is a method that needs to be timed:

```4d
 $vhStartTime:=((Current date-!1980-01-01!)*86400)+Current time //Save the start time, seconds after 1.1.1980
 LongOperation //Perform the operation
 $vhEndTime:=((Current date-!1980-01-01!)*86400)+Current time
 ALERT("The operation took "+String($vhEndTime-$vhStartTime)+" seconds.") //Display how long it took
```

#### Example 2 

The following example extracts the hours, minutes, and seconds from the current time:

```4d
 $vhNow:=Current time
 ALERT("Current hour is: "+String($vhNow\3600))
 ALERT("Current minute is: "+String(($vhNow\60)%60))
 ALERT("Current second is: "+String($vhNow%60))
```

#### See also 

[Milliseconds](milliseconds.md)  
[String](string.md)  
[Tickcount](tickcount.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 178 |
| Thread safe | &check; |



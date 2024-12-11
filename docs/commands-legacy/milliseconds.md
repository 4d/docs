---
id: milliseconds
title: Milliseconds
slug: /commands/milliseconds
displayed_sidebar: docs
---

<!--REF #_command_.Milliseconds.Syntax-->**Milliseconds**  : Integer<!-- END REF-->
<!--REF #_command_.Milliseconds.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Number of milliseconds elasped since the machine was started |

<!-- END REF-->

#### Description 

<!--REF #_command_.Milliseconds.Summary-->Milliseconds returns the number of milliseconds (1000th of a second) elapsed since the machine was started.<!-- END REF-->

The returned value is a signed longint, up to 2^31 (around 2 billion milliseconds or 24 days). When the machine has been running for more than 24 days, the number becomes negative.

The purpose of the command is to measure short periods of time with a high precision. A 24-day range is more than large enough for comparisons, but you need to be careful. When comparing values, always work with the difference between two values. Never compare the values directly since one could be negative and the other positive.

#### Example 

The following code waits up to 5 seconds for a locked record to become unlocked or it ends:

```4d
 If(Locked([Table_1]))
    $starttime:=Milliseconds
    Repeat
       DELAY PROCESS(Current process;15)
       LOAD RECORD([Table_1])
       $waittime:=Milliseconds-$starttime
    Until(Not(Locked([Table_1]))|(Process aborted)|($waittime>5000)) //wait 5 seconds max
 End if
```

**Note:** Always compare the difference between two calls of **Milliseconds** as shown above, never compare directly, *e.g.*:  

```4d
 (Milliseconds>($starttime+5000)) //never do it like this, as one could be positive, one negative
```

#### See also 

[Current time](current-time.md)  
[Tickcount](tickcount.md)  
[Timestamp](timestamp.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 459 |
| Thread safe | &check; |
| Forbidden on the server ||



---
id: time-string
title: Time string
slug: /commands/time-string
displayed_sidebar: docs
---

<!--REF #_command_.Time string.Syntax-->**Time string** ( *seconds* ) : Text<!-- END REF-->
<!--REF #_command_.Time string.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| seconds | Integer, Time | &#8594;  | Seconds from midnight |
| Function result | Text | &#8592; | Time as a string in 24-hour format |

<!-- END REF-->

#### Description 

<!--REF #_command_.Time string.Summary-->The **Time string** command returns the string form of the time expression you pass in *seconds*.<!-- END REF--> 

The string is in the HH:MM:SS format.

If you go beyond the number of seconds in a day (86,400), **Time string** continues to add hours, minutes, and seconds. For example, **Time string** (86401) returns 24:00:01.

**Note:** If you need the string form of a time expression in a variety of formats, use [String](string.md).

#### Example 

The following example displays an alert box with the message, “46800 seconds is 13:00:00.”

```4d
 ALERT("46800 seconds is "+Time string(46800))
```

#### See also 

[String](string.md)  
[Time](time.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 180 |
| Thread safe | &check; |



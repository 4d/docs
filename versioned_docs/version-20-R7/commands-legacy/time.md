---
id: time
title: Time
slug: /commands/time
displayed_sidebar: docs
---

<!--REF #_command_.Time.Syntax-->**Time** ( *timeValue* ) : Time<!-- END REF-->
<!--REF #_command_.Time.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| timeValue | Text, Integer | &#8594;  | Value to return as a time |
| Function result | Time | &#8592; | Time specified by timeValue |

<!-- END REF-->

#### Description 

<!--REF #_command_.Time.Summary-->The Time command returns a time expression equivalent to the time specified in the *timeValue* parameter.<!-- END REF-->

The *timeValue* parameter can contain either:

* a string containing a time expressed in one of the 4D standard time formats corresponding to the language of your system (for more information, refer to the description of the [String](string.md) command).
* a longint that represents the number of seconds elapsed since 00:00:00.

**Note:** If the *timeValue* expression evaluates to undefined, **Time** returns an empty time (00:00:00). This is useful when you expect the result of an expression (e.g. an object attribute) to be a time, even if it can be undefined.

#### Example 1 

The following example displays an alert box with the message “1:00 P.M. = 13 hours 0 minute”:

```4d
 ALERT("1:00 P.M. = "+String(Time("13:00:00");Hour Min))
```

#### Example 2 

You can express any numerical value as a time:

```4d
 vTime:=Time(10000)
  //vTime is 02:46:40
 vTime2:=Time((60*60)+(20*60)+5200)
  //vTime2 is 02:46:40
```

#### See also 

[ARRAY TIME](array-time.md)  
[Bool](bool.md)  
[String](string.md)  
[Time string](time-string.md)  
[Timestamp](timestamp.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 179 |
| Thread safe | &check; |



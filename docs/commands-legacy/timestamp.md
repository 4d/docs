---
id: timestamp
title: Timestamp
slug: /commands/timestamp
displayed_sidebar: docs
---

<!--REF #_command_.Timestamp.Syntax-->**Timestamp** : Text<!-- END REF-->
<!--REF #_command_.Timestamp.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Current time returned using ISO format with milliseconds |

<!-- END REF-->

#### Description 

<!--REF #_command_.Timestamp.Summary-->**Timestamp** returns the current UTC time in ISO format with milliseconds, i.<!-- END REF-->e. yyyy-MM-ddTHH:mm:ss.SSSZ. Note that the "Z" character indicates the GMT time zone. 

Each time returned by **Timestamp** is expressed according to the ISO 8601 standard. For more information about this standard, refer to: <https://en.wikipedia.org/wiki/ISO%5F8601>

**Note:** This function is not suitable for timing purposes; you should use [Milliseconds](milliseconds.md) when you want to measure elapsed time.

#### Example 

You can use **Timestamp** in a log file to know precisely when the events occurred. As shown below, you may have several operations occurring during the same second:

```4d
 $vhDocRef:=Append document("TimestampProject.log")
 $logWithTimestamp:=Timestamp+Char(Tab)+"Log with timestamp"+Char(Carriage return)
 SEND PACKET($vhDocRef;String($logWithTimestamp))
```

Result:

```RAW
2016-12-12T13:31:29.477Z   Log with timestamp2016-12-12T13:31:29.478Z   Connection of user12016-12-12T13:31:29.486Z   ERROR - Exception of type 'System exception'2016-12-12T13:31:29.492Z   Click on button16842016-12-12T13:31:29.502Z   [SP_HELP- 1 rows] Command processed2016-12-12T13:31:29.512Z   [SP_HELP- 5 rows] Result set fetched
```

#### See also 

[Milliseconds](milliseconds.md)  
[String](string.md)  
[Time](time.md)  
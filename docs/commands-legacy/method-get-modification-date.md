---
id: method-get-modification-date
title: METHOD GET MODIFICATION DATE
slug: /commands/method-get-modification-date
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET MODIFICATION DATE.Syntax-->**METHOD GET MODIFICATION DATE** ( *path* ; *modDate* ; *modTime* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET MODIFICATION DATE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | Text, Text array | &#8594;  | Text or Text array containing one or more method path(s) |
| modDate | Date, Date array | &#8592; | Method modification date(s) |
| modTime | Time, Array integer | &#8592; | Method modification time(s) |
| * | Operator | &#8594;  | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.METHOD GET MODIFICATION DATE.Summary-->The **METHOD GET MODIFICATION DATE** command returns, in the *modDate* and *modTime* parameters, the dates and times of the last modification of the method(s) designated by the *path* parameter.<!-- END REF-->

You can use two types of syntaxes, based either on arrays or variables:  

```4d
 var tVpath : Text // variables
 var vDate : Date
 var vTime : Time
 METHOD GET MODIFICATION DATE(tVpath;vDate;vTime) // date and time of a single method
```

```4d
 ARRAY TEXT(arrPaths;0) // arrays
 ARRAY DATE(arrDates;0)
 ARRAY LONGINT(arrTimes;0)
 METHOD GET MODIFICATION DATE(arrPaths;arrDates;arrTimes) // dates and times of several methods
```

You cannot mix the two syntaxes. 

If the command is executed from a component, it applies by default to the component methods. If you pass the *\** parameter, it accesses the methods of the host database.

#### Example 1 

You want to find out modification dates and times for several methods:

```4d
 ARRAY TEXT(arrPaths;0)
 APPEND TO ARRAY(arrPaths;"MyMethod1")
 APPEND TO ARRAY(arrPaths;"MyMethod2")
 ...
 ARRAY DATE(arrDates;0)
 ARRAY LONGINT(arrTimes;0)
 METHOD GET MODIFICATION DATE(arrPaths;arrDates;arrTimes)
```

#### Example 2 

You want to get modification dates for methods in a module that are prefixed with "Web\_". You cannot use the "@" symbol in a path; however, you can write:

```4d
 ARRAY TEXT($_webMethod;0)
 METHOD GET NAMES($_webMethod;"Web_@")
 ARRAY DATE($_date;0)
 ARRAY LONGINT($_time;0)
 METHOD GET MODIFICATION DATE($_webMethod;$_date;$_time)
```

  

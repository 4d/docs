---
id: current-date
title: Current date
slug: /commands/current-date
displayed_sidebar: docs
---

<!--REF #_command_.Current date.Syntax-->**Current date** {( * )} : Date<!-- END REF-->
<!--REF #_command_.Current date.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | Returns the current date from the server |
| Function result | Date | &#8592; | Current date |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current date.Summary-->The Current date command returns the current date as kept by the system clock.<!-- END REF-->If you use the asterisk (\*) parameter when executing this function on a 4D Client machine, it returns the current date from the server.

#### Example 1 

The following example displays an alert box containing the current date:

```4d
 ALERT("The date is "+String(Current date)+".")
```

#### Example 2 

If you write an application for the international market, you may need to know if the version of 4D that you run works with dates formatted as MM/DD/YYYY (US version) or DD/MM/YYYY (French version). This is useful to know for customizing data entry fields.

The following project method allows you to do so:

```4d
  // Sys date format global function
  // Sys date format -> String
  // Sys date format -> Default 4D data format
 
 C_STRING(31;$0;$vsDate;$vsMDY;$vsMonth;$vsDay;$vsYear)
 var $1;$vlPos : Integer
 var $vdDate : Date
 
  // Get a Date value where the month, day and year values are all different
 $vdDate:=Current date
 Repeat
    $vsMonth:=String(Month of($vdDate))
    $vsDay:=String(Day of($vdDate))
    $vsYear:=String(Year of($vdDate)%100)
    If(($vsMonth=$vsDay)|($vsMonth=$vsYear)|($vsDay=$vsYear))
       vOK:=0
       $vdDate:=$vdDate+1
    Else
       vOK:=1
    End if
 Until(vOK=1)
 $0:="" // Initialize function result
 $vsDate:=String($vdDate)
 $vlPos:=Position("/";$vsDate) // Find the first / separator in the string ../../..
 $vsMDY:=Substring($vsDate;1;$vlPos-1) // Extract the first digits from the date
 $vsDate:=Substring($vsDate;$vlPos+1) // Eliminate the first digits as well as the first / separator
 Case of
    :($vsMDY=$vsMonth) // The digits express the month
       $0:="MM"
    :($vsMDY=$vsDay) // The digits express the day
       $0:="DD"
    :($vsMDY=$vsYear) // The digits express the year
       $0:="YYYY"
 End case
 $0:=$0+"/" // Start building the function result
 $vlPos:=Position("/";$vsDate) // Find the second separator in the string ../..
 $vsMDY:=Substring($vsDate;1;$vlPos-1) // Extract the next digits from the date
 $vsDate:=Substring($vsDate;$vlPos+1) // Reduce the string to the last digits from the date
 Case of
    :($vsMDY=$vsMonth) // The digits express the month
       $0:=$0+"MM"
    :($vsMDY=$vsDay) // The digits express the day
       $0:=$0+"DD"
    :($vsMDY=$vsYear) // The digits express the year
       $0:=$0+"YYYY"
 End case
 $0:=$0+"/" // Pursue building the function result
 Case of
    :($vsDate=$vsMonth) // The digits express the month
       $0:=$0+"MM"
    :($vsDate=$vsDay) // The digits express the day
       $0:=$0+"DD"
    :($vsDate=$vsYear) // The digits express the year
       $0:=$0+"YYYY"
 End case
  // At this point $0 is equal to MM/DD/YYYY or DD/MM/YYYY or...
```

#### See also 

[Day of](day-of.md)  
[Month of](month-of.md)  
[Year of](year-of.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 33 |
| Thread safe | &check; |



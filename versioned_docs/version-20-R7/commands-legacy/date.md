---
id: date
title: Date
slug: /commands/date
displayed_sidebar: docs
---

<!--REF #_command_.Date.Syntax-->**Date** ( *expression* ) : Date<!-- END REF-->
<!--REF #_command_.Date.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| expression | Text, Date | &#8594;  | String representing the date to be returned or Date expression |
| Function result | Date | &#8592; | Date expression |

<!-- END REF-->

#### Description 

<!--REF #_command_.Date.Summary-->The Date command evaluates *expression* and returns a date.<!-- END REF-->

The *expression* parameter format must follow either the ISO date format or the regional settings defined at the system level.

**ISO date format**  
The string must be formatted as follows: "YYYY-MM-DD**T**HH:MM:SS", for example "2013-11-20T10:20:00". In this case, **Date** evaluates the *expression* parameter correctly, regardless of the current language settings. Decimal seconds, preceded by a period, are supported (e.g.: "2013-11-20T10:20:00.9854").   
If the *expression* format does not precisely fit this ISO format, the date is evaluated as a short date format based on the regional settings of the system.

**Regional settings**  
When the *expression* does not match the ISO format, the regional settings defined in the operating system for a short date are used for the evaluation. For example, in the US version of 4D, by default the date must be in the order MM/DD/YY (month, day, year). The month and day can be one or two digits. The year can be two or four digits. If the year is two digits, then Date considers whether the date belongs to the 21st or 20th century based on the value entered. By default, the pivotal value is 30:   

* If the value is greater than or equal to 30, 4D considers the century to be the 20th and adds 19 to the beginning of the value.
* If the value is less than 30, 4D considers the century to be the 21st and adds 20 to the beginning of the value.

This mechanism can be configured using the [SET DEFAULT CENTURY](set-default-century.md) command.   
The following characters are valid date separators: slash (/), space, period (.), comma (,), and dash (-).

* If you pass an invalid date (such as "13/35/94" or "aa/12/94") in *expression*, **Date** returns an empty date (00/00/00). It is your responsibility to verify that *expression* is a valid date.
* If the *expression* evaluates to undefined, **Date** returns an empty date (00/00/00). This is useful when you expect the result to be a date, even if it can be undefined (*e.g.* an object attribute).

**Note:** As of 4D v16 R6, dates can be stored in object attributes as date type values. In previous releases, they could only be stored as strings (for more information on this option, see the *Compatibility page* section, "Use date type instead of ISO date format in objects"). To know if an attribute contains a date stored as a string or as a date, you need to use the [Value type](value-type.md) command (see last example).

**Date type expression**  
If *expression* is of date type, **Date** returns the date passed in the parameter 'as is'. This is particularly useful in the context of generic programming using pointers or object attributes.

#### Example 1 

The following example uses a request box to prompt the user for a date. The string entered by the user is converted to a date and stored in the *reqDate* variable:

```4d
 vdRequestedDate:=Date(Request("Please enter the date:";String(Current date)))
 If(OK=1)
  // Do something with the date now stored in vdRequestedDate
 End if
```

#### Example 2 

The following examples show various cases:

```4d
 vdDate:=Date("12/25/94") //returns 12/25/94 on a US system
 vdDate2:=Date("40/40/94") //00/00/00
 vdDate3:=Date("It was the 6/30, we were in 2016") //06/30/16
 var $vobj : Object
 $vobj:=New object("expDate";"2020-11-17T00:00:00.0000")
 vdDate4:=Date($vobj.expDate) //11/17/20
 vdDate5:=Date($vobj.creationDate) //00/00/00
```

#### Example 3 

Date evaluation based on a date in ISO format:

```4d
 $vtDateISO:="2013-06-05T20:00:00"
 $vDate:=Date($vtDateISO)
  //$vDate represents June 5th, 2013 regardless of the system language
```

#### Example 4 

You want to get a date from an object attribute, whatever the current attribute date storage option:

```4d
 If(Value type($myObj.myDate)=Is date) //it's stored as date, no need to convert
    $vDate:=$myObj.myDate
 Else //it's stored as string
    $vDate:=Date($myObj.myDate)
 End if
```

#### See also 

[Bool](bool.md)  
[String](string.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 102 |
| Thread safe | &check; |
| Forbidden on the server ||



---
id: day-number
title: Day number
slug: /commands/day-number
displayed_sidebar: docs
---

<!--REF #_command_.Day number.Syntax-->**Day number** ( *aDate* ) : Integer<!-- END REF-->
<!--REF #_command_.Day number.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aDate | Date | &#8594;  | Date for which to return the number |
| Function result | Integer | &#8592; | Number representing the weekday on which date falls |

<!-- END REF-->

#### Description 

<!--REF #_command_.Day number.Summary-->The **Day number** command returns a number representing the weekday on which *aDate* falls.<!-- END REF-->  

**Note:** **Day number** returns *2* for null dates. 

4D provides the following predefined constants, found in the "*Days and Months*" theme:

| Constant  | Type    | Value |
| --------- | ------- | ----- |
| Sunday    | Integer | 1     |
| Monday    | Integer | 2     |
| Tuesday   | Integer | 3     |
| Wednesday | Integer | 4     |
| Thursday  | Integer | 5     |
| Friday    | Integer | 6     |
| Saturday  | Integer | 7     |

**Note:** **Day number** returns a value between 1 and 7\. To get the day number within the month for a date, use the command [Day of](day-of.md).

#### Example 

The following example is a function that returns the current day as a string:

```4d
 $viDay :=Day number(Current date) // $viDay gets the current day number
 Case of
    :($viDay =1)
       $0:="Sunday"
    :($viDay =2)
       $0:="Monday"
    :($viDay =3)
       $0:="Tuesday"
    :($viDay =4)
       $0:="Wednesday"
    :($viDay =5)
       $0:="Thursday"
    :($viDay =6)
       $0:="Friday"
    :($viDay =7)
       $0:="Saturday"
 End case
```

#### See also 

[Day of](day-of.md)  
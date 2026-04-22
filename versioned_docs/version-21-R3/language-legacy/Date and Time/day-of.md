---
id: day-of
title: Day of
slug: /commands/day-of
displayed_sidebar: docs
---

<!--REF #_command_.Day of.Syntax-->**Day of** ( *date* : Date ) : Integer<!-- END REF-->
<!--REF #_command_.Day of.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| date | Date | &#8594;  | Date for which to return the day |
| Function result | Integer | &#8592; | Day of the month of date |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.Day of.Summary-->The **Day of** command returns the day of the month of *aDate*.<!-- END REF-->**Day of** returns a value between 1 and 31\. To get the day of the week for a date, use the command [Day number](../commands/day-number).

## Example 1 

The following example illustrates the use of Day of. The results are assigned to the variable *vResult*. The comments describe what is put in *vResult*:

```4d
 vResult:=Day of(!12/25/92!) // vResult gets 25
 vResult:=Day of(Current date) // vResult gets day of current date
```

## Example 2 

See the example for the [Current date](../commands/current-date) command.

## See also 

[Day number](../commands/day-number)  
[Month of](../commands/month-of)  
[Year of](../commands/year-of)  

## Properties

|  |  |
| --- | --- |
| Command number | 23 |
| Thread safe | yes |



---
id: add-to-date
title: Add to date
slug: /commands/add-to-date
displayed_sidebar: docs
---

<!--REF #_command_.Add to date.Syntax-->**Add to date** ( *date* ; *years* ; *months* ; *days* ) -> Function result<!-- END REF-->
<!--REF #_command_.Add to date.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| date | Date | &#x1F852; | Date to which to add days, months, and years |
| years | Integer | &#x1F852; | Number of years to add to the date |
| months | Integer | &#x1F852; | Number of months to add to the date |
| days | Integer | &#x1F852; | Number of days to add to the date |
| Function result | Date | &#x1F850; | Resulting date |

<!-- END REF-->

#### Description 

<!--REF #_command_.Add to date.Summary-->The **Add to date** command adds *years*, *months,* and *days* to the date you pass in *aDate*, then returns the result.<!-- END REF-->

Although you can use the [Self](self.md) to add days to a date, **Add to date** allows you to quickly add months and years without having to deal with the number of days per month or leap years (as you would when using the + date operator).

#### Example 

```4d
  // This line calculates the date in one year, same day
 $vdInOneYear:=Add to date(Current date;1;0;0)
 
  // This line calculates the date next month, same day
 $vdNextMonth:=Add to date(Current date;0;1;0)
 
  // This line does the same thing as $vdTomorrow:=Current date+1
 $vdTomorrow:=Add to date(Current date;0;0;1)
```

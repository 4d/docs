---
id: month-of
title: Month of
slug: /commands/month-of
displayed_sidebar: docs
---

<!--REF #_command_.Month of.Syntax-->**Month of** ( *aDate* ) : Integer<!-- END REF-->
<!--REF #_command_.Month of.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aDate | Date | &#8594;  | Date for which to return the month |
| Function result | Integer | &#8592; | Number indicating the month of date |

<!-- END REF-->

#### Description 

<!--REF #_command_.Month of.Summary-->The **Month of** command returns the month of *aDate*.<!-- END REF-->**Month of** returns the number of the month, not the name (see Example 1).

To compare the value returned by this function, 4D provides the following predefined constants, found in the "*Days and Months*" theme:

| Constant  | Type    | Value |
| --------- | ------- | ----- |
| January   | Integer | 1     |
| February  | Integer | 2     |
| March     | Integer | 3     |
| April     | Integer | 4     |
| May       | Integer | 5     |
| June      | Integer | 6     |
| July      | Integer | 7     |
| August    | Integer | 8     |
| September | Integer | 9     |
| October   | Integer | 10    |
| November  | Integer | 11    |
| December  | Integer | 12    |

  
#### Example 1 

The following example illustrates the use of **Month of**. The results are assigned to the variable *vResult*. The comments describe what is put in *vResult*:

```4d
 vResult:=Month of(!12/25/92!) // vResult gets 12
 vResult:=Month of(Current date) // vResult gets month of current date
```

#### Example 2 

See example for the [Current date](current-date.md) command.

#### See also 

[Day of](day-of.md)  
[Year of](year-of.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 24 |
| Thread safe | &check; |



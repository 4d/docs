---
id: month-of
title: Month of
slug: /commands/month-of
displayed_sidebar: docs
---

<!--REF #_command_.Month of.Syntax-->**Month of** ( *aDate* ) -> Function result<!-- END REF-->
<!--REF #_command_.Month of.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aDate | Date | &#8594;  | Date for which to return the month |
| Function result | Longint | &#8592; | Number indicating the month of date |

<!-- END REF-->

#### Description 

<!--REF #_command_.Month of.Summary-->The **Month of** command returns the month of *aDate*.<!-- END REF-->

**Note:** **Month of** returns the number of the month, not the name (see Example 1).

To compare the value returned by this function, 4D provides the following predefined constants, found in the "*Days and Months*" theme:

| Constant  | Type    | Value |
| --------- | ------- | ----- |
| January   | Longint | 1     |
| February  | Longint | 2     |
| March     | Longint | 3     |
| April     | Longint | 4     |
| May       | Longint | 5     |
| June      | Longint | 6     |
| July      | Longint | 7     |
| August    | Longint | 8     |
| September | Longint | 9     |
| October   | Longint | 10    |
| November  | Longint | 11    |
| December  | Longint | 12    |

  
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
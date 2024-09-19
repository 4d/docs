---
id: year-of
title: Year of
slug: /commands-legacy/year-of
displayed_sidebar: docs
---

<!--REF #_command_.Year of.Syntax-->**Year of** ( *date* ) -> Function result<!-- END REF-->
<!--REF #_command_.Year of.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| date | Date | &#x1F852; | Date for which to return the year |
| Function result | Longint | &#x1F850; | Number indicating the year of date |

<!-- END REF-->

#### Description 

<!--REF #_command_.Year of.Summary-->The Year of command returns the year of *aDate*.<!-- END REF-->

#### Example 1 

The following example illustrates the use of **Year of**. The results are assigned to the variable *vResult*.

```4d
 vResult:=Year of(!12/25/92!) // vResult gets 1992
 vResult:=Year of(!12/25/1992!) // vResult gets 1992
 vResult:=Year of(!12/25/1892!) // vResult gets 1892
 vResult:=Year of(!12/25/2092!) // vResult gets 2092
 vResult:=Year of(Current date) // vResult gets year of current date
```

#### Example 2 

See example for the command [Current date](current-date.md).

#### See also 

[Day of](day-of.md)  
[Month of](month-of.md)  
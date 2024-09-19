---
id: get-table-fragmentation
title: Get table fragmentation
slug: /commands-legacy/get-table-fragmentation
displayed_sidebar: docs
---

<!--REF #_command_.Get table fragmentation.Syntax-->**Get table fragmentation** ( *aTable* ) -> Function result<!-- END REF-->
<!--REF #_command_.Get table fragmentation.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#x1F852; | Table for which to get the fragmentation rate |
| Function result | Real | &#x1F850; | Percentage of fragmentation |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get table fragmentation.Summary-->The Get table fragmentation command returns the percentage of logical fragmentation for the records of the table designated by the *aTable* parameter.<!-- END REF--> 

The rate of logical fragmentation of the records indicates whether the records are stored in an ordered manner in the data file. If the fragmentation becomes too high, this can considerably slow down sorts and sequential searches on the table. A fragmentation percentage of 0 corresponds to no fragmentation. Beyond a rate of 20%, it may be useful to compact the data file. 

#### Example 

This maintenance method lets you request the compacting of the data file in the case where there is considerable fragmentation in at least one table of the database:

```4d
 ToBeCompacted:=False
 For($i ;1;Get last table number)
    If(Is table number valid($i))
       If(Get table fragmentation(Table($i)->)>20)
          ToBeCompacted:=True
       End if
    End if
 End for
 If(ToBeCompacted)
  // Places a marker requesting compacting
 End if
```

#### See also 

[Compact data file](compact-data-file.md)  
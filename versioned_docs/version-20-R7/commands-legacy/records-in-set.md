---
id: records-in-set
title: Records in set
slug: /commands/records-in-set
displayed_sidebar: docs
---

<!--REF #_command_.Records in set.Syntax-->**Records in set** ( *set* ) : Integer<!-- END REF-->
<!--REF #_command_.Records in set.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| set | Text | &#8594;  | Name of the set to test |
| Function result | Integer | &#8592; | Number of records in set |

<!-- END REF-->

#### Description 

<!--REF #_command_.Records in set.Summary-->Records in set returns the number of records in *set*.<!-- END REF--> If *set* does not exist, or if there are no records in *set*, the command returns 0.

#### Example 

The following example displays an alert telling what percentage of the customers are rated as the best:

```4d
  // First calculate the percentage
 $Percent :=(Records in set("Best")/Records in table([Customers]))*100
  // Display an alert with the percentage
 ALERT(String($Percent;"##0%")+" of our customers are the best.")
```

#### See also 

[Records in selection](records-in-selection.md)  
[Records in table](records-in-table.md)  
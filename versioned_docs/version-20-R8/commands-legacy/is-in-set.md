---
id: is-in-set
title: Is in set
slug: /commands/is-in-set
displayed_sidebar: docs
---

<!--REF #_command_.Is in set.Syntax-->**Is in set** ( *set* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is in set.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| set | Text | &#8594;  | Name of the set to test |
| Function result | Boolean | &#8592; | Current record of set's table is in set (True) or Current record of set's table is not in set (False) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is in set.Summary-->Is in set tests whether or not the current record for the table is in *set*.<!-- END REF--> The Is in set function returns TRUE if the current record of the table is in *set*, and returns FALSE if the current record of the table is not in *set*.

#### Example 

The following example is a button object method. It tests to see whether or not the currently displayed record is in the set of best customers:

```4d
 If(Is in set("Best")) // Check if it is a good customer
    ALERT("They are one of our best customers.")
 Else
    ALERT("They are not one of our best customers.")
 End if
```

#### See also 

[ADD TO SET](add-to-set.md)  
[REMOVE FROM SET](remove-from-set.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 273 |
| Thread safe | &check; |



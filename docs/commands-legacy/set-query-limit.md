---
id: set-query-limit
title: SET QUERY LIMIT
slug: /commands/set-query-limit
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY LIMIT.Syntax-->**SET QUERY LIMIT** ( *limit* )<!-- END REF-->
<!--REF #_command_.SET QUERY LIMIT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| limit | Integer | &#8594;  | Number of records, or 0 for no limit |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET QUERY LIMIT.Summary-->**SET QUERY LIMIT** allows you to tell 4D to stop any subsequent query for the current process as soon as at least the number of records you pass in *limit* has been found.<!-- END REF--> 

For example, if you pass *limit* equal to 1, any subsequent query will stop browsing an index or the data file as soon as one record that matches the query conditions has been found.

To restore queries with no limit, call **SET QUERY LIMIT** again with *limit* equal to 0.

**Warning:** **SET QUERY LIMIT** affects all the subsequent queries made within the current process. REMEMBER to always counterbalance a call to **SET QUERY LIMIT**(limit) (where *limit>0*) with a call to **SET QUERY LIMIT**(0) in order to restore queries with no limit.

**SET QUERY LIMIT** changes the behavior of the query commands:

* [QUERY](query.md)
* [QUERY SELECTION](query-selection.md)
* [QUERY BY EXAMPLE](query-by-example.md)
* [QUERY BY FORMULA](query-by-formula.md)
* [QUERY BY SQL](query-by-sql.md)
* [QUERY SELECTION BY FORMULA](query-selection-by-formula.md)
* [QUERY SELECTION WITH ARRAY](query-selection-with-array.md)
* [QUERY WITH ARRAY](query-with-array.md)
* [QUERY BY ATTRIBUTE](query-by-attribute.md)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)

On the other hand, **SET QUERY LIMIT** does not affect the other commands that may change the current selection of a table, such as [ALL RECORDS](all-records.md), [RELATE MANY](relate-many.md), and so on.

#### Example 1 

To perform a query corresponding to the request “...give me any ten customers whose gross sales are greater than $1 M...”, you would write:

```4d
 SET QUERY LIMIT(10)
 QUERY([Customers];[Customers]Gross sales>1000000)
 SET QUERY LIMIT(0)
```

#### Example 2 

See the second example for the [SET QUERY DESTINATION](set-query-destination.md) command.

#### See also 

[Get query limit](get-query-limit.md)  
[QUERY](query.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[QUERY WITH ARRAY](query-with-array.md)  
[SET QUERY DESTINATION](set-query-destination.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 395 |
| Thread safe | &check; |



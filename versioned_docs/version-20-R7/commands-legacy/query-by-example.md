---
id: query-by-example
title: QUERY BY EXAMPLE
slug: /commands/query-by-example
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY EXAMPLE.Syntax-->**QUERY BY EXAMPLE** ( {*aTable*}{;}{*} )<!-- END REF-->
<!--REF #_command_.QUERY BY EXAMPLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to return a selection of records, or Default table, if omitted |
| * | Operator | &#8594;  | If passed, the scrolling bar will not be displayed |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY BY EXAMPLE.Summary-->**QUERY BY EXAMPLE** performs the same action as the Query by Example menu command in the Design environment.<!-- END REF--> It displays the current input form as a query window. **QUERY BY EXAMPLE** queries *aTable* for the data that the user enters into the query window. The form must contain the fields that you want the user to be able to query. The query is optimized; indexed fields are automatically used to optimize the query.

See the 4D Design Reference manual for information about using the Query by Example menu command in the Design environment.

#### Example 

The method in this example displays the MyQuery form to the user. If the user accepts the form and performs the query (that is, if the OK system variable is set to 1), the records that meet the query criteria are displayed:

```4d
 FORM SET INPUT([People];"MyQuery") // Switch to query form
 QUERY BY EXAMPLE([People]) // Display form and perform query
 If(OK=1) // If the user performed the query
    DISPLAY SELECTION([People]) // Display the records
 End if
```

#### System variables and sets 

If the user clicks the Accept button or presses the Enter key, the OK system variable is set to 1 and the query is performed. If the user clicks the Cancel button or presses the “cancel” key combination, the OK system variable is set to 0 and the query is canceled.

#### See also 

[ORDER BY](order-by.md)  
[QUERY](query.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 292 |
| Thread safe | &check; |
| Modifies variables | OK |
| Changes current record ||
| Changes current selection ||
| Forbidden on the server ||



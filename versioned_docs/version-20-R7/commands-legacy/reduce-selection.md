---
id: reduce-selection
title: REDUCE SELECTION
slug: /commands/reduce-selection
displayed_sidebar: docs
---

<!--REF #_command_.REDUCE SELECTION.Syntax-->**REDUCE SELECTION** ( {*aTable* ;} *number* )<!-- END REF-->
<!--REF #_command_.REDUCE SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to reduce the selection, or Default table, if omitted |
| number | Integer | &#8594;  | Number of records to keep selected |

<!-- END REF-->

#### Description 

<!--REF #_command_.REDUCE SELECTION.Summary-->**REDUCE SELECTION** creates a new selection of records for *aTable*.<!-- END REF--> The command reduces the current selection of *aTable* to the first *number* records. **REDUCE SELECTION** is applied to the current selection of *aTable* in the current process. It changes the current selection of *aTable* for the current process; the first record of the new selection is the current record.

**Note:** If the statement **REDUCE SELECTION**(aTable;0) is executed, there is no longer any selection nor any current records in the table. 

#### Example 

The following example first finds the correct statistics for a worldwide contest among the dealers in over 20 countries. For each country, the 3 best dealers who have sold product worth more than $50,000 and who are among the 100 best dealers in the world are awarded a prize. With a few lines of code, this complex request can be executed by using indexed searches:

```4d
 CREATE EMPTY SET([Dealers];"Winners") // Create an empty set
 SCAN INDEX([Dealers]Sales amount;100;<) // Scan from the end of the index
 CREATE SET([Dealers];"100 best Dealers") // Put the selected records in a set
 For($Country;1;Records in table([Countries])) // For each Country
  // Search for the dealers in this country
    QUERY([Dealers];[Dealers]Country=[Countries]Name;*) // ...who sold for more than $50,000
    QUERY([Dealers];&;[Dealers]Sales amount>=50000)
    CREATE SET([Dealers];"WinnerDealers") // Put them in a set
  // They should be in the group of 100 best dealers
    INTERSECTION("WinnerDealers";"100 best Dealers";"WinnerDealers")
    USE SET("WinnerDealers") // Potential winners for the country
  // Sort them by the results in descending order
    ORDER BY([Dealers];[Dealers]Sales amount;<)
    REDUCE SELECTION([Dealers];3) // Take the 3 best Dealers
    CREATE SET([Dealers];"WinnerDealers") // The winners for the country
  // Put them in the worldwide winners list
    UNION("WinnerDealers";"TheWinners";"TheWinners")
 End for
 CLEAR SET("100 best Dealers") // Don't need this set anymore
 CLEAR SET("WinnerDealers") // Don't need this set anymore
 USE SET("The Winners") // Here you have the Winners
 CLEAR SET("The Winners") // Don't need this set anymore
 OUTPUT FORM([Dealers];"Prize letter") // Select the letter
 PRINT SELECTION([Dealers]) // Print the letters
```

#### See also 

[ORDER BY](order-by.md)  
[QUERY](query.md)  
[SCAN INDEX](scan-index.md)  
*Sets*  

#### Properties
|  |  |
| --- | --- |
| Command number | 351 |
| Thread safe | &check; |
| Changes current record ||
| Changes current selection ||
| Forbidden on the server ||



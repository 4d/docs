---
id: load-set
title: LOAD SET
slug: /commands/load-set
displayed_sidebar: docs
---

<!--REF #_command_.LOAD SET.Syntax-->**LOAD SET** ( {*aTable* ;} *set* ; *document* )<!-- END REF-->
<!--REF #_command_.LOAD SET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table to which the set belongs, or Default table, if omitted |
| set | Text | &#8594;  | Name of the set to be created in memory |
| document | Text | &#8594;  | Document holding the set |

<!-- END REF-->

#### Description 

<!--REF #_command_.LOAD SET.Summary-->**LOAD SET** loads a set from *document* that was saved with the [SAVE SET](save-set.md) command.<!-- END REF-->

The set that is stored in *document* must be from *aTable*. The set created in memory is overwritten if it already exists.

The *document* parameter is the name of the disk document containing the set. The document need not have the same name as the set. If you supply an empty string for *document*, an Open File dialog box appears so that the user can choose the set to load.

Remember that a set is a representation of a selection of records at the moment that the set is created. If the records represented by the set change, the set may no longer be accurate. Therefore, a set loaded from disk should represent a group of records that does not change frequently. A number of things can make a set invalid: modifying a record of the set, deleting a record of the set, or changing the criteria that determined a set.

#### Example 

The following example uses LOAD SET to load a set of the Acme locations in New York:

```4d
 LOAD SET([Companies];"NY Acme";"NYAcmeSt") // Load the set into memory
 USE SET("NY Acme") // Change current selection to NY Acme
 CLEAR SET("NY Acme") // Clear the set from memory
```

#### System variables and sets 

If the user clicks Cancel in the Open File dialog box, or there is an error during the load operation, the OK system variable is set to 0\. Otherwise, it is set to 1.

#### See also 

[SAVE SET](save-set.md)  
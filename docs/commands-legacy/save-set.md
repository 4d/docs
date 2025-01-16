---
id: save-set
title: SAVE SET
slug: /commands/save-set
displayed_sidebar: docs
---

<!--REF #_command_.SAVE SET.Syntax-->**SAVE SET** ( *set* ; *document* )<!-- END REF-->
<!--REF #_command_.SAVE SET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| set | Text | &#8594;  | Name of the set to save |
| document | Text | &#8594;  | Name of the disk file to which to save the set |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAVE SET.Summary-->**SAVE SET** saves *set* to *document*, a document on disk.<!-- END REF-->

The *document* does not need to have the same name as the set. If you supply an empty string for *document*, a Create File dialog box appears so that the user can enter the name of the document. You can load a saved set with the [LOAD SET](load-set.md) command.

If the user clicks Cancel in the Save File dialog box, or if there is an error during the save operation, the OK system variable is set to 0\. Otherwise, it is set to 1.

**SAVE SET** is often used to save to disk the results of a time-consuming search.

**WARNING:** Remember that a set is a representation of a selection of records at the moment that the set is created. If the records represented by the set change, the set may no longer be accurate. Therefore, a set saved to disk should represent a group of records that does not change frequently. A number of things can make a set invalid: modifying a record of the set, deleting a record of the set, or changing the criteria that determined the set. Also remember that sets do not save field values.

#### Example 

The following example displays the Save File dialog box, which the user can enter the name of the document that contains the set:

```4d
 SAVE SET("SomeSet";"")
```

#### System variables and sets 

If the user clicks Cancel in the Save File dialog box, or if there is an error during the load operation, the OK system variable is set to 0\. Otherwise, it is set to 1.

#### See also 

[LOAD SET](load-set.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 184 |
| Thread safe | &check; |
| Modifies variables | OK |



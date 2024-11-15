---
id: read-only-state
title: Read only state
slug: /commands/read-only-state
displayed_sidebar: docs
---

<!--REF #_command_.Read only state.Syntax-->**Read only state** {( *aTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.Read only state.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to test read-only state, or Default table, if omitted |
| Function result | Boolean | &#8592; | Access to table is read-only (TRUE), or Access to table is read-write (FALSE) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Read only state.Summary-->This function tests whether or not the state of *aTable* is read-only for the process in which it is called.<!-- END REF--> Read only state returns TRUE if the state of *aTable* is read-only. Read only state returns FALSE if the state of *aTable* is read/ write.

#### Example 

The following example tests the state of an \[Invoice\] table. If the state of the \[Invoice\] table is read-only, it is set to read/write, and then the current record is reloaded.

```4d
 If(Read only state([Invoice]))
    READ WRITE([Invoice])
    LOAD RECORD([Invoice])
 End if
```

**Note:** The invoice record is reloaded to allow the user to modify it. A record that was previously loaded in a read-only state will remain locked until it is reloaded in a read/write state.

#### See also 

[READ ONLY](read-only.md)  
[READ WRITE](read-write.md)  
*Record Locking*  
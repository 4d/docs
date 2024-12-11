---
id: duplicate-record
title: DUPLICATE RECORD
slug: /commands/duplicate-record
displayed_sidebar: docs
---

<!--REF #_command_.DUPLICATE RECORD.Syntax-->**DUPLICATE RECORD** {( *aTable* )}<!-- END REF-->
<!--REF #_command_.DUPLICATE RECORD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to duplicate the current record, or Default table, if omitted |

<!-- END REF-->

#### Description 

<!--REF #_command_.DUPLICATE RECORD.Summary-->**DUPLICATE RECORD** creates a new record for *aTable* that is a duplicate of the current record.<!-- END REF--> The new record becomes the current record. If there is no current record, then **DUPLICATE RECORD** does nothing. You must use [SAVE RECORD](save-record.md) to save the new record.

**DUPLICATE RECORD** can be executed during data entry. This allows you to create a clone of the currently displayed record. Remember that you must first execute [SAVE RECORD](save-record.md) in order to save any changes made to the original record. 

**Compatibility note:** Beginning with version 11 of 4D, this command no longer supports subtables.

#### See also 

[SAVE RECORD](save-record.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 225 |
| Thread safe | &check; |
| Changes current record ||
| Forbidden on the server ||



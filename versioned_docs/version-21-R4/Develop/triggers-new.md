---
id: triggers-new
title: Triggers
---

to import

<!-- REF triggers.vs-events.Desc -->

## Triggers vs ORDA entity events

**Triggers** (aka database events) and [**ORDA entity events**](../ORDA/orda-events.md) have similar purposes: they establish rules to control fundamental operations on the data (create, edit, or delete). However, they do not operate at the same level:
- triggers are handled at the database level, which is the lowest level,
- ORDA entity events are handled at the [datastore](../ORDA/dsMapping.md#datastore) level, which is related to your business logic.

Actions on data executed through the datastore, such as [`.save()`](../API/EntityClass.md#save) or [`.drop`](../API/EntityClass.md#drop), will call the triggers, if any.

On the other hand, actions triggered at the 4D database level using the 4D classic language commands, such as [`SAVE RECORD`](../commands/save-record) or [standard actions](/Desktop/standard-actions) will NOT trigger ORDA entity events. 

<!-- END REF -->


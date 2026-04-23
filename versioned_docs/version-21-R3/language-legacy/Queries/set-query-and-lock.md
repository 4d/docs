---
id: set-query-and-lock
title: SET QUERY AND LOCK
slug: /commands/set-query-and-lock
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY AND LOCK.Syntax-->**SET QUERY AND LOCK** ( *lock* : Boolean )<!-- END REF-->
<!--REF #_command_.SET QUERY AND LOCK.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| lock | Boolean | &#8594;  | True = Lock the records found by queries False = Do not lock records |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Created|

</details>
</div>

## Description 

<!--REF #_command_.SET QUERY AND LOCK.Summary-->The **SET QUERY AND LOCK** command can be used to request the automatic locking of records found by all queries that follow the calling of this command in the current transaction.<!-- END REF--> This means that the records cannot be modified by a process other than the current process between a query and the handling of results.

By default, the records found by queries are not locked. Pass **True** in the *lock* parameter to activate locking.

It is imperative for this command to be used within a transaction. If it is called outside of this context, an error is generated. This allows for better control of record locking. The records found will stay locked as long as the transaction has not been terminated (whether validated or cancelled). After the transaction is completed, all the records are unlocked, except the current record. 

The records are locked for all the tables in the current transaction.

When a **SET QUERY AND LOCK**(True) statement has been executed, the query commands (for example [QUERY](../commands/query)) adopt a specific functioning if a record that is already locked is found:

> * The query is stopped and the system variable OK is set to 0,
> * The current selection is cleared,
> * The *LockedSet* system set contains the locked record that caused the query to be stopped.

Consequently, in this context it is necessary to test the *LockedSet* set after a fruitless query (current selection empty and/or OK variable set to 0) in order to determine the cause of the failure.

Call **SET QUERY AND LOCK**(False) in order to disable this mechanism afterward.

**SET QUERY AND LOCK** only modifies the behavior for query commands, in other words:

* [QUERY](../commands/query)
* [QUERY SELECTION](../commands/query-selection)
* [QUERY BY EXAMPLE](../commands/query-by-example)
* [QUERY BY FORMULA](../commands/query-by-formula)
* [QUERY BY SQL](../commands/query-by-sql)
* [QUERY SELECTION BY FORMULA](../commands/query-selection-by-formula)
* [QUERY SELECTION WITH ARRAY](../commands/query-selection-with-array)
* [QUERY WITH ARRAY](../commands/query-with-array)
* [QUERY BY ATTRIBUTE](../commands/query-by-attribute)
* [QUERY SELECTION BY ATTRIBUTE](../commands/query-selection-by-attribute)

However, SET QUERY AND LOCK does not affect other commands that modify the current selection such as [ALL RECORDS](../commands/all-records), [RELATE MANY](../commands/relate-many), etc.

## Example 

In this example, it is not possible to delete a client who would have been passed from category “C” to category “A” in another process between the [QUERY](../commands/query) and [DELETE SELECTION](../commands/delete-selection) commands:

```4d
 START TRANSACTION
 SET QUERY AND LOCK(True)
 QUERY([Customers];[Customers]Category=“C”)
  //At this moment, the records found are automatically locked for all other processes
 DELETE SELECTION([Customers])
 SET QUERY AND LOCK(False)
 VALIDATE TRANSACTION
```

## Error management 

If the command is not called in the context of a transaction, an error is generated. 

## See also 

[QUERY](../commands/query)  

## Properties

|  |  |
| --- | --- |
| Command number | 661 |
| Thread safe | yes |
| Modifies variables | error |



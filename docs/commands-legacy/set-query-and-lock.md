---
id: set-query-and-lock
title: SET QUERY AND LOCK
slug: /commands/set-query-and-lock
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY AND LOCK.Syntax-->**SET QUERY AND LOCK** ( *lock* )<!-- END REF-->
<!--REF #_command_.SET QUERY AND LOCK.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| lock | Boolean | &#8594;  | True = Lock the records found by queries False = Do not lock records |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET QUERY AND LOCK.Summary-->The **SET QUERY AND LOCK** command can be used to request the automatic locking of records found by all queries that follow the calling of this command in the current transaction.<!-- END REF--> This means that the records cannot be modified by a process other than the current process between a query and the handling of results.

By default, the records found by queries are not locked. Pass **True** in the *lock* parameter to activate locking.

It is imperative for this command to be used within a transaction. If it is called outside of this context, an error is generated. This allows for better control of record locking. The records found will stay locked as long as the transaction has not been terminated (whether validated or cancelled). After the transaction is completed, all the records are unlocked, except the current record. 

The records are locked for all the tables in the current transaction.

When a **SET QUERY AND LOCK**(True) statement has been executed, the query commands (for example [QUERY](query.md)) adopt a specific functioning if a record that is already locked is found:

> * The query is stopped and the system variable OK is set to 0,
> * The current selection is cleared,
> * The *LockedSet* system set contains the locked record that caused the query to be stopped.

Consequently, in this context it is necessary to test the *LockedSet* set after a fruitless query (current selection empty and/or OK variable set to 0) in order to determine the cause of the failure.

Call **SET QUERY AND LOCK**(False) in order to disable this mechanism afterward.

**SET QUERY AND LOCK** only modifies the behavior for query commands, in other words:

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

However, SET QUERY AND LOCK does not affect other commands that modify the current selection such as [ALL RECORDS](all-records.md), [RELATE MANY](relate-many.md), etc.

#### Example 

In this example, it is not possible to delete a client who would have been passed from category “C” to category “A” in another process between the [QUERY](query.md) and [DELETE SELECTION](delete-selection.md) commands:

```4d
 START TRANSACTION
 SET QUERY AND LOCK(True)
 QUERY([Customers];[Customers]Category=“C”)
  //At this moment, the records found are automatically locked for all other processes
 DELETE SELECTION([Customers])
 SET QUERY AND LOCK(False)
 VALIDATE TRANSACTION
```

#### Error management 

If the command is not called in the context of a transaction, an error is generated. 

#### See also 

[QUERY](query.md)  
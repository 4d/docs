---
id: records
title: Records
slug: /Develop/records
displayed_sidebar: docs
---


## Record numbers

There are three numbers associated with a record:

- Record number
- Selected record number
- Sequence number

### Record Number  

The record number is the absolute/physical record number for a record. A record number is automatically assigned to each new record and remains constant for the record until the record is deleted. Record numbers start at zero. They are not unique because record numbers of deleted records are reused for new records. They also change when the database is [compacted](../MSC/compact.md) or [repaired](../MSC/repair.md).

### Selected Record Number  

The selected record number is the position of the record in the current selection, and so depends on the current selection. If the selection is changed or sorted, the selected record number will probably change. Numbering for the selected record number starts at one (1).

### Sequence Number 

The sequence number is a unique non-repeating number that may be assigned to a field of a record (via the Autoincrement property, the SQL AUTO_INCREMENT attribute or the [`Sequence number`](../commands/sequence-number) command). It is not automatically stored with each record. It starts by default at 1 and is incremented for each new record that is created. Unlike record numbers, a sequence number is not reused when a record is deleted or when a database is compacted or repaired. Sequence numbers provide a way to have unique ID numbers for records. If a sequence number is incremented during a transaction, the number is not decremented if the transaction is canceled.

:::note Notes

- 4D does not carry out any check when you modify the automatic number internal counter of a table using the [`SET DATABASE PARAMETER`](../commands/set-database-parameter) command. If you decrement this counter, the new records created may have numbers that have already been assigned.
- Sequence numbers are not recommended to fill unique ID primary key fields for records. To create unique record IDs, it is strongly recommended to use UUIDs. 

::: 

### Example

The following tables illustrate the numbers that are associated with records. Each line in the table represents information about a record. The order of the lines is the order in which records would be displayed in an output form.

- **Data**: The data from a field in each record. For our example, it contains a person’s name.
- **Record Number**: The record’s absolute record number. This is the number returned by the [`Record number`](../commands/record-number) command.
- **Selected Record Number**: The record’s position in the current selection. This is the number returned by the [`Selected record number`](../commands/selected-record-number) command.
- **Sequence Number**: The record’s unique sequence number. This is the number returned by the [`Sequence number`](../commands/sequence-number) command when the record was created. This number is stored in a field.

#### After the Records Are Entered 

The first table shows the records after they are entered.

- The default order for the records is by record number.
- The record number starts at 0.
- The selected record number and the sequence number start at 1.

|Data|Record Number|Selected Record Number|Sequence Number|
|---|---|---|----|
|Tess	|0|	1|	1|
|Terri|	1	|2	|2|
|Sabra|	2|3|	3|
|Sam|	3	|4	|4|
|Lisa|	4|	5	|5|

Note: The records remain in the default order after a command changes the current selection without reordering it; for example, after the **Show All** menu command is chosen in the Design environment, or after the [`ALL RECORDS`](../commands/all-records) command is executed.

#### After the Records Are Sorted  

The next table shows the same records sorted by name.

- The same record number remains associated with each record.
- The selected record numbers reflect the new position of the records in the sorted selection.
- The sequence numbers never change, since they were assigned when each record was created and are stored in the record.

|Data|Record Number|Selected Record Number|Sequence Number|
|---|---|---|----|
|Lisa|	4|	1	|5|
|Sabra|	2|2|	3|
|Sam|	3	|3	|4|
|Terri|	1	|4	|2|
|Tess	|0|	5|	1|


#### After a Record Is Deleted  

The following table shows the records after Sam is deleted.

- Only the selected record numbers have changed. Selected record numbers reflect the order in which the records are displayed.

|Data|Record Number|Selected Record Number|Sequence Number|
|---|---|---|----|
|Lisa|	4|	1	|5|
|Sabra|	2|2|	3|
|Terri|	1	|3	|2|
|Tess	|0|	4|	1|


#### After a Record Is Added  

The next table shows the records after a new record has been added for Liz.

- A new record is added to the end of the current selection.
- Sam’s record number is reused for the new record.
- The sequence number continues to increment.

|Data|Record Number|Selected Record Number|Sequence Number|
|---|---|---|----|
|Tess	|0|	1|	1|
|Terri|	1	|2	|2|
|Sabra|	2|3|	3|
|Lisa|	4|	4	|5|
|Liz	|3|	5|	6|

#### After the Selection is Changed and Sorted  

The following table shows the records after the selection was reduced to three records and then sorted.

- Only the selected record number associated with each record changes.

|Data|Record Number|Selected Record Number|Sequence Number|
|---|---|---|----|
|Sabra|	2|1|	3|
|Liz	|3|	2|	6|
|Terri|	1	|3	|2|

## Record Stack

The [`PUSH RECORD`](../commands/push-record) and [`POP RECORD`](../commands/pop-record) commands allow you to put (“push”) records onto the record stack, and to remove (“pop”) them from the stack.

Each process has its own record stack for each table. 4D maintains the record stacks for you. Each record stack is a last-in-first-out (LIFO) stack. Stack capacity is limited by memory.

[`PUSH RECORD`](../commands/push-record) and [`POP RECORD`](../commands/pop-record) should be used with discretion. Each record that is pushed uses part of free memory. Pushing too many records can cause an out-of-memory or stack full condition.

4D clears the stack of any unpopped records when you return to the menu at the end of execution of your method.

[`PUSH RECORD`](../commands/push-record) and [`POP RECORD`](../commands/pop-record) are useful when you want to examine records in the same file during data entry. To do this, you push the record, search and examine records in the file (copy fields into variables, for example), and finally pop the record to restore the record.

While entering a record, if you have to check a multiple field unique value, use the [`SET QUERY DESTINATION`](../commands/set-quer-destination) command. This will save you the calls to [`PUSH RECORD`](../commands/push-record) and [`POP RECORD`](../commands/pop-record) that you were making before and after the call to QUERY in order to preserve the data entered in the current record. [`SET QUERY DESTINATION`](../commands/set-quer-destination) allows you to make a query that does not change the selection nor the current record.

## Record locking

4D and 4D Server automatically manage databases by preventing multi-user or multi-process conflicts. Two users or two processes cannot modify the same record or object at the same time. However, the second user or process can have read-only access to the record or object at the same time.

There are several reasons for using the multi-user commands:

- Modifying records by using the language.
- Using a custom user interface for multi-user operations.
- Saving related modifications inside a transaction.

There are three important concepts to be aware of when using commands in a multi-processing database:

1. In a process, each table is in either a read-only or a read/write state.
2. Records become locked when they are loaded and unlocked when they are unloaded.
3. A locked record cannot be modified.

As a convention in the following sections, the person performing an operation on the multi-user database is referred to as the **local user**. Other people using the database are referred to as the **other users**. The discussion is from the perspective of the local user. Also, from a multi-process perspective, the process executing an operation on the database is the **current process**. Any other executing process is referred to as **other processes**. The discussion is from the point of view of the current process.

### Locked Records  

A locked record cannot be modified by the local user or the current process. A locked record can be loaded, but cannot be modified. A record is locked when one of the other users or processes has successfully loaded the record for modification, or when the record is stacked. Only the user who is modifying the record sees that record as unlocked. All other users and processes see the record as locked, and therefore unavailable for modification. A table must be in a read/write state for a record to be loaded unlocked.

### Read-Only and Read/Write States  

Each table in a database is in either a read/write or a read-only state for each user and process of the database. **Read-only** means that records for the table can be loaded but not modified. **Read/write** means that records for the table can be loaded and modified if no other user has locked the record first.

Note that if you change the status of a table, the change takes effect for the next record loaded. If there is a record currently loaded when you change the table’s status, that record is not affected by the status change.

#### Read-Only State  

When a table is read-only and a record is loaded, this record is always locked. In other words, locked records can be displayed, printed, and otherwise used, but they cannot be modified.

Note that the read-only state applies only to editing existing records. A read-only state does not affect the creation of new records. You can still add records to a read-only table using [`CREATE RECORD`](../commands/create-record) and [`ADD RECORD`](../commands/add-record), or the menu commands of the Design environment (in this case, the records being created are locked for all other users/processes). Note that the [`ARRAY TO SELECTION`](../commands/array-to-selection) command is not affected by the read-only state since it can both create and modify records.

4D automatically sets a table to read-only for commands that do not require write access to records. These commands are: [`DISPLAY SELECTION`](../commands/display-selection), [`DISTINCT VALUES`](../commands/distinct-values), [`EXPORT DIF`](../commands/export-dif), [`EXPORT SYLK`](../commands/export-sylk), [`EXPORT TEXT`](../commands/export-text), [`PRINT SELECTION`](../commands/print-selection), [`PRINT LABEL`](../commands/print-label), [`QR REPORT`](../commands/qr-report), [`SELECTION TO ARRAY`](../commands/selection-to-array), [`SELECTION RANGE TO ARRAY`](../commands/selection-range-to-array).

You can find out the state of a table at any time using the [`Read only state`](../commands/read-only-state) function.

Before executing any of these commands, 4D saves the current state of the table (read-only or read/write) for the current process. After the command has executed, this state is restored.

#### Read/Write State  

When a table is read/write and a record is loaded, the record will become unlocked if no other user has locked the record first. If the record is locked by another user, the record is loaded as a locked record that cannot be modified by the local user.

A table must be set to read/write and the record loaded for it to become unlocked and thus modifiable.

If a user loads a record from a table in read/write mode, no other users can load that record for modification. However, other users can add records to the table, either through the [`CREATE RECORD`](../commands/create-record) and [`ADD RECORD`](../commands/add-record) commands or manually in the Design environment.

Read/write is the default state for all tables when a database is opened and a new process is started.

#### Changing the Status of a Table  

You can use the [`READ ONLY`](../commands/read-only) and [`READ WRITE`](../commands/read-write) commands to change the state of a table. If you want to change the state of a table in order to make a record read-only or read/write, you must execute the command before this record is loaded. Any record that is already loaded is not affected by the [`READ ONLY`](../commands/read-only) and [`READ WRITE`](../commands/read-write) commands.

Each process has its own state (read-only or read/write) for each table in the database.

By default, if you do not use the READ ONLY command, all tables are in read/write mode.

### Loading, Modifying and Unloading Records 

Before the local user can modify a record, the table must be in the read/write state and the record must be loaded and unlocked.

Any of the commands that loads a current record (if there is one) — such as [`NEXT RECORD`](../commands/next-record), [`QUERY`](../commands/query), [`ORDER BY`](../commands/order-by), [`RELATE ONE`](../commands/relate-one), etc. — sets the record state as locked or unlocked. The record is loaded according to the current state of its table (read-only or read/write) and its availability. A record may also be loaded for a related table by any of the commands that cause an automatic relation to be established.

If a table is in the read-only state for a process or a user, then this table's records are loaded in read-only mode, which means they cannot be modified or deleted by this process or user. This is recommended for viewing or retrieving data because it does not prevent other users or processes from accessing the records of this table in read/write mode if necessary.

If a table is in the read/write state for a process or a user, then any record from this table is also loaded in read/write mode, but only if no other user or process has already locked this record. If a record is successfully loaded in read/write mode, it is unlocked for the current process or user (it can be modified and saved) and is locked for all other users or processes. A table must be put into the read/write state before loading a record for modification and then saving it.

If the record is to be modified, you use the Locked function to test whether or not a record is locked by another user. If a record is locked (Locked returns True), load the record with the [`LOAD RECORD`](../commands/load-record) command and again test whether or not the record is locked. This sequence must be continued until the record becomes unlocked (Locked returns False).

When modifications to be made to a record are finished, the record must be released (and therefore unlocked for the other users) with [`UNLOAD RECORD`](../commands/unload-record). If a record is not unloaded, it will remain locked for all other users until a different current record is selected. Changing the current record of a table automatically unlocks the previous current record. You need to explicitly call [`UNLOAD RECORD`](../commands/unload-record) if you do not change the current record. This discussion applies to existing records. When a new record is created, it can be saved regardless of the state of the table to which it belongs.

:::note

When it is used in a transaction, the [`UNLOAD RECORD`](../commands/unload-record) command unloads the current record only for the process that manages the transaction. For other processes, the record stays locked as long as the transaction has not been validated (or cancelled).

:::

Use the [`LOCKED BY`](../commands/locked-by) command to see which user and/or process have locked a record.

:::

A good practice is to place all tables in read-only mode when each process is started (using the syntax [`READ ONLY(*)`](../commands/read-only)) then put each table in read/write mode only when necessary. Access to tables in read-only mode is faster and more memory-efficient. Moreover, changing the state of a table is optimized in client/server mode because it does not cause any additional network traffic: information is only sent to the server when executing a command that requires adequate access to the table.

:::

### Loops to Load Unlocked Records

The following example shows the simplest loop with which to load an unlocked record:

```4d
 READ WRITE([Customers])//Set the table’s state to read/write
 Repeat//Loop until the record is unlocked
    LOAD RECORD([Customers])//Load record and set locked status
 Until(Not(Locked([Customers])))
 //Do something to the record here
 READ ONLY([Customers])//Set the table’s state to read-only
```

The loop continues until the record is unlocked.

A loop like this is used only if the record is unlikely to be locked by anyone else, since the user would have to wait for the loop to terminate. Thus, it is unlikely that the loop would be used as is unless the record could only be modified by means of a method.

The following example uses the previous loop to load an unlocked record and modify the record:

```4d
 READ WRITE([Inventory])
 Repeat //Loop until the record is unlocked
    LOAD RECORD([Inventory]) //Load record and set it to locked
 Until(Not(Locked([Inventory])))
 [Inventory]Part Qty:=[Inventory]Part Qty 1 //Modify the record
 SAVE RECORD([Inventory]) //Save the record
 UNLOAD RECORD([Inventory]) //Let other users modfiy it
 READ ONLY([Inventory])
```


The [`MODIFY RECORD`](../commands/modify-record) command automatically notifies the user if a record is locked, and prevents the record from being modified. The following example avoids this automatic notification by first testing the record with the Locked function. If the record is locked, the user can cancel.

This example efficiently checks to see if the current record is locked for the table [Commands]. If it is locked, the process is delayed by the procedure for one second. This technique can be used both in a multi-user or multi-process situation:

```4d
 Repeat
    READ ONLY([Commands])//You do not need read/write right now
    QUERY([Commands])
 //If the search was completed and some records were returned
    If((OK=1) & (Records in selection([Commands])>0))
       READ WRITE([Commands])//Set the table to read/write state
       LOAD RECORD([Commands])
       While(Locked([Commands]) & (OK=1)) `If the record is locked,
 //loop until the record is unlocked
 //Who is the record locked by?
          LOCKED BY([Commands];$Process;$User;$SessionUser;$Name)
          If($Process=-1)//Has the record been deleted?
             ALERT("The record has been deleted in the meantime.")
             OK:=0
          Else
             If($User="")//Are you in single-user mode
                $User:="you"
             End if
             CONFIRM("The record is already used by "+$User+" in the "+$Name+" Process.")
             If(OK=1)//If you want to wait for a few seconds
                DELAY PROCESS(Current process;120)//Wait for a few seconds
                LOAD RECORD([Commands])//Try to load the record
             End if
          End if
       End while
       If(OK=1)//The record is unlocked
          MODIFY RECORD([Commands])//You can modify the record
          UNLOAD RECORD([Commands])
       End if
       READ ONLY([Commands])//Switch back to read-only
       OK:=1
    End if
 Until(OK=0)
```


### Using Commands in Multi-user or Multi-process Environment  

A number of commands in the language perform specific actions when they encounter a locked record. They behave normally if they do not encounter a locked record.

Here is a list of these commands and their actions when a locked record is encountered.

- [`MODIFY RECORD`](../commands/modify-record): Displays a dialog box stating that the record is in use. The record is not displayed, therefore the user cannot modify the record. In the Design environment, the record is shown in read-only state.
- [`MODIFY SELECTION`](../commands/modify-selection): Behaves normally except when the user double-clicks a record to modify it. [`MODIFY SELECTION`](../commands/modify-selection) displays dialog box stating that the record is in use and then allows read-only access to the record.
- [`APPLY TO SELECTION`](../commands/apply-to-selection): Loads a locked record, but does not modify it. [`APPLY TO SELECTION`](../commands/apply-to-selection) can be used to read information from the table without special care. If the command encounters a locked record, the record is put into the [`LockedSet` system set](./sets.md#the-lockedset-system-set).
- [`DELETE SELECTION`](../commands/delete-selection): Does not delete any locked records; it skips them. If the command encounters a locked record, the record is put into the [`LockedSet` system set](./sets.md#the-lockedset-system-set).
- [`DELETE RECORD`](../commands/delete-record): This command is ignored if the record is locked. No error is returned. You must test that the record is unlocked before executing this command.
- [`SAVE RECORD`](../commands/save-record): This command is ignored if the record is locked. No error is returned. You must test that the record is unlocked before executing this command.
- [`ARRAY TO SELECTION`](../commands/array-to-selection): Does not save any locked records. If the command encounters a locked record, the record is put into the [`LockedSet` system set](./sets.md#the-lockedset-system-set).
- [`GOTO RECORD`](../commands/goto-record): Records in a multi-user/multi-process database may be deleted and added by other users, therefore the record numbers may change. Use caution when directly referencing a record by number in a multi-user database.
- [**Sets**](./sets.md): Take special care with sets, as the information that the set was based on may be changed by another user or process.

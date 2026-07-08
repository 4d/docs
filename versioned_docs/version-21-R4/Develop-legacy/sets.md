---
id: sets
title: Sets
slug: /Develop/sets
displayed_sidebar: docs
---


Sets offer you a powerful, swift means for manipulating record selections. Besides the ability to create sets, relate them to the current selection, and store, load, and clear sets, 4D offers three standard set operations:

- Intersection
- Union
- Difference.


## Sets and the Current Selection  

A set is a compact representation of a selection of records. The idea of sets is closely bound to the idea of the current selection. Sets are generally used for the following purposes:

- To save and later restore a selection when the order does not matter
- To access the selection a user made on screen (the `UserSet`)
- To perform a logical operation between selections.

The current selection is a list of references that points to each record that is currently selected. The list exists in memory. Only currently selected records are in the list. A selection doesn’t actually contain the records, but only a list of references to the records. Each reference to a record takes 4 bytes in memory. When you work on a table, you always work with the records in the current selection. When a selection is sorted, only the list of references is rearranged. There is only one current selection for each table inside a process.

Like a current selection, a set represents a selection of records. A set does this by using a very compact representation for each record. Each record is represented by one bit (one-eighth of a byte). Operations using sets are very fast, because computers can perform operations on bits very quickly. A set contains one bit for every record in the table, whether or not the record is included in the set. In fact, each bit is equal to 1 or 0, depending on whether or not the record is in the set.

Sets are very economical in terms of RAM space. The size of a set, in bytes, is always equal to the total number of records in the table divided by 8. For example, if you create a set for a table containing 10,000 records, the set takes up 1,250 bytes, which is about 1.2K in RAM.

There can be many sets for each table. In fact, sets can be saved to disk separately from the database. To change a record belonging to a set, first you must use the set as the current selection, then modify the record or records.

A set is never in a sorted order—the records are simply indicated as belonging to the set or not. On the other hand, a named selection is in sorted order, but it requires more memory in most cases. For more information about named selections, see the Named Selections section.

A set "remembers" which record was the current record at the time the set was created. The following table compares the concepts of the current selection and of sets:

|Comparison|Current Selection|Sets|
|---|---|---|
|Number per table|1|0 to many|
|Sortable|Yes|No|
|Can be saved on disk|No|Yes|
|RAM per record(in bytes)|Number of	selected records * 4|Total number of records/8|
|Combinable|	No|	Yes|
|Contains current record|	Yes|	Yes, as of the time the set was created|

When you create a set, it belongs to the table from which you created it. Set operations can be performed only between sets belonging to the same table.

Sets are independent from the data. This means that after changes are made to a file, a set may no longer be accurate. There are many operations that can cause a set to be inaccurate. For example, if you create a set of all the people from New York City, and then change the data in one of those records to “Boston” the set would not change, because the set is just a representation of a selection of records. Deleting records and replacing them with new ones also changes a set, as well as compacting the data. Sets can be guaranteed to be accurate only as long as the data in the original selection has not been changed.

## Process and Interprocess Sets  

You can have the following three types of sets:

- **Process sets**: A process set can only be accessed by the process in which it has been created. `LockedSet` is a process set. Process sets are cleared as soon as the process method ends. Process sets do not need any special prefix in the name.
- **Interprocess sets**: A set is an interprocess set if the name of the set is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign. An interprocess set is “visible” to all the processes of the database.
In client/server mode, an interprocess set is “visible” to processes of the machine where it was created (client or server).
The name of an interprocess set must be unique in the database.
- **Local Sets/Client Sets**: Local/client sets are intended for use in client/server mode. The name of a local/client set is always preceded by the dollar sign ($) -- except for the UserSet system set. Unlike other types of sets, a local/client set is stored on the client machine.

:::note Notes

- The maximum size of a set name is 255 characters (excluding <> and $ symbols).
- For more information about the use of sets in client/server mode, please refer to 4D Server, Sets and Named Selections.

:::


## Visibility of Sets  

The following table indicates the principles concerning the visibility of sets depending on their scope and where they were created:

 

||Client Process|Other processes on the same client|Other clients|Server process|Other processes on the server|
|---|---|---|---|---|---|
|Creation in a client process	||||||
|$test|X	|||||
|test	| X||| X(Trigger)	||
|<>test	| X|X	||||
|Creation in a server process||||||
|$test|||| X||
|test	||||X||
|<>test||||X| X|


## Sets and Transactions  

A set can be created inside a [transaction](./transactions.md). It is possible to create a set of the records created inside a transaction and a set of records created or modified outside of a transaction. When the transaction ends, the set created during the transaction should be cleared, because it may not be an accurate representation of the records, especially if the transaction was canceled.

## Example  

The following example deletes duplicate records from a table which contains information about people. A For...End for loop moves through all the records, comparing the current record to the previous record. If the name, address, and zip code are the same, then the record is added to a set. At the end of the loop, the set is made the current selection and the (old) current selection is deleted:

```4d
 CREATE EMPTY SET([People];"Duplicates")
  // Create an empty set for duplicate records
 ALL RECORDS([People])
  // Select all records
  // Sort the records by ZIP, address, and name so
  // that the duplicates will be next to each other
 ORDER BY([People];[People]ZIP;>;[People]Address;>;[People]Name;>)
  // Initialize variables that hold the fields from the previous record
 $Name:=[People]Name
 $Address:=[People]Address
 $ZIP:=[People]ZIP
  // Go to second record to compare with first
 NEXT RECORD([People])
 For($i;2;Records in table([People]))
  // Loop through records starting at 2
  // If the name, address, and ZIP are the same as the
  // previous record then it is a duplicate record.
    If(([People]Name=$Name) & ([People]Address=$Address) & ([People]ZIP=$ZIP))
  // Add current record (the duplicate) to set
       ADD TO SET([People];"Duplicates")
    Else
  // Save this record’s name, address, and ZIP for comparison with the next record
       $Name:=[People]Name
       $Address:=[People]Address
       $ZIP:=[People]ZIP
    End if
  // Move to the next record
    NEXT RECORD([People])
 End for
  // Use duplicate records that were found
 USE SET("Duplicates")
  // Delete the duplicate records
 DELETE SELECTION([People])
  // Remove the set from memory
 CLEAR SET("Duplicates")
```

As an alternative to immediately deleting records at the end of the method, you could display them on screen or print them, so that a more detailed comparison can be made.


## The UserSet System Set  

4D maintains a system set named `UserSet`, which automatically stores the most recent selection of records highlighted on screen by the user. Thus, you can display a group of records with [`MODIFY SELECTION`](../commands/modify-selection) or [`DISPLAY SELECTION`](../commands/display-selection), ask the user to select from among them and turn the results of that manual selection into a selection or into a set that you name.

::info 4D Server

Although its name does not begin with the character "$", the `UserSet` system set is a client set. So, when using [`INTERSECTION`](../commands/intersection), [`UNION`](../commands/union) and [`DIFFERENCE`](../commands/difference), make sure you compare `UserSet` only to client sets. 

:::

There is only one `UserSet` for a [process](../Develop/processes.md). Each table does not have its own `UserSet`. `UserSet` becomes "owned" by a table when a selection of records is displayed for the table.

4D manages the `UserSet` set for list forms displayed in Design mode or using the [`MODIFY SELECTION`](../commands/modify-selection) or [`DISPLAY SELECTION`](../commands/display-selection) commands. However, this mechanism is not active for [subforms](../FormObjects/subform_overview.md).

The following method illustrates how you can display records, allow the user to select some of them, and then use UserSet to display the selected records:

```4d
  // Display all records and allow user to select any number of them.
  // Then display this selection by using UserSet to change the current selection.
 FORM SET OUTPUT([People];"Display") // Set the output layout
 ALL RECORDS([People]) // Select all people
 ALERT("Press Ctrl or Command and Click to select the people required.")
 DISPLAY SELECTION([People]) // Display the people
 USE SET("UserSet") // Use the people that were selected
 ALERT("You chose the following people.")
 DISPLAY SELECTION([People]) // Display the selected people
```

## The LockedSet System Set  

The [`APPLY TO SELECTION`](../commands/apply-to-selection), [`DELETE SELECTION`](../commands/delete-selection), [`ARRAY TO SELECTION`](../commands/array-to-selection) and [`JSON TO SELECTION`](../commands/json-to-selection) commands create a set named `LockedSet` when used in a multi-processing environment.

Query commands also create a `LockedSet` system set when they find locked records in the 'query and lock' context (see the [`SET QUERY AND LOCK`](../commands/set-query-and-lock) command).

`LockedSet` indicates which records were locked during the execution of the command.
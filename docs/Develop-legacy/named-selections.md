---
id: named-selections
title: Named Selections
slug: /Develop/named-selections
displayed_sidebar: docs
---


## Overview

Named selections provide an easy way to manipulate several selections simultaneously. A named selection is an ordered list of records for a table in a process. This ordered list can be given a name and kept in memory. Named selections offer a simple means to preserve in memory the order of the selection and the current record of the selection.

The following commands enable you to work with named selections:

- [`COPY NAMED SELECTION`](../commands/copy-named-selection)
- [`CUT NAMED SELECTION`](../commands/cut-named-selection)
- [`USE NAMED SELECTION`](../commands/use-named-selection)
- [`CLEAR NAMED SELECTION`](../commands/clear-named-selection)
- [`CREATE SELECTION FROM ARRAY`](../commands/create-selection-from-array)


Named selections are created with the [`COPY NAMED SELECTION`](../commands/copy-named-selection), [`CUT NAMED SELECTION`](../commands/cut-named-selection) and [`CREATE SELECTION FROM ARRAY`](../commands/create-selection-from-array). Named selections are generally used to work on one or more selections and to save and later restore an ordered selection. There can be many named selections for each table in a process. To reuse a named selection as the current selection, call [`USE NAMED SELECTION`](../commands/use-named-selection). When you are done with a named selection, use [`CLEAR NAMED SELECTION`](../commands/clear-named-selection).

:::note

Combining the statement `SET QUERY DESTINATION(Into named selection;namedselection)` with a search command (for example [`QUERY`](../commands/query)) can also be used to create a named selection. Refer to the description of the [`SET QUERY DESTINATION`](../commands/set-query-destination) command.

:::

Named selections can be local, process or interprocess in scope.

A named selection is local when its name is preceded by a dollar sign. When its name is not preceded by any symbol, it is a process named selection and it is an interprocess named selection if its name is preceded by the symbols (<>) — a “less than” sign followed by a “greater than” sign. 

The scope of an interprocess named selection is identical to the scope of an interprocess variable (*deprecated*). An interprocess named selection can be accessed from any process. With 4D in remote mode and 4D Server, an interprocess named selection is available only to the processes of the client that created it. An interprocess named selection is not available to other client machines.
A process named selection is available only within the process in which it was created and on the server.
A local named selection is defined for the process that created it and is not visible on the server.

:::note

Creating a named selection requires access to the selection of the table. Since selections are kept on the server and a local process does not have access to server data, do not use named selections within local processes.

:::

## Visibility of Named Selections  

The following table indicates the principles concerning the visibility of named selections depending on their scope and where they were created:


||Client Process|Other processes on the same client|Other clients	|Server process|Other processes on the server|
|---|---|---|---|---|---|
|Creation in a client process	||||||	 	 
|$test|X|||||
|test	|X|||X(Trigger)	 ||
|<>test| X| X	||||
|Creation in a server process	 ||||||	 	 	 	 
|$test||||X||
|test|||| X	|| 
|<>test	|||| X|X|


## Named Selections and Sets

The differences between [sets](./sets.md) and named selections are:

- A named selection is an ordered list of records; a set is not.
- Sets are very memory efficient, because they require only one bit for each record in the file. Named selections require 4 bytes for each record in the selection.
- Unlike sets, named selections cannot be saved to disk.
- Sets have the standard [`INTERSECTION`](../commands/intersection), [`UNION`](../commands/union) and [`DIFFERENCE`](../commands/difference) operations; named selections cannot be combined with other named selections.


The similarities between named selections and sets are:

- Like a set, a named selection exists in memory.
- A named selection and a set store references to a record. If records are modified or deleted, the named selection or the set can become invalid.
- Like a set, a named selection “remembers” the current record as of the time the named selection was created.
---
id: current-selection
title: Current Selection
slug: /Develop/current-selection
displayed_sidebar: docs
---


## Overview

When managing data, you select the group of records with which you want to work. This group of records is called the **current selection**. The current selection can contain none, one, some, or all of the records in a table. Every table and every process has its own current selection of records.

The **current selection** is an important concept in 4D. The most common data management operations on [**records**](./records.md) are performed in the current selection. These operations include:

- Sorting records,
- Viewing and modifying individual records,
- Updating a group of records,
- Printing a report,
- Generating labels,
- Graphing data,
- Exporting records.

In other words, creating a current selection in a table is the first step towards numerous other data management operations. 

The current selection of records is always the set of records most recently selected. For instance, you might have a company database that uses an Employees table to keep track of employee records. Suppose that you decide to search for the records of all engineers in the company.
When this query begins, the current selection may contain the records of all employees in the company — salespeople, production personnel, engineers, and so on. When the query is completed, the current selection contains only the engineers’ records. If you were to print a list of records, the list would contain only the records in the current selection — in this case, the records for all of the engineers in the company. If you were to graph employee salaries, your graph would display the salaries for all of the engineers in the company.

The current selection remains the same until you perform an operation that changes it. You can change the current selection by:

- Selecting all records,
- Manually selecting a subset of records,
- Searching for records.

The title bar of the output form tells you how many records are in the current table and how many records from the table are in the current selection. In a remote 4D, only the number of records in the current selection is displayed.

Every table in a database has its own current selection. In a relational database, changing the current selection in one table can change the current selections in related tables. For example, in a database consisting of related [Employees] and [Departments] tables, a opening an input form in the [Departments] table changes the current selection in the [Employees] table. That is, the employees belonging to that department become the new current selection in the [Employees] table. 

If you use [processes](../Develop/processes.md) for carrying out tasks in the database, there may be several simultaneous current selections per table. Each process acts like an individual 4D environment, which lets you carry out separate tasks. It can be useful to have more than one current selection, particularly when you are comparing two or more types of data, such as the monthly invoicing of several different sales regions. 

## Showing all the records  

When using an output form to display records, you can reset the current selection so that it contains all the records in the current table. This operation could be carried out via the [`Select All` standard action](../Desktop-legacy/standard-actions.md#selectall) or the [`ALL RECORDS`](../commands/all-records) command.

In the Design environment, you can use the **Show All** command from the **Records** menu. All the records of the current table are then included in the current selection. The **Show All** command is disabled when you are using an input form.

## Creating a subset of records  

You can specify a new current selection in an output form by manually "marking" certain records, then defining them as the new current selection. This is referred to as creating a subset. In the Design environment, there is a specific **Show Subset** command in the **Records** menu. 

In your development, you can manage records marked by users by using [Sets](./sets.md). 

You browse and handle current selections via commands of the [Selection](../commands/theme/Selection) theme. 



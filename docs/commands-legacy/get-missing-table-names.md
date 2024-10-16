---
id: get-missing-table-names
title: GET MISSING TABLE NAMES
slug: /commands/get-missing-table-names
displayed_sidebar: docs
---

<!--REF #_command_.GET MISSING TABLE NAMES.Syntax-->**GET MISSING TABLE NAMES** ( *missingTables* )<!-- END REF-->
<!--REF #_command_.GET MISSING TABLE NAMES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| missingTables | Text array | &#8592; | Names of missing tables in the database |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET MISSING TABLE NAMES.Summary-->The **GET MISSING TABLE NAMES** command returns the names of all the missing tables of the current database in the *missingTables* array.<!-- END REF-->

Missing tables are tables whose data are present in the data file but that do not exist at the level of the current structure. This can happen when a data file is opened with different versions of the structure. 

Typically, the scenario is as follows:

* The developer provides a structure containing tables A, B and C,
* The user adds the custom tables D and E, using, for example, the integrated *SQL* commands of 4D, and stores data in these tables,
* The developer provides a new version of the structure. It does not contain tables D and E.  
In this case, the user version of the database still contains data from tables D and E, but it cannot be accessed. The **GET MISSING TABLE NAMES** command will return the names "D" and "E".

Once you have identified the missing tables of the database, you can reactivate them via the [REGENERATE MISSING TABLE](regenerate-missing-table.md) command.

**Note:** The data of missing tables are erased when the data file is compacted (if the tables have not been regenerated). 

#### See also 

[REGENERATE MISSING TABLE](regenerate-missing-table.md)  
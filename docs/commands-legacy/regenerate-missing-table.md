---
id: regenerate-missing-table
title: REGENERATE MISSING TABLE
slug: /commands/regenerate-missing-table
displayed_sidebar: docs
---

<!--REF #_command_.REGENERATE MISSING TABLE.Syntax-->**REGENERATE MISSING TABLE** ( *tableName* )<!-- END REF-->
<!--REF #_command_.REGENERATE MISSING TABLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| tableName | Text | &#8594;  | Name of missing table to be regenerated |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.REGENERATE MISSING TABLE.Summary-->The **REGENERATE MISSING TABLE** command rebuilds the missing table whose name is passed in the *tableName* parameter.<!-- END REF--> When a missing table is rebuilt, it becomes visible in the Structure editor and its data can once again be accessed.

Missing tables are tables whose data are present in the data file but that do not exist at the structure level. You can identify any missing tables that may be present in the application by using the [GET MISSING TABLE NAMES](get-missing-table-names.md) command.

If the table designated by the *tableName* parameter is not a missing table of the database, the command does nothing. 

#### Example 

This method regenerates all the missing tables that may be present in the database:

```4d
 ARRAY TEXT($arrMissingTables;0)
 GET MISSING TABLE NAMES($arrMissingTables)
 $SizeArray:=Size of array($arrMissingTables)
 If($SizeArray#0)
  // Fills the array with the names of all the tables in the database
    ARRAY TEXT(arrTables;Last table number)
    If(Last table number>0) //If there are actually tables
       For($vlTables;Size of array(arrTables);1;-1)
          If(Is table number valid($vlTables))
             arrTables{$vlTables}:=Table name($vlTables)
          Else
             DELETE FROM ARRAY(arrTables;$vlTables)
          End if
       End for
    End if
    For($i;1;$SizeArray)
       If(Find in array(arrTables;$arrMissingTables{$i})=-1)
          CONFIRM("Regenerate the table"+$arrMissingTables{$i}+"?")
          If(OK=1)
             REGENERATE MISSING TABLE($arrMissingTables{$i})
          End if
       Else
          ALERT("Impossible to regenerate table "+$arrMissingTables{$i}+" because there is already a table with this name in the database.")
       End if
    End for
 Else
    ALERT("No tables to regenerate.")
 End if
```

#### See also 

[GET MISSING TABLE NAMES](get-missing-table-names.md)  
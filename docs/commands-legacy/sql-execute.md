---
id: sql-execute
title: SQL EXECUTE
slug: /commands/sql-execute
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXECUTE.Syntax-->**SQL EXECUTE** ( *sqlStatement* {; *boundObj*}{; *boundObj2* ; ... ; *boundObjN*} )<!-- END REF-->
<!--REF #_command_.SQL EXECUTE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| sqlStatement | Text | &#8594;  | SQL command to execute |
| boundObj | Variable, Field | &#8592; | Receives result (if necessary) |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL EXECUTE.Summary-->The SQL EXECUTE command executes an SQL command and binds the result to 4D objects (arrays, variables or fields).<!-- END REF--> 

A valid connection must be specified in the current process in order to execute this command. 

The *sqlStatement* parameter contains the SQL command to execute. *boundObj* receives the results. Variables are bound in the column sequence order, which means that any remaining remote columns are discarded. 

:::note

The command supports up to 127 *boundObj* parameters.  

:::

If 4D fields are passed as parameters in *boundObj*, the command will create records and save them automatically. 4D fields must come from the same table (a field from table 1 and a field from table 2 cannot be passed in the same call). If fields from more than one table are passed, an error is generated. 

**Warning:** When you pass 4D fields in the *boundObj* parameter(s) and execute the *SELECT* command, it is always the data of the remote 4D source that is modified. If you want to retrieve data from the remote source locally, you must use intermediary local arrays and call the *INSERT* command (see example 6). 

If you pass 4D arrays in the *boundObj* parameter(s), it is advisable to declare them before calling the command in order to check the type of data processed. Arrays are automatically resized when necessary. 

With a 4D variable, one record is fetched at a time. The other results are ignored.

**Note:** For more information about referencing 4D expressions in SQL queries, refer to the *Overview of SQL Commands* section.

#### Example 1 

In this example, we will get the ename column of the emp table of the data source. The result is stored in the \[Employee\]Name 4D field. 4D records will be created automatically: 

```4d
 SQLStmt:="SELECT ename FROM emp"
 SQL EXECUTE(SQLStmt;[Employee]Name)
 SQL LOAD RECORD(SQL all records)
```

#### Example 2 

To check the creation of records, it is possible to include code within a transaction and to validate it only if the operation proves to be satisfactory:

```4d
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="SELECT alpha_field FROM app_testTable"
 START TRANSACTION
 SQL EXECUTE(SQLStmt;[Table 2]Field1)
 While(Not(SQL End selection))
    SQL LOAD RECORD
    ... //Place the data validation code here
 End while
 VALIDATE TRANSACTION //Validation of the transaction
```

#### Example 3 

In this example, we want to get the ename column of the emp table of the data source. The result will be stored in an *aName* array. We fetch records 10 at a time. 

```4d
 ARRAY STRING(30;aName;20)
 SQLStmt:="SELECT ename FROM emp"
 SQL EXECUTE(SQLStmt;aName)
 While(Not(SQL End selection))
    SQL LOAD RECORD(10)
 End while
```

#### Example 4 

In this example, we want to get the ename and job of the emp table for a specific ID (WHERE clause) of the data source. The result will be stored in the *vName* and *vJob* 4D variables. Only the first record is fetched.

```4d
 SQLStmt:="SELECT ename, job FROM emp WHERE id = 3"
 SQL EXECUTE(SQLStmt;vName;vJob)
 SQL LOAD RECORD
```

#### Example 5 

In this example, we want to get the Blob\_Field column of the Test table in the data source. The result will be stored in a BLOB variable whose value is updated each time a record is loaded.

```4d
 var MyBlob : Blob
 SQL LOGIN
 SQL EXECUTE("SELECT Blob_Field FROM Test";MyBlob)
 While(Not(SQL End selection))
  //We look through the results
    SQL LOAD RECORD
  //The value of MyBlob is updated on each call
 End while
```

#### Example 6 

You want to retrieve data locally from a remote 4D Server database where it is stored. To do this, you must use intermediary arrays:

```4d
  // Log in to the remote database
 SQL LOGIN("IP:192.168.18.15:19812";"user";"password";*)
 If(OK=1)
  // Starting from here all SQL requests are made on the remote database
    var $LastName_value : Text // 4D variable used in the search statement
    ARRAY TEXT($a_LastName;0) // Temporary storage of remote values for LastName
    ARRAY TEXT($a_FirstName;0) // Temporary storage of remote values for FirstName
    var $UseSQL : Boolean //Choice of means for local storage of data from the remote database
  // (demo only)
 
    $LastName_value:="Smith" // Initialization of 4D variable
 
  // Associate the 4D $LastName_value variable with the first "?" in the SQL request
    SQL SET PARAMETER($LastName_value;SQL param in)
 
  // From the remote PERSONS table, retrieve the values of the LastName and FirstName fields
  // where "LastName = Smith" and store them in the $a_LastName and $a_FirstName arrays
    SQL EXECUTE("SELECT LastName, FirstName FROM PERSONS WHERE LastName = ?";$a_LastName;$a_FirstName)
    If(Not(SQL End selection)) // If at least one record is found
 
       SQL LOAD RECORD(SQL all records) // Load all the records
 
       $UseSQL:=True // Chooses the way to integrate the data (demo only)
 
       If($UseSQL) // Use SQL requests
          SQL LOGOUT // Log out from the remote database
          SQL LOGIN(SQL_INTERNAL;"user";"password") // Log in to the local database
  // Starting from here all SQL requests are made on the local database
  // Save the $a_LastName and $a_FirstName arrays in the local PERSONS table
          SQL EXECUTE("INSERT INTO PERSONS(LastName, FirstName) VALUES (:$a_LastName, :$a_FirstName);")
 
       Else // Using 4D commands
          For($i;1;Size of array($a_LastName))
             CREATE RECORD([PERSONS])
             [PERSONS]LastName:=$a_LastName{$i}
             [PERSONS]FirstName:=$a_FirstName{$i}
             SAVE RECORD([PERSONS])
          End for
       End if
    End if
    SQL LOGOUT // Close the connection
 End if
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK returns 1\. Otherwise, it returns 0.

#### See also 

[SQL LOAD RECORD](sql-load-record.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 820 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||



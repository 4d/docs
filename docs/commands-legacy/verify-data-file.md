---
id: verify-data-file
title: VERIFY DATA FILE
slug: /commands/verify-data-file
displayed_sidebar: docs
---

<!--REF #_command_.VERIFY DATA FILE.Syntax-->**VERIFY DATA FILE** ( *structurePath* ; *dataPath* ; *objects* ; *options* ; *method* {; *tablesArray* {; *fieldsArray*}} )<!-- END REF-->
<!--REF #_command_.VERIFY DATA FILE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| structurePath | Text | &#8594;  | Pathname of 4D structure file to be checked |
| dataPath | Text | &#8594;  | Pathname of 4D data file to be checked |
| objects | Integer | &#8594;  | Objects to be checked |
| options | Integer | &#8594;  | Checking options |
| method | Text | &#8594;  | Name of 4D callback method |
| tablesArray | Array integer | &#8594;  | Numbers of tables to be checked |
| fieldsArray | 2D Integer array, 2D Integer array, 2D Real array | &#8594;  | Numbers of indexes to be checked |

<!-- END REF-->

#### Description 

<!--REF #_command_.VERIFY DATA FILE.Summary-->The VERIFY DATA FILE command carries out a structural check of the objects contained in the 4D data file designated by *structurePath* and *dataPath*.<!-- END REF-->For more information about checking data, please refer to the Design Reference manual. *structurePath* designates the structure file (compiled or not) associated with the data file to be checked. This can be the open structure file or any other structure file. You must pass a complete pathname, expressed with the syntax of the operating system. You can also pass an empty string, in this case a standard Open file dialog box appears so that the user can specify the structure file to be used.    
  
*dataPath* designates a 4D data file (.4DD). It must correspond to the structure file defined by the *structurePath* parameter. Be careful, you can designate the current structure file but the data file must not be the current (open) file. To verify the currently open data file, use the [VERIFY CURRENT DATA FILE](verify-current-data-file.md) command. If you attempt to verify the current data file with the VERIFY DATA FILE command, an error is generated.

The data file designated is opened in read only. You must make sure that no application accesses this file in write mode, otherwise the results of the check may be distorted.   
  
In the *dataPath* parameter, you can pass an empty string, a file name or a complete pathname, expressed in the syntax of the operating system. If you pass an empty string, the standard Open file dialog box appears so that the user can specify the file to be checked (note that in this case, it is not possible to select the current data file). If you only pass a data file name, 4D will look for it at the same level as the specified structure file.  
  
The *objects* parameter is used to designate which types of objects will be checked. Two types of objects can be checked: records and indexes. You can use the following constants, found in the “*Data File Maintenance*” theme:

| Constant       | Type    | Value | Comment                                                                                                                                                                                                                                                                                |
| -------------- | ------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Verify all     | Integer | 16    |                                                                                                                                                                                                                                                                                        |
| Verify indexes | Integer | 8     | This option checks the physical consistency of the indexes, without any link with the data. It signals invalid keys but does not permit you to detect duplicated keys (two indexes that point to the same record). This type of error can only be detected with the Verify All option. |
| Verify records | Integer | 4     |                                                                                                                                                                                                                                                                                        |
  
  
To verify both the records and the indexes, pass the total of Verify Records+Verify Indexes. The value 0 (zero) can also be used to obtain the same result. The Verify All option carries out complete internal verification. This verification is compatible with the creation of a log.  
  
The *options* parameter is used to set verification options. The following options are available, found in the “*Data File Maintenance*” theme:  

| Constant                | Type    | Value  | Comment                                                                                                                                                                                                                                                                                                                        |
| ----------------------- | ------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Do not create log file  | Integer | 16384  | Generally, this command creates a log file in XML format (refer to the end of the command description). With this option, no log file will be created.                                                                                                                                                                         |
| Timestamp log file name | Integer | 262144 | When this option is passed, the name of the log file generated will contain the date and time of its creation; as a result, it will not replace any log file already generated previously. By default, if this option is not passed, log file names are not timestamped and each new file generated replaces the previous one. |
  
  
Generally, the VERIFY DATA FILE command creates a log file in XML format (please refer to the end of the description of this command). You can cancel this operation by passing this option. To create the log file, pass 0 in *options*.  
  
The *method* parameter is used to set a callback method that will be called regularly during the verification. If you pass an empty string or an invalid method name, this parameter is ignored (no method is called). When called, the method receives up to 5 parameters depending on the objects being verified and on the event type originating the call (see calls table). It is imperative to declare these parameters in the method: 

| \- $1 | Integer | Message type (see table) |
| ----- | ------- | ------------------------ |
| \- $2 | Integer | Object type              |
| \- $3 | Text    | Message                  |
| \- $4 | Integer | Table number             |
| \- $5 | Integer | Reserved                 |

The following table describes the contents of the parameters depending on the event type:

| **Event**                 | **$1 (Longint)** | **$2 (Longint)**   | **$3 (Text)**  | **$4 (Longint)** | **$5 (Longint)** |
| ------------------------- | ---------------- | ------------------ | -------------- | ---------------- | ---------------- |
| Message                   | 1                | 0                  | Progression    | Percentage       | Reserved         |
| message                   | done (0-100)     |                    |                |                  |                  |
| Verification finished(\*) | 2                | Object type (\*\*) | OK message     | Table or index   | Reserved         |
| test                      | number           |                    |                |                  |                  |
| Error                     | 3                | Object type (\*\*) | Text of error- | Table or index   | Reserved         |
| message                   | number           |                    |                |                  |                  |
| End of execution          | 4                | 0                  | DONE           | 0                | Reserved         |
| Warning                   | 5                | Object type(\*\*)  | Text of error  | Table or index   | Reserved         |
| message                   | number           |                    |                |                  |                  |

(\*) The *Verification finished* ($1=2) event is never returned when the mode is Verify All. It is only used in Verify Records or Verify Indexes mode.  
(\*\*) *Object type*: When an object is verified, a "finished" message ($1=2), error ($1=3) or warning ($1=5) can be sent. The object type returned in $2 can be one of the following:

* 0 = undetermined
* 4 = record
* 8 = index
* 16 = structure object (preliminary check of data file).

*Special case*: When $4 = 0 for $1=2, 3 or 5, the message does not concern a table or an index but rather the data file as a whole.

The callback method must also return a value in $0 (Longint), which is used to check the execution of the operation:

* If $0 = 0, the operation continues normally
* If $0 = -128, the operation is stopped without any error generated
* If $0 = another value, the operation is stopped and the value passed in $0 is returned as the error number. This error can be intercepted by an error-handling method.

**Note:** You cannot interrupt execution via $0 after the *End of execution* event ($4=1) has been generated.

Two optional arrays can also be used by this command:

* The *tablesArray* array contains the numbers of the tables whose records are to be checked. It can be used to limit checking to only certain tables. If this parameter is not passed or if the array is empty and the *objects* parameter contains Verify Records, all the tables will be checked.
* The *fieldsArray* array contains the numbers of the indexed fields whose indexes are to be checked. If this parameter is not passed or if the array is empty and the *objects* parameter contains Verify Indexes, all the indexes will be checked. The command ignores fields that are not indexed. If a field contains several indexes, they are all checked. If a field is part of a composite index, the entire index is checked.  
You must pass a 2D array in *fieldsArray*. For each row of the array:  
\- The element {0} contains the table number,  
\- The other elements {1...x} contain the field numbers.

By default, the VERIFY DATA FILE command creates a log file in XML format (if you have not passed the Do not create log file option, see the *options* parameter). This file is placed in the **Logs** folder of the database and its name is based on the structure file of the current database. For example, for a structure file named “myDB.4db,” the log file will be named “myDB\_Verify\_Log.xml.”  
If you have passed the Timestamp log file name option, the name of the log file includes the date and time of its creation in the form "YYYY-MM-DD HH-MM-SS", which gives us, for example: “myDB\_Verify\_Log\_2015-09-27 15-20-35.xml”. This means that each new log file does not replace the previous one, but it might require subsequent manual action to remove unnecessary files.   
Regardless of the option selected, as soon as a log file is generated, its path is returned in the *Document* system variable after execution of the command.

#### Example 1 

Simple checking of data and indexes:

```4d
 VERIFY DATA FILE($StructName;$DataName;Verify indexes+Verify records;Do not create log file;"")
```

#### Example 2 

Complete verification with log file:

```4d
 VERIFY DATA FILE($StructName;$DataName;Verify all;0;"")
```

#### Example 3 

Checking of records only:

```4d
 VERIFY DATA FILE($StructName;$DataName;Verify records;0;"")
```

#### Example 4 

Checking of records from tables 3 and 7 only:

```4d
 ARRAY LONGINT($arrTableNums;2)
 $arrTableNums{1}:=3
 $arrTableNums{2}:=7
 VERIFY DATA FILE($StructName;$DataName;Verify records;0;"FollowScan";$arrTableNums)
```

#### Example 5 

Checking of specific indexes (index of field 1 of table 4 and index of fields 2 and 3 of table 5):

```4d
 ARRAY LONGINT($arrTableNums;0) //not used but mandatory
 ARRAY LONGINT($arrIndex;2;0) //2 rows (columns added later)
 $arrIndex{1}{0}:=4 // table number in element 0
 APPEND TO ARRAY($arrIndex{1};1) //number of 1st field to be checked
 $arrIndex{2}{0}:=5 // table number in element 0
 APPEND TO ARRAY($arrIndex{2};2) // number of 1st field to be checked
 APPEND TO ARRAY($arrIndex{2};3) // number of 2nd field to be checked
 VERIFY DATA FILE($StructName;$DataName;Verify indexes;0;"FollowScan";$arrTableNums;$arrIndex)
```

#### Example 6 

Verify the data file, create and display the log file:

```4d
 VERIFY DATA FILE(Structure file;Data file;Verify all;0;"")
 SHOW ON DISK(File(Verification log file).platformPath)
```

#### System variables and sets 

If the callback method does not exist, the verification is not carried out, an error is generated and the system variable OK is set to 0\. If a log file was generated, its complete pathname is returned in the Document system variable. 

#### See also 

[VERIFY CURRENT DATA FILE](verify-current-data-file.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 939 |
| Thread safe | &check; |
| Modifies variables | OK, Document, error |
| Forbidden on the server ||



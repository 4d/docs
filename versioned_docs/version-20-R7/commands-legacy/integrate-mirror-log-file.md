---
id: integrate-mirror-log-file
title: INTEGRATE MIRROR LOG FILE
slug: /commands/integrate-mirror-log-file
displayed_sidebar: docs
---

<!--REF #_command_.INTEGRATE MIRROR LOG FILE.Syntax-->**INTEGRATE MIRROR LOG FILE** ( *pathName* ; *operationNum* {; *mode* {; *errObject*}} )<!-- END REF-->
<!--REF #_command_.INTEGRATE MIRROR LOG FILE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| pathName | Text | &#8594;  | Name or pathname of the log file to be integrated |
| operationNum | Real | &#8594;  | Number of last operation integrated or -2 to integrate the whole file |
| &#8592; | New number of last operation integrated |
| mode | Integer | &#8594;  | 0=strict mode (default mode), 1=auto repair mode |
| errObject | Object | &#8592; | Missed operation(s) |

<!-- END REF-->

#### Description 

<!--REF #_command_.INTEGRATE MIRROR LOG FILE.Summary-->**Preliminary note:** This command only works with 4D Server.<!-- END REF--> It can only be executed via the [Execute on server](execute-on-server.md) command or in a stored procedure.

The **INTEGRATE MIRROR LOG FILE** integrates the log file designated by *pathName* into a 4D Server database, after the *operationNum* operation. The command accepts to integrate any log file into the database, even if it does not correspond to the the data file. This command is specifically intended for use in the context of a mirror database. 

**Note:** Since 4D v14, it is possible to use a log file as part of a "mirror" database: the "Use Log File" option can now be checked in the Database Settings of a 4D Server used as a logical mirror, thus allowing the implementation of a series of cascading mirror servers (see the *Setting up a logical mirror* section in the 4D Server manual).

Unlike the existing *\_o\_INTEGRATE LOG FILE* command, at the end of its execution **INTEGRATE MIRROR LOG FILE** does not replace the current log file with the integrated one: the current log file of the database continues to be used. Accordingly, any changes made during integration are saved in the current log file.

In *pathName*, you pass an absolute or relative path to the database folder. If you pass an empty string in this parameter, a standard open file dialog box appears so that you can specify the file to be integrated. If this dialog box is canceled, no file is integrated and the *OK* system variable is set to 0.

In the *operationNum* variable, you pass the number of the last operation integrated, so that integration begins at the next operation. After integration, the value of the *operationNum* variable is updated with the number of the last operation integrated. You must save this variable and then reuse it directly as the *operationNum* parameter for the next integration operation. This allows you to follow on with subsequent log file integrations using **INTEGRATE MIRROR LOG FILE**. Pass -2 in the variable to integrate all the operations in the log file.

***Compatibility note:* In versions of 4D prior to v15 R4,* **the operationNum parameter was optional; however, from now on, if* **the operationNum parameter is omitted, an error is generated. To restore the original functioning of your former code, you can just pass -2* **in the operationNum parameter variable.* 

In *mode*, you pass the integration mode you want to activate. You can use one of the following constants found in the "*Backup and Restore*" theme:

| Constant         | Type    | Value | Comment                                                                                |
| ---------------- | ------- | ----- | -------------------------------------------------------------------------------------- |
| Auto repair mode | Integer | 1     | Use flexible mode with auto-repair actions and fill the *errObject* parameter (if any) |
| Strict mode      | Integer | 0     | Use strict integration mode (default)                                                  |

* Strict mode: In this mode, as soon as an error occurs during integration, it stops and you have to use the MSC in order to trace the error. This secure mode is used by default and is recommended in most cases.
* Auto repair mode: In this mode, when a non-critical error occurs, it is bypassed and integration continues. If you passed the *errObject* parameter, each error is logged and can be analyzed afterwards.  
Cases of non-critical errors are:  
   * The log requests to add a record, but this record already exists in the data.  
   Repair action: 4D updates the record.  
   * The log requests to update a record, but this record does not yet exist.  
   Repair action: 4D adds the record.  
   * The log requests to delete a record, but this record does not exist.  
   Repair action: 4D does nothing.

**Note**: In strict mode (default mode), integration will stop at the first error encountered. In this case, if you want to continue with the integration you will need to use the MSC.

When one of these anomalies occurs in auto-repair mode, the record concerned is automatically "repaired" and the related operation is logged in the *errObject* parameter. After execution is completed, the *errObject* parameter lists all the repaired records. It contains a single object array named "operations" built as follows:

```json
{"operations":    [        {            "operationType":24,            "operationName":"Create record",            "operationNumber":2,            "contextID":48,            "timeStamp":"2015-07-10T07:53:02.413Z",            "dataLen":24,            "recordNumber":0,            "tableID":"F4CXXXXX",            "tableName":"Customers",            "fields": {                "1": 9,                "2": "test value",                "3": "2003-03-03T00:00:00.000Z",                "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",                "8": "BlobID: 2"              }        },        {...}     ]
```

**Warning:** The auto-repair mode must be used in specific cases since it bypasses 4D's internal data integrity checking features. It can be used, for example, when an intermediary log file has been lost or corrupted and you want to recover as many operations as possible. In any case, you need to pay particular attention to data integrity when using this mode.

##### 

The actual list of available properties depends on the operation type (i.e.: create record, delete record, modify record, create Blob, etc.). Here are the main properties:

* *operationType*: internal code for the operation
* *operationName*: kind of operation, for example "create record," "modify record"
* *operationNumber*: internal number of operation in the log file
* *contextID*: ID of execution context; the context is detailed in the *extraData* section
* *timeStamp*: timestamp of operation in the log file
* *dataLen*: internal size of data
* *recordNumber*: internal record number
* *tableID*: internal ID of the table
* *tableName*: name of the table
* *fields*: object containing the list of field numbers along with their values. All fields in the table are logged.  
In case of Blob or picture values, different information is provided based on their storage location:  
   * If the Blob or picture is stored inside the data file, the property will be "BlobID:"+ an internal Blob number, for example: "BlobID:1"  
   * If the Blob or picture is stored outside the data file, the property will be "BlobPath:" + the path for the data, for example: "BlobPath: Table 1/Field 6/Data\_EE12D091535F9748BCE62EDE972A4BA2.jpg"
* *extraData*: user context data, including user name and ID, task name and ID, host machine name, and client version.
* *sequenceNumber*: current number within auto-increment sequence.
* *primaryKey*: primary key value.

#### Example 

You want to integrate a log file on the mirror server in auto-repair mode:

```4d
  //to be executed on the server
 var $err : Object
 var $num : Integer //-2 to integrate all operations
 INTEGRATE MIRROR LOG FILE("c:\\mirror\\logNew.journal";$num;Auto repair mode;$err)
```

#### System variables and sets 

If the integration is carried out correctly, the system variable OK is set to 1; otherwise, it is set to 0\. 

#### See also 

[LOG FILE TO JSON](log-file-to-json.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1312 |
| Thread safe | &check; |
| Modifies variables | OK, error |



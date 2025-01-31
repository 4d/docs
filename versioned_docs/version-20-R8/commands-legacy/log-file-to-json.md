---
id: log-file-to-json
title: LOG FILE TO JSON
slug: /commands/log-file-to-json
displayed_sidebar: docs
---

<!--REF #_command_.LOG FILE TO JSON.Syntax-->**LOG FILE TO JSON** ( *destFolderPath* {; *maxSize* {; *logPath* {; *fieldAtt*}}} )<!-- END REF-->
<!--REF #_command_.LOG FILE TO JSON.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| destFolderPath | Text | &#8594;  | Path of the saved file destination folder |
| maxSize | Integer | &#8594;  | Maximum size of JSON file to create (bytes) |
| logPath | Text | &#8594;  | Pathname of log file to export; use current log file if omitted |
| fieldAtt | Integer | &#8594;  | Field description attribute: 1 = use number (default), 2 = use name |

<!-- END REF-->

#### Description 

<!--REF #_command_.LOG FILE TO JSON.Summary-->The **LOG FILE TO JSON** command saves the current log file, or any specified log file, in JSON format.<!-- END REF-->

Once a log (binary file) is saved in JSON, its contents can be read and interpreted by the database administrator or any user in order to analyze database events, for example.

In *destFolderPath*, pass the path of the folder where you want to store the JSON file. This file is named **JournalExport.json**.

By default, the maximum size of the exported JSON file is 10 MB. When this size is reached, the file is closed and a new file is created. Limiting the size of each JSON file reduces memory requirements for analyzing the files. You can change the maximum size for the exported file by setting a value (in bytes) in the *maxSize* parameter. Passing 0 resets to the default size. Passing a negative value removes any size limit. 

By default, if the *logPath* parameter is omitted, the command saves the current log file. If you want to export a specific log file, pass its path in the *logPath* parameter. The log file must be a file with the ".journal" extension. If you want to export an archived log file (".4bl" extension), you need to convert it beforehand using the [RESTORE](restore.md) command. You can pass an empty string ("") to display the standard open file dialog box, allowing the user to select the log file to save. The selected log file path is returned in the **Document** system variable.

**Note:** When the command saves the current log file, the database is not locked. New operations can be executed while the file is being written on disk - these operations will not be included in the saved file.

When you export the current log file, the *fieldAtt* parameter allows you to define how fields will be described in the exported attribute: by number (default), or by name. You can pass one of the following constants, found in the "*Backup and Restore*" constant theme:

| Constant                    | Type    | Value | Comment                                                                             |
| --------------------------- | ------- | ----- | ----------------------------------------------------------------------------------- |
| Field attribute with name   | Integer | 2     | Fields are identified by their name. Example: {"LastName":"Jones"}                  |
| Field attribute with number | Integer | 1     | Fields are identified by their number (default if omitted). Example: {"5":"Jones"}. |

**Note:** When you export an external log file, fields are always identified by their number.

The saved JSON file contains all the operations recorded in the log, in the form of an array of JSON objects. Each object contains several properties describing the operation. Example:

```json
[   {      "operationType":25,      "operationName":"Modify record",      "operationNumber":45,      "contextID":37,      "timeStamp":"2019-12-11T09:13:17.138Z",      "dataLen":42,      "recordNumber":4,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem",      "fields": {            "1": "primkey5",            "2": -5,            "5": "data 25"        },      "primaryKey": "8"   },   {      "operationType":23,      "operationName":"Save seqnum",      "operationNumber":46,      "contextID":37,      "timeStamp":"2019-12-11T09:13:18.155Z",      "sequenceNumber":23,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem"    },   {      "operationType":24,      "operationName":"Create record",      "operationNumber":47,      "contextID":37,      "timeStamp":"2019-12-11T09:13:19.228Z",      "dataLen":570,      "recordNumber":7,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem",      "fields": {            "1": 9,            "2": "test value",            "3": "2003-03-03T00:00:00.000Z",            "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",            "8": "BlobID: 2"       },      "extraData": {          "task_id": 1,          "user_name": "Vanessa Smith",          "user4d_alias": "Default 4D User",          "user4d_id": 1,          "host_name": "iMac-VSmith-0833",          "task_name": "Application process",          "client_version": -1610541776      },      "primaryKey": "9"   }]
```

Note: If you passed Field attribute with **name** in the *fieldAtt* parameter, the "fields" object would look like this:  

```json
...      "fields": {            "ID": 9,            "Field_2": "test value",            "Date_Field": "2003-03-03T00:00:00.000Z",            "Field_4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",            "Field_8": "BlobID: 2"       },...
```

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
* *fields*: object containing the list of field numbers (or field names) along with their values. Any fields with a modified value are logged.  
In case of Blob or picture values, different information is provided based on their storage location:  
   * If the Blob or picture is stored inside the data file, the property will be "BlobID:"+ an internal Blob number, for example: "BlobID:1"  
   * If the Blob or picture is stored outside the data file, the property will be "BlobPath:" + the path for the data, for example: "BlobPath: Table 1/Field 6/Data\_EE12D091535F9748BCE62EDE972A4BA2.jpg"
* *extraData*: user context data, including user name and alias(\*), task name and ID, host machine name, and client version.
* *sequenceNumber*: current number within auto-increment sequence.
* *primaryKey*: primary key value.

(\*) In project databases, the "user4d\_id" property is not returned.

#### Example 

You want to save the current log file in JSON:

```4d
 LOG FILE TO JSON("c:\\4Dv15\\ExportLogs")
```

You want to save a specific log file in JSON with field names:

```4d
 LOG FILE TO JSON("c:\\4Dv15\\ExportLogs";0;"c:\\4Dv15\\Backup\\old_myDB.journal";Field attribute with name)
```

#### System variables and sets 

The **LOG FILE TO JSON** command modifies the value of the OK and Document variables: if the JSON file was correctly saved, OK is set to 1 and Document contains the pathname of the journal file. If you passed "" in the *logPath* parameter and the user canceled the file selection dialog box, OK is set to 0 and Document contains an empty string. If the user selected an invalid file, OK is set to 0 and Document contains the pathname of the invalid file.

#### See also 

[Download HDI database](http://download.4d.com/Demos/4D%5Fv15%5FR4/ExportLogToJSON%5FHDI.zip)  
[INTEGRATE MIRROR LOG FILE](integrate-mirror-log-file.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1352 |
| Thread safe | &check; |
| Modifies variables | OK, Document |



---
id: database-measures
title: Database measures
slug: /commands/database-measures
displayed_sidebar: docs
---

<!--REF #_command_.Database measures.Syntax-->**Database measures** {( *options* )} : Object<!-- END REF-->
<!--REF #_command_.Database measures.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| options | Object | &#8594;  | Return options |
| Function result | Object | &#8592; | Object containing database measures |

<!-- END REF-->

#### Description 

<!--REF #_command_.Database measures.Summary-->The **Database measures** command allows you to get detailed information about 4D database engine events.<!-- END REF--> Returned information includes data read/write access from/to the disk or the memory cache, as well as the use of database indexes, queries and sorts. 

**Database measures** returns a single object that contains all the relevant measures. The *options* object parameter allows you to set options for the returned information. 

##### Overview of the returned object 

The returned object contains a single property named "DB" that has the following basic structure:

```json
{    "DB": {        "diskReadBytes": {…},        "cacheReadBytes": {…},        "cacheMissBytes": {…},        "diskWriteBytes": {…},        "diskReadCount": {…},        "cacheReadCount": {…},        "cacheMissCount": {…},        "diskWriteCount": {…},        "dataSegment1": {…},        "indexSegment": {…},        "tables": {…},        "indexes": {…}    }}
```

This object is made up of eight properties that contain basic measures ("diskReadBytes", "cacheReadBytes", "cacheMissBytes", "diskWriteBytes", "diskReadCount", "cacheReadCount", "cacheMissCount", "diskWriteCount") and additional properties ("dataSegment1", "indexSegment", "tables", "index") that can also contain elementary properties but at a different level and with a different scope (see below).

**Note:** A property is only present inside the object if it receives contents. Properties that do not have any contents are not included in the object. For example, if the database has been opened in read-only mode and indexes have not been used, the returned object will not contain "diskWriteBytes", "diskWriteCount", "indexSegment" or "indexes".

##### Elementary properties 

Elementary properties can be found at different levels in the DB object. They return the same information but at different scopes. Here is a description of the elementary properties:

| **Name**       | **Information returned**        |
| -------------- | ------------------------------- |
| diskReadBytes  | Bytes read from disk            |
| cacheReadBytes | Bytes read from cache           |
| cacheMissBytes | Bytes missed from cache         |
| diskWriteBytes | Bytes written to disk           |
| diskReadCount  | Read accesses from disk         |
| cacheReadCount | Read accesses from cache        |
| cacheMissCount | Read accesses missed from cache |
| diskWriteCount | Write accesses to disk          |

The eight elementary properties all have the same object structure, for example:

```json
"diskReadBytes": {
    "value": 33486473620,
    "history": [        // optional
        {"value": 52564,"time": -1665},
        {"value": 54202,"time": -1649},
            …
    ]
}
```

* "**value**" (number): The "value" property contains a number that represents either a quantity of bytes or a count of accesses. Basically, this value is the sum of the value(s) of the "history" object (even if the "history" object is not present).
* "**history**" (array of objects): The "history" object array is a compilation of event values grouped by second. The "history" property is present only if requested through the *options* parameter (see below). The history array will hold a maximum of 200 items. Each element of the array is itself an object that contains two properties: "value" and "time".  
   * "value" (number): quantity of bytes or accesses handled during the time period designated in the associated "time" property.  
   * "time" (number): number of seconds elapsed since the function has been called. In the example above ("time": -1649) means 1649 seconds ago (or more precisely between 1649 and 1650 seconds ago). During this one-second period, 54,202 bytes have been read on disk.  
   The history array does not contain sequential values (-1650,-1651,-1652, etc.) The previous value is -1665, which means that nothing was read on the disk in the 15-second period between 1650 and 1665.  
   **Note:** By default the array will only contain useful information.  
   Since the maximum size of the array is 200, if the database is used intensively (e.g., something is read every second on the disk), the maximum length of the history will be 200 seconds. On the other hand, if almost nothing happens except, for example, once every 3 minutes, the length of the history will be 600 minutes (3\*200).  
   This example can be represented in the following diagram:  
   ![](../assets/en/commands/pict1510781.en.png)

##### dataSegment1 and indexSegment 

The "dataSegment1" and "indexSegment" properties contain up to four elementary properties (when available): 

```json
"dataSegment1": {    "diskReadBytes": {…},    "diskWriteBytes": {…},    "diskReadCount": {…},    "diskWriteCount": {…}    },"indexSegment": {    "diskReadBytes": {…},    "diskWriteBytes": {…},    "diskReadCount": {…},    "diskWriteCount": {…}    }
```

These properties return the same information as the elementary properties, but detailed for each database file:

* "dataSegment1" represents the .4dd data file on the disk
* "indexSegment" represents the .4dx index file on the disk

For example, you can get the following object:

```json
{
"DB": {
"diskReadBytes": {
    "value": 718260
    },
"diskReadCount": {
    "value": 229
    },

"dataSegment1": {
    "diskReadBytes": {
    "value": 679092
    },
    "diskReadCount": {
    "value": 212
    }
    },
"indexSegment": {
    "diskReadBytes": {
    "value": 39168
    },
    "diskReadCount": {
    "value": 17
    }
}
```

You can figure out how it works by adding up the returned values:

*diskReadBytes.value = dataSegment1.diskReadBytes.value + indexSegment.diskReadBytes.value* 
*diskWriteBytes.value = dataSegment1.diskWriteBytes.value + indexSegment.diskWriteBytes.value* 
*diskReadCount.value = dataSegment1.diskReadCount.value + indexSegment.diskReadCount.value* 
*diskWriteCount.value = dataSegment1.diskWriteCount.value + indexSegment.diskWriteCount.value* 

##### tables 

The "tables" property contains as many properties as there are tables that have been accessed either in read or write mode since the opening of the database. The name of each property is the name of the table involved. For example: 

```json
"tables": {
    "Employees": {…)
    "Companies": {…)
    }
```

Each table objects contains up to 12 properties:

* The first eight properties are the *elementary properties* (see above) with values related to the table involved.
* Two other properties, "records" and "blobs", also have the same eight elementary properties, but concerning only certain field types:  
   * The "records" property concerns all fields of the table (strings, dates, nums, etc.) except for text, pictures and Blobs  
   * The "blobs" property concerns the text, picture and Blob fields of the table.
* One or two additional properties, "fields" and "queries", may also be present depending on the queries and sorts performed on the table concerned:  
   * The "fields" property contains as many "field name" attributes (which are also sub-objects) as the number of fields used for queries or sorts.  
   Each field name object contains:  
         * a "queryCount" object (with or without history, depending on the *options* parameter) if any query has been performed using this field  
         * and/or a "sortCount" object (with or without history, depending on the *options* parameter) if any sort has been performed using this field.  
   This attribute is not based on index use; all types of queries and sorts are taken into account.  
   Example: Since the moment the database was launched, several queries and sorts have been carried out using the *CompID*, *Name* and *FirstName* fields. The returned object contains the following "fields" sub-object (*options* are with path and without history):  
         
   ```json  
   {  
       "DB": {  
           "tables": {  
               "Employees": {  
                   "fields": {  
                       "CompID": {  
                           "queryCount": {  
                               "value": 3  
                           }  
                       },  
                       "Name": {  
                           "queryCount": {  
                               "value": 1  
                           },  
                           "sortCount": {  
                               "value": 3  
                           }  
                       },  
                       "FirstName": {  
                           "sortCount": {  
                               "value": 2  
                           }  
                       }  
   (...)  
   ```  
         
   **Note**:The "fields" attribute is created only if a query or sort has been performed on the table; otherwise this attribute will not be present.  
   * "queries" is an array of objects that provides a description of each query performed on the table. Each element of the array will contain three attributes:  
         * "queryStatement" (string): query string (containing field names but not criteria values). For example: "(Companies.PK\_ID != ?)"  
         * "queryCount" (object):  
                  * "value" (number): number of times the query statement has been executed, regardless of the criteria values.  
                  * "history" (array of objects) (if requested in *options*): "value" and "time" standard history properties  
         * "duration" (object) (if the "value" is >0)  
                  * "value" (number): number of milliseconds  
                  * "history" (array of objects) (if requested in *options*): "value" and "time" standard history properties.  
   Example: Since the moment the database was launched, a single query has been performed on the Employees table (*options* are with path and with history):  

   ```json  
   {  
       "DB": {  
           "tables": {  
               "Employees": {  
                   "queries": [  
                       {  
                           "queryStatement": "(Employees.Name == ?)",  
                           "queryCount": {  
                               "value": 1,  
                               "history": [  
                                   {  
                                       "value": 1,  
                                       "time": -2022  
                                   }  
                               ]  
                           },  
                           "duration": {  
                               "value": 2,  
                               "history": [  
                                   {  
                                       "value": 2,  
                                       "time": -2022  
                                   }  
                               ]  
                           }  
                       },  
   (...)  
   ```  
         
   **Note:** The "queries" attribute is created when at least one query has been performed on the table.

##### indexes 

This is the most complex object. All tables that have been accessed using one or more of their indexes are stored as properties and, inside the properties, the names of the indexes used are also included as properties. Keyword indexes appear separately and their names are followed by "*(Keyword)*". Finally, each index name property object contains the eight elementary properties related to this index as well as up to four sub-objects depending on index use in the database since it was launched (each sub-object only exists if their corresponding operation has been performed at some point since the launch of the database).

Example: Since the moment the database was launched, several indexes of the \[Employees\]EmpLastName field have been solicited. In addition, 2 records were created and 16 were deleted in the \[Companies\] table. This table has a "name" field that is indexed. The table also has been queried and sorted using this field. The resulting object will contain:

```json
"indexes": {
    "Employees": {
        "EmpLastName": {
                    "diskReadBytes": {…},
                    "cacheReadBytes": {…},
                    "cacheMissBytes": {…},
                    "diskWriteBytes": {…},

                    "diskReadCount": {…},
                    "cacheReadCount": {…},
                    "cacheMissCount": {…},
                    "diskWriteCount": {…}
            }
        "EmpLastName (Keyword)": {...},
        "index3Name": {…},
        "index4Name": {…},
        …
        }
        "Companies": {
            "Name": 
            (...)
                "queryCount": {
                    "value": 41
                },
                "sortCount": {
                    "value": 3
                },
                "insertKeyCount": {
                    "value": 2
                },
                "deleteKeyCount": {
                    "value": 16
                }
    table3Name: {…}
}
```

##### options parameter 

The *options* parameter allows you to customize the actual information returned by the command. In *options*, you pass an object that can contain up to three properties: "withHistory", "historyLength", and "path".

| **Property**    | **Type**               | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "withHistory"   | Boolean                | "true" means the history will be returned by the function inside the returned object; "false" means the object returned by the function will not contain any history                                                                                                                                                                                                                                                                                                                                                                      |
| "historyLength" | number                 | Defines the size of the returned history array in seconds(\*).                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| "path"          | string \| string array | Full path of specific property or array of full paths for all specific properties that you want to get. When you pass a string, only the corresponding value is returned in the "DB" object (if the path is valid). Example: "DB.tables.Employees.records.diskWriteBytes". When you pass an array of strings, all the corresponding values are returned in the "DB" object (if the paths are valid). Example: \["DB.tables.Employee.records.diskWriteBytes", "DB.tables.Employee.records.diskReadCount","DB.dataSegment1.diskReadBytes"\] |

(\*) As described above, the history is not stored as a sequence of seconds but only with relevant values. If nothing happens during a couple of seconds or more, nothing will be stored and a gap will appear in the internal history array. "time" can contain, for example, -2, -4, -5, -10, -15, -30 with values 200, 300, 250, 400, 500,150\. If the "historyLength" property value is set to 600 (10 minutes), then the returned array will contain 0, -1, -2, -3 … -599 for time, and only the values of -2, -4, -5, -10, -15, -30 will be filled. All the other values will get 0 (zero) as a value. Also as described above, the only limit of the internal array is the size (200), not the time. This means that if there is low activity for a specific property, the oldest time can be very remote (e.g.: -3600 for one hour ago). It may also contain less than 200 values if the database was just started. In these cases, if the internal history time is more recent than the requested one OR if all the relevant values have already been set in the returned array, then the returned value will be -1\.   

Example: The database has just been started 20 seconds ago and the request history is 60 seconds. The returned values between 0 and -20 will be set with values or zeros, and the other ones will be set with -1\. When a "-1" value is returned, this means that either the request time is too old or the value is no longer in the internal history array (i.e., the 200-item limit has been reached and older values have been removed).

##### About client/server and components 

This command returns information about database usage. This means that it will return a valid object with relevant values only when called:

* in 4D local mode (if called from a component, it returns information about the host database)
* on the server side in client/server mode.

If the command is called from a remote 4D, then the object will be left empty.  
In this context, if you need to get information about the database on the server, the simplest way to perform this action is to create a method with the "Execute on server" option enabled.   
This principle will also work for a component: if the component is used in a 4D local context, it will return information about the host database; in a 4D remote context, it will return information about the server database. 

#### Example 1 

You want to have the history logged in the returned object:

```4d
 var $param : Object
 var $measures : Object
 OB SET($param;"withHistory";True)
 $measures:=Database measures($param)
```

#### Example 2 

We only want to know the global number of bytes read in the cache ("cacheReadBytes"):

```4d
 var $oStats : Object
 var $oParams : Object
 OB SET($oParams;"path";"DB.cacheReadBytes")
 $oStats:=Database measures($oParams)
```

The object returned contains, for example:

```json
{
    "DB": {
        "cacheReadBytes": {
            "value": 9516637
        }
    }
}
```

#### Example 3 

We want to request measures for cache bytes read within the last two minutes:

```4d
 var $oParams : Object
 var $measures : Object
 OB SET($oParams;"path";"DB.cacheReadBytes")
 OB SET($oParams;"withHistory";True)
 OB SET($oParams;"historyLength";2*60)
 $measures:=Database measures($oParams)
```


#### Properties

|  |  |
| --- | --- |
| Command number | 1314 |
| Thread safe | &check; |



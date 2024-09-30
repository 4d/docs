---
id: get-database-measures
title: Get database measures
slug: /commands/get-database-measures
displayed_sidebar: docs
---

<!--REF #_command_.Get database measures.Syntax-->**Get database measures** {( *options* )} -> Function result<!-- END REF-->
<!--REF #_command_.Get database measures.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| options | Object | &#x1F852; | Return options |
| Function result | Object | &#x1F850; | Object containing database measures |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get database measures.Summary-->The **Get database measures** command allows you to get detailed information about 4D database engine events.<!-- END REF--> Returned information includes data read/write access from/to the disk or the memory cache, as well as the use of database indexes, queries and sorts. 

**Get database measures** returns a single object that contains all the relevant measures. The *options* object parameter allows you to set options for the returned information. 

##### Overview of the returned object 

The returned object contains a single property named "DB" that has the following basic structure:

```RAW
{    "DB": {        "diskReadBytes": {…},        "cacheReadBytes": {…},        "cacheMissBytes": {…},        "diskWriteBytes": {…},        "diskReadCount": {…},        "cacheReadCount": {…},        "cacheMissCount": {…},        "diskWriteCount": {…},        "dataSegment1": {…},        "indexSegment": {…},        "tables": {…},        "indexes": {…}    }}
```

This object is made up of eight properties that contain basic measures ("diskReadBytes", "cacheReadBytes", "cacheMissBytes", "diskWriteBytes", "diskReadCount", "cacheReadCount", "cacheMissCount", "diskWriteCount") and additional properties ("dataSegment1", "indexSegment", "tables", "index") that can also contain elementary properties but at a different level and with a different scope (see below).

**Note:** A property is only present inside the object if it receives contents. Properties that do not have any contents are not included in the object. For example, if the database has been opened in read-only mode and indexes have not been used, the returned object will not contain "diskWriteBytes", "diskWriteCount", "indexSegment" or "indexes".

##### Elementary properties 

```undefined
"diskReadBytes": {
    "value": 33486473620,
    "history": [        // optional
        {"value": 52564,"time": -1665},
        {"value": 54202,"time": -1649},
            …
    ]
}
```

##### dataSegment1 and indexSegment 

```undefined
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

##### tables 

```undefined
"tables": {
    "Employees": {…)
    "Companies": {…)
    }
```

##### indexes 

```undefined
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
 $measures:=Get database measures($param)
```

#### Example 2 

```undefined
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
 $measures:=Get database measures($oParams)
```

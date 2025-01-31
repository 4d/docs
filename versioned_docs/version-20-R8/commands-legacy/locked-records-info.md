---
id: locked-records-info
title: Locked records info
slug: /commands/locked-records-info
displayed_sidebar: docs
---

<!--REF #_command_.Locked records info.Syntax-->**Locked records info** ( *aTable* ) : Object<!-- END REF-->
<!--REF #_command_.Locked records info.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table where you want to get locked records |
| Function result | Object | &#8592; | Description of locked records (if any) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Locked records info.Summary-->The **Locked records info** command returns an [object](# "Data structured as a native 4D object") containing different information about the currently locked record(s) in *aTable*.<!-- END REF-->The command works only with 4D and 4D Server. It returns an invalid object when called from 4D Remote. However, it can be called in this context if the "Execute on server" option is activated for the calling method. In this case, the object returned will contain information about the server. When called from a component, it always applies to the host database.

The returned object contains a "records" property which is a collection of objects:

```RAW
{    "records": [        description object,        (…)    ]}
```

Each "description object" collection element identifies a locked record in the specified table. It contains different properties depending on the origin of the lock (4D process or REST API).

* If the record was locked by a 4D process:

| **Property**      | **Type**      | **Description**                                                                                                                                                                                                                                                                         |
| ----------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| contextID         | UUID (String) | UUID of the database context responsible for the lock                                                                                                                                                                                                                                   |
| contextAttributes | Object        | Object containing information similar to the [LOCKED BY](locked-by.md) command but applied to the record, the difference being that **Locked records info** returns the user name defined in the system and not that of the 4D user, as well as additional information (see below). |
| recordNumber      | Integer       | Record number of the locked record                                                                                                                                                                                                                                                      |

The *contextAttributes* object is made up of the following properties:

| **Property**                                                                               | **Type**      | **Description**                                                                                               |
| ------------------------------------------------------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------- |
| task\_id                                                                                   | Number        | Process reference number                                                                                      |
| user\_name                                                                                 | Text        | User name defined by operating system                                                                         |
| user4d\_alias                                                                              | Text        | User alias defined with [SET USER ALIAS](set-user-alias.md), otherwise user name in the 4D database directory |
| user4d\_id                                                                                 | Number        | 4D user number(\*)                                                                                            |
| host\_name                                                                                 | Text        | Name of host machine                                                                                          |
| task\_name                                                                                 | Text        | Process name                                                                                                  |
| client\_version                                                                            | Number        | Version of client application                                                                                 |
| *Only when command is executed on 4D Server and if record locking comes from a remote 4D:* |               |                                                                                                               |
| is\_remote\_context                                                                        | Boolean       | Indicates whether a remote 4D is the origin of the locking (always *true* since otherwise it is not present)  |
| client\_uid                                                                                | UUID (String) | UUID of 4D remote at the origin of the locking                                                                |

(\*) *Only returned in binary databases.* You can get the 4D user name from the value of *user4d\_id* by using the following code:  

```4d
 GET USER LIST($arrNames;$arrIDs)
 $User4DName:=Find in array($arrIDs;user4d_id)
```

* If the record was locked by the *$lock REST request* (at session level):

| **Property** | **Type** | **Description**                                                                                                                                     |
| ------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| host         | Text   | URL with which the entity has been locked, e.g. "127.0.0.1:8044"                                                                                    |
| IPAddr       | Text   | IP address used in the URL with which the entity has been locked, e.g. "127.0.0.1"                                                                  |
| recordNumber | Integer  | Record number of the locked record                                                                                                                  |
| userAgent    | Text   | User agent of the locker, e.g. "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36" |

#### Example 

You execute the following code:

```4d
 $vOlocked :=Locked records info([Table])
```

If two records were locked in the \[Table\] table, the following object is returned in $vOlocked:

```RAW
{    "records": [        {            "contextID": "A9BB84C0E57349E089FA44E04C0F2F25",            "contextAttributes": {                "task_id": 8,                "user_name": "roland",                "user4d_id": 1,                "host_name": "iMac de roland",                "task_name": "P_RandomLock",                "client_version": -1342106592            },            "recordNumber": 1        },        {            "contextID": "8916338D1B8A4D86B857D92F593CCAC3",            "contextAttributes": {                "task_id": 9,                "user_name": "roland",                "user4d_id": 1,                "host_name": "iMac de roland",                "task_name": "P_RandomLock",                "client_version": -1342106592            },            "recordNumber": 2        }    ]}
```

If the code is executed on a 4D Server and the locking is caused by a remote client machine, the following object is returned in $vOlocked:

```json
{    "records": [        {            "contextID": "B0EC087DC2FA704496C0EA15DC011D1C",            "contextAttributes": {                "task_id": 2,                 "user_name": "achim",                 "user4d_id": 1,                "host_name": "achim-pcwin",                "task_name": "P_RandomLock",                 "is_remote_context": true,                "client_uid": "0696E66F6CD731468E6XXX581A87554A",                "client_version": -268364752            },            "recordNumber": 1        }    ]}
```

#### See also 

[Locked](locked.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1316 |
| Thread safe | &check; |



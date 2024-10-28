---
id: json-to-selection
title: JSON TO SELECTION
slug: /commands/json-to-selection
displayed_sidebar: docs
---

<!--REF #_command_.JSON TO SELECTION.Syntax-->**JSON TO SELECTION** ( *aTable* ; *jsonArray* )<!-- END REF-->
<!--REF #_command_.JSON TO SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | 4D table into which elements are copied |
| jsonArray | Text | &#8594;  | Array of objects in JSON |

<!-- END REF-->

#### Description 

<!--REF #_command_.JSON TO SELECTION.Summary-->The **JSON TO SELECTION** command copies the contents of an array of JSON objects *jsonArray* to the selection of records of *aTable*.<!-- END REF--> 

The *jsonArray* parameter is a [text](# "A character string that may contain from 0 to 2 GB of text") representing an array of objects formatted in JSON and containing one or more elements. The expected syntax is of the type:

```json
"[{"attribute1":"value1","attribute2":"value2",...},...,{"attribute1":"valueN","attribute2":"valueN",...}]"
```

If a selection exists for *aTable* at the time of the call, the elements of the JSON array are copied into the records based on the order of the array and the order of the records. If the number of elements defined in the JSON array is greater than the number of records in the current selection, new records are created. The records, whether they are new or existing, are automatically saved.

**Note:** This command supports Object type fields: JSON data is converted automatically. 

**Warning:** Since **JSON TO SELECTION** replaces any information found in the existing records, this command must be used with caution. 

If a record is locked by another process during the execution of the command, it is not modified. All the locked records are placed in the *The LockedSet System Set*. After the execution of **JSON TO SELECTION**, you can test whether the *LockedSet* set contains any records that were locked.

#### Example 

Using the **JSON TO SELECTION** command to add records to the \[Company\] table: 

```4d
 var $Object1;$Object2;$Object3;$Object4 : Object
 var $ObjectString : Text
 ARRAY OBJECT($arrayObject;0)
 
 OB SET($Object1;"ID";"200";"Company Name";"4D SAS";"City";"Clichy")
 APPEND TO ARRAY($arrayObject;$Object1)
 
 OB SET($Object2;"ID";"201";"Company Name";"APPLE";"City";"Paris")
 APPEND TO ARRAY($arrayObject;$Object2)
 
 OB SET($Object3;"ID";"202";"Company Name";"IBM";"City";"London")
 APPEND TO ARRAY($arrayObject;$Object3)
 
 OB SET($Object4;"ID";"203";"Company Name";"MICROSOFT";"City";"New York")
 APPEND TO ARRAY($arrayObject;$Object4)
 
 $ObjectString:=JSON Stringify array($arrayObject)
 
  // $ObjectString = "[{"ID":"200","City":"Clichy","Company Name":"4D
  // SAS"},{"ID":"201","City":"Paris","Company Name":"APPLE"},{"ID":"202",
  //"City":"London","Company Name":"IBM"},{"ID":"203","City":"New
  //York","Company Name":"MICROSOFT"}]"
 
 JSON TO SELECTION([Company];$ObjectString)
  // You create 4 records in the [Company] table, filling the ID,
  //Company name and city fields
```

#### See also 

[Selection to JSON](selection-to-json.md)  
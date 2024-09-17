---
id: json-to-selection
title: JSON TO SELECTION
displayed_sidebar: docs
---

<!--REF #_command_.JSON TO SELECTION.Syntax-->**JSON TO SELECTION** ( *aTable* ; *jsonArray* )<!-- END REF-->
<!--REF #_command_.JSON TO SELECTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | -> | 4D table into which elements are copied |
| jsonArray | Text | -> | Array of objects in JSON |

<!-- END REF-->

#### Description 

```undefined
"[{"attribute1":"value1","attribute2":"value2",...},...,{"attribute1":"valueN","attribute2":"valueN",...}]"
```

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
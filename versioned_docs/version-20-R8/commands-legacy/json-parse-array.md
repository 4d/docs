---
id: json-parse-array
title: JSON PARSE ARRAY
slug: /commands/json-parse-array
displayed_sidebar: docs
---

<!--REF #_command_.JSON PARSE ARRAY.Syntax-->**JSON PARSE ARRAY** ( *jsonString* ; *array* )<!-- END REF-->
<!--REF #_command_.JSON PARSE ARRAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| jsonText | Text | &#8594;  | JSON string to parse |
| array | Array | &#8592; | Array containing result from parsing of JSON string |

<!-- END REF-->

#### Description 

<!--REF #_command_.JSON PARSE ARRAY.Summary-->The **JSON PARSE ARRAY** command parses the contents of a JSON-formatted string and puts the data extracted into the *array* parameter.<!-- END REF--> This command deserializes the JSON data; it performs the opposite action of the [JSON Stringify array](json-stringify-array.md) command.

In *jsonString*, pass the JSON-formatted string whose contents you want to parse. This string must be formatted correctly, otherwise a parsing error is generated. 

In *array*, pass an array of the desired type to receive the parsing results. 

**Note:** Starting with 4D v16 R4, **JSON PARSE ARRAY** can usually be replaced by a call to [JSON Parse](json-parse.md) that returns a **collection**. Collections are based on JSON arrays and allow to store data of mixed types, which provides more flexibility than arrays. 

#### Example 

In this example, data from fields of the records in a table are extracted and then placed in object arrays:

```4d
 var $ref : Object
 ARRAY OBJECT($sel;0)
 ARRAY OBJECT($sel2;0)
 var v_String : Text
 
 OB SET($ref;"name";->[Company]Company Name)
 OB SET($ref;"city";->[Company]City)
 
 While(Not(End selection([Company])))
    $ref_company:=OB Copy($ref;True)
    APPEND TO ARRAY($sel;$ref_company)
  // $sel{1}={"name":"4D SAS","city":"Clichy"}
  // $sel{2}={"name":"MyComp","city":"Lyon"}
  // ...
    NEXT RECORD([Company])
 End while
 
 v_String:=JSON Stringify array($sel)
  // v_String= [{"name":"4D SAS","city":"Clichy"},{"name":"MyComp","city":"Lyon"}...]
 JSON PARSE ARRAY(v_String;$sel2)
  // $sel2{1}={"name":"4D SAS","city":"Clichy"}
  // $sel2{2}={"name":"MyComp","city":"Lyon"}
  //...
```

#### See also 

[JSON Parse](json-parse.md)  
[JSON Stringify array](json-stringify-array.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1219 |
| Thread safe | &check; |



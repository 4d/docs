---
id: json-parse
title: JSON Parse
slug: /commands/json-parse
displayed_sidebar: docs
---

<!--REF #_command_.JSON Parse.Syntax-->**JSON Parse** ( *jsonString* {; *type*}{; *} ) -> Function result<!-- END REF-->
<!--REF #_command_.JSON Parse.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| jsonString | String | &#x1F852; | JSON string to parse |
| type | Longint | &#x1F852; | Type in which to convert the values |
| * | Operator | &#x1F852; | Adds line position and offset of each property if returned value is an object |
| Function result | Mixed, Object | &#x1F850; | Values extracted from JSON string |

<!-- END REF-->

#### Description 

```undefined
__symbols:{//object description
   myAtt.mySubAtt...:{ //property path
      line:10, //line number of the property 
      offset:35 //offset of the property from the beginning of the line
      }
   }
```

#### Example 1 

Examples of simple conversions:

```4d
 var $r : Real
 $r:=JSON Parse("42.17") //$r = 42,17 (Real)
 
 var $el : Integer
 $el:=JSON Parse("120.13";Is longint) //$el=120
 
 var $t : Text
 $t:=JSON Parse("\"Year 42\"";Is text) // $t="Year 42" (text)
 
 var $o : Object
 $o:=JSON Parse("{\"name\":\"john\"}")
  // $o = {"name":"john"} (4D object)
 
 var $b : Boolean
 $b:=JSON Parse("{\"manager\":true}";Is Boolean) // $b=true
 
 var $h : Time
 $h:=JSON Parse("5120";Is time) //$h=01:25:20
```

#### Example 2 

Examples of converting date type data: 

```4d
 $test:=JSON Parse("\"1990-12-25T12:00:00Z\"")
  // $test="1990-12-25T12:00:00Z"
 var $date;$date2;$date3 : Date
 $date:=JSON Parse("\"2008-01-01T12:00:00Z\"";Is date)
  //$date=01/01/08
 $date2:=JSON Parse("\"2017-07-13T23:00:00.000Z\"";Is date)
  //$date2=14/07/17 (Paris time zone)
 SET DATABASE PARAMETER(Dates inside objects;String type without time zone)
 $date3:=JSON Parse("\"2017-07-13T23:00:00.000Z\"";Is date)
  //$date3=13/07/17
```

#### Example 3 

If the current date storage setting is "date type", you can write:

```4d
 var $o : Object
 var $json : Text
 var $birthday : Date
 
 $json:="{\"name\":\"Marcus\",\"birthday\":\"2017-10-16\"}"
 $o:=JSON Parse($json)
 $birthday:=$o.birthday
  //$birthday=16/10/17
```

**Note:** For more information on this setting, please refer to the "Use date type instead of ISO date format in objects" option in the *Compatibility page*. 

#### Example 4 

This example shows the combined use of the [JSON Stringify](json-stringify.md) and **JSON Parse** commands:

```4d
 var $JSONContact : Text
 var $Contact;$Contact2 : Object
 $Contact:=New object("name";"Monroe";"firstname";"Alan")
 
  // JSON Stringify: conversion of an object into a JSON string
 $JSONContact:=JSON Stringify($Contact)
 
  // JSON Parse: conversion of JSON string into a new object
 $Contact2:=JSON Parse($JSONContact)
```

#### Example 5 

You want to create a 4D collection from a JSON array:

```4d
 var $myCol : Collection
 $myCol:=JSON Parse("[\"Monday\",10,\"Tuesday\",11,\"Wednesday\",12,false]")
```

#### Example 6 

```undefined
{
    "alpha": 4552,
    "beta": [
        {
            "echo": 45,
            "delta": "text1" 
        },
        {
            "echo": 52,
            "golf": "text2" 
        }
    ]
}
```

#### See also 

*Field and Variable Types*  
[JSON PARSE ARRAY](json-parse-array.md)  
[JSON Stringify](json-stringify.md)  
[JSON Validate](json-validate.md)  
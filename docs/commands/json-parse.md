---
id: json-parse
title: JSON Parse
displayed_sidebar: docs
---

<!--REF #_command_.JSON Parse.Syntax-->**JSON Parse** ( *jsonString* {; *type*}{; *} ) -> Function result<!-- END REF-->
<!--REF #_command_.JSON Parse.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| jsonString | String | -> | JSON string to parse |
| type | Longint | -> | Type in which to convert the values |
| * | Operator | -> | Adds line position and offset of each property if returned value is an object |
| Function result | Mixed, Object | <- | Values extracted from JSON string |

<!-- END REF-->

#### Description 

<!--REF #_command_.JSON Parse.Summary-->The **JSON Parse** command parses the contents of a JSON-formatted string and extracts values that you can store in a 4D field or variable.<!-- END REF--> This command deserializes JSON data; it performs the opposite action of the [JSON Stringify](json-stringify.md) command.

In *jsonString*, pass the JSON-formatted string whose contents you want to parse. This string must be formatted correctly, otherwise a parsing error is generated. **JSON Parse** can therefore be used to validate JSON strings. 

**Note:** If you use pointers, you must call the [JSON Stringify](json-stringify.md) command before calling **JSON Parse**. 

By default, if you omit the *type* parameter, 4D attempts to convert the value obtained into the type of the variable or field used to store the results (if one is defined). Otherwise, 4D attempts to infer its type. You can also force the type interpretation by passing the *type* parameter: pass one of the following constants, available in the [Field and Variable Types](/4Dv20R6/4D/20-R6/Field-and-Variable-Types.302-6958439.en.html) theme:

| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| Is Boolean    | Longint | 6     |
| Is collection | Longint | 42    |
| Is date       | Longint | 4     |
| Is longint    | Longint | 9     |
| Is object     | Longint | 38    |
| Is real       | Longint | 1     |
| Is text       | Longint | 2     |
| Is time       | Longint | 11    |

**Notes:** 

* Real type values must be included in the range ±10.421e±10
* In text type values, all special characters must be escaped, including quotes (see examples)
* By default when you use the Is date constant, the command considers that a date string contains a local time and not GMT. You can modify this setting using the Dates inside objects selector of the [SET DATABASE PARAMETER](set-database-parameter.md) command.
* Starting with 4D v16 R6, if the current date storage setting is "date type", JSON date strings in "YYYY-MM-DD" format are automatically returned as date values by the **JSON Parse** command. For more information on this setting, please refer to the "Use date type instead of ISO date format in objects" option in the [Compatibility page](/4Dv20R6/4D/20-R6/Compatibility-page.300-7003469.en.html).
* Time type values can be returned from numbers in strings. By default, the parsed value is considered a number of seconds.

If you pass the *\** optional parameter and if the *jsonString* parameter represents an object, the returned object contains an additional property named *\_\_symbols* that provides path, line position, and line offset of each property and sub-property of the object. This information can be useful for debugging purposes. The structure of the *\_\_symbols* property is: 

__symbols:{//object description
   myAtt.mySubAtt...:{ //property path
      line:10, //line number of the property 
      offset:35 //offset of the property from the beginning of the line
      }
   }

**Note:** The *\** parameter is ignored if the returned value is not of the object *type*.

#### Example 1 

Examples of simple conversions:

```4d
 C_REAL($r)

 $r:=JSON Parse("42.17") //$r = 42,17 (Real)
 

 C_LONGINT($el)

 $el:=JSON Parse("120.13";Is longint) //$el=120
 

 C_TEXT($t)

 $t:=JSON Parse("\"Year 42\"";Is text) // $t="Year 42" (text)
 

 C_OBJECT($o)

 $o:=JSON Parse("{\"name\":\"john\"}")

  // $o = {"name":"john"} (4D object)
 

 C_BOOLEAN($b)

 $b:=JSON Parse("{\"manager\":true}";Is Boolean) // $b=true
 

 C_TIME($h)

 $h:=JSON Parse("5120";Is time) //$h=01:25:20
```

#### Example 2 

Examples of converting date type data: 

```4d
 $test:=JSON Parse("\"1990-12-25T12:00:00Z\"")

  // $test="1990-12-25T12:00:00Z"

 C_DATE($date;$date2;$date3)

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
 C_OBJECT($o)

 C_TEXT($json)

 C_DATE($birthday)
 

 $json:="{\"name\":\"Marcus\",\"birthday\":\"2017-10-16\"}"

 $o:=JSON Parse($json)

 $birthday:=$o.birthday

  //$birthday=16/10/17
```

**Note:** For more information on this setting, please refer to the "Use date type instead of ISO date format in objects" option in the [Compatibility page](/4Dv20R6/4D/20-R6/Compatibility-page.300-7003469.en.html). 

#### Example 4 

This example shows the combined use of the [JSON Stringify](json-stringify.md) and **JSON Parse** commands:

```4d
 C_TEXT($JSONContact)

 C_OBJECT($Contact;$Contact2)

 $Contact:=New object("name";"Monroe";"firstname";"Alan")
 

  // JSON Stringify: conversion of an object into a JSON string

 $JSONContact:=JSON Stringify($Contact)
 

  // JSON Parse: conversion of JSON string into a new object

 $Contact2:=JSON Parse($JSONContact)
```

#### Example 5 

You want to create a 4D collection from a JSON array:

```4d
 C_COLLECTION($myCol)

 $myCol:=JSON Parse("[\"Monday\",10,\"Tuesday\",11,\"Wednesday\",12,false]")
```

#### Example 6 

You want to parse the following string and get line position and offset of each property:

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

You can write:

```4d
 C_OBJECT($obInfo)

 $obInfo=JSON Parse("json_string";Is object;*) //* to get the __symbols property

  //in the returned $obInfo object
```

The *$obInfo* object contains:

{alpha:4552,
beta:[{echo:45,delta:text1},{echo:52,golf:text2}],
__symbols:{alpha:{line:2,offset:4},
beta:{line:3,offset:4},
beta[0].echo:{line:5,offset:12},
beta[0].delta:{line:6,offset:12},
beta[1].echo:{line:9,offset:12},
beta[1].golf:{line:10,offset:12}}}

#### See also 
[Field and Variable Types](../../4D/20-R6/Field-and-Variable-Types.302-6958439.en.html)  
[JSON PARSE ARRAY](json-parse-array.md)  
[JSON Stringify](json-stringify.md)  
[JSON Validate](json-validate.md)  
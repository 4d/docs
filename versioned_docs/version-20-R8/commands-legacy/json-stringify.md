---
id: json-stringify
title: JSON Stringify
slug: /commands/json-stringify
displayed_sidebar: docs
---

<!--REF #_command_.JSON Stringify.Syntax-->**JSON Stringify** ( *value* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.JSON Stringify.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| value | Object, any | &#8594;  | Data to convert into JSON string |
| * | Operator | &#8594;  | Pretty printing |
| Function result | Text | &#8592; | String containing serialized JSON text |

<!-- END REF-->

#### Description 

<!--REF #_command_.JSON Stringify.Summary-->The **JSON Stringify** command converts the *value* parameter into a JSON string.<!-- END REF--> This command performs the opposite action of the [JSON Parse](json-parse.md) command.

Pass the data to be serialized in *value*. It can be expressed in scalar form (string, number, date or time) or by means of a 4D object or collection. 

**Note:** 4D dates will be converted either in "yyyy-mm-dd" or "YYYY-MM-DDThh:mm:sssZ" format according to the current database date setting (see the "Use date type instead of ISO date format in objects" option in the *Compatibility page*).

In the case of an object or a collection, you can include all types of values (see the *JSON data types* paragraph), with respect to the following JSON rules:

* String values must be enclosed in quotes. All Unicode character can be used except for special characters that must be preceded by a backslash.
* Numbers: interval of ±10.421e±10
* Booleans: "true" or "false" strings
* Dates: Text type in "yyyy-mm-dd" or "\\"YYYY-MM-DDTHH:mm:ssZ"\\" format, according to the current database date setting (see above).
* Times: Real type (number of seconds by default)  
**Notes:**  
   * Picture attributes are converted to the following string: "\[object Picture\]".  
   * Pointers to a field, variable or array are evaluated when stringified

You can pass the optional *\** parameter to include formatting characters in the resulting string. This improves the presentation of JSON data (known as pretty formatting).

#### Example 1 

Conversion of scalar values:

```4d
 $vc:=JSON Stringify("Eureka!") // "Eureka!"
 $vel:=JSON Stringify(120) // "120"
 
 $vh:=JSON Stringify(?20:00:00?) // "72000" seconds since midnight
 SET DATABASE PARAMETER(Times inside objects;Times in milliseconds)
 $vhms:=JSON Stringify(?20:00:00?) // "72000000" milliseconds since midnight
 
 $vd:=JSON Stringify(!28/08/2013!) // "2013-08-27T22:00:00.000Z" (Paris timezone)
 SET DATABASE PARAMETER(Dates inside objects;String type without time zone)
 $vdd:=JSON Stringify(!28/08/2013!) // "2013-08-28T00:00:00.000Z"
```

#### Example 2 

Conversion of a string containing special characters:

```4d
 $s:=JSON Stringify("{\"name\":\"john\"}")
  // $s="{\\"name\\":\\"john\\"}"
 $p:=JSON Parse($s)
  // $p={"name":"john"}
```

#### Example 3 

Examples of serializing a 4D object with and without the *\** parameter:

```4d
 var $MyContact : Text
 var $MyPContact : Text
 var $Contact;$Children : Object
 OB SET($Contact;"lastname";"Monroe";"firstname";"Alan")
 OB SET($Children;"firstname";"Jim";"age";"12")
 OB SET($Contact;"children";$Children)
 $MyContact:=JSON Stringify($Contact)
 $MyPContact:=JSON Stringify($Contact;*)
  //$MyContact= {"lastname":"Monroe","firstname":"Alan","children":{"firstname":"John","age":"12"}}
  //$MyPContact= {\n\t"lastname": "Monroe",\n\t"firstname": "Alan",\n\t"children": {\n\t\t"firstname": "John",\n\t\t"age": "12"\n\t}\n}
```

The advantage of this formatting is clear when the JSON is shown in a Web area:

* Standard formatting:  
![](../assets/en/commands/pict1205013.fr.png)
* Pretty formatting:  
![](../assets/en/commands/pict1205011.fr.png)

#### Example 4 

Example using a pointer to a variable:

```4d
 var $MyTestVar : Object
 var $name ;$jsonstring  : Text
 OB SET($MyTestVar;"name";->$name) // object definition
  // $MyTestVar= {"name":"->$name"}
 
 $jsonstring :=JSON Stringify($MyTestVar)
  // $jsonstring ="{"name":""}"
  //...
 
 $name:="Smith"
 $jsonstring :=JSON Stringify($MyTestVar)
  //$jsonstring = "{"name" : "Smith"}"
```

#### Example 5 

Serialization of a 4D object:

```4d
 var $varjsonTextserialized : Text
 var $Contact : Object
 OB SET($Contact;"firstname";"Alan")
 OB SET($Contact;"lastname";"Monroe")
 OB SET($Contact;"age";40)
 OB SET($Contact;"phone";"[555-0100,555-0120]")
 
 $varjsonTextserialized:=JSON Stringify($Contact)
 
  // $varjsonTextserialized = "{"lastname":"Monroe","phone":"[555-0100,
  // 555-0120]","age":40,"firstname":"Alan"}"
```

#### Example 6 

Serialization of a 4D object containing a date value (Paris time zone). The resulting string depends on the current database date settings.

```4d
 var $varjsonTextserialized : Text
 var $Contact : Object
 OB SET($Contact;"name";"Smith";"birthday";!22/10/1975!)
 $varjsonTextserialized:=JSON Stringify($Contact)
```

* If the "Use date type instead of ISO date format in objects" option is not checked:  
```json  
"name":"Smith","birthday":"1975-10-21T22:00:00.000Z"  
```
* If the "Use date type instead of ISO date format in objects" option is checked:  
```json  
"name":"Smith","birthday":"1975-10-22"  
```

**Note:** For more information on this setting, please refer to the *Compatibility page*.

#### Example 7 

Conversion of a collection (Paris time zone). The resulting string depends on the current database date settings.

```4d
 var $myCol : Collection
 var $myTxtCol : Text
 $myCol:=New collection(33;"mike";!28/08/2017!;False)
 $myTxtCol:=JSON Stringify($myCol)
```

* If the "Use date type instead of ISO date format in objects" option is not checked:  
```json  
$myTxtCol="[33,"mike","2017-08-27T22:00:00.000Z",false]"  
```
* If the "Use date type instead of ISO date format in objects" option is checked:  
```json  
$myTxtCol="[33,"mike","2017-08-28",false]"  
```

**Note:** For more information on this option, please refer to the *Compatibility page*.

#### See also 

[JSON Parse](json-parse.md)  
[JSON Stringify array](json-stringify-array.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1217 |
| Thread safe | &check; |



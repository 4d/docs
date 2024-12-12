---
id: get-list-item-parameter-arrays
title: GET LIST ITEM PARAMETER ARRAYS
slug: /commands/get-list-item-parameter-arrays
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Syntax-->**GET LIST ITEM PARAMETER ARRAYS** ( {* ;} *list* ; itemRef | * ; *arrSelection* {; *arrValues*} )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, list is an object name (string)If omitted, list is a list reference number |
| list | Integer, Text | &#8594;  | List reference number (if * omitted) orName of list type object (if * passed) |
| itemRef &#124; * | Longint, Operator | &#8594;  | Item reference number or 0 for the last item appended to the list or * for the current list item |
| arrSelection | Text array | &#8592; | Array of parameter names |
| arrValues | Text array | &#8592; | Array of parameter values |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Summary-->The **GET LIST ITEM PARAMETER ARRAYS** command lets you retrieve all the parameters in a single call (as well as, optionally, their values) that are associated with the *itemRef* item in the hierarchical list whose reference or object name is passed in the *list* parameter.<!-- END REF-->

Parameters associated with items store additional information about each item. They are set using the [SET LIST ITEM PARAMETER](set-list-item-parameter.md) command.

If you pass the first optional *\** parameter, this indicates that *list* is an object name (string) corresponding to a list representation in the form. If you do not pass this parameter, this indicates that *list* is a hierarchical list reference ([ListRef](# "A Longint reference to a hierachical list")). If you use a single list representation or work with structural items (second *\** omitted), you can use either syntax. However, if you use several representations of the same list and work with the current item (second *\** passed), you must use the syntax based on the object name because each representation may have its own current item.

**GET LIST ITEM PARAMETER ARRAYS** returns parameters set for the *itemRef* item in the *arrSelectors* text array. When the *arrValues* text array is passed, the command uses it to return the values associated with these parameters.

*arrValues* must be a text type array. If you have associated values that are not Text (number or Boolean), they are converted to strings (True="1", False="0").

#### Example 

Given the following hierarchical list: 

```4d
 <>HL:=New list
 $ID:=30
 APPEND TO LIST(<>HL;"Martin";$ID)
  //5 parameters
 SET LIST ITEM PARAMETER(<>HL;$ID;"Firstname";"Phil")
 SET LIST ITEM PARAMETER(<>HL;$ID;"Birthday";"01/02/1978")
 SET LIST ITEM PARAMETER(<>HL;$ID;"Male";True) //Boolean
 SET LIST ITEM PARAMETER(<>HL;$ID;"Age";33) //number
 SET LIST ITEM PARAMETER(<>HL;$ID;"City";"Dallas")
```

For more simplicity, the list was associated with a list object having the same name ("<>HL").  
When the item "Martin" is selected in the list, you can retrieve its parameters by executing the following code:

```4d
 ARRAY TEXT(arrParamNames;0)
 GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";*;arrParamNames)
  // arrParamNames{1} contains "Firstname"
  // arrParamNames{2} contains "Birthday"
  // arrParamNames{3} contains "Male"
  // arrParamNames{4} contains "Age"
  // arrParamNames{5} contains "City"
```

If you want to get the parameter values as well, you write:

```4d
 ARRAY TEXT(arrParamNames;0)
 ARRAY TEXT(arrParamValues;0)
 GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";*;arrParamNames;arrParamValues)
  // arrParamValues{1} contains "Phil"
  // arrParamValues{2} contains "01/02/1978"
  // arrParamValues{3} contains "1"
  // arrParamValues{4} contains "33"
  // arrParamValues{5} contains "Dallas"
```

#### See also 

[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1195 |
| Thread safe | &cross; |



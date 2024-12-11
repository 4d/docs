---
id: wa-execute-javascript-function
title: WA EXECUTE JAVASCRIPT FUNCTION
slug: /commands/wa-execute-javascript-function
displayed_sidebar: docs
---

<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Syntax-->**WA EXECUTE JAVASCRIPT FUNCTION** ( {* ;} *object* ; *jsFunction* ; result|* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| jsFunction | Text | &#8594;  | Name of JavaScript function to execute |
| result&#124;* | Variable | &#8594;  | * for a function with no result or |
| &#8592; | Function result (if expected) |
| param | Text, Number, Date, Object, Collection | &#8594;  | Parameter(s) to pass to function |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Summary-->The WA EXECUTE JAVASCRIPT FUNCTION command executes, in the Web area designated by the *\** and *object* parameters, the JavaScript function *jsFunction* and optionally returns its result in the *result* parameter.<!-- END REF-->

If the function does not return a result, pass *\** in the *result* parameter.

You can pass one or more parameters containing the parameters of the function in *param*.

The command supports several types of parameters for both input (*param*) and output (*result*). You can pass and retrieve data of the string, number, date, object and collection types. If the parameter type is not defined, the text type is used by default.

**Warning:** Using this command to call directly a JavaScript function that displays a dialog (**alert()**, **print().**..) is not recommended since the user cannot interact with the Web area while the 4D code is running. If you need to implement such interface, for example you can call **setTimeout(function(){alert();}, 50))** to let the execution of the 4D code finish and allow user interaction. 

#### Example 1 

Calling a JavaScript function with 3 parameters:

```4d
 $JavaScriptFunction:="TheFunctionToBeExecuted"
 $Param1:="10"
 $Param2:="true"
 $Param3:="1,000.2" //note "," as thousands separator and "." as the decimal separator
 
 WA EXECUTE JAVASCRIPT FUNCTION(MyWArea;$JavaScriptFunction;$Result;$Param1;$Param2;$Param3)
```

#### Example 2 

The "getCustomerInfo" JavaScript function receive a number ID as parameter and returns an object:

```4d
 var $Result : Object
 var $ID : Integer
 $ID:=1000
 WA EXECUTE JAVASCRIPT FUNCTION(*,"WA";"getCustomerInfo";$Result;$ID)
```

#### See also 

[WA Evaluate JavaScript](wa-evaluate-javascript.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1043 |
| Thread safe | &check; |
| Forbidden on the server ||



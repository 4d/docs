---
id: wa-execute-javascript-function
title: WA EXECUTE JAVASCRIPT FUNCTION
slug: /commands/wa-execute-javascript-function
displayed_sidebar: docs
---

<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Syntax-->**WA EXECUTE JAVASCRIPT FUNCTION** ( * ; *object* : Text ; *jsFunction* : Text ; *result* : Variable {; *...param* : any} )<br/>**WA EXECUTE JAVASCRIPT FUNCTION** ( *object* : Field, Variable ; *jsFunction* : Text ; *result* : Variable {; *...param* : any} )<br/>**WA EXECUTE JAVASCRIPT FUNCTION** ( * ; *object* : Text ; *jsFunction* : Text ; * {; *...param* : any} )<br/>**WA EXECUTE JAVASCRIPT FUNCTION** ( *object* : Field, Variable ; *jsFunction* : Text ; * {; *...param* : any} )<!-- END REF-->
<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| jsFunction | Text | &#8594;  | Name of JavaScript function to execute |
| result | Variable | &#8592; | Function result (if expected) |
| * | Operator | &#8594;  | Function with no result |
| param | any | &#8594;  | Parameter(s) to pass to function |

<!-- END REF-->

## Description 

<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Summary-->The WA EXECUTE JAVASCRIPT FUNCTION command executes, in the Web area designated by the *\** and *object* parameters, the JavaScript function *jsFunction* and optionally returns its result in the *result* parameter.<!-- END REF-->

If the function does not return a result, pass *\** in the *result* parameter.

You can pass one or more parameters containing the parameters of the function in *param*.

The command supports several types of parameters for both input (*param*) and output (*result*). You can pass and retrieve data of the string, number, date, object and collection types. If the parameter type is not defined, the text type is used by default.

**Warning:** Using this command to call directly a JavaScript function that displays a dialog (**alert()**, **print().**..) is not recommended since the user cannot interact with the Web area while the 4D code is running. If you need to implement such interface, for example you can call **setTimeout(function(){alert();}, 50))** to let the execution of the 4D code finish and allow user interaction. 

## Example 1 

Calling a JavaScript function with 3 parameters:

```4d
 $JavaScriptFunction:="TheFunctionToBeExecuted"
 $Param1:="10"
 $Param2:="true"
 $Param3:="1,000.2" //note "," as thousands separator and "." as the decimal separator
 
 WA EXECUTE JAVASCRIPT FUNCTION(MyWArea;$JavaScriptFunction;$Result;$Param1;$Param2;$Param3)
```

## Example 2 

The "getCustomerInfo" JavaScript function receive a number ID as parameter and returns an object:

```4d
 var $Result : Object
 var $ID : Integer
 $ID:=1000
 WA EXECUTE JAVASCRIPT FUNCTION(*,"WA";"getCustomerInfo";$Result;$ID)
```

## Example 3

The `WA EXECUTE JAVASCRIPT FUNCTION` command can be used to update [Qodly sources](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/qodlySources) from a [Qodly page embedded in a Web area](../FormObjects/webArea_overview.md#displaying-qodly-pages). 


```4d
    // Set local datasource in a specific page
var $Source;$Value;$Page;$Result : Text
$Value:="New Value"
$Source:="title" // title is the name of string datasource
$Main:="Main" // Main is name of the Qodly page
// the namespace is sent as null, as the it's a local source
WA EXECUTE JAVASCRIPT FUNCTION(*;"WA";"Qodly.setSource";$Result;$Source;$Value;Null;$Page)
```

```4d
    //Set shared datasource
var $Source;$Value;$Namespace;$Result : Text
$Value:="New Value"
$Source:="title" // `title` is the name of string datasource,
$Namespace:="shared" // `shared` is the namespace of the qodly source
// Since $NameSpace is defined no need to add the $Page arguments
WA EXECUTE JAVASCRIPT FUNCTION(*;"WA";"Qodly.setSource";$Result;$Source;$Value;$Namespace)
```

```4d
    //Set current page local datasource
var $Source;$Value;$Result : Text
$Value:="New Value"
$Source:="title" // `title` is the name of string datasource,
WA EXECUTE JAVASCRIPT FUNCTION(*;"WA";"Qodly.setSource";$Result;$Source;$Value)
```


## See also 

[Enhance your Desktop Interface with Web widgets using 4D Qodly Pro](https://blog.4d.com/build-modern-hybrid-desktop-apps-with-4d-and-qodly-pro/) (blog post)<br/>
[WA Evaluate JavaScript](wa-evaluate-javascript.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 1043 |
| Thread safe | no |



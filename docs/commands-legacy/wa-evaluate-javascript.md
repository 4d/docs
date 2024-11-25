---
id: wa-evaluate-javascript
title: WA Evaluate JavaScript
slug: /commands/wa-evaluate-javascript
displayed_sidebar: docs
---

<!--REF #_command_.WA Evaluate JavaScript.Syntax-->**WA Evaluate JavaScript** ( {* ;} *object* ; *jsCode* {; *type*} )  : any<!-- END REF-->
<!--REF #_command_.WA Evaluate JavaScript.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| jsCode | Text | &#8594;  | JavaScript code |
| type | Integer | &#8594;  | Type into which to convert result |
| Function result | Date, Object, Pointer, Real, Text, Time | &#8592; | Result of evaluation |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WA Evaluate JavaScript.Summary-->The WA Evaluate JavaScript command executes, in the Web area designated by the *\** and *object* parameters, the JavaScript code passed in *jsCode* and returns the result.<!-- END REF--> This command must be called after the page is loaded (the On End URL Loading form event must have been generated).

By default, the command returns values as strings. You can use the optional *type* parameter to specify typing for the value returned. To do this, pass one of the following constants, found in the "*Field and Variable Types*" theme:

| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| Is Boolean    | Integer | 6     |
| Is collection | Integer | 42    |
| Is date       | Integer | 4     |
| Is longint    | Integer | 9     |
| Is object     | Integer | 38    |
| Is real       | Integer | 1     |
| Is text       | Integer | 2     |
| Is time       | Integer | 11    |

**Warning**: Using this command to call directly a JavaScript function that displays a dialog (**alert()**, **print()**...) is not recommended since the user cannot interact with the Web area while the 4D code is running. If you need to implement such interface, for example you can call **setTimeout(function(){alert();}, 50))** to let the execution of the 4D code finish and allow user interaction. 

#### Example 1 

This example of JavaScript code causes the previous URL to be displayed: 

```4d
 $result:=WA Evaluate JavaScript(MyWArea;"history.back()")
```

#### Example 2 

This example shows a few evaluations with conversion of the values received.

JavaScript functions placed in an HTML file:

```HTML
<!DOCTYPE html>
<html>
    <head>
        <script>
        function evalLong(){
            return 123;
        }
        function evalText(){
            return "456";
        }
        function evalObject(){
            return {a:1,b:"hello world"};
        }
        function evalDate(){
            return new Date();
        }
    </script>
    </head>
    <body>
        TEST PAGE
    </body>
</html>
```

In the 4D form method, you write:

```4d
 If(Form event code=On Load)
    WA OPEN URL(*;"Web Area";"C:\\myDatabase\\index.html")
 End if
```

You can then evaluate the JavaScript code from 4D:

```4d
 $Eval1:=WA Evaluate JavaScript(*;"Web Area";"evalLong()";Is longint)
  //$Eval1 = 123
  //$Eval1 = "123" if type is omitted
 $Eval2:=WA Evaluate JavaScript(*;"Web Area";"evalText()";Is text)
  //$Eval2 = "456"
 $Eval3:=WA Evaluate JavaScript(*;"Web Area";"evalObject()";Is object)
  //$Eval3 = {"a":1,"b":"hello world"}
 $Eval4:=WA Evaluate JavaScript(*;"Web Area";"evalDate()";Is date)
  // $Eval4 = 06/21/13
  // $Eval4 = "2013-06-21T14:45:09.694Z" if type is omitted
```

#### See also 

[WA EXECUTE JAVASCRIPT FUNCTION](wa-execute-javascript-function.md)  
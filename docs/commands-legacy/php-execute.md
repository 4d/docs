---
id: php-execute
title: PHP Execute
slug: /commands/php-execute
displayed_sidebar: docs
---

<!--REF #_command_.PHP Execute.Syntax-->**PHP Execute** ( *scriptPath* {; *functionName* {; *phpResult* {; *param*} {; *param2* ; ... ; *paramN*}}} ) : Boolean<!-- END REF-->
<!--REF #_command_.PHP Execute.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| scriptPath | Text | &#8594;  | Pathname to PHP script or<br/>"" to execute a PHP function |
| functionName | Text | &#8594;  | PHP function to be executed |
| phpResult | *, Variable, Field | &#8592; | Result of PHP function execution or * to not receive any result |
| param | Text, Boolean, Real, Integer, Date, Time | &#8594;  | Parameter(s) of PHP function |
| Function result | Boolean | &#8592; | True = execution correct<br/>False = execution error |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


:::info Compatibility

**PHP is deprecated in 4D**. It is now recommended to use the [`4D.SystemWorker class`](../API/SystemWorkerClass.md).

:::

#### Description 

<!--REF #_command_.PHP Execute.Summary-->The **PHP Execute** command can be used to execute a PHP script or function.<!-- END REF-->

Pass the pathname of the PHP script to be executed in the *scriptPath* parameter. This can be a relative pathname if the file is located next to the database structure or an absolute path. The pathname can be expressed in either the system syntax or POSIX syntax.   
If you want to execute a standard PHP function directly, pass an empty string ("") in *scriptPath*. The function name must be passed in the second parameter

Pass a PHP function name in the *functionName* parameter if you want to execute a specific function in the *scriptPath* script. If you pass an empty string or omit the *functionName* parameter, the script is entirely executed.

**Note:** PHP is case sensitive for function names. Do not use parentheses, just enter the function name only. 

The *phpResult* parameter receives the result of the execution of the PHP function. You can pass either:

* a variable, an array or a field in order to receive the result,
* the \* character if the function does not return any result or if you do not want to retrieve it.

The *phpResult* parameter can be of the Text, Longint, Real, Boolean, or Date type as well as (except for arrays) a field of the BLOB or Time type. 4D will carry out the conversion of the data and any adjustments needed according to the principles described in the *Conversion of data returned* section below. 

* If you passed a function name in the *functionName* parameter, *phpResult* will receive what the PHP developer returned with the **return** command from the body of the function.
* If you use the command without passing a function name in the *functionName* parameter, *phpResult* will receive what the PHP developer returned with the **echo** command (or a similar command).

If you call a PHP function that expects arguments, use the *param1...N* parameters to pass one or more values. The values must be separated by semi-colons. You can pass values of the Alpha, Text, Boolean, Real, Integer, Longint, Date or Time type. Pictures, BLOBs and Objects are not accepted. You can send an array; in this case, you must pass a pointer to the array to the [PHP Execute](php-execute.md) command, otherwise the current index of the array will be sent as an integer (see the example). The command accepts all types of arrays except for pointer, picture and 2D arrays.  
The *param1...N* parameters are sent in PHP in the JSON format in UTF-8\. They are automatically decoded with the PHP **json\_decode** command before being sent to the PHP *functionName* function.

**Note:** For technical reasons, the size of parameters passed via the FastCGI protocol must not exceed 64 KB. You need to take this limitation into account if you use parameters of the Text type. 

The command returns True if the execution has been carried out correctly on the 4D side, in other words, if the launching of the execution environment, the opening of the script and the establishing of the communication with the PHP interpreter were successful. Otherwise, an error is generated, which you can intercept with the [ON ERR CALL](on-err-call.md) command and analyze with [Last errors](last-errors.md) .   
In addition, the script itself may generate PHP errors. In this case, you must use the [PHP GET FULL RESPONSE](php-get-full-response.md) command in order to analyze the source of the error (see example 4). 

**Note:** PHP can be used to configure error management. For more information, please refer, for example, to the following page: <http://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting>.

##### Conversion of data returned 

The following table specifies how 4D interprets and converts data that is returned according to the type of the *phpResult* parameter.

| **Type of *phpResult parameter*** | **Processing by 4D**                                                                                                                                                                                                                             | **Example**                                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| BLOB                              | 4D recovers the data received without any modifications(\*).                                                                                                                                                                                     |                                                                                                          |
| Text                              | 4D expects data encoded in UTF-8 (\*). The PHP developer may need to use the PHP **utf8\_encode** command.                                                                                                                                       | Example of PHP script: echo utf8\_encode(myText)                                                         |
| Date                              | 4D expects a date sent as a string in the RFC 3339 format (sometimes called DATE\_ATOM in PHP). This format is of the type "YYYY-MM-DDTHH:MM:SS", for example: 2005-08-15T15:52:01+00:00\. 4D ignores the time part and returns the date in UTC. |                                                                                                          |
| Time                              | 4D expects a time sent as a string in the RFC 3339 format (see the Date type). 4D ignores the date part and returns the number of seconds elapsed since midnight while considering the date in the local time zone.                              | Example of PHP script for sending 2h30'45": echo date( DATE\_ATOM, mktime( 2,30,45))                     |
| Integer or Real                   | 4D interprets the numerical value expressed with numbers, the + or - sign and/or the exponent prefixed by 'e'. Any '.' or ',' character is interpreted as a decimal separator.                                                                   | Example of PHP script: echo -1.4e-16;                                                                    |
| Boolean                           | 4D returns True if it receives the string "true" from PHP or if the numerical evaluation gives a value that is not Null.                                                                                                                         | Example of PHP script: echo (a==b);                                                                      |
| Array                             | 4D considers that the PHP array was returned in the JSON format.                                                                                                                                                                                 | Example of PHP script for returning an array of two texts: echo json\_encode( array( "hello", "world")); |

(\*) By default, HTTP headers are not returned:  
\- If you use [PHP Execute](php-execute.md) by passing a function in the *functionName* parameter, HTTP headers are never returned in *phpResult*. They are only available through the [PHP GET FULL RESPONSE](php-get-full-response.md) command.  
\- If you use [PHP Execute](php-execute.md) without a function name (the *functionName* parameter is omitted or contains an empty string), you can return HTTP headers by setting the PHP raw result option to True using the [PHP SET OPTION](php-set-option.md) command.

**Note:** If you need to recover large volumes of data using PHP, it is usually more efficient to pass by the *stdOut* buffer (**echo** command or similar) rather than by the function return. For more information, refer to the description of the [PHP GET FULL RESPONSE](php-get-full-response.md) command. 

##### Using environment variables 

You can use the [SET ENVIRONMENT VARIABLE](set-environment-variable.md) command to specify the environment variables used by the script. Warning: after calling [LAUNCH EXTERNAL PROCESS](launch-external-process.md) or **PHP Execute**, the set of environment variables is erased.

##### Special functions 

4D provides the following special functions:

* **quit\_4d\_php**: used to quit the PHP interpreter and all its child processes. If at least one child process is executing a script, the interpreter does not quit and the PHP Execute command returns False.
* **relaunch\_4d\_php**: used to relaunch the PHP interpreter.

Note that the interpreter is relaunched automatically when the first request is sent by PHP Execute. 

#### Example 1 

Calling the "myPhpFile.php" script without any function. Here are the contents of the script:

```PHP

```

The following 4D code:

```4d
 var $result : Text
 var $isOK : Boolean
 $isOK:=PHP Execute("C:\\php\\myPhpFile.php";"";$result)
 ALERT($Result)
```

... will display the current PHP version.

#### Example 2 

Calling the *myPhpFunction* function in the "myNewScript.php" script with parameters. Here are the contents of the script:

```PHP

```

Calling with function:

```4d
 var $result : Text
 var $param1 : Text
 var $param2 : Text
 var $isOk : Boolean
 $param1 :="Hello"
 $param2 :="4D world!"
 $isOk:=PHP Execute("C:\\MyFolder\\myNewScript.php";"myPhpFunction";$result;$param1;$param2)
 ALERT($result) // Displays "Hello 4D world!"
```

#### Example 3 

Quitting the PHP interpreter:

```4d
 $ifOk:=PHP Execute("";"quit_4d_php")
```

#### Example 4 

Error management:

```4d
  // Installation of the error-management method
 phpCommError:="" // Modified by PHPErrorHandler
 $T_saveErrorHandler :=Method called on error
 ON ERR CALL("PHPErrorHandler")

 // Execution of script
 var $T_result : Text
 If(PHP Execute("C:\\MyScripts\\MiscInfos.php";"";$T_result))
  // No error, $T_Result contains the result
 Else
  // An error is detected, managed by PHPErrorHandler
    If(phpCommError="")
       ... // PHP error, use PHP GET FULL RESPONSE
    Else
       ALERT(phpCommError)
    End if
 End if
 
  // Uninstalling method
 ON ERR CALL($T_saveErrorHandler)


```

The PHP\_errHandler method is as follows:

```4d
 phpCommError:=""
 GET LAST ERROR STACK(arrCodes;arrComps;arrLabels)
 For($i;1;Size of array(arrCodes))
    phpCommError:=phpCommError+String(arrCodes{$i})+" "+arrComps{$i}+" "+
    arrLabels{$i}+Char(Carriage return)
 End for
```

#### Example 5 

Dynamic creation by 4D of a script before its execution:

```4d
 DOCUMENT TO BLOB("C:\\Scripts\\MyScript.php";$blobDoc)
 If(OK=1)
    $strDoc:=BLOB to text($blobDoc;UTF8 text without length)
 
    $strPosition:=Position("function2Rename";$strDoc)
 
    $strDoc:=Insert string($strDoc;"_v2";Length("function2Rename")+$strPosition)
 
    TEXT TO BLOB($strDoc;$blobDoc;UTF8 text without length)
    BLOB TO DOCUMENT("C:\\Scripts\\MyScript.php";$blobDoc)
    If(OK#1)
       ALERT("Error on script creation")
    End if
 End if
```

The script is then executed:

```4d
 $err:=PHP Execute("C:\\Scripts\\MyScript.php";"function2Rename_v2";*)
```

#### Example 6 

Direct retrieval of a Date and Time type value. Here are the contents of the script:

```PHP

```

Receiving the date on the 4D side:

```4d
 var $phpResult_date : Date
 $result :=PHP Execute("C:\php_scripts\ReturnDate.php";"";$phpResult_date)
  //$phpResult_date is !05/04/2009 !
 
 var $phpResult_time : Time
 $result :=PHP Execute("C:\php_scripts\ReturnDate.php";"";$phpResult_time)
  //$phpResult_time is ?01 :02 :03 ?
```

#### Example 7 

Distribution of data in arrays:

```4d
 ARRAY TEXT($arText ;0)
 ARRAY LONGINT($arLong ;0)
 $p1 :=","
 $p2 :="11,22,33,44,55"
 $phpok :=PHP Execute("";"explode";$arText;$p1;$p2)
 $phpok :=PHP Execute("";"explode";$arLong;$p1;$p2)
 
  // $arText contains the Alpha values "11", "22", "33", etc.
  // $arLong contains the numbers, 11, 22, 33, etc.
```

#### Example 8 

Initialization of an array:

```4d
 ARRAY TEXT($arText ;0)
 $phpok :=PHP Execute("";"array_pad";$arText;->$arText;50;"undefined")
  // Execute in PHP: $arrTest = array_pad($arrTest, 50, ’undefined’);
  // Fills the $arText array with 50 "undefined" elements
```

#### Example 9 

Passing of parameters via an array:

```4d
 ARRAY INTEGER($arInt;0)
 $phpok :=PHP Execute("";"json_decode";$arInt;"[13,51,69,42,7]")
  // Execute in PHP: $arInt = json_decode(’[13,51,69,42,7]’);
  // Fills the array with the initial values
```

#### Example 10 

Here is an example of the basic use of the trim function, to remove extra spaces and/or invisible characters from the beginning and end of a string:

```4d
 var $T_String : Text
 $T_String:="   Hello  "
 var $B : Boolean
 $B:=PHP Execute("";"trim";$T_String;$T_String)
```

For more information concerning the trim function, please refer to the PHP documentation.

#### See also 

*Executing PHP scripts in 4D*  
[PHP GET FULL RESPONSE](php-get-full-response.md)  
[PHP SET OPTION](php-set-option.md)  
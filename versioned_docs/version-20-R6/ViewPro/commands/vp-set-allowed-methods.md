---
id: vp-set-allowed-methods
title: VP SET ALLOWED METHODS
---


<!-- REF #_method_.VP SET ALLOWED METHODS.Syntax -->
**VP SET ALLOWED METHODS** ( *methodObj* : Object) <!-- END REF -->


<!-- REF #_method_.VP SET ALLOWED METHODS.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|methodObj   |Object|->|Allowed methods in the 4D View Pro areas|<!-- END REF -->

>**Compatibility**  

>
>For greater flexiblity, it is recommended to use the [`VP SET CUSTOM FUNCTIONS`](vp-set-custom-functions.md) command which allows you to designate 4D formulas that can be called from 4D View Pro areas. As soon as `VP SET CUSTOM FUNCTIONS` is called, `VP SET ALLOWED METHODS` calls are ignored. 4D View Pro also supports 4D's generic `SET ALLOWED METHODS` command if neither `VP SET CUSTOM FUNCTIONS` nor `VP SET ALLOWED METHODS` are called, however using the generic command is not recommended.


#### Description

The `VP SET ALLOWED METHODS` command <!-- REF #_method_.VP SET ALLOWED METHODS.Summary -->designates the project methods that can be called in 4D View Pro formulas<!-- END REF -->. This command applies to all 4D View Pro areas initialized after its call during the session. It can be called multiple times in the same session to initialize different configurations.

By default for security reasons, if you do not execute the `VP SET ALLOWED METHODS` command, no method call is allowed in 4D View Pro areas -- except if 4D's generic `SET ALLOWED METHODS` command was used (see compatibility note). Using an unauthorized method in a formula prints a #NAME? error in the 4D View Pro area.

In the *methodObj* parameter, pass an object in which each property is the name of a function to define in the 4D View Pro areas:

|Property | | |Type |Description|
|---|---|---|---|---|
|`<functionName>` ||  |Object |Custom function definition. The `<functionName>` property name defines the name of the custom function to display in 4D View Pro formulas (no spaces allowed)|
||method|  |Text |(mandatory) Name of the existing 4D project method to allow|
||parameters|  |Collection of objects |Collection of parameters (in the order they are defined in the method). For more information, please refer to the [Parameters](../formulas.md#parameters) section.|
|||\[ ].name| Text| Name of a parameter to display for the `<functionName>`.**Note**: Parameter names must not contain space characters.|
|||\[ ].type| Number| Type of the parameter. Supported types:<li>`Is Boolean`</li><li>`Is collection`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>*type* can be omitted (except when at least one parameter is of collection type, in which case parameter's type declaration is mandatory). <br/> If *type* is omitted, by default the value is automatically sent with its type, except date or time values which are sent as an object.  If *type* is `Is object`, the object is sent in a `.value` property. See [Parameters](../formulas.md#parameters) section.
||summary | |Text |Function description to display in 4D View Pro|
||minParams|  |Number |Minimum number of parameters|
||maxParams|  |Number |Maximum number of parameters. Passing a number higher than the length of parameters allows declaring "optional" parameters with default type|

#### Example

You want to allow two methods in your 4D View Pro areas:

```4d
C_OBJECT($allowed)
$allowed:=New object //parameter for the command
 
$allowed.Hello:=New object //create a first simple function named "Hello"
$allowed.Hello.method:="My_Hello_Method" //sets the 4D method
$allowed.Hello.summary:="Hello prints hello world"
 
$allowed.Byebye:=New object //create a second function with parameters named "Byebye"
$allowed.Byebye.method:="My_ByeBye_Method"
$allowed.Byebye.parameters:=New collection
$allowed.Byebye.parameters.push(New object("name";"Message";"type";Is text))
$allowed.Byebye.parameters.push(New object("name";"Date";"type";Is date))
$allowed.Byebye.parameters.push(New object("name";"Time";"type";Is time))
$allowed.Byebye.summary:="Byebye prints a custom timestamp"
$allowed.Byebye.minParams:=3
$allowed.Byebye.maxParams:=3
 
VP SET ALLOWED METHODS($allowed)
```

After this code is executed, the defined functions can be used in 4D View Pro formulas:

![](../../assets/en/ViewPro/cmd_vpSetAllowedMethods.PNG)

> In 4D View Pro formulas, function names are automatically displayed in uppercase.

#### See also

[4D functions](../formulas.md#4d-functions)<br/>
[VP SET CUSTOM FUNCTIONS](vp-set-custom-functions.md)
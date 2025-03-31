---
id: formula-from-string
title: Formula from string
displayed_sidebar: docs
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R3|Support of *context* parameter |
|17 R6|Renamed New formula from string -> Formula from string|
|17 R3|Added|

</details>

<!-- REF #_command_.Formula from string.Syntax -->**Formula from string**( *formulaString* : Text ) : 4D.Function<br/>**Formula from string**( *formulaString* : Text ; *context* : Longint ) : 4D.Function<!-- END REF -->


<!-- REF #_command_.Formula from string.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|formulaString|Text|&#8594; |Text formula to be returned as object|
|context|Number|&#8594; |`sk execute in current database` (default) or `sk execute in host database`|
|Result|4D.Function|&#8592;|Native object encapsulating the formula|
<!-- END REF -->


#### Description

The `Formula from string` command <!-- REF #_command_.Formula from string.Summary -->creates a `4D.Function` object based upon the *formulaString* and, optionnally, a *context*<!-- END REF -->.  *formulaString* can be as simple as a single value or complex, such as a project method with parameters.

This command is similar to [`Formula`](formula.md), except that it handles a text-based formula and allows to define an execution context. It is usually recommended to use the `Formula` command, except if the original formula was expressed as text (e.g., stored externally in a JSON file), or if you want to create a formula in a host database while calling `Formula from string` from a component. Using syntax with tokens is highly advised with this command.

>Because local variable contents can not be accessed by name in compiled mode, they can not be used in *formulaString*. An attempt to access a local variable with `Formula from string` will result in an error (-10737).

If the formula is created in a component, you might consider using the *context* parameter. By default, since formulas are executed in the context in which they were created, it will not be able to call a variable, function, or a non-shared method of the host database. In this case, you can pass the `sk execute in host database` constant in the *context* parameter to execute the `4D.Function` object in the context of the host database. The following constants are available:

|Constant|Type|Description|
|---|---|----
|`sk execute in current database`|Integer|(default) The formula will be executed in the context it was created|
|`sk execute in host database`|Integer|The formula will be executed in the host database context|


#### Example

The following code will create a dialog accepting a formula in text format:

```4d
 var $textFormula : Text
 var $f : 4D.Function
 $textFormula:=Request("Please type a formula")
 If(ok=1)
    $f:=Formula from string($textFormula)
    ALERT("Result = "+String($f.call()))
 End if
```

![](../assets/en/API/formulaDialog.png)


...and execute the formula:


![](../assets/en/API/formulaAlert.png)




#### See also 

[Formula](formula.md)  
[Parse formula](../commands-legacy/parse-formula.md)  




#### Properties

|  |  |
| --- | --- |
| Command number | 1601 |
| Thread safe | &check; |



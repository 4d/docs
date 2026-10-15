---
id: defer
title: defer
slug: /commands/defer
displayed_sidebar: docs
---

<!--REF #_command_.defer.Syntax-->**defer** ( *exitFormula* : Expression )<!-- END REF-->
<!--REF #_command_.defer.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| exitFormula | Expression | &#8594;  | Expression to be executed at exit|
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R4|Created|

</details>
</div>

## Description 

<!--REF #_command_.defer.Summary-->The `defer` command declares an *exitFormula* expression that will always be executed when the method or function exits, even if an error has been thrown or a `return` has been executed<!-- END REF-->. Using a `defer` command allows you to ensure that a method or function ends correctly by executing completion code on exit. In addition, this command saves you from having to duplicate the same exit code for every return or catch block.

:::tip Related blog post

[Streamline Your Clean-Up Code with the “defer” Command](https://blog.4d.com/streamline-your-clean-up-code-with-the-defer-command)

:::


The `defer` command can be called anywhere in the method or function code, and you can insert as many `defer` expressions as you want in the code. During execution, all encountered *exitFormula* expressions are stacked. When the code execution stops, whatever the reason (normal flow, break, error, user abort, return...), all expressions in the "deferred stack" are popped and executed in LIFO (*Last In First Out)* order. 

For example:

```4d
defer(ALERT("1"))
defer(ALERT("2"))
// At exit, alerts will display "2" and then "1"
```

In *exitFormula*, you pass the expression that you want to be evaluated upon method or function exit, whatever the way it exited. Behind the scenes, every time a `defer` is called, 4D converts *exitFormula* into a [formula](../../commands/formula) and adds it to a stack associated with the method or function. When the method or function ends, all formulas stored in the stack are evaluated in the order they appear in the collection. 

For debugging purposes, you can get the current stack of formulas at any moment using the [`Deferred formulas`](../../commands/deferred-formulas) command. 

As for all [formulas](../../commands/formula), if the *exitFormula* expression uses local variables, their current values are copied and stored in the formula object returned **when it is put in the *deferred stack***. When executed, the formula uses these copied values rather than the current values of the local variables. 

:::note Notes

- Keep in mind that local variables store **references** for [object](../../Concepts/dt_object.md#assignment) and [collection](../../Concepts/dt_collection.md#assignment) values.  
- If *exitFormula* contains another `defer` statement, an error is thrown. 

:::

If the *exitFormula* expression throws an error, it is automatically intercepted and ignored and the execution flow continues without any interruption. 



## Example 1

These examples illustrate the various supported *exitFormula* expressions:

```4d
// Method call
defer(aMethod)

// Object function call
defer(myObject.aFunction(something))

// Singleton function call
defer(cs.aClass.me.aFunction(something))
```

## Example 2

You want to make sure an XML reference will be always properly released, to avoid potential memory leaks:

```4d
var $xmlRef:=DOM Create XML ref("theRoot")
defer(DOM CLOSE XML($xmlRef))
...
```

## Example 3 

You want to make sure the activity monitoring stops at the end of the method:

```4d
START MONITORING ACTIVITY(0.001;Activity all)
defer(STOP MONITORING ACTIVITY())
...
```

## Example 4 

You want to control your log generation:

```4d
$logRecording:=Get database parameter(Diagnostic log recording)
SET DATABASE PARAMETER(Diagnostic log recording; 1)
defer(SET DATABASE PARAMETER(Diagnostic log recording; $logRecording))

$logLevel:=Get database parameter(Diagnostic log level)
SET DATABASE PARAMETER(Diagnostic log level; Log trace)
defer(SET DATABASE PARAMETER(Diagnostic log level; $logLevel))
```

## See also 

[Deferred formulas](../commands/deferred-formulas)  
[Last errors](../commands/last-errors)  
[ON ERR CALL](../commands/on-err-call)  
[throw](../commands/throw)  

## Properties

|  |  |
| --- | --- |
| Command number | 1860 |
| Thread safe | yes |




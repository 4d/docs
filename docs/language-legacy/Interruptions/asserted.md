---
id: asserted
title: Asserted
slug: /commands/asserted
displayed_sidebar: docs
---

<!--REF #_command_.Asserted.Syntax-->**Asserted** ( *boolExpression* : Boolean {; *messageText* : Text} ) : Boolean<!-- END REF-->
<!--REF #_command_.Asserted.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| boolExpression | Boolean | &#8594;  | Boolean expression |
| messageText | Text | &#8594;  | Text of error message |
| Function result | Boolean | &#8592; | Result of evaluation of boolExpression |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|12|Created|

</details>
</div>

## Description 

<!--REF #_command_.Asserted.Summary-->The **Asserted** command has an operation similar to that of the [ASSERT](../commands/assert) command, with one difference in that it returns a value which is the result of the evaluation of the *boolExpression* parameter.<!-- END REF--> It therefore allows the use of an assertion during the evaluation of a condition (see the example). For more information about the operation of assertions and the parameters of this command, please refer to the description of the [ASSERT](../commands/assert) command.

**Asserted** accept a Boolean expression as a parameter and returns the result of the evaluation of this expression. If the expression is false and if the assertions are enabled (see the [SET ASSERT ENABLED](../commands/set-assert-enabled) command), the error -10518 is generated, exactly as for the [ASSERT](../commands/assert) command. If the assertions are disabled, **Asserted** returns the result of the expression that was passed without triggering an error.

**Note:** Like the [ASSERT](../commands/assert) command, **Asserted** works in interpreted and compiled mode. 

## Example 

Insertion of an assertion in the evaluation of an expression:

```4d
 READ WRITE([Table 1])
 LOAD RECORD([Table 1])
 If(Asserted(Not(Locked([Table 1]))))
  // This code triggers the error -10518 if the record is locked
    ...
 End if
```

## See also 

[ASSERT](../commands/assert)  
[Get assert enabled](../commands/get-assert-enabled)  
[SET ASSERT ENABLED](../commands/set-assert-enabled)  

## Properties

|  |  |
| --- | --- |
| Command number | 1132 |
| Thread safe | yes |
| Modifies variables | error |



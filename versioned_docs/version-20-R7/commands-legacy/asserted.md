---
id: asserted
title: Asserted
slug: /commands/asserted
displayed_sidebar: docs
---

<!--REF #_command_.Asserted.Syntax-->**Asserted** ( *boolExpression* {; *messageText*} ) : Boolean<!-- END REF-->
<!--REF #_command_.Asserted.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| boolExpression | Boolean | &#8594;  | Boolean expression |
| messageText | Text | &#8594;  | Text of error message |
| Function result | Boolean | &#8592; | Result of evaluation of boolExpression |

<!-- END REF-->

#### Description 

<!--REF #_command_.Asserted.Summary-->The **Asserted** command has an operation similar to that of the [ASSERT](assert.md) command, with one difference in that it returns a value which is the result of the evaluation of the *boolExpression* parameter.<!-- END REF--> It therefore allows the use of an assertion during the evaluation of a condition (see the example). For more information about the operation of assertions and the parameters of this command, please refer to the description of the [ASSERT](assert.md) command.

**Asserted** accept a Boolean expression as a parameter and returns the result of the evaluation of this expression. If the expression is false and if the assertions are enabled (see the [SET ASSERT ENABLED](set-assert-enabled.md) command), the error -10518 is generated, exactly as for the [ASSERT](assert.md) command. If the assertions are disabled, **Asserted** returns the result of the expression that was passed without triggering an error.

**Note:** Like the [ASSERT](assert.md) command, **Asserted** works in interpreted and compiled mode. 

#### Example 

Insertion of an assertion in the evaluation of an expression:

```4d
 READ WRITE([Table 1])
 LOAD RECORD([Table 1])
 If(Asserted(Not(Locked([Table 1]))))
  // This code triggers the error -10518 if the record is locked
    ...
 End if
```

#### See also 

[ASSERT](assert.md)  
[Get assert enabled](get-assert-enabled.md)  
[SET ASSERT ENABLED](set-assert-enabled.md)  
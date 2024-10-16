---
id: assert
title: ASSERT
slug: /commands/assert
displayed_sidebar: docs
---

<!--REF #_command_.ASSERT.Syntax-->**ASSERT** ( *boolExpression* {; *messageText*} )<!-- END REF-->
<!--REF #_command_.ASSERT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| boolExpression | Boolean | &#8594;  | Boolean expression |
| messageText | Text | &#8594;  | Text of error message |

<!-- END REF-->

#### Description 

<!--REF #_command_.ASSERT.Summary-->The **ASSERT** command evaluates the *boolExpression* assertion passed in parameter and, if it returns false, stops the code execution with an error message.<!-- END REF--> The command works in interpreted and compiled mode. 

If *boolExpression* is true, nothing happens. If it is false, the command triggers the error -10518 and displays by default the text of the assertion preceded by the message "Assert failed:". You can intercept this error via a method installed using the [ON ERR CALL](on-err-call.md) command, in order, for example, to provide info for a log file. 

Optionally, you can pass a *messageText* parameter to display a custom error message instead of the text of the assertion. 

An assertion is an instruction inserted in the code that is responsible for detecting any anomalies during its execution. The principle consists in verifying that an expression is true at a given moment and, should the opposite occur, to cause an exception. Assertions are above all used to detect cases that should usually not ever occur. They are mainly used to detect programming bugs. It is possible to globally enable or disable all the assertions of an application (for example according to the type of version) via the [SET ASSERT ENABLED](set-assert-enabled.md) command. For more information about assertions in programming, please refer to the article concerning them on Wikipedia: [http://en.wikipedia.org/wiki/Assertion\_(computing)](http://en.wikipedia.org/wiki/Assertion%5F%28computing%29)

#### Example 1 

Before carrying out operations on a record, the developer wants to make sure that it is actually loaded in read/write mode:

```4d
 READ WRITE([Table 1])
 LOAD RECORD([Table 1])
 ASSERT(Not(Locked([Table 1])))
  // triggers error -10518 if record is locked
```

#### Example 2 

An assertion can allow parameters passed to a project method to be tested in order to detect aberrant values. In this example, a custom warning message is used.

```4d
  // Method that returns the number of a client according to its name passed in $1
 var $1 : Text // Name of client
 ASSERT($1#"";"Search for a blank client name")
  // A blank name in this case is an aberrant value
  // If the assertion is false, the following will be displayed in the error dialog box:
  // "Assert failed: Search for a blank client name"
```

#### See also 

[Asserted](asserted.md)  
[Get assert enabled](get-assert-enabled.md)  
[SET ASSERT ENABLED](set-assert-enabled.md)  
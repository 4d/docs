---
id: execute-formula
title: EXECUTE FORMULA
slug: /commands/execute-formula
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE FORMULA.Syntax-->**EXECUTE FORMULA** ( *statement* )<!-- END REF-->
<!--REF #_command_.EXECUTE FORMULA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| statement | Text | &#8594;  | Code to be executed |

<!-- END REF-->

#### Description 

<!--REF #_command_.EXECUTE FORMULA.Summary-->**EXECUTE FORMULA** executes *statement* as a line of code.<!-- END REF--> This command is designed to be used when you need to evaluate expressions that can be built or modified by the user. 

The statement string must be one line. If *statement* is an empty string, **EXECUTE FORMULA** does nothing. The rule of thumb is that if the *statement* can be executed as a one-line method, then it will execute properly. Use **EXECUTE FORMULA** sparingly, as it can slow down execution speed. In a compiled database, the line of code is not compiled. This means that *statement* will be executed, but it will not have been checked by the compiler at compilation time.

**Note:** Executing formulas in compiled mode can be optimized using a cache (see *Cache for formulas in compiled mode* below).

The *statement* can include the following elements:

* a Call to a function (a project method that returns a value)
* a Call to a 4D command
* an Assignment

**Notes:** 

* If *statement* is a project method, it is recommended to use the [EXECUTE METHOD](execute-method.md) that allows you to pass parameters.
* It is not recommend to call any variable declaration in *statement* since it can generate conflicts in the code.

The formula can include process variables and interprocess variables. However, the statement cannot contain control of flow statements (If, While, etc.), because it must be in one line of code.

To ensure that the *statement* will be evaluated correctly regardless of the 4D language or version used, we recommend using the *token* syntax for elements whose name might vary between different versions (commands, tables, fields, constants). For example, to insert the [Current time](current-time.md) command, enter '**Current time:C178**'. For more information about this, refer to *Using tokens in formulas*. 

##### Cache for formulas in compiled mode 

For optimization purposes, each formula executed by **EXECUTE FORMULA** in compiled mode can be stored in a dedicated cache in memory. The formula is cached in tokenized form. Once it is placed in the cache, its subsequent executions are highly optimized since the tokenization step is bypassed. 

The cache size is zero by default (no cache); it needs to be created or adjusted using the [SET DATABASE PARAMETER](set-database-parameter.md) command. For example:

```4d
 SET DATABASE PARAMETER(Number of formulas in cache;0) //no cache for formulas
 SET DATABASE PARAMETER(Number of formulas in cache;3) //up to three formulas can be cached for each process
```

The **EXECUTE FORMULA** command uses the cache only when called from a compiled database or component.

#### Example 

You want to execute a formula including calls to 4D commands and tables. Since these elements could potentially be renamed, you can ensure correct execution in future versions of your application by using the token syntax as shown here:

```4d
 EXECUTE FORMULA("Year of:C25 ([Products:5]Creation_Date:2])+$add")
```

#### See also 

[Command name](command-name.md)  
[EDIT FORMULA](edit-formula.md)  
[SET DATABASE PARAMETER](set-database-parameter.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 63 |
| Thread safe | &check; |
| Forbidden on the server ||



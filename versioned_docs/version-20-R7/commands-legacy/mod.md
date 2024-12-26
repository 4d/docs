---
id: mod
title: Mod
slug: /commands/mod
displayed_sidebar: docs
---

<!--REF #_command_.Mod.Syntax-->**Mod** ( *number1* ; *number2* ) : Real<!-- END REF-->
<!--REF #_command_.Mod.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| number1 | Integer | &#8594;  | Number to divide |
| number2 | Integer | &#8594;  | Number to divide by |
| Function result | Real | &#8592; | Returns the remainder |

<!-- END REF-->

#### Description 

<!--REF #_command_.Mod.Summary-->The **Mod** command returns the remainder of the Integer division of *number1* by *number2*.<!-- END REF-->

* **Mod** accepts Integer, Long Integer, and Real expressions. However, if *number1* or *number2* are real numbers, the numbers are first rounded and then **Mod** is calculated.
* Be careful when using **Mod** with real numbers of a large size (above 2^31) since, in this case, its operation may reach the limits of the calculation capacities of standard processors.

You can also use the *%* operator to calculate the remainder.

**WARNING:** The *%* operator returns valid results with Integer and Long Integer expressions. To calculate the modulo of real values, you must use the **Mod** command.

#### Example 

The following example illustrates how the Mod function works with different arguments. Each line assigns a number to the *vlResult* variable. The comments describe the results:

```4d
 vlResult:=Mod(3;2) // vlResult gets 1
 vlResult:=Mod(4;2) // vlResult gets 0
 vlResult:=Mod(3.5;2) // vlResult gets 0
```


#### Properties

|  |  |
| --- | --- |
| Command number | 98 |
| Thread safe | &check; |



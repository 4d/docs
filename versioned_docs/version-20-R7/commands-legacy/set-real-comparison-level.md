---
id: set-real-comparison-level
title: SET REAL COMPARISON LEVEL
slug: /commands/set-real-comparison-level
displayed_sidebar: docs
---

<!--REF #_command_.SET REAL COMPARISON LEVEL.Syntax-->**SET REAL COMPARISON LEVEL** ( *epsilon* )<!-- END REF-->
<!--REF #_command_.SET REAL COMPARISON LEVEL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| epsilon | Real | &#8594;  | Epsilon value for real equality comparisons |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET REAL COMPARISON LEVEL.Summary-->The **SET REAL COMPARISON LEVEL** command sets the epsilon value used by 4D to compare real values and expressions for equality.<!-- END REF-->

A computer always performs approximative real computations; therefore, testing real numbers for equality should take this approximation into account. 4D does this when comparing real numbers by testing whether or not the difference between the two numbers exceeds a certain value. This value is called the **epsilon** and works this way: 

Given two real numbers *a* and *b*, if [Abs](abs.md)(a-b) is greater than the epsilon, the numbers are considered not equal; otherwise, the numbers are considered equal.

By default, 4D, sets the epsilon value to 10 power minus 6 (10^-6). Please note that the *epsilon* value should always be positive. Examples:

* *0.00001=0.00002* returns False, because the difference *0.00001* is greater than *10^-6*.
* *0.000001=0.000002* returns True, because the difference *0.000001* is not greater than *10^-6*.
* *0.000001=0.000003* returns False, because the difference *0.000002* is greater than *10^-6*.

Using **SET REAL COMPARISON LEVEL**, you can increase or decrease the epsilon value as you require.

**WARNING:** Typically, you will not need to use this command to change the default epsilon value.

**IMPORTANT:** Changing the epsilon only affects real comparison for equality. It has no effect on other real computations nor on the display of real values.

**Note:** The **SET REAL COMPARISON LEVEL** command has no effect on queries and sorts performed with fields of the Real type. It only applies the 4D language.

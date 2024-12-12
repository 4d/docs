---
id: random
title: Random
slug: /commands/random
displayed_sidebar: docs
---

<!--REF #_command_.Random.Syntax-->**Random**  : Integer<!-- END REF-->
<!--REF #_command_.Random.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Random number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Random.Summary-->Random returns a random integer value between 0 and 32,767 (inclusive).<!-- END REF-->

To define a range of integers from which the random value will be chosen, use this formula:

```4d
 (Random%(vEnd-vStart+1))+vStart
```

The value *vStart* is the first number in the range, and the value *vEnd* is the last.

#### Example 

The following example assigns a random integer between 10 and 30 to the *vlResult* variable:

```4d
 vlResult:=(Random%21)+10
```

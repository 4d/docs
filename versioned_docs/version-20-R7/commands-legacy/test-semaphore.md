---
id: test-semaphore
title: Test semaphore
slug: /commands/test-semaphore
displayed_sidebar: docs
---

<!--REF #_command_.Test semaphore.Syntax-->**Test semaphore** ( *semaphore* ) : Boolean<!-- END REF-->
<!--REF #_command_.Test semaphore.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| semaphore | Text | &#8594;  | Name of the semaphore to test |
| Function result | Boolean | &#8592; | True = the semaphore exists, False = the semaphore doesn’t exist |

<!-- END REF-->

#### Description 

<!--REF #_command_.Test semaphore.Summary-->The **Test semaphore** command tests for the existence of a semaphore.<!-- END REF-->

The difference between the [Semaphore](semaphore.md) function and the **Test semaphore** function is that **Test semaphore** doesn’t create the *semaphore* if it doesn’t exist. If the *semaphore* exists, the function returns **True**. Otherwise, it returns **False**. 

#### Example 

The following example allows you to know the state of a process (in our case, while modifying the code) without modifying *semaphore*:

```4d
 $Win:=Open window(x1;x2;y1;y2;-Palette window)
 Repeat
    If(Test semaphore("Encrypting code"))
       POSITION MESSAGE($x3;$y3)
       MESSAGE("Encrypting code being modified.")
    Else
       POSITION MESSAGE($x3;$y3)
       MESSAGE("Modification of the encrypting code authorized.")
    End if
 Until(StopInfo)
 CLOSE WINDOW
```

#### See also 

[CLEAR SEMAPHORE](clear-semaphore.md)  
[Semaphore](semaphore.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 652 |
| Thread safe | &check; |
| Forbidden on the server ||



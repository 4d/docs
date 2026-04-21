---
id: clear-semaphore
title: CLEAR SEMAPHORE
slug: /commands/clear-semaphore
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR SEMAPHORE.Syntax-->**CLEAR SEMAPHORE** ( *semaphore* : Text )<!-- END REF-->
<!--REF #_command_.CLEAR SEMAPHORE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| semaphore | Text | &#8594;  | Semaphore to clear |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.CLEAR SEMAPHORE.Summary-->**CLEAR SEMAPHORE** erases *semaphore* previously set by the [Semaphore](../commands/semaphore) function.<!-- END REF-->

As a rule, all semaphores that have been created should be cleared. If semaphores are not cleared, they remain in memory until the process that creates them ends. A process can only clear semaphores that it has created. If you try to clear a semaphore from within a process that did not create it, nothing happens.

## Example 

See the example for [Semaphore](../commands/semaphore).

## See also 

[Semaphore](../commands/semaphore)  
*Semaphores and signals*  
[Test semaphore](../commands/test-semaphore)  

## Properties

|  |  |
| --- | --- |
| Command number | 144 |
| Thread safe | yes |



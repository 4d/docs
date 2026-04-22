---
id: method-called-on-event
title: Method called on event
slug: /commands/method-called-on-event
displayed_sidebar: docs
---

<!--REF #_command_.Method called on event.Syntax-->**Method called on event**  : Text<!-- END REF-->
<!--REF #_command_.Method called on event.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Name of method called on event |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6.8.1|Created|

</details>
</div>

## Description 

<!--REF #_command_.Method called on event.Summary-->The **Method called on event** command returns the name of the method installed by the [ON EVENT CALL](../commands/on-event-call) command.<!-- END REF--> 

If no such method has been installed, an empty string ("") is returned.

## See also 

[ON EVENT CALL](../commands/on-event-call)  

## Properties

|  |  |
| --- | --- |
| Command number | 705 |
| Thread safe | no |



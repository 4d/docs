---
id: redraw
title: REDRAW
slug: /commands/redraw
displayed_sidebar: docs
---

<!--REF #_command_.REDRAW.Syntax-->**REDRAW** ( *aTable* : Table )<br/>**REDRAW** ( *object* : Field, Variable )<!-- END REF-->
<!--REF #_command_.REDRAW.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to redraw the subform |
| object | Field, Variable | &#8594;  | Field or Variable for which to redraw the area, or List box to be updated |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL Release 5|Modified|
|6.5|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.REDRAW.Summary-->When you use a method to change the value of a field displayed in a subform, you must execute REDRAW to ensure that the form is updated.<!-- END REF--> 

In the context of list boxes in selection mode, when the REDRAW statement is applied to a list box type object it refreshes the data that is displayed in the object. This statement must be called typically after data modification has occurred in the records of the selection. 

## See also 

[SET TIMER](../commands/set-timer)  

## Properties

|  |  |
| --- | --- |
| Command number | 174 |
| Thread safe | no |



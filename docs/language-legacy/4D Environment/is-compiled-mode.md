---
id: is-compiled-mode
title: Is compiled mode
slug: /commands/is-compiled-mode
displayed_sidebar: docs
---

<!--REF #_command_.Is compiled mode.Syntax-->**Is compiled mode** ({ * }) : Boolean<!-- END REF-->
<!--REF #_command_.Is compiled mode.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | Returns information about host database |
| Function result | Boolean | &#8592; | Compiled (True), Interpreted (False) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.Is compiled mode.Summary-->Is compiled mode tests whether you are running in compiled mode (True) or interpreted mode (False).<!-- END REF-->  
  
The optional *\** parameter is useful in the case of an architecture using components: it can be used to determine the database (host or component) for which you want to find out the running mode.  

* When the command is called from a component:  
   * If the *\** parameter is passed, the command returns [True](../commands/true) or [False](../commands/false) depending on the mode in which the host database is running,  
   * If the *\** parameter is not passed, the command returns [True](../commands/true) or [False](../commands/false) depending on the mode in which the component is running.
* When the command is called from a method of the host database, it returns [True](../commands/true) or [False](../commands/false) depending on the mode in which the host database is running.

## Example 

In one of your routines, you include debugging code useful only when you are running in interpreted mode, so surround this debugging code with a test that calls **Is compiled mode**:

```4d
  // ...
 If(Not(Is compiled mode))
  // Include debugging code here
 End if
  // ...
```

## See also 

[IDLE](../commands/idle)  
[Undefined](../commands/undefined)  

## Properties

|  |  |
| --- | --- |
| Command number | 492 |
| Thread safe | yes |


